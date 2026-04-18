import React from 'react';

const CampaignPerformanceTable = () => {
  const campaigns = [
    { name: 'Festive Flash Sale', status: 'ACTIVE', impressions: '842,000', clicks: '29,470', ctr: '3.5%', spend: '₹42,000', budget: '₹50,000', roas: '4.2x' },
    { name: 'Summer Collection', status: 'PAUSED', impressions: '1,240,000', clicks: '41,200', ctr: '3.3%', spend: '₹64,500', budget: '₹75,000', roas: '3.8x' },
    { name: 'Brand Re-Launch', status: 'ACTIVE', impressions: '380,000', clicks: '13,500', ctr: '3.6%', spend: '₹18,000', budget: '₹25,000', roas: '5.1x' },
  ];

  return (
    <div className="bg-[#0f0f0f] border border-[#222] p-5 rounded-lg mb-6 overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-1 h-4 bg-red-400 rounded-sm mr-2" />
          <h3 className="text-sm font-black text-white uppercase tracking-widest">Campaign Performance</h3>
        </div>
        <button className="text-xs font-bold tracking-wider uppercase text-gray-400 hover:text-white transition-colors">
          EXPORT CSV
        </button>
      </div>

      <table className="w-full text-left border-collapse min-w-[700px]">
        <thead>
          <tr className="border-b border-[#222]">
            <th className="pb-3 text-[10px] font-bold text-gray-400 tracking-widest uppercase">CAMPAIGN NAME</th>
            <th className="pb-3 text-[10px] font-bold text-gray-400 tracking-widest uppercase text-center">STATUS</th>
            <th className="pb-3 text-[10px] font-bold text-gray-400 tracking-widest uppercase text-right">IMPRESSIONS</th>
            <th className="pb-3 text-[10px] font-bold text-gray-400 tracking-widest uppercase text-right">CLICKS</th>
            <th className="pb-3 text-[10px] font-bold text-gray-400 tracking-widest uppercase text-right">CTR %</th>
            <th className="pb-3 text-[10px] font-bold text-gray-400 tracking-widest uppercase text-right">SPEND (₹)</th>
            <th className="pb-3 text-[10px] font-bold text-gray-400 tracking-widest uppercase text-right">BUDGET (₹)</th>
            <th className="pb-3 text-[10px] font-bold text-gray-400 tracking-widest uppercase text-right">ROAS</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((camp, index) => (
            <tr key={index} className="border-b border-[#1a1a1a] last:border-0 hover:bg-[#111] transition-colors">
              <td className="py-4 text-sm text-gray-300 font-semibold">{camp.name}</td>
              <td className="py-4 text-center">
                <span className={`px-2 py-1 text-[9px] font-black tracking-widest uppercase rounded-sm ${
                  camp.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-gray-500/10 text-gray-500'
                }`}>
                  {camp.status === 'ACTIVE' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />}
                  {camp.status}
                </span>
              </td>
              <td className="py-4 text-sm text-gray-300 font-semibold text-right">{camp.impressions}</td>
              <td className="py-4 text-sm text-gray-300 font-semibold text-right">{camp.clicks}</td>
              <td className="py-4 text-sm text-gray-300 font-semibold text-right">{camp.ctr}</td>
              <td className="py-4 text-sm text-gray-300 font-semibold text-right">{camp.spend}</td>
              <td className="py-4 text-sm text-gray-300 font-semibold text-right">{camp.budget}</td>
              <td className="py-4 text-sm font-bold text-red-400 text-right">{camp.roas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignPerformanceTable;
