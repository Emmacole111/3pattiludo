import type { Metadata } from "next";
import InnerPageLayout from "@/components/InnerPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — 3 Patti Ludo",
  description:
    "3 Patti Ludo Privacy Policy — how we collect, use, store and protect your personal data. GDPR & Pakistani data law compliant.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const toc = [
  "Information We Collect",
  "How We Use Your Information",
  "Data Sharing & Disclosure",
  "Payment Data Security",
  "Cookies & Tracking",
  "Data Retention",
  "Your Rights",
  "Children's Privacy",
  "Changes to This Policy",
  "Contact Us",
];

const sections = [
  {
    title: "Information We Collect",
    body: [
      "**Account information:** When you register, we collect your mobile phone number, chosen username, and password hash. Email address is optional.",
      "**Identity verification (KYC):** For withdrawals above certain thresholds, we may request a copy of your CNIC (Computerised National Identity Card) and a selfie to comply with financial regulations.",
      "**Payment information:** We collect transaction records (amounts, dates, payment method used) but we do NOT store full card numbers or complete wallet PINs — payments are processed via certified third-party gateways (JazzCash, EasyPaisa).",
      "**Device & usage data:** Device model, OS version, IP address, app version, session duration, and in-app actions for security monitoring and performance improvement.",
      "**Communication data:** Messages sent to our support team via chat, WhatsApp, Telegram, or email.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To create and maintain your account.",
      "To process deposits, withdrawals, and bonus credits.",
      "To verify your identity and comply with Anti-Money Laundering (AML) regulations.",
      "To deliver customer support.",
      "To send account-related notifications (transaction confirmations, security alerts).",
      "To improve the platform through anonymised analytics.",
      "To detect and prevent fraud, cheating, or abuse.",
      "To comply with applicable Pakistani laws and regulations.",
    ],
  },
  {
    title: "Data Sharing & Disclosure",
    body: [
      "We do NOT sell your personal information to any third party.",
      "**Payment processors:** JazzCash, EasyPaisa, and banking partners receive only the minimum data required to process your transactions.",
      "**Legal obligations:** We may disclose data when required by Pakistani law, court order, or regulatory authority.",
      "**Service providers:** Carefully vetted vendors who assist with hosting, analytics, or customer support, bound by confidentiality agreements.",
      "We will never share your information with advertisers or marketing data brokers.",
    ],
  },
  {
    title: "Payment Data Security",
    body: [
      "All payment transactions are protected with 256-bit SSL/TLS encryption.",
      "We use tokenisation for payment credentials — your actual wallet numbers are never stored on our servers.",
      "OTP (One-Time Password) verification is required for every transaction.",
      "Suspicious login attempts trigger automatic account locks and alerts.",
      "We conduct regular third-party security audits.",
    ],
  },
  {
    title: "Cookies & Tracking",
    body: [
      "The website uses essential cookies required for login sessions and security.",
      "We use anonymised analytics cookies (similar to Google Analytics) to understand page performance. No personally identifiable information is stored in analytics cookies.",
      "You may disable non-essential cookies in your browser settings. Disabling essential cookies will affect your ability to log in.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Account data is retained for as long as your account is active.",
      "Transaction records are retained for a minimum of 7 years to comply with financial regulations.",
      "Support communications are retained for 2 years.",
      "If you request account deletion, personal data is removed within 30 days, except where retention is required by law.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "**Access:** Request a copy of the personal data we hold about you.",
      "**Correction:** Ask us to correct inaccurate or incomplete data.",
      "**Deletion:** Request deletion of your account and personal data.",
      "**Restriction:** Ask us to stop processing your data in certain circumstances.",
      "**Portability:** Receive your data in a structured, machine-readable format.",
      "To exercise any of these rights, contact us at 3pattiludoapk@gmail.com.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "3 Patti Ludo is strictly for users aged 18 and above. We do not knowingly collect personal information from anyone under 18.",
      "If we become aware that a minor has registered an account, it will be suspended and all associated data deleted promptly.",
      "Parents or guardians who believe a minor has used this service should contact us immediately.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be communicated via in-app notification or email.",
      "The 'Last updated' date at the top of this page will reflect the date of the most recent revision.",
      "Continued use of the platform after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "For any privacy-related queries, data access requests, or to report a concern:",
      "📧 Email: 3pattiludoapk@gmail.com",
      "💬 WhatsApp: +92 300 000 0000",
      "📍 Address: 3 Patti Ludo, Lahore, Pakistan",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <InnerPageLayout
      badge="Legal"
      title="Privacy Policy"
      subtitle={`Last updated: ${new Date().toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" })}`}
    >
      <div className="container-page py-14">
        <div className="mx-auto max-w-3xl">
          {/* TOC */}
          <nav aria-label="Table of contents" className="mb-10 rounded-xl border border-white/10 bg-card/60 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Contents</p>
            <ol className="grid gap-1 sm:grid-cols-2">
              {toc.map((t, i) => (
                <li key={t}>
                  <a
                    href={`#section-${i + 1}`}
                    className="flex items-center gap-2 rounded-lg px-2 py-1 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-accent"
                  >
                    <span className="text-xs font-bold text-accent/50">{String(i + 1).padStart(2, "0")}</span>
                    {t}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <section key={s.title} id={`section-${i + 1}`}>
                <h2 className="flex items-center gap-3 font-display text-lg font-bold text-white">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  {s.title}
                </h2>
                <ul className="mt-3 space-y-2">
                  {s.body.map((line, j) => (
                    <li key={j} className="flex items-start gap-2 text-[14.5px] leading-relaxed text-slate-400">
                      <svg viewBox="0 0 16 16" className="mt-1 h-3.5 w-3.5 shrink-0 text-accent/60" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13.5 4 6.5 11 2.5 7" />
                      </svg>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: line.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white font-semibold'>$1</strong>"),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-white/10 bg-card/60 p-5 text-sm text-slate-400">
            Questions about your privacy?{" "}
            <a href="/contact" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              Contact our team
            </a>{" "}
            — we respond within 2 hours.
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
