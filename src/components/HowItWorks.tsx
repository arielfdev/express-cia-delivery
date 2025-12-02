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
    <section id="como-funciona" className="py-24 bg-surface-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Como Funciona
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simples e <span className="text-gradient-gold">rápido</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Em apenas 4 passos, sua entrega é realizada com toda a segurança e profissionalismo que você merece.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}

              {/* Card */}
              <div className="relative bg-card border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-card">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground font-heading font-bold text-sm px-4 py-1 rounded-full">
                  Passo {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
