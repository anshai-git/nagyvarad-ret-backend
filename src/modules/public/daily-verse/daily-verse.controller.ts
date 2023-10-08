import { Context } from 'elysia';
import { ApiResponse } from '../../../common/api.response';
import { MultiDailyVerseResponse } from '../../../common/model/response/multi-daily-verse.response';
import { SingleDailyVerseResponse } from '../../../common/model/response/single-daily-verse.response';
import DailyVerseService from './daily-verse.service';
import { ParsedUrlQuery } from 'querystring';

class DailyVerseController {
    async getByDate(date: string): Promise<ApiResponse<SingleDailyVerseResponse | null>> {
        const dateFromString = new Date(date);
        return DailyVerseService.getByDate(dateFromString)
            .then(ApiResponse.forSuccess)
            .catch(ApiResponse.fromError)
            // TODO: Transform this into real logging
            .finally(() => console.log('Get daily verse by date finished'));
    }

    async getDailyVerseList(query: any) {
        const startDate = new Date(query.startDate);
        const pageSize = +query.pageSize;
        const pageIndex = +query.pageIndex;

        return DailyVerseService.getDailyVerseList(startDate, pageSize, pageIndex)
            .then(ApiResponse.forSuccess)
            .catch(ApiResponse.fromError)
            // TODO: Transform this into real logging
            .finally(() => console.log('Get daily verse list finished'));
    }
}

const instance: DailyVerseController = new DailyVerseController();
export default instance;
