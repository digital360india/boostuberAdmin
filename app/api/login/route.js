import connectMongoDB from "@/libs/mongoDB";
import Login from "@/models/login";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  await connectMongoDB();
  const admin = await Login.findOne({ email, password });

  if (admin) {
    const token = jwt.sign(
      { email: admin.email, userId: admin._id },
      "your-secret-key",
      {
        expiresIn: "1h",
      }
    );
    return NextResponse.json({ token, redirect: "/dashboard" });
  } else {
    return NextResponse.json({ message: "Invalid Email or password" });
  }
}