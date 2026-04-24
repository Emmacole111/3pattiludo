"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/3-patiti-ludo-pakistan.webp",
    alt: "3 Patti Ludo Pakistan — most popular gaming app for Pakistani players",
    tag: "Trending in Pakistan",
    tagIcon: "🇵🇰",
    title: "Pakistan's #1 Mobile Gaming Platform",
    sub: "10M+ active players earning real PKR every single day.",
    stat: { value: "10M+", label: "Active Players" },
    accent: "#10B981",
    accentDim: "#10B98130",
  },
  {
    src: "/3-patti-ludo-apk.webp",
    alt: "3 Patti Ludo APK download — latest version for Android",
    tag: "Free Download",
    tagIcon: "📲",
    title: "Download the Latest APK in Seconds",
    sub: "Safe, verified, always updated. No Play Store needed.",
    stat: { value: "~45 MB", label: "APK Size" },
    accent: "#F5B400",
    accentDim: "#F5B40030",
  },
  {
    src: "/teen-patti-ludo-shop.webp",
    alt: "Teen Patti Ludo in-app shop — add chips via EasyPaisa and JazzCash",
    tag: "In-App Shop",
    tagIcon: "🏪",
    title: "Add Chips Instantly to Your Wallet",
    sub: "Top up from Rs 100 to Rs 5,000 via EasyPaisa or JazzCash in seconds.",
    stat: { value: "Rs 100", label: "Min. Deposit" },
    accent: "#818CF8",
    accentDim: "#818CF830",
  },
  {
    src: "/teen-patti-ludo-withdrawal.webp",
    alt: "Teen Patti Ludo withdrawal — instant PKR via JazzCash and EasyPaisa",
    tag: "Instant Payouts",
    tagIcon: "💸",
    title: "Cash Out in Under 60 Minutes",
    sub: "JazzCash & EasyPaisa withdrawals processed lightning fast.",
    stat: { value: "< 1hr", label: "Avg. Payout" },
    accent: "#FBBF24",
    accentDim: "#FBBF2430",
  },
];

const DURATION = 5000;

export default function ImageSlider() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const [entering, setEntering] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      setEntering(false);
      setTimeout(() => {
        setActive(idx);
        setAnimKey((k) => k + 1);
        setEntering(true);
      }, 60);
    },
    []
  );

  const goNext = useCallback(
    () => goTo((active + 1) % slides.length),
    [active, goTo]
  );
  const goPrev = useCallback(
    () => goTo((active - 1 + slides.length) % slides.length),
    [active, goTo]
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(goNext, DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused, goNext, animKey]);

  /* Swipe */
  const dragStart = useRef(0);
  function onPointerDown(e: React.PointerEvent) { dragStart.current = e.clientX; }
  function onPointerUp(e: React.PointerEvent) {
    const d = e.clientX - dragStart.current;
    if (d < -50) goNext();
    else if (d > 50) goPrev();
  }

  const s = slides[active];

  return (
    <div
      className="relative my-6 overflow-hidden rounded-2xl select-none"
      style={{ background: "#0a1a0f" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {/* ── Ambient glow background ── */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${s.accentDim}, transparent 65%)`,
        }}
      />

      {/* ── Ghost number ── */}
      <div
        key={`num-${active}`}
        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 font-display font-extrabold leading-none text-white/[0.04] select-none"
        style={{ fontSize: "clamp(120px, 22vw, 200px)", animation: "ghost-in 0.6s ease both" }}
        aria-hidden
      >
        {String(active + 1).padStart(2, "0")}
      </div>

      {/* ── Layout grid ── */}
      <div className="relative grid min-h-[360px] gap-0 sm:grid-cols-[1fr,1.05fr]">

        {/* ── LEFT: Text panel ── */}
        <div className="flex flex-col justify-center gap-5 px-6 py-8 sm:px-8 sm:py-10">

          {/* Tag */}
          <div
            key={`tag-${animKey}`}
            className="flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
            style={{
              background: s.accentDim,
              border: `1px solid ${s.accent}50`,
              color: s.accent,
              animation: "text-in 0.5s 0.05s ease both",
            }}
          >
            <span>{s.tagIcon}</span> {s.tag}
          </div>

          {/* Title */}
          <h3
            key={`title-${animKey}`}
            className="font-display text-xl font-extrabold leading-tight text-white sm:text-2xl lg:text-3xl"
            style={{ animation: "text-in 0.5s 0.15s ease both" }}
          >
            {s.title}
          </h3>

          {/* Subtitle */}
          <p
            key={`sub-${animKey}`}
            className="text-sm leading-relaxed text-slate-400"
            style={{ animation: "text-in 0.5s 0.25s ease both" }}
          >
            {s.sub}
          </p>

          {/* Stat pill */}
          <div
            key={`stat-${animKey}`}
            className="flex w-fit items-baseline gap-2 rounded-xl px-4 py-2.5"
            style={{
              background: `${s.accent}18`,
              border: `1px solid ${s.accent}30`,
              animation: "text-in 0.5s 0.35s ease both",
            }}
          >
            <span
              className="font-display text-2xl font-extrabold"
              style={{ color: s.accent }}
            >
              {s.stat.value}
            </span>
            <span className="text-xs font-medium text-slate-400">
              {s.stat.label}
            </span>
          </div>

          {/* Navigation row */}
          <div
            key={`nav-${animKey}`}
            className="flex items-center gap-4"
            style={{ animation: "text-in 0.5s 0.4s ease both" }}
          >
            {/* Arrows */}
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-white/30 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {slides.map((sl, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 22 : 6,
                    height: 6,
                    background: i === active ? s.accent : "rgba(255,255,255,0.2)",
                    boxShadow: i === active ? `0 0 8px ${s.accent}` : "none",
                  }}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="ml-auto text-xs font-semibold text-white/30">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ── RIGHT: Image card ── */}
        <div className="relative hidden items-center justify-center p-5 sm:flex">
          {/* Soft glow behind image */}
          <div
            className="pointer-events-none absolute inset-8 rounded-2xl blur-2xl transition-all duration-700"
            style={{ background: `${s.accent}25` }}
          />

          {/* Image frame */}
          <div
            key={`img-${animKey}`}
            className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
            style={{
              aspectRatio: "4/3",
              animation: "img-in 0.6s 0.1s cubic-bezier(0.4,0,0.2,1) both",
              boxShadow: `0 0 0 1px ${s.accent}35, 0 24px 64px rgba(0,0,0,0.6)`,
            }}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover transition-transform duration-[6000ms] ease-linear"
              style={{ transform: paused ? "scale(1)" : "scale(1.06)" }}
              priority={active === 0}
            />
            {/* Bottom sheen */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-2xl"
              style={{
                background: `linear-gradient(to top, ${s.accent}40, transparent)`,
              }}
            />
          </div>

          {/* Corner accent badge */}
          <div
            className="absolute right-3 top-3 rounded-xl px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm"
            style={{
              background: `${s.accent}25`,
              border: `1px solid ${s.accent}40`,
              color: s.accent,
            }}
          >
            {s.tagIcon}
          </div>
        </div>

        {/* Mobile image (sm and below) */}
        <div
          key={`mobile-${animKey}`}
          className="relative sm:hidden"
          style={{ aspectRatio: "16/7", animation: "img-in 0.6s 0.1s ease both" }}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f] via-transparent to-transparent" />
        </div>
      </div>

      {/* ── Progress bar ── */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            key={`bar-${animKey}`}
            className="h-full origin-left rounded-full"
            style={{
              background: s.accent,
              boxShadow: `0 0 6px ${s.accent}`,
              animation: `progress-bar ${DURATION}ms linear both`,
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes text-in      { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
        @keyframes img-in       { from { opacity:0; transform:scale(0.97); } to { opacity:1; transform:scale(1); } }
        @keyframes ghost-in     { from { opacity:0; } to { opacity:1; } }
        @keyframes progress-bar { from { width:0; } to { width:100%; } }
      `}</style>
    </div>
  );
}
