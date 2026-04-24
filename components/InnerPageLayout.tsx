import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function InnerPageLayout({
  children,
  title,
  subtitle,
  badge,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
}) {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* Page hero banner */}
        <section className="relative isolate overflow-hidden border-b border-white/10 py-14 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-radial" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-slate [background-size:44px_44px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
          />
          {/* Glow blobs */}
          <div aria-hidden className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-blob-move" />
          <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl animate-blob-move" style={{ animationDelay: "-8s" }} />

          <div className="container-page relative text-center">
            {badge && (
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                {badge}
              </span>
            )}
            <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        </section>

        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
