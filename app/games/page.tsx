import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import { APK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "3 Patti Ludo Games — 50+ Games to Win Real PKR",
  description:
    "Play 50+ games on 3 Patti Ludo: Teen Patti, Ludo, Dragon Tiger, Mines, Roulette & more. Win real PKR daily via EasyPaisa & JazzCash.",
  alternates: { canonical: "/games" },
  openGraph: {
    title: "3 Patti Ludo Games — 50+ Games to Win Real PKR",
    description: "Browse all 50+ games on 3 Patti Ludo and win real PKR every day.",
    url: "https://teenpattiludo.com.pk/games",
    images: [{ url: "https://teenpattiludo.com.pk/3-patti-ludo-games.webp", width: 1280, height: 540, alt: "3 Patti Ludo games library" }],
  },
};

const games = [
  {
    name: "Teen Patti",
    emoji: "🃏",
    tag: "Card Game",
    color: "from-red-500/20 to-red-500/5 border-red-500/30",
    badge: "Most Popular",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    desc: "The classic South Asian card game. Beat opponents with the best 3-card hand — Trail, Pure Sequence, Sequence, Color, Pair, or High Card.",
    players: "10M+",
  },
  {
    name: "Ludo",
    emoji: "🎲",
    tag: "Board Game",
    color: "from-accent/20 to-accent/5 border-accent/30",
    badge: "Fan Favourite",
    badgeColor: "bg-accent/20 text-accent border-accent/30",
    desc: "Race all four tokens to the finish before your rivals. Classic strategy with real-money stakes and multiplayer rooms up to 4 players.",
    players: "8M+",
  },
  {
    name: "Dragon Tiger",
    emoji: "🐉",
    tag: "Card Game",
    color: "from-purple-500/20 to-purple-500/5 border-purple-500/30",
    badge: "Fast Rounds",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    desc: "Bet on Dragon, Tiger, or Tie. One card each — highest card wins. Simple, fast, and thrilling with live dealer tables.",
    players: "3M+",
  },
  {
    name: "Andar Bahar",
    emoji: "🎴",
    tag: "Card Game",
    color: "from-amber-500/20 to-amber-500/5 border-amber-500/30",
    badge: "Easy to Learn",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    desc: "A 50/50 card game rooted in Indian tradition. Guess which side — Andar (inside) or Bahar (outside) — will match the joker card first.",
    players: "2M+",
  },
  {
    name: "Rummy",
    emoji: "🀄",
    tag: "Card Game",
    color: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
    badge: "Skill-based",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    desc: "Form sets and sequences with 13 cards before your opponents. The most skill-dependent game on the platform — strategy pays off.",
    players: "4M+",
  },
  {
    name: "Mines",
    emoji: "💣",
    tag: "Crash Game",
    color: "from-orange-500/20 to-orange-500/5 border-orange-500/30",
    badge: "High RTP",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    desc: "Navigate a minefield grid. Reveal safe tiles to multiply your bet — but hit a mine and lose everything. Cash out before it explodes!",
    players: "1.5M+",
  },
  {
    name: "Poker",
    emoji: "♠️",
    tag: "Card Game",
    color: "from-slate-500/20 to-slate-500/5 border-slate-500/30",
    badge: "Pro Tables",
    badgeColor: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    desc: "Texas Hold'em style poker with PKR stakes. Bluff, raise, and fold your way to big pots in real-time multiplayer tables.",
    players: "1M+",
  },
  {
    name: "Roulette",
    emoji: "🎡",
    tag: "Casino",
    color: "from-green-500/20 to-green-500/5 border-green-500/30",
    badge: "Live Dealer",
    badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
    desc: "Bet on numbers, colors, or ranges and watch the wheel spin. European and American variants available with live streaming.",
    players: "800K+",
  },
  {
    name: "Baccarat",
    emoji: "🎰",
    tag: "Card Game",
    color: "from-pink-500/20 to-pink-500/5 border-pink-500/30",
    badge: "VIP Tables",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    desc: "Bet on Banker, Player, or Tie in this elegant card game. Closest to 9 wins. Favored by high-stakes players for its low house edge.",
    players: "600K+",
  },
  {
    name: "Cricket Betting",
    emoji: "🏏",
    tag: "Sports",
    color: "from-lime-500/20 to-lime-500/5 border-lime-500/30",
    badge: "Live Odds",
    badgeColor: "bg-lime-500/20 text-lime-300 border-lime-500/30",
    desc: "Bet on PSL, international T20s, ODIs, and Test matches. Live ball-by-ball odds, over markets, and player performance bets.",
    players: "5M+",
  },
  {
    name: "Aviator",
    emoji: "✈️",
    tag: "Crash Game",
    color: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30",
    badge: "Provably Fair",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    desc: "Watch the multiplier climb. Cash out at the right moment — or let it fly too long and crash. One of the most exciting games on the platform.",
    players: "2M+",
  },
  {
    name: "Slots",
    emoji: "🎰",
    tag: "Casino",
    color: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30",
    badge: "100+ Machines",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    desc: "Spin for jackpots across 100+ themed slot machines. From classic fruit slots to branded video slots with bonus rounds.",
    players: "1.2M+",
  },
];

export default function GamesPage() {
  return (
    <InnerPageLayout
      badge="50+ Games Available"
      title="All Games on 3 Patti Ludo"
      subtitle="From classic card games to live casino, crash games, and sports betting — all under one roof with real PKR payouts."
    >
      <section className="container-page py-14">
        {/* Games showcase banner */}
        <figure className="mb-10 flex justify-center">
          <Image
            src="/3-patti-ludo-games.webp"
            alt="3 Patti Ludo games — 50+ games including Teen Patti, Ludo, Dragon Tiger and more"
            width={640}
            height={300}
            priority
            className="rounded-2xl border border-white/10 shadow-glow object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
          <figcaption className="border-t border-white/10 bg-card/60 px-4 py-2 text-xs text-slate-400">
            50+ games available on 3 Patti Ludo — all in one app with real PKR rewards
          </figcaption>
        </figure>

        {/* Games grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <div
              key={g.name}
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5 transition-all hover:-translate-y-1 hover:shadow-glow ${g.color}`}
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>{g.emoji}</span>
                  <div>
                    <p className="font-display text-base font-bold text-white">{g.name}</p>
                    <p className="text-xs text-slate-400">{g.tag}</p>
                  </div>
                </div>
                <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${g.badgeColor}`}>
                  {g.badge}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{g.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-slate-400">{g.players} players</span>
                <Link
                  href="/download"
                  className="rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-accent hover:text-bg"
                >
                  Play Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-card p-8 text-center shadow-glow">
          <p className="font-display text-2xl font-bold text-white">
            Play all games for <span className="gradient-text">free or real PKR</span>
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Download the APK, register in 60 seconds, and claim your welcome bonus.
          </p>
          <a href={APK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
            Download APK — It&apos;s Free
          </a>
        </div>

        {/* Related articles */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-card/60 p-6">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Related Articles &amp; Guides
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { href: "/blog/3-patti-ludo-tips-tricks",         label: "7 Proven Tips & Tricks to Win More" },
              { href: "/blog/teen-patti-rules-beginners",       label: "Teen Patti Rules for Beginners" },
              { href: "/blog/ludo-strategy-guide",              label: "Ludo Strategy Guide: 8 Winning Tactics" },
              { href: "/blog/how-to-earn-money-3-patti-ludo",  label: "How to Earn Real Money" },
              { href: "/for-pc",       label: "Play on PC — Emulator Guide" },
              { href: "/old-versions", label: "Download Old APK Versions" },
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
      </section>
    </InnerPageLayout>
  );
}
