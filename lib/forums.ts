import { db } from "./db";

export type Forum = {
  forumId?: number;
  foroName: string;
  foroDescription: string;
  forumDeleted?: boolean;
};

export type ForumUpdate = {
    forumId?: number;
    foroName?: string;
    foroDescription?: string;
    forumDeleted?: boolean;
  };

export async function createForum(forumData: Forum) {
  return await db.forums.create({ data: forumData });
}

export async function updateForum(forumId: number, newForumData: ForumUpdate) {
  return await db.forums.update({
    where: { forumId },
    data: newForumData,
  });
}

export async function getAllForums() {
  return await db.forums.findMany();
}

export async function getUserById(forumId: number) {
  return await db.forums.findMany({
    where: { forumId },
  });
}