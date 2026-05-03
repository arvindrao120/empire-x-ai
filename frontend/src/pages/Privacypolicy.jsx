import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ContentContainer } from '../components/layout/ContentContainer';
import { Shield } from 'lucide-react';

const sections = [
  {
    title: "1. Introduction",
    content: `EmpireX LLP ("EmpireX", "we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use the EmpireX platform ("Platform") at empirex.in.

This Privacy Policy is governed by the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and other applicable Indian data protection laws.

By accessing or using EmpireX, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree, please discontinue use of the Platform immediately.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect the following categories of information:

A. Account Information (via Email/Password Registration):
• Full name
• Email address
• Username
• Encrypted password (never stored in plain text)
• Date of birth (optional)
• Gender (optional)

B. Account Information (via Facebook OAuth):
• Facebook User ID
• Display name
• Email address (if permitted by user)
• Profile photo
• Birthday, gender, location, hometown (if granted via Facebook permissions)
• Facebook Access Token (used solely to interact with Meta Ads API)

C. Ad Account Data:
• Meta Ad Account ID (user-provided)
• Campaign data, ad set data, and performance metrics from your connected Meta Ad Account

D. Usage Data:
• IP address
• Browser type and version
• Device information
• Pages visited on the Platform
• Time and date of access
• Referring URLs

E. Payment Data:
• Payment transactions are processed by Razorpay. EmpireX does not store your card number, UPI ID, or banking credentials. We only receive a transaction confirmation and amount from Razorpay.

F. AI Interaction Data:
• Campaign briefs, creative descriptions, and strategy inputs you provide to our AI system (Groq / Llama 3.3 70B)`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your information solely for the following purposes:

• To create and manage your EmpireX account
• To authenticate your identity and maintain platform security
• To generate AI-powered ad strategies based on your inputs
• To connect with and manage your Meta Ad Account on your behalf
• To process subscription payments via Razorpay
• To send account-related emails such as registration confirmation, plan updates, and support responses
• To analyze platform usage for internal improvements (no personal data is shared externally for this purpose)
• To comply with applicable Indian laws and legal obligations
• To respond to your support inquiries and contact requests

We do not use your data for any purpose beyond what is listed above without your explicit consent.`,
  },
  {
    title: "4. Cookies & Tracking Technologies",
    content: `EmpireX uses the following cookies and tracking technologies:

A. Authentication Cookies (JWT):
We use JSON Web Token (JWT) cookies to maintain your logged-in session. These cookies are:
• HTTP-only and secure
• Valid for 7 days from the time of login
• Automatically cleared upon logout

B. Google Analytics:
We use Google Analytics to understand how users interact with our Platform. Google Analytics collects anonymized usage data including page views, session duration, and navigation patterns. This data does not identify you personally. You can opt out via Google's opt-out tool at tools.google.com/dlpage/gaoptout.

C. Meta Pixel:
We use Meta Pixel on our landing page to measure the effectiveness of our own marketing campaigns. Meta Pixel may collect your IP address and browser information. You can manage your Meta ad preferences at facebook.com/settings/ads.

D. Managing Cookies:
You can control or delete cookies through your browser settings. Disabling authentication cookies will prevent you from staying logged in to EmpireX.`,
  },
  {
    title: "5. Data Sharing & Third Parties",
    content: `WE DO NOT SELL, RENT, OR SHARE YOUR PERSONAL DATA WITH ANY THIRD PARTIES FOR COMMERCIAL PURPOSES.

Your data is shared only with the following service providers strictly for platform functionality:

• Meta Platforms Inc. — to connect and manage your Facebook Ad Account via their official API
• Groq Inc. — to process your campaign inputs and generate AI strategies (inputs are processed in real-time and not stored by Groq)
• Razorpay — to securely process your subscription payments
• Google LLC — for anonymized analytics via Google Analytics
• MongoDB Atlas — for secure cloud database storage of your account and campaign data

All third-party service providers are bound by their own privacy policies and data protection standards. EmpireX does not control and is not responsible for the data practices of these third parties beyond our integration points.

We may disclose your information if required to do so by Indian law, court order, or government authority. In such cases, we will notify you to the extent permitted by law.`,
  },
  {
    title: "6. Data Storage & Security",
    content: `Your data is stored securely on MongoDB Atlas cloud infrastructure. We implement the following security measures:

• AES-256 encryption for sensitive data at rest
• HTTPS/TLS encryption for all data in transit
• HTTP-only JWT cookies to prevent XSS attacks
• Password hashing using bcrypt (passwords are never stored in plain text)
• Access controls limiting data access to authorized personnel only
• Regular security reviews of our platform infrastructure

While we take all reasonable precautions to protect your data, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security and encourage you to use a strong, unique password for your account.

Your data is stored on servers located within secure cloud environments. EmpireX operates under Indian jurisdiction and your data is processed in compliance with applicable Indian data protection laws.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain your personal data for as long as your account is active or as needed to provide our services.

Specifically:
• Account data — retained for the duration of your account's existence
• Campaign and strategy data — retained for up to 2 years after account closure
• Payment records — retained for 7 years as required by Indian financial regulations (GST Act compliance)
• Usage/analytics data — retained in anonymized form for up to 3 years

Upon account deletion, we will delete your personal identifiable information within 30 days, except where retention is required by law.`,
  },
  {
    title: "8. Your Rights & Data Deletion",
    content: `Under applicable Indian law, you have the following rights regarding your personal data:

• Right to Access — You may request a copy of the personal data we hold about you
• Right to Correction — You may update or correct your personal information via your account Settings page
• Right to Deletion — You may request complete deletion of your account and associated personal data
• Right to Withdraw Consent — You may disconnect your Facebook Ad Account or revoke permissions at any time

To exercise any of these rights, contact us at:
support@empirex.in

We will process all data deletion requests within 30 days of receipt. Please note that deletion of your account will result in permanent loss of all campaign data, AI strategies, and account history. This action cannot be undone.

Payment records will be retained for the period required by Indian financial regulations even after account deletion.`,
  },
  {
    title: "9. Facebook OAuth & Meta Permissions",
    content: `When you connect to EmpireX via Facebook OAuth, you grant us access to certain Facebook permissions including:

• email — to identify your account
• user_birthday, user_gender, user_location, user_hometown — for profile enrichment (optional)
• user_photos — for profile photo display
• ads_management — to create and manage campaigns on your behalf
• ads_read — to read campaign performance data

These permissions are used solely to provide EmpireX's core functionality. We do not post on your behalf, access your personal Facebook feed, or read private messages.

You can revoke EmpireX's access to your Facebook account at any time via Facebook Settings → Apps and Websites. Revoking access will disconnect your Ad Account from EmpireX.`,
  },
  {
    title: "10. Children's Privacy",
    content: `EmpireX is designed for use in accordance with Meta's minimum age policy. Users must be at least 13 years of age to create an account.

We do not knowingly collect personal information from children under the age of 13. If we become aware that a child under 13 has provided us with personal data, we will delete that information immediately.

If you are a parent or guardian and believe your child has registered on EmpireX, please contact us at support@empirex.in and we will take prompt action.`,
  },
  {
    title: "11. Changes to This Privacy Policy",
    content: `EmpireX reserves the right to update this Privacy Policy at any time. When we make material changes, we will:

• Update the "Last Updated" date at the top of this page
• Send a notification email to registered users
• Display an in-platform notification

Your continued use of EmpireX after any changes to this Privacy Policy constitutes your acceptance of the updated policy. We recommend reviewing this page periodically.`,
  },
  {
    title: "12. Governing Law",
    content: `This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and the IT (Reasonable Security Practices) Rules, 2011.

Any disputes arising from this Privacy Policy shall be subject to the exclusive jurisdiction of the courts of India.

EmpireX operates solely within Indian jurisdiction and does not specifically target users outside India.`,
  },
  {
    title: "13. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team:

Email: support@empirex.in
Platform: empirex.in/contact
Support Hours: Monday – Saturday, 10:00 AM – 7:00 PM IST

We are committed to resolving all privacy-related inquiries within 24–48 hours.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-24">
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
                <Shield size={18} className="text-[#DC2626]" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest uppercase text-[#DC2626] block">Legal</span>
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  Privacy Policy
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

            {/* Intro card */}
            <div className="p-5 rounded-2xl bg-[#DC2626]/5 border border-[#DC2626]/15 mb-10">
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                At EmpireX, your privacy is a priority. This Privacy Policy describes what data we collect, why we collect it, how it is used, and your rights as a user. We are committed to full transparency and compliance with applicable Indian data protection laws.
              </p>
            </div>

            {/* Quick summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
              {[
                { label: "Data Sold?", value: "Never", color: "text-green-400" },
                { label: "Cookies Used?", value: "Yes (JWT + Analytics)", color: "text-yellow-400" },
                { label: "Data Deletion?", value: "On Request", color: "text-[#DC2626]" },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#101010] border border-white/[0.05] rounded-xl p-4 text-center">
                  <p className="text-[10px] font-black text-gray-600 tracking-widest uppercase mb-1">{item.label}</p>
                  <p className={`text-sm font-black ${item.color}`}>{item.value}</p>
                </div>
              ))}
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
                          <span className="text-[#DC2626] mt-1.5 text-xs shrink-0">•</span>
                          <p className="text-sm text-gray-400 leading-relaxed font-medium">
                            {line.replace('•', '').trim()}
                          </p>
                        </div>
                      ) : /^[A-Z]\./.test(line.trim()) ? (
                        <p key={lIdx} className="text-xs font-black text-white tracking-wide mb-2 mt-4">
                          {line}
                        </p>
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
                © 2026 EmpireX LLP. All Rights Reserved. &nbsp;·&nbsp; Privacy Policy last updated May 2026.
              </p>
            </motion.div>
          </motion.div>
        </ContentContainer>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;