import { Users, Megaphone, Activity, Crown } from 'lucide-react';

const StatCard = ({ icon, label, value, color }) => (
  <div className="bg-[#0f0f0f] border border-gray-800/60 rounded-2xl p-5 flex items-center gap-4">
    <div className={`p-3 rounded-xl ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-xs uppercase tracking-wide">{label}</p>
      <p className="text-white text-2xl font-bold mt-0.5">{value}</p>
    </div>
  </div>
);

export default function AdminStats({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <StatCard icon={<Users size={20} className="text-blue-400" />} label="Total Users" value={stats?.totalUsers || 0} color="bg-blue-400/10" />
      <StatCard icon={<Megaphone size={20} className="text-purple-400" />} label="Total Campaigns" value={stats?.totalCampaigns || 0} color="bg-purple-400/10" />
      <StatCard icon={<Activity size={20} className="text-green-400" />} label="Active Campaigns" value={stats?.activeCampaigns || 0} color="bg-green-400/10" />
      <StatCard icon={<Crown size={20} className="text-yellow-400" />} label="Paid Users" value={stats?.paidUsers || 0} color="bg-yellow-400/10" />
    </div>
  );
}