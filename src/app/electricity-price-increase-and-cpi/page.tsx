import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


// --- 定数 ---
const pageTitle =
  "電気料金の値上げと物価の関係｜CPIに占める電気代の影響と経営への示唆";
const pageDescription =
  "電気料金の値上げが物価指数（CPI・企業物価指数）にどう影響するかを解説。電気代のCPI寄与度、他の光熱費との比較、業種別のコスト構造への影響を整理。経営層の判断材料に。";

// --- CPIウェイト・寄与度データ ---
const cpiWeightData = [
  {
    category: "食料",
    weight: "約2,620",
    contribution: "+1.3%pt",
    note: "最大ウェイト",
  },
  {
    category: "電気代",
    weight: "約350",
    contribution: "+0.5〜0.8%pt",
    note: "エネルギーの中核",
  },
  {
    category: "ガス代",
    weight: "約170",
    contribution: "+0.2〜0.3%pt",
    note: "電気より小さい",
  },
  {
    category: "ガソリン",
    weight: "約180",
    contribution: "+0.2〜0.4%pt",
    note: "変動大",
  },
  {
    category: "住居",
    weight: "約2,100",
    contribution: "+0.1%pt",
    note: "家賃は安定的",
  },
];

// --- 光熱費推移データ ---
const utilityIndexData = [
  {
    year: "2020",
    electricity: "100.0",
    gas: "100.0",
    water: "100.0",
    yoy: "―",
  },
  {
    year: "2021",
    electricity: "105.2",
    gas: "105.8",
    water: "100.3",
    yoy: "+5.2%",
  },
  {
    year: "2022",
    electricity: "121.8",
    gas: "118.5",
    water: "101.2",
    yoy: "+15.8%",
  },
  {
    year: "2023",
    electricity: "112.4",
    gas: "108.2",
    water: "102.5",
    yoy: "▲7.7%（補助金効果）",
  },
  {
    year: "2024",
    electricity: "118.5",
    gas: "106.8",
    water: "103.1",
    yoy: "+5.4%",
  },
];

// --- PPI業種別影響データ ---
const ppiImpactData = [
  {
    industry: "鉄鋼・非鉄金属",
    costRatio: "5〜10%",
    profitImpact: "▲0.5〜1.0%pt",
    transferability: "中（国際市況連動）",
  },
  {
    industry: "化学",
    costRatio: "5〜8%",
    profitImpact: "▲0.4〜0.8%pt",
    transferability: "中",
  },
  {
    industry: "紙パルプ",
    costRatio: "8〜12%",
    profitImpact: "▲0.8〜1.2%pt",
    transferability: "低（価格交渉力弱い）",
  },
  {
    industry: "食品製造",
    costRatio: "3〜6%",
    profitImpact: "▲0.3〜0.6%pt",
    transferability: "低（消費者価格に直結）",
  },
  {
    industry: "小売・流通",
    costRatio: "2〜4%",
    profitImpact: "▲0.2〜0.4%pt",
    transferability: "低（競争激しい）",
  },
  {
    industry: "IT・データセンター",
    costRatio: "10〜20%",
    profitImpact: "▲1.0〜2.0%pt",
    transferability: "中（サービス料金に転嫁）",
  },
  {
    industry: "病院・医療",
    costRatio: "3〜5%",
    profitImpact: "▲0.3〜0.5%pt",
    transferability: "不可（診療報酬固定）",
  },
];

// --- 経営インパクト試算データ ---
const impactSimData = [
  {
    scale: "中小企業",
    sales: "5億円",
    electricityCost: "1,200万円",
    ratio: "2.4%",
    increase20: "+240万円",
    profitImpact: "▲0.5%pt",
  },
  {
    scale: "中堅企業",
    sales: "50億円",
    electricityCost: "8,000万円",
    ratio: "1.6%",
    increase20: "+1,600万円",
    profitImpact: "▲0.3%pt",
  },
  {
    scale: "大企業（製造）",
    sales: "500億円",
    electricityCost: "15億円",
    ratio: "3.0%",
    increase20: "+3億円",
    profitImpact: "▲0.6%pt",
  },
  {
    scale: "大企業（非製造）",
    sales: "500億円",
    electricityCost: "5億円",
    ratio: "1.0%",
    increase20: "+1億円",
    profitImpact: "▲0.2%pt",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 物価",
    "電気代 CPI",
    "電気代 消費者物価指数",
    "電気料金 企業物価指数",
    "電気代 値上げ 影響",
    "電気代 コスト 業種別",
    "電力コスト 経営 影響",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-price-increase-and-cpi",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-price-increase-and-cpi",
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

// --- Page Component ---
export default function ElectricityPriceIncreaseAndCpiPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電気料金の値上げと物価の関係｜CPIに占める電気代の影響と経営への示唆"
        description="電気料金の値上げが物価指数（CPI・企業物価指数）にどう影響するかを解説。電気代のCPI寄与度、他の光熱費との比較、業種別のコスト構造への影響を整理。経営層の判断材料に。"
        url="https://simulator.eic-jp.org/electricity-price-increase-and-cpi"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電気料金の値上げと物価の関係" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずナビ">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link
              href="/articles/price-increase"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              料金が上がる理由を知る
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-slate-700">電気料金と物価の関係</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-sky-600">
          料金が上がる理由を知る
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気料金の値上げと物価の関係
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の値上げは、家計の消費者物価指数（CPI）だけでなく、企業の調達コスト・製品価格にも波及します。
          本ページでは、電気代がCPI・企業物価指数（PPI）に占める位置づけを整理したうえで、
          業種別のコスト構造への影響と、経営層が押さえておくべき視点を解説します。
        </p>
      </header>

      {/* 本文セクション群 */}
      <div className="mt-6 space-y-6">

        {/* CPIに占める電気代の位置づけ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            CPIに占める電気代の位置づけ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            総務省の消費者物価指数（CPI）は、品目ごとに「ウェイト（重み）」を設定し、それぞれの価格変動を加重平均して算出します。
            電気代のウェイトは食料・住居に比べて小さいものの、2022〜2023年にかけての急激な上昇率が
            CPI全体を大きく押し上げた主因の一つとなりました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-600">
                  <th className="border border-slate-200 px-3 py-2">費目</th>
                  <th className="border border-slate-200 px-3 py-2">CPIウェイト（10,000分の）</th>
                  <th className="border border-slate-200 px-3 py-2">2022年の寄与度</th>
                  <th className="border border-slate-200 px-3 py-2">特徴</th>
                </tr>
              </thead>
              <tbody>
                {cpiWeightData.map((row, i) => (
                  <tr
                    key={row.category}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td
                      className={`border border-slate-200 px-3 py-2 font-medium ${
                        row.category === "電気代" ? "text-sky-700" : "text-slate-800"
                      }`}
                    >
                      {row.category}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.weight}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 font-semibold ${
                        row.category === "電気代" ? "text-orange-600" : "text-slate-700"
                      }`}
                    >
                      {row.contribution}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 電気代はウェイトは小さいが変動率が大きいためCPI寄与度が高い。出所：総務省「消費者物価指数」をもとに整理。
          </p>
        </section>

        {/* 電気代・ガス代・水道代の推移比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気代・ガス代・水道代の推移比較
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2020年を基準（100）として、主要光熱費の指数推移を比較すると、電気代の変動幅が突出して大きいことがわかります。
            2022年のエネルギー価格高騰時には電気代指数が約22%上昇した一方、
            2023年は政府の電気・ガス価格激変緩和措置（補助金）の効果で一時的に下落しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-600">
                  <th className="border border-slate-200 px-3 py-2">年</th>
                  <th className="border border-slate-200 px-3 py-2">電気代指数（2020=100）</th>
                  <th className="border border-slate-200 px-3 py-2">ガス代指数</th>
                  <th className="border border-slate-200 px-3 py-2">水道代指数</th>
                  <th className="border border-slate-200 px-3 py-2">電気代の前年比</th>
                </tr>
              </thead>
              <tbody>
                {utilityIndexData.map((row, i) => (
                  <tr
                    key={row.year}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                      {row.year}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">
                      {row.electricity}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.gas}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.water}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 font-semibold ${
                        row.yoy.startsWith("+")
                          ? "text-orange-600"
                          : row.yoy.startsWith("▲")
                          ? "text-emerald-600"
                          : "text-slate-500"
                      }`}
                    >
                      {row.yoy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 電気代は他の光熱費と比べて変動幅が突出して大きい。出所：総務省「消費者物価指数」をもとに推計。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-amber-800">
              <span className="font-semibold">補助金終了後の注意点：</span>
              2023年の下落は政府補助金による人為的な抑制効果であり、補助金終了後の2024年以降は
              再び上昇基調に転じています。構造的なコスト削減策を並行して検討することが重要です。
            </p>
          </div>
        </section>

        {/* 企業物価指数（PPI）への影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            企業物価指数（PPI）への影響
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            企業物価指数（PPI）は企業間で取引される財・サービスの価格動向を示す指標です。
            電力多消費型の製造業では、電気代の上昇がコスト増を通じてPPIを押し上げ、最終製品価格への転嫁圧力となります。
            以下は業種別の電気代コスト比率と、電気代10%上昇時の利益率への影響の目安です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-600">
                  <th className="border border-slate-200 px-3 py-2">業種</th>
                  <th className="border border-slate-200 px-3 py-2">電気代がコストに占める割合（目安）</th>
                  <th className="border border-slate-200 px-3 py-2">電気代+10%時の利益率影響</th>
                  <th className="border border-slate-200 px-3 py-2">価格転嫁のしやすさ</th>
                </tr>
              </thead>
              <tbody>
                {ppiImpactData.map((row, i) => (
                  <tr
                    key={row.industry}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                      {row.industry}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.costRatio}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-600">
                      {row.profitImpact}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 ${
                        row.transferability.startsWith("低") || row.transferability.startsWith("不可")
                          ? "text-red-600 font-medium"
                          : "text-slate-700"
                      }`}
                    >
                      {row.transferability}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 電気代のコスト比率・利益率影響は業種内の企業規模や操業形態により大きく異なる。上記は目安として参照のこと。
          </p>
        </section>

        {/* 電気料金値上げの経営インパクト試算 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気料金値上げの経営インパクト試算
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代が20%上昇した場合、企業の年間コスト増加額と営業利益率への影響を企業規模別に試算します。
            製造業の大企業では絶対額が大きく、中小企業では利益率へのインパクトが相対的に重くなる傾向があります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-600">
                  <th className="border border-slate-200 px-3 py-2">企業規模</th>
                  <th className="border border-slate-200 px-3 py-2">年間売上</th>
                  <th className="border border-slate-200 px-3 py-2">年間電気代</th>
                  <th className="border border-slate-200 px-3 py-2">電気代比率</th>
                  <th className="border border-slate-200 px-3 py-2">電気代+20%の場合</th>
                  <th className="border border-slate-200 px-3 py-2">営業利益率への影響</th>
                </tr>
              </thead>
              <tbody>
                {impactSimData.map((row, i) => (
                  <tr
                    key={row.scale}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                      {row.scale}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.sales}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.electricityCost}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.ratio}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-600">
                      {row.increase20}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-red-600">
                      {row.profitImpact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 試算は概算値。実際の影響は業種・電力使用形態・契約内容により異なる。営業利益率影響は売上高営業利益率ベースで計算。
          </p>
        </section>

        {/* 経営層が押さえたい3つの視点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            経営層が押さえたい3つの視点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金と物価の関係を踏まえると、経営判断において以下の3点が特に重要になります。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {/* 視点1 */}
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                電気代は「コスト」であると同時に「市場リスク」
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                電気代はLNG・原油価格、為替レート、JEPX市場価格と連動して変動します。
                固定費として扱うのではなく、為替リスクや商品価格リスクと同様に
                「市場リスク」として管理することが求められます。
                燃料費調整額の上限撤廃以降、特にこの性格が強まっています。
              </p>
            </div>
            {/* 視点2 */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                価格転嫁の可否が業種により異なる
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                製造業でも「国際市況連動型」の業種は一定の転嫁余地がありますが、
                食品製造・小売・医療などは消費者や診療報酬の制約から転嫁が困難です。
                自社業種の転嫁余地を正確に把握し、転嫁できない場合のコスト削減策を
                あらかじめ準備しておくことが重要です。
              </p>
            </div>
            {/* 視点3 */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                予算管理は固定値ではなくレンジで
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                年間電気代を単一の数値で予算計上すると、燃料費調整額の急変動時に
                予実乖離が拡大します。「基本シナリオ」「上振れシナリオ（+20%）」
                「下振れシナリオ（▲10%）」のレンジで予算を組み、
                経営層にシナリオ別の利益感応度を可視化しておくことが有効です。
              </p>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
              <span>
                電気代のCPIウェイトは約350（10,000分の）と小さいが、変動率の大きさから
                CPI全体への寄与度が高く、2022年は+0.5〜0.8%ptの押し上げ要因となった。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
              <span>
                電気代指数は他の光熱費（ガス・水道）と比べて変動幅が突出しており、
                2020〜2022年の2年間で約22%上昇した。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
              <span>
                電力多消費型の業種（紙パルプ・IT・鉄鋼など）ほど電気代コスト比率が高く、
                値上がり時の利益率インパクトが大きい。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
              <span>
                価格転嫁が難しい業種（食品・小売・医療）は、コスト削減と節電対策を
                並行して講じることが経営上の優先課題となる。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
              <span>
                電気代をシナリオ別にリスク管理するためには、シミュレーターによる
                自社コストの可視化が第一歩となる。
              </span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-6">
        <GlossaryLinks currentSlug="electricity-price-increase-and-cpi" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "電力量料金", "市場連動プラン"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "燃料価格・為替・再エネ賦課金など、電気代値上がりの主要因を解説します。",
            },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "電気料金はどれくらい上がったのか",
              description: "実際の値上がり幅を数値データで整理。業種・規模別の比較も掲載。",
            },
            {
              href: "/executive-ebitda-impact",
              title: "電気料金上昇がEBITDAに与える影響",
              description: "経営指標（EBITDA・営業利益）への定量的なインパクトを解説します。",
            },
            {
              href: "/executive-business-continuity-risk",
              title: "電力コスト上昇と事業継続リスク",
              description: "電気代高騰が事業継続計画（BCP）に与えるリスクを整理します。",
            },
            {
              href: "/business-electricity-price-benchmark",
              title: "法人電気料金のベンチマーク比較",
              description: "業種・規模別の電気料金水準を比較し、自社の水準を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "現在の契約プランが自社に最適かどうかを診断できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "消費者物価と比較しながら電気料金の推移実態を確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社のコスト構造をシミュレーションで可視化する"
          description="電気代が10〜30%上昇した場合に、自社の年間コストと利益率がどう変わるかをシミュレーターで確認できます。経営会議・予算策定の資料作りにもご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/price-increase", label: "値上がりの理由を学ぶ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
