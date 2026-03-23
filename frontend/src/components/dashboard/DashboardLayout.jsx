import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Bell, Settings } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Sidebar } from './sidebar/Sidebar';
import { SettingsDropdown } from '../common/SettingDropDown';

export const DashboardLayout = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#_=_') {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
  }, []);

  const headerLinks = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Campaigns", path: "/campaigns" },
    { label: "AI Strategy", path: "/ai-strategy" },
    { label: "Analytics", path: "/analytics" }
  ];

  return (
    <div className="min-h-screen bg-[#080808] flex">
      <Sidebar />

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full max-w-[100vw]">

        {/* Top Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-4 md:px-8 bg-[#080808] sticky top-0 z-30">
          
          <div className="flex items-center gap-4 md:gap-8">
            {/* Logo - Mobile Only */}
            <h1
              onClick={() => navigate('/dashboard')}
              className="lg:hidden text-xl font-black text-white tracking-widest cursor-pointer"
            >
              EMPIRE<span className="text-[#DC2626]">X</span>
            </h1>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {headerLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <span
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className={`text-xs font-bold cursor-pointer transition-colors ${isActive
                      ? "text-white border-b-2 border-[#DC2626] py-1 mt-1"
                      : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                );
              })}
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Notification */}
            <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
              <Bell size={18} />
            </button>

            {/* Settings */}
            <div className="relative">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <Settings size={18} />
              </button>

              <AnimatePresence>
                {showSettings && (
                  <SettingsDropdown onClose={() => setShowSettings(false)} />
                )}
              </AnimatePresence>
            </div>

            {/* Profile Photo */}
            <div
              className="ml-1 cursor-pointer"
              onClick={() => setShowSettings(!showSettings)}
            >
              {user?.photos?.[0] ? (
                <img
                  src={user.photos[0]}
                  alt={user.displayName}
                  className="w-9 h-9 rounded-xl object-cover border-2 border-[#DC2626]"
                />
              ) : (
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#DC2626] to-[#7f1d1d] flex items-center justify-center border border-white/10">
                  <span className="text-xs font-bold text-white">{user?.displayName?.charAt(0) || 'U'}</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full max-w-7xl mx-auto overflow-x-hidden pb-20 lg:pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};