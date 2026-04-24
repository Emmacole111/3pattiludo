"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const channels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52ZM12 22c-1.85 0-3.66-.5-5.24-1.44l-.37-.22-3.87 1.02 1.03-3.76-.24-.39A10 10 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Zm5.47-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.11.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    ),
    label: "WhatsApp",
    handle: "+92 300 000 0000",
    href: "https://wa.me/923000000000",
    color: "bg-[#25D366]/15 text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366]/20",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.83.941Z" />
      </svg>
    ),
    label: "Telegram",
    handle: "@3PattiLudo",
    href: "https://t.me/3pattiludo",
    color: "bg-[#2AABEE]/15 text-[#2AABEE] border-[#2AABEE]/30 hover:bg-[#2AABEE]/20",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    handle: "3pattiludoapk@gmail.com",
    href: "mailto:3pattiludoapk@gmail.com",
    color: "bg-accent/15 text-accent border-accent/30 hover:bg-accent/20",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Navbar />
      <main id="main">
        {/* Quick links bar */}
        <div className="border-b border-white/10 bg-white/[0.02]">
          <div className="container-page flex flex-wrap items-center gap-x-6 gap-y-2 py-3 text-xs text-slate-400">
            <span className="font-semibold text-slate-500">Quick links:</span>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/games", label: "All Games" },
              { href: "/blog", label: "Blog & Guides" },
              { href: "/disclaimer", label: "Disclaimer" },
              { href: "/privacy-policy", label: "Privacy Policy" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-white/10 py-14 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-slate [background-size:44px_44px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
          <div aria-hidden className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-blob-move" />
          <div className="container-page relative text-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              Contact Us
            </span>
            <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-400">
              Have a question, report an issue, or just want to say hello? Our support team is available 24/7 in Urdu and English.
            </p>
          </div>
        </section>

        <div className="container-page py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr,1.6fr]">
            {/* Contact channels */}
            <div className="space-y-5">
              <h2 className="font-display text-xl font-bold text-white">Reach us directly</h2>
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${c.color}`}
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{c.label}</p>
                    <p className="text-xs text-current opacity-80">{c.handle}</p>
                  </div>
                  <svg viewBox="0 0 24 24" className="ml-auto h-4 w-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}

              <div className="rounded-xl border border-white/10 bg-card/60 p-4 text-sm text-slate-400">
                <strong className="text-white block mb-1">Support hours</strong>
                Available 24 hours a day, 7 days a week.<br />
                Average response time: <span className="text-accent font-semibold">under 2 hours</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-card/60 p-4 text-sm text-slate-400">
                <strong className="text-white block mb-1">For payment issues</strong>
                Always include your registered phone number and transaction ID when contacting support about deposits or withdrawals.
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-white/10 bg-card/60 p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-accent/20 text-accent">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">Message sent!</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    We&apos;ll get back to you within 2 hours. Check WhatsApp or email for our reply.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="btn-ghost mt-6 text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl font-bold text-white">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Your Name</label>
                        <input
                          id="name" name="name" type="text" required autoComplete="name"
                          value={form.name} onChange={handleChange}
                          placeholder="Ahmad Khan"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Email Address</label>
                        <input
                          id="email" name="email" type="email" required autoComplete="email"
                          value={form.email} onChange={handleChange}
                          placeholder="ahmad@example.com"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Subject</label>
                      <select
                        id="subject" name="subject" required
                        value={form.subject} onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                      >
                        <option value="" disabled>Select a topic…</option>
                        <option value="deposit">Deposit issue</option>
                        <option value="withdrawal">Withdrawal issue</option>
                        <option value="account">Account / login</option>
                        <option value="game">Game bug or complaint</option>
                        <option value="bonus">Bonus not received</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">Message</label>
                      <textarea
                        id="message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Describe your issue or question in detail…"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30 resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      Send Message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
