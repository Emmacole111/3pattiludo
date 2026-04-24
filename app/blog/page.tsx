import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/InnerPageLayout";
import { blogPosts } from "@/lib/blog-posts";
import { APK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "3 Patti Ludo Blog — Tips, Tricks & Earning Guides",
  description:
    "Expert 3 Patti Ludo guides: Teen Patti strategy, Ludo tactics, how to earn PKR, APK download tips, and more for Pakistani players in 2026.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "3 Patti Ludo Blog — Tips, Tricks & Earning Guides",
    description: "Expert strategies, game guides, and earning tips for Pakistani 3 Patti Ludo players.",
    url: "https://teenpattiludo.com.pk/blog",
  },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const featured = blogPosts.find((p) => p.featured)!;
const rest = blogPosts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <InnerPageLayout
      badge="Blog"
      title="Tips, Guides & Strategies"
      subtitle="Expert advice to help you play smarter, earn more PKR, and get the most out of 3 Patti Ludo."
    >
      <div className="container-page py-14 space-y-14">

        {/* ── Featured post ── */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 transition-all hover:border-accent/30 hover:shadow-glow sm:flex-row sm:min-h-[200px]"
          style={{ background: "linear-gradient(135deg, #0e2418, #06130b)" }}
        >
          {/* Left: text content */}
          <div className={`flex flex-col justify-between p-8 sm:w-[50%] bg-gradient-to-br ${featured.gradient}`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`rounded-full border px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold text-accent">
                  ★ Featured
                </span>
              </div>
              <h2 className="font-display text-xl font-extrabold leading-snug text-white group-hover:text-accent transition-colors sm:text-2xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {featured.description}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span>📅 {formatDate(featured.publishDate)}</span>
              <span>⏱ {featured.readingTime} min read</span>
              <span className="ml-auto font-semibold text-accent group-hover:underline">
                Read Article →
              </span>
            </div>
          </div>

          {/* Right: real image */}
          <div className="relative min-h-[140px] sm:flex-1 overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient so image blends into the left panel */}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0e2418]/80 via-transparent to-transparent sm:from-[#0e2418]/60" />
          </div>
        </Link>

        {/* ── Post grid ── */}
        <div>
          <h2 className="mb-6 font-display text-xl font-bold text-white">All Articles</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
              >
                {/* Card thumbnail */}
                <div className="relative h-28 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom fade */}
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  {/* Category badge pinned over image */}
                  <span className="absolute bottom-3 left-4">
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[15px] font-bold leading-snug text-white group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{formatDate(post.publishDate)}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      ⏱ {post.readingTime} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-card p-8 text-center shadow-glow">
          <p className="font-display text-xl font-bold text-white">
            Ready to put these tips into practice?
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Download the APK, claim your welcome bonus, and start playing today.
          </p>
          <a href={APK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
            Download 3 Patti Ludo APK
          </a>
        </div>
      </div>
    </InnerPageLayout>
  );
}
