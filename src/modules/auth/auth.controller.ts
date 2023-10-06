import { Option, getOrElse, isSome } from 'fp-ts/lib/Option';
import { ApiError } from '../../common/api.error';
import { ApiResponse } from '../../common/api.response';
import { ErrorCodes } from '../../common/constants';
import { LogInResponse } from '../../common/model/response/log-in.response';
import AuthService from './auth.service';
import { Context } from 'elysia';
import { AuthToken } from '../../common/model/auth-token';
import { Credentials } from '../../common/model/credentials';
import { LogInRequest } from '../../common/model/request/log-in.request';
import { ApiRequest } from '../../common/api.request';
import { pipe } from 'fp-ts/lib/function';

class AuthController {

    async logIn(request: ApiRequest<LogInRequest>): Promise<ApiResponse<LogInResponse | null>> {
        const credentials: Credentials = new Credentials(request.payload.username, request.payload.password);
        const response: Promise<ApiResponse<LogInResponse | null>> = AuthService.logIn(credentials)
            .then((token) => {
                const authToken: string | null = pipe(
                    token,
                    getOrElse(() => null)
                )
                if(!this.isTokenValid(authToken)) throw new ApiError(ErrorCodes.API_ERROR,'invalid token generated');
                const logInResponse: LogInResponse = new LogInResponse(authToken);
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
