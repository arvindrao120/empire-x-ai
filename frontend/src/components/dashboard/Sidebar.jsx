import { LogOut, LayoutGrid, Rocket, BrainCircuit, Wallet, BarChart3 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { logout } from '../../api/auth';
import { motion } from 'framer-motion';

export const Sidebar = ({ mobile, onClose }) => {
  const { user, setUser } = useAuth();
  
  const handleLogout = async () => {
    await logout();
    setUser(null);
    window.location.href = '/';
  };

  const navItems = [
    { icon: <LayoutGrid size={18} />, label: "Dashboard", active: false },
    { icon: <Rocket size={18} />, label: "Campaigns", active: true },
    { icon: <BrainCircuit size={18} />, label: "AI Strategy", active: false },
    { icon: <Wallet size={18} />, label: "Ad Account", active: false },
    { icon: <BarChart3 size={18} />, label: "Analytics", active: false },
  ];

  return (
    <div className={`flex flex-col h-full bg-[#080808] border-r border-white/5 p-6 ${mobile ? 'w-full' : 'w-64 fixed left-0 top-0 h-screen z-40'}`}>
      {/* Mobile Close Button */}
      {mobile && (
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white"
        >
          ✕
        </button>
      )}

      {/* Logo & User Info */}
      <div className="mb-10">
        <h1 className="text-2xl font-black text-white tracking-widest mb-8">EMPIRE<span className="text-[#DC2626]">X</span></h1>
        
        <div className="flex items-center gap-3 mb-6 p-2 rounded-xl bg-[#101010] border border-white/5">
          {user?.photos?.[0] ? (
            <img src={user.photos[0]} alt="Avatar" className="w-10 h-10 rounded-lg object-cover bg-white/10" />
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
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item, idx) => (
          <button 
            key={idx}
            className={`w-full flex cursor-pointer items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${item.active ? 'bg-gradient-to-r from-[#DC2626]/20 to-transparent text-[#DC2626] border-l-2 border-[#DC2626]' : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'}`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer Actions */}
      <div className="mt-auto flex flex-col gap-3">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#DC2626] text-white cursor-pointer text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)]"
        >
          Upgrade Plan
        </motion.button>
        
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-gray-400 cursor-pointer hover:text-white hover:bg-white/5 transition-all"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  );
};
