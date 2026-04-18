import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "ダウンロードセンター｜電気料金・脱炭素データ・テンプレート集";
const pageDescription = "CSV・JSON・iCalで電力市場データ、制度改正カレンダー、補助金一覧、契約チェックリストなどを一括ダウンロードできます。法人での実務利用は無料・自由（CC BY 4.0）です。";
const pageUrl = "https://simulator.eic-jp.org/downloads";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle, description: pageDescription, url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP", type: "website",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

const DOWNLOADS = [
  { category: "市場データ（JSON API）", items: [
    { title: "JEPXスポット価格", href: "/api/datasets/jepx", format: "JSON" },
    { title: "電気料金調整単価履歴", href: "/api/datasets/price-adjustment", format: "JSON" },
    { title: "9エリア電力需要・気温", href: "/api/datasets/demand", format: "JSON" },
    { title: "天候データ", href: "/api/datasets/weather", format: "JSON" },
    { title: "9エリア需給バランス", href: "/api/datasets/area-supply", format: "JSON" },
    { title: "最終保障供給履歴", href: "/api/datasets/last-resort", format: "JSON" },
    { title: "事業会社業績トレンド", href: "/api/datasets/business-trend", format: "JSON" },
  ]},
  { category: "脱炭素・GX（JSON API）", items: [
    { title: "電気事業者別CO2排出係数", href: "/api/datasets/emission-factor", format: "JSON" },
    { title: "非化石証書取引価格", href: "/api/datasets/non-fossil-certificate", format: "JSON" },
    { title: "コーポレートPPA市場価格", href: "/api/datasets/ppa-market-price", format: "JSON" },
  ]},
  { category: "規制・制度（JSON + iCal）", items: [
    { title: "規制改正イベント一覧", href: "/api/datasets/regulation-events", format: "JSON" },
    { title: "規制改正カレンダー", href: "/api/downloads/regulation-timeline-ical", format: "iCal (.ics)" },
    { title: "容量市場オークション結果", href: "/api/datasets/capacity-market-result", format: "JSON" },
    { title: "9エリア託送料金", href: "/api/datasets/wheeling-charge-by-area", format: "JSON" },
  ]},
  { category: "BCP・需給（JSON API）", items: [
    { title: "停電・需給ひっ迫履歴", href: "/api/datasets/blackout-history", format: "JSON" },
    { title: "デマンドレスポンスプログラム", href: "/api/datasets/demand-response-program", format: "JSON" },
  ]},
  { category: "設備・EV・DC（JSON API）", items: [
    { title: "EV充電器仕様", href: "/api/datasets/ev-charger-spec", format: "JSON" },
    { title: "BEMS製品リスト", href: "/api/datasets/bems-product-list", format: "JSON" },
    { title: "データセンター需要予測", href: "/api/datasets/datacenter-demand-forecast", format: "JSON" },
  ]},
  { category: "海外・補助金（JSON API）", items: [
    { title: "主要20カ国 産業用電気料金", href: "/api/datasets/global-electricity-price", format: "JSON" },
    { title: "中小企業向けエネルギー補助金", href: "/api/datasets/sme-subsidy", format: "JSON" },
  ]},
];

export default function DownloadsPage() {
  return (
    <>
      <ArticleJsonLd headline={pageTitle} description={pageDescription} url={pageUrl} datePublished="2026-04-18"
        breadcrumbItems={[{ name: "ホーム", url: "https://simulator.eic-jp.org/" }, { name: "ダウンロードセンター" }]} />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">ダウンロードセンター</span>
        </nav>
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">📥 データ・テンプレート ダウンロードセンター</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金・市場・脱炭素・規制データなど、法人実務で利用できるデータセットを公開しています。
            <strong>CC BY 4.0ライセンス</strong>で、出典明記の上、自由に利用可能です（商用含む）。
            APIは1時間キャッシュ・CORS対応済み。
          </p>
        </header>

        {DOWNLOADS.map((group) => (
          <section key={group.category} className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">{group.category}</h2>
            <ul className="mt-3 grid gap-2 md:grid-cols-2">
              {group.items.map((it) => (
                <li key={it.href} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <a href={it.href} className="text-sm font-semibold text-sky-700 hover:underline">
                    {it.title} <span className="ml-2 rounded bg-sky-100 px-2 py-0.5 text-xs text-sky-800">{it.format}</span>
                  </a>
                  <p className="mt-1 text-xs text-slate-500 break-all">{it.href}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">📜 利用条件</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>ライセンス: <strong>CC BY 4.0</strong>（出典明記で改変・再配布・商用利用OK）</li>
            <li>出典表記例: 「出典: 一般社団法人エネルギー情報センター（https://simulator.eic-jp.org）」</li>
            <li>API: CORSオープン、1時間キャッシュ、`stale-while-revalidate=86400`</li>
            <li>iCal: GoogleカレンダーやOutlookに「URLからカレンダーを追加」で購読可能</li>
            <li>データの最新性は各APIレスポンスの`updatedAt`フィールドで確認可能</li>
          </ul>
        </section>

        <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">🛠 開発者向け</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            APIはすべて`/api/datasets/*`配下に集約されています。レスポンスは`{`{ source, license, data }`}`構造。
            利用例（curl）:
          </p>
          <pre className="mt-3 overflow-x-auto rounded bg-slate-900 p-3 text-xs text-emerald-200">
{`curl https://simulator.eic-jp.org/api/datasets/emission-factor | jq '.data.byArea'`}
          </pre>
        </section>
      </main>
    </>
  );
}
