import { User } from "@prisma/client";
import { Option, getOrElse, isNone, match, none, some } from "fp-ts/lib/Option";
import { CreateUserRequest } from "../../../common/model/request/create-user.request";
import { CreateUserResponse } from "../../../common/model/response/create-user.response";
import UserRepository from '../../../common/repository/user.respository';
import { UserDTO } from "../../../common/model/dto/user.dto";
import { pipe } from "fp-ts/lib/function";
import { map } from "fp-ts/lib/pipeable";

class UserService {

    public async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
        const encryptedPassword: string = await Bun.password.hash(request.password);
        const user: Option<User> = await UserRepository.create(
            new UserDTO(request.username, encryptedPassword)
        );
        
        if (isNone(user)) {
            throw new Error(`Failed to create user with name: ${request.username}`)
        }

        return new CreateUserResponse(
            new UserDTO(user.value.username, '', user.value.id)
        );
    }

    public async getAllUsers() {

    }

    public async deleteUser() {

    }

    public async updateUser() {

    }
}

const instance: UserService = new UserService();
export default instance;
