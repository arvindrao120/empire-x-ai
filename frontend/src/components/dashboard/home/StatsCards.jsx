import { Play, Banknote, Eye, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

export const StatsCards = () => {
  const stats = [
    { label: "ACTIVE CAMPAIGNS", value: "0", change: "+0%", icon: <Play size={16} className="text-[#DC2626]" /> },
    { label: "TOTAL SPEND", value: "₹0", change: "+0%", icon: <Banknote size={16} className="text-[#DC2626]" /> },
    { label: "TOTAL IMPRESSIONS", value: "0", change: "+0%", icon: <Eye size={16} className="text-[#DC2626]" /> },
    { label: "TOTAL CLICKS", value: "0", change: "+0%", icon: <MousePointerClick size={16} className="text-[#DC2626]" /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-[#101010] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#DC2626]/30 transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#DC2626]/10 flex items-center justify-center">
              {stat.icon}
            </div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
              {stat.change}
            </span>
          </div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
          <h3 className="text-3xl font-black text-white">{stat.value}</h3>
          
          {/* Subtle red glow on hover */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#DC2626]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </div>
  );
};
