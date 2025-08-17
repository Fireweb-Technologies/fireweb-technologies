import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_APP_PASSWORD, 
      },
    });

    const mailOptionsToOwner = {
      from: process.env.GMAIL_USER,
      to: "technologies.fireweb@gmail.com", 
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            ${
              service
                ? `<p><strong>Service Interested:</strong> ${service}</p>`
                : ""
            }
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Email:</strong>  ${email}
            </p>
          </div>
        </div>
      `,
    };

    const mailOptionsToClient = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting Fireweb Technologies",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Fireweb Technologies</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Web Development & Digital Marketing</p>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #374151; margin-top: 0;">Thank you for reaching out!</h2>
            
            <p style="color: #6b7280; line-height: 1.6;">
              Hi ${name},
            </p>
            
            <p style="color: #6b7280; line-height: 1.6;">
              Thank you for contacting Fireweb Technologies. We've received your message and our team will review your project requirements carefully.
            </p>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
              <ul style="color: #6b7280; line-height: 1.6; padding-left: 20px;">
                <li>Our team will review your requirements within 24 hours</li>
                <li>We'll prepare a customized proposal for your project</li>
                <li>You'll receive a detailed response with timeline and pricing</li>
                <li>We'll schedule a consultation call to discuss your project</li>
              </ul>
            </div>
            
            <p style="color: #6b7280; line-height: 1.6;">
              If you have any urgent questions, feel free to reply to this email or contact us directly.
            </p>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #dbeafe; border-radius: 8px;">
              <h4 style="color: #1e40af; margin-top: 0;">Contact Information</h4>
              <p style="color: #1e40af; margin: 5px 0;">
                📧 Email: technologies.fireweb@gmail.com<br>
                🕒 Business Hours: Mon-Fri, 9AM-6PM IST
              </p>
            </div>
            
            <p style="color: #9ca3af; font-size: 14px; margin-top: 30px;">
              Best regards,<br>
              <strong>Fireweb Technologies Team</strong>
            </p>
          </div>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(mailOptionsToOwner),
      transporter.sendMail(mailOptionsToClient),
    ]);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
