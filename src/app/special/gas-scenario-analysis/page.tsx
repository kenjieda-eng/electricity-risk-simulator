import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import {
  GAS_SCENARIO_BASE_PATH,
  GAS_SCENARIO_SERIES,
  getGasScenarioPagePath,
} from "../../../lib/gasScenarioAnalysis";
import GasScenarioChartCard from "./_components/GasScenarioCharts";
import GasScenarioLayout from "./_components/GasScenarioLayout";

const pageTitle = "【2026年最新】イラン情勢で法人ガス代はどうなる？都市ガス・LPガスのシナリオ別分析";
const pageDescription =
  "2026年のイラン情勢・カタールLNG停止が法人のガス代に与える影響を3シナリオで分析。都市ガス・LPガスの料金見通し、補助金の持続性、業種別コスト増を検証。";
const canonicalUrl = `https://simulator.eic-jp.org${GAS_SCENARIO_BASE_PATH}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電気料金シナリオ", "リスク分析", "補助金", "業種別電気料金"],
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

export default function GasScenarioAnalysisTopPage() {
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
    <GasScenarioLayout
      slug="index"
      lead="カタールLNG停止で急騰したガス原料価格が、夏以降の法人ガス代へどの程度波及するかを、都市ガス・LPガスの双方で3シナリオ比較します。"
    >
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">ガソリン・電気代の影響も合わせて確認</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          イラン情勢はガソリン・軽油価格にも大きな影響を与えています。法人のエネルギーコスト全体で把握したい方は
          <Link href="/special/oil-scenario-analysis" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
            法人ガソリン代2026シナリオ分析
          </Link>
          、電気代まで含めて見たい方は
          <Link
            href="/special/emergency-scenario-analysis"
            className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            法人電気代シナリオ分析
          </Link>
          も併せてご覧ください。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">この特集の全体構成</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700">
          {GAS_SCENARIO_SERIES.map((item) => (
            <li key={item.slug}>
              {item.slug === "index" ? (
                <span className="font-semibold text-slate-900">総論（このページ） — ガス料金シナリオと法人コスト概要</span>
              ) : (
                <Link href={getGasScenarioPagePath(item.slug)} className="underline-offset-2 hover:underline">
                  {item.label} — {item.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ガス料金 3シナリオの比較</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2026年3月のカタールLNG生産停止により、アジアのLNGスポット価格（JKM）は11ドルから24.8ドルへ急騰しました。都市ガス料金への反映は3〜4カ月後のため、
          夏以降に本格的な値上げが到来します。東京ガスは4月検針分で標準家庭+416円の値上げを発表済みです。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-semibold text-emerald-800">S1：短期安定化</p>
            <p className="mt-1 text-2xl font-bold text-emerald-900">+5〜10%</p>
            <p className="mt-1 text-xs text-emerald-800">LNG正常化／年間平均</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">S2：夏まで長期化</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">+15〜25%</p>
            <p className="mt-1 text-xs text-amber-800">補助金終了＋原料高</p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-semibold text-rose-800">S3：秋以降も継続</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">+30〜50%</p>
            <p className="mt-1 text-xs text-rose-800">上限到達リスク</p>
          </article>
        </div>
      </section>

      <GasScenarioChartCard
        kind="gas-scenarios"
        title="都市ガス料金単価の推移予測（東京ガスエリア基準）"
        description="S1〜S3に加え、2025年平均（145円/m3）を基準線として比較しています。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人が受ける3大コスト影響</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Link href={`${GAS_SCENARIO_BASE_PATH}/industry-impact`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50">
            <p className="text-base font-semibold text-slate-900">飲食・食品加工</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">厨房・ボイラーのガス代が直撃。月間+3〜15万円の増加も。</p>
          </Link>
          <Link href={`${GAS_SCENARIO_BASE_PATH}/cost-simulation`} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50">
            <p className="text-base font-semibold text-slate-900">製造業・工場</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">工業用ガスの大量使用。年間+100〜500万円のリスク。</p>
          </Link>
          <Link
            href={`${GAS_SCENARIO_BASE_PATH}/electrification-comparison`}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50"
          >
            <p className="text-base font-semibold text-slate-900">電化シフトの判断</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">ヒートポンプ・IH化の損益分岐がガス高で大きく変わる。</p>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜガス代は「これから」上がるのか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          ガソリンは原油高騰から約1カ月で店頭に反映されますが、都市ガスは3〜4カ月のタイムラグがあります。2026年3月のLNG急騰が料金に反映されるのは6〜8月検針分からです。
          さらに、政府の補助金（6円/m3）は4月検針分で縮小済みであり、5月以降の継続は未定です。
        </p>
        <div className="mt-4 grid gap-3 text-sm md:grid-cols-4">
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-center">
            カタールLNG停止
            <br />
            <span className="text-xs">3月2日</span>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-center">
            JKMスポット急騰
            <br />
            <span className="text-xs">11→24.8ドル</span>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-center">
            原料費調整反映
            <br />
            <span className="text-xs">3〜4カ月後</span>
          </div>
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-center">
            料金値上げ
            <br />
            <span className="text-xs">2026年夏〜</span>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm leading-7 text-rose-900">
          <p className="font-semibold">補助金終了とLNG高騰の「ダブルパンチ」に警戒</p>
          <p className="mt-1">
            補助金が5月以降に終了し、同時にLNG高騰の原料費調整が反映されると、夏以降に二重の値上がり圧力がかかります。
            東京ガスの4月検針分は既に前月比+416円（標準家庭30m3）ですが、これはまだLNG急騰前のデータに基づく値上げです。
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電気代・ガソリン代とのトータル管理が不可欠</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          ガス代の高騰は電化シフトの判断に直結しますが、電気代も同時に上昇しています。また、LPガスを使用する事業所は原油価格の影響も受けます。
          ガス代・電気代・ガソリン代をトータルのエネルギーコストとして把握し、最適なエネルギーミックスを検討してください。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          <Link href="/special/oil-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
            → 法人ガソリン代2026シナリオ分析はこちら
          </Link>
        </p>
      </section>

      <RelatedLinks
        heading="下層ページから詳細を見る"
        intro="仕組み・補助金・LPガス・業種別・試算・電化比較・対策を順に確認すると、意思決定に繋げやすくなります。"
        links={[
          {
            href: `${GAS_SCENARIO_BASE_PATH}/price-mechanism`,
            title: "価格の仕組み",
            description: "LNG価格から料金反映までの構造とタイムラグを確認する。",
          },
          {
            href: `${GAS_SCENARIO_BASE_PATH}/subsidy-outlook`,
            title: "補助金の行方",
            description: "18円→6円/m3への縮小と終了リスクを確認する。",
          },
          {
            href: `${GAS_SCENARIO_BASE_PATH}/cost-simulation`,
            title: "コスト試算",
            description: "使用量別の年間コスト増をシナリオ別に確認する。",
          },
          {
            href: `${GAS_SCENARIO_BASE_PATH}/action-roadmap`,
            title: "対策ロードマップ",
            description: "今すぐ・夏まで・中長期の具体策を確認する。",
          },
        ]}
      />

      <ContentCta
        heading="次に確認するページ"
        description="補助金の行方と使用量別コスト試算を先に確認すると、今期予算の見直し優先度を決めやすくなります。"
        links={[
          { href: `${GAS_SCENARIO_BASE_PATH}/subsidy-outlook`, label: "補助金の行方を見る" },
          { href: `${GAS_SCENARIO_BASE_PATH}/cost-simulation`, label: "使用量別コスト試算を見る" },
          { href: "/special/oil-scenario-analysis", label: "ガソリン代シナリオ分析も見る" },
        ]}
      />
    </GasScenarioLayout>
  );
}
