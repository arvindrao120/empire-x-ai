import { motion } from 'framer-motion';
import { Target, Users, MessageSquare, Clock, Lightbulb, IndianRupee } from 'lucide-react';

export const AIStrategyResult = ({ strategy }) => {
  if (!strategy) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#101010] border border-[#DC2626]/20 rounded-2xl p-6 mt-6"
    >
      <h2 className="text-lg font-black text-white uppercase tracking-widest mb-6">🎯 AI Strategy: {strategy.campaignName}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Targeting */}
        <div className="bg-[#080808] rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <Users size={16} className="text-[#DC2626]" />
            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Targeting</span>
          </div>
          <p className="text-sm text-gray-400">Age: {strategy.targeting?.ageRange}</p>
          <p className="text-sm text-gray-400">Gender: {strategy.targeting?.gender}</p>
          <p className="text-sm text-gray-400">Location: {strategy.targeting?.location}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {strategy.targeting?.interests?.map((i, idx) => (
              <span key={idx} className="text-[10px] bg-[#DC2626]/10 text-[#DC2626] px-2 py-1 rounded-full">{i}</span>
            ))}
          </div>
        </div>

        {/* Ad Copy */}
        <div className="bg-[#080808] rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={16} className="text-[#DC2626]" />
            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Ad Copy</span>
          </div>
          <p className="text-sm font-black text-white mb-1">{strategy.adCopy?.headline}</p>
          <p className="text-xs text-gray-400">{strategy.adCopy?.body}</p>
          <span className="mt-2 inline-block text-[9px] font-black tracking-widest uppercase bg-[#DC2626] text-white px-3 py-1 rounded-full">
            {strategy.adCopy?.callToAction}
          </span>
        </div>

        {/* Budget */}
        <div className="bg-[#080808] rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <IndianRupee size={16} className="text-[#DC2626]" />
            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Budget Split</span>
          </div>
          <p className="text-sm text-gray-400">Daily: ₹{strategy.budgetSplit?.daily}</p>
          <p className="text-sm text-gray-400">Total: ₹{strategy.budgetSplit?.total}</p>
        </div>

        {/* Best Time */}
        <div className="bg-[#080808] rounded-xl p-4 border border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={16} className="text-[#DC2626]" />
            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Best Time</span>
          </div>
          <p className="text-sm text-gray-400">{strategy.bestTime}</p>
        </div>

        {/* Tips */}
        <div className="bg-[#080808] rounded-xl p-4 border border-white/5 md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={16} className="text-[#DC2626]" />
            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Tips</span>
          </div>
          <ul className="space-y-1">
            {strategy.tips?.map((tip, idx) => (
              <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-[#DC2626] mt-1">•</span> {tip}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
};