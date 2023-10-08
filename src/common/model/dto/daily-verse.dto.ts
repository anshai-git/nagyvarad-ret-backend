import { DailyVerse } from "@prisma/client";

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
        public oldVerse: string,

        public oldVerseExplicationTitle: string,
        public oldVerseExplicationSubtitle: string,
        public oldVerseExplication: string
    ) {}

    public static fromEntity(entity: DailyVerse): DailyVerseDTO {
        return new DailyVerseDTO(
            entity.date,
            entity.nameDay,

            entity.song,
            entity.song2,

            entity.newVerseTitle,
            entity.newVerseLocation,
            entity.newVerse,

            entity.newVerseExplicationTitle,
            entity.newVerseExplication,

            entity.oldVerseTitle,
            entity.oldVerseLocation,
            entity.oldVerse,

            entity.oldVerseExplicationTitle,
            entity.oldVerseExplicationSubtitle,
            entity.oldVerseExplication
        )
    }
}
