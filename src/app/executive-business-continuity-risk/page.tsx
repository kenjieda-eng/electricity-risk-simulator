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

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["for-executives"];


const pageTitle = "電気代高騰と事業継続リスク｜BCPと財務リスクの観点から";
const pageDescription =
  "電力コストの急騰は事業継続計画（BCP）に組み込むべき財務リスクです。電気代高騰が事業継続に与える影響、財務的ストレステスト、BCP対策の優先順位を経営層・CFO向けに解説します。";
const pageUrl = "https://simulator.eic-jp.org/executive-business-continuity-risk";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 BCP",
    "電力コスト 事業継続リスク",
    "電気代高騰 財務リスク",
    "電力 BCPリスク 経営",
    "エネルギーコスト 事業継続計画",
    "法人電気料金 リスク管理",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

const riskMatrix = [
  { risk: "電気代の急騰（+30%超）", probability: "中〜高", impact: "高", category: "財務リスク", measure: "固定契約・省エネ投資" },
  { risk: "市場連動契約の単価急騰", probability: "中", impact: "極めて高", category: "財務リスク", measure: "固定単価契約への切り替え" },
  { risk: "新電力会社の倒産・撤退", probability: "低〜中", impact: "高（供給停止）", category: "事業継続リスク", measure: "最終保障供給の把握・代替先確保" },
  { risk: "需給ひっ迫による計画停電", probability: "低", impact: "極めて高", category: "事業継続リスク", measure: "非常用電源・蓄電池整備" },
  { risk: "容量拠出金の急増", probability: "中", impact: "中", category: "財務リスク", measure: "単価予測に容量拠出金を織り込む" },
  { risk: "燃料費調整額の大幅上昇", probability: "中〜高", impact: "高", category: "財務リスク", measure: "固定燃調or燃調上限付き契約" },
  { risk: "再エネ賦課金の追加増加", probability: "中", impact: "中", category: "財務リスク", measure: "長期電力調達見通しに反映" },
];

const stressTestScenarios = [
  {
    scenario: "ベースライン",
    electricityChange: "±0%",
    annualCostChange: "±0万円",
    operatingProfitImpact: "±0万円",
    cashflowRisk: "なし",
    bcpLevel: "平常",
  },
  {
    scenario: "軽微ストレス",
    electricityChange: "+15%",
    annualCostChange: "+1,875万円",
    operatingProfitImpact: "▲1,875万円",
    cashflowRisk: "軽微",
    bcpLevel: "モニタリング強化",
  },
  {
    scenario: "中程度ストレス",
    electricityChange: "+30%",
    annualCostChange: "+3,750万円",
    operatingProfitImpact: "▲3,750万円",
    cashflowRisk: "要対応",
    bcpLevel: "契約見直し検討",
  },
  {
    scenario: "重度ストレス",
    electricityChange: "+50%",
    annualCostChange: "+6,250万円",
    operatingProfitImpact: "▲6,250万円",
    cashflowRisk: "高",
    bcpLevel: "緊急対策発動",
  },
  {
    scenario: "危機的シナリオ",
    electricityChange: "+80%以上",
    annualCostChange: "+1億円超",
    operatingProfitImpact: "▲1億円超",
    cashflowRisk: "極めて高",
    bcpLevel: "事業継続見直し",
  },
];

const bcpActions = [
  {
    phase: "予防フェーズ（平時）",
    color: "border-green-400 bg-green-50",
    titleColor: "text-green-800",
    actions: [
      "電力契約の種別（固定・市場連動）と更新時期を一覧化",
      "主要拠点の月別電力費データを収集・モニタリング体制を整備",
      "電気代の財務感応度分析を中計・予算策定に組み込む",
      "省エネ投資のROIを定期的に評価し、投資計画に反映",
    ],
  },
  {
    phase: "警戒フェーズ（市場高騰時）",
    color: "border-amber-400 bg-amber-50",
    titleColor: "text-amber-800",
    actions: [
      "電力市場価格・燃料費調整額の月次モニタリングを強化",
      "固定単価契約への切り替え可否を電力会社に打診",
      "省エネ設備の緊急導入可否をエンジニアリング部門に確認",
      "電気代の価格転嫁（製品値上げ）可否を営業部門と協議",
    ],
  },
  {
    phase: "対応フェーズ（急騰・危機時）",
    color: "border-red-400 bg-red-50",
    titleColor: "text-red-800",
    actions: [
      "代替電力供給者への緊急切り替え手続きを開始",
      "最終保障供給への移行フローを確認・準備",
      "非常用発電設備・蓄電池の稼働確認と燃料確保",
      "電気代急騰分のP&L・CF影響を取締役会に緊急報告",
      "生産量・営業時間の一時的な調整可否を検討",
    ],
  },
];

export default function ExecutiveBusinessContinuityRiskPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電気代高騰と事業継続リスク｜BCPと財務リスクの観点から"
        description="電力コストの急騰は事業継続計画（BCP）に組み込むべき財務リスクです。電気代高騰が事業継続に与える影響、財務的ストレステスト、BCP対策の優先順位を経営層・CFO向けに解説します。"
        url="https://simulator.eic-jp.org/executive-business-continuity-risk"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電気代高騰と事業継続リスク" },
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
        <span className="text-slate-800">電気代高騰と事業継続リスク</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-6 text-white">
        <p className="text-xs font-semibold tracking-wide text-amber-300">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          電気代高騰と事業継続リスク
        </h1>
        <p className="mt-1 text-lg font-medium text-amber-200">BCPと財務リスクの観点から</p>
        <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
          電力コストの急騰は、単なるコスト増ではなく「事業継続リスク」として認識すべき経営課題です。
          新電力会社の撤退・倒産、計画停電、市場連動契約の単価急騰——これらは実際に2021〜2023年に起きた出来事であり、
          適切なBCP対策を持たない企業は予期せぬ供給停止や財務ショックに直面しました。
          本ページでは、電気代高騰リスクをBCPと財務リスク管理の両面から整理し、
          経営層が取るべきアクションを提示します。
        </p>
      </header>

      {/* エグゼクティブサマリー */}
      <section className="mt-6 border-l-4 border-amber-400 bg-amber-50 p-5 rounded-r-xl">
        <h2 className="text-base font-bold text-amber-900">エグゼクティブサマリー</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-900">
          <li>・ 電気代高騰は「財務リスク」（コスト増）と「事業継続リスク」（供給停止）の2層構造で管理する必要がある。</li>
          <li>・ 2021年には新電力会社の相次ぐ撤退・倒産が発生し、契約先を失った企業が最終保障供給に移行するケースが多数生じた。</li>
          <li>・ 市場連動型契約の企業は、卸電力市場の急騰時に単価が連動するため、固定費計画が大きく崩れるリスクがある。</li>
          <li>・ 財務的ストレステストにエネルギーコストシナリオを組み込むことが、現代のCFOに求められる管理指標となっている。</li>
          <li>・ BCP対策としては「予防・警戒・対応」の3フェーズで電力リスク管理体制を整備することが有効。</li>
        </ul>
      </section>

      {/* セクション1: リスクの2層構造 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. 電力リスクの2層構造：財務リスクと事業継続リスク</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="text-base font-semibold text-red-900">財務リスク層</h3>
            <p className="mt-2 text-sm leading-7 text-red-800">
              電気代の単価上昇によるEBITDA・営業利益率・フリーキャッシュフローへの悪影響。
              予算超過、中計の前提崩壊、価格転嫁の困難さが主な問題。
              予測可能な範囲でのリスク管理が中心。
            </p>
            <ul className="mt-3 text-xs text-red-700 space-y-1">
              <li>• 燃料費調整額の上昇</li>
              <li>• 容量拠出金の増加</li>
              <li>• 市場連動単価の急騰</li>
              <li>• 再エネ賦課金の上昇</li>
            </ul>
          </div>
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">
            <h3 className="text-base font-semibold text-orange-900">事業継続リスク層</h3>
            <p className="mt-2 text-sm leading-7 text-orange-800">
              電力供給そのものが途絶するリスク。契約先の倒産・撤退、計画停電、
              設備トラブルによる停電など、事業活動が直接停止する可能性。
              発生確率は低いが影響は甚大で、即時対応が必要。
            </p>
            <ul className="mt-3 text-xs text-orange-700 space-y-1">
              <li>• 新電力会社の倒産・撤退</li>
              <li>• 需給ひっ迫・計画停電</li>
              <li>• 最終保障供給への強制移行</li>
              <li>• 送配電設備の大規模障害</li>
            </ul>
          </div>
        </div>
      </section>

      {/* セクション2: リスクマトリクス */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. 電力関連リスクマトリクス</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 mb-5 sm:text-base">
            以下は電力関連の主要リスクを発生確率・影響度・対策別に整理したものです。
            自社が特に注意すべきリスクを特定し、BCP計画に組み込んでください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">リスク事象</th>
                  <th className="p-3 text-center font-semibold">発生確率</th>
                  <th className="p-3 text-center font-semibold">影響度</th>
                  <th className="p-3 text-center font-semibold">区分</th>
                  <th className="p-3 text-left font-semibold">主な対策</th>
                </tr>
              </thead>
              <tbody>
                {riskMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 text-slate-700">{row.risk}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-xs font-medium text-slate-700">{row.probability}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                      row.impact.includes("極めて高") ? "text-red-700" :
                      row.impact.includes("高") ? "text-orange-600" : "text-slate-600"
                    }`}>{row.impact}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-xs text-slate-500">{row.category}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-600">{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション3: 財務ストレステスト */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. 財務ストレステスト：電気代シナリオ別影響</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 mb-5 sm:text-base">
            電気代のストレスシナリオを設定し、P&L・キャッシュフローへの影響を数値化します。
            以下は年間電力費2.5億円のモデル企業での試算です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">シナリオ</th>
                  <th className="p-3 text-right font-semibold">電気代変化</th>
                  <th className="p-3 text-right font-semibold">年間コスト増</th>
                  <th className="p-3 text-right font-semibold">営業利益影響</th>
                  <th className="p-3 text-center font-semibold">CF リスク</th>
                  <th className="p-3 text-center font-semibold">BCP対応レベル</th>
                </tr>
              </thead>
              <tbody>
                {stressTestScenarios.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 text-slate-700 font-medium">{row.scenario}</td>
                    <td className="p-3 border-b border-slate-100 text-right text-slate-700">{row.electricityChange}</td>
                    <td className="p-3 border-b border-slate-100 text-right font-semibold text-slate-900">{row.annualCostChange}</td>
                    <td className="p-3 border-b border-slate-100 text-right font-bold text-red-700">{row.operatingProfitImpact}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                      row.cashflowRisk === "極めて高" ? "text-red-700" :
                      row.cashflowRisk === "高" ? "text-orange-600" :
                      row.cashflowRisk === "要対応" ? "text-amber-600" :
                      row.cashflowRisk === "軽微" ? "text-yellow-600" : "text-green-700"
                    }`}>{row.cashflowRisk}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-xs text-slate-600">{row.bcpLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※ 年間電力費2.5億円モデル（売上100億円）での試算。実際のインパクトは自社の電力費規模・契約形態によって異なります。</p>
        </div>
      </section>

      {/* セクション4: BCP対策フレームワーク */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">4. 電力リスクBCP対策フレームワーク（3フェーズ）</h2>
        <div className="space-y-4">
          {bcpActions.map((phase, i) => (
            <div key={i} className={`rounded-xl border-l-4 ${phase.color} p-5`}>
              <h3 className={`text-base font-bold ${phase.titleColor}`}>{phase.phase}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {phase.actions.map((action, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="shrink-0">▸</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* セクション5: 業種別BCP優先度 */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">5. 業種別 電力BCPの優先度</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left font-semibold">業種</th>
                <th className="p-3 text-center font-semibold">財務リスク</th>
                <th className="p-3 text-center font-semibold">事業継続リスク</th>
                <th className="p-3 text-left font-semibold">BCP重点対策</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["製造業（連続生産）", "高", "極めて高", "非常用電源・停電時の生産計画"],
                ["データセンター・IT", "極めて高", "極めて高", "UPS・自家発・冗長電源構成"],
                ["病院・医療", "中", "極めて高（代替不可）", "非常電源の定期試験・燃料確保"],
                ["食品・飲料（冷凍）", "高", "高", "冷凍設備の非常電源・温度管理BCP"],
                ["小売・スーパー", "中", "中", "停電時の営業継続フロー整備"],
                ["ホテル・宿泊", "高", "中", "自家発整備・電力契約安定化"],
                ["オフィス（サービス）", "低", "低〜中", "在宅勤務BCP・UPS整備"],
              ].map(([industry, finRisk, bizRisk, measure], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="p-3 border-b border-slate-100 text-slate-700">{industry}</td>
                  <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                    finRisk === "極めて高" ? "text-red-700" : finRisk === "高" ? "text-orange-600" : "text-slate-600"
                  }`}>{finRisk}</td>
                  <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                    bizRisk.includes("極めて高") ? "text-red-700" : bizRisk.includes("高") ? "text-orange-600" : "text-slate-600"
                  }`}>{bizRisk}</td>
                  <td className="p-3 border-b border-slate-100 text-xs text-slate-600">{measure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* セクション6: 経営判断の論点 */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">6. 取締役会・経営会議の論点</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q1.</span>現在の電力契約先の財務健全性を把握しているか？倒産時の代替手順はあるか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q2.</span>電力リスクは自社のBCP計画・事業継続管理（BCM）に組み込まれているか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q3.</span>電気代が+30%以上上昇した場合のP&L・CFへの影響を経営陣は把握しているか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q4.</span>需給ひっ迫・停電時に事業を継続するための非常用電源設備は整っているか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q5.</span>電力調達リスクを担当する責任者・モニタリング体制は明確に定められているか？</li>
        </ul>
      </section>

      {/* セクション7: アクションアイテム */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">7. 担当者への指示事項（次ステップ）</h2>
        <ol className="mt-4 space-y-2 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>現在の電力契約先（新電力 / 大手電力）と契約種別・更新時期を一覧化させる</li>
          <li>財務部門に電気代+15%・+30%・+50%シナリオでのストレステストを実施させる</li>
          <li>BCPチームに電力関連リスクシナリオを追加し、対応手順を文書化させる</li>
          <li>主要拠点の非常用電源設備の状況と稼働可能時間を施設管理部門から報告させる</li>
          <li>最終保障供給の申し込み手順・期間・単価水準を確認させる</li>
        </ol>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/executive-ebitda-impact",
              title: "電気代がEBITDAに与える影響の測り方",
              description: "EBITDAへの定量的インパクトをフレームワークと試算テーブルで解説します。",
            },
            {
              href: "/executive-cfo-electricity-basics",
              title: "CFOのための電力市場基礎",
              description: "燃調費・市場連動・容量拠出金の仕組みを1ページで把握できます。",
            },
            {
              href: "/executive-board-reporting-items",
              title: "取締役会で報告すべき電力リスク5項目",
              description: "経営会議の議題として設定すべき電力リスクの論点を整理します。",
            },
            {
              href: "/last-resort-supply-emergency-action",
              title: "最終保障供給への移行手順",
              description: "電力供給が停止した際の緊急対応フローを解説します。",
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
          heading="電力リスクを今すぐ数値で把握する"
          description="シミュレーターで自社の電気代上昇リスクを試算できます。BCP・財務計画への組み込みについては経営相談をご利用ください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "経営相談はこちら" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
