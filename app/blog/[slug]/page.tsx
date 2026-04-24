import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { APK_URL } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { blogPosts, getPostBySlug, getRelatedPosts, type Block } from "@/lib/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishDate,
      url: `https://teenpattiludo.com.pk/blog/${post.slug}`,
      images: [
        {
          url: `https://teenpattiludo.com.pk${post.image}`,
          width: 1280,
          height: 720,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://teenpattiludo.com.pk${post.image}`],
    },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function RenderBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={`section-${i}`}
                className="mt-8 font-display text-xl font-extrabold text-white sm:text-2xl scroll-mt-24"
              >
                <span className="mr-3 text-accent/40 text-base font-bold">
                  {String(
                    blocks.slice(0, i).filter((x) => x.type === "h2").length + 1
                  ).padStart(2, "0")}
                </span>
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-6 font-display text-lg font-bold text-white">
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[15px] leading-relaxed text-slate-300">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-3 space-y-2 pl-4">
                {b.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-slate-300">
                    <svg viewBox="0 0 16 16" className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13.5 4 6.5 11 2.5 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-3 space-y-2 pl-4">
                {b.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-[10px] font-bold text-accent">
                      {j + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "callout": {
            const isWarn = b.tone === "warning";
            return (
              <aside
                key={i}
                role="note"
                className={`flex gap-3 rounded-xl border p-4 text-[14px] leading-relaxed ${
                  isWarn
                    ? "border-amber-400/30 bg-amber-400/10 text-amber-100"
                    : "border-accent/30 bg-accent/10 text-slate-100"
                }`}
              >
                <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/10 ${isWarn ? "text-amber-300" : "text-accent"}`}>
                  {isWarn ? (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0Z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
                    </svg>
                  )}
                </span>
                <p>{b.text}</p>
              </aside>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const h2s = post.blocks.filter((b) => b.type === "h2") as Extract<Block, { type: "h2" }>[];

  const SITE = "https://teenpattiludo.com.pk";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE}${post.image}`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: { "@type": "Organization", name: "3 Patti Ludo", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "3 Patti Ludo",
      logo: { "@type": "ImageObject", url: `${SITE}/3-patti-ludo-logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${post.slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main id="main">
        {/* ── Article hero ── */}
        <section className={`relative isolate overflow-hidden border-b border-white/10 py-14 sm:py-20 bg-gradient-to-br ${post.gradient}`}>
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-slate [background-size:44px_44px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
          <div aria-hidden className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="container-page relative">
            {/* Breadcrumb */}
            <nav className="mb-5 flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-slate-500 truncate max-w-[200px]">{post.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`rounded-full border px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider ${post.categoryColor}`}>
                {post.category}
              </span>
            </div>

            <h1 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl max-w-3xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-300">
              {post.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {post.readingTime} min read
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                3 Patti Ludo Team
              </span>
            </div>
          </div>
        </section>

        {/* ── Hero image ── */}
        <div className="container-page pt-10">
          <figure className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
              {/* Subtle bottom gradient so text below reads cleanly */}
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg to-transparent" />
            </div>
          </figure>
        </div>

        {/* ── Article body ── */}
        <div className="container-page py-10">
          <div className="grid gap-10 lg:grid-cols-[1fr,260px]">

            {/* Main article */}
            <article className="min-w-0">
              <RenderBlocks blocks={post.blocks} />

              {/* Bottom CTA */}
              <div className="mt-14 rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-card p-8 text-center shadow-glow">
                <p className="font-display text-xl font-bold text-white">
                  Ready to play <span className="gradient-text">3 Patti Ludo</span>?
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Download the APK, claim your welcome bonus, and apply what you just learned.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a href={APK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Download APK — Free</a>
                  <Link href="/blog" className="btn-ghost">← Back to Blog</Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Table of contents */}
                {h2s.length > 0 && (
                  <div className="rounded-2xl border border-white/10 bg-card/60 p-5">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      In This Article
                    </p>
                    <ol className="space-y-1.5">
                      {h2s.map((h, i) => (
                        <li key={i}>
                          <a
                            href={`#section-${post.blocks.indexOf(h)}`}
                            className="flex items-start gap-2 rounded-lg px-2 py-1.5 text-[12.5px] text-slate-400 transition-colors hover:bg-white/5 hover:text-accent"
                          >
                            <span className="mt-0.5 text-[10px] font-bold text-accent/50 shrink-0">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Download CTA card */}
                <div className="overflow-hidden rounded-2xl border border-accent/30 bg-accent/10 p-5 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-2xl">
                    📲
                  </div>
                  <p className="font-display text-sm font-bold text-white">Download Free APK</p>
                  <p className="mt-1 text-[11px] text-slate-400">Latest version for Android</p>
                  <a href={APK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 block w-full text-center text-sm">
                    Download Now
                  </a>
                </div>

                {/* Quick links */}
                <div className="rounded-2xl border border-white/10 bg-card/60 p-5">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Useful Pages</p>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/games", label: "All Games" },
                      { href: "/old-versions", label: "APK Versions" },
                      { href: "/for-pc", label: "Play on PC" },
                      { href: "/contact", label: "Contact Support" },
                    ].map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[12.5px] text-slate-400 transition-colors hover:bg-white/5 hover:text-accent">
                          <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0 text-accent/50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 12l4-4-4-4" />
                          </svg>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          {/* Related posts */}
          <section className="mt-16">
            <h2 className="mb-6 font-display text-xl font-bold text-white">Related Articles</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={rp.image}
                    alt={rp.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <span className={`absolute bottom-2 left-3 rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm ${rp.categoryColor}`}>
                    {rp.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-[13px] font-bold text-white leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
                    <span>{formatDate(rp.publishDate)}</span>
                    <span>⏱ {rp.readingTime} min</span>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
