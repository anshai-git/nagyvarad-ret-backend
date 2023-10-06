import { CreateUserResponse } from "../../../common/model/response/create-user.response";
import { CreateUserRequest } from "../../../common/model/request/create-user.request";
import { ApiRequest } from "../../../common/api.request";
import UserService from './users.service';
import { ApiResponse } from "../../../common/api.response";
import { Option, match } from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
import { ApiError } from "../../../common/api.error";
import { ErrorCodes } from "../../../common/constants";

class UserController {

    async createUser(request: ApiRequest<CreateUserRequest>): Promise<ApiResponse<CreateUserResponse>> {
        const response: ApiResponse<CreateUserResponse> = UserService.createUser(request.payload)
            .then((response: CreateUserResponse) => {
                return ApiResponse.forSuccess(response);
            })
            .catch((error: Error) => {
                return ApiResponse.forFailure([new ApiError(ErrorCodes.API_ERROR, error.message)])
            })
            .finally(() => {
                console.log('create user request finished');
            })

        return response;
    }

    async getAllUsers() {

    }

    async deleteUser() {

    }

    async updateUser() {

    }
}

const instance: UserController = new UserController();
export default instance;
