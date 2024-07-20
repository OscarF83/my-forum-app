import { db } from "./db";

export type Session = {
  sessionId?: number;
  expiresAt: Date;
  userId: number;
};

export async function createSession(sessionData: Session) {
  return await db.sessions.create({ data: sessionData });
}

export async function getAllSessions() {
  return await db.sessions.findMany();
}

export async function getSessionById(sessionId: number) {
  return await db.sessions.findMany({
    where: { sessionId },
  });
}

export async function getAllSessionsByUserId(userId: number) {
  return await db.sessions.findMany({
    where: { userId },
  });
}

export async function deleteBySessionId(sessionId: number) {
  return await db.sessions.deleteMany({
    where: { sessionId },
  });
}

export async function deleteByUserId(userId: number) {
  return await db.sessions.deleteMany({
    where: { userId },
  });
}
