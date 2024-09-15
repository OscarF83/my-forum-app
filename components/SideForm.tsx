"use client";

import React, { useRef, useState } from "react";
import { actionAddMessageDb } from "@/actions/actionMessagesDb";
import { useLoggedInUser } from "./UserProvider";

type SideForumIdProps = {
  sideForumId: string;
};

export default function SideForm({ sideForumId }: SideForumIdProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputFill, setInputFill] = useState("");

  const user = useLoggedInUser();

  const addMessage = async (formData: FormData) => {
    formRef.current?.reset();
    const messageField = formData.get("message");
    if (messageField === "") {
      setInputFill("All input fields must be completed!");
    } else {
      const result = await actionAddMessageDb(
        formData,
        Number(sideForumId),
        user ? user.userId : "0" // OJO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      );
      if (typeof result != "string") {
        setInputFill("");
      } else {
        setInputFill(result);
      }
    }
  };

  return (
    <div>
      <form ref={formRef} action={addMessage} className="px-4 w-60">
        <div className="top-40 flex flex-col gap-4">
          <div className="px-1 text-white">Message:</div>
          <textarea
            name="message"
            className="border shadow px-6 py-2 pb-40 mr-2 rounded-lg text-wrap"
          />
          <button className="border shadow font-bold px-2 py-2 mr-2 rounded-lg bg-stone-200 hover:bg-stone-400">
            Send
          </button>
          <div className="px-1 font-bold text-red-500">{inputFill}</div>
        </div>
      </form>
    </div>
  );
}
