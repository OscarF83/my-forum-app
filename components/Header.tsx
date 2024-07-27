"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Header() {
    const router = useRouter();
  
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-stone-700 text-white flex flex-row items-center px-4">
      <Link href="/">
        <div id="logo" className="font-extrabold text-3xl text-white mr-4">
          All-Topics Forum!
        </div>
      </Link>
      <Button
        variant="link"
        className="text-white"
        onClick={() => router.push("/forums")}
      >
        Forum
      </Button>
    </header>
  );
}
