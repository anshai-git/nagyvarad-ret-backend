export class UserDTO {
    constructor(
        public username: string,
        public password?: string,
        public id?: number,
    ) {}
}
