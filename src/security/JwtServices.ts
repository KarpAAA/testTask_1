import UserService from "../services/UserServices"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
class JwtService {
    static secret: string = "Somesecretcode"
    async generateToken({username, password}: any){
        const user = UserService.findUserByUsername(username);
        if(user.password) {

            if(!await bcrypt.compare(password, user.password))
                throw new Error("Invalid password");

        }
        else {
            throw new Error("Bad username");
        }
        const payload = { username: user.username, role: user.role, email: user.email}
        return jwt.sign(payload, JwtService.secret);
    }

    async verifyToken(token: string){
        return jwt.verify(token, JwtService.secret);
    }
}
export default new JwtService();

