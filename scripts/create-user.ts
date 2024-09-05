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

/*const [username, password, email] = process.argv.slice(3);
if (!username || !password || !email) {
  console.error(`Usage: create-user.ts <username> <password> <email>`);
  process.exit(1);
}*/
const username = "racso8";
const password = "oscar8";
const email = "prueba8@hotmail.com";

const result = await createUser(username, password, email);
console.log(result);
