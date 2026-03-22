import { motion } from 'framer-motion';
import { ContentContainer } from '../layout/ContentContainer';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { Lock } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';
import { useAuth } from '../../context/AuthContext.jsx';


export const LockSection = () => {
  const { user, loading } = useAuth();
  const handleFacebookLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/facebook`;
  };

  return (
    <section id="dashboard" className="py-24 relative overflow-hidden bg-background">
      {/* Faded background graph/dashboard representation */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <ContentContainer>
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-4">Kinetic Dashboard</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-xl mx-auto"
        >
          <Card className="text-center py-12 px-8 flex flex-col items-center justify-center border border-border-color/10 bg-card shadow-2xl relative z-10 backdrop-blur-xl">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Operational Lock</h3>

            <p className="text-sm text-textMuted mb-8 max-w-sm mx-auto">
              Authentication is required to access the Kinetic Command dashboard and live analytics.
            </p>

            <Button  onClick={handleFacebookLogin} variant="gradient" className="w-full max-w-xs">
              Please Login to Continue
            </Button>
          </Card>
        </motion.div>
      </ContentContainer>
    </section>
  );
};
