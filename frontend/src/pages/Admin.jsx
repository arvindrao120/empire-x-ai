import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getAdminStats, getAdminUsers, getAdminCampaigns } from '../api/index';
import AdminStats from '../components/admin/AdminStats';
import AdminUserTable from '../components/admin/AdminUserTable';
import AdminCampaignsTable from '../components/admin/AdminCampaignsTable';
import AdminUserDetail from '../components/admin/AdminUserDetail';
import AdminCampaignsDetails from '../components/admin/AdminCampaignsDetails';
import { LayoutDashboard, Users, Megaphone } from 'lucide-react';

const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
    { id: 'users', label: 'Users', icon: <Users size={16} /> },
    { id: 'campaigns', label: 'Campaigns', icon: <Megaphone size={16} /> },
];

export default function Admin() {
    const { user, loading } = useAuth();

    const [dataLoading, setDataLoading] = useState(true);


    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [stats, setStats] = useState(null);
    const [users, setUsers] = useState([]);
    const [campaigns, setCampaigns] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    useEffect(() => {
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

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6">Admin Panel</h1>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 bg-[#0f0f0f] border border-gray-800/60 rounded-2xl p-1.5 w-fit">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all duration-200 ${activeTab === tab.id
                            ? 'bg-[#DC2626] text-white font-semibold'
                            : 'text-gray-500 hover:text-white'
                            }`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            {dataLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1,2,3,4,5,6].map((i)=>(
                  <div key={i} className="bg-[#0f0f0f] border border-gray-800/60 rounded-2xl p-6 animate-pulse" />
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

            {selectedUser && (
                <AdminUserDetail user={selectedUser} onClose={() => setSelectedUser(null)} />
            )}
            {selectedCampaign && (
                <AdminCampaignsDetails campaign={selectedCampaign} onClose={() => setSelectedCampaign(null)} />
            )}
        </div>
    );
}