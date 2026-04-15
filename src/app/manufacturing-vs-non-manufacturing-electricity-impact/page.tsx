import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "製造業と非製造業で電気料金推移の影響はどう出るか｜業種構造別の比較分析";
const pageDescription =
  "製造業と非製造業で電気料金高騰の影響がどう異なるかを比較。電力原単位、売上高比率、価格転嫁のしやすさの違いを整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "製造業 電気料金 影響",
    "非製造業 電気代 比率",
    "製造業 電力原単位",
    "電気代高騰 業種別 影響",
    "電気代 製造業 非製造業 比較",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/manufacturing-vs-non-manufacturing-electricity-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/manufacturing-vs-non-manufacturing-electricity-impact",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

// --- データ定義 ---

type ComparisonRow = {
  item: string;
  manufacturing: string;
  nonManufacturing: string;
};

const BASIC_COMPARISON: ComparisonRow[] = [
  {
    item: "電力原単位（売上高あたり電力量）",
    manufacturing: "高い（特に素材系は突出）",
    nonManufacturing: "低い（オフィス・小売は特に低い）",
  },
  {
    item: "稼働時間・使用パターン",
    manufacturing: "24時間・3交代が多い（連続稼働）",
    nonManufacturing: "業務時間内が中心（8〜22時前後）",
  },
  {
    item: "ピーク需要の特性",
    manufacturing: "設備稼働によるベースロードが大きい",
    nonManufacturing: "空調・照明による日中ピークが主",
  },
  {
    item: "主な契約区分",
    manufacturing: "特別高圧・高圧が中心",
    nonManufacturing: "高圧・低圧が混在",
  },
  {
    item: "売上高に対する電気代比率",
    manufacturing: "3〜12%（素材系は10%超も）",
    nonManufacturing: "0.5〜4%（業種差が大きい）",
  },
  {
    item: "営業利益への影響度",
    manufacturing: "高〜非常に高い",
    nonManufacturing: "中〜低（ただし飲食・ホテルは高い）",
  },
  {
    item: "価格転嫁のしやすさ",
    manufacturing: "BtoB長期契約が多く転嫁しにくい業種も",
    nonManufacturing: "BtoC短サイクルは比較的転嫁しやすい",
  },
  {
    item: "省エネ・見直しの余地",
    manufacturing: "設備投資・プロセス改善に大きな余地",
    nonManufacturing: "空調・照明・契約メニュー見直しが中心",
  },
];

type IndustrySalesRatioRow = {
  industry: string;
  sector: string;
  salesRatio: string;
  costRatio: string;
  unitConsumption: string;
};

const INDUSTRY_RATIOS: IndustrySalesRatioRow[] = [
  {
    industry: "鉄鋼",
    sector: "製造業",
    salesRatio: "約8〜12%",
    costRatio: "約12〜20%",
    unitConsumption: "非常に高い（電炉は特に大）",
  },
  {
    industry: "化学",
    sector: "製造業",
    salesRatio: "約6〜9%",
    costRatio: "約10〜16%",
    unitConsumption: "高い（電解・蒸留工程）",
  },
  {
    industry: "紙パルプ",
    sector: "製造業",
    salesRatio: "約10〜14%",
    costRatio: "約15〜22%",
    unitConsumption: "最高水準（蒸解・抄紙工程）",
  },
  {
    industry: "食品製造",
    sector: "製造業",
    salesRatio: "約3〜5%",
    costRatio: "約6〜10%",
    unitConsumption: "中（加熱・冷蔵・冷凍工程）",
  },
  {
    industry: "自動車・機械",
    sector: "製造業",
    salesRatio: "約2〜4%",
    costRatio: "約4〜7%",
    unitConsumption: "中〜低（組立主体は低い）",
  },
  {
    industry: "オフィス系",
    sector: "非製造業",
    salesRatio: "約0.5〜1.5%",
    costRatio: "約1〜3%",
    unitConsumption: "低（空調・照明・PC）",
  },
  {
    industry: "スーパー・小売",
    sector: "非製造業",
    salesRatio: "約1〜3%",
    costRatio: "約4〜10%",
    unitConsumption: "中（冷蔵・照明・空調）",
  },
  {
    industry: "病院・医療施設",
    sector: "非製造業",
    salesRatio: "約2〜4%",
    costRatio: "約4〜8%",
    unitConsumption: "中（24時間空調・医療機器）",
  },
];

type ProfitImpactRow = {
  industry: string;
  sector: string;
  annualElectricity: string;
  increase10pct: string;
  operatingProfit: string;
  profitImpact: string;
  severity: "非常に重大" | "重大" | "大" | "中" | "小";
};

const PROFIT_IMPACT_10PCT: ProfitImpactRow[] = [
  {
    industry: "鉄鋼（売上200億円）",
    sector: "製造業",
    annualElectricity: "約20億円",
    increase10pct: "+2億円",
    operatingProfit: "約6億円（利益率3%）",
    profitImpact: "利益の33%相当",
    severity: "非常に重大",
  },
  {
    industry: "紙パルプ（売上100億円）",
    sector: "製造業",
    annualElectricity: "約12億円",
    increase10pct: "+1.2億円",
    operatingProfit: "約3億円（利益率3%）",
    profitImpact: "利益の40%相当",
    severity: "非常に重大",
  },
  {
    industry: "化学（売上500億円）",
    sector: "製造業",
    annualElectricity: "約35億円",
    increase10pct: "+3.5億円",
    operatingProfit: "約15億円（利益率3%）",
    profitImpact: "利益の23%相当",
    severity: "重大",
  },
  {
    industry: "食品製造（売上50億円）",
    sector: "製造業",
    annualElectricity: "約2億円",
    increase10pct: "+2,000万円",
    operatingProfit: "約1.5億円（利益率3%）",
    profitImpact: "利益の13%相当",
    severity: "大",
  },
  {
    industry: "自動車・機械（売上300億円）",
    sector: "製造業",
    annualElectricity: "約9億円",
    increase10pct: "+9,000万円",
    operatingProfit: "約9億円（利益率3%）",
    profitImpact: "利益の10%相当",
    severity: "大",
  },
  {
    industry: "スーパー（売上100億円）",
    sector: "非製造業",
    annualElectricity: "約2億円",
    increase10pct: "+2,000万円",
    operatingProfit: "約3億円（利益率3%）",
    profitImpact: "利益の6.7%相当",
    severity: "中",
  },
  {
    industry: "病院（売上30億円）",
    sector: "非製造業",
    annualElectricity: "約9,000万円",
    increase10pct: "+900万円",
    operatingProfit: "約9,000万円（利益率3%）",
    profitImpact: "利益の10%相当",
    severity: "大",
  },
  {
    industry: "オフィス系（売上50億円）",
    sector: "非製造業",
    annualElectricity: "約5,000万円",
    increase10pct: "+500万円",
    operatingProfit: "約1.5億円（利益率3%）",
    profitImpact: "利益の3.3%相当",
    severity: "小",
  },
];

const SEVERITY_COLOR = {
  非常に重大: "text-red-800 font-bold",
  重大: "text-red-700 font-semibold",
  大: "text-orange-700 font-semibold",
  中: "text-amber-700",
  小: "text-slate-600",
};

export default function ManufacturingVsNonManufacturingElectricityImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">
          ホーム
        </Link>
        <span className="px-2">›</span>
        <Link
          href="/articles/price-trends"
          className="underline-offset-2 hover:underline"
        >
          電気料金の推移と高止まり
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">製造業と非製造業の影響差</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          製造業と非製造業で電気料金推移の影響はどう出るか
        </h1>
        <p className="mt-2 text-xs font-medium text-sky-700">
          電気料金の推移と高止まり
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の高騰は、業種の違いによってその影響の深刻さが大きく異なります。
          製造業は電力原単位が高く、連続稼働・大型設備による使用量がベースロードとして積み上がるため、
          売上高に対する電気代の比率が非製造業を大幅に上回ります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          一方で、非製造業でもスーパー・小売・ホテル・病院は「営業時間中の連続稼働＋冷蔵・空調」という
          特性から、電気代負担が見かけより大きくなる業種があります。
          このページでは製造業・非製造業の基本比較から業種別の具体的な利益影響まで、
          数値と構造で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 製造業vs非製造業の基本比較テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            製造業vs非製造業の基本比較（8項目）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力原単位・使用時間・ピーク特性・契約区分・売上比・営業利益影響・転嫁力・見直し余地の
            8項目で、製造業と非製造業の特性を比較します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 w-1/3">比較項目</th>
                  <th className="border border-slate-200 px-3 py-2">製造業</th>
                  <th className="border border-slate-200 px-3 py-2">非製造業</th>
                </tr>
              </thead>
              <tbody>
                {BASIC_COMPARISON.map((row, i) => (
                  <tr
                    key={row.item}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900 align-top">
                      {row.item}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700 align-top">
                      {row.manufacturing}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700 align-top">
                      {row.nonManufacturing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 業種別の電気代/売上高比率テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種別の電気代/売上高比率と電力原単位
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            製造業（鉄鋼・化学・紙パルプ・食品・自動車）と非製造業（オフィス・小売・医療）の
            売上高比率・原価比率・電力原単位を業種別に整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-700">
                  <th className="border border-slate-200 px-3 py-2">業種</th>
                  <th className="border border-slate-200 px-3 py-2">区分</th>
                  <th className="border border-slate-200 px-3 py-2">売上高比率</th>
                  <th className="border border-slate-200 px-3 py-2">原価比率</th>
                  <th className="border border-slate-200 px-3 py-2">電力原単位</th>
                </tr>
              </thead>
              <tbody>
                {INDUSTRY_RATIOS.map((row, i) => (
                  <tr
                    key={row.industry}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.industry}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 text-xs font-medium ${
                        row.sector === "製造業"
                          ? "text-sky-700"
                          : "text-slate-500"
                      }`}
                    >
                      {row.sector}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">
                      {row.salesRatio}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.costRatio}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.unitConsumption}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 各比率は財務省法人企業統計・業界団体資料を参考とした概算レンジ。
            個社の生産品種・操業形態により実態は大きく異なる。
          </p>
        </section>

        {/* +10%値上げ時の利益影響テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気代+10%値上げ時の営業利益への影響テーブル
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代が10%上昇した場合、各業種の営業利益（利益率3%想定）がどの程度影響を受けるかを試算します。
            製造業の素材系では、利益の3〜4割が吹き飛ぶケースも珍しくありません。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-700">
                  <th className="border border-slate-200 px-3 py-2">業種（売上規模）</th>
                  <th className="border border-slate-200 px-3 py-2">区分</th>
                  <th className="border border-slate-200 px-3 py-2">年間電気代</th>
                  <th className="border border-slate-200 px-3 py-2">+10%増加額</th>
                  <th className="border border-slate-200 px-3 py-2">営業利益（目安）</th>
                  <th className="border border-slate-200 px-3 py-2">利益への影響</th>
                  <th className="border border-slate-200 px-3 py-2">深刻度</th>
                </tr>
              </thead>
              <tbody>
                {PROFIT_IMPACT_10PCT.map((row, i) => (
                  <tr
                    key={row.industry}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900 align-top">
                      {row.industry}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 text-xs font-medium align-top ${
                        row.sector === "製造業"
                          ? "text-sky-700"
                          : "text-slate-500"
                      }`}
                    >
                      {row.sector}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700 align-top">
                      {row.annualElectricity}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700 align-top">
                      {row.increase10pct}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600 text-xs align-top">
                      {row.operatingProfit}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800 align-top">
                      {row.profitImpact}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 align-top ${
                        SEVERITY_COLOR[row.severity]
                      }`}
                    >
                      {row.severity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 営業利益率3%で統一試算。電力コスト比率が高い業種（紙パルプ・鉄鋼・化学）では、
            実際の利益率がさらに低い場合もあり、影響は一層深刻になる。
          </p>
        </section>

        {/* 業種別の構造的違いを踏まえた対策の方向性 */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種構造別の対策方向性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            製造業と非製造業では、電気代削減で効果が出やすい施策の種類が異なります。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
              <h3 className="text-lg font-semibold text-sky-900">製造業の対策方向性</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-0.5 text-sky-600 font-bold shrink-0">①</span>
                  <span>
                    <span className="font-semibold">特別高圧・高圧の相対交渉・入札：</span>
                    使用量が大きい分、単価交渉の効果が絶大。複数社見積もりで年間数千万円〜億円単位の差が出ることもある。
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-sky-600 font-bold shrink-0">②</span>
                  <span>
                    <span className="font-semibold">デマンド管理・ピーク平準化：</span>
                    生産スケジュールを調整して最大需要電力（kW）を下げることで、基本料金を恒久的に削減できる。
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-sky-600 font-bold shrink-0">③</span>
                  <span>
                    <span className="font-semibold">省エネ設備更新・インバーター化：</span>
                    モーター・ポンプ・コンプレッサーのインバーター化は実績が豊富で費用対効果が計算しやすい。
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-sky-600 font-bold shrink-0">④</span>
                  <span>
                    <span className="font-semibold">自家発電・オンサイトPPA：</span>
                    屋根・遊休地の太陽光＋蓄電池でピーク時の系統電力依存を下げる。大型設備ほどROIが高い。
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">非製造業の対策方向性</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-0.5 text-slate-500 font-bold shrink-0">①</span>
                  <span>
                    <span className="font-semibold">契約メニュー・電力会社の見直し：</span>
                    高圧メニューの最適化・新電力比較。オフィス・商業施設は電力切り替えのハードルが低い。
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-slate-500 font-bold shrink-0">②</span>
                  <span>
                    <span className="font-semibold">空調・照明の省エネ化：</span>
                    非製造業の電気使用量の大半は空調・照明・給湯。機器更新・設定見直しで10〜20%の削減余地がある。
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-slate-500 font-bold shrink-0">③</span>
                  <span>
                    <span className="font-semibold">時間帯別料金の活用：</span>
                    業務時間を柔軟に調整できる施設は、夜間・低需要時間帯への移行で単価を下げられる場合がある。
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-slate-500 font-bold shrink-0">④</span>
                  <span>
                    <span className="font-semibold">テナント・賃貸施設は契約者の確認：</span>
                    オーナー側が電力会社・メニューを管理している場合は交渉窓口を確認し、共同での見直しを提案する。
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>・製造業（特に素材系）は電力原単位・売上高比ともに高く、電気代+10%が利益の20〜40%相当に達するケースもある。電気代は最優先コスト管理項目。</li>
            <li>・非製造業は全体として電気代比率が低いが、スーパー・ホテル・病院は原価比で5〜15%に達し、中小規模では利益への影響が無視できない水準になる。</li>
            <li>・製造業は「デマンド管理・省エネ設備・自家発電」が主な施策。非製造業は「契約メニュー見直し・空調照明省エネ・切り替え比較」から着手しやすい。</li>
            <li>・業種・規模を問わず、シミュレーターで「自社の電気代リスクスコア」を把握したうえで施策の優先順位を決めることが、実行効率を高める最初のステップ。</li>
          </ul>
        </section>
      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="manufacturing-vs-non-manufacturing-electricity-impact" terms={["高圧電力", "特別高圧", "契約電力", "デマンド値", "再エネ賦課金", "市場連動プラン"]} />
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/electricity-vs-other-business-costs",
              title: "電気料金上昇率と他の事業コスト上昇率を比較する",
              description:
                "電気代・人件費・原材料・物流・賃料の5大事業コストを2019→2025年で比較。業種別の対策優先度も整理。",
            },
            {
              href: "/sme-vs-large-company-electricity-impact",
              title: "中小企業と大企業で電気料金高騰の影響はどう違うか",
              description:
                "企業規模別の負担構造・交渉力・転嫁力の差と、中小企業が厳しい5つの構造的理由を解説。",
            },
            {
              href: "/business-electricity-price-benchmark",
              title: "業種別の電気代水準ベンチマーク",
              description:
                "自社の電気代が業種平均と比べて適正水準かを確認するための参考データ。",
            },
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の推移を10年で見る",
              description:
                "特別高圧・高圧・低圧の10年推移をグラフと年表で整理。急騰局面・補助政策の見え方も確認。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "製造業・非製造業を問わず共通する料金上昇の構造的要因を費目別に解説します。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気代リスクをシミュレーションする"
          description="業種・売上・電気代・利益率を入力するだけで、電気料金がさらに上昇した場合の利益影響を即時試算できます。製造業・非製造業を問わず、経営判断の根拠数値として活用できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            {
              href: "/articles/price-trends",
              label: "電気料金推移の解説記事一覧",
            },
          ]}
        />
      </div>
    </main>
  );
}
