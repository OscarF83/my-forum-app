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
    useState<MessageDbReturn[]>(initialMessagesList);

  // Check changes on initialData and update
  useEffect(() => {
    setMessagesList(initialMessagesList);
  }, [initialMessagesList]);

  useEffect(() => {
    // Call Server Action to update messages
    async function newMessagesList() {
      const result = await actionGetMessagesByForumId(forumId);
      if (typeof result != "string") {
        setMessagesList(result); // Update messages
      }
    }
    newMessagesList();
    // Polling every 5 seconds
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
