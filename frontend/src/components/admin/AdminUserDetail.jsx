import { X, Crown, BadgeCheck, Calendar, Mail, AtSign, MapPin } from 'lucide-react';

const DetailRow = ({ label, value }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-800/50 last:border-b-0">
    <p className="text-gray-500 text-xs uppercase tracking-wide">{label}</p>
    <p className="text-white text-sm">{value || '—'}</p>
  </div>
);

export default function AdminUserDetail({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 w-full max-w-lg mx-4 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-white font-semibold text-lg">User Detail</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition">
            <X size={20} />
          </button>
        </div>

        <div className="flex items-center gap-4 pb-4 border-b border-gray-800 mb-2">
          <img
            src={user.photos?.[0] || `https://ui-avatars.com/api/?name=${user.displayName}&background=DC2626&color=fff`}
            className="w-14 h-14 rounded-full border-2 border-gray-700 object-cover"
          />
          <div>
            <p className="text-white font-semibold">{user.displayName}</p>
            <p className="text-gray-500 text-xs">{user.email}</p>
            <div className="flex items-center gap-1.5 mt-1">
              <Crown size={11} className="text-yellow-400" />
              <span className="text-yellow-400 text-xs capitalize">{user.plan || 'free'}</span>
            </div>
          </div>
        </div>

        <DetailRow label="Username" value={user.username ? `@${user.username}` : null} />
        <DetailRow label="Role" value={user.role} />
        <DetailRow label="Ad Account ID" value={user.adAccountId} />
        <DetailRow label="Gender" value={user.gender} />
        <DetailRow label="Location" value={user.location} />
        <DetailRow label="Birthday" value={user.birthday} />
        <DetailRow label="Member Since" value={user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : '—'} />

        <button onClick={onClose}
          className="w-full mt-5 border border-gray-700 text-gray-400 hover:text-white py-2 rounded-xl transition text-sm">
          Close
        </button>
      </div>
    </div>
  );
}