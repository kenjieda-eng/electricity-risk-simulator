import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import {
  MATERIALS_SCENARIO_BASE_PATH,
  MATERIALS_SCENARIO_SERIES,
  getMaterialsScenarioPagePath,
} from "../../../lib/materialsPackagingScenarioAnalysis";
import MaterialsScenarioChartCard from "./_components/MaterialsScenarioCharts";
import MaterialsScenarioLayout from "./_components/MaterialsScenarioLayout";

const pageTitle = "【2026年最新】原材料・包装資材の有事シナリオ分析｜ナフサ不足・エチレン減産の影響";
const pageDescription =
  "ナフサ不足・エチレン減産が原材料・包装資材に与える影響を3シナリオで分析。塩ビ樹脂値上げ、プラスチック・段ボール・化学品・非鉄金属の価格高騰と法人調達コストへの影響を整理。";
const canonicalUrl = `https://simulator.eic-jp.org${MATERIALS_SCENARIO_BASE_PATH}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電気料金シナリオ", "リスク分析"],
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

export default function MaterialsScenarioTopPage() {
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
    <MaterialsScenarioLayout
      slug="index"
      lead="ナフサ不足とエチレン減産の影響を起点に、プラスチック樹脂・包装資材・化学品・非鉄金属への波及を3シナリオで比較し、法人の調達コスト上昇リスクを整理します。"
    >
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">「静かな危機」が進行中</h2>
        <p className="mt-3 text-sm leading-7 text-red-900 sm:text-base">
          ガソリン高騰は即座に見えますが、ナフサ不足による原材料・包装資材への影響は1〜3カ月のタイムラグを経て現れます。2026年夏以降、
          プラスチック包装・容器・フィルム・化学品の値上げが本格化する見通しです。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">この特集の全体構成</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700">
          {MATERIALS_SCENARIO_SERIES.map((item) => (
            <li key={item.slug}>
              {item.slug === "index" ? (
                <span className="font-semibold text-slate-900">総論（このページ）— 原材料コスト危機の全体像</span>
              ) : (
                <Link href={getMaterialsScenarioPagePath(item.slug)} className="underline-offset-2 hover:underline">
                  {item.label} — {item.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">値上げタイムライン — 2026年の原材料コスト危機</h2>
        <div className="mt-4 space-y-3">
          <article className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">2月28日</p>
            <p className="mt-1 font-semibold text-slate-900">イラン攻撃・ホルムズ海峡緊迫化</p>
            <p className="mt-1 text-sm text-slate-700">原油WTI急騰、ナフサ調達リスクが顕在化。</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">3月上旬</p>
            <p className="mt-1 font-semibold text-slate-900">三菱ケミカル・三井化学がエチレン減産開始</p>
            <p className="mt-1 text-sm text-slate-700">国内12基中6基が減産。エチレン稼働率75.7%に低下。</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">3月16日</p>
            <p className="mt-1 font-semibold text-slate-900">出光興産もエチレン減産に参加</p>
            <p className="mt-1 text-sm text-slate-700">千葉・徳山の2事業所。国内エチレン拠点の半数が減産状態に。</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">3月19日</p>
            <p className="mt-1 font-semibold text-slate-900">信越化学・カネカが塩ビ樹脂値上げ発表</p>
            <p className="mt-1 text-sm text-slate-700">4月1日納入分から30〜35円/kg以上（約2割）の値上げ。</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-500">3月26日</p>
            <p className="mt-1 font-semibold text-slate-900">フクビ化学工業が全製品の供給制限を発表</p>
            <p className="mt-1 text-sm text-slate-700">建材メーカーがナフサ不足を理由に供給制限。</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">4〜5月（予測）</p>
            <p className="mt-1 font-semibold text-amber-900">汎用樹脂（PE/PP）の供給調整が本格化</p>
            <p className="mt-1 text-sm text-amber-900">食品包装・容器への影響が顕在化。</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">6〜8月（予測）</p>
            <p className="mt-1 font-semibold text-amber-900">包装資材・日用品への価格転嫁が拡大</p>
            <p className="mt-1 text-sm text-amber-900">EC梱包資材、食品トレー、フィルムの値上げ波。</p>
          </article>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">原材料コスト 3シナリオの比較</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-semibold text-emerald-800">S1：短期安定化</p>
            <p className="mt-1 text-2xl font-bold text-emerald-900">+10〜15%</p>
            <p className="mt-1 text-xs text-emerald-800">ナフサ供給正常化</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">S2：夏まで長期化</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">+20〜35%</p>
            <p className="mt-1 text-xs text-amber-800">樹脂10〜20%上昇</p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-semibold text-rose-800">S3：秋以降も継続</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">+35〜60%</p>
            <p className="mt-1 text-xs text-rose-800">供給制限＋価格急騰</p>
          </article>
        </div>
      </section>

      <MaterialsScenarioChartCard
        kind="overview-main"
        title="主要原材料の値上げ率推移予測"
        description="プラスチック樹脂・包装資材・化学品・非鉄金属のS2シナリオを同一スケールで比較しています。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人が受ける4大コスト影響</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <Link href={`${MATERIALS_SCENARIO_BASE_PATH}/plastic-resin`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50">
            <p className="text-base font-semibold text-slate-900">プラスチック樹脂</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">塩ビ30〜35円/kg上昇、PE/PP10〜20%上昇。エチレン減産が直撃。</p>
          </Link>
          <Link href={`${MATERIALS_SCENARIO_BASE_PATH}/packaging`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50">
            <p className="text-base font-semibold text-slate-900">包装・梱包資材</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">段ボール・フィルム・トレー。EC物流コスト+5〜15%。</p>
          </Link>
          <Link href={`${MATERIALS_SCENARIO_BASE_PATH}/chemicals`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50">
            <p className="text-base font-semibold text-slate-900">化学品・溶剤</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">接着剤・塗料・洗剤原料。ナフサ由来製品の広範な値上げ。</p>
          </Link>
          <Link href={`${MATERIALS_SCENARIO_BASE_PATH}/non-ferrous-metals`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50">
            <p className="text-base font-semibold text-slate-900">非鉄金属</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">アルミ缶・銅配線。LME価格＋円安のダブルインパクト。</p>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ「ガソリン高」より影響が大きいのか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          ナフサ不足による原材料・包装資材の高騰は、製品の製造・物流コスト全体を押し上げる「見えないインフレ」です。帝国データバンクの調査では、
          2026年の食品値上げ要因として「包装・資材」が81.3%と高水準に達しています。
        </p>
        <div className="mt-4 grid gap-3 text-center text-sm md:grid-cols-4">
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-red-900">ホルムズ海峡緊迫化<br /><span className="text-xs">原油・ナフサ</span></div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-amber-900">エチレン減産<br /><span className="text-xs">国内6/12基・1〜2週間</span></div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900">樹脂・化学品値上げ<br /><span className="text-xs">1〜3カ月</span></div>
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-3 text-purple-900">最終製品へ転嫁<br /><span className="text-xs">3〜6カ月</span></div>
        </div>
      </section>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">エネルギーコストとの複合影響</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          原材料値上げに加えて、製造に必要な電気・ガス・物流のコストも同時に上昇します。
          <Link href="/special/oil-scenario-analysis" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
            原油・物流コスト分析
          </Link>
          と
          <Link href="/special/gas-scenario-analysis" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
            法人ガス代シナリオ分析
          </Link>
          も合わせてご確認ください。
        </p>
      </section>

      <RelatedLinks
        heading="下層ページから詳細を見る"
        intro="添付原稿の表・グラフ・注記・FAQを維持しつつ、テーマ別に詳細を確認できます。"
        links={[
          {
            href: `${MATERIALS_SCENARIO_BASE_PATH}/naphtha-petrochemical`,
            title: "ナフサ・石化",
            description: "エチレン減産の構造と在庫タイムリミットを確認。",
          },
          {
            href: `${MATERIALS_SCENARIO_BASE_PATH}/plastic-resin`,
            title: "プラスチック樹脂",
            description: "PE/PP/PET/PVCの価格動向と供給制約を確認。",
          },
          {
            href: `${MATERIALS_SCENARIO_BASE_PATH}/industry-impact`,
            title: "業種別影響",
            description: "製造業・EC・食品・建設の年間コスト増を試算。",
          },
          {
            href: `${MATERIALS_SCENARIO_BASE_PATH}/action-roadmap`,
            title: "対策ロードマップ",
            description: "短期・中期・長期で進める調達戦略を整理。",
          },
        ]}
      />

      <ContentCta
        heading="次に確認するページ"
        description="まずはナフサ・石化の構造を把握し、次に樹脂・包装資材の値上げ時期を確認すると、調達計画の優先順位を決めやすくなります。"
        links={[
          { href: `${MATERIALS_SCENARIO_BASE_PATH}/naphtha-petrochemical`, label: "ナフサ・石化の構造を見る" },
          { href: `${MATERIALS_SCENARIO_BASE_PATH}/packaging`, label: "包装資材の値上げを確認する" },
          { href: "/special/oil-scenario-analysis", label: "原油・物流コスト分析も見る" },
        ]}
      />
    </MaterialsScenarioLayout>
  );
}
