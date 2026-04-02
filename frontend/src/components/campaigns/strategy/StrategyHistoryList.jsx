import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

export const StrategyHistoryList = () => {
  const history = [
    {
      id: 1,
      campaignName: 'Q4 Holiday Push',
      date: '2 hours ago',
      objective: 'Conversions',
      status: 'ACTIVE'
    },
    {
      id: 2,
      campaignName: 'Retargeting Flow',
      date: 'Yesterday',
      objective: 'Traffic',
      status: 'DRAFT'
    },
    {
      id: 3,
      campaignName: 'Brand Awareness',
      date: '2 days ago',
      objective: 'Awareness',
      status: 'ACTIVE'
    },
    {
      id: 4,
      campaignName: 'Lead Gen Form Clicks',
      date: '1 week ago',
      objective: 'Lead Generation',
      status: 'DRAFT'
    }
  ];

  return (
    <div className="bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col h-full sticky top-6">
      <div className="flex items-center gap-2 mb-6 pb-6 border-b border-white/5">
        <Clock size={20} className="text-gray-400" />
        <h2 className="text-lg font-black text-white uppercase tracking-wide">
          MY STRATEGIES
        </h2>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {history.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-2 gap-2">
              <h3 className="text-sm font-bold text-white group-hover:text-[#DC2626] transition-colors leading-tight">
                {item.campaignName}
              </h3>
              <span
                className={`text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wider shrink-0 ${
                  item.status === 'ACTIVE'
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-yellow-500/10 text-yellow-500'
                }`}
              >
                {item.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
              <span className="truncate pr-2">{item.objective}</span>
              <span className="whitespace-nowrap">{item.date}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-6 mt-4 border-t border-white/5">
        <button className="w-full flex items-center justify-center cursor-pointer gap-2 px-4 py-3 rounded-xl bg-white/5 text-gray-300 text-sm font-bold hover:bg-white/10 hover:text-white transition-colors">
          View All Strategies <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
