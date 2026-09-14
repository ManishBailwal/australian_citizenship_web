"use server";

import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: ContactFormData) {
  const { name, email, subject, message } = data;

  // Validate fields server-side
  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required." };
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email to support/admin
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address (often must match auth user for SMTP)
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Aussie Prep Support] ${subject} - from ${name}`,
      text: `You have received a new message from your contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #172033; max-width: 600px; margin: 0 auto; border: 1px solid #E4E7EC; border-radius: 12px;">
          <h2 style="color: #002868; border-bottom: 2px solid #EEF3FB; padding-bottom: 10px;"> Aussie Prep Support Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #F5F7FA; border-radius: 8px;">
            <p style="margin: 0; white-space: pre-wrap;"><strong>Message:</strong><br/>${message}</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email via Nodemailer:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}