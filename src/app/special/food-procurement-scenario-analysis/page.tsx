import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import {
  FOOD_SCENARIO_BASE_PATH,
  FOOD_SCENARIO_SERIES,
  getFoodScenarioPagePath,
} from "../../../lib/foodProcurementScenarioAnalysis";
import FoodScenarioChartCard from "./_components/FoodScenarioCharts";
import FoodScenarioLayout from "./_components/FoodScenarioLayout";

const pageTitle = "【2026年最新】食料品仕入コスト上昇シナリオ｜飲食・食品製造業の調達リスク分析";
const pageDescription =
  "2026年の食料品仕入コスト上昇を3シナリオで分析。小麦・食用油・畜産・水産・青果の価格動向、飲食業・食品製造業の原価率悪化リスク、値上げタイムラインを網羅。";
const canonicalUrl = `https://simulator.eic-jp.org${FOOD_SCENARIO_BASE_PATH}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電気料金動向", "電気料金シナリオ", "リスク分析"],
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

export default function FoodScenarioTopPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】食料品仕入コスト上昇シナリオ",
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    author: { "@type": "Organization", name: "一般社団法人エネルギー情報センター" },
    description: pageDescription,
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <FoodScenarioLayout
      slug="index"
      lead="原材料高99.9%、包装資材81.3%、人件費66.0%などの複合要因を前提に、飲食業・食品製造業の仕入コスト上昇リスクを3シナリオで整理します。"
    >
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">2026年後半に「値上げ再燃」リスク</h2>
        <p className="mt-3 text-sm leading-7 text-red-900 sm:text-base">
          4月までは前年比4割減の小康状態ですが、イラン情勢による原油高・ナフサ不足が包装資材と物流費を押し上げ、年後半に月3,000品目超の値上げラッシュが
          再発する可能性があります。輸入小麦の政府売渡価格も4月1日に引き上げ済みです。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">このサイトの全体構成</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700">
          {FOOD_SCENARIO_SERIES.map((item) => (
            <li key={item.slug}>
              {item.slug === "index" ? (
                <span className="font-semibold text-slate-900">総論（このページ）— 仕入コスト危機の全体像</span>
              ) : (
                <Link href={getFoodScenarioPagePath(item.slug)} className="underline-offset-2 hover:underline">
                  {item.label} — {item.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">仕入コスト 3シナリオの比較</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          2026年前半は値上げが一服していましたが、イラン情勢の緊迫化で年後半のリスクが急激に高まっています。食品原材料そのものの値上げに加えて、
          包装資材・物流費・エネルギー・人件費の同時上昇が、仕入コストを複合的に押し上げます。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-semibold text-emerald-800">S1：短期安定化</p>
            <p className="mt-1 text-2xl font-bold text-emerald-900">+3〜5%</p>
            <p className="mt-1 text-xs text-emerald-800">原材料高一服・小康</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">S2：夏まで長期化</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">+8〜15%</p>
            <p className="mt-1 text-xs text-amber-800">包材＋物流＋食材複合</p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-semibold text-rose-800">S3：秋以降も継続</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">+15〜25%</p>
            <p className="mt-1 text-xs text-rose-800">値上げラッシュ再燃</p>
          </article>
        </div>
      </section>

      <FoodScenarioChartCard
        kind="overview-main"
        title="食品カテゴリ別の値上げ率推移予測（S2想定）"
        description="食用油脂、畜産・水産、穀物・小麦、調味料、青果・乳製品の月次変化を比較しています。"
      />

      <FoodScenarioChartCard
        kind="overview-factors"
        title="値上げの5重苦構造"
        description="2026年の食品値上げは単一要因ではなく、原材料・包装・人件費・物流・エネルギーが同時上昇しています。"
        heightClassName="h-[260px] sm:h-[300px]"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人が受ける3大コスト影響</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Link
            href={`${FOOD_SCENARIO_BASE_PATH}/restaurant-impact`}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50"
          >
            <p className="text-base font-semibold text-slate-900">飲食業の原価率悪化</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">原価率30%の店がS2で33〜35%に。利益率が半減するリスク。</p>
          </Link>
          <Link
            href={`${FOOD_SCENARIO_BASE_PATH}/food-manufacturer`}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50"
          >
            <p className="text-base font-semibold text-slate-900">食品製造の仕入コスト</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">原材料＋包装＋エネルギーの3重コスト増。年間数千万円規模。</p>
          </Link>
          <Link
            href={`${FOOD_SCENARIO_BASE_PATH}/action-roadmap`}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50"
          >
            <p className="text-base font-semibold text-slate-900">価格転嫁の壁</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">消費者の値上げ抵抗感も踏まえたメニュー設計の再構築が必要。</p>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">値上げタイムライン — 2026年の食品コスト危機</h2>
        <div className="mt-4 space-y-3">
          <article className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">1月</p>
            <p className="mt-1 font-semibold text-slate-900">食用油・ドレッシング類値上げ</p>
            <p className="mt-1 text-sm text-slate-700">日清オイリオ、J-オイルミルズなど。油脂製品を中心に値上げ。</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">2月</p>
            <p className="mt-1 font-semibold text-slate-900">酒類・飲料・加工食品 計674品目</p>
            <p className="mt-1 text-sm text-slate-700">料理酒、ジュース、パック米飯、おつまみ製品が中心。</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">3月</p>
            <p className="mt-1 font-semibold text-slate-900">加工食品・酒類 計684品目</p>
            <p className="mt-1 text-sm text-slate-700">冷凍食品、パスタ調理品、緑茶PET飲料などで改定。</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">4月</p>
            <p className="mt-1 font-semibold text-slate-900">月間2,798品目 — 年度初め値上げラッシュ</p>
            <p className="mt-1 text-sm text-slate-700">
              調味料1,514品目、加工食品609品目、酒類369品目。輸入小麦の政府売渡価格引き上げも反映。
            </p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">5〜7月（予測）</p>
            <p className="mt-1 font-semibold text-amber-900">小康期 → 包装資材コスト転嫁が徐々に拡大</p>
            <p className="mt-1 text-sm text-amber-900">ナフサ不足による包材値上げが食品価格に波及。</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">8〜10月（予測）</p>
            <p className="mt-1 font-semibold text-amber-900">年後半の値上げ再燃リスク</p>
            <p className="mt-1 text-sm text-amber-900">原油高＋円安＋包材高の複合で月3,000品目超の可能性。</p>
          </article>
        </div>
      </section>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">エネルギー・物流・包装資材との連動</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          食料品の仕入コストは、ガス代（調理・加工）、電気代（冷凍冷蔵）、物流費（配送）、包装資材（容器・フィルム）と密接に連動しています。
          トータルのコストインパクトを把握するには、以下の特集も合わせてご確認ください。
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link href="/special/gas-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
            法人ガス代シナリオ分析
          </Link>
          <Link href="/special/oil-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
            原油高・物流コストシナリオ分析
          </Link>
          <Link
            href="/special/materials-packaging-scenario-analysis"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            原材料・包装資材シナリオ分析
          </Link>
        </div>
      </section>

      <RelatedLinks
        heading="下層ページから詳細を見る"
        links={[
          {
            href: `${FOOD_SCENARIO_BASE_PATH}/cost-structure`,
            title: "原価構造",
            description: "飲食業・食品製造業の薄利構造と5要因の重なりを確認。",
          },
          {
            href: `${FOOD_SCENARIO_BASE_PATH}/grain-and-oil`,
            title: "穀物・油脂",
            description: "小麦・食用油・コメ・砂糖の動向を確認。",
          },
          {
            href: `${FOOD_SCENARIO_BASE_PATH}/restaurant-impact`,
            title: "飲食業",
            description: "業態別の原価率悪化と利益への影響を確認。",
          },
          {
            href: `${FOOD_SCENARIO_BASE_PATH}/action-roadmap`,
            title: "対策ロードマップ",
            description: "短期・中期・長期で何を優先するかを整理。",
          },
        ]}
      />

      <ContentCta
        heading="次に確認するページ"
        description="まず原価構造で5重苦の全体像を把握し、次に業態別の影響と対策ロードマップを確認すると、意思決定につなげやすくなります。"
        links={[
          { href: `${FOOD_SCENARIO_BASE_PATH}/cost-structure`, label: "原価構造を確認する" },
          { href: `${FOOD_SCENARIO_BASE_PATH}/restaurant-impact`, label: "飲食業の影響を確認する" },
          { href: `${FOOD_SCENARIO_BASE_PATH}/action-roadmap`, label: "対策ロードマップを見る" },
        ]}
      />
    </FoodScenarioLayout>
  );
}
