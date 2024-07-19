import { db } from "./db";

export type User = {
  userId?: number;
  userName: string;
  hashedPassword: string;
  name?: string | null;
  firstName?: string | null;
  secondName?: string | null;
  email: string;
  userDeleted?: boolean;
};

export type UserUpdate = {
  userId?: number;
  userName?: string;
  hashedPassword?: string;
  name?: string | null;
  firstName?: string | null;
  secondName?: string | null;
  email?: string;
  userDeleted?: boolean;
};

export async function createUser(userData: User) {
  return await db.users.create({ data: userData });
}

export async function updateUser(userId: number, newUserData: UserUpdate) {
  return await db.users.update({
    where: { userId },
    data: newUserData,
  });
}

export async function getAllUsers() {
  return await db.users.findMany();
}

export async function getUserById(userId: number) {
  return await db.users.findMany({
    where: { userId },
  });
}
