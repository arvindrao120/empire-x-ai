import { ContentContainer } from './ContentContainer';
import { Twitter, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Campaigns', href: '/campaigns' },
    { label: 'AI Strategy', href: '/ai-strategy' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Ad Account', href: '/ad-account' },
  ],
  Company: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: 'mailto:support@empirex.in', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.05]">

      {/* Main Footer */}
      <div className="py-16">
        <ContentContainer>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

            {/* Brand col */}
            <div className="md:col-span-2">
              <span className="text-2xl font-black tracking-widest text-white block mb-4">
                EMPIRE<span className="text-[#DC2626]">X</span>
              </span>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs font-medium">
                AI-powered Meta Ads automation platform built for businesses that want to dominate their market.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.05] flex items-center justify-center text-gray-500 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <s.icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links cols */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="text-[10px] font-black text-gray-600 tracking-widest uppercase mb-5">{category}</p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-gray-500 hover:text-white transition-colors font-medium cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ContentContainer>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04] py-5">
        <ContentContainer>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-gray-600 font-bold">
              © 2026 Empire X Kinetic Command. All Rights Reserved.
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] text-gray-600 font-bold">All systems operational</span>
            </div>
          </div>
        </ContentContainer>
      </div>

    </footer>
  );
};