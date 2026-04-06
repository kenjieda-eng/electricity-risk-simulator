import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import {
  OIL_SCENARIO_BASE_PATH,
  OIL_SCENARIO_SERIES,
  getOilScenarioPagePath,
} from "../../../lib/oilScenarioAnalysis";
import OilScenarioChartCard from "./_components/OilScenarioCharts";
import OilScenarioLayout from "./_components/OilScenarioLayout";

const pageTitle = "【2026年最新】イラン情勢で法人ガソリン代・物流コストはどうなる？シナリオ別分析";
const pageDescription =
  "2026年のイラン情勢がガソリン・軽油価格と法人の物流コスト・社用車費用・出張旅費に与える影響を3シナリオで分析。補助金170円抑制の持続性も検証。";
const canonicalUrl = `https://simulator.eic-jp.org${OIL_SCENARIO_BASE_PATH}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function OilScenarioAnalysisTopPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    author: { "@type": "Organization", name: "一般社団法人エネルギー情報センター" },
    description: pageDescription,
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <OilScenarioLayout
      slug="index"
      lead="ガソリン200円超えの現実味、補助金170円抑制の持続性、配送単価・社用車コスト・出張旅費への影響を、3つのシナリオで比較して確認します。"
    >
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">電気代の影響も合わせて確認</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          イラン情勢は電気代にも大きな影響を与えています。法人の光熱費トータルで把握したい方は
          <Link href="/special/emergency-scenario-analysis" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
            電気代シナリオ分析
          </Link>
          も併せてご覧ください。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">この特集の全体構成</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700">
          {OIL_SCENARIO_SERIES.map((item) => (
            <li key={item.slug}>
              {item.slug === "index" ? (
                <span className="font-semibold text-slate-900">総論（このページ） — ガソリン価格シナリオと法人コスト概要</span>
              ) : (
                <Link href={getOilScenarioPagePath(item.slug)} className="underline-offset-2 hover:underline">
                  {item.label} — {item.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ガソリン価格 3シナリオの比較</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2026年3月16日、レギュラーガソリンの全国平均は190.8円と過去最高を記録しました。政府は3月19日から緊急的激変緩和措置を再開し、
          170円程度への抑制を目指していますが、イラン情勢が長期化すれば補助金の財源が枯渇するリスクがあります。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-semibold text-emerald-800">S1：短期安定化</p>
            <p className="mt-1 text-2xl font-bold text-emerald-900">165〜170円</p>
            <p className="mt-1 text-xs text-emerald-800">補助金あり／年間平均</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">S2：夏まで長期化</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">170〜180円</p>
            <p className="mt-1 text-xs text-amber-800">補助縮小の可能性</p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-semibold text-rose-800">S3：秋以降も継続</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">190〜220円</p>
            <p className="mt-1 text-xs text-rose-800">補助金枯渇リスク</p>
          </article>
        </div>
      </section>

      <OilScenarioChartCard
        kind="gas-scenarios"
        title="レギュラーガソリン店頭価格の推移予測"
        description="S1/S2/S3に加え、補助金なしの場合も併記しています。200円ラインを超える期間の長さが経営コストに直結します。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人が受ける3大コスト影響</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Link href={`${OIL_SCENARIO_BASE_PATH}/logistics-cost`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50">
            <p className="text-base font-semibold text-slate-900">配送・物流コスト</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">燃料サーチャージ率の急騰。配送1件あたり+15〜40円の増加も。</p>
          </Link>
          <Link href={`${OIL_SCENARIO_BASE_PATH}/fleet-cost`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50">
            <p className="text-base font-semibold text-slate-900">社用車・営業車</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">10台保有で年間+12〜36万円。EV切替の損益分岐が変わる。</p>
          </Link>
          <Link href={`${OIL_SCENARIO_BASE_PATH}/travel-and-commute`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50">
            <p className="text-base font-semibold text-slate-900">出張旅費・通勤費</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">マイカー通勤のキロ単価見直し。旅費規程の改定が必要に。</p>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">補助金がなければ200円超えは現実</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          現在の原油価格（WTI 102ドル）が続く場合、補助金なしのレギュラーガソリン価格は概算で210〜220円になります。政府は支給単価を
          過去最高の48.1円/Lに引き上げて対応していますが、財源約1兆800億円はシナリオ3では年内に枯渇する可能性があります。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          補助金の持続性の詳細分析は
          <Link href={`${OIL_SCENARIO_BASE_PATH}/subsidy-outlook`} className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
            「補助金の行方」ページ
          </Link>
          をご覧ください。
        </p>
        <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
          <p className="font-semibold">「暫定税率廃止」の効果は帳消し</p>
          <p className="mt-1">
            2025年12月に廃止されたガソリン暫定税率（25.1円/L）による値下げ効果は、原油急騰によって完全に打ち消されています。軽油の暫定税率
            （17.1円/L）も4月1日に廃止されましたが、既に同額の補助金が出ていたため実質的な追加効果はゼロです。
          </p>
        </div>
      </section>

      <RelatedLinks
        heading="下層ページから詳細を見る"
        intro="各テーマで表・グラフ・FAQを含めて、数値ベースで確認できます。"
        links={[
          {
            href: `${OIL_SCENARIO_BASE_PATH}/price-mechanism`,
            title: "価格の仕組み",
            description: "原油からガソリン価格が決まるまでの構造とタイムラグを図解。",
          },
          {
            href: `${OIL_SCENARIO_BASE_PATH}/subsidy-outlook`,
            title: "補助金の行方",
            description: "170円抑制補助金の持続性と枯渇リスクをシナリオ比較。",
          },
          {
            href: `${OIL_SCENARIO_BASE_PATH}/diesel-and-heavy-oil`,
            title: "軽油・重油への影響",
            description: "暫定税率廃止の実質効果と物流業種への波及を確認。",
          },
          {
            href: `${OIL_SCENARIO_BASE_PATH}/action-roadmap`,
            title: "対策ロードマップ",
            description: "短期・中期・長期で進める実務対策を一覧で整理。",
          },
        ]}
      />

      <ContentCta
        heading="次に確認するページ"
        description="補助金の持続性と物流コストを先に把握すると、予算・契約見直しの優先順位が決めやすくなります。"
        links={[
          { href: `${OIL_SCENARIO_BASE_PATH}/subsidy-outlook`, label: "補助金の行方を確認する" },
          { href: `${OIL_SCENARIO_BASE_PATH}/logistics-cost`, label: "配送・物流コストを見る" },
          { href: "/special/emergency-scenario-analysis", label: "電気代シナリオ分析も見る" },
        ]}
      />
    </OilScenarioLayout>
  );
}
