import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { WorkflowSection } from '../components/sections/WorkflowSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { PricingSection } from '../components/sections/PricingSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CTASection } from '../components/sections/CTASection';

export const Login = () => {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <HeroSection />
        <WorkflowSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

