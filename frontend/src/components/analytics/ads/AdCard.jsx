import React from 'react';
import { Plus } from 'lucide-react';

const AdCard = ({ isPlaceholder, image, title, ctr, clicks, spend, tag }) => {
  if (isPlaceholder) {
    return (
      <div className="bg-[#0f0f0f] border border-[#222] border-dashed rounded-lg p-5 flex flex-col items-center justify-center min-h-[320px] hover:bg-[#111] transition-colors cursor-pointer group">
        <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Plus className="w-5 h-5 text-gray-400" />
        </div>
        <h4 className="text-sm font-black text-white mb-1">Launch New Variant</h4>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">USE TOP PERFORMING ASSETS</p>
        <button className="mt-6 px-6 py-2 border border-[#333] text-xs font-bold tracking-wider text-white uppercase rounded-md hover:bg-[#1a1a1a] transition-colors">
          START CREATION
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0f0f0f] border border-[#222] rounded-lg overflow-hidden flex flex-col">
      <div className="relative h-[200px] w-full bg-[#1a1a1a]">
        {/* Abstract Placeholder for image */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-gray-700 to-black" />
        {tag && (
          <div className="absolute top-3 left-3 bg-[#ff4d4d]/20 text-[#ff4d4d] px-2 py-0.5 text-[9px] font-black tracking-widest uppercase rounded-sm border border-[#ff4d4d]/30">
            {tag}
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h4 className="text-sm font-black text-white mb-4">{title}</h4>
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">CTR</p>
            <p className="text-sm font-bold text-red-400">{ctr}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">CLICKS</p>
            <p className="text-sm font-bold text-white">{clicks}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">SPEND</p>
            <p className="text-sm font-bold text-white">{spend}</p>
          </div>
        </div>
        <button className="mt-auto w-full py-2 bg-gradient-to-r from-[#ff4d4d] to-[#ff8080] text-[#111] text-xs font-bold tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity">
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
};

export default AdCard;
