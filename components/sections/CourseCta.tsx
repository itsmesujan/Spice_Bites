import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/data";

export default function CourseCta() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <Image
        src={IMAGES.course}
        alt="スパイスバイツのコースメニュー"
        fill
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(28,16,8,0.85) 0%, rgba(28,16,8,0.60) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-xs tracking-[0.3em] text-spice-400 uppercase mb-4">
            Course Menu
          </p>
          <h2 className="font-jp text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            4名様以上のご来店に。
            <br />
            <span className="text-spice-300">コースで楽しむ本格インド料理</span>
          </h2>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-3">
            9品・12品の本格コースをご用意。ナン・ライスのお替わり自由で、ご家族・グループ・パーティーに最適です。辛さは0〜5の6段階からお選びいただけます。
          </p>
          <p className="text-white/55 text-xs mb-8">
            0〜3歳/無料 ・ 4〜10歳/半額 ／ 飲み放題オプション（ソフト¥1,200 / アルコール¥1,800）もご用意
          </p>

          {/* Pricing tiles */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { name: "9品コース",  price: "¥2,600", sub: "/お一人様" },
              { name: "12品コース", price: "¥3,200", sub: "/お一人様" },
            ].map((course) => (
              <div
                key={course.name}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-center"
              >
                <p className="text-white/70 text-xs mb-1">{course.name}</p>
                <p className="font-display text-3xl font-bold text-spice-300">{course.price}</p>
                <p className="text-white/50 text-xs">{course.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/menu#course" className="btn-primary text-base">
              コースメニューを見る
            </Link>
            <a href="tel:052-846-4149" className="btn-ghost text-base">
              ☏ 電話で予約する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
