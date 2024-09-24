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
  // Clone to modify it if necessary
  const url = req.nextUrl.clone();
  // Define the URL we want to compare with
  const targetUrl = new URL("/forums/newUser", req.url); // Replace with the destination URL
  // Compare both URLs
  if (url.pathname === targetUrl.pathname) {
    // If the URLs match
    const userId = session[0].userId;
    if (userId != "d6ed320e-7a62-4a0b-8aad-e4c098a6e364") {
      return NextResponse.redirect(new URL(`/`, req.url));
    }
  }
}

export const config = {
  matcher: ["/((?!$|_next/static|_next/image|favicon.ico|login|images).*)"],
};
