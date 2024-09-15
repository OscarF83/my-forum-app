"use client";

import {
  actionGoNewForum,
  actionGoNewUser,
} from "@/actions/actionMessagesDb";
import { actionGoLogin, actionLogout } from "@/actions/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLoggedInUser } from "./UserProvider";


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
  if (user.userId === "48923dad-e6cc-495c-8d0b-0a7af7cfadc4"){
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
            <DropdownMenuItem onClick={() => actionGoNewUser()}>
              Create New User
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => actionLogout()}>
              Logout
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
