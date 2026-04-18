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


const pageTitle = "中期経営計画への電力コスト織り込み方｜3年・5年シナリオ別前提設定ガイド";
const pageDescription =
  "中期経営計画（中計）で電力コストをどう織り込むか。3年・5年の計画期間でシナリオ別（基準/楽観/悲観）の電力コスト前提の置き方、GX賦課金等の制度変更インパクト、経営企画部が押さえるべきKPIを解説する経営層・CFO向け実践ガイド。";
const pageUrl = "https://simulator.eic-jp.org/executive-mid-term-plan-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中期経営計画 電力コスト",
    "電気代 中計 織り込み",
    "電力コスト シナリオ分析",
    "GX賦課金 中期計画",
    "電力費 KPI 経営企画",
    "法人電気料金 予算",
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

const scenarioTable = [
  { year: "2026年度（1年目）", base: "+3〜5%", optimistic: "▲2%以内", pessimistic: "+8〜12%", note: "燃調費・容量拠出金の動向次第" },
  { year: "2027年度（2年目）", base: "+5〜8%", optimistic: "±0〜+2%", pessimistic: "+12〜18%", note: "GX賦課金段階的拡大の影響" },
  { year: "2028年度（3年目）", base: "+5〜10%", optimistic: "+1〜3%", pessimistic: "+15〜25%", note: "電源構成変化・再エネ賦課金見直し" },
  { year: "2029年度（4年目）", base: "+3〜8%", optimistic: "±0〜+5%", pessimistic: "+10〜20%", note: "市場安定化 or 構造高止まり分岐点" },
  { year: "2030年度（5年目）", base: "+3〜7%", optimistic: "▲5〜0%", pessimistic: "+10〜20%", note: "2030年エネルギーミックス政策評価" },
];

const institutionalImpact = [
  { item: "GX賦課金（炭素賦課金）", timing: "2028年度〜段階拡大", impact: "kWh単価+0.5〜2円/kWh超の可能性", risk: "高" },
  { item: "再エネ賦課金（FIT）", timing: "2026〜2030年継続", impact: "年間±数十〜百億円規模の変動", risk: "中〜高" },
  { item: "容量拠出金", timing: "毎年度改定", impact: "前年比+20〜50%の急騰リスクあり", risk: "高" },
  { item: "燃料費調整額", timing: "毎月改定", impact: "LNG・石炭価格連動、±3円/kWh幅", risk: "中" },
  { item: "電源構成変化（原発再稼働）", timing: "拠点・地域による", impact: "安定化要因、ただし進捗は不透明", risk: "低〜中" },
  { item: "需給逼迫対策費用", timing: "夏冬ピーク期", impact: "スポット価格急騰リスク", risk: "中" },
];

const kpiList = [
  { kpi: "電力費/売上高比率（%）", frequency: "四半期", target: "業種標準値±1pt以内", note: "感応度の基本指標" },
  { kpi: "kWh単価（円/kWh）", frequency: "月次", target: "予算単価±10%以内", note: "調達効率の管理" },
  { kpi: "年間電力消費量（kWh）", frequency: "月次累計", target: "前年同期比±5%以内", note: "省エネ進捗確認" },
  { kpi: "電力費/原価比率（%）", frequency: "四半期", target: "中計目標値との差異", note: "製造業・食品で重要" },
  { kpi: "省エネ投資回収進捗", frequency: "半期", target: "計画ROI達成率80%以上", note: "投資判断の後追い" },
  { kpi: "再エネ調達比率（%）", frequency: "年次", target: "SBT/RE100目標との整合", note: "ESG/開示対応" },
  { kpi: "電力コスト増加額（vs予算）", frequency: "月次", target: "月次▲500万円超で経営報告", note: "エスカレーション基準" },
];

const actionItems = [
  {
    title: "1. 中計の電力コスト前提を「シナリオ3本立て」で設定する",
    body: "基準・楽観・悲観の3シナリオを明示し、各シナリオの発生確率と採用根拠を記載する。単一の「予想値」で計画を立てることは、構造的な価格変動局面では経営リスクになる。",
  },
  {
    title: "2. 制度変更カレンダーを経営企画に作成させる",
    body: "GX賦課金・再エネ賦課金・容量拠出金の政策決定スケジュールを把握し、中計の各年度前提に反映させる。政策情報は経産省・電力広域的運営推進機関（OCCTO）の公表資料で確認できる。",
  },
  {
    title: "3. KPIモニタリング体制を整備する",
    body: "月次の電力費管理をKPIとして財務報告に組み込む。電力費/売上高比率がベンチマークを超えた場合のエスカレーションルールと対応手順を事前に定めておく。",
  },
  {
    title: "4. 電力調達戦略を中計に紐付ける",
    body: "現在の契約が固定か市場連動かを確認し、中計期間中の契約更新タイミングで調達戦略を見直す機会を事前にスケジュールする。長期固定契約・PPA・自己託送等の選択肢を検討させる。",
  },
  {
    title: "5. 省エネ投資を中計の資本配分に組み込む",
    body: "電気代上昇前提の下では、省エネ設備投資のNPVが改善する。設備更新・LED・空調・蓄電池・太陽光のROI試算を中計の投資計画に織り込み、CAPEX優先順位を見直す。",
  },
];

export default function ExecutiveMidTermPlanElectricityPage() {
  return (
    <>
      <ArticleJsonLd
        headline="中期経営計画への電力コスト織り込み方｜3年・5年シナリオ別前提設定ガイド"
        description="中期経営計画（中計）で電力コストをどう織り込むか。3年・5年の計画期間でシナリオ別（基準/楽観/悲観）の電力コスト前提の置き方、GX賦課金等の制度変更インパクト、経営企画部が押さえるべきKPIを解説する経営層・CFO向け実践ガイド。"
        url="https://simulator.eic-jp.org/executive-mid-term-plan-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "中期経営計画への電力コスト織り込み方" },
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
        <span className="text-slate-800">中期経営計画への織り込み</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-6 text-white">
        <p className="text-xs font-semibold tracking-wide text-amber-300">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          中期経営計画への電力コスト織り込み方
        </h1>
        <p className="mt-1 text-lg font-medium text-amber-200">3年・5年シナリオ別前提設定ガイド</p>
        <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
          電力コストは「今年だけの問題」ではありません。GX賦課金の段階的導入・容量拠出金の急騰・再エネ賦課金の変動など、
          構造的な価格上昇要因が2030年に向けて重層的に積み重なっています。中期経営計画（中計）に単一の電力費前提を置くことは、
          計画未達のリスクを内包します。本ページでは、経営企画部・CFOが中計策定時に使える「シナリオ別電力コスト前提設定の
          フレームワーク」と、継続モニタリングに必要なKPI体系を解説します。
        </p>
      </header>

      {/* エグゼクティブサマリー */}
      <section className="mt-6 border-l-4 border-amber-400 bg-amber-50 p-5 rounded-r-xl">
        <h2 className="text-base font-bold text-amber-900">エグゼクティブサマリー</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-900">
          <li>・ 中計期間（3〜5年）に電力コストは構造的に上昇する可能性が高く、「現状維持」前提は楽観シナリオとして位置づけるべきである。</li>
          <li>・ GX賦課金（炭素賦課金）は2028年度から段階的に拡大が予定されており、kWh単価に<strong>+0.5〜2円超</strong>の上乗せ要因となる。</li>
          <li>・ シナリオは「基準・楽観・悲観」の3本立てで設定し、各シナリオの採用根拠と発生確率を中計文書に明示する。</li>
          <li>・ 電力費/売上高比率・kWh単価・省エネ投資進捗の3指標を中計KPIに組み込み、月次・四半期でモニタリングする体制を整える。</li>
          <li>・ 中計期間中の契約更新タイミングを今から把握し、長期固定・PPA・自己託送等の調達戦略オプションを事前に検討しておく。</li>
        </ul>
      </section>

      {/* セクション1: なぜ中計に電力コストを明示的に織り込むか */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. なぜ今、中計に電力コストを明示的に織り込むのか</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            2020年代の電力市場は「価格の構造的高止まり」に移行しています。かつての電力費は
            比較的安定したコストとして中計上は固定費扱いでしたが、2021〜2025年の電気代急騰を経て、
            電力費は「管理すべき変動リスク」として認識を改める必要があります。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <h3 className="text-sm font-semibold text-red-800">制度的上昇圧力</h3>
              <p className="mt-2 text-xs leading-6 text-red-700">
                GX賦課金・<Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金</Link>・<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>など、政策起因の費用が中計期間中に段階的に増加する見込み。
                単価ベースで累積+5〜15円/kWh規模の影響も想定される。
              </p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
              <h3 className="text-sm font-semibold text-orange-800">市場の不確実性</h3>
              <p className="mt-2 text-xs leading-6 text-orange-700">
                LNG・石炭の国際価格、円安の進行度、需給逼迫の発生有無によって、年間電力費が数百万〜数千万円単位でブレる。
                <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動型</Link>契約では特に変動幅が大きい。
              </p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <h3 className="text-sm font-semibold text-blue-800">ESG・開示要件の強化</h3>
              <p className="mt-2 text-xs leading-6 text-blue-700">
                TCFD・ISSB基準での開示義務化が進む中、エネルギーリスクの中計への織り込みは
                投資家・格付機関からの要求事項にもなりつつある。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション2: シナリオ別電力コスト前提表（3年間×3シナリオ） */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. シナリオ別電力コスト前提表（5年間×3シナリオ）</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            以下は2026〜2030年度の5か年中計における電力単価上昇率の想定レンジです。
            自社の契約形態・業種・地域特性に応じて数値を調整してください。
            「前年度比上昇率」として記載しており、累積では悲観シナリオで+50〜70%超になる可能性もあります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">年度</th>
                  <th className="p-3 text-center font-semibold">基準シナリオ</th>
                  <th className="p-3 text-center font-semibold">楽観シナリオ</th>
                  <th className="p-3 text-center font-semibold">悲観シナリオ</th>
                  <th className="p-3 text-left font-semibold">主な変動要因</th>
                </tr>
              </thead>
              <tbody>
                {scenarioTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.year}</td>
                    <td className="p-3 border-b border-slate-100 text-center font-semibold text-slate-700">{row.base}</td>
                    <td className="p-3 border-b border-slate-100 text-center font-semibold text-emerald-700">{row.optimistic}</td>
                    <td className="p-3 border-b border-slate-100 text-center font-bold text-red-700">{row.pessimistic}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 前年度比の上昇率レンジ。累積インパクトは複利計算で試算すること。楽観シナリオは省エネ投資・原発再稼働進展・化石燃料価格下落を前提。
          </p>
          <div className="mt-5 rounded-xl border border-slate-300 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600 mb-2">シナリオ採用の考え方</p>
            <div className="space-y-1 text-xs leading-6 text-slate-700">
              <p><span className="font-semibold text-slate-800">基準シナリオ：</span>政策・市場の現状トレンドが継続する前提。中計の本予算として採用。</p>
              <p><span className="font-semibold text-emerald-700">楽観シナリオ：</span>原発再稼働・燃料安・省エネ進展が重なった場合。感度分析の上限として使用。</p>
              <p><span className="font-semibold text-red-700">悲観シナリオ：</span>有事・大幅な政策変更・需給逼迫が重なった場合。リスクバッファの算定に使用。</p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション3: 制度変更インパクト表 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. 制度変更インパクト表</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            中計期間（2026〜2030年度）において電力コストに影響する主要な制度変更を整理します。
            いずれも単価に直接影響し、一部は自社の省エネ対策や調達戦略で緩和できます。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">制度・費用項目</th>
                  <th className="p-3 text-left font-semibold">影響タイミング</th>
                  <th className="p-3 text-left font-semibold">コストインパクト</th>
                  <th className="p-3 text-center font-semibold">リスク</th>
                </tr>
              </thead>
              <tbody>
                {institutionalImpact.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.item}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-600 text-xs">{row.timing}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700 text-xs">{row.impact}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-bold ${
                      row.risk === "高" ? "text-red-700" :
                      row.risk === "中〜高" ? "text-orange-600" :
                      row.risk === "中" ? "text-amber-600" : "text-slate-500"
                    }`}>{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 各制度の詳細は経産省・電力広域的運営推進機関（OCCTO）・資源エネルギー庁の公表資料で確認してください。
          </p>
        </div>
      </section>

      {/* セクション4: KPIモニタリング項目 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">4. KPIモニタリング項目一覧</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            中計の電力コスト管理を実効性あるものにするには、KPIの設定とモニタリング頻度の定義が必要です。
            以下は経営企画部が整備すべき標準的なKPI一覧です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">KPI</th>
                  <th className="p-3 text-center font-semibold">モニタリング頻度</th>
                  <th className="p-3 text-left font-semibold">管理目標</th>
                  <th className="p-3 text-left font-semibold">備考</th>
                </tr>
              </thead>
              <tbody>
                {kpiList.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.kpi}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-slate-600 text-xs">{row.frequency}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700 text-xs">{row.target}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション5: 中計文書への記載例 */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">5. 中計文書・取締役会資料への記載例</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          投資家・取締役に対して電力コストリスクを開示するための記載フレームを示します。
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-slate-300 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600 mb-2">【記載例】電力コスト前提（中計2026-2030）</p>
            <div className="space-y-2 text-xs leading-6 text-slate-700 font-mono">
              <p>基準シナリオ：2025年度実績単価に対し、年率+5%前後の上昇を前提。</p>
              <p>GX賦課金（2028年度〜）：+0.5〜1.0円/kWh相当を費用積み上げ。</p>
              <p>容量拠出金：前年比+20〜30%の変動を見込み、リスクバッファとして計上。</p>
              <p>悲観シナリオ：年率+12〜18%上昇時のEBITDA影響▲○○百万円を別途開示。</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900">取締役会での報告項目</h3>
              <ul className="mt-2 space-y-1 text-xs leading-6 text-slate-700">
                <li>・ 電力費の実績vs予算乖離額（月次・四半期）</li>
                <li>・ 当該年度のシナリオ達成状況</li>
                <li>・ 制度変更による追加コスト見通し</li>
                <li>・ 省エネ投資の進捗とコスト削減実績</li>
                <li>・ 次年度契約更新の戦略オプション</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900">経営企画部の年間タスク</h3>
              <ul className="mt-2 space-y-1 text-xs leading-6 text-slate-700">
                <li>・ 4〜5月：次年度電力費予算の策定</li>
                <li>・ 7月：中計シナリオの中間見直し</li>
                <li>・ 10月：制度変更スケジュール確認</li>
                <li>・ 1〜2月：中計最終見直し・取締役会報告</li>
                <li>・ 随時：電力契約更新の承認スケジュール管理</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* セクション6: 調達戦略オプション */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">6. 中計期間中の電力調達戦略オプション</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          中計と調達戦略を連動させることで、シナリオ悲観時のリスクを緩和できます。
          自社の規模・拠点数・設備条件に応じてオプションを組み合わせてください。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            { label: "長期固定価格契約", desc: "3〜5年の単価固定で市場変動を遮断。安定性を優先する場合に有効。ただし市場下落時の恩恵を受けられない。" },
            { label: "PPA（電力購入契約）", desc: "再エネ発電事業者と長期契約。固定価格で再エネ電力を調達し、ESG対応とコスト安定を両立。初期費用不要のオンサイト型も。" },
            { label: "自己託送（自家発電）", desc: "太陽光+蓄電池を自社設置し、系統電力依存度を下げる。初期投資は大きいが長期的なコスト削減効果が高い。" },
            { label: "需給調整契約の活用", desc: "DR（デマンドレスポンス）対応で電力費を削減。需給逼迫時に自社需要を抑制し、インセンティブを得る仕組み。" },
            { label: "省エネ投資の前倒し", desc: "電気代上昇前提の下でNPVが改善。LED・インバータ・空調更新・コンプレッサー最適化の投資判断を前倒しで実施。" },
            { label: "市場連動型の一部活用", desc: "価格が安定している時期のみ市場連動型を活用。固定契約との組み合わせでポートフォリオ管理するアプローチ。" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">{item.label}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
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
              href: "/executive-ebitda-impact",
              title: "電気代がEBITDAに与える影響の測り方",
              description: "CFO向けに電力コスト感応度分析のフレームワークと業種別リスクを解説。",
            },
            {
              href: "/executive-esg-electricity-disclosure",
              title: "IR・ESG開示における電力リスクの記載ガイド",
              description: "TCFD/ISSB/GRIフレームワークとの対応と開示実務を解説。",
            },
            {
              href: "/executive-board-reporting-items",
              title: "取締役会で報告すべき電力リスク5項目",
              description: "経営会議の議題として設定すべき電力リスクの論点。",
            },
            {
              href: "/gx-electricity-surcharge-impact",
              title: "GX賦課金（炭素賦課金）の法人への影響",
              description: "2028年度からの炭素賦課金の仕組みとコストインパクトを解説。",
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
          heading="中計の電力コスト前提をシミュレーターで検証する"
          description="シミュレーターを使えば、自社の電気代上昇シナリオを数値で確認できます。中期計画への組み込みにお役立てください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を確認する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
