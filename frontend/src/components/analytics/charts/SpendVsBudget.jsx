import React from 'react';

const SpendVsBudget = () => {
  const budgets = [
    { label: 'US TARGETED FEB', spend: '14.2K', total: '15K', percentage: 95 },
    { label: 'NEW YEAR GROWTH', spend: '11.8K', total: '15K', percentage: 78 },
    { label: 'BRAND AWARENESS', spend: '2.4K', total: '10K', percentage: 24 },
  ];

  return (
    <div className="bg-[#0f0f0f] border border-[#222] p-5 rounded-lg h-full flex flex-col">
      <div className="flex items-center mb-6">
        <div className="w-1 h-4 bg-red-400 rounded-sm mr-2" />
        <h3 className="text-sm font-black text-white uppercase tracking-widest">Spend vs Budget</h3>
      </div>
      
      <div className="flex-1 flex flex-col justify-center space-y-6">
        {budgets.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">{item.label}</span>
              <span className="text-xs font-bold text-gray-500 tracking-wider">{item.spend} / {item.total}</span>
            </div>
            {/* Background track */}
            <div className="h-2.5 w-full bg-[#1a1a1a] rounded-sm overflow-hidden flex">
              {/* Foreground progress */}
              <div 
                className="h-full bg-gradient-to-r from-[#ff4d4d] to-[#ff8080] rounded-sm transition-all duration-1000 ease-in-out" 
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpendVsBudget;
