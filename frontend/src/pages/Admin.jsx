import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getAdminStats, getAdminUsers, getAdminCampaigns, logout } from '../api/index';
import AdminStats from '../components/admin/AdminStats';
import AdminUserTable from '../components/admin/AdminUserTable';
import AdminCampaignsTable from '../components/admin/AdminCampaignsTable';
import AdminUserDetail from '../components/admin/AdminUserDetail';
import AdminCampaignsDetails from '../components/admin/AdminCampaignsDetails';
import { LayoutDashboard, Users, Megaphone, ShieldCheck, ArrowLeft, LogOut } from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
  { id: 'users', label: 'Users', icon: <Users size={16} /> },
  { id: 'campaigns', label: 'Campaigns', icon: <Megaphone size={16} /> },
];

export default function Admin() {
  const { user, loading, setUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate('/');
    if (!loading && user && user.role !== 'admin') navigate('/dashboard');
  }, [user, loading]);

  const fetchData = async () => {
    setDataLoading(true);
    try {
      const [s, u, c] = await Promise.all([
        getAdminStats(),
        getAdminUsers(),
        getAdminCampaigns()
      ]);
      setStats(s.data.data);
      setUsers(u.data.data);
      setCampaigns(c.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* Admin Navbar */}
      <div className="border-b border-gray-800/60 bg-[#0a0a0a] px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <ShieldCheck size={22} className="text-[#DC2626]" />
          <div>
            <h1 className="text-white font-bold text-lg leading-none">Admin Panel</h1>
            <p className="text-gray-500 text-xs mt-0.5">EmpireX Control Center</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-xs hidden md:block">
            Logged in as <span className="text-white font-medium">{user?.displayName}</span>
          </span>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 px-4 py-2 rounded-xl text-sm transition-all">
            <ArrowLeft size={15} /> Go to Platform
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 border border-red-900/50 text-red-500 hover:bg-red-950/30 hover:border-red-700 px-4 py-2 rounded-xl text-sm transition-all">
            <LogOut size={15} /> Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-8 max-w-7xl mx-auto">

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-[#0f0f0f] border border-gray-800/60 rounded-2xl p-1.5 w-fit">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#DC2626] text-white font-semibold'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {dataLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-[#0f0f0f] border border-gray-800/60 rounded-2xl p-6 h-24 animate-pulse" />
            ))}
          </div>
        ) : (
          <>
            {activeTab === 'dashboard' && <AdminStats stats={stats} />}
            {activeTab === 'users' && (
              <AdminUserTable
                users={users}
                onRefresh={fetchData}
                onViewDetail={setSelectedUser}
              />
            )}
            {activeTab === 'campaigns' && (
              <AdminCampaignsTable
                campaigns={campaigns}
                onViewDetail={setSelectedCampaign}
              />
            )}
          </>
        )}
      </div>

      {selectedUser && (
        <AdminUserDetail
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onRefresh={fetchData}
        />
      )}
      {selectedCampaign && (
        <AdminCampaignsDetails
          campaign={selectedCampaign}
          onClose={() => setSelectedCampaign(null)}
        />
      )}
    </div>
  );
}