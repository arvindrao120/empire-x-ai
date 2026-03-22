import { motion } from 'framer-motion';
import { ContentContainer } from '../layout/ContentContainer';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const steps = [
  {
    number: "01",
    title: "Connect Account",
    description: "Securely link your Facebook Ad Account with enterprise-grade encryption in just two clicks.",
    delay: 0.1
  },
  {
    number: "02",
    title: "AI Strategy Forge",
    description: "Our AI analyzes your niche and competitors to engineer a high-converting ad strategy automatically.",
    delay: 0.2
  },
  {
    number: "03",
    title: "Command & Monitor",
    description: "Launch campaigns across Meta ecosystems and monitor real-time optimization pulses.",
    delay: 0.3
  }
];

export const WorkflowSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      <ContentContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 border-b border-black/10 dark:border-white/10 pb-4"
        >
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider">The Operational Flow</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={staggerContainer}
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="flex flex-col">
              <span className="text-5xl md:text-6xl font-black text-black/5 dark:text-white/5 mb-6">
                {step.number}
              </span>
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm text-textMuted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </ContentContainer>
    </section>
  );
};
