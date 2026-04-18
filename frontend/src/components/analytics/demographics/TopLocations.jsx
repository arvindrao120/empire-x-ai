import React from 'react';

const TopLocations = () => {
  const data = [
    { city: 'Delhi', percentage: 28 },
    { city: 'Mumbai', percentage: 24 },
    { city: 'Bengaluru', percentage: 15 },
    { city: 'Chennai', percentage: 12 },
    { city: 'Hyderabad', percentage: 10 },
  ];

  return (
    <div className="bg-[#0f0f0f] border border-[#222] p-5 rounded-lg h-full flex flex-col">
      <h3 className="text-sm font-black text-white tracking-widest uppercase mb-6">TOP LOCATIONS</h3>
      
      <div className="flex-1 flex flex-col justify-between">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col mb-3 last:mb-0">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-gray-400">{item.city}</span>
              <span className="text-xs font-bold text-white">{item.percentage}%</span>
            </div>
            <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${index === 0 ? 'bg-red-400 opacity-100' : 'bg-red-400 opacity-50'}`} 
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLocations;
