import React from 'react';
import AdCard from './AdCard';

const TopPerformingAds = () => {
  const ads = [
    { title: 'Meta_Global_01', ctr: '4.82%', clicks: '12.4k', spend: '₹8.4k', tag: 'WINNER' },
    { title: 'IG_Stories_Hero_V2', ctr: '5.12%', clicks: '9.1k', spend: '₹5.2k', tag: 'SCALING UP' },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4">Top Performing Ads</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ads.map((ad, index) => (
          <AdCard key={index} {...ad} />
        ))}
        <AdCard isPlaceholder={true} />
      </div>
    </div>
  );
};

export default TopPerformingAds;
