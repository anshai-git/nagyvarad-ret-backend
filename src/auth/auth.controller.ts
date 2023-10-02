import AuthService from './auth.service';
import { Context } from 'elysia';

const logIn = (context: Context)  => {
    const credentials = {};
    return AuthService.logIn(credentials)
}

export default {
    logIn
}
