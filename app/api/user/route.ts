import { NextResponse } from "next/server";
import { getCurrentUserFromCookie } from "@/lib/auth";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    const payload = await getCurrentUserFromCookie();

    if (!payload || !payload.userId) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    try {
      await connectToDatabase();
      const user = await User.findById(payload.userId).select("-password -resetPasswordToken -resetPasswordExpires");

      if (!user) {
        return NextResponse.json({ user: null }, { status: 401 });
      }

      return NextResponse.json({
        user: {
          userId: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
        },
      });
    } catch {
      // If DB is temporarily unreachable, fallback to verified JWT payload
      return NextResponse.json({
        user: {
          userId: payload.userId,
          name: payload.name,
          email: payload.email,
          role: payload.role,
        },
      });
    }
  } catch (error) {
    console.error("Fetch user session error:", error);
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
