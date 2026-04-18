import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { getStrategies } from '../../../api/index';
import AIStrategyResult from '../../campaigns/strategy/AIStrategyResult';

function AIStrategy() {
  const [strategies, setStrategies] = useState([]);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStrategies();
  }, []);

  // Fetch strategies from API
  const fetchStrategies = async () => {
    try {
      const response = await getStrategies();
      setStrategies(response.data.strategies);
    } catch (error) {
      console.error("Error fetching strategies:", error); // Log API error
    } finally {
      setLoading(false);
    }
  };

  // Show loading state
  if (loading) return <p className="text-gray-400">Loading...</p>;

  return (
    <>
      {selectedStrategy ? (
        // Show strategy details
        <>
          <button
            onClick={() => setSelectedStrategy(null)}
            className="mb-4 text-xs font-bold tracking-wider uppercase text-gray-500 hover:text-white transition-colors"
          >
            ← Back to Strategies
          </button>
          <AIStrategyResult strategy={selectedStrategy.strategy} />
        </>
      ) : (
        // Show strategies list
        <>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">AI Strategies</h1>
              <p className="text-xs text-gray-500 tracking-widest uppercase font-bold">Your AI generated strategies</p>
            </div>
            <button
              onClick={() => navigate('/campaigns')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#DC2626] text-white text-xs font-bold tracking-wider uppercase hover:bg-red-700 transition-colors"
            >
              <Plus size={14} />
              Create New
            </button>
          </motion.div>

          {/* Strategies List */}
          {strategies.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
              <Sparkles size={40} className="text-[#DC2626]" />
              <p className="text-gray-400 text-sm">No strategies yet!</p>
              <button
                onClick={() => navigate('/campaigns')}
                className="px-6 py-3 rounded-xl bg-[#DC2626] text-white text-xs font-bold tracking-wider uppercase"
              >
                Create First Strategy
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {strategies.map((item, idx) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedStrategy(item)}
                  className="bg-[#101010] border border-white/5 rounded-xl p-5 cursor-pointer hover:border-[#DC2626]/30 hover:shadow-[0_0_20px_rgba(220,38,38,0.08)] transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">{item.strategy?.objective}</span>
                    <span className="text-[10px] text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-sm font-black text-white mb-2">{item.strategy?.campaignName}</h3>
                  <p className="text-xs text-gray-500 mb-3">{item.strategy?.adCopy?.headline}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.strategy?.targeting?.interests?.slice(0, 3).map((interest, i) => (
                      <span key={i} className="text-[10px] bg-[#DC2626]/10 text-[#DC2626] px-2 py-0.5 rounded-full">{interest}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default AIStrategy;