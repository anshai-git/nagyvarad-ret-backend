import { User } from "@prisma/client";
import prisma from "../prisma";
import { UserDTO } from "../model/dto/user.dto";
import { Option, fromNullable, none, some } from "fp-ts/lib/Option";

class UserRepository {
    public async findAll(): Promise<Array<User>> {
        const users = await prisma.user.findMany();
        return users.map(u => this.exclude(u, ['password']));
    }

    public async findByUsername(username: string): Promise<Option<User>> {
        const user: User | null = await prisma.user.findFirst({
            where: {
                username
            }
        })

        return fromNullable(user);
    }

    public async create(userDTO: UserDTO): Promise<Option<User>> {
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

    public async deleteById(id: number): Promise<any> {
        return prisma.user.delete({
            where: {
                id
            }
        });
    }

    private exclude<User, Key extends keyof User>(user: User, keys: Key[]): any {
      return Object.fromEntries(
        Object.entries(user as Object)
            .filter(([key]) => !(keys as string[]).includes(key))
      )
    }
}

const instance: UserRepository = new UserRepository();
export default instance;
