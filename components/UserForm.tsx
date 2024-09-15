"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { type Forum } from "@/db/forums";
import { useRef, useState } from "react";
import { actionAddForumDb, actionAddNewUser } from "@/actions/actionMessagesDb";

export default function UserForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputFill, setInputFill] = useState("");

  const addUser = async (formData: FormData) => {
    formRef.current?.reset();
    const uname = formData.get("userName");
    const pwd = formData.get("password");
    const uemail = formData.get("email");
    if (uname === "" || pwd === "" || uemail === "") {
      setInputFill("All input fields must be completed!");
    } else {
      const userName = uname!.toString();
      const password = pwd!.toString();
      const email = uemail!.toString();
      const result = await actionAddNewUser(userName, password, email);
      if (typeof result != "string") {
        setInputFill("");
      } else {
        setInputFill(result); // podemos indicar que no ha sido posible crear el nuevo foro
      }
    }
  };

  return (
    <form
      ref={formRef}
      action={addUser}
      className="border-2 px-2 py-2 flex flex-row justify-center items-center rounded-lg"
    >
      <div className="px-4 py-4 gap-2 flex flex-col">
        <div className="px-1">Username:</div>
        <input
          type="text"
          name="userName"
          className="px-4 border shadow rounded-lg"
        />
        <div className="px-1">Password:</div>
        <input
          type="password"
          name="password"
          className="px-4 border shadow rounded-lg"
        />
        <div className="px-1">Email:</div>
        <input
          type="text"
          name="email"
          className="px-4 border shadow rounded-lg"
        />
        <div className="px-1 font-bold text-red-500">{inputFill}</div>
        </div>
      <Button className=" bg-stone-600 w-32 h-32 p-0">
        Send
      </Button>
    </form>
  );
}
