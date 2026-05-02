import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { WorkflowSection } from '../components/sections/WorkflowSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { PricingSection } from '../components/sections/PricingSection';
// import { LockSection } from '../components/sections/LockSection';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection />
        <WorkflowSection />
        <FeaturesSection />
        <PricingSection />
        {/* <LockSection /> */}
      </main>
      
      <Footer />
    </div>
  );
};
