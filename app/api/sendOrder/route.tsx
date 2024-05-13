"use server";
import { Resend } from "resend"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
    try {
      const data = await request.json();
      const htmlContent = data.htmlContent; // Assuming 'htmlContent' contains the HTML
  
      await resend.emails.send({
        from: "info@rodi.hadizproductions.com",
        to: "anadalal0000@gmail.com",
        subject: "New Order",
        html: htmlContent
      });
  
      return new Response("Email sent successfully", { status: 200 });
    } catch (error) {
      return new Response("Failed to send email", { status: 500 });
    }
  }
  
