import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MapPin, Mail, Phone, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string().email("E-mail inválido").max(255, "E-mail deve ter no máximo 255 caracteres"),
  message: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres").max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: "idle", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus({ type: "loading", message: "Enviando mensagem..." });
    
    try {
      const { data: response, error } = await supabase.functions.invoke("send-email", {
        body: data,
      });

      if (error) throw error;

      if (response?.success) {
        setFormStatus({ 
          type: "success", 
          message: response.message || "Mensagem enviada com sucesso! Em breve entraremos em contato." 
        });
        reset();
      } else {
        setFormStatus({ 
          type: "error", 
          message: response?.message || "Erro ao enviar mensagem. Tente novamente mais tarde." 
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({ 
        type: "error", 
        message: "Erro ao enviar mensagem. Tente novamente mais tarde." 
      });
    }
  };

  const isSubmitting = formStatus.type === "loading";

  return (
    <section id="contato" className="py-20 md:py-24 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Contato
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 opacity-0 animate-fade-in-up animation-delay-200 tracking-tight">
            Solicite sua <span className="font-black">entrega</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light opacity-0 animate-fade-in-up animation-delay-300">
            Preencha o formulário abaixo e entraremos em contato rapidamente para confirmar sua solicitação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 opacity-0 animate-slide-in-left animation-delay-400">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-heading text-2xl font-bold mb-6 tracking-tight">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Endereço</p>
                    <p className="text-muted-foreground font-light">
                      Rua 24 de Agosto, 2249<br />
                      Esteio/RS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <a
                      href="mailto:ciadasentregas@yahoo.com.br"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light"
                    >
                      ciadasentregas@yahoo.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefone / WhatsApp</p>
                    <a
                      href="tel:+5551984471357"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light"
                    >
                      (51) 98447-1357
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-xl p-8 opacity-0 animate-slide-in-right animation-delay-400">
            <h3 className="font-heading text-2xl font-bold mb-6 tracking-tight">Envie sua mensagem</h3>
            
            {/* Status Message */}
            {formStatus.type !== "idle" && formStatus.type !== "loading" && (
              <div 
                className={`flex items-center gap-3 p-4 rounded-xl mb-6 border ${
                  formStatus.type === "success" 
                    ? "bg-secondary border-border" 
                    : "bg-secondary/50 border-border"
                }`}
              >
                {formStatus.type === "success" ? (
                  <CheckCircle className="w-5 h-5 text-foreground flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
                <p className={`font-light ${formStatus.type === "success" ? "text-foreground" : "text-muted-foreground"}`}>
                  {formStatus.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome *
                </label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Seu nome completo"
                  className="h-12 bg-background border-border focus:border-foreground/50 rounded-xl"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-muted-foreground text-sm mt-2 font-light">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="seu@email.com"
                  className="h-12 bg-background border-border focus:border-foreground/50 rounded-xl"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-muted-foreground text-sm mt-2 font-light">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Descreva sua necessidade de entrega..."
                  rows={5}
                  className="bg-background border-border focus:border-foreground/50 resize-none rounded-xl"
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-muted-foreground text-sm mt-2 font-light">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
