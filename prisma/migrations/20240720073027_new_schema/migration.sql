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
    "forumName" TEXT NOT NULL,
    "forumDescription" TEXT NOT NULL,
    "forumDeleted" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "messages" (
    "messageId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "messageDeleted" BOOLEAN NOT NULL DEFAULT false,
    "forumId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "messages_forumId_fkey" FOREIGN KEY ("forumId") REFERENCES "forums" ("forumId") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("userId") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userName_key" ON "users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "forums_forumName_key" ON "forums"("forumName");
