
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'MON', impressions: 4000, clicks: 2400 },
  { name: 'TUE', impressions: 3000, clicks: 1398 },
  { name: 'WED', impressions: 2000, clicks: 9800 },
  { name: 'THU', impressions: 2780, clicks: 3908 },
  { name: 'FRI', impressions: 1890, clicks: 4800 },
  { name: 'SAT', impressions: 2390, clicks: 3800 },
  { name: 'SUN', impressions: 3490, clicks: 4300 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1a1a] border border-[#333] p-3 rounded-md shadow-lg">
        <p className="text-white text-xs font-bold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center text-[10px] mb-1">
            <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
            <span className="text-gray-400 capitalize mr-2">{entry.name}:</span>
            <span className="text-white font-medium">{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const PerformanceChart = () => {
  return (
    <div className="bg-[#0f0f0f] border border-[#222] p-5 rounded-lg h-full flex flex-col">
      <div className="flex items-center mb-6">
        <div className="w-1 h-4 bg-red-400 rounded-sm mr-2" />
        <h3 className="text-sm font-black text-white uppercase tracking-widest">Performance Over Time</h3>
      </div>
      
      <div className="flex-1 w-full min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff4d4d" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ff4d4d" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8c8c8c" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8c8c8c" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#555" 
              tick={{ fill: '#777', fontSize: 10, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="#555" 
              tick={{ fill: '#777', fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="impressions" 
              stroke="#ff4d4d" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorImpressions)" 
              activeDot={{ r: 4, fill: '#ff4d4d', stroke: '#fff', strokeWidth: 2 }}
            />
            <Area 
              type="monotone" 
              dataKey="clicks" 
              stroke="#8c8c8c" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorClicks)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#ff4d4d] mr-2" />
          <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">IMPRESSIONS</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#8c8c8c] mr-2" />
          <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">CLICKS</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
