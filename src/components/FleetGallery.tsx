import { useState } from "react";
import { ChevronLeft, ChevronRight, Truck, MapPin, Clock } from "lucide-react";
import frota1 from "@/assets/frota-1.jpeg";
import frota2 from "@/assets/frota-2.jpeg";
import frota3 from "@/assets/frota-3.jpeg";
import frota4 from "@/assets/frota-4.jpeg";

const fleetImages = [
  {
    src: frota1,
    alt: "Van CIA das Entregas - Pôr do sol na praia",
    caption: "Nossa frota presente em toda a região"
  },
  {
    src: frota2,
    alt: "Van CIA das Entregas - Vista lateral",
    caption: "Veículos identificados e equipados"
  },
  {
    src: frota3,
    alt: "Van CIA das Entregas - Entrega urbana",
    caption: "Entregas em áreas comerciais"
  },
  {
    src: frota4,
    alt: "Van CIA das Entregas - Em operação",
    caption: "Agilidade nas suas entregas"
  }
];

const stats = [
  { icon: Truck, value: "10+", label: "Veículos na Frota" },
  { icon: MapPin, value: "50+", label: "Cidades Atendidas" },
  { icon: Clock, value: "24h", label: "Suporte Disponível" }
];

const FleetGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % fleetImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + fleetImages.length) % fleetImages.length);
  };

  return (
    <section id="frota" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossa Frota
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veículos <span className="text-primary">Identificados</span> e Equipados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Contamos com uma frota moderna e identificada, garantindo segurança e profissionalismo em cada entrega.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Main Carousel */}
          <div className="relative group animate-fade-in-up animation-delay-200">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              {fleetImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {fleetImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails & Info */}
          <div className="space-y-8 animate-fade-in-up animation-delay-400">
            {/* Thumbnails Grid */}
            <div className="grid grid-cols-4 gap-3">
              {fleetImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative overflow-hidden rounded-lg aspect-square transition-all duration-300 ${
                    index === currentIndex 
                      ? "ring-2 ring-primary ring-offset-2 scale-105" 
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Diferenciais da Nossa Frota
              </h3>
              <ul className="space-y-3">
                {[
                  "Veículos com baús identificados",
                  "Rastreamento em tempo real",
                  "Motoristas treinados e equipados",
                  "Manutenção preventiva regular"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetGallery;
