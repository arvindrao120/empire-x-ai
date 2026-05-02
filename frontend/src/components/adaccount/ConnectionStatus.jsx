import { ShieldCheck, ShieldAlert, ExternalLink } from 'lucide-react';

export const ConnectionStatus = ({ adAccountId }) => {
  const isConnected = !!adAccountId;

  return (
    <div className={`rounded-2xl border p-6 flex items-center justify-between gap-4
      ${isConnected
        ? 'bg-[#DC2626]/5 border-[#DC2626]/20'
        : 'bg-[#101010] border-white/5'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0
          ${isConnected ? 'bg-[#DC2626]/15' : 'bg-white/5'}`}
        >
          {isConnected
            ? <ShieldCheck size={22} className="text-[#DC2626]" />
            : <ShieldAlert size={22} className="text-gray-500" />
          }
        </div>
        <div>
          <p className="text-xs font-black text-white tracking-widest uppercase mb-1">
            {isConnected ? 'Ad Account Connected' : 'No Ad Account Connected'}
          </p>
          {isConnected ? (
            <p className="text-[11px] text-gray-400 font-bold">
              Account ID: <span className="text-white">{adAccountId}</span>
            </p>
          ) : (
            <p className="text-[11px] text-gray-500 font-bold">
              Connect your Meta Ad Account to get started
            </p>
          )}
        </div>
      </div>

      {isConnected && (
        <a
          href="https://business.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-gray-500 hover:text-white transition-colors shrink-0 cursor-pointer"
        >
          Meta <ExternalLink size={11} />
        </a>
      )}

      {!isConnected && (
        <span className="text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 shrink-0">
          Not Connected
        </span>
      )}
    </div>
  );
};