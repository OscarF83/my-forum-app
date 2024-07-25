"use client";

import React, { useRef, useState } from "react";
import {useSearchParams} from "next/navigation"
import { actionAddMessageDb } from "@/actions/actionMessagesDb";

export default function SideForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputFill, setInputFill] = useState("");

  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const addMessage = async (formData: FormData) => {
    formRef.current?.reset();
    //const nickField = formData.get("nick");
    //const nameField = formData.get("name");
    const messageField = formData.get("message");
    if (/*(nickField === "")||(nameField === "")||(*/messageField === "")/*)*/{
      setInputFill("All input fields must be completed!");
    } else {
      setInputFill("");
    await actionAddMessageDb(formData, id);
    }
  };

  return (
    <form
      ref={formRef}
      action={addMessage}
      className="px-2 w-60"
    >
      <div className="top-40 flex flex-col gap-4">
      {/*<div className="px-1 text-white">Nickname:</div>
        <input
          type="text"
          name="nick"
          className="border shadow px-2 mr-2 rounded-lg"
        />
        <div className="px-1 text-white">Password to delete:</div>
        <input
          type="password"
          name="name"
          className="border shadow px-2 mr-2 rounded-lg"
        />*/}
        <div className="px-1 text-white">Message:</div>
        <textarea
          name="message"
          className="border shadow px-2 py-2 pb-40 mr-2 rounded-lg text-wrap"
        />
        <button className="border shadow font-bold px-2 py-2 mr-2 rounded-lg bg-stone-200 hover:bg-stone-400">
          Send
        </button>
        <div className="px-1 font-bold text-red-500">{inputFill}</div>
      </div>
    </form>
  );
}
