import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Playfair_Display } from "next/font/google";
import "./globals.css";
import { STORE } from "@/lib/data";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    template: "%s | スパイスバイツ — 平針・名古屋の本格インド料理",
    default:  "スパイスバイツ | 平針・天白区の本格インド料理レストラン",
  },
  description:
    "名古屋市天白区・平針駅徒歩圏内の本格インド料理「スパイスバイツ」。本場インドのシェフが作るカレー・ナン・タンドリーチキン。ランチ¥990〜、テイクアウト・Uber Eats対応。70席・駐車場完備。",
  keywords: [
    "インド料理", "スパイスバイツ", "平針", "名古屋", "天白区",
    "カレー", "ナン", "タンドリーチキン", "本格インドカレー",
    "テイクアウト", "デリバリー", "ランチ", "ディナー",
  ],
  openGraph: {
    type:        "website",
    locale:      "ja_JP",
    siteName:    "SPICE BITES スパイスバイツ",
    title:       "スパイスバイツ | 平針・天白区の本格インド料理レストラン",
    description: "名古屋市天白区・平針の本格インド料理。本場インドシェフのカレー・ナン。ランチ¥990〜",
  },
  robots: {
    index:   true,
    follow:  true,
  },
};

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const jsonLd = {
  "@context":       "https://schema.org",
  "@type":          "Restaurant",
  name:             STORE.name,
  alternateName:    STORE.nameJp,
  description:      STORE.description,
  url:              "https://spice-bites-hirabari.com/",
  telephone:        STORE.phone,
  address: {
    "@type":           "PostalAddress",
    streetAddress:     "中平4-208エスパシオンビル 1F",
    addressLocality:   "名古屋市天白区",
    addressRegion:     "愛知県",
    addressCountry:    "JP",
  },
  openingHoursSpecification: [
    {
      "@type":     "OpeningHoursSpecification",
      dayOfWeek:   ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens:       "11:00",
      closes:      "22:00",
    },
  ],
  servesCuisine:   "Indian",
  priceRange:      "¥900〜¥3,200",
  hasMenu:         "https://spice-bites-hirabari.com/menu",
  currenciesAccepted: "JPY",
  paymentAccepted: "Cash, Credit Card, QR Code, Electronic Money",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "駐車場", value: true },
    { "@type": "LocationFeatureSpecification", name: "テイクアウト", value: true },
    { "@type": "LocationFeatureSpecification", name: "禁煙席", value: true },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
