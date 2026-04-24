import Link from "next/link";
import Image from "next/image";

const nav = {
  app: [
    { href: "/download", label: "Download APK" },
    { href: "/games", label: "All Games" },
    { href: "/for-pc", label: "Play on PC" },
    { href: "/old-versions", label: "Old Versions" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/responsible-gaming", label: "Responsible Gaming" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-bg/80">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr,2fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display text-lg font-bold"
            >
              <Image
                src="/3-patti-ludo-logo.webp"
                alt="3 Patti Ludo logo"
                width={36}
                height={36}
                className="rounded-lg shadow-glow"
              />
              <span className="text-white">
                3 Patti <span className="text-accent">Ludo</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Pakistan&apos;s favorite Teen Patti + Ludo app. Play 50+ games,
              claim daily bonuses, and withdraw in PKR via EasyPaisa, JazzCash
              or bank transfer.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <SocialLink href="https://twitter.com/3pattiludo" label="Twitter">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M18 2h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 2h6l4 6Z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://facebook.com/3pattiludo" label="Facebook">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.3-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8h4Z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://youtube.com/@3pattiludo" label="YouTube">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4A3 3 0 0 0 23 16.5 31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Links grid */}
          <div className="grid gap-8 sm:grid-cols-3">
            <FooterCol title="Get the App" items={nav.app} />
            <FooterCol title="Company" items={nav.company} />
            <FooterCol title="Legal" items={nav.legal} />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} 3 Patti Ludo. All rights reserved.
            Play responsibly — 18+ only.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="text-sm text-slate-400 transition-colors hover:text-accent"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
    >
      {children}
    </a>
  );
}
