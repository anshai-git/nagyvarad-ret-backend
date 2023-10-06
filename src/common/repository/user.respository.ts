import { User } from "@prisma/client";
import prisma from "../prisma";
import { UserDTO } from "../model/dto/user.dto";
import { Option, none, some } from "fp-ts/lib/Option";

class UserRepository {
    async findAll(): Promise<Array<User>> {
        return prisma.user.findMany()
    }

    async create(userDTO: UserDTO): Promise<Option<User>> {
        if (userDTO.password == '' || userDTO.password == null) return none;

        try {
            const user: User = await prisma.user.create({
                data: {
                    username: userDTO.username,
                    password: userDTO.password
                }
            });

            return some(user);
        } catch(error) {
            // TODO: Log 'could not save user' + error
            return none;
        }
    }
}

const instance: UserRepository = new UserRepository();
export default instance;
