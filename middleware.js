import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  const { pathname } = req.nextUrl;

  const isLoggedIn = req.cookies.get("user")?.value === "true";

  // User is logged in and tries to access / route, redirect to /explore
  if (isLoggedIn && pathname === "/") {
    console.log("User is logged in");
    console.log("User is logged in and try to ");
    return NextResponse.redirect(new URL("https://chat-web-ruddy.vercel.app//explore"));
  }

  // User is not logged in and tries to access protected routes, redirect to /
  if (
    !isLoggedIn &&
    (pathname.startsWith("/chats") ||
      pathname.startsWith("/calls") ||
      pathname.startsWith("/explore") ||
      pathname.startsWith("/settings"))
  ) {
    console.log("User is not logged in");
    return NextResponse.redirect(new URL("https://chat-web-ruddy.vercel.app/"));
  }
 

  // Return NextResponse to continue with normal handling for other cases
  return NextResponse.next();
}
