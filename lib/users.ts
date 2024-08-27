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
  try {
    const result = await db.users.create({ data: userData });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function updateUser(userId: number, newUserData: UserUpdate) {
  try {
    const result = await db.users.update({
      where: { userId },
      data: newUserData,
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function getAllUsers() {
  try {
    const result = await db.users.findMany();
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function getUserById(userId: number) {
  try {
    const result = await db.users.findMany({
      where: { userId },
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}
