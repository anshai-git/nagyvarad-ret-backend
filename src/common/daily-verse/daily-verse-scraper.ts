const axios = require('axios').default;
import * as cheerio from 'cheerio';
import { DailyVerseProvider } from "../daily-verse/daily-verse-provider";
import { DailyVerseDTO } from '../model/dto/daily-verse.dto';

class DailyVerseScraper implements DailyVerseProvider {

    async fetchByDate(date: Date): Promise<DailyVerseDTO> {
        const response = await axios.get('https://reformatus.hu/isten-szolt/');

        const dom = cheerio.load(response.data);

        const articleDate = dom('.article__date-and-nameday > .article__date').text();
        const nameDay = dom('.article__date-and-nameday > .article__nameday').text();

        const song = dom('.block__new_explanation > .rich-text > p:nth-child(2)').text();
        const song2 = "";

        const newVerseTitle = dom('.block__new_title').contents().first().text();
        const newVerseLocation = dom('.block__new_paragraph').text();
        const newVerse = dom('.block__new_text').text();

        const newVerseExplicationTitle = dom('.block__new_info').text();
        const newVerseExplication = dom('.block__new_explanation > .rich-text > p:nth-child(1)').text();

        const oldVerseTitle = dom('.block__old_title').contents().first().text();
        const oldVerseLocation = dom('.block__old_paragraph').text();
        const oldVerse = dom('.block__old_text').text();

        const oldVerseExplicationTitle = dom('.block__old_info').text();
        const oldVerseExplicationSubtitle = dom('.block__old_explanation > .rich-text p:nth-child(1)').text();
        const olddVerseExplication = dom('.block__old_explanation > .rich-text p:nth-child(2)').text();

        const dailyVerse = new DailyVerseDTO(
            date,
            nameDay,
            song,
            song2,

            newVerseTitle.trim(),
            newVerseLocation.trim(),
            newVerse.trim(),

            newVerseExplicationTitle.trim(),
            newVerseExplication.trim(),

            oldVerseTitle.trim(),
            oldVerseLocation.trim(),
            oldVerse.trim(),

            oldVerseExplicationTitle.trim(),
            oldVerseExplicationSubtitle.trim(),
            olddVerseExplication.trim(),
        );

        return dailyVerse;
    }
}

const instance: DailyVerseScraper = new DailyVerseScraper();
export default instance;
