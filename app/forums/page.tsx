import MessageError from "@/components/MessageError";
import { getAllForums } from "@/lib/forums";
import Link from "next/link";

export default async function Forums() {
  const listForums = await getAllForums();// solicitud directa a la base no a través de action
  //const listForums = "Internal Server Error, please try again later!";

  if (typeof listForums != "string") {
    return (
      <main className="flex flex-col">
        <div></div>
        <div className="px-10 py-32 flex flex-row gap-2">
          <Link href="/forums/1">Go to forum1 page</Link>
        </div>
        <div className="px-10 py-2 flex flex-row gap-2 w-60">
          <Link href="/forums/2">Go to forum2 page</Link>
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
