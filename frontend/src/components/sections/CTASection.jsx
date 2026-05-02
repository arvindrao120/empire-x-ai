import { motion } from 'framer-motion';
import { ContentContainer } from '../layout/ContentContainer';
import { Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const CTASection = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#080808]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DC2626]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626]/20 to-transparent" />

            <ContentContainer className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 mb-8">
                        <Zap size={12} className="text-[#DC2626]" />
                        <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626]">
                            Start For Free Today
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
                        Ready To Scale<br />
                        <span className="text-[#DC2626]">Your Business?</span>
                    </h2>

                    <p className="text-sm text-gray-500 mb-10 leading-relaxed">
                        Join hundreds of businesses already dominating their Meta ad performance with EmpireX AI.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate(user ? '/dashboard' : '/login')}
                            className="w-full sm:w-auto px-10 py-4 rounded-lg bg-[#DC2626] hover:bg-[#c91f1f] text-white text-sm font-black tracking-widest uppercase transition-colors shadow-[0_4px_24px_rgba(220,38,38,0.35)] cursor-pointer"
                        >
                            {user ? 'Go to Dashboard →' : 'Get Started Free →'}
                        </button>
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-10 py-4 rounded-lg border border-white/10 hover:border-white/20 text-white text-sm font-black tracking-widest uppercase transition-colors cursor-pointer"
                        >
                            View Pricing
                        </button>
                    </div>

                    <p className="text-[11px] text-gray-600 mt-6 font-bold tracking-wide">
                        No credit card required · Setup in 2 minutes · Cancel anytime
                    </p>
                </motion.div>
            </ContentContainer>
        </section>
    );
};