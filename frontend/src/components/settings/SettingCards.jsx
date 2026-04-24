import { Pencil } from 'lucide-react';

export const SectionCard = ({ title, icon, children }) => (
  <div className="bg-[#0f0f0f] border border-gray-800/60 rounded-2xl p-6 mb-4 shadow-lg shadow-black/20">
    <h2 className="text-gray-500 text-[11px] font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
      {icon && <span className="text-[#DC2626]">{icon}</span>}
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
      {children}
    </div>
  </div>
);

export const InfoRow = ({ label, value, onEdit, editable = true }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-800/50 last:border-b-0">
    <div className="min-w-0 flex-1">
      <p className="text-gray-500 text-[11px] uppercase tracking-wide">{label}</p>
      <p className="text-white text-sm mt-0.5 truncate">{value || <span className="text-gray-600">—</span>}</p>
    </div>
    {editable && (
      <button onClick={onEdit}
        className="ml-3 flex items-center gap-1.5 text-xs text-[#DC2626] border border-[#DC2626]/50 hover:bg-[#DC2626] hover:text-white hover:border-[#DC2626] px-2.5 py-1 rounded-lg transition-all duration-200">
        <Pencil size={11} /> Edit
      </button>
    )}
  </div>
);