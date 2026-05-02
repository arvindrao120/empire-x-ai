import { PlusSquare, Link as LinkIcon, BarChart, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    { icon: PlusSquare, label: 'Create Campaign', path: '/campaigns', accent: true },
    { icon: LinkIcon, label: 'Connect Ad Account', path: '/ad-account', accent: false },
    { icon: BarChart, label: 'View Analytics', path: '/analytics', accent: false },
    { icon: TrendingUp, label: 'AI Strategy', path: '/campaigns', accent: false },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">Tactical Shortcuts</h3>

      {actions.map((action, idx) => (
        <motion.button
          key={action.label}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.07 }}
          whileHover={{ x: 4 }}
          onClick={() => navigate(action.path)}
          className="flex items-center justify-between p-4 rounded-xl bg-[#101010] border border-white/5 hover:bg-[#181818] hover:border-white/10 transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${action.accent ? 'bg-[#DC2626]/10 text-[#DC2626]' : 'bg-white/5 text-gray-400 group-hover:text-white'} transition-colors`}>
              <action.icon size={15} />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">{action.label}</span>
          </div>
          <span className="text-gray-600 group-hover:text-[#DC2626] transition-colors text-sm">→</span>
        </motion.button>
      ))}

      {/* AI Status */}
      <div className="mt-1 p-4 rounded-xl border border-[#DC2626]/20 bg-[#DC2626]/5">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="text-[10px] font-black text-[#DC2626] tracking-widest uppercase">AI Optimization Active</span>
        </div>
        <p className="text-[11px] text-gray-400 leading-relaxed">EmpireX AI is currently monitoring your ad account metrics.</p>
      </div>
    </div>
  );
};