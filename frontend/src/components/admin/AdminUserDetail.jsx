import { useState, useEffect } from 'react';
import { X, Crown, Megaphone, Brain, Rocket, Pencil, Save } from 'lucide-react';
import { getAdminUserDetail, adminUpdateUser } from '../../api/index';

const StatBadge = ({ icon, label, value, color }) => (
  <div className={`flex items-center gap-3 p-3 rounded-xl border ${color}`}>
    <div>{icon}</div>
    <div>
      <p className="text-white font-bold text-lg leading-none">{value}</p>
      <p className="text-gray-500 text-xs mt-0.5">{label}</p>
    </div>
  </div>
);

const DetailRow = ({ label, value, editable, field, onChange }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-800/50 last:border-b-0">
    <p className="text-gray-500 text-xs uppercase tracking-wide w-32">{label}</p>
    {editable ? (
      <input
        value={value || ''}
        onChange={e => onChange(field, e.target.value)}
        className="flex-1 bg-[#1a1a1a] border border-gray-700 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#DC2626] transition ml-4"
      />
    ) : (
      <p className="text-white text-sm flex-1 text-right">{value || '—'}</p>
    )}
  </div>
);

export default function AdminUserDetail({ user: initialUser, onClose, onRefresh }) {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({});
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await getAdminUserDetail(initialUser._id);
        setUser(res.data.data);
        setForm(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [initialUser._id]);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      await adminUpdateUser(user._id, form);
      onRefresh();
      setEditing(false);
      const res = await getAdminUserDetail(user._id);
      setUser(res.data.data);
      setForm(res.data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="w-8 h-8 border-2 border-[#DC2626] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="bg-[#111111] border border-gray-800 rounded-2xl w-full max-w-xl mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800 sticky top-0 bg-[#111111] z-10">
          <div className="flex items-center gap-3">
            <img
              src={user?.photos?.[0] || `https://ui-avatars.com/api/?name=${user?.displayName}&background=DC2626&color=fff`}
              className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover"
            />
            <div>
              <p className="text-white font-semibold">{user?.displayName}</p>
              <p className="text-gray-500 text-xs">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setEditing(!editing); setError(''); }}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition ${editing ? 'border-gray-700 text-gray-400' : 'border-[#DC2626]/50 text-[#DC2626] hover:bg-[#DC2626] hover:text-white'}`}>
              <Pencil size={12} /> {editing ? 'Cancel' : 'Edit'}
            </button>
            {editing && (
              <button onClick={handleSave} disabled={saving}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-[#DC2626] text-white hover:bg-red-700 transition">
                <Save size={12} /> {saving ? 'Saving...' : 'Save'}
              </button>
            )}
            <button onClick={onClose} className="text-gray-500 hover:text-white transition ml-1">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <StatBadge icon={<Megaphone size={16} className="text-purple-400" />} label="Campaigns" value={user?.campaignsCount || 0} color="border-purple-800/50 bg-purple-400/5" />
            <StatBadge icon={<Rocket size={16} className="text-green-400" />} label="Launched" value={user?.launchedCount || 0} color="border-green-800/50 bg-green-400/5" />
            <StatBadge icon={<Brain size={16} className="text-blue-400" />} label="Strategies" value={user?.strategiesCount || 0} color="border-blue-800/50 bg-blue-400/5" />
          </div>

          {error && (
            <p className="text-red-500 text-xs mb-4 bg-red-500/10 border border-red-800 px-3 py-2 rounded-lg">{error}</p>
          )}

          {/* Plan */}
          <div className="flex items-center justify-between py-3 border-b border-gray-800/50">
            <p className="text-gray-500 text-xs uppercase tracking-wide w-32">Plan</p>
            {editing ? (
              <select value={form.plan || 'free'} onChange={e => handleChange('plan', e.target.value)}
                className="flex-1 bg-[#1a1a1a] border border-gray-700 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#DC2626] ml-4">
                <option value="free">Free</option>
                <option value="basic">Basic</option>
                <option value="pro">Pro</option>
                <option value="enterprise">Enterprise</option>
              </select>
            ) : (
              <div className="flex items-center gap-1.5 flex-1 justify-end">
                <Crown size={13} className="text-yellow-400" />
                <span className="text-white text-sm capitalize">{user?.plan || 'free'}</span>
              </div>
            )}
          </div>

          {/* Text Fields */}
          <DetailRow label="Display Name" value={editing ? form.displayName : user?.displayName} editable={editing} field="displayName" onChange={handleChange} />
          <DetailRow label="Username" value={editing ? form.username : user?.username} editable={editing} field="username" onChange={handleChange} />
          <DetailRow label="Email" value={editing ? form.email : user?.email} editable={editing} field="email" onChange={handleChange} />
          <DetailRow label="Ad Account ID" value={editing ? form.adAccountId : user?.adAccountId} editable={editing} field="adAccountId" onChange={handleChange} />
          <DetailRow label="Location" value={editing ? form.location : user?.location} editable={editing} field="location" onChange={handleChange} />

          {/* Birthday - Date Picker */}
          <div className="flex items-center justify-between py-3 border-b border-gray-800/50">
            <p className="text-gray-500 text-xs uppercase tracking-wide w-32">Birthday</p>
            {editing ? (
              <input
                type="date"
                value={form.birthday || ''}
                onChange={e => handleChange('birthday', e.target.value)}
                className="flex-1 bg-[#1a1a1a] border border-gray-700 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#DC2626] transition ml-4"
              />
            ) : (
              <p className="text-white text-sm flex-1 text-right">{user?.birthday || '—'}</p>
            )}
          </div>

          {/* Gender - Dropdown */}
          <div className="flex items-center justify-between py-3 border-b border-gray-800/50">
            <p className="text-gray-500 text-xs uppercase tracking-wide w-32">Gender</p>
            {editing ? (
              <select
                value={form.gender || ''}
                onChange={e => handleChange('gender', e.target.value)}
                className="flex-1 bg-[#1a1a1a] border border-gray-700 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#DC2626] ml-4">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <p className="text-white text-sm flex-1 text-right capitalize">{user?.gender || '—'}</p>
            )}
          </div>

          {/* Read Only */}
          <div className="flex items-center justify-between py-3 border-b border-gray-800/50">
            <p className="text-gray-500 text-xs uppercase tracking-wide">Role</p>
            <span className={`text-xs border px-2 py-0.5 rounded-full ${user?.role === 'admin' ? 'text-[#DC2626] border-red-800' : 'text-gray-400 border-gray-700'}`}>
              {user?.role}
            </span>
          </div>

          <div className="flex items-center justify-between py-3">
            <p className="text-gray-500 text-xs uppercase tracking-wide">Member Since</p>
            <p className="text-white text-sm">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : '—'}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}