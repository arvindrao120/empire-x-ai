import React from 'react';
import { motion } from 'framer-motion';
import AnalyticsHeader from '../../analytics/header/AnalyticsHeader';
import MetricsGrid from '../../analytics/metrics/MetricsGrid';
import PerformanceChart from '../../analytics/charts/PerformanceChart';
import SpendVsBudget from '../../analytics/charts/SpendVsBudget';
import DemographicsGrid from '../../analytics/demographics/DemographicsGrid';
import CampaignPerformanceTable from '../../analytics/campaigns/CampaignPerformanceTable';
import TopPerformingAds from '../../analytics/ads/TopPerformingAds';
import PlatformAllocation from '../../analytics/platforms/PlatformAllocation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

function Analytics() {
  return (
    <div className="bg-[#050505] min-h-screen text-white p-6 font-sans antialiased overflow-y-auto">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      > 
        <motion.div variants={itemVariants}>
          <AnalyticsHeader />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <MetricsGrid />
        </motion.div>
        
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PerformanceChart />
          <SpendVsBudget />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <DemographicsGrid />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <CampaignPerformanceTable />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <TopPerformingAds />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <PlatformAllocation />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Analytics;