import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image  from "next/image";
import { STORE, IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "当店について | スパイスバイツ — 平針・天白区のインド料理",
  description:
    "スパイスバイツの店舗情報。住所：愛知県名古屋市天白区中平4-208。電話：052-846-4149。営業時間・定休日・駐車場・アクセス方法など。",
};

export default function AccessPage() {
  return (
    <>
      <Header />
      <main className="bg-cream-50 min-h-screen">
        {/* Page hero */}
        <div className="bg-curry-900 pt-28 pb-14 text-center text-white">
          <p className="font-display text-xs tracking-[0.3em] text-spice-400 uppercase mb-3">
            About Us
          </p>
          <h1 className="font-jp text-3xl sm:text-4xl font-bold">当店について</h1>
          <p className="mt-3 text-white/60 text-sm">
            店舗情報・アクセス・お問い合わせ
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Restaurant image + intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={IMAGES.about}
                alt="スパイスバイツの外観・店内"
                fill
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="section-label mb-3">Store Overview</p>
              <h2 className="section-title mb-5">
                平針で食べる、
                <br />
                <span className="text-spice-500">本場インドの味</span>
              </h2>
              <p className="text-curry-700 leading-relaxed mb-4">
                {STORE.description}
              </p>
              <p className="text-curry-700 leading-relaxed">
                {STORE.description2}
              </p>
            </div>
          </div>

          {/* Info table */}
          <div className="card p-6 sm:p-8 mb-10">
            <h2 className="font-jp font-bold text-xl text-curry-900 mb-6 border-b border-cream-200 pb-4">
              店舗情報
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-cream-100">
                  {[
                    { label: "店名",     value: `${STORE.nameJp}（${STORE.name}）` },
                    { label: "電話番号", value: <a href={`tel:${STORE.phone}`} className="text-spice-600 font-semibold hover:underline text-base">{STORE.phone}</a> },
                    { label: "所在地",   value: STORE.address },
                    { label: "アクセス", value: STORE.access },
                    {
                      label: "営業時間",
                      value: (
                        <div className="space-y-1">
                          <p>【ランチ】{STORE.hours.lunch}</p>
                          <p>【ディナー】{STORE.hours.dinner}</p>
                          <p className="text-curry-500 text-xs">{STORE.hours.takeout}</p>
                        </div>
                      ),
                    },
                    { label: "定休日",   value: STORE.holiday },
                    { label: "席数",     value: STORE.seats },
                    { label: "禁煙",     value: STORE.smoking },
                    { label: "駐車場",   value: STORE.parking },
                    {
                      label: "お支払い",
                      value: (
                        <div className="flex flex-wrap gap-2">
                          {STORE.payment.map((p) => (
                            <span
                              key={p}
                              className="bg-cream-100 border border-cream-200 text-curry-700 text-xs px-3 py-1 rounded-full"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      ),
                    },
                  ].map(({ label, value }) => (
                    <tr key={label}>
                      <th className="py-4 pr-6 text-left text-xs font-semibold text-curry-500 w-24 align-top shrink-0">
                        {label}
                      </th>
                      <td className="py-4 text-curry-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <a
              href={`tel:${STORE.phone}`}
              className="btn-primary w-full justify-center text-base py-4"
            >
              📞 電話で予約・問い合わせ
            </a>
            <a
              href={STORE.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center text-base py-4"
            >
              Uber Eats で注文
            </a>
            <a
              href={STORE.demaekan}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center text-base py-4"
            >
              出前館で注文
            </a>
          </div>

          {/* Map */}
          <div className="card overflow-hidden">
            <div className="h-96">
              <iframe
                title="スパイスバイツ アクセスマップ"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(STORE.address)}&output=embed&z=16`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-curry-900 text-sm">{STORE.nameJp}</p>
                <p className="text-curry-500 text-xs mt-0.5">{STORE.address}</p>
              </div>
              <a
                href={STORE.mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-spice-600 hover:underline shrink-0 ml-4"
              >
                Google マップで開く →
              </a>
            </div>
          </div>

          {/* SNS */}
          <div className="mt-10 text-center">
            <p className="text-curry-500 text-sm mb-4">
              お店の最新情報は各SNSにて発信しております。ご来店前にフォローください。
            </p>
            <a
              href={STORE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram をフォロー @spice_bites_
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
