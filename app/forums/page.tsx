import Link from "next/link";


export default async function Forums() {
 

    return (
      <main className="flex flex-col">
        <div></div>
        <div className="px-10 py-32 flex flex-row gap-2">
        <Link href="/forums/1">Go to forum1 page</Link>
        </div>
        <div className="px-10 py-2 flex flex-row gap-2 w-60" >
        <Link href="/forums/2">Go to forum2 page</Link>
        </div>
        <div></div>
      </main>
    );
  }