import User from "../models/User";
import bcrypt from "bcrypt"
import Role from "../models/Role";

class UserServices {
    users: User[] = [
        {username: "KarpA", password: "123", email: "admin@", id: "1", role: Role.FruitJohn}
    ]


    getUsers() {
        return this.users;
    }

    findUserByUsername(username: string) {
        const user = this.users.find(user => user.username === username);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }

    async addUser(user: User) {
        user.password = await bcrypt.hash(user.password, 12);
        user.role = user.role as Role;
        user.id = Date.now().toString();

        const newLen = this.users.push(user)
        return this.users[newLen - 1];
    }

    deleteUserById(userId: string): boolean {
        const initialLength = this.users.length;
        this.users = this.users.filter(user => user.id !== userId);

        return this.users.length !== initialLength;
    }
}

export default new UserServices();