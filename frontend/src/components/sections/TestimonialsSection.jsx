import { motion } from 'framer-motion';
import { ContentContainer } from '../layout/ContentContainer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "E-commerce Founder",
    location: "Mumbai",
    text: "EmpireX cut our campaign setup time from 3 hours to 10 minutes. The AI strategy is genuinely better than what our in-house team was producing.",
    rating: 5,
    avatar: "R",
  },
  {
    name: "Priya Nair",
    role: "Digital Marketing Lead",
    location: "Bangalore",
    text: "We scaled our ROAS from 1.8x to 4.2x within the first month. The AI knows exactly which audience segments to target.",
    rating: 5,
    avatar: "P",
  },
  {
    name: "Arjun Mehta",
    role: "Growth Hacker",
    location: "Delhi",
    text: "The auto budget optimization alone saved us ₹40,000 in the first two weeks by killing underperforming ad sets automatically.",
    rating: 5,
    avatar: "A",
  },
  {
    name: "Sneha Kapoor",
    role: "D2C Brand Owner",
    location: "Pune",
    text: "Finally an AI tool that actually understands Meta ads. The campaign strategies it generates are detailed, relevant and most importantly — they convert.",
    rating: 5,
    avatar: "S",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <ContentContainer className="relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] mb-3 block">Testimonials</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white mb-3">
            What Commanders Are Saying
          </h2>
          <p className="text-sm text-gray-500">Real results from real businesses using EmpireX.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#101010] border border-white/[0.05] rounded-2xl p-6 flex flex-col gap-4 hover:border-white/10 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-[#DC2626] fill-[#DC2626]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs text-gray-400 leading-relaxed flex-1 font-medium">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center font-black text-sm border border-[#DC2626]/15">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-xs font-black text-white">{t.name}</p>
                  <p className="text-[10px] text-gray-600 font-bold">{t.role} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </ContentContainer>
    </section>
  );
};