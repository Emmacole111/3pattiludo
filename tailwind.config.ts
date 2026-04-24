import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pakistan-inspired dark palette
        bg: "#06130B",        // near-black with green undertone
        card: "#0E1E15",      // dark card surface
        accent: "#10B981",    // emerald — primary / Pakistan green
        secondary: "#F5B400", // warm gold — secondary
        gold: "#FBBF24",      // bright gold — highlights (winnings, chips)
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(16, 185, 129, 0.30)",
        "glow-purple": "0 0 40px rgba(245, 180, 0, 0.30)", // legacy name, now gold
        "glow-gold": "0 0 40px rgba(251, 191, 36, 0.35)",
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(ellipse at top, rgba(245,180,0,0.22), transparent 55%), radial-gradient(ellipse at bottom right, rgba(16,185,129,0.28), transparent 55%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.09 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--r, 0deg))" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-8px) rotate(var(--r, 0deg))" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(16,185,129,0.55)" },
          "70%": { boxShadow: "0 0 0 18px rgba(16,185,129,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(16,185,129,0)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "dice-roll": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(90deg) scale(1.05)" },
          "50%": { transform: "rotate(180deg) scale(1)" },
          "75%": { transform: "rotate(270deg) scale(1.05)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        "card-peek": {
          "0%, 100%": { transform: "translate(0, 0) rotate(var(--r, 0deg))" },
          "50%": {
            transform:
              "translate(var(--x, 4px), var(--y, -4px)) rotate(calc(var(--r, 0deg) + 3deg))",
          },
        },
        "blob-move": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.95)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        reveal: "reveal 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "dice-roll": "dice-roll 6s ease-in-out infinite",
        "card-peek": "card-peek 7s ease-in-out infinite",
        "blob-move": "blob-move 18s ease-in-out infinite",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        tilt: "tilt 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
