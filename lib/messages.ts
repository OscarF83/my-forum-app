import { db } from "./db";

export type MessageDb = {
  messageId?: number;
  date?: Date;
  text: string;
  messageDeleted?: boolean;
  forumId: number;
  userId: number;
};

export type MessageDbReturn = {
  messageId: number;
  date: Date;
  text: string;
  messageDeleted?: boolean;
  users: {
    userName: string;
  };
};

export type MessageUpdate = {
  messageId?: number;
  date?: Date;
  text?: string;
  messageDeleted?: boolean;
  forumId?: number;
  userId?: number;
};

export async function createMessage(messageData: MessageDb) {
  return await db.messages.create({ data: messageData });
}

export async function updateMessage(
  messageId: number,
  newMessageData: MessageUpdate
) {
  return await db.messages.update({
    where: { messageId },
    data: newMessageData,
  });
}

export async function getAllMessages() {
  return await db.messages.findMany();
}

export async function getMessageById(messageId: number) {
  return await db.messages.findMany({
    where: { messageId },
  });
}

export async function getAllMessagesByForumId(forumId: number) {
  return await db.messages.findMany({
    where: { forumId },
  });
}

export async function getAllMessagesByForumIdWithUserName(forumId: number) {
  return await db.messages.findMany({
    select: {
      messageId: true,
      date: true,
      text: true,
      messageDeleted: true,
      users: {
        select: {
          userName: true,
        },
      },
    },
    where: { forumId },
  });
}
