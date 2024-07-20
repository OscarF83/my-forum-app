"use server";

import { readJson } from "@/lib/readJson";
import { writeJson } from "@/lib/writeJson";
import { revalidatePath } from "next/cache";

export async function actionAddMessage(formData: FormData) {
  const nickField = formData.get("nick");
  const nameField = formData.get("name");
  const messageField = formData.get("message");

  const nick = nickField!.toString();
  const name = nameField!.toString();
  const message = messageField!.toString();

  const messagesList = await readJson();
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
  revalidatePath("/");
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
