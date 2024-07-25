"use client";

import { actionGetMessagesByForumId } from "@/actions/actionMessagesDb";
import Message from "@/components/Message";
import { MessageDbReturn } from "@/lib/messages";
import {useSearchParams} from "next/navigation"
import { useEffect, useState } from "react";

export default function Forum() {
  const [messagesList, setMessagesList] = useState<MessageDbReturn[] | null>(null);
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  useEffect(() => {
   actionGetMessagesByForumId(id).then(setMessagesList);
    console.log(`Este es mi resultado ${messagesList}`);
  }, []);

  if(messagesList != null){
    return (
      <main className="flex flex-row">
        <div></div>
        <div className="px-80 flex flex-col-reverse gap-2">
          {messagesList.map((a) => (
            <Message key={a.messageId} message={a} />
          ))}
        </div>
        <div></div>
      </main>
    );
  } else {
    return (
      <main className="flex flex-row px-80 py-10">
        Loading...
        {/*<MessageError/> */}
      </main>
    );
  }
}