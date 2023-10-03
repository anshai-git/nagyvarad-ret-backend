import { Context, Elysia } from 'elysia';

import AdminController from './admin.controller';

const AdminRouter = new Elysia()
    .post('/create-user', (context: Context) => AdminController.createUser(context));

export default AdminRouter;
