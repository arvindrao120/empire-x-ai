import { PlusSquare, Link as LinkIcon, BarChart } from 'lucide-react';

export const QuickActions = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">Tactical Shortcuts</h3>
      
      <button className="flex items-center justify-between p-4 rounded-xl bg-[#101010] border border-white/5 hover:bg-[#181818] hover:border-white/10 transition-all group">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626]">
            <PlusSquare size={16} />
          </div>
          <span className="text-sm font-bold text-white">Create Campaign</span>
        </div>
        <span className="text-gray-500 group-hover:text-white transition-colors">→</span>
      </button>

      <button className="flex items-center justify-between p-4 rounded-xl bg-[#101010] border border-white/5 hover:bg-[#181818] hover:border-white/10 transition-all group">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white">
            <LinkIcon size={16} />
          </div>
          <span className="text-sm font-bold text-white">Connect Ad Account</span>
        </div>
        <span className="text-gray-500 group-hover:text-white transition-colors">→</span>
      </button>

      <button className="flex items-center justify-between p-4 rounded-xl bg-[#101010] border border-white/5 hover:bg-[#181818] hover:border-white/10 transition-all group">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white">
            <BarChart size={16} />
          </div>
          <span className="text-sm font-bold text-white">View Analytics</span>
        </div>
        <span className="text-gray-500 group-hover:text-white transition-colors">→</span>
      </button>

      <div className="mt-4 p-4 rounded-xl border border-[#DC2626]/20 bg-[#DC2626]/5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="text-[10px] font-bold text-[#DC2626] tracking-widest uppercase">AI Optimization Active</span>
        </div>
        <p className="text-xs text-gray-400">EmpireX AI is currently monitoring your ad account metrics.</p>
      </div>
    </div>
  );
};
