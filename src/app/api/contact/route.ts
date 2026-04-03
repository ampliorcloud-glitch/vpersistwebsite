import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, interest, message, turnstileToken, botField } = body;

    // 1. Honeypot check: If the hidden 'botField' is filled, it's likely a bot.
    if (botField) {
      console.warn("Honeypot triggered - bot detected.");
      return NextResponse.json({ success: false, message: "Bot detected." }, { status: 400 });
    }

    // 2. Cloudflare Turnstile Verification
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    
    // Diagnostic: Check if keys are actually loading from Hostinger's environment
    if (!turnstileSecret) {
      console.error("DIAGNOSTIC: TURNSTILE_SECRET_KEY is MISSING from server environment.");
    }

    if (!turnstileToken) {
      return NextResponse.json({ success: false, message: "Security token missing." }, { status: 200 });
    }

    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${turnstileSecret}&response=${turnstileToken}`,
    });

    const verifyData = await verifyResponse.json();
    
    if (!verifyData.success) {
      console.error("Cloudflare Turnstile Verification FAILED:", verifyData["error-codes"]);
      // Return 200 instead of 403 to prevent Hostinger from 'hijacking' with HTML error pages
      return NextResponse.json({ 
        success: false, 
        message: "Security verification failed. Please try again or check your domain settings.",
        debug: verifyData["error-codes"] 
      }, { status: 200 });
    }

    // 3. Brevo (Sendinblue) Email Logic
    const brevoApiKey = process.env.BREVO_API_KEY;
    
    if (!brevoApiKey) {
      console.error("CRITICAL: BREVO_API_KEY is missing from environment.");
      return NextResponse.json({ success: false, message: "Server configuration error." }, { status: 500 });
    }

    // This is the admin email that will receive the leads and be the CC
    const adminEmail = process.env.CONTACT_FORM_RECIPIENT || "ankit.s@amplior.com"; 
    const senderEmail = process.env.SENDER_EMAIL || adminEmail; 
    const senderName = process.env.SENDER_NAME || "vPersist | Architecture Studio";

    const emailBody = {
      sender: { name: senderName, email: senderEmail }, 
      to: [{ email: email, name: name }], 
      cc: [{ email: adminEmail, name: "Ankit Sundriyal" }], 
      subject: `vPersist Architecture Inquiry: [Authorized] - ${interest || "General Request"}`,
      htmlContent: `
        <div style="font-family: sans-serif; padding: 40px; border: 1px solid #1a1a1a; max-width: 600px; margin: auto; background-color: #ffffff;">
          <h1 style="color: #000; font-weight: 900; letter-spacing: -1.5px; font-size: 32px; margin-bottom: 20px;">INQUIRY AUTHORIZED.</h1>
          <p style="font-size: 16px; color: #555; line-height: 1.6; font-style: italic;">"Your request to architect a predictable revenue engine has been successfully transmitted to our engineering team."</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <div style="background: #f8f8f8; padding: 25px; border-radius: 12px;">
            <p style="font-size: 12px; font-weight: 900; color: #777; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px;">Transmission Details</p>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Company:</strong> ${company || "N/A"}</p>
            <p style="margin: 5px 0;"><strong>Requirement:</strong> ${interest || "General"}</p>
          </div>
          <p style="margin-top: 30px; font-size: 14px; color: #333;">A specialist will contact you directly within 24 hours to schedule a deep-dive.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 10px; color: #aaa; text-align: center; text-transform: uppercase; letter-spacing: 1px;">&copy; vPersist Architecture Studio | 2026 Revenue Platform</p>
        </div>
      `,
    };

    console.log("Transmission Initiated to Brevo...");
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoApiKey as string,
      },
      body: JSON.stringify(emailBody),
    });

    const brevoData = await brevoResponse.json();
    console.log("Brevo Response Status:", brevoResponse.status);
    console.log("Brevo Response Data:", brevoData);

    if (!brevoResponse.ok) {
      return NextResponse.json({ success: false, message: brevoData.message || "Email delivery failed." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Inquiry transmitted successfully." });

  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json({ success: false, message: "Internal server registry error." }, { status: 500 });
  }
}
