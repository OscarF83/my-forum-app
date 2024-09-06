"use client";

import { actionDeleteMessageDb } from "@/actions/actionMessagesDb";
import { MessageDbReturn } from "@/db/messages";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

type MessageProps = {
  message: MessageDbReturn;
};

export default function Message({ message }: MessageProps) {
  const { date, text, users } = message;
  const textRef = useRef<HTMLInputElement | null>(null);
  const searchParams = useSearchParams();
  const userId = searchParams.get("rrr");

  let visible = false;

  if (userId == users.userId) {
    visible = true;
  }

  const ButtonVisible = ({ className }: { className: string }) => (
    <button
      onClick={() => {
        actionDeleteMessageDb(message.messageId);
        textRef.current!.value = "";
      }}
      className={className}
    >
      <img
        src="/images/icon.png"
        alt="icon"
        style={{ width: "20px", height: "20px" }}
      />
    </button>
  );
  const ButtonNotVisible = ({ className }: { className: string }) => (
    <button
      onClick={() => {
        actionDeleteMessageDb(message.messageId);
        textRef.current!.value = "";
      }}
      className={className}
    >
      <img
        src="/images/icon.png"
        alt="icon"
        style={{ width: "20px", height: "20px" }}
      />
    </button>
  );
  let standardMessage = false;
  if (message.messageDeleted === false) {
    standardMessage = true;
  }
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
            <ButtonNotVisible className="hidden border shadow font-bold pr-2 py-1 px-7 my-2 rounded-lg bg-stone-200 hover:bg-stone-400" />
          )}
        </div>
      </div>
      <div className="flex flex-row">
        {standardMessage ? <StandardMessage /> : <DeletedMessage />}
      </div>
    </div>
  );
}
