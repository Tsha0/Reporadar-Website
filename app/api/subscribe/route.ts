import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const runtime = "edge";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email =
    typeof payload === "object" && payload !== null && "email" in payload
      ? String((payload as { email: unknown }).email ?? "").trim()
      : "";

  if (!email || !EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const resendAudienceId = process.env.RESEND_AUDIENCE_ID;

  try {
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source: "reporadar-landing" }),
      });
      if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    } else if (resendKey && resendAudienceId) {
      const res = await fetch(
        `https://api.resend.com/audiences/${resendAudienceId}/contacts`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({ email, unsubscribed: false }),
        },
      );
      if (!res.ok && res.status !== 409) {
        throw new Error(`resend responded ${res.status}`);
      }
    } else {
      console.log(`[newsletter] subscribe (no backend configured): ${email}`);
    }
  } catch (err) {
    console.error("[newsletter] forwarding failed", err);
    return NextResponse.json(
      { error: "Could not save your email right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
