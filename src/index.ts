import {ApolloServer} from 'apollo-server-express';
import typeDefs from "./graphql/TypeDef";
import {fruitMutations, fruitQueries} from "./graphql/resolvers/FruitResolvers";
import {vegetableMutations, vegetableQueries} from "./graphql/resolvers/VegetableResolvers";
import {userMutations, userQueries} from "./graphql/resolvers/UserResolvers";
import express from "express";
import allowedActionsForRoles from "./security/ActionToRoles";
import JwtServices from "./security/JwtServices";
import {GraphQLError} from 'graphql'

(async function startApolloServer() {
    const app: any = express();

    const resolvers = {
        Query: {
            ...fruitQueries,
            ...vegetableQueries,
            ...userQueries,
        },
        Mutation: {
            ...fruitMutations,
            ...vegetableMutations,
            ...userMutations
        }
    };

    const server = new ApolloServer(
        {
            typeDefs,
            resolvers,
            formatError: (e) => {
                return new GraphQLError(e.message);
            }
        },
    )

    app.use(express.json())
    app.use('/graphql', async (req: any, res: any, next: any) => {
        if (req.body.operationName !== 'IntrospectionQuery') {
            req.user = {role: "Unauthorized"}
            const token = req.headers['authorization']?.substring(7);
            if (token) {
                try {
                    req.user = await JwtServices.verifyToken(token);
                }
                catch (e) {
                    throw new GraphQLError('Forbidden', {
                        extensions: {
                            code: 403
                        },
                    });
                }
            }
        }
        next()
    })


    app.use('/graphql', (req: any, res: any, next: any) => {
        const action = req.body.operationName;

        if (action && action !== 'IntrospectionQuery') {
            // console.log("action", action);
            // console.log("user", req.user);

            if (!allowedActionsForRoles[req.user.role].includes(action)) {

                throw new GraphQLError('Forbidden', {
                    extensions: {
                        code: 403
                    },
                });
            }
        }
        next()
    })

    await server.start();
    server.applyMiddleware({app})

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/graphql`);
    });

})()




