import { motion } from 'framer-motion';
import { ContentContainer } from '../layout/ContentContainer';
import { Card } from '../common/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { BrainCircuit, CalendarClock, TrendingUp, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="text-primary w-6 h-6" />,
    title: "AI Ad Strategy Generation",
    description: "Deep neural networks analyze winning creative combinations across your specific niche."
  },
  {
    icon: <CalendarClock className="text-primary w-6 h-6" />,
    title: "Auto Campaign Scheduling",
    description: "Deploy campaigns during peak velocity windows identified by machine performance data."
  },
  {
    icon: <TrendingUp className="text-primary w-6 h-6" />,
    title: "Budget Optimization",
    description: "Dynamic redistribution of spend to highest ROI ad sets in real-time, 24/7."
  },
  {
    icon: <BarChart3 className="text-primary w-6 h-6" />,
    title: "Real-time Analytics",
    description: "Live telemetry streams directly from Meta tracking your unified command center."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-sectionAlt">
      <ContentContainer>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={staggerContainer}
        >
          {features.map((feature, idx) => (
            <Card key={idx} className="flex flex-col h-full bg-card shadow-sm">
              <motion.div variants={fadeInUp} className="flex flex-col h-full">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-primary/20">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-bold mb-3">{feature.title}</h3>
                <p className="text-xs text-textMuted leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </ContentContainer>
    </section>
  );
};
