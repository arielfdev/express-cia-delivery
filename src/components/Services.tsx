import { Zap, Calendar, FlaskConical, Building2, Route } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Entrega Expressa",
      description:
        "Entregas urgentes com rapidez e segurança. Ideal para documentos, pequenos volumes e encomendas que não podem esperar.",
    },
    {
      icon: Calendar,
      title: "Coletas Agendadas",
      description:
        "Agende suas coletas com antecedência. Organizamos a logística para atender suas necessidades no horário mais conveniente.",
    },
    {
      icon: FlaskConical,
      title: "Transporte de Materiais Biológicos",
      description:
        "Transporte especializado com alvará sanitário, seguindo todas as normas de segurança e acondicionamento adequado.",
    },
    {
      icon: Building2,
      title: "Entrega Comercial para Empresas",
      description:
        "Soluções personalizadas para o seu negócio. Atendemos demandas recorrentes com emissão de nota fiscal.",
    },
    {
      icon: Route,
      title: "Rota Diária Programada",
      description:
        "Rotas fixas e programadas para empresas que precisam de entregas regulares. Economia e eficiência garantidas.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-24 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Nossos Serviços
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 opacity-0 animate-fade-in-up animation-delay-200 tracking-tight">
            Soluções completas em{" "}
            <span className="font-black">entregas expressas</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light opacity-0 animate-fade-in-up animation-delay-300">
            Oferecemos uma gama completa de serviços de entrega para atender todas as suas necessidades, com segurança e profissionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-card border border-border rounded-xl p-8 hover:bg-secondary transition-all duration-200 ease-out hover:-translate-y-1 hover-glow opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                <service.icon className="w-7 h-7 text-background" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
