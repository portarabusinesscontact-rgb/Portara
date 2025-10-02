// app/api/contact/route.ts
export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, reason } = await req.json();

    if (!name || !email || !message || !reason) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const nodemailer = await import("nodemailer");

    // Optional envs to customize branding/subject easily
    const FROM_NAME = process.env.FROM_NAME || "Portara";
    const TO_EMAIL = process.env.TO_EMAIL || process.env.EMAIL_USER || "";
    const SUBJECT_PREFIX = process.env.SUBJECT_PREFIX || "Contact";

    const transporter = nodemailer.default.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      // This controls what Gmail shows instead of "me"
      from: `"${FROM_NAME}" <${process.env.EMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email,

      // Include reason + name in subject
      subject: `[${SUBJECT_PREFIX}] ${reason} — ${name}`,

      // Plain-text body
      text:
        `New contact message\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Reason: ${reason}\n\n` +
        `Message:\n${message}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Email failed" }, { status: 500 });
  }
}
