import Image from "next/image";
import Link from "next/link";
import { IMAGES, STORE } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={IMAGES.food1}
        alt="スパイスバイツの本格インド料理"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay – bottom-heavy for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,16,8,0.20) 0%, rgba(28,16,8,0.50) 50%, rgba(28,16,8,0.80) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Brand orange accent bar */}
      <div
        className="absolute bottom-0 inset-x-0 h-1 bg-spice-gradient"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="font-display text-xs tracking-[0.35em] text-spice-400 uppercase mb-4 animate-fade-in">
            Authentic Indian Cuisine · Hirabari, Nagoya
          </p>

          {/* Heading */}
          <h1 className="font-jp text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 text-balance">
            一口ごとに広がる、
            <br />
            <span className="text-spice-300">本場インド</span>の風景
          </h1>

          {/* Sub */}
          <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
            名古屋市天白区・平針。本場インドのシェフが腕を振るう
            <br className="hidden sm:block" />
            本格カレー、タンドール窯のナン、タンドリーチキン。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <Link href="/menu" className="btn-primary text-base px-7 py-3.5">
              メニューを見る
            </Link>
            <a
              href={STORE.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base px-7 py-3.5"
            >
              Uber Eats で注文
            </a>
            <a
              href={`tel:${STORE.phone}`}
              className="btn-ghost text-base px-7 py-3.5"
            >
              ☏ 予約・問い合わせ
            </a>
          </div>

          {/* Quick facts */}
          <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
            {[
              { icon: "🍽️", label: "ランチ ¥990〜" },
              { icon: "🚗", label: "駐車場13台" },
              { icon: "📦", label: "テイクアウト対応" },
              { icon: "👨‍🍳", label: "本場インドシェフ" },
            ].map((fact) => (
              <div key={fact.label} className="flex items-center gap-1.5 text-sm text-white/80">
                <span aria-hidden="true">{fact.icon}</span>
                {fact.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 animate-bounce">
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
