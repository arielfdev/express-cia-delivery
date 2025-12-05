import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import frota1 from "@/assets/frota-1.jpeg";
import frota2 from "@/assets/frota-2.jpeg";
import frota3 from "@/assets/frota-3.jpeg";
import frota4 from "@/assets/frota-4.jpeg";

const fleetImages = [
  {
    src: frota1,
    alt: "Van CIA das Entregas - Pôr do sol na praia",
  },
  {
    src: frota2,
    alt: "Van CIA das Entregas - Vista lateral",
  },
  {
    src: frota3,
    alt: "Van CIA das Entregas - Entrega urbana",
  },
  {
    src: frota4,
    alt: "Van CIA das Entregas - Em operação",
  }
];

const FleetGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fleetImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Main Gallery */}
        <div className="relative group animate-fade-in-up animation-delay-200 max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
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
          <div className="flex justify-center gap-2 mt-6">
            {fleetImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-10" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
          {fleetImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-300 ${
                index === currentIndex 
                  ? "ring-4 ring-primary ring-offset-2 scale-105 shadow-lg" 
                  : "opacity-70 hover:opacity-100 hover:scale-102"
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
      </div>
    </section>
  );
};

export default FleetGallery;
