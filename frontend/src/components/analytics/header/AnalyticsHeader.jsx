import React from 'react';

const AnalyticsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-bold md:text-3xl  text-white uppercase tracking-wide">Analytics</h1>
        <p className="text-xs text-gray-400 tracking-widest uppercase font-bold mt-1">TRACK YOUR AD PERFORMANCE ACROSS THE EMPIRE</p>
      </div>
      <div className="flex bg-[#111] border border-[#222] p-1 rounded-md overflow-x-auto w-full md:w-auto">
        {['TODAY', '7 DAYS', '30 DAYS', 'CUSTOM'].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-1.5 text-xs font-bold whitespace-nowrap uppercase tracking-wider rounded-sm transition-colors ${
              filter === '30 DAYS' ? 'bg-[#2a2a2a] text-white shadow-sm' : 'text-gray-400 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsHeader;
