import { UserDTO } from '../dto/user.dto';

export class GetAllUsersReponse {
    constructor(
        public users: Array<UserDTO>
    ) {}
}
