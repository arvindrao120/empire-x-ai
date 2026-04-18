import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const MetricCard = ({ title, value, change, isPositive, icon: Icon }) => {
  return (
    <div className="bg-[#0f0f0f] border border-[#222] p-5 rounded-lg flex flex-col justify-between hover:bg-[#151515] transition-colors relative overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <div className="text-gray-500">
          <Icon className="w-5 h-5 stroke-[1.5]" />
        </div>
        <div className={`flex items-center px-2 py-1 rounded-full text-[9px] font-black tracking-widest uppercase ${isPositive ? 'text-emerald-400 bg-emerald-400/10' : 'text-red-400 bg-red-400/10'}`}>
          {change}
        </div>
      </div>
      <div>
        <h3 className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{title}</h3>
        <p className="text-2xl md:text-3xl font-black text-white">{value}</p>
      </div>
    </div>
  );
};

export default MetricCard;
