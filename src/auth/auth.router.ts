import { Elysia } from 'elysia';

import AuthController from './auth.controller';

const AuthRouter = new Elysia()
    .get('/log-in', (context) => AuthController.logIn(context));

export default AuthRouter;
