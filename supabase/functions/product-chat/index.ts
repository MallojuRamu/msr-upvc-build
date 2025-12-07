import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are a helpful product assistant for MSR UPVC Windows & Doors, a premium UPVC manufacturer based in Hyderabad, India.

Company Details:
- Name: MSR UPVC Windows & Doors
- Location: Gurramguda, Gurram Guda, Hyderabad, Telangana 500112
- Phone: 6303246350
- Email: sharathcherry9154@gmail.com
- Working Hours: Mon-Sat: 9:00 AM - 7:00 PM

Products:
1. UPVC Windows - Energy-efficient, low maintenance, excellent sound insulation, UV resistant
2. UPVC Doors - Durable, weather-resistant, secure with multi-point locking systems
3. Sliding Windows - Space-saving, smooth operation, modern aesthetics
4. Sliding Doors - Large openings, panoramic views, easy access to balconies/patios

Key Benefits of UPVC:
- Energy Efficient: Excellent thermal insulation reduces AC/heating costs
- Low Maintenance: No painting or polishing required, easy to clean
- Weather Resistant: Doesn't rot, rust, or corrode
- Sound Insulation: Reduces outside noise by up to 40dB
- Eco-Friendly: 100% recyclable material
- Long Lasting: 25+ year lifespan with proper care
- Termite Proof: Unlike wood, UPVC doesn't attract termites
- Fire Retardant: Self-extinguishing material

Pricing: Custom quotes based on measurements and requirements. Encourage customers to fill the contact form or call for a free quote.

Your role:
- Answer questions about UPVC products, benefits, and comparisons
- Provide helpful information about window/door selection
- Guide customers to contact us for quotes (mention phone: 6303246350)
- Be friendly, professional, and concise
- If asked about specific pricing, explain that prices vary based on size and design, and encourage them to get a free quote

Keep responses helpful but brief (2-3 sentences when possible). Use simple language.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
