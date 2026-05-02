import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, RefreshCw, Sparkles } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const AIInsightCard = () => {
  const { user } = useAuth();
  const [insight, setInsight] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchInsight = async () => {
    setLoading(true);
    try {
      const res = await API.post('/api/ai/insight', {
        userName: user?.displayName || 'User',
        plan: user?.plan || 'free',
      });
      setInsight(res.data.insight || '');
      setFetched(true);
    } catch {
      setInsight('Focus on retargeting warm audiences — they convert 3x better than cold traffic. Keep daily budgets consistent for at least 7 days before optimizing.');
      setFetched(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsight();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="bg-[#101010] border border-[#DC2626]/10 rounded-2xl p-6 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#DC2626]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#DC2626]/10 flex items-center justify-center">
            <BrainCircuit size={14} className="text-[#DC2626]" />
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">AI Insight</h3>
          </div>
        </div>
        <button
          onClick={fetchInsight}
          disabled={loading}
          className="text-gray-600 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 cursor-pointer disabled:opacity-40"
        >
          <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="space-y-2 animate-pulse">
          <div className="h-2.5 bg-white/5 rounded w-full" />
          <div className="h-2.5 bg-white/5 rounded w-4/5" />
          <div className="h-2.5 bg-white/5 rounded w-3/5" />
        </div>
      ) : (
        <motion.p
          key={insight}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-300 leading-relaxed"
        >
          {insight}
        </motion.p>
      )}

      {/* Footer tag */}
      <div className="flex items-center gap-1.5 mt-4">
        <Sparkles size={10} className="text-[#DC2626]" />
        <span className="text-[9px] font-black tracking-widest uppercase text-[#DC2626]/60">
          Powered by EmpireX AI
        </span>
      </div>
    </motion.div>
  );
};