import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

const SITE_URL = "https://teenpattiludo.com.pk";
const SITE_NAME = "3 Patti Ludo";
const OG_IMAGE = `${SITE_URL}/3-patti-ludo-game.webp`;

export const viewport: Viewport = {
  themeColor: "#06130B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "3 Patti Ludo APK Download Latest Version for Android",
    template: "%s | 3 Patti Ludo",
  },
  description:
    "Download the 3 Patti Ludo APK and win real PKR playing Teen Patti + Ludo & 50+ games. EasyPaisa & JazzCash payouts, daily bonuses, 10M+ Pakistani players.",
  keywords: [
    "3 Patti Ludo",
    "3 patti ludo download",
    "3 patti ludo apk",
    "teen patti ludo",
    "3 patti ludo Pakistan",
    "3 patti ludo earning app",
    "teen patti ludo online",
    "3 patti ludo apk latest version",
    "3 patti ludo deposit",
    "3 patti ludo withdraw",
    "ludo real cash",
    "teen patti Pakistan",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "games",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "3 Patti Ludo APK Download Latest Version for Android",
    description:
      "Pakistan's #1 Teen Patti + Ludo earning app. 50+ games, fast EasyPaisa & JazzCash payouts, daily bonuses and real PKR wins.",
    images: [
      {
        url: OG_IMAGE,
        width: 1280,
        height: 720,
        alt: "3 Patti Ludo — Pakistan's #1 Teen Patti and Ludo gaming app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Patti Ludo APK Download Latest Version for Android",
    description:
      "Play Teen Patti + Ludo and 50+ games. EasyPaisa / JazzCash payouts, daily bonuses, 10M+ Pakistani players.",
    images: [OG_IMAGE],
    creator: "@3pattiludo",
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: ["en-PK", "ur-PK"],
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/3-patti-ludo-logo.webp`,
  sameAs: [
    "https://twitter.com/3pattiludo",
    "https://www.facebook.com/3pattiludo",
    "https://www.youtube.com/@3pattiludo",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Urdu"],
      areaServed: "PK",
    },
  ],
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "3 Patti Ludo",
  operatingSystem: "ANDROID",
  applicationCategory: "GameApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PKR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "125420",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="64x64" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        {/* JSON-LD inline so Googlebot reads it on first crawl */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </head>
      <body
        className="font-sans bg-bg text-slate-200 antialiased"
        suppressHydrationWarning
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-[#06130B]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
