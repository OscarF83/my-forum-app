"use server";

import { getUserByUserName } from "@/db/users";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as bcrypt from "bcryptjs";
import { createSession, deleteBySessionId } from "@/db/sessions";

export async function actionLogin(formData: FormData) {
  const usernameField = formData.get("username");
  const passwordField = formData.get("password");
  if (!passwordField || !usernameField) {
    return `Missing form fields`;
  }

  const password = passwordField.valueOf();
  const username = usernameField.valueOf();
  if (typeof password !== "string" || typeof username !== "string") {
    return `Wrong field type`;
  }

  const generalPassword = "password1234";
  const generalUser = "racso83";

  //buscar usuari a la db per username
  //check si el password del usuari es igual al introduit
  const user = await getUserByUserName(username);
  if (typeof user == "string") {
    return user;
  }
  if (typeof user != "string" && user.length < 1) {
    return `Wrong credentials`;
  }
  // Check password
  const passwordMatches = await bcrypt.compare(
    password,
    user[0].hashedPassword
  );
  if (!passwordMatches) {
    return `Wrong credentials`;
  }
  /*if (password !== user[0].hashedPassword || username !== user[0].userName) {
    return `Wrong credentials`;
  }*/
  /* if (password !== generalPassword || username !== generalUser) {
    return `Wrong credentials`;
  }*/
  // Create Session
  const newSession = await createSession(user[0].userId);
  if (typeof newSession == "string") {
    return `Could not create new session`;
  }
  //cookies().set("auth", "6");
  cookies().set("auth", newSession.sessionId);

  const pathField = formData.get("path");
  const pathObj = pathField?.valueOf();
  const path = typeof pathObj === "string" ? pathObj : "";
  redirect(path ? path : "/");
}

export async function actionLogout() {
  const sessionId = cookies().get("auth");
  cookies().delete("auth");
  if (sessionId) {
    await deleteBySessionId(sessionId.value);
  }
  redirect("/login");
}
