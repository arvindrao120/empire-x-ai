import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ContentContainer } from '../layout/ContentContainer';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What is EmpireX and how does it work?",
    a: "EmpireX is an AI-powered Meta Ads automation platform. You connect your Facebook Ad Account, describe your campaign goals, and our AI generates a complete ad strategy — targeting, budget split, ad copy, and optimal placements — then deploys it automatically."
  },
  {
    q: "Do I need Meta Business Verification to use EmpireX?",
    a: "You can connect your Ad Account and generate AI strategies right away. Full campaign launch automation requires Meta Business Verification, which we are currently processing. You will be notified the moment it's live."
  },
  {
    q: "Is my Facebook Ad Account data safe?",
    a: "Absolutely. We use enterprise-grade encryption and only request the minimum required permissions. We never store your payment information and you can disconnect your account at any time."
  },
  {
    q: "What platforms does EmpireX support?",
    a: "EmpireX supports all Meta platforms — Facebook, Instagram, Messenger, WhatsApp, Threads, and Audience Network. All from a single dashboard."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes. There are no long-term contracts. You can upgrade, downgrade, or cancel your plan at any time from your settings page."
  },
  {
    q: "What AI model powers EmpireX?",
    a: "EmpireX uses Groq-powered Llama 3.3 70B for strategy generation — one of the fastest and most capable large language models available, optimized for marketing intelligence."
  },
  {
    q: "Is there a free plan available?",
    a: "Yes. The Free plan includes 1 active campaign and basic AI strategy generation — no credit card required. Upgrade to Pro or Enterprise for advanced features and higher limits."
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-white/[0.05]">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer group"
    >
      <span className={`text-sm font-black tracking-wide transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
        {faq.q}
      </span>
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#DC2626]/20 text-[#DC2626]' : 'bg-white/5 text-gray-500'}`}>
        {isOpen ? <Minus size={13} /> : <Plus size={13} />}
      </div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="text-sm text-gray-500 leading-relaxed pb-5 font-medium pr-10">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#060606]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <ContentContainer className="relative z-10">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] mb-3 block">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500">Everything you need to know about EmpireX.</p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#101010] border border-white/[0.05] rounded-2xl px-6 md:px-8"
          >
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </motion.div>

        </div>
      </ContentContainer>
    </section>
  );
};