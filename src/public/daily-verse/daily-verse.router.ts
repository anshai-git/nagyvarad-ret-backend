import { Elysia } from 'elysia';
import DailyVerseController from './daily-verse.controller';

const DailyVerseRouter: Elysia = new Elysia();

DailyVerseRouter.get('/by-date', (c) => DailyVerseController.getByDate(c));

export default DailyVerseRouter;
