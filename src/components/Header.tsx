import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-cia-entregas.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "sobre" },
    { label: "Serviços", id: "servicos" },
    { label: "Como Funciona", id: "como-funciona" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={() => scrollToSection("hero")} className="flex items-center">
            <img 
              src={logo} 
              alt="CIA das Entregas" 
              className="w-auto"
              style={{ maxHeight: '40px' }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-gray-200 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5551984471357"
              className="flex items-center gap-2 text-foreground font-semibold hover:text-gray-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (51) 98447-1357
            </a>
            <Button variant="hero" onClick={() => scrollToSection("contato")}>
              Solicitar Entrega
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card rounded-lg mt-2 p-6 animate-fade-in border border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-gray-200 font-medium py-2 text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+5551984471357"
                className="flex items-center gap-2 text-foreground font-semibold py-2"
              >
                <Phone className="w-4 h-4" />
                (51) 98447-1357
              </a>
              <Button
                variant="hero"
                className="mt-2 w-full"
                onClick={() => scrollToSection("contato")}
              >
                Solicitar Entrega
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
