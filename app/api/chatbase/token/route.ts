import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getCurrentUserFromCookie } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getCurrentUserFromCookie();

    if (!user || !user.userId) {
      return NextResponse.json({ token: null, authenticated: false });
    }

    const secret = process.env.CHATBOT_IDENTITY_SECRET;
    if (!secret) {
      return NextResponse.json({
        token: null,
        authenticated: true,
        message: "CHATBOT_IDENTITY_SECRET is not configured in environment variables",
      });
    }

    // Sign identity verification token as expected by Chatbase
    const token = jwt.sign(
      {
        user_id: user.userId,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      secret,
      { expiresIn: "1h" }
    );

    return NextResponse.json({
      token,
      authenticated: true,
      user: {
        id: user.userId,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error generating Chatbase identity verification token:", error);
    return NextResponse.json({ token: null, error: "Internal server error" }, { status: 500 });
  }
}
