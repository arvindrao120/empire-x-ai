import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { ContentContainer } from '../layout/ContentContainer';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <ContentContainer className="relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase"
          >
            Automate your <br className="hidden md:block" />
            <span className="gradient-text">Meta Ads</span> With AI
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-textMuted mb-10 max-w-2xl mx-auto"
          >
            Create, manage and optimize Facebook & Instagram ads using artificial intelligence for high-velocity performance.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="gradient" size="lg" className="w-full sm:w-auto">
              Get Started Free
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </ContentContainer>
    </section>
  );
};
