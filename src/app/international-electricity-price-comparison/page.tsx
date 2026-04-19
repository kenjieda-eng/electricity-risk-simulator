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
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "日本の法人電気料金は国際的に見て高いのか｜主要国との産業用電力料金比較";
const pageDescription =
  "日本の産業用電気料金を米国・ドイツ・フランス・韓国・中国・英国と比較。為替補正後の単価差、日本が高い構造的理由、海外拠点との電力コスト比較の考え方を整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "日本 電気料金 国際比較",
    "産業用電気料金 海外 比較",
    "日本 電力コスト 高い 理由",
    "電気代 アメリカ ドイツ 比較",
    "法人 電気料金 製造業 国際競争力",
    "電気料金 韓国 中国 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/international-electricity-price-comparison",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/international-electricity-price-comparison",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/price-trends",
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
    images: ["/api/og/price-trends"],
  },
};

// 主要7カ国の産業用電気料金
const countryRows = [
  {
    country: "日本",
    jpy: 22,
    local: "22円/kWh",
    ratio: "100%（基準）",
    source: "LNG・石炭・石油火力中心。原発は一部再稼働中。",
    note: "base",
  },
  {
    country: "米国",
    jpy: 9,
    local: "約6〜7セント/kWh",
    ratio: "約41%",
    source: "天然ガス・石炭・原子力・再エネのバランス型。シェールガスで燃料コスト低。",
    note: "low",
  },
  {
    country: "ドイツ",
    jpy: 25,
    local: "約17〜20ユーロセント/kWh",
    ratio: "約114%",
    source: "再エネ比率高（50%超）だが系統安定化コストと賦課金が重い。",
    note: "high",
  },
  {
    country: "フランス",
    jpy: 14,
    local: "約10〜12ユーロセント/kWh",
    ratio: "約64%",
    source: "原子力が電源の70%超を占め、低コスト・低炭素を両立。",
    note: "low",
  },
  {
    country: "韓国",
    jpy: 10,
    local: "約90〜110ウォン/kWh",
    ratio: "約45%",
    source: "原子力・石炭比率が高く、政府が産業向けを政策的に抑制。",
    note: "low",
  },
  {
    country: "中国",
    jpy: 8,
    local: "約0.5〜0.65元/kWh",
    ratio: "約36%",
    source: "石炭火力が主力。政府による価格統制で産業向けを低水準に維持。",
    note: "low",
  },
  {
    country: "英国",
    jpy: 21,
    local: "約14〜17ペンス/kWh",
    ratio: "約95%",
    source: "天然ガス依存が高く、ロシア・ウクライナ以降に急騰。再エネ賦課金も重い。",
    note: "high",
  },
];

// 日本が高い構造的理由
const structuralReasons = [
  {
    reason: "資源輸入依存（化石燃料）",
    detail: "日本は一次エネルギーの約90%を輸入に頼る。LNG・石炭・石油の国際価格と為替が直接コストに転嫁される。",
    impact: "燃料費調整制度を通じて毎月の単価に上乗せされる。",
  },
  {
    reason: "島国・細長い地形による送配電コスト",
    detail: "本州・北海道・九州・四国・沖縄が分断された系統を持ち、地形的に送電距離が長い。規模の経済が働きにくい。",
    impact: "託送料金（系統利用料）が割高になり、新電力も含めた調達コストを押し上げる。",
  },
  {
    reason: "原発の長期停止",
    detail: "東日本大震災後の安全審査強化で多数の原発が停止。低コストなベース電源が失われ、火力への依存が高まった。",
    impact: "燃料費増＋CO2費用増が発電コストを直接引き上げた。再稼働が進む関西・九州では単価が低い。",
  },
  {
    reason: "再エネ賦課金の累積",
    detail: "FIT（固定価格買取制度）の拡大で再エネ賦課金が上昇し続けてきた。2023年度の賦課金単価は1.4円/kWhを超えた。",
    impact: "全電力消費者が一律に負担。大口契約でも免除は一定規模以上の特例のみ。",
  },
  {
    reason: "為替リスクの非対称性",
    detail: "燃料はドル建てで調達するため、円安が進むとコストが自動的に増加する。逆に円高では遅れて下がりにくい。",
    impact: "2022〜2023年の急激な円安（130〜150円台）が燃料コストを大幅に押し上げた。",
  },
];

// 電力以外のコスト比較
const nonElectricityCosts = [
  {
    item: "人件費（製造業平均）",
    japan: "高水準（先進国内では中位）",
    china: "低水準（日本の1/5〜1/4程度）",
    us: "高水準（日本とほぼ同等〜やや高い）",
    germany: "高水準（日本より高い）",
  },
  {
    item: "物流・輸送コスト",
    japan: "国内輸送は高め。海上輸送の利便性は高い",
    china: "国内は低コスト。国際港湾インフラ充実",
    us: "広大な国土で輸送コスト変動大",
    germany: "欧州内陸輸送に強み。港湾も充実",
  },
  {
    item: "土地・建設コスト",
    japan: "都市部は高い。地方は低コスト選択肢あり",
    china: "安価だが近年上昇傾向",
    us: "地域差大。サンベルト地帯は低コスト",
    germany: "欧州内では中程度",
  },
  {
    item: "法人税率",
    japan: "実効税率約30%",
    china: "25%（優遇措置で実質低下あり）",
    us: "連邦21%+州税",
    germany: "約29〜33%",
  },
  {
    item: "技術・品質インフラ",
    japan: "高品質。停電少なく電圧安定",
    china: "地域差あり。電力品質の安定性に課題も",
    us: "地域差あり。停電リスクは日本より高い",
    germany: "高品質。EUインフラの恩恵あり",
  },
];

// 法人が知っておくべき5項目
const keyPoints = [
  "日本の産業用電気料金は主要先進国の中でも高い部類に入るが、ドイツ・英国と比べると突出して高いわけではない",
  "韓国・中国との差（2〜3倍）は製造コストの競争力に直結するため、電力多消費型産業では特に注意が必要",
  "フランスが安い理由は原子力政策に基づくもので、エネルギーミックス政策の差が単価差の根本にある",
  "電力コストだけで工場立地を決定するのは危険で、人件費・物流・法規制・品質水準を総合して判断する必要がある",
  "国内においても、エリア選択・契約プランの見直し・省エネ設備投資で電力コストを改善できる余地は残っている",
];

export default function InternationalElectricityPriceComparisonPage() {
  return (
    <>
      <ArticleJsonLd
        headline="日本の法人電気料金は国際的に見て高いのか｜主要国との産業用電力料金比較"
        description="日本の産業用電気料金を米国・ドイツ・フランス・韓国・中国・英国と比較。為替補正後の単価差、日本が高い構造的理由、海外拠点との電力コスト比較の考え方を整理。"
        url="https://simulator.eic-jp.org/international-electricity-price-comparison"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "日本の法人電気料金は国際的に見て高いのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav aria-label="パンくず" className="mb-4 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link
              href="/"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              ホーム
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li>
            <Link
              href="/articles/price-trends"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金の推移と高止まり
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="text-slate-700">国際比較</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          日本の法人電気料金は国際的に見て高いのか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「日本の電気代は海外と比べて高い」という声は製造業や物流業を中心によく聞かれます。
          しかし「どの国と比べて」「どの程度高いのか」という定量的な把握は意外と難しいものです。
          本ページでは主要7カ国の産業用（法人向け）電気料金を為替補正後の円換算で横並びにし、
          日本の単価水準が高くなっている構造的な理由と、海外拠点との電力コスト比較を考える際の視点を整理します。
        </p>
      </header>

      <div className="mt-8 space-y-8">

        {/* 1. 主要7カ国の産業用電気料金テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            主要7カ国の産業用電気料金比較
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下表は各国の産業用（製造業・大口法人向け）電気料金を2024〜2025年時点の為替レートで円換算した参考値です。
            日本を100%として各国の水準を比較しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">国</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">円換算単価<br/><span className="font-normal text-xs text-slate-500">円/kWh目安</span></th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">現地通貨建て単価</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">日本比</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">主な電源構成・背景</th>
                </tr>
              </thead>
              <tbody>
                {countryRows.map((row, i) => (
                  <tr
                    key={row.country}
                    className={`border-b border-slate-100 ${row.note === "base" ? "bg-sky-50" : row.note === "high" ? "bg-orange-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className={`px-3 py-2 font-semibold ${row.note === "base" ? "text-sky-900" : row.note === "high" ? "text-orange-800" : "text-slate-800"}`}>
                      {row.country}
                      {row.note === "base" && <span className="ml-2 rounded bg-sky-200 px-1.5 py-0.5 text-xs text-sky-800">基準</span>}
                    </td>
                    <td className={`px-3 py-2 text-right font-semibold ${row.note === "high" ? "text-orange-700" : row.note === "low" ? "text-emerald-700" : "text-slate-800"}`}>
                      {row.jpy}円
                    </td>
                    <td className="px-3 py-2 text-slate-600">{row.local}</td>
                    <td className={`px-3 py-2 text-right font-medium ${row.note === "high" ? "text-orange-700" : row.note === "low" ? "text-emerald-700" : "text-slate-700"}`}>
                      {row.ratio}
                    </td>
                    <td className="px-3 py-2 text-slate-600 text-xs">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※参考値。IEAデータ・各国エネルギー機関公表値・業界調査をもとに2024〜2025年時点で整理。為替は1USD=150円、1EUR=160円、1GBP=190円、1KRW=0.11円、1CNY=21円を参考に換算。実際の単価は契約規模・電圧区分・地域により異なります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
              <p className="text-xs font-semibold text-emerald-800">最も安い：中国（8円）</p>
              <p className="mt-1 text-sm text-emerald-700">政府の価格統制と石炭火力主体により、日本の約1/3水準。製造業コスト競争力の差に直結。</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3">
              <p className="text-xs font-semibold text-red-800">最も高い：ドイツ（25円）</p>
              <p className="mt-1 text-sm text-red-700">再エネ転換コストと賦課金の重さが日本を上回る。脱原発・脱石炭政策のコストが表れている。</p>
            </div>
            <div className="rounded-lg border border-sky-200 bg-sky-50 p-3">
              <p className="text-xs font-semibold text-sky-800">フランスが安い理由（14円）</p>
              <p className="mt-1 text-sm text-sky-700">原子力が電源の70%超を占め、低コスト・低炭素を両立。日本が目指す方向性の一例。</p>
            </div>
          </div>
        </section>

        {/* 2. 日本が高い構造的理由 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            日本の電気料金が高くなっている5つの構造的理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本の産業用電気料金が高い水準にある理由は、単一の要因ではなく、複数の構造的な問題が重なっています。
            以下の5要因は、いずれも短期間での解消が難しいものです。
          </p>
          <div className="mt-4 space-y-3">
            {structuralReasons.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.reason}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{item.detail}</p>
                    <p className="mt-1 text-xs text-orange-700">
                      <span className="font-semibold">法人への影響：</span>{item.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 「安い国に工場を」は単純か */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「安い国に工場を」は単純か——電力以外のコスト比較
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力単価が日本の1/3程度の中国や、1/2以下の米国・韓国への工場移転は、電力コストの観点では理にかなっているように見えます。
            しかし実際には、人件費・物流・土地コスト・法人税・インフラ品質など多数の要素を総合して判断する必要があります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">コスト項目</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">日本</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">中国</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">米国</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">ドイツ</th>
                </tr>
              </thead>
              <tbody>
                {nonElectricityCosts.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-3 py-2 font-medium text-slate-800 whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-2 text-slate-700 text-xs">{row.japan}</td>
                    <td className="px-3 py-2 text-slate-700 text-xs">{row.china}</td>
                    <td className="px-3 py-2 text-slate-700 text-xs">{row.us}</td>
                    <td className="px-3 py-2 text-slate-700 text-xs">{row.germany}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-sky-900">電力コストが立地判断の主要因になるケースとならないケース</p>
            <div className="mt-2 grid gap-3 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-slate-700">主要因になりやすい業種</p>
                <ul className="mt-1 space-y-1 text-xs text-slate-600">
                  <li>・電炉製鋼・アルミ精錬など電力集約型</li>
                  <li>・半導体・液晶など大型クリーンルーム製造</li>
                  <li>・データセンター（年間GWh超の使用）</li>
                  <li>・電気分解系の化学プロセス</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-700">電力以外の要因が勝るケース</p>
                <ul className="mt-1 space-y-1 text-xs text-slate-600">
                  <li>・精密加工・高品質志向の製造業</li>
                  <li>・国内市場向けの食品・飲料・日用品</li>
                  <li>・高度技術を要するサプライチェーン依存型</li>
                  <li>・インフラ品質（電圧安定性・停電頻度）が製品品質に直結する業種</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 法人が国際比較で知っておくべきこと */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人が国際比較から知っておくべき5項目
          </h2>
          <ol className="mt-4 space-y-3">
            {keyPoints.map((item, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                  {i + 1}
                </span>
                <span className="text-sm leading-6 text-slate-700">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページのまとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>・日本の産業用電気料金（22円/kWh）は、米国・韓国・中国より割高で、ドイツ・英国とは同水準</li>
            <li>・高い理由は化石燃料輸入依存・島国構造・原発停止・再エネ賦課金・円安の5要因が重なっているため</li>
            <li>・フランス（原子力主体）や米国（シェールガス）との差は政策的・地理的な構造差から来ており、短期解消は難しい</li>
            <li>・電力コストだけで海外拠点との比較を行うのは危険で、人件費・物流・品質インフラを含めた総コスト比較が必要</li>
            <li>・国内でできる対策（契約見直し・エリア最適化・省エネ設備）を先に検討することが現実的な第一歩</li>
          </ul>
        </section>
      </div>

      <div className="mt-6">
        <GlossaryLinks currentSlug="international-electricity-price-comparison" terms={["再エネ賦課金", "燃料費調整額", "容量拠出金", "託送料金", "高圧電力"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の推移を10年で見る",
              description: "急騰・高止まり・補助政策の流れを長期視点で整理したハブページ。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "電気料金の推移（2019〜2025年）",
              description: "直近6年の推移を年度別に整理し、上昇の背景を解説。",
            },
            {
              href: "/lng-electricity-price",
              title: "LNG価格と電気料金の関係",
              description: "輸入LNG価格が電気料金に波及する仕組みと推移を解説。",
            },
            {
              href: "/wheeling-charge-explained",
              title: "託送料金（系統利用料）とは",
              description: "日本の電気料金に含まれる送配電コストの構造を解説。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "現在の契約プランが自社にとって最適かどうかを診断できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="国内でできるコスト対策をシミュレーションする"
          description="海外との差は構造的ですが、国内の契約見直しで改善できる余地は残っています。まず現状を把握しましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/price-trends", label: "推移と高止まりの解説を読む" },
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
