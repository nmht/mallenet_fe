import { NextResponse } from "next/server";

export function middleware(request) {
  // const isAuthenticated = false; // Replace with actual auth logic.

  // // Redirect unauthenticated users from /profile to /login
  // if (request.nextUrl.pathname === "/profile" && !isAuthenticated) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}

export const config = {
  matcher: "/profile", // Apply middleware only to /profile
};
