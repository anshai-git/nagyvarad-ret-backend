import AuthService from './auth.service';
import { Credentials } from '../../common/model/credentials';
import { LogInRequest } from '../../common/model/request/log-in.request';
import { ApiRequest } from '../../common/api.request';
import { ApiResponse } from '../../common/api.response';
import { LogInResponse } from '../../common/model/response/log-in.response';

class AuthController {
    async logIn(request: ApiRequest<LogInRequest>): Promise<ApiResponse<LogInResponse | null>> {
        const credentials: Credentials = new Credentials(request.payload.username, request.payload.password);
        return AuthService.logIn(credentials)
            .then(ApiResponse.forSuccess)
            .catch(error => {
                // TODO: transform to real logging
                console.log(error);
                return ApiResponse.fromError(error);
            })
            .finally(() => console.log('log in request finished'))
    }
}

const instance = new AuthController();
export default instance;
