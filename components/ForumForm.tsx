"use client";

import { Button } from "./ui/button";
import { useRef, useState } from "react";
import { actionAddForumDb } from "@/actions/actionMessagesDb";

export default function ForumForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputFill, setInputFill] = useState("");

  const addForum = async (formData: FormData) => {
    formRef.current?.reset();
    const name = formData.get("forumName");
    const description = formData.get("forumDescription");
    if (name === "" || description === "") {
      setInputFill("All input fields must be completed!");
    } else {
      const forumName = name!.toString();
      const forumDescription = description!.toString();
      const result = await actionAddForumDb({ forumName, forumDescription });
      if (typeof result != "string") {
        setInputFill("");
      } else {
        setInputFill(result);
      }
    }
  };

  return (
    <form
      ref={formRef}
      action={addForum}
      className="border-2 px-2 py-2 flex flex-row justify-center items-center rounded-lg"
    >
      <div className="px-4 py-4 gap-2 flex flex-col">
        <div className="px-1">Forum Name:</div>
        <input
          type="text"
          name="forumName"
          className="px-4 border shadow rounded-lg"
        />
        <div className="px-1">Description:</div>
        <textarea
          name="forumDescription"
          className="border shadow px-4 py-2 mr-2 w-96 h-40 rounded-lg text-wrap"
        />
        <div className="px-1 font-bold text-red-500">{inputFill}</div>
      </div>
      <Button className=" bg-stone-600 w-32 h-32 p-0">Send</Button>
    </form>
  );
}
