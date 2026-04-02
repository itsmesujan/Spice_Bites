import type { Metadata } from "next";
import Header  from "@/components/Header";
import Footer  from "@/components/Footer";
import {
  COURSE_MENU,
  DINNER_SETS,
  LUNCH_SETS,
  LUNCH_SIDES,
  MEAT_ITEMS,
  APPETIZER_ITEMS,
  SALAD_ITEMS,
  SOUP_ITEMS,
  CURRY_CHICKEN,
  CURRY_SEAFOOD,
  CURRY_LAMB,
  CURRY_VEG,
  CURRY_PORK,
  NAAN_RICE,
  DESSERT_ITEMS,
  DRINKS,
  type MenuSection,
  type MenuItem,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "メニュー | スパイスバイツ — 平針の本格インド料理",
  description:
    "スパイスバイツのすべてのメニュー。ランチセット¥990〜、ディナーセット、カレー単品20種、ナン、タンドリーチキン、コースメニュー、ドリンクなど。",
};

// ─── Spice Indicator ──────────────────────────────────────────────────────────
function SpiceIndicator({ level }: { level?: number }) {
  if (!level) return null;
  return (
    <span className="inline-flex items-center gap-0.5 ml-2" aria-label={`辛さ${level}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full inline-block ${
            i < level ? "bg-spice-500" : "bg-spice-100"
          }`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

// ─── Menu Item Row ────────────────────────────────────────────────────────────
function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start gap-2 py-3 border-b border-cream-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="font-medium text-curry-900 text-sm">{item.name}</span>
          {item.nameEn && (
            <span className="text-curry-400 text-xs">{item.nameEn}</span>
          )}
          <SpiceIndicator level={item.spiceLevel} />
        </div>
        {item.note && (
          <p className="text-xs text-curry-500 mt-0.5 leading-relaxed">{item.note}</p>
        )}
      </div>
      <span className="font-display font-semibold text-spice-600 text-sm shrink-0 ml-3">
        ¥{item.price.toLocaleString()}
      </span>
    </div>
  );
}

// ─── Menu Section Block ───────────────────────────────────────────────────────
function MenuBlock({ section }: { section: MenuSection }) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-3 mb-3">
        <h3 className="font-jp font-bold text-curry-900">{section.title}</h3>
        <span className="font-display text-xs text-spice-400 uppercase tracking-wider">
          {section.titleEn}
        </span>
      </div>
      <div className="bg-white rounded-xl border border-cream-200 px-4 divide-y-0">
        {section.items.map((item) => (
          <MenuItemRow key={`${item.name}-${item.price}`} item={item} />
        ))}
      </div>
    </div>
  );
}

// ─── Tab anchor section wrapper ───────────────────────────────────────────────
function TabSection({
  id,
  label,
  emoji,
  children,
}: {
  id: string;
  label: string;
  emoji: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-6">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-spice-500">
        <span className="text-2xl" aria-hidden="true">{emoji}</span>
        <h2 className="font-jp text-xl sm:text-2xl font-bold text-curry-900">{label}</h2>
      </div>
      {children}
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="bg-cream-50 min-h-screen">
        {/* Page hero */}
        <div className="bg-curry-900 pt-28 pb-14 text-center text-white">
          <p className="font-display text-xs tracking-[0.3em] text-spice-400 uppercase mb-3">Menu</p>
          <h1 className="font-jp text-3xl sm:text-4xl font-bold">メニュー</h1>
          <p className="mt-3 text-white/60 text-sm max-w-md mx-auto">
            ランチ・ディナー・コース・ドリンクの全メニューをご覧いただけます
          </p>
          {/* Spice legend */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/10 rounded-full px-5 py-2 text-xs text-white/70">
            <span>🌶️ 辛さレベル：</span>
            {[
              { n: 0, label: "甘口" },
              { n: 1, label: "普通" },
              { n: 2, label: "中辛" },
              { n: 3, label: "辛口" },
              { n: 4, label: "とても辛い" },
              { n: 5, label: "激辛" },
            ].map(({ n, label }) => (
              <span key={n} className="flex items-center gap-1">
                <span className="font-bold text-spice-400">{n}</span>
                <span className="hidden sm:inline text-white/50">={label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Sticky tab nav */}
        <nav
          className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-cream-200 overflow-x-auto"
          aria-label="メニューカテゴリ"
        >
          <ul className="flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {[
              { href: "#course",  label: "コース" },
              { href: "#lunch",   label: "ランチ" },
              { href: "#dinner",  label: "ディナー" },
              { href: "#curry",   label: "カレー" },
              { href: "#naan",    label: "ナン・ライス" },
              { href: "#drink",   label: "ドリンク" },
            ].map((tab) => (
              <li key={tab.href}>
                <a
                  href={tab.href}
                  className="block px-4 py-4 text-sm font-medium text-curry-600 hover:text-spice-500 whitespace-nowrap transition-colors border-b-2 border-transparent hover:border-spice-400"
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {/* Course */}
          <TabSection id="course" label="コースメニュー" emoji="🎉">
            <p className="text-sm text-curry-500 mb-6">
              4名様〜のご利用。ナン・ライス食べ放題。0〜3歳無料 / 4〜10歳半額。
            </p>
            {COURSE_MENU.map((s) => <MenuBlock key={s.title} section={s} />)}
          </TabSection>

          {/* Lunch */}
          <TabSection id="lunch" label="ランチメニュー" emoji="☀️">
            <p className="text-sm text-curry-500 mb-6">
              営業時間: 11:00〜15:00（L.O. 14:30）
            </p>
            <MenuBlock section={LUNCH_SETS} />
            <MenuBlock section={LUNCH_SIDES} />
          </TabSection>

          {/* Dinner */}
          <TabSection id="dinner" label="ディナーセットメニュー" emoji="🌙">
            <p className="text-sm text-curry-500 mb-6">
              営業時間: 17:00〜22:00（L.O. 21:30）
            </p>
            <MenuBlock section={DINNER_SETS} />
            <MenuBlock section={MEAT_ITEMS} />
            <MenuBlock section={APPETIZER_ITEMS} />
            <MenuBlock section={SALAD_ITEMS} />
            <MenuBlock section={SOUP_ITEMS} />
          </TabSection>

          {/* Curry */}
          <TabSection id="curry" label="カレー単品" emoji="🍛">
            <p className="text-sm text-curry-500 mb-6">
              +¥150で他のカレーに変更可能なメニューもございます
            </p>
            <MenuBlock section={CURRY_CHICKEN} />
            <MenuBlock section={CURRY_SEAFOOD} />
            <MenuBlock section={CURRY_LAMB} />
            <MenuBlock section={CURRY_VEG} />
            <MenuBlock section={CURRY_PORK} />
          </TabSection>

          {/* Naan & Rice */}
          <TabSection id="naan" label="ナン・ライス・デザート" emoji="🫓">
            <MenuBlock section={NAAN_RICE} />
            <MenuBlock section={DESSERT_ITEMS} />
          </TabSection>

          {/* Drinks */}
          <TabSection id="drink" label="ドリンクメニュー" emoji="🥤">
            {DRINKS.map((s) => <MenuBlock key={s.title} section={s} />)}
          </TabSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
