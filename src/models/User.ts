import Role from "./Role";

export default interface User{
    id: string;
    username: string
    password: string
    email: string
    role: Role
}