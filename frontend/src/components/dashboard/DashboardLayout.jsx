import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Bell, Settings, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Sidebar } from './sidebar/Sidebar';

export const DashboardLayout = () => {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Remove Facebook OAuth hash fragment if present
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
      {/* Desktop Sidebar - fixed left */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-64 bg-[#080808] z-50 lg:hidden shadow-2xl border-r border-white/10"
            >
              <Sidebar mobile onClose={() => setMobileMenuOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full max-w-[100vw]">
        
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-4 md:px-8 bg-[#080808] sticky top-0 z-30">
          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white transition-colors p-2 -ml-2"
            >
              <Menu size={24} />
            </button>
            <nav className="hidden lg:flex items-center gap-6">
              {headerLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <span
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className={`text-xs font-bold cursor-pointer transition-colors ${
                      isActive
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

          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
              <Bell size={18} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
              <Settings size={18} />
            </button>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#DC2626] to-[#7f1d1d] flex items-center justify-center ml-2 border border-white/10">
              <span className="text-xs font-bold text-white">{user?.displayName?.charAt(0) || 'U'}</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full max-w-7xl mx-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
