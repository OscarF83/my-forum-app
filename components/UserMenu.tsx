"use client";

import { actionGetUserById, actionGetUserByIdSession, actionGoNewForum } from "@/actions/actionMessagesDb";
import { actionGoLogin, actionLogout } from "@/actions/auth";
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
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>Hello, identify yourself</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => actionGoLogin()}>
              Login
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Hello, {user.userName}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => actionGoNewForum()}>
          Create New Forum
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => actionLogout()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
