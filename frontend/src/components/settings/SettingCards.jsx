import { Pencil } from 'lucide-react';

export const SectionCard = ({ title, children }) => (
  <div className="bg-[#111111] border border-gray-800 rounded-2xl p-5 mb-4">
    <h2 className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">{title}</h2>
    {children}
  </div>
);

export const InfoRow = ({ label, value, onEdit, editable = true }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0">
    <div>
      <p className="text-gray-500 text-xs">{label}</p>
      <p className="text-white text-sm mt-0.5">{value || '—'}</p>
    </div>
    {editable && (
      <button onClick={onEdit}
        className="flex items-center gap-1.5 text-xs text-[#DC2626] border border-[#DC2626] hover:bg-[#DC2626] hover:text-white px-3 py-1 rounded-lg transition">
        <Pencil size={12} /> Edit
      </button>
    )}
  </div>
);