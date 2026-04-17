import type { Metadata } from "next";
import Link from "next/link";
import EmergencyScenarioChartCard from "./_components/EmergencyScenarioCharts";
import EmergencyScenarioLayout from "./_components/EmergencyScenarioLayout";
import { EMERGENCY_SCENARIO_BASE_PATH } from "../../../lib/emergencyScenarioAnalysis";

const pageTitle = "有事シナリオ分析｜法人電気代への影響を3シナリオで比較";
const pageDescription =
  "原油高騰・補助金終了・再エネ賦課金・円安の四重苦を前提に、法人電気代の上振れリスクをシナリオ別に比較する特集です。";
const canonicalUrl = `https://simulator.eic-jp.org${EMERGENCY_SCENARIO_BASE_PATH}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "再エネ賦課金", "電気料金シナリオ", "リスク分析", "補助金", "電力会社比較"],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "有事シナリオ分析" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function EmergencyScenarioAnalysisTopPage() {
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
    <EmergencyScenarioLayout
      slug="index"
      lead="原油高騰・補助金終了・再エネ賦課金・円安が同時進行する局面を想定し、法人電気代の変動リスクを3シナリオで整理した特集です。"
    >
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">3つのシナリオの影響サマリー</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2026年2月末の有事発生を起点に、原油価格は短期間で大きく変動しました。攻撃前の 67 ドル近辺から一時 120 ドル近辺まで急騰し、
          足元でも 100 ドル前後の高い水準が意識される局面が続いています。法人電気代への反映は、情勢そのものよりも「高値が何カ月続くか」で
          差が開く点が重要です。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          有事局面の収束時期によって、法人電気代への影響は大きく変わります。短期安定化なら上昇幅は限定的ですが、夏以降まで長期化するほど
          原油高と為替の影響が積み上がり、請求ベースの負担は急拡大します。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-semibold text-emerald-800">シナリオ1：短期安定化</p>
            <p className="mt-1 text-2xl font-bold text-emerald-900">+5〜8%</p>
            <p className="mt-1 text-xs text-emerald-800">4月末までに停戦・航路再開</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">シナリオ2：夏まで長期化</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">+15〜25%</p>
            <p className="mt-1 text-xs text-amber-800">7月まで不安定な状態が継続</p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-semibold text-rose-800">シナリオ3：秋以降も継続</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">+20〜35%</p>
            <p className="mt-1 text-xs text-rose-800">年内に高コストが定着</p>
          </article>
        </div>
      </section>

      <EmergencyScenarioChartCard
        kind="oil-scenarios"
        title="WTI原油価格のシナリオ別推移（2026年）"
        description="有事局面の継続期間によって、年後半の価格水準が分岐する想定です。"
      />

      <EmergencyScenarioChartCard
        kind="impact-scenarios"
        title="法人電気代の前年同月比（想定）"
        description="電気料金への反映はタイムラグがあるため、夏から秋にかけて差が拡大します。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ原油だけでは説明できないのか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          今回の局面は、原油高騰に加えて補助金終了、再エネ賦課金の高止まり、円安圧力が重なる「複合上昇」が特徴です。
          単月の市場価格だけでなく、契約条件・業種特性・投資回収の視点を含めて判断する必要があります。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          さらに 2026 年 4 月の料金算定変更により、固定単価プランでも高騰時の反映スピードが速くなっています。
          従来のように「燃料費調整は時間差で効くから急変には強い」と言い切りにくくなっており、原油下落時の戻りよりも、
          上昇局面の転嫁を先に受けやすい実務環境に変化しています。
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
          市場連動型プランや JEPX 依存度の高い契約では、シナリオ2・3で上振れリスクが大きくなります。{" "}
          <Link href={`${EMERGENCY_SCENARIO_BASE_PATH}/contract-risk`} className="font-semibold underline underline-offset-2">
            契約別リスク比較
          </Link>{" "}
          で自社契約を先に確認してください。
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">あなたの会社はどのシナリオに備えるべきか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          業種・契約タイプ・電力使用の季節性によって、最適な対策は変わります。シナリオ1は「傷は浅い」一方で構造的な上昇が残り、
          シナリオ2は「使用量ピークと単価ピークの重なり」、シナリオ3は「高コストの定着」が論点になります。自社に近い前提から確認してください。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Link
            href={`${EMERGENCY_SCENARIO_BASE_PATH}/scenario-1`}
            className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 transition hover:bg-emerald-100"
          >
            <p className="text-xs font-semibold text-emerald-800">シナリオ1</p>
            <p className="mt-1 text-sm font-semibold text-emerald-900">短期安定化</p>
            <p className="mt-1 text-xs leading-6 text-emerald-800">4月末停戦を前提に、残る上昇要因を確認</p>
          </Link>
          <Link
            href={`${EMERGENCY_SCENARIO_BASE_PATH}/scenario-2`}
            className="rounded-lg border border-amber-200 bg-amber-50 p-4 transition hover:bg-amber-100"
          >
            <p className="text-xs font-semibold text-amber-800">シナリオ2</p>
            <p className="mt-1 text-sm font-semibold text-amber-900">夏まで長期化</p>
            <p className="mt-1 text-xs leading-6 text-amber-800">冷房需要ピークと高単価が重なるケースを確認</p>
          </Link>
          <Link
            href={`${EMERGENCY_SCENARIO_BASE_PATH}/scenario-3`}
            className="rounded-lg border border-rose-200 bg-rose-50 p-4 transition hover:bg-rose-100"
          >
            <p className="text-xs font-semibold text-rose-800">シナリオ3</p>
            <p className="mt-1 text-sm font-semibold text-rose-900">秋以降も継続</p>
            <p className="mt-1 text-xs leading-6 text-rose-800">事業計画見直しが必要な長期化ケースを確認</p>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">特集内の主要導線</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/background", title: "背景", desc: "有事局面の時系列と供給制約を把握" },
            { href: "/mechanism", title: "仕組み", desc: "価格反映のタイムラグを確認" },
            { href: "/quadruple-pressure", title: "四重苦", desc: "複合上昇の構造を分解" },
            { href: "/scenario-1", title: "シナリオ1", desc: "短期安定化でも残る負担を確認" },
            { href: "/scenario-2", title: "シナリオ2", desc: "夏ピークのダブルパンチを想定" },
            { href: "/scenario-3", title: "シナリオ3", desc: "長期化時の事業継続リスクを把握" },
            { href: "/contract-risk", title: "契約別", desc: "契約タイプ別に上振れ幅を比較" },
            { href: "/industry-impact", title: "業種別", desc: "業種ごとの影響度ランキング" },
            { href: "/action-roadmap", title: "対策", desc: "今すぐ進める対策ロードマップ" },
          ].map((item) => (
            <Link
              key={item.href}
              href={`${EMERGENCY_SCENARIO_BASE_PATH}${item.href}`}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100"
            >
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">他の有事シナリオ特集</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          電気料金以外のコスト上昇リスクも、テーマ別の特集で確認できます。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/special/oil-scenario-analysis/price-mechanism" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">原油・物流：価格メカニズム</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">原油価格が物流コストに波及する仕組みを確認</p>
          </Link>
          <Link href="/special/gas-scenario-analysis/price-mechanism" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">ガス：価格メカニズム</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">都市ガス・LPガスの価格変動構造を把握</p>
          </Link>
          <Link href="/special/fx-double-effect-scenario-analysis/chain-mechanism" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">円安×原油：連鎖メカニズム</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">為替と原油の掛け算で輸入コストが増える構造</p>
          </Link>
          <Link href="/special/materials-packaging-scenario-analysis/naphtha-petrochemical" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">原材料：ナフサ・石化</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">ナフサ不足・エチレン減産の影響を業種別に確認</p>
          </Link>
          <Link href="/special/food-procurement-scenario-analysis/cost-structure" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">食料品仕入：コスト構造</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">小麦・食用油・畜産・水産の価格上昇と飲食業への影響</p>
          </Link>
          <Link href="/special" className="rounded-lg border border-sky-200 bg-sky-50 p-4 transition hover:bg-sky-100">
            <p className="text-sm font-semibold text-sky-900">特集一覧を見る</p>
            <p className="mt-1 text-xs leading-6 text-sky-700">6テーマの特集から選んで確認できます</p>
          </Link>
        </div>
      </section>
    </EmergencyScenarioLayout>
  );
}
