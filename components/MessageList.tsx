"use client";

import { MessageDbReturn } from "@/db/messages";
import Message from "./Message";
import { actionGetMessagesByForumId } from "@/actions/actionMessagesDb";
import { useEffect, useState } from "react";

type MessageListProps = {
  initialMessagesList: MessageDbReturn[];
  forumId: number;
};

export default function MessageList({
  initialMessagesList,
  forumId,
}: MessageListProps) {
  const [messagesList, setMessagesList] =
    useState<MessageDbReturn[]>(initialMessagesList); // Estado para los mensajes

  // Monitorea cambios en initialData y actualiza el estado
  useEffect(() => {
    setMessagesList(initialMessagesList);
  }, [initialMessagesList]);

  useEffect(() => {
    // Llamar a la Server Action para obtener mensajes actualizados
    async function newMessagesList() {
      const result = await actionGetMessagesByForumId(forumId);
      if (typeof result != "string") {
        setMessagesList(result); // Actualizar los mensajes
      }
    }
    newMessagesList();
    // Polling cada 5 segundos
    const interval = setInterval(newMessagesList, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row">
      <div className="wmessageDiv flex flex-col-reverse gap-2 justify-center items-center">
        {messagesList.map((a) => (
          <Message key={a.messageId} message={a} />
        ))}
      </div>
    </div>
  );
}
