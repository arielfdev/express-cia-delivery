import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import FleetGallery from "@/components/FleetGallery";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CIA das Entregas - Serviços Expressos em Esteio e Região | Entregas Rápidas</title>
        <meta
          name="description"
          content="CIA das Entregas oferece serviços de entregas expressas, coletas agendadas e transporte de materiais biológicos em Esteio/RS e região. Alvará sanitário, motoboy equipado e baús identificados. Solicite agora!"
        />
        <meta
          name="keywords"
          content="entregas expressas, motoboy Esteio, transporte materiais biológicos, coletas agendadas, entregas rápidas, delivery Esteio RS"
        />
        <meta name="author" content="CIA das Entregas" />
        <link rel="canonical" href="https://ciadasentregas.com.br" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CIA das Entregas - Serviços Expressos em Esteio e Região" />
        <meta property="og:description" content="Entregas rápidas, seguras e profissionais. Especialistas em serviços expressos e transporte de materiais biológicos." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CIA das Entregas - Serviços Expressos" />
        <meta name="twitter:description" content="Entregas rápidas, seguras e profissionais em Esteio e região." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <Services />
          <FleetGallery />
          <HowItWorks />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
