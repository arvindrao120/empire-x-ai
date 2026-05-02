import { Info, ExternalLink } from 'lucide-react';

export const MetaApprovalBanner = () => {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/15">
      <Info size={15} className="text-yellow-500/70 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-black text-yellow-500/80 tracking-wide mb-1">
          Meta Business Verification Pending
        </p>
        <p className="text-[10px] text-gray-500 font-bold leading-relaxed">
          Full campaign automation will activate once Meta approves EmpireX. You can connect your Ad Account ID now — everything will be ready to go live automatically.
        </p>
      </div>
      <a
        href="https://www.facebook.com/business/help/2058515294227817"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] font-black tracking-widest uppercase text-yellow-500/60 hover:text-yellow-400 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
      >
        Learn <ExternalLink size={10} />
      </a>
    </div>
  );
};