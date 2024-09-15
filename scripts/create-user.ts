import { insertUser } from "@/db/users";
import * as bcrypt from "bcryptjs";

export async function createUser(
  username: string,
  password: string,
  email: string
) {
  const salt = await bcrypt.genSalt();
  const newUser = await insertUser({
    userId: crypto.randomUUID(),
    userName: username,
    hashedPassword: await bcrypt.hash(password, salt),
    email,
  });
  return newUser;
}
