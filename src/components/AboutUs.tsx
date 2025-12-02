import { CheckCircle2, Award, Truck, FileCheck } from "lucide-react";

const AboutUs = () => {
  const features = [
    { icon: Award, text: "Alvará sanitário válido" },
    { icon: Truck, text: "Motocicleta regulamentada" },
    { icon: CheckCircle2, text: "Motoboys equipados" },
    { icon: FileCheck, text: "Emissão de Nota Fiscal" },
  ];

  return (
    <section id="sobre" className="py-24 bg-surface-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Sobre Nós</span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Soluções <span className="text-gradient-gold">rápidas</span> e profissionais
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A <strong className="text-foreground">CIA das Entregas</strong> atua oferecendo soluções rápidas e profissionais em coletas e entregas, incluindo o transporte seguro de <strong className="text-primary">materiais biológicos</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A empresa possui alvará sanitário, motocicleta regulamentada, motoboys equipados e baús identificados, garantindo <strong className="text-foreground">agilidade, segurança e conformidade</strong> em cada operação.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-card to-surface-darker border border-border/50 rounded-3xl p-8 md:p-12 shadow-card">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-gold flex items-center justify-center">
                    <Truck className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3">Entrega Garantida</h3>
                  <p className="text-muted-foreground mb-6">
                    Reposição de veículo em caso de imprevistos
                  </p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-6 h-6 text-primary fill-primary"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl px-4 py-2 font-heading font-bold shadow-gold animate-float">
                Serviço Seguro
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-primary/50 rounded-xl px-4 py-2 font-heading font-semibold shadow-card animate-float animation-delay-300">
                Baús Identificados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
