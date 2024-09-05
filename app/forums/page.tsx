import ForumList from "@/components/ForumList";
import MessageError from "@/components/MessageError";
import { getAllForums } from "@/db/forums";
import Link from "next/link";

export default async function Forums() {
  const listForums = await getAllForums();// solicitud directa a la base no a través de action
  //const listForums = "Internal Server Error, please try again later!";

  if (typeof listForums != "string") {
    return (
      <main className="flex flex-row">
        <div></div>
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        {listForums.map((a) => (
          <ForumList key={a.forumId} forum={a} />
        ))}
        </div>
        <div></div>
      </main>
    );
  } else {
    return (
      <main className="w-screen h-screen flex flex-row justify-center items-center">
        <MessageError errorMessage={listForums} />
      </main>
    );
  }
}
