import ForumList from "@/components/ForumList";
import MessageError from "@/components/MessageError";
import { getAllForums } from "@/db/forums";

export default async function Forums() {
  const listForums = await getAllForums(); // solicitud directa a la base no a través de action

  if (typeof listForums != "string") {
    return (
      <main className="w-screen flex flex-col py-40 pb-20">
        <div className="flex flex-col justify-center items-center gap-4">
          {listForums.map((a) => (
            <ForumList key={a.forumId} forum={a} />
          ))}
        </div>
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
