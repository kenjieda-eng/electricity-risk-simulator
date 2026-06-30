import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import ConsultCta from "../../components/ConsultCta";
import { ScenarioSimulator } from "../../components/calculator/ScenarioSimulator";

const pageTitle =
  "電気代シナリオ別シミュレーション｜法人の将来電気代を4シナリオで試算";
const pageDescription =
  "業種・規模・契約区分・電力エリアを選ぶだけで、標準（現状継続）・上振れ（原油高・円安・夏ひっ迫）・構造高止まり・緩和の4シナリオで法人の推定年間電気代を即時比較。対標準の上振れ率・差額・想定単価の内訳まで表示します。各シナリオは公開情報に基づく目安で、特定の将来を予測するものではありません。再エネ賦課金は2026年度の確定値を基準とし、将来の上昇は『想定』と明示。中立的立場の判断材料で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/electricity-scenario-simulation";
const publishedAt = "2026-06-10";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 シナリオ シミュレーション",
    "法人 電気代 将来 試算",
    "電気料金 上振れ シナリオ",
    "原油高 円安 電気代",
    "再エネ賦課金 想定 電気代",
    "電気代 高騰 リスク 法人",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

// 構造化データ: WebApplication（計算ツール）。著者・運営者を明示。
const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "電気代シナリオ別シミュレーション",
  url: pageUrl,
  description:
    "法人の電気代を標準・上振れ・構造高止まり・緩和の4シナリオで試算する中立的なシミュレーター。",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: "ja",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
  datePublished: publishedAt,
  author: {
    "@type": "Person",
    name: "江田健二",
    url: "https://simulator.eic-jp.org/kenji-eda",
  },
  publisher: {
    "@type": "Organization",
    name: "一般社団法人エネルギー情報センター",
    url: "https://eic-jp.org",
  },
};

export default function ElectricityScenarioSimulationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電気代シナリオ別シミュレーション", url: pageUrl },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">電気代シナリオ別シミュレーション</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            電気代シナリオ別シミュレーション
          </h1>
          <p className="mt-2 text-sm font-semibold text-sky-800">
            法人の将来電気代を4シナリオで試算
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種・規模・契約区分・電力エリアを選ぶだけで、自社の電気代が「標準（現状継続）」「上振れ（原油高・円安・夏の需給ひっ迫）」「構造高止まり（補助終了・賦課金上昇想定）」「緩和（原発再稼働進行・原油安）」の4シナリオでどう動くかを即時に比較できます。静的な有事シナリオ分析を、自社の条件で“自分ごと”として試算できるツールです。
          </p>
          <ul className="mt-4 grid gap-1 text-xs leading-6 text-slate-700 sm:text-sm">
            <li>・4シナリオの推定年間電気代を棒グラフ・比較表で横並び表示</li>
            <li>・標準シナリオに対する上振れ率・差額・想定総単価の内訳</li>
            <li>・各シナリオの変動幅（Δ）の前提と「想定」注記を明示</li>
            <li>・標準シナリオは業種別電気代計算機（D-1）の試算と完全一致</li>
          </ul>
          <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-900">
            <strong>※ 各シナリオは「起きた場合」の試算であり、予測ではありません。</strong>変動幅は公開情報（資源エネルギー庁・OCCTO・各社の燃料費調整実績・各種告示）に基づく目安レンジです。再エネ賦課金は2026年度の確定値を基準とし、将来の上昇はあくまで「想定」です。本シミュレーターは中立的立場で判断材料を提供するもので、特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt={publishedAt} />
        </header>

        <section className="mt-6">
          <ScenarioSimulator />
        </section>

        {/* 試算結果直後の相談CTA */}
        <div className="mt-6">
          <ConsultCta
            from="scenario"
            heading="試算結果について、専門家に無料で相談しませんか？"
          />
        </div>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">関連コンテンツ</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline-offset-2 hover:underline">
                → 業種別電気代計算機（現状の年間電気代・削減余地3案を試算）
              </Link>
            </li>
            <li>
              <Link href="/special/emergency-scenario-analysis" className="text-sky-700 underline-offset-2 hover:underline">
                → 有事シナリオ分析（原油・補助金終了・再エネ賦課金・円安の四重苦と3シナリオ）
              </Link>
            </li>
            <li>
              <Link href="/simulate" className="text-sky-700 underline-offset-2 hover:underline">
                → 料金上昇リスク シミュレーター（固定／市場連動の上振れを30秒診断）
              </Link>
            </li>
            <li>
              <Link href="/articles/risk-scenarios" className="text-sky-700 underline-offset-2 hover:underline">
                → リスクシナリオ別に知る（カテゴリハブ）
              </Link>
            </li>
          </ul>
        </section>

        {/* ページ下部の相談CTA（2つ目のタッチポイント） */}
        <div className="mt-8">
          <ConsultCta
            from="scenario"
            heading="試算結果について、専門家に無料で相談しませんか？"
          />
        </div>

        <footer className="mt-8 rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs leading-6 text-slate-600">
            <strong>※ 本試算はあくまで目安です。</strong>各シナリオは公開情報に基づく目安レンジで、特定の将来を予測・断定するものではありません。本シミュレーターの結果は中立的な判断材料であり、特定の電力会社・契約形態への勧誘や推奨を行うものではありません。実際の契約・更新・切替判断は、相見積の取得および専門家への相談をおすすめします。
          </p>
          <p className="mt-2 text-xs text-slate-500">
            出典: 各電力会社公式料金プラン・各社統合報告書・資源エネルギー庁・OCCTO・電力ガス取引監視等委員会の公表データ（2026年6月時点）。再エネ賦課金は経済産業省告示（2026年度確定値）を基準。本シミュレーターは一般社団法人エネルギー情報センターが運営します。
          </p>
        </footer>
      </main>
    </>
  );
}
