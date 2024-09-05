"use client";

import React, { useRef, useState } from "react";
import { actionAddMessageDb } from "@/actions/actionMessagesDb";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { actionLogout } from "@/actions/auth";

type SideForumIdProps = {
  sideForumId: string;
};

export default function SideForm({ sideForumId }: SideForumIdProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputFill, setInputFill] = useState("");

  //// Aqui capturo el userId//// es podria canviar per sessionId i buscar despres userId
  const searchParams = useSearchParams();
  const userId = searchParams.get("rrr");
  //////////////////////////////////

  const addMessage = async (formData: FormData) => {
    formRef.current?.reset();
    //const nickField = formData.get("nick");
    //const nameField = formData.get("name");
    const messageField = formData.get("message");
    if (/*(nickField === "")||(nameField === "")||(*/ messageField === "") {
      /*)*/ setInputFill("All input fields must be completed!");
    } else {
      //setInputFill("");
      const result = await actionAddMessageDb(
        formData,
        Number(sideForumId),
        userId ? userId : "0"   // OJO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      );
      //const result = "Internal Server Error, please try again later!";
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
            className="border shadow px-6 py-2 pb-40 mr-2 rounded-lg text-wrap"
          />
          <button className="border shadow font-bold px-2 py-2 mr-2 rounded-lg bg-stone-200 hover:bg-stone-400">
            Send
          </button>
          <div className="px-1 font-bold text-red-500">{inputFill}</div>
        </div>
      </form>
      <Button
        variant="link"
        className="text-white"
        onClick={() => actionLogout()}
      >
        Logout
      </Button>
    </div>
  );
}
