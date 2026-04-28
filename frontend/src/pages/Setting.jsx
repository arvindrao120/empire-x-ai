import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { updateProfile, logout, getMe } from '../api/index';
import EditPopup from '../components/settings/EditPopup';
import { SectionCard, InfoRow } from '../components/settings/SettingCards';
import {
  BadgeCheck, Bell, LogOut, Crown, User, Link, SlidersHorizontal, ShieldAlert
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const { user, setUser } = useAuth();
  const [popup, setPopup] = useState(null);
  const [notifications, setNotifications] = useState(true);

  const openPopup = (field, label, note) => {
    setPopup({ field, label, value: user?.[field], note });
  };

  const navigate = useNavigate()

  const handleSave = async (val) => {
    const res = await updateProfile({ [popup.field]: val });
    if (!res.data.success) throw new Error(res.data.message);
    const fresh = await getMe();
    setUser(fresh.data.data);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">

      {/* Profile Header */}
      <div className="flex items-center gap-5 mb-8 p-5 bg-[#0f0f0f] border border-gray-800/60 rounded-2xl shadow-lg shadow-black/20">
        <div className="relative">
          <img
            src={user?.photos?.[0] || `https://ui-avatars.com/api/?name=${user?.displayName}&background=DC2626&color=fff`}
            alt="profile"
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0f0f0f]" />
        </div>
        <div>
          <h1 className="text-white font-bold text-xl">{user?.displayName}</h1>
          <p className="text-gray-500 text-sm">{user?.username ? `@${user.username}` : 'No username set'}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <Crown size={12} className="text-yellow-400" />
            <span className="text-yellow-400 text-xs capitalize">{user?.plan || 'Free'} Plan</span>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <SectionCard title="Profile Info" icon={<User size={13} />}>
        <InfoRow label="Display Name" value={user?.displayName}
          onEdit={() => openPopup('displayName', 'Display Name')} />
        <InfoRow label="Username" value={user?.username ? `@${user.username}` : null}
          onEdit={() => openPopup('username', 'Username', 'Lowercase only, unique across platform')} />
        <InfoRow label="Birthday" value={user?.birthday} editable={false} />
        <InfoRow label="Gender" value={user?.gender} editable={false} />
        <InfoRow label="Location" value={user?.location} editable={false} />
      </SectionCard>

      {/* Account Settings */}
      <SectionCard title="Account Settings" icon={<Crown size={13} />}>
        <InfoRow label="Current Plan" value={
          <span className="flex items-center gap-1.5">
            <Crown size={12} className="text-yellow-400" />
            <span className="capitalize">{user?.plan || 'Free'}</span>
          </span>
        } editable={false} />
        <InfoRow label="Member Since" value={
          user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'long', day: 'numeric'
          }) : '—'
        } editable={false} />
        <div className="col-span-2 pt-3">
          <button className="w-full border border-[#DC2626]/60 text-[#DC2626] hover:bg-[#DC2626] hover:text-white py-2.5 rounded-xl transition-all duration-200 text-sm font-semibold flex items-center justify-center gap-2">
            <Crown size={15} /> Upgrade to Pro
          </button>
        </div>
      </SectionCard>

      {/* Connected Accounts */}
      <SectionCard title="Connected Accounts" icon={<Link size={13} />}>
        <InfoRow label="Facebook" value={
          <span className="flex items-center gap-1.5">
            <BadgeCheck size={13} className="text-green-400" /> Connected
          </span>
        } editable={false} />
        <InfoRow label="Ad Account ID" value={user?.adAccountId || 'Not set'} editable={false} />
        <InfoRow label="Email" value={user?.email}
          onEdit={() => openPopup('email', 'Email', 'Must be unique — not used by anyone else')} />
      </SectionCard>

      {/* Preferences */}
      <SectionCard title="Preferences" icon={<SlidersHorizontal size={13} />}>
        <div className="col-span-2 flex items-center justify-between py-3">
          <div className="flex items-center gap-2.5">
            <Bell size={15} className="text-gray-400" />
            <div>
              <p className="text-white text-sm">Notifications</p>
              <p className="text-gray-500 text-xs">Email & Push alerts</p>
            </div>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${notifications ? 'bg-[#DC2626]' : 'bg-gray-700'}`}>
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${notifications ? 'right-1' : 'left-1'}`} />
          </button>
        </div>
      </SectionCard>

      {user?.role === 'admin' && (
        <button
          onClick={() => navigate('/admin')}
          className="w-full mt-2 border border-[#DC2626]/60 text-[#DC2626] hover:bg-[#DC2626] hover:text-white py-2.5 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2 mb-2">
          <ShieldAlert size={15} /> Admin Panel
        </button>
      )}


      {/* Logout */}
      <button onClick={handleLogout}
        className="w-full mt-2 border border-red-900/50 text-red-500 hover:bg-red-950/30 hover:border-red-700 py-2.5 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2">
        <LogOut size={15} /> Logout
      </button>

      {popup && (
        <EditPopup
          label={popup.label}
          value={popup.value}
          note={popup.note}
          onSave={handleSave}
          onClose={() => setPopup(null)}
        />
      )}
    </div>
  );
}