"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { APK_URL } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/for-pc", label: "For PC" },
  { href: "/old-versions", label: "Old Versions" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-bg/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
          aria-label="3 Patti Ludo home"
        >
          <Image
            src="/3-patti-ludo-logo.webp"
            alt="3 Patti Ludo logo"
            width={36}
            height={36}
            className="rounded-lg shadow-glow"
            priority
          />
          <span className="text-white">
            3 Patti <span className="text-accent">Ludo</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="btn-ghost text-sm">
            Login
          </Link>
          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            aria-label="Download 3 Patti Ludo APK"
          >
            Download Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden rounded-lg p-2 text-white/90 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-bg/95 backdrop-blur-xl md:hidden">
          <ul className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-2">
              <Link href="/login" className="btn-ghost flex-1 text-sm">
                Login
              </Link>
              <a
                href={APK_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary flex-1 text-sm text-center"
              >
                Download
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
