import { User } from "@prisma/client";
import { Option, isNone, isSome } from "fp-ts/lib/Option";
import { CreateUserRequest } from "../../../common/model/request/create-user.request";
import { CreateUserResponse } from "../../../common/model/response/create-user.response";
import UserRepository from '../../../common/repository/user.respository';
import { UserDTO } from "../../../common/model/dto/user.dto";
import { GetAllUsersReponse } from "../../../common/model/response/get-all-users.response";
import { DeleteUserReponse } from "../../../common/model/response/delete-user.response";

class UserService {

    public async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
        // Check if username already exists
        const userByUsername: Option<User> = await UserRepository.findByUsername(request.username);
    
        if (isSome(userByUsername)) {
            console.log(`username already exists: ${request.username}`);
            throw new Error(`username already exists: ${request.username}`);
        }

        const encryptedPassword: string = await Bun.password.hash(request.password);
        const user: Option<User> = await UserRepository.create(
            new UserDTO(request.username, encryptedPassword)
        );

        if (isNone(user)) {
            console.log(`Failed to create user with name: ${request.username}`);
            throw new Error(`Failed to create user with name: ${request.username}`);
        }

        return new CreateUserResponse(
            new UserDTO(user.value.username, '', user.value.id)
        );
    }

    public async getAllUsers(): Promise<GetAllUsersReponse> {
        const users: Array<User> = await UserRepository.findAll();
        return new GetAllUsersReponse(users);
    }

    public async updateUser(id: number, user: UserDTO): Promise<any> {
        throw new Error('Not implemented');
    }

    public async deleteUser(id: number): Promise<DeleteUserReponse> {
        const deletionResult: User = await UserRepository.deleteById(id);
        const user: UserDTO = new UserDTO(deletionResult.username, '', deletionResult.id);
        const response: DeleteUserReponse = new DeleteUserReponse(user);
        return response;
    }
}

const instance: UserService = new UserService();
export default instance;
