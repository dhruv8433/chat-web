import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  const { pathname } = req.nextUrl;
  const url = "http://localhost:3000/";

  const isLoggedIn = req.cookies.get("user")?.value === "true";

  if (isLoggedIn && pathname.startsWith("/")) {
    console.log("redirecting to " + url + "chats");
    return NextResponse.redirect(url + "chats");
  }
}
