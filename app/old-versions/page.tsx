import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import { APK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "3 Patti Ludo Old Versions — Full APK Version History",
  description:
    "Download old versions of the 3 Patti Ludo APK. Full version history, changelogs, and compatibility info from v2.0 to v5.2.1.",
  alternates: { canonical: "/old-versions" },
  openGraph: {
    title: "3 Patti Ludo Old Versions — Full APK Version History",
    description: "Download old 3 Patti Ludo APK versions with changelogs and compatibility details.",
    url: "https://teenpattiludo.com.pk/old-versions",
    images: [{ url: "https://teenpattiludo.com.pk/3-patti-ludo-old-versions.png", width: 1280, height: 540, alt: "3 Patti Ludo version history" }],
  },
};

const versions = [
  {
    version: "v5.2.1",
    label: "Latest",
    labelColor: "bg-accent text-bg border-accent",
    date: "April 2026",
    size: "52 MB",
    android: "5.0+",
    changes: ["Added Aviator 2.0 with provably fair RNG", "JazzCash instant deposit (< 30 sec)", "Improved Ludo AI opponents", "Bug fixes & performance boost"],
    recommended: true,
  },
  {
    version: "v5.0.0",
    label: "Stable",
    labelColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    date: "February 2026",
    size: "49 MB",
    android: "5.0+",
    changes: ["New Baccarat live tables", "EasyPaisa wallet integration", "Dark-mode UI overhaul", "Referral commission increased to 30%"],
    recommended: false,
  },
  {
    version: "v4.5.2",
    label: "Legacy",
    labelColor: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    date: "November 2025",
    size: "44 MB",
    android: "4.4+",
    changes: ["Mines game added", "Cricket live betting markets", "Chat feature in Ludo rooms", "Login with Google/Facebook"],
    recommended: false,
  },
  {
    version: "v4.0.0",
    label: "Legacy",
    labelColor: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    date: "August 2025",
    size: "41 MB",
    android: "4.4+",
    changes: ["Dragon Tiger & Andar Bahar added", "Club system launched", "Bank transfer withdrawals", "Daily spin-wheel bonus"],
    recommended: false,
  },
  {
    version: "v3.2.0",
    label: "Legacy",
    labelColor: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    date: "May 2025",
    size: "37 MB",
    android: "4.2+",
    changes: ["Rummy multi-table support", "Poker VIP room", "Push notification system", "Optimised for low-end devices"],
    recommended: false,
  },
  {
    version: "v2.0.0",
    label: "Archive",
    labelColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    date: "January 2025",
    size: "28 MB",
    android: "4.0+",
    changes: ["Initial Ludo multiplayer", "Teen Patti classic mode", "JazzCash basic deposit", "6-player Ludo rooms"],
    recommended: false,
  },
];

export default function OldVersionsPage() {
  return (
    <InnerPageLayout
      badge="APK Archive"
      title="3 Patti Ludo — All APK Versions"
      subtitle="Browse all releases from the latest to the very first version. We always recommend installing the latest version for the best security and features."
    >
      <div className="container-page py-14">
        {/* Recommendation banner */}
        <div className="mb-8 flex items-center gap-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-200">
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-amber-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0Z" />
          </svg>
          <p>
            <strong className="text-amber-100">Always prefer the latest version.</strong>{" "}
            Old versions may have security vulnerabilities or outdated payment integrations. Only download legacy versions if you have a specific compatibility reason.
          </p>
        </div>

        {/* Old versions showcase image */}
        <figure className="flex justify-center">
          <Image
            src="/3-patti-ludo-old-versions.png"
            alt="3 Patti Ludo old versions — APK version history and changelog"
            width={640}
            height={300}
            className="rounded-2xl border border-white/10 shadow-glow object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
          <figcaption className="border-t border-white/10 bg-card/60 px-4 py-2 text-xs text-slate-400">
            3 Patti Ludo APK version history — from v2.0 to the latest v5.2.1
          </figcaption>
        </figure>

        {/* Version list */}
        <div className="space-y-4">
          {versions.map((v) => (
            <div
              key={v.version}
              className={`group rounded-2xl border p-5 transition-all hover:border-accent/30 hover:shadow-glow ${
                v.recommended
                  ? "border-accent/30 bg-accent/5"
                  : "border-white/10 bg-card/50"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg font-extrabold text-white">
                        {v.version}
                      </span>
                      <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${v.labelColor}`}>
                        {v.label}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-400">
                      <span>📅 {v.date}</span>
                      <span>📦 {v.size}</span>
                      <span>📱 Android {v.android}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={APK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                    v.recommended
                      ? "btn-primary"
                      : "border border-white/15 text-slate-300 hover:border-accent/40 hover:text-accent"
                  }`}
                >
                  {v.recommended ? "Download Latest" : "Download"}
                </a>
              </div>

              {/* Changelog */}
              <div className="mt-4 border-t border-white/5 pt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  What&apos;s included
                </p>
                <ul className="grid gap-1 sm:grid-cols-2">
                  {v.changes.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13.5 4 6.5 11 2.5 7" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Safety note */}
        <div className="mt-10 rounded-xl border border-accent/25 bg-accent/5 p-5 text-sm text-slate-300">
          <strong className="text-white">Security note:</strong> All APK files listed here are the official releases.
          Verify the file hash after downloading and never install APKs from unknown third-party mirrors.
          If in doubt, use the <Link href="/download" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">official download page</Link>.
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
              { href: "/blog/best-online-earning-apps-pakistan-2026", label: "Is 3 Patti Ludo Worth It?" },
              { href: "/games",    label: "Browse All 50+ Games" },
              { href: "/for-pc",   label: "Play on PC — Emulator Guide" },
              { href: "/blog",     label: "Read All Blog Articles" },
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
