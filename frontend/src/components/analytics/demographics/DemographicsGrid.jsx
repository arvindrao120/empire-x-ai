import React from 'react';
import AgeBreakdown from './AgeBreakdown';
import GenderSplit from './GenderSplit';
import TopLocations from './TopLocations';

const DemographicsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <AgeBreakdown />
      <GenderSplit />
      <TopLocations />
    </div>
  );
};

export default DemographicsGrid;
