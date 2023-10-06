import { UserDTO } from "../dto/user.dto";

export class CreateUserResponse {
    constructor(
        public user: UserDTO
    ) {}
}
