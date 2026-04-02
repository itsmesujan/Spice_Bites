import { STORE } from "@/lib/data";

export default function StoreInfo() {
  return (
    <section id="store-info" className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Details</p>
          <h2 className="section-title">店舗情報・アクセス</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info table – 2 cols on lg */}
          <div className="lg:col-span-2">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-cream-200">
                {[
                  { label: "店名",         value: `${STORE.nameJp}（${STORE.name}）` },
                  { label: "電話番号",     value: <a href={`tel:${STORE.phone}`} className="text-spice-600 font-semibold hover:underline">{STORE.phone}</a> },
                  { label: "所在地",       value: STORE.address },
                  { label: "アクセス",     value: STORE.access },
                  { label: "ランチ",       value: STORE.hours.lunch },
                  { label: "ディナー",     value: STORE.hours.dinner },
                  { label: "テイクアウト", value: STORE.hours.takeout },
                  { label: "定休日",       value: STORE.holiday },
                  { label: "席数",         value: STORE.seats },
                  { label: "禁煙",         value: STORE.smoking },
                  { label: "駐車場",       value: STORE.parking },
                  { label: "お支払い",
                    value: (
                      <div className="flex flex-wrap gap-1.5">
                        {STORE.payment.map((p) => (
                          <span
                            key={p}
                            className="inline-block bg-cream-200 text-curry-700 text-xs px-2 py-0.5 rounded-full"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    ),
                  },
                ].map(({ label, value }) => (
                  <tr key={label}>
                    <th className="py-3 pr-4 text-left text-xs font-semibold text-curry-500 w-24 shrink-0 align-top">
                      {label}
                    </th>
                    <td className="py-3 text-curry-800">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Delivery buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <p className="text-xs font-semibold text-curry-500 uppercase tracking-wider">
                デリバリー注文
              </p>
              <a
                href={STORE.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Uber Eats で注文する
              </a>
              <a
                href={STORE.demaekan}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
              >
                出前館で注文する
              </a>
            </div>
          </div>

          {/* Map – 3 cols on lg */}
          <div className="lg:col-span-3">
            <div className="w-full h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-md border border-cream-200 bg-cream-200">
              <iframe
                title="スパイスバイツ 地図"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(STORE.address)}&output=embed&z=16`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 text-center">
              <a
                href={STORE.mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-spice-600 hover:text-spice-700 underline transition-colors"
              >
                Google マップで大きく見る →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
