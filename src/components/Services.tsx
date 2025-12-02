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
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Nossos Serviços
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluções completas em{" "}
            <span className="text-gradient-gold">entregas expressas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços de entrega para atender todas as suas necessidades, com segurança e profissionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-card"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
