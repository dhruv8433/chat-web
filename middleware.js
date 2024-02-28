import { NextResponse } from "next/server";

let isRedirected = false;

export default async function middleware(req, res) {
  const { pathname } = req.nextUrl;
  const url = "http://localhost:3000/";

  const isLoggedIn = req.cookies.get("user")?.value === "true";

  // to run only once this middleware
  if (!isRedirected && isLoggedIn && pathname.startsWith("/")) {
    console.log("redirecting to " + url + "explore");
    isRedirected = true;
    return NextResponse.redirect(url + "explore");
  }

}
