import { STORE } from "@/lib/data";

const TRUST_ITEMS = [
  { icon: "👨‍🍳", text: "本場インドのシェフ" },
  { icon: "💺", text: "70席完備" },
  { icon: "🚗", text: "駐車場13台" },
  { icon: "📦", text: "テイクアウト対応" },
  { icon: "🛵", text: "デリバリー対応" },
  { icon: "🌶️", text: "辛さ6段階から選択" },
  { icon: "👪", text: "小さなお子様も歓迎" },
  { icon: "🗓️", text: "年中無休" },
];

export default function TrustBar() {
  return (
    <section className="bg-curry-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: horizontal list */}
        <ul className="hidden md:flex items-center justify-center divide-x divide-white/10">
          {TRUST_ITEMS.map((item) => (
            <li
              key={item.text}
              className="flex items-center gap-1.5 px-4 py-1 text-sm text-white/85 whitespace-nowrap"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>

        {/* Mobile: scrolling marquee-style */}
        <div className="md:hidden flex items-center gap-6 overflow-x-auto scrollbar-hide pb-1">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-1.5 text-sm text-white/85 whitespace-nowrap shrink-0"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        {/* Delivery CTA strip */}
        <div className="mt-3 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm">
          <span className="text-white/60">デリバリー・テイクアウトのご注文はこちら</span>
          <div className="flex gap-3">
            <a
              href={STORE.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-spice-500 hover:bg-spice-600 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors"
            >
              Uber Eats
            </a>
            <a
              href={STORE.demaekan}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors"
            >
              出前館
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
