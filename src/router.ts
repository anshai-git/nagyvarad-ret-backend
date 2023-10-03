import { Elysia } from 'elysia';
import AuthRouter from './modules/auth/auth.router';
import DailyVerseRouter from './modules/public/daily-verse/daily-verse.router';
import AdminRouter from './modules/admin/admin.router';

const authRoutes: Elysia = new Elysia()
    .group('/auth',         app => app.use(AuthRouter));

const adminRoutes: Elysia = new Elysia()
    .group('/admin',        app => app.use(AdminRouter));

const publicRoutes: Elysia = new Elysia()
    .group('/daily-verse',  app => app.use(DailyVerseRouter));


const appRouter: Elysia = new Elysia()
    .use(authRoutes)
    .use(publicRoutes)
    .use(adminRoutes);

export default appRouter;
