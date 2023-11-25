import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/profile"];
const authRoutes = ["/login"];
const publicRoutes = ["/about", "/"];

export function middleware(request: NextRequest) {
  const token = request.headers.get("Authorization");

  // if (request.nextUrl.pathname.startsWith("/login") && !token) return;

  // ?.startsWith("Bearer ")) {
  // token = req.headers.get("Authorization")?.substring(7);
  // }

  if (!token && protectedRoutes.includes(request.nextUrl.pathname)) {
    request.cookies.delete("currentUser");
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("currentUser");

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
