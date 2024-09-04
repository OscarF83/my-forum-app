"use server";

import { getUserByUserName } from "@/lib/users";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  if (password !== user[0].hashedPassword || username !== user[0].userName) {
    return `Wrong credentials`;
  }
  /* if (password !== generalPassword || username !== generalUser) {
    return `Wrong credentials`;
  }*/

  cookies().set("auth", "6");

  const pathField = formData.get("path");
  const pathObj = pathField?.valueOf();
  const path = typeof pathObj === "string" ? pathObj : "";
  redirect(path ? path : "/");
}

export async function actionLogout() {
  cookies().delete("auth");
  redirect("/login");
}
