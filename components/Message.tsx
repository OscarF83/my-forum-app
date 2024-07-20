"use client";

import { actionDeleteMessage } from "@/actions/actionMessages";
import { useRef } from "react";

export type MessageStructure = {
  id: number;
  nickName: string;
  name: string;
  date: string;
  text: string;
  deleted: boolean;
};

type MessageProps = {
  message: MessageStructure;
};

export default function Message({ message }: MessageProps) {
  const { nickName, date, text } = message;
  const textRef = useRef<HTMLInputElement | null>(null);
  if (message.deleted === false) {
    return (
      <div className="wmessage p-6 border rounded-lg shadow gap-2 bg-stone-300">
        <div className="flex flex-row border-b-2 border-stone-600">
          <div className="pb-1 font-bold">{nickName}</div>
          <div className="flex-1"></div>
          <div>{date}</div>
        </div>
        <div className="flex flex-row">
          <div className="pt-3 text-ellipsis overflow-hidden">{text}</div>
          <div className="flex-1"></div>
          <div className="flex flex-col px-1">
            <button
              onClick={() => {
                actionDeleteMessage(message.id, textRef.current!.value);
                textRef.current!.value = "";
              }}
              className="border shadow font-bold pr-2 py-1 px-7 my-2 rounded-lg bg-stone-200 hover:bg-stone-400"
            >
              <img src="/icon.png" alt="icon" style={{ width: '20px', height: '20px' }}/>
    
            </button>
            <input
              type="password"
              ref={textRef}
              className="border shadow px-1 rounded-lg w-20"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-6 border rounded-lg shadow gap-2 bg-stone-300">
        <div className="flex flex-row border-b-2 border-stone-600">
          <div className="pb-1 font-bold">{nickName}</div>
          <div className="flex-1"></div>
          <div>{date}</div>
        </div>
        <div className="flex flex-row">
          <div className="pt-3 text-red-600">This message was deleted.</div>
        </div>
      </div>
    );
  }
}
