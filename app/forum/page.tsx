import Message from "@/components/Message";
import MessageError from "@/components/MessageError";
import { readJson } from "@/lib/readJson";

export default async function Forum() {
  const messagesList = await readJson();

  if(typeof messagesList != "undefined"){
    return (
      <main className="flex flex-row">
        <div></div>
        <div className="px-80 flex flex-col-reverse gap-2">
          {messagesList.map((a) => (
            <Message key={a.id} message={a} />
          ))}
        </div>
        <div></div>
      </main>
    );
  } else {
    return (
      <main className="flex flex-row px-80 py-10">
        <MessageError/>
      </main>
    );
  }
}
