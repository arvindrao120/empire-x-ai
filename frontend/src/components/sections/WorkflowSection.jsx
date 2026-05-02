import { motion } from 'framer-motion';
import { ContentContainer } from '../layout/ContentContainer';
import { Link2, BrainCircuit, MonitorPlay } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Account",
    description: "Securely link your Facebook Ad Account with enterprise-grade encryption in just two clicks.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI Strategy Forge",
    description: "Our AI analyzes your niche and competitors to engineer a high-converting ad strategy automatically.",
  },
  {
    number: "03",
    icon: MonitorPlay,
    title: "Command & Monitor",
    description: "Launch campaigns across Meta ecosystems and monitor real-time optimization pulses.",
  }
];

export const WorkflowSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />

      <ContentContainer className="relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] mb-3 block">How It Works</span>
          <div className="flex items-end gap-6">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white">
              The Operational Flow
            </h2>
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-white/10 to-transparent mb-1" />
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">

          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-[#DC2626]/40 via-[#DC2626]/20 to-[#DC2626]/40 origin-left"
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col px-6 md:px-8 pb-12 md:pb-0 relative"
            >
              {/* Step icon circle */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#DC2626]/10 border border-[#DC2626]/20 flex items-center justify-center shrink-0 relative z-10">
                  <step.icon size={24} className="text-[#DC2626]" />
                </div>
                {/* Mobile connecting line */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden absolute left-14 top-16 w-px h-full bg-gradient-to-b from-[#DC2626]/30 to-transparent" />
                )}
              </div>

              <span className="text-6xl md:text-7xl font-black text-white/[0.04] mb-4 leading-none select-none">
                {step.number}
              </span>
              <h3 className="text-base font-black text-white uppercase tracking-wider mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};
