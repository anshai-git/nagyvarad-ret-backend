-- CreateTable
CREATE TABLE "DailyVerse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "date" DATETIME NOT NULL,
    "nameDay" TEXT NOT NULL,
    "song" TEXT NOT NULL,
    "song2" TEXT NOT NULL,
    "newVerseTitle" TEXT NOT NULL,
    "newVerseLocation" TEXT NOT NULL,
    "newVerse" TEXT NOT NULL,
    "newVerseExplicationTitle" TEXT NOT NULL,
    "newVerseExplication" TEXT NOT NULL,
    "oldVerseTitle" TEXT NOT NULL,
    "oldVerseLocation" TEXT NOT NULL,
    "oldVerseExplicationTitle" TEXT NOT NULL,
    "oldVerseExplicationSubtitle" TEXT NOT NULL,
    "oldVerseExplication" TEXT NOT NULL
);
