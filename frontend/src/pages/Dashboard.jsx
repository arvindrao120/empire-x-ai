import { Sidebar } from '../components/dashboard/Sidebar';
import { StatsCards } from '../components/dashboard/StatsCards';
import { AIStrategyForm } from '../components/dashboard/AIStrategyForm';
import { QuickActions } from '../components/dashboard/QuickActions';
import { CampaignsTable } from '../components/dashboard/CampaignsTable';
import { Bell, Settings, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Dashboard = () => {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Remove Facebook OAuth hash fragment if present
  useEffect(() => {
    if (window.location.hash === '#_=_') {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
  }, []);
  
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
              <span className="text-xs font-bold text-white border-b-2 border-[#DC2626] py-1 mt-1 cursor-pointer">Dashboard</span>
              <span className="text-xs font-bold text-gray-500 hover:text-white transition-colors cursor-pointer">Campaigns</span>
              <span className="text-xs font-bold text-gray-500 hover:text-white transition-colors cursor-pointer">AI Strategy</span>
              <span className="text-xs font-bold text-gray-500 hover:text-white transition-colors cursor-pointer">Analytics</span>
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
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4"
          >
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-white mb-1 md:mb-2 uppercase truncate">Command Center</h1>
              <p className="text-xs md:text-sm text-gray-400">Real-time automation engine oversight.</p>
            </div>
            
            <div className="flex items-center bg-[#101010] border border-white/5 rounded-lg p-1 self-start sm:self-auto overflow-x-auto shrink-0 max-w-full">
              <button className="px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-bold text-white bg-white/10 rounded-md whitespace-nowrap">24 HOURS</button>
              <button className="px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-bold text-gray-500 hover:text-white transition-colors whitespace-nowrap">7 DAYS</button>
              <button className="px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-bold text-gray-500 hover:text-white transition-colors whitespace-nowrap">30 DAYS</button>
            </div>
          </motion.div>

          {/* Top Info Cards */}
          <StatsCards />

          {/* Grid Layout for Forms and Shortcuts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AIStrategyForm />
            <QuickActions />
          </div>

          {/* Botom Table */}
          <CampaignsTable />
          
        </main>
      </div>
    </div>
  );
};
