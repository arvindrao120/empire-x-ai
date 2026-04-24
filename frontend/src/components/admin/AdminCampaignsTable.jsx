import { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const colors = {
    active: 'text-green-400 border-green-800 bg-green-400/10',
    paused: 'text-yellow-400 border-yellow-800 bg-yellow-400/10',
    completed: 'text-blue-400 border-blue-800 bg-blue-400/10',
    draft: 'text-gray-400 border-gray-700 bg-gray-400/10',
  };
  return (
    <span className={`text-xs border px-2 py-0.5 rounded-full capitalize ${colors[status] || colors.draft}`}>
      {status || 'draft'}
    </span>
  );
};

export default function AdminCampaignsTable({ campaigns, onViewDetail }) {
  const [search, setSearch] = useState('');

  const filtered = campaigns?.filter(c =>
    c.campaignName?.toLowerCase().includes(search.toLowerCase()) ||
    c.user?.displayName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="relative mb-4">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search campaigns..."
          className="w-full bg-[#0f0f0f] border border-gray-800 text-white rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#DC2626] transition"
        />
      </div>

      <div className="bg-[#0f0f0f] border border-gray-800/60 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-5 py-3">Campaign</th>
              <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-5 py-3 hidden md:table-cell">User</th>
              <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-5 py-3 hidden md:table-cell">Budget</th>
              <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-5 py-3">Status</th>
              <th className="text-left text-gray-500 text-xs uppercase tracking-wide px-5 py-3 hidden md:table-cell">Created</th>
              <th className="text-right text-gray-500 text-xs uppercase tracking-wide px-5 py-3">Detail</th>
            </tr>
          </thead>
          <tbody>
            {filtered?.map(c => (
              <tr key={c._id} className="border-b border-gray-800/50 hover:bg-white/[0.02] transition">
                <td className="px-5 py-3">
                  <p className="text-white font-medium">{c.campaignName || '—'}</p>
                  <p className="text-gray-500 text-xs">{c.objective || '—'}</p>
                </td>
                <td className="px-5 py-3 text-gray-400 hidden md:table-cell">
                  {c.user?.displayName || '—'}
                </td>
                <td className="px-5 py-3 text-gray-400 hidden md:table-cell">
                  {c.budget ? `₹${c.budget}` : '—'}
                </td>
                <td className="px-5 py-3">
                  <StatusBadge status={c.status} />
                </td>
                <td className="px-5 py-3 text-gray-400 hidden md:table-cell">
                  {c.createdAt ? new Date(c.createdAt).toLocaleDateString('en-IN') : '—'}
                </td>
                <td className="px-5 py-3 text-right">
                  <button onClick={() => onViewDetail(c)}
                    className="text-gray-500 hover:text-white transition p-1">
                    <ChevronRight size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered?.length === 0 && (
          <p className="text-gray-600 text-sm text-center py-8">No campaigns found</p>
        )}
      </div>
    </div>
  );
}