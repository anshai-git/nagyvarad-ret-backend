import { DailyVerseScraper } from '../../common/daily-verse/daily-verse-scraper';
import { DailyVerseProvider } from '../../common/daily-verse/daily-verse-provider';
import { DailyVerseDTO } from '../../common/model/dto/daily-verse.dto';
import DailyVerseRepository from '../../common/repository/daily-verse.repository';
import { isNone } from 'fp-ts/lib/Option';
import { DailyVerse } from '@prisma/client';
import dailyVerseRepository from '../../common/repository/daily-verse.repository';
import moment from 'moment';

const dailyVerseProvider: DailyVerseProvider = new DailyVerseScraper();

async function getByDate(date: Date): Promise<any> {
    const fromDB = await DailyVerseRepository.fetchByDate(new Date(moment().format('L')));
    console.log(fromDB);
    if(isNone(fromDB)) {
        const dailyVerseDTO: DailyVerseDTO = await dailyVerseProvider.fetchByDate(new Date());
        const saved: DailyVerse = await dailyVerseRepository.save(dailyVerseDTO);
        console.log(saved);
        return saved;
    }

    return fromDB;
}

async function getDailyVerseFromDatabaseByDate(date: Date) {
}

export default {
    getByDate
}
