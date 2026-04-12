import type { Metadata } from "next";
import Link from "next/link";
import { YEARLY_ARCHIVE_ITEMS } from "../_lib/hub-data";

const pageTitle = "法人電気料金振り返り 年次アーカイブ｜2019年〜2025年の推移一覧";
const pageDescription =
  "2019年から2025年までの法人向け電気料金の推移を、特別高圧・高圧・低圧電力・低圧電灯の4区分で整理した年次アーカイブ一覧です。";
const canonicalUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/archive";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人電気料金振り返り 年次アーカイブ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function BusinessElectricityRetrospectiveArchivePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          法人電気料金振り返り｜年次アーカイブ
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2019年から2025年までの法人向け電気料金の推移を、特別高圧・高圧・低圧電力・低圧電灯の4区分で年別に整理したアーカイブ一覧です。
          各ページでは、対象年の推移や背景要因を確認できます。
        </p>
      </header>

      <section className="mt-8 space-y-4">
        {YEARLY_ARCHIVE_ITEMS.map((yearlyItem) => {
          const yearSubtitles: Record<number, string> = {
            2019: "コロナ前の安定期 ― 基準水準の確認に",
            2020: "コロナ禍で需要減退 ― 異常値としての位置づけ",
            2021: "回復と転換 ― 年末からの上昇開始",
            2022: "歴史的急騰 ― ウクライナショックの直撃",
            2023: "補助で見かけ沈静 ― 実力値は高止まり",
            2024: "制度コスト増 ― 容量拠出金・賦課金の新常態",
            2025: "高止まり定着 ― 補助復活と地政学リスク",
          };
          return (
          <section key={yearlyItem.year} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-slate-900">{yearlyItem.year}年</h2>
            {yearSubtitles[yearlyItem.year] && (
              <p className="mt-1 text-sm text-slate-500">{yearSubtitles[yearlyItem.year]}</p>
            )}
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {yearlyItem.links.map((linkItem) => (
                <Link
                  key={linkItem.href}
                  href={linkItem.href}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  {linkItem.label}
                </Link>
              ))}
            </div>
          </section>
          );
        })}
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <Link
          href="/business-electricity-retrospective"
          className="inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          法人電気料金振り返りトップへ戻る
        </Link>
      </section>
    </main>
  );
}
