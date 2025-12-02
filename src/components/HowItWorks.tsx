import { FileText, MessageCircle, Bike, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      step: "01",
      title: "Solicite a entrega",
      description: "Preencha o formulário de contato com os detalhes da sua entrega ou coleta.",
    },
    {
      icon: MessageCircle,
      step: "02",
      title: "Confirmação e valor",
      description: "Nossa equipe entra em contato para confirmar os detalhes e informar o valor do serviço.",
    },
    {
      icon: Bike,
      step: "03",
      title: "Coleta e entrega",
      description: "Nosso motoboy equipado realiza a coleta e entrega com toda segurança e agilidade.",
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Confirmação final",
      description: "Você recebe a confirmação de que a entrega foi realizada com sucesso.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-24 lg:py-28 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Como Funciona
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 opacity-0 animate-fade-in-up animation-delay-200 tracking-tight">
            Simples e <span className="font-black">rápido</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light opacity-0 animate-fade-in-up animation-delay-300">
            Em apenas 4 passos, sua entrega é realizada com toda a segurança e profissionalismo que você merece.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative group opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}

              {/* Card */}
              <div className="relative bg-secondary border border-border rounded-xl p-8 text-center hover:bg-accent transition-all duration-200 ease-out hover:-translate-y-1 hover-glow">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background font-heading font-bold text-sm px-4 py-1 rounded-full">
                  Passo {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors duration-200">
                  <step.icon className="w-10 h-10 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
