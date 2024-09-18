export const runtime = 'nodejs';

import { db } from "./db";

export type Session = {
  sessionId: string;
  expiresAt: Date;
  userId: string;
};

export async function insertSession(sessionData: Session) {
  try {
    const result = await db.sessions.create({ data: sessionData });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function createSession(userId: string) {
  const sessionId = crypto.randomUUID();
  const expiresAt = new Date(new Date().setDate(new Date().getDate() + 30));
  return await insertSession({ sessionId, expiresAt, userId });
}

export async function getAllSessions() {
  try {
    const result = await db.sessions.findMany();
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function getSessionById(sessionId: string) {
  try {
    const result = await db.sessions.findMany({
      where: { sessionId },
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function getAllSessionsByUserId(userId: string) {
  try {
    const result = await db.sessions.findMany({
      where: { userId },
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function deleteBySessionId(sessionId: string) {
  try {
    const result = await db.sessions.deleteMany({
      where: { sessionId },
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}

export async function deleteByUserId(userId: string) {
  try {
    const result = await db.sessions.deleteMany({
      where: { userId },
    });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
}
