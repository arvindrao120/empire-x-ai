import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { CampaignStats } from '../components/campaigns/CampaignStats';
import { AICommandForm } from '../components/campaigns/AICommandForm';
import { ActiveOperations } from '../components/campaigns/ActiveOperations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Launch',
    desc: 'Launch your campaigns in minutes with AI-powered setup. No guesswork, just results.',
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    desc: 'Reach exactly the right audience with advanced demographic and interest-based targeting.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Optimization',
    desc: 'Our AI continuously monitors and optimizes your campaigns for maximum ROI.',
  },
  {
    icon: Shield,
    title: 'Budget Protection',
    desc: 'Smart budget controls ensure you never overspend while maximizing ad performance.',
  },
];

export const Campaigns = () => {
  const [strategy, setStrategy] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-1">
              Campaigns
            </h1>
            <p className="text-xs text-gray-500 tracking-widest uppercase font-bold">
              Manage Your Ad Campaigns
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#DC2626]/10 border border-[#DC2626]/20">
            <Sparkles size={14} className="text-[#DC2626]" />
            <span className="text-xs font-bold text-[#DC2626] tracking-wider">AI Powered</span>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <CampaignStats />
      </motion.div>

      {/* Why EmpireX Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-6 bg-gradient-to-r from-[#DC2626]/10 to-transparent border border-[#DC2626]/20 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <h2 className="text-lg font-black text-white uppercase tracking-widest mb-1">
            🚀 Why EmpireX Campaigns?
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            EmpireX uses advanced AI to create, manage and optimize your Meta ad campaigns.
            Our platform has helped businesses achieve <span className="text-[#DC2626] font-bold">3x better ROI</span> compared to manual campaign management.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#DC2626] text-white text-xs font-bold tracking-wider uppercase whitespace-nowrap hover:bg-red-700 transition-colors">
          Learn More <ArrowRight size={13} />
        </button>
      </motion.div>

      {/* Main Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-6"
      >
        <div className="w-full">
          <AICommandForm onResult={(strategy) => {
            sessionStorage.setItem('aiStrategy', JSON.stringify(strategy));
            navigate('/ai-strategy');
          }} />
        </div>
        <div className="w-full">
          <ActiveOperations />
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <h2 className="text-lg font-black text-white uppercase tracking-widest mb-4">
          What EmpireX Does For You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-[#101010] border border-white/5 rounded-xl p-5 hover:border-[#DC2626]/20 hover:shadow-[0_0_20px_rgba(220,38,38,0.08)] transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#DC2626]/10 flex items-center justify-center mb-4 group-hover:bg-[#DC2626]/20 transition-colors">
                <feature.icon size={18} className="text-[#DC2626]" />
              </div>
              <h3 className="text-sm font-black text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-[#101010] border border-white/5 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div>
          <h3 className="text-lg font-black text-white uppercase tracking-widest mb-1">
            Ready to Scale Your Business?
          </h3>
          <p className="text-sm text-gray-400">
            Upgrade to Pro and unlock unlimited campaigns, advanced analytics and priority AI support.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#ec4899] text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all whitespace-nowrap">
          <Sparkles size={14} />
          Upgrade to Pro
        </button>
      </motion.div>
    </>
  );
};

export default Campaigns;