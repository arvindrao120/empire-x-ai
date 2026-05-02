import { motion } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Zap, Crown } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const AccountHealthCard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const isConnected = !!user?.adAccountId;
  const isPro = user?.plan === 'pro';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-[#101010] border border-white/5 rounded-2xl p-6 flex flex-col gap-5"
    >
      <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Account Health</h3>

      {/* FB Ad Account Status */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-[#080808] border border-white/5">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isConnected ? 'bg-[#DC2626]/10' : 'bg-yellow-500/10'}`}>
            {isConnected
              ? <ShieldCheck size={18} className="text-[#DC2626]" />
              : <ShieldAlert size={18} className="text-yellow-500" />
            }
          </div>
          <div>
            <p className="text-xs font-black text-white tracking-wide">Ad Account</p>
            <p className="text-[10px] text-gray-500 mt-0.5 font-bold tracking-widest uppercase">
              {isConnected ? `ID: ${user.adAccountId}` : 'Not Connected'}
            </p>
          </div>
        </div>
        {!isConnected && (
          <button
            onClick={() => navigate('/ad-account')}
            className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] hover:text-red-400 transition-colors cursor-pointer"
          >
            Connect →
          </button>
        )}
        {isConnected && (
          <span className="text-[9px] font-black tracking-widest uppercase px-2 py-1 rounded-full bg-[#DC2626]/10 text-[#DC2626] border border-[#DC2626]/20">
            Active
          </span>
        )}
      </div>

      {/* Plan Status */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-[#080808] border border-white/5">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isPro ? 'bg-[#DC2626]/10' : 'bg-white/5'}`}>
            {isPro
              ? <Crown size={18} className="text-[#DC2626]" />
              : <Zap size={18} className="text-gray-400" />
            }
          </div>
          <div>
            <p className="text-xs font-black text-white tracking-wide">Current Plan</p>
            <p className="text-[10px] font-black tracking-widest uppercase mt-0.5 text-[#DC2626]">
              {user?.plan || 'Free'} Member
            </p>
          </div>
        </div>
        {!isPro && (
          <button
            onClick={() => navigate('/settings')}
            className="text-[10px] font-black tracking-widest uppercase text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Upgrade →
          </button>
        )}
      </div>

      {/* Health Score Bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Health Score</span>
          <span className="text-[10px] font-black text-white tracking-widest">
            {isConnected && isPro ? '100%' : isConnected || isPro ? '60%' : '20%'}
          </span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isConnected && isPro ? '100%' : isConnected || isPro ? '60%' : '20%' }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-[#DC2626] to-red-400 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.5)]"
          />
        </div>
        <p className="text-[10px] text-gray-600 mt-2 font-bold">
          {!isConnected && !isPro && 'Connect ad account & upgrade to maximize performance'}
          {isConnected && !isPro && 'Upgrade to Pro for unlimited campaigns'}
          {!isConnected && isPro && 'Connect your Meta Ad Account to go live'}
          {isConnected && isPro && 'All systems operational'}
        </p>
      </div>
    </motion.div>
  );
};