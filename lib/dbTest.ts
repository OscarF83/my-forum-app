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