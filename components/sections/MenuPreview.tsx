import Image from "next/image";
import Link from "next/link";
import { FEATURED_DISHES } from "@/lib/data";

// Spice Level indicator dots
function SpiceLevel({ level }: { level: number }) {
  if (level === 0) return <span className="text-xs text-curry-400">辛さなし</span>;
  return (
    <span className="flex items-center gap-0.5" aria-label={`辛さレベル ${level}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < level ? "bg-spice-500" : "bg-spice-100"
          }`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function MenuPreview() {
  return (
    <section id="menu-preview" className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-3">Menu</p>
            <h2 className="section-title">人気メニューの一部をご紹介</h2>
          </div>
          <Link href="/menu" className="btn-secondary shrink-0">
            全メニューを見る →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_DISHES.map((dish) => (
            <article key={dish.name} className="card group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Tag badge */}
                <span className="absolute top-3 left-3 spice-badge bg-spice-500 text-white">
                  {dish.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-jp font-bold text-curry-900 text-base">{dish.name}</h3>
                    <p className="text-xs text-curry-400 mt-0.5">{dish.nameEn}</p>
                  </div>
                  <span className="font-display font-bold text-spice-500 text-lg shrink-0">
                    ¥{dish.price.toLocaleString()}
                  </span>
                </div>
                <SpiceLevel level={dish.spiceLevel} />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-curry-500 text-sm mb-4">
            ランチ・ディナー・コース・ドリンクなど豊富なメニューをご用意しています
          </p>
          <Link href="/menu" className="btn-primary text-base px-8">
            フルメニューを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
