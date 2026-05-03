import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContentContainer } from '../components/layout/ContentContainer';
import { Mail, MessageSquare, Clock, CheckCircle, Send, MapPin, Phone } from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        value: "support@empirex.in",
        sub: "We reply within 24 hours",
        href: "mailto:support@empirex.in",
    },
    {
        icon: MessageSquare,
        title: "WhatsApp",
        value: "+91 98765 43210",
        sub: "Mon–Sat, 10am–7pm IST",
        href: "https://wa.me/919876543210",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "India",
        sub: "Serving clients globally",
        href: null,
    },
    {
        icon: Clock,
        title: "Support Hours",
        value: "Mon – Sat",
        sub: "10:00 AM – 7:00 PM IST",
        href: null,
    },
];

const subjects = [
    "General Inquiry",
    "Technical Support",
    "Billing & Plans",
    "Partnership",
    "Meta Ads Consultation",
    "Enterprise Inquiry",
    "Other",
];

export const Contact = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate submit — wire to your backend/email service
        await new Promise((res) => setTimeout(res, 1500));
        setSubmitted(true);
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#080808] flex flex-col">
            <Navbar />

            <main className="flex-grow pt-28 pb-24">

                {/* Hero */}
                <div className="relative overflow-hidden mb-16">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#DC2626]/8 rounded-full blur-[80px] pointer-events-none" />
                    <ContentContainer className="relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] mb-4 block">Get In Touch</span>
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
                                Contact Us
                            </h1>
                            <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
                                Have a question, need support, or want to explore a partnership? We are here for you.
                            </p>
                        </motion.div>
                    </ContentContainer>
                </div>

                <ContentContainer>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">

                        {/* Left — Info Cards */}
                        <div className="lg:col-span-2 flex flex-col gap-4">

                            {/* Info cards */}
                            {contactInfo.map((info, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                >
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-5 bg-[#101010] border border-white/[0.05] rounded-2xl hover:border-[#DC2626]/20 transition-colors group cursor-pointer block"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 border border-[#DC2626]/15 flex items-center justify-center shrink-0 group-hover:bg-[#DC2626]/20 transition-colors">
                                                <info.icon size={17} className="text-[#DC2626]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-gray-600 tracking-widest uppercase mb-0.5">{info.title}</p>
                                                <p className="text-sm font-black text-white">{info.value}</p>
                                                <p className="text-[10px] text-gray-500 font-bold mt-0.5">{info.sub}</p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4 p-5 bg-[#101010] border border-white/[0.05] rounded-2xl">
                                            <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 border border-[#DC2626]/15 flex items-center justify-center shrink-0">
                                                <info.icon size={17} className="text-[#DC2626]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-gray-600 tracking-widest uppercase mb-0.5">{info.title}</p>
                                                <p className="text-sm font-black text-white">{info.value}</p>
                                                <p className="text-[10px] text-gray-500 font-bold mt-0.5">{info.sub}</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Response promise */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="p-5 rounded-2xl border border-[#DC2626]/15 bg-[#DC2626]/5 mt-2"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                                    <span className="text-[10px] font-black text-[#DC2626] tracking-widest uppercase">Our Promise</span>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                                    We respond to every inquiry within 24 hours. For urgent support, WhatsApp is the fastest way to reach us.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right — Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-[#101010] border border-white/[0.05] rounded-2xl p-7 md:p-8">

                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        // Success state
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center text-center py-12 gap-5"
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                                <CheckCircle size={28} className="text-green-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-black text-white uppercase tracking-wide mb-2">Message Sent!</h3>
                                                <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                                                    Thank you for reaching out. Our team will get back to you within 24 hours.
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                                                className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-white text-[10px] font-black tracking-widest uppercase transition-colors cursor-pointer"
                                            >
                                                Send Another
                                            </button>
                                        </motion.div>
                                    ) : (
                                        // Form
                                        <motion.form
                                            key="form"
                                            onSubmit={handleSubmit}
                                            className="space-y-5"
                                        >
                                            <div>
                                                <h2 className="text-sm font-black text-white uppercase tracking-widest mb-1">Send a Message</h2>
                                                <p className="text-[11px] text-gray-500 font-bold">Fill in the details below and we will get back to you.</p>
                                            </div>

                                            {/* Name + Email */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2">Full Name *</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="Rahul Sharma"
                                                        className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/40 placeholder-gray-700 transition-colors"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2">Email *</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="rahul@business.com"
                                                        className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/40 placeholder-gray-700 transition-colors"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone + Subject */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2">Phone</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        placeholder="+91 98765 43210"
                                                        className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/40 placeholder-gray-700 transition-colors"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2">Subject *</label>
                                                    <select
                                                        name="subject"
                                                        value={form.subject}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/40 transition-colors appearance-none cursor-pointer"
                                                    >
                                                        <option value="">Select subject</option>
                                                        {subjects.map((s) => (
                                                            <option key={s} value={s}>{s}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label className="block text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2">Message *</label>
                                                <textarea
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={5}
                                                    placeholder="Tell us how we can help you..."
                                                    className="w-full bg-[#080808] border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/40 placeholder-gray-700 transition-colors resize-none"
                                                />
                                            </div>

                                            {/* Submit */}
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#DC2626] hover:bg-[#c91f1f] disabled:opacity-50 text-white text-[11px] font-black tracking-widest uppercase transition-colors shadow-[0_4px_16px_rgba(220,38,38,0.25)] cursor-pointer"
                                            >
                                                {loading ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send size={14} />
                                                        Send Message
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-[10px] text-gray-600 text-center font-bold">
                                                We respect your privacy. Your data is never shared with third parties.
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                    </div>
                </ContentContainer>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;