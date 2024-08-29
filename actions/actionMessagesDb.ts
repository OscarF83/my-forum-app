"use server";

import {
  createMessage,
  getAllMessagesByForumIdWithUserName,
  getMessageById,
  type MessageDb,
  type MessageDbReturn,
  updateMessage,
} from "@/lib/messages";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function actionAddMessageDb(formData: FormData, forumId: number) {
  const messageField = formData.get("message");

  const message = messageField!.toString();

  const newMessageData: MessageDb = {
    text: message,
    forumId: forumId,
    userId: 1,
  };

  const newMessage = await createMessage(newMessageData);

  revalidatePath(`/`);
  //revalidatePath(`/forums/${forumId}`);
  //redirect(`/_not-found`);
  return newMessage;
}

export async function actionGetMessagesByForumId(forumId: number) {
  const newMessagesList = await getAllMessagesByForumIdWithUserName(forumId);
  console.log(newMessagesList);
  return newMessagesList;
}

export async function actionDeleteMessageDb(
  id: number,
  password: string | null
) {
  const foundMessage: MessageDb[] | string = await getMessageById(id);
  if (typeof foundMessage != "string") {
    if (foundMessage[0].userId == Number(password)) {
      await updateMessage(id, { messageDeleted: true });
    }
  }
  revalidatePath("/");
}
