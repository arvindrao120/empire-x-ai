import { useState } from 'react';
import { motion } from 'framer-motion';
import { StatsCards } from '../components/dashboard/home/StatsCards';
import { QuickActions } from '../components/dashboard/home/QuickActions';
import { AccountHealthCard } from '../components/dashboard/home/AccountHealthCard';
import { RecentActivityFeed } from '../components/dashboard/home/RecentActivityFeed';
import { AIInsightCard } from '../components/dashboard/home/AIInsightCard';
import { useAuth } from '../context/AuthContext';

const TIME_FILTERS = ['24 HOURS', '7 DAYS', '30 DAYS'];

export const Dashboard = () => {
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState('24 HOURS');

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide truncate mb-1 md:mb-2">
            Command Center
          </h1>
          <p className="text-xs text-gray-500 tracking-widest uppercase font-bold">
            Welcome back, {user?.displayName?.split(' ')[0] || 'Commander'} — Real-time oversight.
          </p>
        </div>

        {/* Time Filter */}
        <div className="flex items-center bg-[#101010] border border-white/5 rounded-lg p-1 self-start sm:self-auto shrink-0">
          {TIME_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 md:px-4 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap rounded-md cursor-pointer
                ${activeFilter === filter
                  ? 'text-white bg-white/10'
                  : 'text-gray-500 hover:text-white'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Stats Row */}
      <StatsCards />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

        {/* Left col — Quick Actions (1 col) */}
        <div className="lg:col-span-1">
          <QuickActions />
        </div>

        {/* Right col — Account Health + AI Insight stacked (2 cols) */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <AccountHealthCard />
          <AIInsightCard />
        </div>

      </div>

      {/* Recent Activity — full width */}
      <div className="mt-2">
        <RecentActivityFeed />
      </div>
    </>
  );
};