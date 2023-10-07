import { UserDTO } from "../dto/user.dto";

export class DeleteUserReponse {
    constructor(
        public deletedUser: UserDTO
    ) {}
}
