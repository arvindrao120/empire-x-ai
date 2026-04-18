import React from 'react';

const AgeBreakdown = () => {
  const data = [
    { range: '18-24', percentage: 22 },
    { range: '25-34', percentage: 48 },
    { range: '35-44', percentage: 15 },
    { range: '45-54', percentage: 8 },
    { range: '55+', percentage: 7 },
  ];

  return (
    <div className="bg-[#0f0f0f] border border-[#222] p-5 rounded-lg h-full flex flex-col">
      <h3 className="text-sm font-black text-white tracking-widest uppercase mb-6">AGE BREAKDOWN</h3>
      
      <div className="flex-1 flex flex-col justify-between">
        {data.map((item, index) => (
          <div key={index} className="flex items-center text-sm mb-3 last:mb-0">
            <span className="text-xs font-bold text-gray-400 w-12">{item.range}</span>
            <div className="flex-1 flex items-center mx-2 h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-400 rounded-full" 
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <span className="text-xs font-bold text-white w-8 text-right">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeBreakdown;
