import { CreateUserResponse } from "../../../common/model/response/create-user.response";
import { CreateUserRequest } from "../../../common/model/request/create-user.request";
import { ApiRequest } from "../../../common/api.request";
import UserService from './users.service';
import { ApiResponse } from "../../../common/api.response";
import { GetAllUsersReponse } from "../../../common/model/response/get-all-users.response";
import { DeleteUserReponse } from "../../../common/model/response/delete-user.response";
import { UserDTO } from "../../../common/model/dto/user.dto";

class UserController {

    async createUser(request: ApiRequest<CreateUserRequest>): Promise<ApiResponse<CreateUserResponse | null>> {
        return UserService.createUser(request.payload)
            .then(ApiResponse.forSuccess)
            .catch(ApiResponse.fromError)
            .finally(() => console.log('create user request finished'))
    }

    async getAllUsers(): Promise<ApiResponse<GetAllUsersReponse | null>> {
        return UserService.getAllUsers()
            .then(ApiResponse.forSuccess)
            .catch(ApiResponse.fromError)
            .finally(() => console.log('get all users finished'))
    }

    async deleteUser(id: number): Promise<ApiResponse<DeleteUserReponse | null>> {
        return UserService.deleteUser(id)
            .then(ApiResponse.forSuccess)
            .catch(ApiResponse.fromError)
            .finally(() => console.log('delete user by id finished'))
    }

    async updateUser(id: number, user: UserDTO): Promise<any> {
        return UserService.updateUser(id, user)
            .then(ApiResponse.forSuccess)
            .catch(ApiResponse.fromError)
            .finally(() => console.log('delete user by id finished'))
    }
}

const instance: UserController = new UserController();
export default instance;
