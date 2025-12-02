import { ArrowRight, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-cia-entregas.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo - discreto acima do título */}
          <div className="mb-8 opacity-0 animate-fade-in-up">
            <img
              src={logo}
              alt="CIA das Entregas"
              className="h-16 md:h-20 w-auto"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <Zap className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Serviços Expressos em Esteio e Região</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in-up animation-delay-200">
            Entrega <span className="font-black">rápida</span>, segura e{" "}
            <span className="font-black">profissional</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 opacity-0 animate-fade-in-up animation-delay-300">
            Especialistas em serviços expressos e transporte de materiais, incluindo materiais biológicos com toda a segurança e conformidade necessária.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in-up animation-delay-400">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Solicitar Entrega
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Nossos Serviços
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 opacity-0 animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Shield className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-left">
                <p className="font-heading font-semibold text-foreground">Alvará Sanitário</p>
                <p className="text-sm text-muted-foreground">Totalmente regularizado</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Clock className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-left">
                <p className="font-heading font-semibold text-foreground">Entrega Rápida</p>
                <p className="text-sm text-muted-foreground">Agilidade garantida</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-left">
                <p className="font-heading font-semibold text-foreground">Motoboy Equipado</p>
                <p className="text-sm text-muted-foreground">Baús identificados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
