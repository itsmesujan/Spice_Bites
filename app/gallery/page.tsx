"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GALLERY_IMAGES } from "@/lib/data";

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  function openLightbox(i: number) {
    setLightbox(i);
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightbox(null);
    document.body.style.overflow = "";
  }

  function prev() {
    setLightbox((i) =>
      i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }

  function next() {
    setLightbox((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));
  }

  return (
    <>
      <Header />
      <main className="bg-cream-50 min-h-screen">
        {/* Page hero */}
        <div className="bg-curry-900 pt-28 pb-14 text-center text-white">
          <p className="font-display text-xs tracking-[0.3em] text-spice-400 uppercase mb-3">
            Gallery
          </p>
          <h1 className="font-jp text-3xl sm:text-4xl font-bold">
            料理・店内ギャラリー
          </h1>
          <p className="mt-3 text-white/60 text-sm">
            {GALLERY_IMAGES.length}枚の写真でスパイスバイツの魅力をご覧ください
          </p>
        </div>

        {/* Gallery grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {GALLERY_IMAGES.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                onClick={() => openLightbox(i)}
                className="group relative aspect-square overflow-hidden rounded-xl bg-cream-200 focus:outline-none focus:ring-2 focus:ring-spice-500 focus:ring-offset-2"
                aria-label={`画像を拡大: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  quality={65}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-curry-900/0 group-hover:bg-curry-900/25 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-curry-900/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="画像ビューア"
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl p-2"
            aria-label="閉じる"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl p-3 bg-black/20 rounded-full hover:bg-black/40 transition-colors"
            aria-label="前の画像"
          >
            ‹
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-16 my-16">
            <Image
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].alt}
              fill
              quality={90}
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 inset-x-0 text-center">
            <p className="text-white/70 text-sm">{GALLERY_IMAGES[lightbox].alt}</p>
            <p className="text-white/40 text-xs mt-1">
              {lightbox + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl p-3 bg-black/20 rounded-full hover:bg-black/40 transition-colors"
            aria-label="次の画像"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
