import DailyVerseService from './daily-verse.service';
import { Context } from "elysia";

function getByDate(context: Context) {
    const date = new Date();
    return DailyVerseService.getByDate(date);
}

export default {
    getByDate
}
