import { Elysia, t } from 'elysia';
import UserController from './users.controller';
import AuthService from '../../auth/auth.service';

const UserRouter: Elysia = new Elysia();

UserRouter
    .get('', () => UserController.getAllUsers(), { beforeHandle: AuthService.authenticateRequest })
    .post('', ({ body }) => UserController.createUser(body), {
        body: t.Object({
            payload: t.Object({
                username: t.String(),
                password: t.String()
            })
        })
    })
    .patch('/:id', ({ body, params: { id } }) => UserController.updateUser(+id, body.payload), {
        body: t.Object({
            payload: t.Object({
                username: t.String()
            })
        })
    })
    .delete('/:id', ({ params: { id }}) => UserController.deleteUser(+id))

export default UserRouter;

