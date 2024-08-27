import { db } from "./db";

export type Session = {
  sessionId?: number;
  expiresAt: Date;
  userId: number;
};

export async function createSession(sessionData: Session) {
  try {
    const result = await db.sessions.create({ data: sessionData });
    return result;
  } catch (e) {
    console.log(`Error caught: ${e}`);
    return "Internal Server Error, please try again later!";
  }
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

export async function getSessionById(sessionId: number) {
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

export async function getAllSessionsByUserId(userId: number) {
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

export async function deleteBySessionId(sessionId: number) {
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

export async function deleteByUserId(userId: number) {
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
