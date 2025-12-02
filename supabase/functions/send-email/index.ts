import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    // Validate inputs
    if (!name || name.length < 3) {
      throw new Error("Nome deve ter no mínimo 3 caracteres");
    }
    if (!email || !email.includes("@")) {
      throw new Error("E-mail inválido");
    }
    if (!message || message.length < 10) {
      throw new Error("Mensagem deve ter no mínimo 10 caracteres");
    }

    // Log the contact request (in production, you would send an email here)
    console.log("Nova solicitação de contato recebida:");
    console.log(`Nome: ${name}`);
    console.log(`E-mail: ${email}`);
    console.log(`Mensagem: ${message}`);

    // For now, we'll simulate a successful email send
    // To enable actual email sending, you would need to:
    // 1. Add RESEND_API_KEY secret
    // 2. Uncomment the Resend integration below

    /*
    // Uncomment this section when you have RESEND_API_KEY configured
    import { Resend } from "npm:resend@2.0.0";
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    
    const emailResponse = await resend.emails.send({
      from: "CIA das Entregas <onboarding@resend.dev>",
      to: ["ciadasentregas@yahoo.com.br"],
      subject: `Nova solicitação de entrega - ${name}`,
      html: `
        <h2>Nova Solicitação de Contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });
    
    console.log("Email sent successfully:", emailResponse);
    */

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Mensagem recebida com sucesso!" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-email function:", error);
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
