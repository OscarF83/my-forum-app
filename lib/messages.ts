import { db } from "./db";

export type MessageDb = {
  messageId?: number;
  date?: Date;
  text: string;
  messageDeleted?: boolean;
  forumId: number;
  userId: string;
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
  userId?: string;
};

export async function createMessage(messageData: MessageDb) {
  try {
    const result = await db.messages.create({ data: messageData });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function updateMessage(
  messageId: number,
  newMessageData: MessageUpdate
) {
  try {
    const result = await db.messages.update({
      where: { messageId },
      data: newMessageData,
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function getAllMessages() {
  try {
    const result = await db.messages.findMany();
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function getMessageById(messageId: number) {
  try {
    const result = await db.messages.findMany({
      where: { messageId },
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function getAllMessagesByForumId(forumId: number) {
  try {
    const result = await db.messages.findMany({
      where: { forumId },
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function getAllMessagesByForumIdWithUserName(forumId: number) {
  try {
    const result = await db.messages.findMany({
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
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}
