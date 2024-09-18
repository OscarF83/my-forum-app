export const config = {
  runtime: 'nodejs',
}

import { actionGetMessagesByForumId } from "@/actions/actionMessagesDb";
import Message from "@/components/Message";
import MessageError from "@/components/MessageError";
import { getForumById } from "@/db/forums";
import { redirect } from "next/navigation";

type ForumPageProps = {
  params: {
    forumId: string;
  };
};

export default async function ForumPage({ params }: ForumPageProps) {
  const { forumId } = params;

  /// Check if forumId exists ///
  const checkForumId = await getForumById(Number(forumId));
  if (typeof checkForumId != "string") {
    if (checkForumId.length == 0) {
      redirect(`/_not-found`);
    }
  }

  const messagesList = await actionGetMessagesByForumId(Number(forumId));

  if (typeof messagesList != "string") {
    return (
      <main className="flex flex-row">
        <div></div>
        <div className="wmessageDiv flex flex-col-reverse gap-2 justify-center items-center">
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
        <MessageError errorMessage={messagesList} />
      </main>
    );
  }
}
