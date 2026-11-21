import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "he";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
