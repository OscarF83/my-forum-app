"use client"

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { type Forum } from "@/lib/forums";

type ForumListProps = {
    forum: Forum;
}

export default function ForumList({forum}:ForumListProps) {
    const {forumId, forumName} = forum;
    const router = useRouter();
  
  return (
      <Button
        variant="ghost"
        className="text-white border shadow font-bold pr-2 py-1 px-7 my-2 rounded-lg bg-stone-200 hover:bg-stone-400"
        onClick={() => router.push(`/forums/${forumId}`)}
      >
        {forumName}
      </Button>
  );
}