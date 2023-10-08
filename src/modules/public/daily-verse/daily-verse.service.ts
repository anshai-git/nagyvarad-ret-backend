import DailyVerseScraper from '../../../common/daily-verse/daily-verse-scraper';
import { DailyVerseDTO } from '../../../common/model/dto/daily-verse.dto';
import DailyVerseRepository from '../../../common/repository/daily-verse.repository';
import { isNone, isSome } from 'fp-ts/lib/Option';
import dailyVerseRepository from '../../../common/repository/daily-verse.repository';
import { SingleDailyVerseResponse } from '../../../common/model/response/single-daily-verse.response';
import { MultiDailyVerseResponse } from '../../../common/model/response/multi-daily-verse.response';

class DailyVerseService {
    async getByDate(date: Date): Promise<SingleDailyVerseResponse> {
        let fromDB = await DailyVerseRepository.fetchByDate(date);

        if (isNone(fromDB)) {
            // TODO: trasform intro real logging
            console.log(`Daily verse not found in DB for date: ${date}, starting scraper.`);
            const dailyVerseDTO: DailyVerseDTO = await DailyVerseScraper.fetchByDate(date);
            fromDB = await dailyVerseRepository.save(dailyVerseDTO);
        } else {
            // TODO: trasform intro real logging
            console.log(`Daily found in DB for date: ${date}, no scrape needed`);
        }

        if (isSome(fromDB)) {
            const dto = DailyVerseDTO.fromEntity(fromDB.value);
            return new SingleDailyVerseResponse(dto);
        } else {
            throw new Error("Couldn't fetch daily verse");
        }
    }

    async getDailyVerseList(startDate: Date, pageSize: number, pageIndex: number): Promise<MultiDailyVerseResponse> {
        const result = await DailyVerseRepository.fetchPageByDate(startDate, pageSize, pageIndex);
        const dtoList = result.map(DailyVerseDTO.fromEntity);
        return new MultiDailyVerseResponse(dtoList);
    }
}

const instance: DailyVerseService = new DailyVerseService();
export default instance;

