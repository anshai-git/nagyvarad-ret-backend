import { DailyVerseDTO } from "../dto/daily-verse.dto";

export class MultiDailyVerseResponse {
    constructor(
        public dailyVerseList: Array<DailyVerseDTO>
    ) {}
}
