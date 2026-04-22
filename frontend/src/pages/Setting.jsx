import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { updateProfile, logout } from '../api/index';
import EditPopup from '../components/settings/EditPopup';
import { SectionCard, InfoRow } from '../components/settings/SettingCards';
import {
  User, AtSign, Mail, CreditCard, Calendar, Cake, Venus, MapPin,
  Facebook, BadgeCheck, Bell, LogOut, Trash2, Crown, ShieldAlert
} from 'lucide-react';

export default function Settings() {
  const { user, setUser } = useAuth();
  const [popup, setPopup] = useState(null);
  const [notifications, setNotifications] = useState(true);

  const openPopup = (field, label, note) => {
    setPopup({ field, label, value: user?.[field], note });
  };

  const handleSave = async (val) => {
    const res = await updateProfile({ [popup.field]: val });
    if (!res.data.success) throw new Error(res.data.message);
    setUser(res.data.data);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto">

      {/* Profile Info */}
      <SectionCard title="Profile Info">
        <div className="flex items-center gap-4 pb-4 border-b border-gray-800 mb-1">
          <img
            src={user?.photos?.[0] || `https://ui-avatars.com/api/?name=${user?.displayName}&background=DC2626&color=fff`}
            alt="profile"
            className="w-14 h-14 rounded-full object-cover border-2 border-gray-700"
          />
          <div>
            <p className="text-white text-sm font-medium">{user?.displayName}</p>

          </div>
        </div>
        <InfoRow label="Display Name" value={user?.displayName}
          onEdit={() => openPopup('displayName', 'Display Name')} />
        <InfoRow label="Username" value={user?.username ? `@${user.username}` : null}
          onEdit={() => openPopup('username', 'Username', 'Lowercase only, unique across platform')} />


        <InfoRow label="Birthday" value={user?.birthday} editable={false} />
        <InfoRow label="Gender" value={user?.gender} editable={false} />
        <InfoRow label="Location" value={user?.location} editable={false} />
      </SectionCard>

      {/* Account Settings */}
      <SectionCard title="Account Settings">
        <InfoRow label="Current Plan" value={
          <span className="flex items-center gap-1.5">
            <Crown size={13} className="text-yellow-400" />
            <span className="capitalize">{user?.plan || 'Free'}</span>
          </span>
        } editable={false} />
        <InfoRow label="Member Since" value={
          user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'long', day: 'numeric'
          }) : '—'
        } editable={false} />

       

        <div className="pt-3">
          <button className="w-full border border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white py-2 rounded-lg transition text-sm font-semibold flex items-center justify-center gap-2">
            <Crown size={15} /> Upgrade Plan
          </button>
        </div>
      </SectionCard>

      {/* Connected Accounts */}
      <SectionCard title="Connected Accounts">
        <InfoRow label="Facebook" value={
          <span className="flex items-center gap-1.5">
            <BadgeCheck size={14} className="text-green-400" /> Connected
          </span>
        } editable={false} />
        <InfoRow label="Ad Account ID" value={user?.adAccountId || 'Not set'} editable={false} />
        <InfoRow label="Email" value={user?.email}
          onEdit={() => openPopup('email', 'Email', 'Must be unique — not used by anyone else')} />
      </SectionCard>

      {/* Preferences */}
      <SectionCard title="Preferences">
        <div className="flex items-center justify-between py-3 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Bell size={15} className="text-gray-400" />
            <div>
              <p className="text-gray-500 text-xs">Notifications</p>
              <p className="text-white text-sm mt-0.5">Email & Push</p>
            </div>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-10 h-5 rounded-full relative transition-colors ${notifications ? 'bg-[#DC2626]' : 'bg-gray-700'}`}>
            <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${notifications ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>
      </SectionCard>

      {/* Danger Zone */}

      <div>
        
        <button onClick={handleLogout}
          className="w-full border border-red-800 text-red-500 hover:bg-red-900/20 py-2 rounded-lg cursor-pointer transition text-sm flex items-center justify-center ">
          <LogOut size={15} /> Logout
        </button>

      </div>



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