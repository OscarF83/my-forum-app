"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { type Forum } from "@/db/forums";

type ForumListProps = {
  forum: Forum;
};

export default function ForumList({ forum }: ForumListProps) {
  const { forumId, forumName, forumDescription, forumDeleted } = forum;
  const router = useRouter();

  if (!forumDeleted) {
    return (
      <div className="flex flex-row">
        <Button
          className=" bg-stone-600 w-32 h-32 p-0"
          onClick={() => router.push(`/forums/${forumId}`)}
        >
          {forumName}
        </Button>
        <div className="flex items-center border-2 py-2 px-3 whforumlist text-ellipsis overflow-hidden">
          {forumDescription}
        </div>
      </div>
    );
  }
}
