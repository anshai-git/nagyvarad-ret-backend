import { Option, some } from "fp-ts/lib/Option";
import { Credentials } from "../../common/model/credentials";
import { AuthToken } from "../../common/model/auth-token";

class AuthService {

    async logIn(credentials: Credentials): Promise<Option<AuthToken | null>> {
        return some(new AuthToken('auth_token'));
    }

}

const instance: AuthService = new AuthService();
export default instance;
