import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContentContainer } from '../components/layout/ContentContainer';
import { Check, X, Minus, Zap, Plus } from 'lucide-react';

const plans = [
    {
        name: "Free",
        monthlyPrice: 0,
        yearlyPrice: 0,
        description: "Perfect for getting started with AI-powered Meta ads.",
        features: ["1 Active Campaign", "Basic AI Strategy", "Standard Analytics", "Email Support", "Facebook & Instagram"],
        cta: "Start Free",
        highlighted: false,
    },
    {
        name: "Pro",
        monthlyPrice: 999,
        yearlyPrice: 799,
        description: "For growing businesses ready to scale their Meta ad performance.",
        features: ["10 Active Campaigns", "Advanced AI Generation", "Full Analytics Suite", "Auto-scheduling", "Priority Support", "All Platforms", "Budget Optimization", "Creative Refresh Alerts"],
        cta: "Go Pro Now",
        highlighted: true,
        badge: "Most Popular",
    },
    {
        name: "Enterprise",
        monthlyPrice: 2999,
        yearlyPrice: 2399,
        description: "Full-scale automation for agencies and large businesses.",
        features: ["Unlimited Campaigns", "Priority AI Processing", "Custom API Access", "24/7 Priority Support", "Dedicated Account Manager", "Custom Integrations", "White Label Option", "SLA Guarantee"],
        cta: "Contact Sales",
        highlighted: false,
    },
];

const comparisonFeatures = [
    { label: "Active Campaigns", free: "1", pro: "10", enterprise: "Unlimited" },
    { label: "AI Strategy Generation", free: "Basic", pro: "Advanced", enterprise: "Priority" },
    { label: "Analytics Dashboard", free: "Standard", pro: "Full Suite", enterprise: "Custom" },
    { label: "Campaign Scheduling", free: false, pro: true, enterprise: true },
    { label: "Budget Optimization", free: false, pro: true, enterprise: true },
    { label: "Creative Refresh Alerts", free: false, pro: true, enterprise: true },
    { label: "All Meta Platforms", free: false, pro: true, enterprise: true },
    { label: "Priority AI Processing", free: false, pro: false, enterprise: true },
    { label: "Custom API Access", free: false, pro: false, enterprise: true },
    { label: "Dedicated Account Manager", free: false, pro: false, enterprise: true },
    { label: "White Label Option", free: false, pro: false, enterprise: true },
    { label: "Support", free: "Email", pro: "Priority", enterprise: "24/7" },
    { label: "SLA Guarantee", free: false, pro: false, enterprise: true },
];

const faqs = [
    {
        q: "Can I upgrade or downgrade my plan anytime?",
        a: "Yes. You can upgrade, downgrade, or cancel your plan at any time from your settings page. Changes take effect from the next billing cycle."
    },
    {
        q: "Is there a free trial for Pro or Enterprise?",
        a: "The Free plan itself acts as a trial. You can experience the platform and upgrade when ready. We do not charge a credit card for the Free plan."
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept all major credit/debit cards, UPI, net banking, and wallets via Razorpay — India's most trusted payment gateway."
    },
    {
        q: "What is your refund policy?",
        a: "All payments are non-refundable once a subscription is activated. We recommend starting with the Free plan before committing to a paid plan."
    },
    {
        q: "Do you offer discounts for startups or NGOs?",
        a: "Yes, we offer special pricing for early-stage startups and non-profit organizations. Contact us at support@empirex.in with details about your organization."
    },
    {
        q: "What happens if I exceed my campaign limit?",
        a: "You will be notified when you reach your plan limit. You can pause an existing campaign to create a new one, or upgrade your plan for more capacity."
    },
];

const CellValue = ({ value }) => {
    if (value === true) return <Check size={16} className="text-[#DC2626] mx-auto" />;
    if (value === false) return <X size={14} className="text-gray-700 mx-auto" />;
    return <span className="text-xs font-bold text-gray-300">{value}</span>;
};

const FAQItem = ({ faq, isOpen, onToggle }) => (
    <div className="border-b border-white/[0.05]">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer group"
        >
            <span className={`text-sm font-black tracking-wide transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                {faq.q}
            </span>
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#DC2626]/20 text-[#DC2626]' : 'bg-white/5 text-gray-500'}`}>
                {isOpen ? <Minus size={13} /> : <Plus size={13} />}
            </div>
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <p className="text-sm text-gray-500 leading-relaxed pb-5 font-medium pr-10">
                        {faq.a}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const Pricing = () => {
    const navigate = useNavigate();
    const [yearly, setYearly] = useState(false);
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="min-h-screen bg-[#080808] flex flex-col">
            <Navbar />

            <main className="flex-grow pt-28 pb-24">

                {/* Hero */}
                <div className="relative overflow-hidden mb-16">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#DC2626]/8 rounded-full blur-[100px] pointer-events-none" />
                    <ContentContainer className="relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] mb-4 block">Simple Pricing</span>
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-5 leading-tight">
                                Scalable Command Plans
                            </h1>
                            <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
                                Precision tools for every stage of your growth. Start free, scale when ready.
                            </p>

                            {/* Toggle */}
                            <div className="inline-flex items-center gap-3 bg-[#101010] border border-white/5 rounded-xl p-1.5">
                                <button
                                    onClick={() => setYearly(false)}
                                    className={`px-6 py-2.5 rounded-lg text-[11px] font-black tracking-widest uppercase transition-colors cursor-pointer
                    ${!yearly ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setYearly(true)}
                                    className={`px-6 py-2.5 rounded-lg text-[11px] font-black tracking-widest uppercase transition-colors cursor-pointer flex items-center gap-2
                    ${yearly ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                                >
                                    Yearly
                                    <span className="text-[9px] bg-[#DC2626] text-white px-2 py-0.5 rounded-full font-black">Save 20%</span>
                                </button>
                            </div>
                        </motion.div>
                    </ContentContainer>
                </div>

                {/* Plan Cards */}
                <ContentContainer className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className={`relative flex flex-col rounded-2xl p-7 border transition-all
                  ${plan.highlighted
                                        ? 'bg-[#DC2626]/5 border-[#DC2626]/30 shadow-[0_0_50px_rgba(220,38,38,0.12)]'
                                        : 'bg-[#101010] border-white/[0.06] hover:border-white/10'
                                    }`}
                            >
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DC2626] text-white text-[9px] font-black px-4 py-1 uppercase tracking-widest rounded-full whitespace-nowrap">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="mb-6">
                                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest block mb-2">Plan {idx + 1}</span>
                                    <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                                    <p className="text-[11px] text-gray-500 font-medium mb-5 leading-relaxed">{plan.description}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-base text-gray-400 font-bold">₹</span>
                                        <motion.span
                                            key={yearly ? 'y' : 'm'}
                                            initial={{ opacity: 0, y: -6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-4xl font-black text-white"
                                        >
                                            {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                                        </motion.span>
                                        <span className="text-sm text-gray-500">/mo</span>
                                    </div>
                                    {yearly && plan.monthlyPrice > 0 && (
                                        <p className="text-[10px] text-[#DC2626] font-black mt-1">
                                            Save ₹{(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                                        </p>
                                    )}
                                </div>

                                <ul className="flex-1 space-y-3 mb-8">
                                    {plan.features.map((f, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-xs text-gray-400 font-medium">
                                            <Check size={14} className="text-[#DC2626] shrink-0 mt-0.5 opacity-80" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => plan.name === 'Enterprise' ? navigate('/contact') : navigate('/login')}
                                    className={`w-full py-3.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all cursor-pointer
                    ${plan.highlighted
                                            ? 'bg-[#DC2626] hover:bg-[#c91f1f] text-white shadow-[0_4px_16px_rgba(220,38,38,0.3)]'
                                            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                        }`}
                                >
                                    {plan.highlighted && <Zap size={12} className="inline mr-2 mb-0.5" />}
                                    {plan.cta}
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-[11px] text-gray-600 mt-8 font-bold tracking-wide"
                    >
                        No credit card required · Cancel anytime · No hidden fees
                    </motion.p>
                </ContentContainer>

                {/* Comparison Table */}
                <div className="border-t border-white/[0.04] py-24">
                    <ContentContainer>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] mb-3 block">Compare</span>
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white mb-3">
                                Full Feature Comparison
                            </h2>
                            <p className="text-sm text-gray-500">See exactly what you get with each plan.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="max-w-4xl mx-auto overflow-x-auto"
                        >
                            <table className="w-full min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-white/[0.06]">
                                        <th className="text-left py-4 pr-6 text-[10px] font-black text-gray-600 tracking-widest uppercase w-1/2">Feature</th>
                                        {plans.map((plan) => (
                                            <th key={plan.name} className={`py-4 text-center text-[11px] font-black tracking-widest uppercase
                        ${plan.highlighted ? 'text-[#DC2626]' : 'text-gray-400'}`}>
                                                {plan.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((feature, idx) => (
                                        <motion.tr
                                            key={idx}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.03 }}
                                            className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                                        >
                                            <td className="py-4 pr-6 text-xs text-gray-400 font-medium">{feature.label}</td>
                                            <td className="py-4 text-center"><CellValue value={feature.free} /></td>
                                            <td className="py-4 text-center"><CellValue value={feature.pro} /></td>
                                            <td className="py-4 text-center"><CellValue value={feature.enterprise} /></td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </ContentContainer>
                </div>

                {/* FAQ */}
                <div className="border-t border-white/[0.04] py-24">
                    <ContentContainer>
                        <div className="max-w-3xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-center mb-12"
                            >
                                <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] mb-3 block">FAQ</span>
                                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-white mb-3">
                                    Pricing Questions
                                </h2>
                                <p className="text-sm text-gray-500">Everything you need to know about our plans and billing.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-[#101010] border border-white/[0.05] rounded-2xl px-6 md:px-8"
                            >
                                {faqs.map((faq, idx) => (
                                    <FAQItem
                                        key={idx}
                                        faq={faq}
                                        isOpen={openFaq === idx}
                                        onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </ContentContainer>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Pricing;