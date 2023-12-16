import connectMongoDB from "@/libs/mongoDB";
import Login from "@/models/login";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { email, password } = await request.body();
  await connectMongoDB();
  const admin = await Login.findOne({ email, password });
  console.log("found")

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
