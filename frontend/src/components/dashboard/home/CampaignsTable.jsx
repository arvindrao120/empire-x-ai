import { PlusSquare, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const CampaignsTable = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Active Campaigns</h2>
        <button className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-[#DC2626] transition-colors flex items-center gap-1">
          VIEW ALL <ExternalLink size={12} />
        </button>
      </div>

      <div className="bg-[#101010] border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Budget</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Impressions</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Clicks</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty State */}
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                      <PlusSquare size={24} className="text-white/20" />
                    </div>
                    <p className="text-sm font-bold text-white mb-1">No Active Campaigns</p>
                    <p className="text-xs mb-4">You haven't launched any campaigns via EmpireX yet.</p>
                    <button className="bg-[#DC2626] hover:bg-red-700 text-white text-xs font-bold px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                      <PlusSquare size={14} />
                      CREATE CAMPAIGN
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
