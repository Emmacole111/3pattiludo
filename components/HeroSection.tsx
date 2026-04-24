import Link from "next/link";
import CountUp from "./CountUp";
import { APK_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="page-title"
    >
      {/* Atmospheric background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-slate [background-size:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />
      {/* Animated gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-secondary/25 blur-3xl animate-blob-move"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-4rem] top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob-move"
        style={{ animationDelay: "-6s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl animate-blob-move"
        style={{ animationDelay: "-12s" }}
      />

      <div className="container-page relative grid gap-10 py-14 lg:grid-cols-[1.2fr,1fr] lg:gap-12 lg:py-20">
        <div className="flex flex-col justify-center">
          <LiveBadge />

          <h1
            id="page-title"
            className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            <span className="gradient-text block sm:inline sm:after:content-['\00a0']">
              3 Patti Ludo APK
            </span>
            <span className="mt-1 block text-white sm:mt-0 sm:inline">
              Download Latest Version for Android
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
            Pakistan&apos;s #1 <strong className="text-white">Teen Patti + Ludo earning app</strong>.
            Play 50+ games, claim daily bonuses, and withdraw real PKR in
            minutes via EasyPaisa, JazzCash or bank transfer.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="3 Patti Ludo APK — download latest version for Android"
            >
              <DownloadIcon />
              Download APK — It&apos;s Free
            </a>
            <Link href="#download-guide" className="btn-ghost">
              <PlayIcon />
              How to install
            </Link>
          </div>

          {/* Live stats */}
          <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
            <Stat
              label="Latest Version"
              value={<span>v1.207</span>}
              tone="accent"
            />
            <Stat
              label="Average Rating"
              value={
                <>
                  <CountUp end={4.8} decimals={1} />
                  <span className="text-amber-300">★</span>
                </>
              }
              tone="gold"
            />
            <Stat
              label="Game Modes"
              value={<CountUp end={50} suffix="+" />}
              tone="secondary"
            />
          </dl>

          {/* Trust line */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2">
              <CheckIcon /> SSL-encrypted payouts
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckIcon /> ~45 MB Android APK
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckIcon /> Urdu &amp; English
            </span>
          </div>
        </div>

        {/* Phone + animated dice + cards */}
        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:max-w-none">
          {/* Glow halo */}
          <div
            aria-hidden
            className="absolute -inset-10 rounded-[48px] bg-gradient-to-br from-accent/25 via-secondary/20 to-transparent blur-3xl"
          />

          {/* Phone frame */}
          <div className="relative aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[40px] border border-white/15 shadow-glow backdrop-blur-xl animate-tilt ring-1 ring-accent/20">
            <AppMockup />
            {/* Notch */}
            <div
              aria-hidden
              className="absolute left-1/2 top-3 z-20 h-[14px] w-[72px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10"
            />
          </div>

          {/* Floating dice */}
          <FloatingDice className="absolute -right-4 top-6 sm:-right-8 lg:-right-4" />

          {/* Winnings chip badge */}
          <div
            aria-hidden
            className="absolute -left-4 bottom-20 rounded-2xl border border-white/10 bg-card/90 p-3 shadow-glow-gold backdrop-blur-xl animate-float-slow sm:-left-6 lg:-left-8"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 text-[#06130B]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M12 2 15 9l7 .6-5.3 4.8L18.2 22 12 18.3 5.8 22l1.5-7.6L2 9.6 9 9Z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-slate-400">
                  You won
                </p>
                <p className="font-display text-base font-bold text-amber-300">
                  PKR 12,450
                </p>
              </div>
            </div>
          </div>

          {/* Player ping */}
          <div
            aria-hidden
            className="absolute -bottom-2 right-8 rounded-full bg-card/90 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10 backdrop-blur animate-float-slow"
            style={{ animationDelay: "-3s" }}
          >
            <span className="relative mr-2 inline-flex h-2 w-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
            </span>
            3,241 players online
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pieces ---------- */

function LiveBadge() {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-glow" />
      </span>
      <span className="shimmer-text">
        Pakistan&apos;s #1 Teen Patti + Ludo App • 2026
      </span>
    </span>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: React.ReactNode;
  tone: "accent" | "secondary" | "gold";
}) {
  const ring =
    tone === "accent"
      ? "ring-accent/20"
      : tone === "secondary"
        ? "ring-violet-400/20"
        : "ring-amber-400/20";
  const dot =
    tone === "accent"
      ? "bg-accent"
      : tone === "secondary"
        ? "bg-violet-400"
        : "bg-amber-400";
  return (
    <div
      className={`relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/[0.07] ${ring}`}
    >
      <span
        aria-hidden
        className={`absolute right-3 top-3 h-1.5 w-1.5 rounded-full ${dot} shadow-glow`}
      />
      <dt className="text-[10.5px] uppercase tracking-widest text-slate-400">
        {label}
      </dt>
      <dd className="mt-1 font-display text-2xl font-bold text-white">
        {value}
      </dd>
    </div>
  );
}

function FloatingDice({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`perspective-1000 ${className}`}
    >
      <div className="preserve-3d h-16 w-16 rounded-xl bg-white shadow-2xl ring-1 ring-black/10 animate-dice-roll">
        <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-1 p-2">
          <span />
          <span />
          <span className="h-2 w-2 rounded-full bg-red-600 justify-self-end self-start" />
          <span />
          <span className="h-2 w-2 rounded-full bg-slate-900 place-self-center" />
          <span />
          <span className="h-2 w-2 rounded-full bg-red-600 self-end" />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
      <path d="M5 21h14" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M6 4v16l14-8L6 4Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

const GAMES = [
  { icon: "🃏", name: "Teen Patti", from: "#7f1d1d", to: "#dc2626" },
  { icon: "🎲", name: "Ludo",       from: "#14532d", to: "#16a34a" },
  { icon: "🐉", name: "Dragon",     from: "#4c1d95", to: "#7c3aed" },
  { icon: "💣", name: "Mines",      from: "#7c2d12", to: "#ea580c" },
  { icon: "✈️", name: "Aviator",    from: "#0c4a6e", to: "#0284c7" },
  { icon: "🎰", name: "Roulette",   from: "#1e3a5f", to: "#3b82f6" },
];

function AppMockup() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-b from-[#071a0f] via-[#06130B] to-[#04100a] text-white">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pb-1 pt-5 text-[9px] text-white/40">
        <span className="font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <span>●●●</span>
          <span>WiFi</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-accent to-secondary text-[10px] font-black text-bg shadow-glow">
            3P
          </div>
          <span className="font-display text-[12px] font-extrabold">
            3 Patti <span className="text-accent">Ludo</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[9px] font-bold text-amber-300 ring-1 ring-amber-400/30">
            🔔 2
          </div>
          <div className="h-6 w-6 rounded-full bg-accent/20 ring-1 ring-accent/40" />
        </div>
      </div>

      {/* Balance card */}
      <div className="relative mx-3 mb-3 overflow-hidden rounded-2xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent p-3 ring-1 ring-accent/25">
        <div aria-hidden className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />
        <p className="text-[8.5px] font-medium uppercase tracking-widest text-slate-400">Wallet Balance</p>
        <p className="mt-0.5 font-display text-[20px] font-extrabold text-white">
          PKR <span className="text-amber-300">12,450</span>
        </p>
        <div className="mt-2 flex gap-2">
          <div className="flex-1 rounded-lg bg-accent py-1.5 text-center text-[9px] font-bold text-bg">+ Deposit</div>
          <div className="flex-1 rounded-lg bg-white/10 py-1.5 text-center text-[9px] font-bold text-white ring-1 ring-white/10">Withdraw</div>
        </div>
      </div>

      {/* Promo banner */}
      <div className="mx-3 mb-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-amber-500/25 to-amber-400/5 px-3 py-2 ring-1 ring-amber-400/20">
        <div>
          <p className="text-[8px] font-medium text-amber-300/80">Welcome Bonus</p>
          <p className="font-display text-[13px] font-extrabold text-amber-300">PKR 500 FREE</p>
        </div>
        <div className="rounded-lg bg-amber-400/20 px-2.5 py-1.5 text-[8px] font-bold text-amber-300 ring-1 ring-amber-400/30">
          Claim →
        </div>
      </div>

      {/* Games grid */}
      <div className="px-3">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-slate-400">Popular Games</p>
        <div className="grid grid-cols-3 gap-1.5">
          {GAMES.map((g) => (
            <div
              key={g.name}
              className="flex flex-col items-center rounded-xl py-2 text-center ring-1 ring-white/10"
              style={{ background: `linear-gradient(135deg, ${g.from}55, ${g.to}22)` }}
            >
              <span className="text-[18px] leading-none">{g.icon}</span>
              <span className="mt-0.5 text-[7px] font-semibold text-slate-200">{g.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Live ticker */}
      <div className="mx-3 mt-2.5 flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2 ring-1 ring-white/10">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-[9px] font-semibold text-white">3,241 players online</span>
        </div>
        <span className="text-[8px] text-accent">Join Now →</span>
      </div>

      {/* Payments strip */}
      <div className="mx-3 mt-2 flex items-center gap-1.5">
        {[
          { label: "JazzCash", bg: "bg-red-500/20 text-red-300" },
          { label: "EasyPaisa", bg: "bg-emerald-500/20 text-emerald-300" },
          { label: "Bank", bg: "bg-blue-500/20 text-blue-300" },
        ].map((p) => (
          <span key={p.label} className={`rounded-md px-2 py-0.5 text-[7px] font-bold ring-1 ring-white/10 ${p.bg}`}>
            {p.label}
          </span>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="mt-auto flex items-center border-t border-white/10 bg-[#04100a]/80 px-1 py-2">
        {[
          { icon: "🏠", label: "Home",   active: true },
          { icon: "🎮", label: "Games",  active: false },
          { icon: "💰", label: "Wallet", active: false },
          { icon: "👤", label: "Profile",active: false },
        ].map((n) => (
          <div key={n.label} className="flex flex-1 flex-col items-center gap-0.5">
            <span className="text-[14px] leading-none">{n.icon}</span>
            <span className={`text-[7px] font-semibold ${n.active ? "text-accent" : "text-slate-500"}`}>
              {n.label}
            </span>
            {n.active && <span className="h-0.5 w-3 rounded-full bg-accent shadow-glow" />}
          </div>
        ))}
      </div>
    </div>
  );
}
