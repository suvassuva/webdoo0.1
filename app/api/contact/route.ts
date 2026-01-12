import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate data
        const result = contactFormSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        // HERE: In a real app, you would send an email using Resend or Nodemailer, 
        // or save to a database.
        // For now, we simulate success.

        console.log("Form Submitted:", result.data);

        return NextResponse.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
