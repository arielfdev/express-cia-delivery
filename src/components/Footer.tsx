import { MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-cia-entregas.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="CIA das Entregas" className="h-16 md:h-20 w-auto max-w-[280px] mb-6" />
            <p className="text-muted-foreground max-w-md mb-8 font-light leading-relaxed">
              Soluções rápidas e profissionais em coletas e entregas, incluindo transporte seguro de materiais biológicos. Agilidade, segurança e conformidade em cada operação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 tracking-tight">Links Rápidos</h4>
            <ul className="space-y-4">
              {[
                { label: "Início", id: "hero" },
                { label: "Sobre Nós", id: "sobre" },
                { label: "Serviços", id: "servicos" },
                { label: "Como Funciona", id: "como-funciona" },
                { label: "Contato", id: "contato" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 tracking-tight">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Rua+24+de+Agosto,+2249,+Esteio,+RS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-light">Rua 24 de Agosto, 2249<br />Esteio/RS</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ciadasentregas@yahoo.com.br"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="font-light">ciadasentregas@yahoo.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5551984471357"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="font-light">(51) 98447-1357</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left font-light">
              © {currentYear} CIA das Entregas – Serviços Expressos. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm font-light">
              CNPJ: Empresa regularizada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
