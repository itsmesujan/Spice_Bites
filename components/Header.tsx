"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { STORE } from "@/lib/data";

const NAV_LINKS = [
  { href: "/",        label: "トップ" },
  { href: "/menu",    label: "メニュー" },
  { href: "/policy",  label: "こだわり" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/access",  label: "当店について" },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-200"
            : "bg-transparent"
        }`}
      >
        {/* Top strip – delivery links */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            scrolled ? "h-0 opacity-0" : "h-auto opacity-100"
          }`}
        >
          <div className="bg-curry-900 text-cream-100 text-xs py-1.5 px-4 flex items-center justify-center gap-4">
            <span className="hidden sm:inline">📞 {STORE.phone}</span>
            <span className="text-cream-200">|</span>
            <a
              href={STORE.demaekan}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-spice-300 transition-colors font-medium"
            >
              出前館で注文 →
            </a>
            <span className="text-cream-200 hidden sm:inline">|</span>
            <a
              href={STORE.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-spice-300 transition-colors font-medium hidden sm:inline"
            >
              Uber Eats で注文 →
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={`font-display font-bold text-xl tracking-wider transition-colors ${
                  scrolled ? "text-curry-900" : "text-white"
                }`}
              >
                SPICE BITES
              </span>
              <span
                className={`text-[10px] tracking-[0.2em] transition-colors ${
                  scrolled ? "text-spice-500" : "text-spice-300"
                }`}
              >
                スパイスバイツ
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-150 relative group ${
                    scrolled
                      ? "text-curry-700 hover:text-spice-500"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-spice-400 transition-all duration-200 group-hover:w-full rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${STORE.phone}`}
                className={`text-sm font-bold transition-colors ${
                  scrolled ? "text-curry-700 hover:text-spice-500" : "text-white/90 hover:text-white"
                }`}
              >
                ☏ {STORE.phone}
              </a>
              <a
                href={`tel:${STORE.phone}`}
                className="btn-primary text-sm px-5 py-2.5"
              >
                予約する
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                scrolled ? "text-curry-900 hover:bg-cream-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="メニューを開く"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">メニュー</span>
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-curry-900/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-cream-50 flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
            <div>
              <p className="font-display font-bold text-lg text-curry-900">SPICE BITES</p>
              <p className="text-xs text-spice-500 tracking-widest">スパイスバイツ</p>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-curry-600 hover:text-curry-900"
              aria-label="メニューを閉じる"
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-base font-medium text-curry-800 hover:text-spice-500 border-b border-cream-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Drawer CTAs */}
          <div className="px-6 py-6 flex flex-col gap-3 border-t border-cream-200">
            <a href={`tel:${STORE.phone}`} className="btn-primary w-full justify-center text-base">
              📞 予約する
            </a>
            <a
              href={STORE.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center text-sm"
            >
              Uber Eats で注文
            </a>
            <a
              href={STORE.demaekan}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center text-sm"
            >
              出前館で注文
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
