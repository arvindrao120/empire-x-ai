import { Rocket, BarChart3, BrainCircuit, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch Campaigns',
    desc: 'Deploy Meta ad campaigns directly from EmpireX without touching Ads Manager.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    desc: 'Live spend, impressions, CTR and ROAS data pulled straight from your account.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Optimization',
    desc: 'EmpireX AI monitors and auto-adjusts your campaigns for maximum ROI.',
  },
  {
    icon: ShieldCheck,
    title: 'Budget Protection',
    desc: 'Smart alerts stop overspend before it happens — your budget stays safe.',
  },
];

export const UnlockFeatures = () => {
  return (
    <div className="bg-[#101010] border border-white/5 rounded-2xl p-6">
      <h3 className="text-[10px] font-black text-gray-500 tracking-widest uppercase mb-5">
        What You Unlock
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 rounded-xl bg-[#080808] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#DC2626]/10 flex items-center justify-center shrink-0 mt-0.5">
              <f.icon size={14} className="text-[#DC2626]" />
            </div>
            <div>
              <p className="text-[11px] font-black text-white tracking-wide mb-1">{f.title}</p>
              <p className="text-[10px] text-gray-500 leading-relaxed font-bold">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};