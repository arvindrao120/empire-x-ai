import { useState } from 'react';
import { Search, Trash2, Crown, ChevronRight } from 'lucide-react';
import { deleteAdminUser, updateUserPlan } from '../../api/index';

const PlanBadge = ({ plan }) => {
  const colors = {
    free: 'text-gray-400 border-gray-700',
    basic: 'text-blue-400 border-blue-800',
    pro: 'text-yellow-400 border-yellow-800',
    enterprise: 'text-purple-400 border-purple-800'
  };
  return (
    <span className={`text-xs border px-2 py-0.5 rounded-full capitalize ${colors[plan] || colors.free}`}>
      {plan || 'free'}
    </span>
  );
};

export default function AdminUserTable({ users, onRefresh, onViewDetail }) {
  const [search, setSearch] = useState('');
  const [loadingId, setLoadingId] = useState(null);

  const filtered = users?.filter(u =>
    u.displayName?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase()) ||
    u.username?.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (!confirm('Are you sure?')) return;
    setLoadingId(id);
    await deleteAdminUser(id);
    onRefresh();
    setLoadingId(null);
  };

  const handlePlanChange = async (id, plan) => {
    setLoadingId(id);
    await updateUserPlan(id, plan);
    onRefresh();
    setLoadingId(null);
  };

  return (
    <div>
      {/* Search */}
      <div className="relative mb-4">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search users..."
          className="w-full bg-[#0f0f0f] border border-gray-800 text-white rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#DC2626] transition"
        />
      </div>

      {/* Table */}
      <div className="bg-[#0f0f0f] border border-gray-800/60 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-5 py-3">User</th>
              <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-5 py-3 hidden md:table-cell">Username</th>
              <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-5 py-3 hidden md:table-cell">Joined</th>
              <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-5 py-3">Plan</th>
              <th className="text-right text-gray-500 text-xs uppercase tracking-wide px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered?.map(u => (
              <tr onClick={() => onViewDetail(u)} key={u._id} className="border-b border-gray-800/50 hover:bg-white/[0.02] transition">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={u.photos?.[0] || `https://ui-avatars.com/api/?name=${u.displayName}&background=DC2626&color=fff`}
                      className="w-8 h-8 rounded-full object-cover border border-gray-700"
                    />
                    <div>
                      <p className="text-white font-medium">{u.displayName || '—'}</p>
                      <p className="text-gray-500 text-xs">{u.email || '—'}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-400 hidden md:table-cell">
                  {u.username ? `@${u.username}` : '—'}
                </td>
                <td className="px-5 py-3 text-gray-400 hidden md:table-cell">
                  {u.createdAt ? new Date(u.createdAt).toLocaleDateString('en-IN') : '—'}
                </td>
                <td className="px-5 py-3">
                  <select
                    value={u.plan || 'free'}
                    onChange={e => handlePlanChange(u._id, e.target.value)}
                    disabled={loadingId === u._id}
                    className="bg-[#1a1a1a] border border-gray-700 text-white text-xs rounded-lg px-2 py-1 focus:outline-none focus:border-[#DC2626]"
                  >
                    <option value="free">Free</option>
                    <option value="basic">Basic</option>
                    <option value="pro">Pro</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => onViewDetail(u)}
                      className="text-gray-500 hover:text-white transition p-1">
                      <ChevronRight size={16} />
                    </button>
                    <button onClick={() => handleDelete(u._id)} disabled={loadingId === u._id}
                      className="text-gray-500 hover:text-red-500 transition p-1">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered?.length === 0 && (
          <p className="text-gray-600 text-sm text-center py-8">No users found</p>
        )}
      </div>
    </div>
  );
}