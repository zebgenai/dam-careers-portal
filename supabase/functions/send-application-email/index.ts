
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationEmailRequest {
  jobTitle: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone?: string;
  message?: string;
  cvUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { jobTitle, applicantName, applicantEmail, applicantPhone, message, cvUrl }: ApplicationEmailRequest = await req.json();

    const emailContent = `
      <h2>New Job Application Received</h2>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Applicant Name:</strong> ${applicantName}</p>
      <p><strong>Email:</strong> ${applicantEmail}</p>
      ${applicantPhone ? `<p><strong>Phone:</strong> ${applicantPhone}</p>` : ''}
      ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
      <p><strong>CV:</strong> <a href="${cvUrl}" target="_blank">Download CV</a></p>
      <hr>
      <p><em>This application was submitted through the Mohmand Dam Job Portal.</em></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Mohmand Dam Job Portal <onboarding@resend.dev>",
      to: ["atifcyber7@gmail.com"],
      subject: `New Job Application - ${jobTitle}`,
      html: emailContent,
    });

    console.log("Application email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending application email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
