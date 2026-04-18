import React from 'react';
import { Facebook, Instagram, MessageCircle, LayoutGrid } from 'lucide-react';

const PlatformCard = ({ name, iconName, impressions, clicks, spend, color }) => {
  const getIcon = () => {
    switch (iconName) {
      case 'Facebook': return <Facebook className="w-3.5 h-3.5" />;
      case 'Instagram': return <Instagram className="w-3.5 h-3.5" />;
      case 'Messenger': return <MessageCircle className="w-3.5 h-3.5" />;
      case 'AudNetwork': return <LayoutGrid className="w-3.5 h-3.5" />;
      default: return null;
    }
  };

  return (
    <div className="bg-[#0f0f0f] border border-[#222] p-5 rounded-lg flex flex-col hover:bg-[#111] transition-colors relative overflow-hidden group">
      {/* Background large icon for aesthetics */}
      <div className="absolute right-[-10px] top-[-10px] opacity-5 group-hover:opacity-10 transition-opacity">
        {React.cloneElement(getIcon(), { className: "w-24 h-24 stroke-1" })}
      </div>

      <div className="flex items-center justify-center mb-6 relative z-10">
        <div className={`mr-2 ${color}`}>{getIcon()}</div>
        <span className="text-sm font-black text-white">{name}</span>
      </div>

      <div className="flex flex-col items-center gap-4 relative z-10">
        <div className="text-center">
          <p className="text-xl font-black text-white">{impressions}</p>
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">IMPR</p>
        </div>
        
        <div className="w-8 h-[1px] bg-[#222]" />
        
        <div className="text-center">
          <p className="text-base font-bold text-white">{clicks}</p>
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">CLICKS</p>
        </div>

        <div className="w-8 h-[1px] bg-[#222]" />

        <div className="text-center">
          <p className={`${color} text-base font-bold`}>{spend}</p>
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">SPEND</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
