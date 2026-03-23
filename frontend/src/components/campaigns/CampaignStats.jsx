export const CampaignStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Campaigns */}
      <div className="bg-[#101010] border border-white/5 rounded-xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#DC2626]/50 transition-colors group-hover:bg-[#DC2626]"></div>
        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Total Campaigns</p>
        <h3 className="text-4xl font-black text-white">42</h3>
      </div>

      {/* Active Campaigns */}
      <div className="bg-[#101010] border border-white/5 rounded-xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#DC2626]/50 transition-colors group-hover:bg-[#DC2626]"></div>
        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Active Campaigns</p>
        <h3 className="text-4xl font-black text-white">18</h3>
      </div>

      {/* Total Ad Spend */}
      <div className="bg-[#101010] border border-white/5 rounded-xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#DC2626]/50 transition-colors group-hover:bg-[#DC2626]"></div>
        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Total Ad Spend</p>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-[#DC2626]">₹</span>
          <h3 className="text-4xl font-black text-white">1,24,000</h3>
        </div>
      </div>
    </div>
  );
};
