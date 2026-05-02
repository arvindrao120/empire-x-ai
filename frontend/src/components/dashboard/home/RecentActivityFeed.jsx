import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, BrainCircuit, Clock, RefreshCw } from 'lucide-react';
import { getCampaigns, getStrategies } from '../../../api/index';

export const RecentActivityFeed = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActivity = async () => {
    setLoading(true);
    try {
      const [campRes, stratRes] = await Promise.all([
        getCampaigns(),
        getStrategies(),
      ]);

      const campaigns = (campRes.data.campaigns || campRes.data || []).slice(0, 4).map((c) => ({
        id: `camp-${c._id}`,
        type: 'campaign',
        label: c.campaignName || 'Unnamed Campaign',
        sub: `${c.objective || 'Campaign'} · ${c.status || 'Draft'}`,
        time: c.createdAt,
        icon: Rocket,
      }));

      const strategies = (stratRes.data.strategies || stratRes.data || []).slice(0, 3).map((s) => ({
        id: `strat-${s._id}`,
        type: 'strategy',
        label: s.strategy?.campaignName || 'AI Strategy Generated',
        sub: `AI · ${s.strategy?.objective || 'Strategy'}`,
        time: s.createdAt,
        icon: BrainCircuit,
      }));

      // Merge + sort by date desc
      const merged = [...campaigns, ...strategies].sort(
        (a, b) => new Date(b.time) - new Date(a.time)
      ).slice(0, 6);

      setActivities(merged);
    } catch (err) {
      console.error('Activity feed error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  const timeAgo = (dateStr) => {
    if (!dateStr) return '—';
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    if (hrs < 24) return `${hrs}h ago`;
    return `${days}d ago`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Recent Activity</h3>
        <button
          onClick={fetchActivity}
          className="text-gray-600 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 cursor-pointer"
        >
          <RefreshCw size={13} />
        </button>
      </div>

      {/* Feed */}
      <div className="flex flex-col gap-1 flex-1">
        {loading ? (
          // Skeleton
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-3 rounded-xl animate-pulse">
              <div className="w-8 h-8 rounded-lg bg-white/5 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-2.5 bg-white/5 rounded w-3/4" />
                <div className="h-2 bg-white/5 rounded w-1/2" />
              </div>
            </div>
          ))
        ) : activities.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-8 text-center">
            <Clock size={28} className="text-white/10 mb-3" />
            <p className="text-xs font-black text-white/20 tracking-widest uppercase">No Activity Yet</p>
            <p className="text-[10px] text-gray-600 mt-1">Create your first campaign to get started</p>
          </div>
        ) : (
          <AnimatePresence>
            {activities.map((act, idx) => {
              const Icon = act.icon;
              const isCampaign = act.type === 'campaign';
              return (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.03] transition-colors group"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isCampaign ? 'bg-[#DC2626]/10' : 'bg-white/5'}`}>
                    <Icon size={14} className={isCampaign ? 'text-[#DC2626]' : 'text-gray-400'} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black text-white truncate group-hover:text-white transition-colors">
                      {act.label}
                    </p>
                    <p className="text-[10px] text-gray-600 font-bold tracking-wide mt-0.5">{act.sub}</p>
                  </div>
                  <span className="text-[9px] font-bold text-gray-600 tracking-widest whitespace-nowrap shrink-0">
                    {timeAgo(act.time)}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
};