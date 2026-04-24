import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import { APK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "3 Patti Ludo for PC — Play on Windows & Mac",
  description:
    "Play 3 Patti Ludo on PC via BlueStacks or LDPlayer. Full step-by-step guide for Windows & Mac. Win real PKR on a bigger screen.",
  alternates: { canonical: "/for-pc" },
  openGraph: {
    title: "3 Patti Ludo for PC — Play on Windows & Mac",
    description: "Play 3 Patti Ludo on PC via BlueStacks or LDPlayer. Win real PKR on a bigger screen.",
    url: "https://teenpattiludo.com.pk/for-pc",
    images: [{ url: "https://teenpattiludo.com.pk/3-patti-ludo-for-pc.webp", width: 1280, height: 540, alt: "3 Patti Ludo running on PC" }],
  },
};

const emulators = [
  {
    name: "BlueStacks 5",
    recommended: true,
    icon: "🟦",
    pros: ["Most popular & trusted", "Smooth 60fps gameplay", "Multi-instance (play multiple accounts)", "Built-in macro support"],
    link: "https://www.bluestacks.com",
  },
  {
    name: "LDPlayer 9",
    recommended: false,
    icon: "🟩",
    pros: ["Lightweight on older PCs", "High FPS mode available", "Free & ad-supported", "Regular updates"],
    link: "https://www.ldplayer.net",
  },
  {
    name: "MEmu Play",
    recommended: false,
    icon: "🟧",
    pros: ["Easy setup wizard", "Good keyboard mapping", "Supports multiple Android versions"],
    link: "https://www.memuplay.com",
  },
];

const steps = [
  {
    n: "01",
    title: "Download an Android Emulator",
    body: "Visit BlueStacks.com (recommended) or LDPlayer.net and download the installer for Windows or Mac. The file is ~500 MB.",
  },
  {
    n: "02",
    title: "Install and launch the emulator",
    body: 'Run the installer, follow the setup wizard, and launch the emulator. Sign in with a Google account when prompted (or skip if you don\'t need Play Store).',
  },
  {
    n: "03",
    title: "Download the 3 Patti Ludo APK",
    body: 'On this website, click "Download APK" to get the latest APK file. Save it to your desktop or downloads folder.',
  },
  {
    n: "04",
    title: "Install the APK on the emulator",
    body: 'Drag and drop the APK file onto the BlueStacks window — it installs automatically. Alternatively use "Install APK" from the emulator side-bar.',
  },
  {
    n: "05",
    title: "Open 3 Patti Ludo and register",
    body: "The app icon appears on the emulator home screen. Open it, register with your phone number, and claim your welcome bonus.",
  },
  {
    n: "06",
    title: "Configure keyboard shortcuts",
    body: "Use the emulator's key-mapping feature to bind game controls to keyboard keys for a better gaming experience on PC.",
  },
];

const sysReqs = [
  { label: "OS", value: "Windows 7 / 10 / 11 or macOS 10.14+" },
  { label: "RAM", value: "4 GB minimum (8 GB recommended)" },
  { label: "CPU", value: "Intel Core i3 / AMD Ryzen 3 or above" },
  { label: "GPU", value: "DirectX 11 compatible" },
  { label: "Storage", value: "10 GB free space for emulator + app" },
  { label: "Internet", value: "Stable broadband connection" },
];

export default function ForPcPage() {
  return (
    <InnerPageLayout
      badge="PC Guide"
      title="Play 3 Patti Ludo on PC"
      subtitle="Enjoy a bigger screen, better graphics, and multi-instance support. Follow this guide to set up 3 Patti Ludo on Windows or Mac in under 10 minutes."
    >
      <div className="container-page py-14 space-y-14">
        {/* PC showcase image */}
        <figure className="overflow-hidden rounded-2xl border border-white/10 shadow-glow">
          <Image
            src="/3-patti-ludo-for-pc.webp"
            alt="3 Patti Ludo for PC — play Teen Patti and Ludo on Windows and Mac using BlueStacks"
            width={1280}
            height={540}
            priority
            className="w-full object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
          />
          <figcaption className="border-t border-white/10 bg-card/60 px-4 py-2 text-xs text-slate-400">
            3 Patti Ludo running on PC via Android emulator — full HD, keyboard shortcuts, multi-instance support
          </figcaption>
        </figure>

        {/* Step by step */}
        <section>
          <h2 className="font-display text-2xl font-bold text-white">
            Step-by-step setup guide
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Works on Windows 7, 10, 11 and macOS. No technical knowledge required.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-card/60 p-5 transition-all hover:border-accent/30 hover:shadow-glow"
              >
                <span className="font-display text-3xl font-extrabold text-accent/30">
                  {s.n}
                </span>
                <p className="mt-2 font-semibold text-white">{s.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Emulator comparison */}
        <section>
          <h2 className="font-display text-2xl font-bold text-white">
            Best Android emulators for 3 Patti Ludo
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {emulators.map((e) => (
              <div
                key={e.name}
                className={`relative rounded-2xl border p-5 transition-all hover:-translate-y-1 ${
                  e.recommended
                    ? "border-accent/40 bg-accent/10 shadow-glow"
                    : "border-white/10 bg-card/60"
                }`}
              >
                {e.recommended && (
                  <span className="absolute -top-3 left-4 rounded-full border border-accent/40 bg-accent px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-bg">
                    Recommended
                  </span>
                )}
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-2xl" aria-hidden>{e.icon}</span>
                  <p className="font-display font-bold text-white">{e.name}</p>
                </div>
                <ul className="space-y-1.5">
                  {e.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-300">
                      <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="currentColor">
                        <path d="M13.5 4.5 6.5 11.5 2.5 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-lg border border-white/10 py-2 text-center text-xs font-semibold text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Visit {e.name} ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* System requirements */}
        <section>
          <h2 className="font-display text-2xl font-bold text-white">
            Minimum system requirements
          </h2>
          <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-white/[0.06]">
                {sysReqs.map((r) => (
                  <tr key={r.label} className="bg-card/40 hover:bg-white/[0.04] transition-colors">
                    <td className="w-40 px-5 py-3 font-semibold text-slate-300">{r.label}</td>
                    <td className="px-5 py-3 text-slate-400">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-card p-8 text-center shadow-glow">
          <p className="font-display text-xl font-bold text-white">
            Ready to play on a <span className="gradient-text">bigger screen?</span>
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Download the APK first, then install it inside your emulator.
          </p>
          <a href={APK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
            Download APK Now
          </a>
        </div>

        {/* Related articles */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-card/60 p-6">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Related Articles &amp; Guides
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { href: "/blog/3-patti-ludo-apk-download-guide",  label: "How to Download the APK Safely" },
              { href: "/blog/3-patti-ludo-tips-tricks",          label: "7 Tips & Tricks to Win More" },
              { href: "/blog/ludo-strategy-guide",               label: "Ludo Strategy Guide" },
              { href: "/games",        label: "Browse All 50+ Games" },
              { href: "/old-versions", label: "Download Old APK Versions" },
              { href: "/",             label: "← Back to Homepage" },
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
