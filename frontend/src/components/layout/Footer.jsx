import { ContentContainer } from './ContentContainer';

export const Footer = () => {
  return (
    <footer className="border-t border-border-color/[var(--border-opacity)] py-8 mt-20">
      <ContentContainer>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-widest text-primary">EMPIRE X</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-textMuted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
          
          <div className="text-sm text-textMuted">
            © 2026 Empire X Kinetic Command. All Rights Reserved.
          </div>
        </div>
      </ContentContainer>
    </footer>
  );
};
