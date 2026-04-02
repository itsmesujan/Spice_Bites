import Link from "next/link";
import { STORE } from "@/lib/data";

const NAV_LINKS = [
  { href: "/",        label: "トップページ" },
  { href: "/menu",    label: "メニュー" },
  { href: "/policy",  label: "こだわり" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/access",  label: "当店について" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-curry-900 text-cream-200">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-display font-bold text-2xl text-white tracking-widest mb-1">
              SPICE BITES
            </p>
            <p className="text-spice-400 text-sm tracking-[0.2em] mb-4">スパイスバイツ</p>
            <p className="text-cream-200/70 text-sm leading-relaxed">
              本場インドのシェフが作る本格カレーと
              <br />
              タンドール焼きナンが自慢のレストラン。
              <br />
              平針・名古屋天白区。
            </p>
            {/* Social */}
            <a
              href={STORE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-cream-200/70 hover:text-spice-400 transition-colors"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @spice_bites_
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-400 font-semibold mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-200/70 hover:text-spice-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store info */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold-400 font-semibold mb-4">
              Store Info
            </p>
            <address className="not-italic space-y-2 text-sm text-cream-200/70">
              <p>{STORE.address}</p>
              <p>
                <a href={`tel:${STORE.phone}`} className="hover:text-spice-400 transition-colors">
                  ☏ {STORE.phone}
                </a>
              </p>
              <p>ランチ {STORE.hours.lunch}</p>
              <p>ディナー {STORE.hours.dinner}</p>
              <p className="text-cream-200/50">{STORE.hours.takeout}</p>
            </address>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={STORE.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cream-200/50 hover:text-spice-400 transition-colors flex items-center gap-1"
              >
                → Uber Eats で注文
              </a>
              <a
                href={STORE.demaekan}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cream-200/50 hover:text-spice-400 transition-colors flex items-center gap-1"
              >
                → 出前館で注文
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-200/40">
          <p>© {year} SPICE BITES ALL RIGHTS RESERVED.</p>
          <p className="font-display tracking-widest">SPICE BITES スパイスバイツ</p>
        </div>
      </div>
    </footer>
  );
}
