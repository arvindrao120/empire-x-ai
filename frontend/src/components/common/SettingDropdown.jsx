import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Sun, Moon, User, Shield, HelpCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { logout } from '../../api/index';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SettingsDropdown = ({ onClose }) => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate('/');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      className="absolute right-0 top-12 w-64 bg-[#101010] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
    >
      {/* User Info */}
      <div className="p-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          {user?.photos?.[0] ? (
            <img src={user.photos[0]} className="w-10 h-10 rounded-xl object-cover border-2 border-[#DC2626]" />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-[#DC2626]/20 text-[#DC2626] flex items-center justify-center font-bold">
              {user?.displayName?.charAt(0) || 'U'}
            </div>
          )}
          <div>
            <p className="text-sm font-bold text-white">{user?.displayName}</p>
            <p className="text-xs text-[#DC2626] uppercase font-bold">{user?.plan || 'Free'} Plan</p>
          </div>
        </div>
      </div>

      {/* Settings Items */}
      <div className="p-2">

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <div className="flex items-center gap-3">
            {darkMode ? <Moon size={16} /> : <Sun size={16} />}
            <span className="text-sm font-semibold">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
          <div className={`w-8 h-4 rounded-full transition-colors ${darkMode ? 'bg-[#DC2626]' : 'bg-gray-600'}`}>
            <div className={`w-3 h-3 bg-white rounded-full mt-0.5 transition-transform ${darkMode ? 'translate-x-4' : 'translate-x-0.5'}`} />
          </div>
        </button>

        {/* Profile */}
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
          <User size={16} />
          <span className="text-sm font-semibold">Profile Settings</span>
        </button>

        {/* Security */}
        <button className="w-full flex cursor-pointer items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
          <Shield size={16} />
          <span className="text-sm font-semibold">Security</span>
        </button>

        {/* Help */}
        <button className="w-full flex items-center cursor-pointer gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
          <HelpCircle size={16} />
          <span className="text-sm font-semibold">Help & Support</span>
        </button>

        <hr className="border-white/5 my-2" />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:text-white hover:bg-[#DC2626] transition-all"
        >
          <LogOut size={16} />
          <span className="text-sm font-semibold">Logout</span>
        </button>
      </div>
    </motion.div>
  );
};