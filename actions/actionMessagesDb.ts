"use server";

import { createMessage } from "@/lib/messages";
import { readJson } from "@/lib/readJson";
import { writeJson } from "@/lib/writeJson";
import { revalidatePath } from "next/cache";

export async function actionAddMessageDb(formData: FormData, forumId: number) {
  const nickField = formData.get("nick");
  const nameField = formData.get("name");
  const messageField = formData.get("message");

  const nick = nickField!.toString();
  const name = nameField!.toString();
  const message = messageField!.toString();

  /*export type Message = {
    messageId?: number;
    date?: Date;
    text: string;
    messageDeleted?: boolean;
    forumId: number;
    userId: number;
  };*/
  const newMessageData = {
    text: message,
    forumId: forumId,
    userId: 1
  }

  createMessage(newMessageData);

 /* const messagesList = await readJson();
  if (typeof messagesList != "undefined") {
    const fecha = new Date();

    const newMessage = {
      id: messagesList.length + 1,
      nickName: nick,
      name: name,
      date: fecha.toLocaleDateString("es-MX", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      }),
      text: message,
      deleted: false,
    };

    messagesList.push(newMessage);
    await writeJson(messagesList);
  }
  revalidatePath("/");*/
}

export async function actionDeleteMessage(id: number, password: string | null) {
  const messagesList = await readJson();

  if (typeof messagesList != "undefined") {
    if (messagesList[id - 1].name === password) {
      messagesList[id - 1].deleted = true;
      await writeJson(messagesList);
    }
  }
  revalidatePath("/");
}
