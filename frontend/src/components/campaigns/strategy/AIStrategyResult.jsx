import React from 'react';
import { motion } from 'framer-motion';
import { StrategyEditableFields } from './StrategyEditableFields';
import { StrategyHistoryList } from './StrategyHistoryList';

export const AIStrategyResult = ({ strategy, onEdit, onLaunch }) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-[#080808] min-h-screen font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {/* Left Column: Strategy Result (Col Span 2) */}
        <div className="lg:col-span-2">
          <StrategyEditableFields 
            strategy={strategy} 
            onEdit={onEdit} 
            onLaunch={onLaunch} 
          />
        </div>

        {/* Right Column: History List (Col Span 1) */}
        <div className="lg:col-span-1">
          <StrategyHistoryList />
        </div>
      </motion.div>
    </div>
  );
};

export default AIStrategyResult;
