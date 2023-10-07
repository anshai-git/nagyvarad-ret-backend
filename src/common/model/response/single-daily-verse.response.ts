import { DailyVerseDTO } from '../dto/daily-verse.dto';

export class SingleDailyVerseResponse {
    constructor(
        public dailyVerse: DailyVerseDTO
    ) {}
}
