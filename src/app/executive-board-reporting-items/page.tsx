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


const pageTitle = "取締役会で報告すべき電力リスク5項目｜経営会議の議題として";
const pageDescription =
  "電力コストリスクを取締役会・経営会議で議題化するための5つの報告項目を解説。EBITDAへのインパクト、契約リスク、BCP、省エネ投資ROI、中計への反映——経営層がすべきチェックリストと定量データを提供します。";
const pageUrl = "https://simulator.eic-jp.org/executive-board-reporting-items";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "取締役会 電力リスク",
    "経営会議 電気代 議題",
    "電力コスト 取締役会報告",
    "電気代リスク 経営",
    "電力 取締役会 CFO",
    "法人電気料金 経営会議",
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

const reportingItems = [
  {
    number: "01",
    title: "電力コストの現状とEBITDAへのインパクト",
    priority: "最優先",
    color: "border-red-500",
    bgColor: "bg-red-50",
    titleColor: "text-red-900",
    reportContent: [
      "年間電力費の実績（過去3年推移）と売上高比率",
      "前年度対比の増減額と増減要因（燃調費・容量拠出金等の内訳）",
      "電気代+10%・+20%・+35%シナリオ別のEBITDA・営業利益率への影響試算",
      "業種平均との比較（電力費/売上高比率が高いか低いか）",
    ],
    boardQuestion: "現在の電力費水準と今後の上昇リスクは、中計の営業利益目標に対してどの程度の脅威となるか？",
    kpiSuggestion: "年間電力費（絶対額）・売上高電力費比率・EBITDA感応度（+10%時）",
  },
  {
    number: "02",
    title: "電力契約の形態・リスクと更新戦略",
    priority: "高",
    color: "border-orange-500",
    bgColor: "bg-orange-50",
    titleColor: "text-orange-900",
    reportContent: [
      "現在の電力契約形態（固定・市場連動・規制料金）と主要拠点別の契約先一覧",
      "市場連動型契約の割合と、JEPX急騰時の最大シナリオコスト",
      "契約期間・更新時期と次回見直しのスケジュール",
      "代替契約の見積もり比較（2〜3社）と固定単価切り替えによるコスト試算",
    ],
    boardQuestion: "現在の電力契約は財務リスク管理の観点から最適か？固定化によるコストと変動リスクをどう評価するか？",
    kpiSuggestion: "市場連動型契約比率（%）・固定契約満了時期・見直し予定の有無",
  },
  {
    number: "03",
    title: "電力供給の事業継続リスク（BCP）",
    priority: "高",
    color: "border-amber-500",
    bgColor: "bg-amber-50",
    titleColor: "text-amber-900",
    reportContent: [
      "現在の電力供給者（新電力の場合は財務健全性・倒産リスク評価）",
      "供給停止時のバックアップ体制（最終保障供給への移行手順・対応可能時間）",
      "主要拠点の非常用電源設備の有無・稼働可能時間・最終試験日",
      "需給ひっ迫・計画停電時の事業継続計画（BCP）の整備状況",
    ],
    boardQuestion: "電力供給が停止した場合、主要拠点の事業を何時間・何日継続できるか？対応体制は文書化されているか？",
    kpiSuggestion: "非常用電源カバー率（%）・BCP整備拠点数・最終保障供給移行フロー整備率",
  },
  {
    number: "04",
    title: "省エネ・電力コスト削減投資のROI評価",
    priority: "中〜高",
    color: "border-green-500",
    bgColor: "bg-green-50",
    titleColor: "text-green-900",
    reportContent: [
      "実施済み省エネ施策の効果測定（削減量kWh・削減額・投資回収状況）",
      "検討中の省エネ投資（LED・空調・蓄電池・太陽光）のROI・回収期間試算",
      "電気代上昇を前提にした再計算後のNPV（投資判断が変わるか確認）",
      "競合他社・業界の省エネ投資水準との比較",
    ],
    boardQuestion: "電気代上昇局面において、省エネ投資のROIは当初試算から改善しているか？今期中に意思決定すべき案件はあるか？",
    kpiSuggestion: "省エネ投資ROI・回収期間・年間削減効果（万円）・CO2削減量（tCO2）",
  },
  {
    number: "05",
    title: "中期経営計画・予算への電力コスト織り込み",
    priority: "中",
    color: "border-blue-500",
    bgColor: "bg-blue-50",
    titleColor: "text-blue-900",
    reportContent: [
      "現在の中計・年度予算における電力費の前提単価と実績との乖離状況",
      "来年度・3年後の電力費見通し（複数シナリオ）と中計前提の見直し要否",
      "電力コスト上昇分の価格転嫁（製品・サービス値上げ）の可能性と方針",
      "エネルギーコスト管理の担当責任者・レポートライン・モニタリング体制",
    ],
    boardQuestion: "中計の収益目標は、現実的な電力費上昇シナリオを織り込んだものか？達成の蓋然性を再評価する必要があるか？",
    kpiSuggestion: "電力費予算乖離率（%）・中計前提単価 vs 市場見通し・価格転嫁実施率",
  },
];

const boardReportTemplate = [
  { section: "1. 現状報告", content: "年間電力費実績・売上高比率・前年差異" },
  { section: "2. リスク評価", content: "シナリオ別EBITDA影響・契約リスク・BCP状況" },
  { section: "3. 対策進捗", content: "省エネ投資ROI・契約見直し検討状況" },
  { section: "4. 今後の見通し", content: "来年度・中計への電力費織り込み見通し" },
  { section: "5. 意思決定事項", content: "承認が必要な投資・契約変更・体制整備" },
];

const industryBenchmark = [
  { industry: "製造業（重工業）", benchmark: "8〜15%", priority: "最優先", reportFreq: "毎月" },
  { industry: "製造業（食品）", benchmark: "3〜6%", priority: "高", reportFreq: "四半期" },
  { industry: "データセンター", benchmark: "10〜25%", priority: "最優先", reportFreq: "毎月" },
  { industry: "ホテル・宿泊", benchmark: "3〜7%", priority: "高", reportFreq: "四半期" },
  { industry: "病院・医療", benchmark: "2〜5%", priority: "高", reportFreq: "四半期" },
  { industry: "小売・スーパー", benchmark: "2〜4%", priority: "中", reportFreq: "半期" },
  { industry: "オフィス系サービス", benchmark: "0.5〜1.5%", priority: "低", reportFreq: "年次" },
];

export default function ExecutiveBoardReportingItemsPage() {
  return (
    <>
      <ArticleJsonLd
        headline="取締役会で報告すべき電力リスク5項目｜経営会議の議題として"
        description="電力コストリスクを取締役会・経営会議で議題化するための5つの報告項目を解説。EBITDAへのインパクト、契約リスク、BCP、省エネ投資ROI、中計への反映——経営層がすべきチェックリストと定量データを提供します。"
        url="https://simulator.eic-jp.org/executive-board-reporting-items"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "取締役会で報告すべき電力リスク5項目" },
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
        <span className="text-slate-800">取締役会で報告すべき5項目</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-6 text-white">
        <p className="text-xs font-semibold tracking-wide text-amber-300">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          取締役会で報告すべき電力リスク5項目
        </h1>
        <p className="mt-1 text-lg font-medium text-amber-200">経営会議の議題として</p>
        <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
          電力コストリスクは、もはや担当部門だけで管理できる問題ではありません。
          2020年代の電気代上昇は、多くの企業のEBITDA・営業利益率を直撃し、
          中期経営計画の前提を崩すほどのインパクトをもたらしています。
          本ページでは、CFO・経営企画が取締役会・経営会議で電力リスクを
          適切に議題化するための「5つの報告項目」を定義し、
          各項目の報告内容・KPI・取締役会での問いかけ方を解説します。
        </p>
      </header>

      {/* エグゼクティブサマリー */}
      <section className="mt-6 border-l-4 border-amber-400 bg-amber-50 p-5 rounded-r-xl">
        <h2 className="text-base font-bold text-amber-900">エグゼクティブサマリー</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-900">
          <li>・ 電力リスクは「財務リスク」「調達リスク」「BCP（事業継続）リスク」の3層で取締役会に報告すべき経営課題である。</li>
          <li>・ 5つの報告項目（コストインパクト・契約リスク・BCP・省エネROI・中計への織り込み）を定期的に取締役会で確認することが重要。</li>
          <li>・ 電力費の売上高比率が2%を超える企業は、取締役会での定期報告を少なくとも四半期に1回行うことを推奨。</li>
          <li>・ 報告には必ず「シナリオ別の数値」を含め、感覚論ではなくデータドリブンな経営判断につなげること。</li>
          <li>・ 意思決定が必要な事項（省エネ投資・契約切り替え・BCP整備）は取締役会の承認案件として明示する。</li>
        </ul>
      </section>

      {/* セクション1: 5項目の詳細 */}
      <section className="mt-8 space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">取締役会で報告すべき電力リスク5項目</h2>

        {reportingItems.map((item, i) => (
          <div key={i} className={`rounded-xl border-l-4 ${item.color} ${item.bgColor} p-5`}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-2xl font-black ${item.titleColor}`}>{item.number}</span>
              <div>
                <span className={`text-xs font-semibold ${item.titleColor} bg-white/60 rounded px-2 py-0.5`}>
                  優先度: {item.priority}
                </span>
                <h3 className={`text-lg font-bold ${item.titleColor} mt-1`}>{item.title}</h3>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className={`text-xs font-semibold ${item.titleColor} mb-2`}>報告内容（チェックリスト）</p>
                <ul className={`text-sm text-slate-700 space-y-1`}>
                  {item.reportContent.map((content, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="shrink-0 text-slate-400">☐</span>
                      <span>{content}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg bg-white/70 p-3">
                  <p className={`text-xs font-semibold ${item.titleColor} mb-1`}>取締役会での問いかけ</p>
                  <p className="text-sm text-slate-700 leading-6">{item.boardQuestion}</p>
                </div>
                <div className="rounded-lg bg-white/70 p-3">
                  <p className={`text-xs font-semibold ${item.titleColor} mb-1`}>推奨KPI指標</p>
                  <p className="text-xs text-slate-600 leading-6">{item.kpiSuggestion}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* セクション2: 業種別報告頻度 */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">業種別 電力リスク報告頻度の目安</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 mb-5 sm:text-base">
            電力費の売上高比率が高い業種ほど、経営会議・取締役会での報告頻度を上げることを推奨します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">業種</th>
                  <th className="p-3 text-right font-semibold">電力費/売上高比率</th>
                  <th className="p-3 text-center font-semibold">優先度</th>
                  <th className="p-3 text-center font-semibold">推奨報告頻度</th>
                </tr>
              </thead>
              <tbody>
                {industryBenchmark.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 text-slate-700">{row.industry}</td>
                    <td className="p-3 border-b border-slate-100 text-right font-semibold text-slate-900">{row.benchmark}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                      row.priority === "最優先" ? "text-red-700" :
                      row.priority === "高" ? "text-orange-600" :
                      row.priority === "中" ? "text-amber-600" : "text-slate-500"
                    }`}>{row.priority}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-sm font-medium ${
                      row.reportFreq === "毎月" ? "text-red-700" :
                      row.reportFreq === "四半期" ? "text-orange-600" : "text-slate-600"
                    }`}>{row.reportFreq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション3: 取締役会報告資料の構成テンプレート */}
      <section className="mt-8 rounded-xl border border-slate-300 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">取締役会向け電力リスク報告資料の構成例</h2>
        <div className="space-y-2">
          {boardReportTemplate.map((item, i) => (
            <div key={i} className="flex gap-4 items-start rounded-lg bg-white border border-slate-200 p-4">
              <span className="shrink-0 text-sm font-bold text-amber-600 min-w-[80px]">{item.section}</span>
              <span className="text-sm text-slate-700">{item.content}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          ※ 1ページあたりの情報量を絞り、数値・グラフ中心の構成にすることで経営層の意思決定を促しやすくなります。
        </p>
      </section>

      {/* セクション4: 定量分析テーブル */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">取締役会報告用：電気代シナリオ別インパクト試算表</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 mb-4 sm:text-base">
            取締役会資料に必ず含めるべき定量データです。自社の電力費規模に合わせてカスタマイズしてください。
            （以下は年間売上100億円・電力費2.5億円のモデルケース）
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">シナリオ</th>
                  <th className="p-3 text-right font-semibold">電力費（年間）</th>
                  <th className="p-3 text-right font-semibold">前年差</th>
                  <th className="p-3 text-right font-semibold">売上高比率</th>
                  <th className="p-3 text-right font-semibold">EBITDA影響</th>
                  <th className="p-3 text-right font-semibold">営業利益率変化</th>
                  <th className="p-3 text-center font-semibold">対応優先度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["基準（現状）", "2.50億円", "—", "2.5%", "±0", "±0pt", "モニタリング", "bg-white"],
                  ["軽微上昇 +10%", "2.75億円", "+2,500万円", "2.75%", "▲2,500万円", "▲0.25pt", "注視", "bg-yellow-50"],
                  ["中程度上昇 +20%", "3.00億円", "+5,000万円", "3.0%", "▲5,000万円", "▲0.50pt", "要対策", "bg-orange-50"],
                  ["大幅上昇 +35%", "3.375億円", "+8,750万円", "3.375%", "▲8,750万円", "▲0.875pt", "緊急対応", "bg-red-50"],
                  ["急騰 +50%", "3.75億円", "+1.25億円", "3.75%", "▲1.25億円", "▲1.25pt", "危機対応", "bg-red-100"],
                ].map(([scenario, cost, diff, ratio, ebitda, opMargin, urgency, bg], i) => (
                  <tr key={i} className={bg as string}>
                    <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{scenario}</td>
                    <td className="p-3 border-b border-slate-100 text-right text-slate-700">{cost}</td>
                    <td className="p-3 border-b border-slate-100 text-right text-slate-600">{diff}</td>
                    <td className="p-3 border-b border-slate-100 text-right text-slate-700">{ratio}</td>
                    <td className="p-3 border-b border-slate-100 text-right font-bold text-red-700">{ebitda}</td>
                    <td className="p-3 border-b border-slate-100 text-right font-semibold text-red-600">{opMargin}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                      String(urgency).includes("緊急") || String(urgency).includes("危機") ? "text-red-700" :
                      String(urgency).includes("要対策") ? "text-orange-600" :
                      String(urgency).includes("注視") ? "text-amber-600" : "text-slate-500"
                    }`}>{urgency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※ 年間電力費2.5億円モデル（売上100億円）での試算。自社数値への置き換えは担当部門に指示してください。</p>
        </div>
      </section>

      {/* セクション5: 取締役会設置の論点 */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">取締役会が判断すべき5つの論点</h2>
        <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
          <li className="flex gap-3">
            <span className="font-bold text-amber-600 shrink-0 text-base">01</span>
            <div>
              <p className="font-semibold text-slate-800">電力コストリスクを「重要リスク」として正式認定するか</p>
              <p className="text-slate-600">自社のリスクマップ・統合報告書に電力コストリスクを明示的に位置付け、管理責任者とモニタリング体制を定める。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-amber-600 shrink-0 text-base">02</span>
            <div>
              <p className="font-semibold text-slate-800">省エネ投資を今期の投資計画に追加するか</p>
              <p className="text-slate-600">電気代上昇を前提にしたROI再計算の結果、投資優先度が上昇している案件について、今期の予算で意思決定を行う。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-amber-600 shrink-0 text-base">03</span>
            <div>
              <p className="font-semibold text-slate-800">電力契約形態を固定型に切り替えるか</p>
              <p className="text-slate-600"><Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動型</Link>の変動リスクと固定型のプレミアムコストを比較し、財務リスク管理の方針として明確化する。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-amber-600 shrink-0 text-base">04</span>
            <div>
              <p className="font-semibold text-slate-800">中期経営計画の電力費前提を見直すか</p>
              <p className="text-slate-600">現在の中計が楽観的な電力費前提に基づいている場合、修正シナリオでの収益目標の達成可能性を評価する。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-amber-600 shrink-0 text-base">05</span>
            <div>
              <p className="font-semibold text-slate-800">電力調達専任担当者・チームを設置するか</p>
              <p className="text-slate-600">電力費が重要コストである企業では、電力調達・省エネを専任で管理する体制（担当者・委員会等）を設置する価値がある。</p>
            </div>
          </li>
        </ul>
      </section>

      {/* セクション6: 次ステップ */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">担当者への指示事項（次の取締役会準備）</h2>
        <ol className="mt-4 space-y-2 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>5つの報告項目に対応するデータを経理・施設管理・エンジニアリング各部門から収集させる</li>
          <li>シナリオ別EBITDA影響試算を財務部門に作成させ、取締役会資料に盛り込む</li>
          <li>主要拠点の電力契約形態・更新時期・BCP体制を一覧化した「電力管理台帳」を整備させる</li>
          <li>省エネ投資候補案件のROI（電気代上昇後の再計算版）を担当部門にまとめさせる</li>
          <li>次回取締役会のアジェンダに「電力コストリスク報告」を正式に追加する</li>
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
              href: "/executive-business-continuity-risk",
              title: "電気代高騰と事業継続リスク（BCPと財務リスク）",
              description: "電力リスクをBCPと財務リスク管理の両面から整理します。",
            },
            {
              href: "/executive-cfo-electricity-basics",
              title: "CFOのための電力市場基礎",
              description: "燃調費・市場連動・容量拠出金の仕組みを1ページで把握できます。",
            },
            {
              href: "/explaining-to-executives",
              title: "経営層向けに電力契約見直しを説明するポイント",
              description: "現場担当者が経営層に提案するときの説明フレームワーク。",
            },
            {
              href: "/market-linked-risk-internal-explanation",
              title: "市場連動リスクの内部説明",
              description: "市場連動型契約のリスクを社内で説明するための資料。",
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
          heading="取締役会報告の準備を今すぐ始める"
          description="シミュレーターで自社の電気代リスクを試算し、取締役会資料の数値として活用できます。専門家による経営相談もご利用ください。"
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
