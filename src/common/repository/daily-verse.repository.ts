import { DailyVerse } from '@prisma/client';
import prisma from '../prisma';
import { Option, fromNullable } from 'fp-ts/lib/Option';
import { DailyVerseDTO } from '../model/dto/daily-verse.dto';

class DailyVerseRepository {

    async fetchByDate(date: Date): Promise<Option<DailyVerse>> {
        return fromNullable(
            await prisma.dailyVerse.findFirst({
                where: {
                    date: date
                }
            }));
    }

    async save(dailyVerseDTO: DailyVerseDTO): Promise<Option<DailyVerse>> {
        const result = await prisma.dailyVerse.create({
            data: {
                ...dailyVerseDTO
            }
        });

        return fromNullable(result);
    }

    async fetchPageByDate(startDate: Date, pageSize: number, pageIndex: number): Promise<Array<DailyVerse>> {
        const result: Array<DailyVerse> = await prisma.dailyVerse.findMany({
            where: {
                date: {
                    lte: startDate
                }
            },
            orderBy: [
                {
                    date: 'desc'
                }
            ],
            skip: pageSize * (pageIndex - 1),
            take: pageSize
        })
        console.log({ result });
        return result;
    }
}

const instance: DailyVerseRepository = new DailyVerseRepository();
export default instance;
