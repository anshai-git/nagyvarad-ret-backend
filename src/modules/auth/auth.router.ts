import { Elysia, t } from 'elysia';
import AuthController from './auth.controller';

const AuthRouter = new Elysia()
    .post('/log-in', ({ body }) => AuthController.logIn(body),
        {
            body: t.Object({
                payload: t.Object({
                    username: t.String(),
                    password: t.String()
                })
            })
        })
// .post('/log-out', (context) => AuthController.logIn(context));

export default AuthRouter;
