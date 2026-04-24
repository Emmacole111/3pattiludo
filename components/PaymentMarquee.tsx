const chips = [
  { label: "EasyPaisa", tone: "accent" as const },
  { label: "JazzCash", tone: "gold" as const },
  { label: "Bank Transfer", tone: "secondary" as const },
  { label: "Teen Patti", tone: "accent" as const },
  { label: "Ludo", tone: "secondary" as const },
  { label: "Dragon Tiger", tone: "gold" as const },
  { label: "Andar Bahar", tone: "accent" as const },
  { label: "Rummy", tone: "secondary" as const },
  { label: "Poker", tone: "gold" as const },
  { label: "Cricket Betting", tone: "accent" as const },
  { label: "Instant Payouts", tone: "gold" as const },
  { label: "Welcome Bonus", tone: "secondary" as const },
  { label: "24/7 Support", tone: "accent" as const },
];

const toneClass: Record<"accent" | "secondary" | "gold", string> = {
  accent: "text-accent ring-accent/30",
  secondary: "text-violet-300 ring-violet-400/30",
  gold: "text-amber-300 ring-amber-400/30",
};

export default function PaymentMarquee() {
  const all = [...chips, ...chips]; // duplicate for seamless loop

  return (
    <section
      aria-label="Supported games and payment methods"
      className="relative border-y border-white/5 bg-white/[0.02] py-6"
    >
      <div className="mask-fade-x overflow-hidden">
        <ul className="flex w-max gap-4 animate-marquee">
          {all.map((c, i) => (
            <li
              key={`${c.label}-${i}`}
              className={`inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium ring-1 ${toneClass[c.tone]} whitespace-nowrap`}
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-current"
              />
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
