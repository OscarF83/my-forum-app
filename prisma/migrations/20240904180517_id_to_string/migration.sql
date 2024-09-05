/*
  Warnings:

  - The primary key for the `sessions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_messages" (
    "messageId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "messageDeleted" BOOLEAN NOT NULL DEFAULT false,
    "forumId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "messages_forumId_fkey" FOREIGN KEY ("forumId") REFERENCES "forums" ("forumId") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("userId") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_messages" ("date", "forumId", "messageDeleted", "messageId", "text", "userId") SELECT "date", "forumId", "messageDeleted", "messageId", "text", "userId" FROM "messages";
DROP TABLE "messages";
ALTER TABLE "new_messages" RENAME TO "messages";
CREATE TABLE "new_sessions" (
    "sessionId" TEXT NOT NULL PRIMARY KEY,
    "expiresAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("userId") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_sessions" ("expiresAt", "sessionId", "userId") SELECT "expiresAt", "sessionId", "userId" FROM "sessions";
DROP TABLE "sessions";
ALTER TABLE "new_sessions" RENAME TO "sessions";
CREATE TABLE "new_users" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "name" TEXT,
    "firstName" TEXT,
    "secondName" TEXT,
    "email" TEXT NOT NULL,
    "userDeleted" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_users" ("email", "firstName", "hashedPassword", "name", "secondName", "userDeleted", "userId", "userName") SELECT "email", "firstName", "hashedPassword", "name", "secondName", "userDeleted", "userId", "userName" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_userName_key" ON "users"("userName");
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
