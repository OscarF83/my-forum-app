"use client";

import { actionDeleteMessageDb } from "@/actions/actionMessagesDb";
import { MessageDbReturn } from "@/db/messages";
import { useRef } from "react";
import { useLoggedInUser } from "./UserProvider";

type MessageProps = {
  message: MessageDbReturn;
};

const DeleteImage = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      fill="currentColor"
      d="M7.616 20q-.672 0-1.144-.472T6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.23 0 .423-.192t.192-.424zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
    />
  </svg>
);
const RestoreImage = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      fill="currentColor"
      d="M11.5 15.308h1v-4.689l2.1 2.089l.708-.708L12 8.692L8.692 12l.708.708l2.1-2.089zM7.616 20q-.691 0-1.153-.462T6 18.384V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zM17 6H7v12.385q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.423zM7 6v13z"
    />
  </svg>
);

export default function Message({ message }: MessageProps) {
  const { date, text, users } = message;
  const textRef = useRef<HTMLInputElement | null>(null);
  const user = useLoggedInUser();

  let visible = false;

  if (user != null) {
    if (user.userId == users.userId) {
      visible = true;
    }
  }

  let standardMessage = false;

  if (message.messageDeleted === false) {
    standardMessage = true;
  }

  const ButtonVisible = ({ className }: { className: string }) => {
    if (standardMessage) {
      return (
        <button
          onClick={() => {
            actionDeleteMessageDb(message.messageId);
          }}
          className={className}
        >
          <DeleteImage />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            actionDeleteMessageDb(message.messageId);
          }}
          className={className}
        >
          <RestoreImage />
        </button>
      );
    }
  };

  const StandardMessage = () => (
    <div className="pt-3 text-ellipsis overflow-hidden">{text}</div>
  );
  const DeletedMessage = () => (
    <div className="pt-3 text-red-600">This message was deleted.</div>
  );

  return (
    <div className="wmessage hmessage px-6 pt-3 pb-6 border rounded-lg shadow gap-2 bg-stone-300">
      <div className="flex flex-row border-b-2 border-stone-600">
        <div className="py-4 font-bold">{users.userName}</div>
        <div className="flex-1"></div>
        <div className="py-4">
          {date.toLocaleDateString("es-MX", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </div>
        <div className="px-2 py-0">
          {visible ? (
            <ButtonVisible className="border shadow font-bold pr-2 py-2 px-2 my-2 rounded-lg bg-stone-200 hover:bg-stone-400" />
          ) : (
            <ButtonVisible className="hidden border shadow font-bold pr-2 py-1 px-2 my-2 rounded-lg bg-stone-200 hover:bg-stone-400" />
          )}
        </div>
      </div>
      <div className="flex flex-row">
        {standardMessage ? <StandardMessage /> : <DeletedMessage />}
      </div>
    </div>
  );
}
