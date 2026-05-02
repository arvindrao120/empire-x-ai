import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContentContainer } from '../layout/ContentContainer';
import { Check, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ["1 Active Campaign", "Basic AI Strategy", "Standard Analytics", "Email Support"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 999,
    yearlyPrice: 799,
    features: ["10 Active Campaigns", "Advanced AI Generation", "Full Analytics Suite", "Auto-scheduling", "Priority Support", "Multi-platform Deploy"],
    cta: "Go Pro Now",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    monthlyPrice: 2999,
    yearlyPrice: 2399,
    features: ["Unlimited Campaigns", "Priority AI Processing", "Custom API Access", "24/7 Priority Support", "Dedicated Account Manager", "Custom Integrations"],
    cta: "Contact Sales",
    highlighted: false,
  }
];

export const PricingSection = () => {
  const [yearly, setYearly] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <ContentContainer className="relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] mb-3 block">Pricing</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white mb-3">
            Scalable Command Plans
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">Precision tools for every stage of your growth.</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#101010] border border-white/5 rounded-xl p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-[11px] font-black tracking-widest uppercase transition-colors cursor-pointer
                ${!yearly ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-[11px] font-black tracking-widest uppercase transition-colors cursor-pointer flex items-center gap-2
                ${yearly ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              Yearly
              <span className="text-[9px] bg-[#DC2626] text-white px-2 py-0.5 rounded-full font-black">-20%</span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-7 border transition-all
                ${plan.highlighted
                  ? 'bg-[#DC2626]/5 border-[#DC2626]/30 shadow-[0_0_40px_rgba(220,38,38,0.12)]'
                  : 'bg-[#101010] border-white/[0.06] hover:border-white/10'
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DC2626] text-white text-[9px] font-black px-4 py-1 uppercase tracking-widest rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest block mb-2">Plan {idx + 1}</span>
                <h3 className="text-xl font-black text-white mb-5">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-base text-gray-400 font-bold">₹</span>
                  <motion.span
                    key={yearly ? 'yearly' : 'monthly'}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-black text-white"
                  >
                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </motion.span>
                  <span className="text-sm text-gray-500">/mo</span>
                </div>
                {yearly && plan.monthlyPrice > 0 && (
                  <p className="text-[10px] text-[#DC2626] font-black mt-1 tracking-wide">
                    Save ₹{(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-xs text-gray-400 font-medium">
                    <Check size={14} className="text-[#DC2626] shrink-0 mt-0.5 opacity-80" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => navigate('/login')}
                className={`w-full py-3 rounded-xl text-xs font-black tracking-widest uppercase transition-all cursor-pointer
                  ${plan.highlighted
                    ? 'bg-[#DC2626] hover:bg-[#c91f1f] text-white shadow-[0_4px_16px_rgba(220,38,38,0.3)]'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
              >
                {plan.highlighted && <Zap size={12} className="inline mr-2 mb-0.5" />}
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[11px] text-gray-600 mt-8 font-bold tracking-wide"
        >
          No credit card required · Cancel anytime · No hidden fees
        </motion.p>

      </ContentContainer>
    </section>
  );
};

