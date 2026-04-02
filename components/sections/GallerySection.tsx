import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES } from "@/lib/data";

// Show first 8 images on homepage
const PREVIEW_IMAGES = GALLERY_IMAGES.slice(0, 8);

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-3">Gallery</p>
            <h2 className="section-title">料理・店内ギャラリー</h2>
          </div>
          <Link href="/gallery" className="btn-secondary shrink-0">
            すべて見る ({GALLERY_IMAGES.length}枚) →
          </Link>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {PREVIEW_IMAGES.map((img, i) => (
            <Link
              key={img.src}
              href="/gallery"
              className={`group relative overflow-hidden rounded-xl bg-cream-200 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={70}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-curry-900/0 group-hover:bg-curry-900/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium bg-black/40 rounded-full px-3 py-1">
                  {img.alt}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <Link href="/gallery" className="btn-primary">
            ギャラリーをすべて見る
          </Link>
        </div>
      </div>
    </section>
  );
}
