import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContentContainer } from '../components/layout/ContentContainer';
import {
  BrainCircuit, Rocket, BarChart3, Target, Layers,
  CalendarClock, TrendingUp, Shield, Zap, Globe,
  MessageSquare, RefreshCw
} from 'lucide-react';

const services = [
  {
    icon: BrainCircuit,
    title: "AI Ad Strategy Generation",
    description: "Our AI analyzes your business niche, competitors, and audience behavior to generate a complete, high-converting Meta ad strategy in seconds. Includes targeting, ad copy, budget split, and placement recommendations.",
    tag: "Core Feature",
    highlight: true,
  },
  {
    icon: Rocket,
    title: "Campaign Launch & Management",
    description: "Deploy fully configured Meta ad campaigns directly from EmpireX — no need to touch Ads Manager. Set it up once, let the platform handle the rest.",
    tag: "Automation",
  },
  {
    icon: Target,
    title: "Precision Audience Targeting",
    description: "Laser-focused audience segmentation using behavioral data, interests, demographics, and lookalike modeling to reach the exact people most likely to convert.",
    tag: "Targeting",
  },
  {
    icon: TrendingUp,
    title: "Budget Optimization",
    description: "Dynamic real-time redistribution of your ad spend across the highest-performing ad sets — automatically. Your budget always goes where the ROI is highest.",
    tag: "Optimization",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    description: "Live telemetry data pulled directly from Meta — impressions, clicks, CTR, ROAS, spend, and more. Every metric in one unified command center.",
    tag: "Analytics",
  },
  {
    icon: CalendarClock,
    title: "Auto Campaign Scheduling",
    description: "EmpireX identifies peak performance windows using historical data and automatically schedules your campaigns to go live at the optimal time.",
    tag: "Automation",
  },
  {
    icon: Layers,
    title: "Multi-Platform Deployment",
    description: "One campaign, all Meta surfaces — Facebook Feed, Instagram, Reels, Stories, Messenger, WhatsApp, Threads, and Audience Network. Maximized reach, zero extra effort.",
    tag: "Multi-Platform",
  },
  {
    icon: MessageSquare,
    title: "AI Ad Copy Writing",
    description: "Generate compelling headlines, primary text, and calls-to-action tailored to your product and audience — in your brand's tone and language.",
    tag: "AI Writing",
  },
  {
    icon: RefreshCw,
    title: "Creative Refresh Alerts",
    description: "Get notified when your ads start experiencing creative fatigue. EmpireX recommends when to refresh your visuals to maintain peak performance.",
    tag: "Smart Alerts",
  },
  {
    icon: Globe,
    title: "Global & Local Targeting",
    description: "Target any city, state, country, or radius with localized ad strategies. Perfect for both hyper-local businesses and global brands.",
    tag: "Geo Targeting",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption protects your ad account credentials and data. We request only minimum required Meta permissions and never store sensitive data.",
    tag: "Security",
  },
  {
    icon: Zap,
    title: "Priority AI Processing",
    description: "Pro and Enterprise users get priority queue access to our AI engine — faster strategy generation, faster insights, and real-time optimization pulses.",
    tag: "Pro Feature",
  },
];

const tagColors = {
  'Core Feature': 'bg-[#DC2626]/20 text-[#DC2626] border-[#DC2626]/30',
  'Automation': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Targeting': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Optimization': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Analytics': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Multi-Platform': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'AI Writing': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Smart Alerts': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Geo Targeting': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  'Security': 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  'Pro Feature': 'bg-[#DC2626]/15 text-[#DC2626]/80 border-[#DC2626]/20',
};

export const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080808] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-24">

        {/* Hero */}
        <div className="relative overflow-hidden mb-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#DC2626]/8 rounded-full blur-[100px] pointer-events-none" />
          <ContentContainer className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] mb-4 block">What We Offer</span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-5 leading-tight">
                Our Services
              </h1>
              <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
                A complete suite of AI-powered tools designed to help you dominate Meta advertising — from strategy to execution to optimization.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={() => navigate('/login')}
                  className="px-7 py-3 rounded-lg bg-[#DC2626] hover:bg-[#c91f1f] text-white text-[11px] font-black tracking-widest uppercase transition-colors cursor-pointer shadow-[0_4px_20px_rgba(220,38,38,0.3)]"
                >
                  Get Started Free →
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-7 py-3 rounded-lg border border-white/10 hover:border-white/20 text-white text-[11px] font-black tracking-widest uppercase transition-colors cursor-pointer"
                >
                  Talk to Us
                </button>
              </div>
            </motion.div>
          </ContentContainer>
        </div>

        {/* Services Grid */}
        <ContentContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                className={`group relative bg-[#101010] border rounded-2xl p-7 hover:border-[#DC2626]/20 transition-all duration-300 overflow-hidden
                  ${service.highlight ? 'border-[#DC2626]/25 shadow-[0_0_30px_rgba(220,38,38,0.08)]' : 'border-white/[0.05]'}`}
              >
                {/* Hover glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#DC2626]/6 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag */}
                <span className={`inline-block text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full border mb-5 ${tagColors[service.tag] || 'bg-white/5 text-gray-400 border-white/10'}`}>
                  {service.tag}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#DC2626]/10 border border-[#DC2626]/15 flex items-center justify-center mb-5 group-hover:bg-[#DC2626]/20 transition-colors">
                  <service.icon size={20} className="text-[#DC2626]" />
                </div>

                {/* Content */}
                <h3 className="text-sm font-black text-white uppercase tracking-wide mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-gray-500 mb-6 font-medium">
              Need a custom solution for your business?
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 rounded-lg border border-[#DC2626]/30 hover:border-[#DC2626]/60 text-[#DC2626] text-[11px] font-black tracking-widest uppercase transition-colors cursor-pointer"
            >
              Contact Our Team →
            </button>
          </motion.div>
        </ContentContainer>
      </main>

      <Footer />
    </div>
  );
};

export default Services;