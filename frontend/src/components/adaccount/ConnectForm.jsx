import { useState } from 'react';
import { Wallet, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { updateProfile } from '../../api/index';
import { motion, AnimatePresence } from 'framer-motion';

export const ConnectForm = ({ currentId, onSaved }) => {
  const [accountId, setAccountId] = useState(currentId || '');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSave = async (e) => {
    e.preventDefault();
    if (!accountId.trim()) return;

    setLoading(true);
    setStatus(null);
    try {
      await updateProfile({ adAccountId: accountId.trim() });
      setStatus('success');
      onSaved(accountId.trim());
    } catch (err) {
      setStatus('error');
      setErrorMsg(err?.response?.data?.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#101010] border border-white/5 rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-[#DC2626]/10 flex items-center justify-center shrink-0">
          <Wallet size={17} className="text-[#DC2626]" />
        </div>
        <div>
          <h2 className="text-xs font-black text-white tracking-widest uppercase">Connect Ad Account</h2>
          <p className="text-[10px] text-gray-500 font-bold mt-0.5">Enter your Meta Ad Account ID</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">
            Ad Account ID
          </label>
          <input
            type="text"
            value={accountId}
            onChange={(e) => {
              setAccountId(e.target.value);
              setStatus(null);
            }}
            placeholder="e.g. act_123456789"
            className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/40 placeholder-gray-600 transition-colors"
          />
          <p className="text-[10px] text-gray-600 mt-2 font-bold">
            Format: <span className="text-gray-400">act_XXXXXXXXXX</span> &nbsp;·&nbsp;
            <a
              href="https://business.facebook.com/settings/ad-accounts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DC2626]/70 hover:text-[#DC2626] transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              Find it on Meta Business Manager <ExternalLink size={10} />
            </a>
          </p>
        </div>

        {/* Status message */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20"
            >
              <CheckCircle size={14} className="text-green-500 shrink-0" />
              <p className="text-[11px] font-bold text-green-400">Ad Account connected successfully!</p>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
            >
              <AlertCircle size={14} className="text-red-400 shrink-0" />
              <p className="text-[11px] font-bold text-red-400">{errorMsg}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={loading || !accountId.trim()}
          className="w-full py-3 rounded-lg bg-[#DC2626] hover:bg-[#c91f1f] disabled:opacity-40 disabled:cursor-not-allowed text-white text-[10px] font-black tracking-widest uppercase transition-colors shadow-[0_2px_12px_rgba(220,38,38,0.2)] cursor-pointer"
        >
          {loading ? 'Saving...' : currentId ? 'Update Account ID' : 'Connect Account'}
        </button>
      </form>
    </div>
  );
};