import Image from "next/image";
import Link from "next/link";
import { IMAGES, STORE } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative">
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={IMAGES.about}
                alt="スパイスバイツの店内とインド料理"
                fill
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-spice-500 text-white rounded-2xl p-5 shadow-xl max-w-[180px]">
              <p className="font-display text-3xl font-bold">70</p>
              <p className="text-sm font-medium text-white/90">席完備</p>
              <p className="text-xs text-white/70 mt-1">テーブル40 + 座席30</p>
            </div>
            {/* Small accent */}
            <div className="absolute -top-4 -left-4 bg-gold-500 text-white rounded-xl px-4 py-2 shadow-lg">
              <p className="text-xs font-bold tracking-wider">SINCE 2024</p>
            </div>
          </div>

          {/* Text column */}
          <div>
            <p className="section-label mb-3">About Us</p>
            <h2 className="section-title-lg mb-6">
              スパイスの香りに包まれる、
              <br />
              <span className="text-spice-500">本格インド料理</span>
            </h2>
            <div className="space-y-4 text-curry-700 leading-relaxed">
              <p>{STORE.description}</p>
              <p>{STORE.description2}</p>
            </div>

            {/* Feature bullets */}
            <ul className="mt-8 space-y-3">
              {[
                "本場インドのシェフが全メニューを調理",
                "タンドール窯で焼き上げる本格ナンとチキン",
                "ランチ¥990〜、コース¥2,600〜の豊富なメニュー",
                "Uber Eats・出前館でのデリバリー対応",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-curry-700">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-spice-100 flex items-center justify-center">
                    <span className="text-spice-600 text-xs font-bold">✓</span>
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/access" className="btn-primary">
                当店について
              </Link>
              <Link href="/policy" className="btn-secondary">
                こだわりを見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
