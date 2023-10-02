import { DailyVerse } from '@prisma/client';
import prisma from '../prisma';
import { Option, fromNullable } from 'fp-ts/lib/Option';
import { DailyVerseDTO } from '../model/dto/daily-verse.dto';

async function fetchByDate(date: Date): Promise<Option<DailyVerse>> {
    return fromNullable(
        await prisma.dailyVerse.findFirst({
            where: {
                date: date
            }
    }));
}

async function save(dailyVerseDTO: DailyVerseDTO): Promise<any> {
    const result = await prisma.dailyVerse.create({
        data: {
            ...dailyVerseDTO
        }
    });

    console.log({ result })

    return null;
}


export default {
    fetchByDate,
    save
}
