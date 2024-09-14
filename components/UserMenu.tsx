"use client";

import { actionGetUserById, actionGetUserByIdSession } from "@/actions/actionMessagesDb";
import { actionLogout } from "@/actions/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cookies } from "next/headers";
import { useSearchParams } from "next/navigation";
import { useLoggedInUser } from "./UserProvider";

/*export default async function UserMenu() {
  /*const searchParams = useSearchParams();
  const userId = searchParams.get("rrr");

  if (userId === null) {
    return <></>;
  }

  const user = await actionGetUserById(userId);

  if (typeof user === "string") {
    return <></>;
  }
  if (user.length === 0) {
    return <></>;
  }
  
 const user1 = [{
    userName: "Oscar"
 }];*/

 export default function UserMenu() {
    const user = useLoggedInUser();
    if (user === null) {
      return <></>
    }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{user.userName}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => actionLogout()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
