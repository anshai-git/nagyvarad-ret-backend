import { ApiResponse } from '../../../common/api.response';
import { MultiDailyVerseResponse } from '../../../common/model/response/multi-daily-verse.response';
import { SingleDailyVerseResponse } from '../../../common/model/response/single-daily-verse.response';
import DailyVerseService from './daily-verse.service';

class DailyVerseController {
    async getByDate(date: Date): Promise<ApiResponse<SingleDailyVerseResponse | null>> {
        return DailyVerseService.getByDate(date)
            .then(ApiResponse.forSuccess)
            .catch(ApiResponse.fromError)
            // TODO: Transform this into real logging
            .finally(() => console.log('Get daily verse by date finished'));
    }

    async getAllDailyVerses(): Promise<ApiResponse<MultiDailyVerseResponse | null>> {
        return DailyVerseService.getByDate(date)
            .then(ApiResponse.forSuccess)
            .catch(ApiResponse.fromError)
            // TODO: Transform this into real logging
            .finally(() => console.log('Get daily verse by date finished'));
    }

    async getInDateRange(startDate: Date, endDate: Date) {
    }

    async getDailyVerseList(startDate: Date, page: number, pageSize: number) {
        
    }
}

const instance: DailyVerseController = new DailyVerseController();
export default instance;
