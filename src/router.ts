import { Elysia } from 'elysia';

import AuthRouter from './auth/auth.router';
import DailyVerseRouter from './public/daily-verse/daily-verse.router';
import AdminRouter from './admin/admin.router';

const publicRouter: Elysia = new Elysia()
    .group('/auth',         app => app.use(AuthRouter))
    .group('/daily-verse',  app => app.use(DailyVerseRouter));

const adminRouter: Elysia = new Elysia()
    .group('/admin',        app => app.use(AdminRouter));

const appRouter: Elysia = new Elysia()
    .use(publicRouter)
    .use(adminRouter);

export default appRouter;
