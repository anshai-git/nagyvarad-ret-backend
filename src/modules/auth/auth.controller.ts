import { Option, isSome } from 'fp-ts/lib/Option';
import { ApiError } from '../../common/api.error';
import { ApiResponse } from '../../common/api.response';
import { ErrorCodes } from '../../common/constants';
import { LogInResponse } from '../../common/model/response/log-in.response';
import AuthService from './auth.service';
import { Context } from 'elysia';
import { AuthToken } from '../../common/model/auth-token';

class AuthController {

    async logIn(context: Context): Promise<ApiResponse<LogInResponse>> {
        const credentials = {};
        const response: ApiResponse<LogInResponse> = AuthService.logIn(credentials)
            .then((token: Option<AuthToken>) => {
                if(!this.isTokenValid(token)) throw new ApiError(ErrorCodes.API_ERROR,'invalid token generated');
                
                const logInResponse: LogInResponse = new LogInResponse(token);
                return ApiResponse.forSuccess(logInResponse);
            })
            .catch((error: Error) => {
                if(error instanceof ApiError) {
                    return ApiResponse.forFailure([error]);
                }
                return ApiResponse.forFailure([new ApiError('', 'something went wrong')]);
            })

        return response;
    }

    isTokenValid(token: Option<AuthToken>): boolean {
        return isSome(token)&&
            token.value !== null &&
            token.value.value !== null &&
            token.value.value !== '';
    }

}

const instance = new AuthController();
export default instance;
