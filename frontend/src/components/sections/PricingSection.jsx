import { motion } from 'framer-motion';
import { ContentContainer } from '../layout/ContentContainer';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "0",
    features: ["1 Active Campaign", "Basic AI Strategy", "Standard Analytics"],
    cta: "Start Trial",
    highlighted: false
  },
  {
    name: "Pro",
    price: "999",
    features: ["10 Active Campaigns", "Advanced AI Generation", "Full Analytics Suite", "Auto-scheduling"],
    cta: "Go Pro Now",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "2999",
    features: ["Unlimited Campaigns", "Priority AI Processing", "Custom API Access", "24/7 Priority Support"],
    cta: "Contact Sales",
    highlighted: false
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <ContentContainer>
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">Scalable Command Plans</h2>
          <p className="text-sm text-textMuted uppercase tracking-wider">Precision tools for every stage of your growth.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={staggerContainer}
        >
          {plans.map((plan, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="flex h-full">
              <Card 
                className={`w-full flex flex-col relative ${plan.highlighted ? 'border-primary/50 shadow-[0_0_30px_rgba(255,107,107,0.15)] bg-cardAlt scale-105 z-10' : 'bg-card'}`}
                hover={!plan.highlighted}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                    Recommended
                  </div>
                )}
                
                <div className="mb-8">
                  <span className="text-xs font-semibold text-textMuted uppercase tracking-widest block mb-2">Plan {idx + 1}</span>
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg">₹</span>
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-sm text-textMuted">/mo</span>
                  </div>
                </div>
                
                <ul className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-textMuted">
                      <Check className="w-5 h-5 text-primary shrink-0 opacity-80" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.highlighted ? 'gradient' : 'secondary'} 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </ContentContainer>
    </section>
  );
};
