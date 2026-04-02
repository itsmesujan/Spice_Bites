const FEATURES = [
  {
    icon: "🌶️",
    label: "Authentic Spices",
    title: "本格スパイスの深み",
    description:
      "インドから直輸入したスパイスを絶妙なバランスでブレンド。一皿ごとに異なる香りと深みが広がります。辛さは0（甘口）〜5（とても辛い）の6段階からお選びいただけます。",
  },
  {
    icon: "🍛",
    label: "Curry Comparison",
    title: "食べ比べで楽しむ",
    description:
      "チキン・マトン・魚介・野菜・豚肉など20種類以上のカレーをラインナップ。複数カレーを少しずつ楽しめる食べ比べセットで、お気に入りの一皿を見つけてください。",
  },
  {
    icon: "🛵",
    label: "Delivery & Takeout",
    title: "テイクアウト＆デリバリー",
    description:
      "ご自宅や職場でも本格インド料理を。Uber Eats・出前館でのデリバリーに加え、店頭テイクアウトも22:00まで受付中。忙しい日でも本物の味をどうぞ。",
  },
];

export default function SignatureFeatures() {
  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Our Commitment</p>
          <h2 className="section-title">スパイスバイツの3つのこだわり</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-cream-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Background number */}
              <span
                className="absolute top-0 right-4 font-display text-8xl font-bold text-spice-50 select-none pointer-events-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="mb-5 text-4xl" aria-hidden="true">{feature.icon}</div>

              {/* Label */}
              <p className="font-display text-xs tracking-[0.2em] text-spice-500 uppercase mb-2">
                {feature.label}
              </p>

              {/* Title */}
              <h3 className="font-jp text-xl font-bold text-curry-900 mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-sm text-curry-600 leading-relaxed">{feature.description}</p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-spice-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
