import { MoreVertical, Download } from 'lucide-react';
import { useState } from 'react';

const mockOperations = [
  { id: 1, name: 'Black Friday Retargeting', created: '2d ago', status: 'ACTIVE', budget: '₹4,500/day', ctr: '3.24%', active: true },
  { id: 2, name: 'App Install - Tier 1', created: '5d ago', status: 'PAUSED', budget: '₹2,200/day', ctr: '1.89%', active: false },
  { id: 3, name: 'Website Traffic - Lookalike', created: '1w ago', status: 'ACTIVE', budget: '₹8,000/day', ctr: '4.11%', active: true },
  { id: 4, name: 'Video View Catalyst', created: '2w ago', status: 'ACTIVE', budget: '₹1,500/day', ctr: '0.98%', active: true },
  { id: 5, name: 'Summer Sale Push', created: '3w ago', status: 'ACTIVE', budget: '₹3,000/day', ctr: '2.50%', active: true },
  { id: 6, name: 'Brand Awareness Q4', created: '1m ago', status: 'PAUSED', budget: '₹5,000/day', ctr: '1.20%', active: false },
];

const PER_PAGE = 4;

export const ActiveOperations = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(mockOperations.length / PER_PAGE);
  const paginated = mockOperations.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className="flex flex-col h-full bg-[#101010] border border-white/5 rounded-xl p-6 md:p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-black text-white tracking-widest uppercase">Active Operations</h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse"></div>
          <span className="text-[10px] font-bold text-[#DC2626] tracking-widest uppercase">Live Feed Active</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <th className="pb-3">Name</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Budget</th>
              <th className="pb-3">CTR</th>
              <th className="pb-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {paginated.map((op) => (
              <tr key={op.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                <td className="py-4">
                  <p className="text-sm text-gray-300 font-semibold group-hover:text-white transition-colors">{op.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Created {op.created}</p>
                </td>
                <td className="py-4">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9px] font-bold tracking-widest uppercase
                    ${op.active ? 'bg-[#DC2626]/10 border-[#DC2626]/20 text-[#DC2626]' : 'bg-gray-500/10 border-gray-500/20 text-gray-400'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${op.active ? 'bg-[#DC2626]' : 'bg-gray-500'}`} />
                    {op.status}
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-300 font-semibold">{op.budget}</td>
                <td className={`py-4 text-sm font-semibold ${op.active ? 'text-[#DC2626]' : 'text-gray-500'}`}>{op.ctr}</td>
                <td className="py-4 text-right">
                  <button className="text-gray-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5">
                    <MoreVertical size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-white/5">

        {/* Pagination Slider */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Page {page + 1} of {totalPages}
            </span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Showing {page * PER_PAGE + 1}–{Math.min((page + 1) * PER_PAGE, mockOperations.length)} of {mockOperations.length}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max={totalPages - 1}
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
            className="w-full accent-[#DC2626] cursor-pointer"
          />
          {/* Page dots */}
          <div className="flex justify-between mt-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === page ? 'bg-[#DC2626] scale-125' : 'bg-gray-600 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button className="text-xs font-bold tracking-wider uppercase text-white hover:text-[#DC2626] transition-colors">
            View All Operations
          </button>
          <button className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-gray-400 hover:text-white transition-colors">
            <Download size={12} />
            Export CSV
          </button>
        </div>
      </div>

    </div>
  );
};