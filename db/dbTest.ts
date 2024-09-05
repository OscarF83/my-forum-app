import { createForum, Forum, getAllForums } from "./forums";
import {
  createMessage,
  getAllMessages,
  getAllMessagesByForumId,
  getAllMessagesByForumIdWithUserName,
  MessageDb,
} from "./messages";
import {
  insertSession,
  deleteBySessionId,
  deleteByUserId,
  Session,
} from "./sessions";
import {
  insertUser,
  getAllUsers,
  getUserById,
  updateUser,
  User,
  UserUpdate,
} from "./users";

const user1: User = {
  userId: "1",
  userName: "rasco3",
  hashedPassword: "Pepito12345",
  //name: null,
  //firstName: null,
  //secondName: null,
  email: "prueba3@hotmail.com",
  userDeleted: true,
};

const user2: UserUpdate = {
  //userId: 1,
  //userName: "rasco2",
  //hashedPassword: "Pepito123",
  //name: null,
  //firstName: null,
  //secondName: null,
  //email: "prueb2@hotmail.com",
  userDeleted: true,
};

const forum1: Forum = {
  //forumId: number;
  forumName: "General_2",
  forumDescription: "Foro general donde cualquier tema es bienvenido",
  //forumDeleted: boolean;
};

const message1: MessageDb = {
  //messageId?: number;
  //date?: Date;
  text: "Mi primer mensaje",
  //messageDeleted?: boolean;
  forumId: 2,
  userId: "1",
};

const session1: Session = {
  sessionId: "1",
  expiresAt: new Date(new Date().setDate(new Date().getDate() + 30)),
  userId: "2",
};

/*const createUserTest = (async function () {
    const value = await createUser(user1);
    //console.log(value);
  })();*/

/*const updateUserTest = (async function () {
    const value = await updateUser(3,user2);
    //console.log(value);
  })();*/

const getAllUsersTest = (async function () {
  const value = await getAllUsers();
  console.log(value);
})();

/*const getUserTest = (async function () {
    const value = await getUserById(3);
    console.log(value);
  })();*/

/*const createForumTest = (async function () {
    const value = await createForum(forum1);
    //console.log(value);
  })();*/

const getAllForumsTest = (async function () {
  const value = await getAllForums();
  console.log(value);
})();

/*const createMessageTest = (async function () {
    const value = await createMessage(message1);
    //console.log(value);
  })();*/

const getAllMessagesTest = (async function () {
  const value = await getAllMessages();
  if (typeof value != "string") {
    console.log(value);
    console.log(
      value[1].date.toLocaleDateString("es-MX", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      })
    );
  } else {
    console.log(value);
  }
})();

const getAllMessagesByForumTest = (async function () {
  const value = await getAllMessagesByForumId(2);
  console.log(value);
})();

const createSessionTest = (async function () {
  const value = await insertSession(session1);
  //console.log(value);
})();

/*const deleteBySessionIdTest = (async function () {
    const value = await deleteBySessionId(1);
    //console.log(value);
  })();*/

const deleteBySessionIdTest = (async function () {
  const value = await deleteByUserId("1");
  //console.log(value);
})();

const getAllMessagesByForumIdWithUserNameTest = (async function () {
  const value = await getAllMessagesByForumIdWithUserName(1);
  if (typeof value != "string") {
    console.log(value);
    console.log(value[2].users.userName);
  } else {
    console.log(value);
  }
})();