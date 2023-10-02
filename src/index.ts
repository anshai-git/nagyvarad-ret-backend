import { Elysia } from 'elysia';

import { swagger } from '@elysiajs/swagger';
import { cors } from '@elysiajs/cors';
import router from './router';

const PORT = process.env.PORT ?? 3000;

const app: Elysia = new Elysia()
    .use(cors())
    .use(swagger())
    .use(router)
    .listen(PORT);

console.log( `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
