import { Option, some } from "fp-ts/lib/Option";

class AuthService {

    async logIn(credentials): Promise<Option<AuthToken>> {
        return some({
            token: 'test_auth_token'
        })
    }

}

const instance: AuthService = new AuthService();
export default instance;
