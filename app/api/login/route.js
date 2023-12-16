import connectMongoDB from "@/libs/mongoDB";
import Login from "@/models/login";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    const {email,password} = await request.json();
    await connectMongoDB();
    const admin = await Login.findOne({email, password});
    if(admin)
    return NextResponse.json({message: "Admin Found"});
    else
    return NextResponse.json({message: "invalid Email or password"});
}