import { useNavigate } from 'react-router-dom';
import { ContentContainer } from './ContentContainer';
import { Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#080808] border-t border-white/[0.04]">
      <div className="py-14">
        <ContentContainer>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

            {/* Brand */}
            <div className="md:col-span-1">
              <button
                onClick={() => navigate('/')}
                className="text-xl font-black tracking-widest text-white mb-3 cursor-pointer block"
              >
                EMPIRE<span className="text-[#DC2626]">X</span>
              </button>
              <p className="text-xs text-gray-600 leading-relaxed font-medium mb-5">
                AI-powered Meta Ads automation for businesses that want to dominate.
              </p>
              {/* Socials */}
              <div className="flex items-center gap-2">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Mail, href: 'mailto:support@empirex.in' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.05] flex items-center justify-center text-gray-600 hover:text-white hover:bg-white/8 transition-colors cursor-pointer"
                  >
                    <s.icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Platform */}
            <div>
              <p className="text-[10px] font-black text-gray-700 tracking-widest uppercase mb-4">Platform</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'Dashboard', path: '/dashboard' },
                  { label: 'Campaigns', path: '/campaigns' },
                  { label: 'AI Strategy', path: '/ai-strategy' },
                  { label: 'Analytics', path: '/analytics' },
                  { label: 'Ad Account', path: '/ad-account' },
                ].map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => navigate(l.path)}
                      className="text-xs text-gray-600 hover:text-white transition-colors font-medium cursor-pointer"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-[10px] font-black text-gray-700 tracking-widest uppercase mb-4">Company</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'Pricing', path: '/pricing' },
                  { label: 'Our Services', path: '/services' },
                  { label: 'Contact Us', path: '/contact' },
                  { label: 'Privacy Policy', path: '/privacy-policy' },
                  { label: 'Terms of Service', path: '/terms' },
                ].map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => navigate(l.path)}
                      className="text-xs text-gray-600 hover:text-white transition-colors font-medium cursor-pointer"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] font-black text-gray-700 tracking-widest uppercase mb-4">Contact</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:support@empirex.in"
                    className="flex items-center gap-2 text-xs text-gray-600 hover:text-white transition-colors font-medium cursor-pointer"
                  >
                    <Mail size={12} className="text-[#DC2626]/60 shrink-0" />
                    support@empirex.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-2 text-xs text-gray-600 hover:text-white transition-colors font-medium cursor-pointer"
                  >
                    <Phone size={12} className="text-[#DC2626]/60 shrink-0" />
                    +91 98765 43210
                  </a>
                </li>
                <li className="pt-1">
                  <p className="text-[10px] text-gray-700 font-bold">Mon – Sat</p>
                  <p className="text-[10px] text-gray-700 font-bold">10:00 AM – 7:00 PM IST</p>
                </li>
              </ul>
            </div>

          </div>
        </ContentContainer>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04] py-4">
        <ContentContainer>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[10px] text-gray-700 font-bold">
              © 2026 EmpireX LLP. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-gray-700 font-bold">All systems operational</span>
              </div>
              <span className="text-[10px] text-gray-700 font-bold">
                Made by{' '}
                <span className="text-[#DC2626] font-black tracking-wide">EMPIRE<span className="text-white">X</span></span>
              </span>
            </div>
          </div>
        </ContentContainer>
      </div>
    </footer>
  );
};