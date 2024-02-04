import userServices from "../../services/UserServices";
import jwtServices from "../../security/JwtServices";

export const userMutations  = {
    userCreate: async (_, {user}) => await userServices.addUser(user),
    userDelete: (_, {userId}) => userServices.deleteUserById(userId),
}

export const userQueries = {
    users: () => userServices.getUsers(),
    generateToken: async (_, {username, password}) =>
        await jwtServices.generateToken({username, password})

}