import { X } from 'lucide-react';

const DetailRow = ({ label, value }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-800/50 last:border-b-0">
    <p className="text-gray-500 text-xs uppercase tracking-wide">{label}</p>
    <p className="text-white text-sm">{value || '—'}</p>
  </div>
);

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

export default function AdminCampaignsDetails({ campaign, onClose }) {
  if (!campaign) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 w-full max-w-lg mx-4 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-white font-semibold text-lg">Campaign Detail</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition">
            <X size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-2">
          <div>
            <p className="text-white font-semibold">{campaign.campaignName}</p>
            <p className="text-gray-500 text-xs">{campaign.objective}</p>
          </div>
          <StatusBadge status={campaign.status} />
        </div>

        <DetailRow label="Ad Set Name" value={campaign.adSetName} />
        <DetailRow label="Budget" value={campaign.budget ? `₹${campaign.budget}` : null} />
        <DetailRow label="Location" value={campaign.location} />
        <DetailRow label="Age Range" value={campaign.ageMin && campaign.ageMax ? `${campaign.ageMin} - ${campaign.ageMax}` : null} />
        <DetailRow label="Placements" value={campaign.placements} />
        <DetailRow label="Created By" value={campaign.user?.displayName} />
        <DetailRow label="Created At" value={campaign.createdAt ? new Date(campaign.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : '—'} />

        <button onClick={onClose}
          className="w-full mt-5 border border-gray-700 text-gray-400 hover:text-white py-2 rounded-xl transition text-sm">
          Close
        </button>
      </div>
    </div>
  );
}