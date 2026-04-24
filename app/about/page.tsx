import type { Metadata } from "next";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import { APK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About 3 Patti Ludo — Pakistan's #1 Gaming App",
  description:
    "About 3 Patti Ludo — Pakistan's #1 Teen Patti & Ludo platform. 10M+ players, real PKR payouts, founded 2023. Our mission and values.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About 3 Patti Ludo — Pakistan's #1 Gaming App",
    description: "10M+ Pakistani players trust 3 Patti Ludo for real PKR winnings. Learn our story, mission and values.",
    url: "https://teenpattiludo.com.pk/about",
  },
};

const stats = [
  { value: "10M+", label: "Registered Players" },
  { value: "50+", label: "Games Available" },
  { value: "4.8★", label: "Average Rating" },
  { value: "2023", label: "Year Founded" },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
    title: "Safe & Secure",
    desc: "End-to-end encrypted transactions, OTP verification, and regular security audits protect every rupee in your wallet.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Fast Withdrawals",
    desc: "Most JazzCash and EasyPaisa withdrawals process in under one hour. Your winnings should be yours — fast.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community First",
    desc: "10M+ Pakistani players. Our Club feature, referral programme, and 24/7 Urdu support are built for the local community.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 15 9l7 .6-5.3 4.8L18.2 22 12 18.3 5.8 22l1.5-7.6L2 9.6 9 9Z" />
      </svg>
    ),
    title: "Fair Play",
    desc: "All games use a certified Random Number Generator (RNG). No bots, no manipulation — just honest gameplay.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" />
      </svg>
    ),
    title: "Local Payments",
    desc: "Deposits and withdrawals via JazzCash, EasyPaisa, and all major Pakistani banks. No international hassles.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "24/7 Support",
    desc: "Our support team is available around the clock in both Urdu and English, via live chat, WhatsApp, and email.",
  },
];

export default function AboutPage() {
  return (
    <InnerPageLayout
      badge="About Us"
      title="Pakistan's #1 Teen Patti + Ludo Platform"
      subtitle="We built 3 Patti Ludo so Pakistani players could enjoy their favourite games — safely, fairly, and with real PKR rewards."
    >
      <div className="container-page py-14 space-y-16">
        {/* Stats row */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-card/60 p-5 text-center">
              <p className="font-display text-3xl font-extrabold text-white">{s.value}</p>
              <p className="mt-1 text-xs text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <section>
          <h2 className="font-display text-2xl font-bold text-white">Our mission</h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-300">
            <p>
              3 Patti Ludo was founded with a simple idea: Pakistani players deserve a world-class mobile gaming experience built <em>specifically for them</em> — in their language, with their payment methods, and celebrating the games they already love.
            </p>
            <p>
              Teen Patti and Ludo are not just games in Pakistan. They are cultural touchstones — played at family gatherings, during Eid, and between friends on lazy afternoons. We brought those games online, added real-money stakes, and surrounded them with 50 more game modes to create Pakistan&apos;s most complete gaming platform.
            </p>
            <p>
              Since our launch in 2023, over 10 million players have registered, PKR billions have been paid out, and we have maintained a 4.8-star average rating. We are proud of every one of those numbers — and we are just getting started.
            </p>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="font-display text-2xl font-bold text-white">What we stand for</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-card/60 p-5 transition-all hover:border-accent/30">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  {v.icon}
                </div>
                <p className="font-semibold text-white">{v.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsible gaming notice */}
        <section className="rounded-2xl border border-amber-400/25 bg-amber-400/5 p-6">
          <h2 className="font-display text-xl font-bold text-white">Responsible gaming</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            We are committed to responsible gaming. 3 Patti Ludo is intended for players aged <strong className="text-white">18 and above</strong> only.
            We provide deposit limits, cool-off periods, and self-exclusion tools. If you or someone you know is experiencing problems with gambling,
            please seek help immediately. Gaming should be fun — never a financial burden.
          </p>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">Contact Us</Link>
          <a href={APK_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">Download APK</a>
        </div>

        {/* Explore more */}
        <div className="rounded-2xl border border-white/10 bg-card/60 p-6">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Explore the Platform
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/games",        label: "All Games" },
              { href: "/for-pc",       label: "Play on PC" },
              { href: "/old-versions", label: "APK Version History" },
              { href: "/blog",         label: "Tips & Guides Blog" },
              { href: "/blog/how-to-earn-money-3-patti-ludo", label: "How to Earn Money" },
              { href: "/blog/3-patti-ludo-tips-tricks",       label: "Winning Tips & Tricks" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] text-slate-300 transition-colors hover:bg-white/5 hover:text-accent"
              >
                <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0 text-accent/60" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 12l4-4-4-4" />
                </svg>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
