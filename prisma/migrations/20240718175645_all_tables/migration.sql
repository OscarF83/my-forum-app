/*
  Warnings:

  - You are about to drop the column `deleted` on the `messages` table. All the data in the column will be lost.
  - You are about to alter the column `date` on the `messages` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - Added the required column `forumId` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "users" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "name" TEXT,
    "firstName" TEXT,
    "secondName" TEXT,
    "email" TEXT NOT NULL,
    "userDeleted" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "sessions" (
    "sessionIdId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "expiresAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("userId") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "forums" (
    "forumId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "foroName" TEXT NOT NULL,
    "foroDescription" TEXT NOT NULL,
    "forumDeleted" BOOLEAN NOT NULL DEFAULT false
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_messages" (
    "messageId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "messageDeleted" BOOLEAN NOT NULL DEFAULT false,
    "forumId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "messages_forumId_fkey" FOREIGN KEY ("forumId") REFERENCES "forums" ("forumId") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("userId") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_messages" ("date", "messageId") SELECT "date", "messageId" FROM "messages";
DROP TABLE "messages";
ALTER TABLE "new_messages" RENAME TO "messages";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "users_userName_key" ON "users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "forums_foroName_key" ON "forums"("foroName");
