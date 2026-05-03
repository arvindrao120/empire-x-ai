import { Button } from '../common/Button';
import { ContentContainer } from './ContentContainer';
import { Lock, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext.jsx';
import { ProfilePopup } from '../common/ProfilePopup.jsx';
import { useState } from 'react'; import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
  const { user, loading } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-[rgb(var(--border-color)/var(--border-opacity))]"
      >
        <ContentContainer>
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button onClick={() => navigate('/')} className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-bold tracking-widest text-primary">
                EMPIRE X
              </span>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => navigate("/services")}
                className="text-xs font-semibold cursor-pointer tracking-wider text-textMuted hover:text-textMain uppercase transition-colors"
              >
                Our Services
              </button>

              <button
                onClick={() => navigate('/pricing')}
                className="cursor-pointer text-xs font-semibold tracking-wider text-textMuted hover:text-textMain uppercase transition-colors"
              >
                Pricing
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="cursor-pointer text-xs font-semibold tracking-wider text-textMuted hover:text-textMain uppercase transition-colors"
              >
                Contact Us
              </button>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => navigate('/dashboard')}
                    variant="primary"
                    size="md"
                    className="hidden sm:flex gap-2 cursor-pointer"
                  >
                    <LayoutDashboard size={15} />
                    <span className="text-xs tracking-wider">Dashboard</span>
                  </Button>

                  <div
                    className="relative cursor-pointer"
                    onClick={() => setShowProfile(!showProfile)}
                  >
                    {user.photos && user.photos.length > 0 ? (
                      <img
                        src={user.photos[0]}
                        alt={user.displayName}
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-primary object-cover"
                      />
                    ) : (
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-primary flex items-center justify-center bg-card text-primary font-bold text-sm">
                        {user.displayName?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                    )}

                    {showProfile && (
                      <ProfilePopup onClose={() => setShowProfile(false)} />
                    )}
                  </div>
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
    </>
  );
};