import { createSession, Session } from "./sessions";
import { createUser, User } from "./users";

const user1: User = {
    userId: crypto.randomUUID(),
    userName: "rasco6",
    hashedPassword: "Pepito6",
    //name: null,
    //firstName: null,
    //secondName: null,
    email: "prueba6@hotmail.com",
    userDeleted: true,
  };
  const createUserTest = (async function () {
    const value = await createUser(user1);
    console.log(value);
  })();
  const session1: Session = {
    sessionId: crypto.randomUUID(),
    expiresAt: new Date(new Date().setDate(new Date().getDate() + 30)),
    userId: "1",
  };
  const createSessionTest = (async function () {
    const value = await createSession(session1);
    console.log(value);
  })();