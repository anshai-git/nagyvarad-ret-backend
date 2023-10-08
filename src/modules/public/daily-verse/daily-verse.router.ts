import { Elysia } from 'elysia';
import DailyVerseController from './daily-verse.controller';

const DailyVerseRouter: Elysia = new Elysia();

DailyVerseRouter
    .get('/', ({ query }) => DailyVerseController.getDailyVerseList(query))
    .get('/:date', ({ params }) => DailyVerseController.getByDate(params.date));

export default DailyVerseRouter;
