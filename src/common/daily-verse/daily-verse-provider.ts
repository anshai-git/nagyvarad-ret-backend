import { DailyVerseDTO } from "../model/dto/daily-verse.dto";

export interface DailyVerseProvider {
  fetchByDate(date: Date): Promise<DailyVerseDTO>;
}
