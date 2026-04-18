import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "データ鮮度ダッシュボード｜更新頻度・最終確認日一覧";
const pageDescription =
  "法人電気料金シミュレーターの各カテゴリ・データセットの更新頻度と最終確認日を一覧で公開しています。補助金・税務・制度改正・相場・市場データ・事例・月次振り返りなど、鮮度管理の対象を明示します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://simulator.eic-jp.org/data-freshness" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/data-freshness",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

type FreshnessEntry = {
  area: string;
  categoryLink?: { href: string; label: string };
  frequency: string;
  lastVerifiedAt: string;
  nextPlannedUpdate: string;
  note: string;
};

const entries: FreshnessEntry[] = [
  {
    area: "cat18 補助金・助成金",
    categoryLink: { href: "/articles/subsidies", label: "/articles/subsidies" },
    frequency: "月次",
    lastVerifiedAt: "2026-04-18",
    nextPlannedUpdate: "2026-05月初",
    note: "最終確認日・公募期限を全記事で追跡。期限切れはアーカイブ表示へ。",
  },
  {
    area: "cat27 経理・税務",
    categoryLink: { href: "/articles/accounting-tax", label: "/articles/accounting-tax" },
    frequency: "年次＋随時",
    lastVerifiedAt: "2026-04-18",
    nextPlannedUpdate: "2026-06月（2026年度税制確認）",
    note: "2026年度税制・インボイス・電子帳簿保存法の運用更新を反映。",
  },
  {
    area: "cat30 制度改正タイムライン",
    categoryLink: { href: "/articles/regulation-timeline", label: "/articles/regulation-timeline" },
    frequency: "四半期",
    lastVerifiedAt: "2026-04-18",
    nextPlannedUpdate: "2026-07月初",
    note: "インタラクティブ年表に「今後12〜24か月の改正予定」を反映し続けます。",
  },
  {
    area: "cat17 相場・削減効果",
    categoryLink: { href: "/articles/benchmarks", label: "/articles/benchmarks" },
    frequency: "四半期",
    lastVerifiedAt: "2026-04-18",
    nextPlannedUpdate: "2026-07月初",
    note: "業種×規模相場マトリクスを四半期ベースで更新。",
  },
  {
    area: "cat21 データで見る電力市場（30分値）",
    categoryLink: { href: "/articles/market-data", label: "/articles/market-data" },
    frequency: "月次",
    lastVerifiedAt: "2026-04-18",
    nextPlannedUpdate: "2026-05月初",
    note: "JEPX・需要・気象データを月次で更新。JSON/CSVで配布（CC BY 4.0）。",
  },
  {
    area: "cat14 事例・削減実績",
    categoryLink: { href: "/articles/case-studies", label: "/articles/case-studies" },
    frequency: "月1本追加",
    lastVerifiedAt: "2026-04-18",
    nextPlannedUpdate: "月1件ペースで追加",
    note: "削減額・期間・業種・規模を構造化フォーマットで記録。",
  },
  {
    area: "cat9 月次振り返り",
    categoryLink: { href: "/articles/monthly-review", label: "/articles/monthly-review" },
    frequency: "月次",
    lastVerifiedAt: "2026-04-18",
    nextPlannedUpdate: "翌月初",
    note: "月次振り返りシリーズ（/business-electricity-retrospective）を継続更新。",
  },
  {
    area: "RAG インデックス（AI コンシェルジュ用）",
    categoryLink: { href: "/api/rag-index", label: "/api/rag-index" },
    frequency: "月次",
    lastVerifiedAt: "2026-04-18",
    nextPlannedUpdate: "自動再生成（build 時）",
    note: "全313記事+35カテゴリメタを JSON で配布。外部 RAG ストアに投入可。",
  },
  {
    area: "市場データ API（JSON）",
    categoryLink: { href: "/api/market-data", label: "/api/market-data" },
    frequency: "月次",
    lastVerifiedAt: "2026-04-18",
    nextPlannedUpdate: "build 時自動反映",
    note: "JEPX・需要・気象・分位別価格を統合した JSON を配布（CC BY 4.0）。",
  },
  {
    area: "市場データ API（CSV）",
    categoryLink: { href: "/api/market-data/csv", label: "/api/market-data/csv" },
    frequency: "月次",
    lastVerifiedAt: "2026-04-18",
    nextPlannedUpdate: "build 時自動反映",
    note: "Excel/Pandas/R で直接取り込める形式で同データを配布。",
  },
];

export default function DataFreshnessPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "データ鮮度ダッシュボード" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">データ鮮度ダッシュボード</span>
        </nav>

        <header className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">データ鮮度ダッシュボード</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            本サイトの主要カテゴリ・API・データセットについて、更新頻度と最終確認日を公開しています。
            補助金・税務・制度改正・市場データなど鮮度が重要な領域を明示し、情報の信頼性を保つための運用基準を開示します。
          </p>
        </header>

        <section className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">対象領域一覧</h2>
          <table className="mt-4 min-w-[900px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">対象</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">更新頻度</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">最終確認日</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">次回予定</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">備考</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.area} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                    <div>{e.area}</div>
                    {e.categoryLink ? (
                      <Link href={e.categoryLink.href} className="mt-1 inline-block text-xs font-normal text-sky-700 underline-offset-2 hover:underline">
                        {e.categoryLink.label}
                      </Link>
                    ) : null}
                  </th>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">{e.frequency}</td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">{e.lastVerifiedAt}</td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">{e.nextPlannedUpdate}</td>
                  <td className="border border-slate-200 px-3 py-2">{e.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">ライセンスと出典</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-slate-700">
            <li>データは <strong>CC BY 4.0</strong> に基づき、出典明記の上で自由に利用できます（商用含む）。</li>
            <li>出典表記例: 「出典: 一般社団法人エネルギー情報センター（https://simulator.eic-jp.org）」</li>
            <li>記事内容の最終確認日は各記事冒頭またはカテゴリバナーで確認できます。</li>
            <li>制度・税務・補助金情報は公式発表を最優先とし、本サイトの記載はあくまで整理情報です。</li>
          </ul>
        </section>
      </main>
    </>
  );
}
