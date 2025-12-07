import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  service_type: string;
  location: string;
  quantity?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service_type, location, quantity }: ContactEmailRequest = await req.json();

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "MSR UPVC <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting MSR UPVC Windows & Doors!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0A2647, #144272); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { color: #FF7B00; font-weight: bold; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .details { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>MSR UPVC Windows & Doors</h1>
              <p>Premium Quality UPVC Solutions</p>
            </div>
            <div class="content">
              <h2>Thank you, ${name}!</h2>
              <p>We have received your inquiry and our team will contact you shortly.</p>
              
              <div class="details">
                <h3>Your Request Details:</h3>
                <p><strong>Service:</strong> ${service_type}</p>
                <p><strong>Location:</strong> ${location}</p>
                ${quantity ? `<p><strong>Quantity:</strong> ${quantity}</p>` : ''}
                <p><strong>Phone:</strong> ${phone}</p>
              </div>
              
              <p>We typically respond within <span class="highlight">24 hours</span>.</p>
              <p>For urgent inquiries, please call us at <span class="highlight">6303246350</span>.</p>
              
              <div class="footer">
                <p>MSR UPVC Windows & Doors</p>
                <p>Gurramguda, Gurram Guda, Hyderabad, Telangana 500112</p>
                <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Customer email sent successfully:", customerEmailResponse);

    // Send notification email to business owner
    const ownerEmailResponse = await resend.emails.send({
      from: "MSR UPVC Website <onboarding@resend.dev>",
      to: ["sharathcherry9154@gmail.com"],
      subject: `New Inquiry from ${name} - ${service_type}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0A2647; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .details { background: white; padding: 15px; border-radius: 8px; }
            .label { color: #666; font-size: 12px; text-transform: uppercase; }
            .value { font-size: 16px; margin-bottom: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Customer Inquiry</h2>
            </div>
            <div class="content">
              <div class="details">
                <p class="label">Customer Name</p>
                <p class="value">${name}</p>
                
                <p class="label">Email</p>
                <p class="value"><a href="mailto:${email}">${email}</a></p>
                
                <p class="label">Phone</p>
                <p class="value"><a href="tel:${phone}">${phone}</a></p>
                
                <p class="label">Service Type</p>
                <p class="value">${service_type}</p>
                
                <p class="label">Location</p>
                <p class="value">${location}</p>
                
                ${quantity ? `
                <p class="label">Approximate Quantity</p>
                <p class="value">${quantity}</p>
                ` : ''}
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Owner notification email sent:", ownerEmailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
