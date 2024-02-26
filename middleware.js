export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  const isLoggedIn = req.cookies.get("user")?.value === "true";

  if (!isLoggedIn) {
    console.log("Welcoem bakc");
  }
}
