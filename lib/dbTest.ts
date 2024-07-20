import { createForum, Forum, getAllForums } from "./forums";
import { createUser, getAllUsers, getUserById, updateUser, User, UserUpdate } from "./users";

const user1: User = {
    //userId: 1,
    userName: "rasco2",
    hashedPassword: "Pepito123",
    //name: null,
    //firstName: null,
    //secondName: null,
    email: "prueb2@hotmail.com",
    userDeleted: true
}

const user2: UserUpdate = {
    //userId: 1,
    //userName: "rasco2",
    //hashedPassword: "Pepito123",
    //name: null,
    //firstName: null,
    //secondName: null,
    //email: "prueb2@hotmail.com",
    userDeleted: true
}

const forum1 : Forum = {
  //forumId: number;
  forumName: "General",
  forumDescription: "Foro general donde cualquier tema es bienvenido",
  //forumDeleted: boolean;
};

/*const createUserTest = (async function () {
    const value = await createUser(user1);
    //console.log(value);
  })();*/

const updateUserTest = (async function () {
    const value = await updateUser(3,user2);
    //console.log(value);
  })();

const getAllUsersTest = (async function () {
  const value = await getAllUsers();
  console.log(value);
})();

const getUserTest = (async function () {
    const value = await getUserById(3);
    console.log(value);
  })();

  /*const createForumTest = (async function () {
    const value = await createForum(forum1);
    //console.log(value);
  })();*/

  const getAllForumsTest = (async function () {
    const value = await getAllForums();
    console.log(value);
  })();