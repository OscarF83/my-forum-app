"use server";

import { createMessage, getAllMessagesByForumIdWithUserName, getMessageById, MessageDb, MessageDbReturn, updateMessage } from "@/lib/messages";
import { revalidatePath } from "next/cache";

export async function actionAddMessageDb(formData: FormData, forumId: number) {
  const messageField = formData.get("message");

  const message = messageField!.toString();

  const newMessageData: MessageDb = {
    text: message,
    forumId: forumId,
    userId: 1
  }

  await createMessage(newMessageData);

  revalidatePath(`/forums/${forumId}`);
}

export async function actionGetMessagesByForumId(forumId: number) {
  const newMessagesList = await getAllMessagesByForumIdWithUserName(forumId);
  console.log(newMessagesList);
  return newMessagesList as MessageDbReturn[];
}

export async function actionDeleteMessageDb(id: number, password: string | null) {
  const foundMessage = await getMessageById(id);
  if (foundMessage[0].userId == Number(password)){
    await updateMessage(id, {messageDeleted: true});
  }
 revalidatePath("/");

}
