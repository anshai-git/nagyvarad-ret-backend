import DailyVerseScraper from '../../../common/daily-verse/daily-verse-scraper';
import { DailyVerseDTO } from '../../../common/model/dto/daily-verse.dto';
import DailyVerseRepository from '../../../common/repository/daily-verse.repository';
import { isNone, isSome } from 'fp-ts/lib/Option';
import dailyVerseRepository from '../../../common/repository/daily-verse.repository';
import moment from 'moment';

class DailyVerseService {
    async getByDate(date: Date): Promise<DailyVerseDTO> {
        let fromDB = await DailyVerseRepository.fetchByDate(new Date(moment().format('L')));
        if (isNone(fromDB)) {
            const dailyVerseDTO: DailyVerseDTO = await DailyVerseScraper.fetchByDate(new Date());
            fromDB = await dailyVerseRepository.save(dailyVerseDTO);
        }

        if (isSome(fromDB)) {
            const dto = DailyVerseDTO.fromEntity(fromDB.value);
            return dto;
        }
    }

    async getByDateRange(startDate: Date, endDate: Date) {

    }
}

const instance: DailyVerseService = new DailyVerseService();
export default instance;

