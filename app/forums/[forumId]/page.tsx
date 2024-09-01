import { actionGetMessagesByForumId } from "@/actions/actionMessagesDb";
import Message from "@/components/Message";
import MessageError from "@/components/MessageError";
import { getForumById } from "@/lib/forums";
import { getAllMessagesByForumIdWithUserName } from "@/lib/messages";
import { redirect } from "next/navigation";

type ForumPageProps = {
  params: {
    forumId: string;
  };
};

export default async function ForumPage({ params }: ForumPageProps) {
  const { forumId } = params;

  /// Check if forumId exists ///
  const checkForumId = await getForumById(Number(forumId)); //La solicitud es directa a la base de datos no a través de action ya que la pagina es de servidor
  if (typeof checkForumId != "string") {
    if (checkForumId.length == 0) {
      redirect(`/_not-found`);
    }
  }
  /////////////////////////////

  // Solicitud a través de action/// 
  const messagesList = await actionGetMessagesByForumId(Number(forumId));
  /*const messagesList = await getAllMessagesByForumIdWithUserName(
    Number(forumId)
  );*/ // solicitud directa a la base no a través de action
  console.log(messagesList[messagesList.length-1]);
  console.log(forumId);

  if (typeof messagesList != "string") {
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
        <MessageError errorMessage={messagesList} />
      </main>
    );
  }
}
