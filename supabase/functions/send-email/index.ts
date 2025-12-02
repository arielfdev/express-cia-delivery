import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

// Validation functions
function validateName(name: string): boolean {
  return typeof name === "string" && name.trim().length >= 3;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === "string" && emailRegex.test(email.trim());
}

function validateMessage(message: string): boolean {
  return typeof message === "string" && message.trim().length >= 10;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    // Validate inputs
    if (!validateName(name)) {
      console.log("Validation failed: name");
      return new Response(
        JSON.stringify({ success: false, message: "Dados inválidos." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!validateEmail(email)) {
      console.log("Validation failed: email");
      return new Response(
        JSON.stringify({ success: false, message: "Dados inválidos." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!validateMessage(message)) {
      console.log("Validation failed: message");
      return new Response(
        JSON.stringify({ success: false, message: "Dados inválidos." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();

    console.log("Sending email for contact:", sanitizedName);

    // Send email using Resend API directly
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "CIA das Entregas <onboarding@resend.dev>",
        to: ["ciadasentregas@yahoo.com.br"],
        reply_to: sanitizedEmail,
        subject: "Novo contato pelo site – CIA das Entregas",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Novo Contato pelo Site</h2>
            <hr style="border: 1px solid #eee;">
            <p><strong>Nome:</strong> ${sanitizedName}</p>
            <p><strong>E-mail:</strong> ${sanitizedEmail}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${sanitizedMessage.replace(/\n/g, '<br>')}</p>
            <hr style="border: 1px solid #eee;">
            <p style="color: #666; font-size: 12px;">Este e-mail foi enviado através do formulário de contato do site CIA das Entregas.</p>
          </div>
        `,
        text: `Novo Contato pelo Site - CIA das Entregas\n\nNome: ${sanitizedName}\nE-mail: ${sanitizedEmail}\n\nMensagem:\n${sanitizedMessage}\n\n---\nEste e-mail foi enviado através do formulário de contato do site CIA das Entregas.`,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error("Failed to send email");
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Mensagem enviada com sucesso! Em breve entraremos em contato." 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "Erro ao enviar mensagem. Tente novamente mais tarde." 
      }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
