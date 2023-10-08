-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DailyVerse" (
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
    "oldVerse" TEXT NOT NULL DEFAULT '',
    "oldVerseExplicationTitle" TEXT NOT NULL,
    "oldVerseExplicationSubtitle" TEXT NOT NULL,
    "oldVerseExplication" TEXT NOT NULL
);
INSERT INTO "new_DailyVerse" ("createdAt", "date", "id", "nameDay", "newVerse", "newVerseExplication", "newVerseExplicationTitle", "newVerseLocation", "newVerseTitle", "oldVerseExplication", "oldVerseExplicationSubtitle", "oldVerseExplicationTitle", "oldVerseLocation", "oldVerseTitle", "song", "song2", "updatedAt") SELECT "createdAt", "date", "id", "nameDay", "newVerse", "newVerseExplication", "newVerseExplicationTitle", "newVerseLocation", "newVerseTitle", "oldVerseExplication", "oldVerseExplicationSubtitle", "oldVerseExplicationTitle", "oldVerseLocation", "oldVerseTitle", "song", "song2", "updatedAt" FROM "DailyVerse";
DROP TABLE "DailyVerse";
ALTER TABLE "new_DailyVerse" RENAME TO "DailyVerse";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
