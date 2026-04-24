import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import { APK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Download 3 Patti Ludo APK — Latest Version Free",
  description:
    "Download the latest 3 Patti Ludo APK for Android. Free, safe, verified. Win real PKR via EasyPaisa & JazzCash. v1.207 — 45 MB.",
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download 3 Patti Ludo APK — Latest Version Free",
    description:
      "Download the latest 3 Patti Ludo APK for Android. Free, safe, verified. Win real PKR via EasyPaisa & JazzCash.",
    url: "https://teenpattiludo.com.pk/download",
  },
};

const steps = [
  {
    n: "01",
    title: "Enable Unknown Sources",
    desc: "Go to Settings → Security → Enable 'Install from unknown sources' (Android 7) or allow per-app on Android 8+.",
  },
  {
    n: "02",
    title: "Download the APK",
    desc: "Tap the Download button above. The file (3PattiLudo_v1.207.apk, ~45 MB) will appear in your notification bar.",
  },
  {
    n: "03",
    title: "Install the APK",
    desc: "Open your Downloads folder, tap the APK file, and confirm installation. Takes 30–60 seconds.",
  },
  {
    n: "04",
    title: "Register & Play",
    desc: "Enter your Pakistani mobile number, verify the OTP, and claim your PKR 500 welcome bonus instantly.",
  },
];

const requirements = [
  { label: "Operating System", value: "Android 5.0 (Lollipop) or higher" },
  { label: "File Size", value: "~45 MB" },
  { label: "Version", value: "v1.207 (April 2026)" },
  { label: "Language", value: "English & Urdu" },
  { label: "Price", value: "Free to download" },
  { label: "Payouts", value: "JazzCash, EasyPaisa, Bank Transfer" },
];

export default function DownloadPage() {
  return (
    <InnerPageLayout
      badge="Free Download"
      title="Download 3 Patti Ludo APK"
      subtitle="Latest version for Android — safe, verified, and updated. Claim your PKR 500 welcome bonus on first deposit."
    >
      <div className="container-page py-14 space-y-14">

        {/* ── Download card ── */}
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-card to-card p-8 shadow-glow text-center">
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative">
            <Image
              src="/3-patti-ludo-logo.webp"
              alt="3 Patti Ludo app icon"
              width={88}
              height={88}
              className="mx-auto rounded-2xl shadow-glow"
              priority
            />
            <h2 className="mt-4 font-display text-2xl font-extrabold text-white">
              3 Patti Ludo APK
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              v1.207 &nbsp;•&nbsp; ~45 MB &nbsp;•&nbsp; Android 5.0+
            </p>

            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center gap-2 text-base"
              aria-label="Download 3 Patti Ludo APK latest version"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 3v12m0 0l-4-4m4 4l4-4" /><path d="M5 21h14" />
              </svg>
              Download APK — Free
            </a>

            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 4 6.5 11 2.5 7"/></svg>
                SSL-encrypted download
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 4 6.5 11 2.5 7"/></svg>
                Virus-free &amp; verified
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 4 6.5 11 2.5 7"/></svg>
                No hidden charges
              </span>
            </div>
          </div>
        </div>

        {/* ── Device requirements ── */}
        <section>
          <h2 className="font-display text-xl font-bold text-white">Device Requirements</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <tbody>
                {requirements.map((r, i) => (
                  <tr key={r.label} className={i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}>
                    <td className="px-5 py-3 font-semibold text-slate-300 w-40">{r.label}</td>
                    <td className="px-5 py-3 text-slate-400">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── How to install ── */}
        <section id="how-to-install">
          <h2 className="font-display text-xl font-bold text-white">How to Install — Step by Step</h2>
          <p className="mt-2 text-sm text-slate-400">
            Follow these four simple steps to install 3 Patti Ludo on any Android phone in under 2 minutes.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4 rounded-2xl border border-white/10 bg-card/60 p-5">
                <span className="font-display text-3xl font-extrabold text-accent/30 shrink-0 leading-none">
                  {s.n}
                </span>
                <div>
                  <p className="font-semibold text-white">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Alternate options ── */}
        <section>
          <h2 className="font-display text-xl font-bold text-white">Other Options</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Link
              href="/for-pc"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-card/60 p-5 transition-all hover:border-accent/30 hover:shadow-glow"
            >
              <span className="text-3xl">🖥️</span>
              <div>
                <p className="font-semibold text-white group-hover:text-accent transition-colors">Play on PC</p>
                <p className="mt-0.5 text-sm text-slate-400">Run the app on Windows or Mac via BlueStacks</p>
              </div>
            </Link>
            <Link
              href="/old-versions"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-card/60 p-5 transition-all hover:border-accent/30 hover:shadow-glow"
            >
              <span className="text-3xl">🗂️</span>
              <div>
                <p className="font-semibold text-white group-hover:text-accent transition-colors">Download Old Versions</p>
                <p className="mt-0.5 text-sm text-slate-400">Browse the full APK version history</p>
              </div>
            </Link>
          </div>
        </section>

        {/* ── Related blog ── */}
        <div className="rounded-2xl border border-white/10 bg-card/60 p-6">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Related Guides</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { href: "/blog/3-patti-ludo-apk-download-guide",  label: "Safe APK Download Guide" },
              { href: "/blog/3-patti-ludo-tips-tricks",          label: "7 Tips & Tricks to Win More" },
              { href: "/blog/how-to-earn-money-3-patti-ludo",   label: "How to Earn Real Money" },
              { href: "/blog",                                    label: "All Articles & Guides" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] text-slate-300 transition-colors hover:bg-white/5 hover:text-accent">
                <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0 text-accent/60" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12l4-4-4-4"/></svg>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
