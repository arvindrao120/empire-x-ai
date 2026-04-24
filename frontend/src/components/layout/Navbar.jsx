import { Button } from '../common/Button';
import { ThemeToggle } from '../common/ThemeToggle';
import { ContentContainer } from './ContentContainer';
import { Lock, LayoutDashboard, Megaphone, Sparkles, BarChart2, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext.jsx';
import { ProfilePopup } from '../common/ProfilePopup.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const bottomNavItems = [
  { label: 'Home', href: '#', icon: Home },
  { label: 'Features', href: '#features', icon: Sparkles },
  { label: 'Dashboard', href: '#dashboard', icon: LayoutDashboard },
  { label: 'Campaigns', href: '#campaigns', icon: Megaphone },
  { label: 'Analytics', href: '#analytics', icon: BarChart2 },
];

export const Navbar = () => {
  const { user, loading } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Top Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-[rgb(var(--border-color)/var(--border-opacity))]"
      >
        <ContentContainer>
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-bold tracking-widest text-primary">EMPIRE X</span>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-xs font-semibold tracking-wider text-textMuted hover:text-textMain uppercase transition-colors">How it works</a>
              <a href="#features" className="text-xs font-semibold tracking-wider text-textMuted hover:text-textMain uppercase transition-colors">Features</a>
              <a href="#pricing" className="text-xs font-semibold tracking-wider text-textMuted hover:text-textMain uppercase transition-colors">Pricing</a>
              <a href="#dashboard" className="text-xs font-semibold tracking-wider text-textMuted hover:text-textMain uppercase transition-colors">Dashboard</a>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {user ? (
                <div className="relative cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
                  {user.photos && user.photos.length > 0 ? (
                    <img
                      src={user.photos[0]}
                      alt={user.displayName}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-primary object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-primary flex items-center justify-center bg-card text-primary font-bold text-sm">
                      {user.displayName?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  {showProfile && (
                    <ProfilePopup onClose={() => setShowProfile(false)} />
                  )}
                </div>
              ) : (
                <Button
                  onClick={handleLoginClick}
                  variant="primary"
                  size="md"
                  className="gap-2 cursor-pointer flex"
                >
                  <Lock size={15} />
                  <span className="text-xs tracking-wider">Login</span>
                </Button>
              )}
            </div>

          </div>
        </ContentContainer>
      </motion.header>

      {/* Bottom Nav - Mobile Only */}
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-lg border-t border-[rgb(var(--border-color)/var(--border-opacity))]"
      >
        <div className="flex items-center justify-around h-16 px-2">
          {bottomNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-textMuted hover:text-primary transition-colors group"
            >
              <item.icon size={20} className="group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-semibold tracking-wider uppercase">{item.label}</span>
            </a>
          ))}
        </div>
      </motion.nav>
    </>
  );
};