import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContentContainer } from '../components/layout/ContentContainer';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using EmpireX ("Platform", "we", "us", "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you must not use our Platform.

EmpireX is operated as a Limited Liability Partnership (LLP) registered under the laws of India. These Terms constitute a legally binding agreement between you ("User", "you") and EmpireX LLP.

By creating an account, subscribing to a plan, or using any feature of the Platform, you confirm that you have read, understood, and agreed to these Terms in full.`,
  },
  {
    title: "2. Eligibility",
    content: `To use EmpireX, you must:

• Be at least 13 years of age (in accordance with Meta's minimum age policy)
• Have a valid Facebook account in good standing
• Have the legal authority to bind yourself or your business to these Terms
• Not be prohibited from using the Platform under applicable Indian law

If you are using EmpireX on behalf of a business or organization, you represent that you have the authority to bind that entity to these Terms.`,
  },
  {
    title: "3. Platform Description",
    content: `EmpireX is an AI-powered Meta Ads automation platform that enables users to:

• Generate AI-driven advertising strategies using large language models (Groq / Llama)
• Create, manage, and monitor Meta ad campaigns across Facebook, Instagram, Messenger, WhatsApp, Threads, and Audience Network
• Access analytics and performance data from connected Meta Ad Accounts
• Optimize campaign budgets and audience targeting automatically

EmpireX operates as a third-party tool that interfaces with Meta's advertising ecosystem. Full campaign automation features are subject to Meta Business Verification approval. EmpireX does not guarantee specific advertising results, return on investment (ROI), or campaign performance outcomes.`,
  },
  {
    title: "4. User Accounts",
    content: `You are responsible for:

• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Ensuring your account information is accurate and up to date
• Notifying us immediately at support@empirex.in if you suspect unauthorized access

You may not share your account with any third party. EmpireX reserves the right to terminate accounts that violate these Terms.`,
  },
  {
    title: "5. Meta Platform Compliance",
    content: `By connecting your Meta Ad Account to EmpireX, you agree to:

• Comply with Meta's Advertising Policies, Community Standards, and Terms of Service at all times
• Ensure that all ad content created through EmpireX meets Meta's guidelines
• Accept full responsibility for any campaigns, creatives, or content published through your connected Ad Account

EmpireX is not responsible for any actions taken by Meta against your Ad Account, including but not limited to account restrictions, ad rejections, or account suspension resulting from policy violations. You are solely responsible for the compliance of your advertising content.`,
  },
  {
    title: "6. Subscription Plans & Payments",
    content: `EmpireX offers the following subscription tiers:

• Free Plan — ₹0/month, limited features
• Pro Plan — ₹999/month (or ₹799/month billed annually)
• Enterprise Plan — ₹2,999/month (or ₹2,399/month billed annually)

Payments are processed securely via Razorpay. By subscribing to a paid plan, you authorize EmpireX to charge your selected payment method on a recurring basis as per your chosen billing cycle.

All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.`,
  },
  {
    title: "7. No Refund Policy",
    content: `ALL PAYMENTS MADE ON EMPIREX ARE STRICTLY NON-REFUNDABLE.

Once a subscription is activated — whether monthly or annual — no refunds will be issued under any circumstances, including but not limited to:

• Change of mind after purchase
• Unused subscription period
• Dissatisfaction with AI-generated strategy results
• Meta API unavailability or feature delays
• Account termination due to policy violations

By completing a payment on EmpireX, you explicitly acknowledge and accept this No Refund Policy. We strongly recommend starting with the Free plan before committing to a paid subscription.

If you believe there has been an unauthorized or erroneous charge, contact us at support@empirex.in within 7 days of the transaction date.`,
  },
  {
    title: "8. AI-Generated Content Disclaimer",
    content: `EmpireX uses artificial intelligence (Groq API / Llama 3.3 70B) to generate advertising strategies, ad copy, audience recommendations, and budget suggestions.

You acknowledge and agree that:

• AI-generated content is provided for informational and strategic guidance purposes only
• EmpireX does not guarantee the accuracy, effectiveness, or suitability of AI-generated content for your specific business
• You are solely responsible for reviewing, approving, and publishing any content generated by EmpireX
• AI outputs may occasionally contain errors, inaccuracies, or content that requires human review before use

EmpireX shall not be liable for any losses, damages, or claims arising from your reliance on AI-generated content.`,
  },
  {
    title: "9. Intellectual Property",
    content: `All content, design, code, branding, trademarks, and technology on the EmpireX Platform — including but not limited to the EmpireX name, logo, dashboard interface, and AI systems — are the exclusive intellectual property of EmpireX LLP.

You may not:

• Copy, reproduce, or distribute any part of the Platform without written permission
• Reverse engineer, decompile, or attempt to extract the source code
• Use EmpireX branding or trademarks without prior written consent

Content you create or upload to EmpireX (such as campaign descriptions and creative briefs) remains your property. By uploading content, you grant EmpireX a limited license to process and use it solely to provide the Platform's services.`,
  },
  {
    title: "10. Limitation of Liability",
    content: `To the maximum extent permitted under applicable Indian law, EmpireX LLP, its partners, employees, and agents shall not be liable for:

• Any indirect, incidental, special, or consequential damages
• Loss of revenue, profits, or business opportunities
• Losses resulting from Meta API downtime, feature changes, or policy updates
• Unauthorized access to your account due to your own negligence
• Any damages arising from AI-generated content or strategy recommendations

EmpireX's total liability to you for any claim shall not exceed the amount paid by you to EmpireX in the three (3) months preceding the claim.`,
  },
  {
    title: "11. Third-Party Services",
    content: `EmpireX integrates with third-party services including:

• Meta Platforms Inc. (Facebook, Instagram) — for ad account connectivity
• Groq Inc. — for AI strategy generation
• Razorpay — for payment processing

EmpireX is not responsible for the availability, accuracy, or policies of these third-party services. Your use of these integrations is subject to their respective terms of service and privacy policies.`,
  },
  {
    title: "12. Governing Law & Jurisdiction",
    content: `These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles.

Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in India. By using EmpireX, you consent to the personal jurisdiction of Indian courts.

EmpireX operates solely within the territory of India and is designed to comply with applicable Indian laws including the Information Technology Act, 2000 and its amendments.`,
  },
  {
    title: "13. Modifications to Terms",
    content: `EmpireX reserves the right to update or modify these Terms at any time. Changes will be effective upon posting to the Platform with an updated "Last Updated" date.

We will notify users of material changes via email or an in-platform notification. Your continued use of EmpireX after any changes constitutes your acceptance of the updated Terms.

We recommend reviewing these Terms periodically to stay informed of any updates.`,
  },
  {
    title: "14. Contact Us",
    content: `If you have any questions, concerns, or disputes regarding these Terms, please contact us:

Email: support@empirex.in
Platform: empirex.in
Support Hours: Monday – Saturday, 10:00 AM – 7:00 PM IST

We aim to respond to all inquiries within 24 hours.`,
  },
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-24">

        {/* Hero */}
        <ContentContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-12"
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#DC2626]/10 border border-[#DC2626]/20 flex items-center justify-center">
                <FileText size={18} className="text-[#DC2626]" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] block">Legal</span>
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  Terms & Conditions
                </h1>
              </div>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-white/[0.05]">
              <span className="text-[11px] font-bold text-gray-500">
                Last Updated: <span className="text-gray-300">May 2026</span>
              </span>
              <span className="text-[11px] font-bold text-gray-500">
                Effective: <span className="text-gray-300">May 2026</span>
              </span>
              <span className="text-[11px] font-bold text-gray-500">
                Jurisdiction: <span className="text-gray-300">India</span>
              </span>
            </div>

            {/* Intro */}
            <div className="p-5 rounded-2xl bg-[#DC2626]/5 border border-[#DC2626]/15 mb-10">
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                Please read these Terms and Conditions carefully before using EmpireX. These Terms govern your use of our AI-powered Meta Ads automation platform and constitute a legally binding agreement between you and EmpireX LLP. By accessing or using EmpireX, you agree to be bound by these Terms.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4 }}
                  className="scroll-mt-24"
                  id={`section-${idx}`}
                >
                  <h2 className="text-sm font-black text-white uppercase tracking-wider mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-5 bg-[#DC2626] rounded-full shrink-0" />
                    {section.title}
                  </h2>
                  <div className="pl-5 border-l border-white/[0.05]">
                    {section.content.split('\n').map((line, lIdx) => (
                      line.trim() === '' ? (
                        <div key={lIdx} className="h-3" />
                      ) : line.startsWith('•') ? (
                        <div key={lIdx} className="flex items-start gap-2 mb-2">
                          <span className="text-[#DC2626] mt-1.5 text-xs">•</span>
                          <p className="text-sm text-gray-400 leading-relaxed font-medium">
                            {line.replace('•', '').trim()}
                          </p>
                        </div>
                      ) : (
                        <p key={lIdx} className={`text-sm leading-relaxed font-medium mb-2
                          ${line === line.toUpperCase() && line.length > 10
                            ? 'text-white font-black tracking-wide'
                            : 'text-gray-400'
                          }`}
                        >
                          {line}
                        </p>
                      )
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 pt-8 border-t border-white/[0.05] text-center"
            >
              <p className="text-xs text-gray-600 font-bold">
                © 2026 EmpireX LLP. All Rights Reserved. &nbsp;·&nbsp; These Terms were last updated in May 2026.
              </p>
            </motion.div>
          </motion.div>
        </ContentContainer>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;