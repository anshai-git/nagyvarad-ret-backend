import { Elysia } from 'elysia';

import AuthController from './auth.controller';

const AuthRouter = new Elysia()
    .post('/log-in', (context) => AuthController.logIn(context))
    .post('/log-out', (context) => AuthController.logIn(context));

export default AuthRouter;
