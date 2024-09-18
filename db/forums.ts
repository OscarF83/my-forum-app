export const runtime = 'nodejs';

import { db } from "./db";

export type Forum = {
  forumId?: number;
  forumName: string;
  forumDescription: string;
  forumDeleted?: boolean;
};

export type ForumUpdate = {
  forumId?: number;
  forumName?: string;
  forumDescription?: string;
  forumDeleted?: boolean;
};

export async function createForum(forumData: Forum) {
  try {
    const result = await db.forums.create({ data: forumData });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function updateForum(forumId: number, newForumData: ForumUpdate) {
  try {
    const result = await db.forums.update({
      where: { forumId },
      data: newForumData,
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function getAllForums() {
  try {
    const result = await db.forums.findMany();
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function getForumById(forumId: number) {
  try {
    const result = await db.forums.findMany({
      where: { forumId },
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}
