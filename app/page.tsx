import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { CollaboratorsSection } from "@/components/sections/CollaboratorsSection";
import { WorkingWithSection } from "@/components/sections/WorkingWithSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="space-y-20 pb-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <CollaboratorsSection />
      <WorkingWithSection />
   
    </div>
  );
}
