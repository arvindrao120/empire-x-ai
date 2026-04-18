import React from 'react';
import MetricCard from './MetricCard';
import { IndianRupee, Eye, MousePointerClick, TrendingUp, BarChart2, Zap } from 'lucide-react';

const MetricsGrid = () => {
  const metrics = [
    { title: 'TOTAL SPEND', value: '₹1,24,500', change: '+12.4%', isPositive: true, icon: IndianRupee },
    { title: 'TOTAL IMPRESSIONS', value: '2.4M', change: '-4.1%', isPositive: false, icon: Eye },
    { title: 'TOTAL CLICKS', value: '84.2k', change: '-2.4%', isPositive: false, icon: MousePointerClick },
    { title: 'CTR %', value: '3.51%', change: '+0.8%', isPositive: true, icon: TrendingUp },
    { title: 'CPM', value: '₹52.40', change: '-10.2%', isPositive: false, icon: BarChart2 },
    { title: 'CPC', value: '₹1.48', change: '+14.5%', isPositive: true, icon: Zap },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricsGrid;
