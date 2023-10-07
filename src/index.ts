import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { cors } from '@elysiajs/cors';
import router from './router';

const PORT          = process.env.PORT;
const JWT_SECRET    = process.env.JWT_SECRET;

if(!PORT)       throw new Error('env variable missing: "PORT"');
if(!JWT_SECRET) throw new Error('env variable missing: "JWT_SECRET"');

const app: Elysia = new Elysia()
    .use(cors())
    .use(swagger())
    .use(router)
    .listen(PORT);

console.log( `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
