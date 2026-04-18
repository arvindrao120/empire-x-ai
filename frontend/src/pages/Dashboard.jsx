import { StatsCards } from '../components/dashboard/home/StatsCards';
import { AIStrategyForm } from '../components/dashboard/home/AIStrategyForm';
import { QuickActions } from '../components/dashboard/home/QuickActions';
import { CampaignsTable } from '../components/dashboard/home/CampaignsTable';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AIStrategyResult } from '../components/dashboard/home/AIStrategyResult';

export const Dashboard = () => {
  const [strategy, setStrategy] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide truncate mb-1 md:mb-2">Command Center</h1>
          <p className="text-xs text-gray-500 tracking-widest uppercase font-bold">Real-time automation engine oversight.</p>
        </div>

        <div className="flex items-center bg-[#101010] border border-white/5 rounded-lg p-1 self-start sm:self-auto overflow-x-auto shrink-0 max-w-full">
          <button className="px-3 md:px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-white bg-white/10 rounded-md whitespace-nowrap">24 HOURS</button>
          <button className="px-3 md:px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-gray-500 hover:text-white transition-colors whitespace-nowrap">7 DAYS</button>
          <button className="px-3 md:px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-gray-500 hover:text-white transition-colors whitespace-nowrap">30 DAYS</button>
        </div>
      </motion.div>

      {/* Top Info Cards */}
      <StatsCards />

      {/* Grid Layout for Forms and Shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <AIStrategyForm onResult={setStrategy} />
        <QuickActions />
      </div>
      {strategy && <AIStrategyResult strategy={strategy} />}

      {/* Botom Table */}
      <CampaignsTable />
    </>
  );
};
