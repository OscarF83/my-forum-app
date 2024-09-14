"use client";

import type { users } from "@prisma/client";
import { createContext, useContext } from "react";

const UserContext = createContext<users | null>(null);

type UserProviderProps = {
  user: users | null;
  children: React.ReactNode;
};
export default function UserProvider({ user, children }: UserProviderProps) {
  return <UserContext.Provider value={user}>
    {children}
  </UserContext.Provider>
}

export function useLoggedInUser() {
  const user = useContext(UserContext);
  return user;
}