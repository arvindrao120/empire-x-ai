import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
// import { Button } from '../common/Button';
import { ContentContainer } from '../layout/ContentContainer';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, Zap, Shield, TrendingUp } from 'lucide-react';

// Animated counter hook
const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatItem = ({ value, suffix, label, started }) => {
  const count = useCounter(value, 2000, started);
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-2xl md:text-3xl font-black text-white">
        {count}{suffix}
      </span>
      <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{label}</span>
    </div>
  );
};

export const HeroSection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setStatsStarted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: 12400, suffix: '+', label: 'Campaigns Launched' },
    { value: 3, suffix: 'x', label: 'Avg ROI Boost' },
    { value: 98, suffix: '%', label: 'Uptime' },
    { value: 500, suffix: '+', label: 'Active Users' },
  ];

  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626]/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#DC2626]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#DC2626]/15 rounded-full blur-[60px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <ContentContainer className="relative z-10 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 mb-8"
        >
          <Zap size={12} className="text-[#DC2626]" />
          <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626]">
            AI-Powered Meta Ads Automation
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 uppercase leading-none"
        >
          Automate Your<br />
          <span className="text-[#DC2626]">Meta Ads</span>{' '}
          <span className="text-white">With AI</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Create, manage and optimize Facebook & Instagram ads using artificial
          intelligence for high-velocity performance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {user ? (
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#DC2626] hover:bg-[#c91f1f] text-white text-sm font-black tracking-widest uppercase transition-colors shadow-[0_4px_24px_rgba(220,38,38,0.4)] cursor-pointer"
            >
              Go to Dashboard →
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#DC2626] hover:bg-[#c91f1f] text-white text-sm font-black tracking-widest uppercase transition-colors shadow-[0_4px_24px_rgba(220,38,38,0.4)] cursor-pointer"
            >
              Get Started Free →
            </button>
          )}
          <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent border border-white/10 hover:border-white/20 text-white text-sm font-black tracking-widest uppercase transition-colors cursor-pointer">
            Watch Demo
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mb-16 flex-wrap"
        >
          {[
            { icon: Shield, text: 'Enterprise Secure' },
            { icon: Zap, text: 'Meta Official Partner' },
            { icon: TrendingUp, text: 'No Credit Card Needed' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <badge.icon size={13} className="text-[#DC2626]/60" />
              <span className="text-[11px] font-bold text-gray-600 tracking-widest uppercase">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/[0.05]"
        >
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} started={statsStarted} />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-gray-600" />
          </motion.div>
        </motion.div>

      </ContentContainer>
    </section>
  );
};