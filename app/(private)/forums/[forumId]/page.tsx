export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { actionGetMessagesByForumId } from "@/actions/actionMessagesDb";
import MessageError from "@/components/MessageError";
import MessageList from "@/components/MessageList";
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

  let nameForum = "";

  if (typeof checkForumId != "string") {
    nameForum = checkForumId[0].forumName;
  }

  const messagesList = await actionGetMessagesByForumId(Number(forumId));

  if (typeof messagesList != "string") {
    return (
      <main className="flex flex-col justify-center items-center gap-10">
        <div className="font-bold text-3xl bg-stone-400 text-white px-3 py-2 rounded-lg">{nameForum}</div>
        <MessageList
          initialMessagesList={messagesList}
          forumId={Number(forumId)}
        />
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
