"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { type Forum } from "@/lib/forums";

type ForumListProps = {
  forum: Forum;
};

export default function ForumList({ forum }: ForumListProps) {
  const { forumId, forumName } = forum;
  const router = useRouter();

  return (
    <Button
      className=" bg-stone-600 w-32 h-32 p-0"
      onClick={() => router.push(`/forums/${forumId}`)}
    >
      {forumName}
    </Button>
  );
}
