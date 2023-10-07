import { Option, isNone } from "fp-ts/lib/Option";
import { Credentials } from "../../common/model/credentials";
import UserRpository from '../../common/repository/user.respository';
import { User } from "@prisma/client";
import JwtUtil from '../../common/util/jwt.util';
import { LogInResponse } from "../../common/model/response/log-in.response";

class AuthService {
    async logIn(credentials: Credentials): Promise<LogInResponse> {
        const user: Option<User> = await UserRpository.findByUsername(credentials.username);
        if (isNone(user)) {
            console.log('INVALID_USERNAME', `User with username: ${credentials.username}`);
            throw new Error('INVALID_USERNAME');
        }

        const isPasswordValid = await Bun.password.verify(credentials.password, user.value.password);
        if (!isPasswordValid) {
            console.log('INVALID_PASSWORD', `Invalid password provided, please try again`);
            throw new Error('INVALID_PASSWORD');
        }

        const authToken = await JwtUtil.createAuthToken({ username: user.value.username });
        return new LogInResponse(authToken);
    }

    async authenticateRequest(request: any): Promise<any> {
        const authToken = request.headers?.authorization?.slice(7);
        const isAuthTokenValid = await JwtUtil.isAuthTokenValid(authToken)
        console.log({ isAuthTokenValid });
        // TODO: return unauthorized http statis code if the token is not valid
        if (!isAuthTokenValid) return new Response();
    }
}

const instance: AuthService = new AuthService();
export default instance;
