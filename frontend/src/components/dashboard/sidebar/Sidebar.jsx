import { LogOut, LayoutGrid, Rocket, BrainCircuit, Wallet, BarChart3 } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { logout } from '../../../api/index';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { icon: LayoutGrid, label: "Dashboard", path: "/dashboard" },
  { icon: Rocket, label: "Campaigns", path: "/campaigns" },
  { icon: BrainCircuit, label: "AI Strategy", path: "/ai-strategy" },
  { icon: Wallet, label: "Ad Account", path: "/ad-account" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
];

export const Sidebar = ({ mobile, onClose }) => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate('/');
  };

  const handleNav = (path) => {
    navigate(path);
    if (mobile && onClose) onClose();
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#080808] px-4 py-6 border-r border-white/[0.04]">

      {/* Logo */}
      <div className="px-2 mb-8">
        <h1 className="text-xl font-black text-white tracking-widest">
          EMPIRE<span className="text-[#DC2626]">X</span>
        </h1>
      </div>

      {/* User Card */}
      <div
        onClick={() => handleNav('/settings')}
        className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-[#0d0d0d] border border-white/[0.05] cursor-pointer hover:border-white/10 transition-colors"
      >
        {user?.photos?.[0] ? (
          <img
            src={user.photos[0]}
            alt="Avatar"
            className="w-9 h-9 rounded-lg object-cover"
          />
        ) : (
          <div className="w-9 h-9 rounded-lg bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center font-black text-sm border border-[#DC2626]/15">
            {user?.displayName?.charAt(0) || 'U'}
          </div>
        )}
        <div className="overflow-hidden">
          <p className="text-xs font-black text-white truncate">
            {user?.displayName || 'User'}
          </p>
          <p className="text-[9px] font-black tracking-widest uppercase text-[#DC2626]/60 mt-0.5">
            {user?.plan || 'Free'} Member
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-0.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-colors cursor-pointer relative
                ${isActive
                  ? 'text-white bg-white/[0.05]'
                  : 'text-gray-600 hover:text-gray-300 hover:bg-white/[0.03]'
                }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-[#DC2626] rounded-full" />
              )}
              <item.icon
                size={15}
                className={isActive ? 'text-[#DC2626]' : 'text-gray-700'}
              />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="space-y-2 mt-6">
        <div className="h-px bg-white/[0.04] mb-3" />

        <button
          onClick={() => handleNav('/settings')}
          className="w-full py-2.5 cursor-pointer rounded-lg bg-[#DC2626] hover:bg-[#c91f1f] text-white text-[10px] font-black tracking-widest uppercase transition-colors shadow-[0_2px_12px_rgba(220,38,38,0.25)]"
        >
          ⚡ Upgrade Plan
        </button>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 cursor-pointer px-3 py-2.5 rounded-lg text-[11px] font-bold tracking-wider uppercase text-gray-600 hover:text-gray-400 hover:bg-white/[0.03] transition-colors"
        >
          <LogOut size={14} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block w-64 fixed left-0 top-0 z-40 h-screen">
        <SidebarContent />
      </div>

      {/* Mobile drawer */}
      {mobile && (
        <div className="lg:hidden h-full w-64">
          <SidebarContent />
        </div>
      )}

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-t border-white/[0.04]">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`flex flex-col items-center cursor-pointer gap-1 px-3 py-2 rounded-xl transition-colors
                  ${isActive ? 'text-[#DC2626]' : 'text-gray-600 hover:text-gray-400'}`}
              >
                <item.icon size={18} />
                <span className="text-[8px] font-black tracking-wider uppercase">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};