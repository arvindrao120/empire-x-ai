import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const GenderSplit = () => {
  const data = [
    { name: 'Male', value: 60, color: '#1a1a1a' },
    { name: 'Female', value: 40, color: '#ff4d4d' },
  ];

  return (
    <div className="bg-[#0f0f0f] border border-[#222] p-5 rounded-lg h-full flex flex-col">
      <h3 className="text-sm font-black text-white tracking-widest uppercase mb-2 text-center">GENDER SPLIT</h3>
      
      <div className="flex-1 w-full relative min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '4px' }}
              itemStyle={{ color: '#fff', fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <span className="text-2xl font-black text-white">60/40</span>
          <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase">M/F</span>
        </div>
      </div>
      
      <div className="flex justify-center gap-6 mt-2">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full border border-gray-600 mr-2" />
          <span className="text-xs text-gray-300 font-bold tracking-wider">60% Male</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#ff4d4d] mr-2" />
          <span className="text-xs text-gray-300 font-bold tracking-wider">40% Female</span>
        </div>
      </div>
    </div>
  );
};

export default GenderSplit;
