-- CreateTable
CREATE TABLE "messages" (
    "messageId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL
);
