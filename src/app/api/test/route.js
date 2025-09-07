import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

  const MAILCHIMP_AUDIENCE_ID='5d6db21fd0';
mailchimp.setConfig({
  apiKey: 'dc693a4a3b42a50360ae8e5d556bf951-us21',
  server: 'us21', // e.g. "us21"
});

export async function GET() {
  try {
    // Fetch basic info about your account
    const ping = await mailchimp.ping.get();

    return NextResponse.json({
      message: "Mailchimp API key works ✅",
      ping,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.response?.body?.detail || err.message },
      { status: 400 }
    );
  }
}
