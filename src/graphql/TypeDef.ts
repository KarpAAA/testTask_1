import {gql} from "apollo-server";

export default gql`
type Query{
    fruitById(fruitId: ID): Fruit
    fruits:[Fruit]
    
    vegetableById(vegetableId: ID): Vegetable
    vegetables:[Vegetable]
    
    users: [User]
    generateToken(username: String, password: String): String
}

type Mutation{
    createFruit(fruitArgs: FruitTypeCreate!): Fruit
    editFruit(fruitArgs: FruitTypeEdit!): Fruit
    removeFruit(fruitId: ID!): SuccessResult
    
    createVegetable(vegetableArgs: VegetableCreateType!): Vegetable
    editVegetable(vegetableArgs: VegetableEditType!): Vegetable
    removeVegetable(vegetableId: ID!): SuccessResult
    
    userCreate(user: UserCreateType!): User
    userDelete(userId: ID!): SuccessResult
}


#vegerables
input VegetableCreateType {
    name: String!
    price: Float!
}

input VegetableEditType {
    id: ID!
    name: String!
    price: Float!
}

type Vegetable {
    id: ID
    name: String!
    price: Float!
}

#fruits
input FruitTypeCreate {
    name: String!
    price: Float!
}

input FruitTypeEdit {
    id: ID!
    name: String
    price: Float
}


type Fruit {
    id: ID!,
    name: String!
    price: Float!
}

#generall
type SuccessResult {
    message: String
    code: Int
}

#user

type User {
    id: String
    password: String
    username: String
    email: String
    role: String
}

input UserCreateType {
    username: String!
    password: String!
    email: String
    role: String!
}

`;


