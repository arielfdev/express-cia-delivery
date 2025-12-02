import { ArrowRight, Shield, Clock, Zap, Truck } from "lucide-react";
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-foreground/[0.02] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground/[0.03] rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-foreground/[0.02] rounded-full blur-2xl animate-float-slow" />
        
        {/* Animated lines */}
        <div className="absolute top-1/4 right-20 w-px h-32 bg-gradient-to-b from-transparent via-foreground/20 to-transparent animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-20 w-px h-24 bg-gradient-to-b from-transparent via-foreground/10 to-transparent animate-pulse-slow animation-delay-500" />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Animated delivery icon */}
      <div className="absolute bottom-32 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="animate-drive flex items-center gap-2">
          <Truck className="w-8 h-8 text-foreground/20" />
          <div className="w-16 h-px bg-gradient-to-r from-foreground/20 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo with glow effect */}
          <div className="relative mb-8 opacity-0 animate-fade-in-up animation-delay-100">
            <div className="absolute inset-0 bg-foreground/5 blur-3xl scale-150 animate-pulse-slow" />
            <img 
              src={logo} 
              alt="CIA das Entregas - Serviços Expressos" 
              className="relative h-24 md:h-32 lg:h-40 w-auto"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in-up animation-delay-200 hover:border-foreground/30 transition-colors duration-300">
            <Zap className="w-4 h-4 text-foreground animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Serviços Expressos em Esteio e Região</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight opacity-0 animate-fade-in-up animation-delay-300 tracking-tight">
            Entrega <span className="font-black">rápida</span>, segura e{" "}
            <span className="font-black">profissional</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 opacity-0 animate-fade-in-up animation-delay-400 font-light leading-relaxed">
            Especialistas em serviços expressos e transporte de materiais, incluindo materiais biológicos com toda a segurança e conformidade necessária.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20 opacity-0 animate-fade-in-up animation-delay-500">
            <Button variant="hero" size="xl" onClick={scrollToContact} className="group">
              Solicitar Entrega
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 opacity-0 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors duration-300">
                <Shield className="w-7 h-7 text-foreground" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-foreground">Alvará Sanitário</p>
                <p className="text-sm text-muted-foreground font-light">Totalmente regularizado</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors duration-300">
                <Clock className="w-7 h-7 text-foreground" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-foreground">Entrega Rápida</p>
                <p className="text-sm text-muted-foreground font-light">Agilidade garantida</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors duration-300">
                <Zap className="w-7 h-7 text-foreground" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-foreground">Motoboy Equipado</p>
                <p className="text-sm text-muted-foreground font-light">Baús identificados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
