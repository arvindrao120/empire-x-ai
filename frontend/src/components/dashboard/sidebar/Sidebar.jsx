import { LogOut, LayoutGrid, Rocket, BrainCircuit, Wallet, BarChart3, TrendingUp } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { logout } from '../../../api/auth';
import { motion } from 'framer-motion';
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

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`hidden lg:flex flex-col h-screen bg-[#080808] border-r border-white/5 p-6 ${mobile ? 'w-full' : 'w-64 fixed left-0 top-0 z-40'}`}>
        
        {/* Logo */}
        <h1 className="text-2xl font-black text-white tracking-widest mb-8">
          EMPIRE<span className="text-[#DC2626]">X</span>
        </h1>

        {/* User Info */}
        <div className="flex items-center cursor-pointer gap-3 mb-8 p-3 rounded-xl bg-[#101010] border border-white/5">
          {user?.photos?.[0] ? (
            <img src={user.photos[0]} alt="Avatar" className="w-10 h-10 rounded-lg object-cover" />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-[#DC2626]/20 text-[#DC2626] flex items-center justify-center font-bold">
              {user?.displayName?.charAt(0) || 'U'}
            </div>
          )}
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-white truncate">{user?.displayName || "User"}</p>
            <p className="text-[10px] text-[#DC2626] font-bold tracking-wider uppercase">{user?.plan || "Free"} Member</p>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`w-full flex items-center gap-3 cursor-pointer px-4 py-3 rounded-lg text-sm font-semibold transition-all border-l-2
                  ${isActive
                    ? 'bg-gradient-to-r from-[#DC2626]/20 to-transparent text-[#DC2626] border-[#DC2626]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-transparent'
                  }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="flex flex-col gap-3 mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 cursor-pointer rounded-lg bg-[#DC2626] text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)]"
          >
            Upgrade Plan
          </motion.button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 cursor-pointer px-4 py-3 rounded-lg text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Sidebar (when open) */}
      {mobile && (
        <div className="lg:hidden flex flex-col h-full bg-[#080808] p-6 w-64">
          <h1 className="text-2xl font-black text-white tracking-widest mb-8">
            EMPIRE<span className="text-[#DC2626]">X</span>
          </h1>

          <div className="flex items-center gap-3 mb-8 p-3 rounded-xl bg-[#101010] border border-white/5">
            {user?.photos?.[0] ? (
              <img src={user.photos[0]} alt="Avatar" className="w-10 h-10 rounded-lg object-cover" />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-[#DC2626]/20 text-[#DC2626] flex items-center justify-center font-bold">
                {user?.displayName?.charAt(0) || 'U'}
              </div>
            )}
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">{user?.displayName || "User"}</p>
              <p className="text-[10px] text-[#DC2626] font-bold tracking-wider uppercase">{user?.plan || "Free"} Member</p>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all border-l-2
                    ${isActive
                      ? 'bg-gradient-to-r from-[#DC2626]/20 to-transparent text-[#DC2626] border-[#DC2626]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border-transparent'
                    }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 mt-auto">
            <button
              onClick={handleLogout}
              className="w-full flex items-center cursor-pointer gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-lg border-t border-white/5"
      >
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`flex flex-col items-center cursor-pointer gap-1 px-3 py-2 rounded-xl transition-colors
                  ${isActive ? 'text-[#DC2626]' : 'text-gray-500 hover:text-white'}`}
              >
                <item.icon size={20} />
                <span className="text-[9px] font-bold tracking-wider uppercase">{item.label}</span>
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};