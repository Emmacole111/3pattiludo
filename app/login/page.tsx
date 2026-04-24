import type { Metadata } from "next";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import { APK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Login to 3 Patti Ludo — Access Your Account",
  description:
    "Log in to your 3 Patti Ludo account to play Teen Patti, Ludo, and 50+ games. Access your wallet, withdraw PKR, and claim daily bonuses.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <InnerPageLayout
      badge="Account"
      title="Login to Your Account"
      subtitle="Access your wallet, games, and daily bonuses through the 3 Patti Ludo app."
    >
      <div className="container-page py-14">
        <div className="mx-auto max-w-md space-y-6">

          {/* Login prompt */}
          <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-card p-8 text-center shadow-glow">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-3xl">
              🔐
            </div>
            <h2 className="font-display text-xl font-bold text-white">
              Login via the App
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              3 Patti Ludo accounts are managed directly inside the Android app.
              Download the app, open it, and tap <strong className="text-white">Login</strong> to access your account with your registered mobile number and OTP.
            </p>
            <a href={APK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
              Download the App
            </a>
          </div>

          {/* New user */}
          <div className="rounded-2xl border border-white/10 bg-card/60 p-6 text-center">
            <p className="text-sm text-slate-400">Don&apos;t have an account yet?</p>
            <p className="mt-1 text-sm font-medium text-white">
              Register takes under 60 seconds — just your mobile number and an OTP.
            </p>
            <a href={APK_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-4 inline-flex text-sm">
              Get Started Free →
            </a>
          </div>

          {/* Help links */}
          <div className="rounded-2xl border border-white/10 bg-card/60 p-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Need help?</p>
            <div className="space-y-1.5">
              {[
                { href: "/contact", label: "Contact Support" },
                { href: "/blog/3-patti-ludo-apk-download-guide", label: "Download Guide" },
                { href: "/", label: "← Back to Homepage" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] text-slate-300 transition-colors hover:bg-white/5 hover:text-accent">
                  <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0 text-accent/60" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12l4-4-4-4"/></svg>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
