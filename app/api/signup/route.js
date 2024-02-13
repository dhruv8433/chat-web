// nextjs-api-route.js

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDatabase } from "@/app/databases/db";
import { signupUser } from "@/app/modals/signupUser";
import { JWT_SECRET } from "@/app/config";

connectDatabase();

export async function POST(request) {
  const { username, password } = await request.json();

  const token = jwt.sign({ username }, JWT_SECRET);
  try {
    const hashpassword = await bcrypt.hash(password, 8);
    const UserSchema = new signupUser({
      username: username,
      password: hashpassword,
      token: token,
    });
    const createuser = await UserSchema.save();
    console.log("User created successfully");
    return NextResponse.json({ createuser, status: 201 });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json({ message: "Failed to create user", success: false });
  }
}
