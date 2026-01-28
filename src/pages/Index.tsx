import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { TrainingsSection } from "@/components/TrainingsSection";
import { EventsSection } from "@/components/EventsSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { GallerySection } from "@/components/GallerySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      < GallerySection />
      < TrainingsSection />
      < EventsSection />
      < ResourcesSection />
      {/* <ServicesSection /> */}
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
