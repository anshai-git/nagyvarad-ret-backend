export class DailyVerseDTO {
    constructor(
        public date: Date,
        public nameDay: string,
        public song: string,
        public song2: string,

        public newVerseTitle: string,
        public newVerseLocation: string,
        public newVerse: string,

        public newVerseExplicationTitle: string,
        public newVerseExplication: string,

        public oldVerseTitle: string,
        public oldVerseLocation: string,

        public oldVerseExplicationTitle: string,
        public oldVerseExplicationSubtitle: string,
        public oldVerseExplication: string
    ) {}
}
