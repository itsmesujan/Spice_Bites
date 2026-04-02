import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "こだわり | スパイスバイツ — 平針の本格インド料理",
  description:
    "スパイスバイツが大切にする3つのこだわり。本格スパイス料理を手軽に、家族みんなで楽しめる空間、食べ比べで見つける自分の一皿。",
};

const POLICIES = [
  {
    num: "01",
    icon: "🌶️",
    title: "本格インド料理を手軽に楽しむ",
    titleEn: "Authentic Indian, Made Accessible",
    body: [
      "店内での食事だけでなく、出前・デリバリー・テイクアウトも豊富に対応。自宅やオフィスでも、本格的なスパイスの香りと味わいを気軽に楽しむことができます。",
      "忙しい日でも、手軽に本格料理を味わえるのが「Spice Bites」の魅力です。ランチは¥990〜、ディナーも豊富なセットメニューからお選びいただけます。",
    ],
    highlights: [
      "Uber Eats・出前館でのデリバリー対応",
      "店頭テイクアウトは22:00まで受付",
      "ランチ¥990〜、手軽に楽しめる価格設定",
    ],
  },
  {
    num: "02",
    icon: "👨‍👩‍👧‍👦",
    title: "家族も友人も楽しめる本格インド料理",
    titleEn: "A Place for Everyone",
    body: [
      "ママ会や家族連れ、友人との食事などシーンに合わせて利用できるため、幅広い世代に親しまれる空間を提供しています。",
      "忙しい日でも、手軽に味わえる美味しさと、誰と訪れても満足できる居心地の良さ——それが「Spice Bites」のこだわりです。辛さは0〜5の6段階から選べるため、お子様から辛さ好きの方まで安心してお楽しみいただけます。",
    ],
    highlights: [
      "70席の広い店内（テーブル40・座席30）",
      "辛さ0〜5の6段階で誰でも安心",
      "キッズセット¥650〜（0〜3歳無料）",
      "駐車場13台完備",
    ],
  },
  {
    num: "03",
    icon: "🍛",
    title: "自分好みの一皿を見つける楽しみ",
    titleEn: "Discover Your Favourite",
    body: [
      "「Spice Bites」では、複数のカレーを少しずつ楽しめる食べ比べメニューをご用意しています。スパイスの風味や具材の違いを一度に味わうことで、自分のお気に入りやその日の気分にぴったりの一皿を見つけることができます。",
      "単品では味わえない多彩なカレー体験を提供し、カレー好きや初めての方も楽しめるメニューとして、店内・テイクアウト・デリバリーでお楽しみいただけます。",
    ],
    highlights: [
      "チキン・マトン・魚介・野菜・豚肉など20種以上のカレー",
      "タンドール窯で焼く本格ナン（10種以上）",
      "食べ比べセットで気軽にカレー探求",
    ],
  },
];

export default function PolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-cream-50 min-h-screen">
        {/* Page hero */}
        <div className="bg-curry-900 pt-28 pb-14 text-center text-white">
          <p className="font-display text-xs tracking-[0.3em] text-spice-400 uppercase mb-3">
            Our Policy
          </p>
          <h1 className="font-jp text-3xl sm:text-4xl font-bold">
            スパイスバイツのこだわり
          </h1>
          <p className="mt-3 text-white/60 text-sm max-w-md mx-auto">
            すべてのお客様に、最高の本格インド料理体験を
          </p>
        </div>

        {/* Policies */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {POLICIES.map((policy, i) => (
            <article
              key={policy.num}
              className={`flex flex-col lg:flex-row gap-10 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Number / Icon column */}
              <div className="lg:w-48 shrink-0 flex flex-col items-start lg:items-center gap-3">
                <span
                  className="font-display text-7xl font-bold text-spice-100 leading-none select-none"
                  aria-hidden="true"
                >
                  {policy.num}
                </span>
                <span className="text-5xl" aria-hidden="true">{policy.icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="font-display text-xs tracking-[0.2em] text-spice-500 uppercase mb-2">
                  {policy.titleEn}
                </p>
                <h2 className="font-jp text-2xl sm:text-3xl font-bold text-curry-900 mb-5">
                  {policy.title}
                </h2>
                <div className="space-y-3 text-curry-700 leading-relaxed mb-6">
                  {policy.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                <ul className="space-y-2">
                  {policy.highlights.map((hl) => (
                    <li key={hl} className="flex items-center gap-2 text-sm text-curry-600">
                      <span className="w-4 h-4 rounded-full bg-spice-500 flex items-center justify-center shrink-0">
                        <span className="text-white text-[9px]">✓</span>
                      </span>
                      {hl}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
