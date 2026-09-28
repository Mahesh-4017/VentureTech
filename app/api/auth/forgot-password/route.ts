import { NextResponse } from "next/server";
import crypto from "crypto";
import connectToDatabase from "@/lib/db";
import User from "@/models/User";
import { sendPasswordResetEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });

    // For security and privacy, return generic message even if email isn't registered
    if (!user) {
      return NextResponse.json({
        message: "If that email is registered, a password reset link has been dispatched.",
      });
    }

    // Generate random 32-byte hex token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const oneHour = 60 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = new Date(Date.now() + oneHour);
    await user.save();

    // Send reset email via Nodemailer
    const emailResult = await sendPasswordResetEmail(user.email, resetToken, user.name);

    return NextResponse.json({
      message: "If that email is registered, a password reset link has been dispatched.",
      devResetLink: process.env.NODE_ENV !== "production" ? emailResult.resetLink : undefined,
      previewUrl: emailResult.previewUrl || undefined,
    });
  } catch (error: unknown) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { error: "Failed to process forgot password request. Check server logs." },
      { status: 500 }
    );
  }
}
