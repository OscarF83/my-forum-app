import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getSessionById } from "./db/sessions";

export async function middleware(req: NextRequest) {
  const authCookie = cookies().get("auth");
  if (!authCookie) {
    return NextResponse.redirect(
      new URL(`/login?path=${req.nextUrl.pathname}`, req.url)
    );
  }
  const sessionId = authCookie.value;
  const session = await getSessionById(sessionId);
  if (typeof session == "string") {
    return NextResponse.redirect(
      new URL(`/login?path=${req.nextUrl.pathname}`, req.url)
    );
  }
  const now = new Date();
  if (session[0].expiresAt < now) {
    return NextResponse.redirect(
      new URL(`/login?path=${req.nextUrl.pathname}`, req.url)
    );
  }

  const url = req.nextUrl.clone(); // Clonamos para poder modificarla si es necesario
  // Definimos la URL con la que queremos comparar
  const targetUrl = new URL("/forums/newUser", req.url); // Reemplaza con tu URL objetivo
  // Comparar ambas URLs
  if (url.pathname === targetUrl.pathname) {
    // Si las rutas son iguales
    const userId = session[0].userId;
    if (userId != "48923dad-e6cc-495c-8d0b-0a7af7cfadc4") {
      return NextResponse.redirect(
        new URL(`/`, req.url)
      );
    }
  }

  /* if (!req.nextUrl.searchParams.has("rrr")) {
    const userId = session[0].userId;
    req.nextUrl.searchParams.set("rrr", `${session[0].userId}`);
    return NextResponse.redirect(req.nextUrl);
  }*/
  /*const userId = "1";
  if (!req.nextUrl.searchParams.has("userId")) {
    req.nextUrl.searchParams.set("userId", userId);
    return NextResponse.redirect(req.nextUrl);
  }*/
}

export const config = {
  matcher: ["/((?!$|_next/static|_next/image|favicon.ico|login|images).*)"],
};
