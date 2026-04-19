import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["for-executives"];


const pageTitle = "IR・ESG開示における電力リスクの記載ガイド｜TCFD/ISSB/GRI対応";
const pageDescription =
  "統合報告書・有価証券報告書でエネルギーリスクをどう開示するか。TCFD/ISSB/GRIフレームワークとの対応、Scope2排出量と電力調達戦略の関係、RE100/SBTの進捗報告に必要なデータ、投資家が注目するエネルギー関連KPIを解説する経営層・CFO向け実践ガイド。";
const pageUrl = "https://simulator.eic-jp.org/executive-esg-electricity-disclosure";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ESG開示 電力リスク",
    "TCFD 電気代",
    "ISSB 気候変動 開示",
    "Scope2 電力調達",
    "RE100 SBT 開示",
    "統合報告書 エネルギーリスク",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/for-executives", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/for-executives"],
  },
};

const frameworkTable = [
  {
    framework: "TCFD",
    category: "移行リスク（政策・規制）",
    disclosure: "炭素税・GX賦課金による電力コスト上昇リスクの定量開示",
    required: "推奨（有報では実質必須）",
  },
  {
    framework: "TCFD",
    category: "物理リスク（慢性的）",
    disclosure: "気温上昇による冷房需要増・電力需要増のコスト影響",
    required: "推奨",
  },
  {
    framework: "ISSB（IFRS S2）",
    category: "気候関連リスク・機会",
    disclosure: "電力調達戦略・再エネ比率・Scope2排出量の開示",
    required: "適用対象企業は必須",
  },
  {
    framework: "ISSB（IFRS S2）",
    category: "移行計画",
    disclosure: "電力調達の脱炭素化ロードマップと進捗",
    required: "適用対象企業は必須",
  },
  {
    framework: "GRI（GRI 302）",
    category: "エネルギー消費量",
    disclosure: "電力消費量・再エネ比率・エネルギー原単位の開示",
    required: "GRI準拠時は必須",
  },
  {
    framework: "GRI（GRI 201）",
    category: "財務的影響",
    disclosure: "エネルギーコストの財務的重要性と対応策",
    required: "重要性評価次第",
  },
  {
    framework: "有価証券報告書",
    category: "サステナビリティ情報",
    disclosure: "電力リスクの経営戦略への影響（2023年度〜開示義務）",
    required: "上場企業は必須",
  },
];

const scope2DataTable = [
  { item: "購入電力量（kWh）", source: "電力会社の請求書・契約明細", note: "拠点別・月別で収集" },
  { item: "電力会社別排出係数", source: "電力会社の排出係数公表値（または国デフォルト値）", note: "マーケット基準法の場合は個別係数使用" },
  { item: "再エネ証書（非化石証書等）", source: "非化石証書・Jクレジット等の購入実績", note: "マーケット基準法でのScope2削減に使用" },
  { item: "PPA・自家発電量", source: "自社発電設備の計量データ", note: "オンサイト・オフサイトPPAを区別" },
  { item: "グリーン電力証書", source: "証書発行機関の認証書", note: "Scope2のmarket-based調整に使用" },
  { item: "拠点別電力使用量", source: "拠点ごとのスマートメーター・請求書", note: "多拠点管理の基礎データ" },
  { item: "前年比電力消費変化率", source: "社内データ集計", note: "エネルギー原単位改善の把握に必要" },
];

const re100KpiTable = [
  { kpi: "再エネ電力比率（%）", target: "RE100目標値（年次）", disclosure: "統合報告書・RE100年次報告" },
  { kpi: "Scope2排出量（location-based）", target: "SBT中間・最終目標", disclosure: "有価証券報告書・統合報告書" },
  { kpi: "Scope2排出量（market-based）", target: "SBT中間・最終目標", disclosure: "有価証券報告書・統合報告書" },
  { kpi: "非化石証書調達量（MWh）", target: "再エネ比率目標に連動", disclosure: "統合報告書・サステナビリティレポート" },
  { kpi: "電力調達コスト（再エネプレミアム含む）", target: "再エネ調達コスト許容範囲", disclosure: "投資家向け説明資料" },
  { kpi: "エネルギー原単位（kWh/売上億円）", target: "年次改善率目標", disclosure: "GRI 302準拠の開示資料" },
];

const actionItems = [
  {
    title: "1. 有価証券報告書のサステナビリティ情報欄に電力リスクを明記する",
    body: "2023年度から上場企業に義務付けられたサステナビリティ情報開示において、電力コスト上昇・Scope2排出量・再エネ調達戦略を重要なリスクとして記載する。定性的記述だけでなく、定量的な影響額（シナリオ別）も記載することで投資家の信頼を高める。",
  },
  {
    title: "2. TCFD/ISSB準拠の電力コストシナリオ分析を実施する",
    body: "1.5℃・2℃・4℃シナリオにおける電力コスト（炭素価格・再エネ賦課金・調達コスト）の影響を試算し、TCFD開示資料に反映する。社外の気候変動シナリオデータ（IEA・IPCC）を参照しながら自社のシナリオを構築する。",
  },
  {
    title: "3. Scope2算定体制を整備する",
    body: "拠点別の電力使用量と排出係数を体系的に収集・管理するデータ基盤を整備する。location-based法とmarket-based法の両方で算定し、再エネ証書調達の効果を可視化する。",
  },
  {
    title: "4. RE100・SBT目標と電力調達戦略を紐付ける",
    body: "RE100目標（再エネ100%調達）・SBT目標（科学的根拠に基づく排出削減目標）の達成に向けた電力調達ロードマップを策定し、毎年の進捗を開示資料に反映する。",
  },
  {
    title: "5. 投資家向けに電力コスト管理の「見える化」を行う",
    body: "アナリスト・機関投資家からの質問に答えられるよう、電力費の財務インパクト・調達戦略・KPI達成状況を1〜2ページの開示サマリーとして準備する。ESGレーティング機関（MSCI・S&P等）の評価項目も確認する。",
  },
];

export default function ExecutiveEsgElectricityDisclosurePage() {
  return (
    <>
      <ArticleJsonLd
        headline="IR・ESG開示における電力リスクの記載ガイド｜TCFD/ISSB/GRI対応"
        description="統合報告書・有価証券報告書でエネルギーリスクをどう開示するか。TCFD/ISSB/GRIフレームワークとの対応、Scope2排出量と電力調達戦略の関係、RE100/SBTの進捗報告に必要なデータ、投資家が注目するエネルギー関連KPIを解説する経営層・CFO向け実践ガイド。"
        url="https://simulator.eic-jp.org/executive-esg-electricity-disclosure"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "IR・ESG開示における電力リスクの記載ガイド" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/for-executives" className="underline-offset-2 hover:underline">経営層・CFO向け</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">IR・ESG開示ガイド</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-6 text-white">
        <p className="text-xs font-semibold tracking-wide text-amber-300">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          IR・ESG開示における電力リスクの記載ガイド
        </h1>
        <p className="mt-1 text-lg font-medium text-amber-200">TCFD／ISSB／GRI対応と実務記載例</p>
        <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
          電力コストの上昇と脱炭素化への対応は、財務リスクであると同時にESG開示の重要テーマとなっています。
          2023年度から上場企業に義務付けられたサステナビリティ情報開示において、エネルギーリスクの記載水準が
          投資家・格付機関の評価を左右します。本ページでは、TCFD・ISSB・GRIの各フレームワークと電力リスク開示の
          対応関係を整理し、Scope2排出量の算定方法・RE100/SBT進捗報告に必要なデータ・投資家が注目するKPIを
          CFO・IR担当者向けに解説します。
        </p>
      </header>

      {/* エグゼクティブサマリー */}
      <section className="mt-6 border-l-4 border-amber-400 bg-amber-50 p-5 rounded-r-xl">
        <h2 className="text-base font-bold text-amber-900">エグゼクティブサマリー</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-900">
          <li>・ 有価証券報告書のサステナビリティ情報欄（2023年度〜）で、電力コストリスクの定量的開示が求められている。</li>
          <li>・ TCFD/ISSBでは電力コスト上昇を「移行リスク（政策・規制）」として開示し、シナリオ別の<strong>財務影響額</strong>を記載することがベストプラクティス。</li>
          <li>・ Scope2排出量の算定にはlocation-based法とmarket-based法の両方が必要で、再エネ証書調達の効果はmarket-based法で反映する。</li>
          <li>・ RE100・SBT目標の進捗報告では、再エネ調達比率・非化石証書購入量・電力調達コスト（再エネプレミアム含む）の開示が求められる。</li>
          <li>・ 投資家・ESGレーティング機関は「電力コスト管理の仕組みと進捗の可視化」を重視しており、定性記述だけでは評価が低くなるリスクがある。</li>
        </ul>
      </section>

      {/* セクション1: 開示義務の全体像 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. 電力リスク開示の全体像</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            電力リスクの開示は、複数のフレームワークが重層的に要求しています。
            日本の上場企業は有価証券報告書でのサステナビリティ情報開示が義務化されており、
            TCFD・ISSB・GRIの要求事項との整合性を確認しながら記載内容を設計する必要があります。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <h3 className="text-sm font-semibold text-blue-800">有価証券報告書（金融商品取引法）</h3>
              <p className="mt-2 text-xs leading-6 text-blue-700">
                2023年度から「サステナビリティに関する考え方及び取組」の記載が義務化。
                エネルギーリスクは「気候変動リスク」として重要性が高い。
              </p>
            </div>
            <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
              <h3 className="text-sm font-semibold text-purple-800">統合報告書・サステナビリティレポート</h3>
              <p className="mt-2 text-xs leading-6 text-purple-700">
                TCFD・GRI準拠として自主的に開示。機関投資家・ESGレーティング機関が参照し、
                開示水準がESGスコアに影響する。
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-800">RE100・SBT・CDP等の任意開示</h3>
              <p className="mt-2 text-xs leading-6 text-emerald-700">
                RE100加盟企業・SBT認定企業は各イニシアティブへの年次報告義務あり。
                電力調達戦略と進捗の詳細な開示が求められる。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション2: 開示フレームワーク対応表 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. 開示フレームワーク対応表（TCFD／ISSB／GRI）</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            各フレームワークが電力リスクに関して何を求めているかを整理します。
            開示資料の設計時にこの表をチェックリストとして活用してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">フレームワーク</th>
                  <th className="p-3 text-left font-semibold">カテゴリ</th>
                  <th className="p-3 text-left font-semibold">電力リスクの開示内容</th>
                  <th className="p-3 text-center font-semibold">必須度</th>
                </tr>
              </thead>
              <tbody>
                {frameworkTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800 text-xs">{row.framework}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700 text-xs">{row.category}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-600 text-xs">{row.disclosure}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                      row.required.includes("必須") ? "text-red-700" :
                      row.required.includes("推奨") ? "text-amber-600" : "text-slate-500"
                    }`}>{row.required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ ISSBはIFRS財団による国際的な開示基準。日本では2024年以降のSSBJ（サステナビリティ基準委員会）対応に注視が必要。
          </p>
        </div>
      </section>

      {/* セクション3: Scope2算定に必要なデータ一覧 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. Scope2排出量算定に必要なデータ一覧</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            GHGプロトコルのScope2ガイダンスでは、location-based法（系統平均排出係数）と
            market-based法（契約・証書に基づく排出係数）の両方での算定・開示が求められています。
            以下のデータを拠点別・年次で収集・管理する体制を整えてください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">必要データ</th>
                  <th className="p-3 text-left font-semibold">データソース</th>
                  <th className="p-3 text-left font-semibold">備考</th>
                </tr>
              </thead>
              <tbody>
                {scope2DataTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.item}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-600 text-xs">{row.source}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl border border-slate-300 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600 mb-2">Scope2算定の2つの方法（GHGプロトコル準拠）</p>
            <div className="grid gap-3 md:grid-cols-2 text-xs leading-6 text-slate-700">
              <div>
                <p className="font-semibold text-slate-800">Location-based法</p>
                <p>電力系統の平均排出係数を使用。日本では電力会社ごとのデフォルト係数を適用。比較が容易で規制対応に使われることが多い。</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Market-based法</p>
                <p>契約上の排出係数（再エネ証書・PPA等）を使用。再エネ調達の効果が反映され、RE100・SBTの進捗管理に必要。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション4: RE100進捗の記載例とKPI */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">4. RE100進捗の記載例とKPI一覧</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            RE100やSBTの年次報告で必要なKPIと、統合報告書・サステナビリティレポートへの
            記載箇所を整理します。投資家・ESGレーティング機関が評価する項目を把握し、
            開示水準を計画的に引き上げていきましょう。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">KPI</th>
                  <th className="p-3 text-left font-semibold">管理目標</th>
                  <th className="p-3 text-left font-semibold">主な開示先</th>
                </tr>
              </thead>
              <tbody>
                {re100KpiTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.kpi}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-600 text-xs">{row.target}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-500 text-xs">{row.disclosure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl border border-slate-300 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600 mb-2">RE100進捗報告の記載例（統合報告書）</p>
            <div className="space-y-1 text-xs leading-6 text-slate-700 font-mono">
              <p>2025年度 再エネ調達比率：35%（目標：2030年に60%、2050年に100%）</p>
              <p>うち非化石証書調達：15,000MWh、オンサイト太陽光：2,800MWh</p>
              <p>Scope2排出量（market-based）：前年比▲12%（目標進捗：当初計画比98%）</p>
              <p>再エネプレミアムコスト：年間○○百万円（電力費総額の約○%）</p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション5: 投資家が注目するエネルギー関連KPI */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">5. 投資家・ESGレーティング機関が注目するKPI</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          MSCI・S&P Global・ISS等のESGレーティング機関、およびアクティビスト投資家が
          電力リスクの評価時に重視する項目を整理します。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            { label: "電力コストリスクの定量開示", desc: "シナリオ別の財務影響額（百万円単位）が開示されているか。定性的記述だけでは評価が下がる。" },
            { label: "再エネ調達ロードマップ", desc: "RE100・SBT目標に向けた具体的な調達戦略と年次マイルストーンが明示されているか。" },
            { label: "Scope2の両法算定", desc: "location-based・market-basedの両方で算定・開示しているか。market-basedのみでは不十分。" },
            { label: "エネルギー原単位の改善", desc: "売上・生産量当たりのエネルギー消費量が年々改善しているか。省エネ投資の効果が数値で示されているか。" },
            { label: "調達コストの透明性", desc: "再エネ調達プレミアムコストを開示しているか。脱炭素化の財務負担を投資家が評価できる形で示す。" },
            { label: "リスク管理体制", desc: "電力リスク管理の組織・プロセス・取締役会への報告体制が明確化されているか。ガバナンス開示の一部として重要。" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">{item.label}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* セクション6: 実務上の留意点 */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">6. 開示実務における留意点</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
          <li className="flex gap-2">
            <span className="font-bold text-sky-700 shrink-0">留意1.</span>
            有価証券報告書のサステナビリティ情報は「重要性の観点」で記載範囲を決める。電力費が売上高比率1%超の企業では電力リスクは通常「重要」と判断される。
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-sky-700 shrink-0">留意2.</span>
            TCFD開示のシナリオ分析では、IEA Net Zero 2050・Stated Policies Scenario等の公的シナリオを参照した上で、自社への財務影響を試算することが求められる。
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-sky-700 shrink-0">留意3.</span>
            GRI 302（エネルギー）の開示では、総エネルギー消費量・再エネ比率・エネルギー原単位・省エネ取組の効果を報告年度・前年度比較で記載する。
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-sky-700 shrink-0">留意4.</span>
            CDP気候変動質問書には電力調達・Scope2・移行リスクに関する詳細な設問がある。CDP回答がESGレーティングに直接影響するため、経営層のコミットメントが必要。
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-sky-700 shrink-0">留意5.</span>
            グリーンウォッシュへの規制強化が進む中、再エネ証書の調達実績・追加性・地域性についての第三者検証を取得することがリスク管理上有効。
          </li>
        </ul>
      </section>

      {/* セクション7: アクションアイテム */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">7. 経営層のアクションアイテム</h2>
        <div className="space-y-3">
          {actionItems.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/executive-mid-term-plan-electricity",
              title: "中期経営計画への電力コスト織り込み方",
              description: "3年・5年の中計シナリオ別電力コスト前提の設定方法を解説。",
            },
            {
              href: "/executive-ebitda-impact",
              title: "電気代がEBITDAに与える影響の測り方",
              description: "CFO向けに電力コスト感応度分析のフレームワークを解説。",
            },
            {
              href: "/executive-board-reporting-items",
              title: "取締役会で報告すべき電力リスク5項目",
              description: "経営会議の議題として設定すべき電力リスクの論点。",
            },
            {
              href: "/renewable-energy-certificate",
              title: "非化石証書・グリーン電力証書の活用方法",
              description: "Scope2削減のための再エネ証書の種類と選択ポイント。",
            },
            {
              href: "/articles/risk-scenarios",
              title: "リスクシナリオカテゴリ",
              description: "電力コストに関するリスクシナリオ解説の一覧。",
            },
          ]}
        />
      </div>

      {/* ContentCta */}
      <div className="mt-6">
        <ContentCta
          heading="電力リスクの財務インパクトをシミュレーターで確認する"
          description="自社の電気代上昇リスクを数値化し、ESG開示・中計策定に活用できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を確認する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
