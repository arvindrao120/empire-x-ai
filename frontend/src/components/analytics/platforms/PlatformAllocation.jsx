import React from 'react';
import PlatformCard from './PlatformCard';

const PlatformAllocation = () => {
  const platforms = [
    { name: 'Facebook', iconName: 'Facebook', color: 'text-blue-500', impressions: '1.2M', clicks: '42k', spend: '₹62k' },
    { name: 'Instagram', iconName: 'Instagram', color: 'text-pink-500', impressions: '840k', clicks: '32k', spend: '₹48k' },
    { name: 'Messenger', iconName: 'Messenger', color: 'text-blue-400', impressions: '210k', clicks: '6.4k', spend: '₹12k' },
    { name: 'Aud. Network', iconName: 'AudNetwork', color: 'text-red-400', impressions: '150k', clicks: '3.8k', spend: '₹2.5k' },
  ];

  return (
    <div>
      <h3 className="text-sm font-black text-white tracking-widest uppercase mb-4 text-center">PLATFORM ALLOCATION</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {platforms.map((platform, index) => (
          <PlatformCard key={index} {...platform} />
        ))}
      </div>
    </div>
  );
};

export default PlatformAllocation;
