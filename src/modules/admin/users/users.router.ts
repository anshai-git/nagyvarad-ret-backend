import { Elysia, t } from 'elysia';
import UserController from './users.controller';

const UserRouter: Elysia = new Elysia();

UserRouter
    .post('', ({ body }) => UserController.createUser(body), {
        body: t.Object({
            payload: t.Object({
                username: t.String(),
                password: t.String()
            })
        })
    });

export default UserRouter;

