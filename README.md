# 3 Patti Ludo — SEO-Optimized Next.js Homepage

A production-ready, fully SEO-optimized marketing homepage for **3 Patti Ludo** — Pakistan's top Teen Patti + Ludo gaming app — built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Target keyword: **"3 Patti Ludo"** (with strong coverage of `3 patti ludo download`, `3 patti ludo apk`, `teen patti ludo`, `3 patti ludo Pakistan`, `3 patti ludo earning app`, and related long-tail terms).

---

## Stack

- Next.js 15 App Router + React 19
- TypeScript (strict)
- Tailwind CSS 3 (custom dark gaming design system)
- `next/font` (Inter + Poppins, self-hosted, `display: swap`)
- `next/image` with AVIF/WebP
- JSON-LD structured data (`WebSite`, `Organization`, `MobileApplication`, `FAQPage`)
- Built-in `sitemap.ts`, `robots.ts`, `manifest.ts`

## Getting started

```bash
npm install
npm run dev         # http://localhost:3000
npm run build
npm run start
npm run typecheck
npm run lint
```

## Project structure

```
app/
  layout.tsx            # <head> metadata, OG/Twitter tags, fonts, JSON-LD (WebSite, Organization, MobileApplication)
  page.tsx              # Homepage (assembles all sections)
  globals.css           # Tailwind + design tokens + .btn/.card utilities
  sitemap.ts            # /sitemap.xml
  robots.ts             # /robots.txt
  manifest.ts           # /site.webmanifest
components/
  Navbar.tsx            # Sticky, glass, mobile menu, CTA
  HeroSection.tsx       # H1 + CTA + app mockup (next/image, priority)
  TrustBar.tsx          # Ratings / users / speed
  FeatureCards.tsx      # 8 feature cards with SVG icons
  StepsSection.tsx      # 6-step "How It Works"
  BenefitsSection.tsx   # Why choose us + tricks CTA
  FAQAccordion.tsx      # Client-side accessible accordion + FAQPage JSON-LD
  CTASection.tsx        # Strong final conversion CTA
  Footer.tsx            # Internal links (SEO), legal, social
public/
  favicon.svg
  logo.svg
  hero-app.svg          # App mockup for hero
  og-image.svg          # Open Graph / Twitter card
```

## SEO features implemented

- **Single H1** in the hero; strict H2/H3 hierarchy throughout
- **Canonical URL** (`alternates.canonical`) set in `layout.tsx`
- **Metadata**: SEO title (55 chars), meta description (151 chars, CTR-focused)
- **Open Graph + Twitter** cards with 1200×630 image
- **Structured data (JSON-LD)**:
  - `WebSite` with SearchAction
  - `Organization` with sameAs + contactPoint
  - `MobileApplication` with aggregateRating
  - `FAQPage` rendered alongside the FAQ accordion
- **Sitemap** via `app/sitemap.ts`
- **Robots** via `app/robots.ts` (allow all + sitemap)
- **PWA manifest** via `app/manifest.ts`
- **Semantic HTML5**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Internal linking**: `/download`, `/features`, `/blog`, `/faq`, `/support`, `/terms`, `/privacy`, etc.
- **Keyword density**: Natural usage of "3 Patti Ludo", `teen patti ludo`, `3 patti ludo apk`, `3 patti ludo earning app`, etc. — no stuffing.

## Performance

- Fonts via `next/font` (no render-blocking Google fetch) with `display: swap`
- `next/image` for all imagery (AVIF/WebP, `priority` on hero, explicit `sizes`)
- Hero uses inline SVG radial + grid — zero extra network
- No heavy JS libraries — only client component is the FAQ accordion & mobile nav toggle
- `scrollbar-gutter: stable` + fixed image aspect ratios to avoid **CLS**
- Compression enabled, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` headers

## Accessibility

- Skip-to-content link
- `aria-expanded` / `aria-controls` on FAQ and mobile nav
- `aria-label` on icon-only buttons and social links
- Keyboard focus ring with `:focus-visible`
- Alt text on all images; decorative SVGs use `aria-hidden`
- Color contrast meets WCAG AA against `#06130B`

## Design tokens

| Token       | Value       | Usage                                |
| ----------- | ----------- | ------------------------------------ |
| `bg`        | `#06130B`   | App background                       |
| `card`      | `#111827`   | Glass cards                          |
| `accent`    | `#10B981`   | Primary CTA / highlights (Pk green)  |
| `secondary` | `#F5B400`   | Secondary CTA / gradient anchor (gold)|
| `muted`     | `#94A3B8`   | Slate-400 body copy                  |

Glassmorphism via `.glass` / `.card-surface` utilities in `globals.css`.

## Production notes

1. Replace `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with your real domain.
2. Optionally generate a `public/og-image.png` (1200×630) from `og-image.svg` for maximum social-scraper compatibility and point `OG_IMAGE` back to the `.png`.
3. Add the real APK link on `/download` and wire analytics / conversion events.
4. Consider adding `next-sitemap` or ISR for a dynamic blog at `/blog`.
