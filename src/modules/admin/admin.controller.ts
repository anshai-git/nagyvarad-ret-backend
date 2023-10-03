import { Context } from 'elysia';
import AdminService from './admin.service';

function createUser(context: Context) {
    const userData = {};
    return AdminService.createUser(userData)
}

export default {
    createUser
}
