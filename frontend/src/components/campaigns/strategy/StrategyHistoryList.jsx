import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { getStrategies } from '../../../api/index';
import { useNavigate } from 'react-router-dom';

export const StrategyHistoryList = () => {
  const [strategies, setStrategies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getStrategies()
      .then(res => setStrategies(res.data.strategies))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col h-full sticky top-6">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 pb-6 border-b border-white/5">
        <Clock size={20} className="text-gray-400" />
        <h2 className="text-lg font-black text-white uppercase tracking-widest">
          MY STRATEGIES
        </h2>
        <span className="ml-auto text-xs font-bold text-[#DC2626] bg-[#DC2626]/10 px-2 py-1 rounded-lg">
          {strategies.length}
        </span>
      </div>

      {/* List */}
      <div className="flex-1 space-y-3 overflow-y-auto pr-1">
        {loading ? (
          <p className="text-gray-500 text-xs text-center py-4">Loading...</p>
        ) : strategies.length === 0 ? (
          <p className="text-gray-500 text-xs text-center py-4">No strategies yet!</p>
        ) : (
          strategies.map((item, idx) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-4 rounded-xl bg-[#080808] border border-white/5 hover:border-[#DC2626]/30 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-sm font-black text-white group-hover:text-[#DC2626] transition-colors leading-tight truncate">
                  {item.strategy?.campaignName}
                </h3>
                <span className="text-[9px] font-black tracking-widest px-2 py-1 rounded-md uppercase shrink-0 bg-yellow-500/10 text-yellow-500">
                  Draft
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="truncate pr-2">{item.strategy?.objective}</span>
                <span className="whitespace-nowrap">
                  {new Date(item.createdAt).toLocaleDateString('en-IN')}
                </span>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="pt-4 mt-4 border-t border-white/5">
        <button
          onClick={() => navigate('/ai-strategy')}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-gray-300 text-xs font-bold tracking-wider uppercase hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
        >
          View All Strategies <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
