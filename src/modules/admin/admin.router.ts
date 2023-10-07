import { Context, Elysia } from 'elysia';

import UserRouter from './users/users.router';

const AdminRouter = new Elysia()
    .group('/user', app => app.use(UserRouter));

export default AdminRouter;
