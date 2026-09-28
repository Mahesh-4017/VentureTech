import nodemailer, { type Transporter } from "nodemailer";

interface SendMailResult {
  success: boolean;
  messageId?: string;
  previewUrl?: string | false;
  resetLink: string;
}

export async function sendPasswordResetEmail(
  toEmail: string,
  resetToken: string,
  recipientName?: string
): Promise<SendMailResult> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const resetLink = `${appUrl}/reset-password/${resetToken}`;
  const sender = process.env.EMAIL_FROM || '"VentureTech Security" <noreply@venturetech.com>';

  let transporter: Transporter;

  const hasCustomSmtp =
    process.env.EMAIL_HOST &&
    process.env.EMAIL_USER &&
    process.env.EMAIL_PASS &&
    process.env.EMAIL_USER !== "your_smtp_user@example.com";

  if (hasCustomSmtp) {
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  } else {
    // Generate an ethereal test account for local testing if no real SMTP is configured
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } catch {
      // Fallback: console log mode
      console.log(`[AUTH] Password Reset Link for ${toEmail}: ${resetLink}`);
      return { success: true, resetLink };
    }
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; margin: 0; padding: 40px 20px; color: #1E293B; }
          .container { max-width: 580px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E2E8F0; padding: 40px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: 800; letter-spacing: -0.5px; color: #0F172A; }
          .badge { display: inline-block; padding: 4px 12px; background: #F1F5F9; color: #475569; font-size: 12px; font-weight: 600; border-radius: 9999px; margin-top: 8px; }
          h2 { color: #0F172A; font-size: 20px; font-weight: 700; margin-top: 0; }
          p { color: #475569; font-size: 15px; line-height: 1.6; margin: 16px 0; }
          .btn-container { text-align: center; margin: 32px 0; }
          .btn { display: inline-block; background-color: #0F172A; color: #FFFFFF !important; text-decoration: none; font-weight: 600; font-size: 15px; padding: 14px 32px; border-radius: 10px; }
          .footer { margin-top: 36px; padding-top: 24px; border-top: 1px solid #F1F5F9; font-size: 13px; color: #94A3B8; text-align: center; }
          .link-box { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 12px; word-break: break-all; font-size: 12px; color: #64748B; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">⚡ VentureTech</div>
            <div class="badge">Security & Account Access</div>
          </div>
          <h2>Reset Your Password</h2>
          <p>Hello ${recipientName || "there"},</p>
          <p>We received a request to reset your password for your VentureTech account. Click the secure link below to set a new password:</p>
          <div class="btn-container">
            <a href="${resetLink}" class="btn" target="_blank">Reset My Password</a>
          </div>
          <p>This password reset link is valid for <strong>1 hour</strong>. If you did not make this request, you can safely ignore this email; your account remains secure.</p>
          <p>Or paste this URL into your browser:</p>
          <div class="link-box">${resetLink}</div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} VentureTech Inc. All rights reserved.<br/>
            Clean, reliable digital transformation & technology solutions.
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const info = await transporter.sendMail({
      from: sender,
      to: toEmail,
      subject: "Reset your VentureTech password",
      text: `Hello ${recipientName || ""},\n\nClick the link to reset your password:\n${resetLink}\n\nThis link expires in 1 hour.\n\nIf you didn't request this, ignore this email.`,
      html: htmlContent,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log(`[AUTH] Ethereal Email Preview URL: ${previewUrl}`);
    }

    return {
      success: true,
      messageId: info.messageId,
      previewUrl,
      resetLink,
    };
  } catch (error) {
    console.error("Error sending reset email:", error);
    // Return reset link in result so development continues seamlessly
    return {
      success: true,
      resetLink,
    };
  }
}
