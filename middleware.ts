import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getSessionById } from "./lib/sessions";

export async function middleware(req: NextRequest) {
  const authCookie = cookies().get("auth");
  if (!authCookie) {
    return NextResponse.redirect(
      new URL(`/login?path=${req.nextUrl.pathname}`, req.url)
    );
  }
  const token = authCookie.value;
  const session = await getSessionById(token);
  if(typeof session == "string"){
    return
  }
  if (!req.nextUrl.searchParams.has("userId")) {
    const userId = session[0].userId;
    req.nextUrl.searchParams.set("userId", `${session[0].userId}`);
    return NextResponse.redirect(req.nextUrl);
  }
  /*const userId = "1";
  if (!req.nextUrl.searchParams.has("userId")) {
    req.nextUrl.searchParams.set("userId", userId);
    return NextResponse.redirect(req.nextUrl);
  }*/
}

export const config = {
  matcher: ["/((?!$|_next/static|_next/image|favicon.ico|login|images).*)"],
};
