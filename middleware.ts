import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authCookie = cookies().get("auth");
  if (!authCookie) {
    return NextResponse.redirect(
      new URL(`/login?path=${req.nextUrl.pathname}`, req.url)
    );
  }
  const userId = "1";
  if (!req.nextUrl.searchParams.has("userId")) {
    req.nextUrl.searchParams.set("userId", userId);
    return NextResponse.redirect(req.nextUrl);
  }
}

export const config = {
  matcher: ["/((?!$|_next/static|_next/image|favicon.ico|login|images).*)"],
};
