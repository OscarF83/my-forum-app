//"use client";

import { actionGetMessagesByForumId } from "@/actions/actionMessagesDb";
import Message from "@/components/Message";
import MessageError from "@/components/MessageError";
//import { MessageDbReturn } from "@/lib/messages";
//import {useSearchParams} from "next/navigation"
//import { useEffect, useState } from "react";

type ForumPageProps = {
  params: {
    forumId: string;
  };
};

export default async function ForumPage({params}:ForumPageProps) {
  //const [messagesList, setMessagesList] = useState<MessageDbReturn[] | null>(null);
  //const searchParams = useSearchParams();
  //const id = Number(searchParams.get("id"));

  /*useEffect(() => {
   actionGetMessagesByForumId(1).then(setMessagesList);
    console.log(`Este es mi resultado ${messagesList}`);
  }, []);*/

  const {forumId} = params;
  const messagesList2 = await actionGetMessagesByForumId(Number(forumId));

  if(typeof messagesList2 != "string"){
    return (
      <main className="flex flex-row">
        <div></div>
        <div className="px-80 flex flex-col-reverse gap-2">
          {messagesList2.map((a) => (
            <Message key={a.messageId} message={a} />
          ))}
        </div>
        <div></div>
      </main>
    );
  } else {
    return (
      <main className="flex flex-row px-80 py-10">
        <MessageError errorMessage={messagesList2}/>
      </main>
    );
  }
}