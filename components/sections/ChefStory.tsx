import Image from "next/image";
import { IMAGES } from "@/lib/data";

export default function ChefStory() {
  return (
    <section className="py-20 lg:py-28 bg-curry-900 text-white relative overflow-hidden">
      {/* Decorative spice dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E07B2E 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={IMAGES.chef}
                alt="本場インドのシェフがタンドール窯で調理する様子"
                fill
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-curry-900/60 via-transparent to-transparent" />
            </div>
            {/* Floating quote */}
            <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-spice-500 text-white rounded-xl p-4 max-w-[200px] shadow-xl">
              <p className="text-sm font-jp leading-relaxed">
                「スパイスの力で、日本に
                <br />インドを届けたい」
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <p className="font-display text-xs tracking-[0.3em] text-spice-400 uppercase mb-4">
              Chef's Story
            </p>
            <h2 className="font-jp text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              インドから名古屋へ——
              <br />
              <span className="text-spice-300">シェフのこだわり</span>
            </h2>
            <div className="space-y-4 text-white/75 leading-relaxed text-sm sm:text-base">
              <p>
                スパイスバイツのシェフはインド出身。幼い頃から親しんだ本場のスパイスと調理法を、変わらぬ情熱で名古屋にお届けしています。
              </p>
              <p>
                20種類以上のスパイスを絶妙なバランスで調合した秘伝のカレーと、タンドール窯（最高温度450℃）で一枚一枚丁寧に焼き上げるナン。この二つがスパイスバイツの核心です。
              </p>
              <p>
                辛さは6段階から選べるため、お子様からスパイス好きの方まで、すべての方に「自分だけの一皿」を見つけていただけます。
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { num: "20+", label: "種類のカレー" },
                { num: "450°C", label: "タンドール窯" },
                { num: "6",    label: "段階の辛さ" },
                { num: "70",   label: "席の広い店内" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-display text-2xl font-bold text-spice-400">{stat.num}</p>
                  <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
