import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

// Where to send form submissions
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "max@snaptechrepair.com";

// Which address shows up as the sender. Must be on a domain verified with Resend.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "noreply@snaptechrepair.com";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  issue?: string;   // used by HomeHero form
  message?: string; // used by ContactForm
  source?: string;  // optional: which form sent this
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const service = (body.service || "").trim();
    const message = (body.message || body.issue || "").trim();
    const source = body.source || "Website form";

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check for Resend API key before sending
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const subject = `New lead from ${name} via ${source}`;

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111827;">
        <h2 style="color: #0177e3; margin-bottom: 24px;">New form submission from SnapTech website</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 140px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="tel:${escapeHtml(phone.replace(/\D/g, ""))}">${escapeHtml(phone)}</a></td>
          </tr>` : ""}
          ${service ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Service</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${escapeHtml(service)}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Source</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${escapeHtml(source)}</td>
          </tr>
        </table>

        <div style="margin-top: 24px;">
          <p style="font-weight: 600; margin-bottom: 8px;">Message</p>
          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>

        <p style="margin-top: 24px; color: #6b7280; font-size: 13px;">
          Submitted ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} (Pacific)
        </p>
      </div>
    `;

    const textBody = [
      `New form submission from SnapTech website`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      service ? `Service: ${service}` : "",
      `Source: ${source}`,
      ``,
      `Message:`,
      message,
      ``,
      `Submitted ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} (Pacific)`,
    ]
      .filter(Boolean)
      .join("\n");

    const { error } = await resend.emails.send({
      from: `SnapTech Website <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html: htmlBody,
      text: textBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

// Escape HTML to prevent injection in the email body
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
