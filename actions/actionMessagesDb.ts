"use server";

import { createForum, Forum, getAllForums } from "@/db/forums";
import {
  createMessage,
  getAllMessagesByForumIdWithUserName,
  getMessageById,
  type MessageDb,
  type MessageDbReturn,
  updateMessage,
} from "@/db/messages";
import { revalidatePath } from "next/cache";
//import { redirect } from "next/navigation";

export async function actionAddMessageDb(
  formData: FormData,
  forumId: number,
  userId: string
) {
  const messageField = formData.get("message");

  const message = messageField!.toString();

  const newMessageData: MessageDb = {
    text: message,
    forumId: forumId,
    userId: userId,
  };

  const newMessage = await createMessage(newMessageData);

  //revalidatePath(`/forums/${forumId}`);// No funciona
  const allForums = await getAllForums();
  if (typeof allForums != "string") {
    allForums.map((a) => revalidatePath(`/forums/${a.forumId}`));
  }
  return newMessage;
}

export async function actionGetMessagesByForumId(forumId: number) {
  const newMessagesList = await getAllMessagesByForumIdWithUserName(forumId);
  console.log(newMessagesList);
  return newMessagesList;
}

export async function actionDeleteMessageDb(id: number) {
  await updateMessage(id, { messageDeleted: true });

  const allForums = await getAllForums();
  if (typeof allForums != "string") {
    allForums.map((a) => revalidatePath(`/forums/${a.forumId}`));
  }
}

export async function actionAllForumDb() {
  const forumsList = await getAllForums();
  console.log(forumsList);
  return forumsList;
}

export async function actionAddForumDb(forumData: Forum) {
  const newForum = await createForum(forumData);
  console.log(newForum);
  if (typeof newForum != "string") {
    revalidatePath(`/forums`);
  }
  return newForum;
}
