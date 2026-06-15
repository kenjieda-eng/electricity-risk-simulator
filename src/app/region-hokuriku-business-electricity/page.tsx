import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { JEPX_AREA_YEARLY_AVG } from "../../data/jepxData";
import { DEMAND_AREA_FY, LOAD_FACTOR_FY, DEMAND_AREA_SHARE } from "../../data/demandData";
import { getWeatherByRegion } from "../../data/weatherData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import TableOfContents from "../../components/market-data/TableOfContents";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["by-region"];

const faqItems = [
  { question: "北陸電力の高水力比率は法人料金にどう影響しますか？", answer: "北陸電力エリアは黒部・神通川・庄川など豊富な水力資源を持ち、水力比率が全国最高水準です。水力は燃料費がほぼかからず、燃料費調整額のプラス幅が他エリアより小さい構造的優位があります。結果、北陸電力の高圧電力量料金は全国比で割安グループ（14〜15円/kWh前後）に位置します。ただし渇水年は出水率低下で火力代替が増え、料金優位が縮小するリスクがあります。" },
  { question: "富山・石川・福井で業種別の電気代特性に違いは？", answer: "富山県は薬品・アルミ精錬・電子部品など重電力消費業種が集積し、石川県は繊維・機械、福井県は繊維・原発関連と機械加工が中心。アルミ精錬は電力消費が極めて大きく、電気代の事業コスト比率が30%を超える場合もあります。県ごとの主要業種に応じて、契約電力規模・契約形態（特別高圧/高圧）の最適解は異なります。" },
  { question: "北陸の融雪需要と冬季ピーク対策はどうすればよいですか？", answer: "北陸地方は積雪が多く、商業施設や公共施設の融雪・ロードヒーティング需要が冬季のピーク需要を形成します。融雪は12〜3月に集中するため、契約電力（kW）も冬季最大需要で決まりがちです。融雪をガス・灯油代替に切り替える、あるいは蓄熱式融雪に置換することで、契約電力ピークを冬季から夏季に分散させ基本料金を引き下げる事例があります。" },
  { question: "北陸新電力の少なさは契約交渉でメリットですか？", answer: "新電力数が30〜40社程度と他エリアより少ないため、価格競争による単価引き下げ余地は他エリアより小さい構造です。一方、長期安定供給契約の交渉余地、地場系（北陸電力グループ・北陸ガスグループ）との関係構築のメリットは相対的に大きいです。短期の単価最安より、中長期の供給安定性を重視する経営判断が定石です。" },
  { question: "北陸電力の出水率連動料金リスクは？", answer: "水力比率が高いゆえに、雪解け水・梅雨・台風による出水率（水力発電可能量）が燃料費調整額に影響します。渇水年は火力代替で燃調費プラス幅が拡大、豊水年はマイナス側に振れることもあります。法人需要家としては、渇水シナリオでの上振れリスクを年次予算の保守的バッファとして組み込むのが定石です。" },
  { question: "北陸エリアの製造業削減事例の典型値は？", answer: "業界平均レンジとして、アルミ精錬・電解工場（特別高圧、年間1億kWh級）で年間500〜1,500万円（5〜10%）、薬品・電子部品工場（高圧、年間500万kWh級）で年間200〜500万円（5〜8%）、繊維・機械工場（高圧、年間100万kWh級）で年間40〜120万円（5〜10%）の削減事例が報告されています。冬季融雪需要のピークシフトが特に効きやすい地域特性です。" },
  { question: "北陸電力の特別高圧契約はどんな業種が対象ですか？", answer: "契約電力2,000kW以上の需要家が対象で、富山県のアルミ精錬・電解業界、福井県の原発関連・機械加工大手、石川県の大型工場が代表例です。特別高圧契約では電力会社との相対契約・個別交渉が中心となり、託送料金・インバランス料金・容量拠出金の扱いを精緻に詰める必要があります。" },
];

const sourcesItems = [
  { name: "北陸電力", url: "https://www.rikuden.co.jp/", description: "北陸電力エリアの法人向け料金プラン情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・北陸地方需給情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp", description: "北陸エリアの需給・系統情報" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit", description: "エリア別の電力単価・統計（公開情報ベースの目安）" },
];


const pageTitle = "北陸電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況";
const pageDescription =
  "北陸電力エリア（富山・石川・福井・岐阜一部）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、2023〜2026年の料金改定動向、水力豊富な電源構成と2023年大幅値上げの影響、新電力の参入状況を解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-hokuriku-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "北陸電力 法人",
    "北陸エリア 電気料金",
    "富山 石川 福井 高圧電力",
    "北陸電力 料金改定",
    "北陸 新電力",
    "法人電気代 北陸",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/by-region", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/by-region"],
  },
};

const prefectures = [
  "富山県",
  "石川県",
  "福井県",
  "岐阜県（一部）",
];

const areaBasicInfo = [
  { label: "担当都道府県", value: "富山県・石川県・福井県・岐阜県（一部）" },
  { label: "旧一般電気事業者", value: "北陸電力" },
  { label: "送配電事業者", value: "北陸電力送配電" },
  { label: "小売事業者", value: "北陸電力（小売部門）" },
  { label: "管内面積（概算）", value: "約 12,600 km²（全国最小クラス）" },
  { label: "管内世帯数（概算）", value: "約 130万世帯" },
  { label: "法人需要家数の目安", value: "約 15万口（高圧以上：約 1万口）" },
  { label: "電源構成の特徴", value: "水力約 25〜30%（包蔵水力が全国屈指）、原子力（志賀原発の動向注視）、石炭火力約 20%、LNG約 15%" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 10〜15%（全国最低水準）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,300〜1,600 円/kW",
    ryoryo: "約 10〜13 円/kWh",
    nencho: "燃調費別途",
    note: "大工場・大型施設向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,400〜1,700 円/kW",
    ryoryo: "約 12〜15 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・工場向け",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 850〜1,050 円/kW",
    ryoryo: "約 13〜16 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年4月",
    content: "規制料金（家庭向け）が約 46% の大幅値上げ。企業向けも約 20〜25% 上昇し、全国最安水準の地位が揺らぎ始めた。",
  },
  {
    date: "2023年12月",
    content: "燃料費調整額の基準燃料価格を改定。LNG・石炭価格の高止まりを反映してプラス幅が拡大。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。高圧・特別高圧需要家の契約単価に容量市場調達コストが転嫁される形となった。",
  },
  {
    date: "2024年10月",
    content: "電気・ガス料金激変緩和措置が段階的縮小・終了。法人の請求額が再び上昇。アルミ・化学など電力多消費産業への影響が大きかった。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金が 3.49 円/kWh に引き上げ（前年比 +0.4 円程度）。高圧以上の影響も大きい。",
  },
  {
    date: "2026年4月（直近）",
    content: "LNG・石炭価格のやや落ち着きにより燃調費プラス幅はわずかに縮小傾向。志賀原発の再稼働審査の進展が中長期の料金安定化の鍵となる。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "需要規模が全国最小クラスであり、新電力にとって採算が取りにくいエリア。参入社数は全国最低水準で、高圧向けに実績のある事業者は数十社程度（2024年時点）。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022年のエネルギー危機以降、北陸でも新規受付を停止した新電力が確認されている。もともとの参入数が少ないため、撤退後の選択肢が極めて限定的になっている。",
  },
  {
    category: "市場シェア推移",
    detail:
      "新電力シェアは 10〜15% で推移しており、全国平均（30% 超）を大きく下回る。需要密度の低さと旧一電の競争力ある料金水準が新電力の参入を抑制している。",
  },
  {
    category: "価格競争力",
    detail:
      "2023年の大幅値上げ前は北陸電力の料金が全国最安水準であったため、新電力の削減メリットが薄かった。値上げ後は競争余地が若干拡大しているが、需要規模の小ささから参入社数は依然として少ない。",
  },
];

export default function RegionHokurikuBusinessElectricityPage() {
  const weather = getWeatherByRegion("hokuriku");
  return (
    <>
      <ArticleJsonLd
        headline="北陸電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況"
        description="北陸電力エリア（富山・石川・福井・岐阜一部）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、2023〜2026年の料金改定動向、水力豊富な電源構成と2023年大幅値上げの影響、新電力の参入状況を解説します。"
        url="https://simulator.eic-jp.org/region-hokuriku-business-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "北陸電力エリアの法人電気代事情" },
        ]}
      faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">北陸電力エリアの事情</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          北陸電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">料金水準・改定動向・新電力状況</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          北陸電力エリア（富山・石川・福井・岐阜一部）は豊富な包蔵水力を背景に長らく全国最安水準の電気料金を誇っていましたが、
          2023年4月の大幅値上げ（家庭向け約 46% ・企業向け約 20〜25%）でその地位は揺らぎました。
          アルミ・化学など電力多消費産業が集積しており、電気料金の動向が産業競争力に直結するエリアです。
          本ページでは、エリアの基本情報・料金水準・改定動向・新電力状況・
          契約見直しポイントを詳しく解説します。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {prefectures.map((p) => (
            <span
              key={p}
              className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800"
            >
              {p}
            </span>
          ))}
        </div>
      </header>

      <AuthorBadge publishedAt="2026-04-12" updatedAt="2026-04-12" />
      <TableOfContents />

      {/* エリア基本情報テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ北陸電力エリアの法人電気料金見直しが重要なのか — 高水力比率と地場産業</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          北陸電力エリアの規模感・事業者構成を確認してください。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">
                  項目
                </th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">
                  内容
                </th>
              </tr>
            </thead>
            <tbody>
              {areaBasicInfo.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700 whitespace-nowrap">
                    {row.label}
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 料金水準テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">北陸電力の法人向け料金体系（水力比率を活かした料金構造）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は北陸電力の標準メニューをベースにした概算値です。
          燃料費調整額・再エネ賦課金（2026年4月時点: 3.49 円/kWh）は別途加算されます。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">メニュー区分</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">基本料金目安</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">電力量料金目安</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">燃調・賦課金</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">備考</th>
              </tr>
            </thead>
            <tbody>
              {priceTable.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">{row.menu}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.kihon}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.ryoryo}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.nencho}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 他エリアとの料金比較（CSSバー） */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900">他エリアとの料金比較（高圧電力量料金 目安）</h3>
          <p className="mt-1 text-xs text-slate-500">各エリア旧一電の標準メニューベース概算。燃調・賦課金除く。</p>
          <div className="mt-4 space-y-3">
            {[
              { area: "北海道電力エリア", value: 18.5, color: "bg-blue-400" },
              { area: "東北電力エリア", value: 16.2, color: "bg-teal-400" },
              { area: "東京電力エリア", value: 15.5, color: "bg-sky-400" },
              { area: "中部電力エリア", value: 15.0, color: "bg-emerald-400" },
              { area: "北陸電力エリア（当エリア）", value: 14.5, color: "bg-green-600" },
              { area: "関西電力エリア", value: 13.8, color: "bg-indigo-400" },
              { area: "中国電力エリア", value: 16.8, color: "bg-orange-400" },
              { area: "四国電力エリア", value: 17.0, color: "bg-amber-400" },
              { area: "九州電力エリア", value: 14.2, color: "bg-yellow-500" },
              { area: "沖縄電力エリア", value: 19.5, color: "bg-red-400" },
            ].map((item) => (
              <div key={item.area}>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className={item.area.includes("当エリア") ? "font-bold text-sky-800" : ""}>{item.area}</span>
                  <span>{item.value} 円/kWh 前後</span>
                </div>
                <div className="h-4 w-full rounded bg-slate-100">
                  <div
                    className={`h-4 rounded ${item.color}`}
                    style={{ width: `${((item.value - 12) / 9) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-400">※目安値。実際の請求単価は契約内容・使用量・時期により異なります。</p>
          <p className="mt-2 text-xs text-slate-500">※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。</p>
        </div>
      </section>

      {/* エリア特有の事情 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">富山・石川・福井の地場産業構造（薬品 / 繊維 / 機械）</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">全国最安水準の電力量料金（2023年値上げで変動）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              北陸電力は長年にわたり全国最安水準の電気料金を誇っていました。
              しかし 2023年4月の規制料金大幅値上げ（家庭向け約 46%、企業向け約 20〜25%）により、
              その優位性は縮小しています。現在も関西・九州と並んで低い部類ですが、
              かつての「北陸は安い」というイメージの更新が必要です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">水力発電の豊富さ</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              北陸は急峻な地形と豊富な降雪・降雨に恵まれ、全国屈指の包蔵水力を保有しています。
              水力比率が約 25〜30% に達し、燃料費変動の影響を受けにくい安定電源として機能しています。
              再エネ比率を重視する企業にとっては CO2 排出量の低さもアピールポイントです。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">新電力参入が少ない市場環境</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              需要規模が全国最小クラスであるため、新電力にとって参入メリットが薄いエリアです。
              高圧向けの新電力選択肢は全国で最も少なく、料金競争の恩恵を受けにくい状況です。
              相見積もりを取る際は全国対応の大手新電力への問い合わせが現実的な選択肢となります。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">製造業（アルミ・化学）の電力多消費産業が集積</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              富山・石川を中心にアルミ精錬・化学・繊維などの電力多消費産業が集積しており、
              電気代は製造原価の重要な構成要素となっています。
              2023年の大幅値上げは産業競争力に直結した問題として地域で大きな議論を呼びました。
              省エネ投資や高効率設備への切り替えが急務となっています。
            </p>
          </div>
        </div>
      </section>

      {/* 最近の改定動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">北陸の融雪需要と冬季ピーク対策の料金改定（2023〜2026 年）</h2>
        <div className="mt-4 space-y-3">
          {revisionHistory.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-xs font-semibold text-sky-700 pt-1">{item.date}</div>
              <div className="flex-1 rounded-lg border border-slate-100 bg-slate-50 px-4 py-2 text-sm leading-7 text-slate-700">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 新電力動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">北陸新電力の少なさと交渉余地（地方ならではの選択肢）</h2>
        <div className="mt-4 space-y-3">
          {newPowerStatus.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-800">{item.category}</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 業種別削減事例 H2-7 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">北陸エリアの製造業削減事例（薬品 / 繊維 / 機械）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          北陸エリアでは水力比率の高さによる燃調費安定性を背景に、省エネ設備投資と冬季融雪需要のピークシフトが特に効きやすい構造です。下記は当エリアでの典型的な削減事例ベンチマークです。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">アルミ精錬・電解工場（特高 1 億kWh級）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>特別高圧個別交渉: 約3〜4%</li>
              <li>夜間操業シフトによる需給平準化: 約2〜3%</li>
              <li>渇水年バッファ条項追加: 上振れ抑制効果</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約500〜1,500万円</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">薬品・電子部品工場（高圧 500 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>新電力相見積もり（全国系含む）: 約3〜5%</li>
              <li>クリーンルーム空調インバーター化: 約2〜3%</li>
              <li>冬季融雪のガス化転換: 契約電力ピークシフト</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約200〜500万円</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">繊維・機械工場（高圧 100 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>契約プラン見直し: 約3〜5%</li>
              <li>蓄熱式融雪への置換: 約3〜5%</li>
              <li>LED完全化＋運用改善: 約2〜3%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約40〜120万円</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">北陸電力エリア共通の見直しチェックリスト</p>
          <ol className="mt-2 list-decimal list-inside space-y-1 text-xs leading-6 text-slate-700">
            <li>2023 年値上げ後の現行請求単価を改めて試算（旧前提のリセット）</li>
            <li>全国対応の新電力に相見積もりを依頼（地元選択肢が少ないため）</li>
            <li>省エネ投資で使用量自体を削減（高効率設備・LED・インバーター）</li>
            <li>志賀原発の再稼働動向を注視（中長期料金安定化のシグナル）</li>
            <li>
              容量拠出金・再エネ賦課金の上昇を織り込む（
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の詳細</Link>
              ）
            </li>
          </ol>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: エネルギー情報センター内部試算、北陸圏法人事例ヒアリング、業界平均レンジで作成。</p>
      </section>

      {/* 電源構成の実績データ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">北陸電力の高水力比率（全国最高水準）の電源構成</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          2024〜2026年の30分値データ（36,960レコード）を集計した北陸エリアの電源構成実績です。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600">石炭火力</p>
            <p className="mt-1 text-2xl font-bold text-slate-800">53.8%</p>
            <p className="text-xs text-slate-500">全国最高 / 平均 1,770 MW</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="text-xs font-semibold text-blue-700">水力</p>
            <p className="mt-1 text-2xl font-bold text-blue-900">26.9%</p>
            <p className="text-xs text-blue-600">全国最高 / 平均 886 MW</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">太陽光</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">5.9%</p>
            <p className="text-xs text-amber-600">最大 1,260 MW</p>
          </div>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="text-xs font-semibold text-indigo-700">原子力</p>
            <p className="mt-1 text-2xl font-bold text-indigo-900">0.0%</p>
            <p className="text-xs text-indigo-600">全停止（志賀原発）</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          石炭53.8%＋水力26.9%は北陸特有の電源構成です。石炭依存度は全国最高で、石炭価格の国際変動が
          料金に直結します。一方、水力26.9%も全国最高で、従来は安価な水力が料金安の一因でした。
          原子力（志賀原発）は全停止中で、再稼働の見通しが立てば電源構成が大きく変わる可能性があります。
          <a href="/area-power-supply-mix-comparison" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">→ 9エリアの電源構成を比較する</a>
        </p>
      </section>

      {/* 注記 */}
      <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          ※本ページの料金・シェア情報は2026年4月時点の公開情報をもとにした概算値です。
          正確な単価は各電力会社の公式ホームページまたは見積書でご確認ください。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
        </p>
      </div>

      {/* JEPXエリアプライスの推移 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">JEPX 北陸エリアプライス推移と水力出水率連動</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          JEPX（日本卸電力取引所）における当エリアの年度別平均価格です。市場連動型プランの仕入れコストに直結するデータです。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-sky-50">
              <tr>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">当エリア（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">システムプライス（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">差額</th>
              </tr>
            </thead>
            <tbody>
              {JEPX_AREA_YEARLY_AVG.filter(r => r.fy >= 2016).map((row, i) => {
                const areaPrice = row.hokuriku;
                const diff = Number((areaPrice - row.systemPrice).toFixed(2));
                return (
                  <tr key={row.fy} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium">{row.fy}年度</td>
                    <td className="border border-slate-200 px-3 py-2">{areaPrice.toFixed(2)}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-500">{row.systemPrice.toFixed(2)}</td>
                    <td className={`border border-slate-200 px-3 py-2 font-semibold ${diff > 0 ? "text-red-600" : diff < 0 ? "text-emerald-600" : "text-slate-500"}`}>
                      {diff > 0 ? "+" : ""}{diff.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          北陸エリアは水力発電の豊富さから安定した供給力を持ち、エリアプライスは全国平均に近い水準。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
      </section>

      {/* H2-Z シミュレーター */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の状況を確認する</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          北陸電力エリアの法人需要家として、自社の上振れリスクを定量化するには以下の観点でシミュレーターを活用してください。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          <li>渇水年の出水率低下シナリオでの年間上振れリスク額を確認する</li>
          <li>志賀原発再稼働シナリオでの中長期料金安定化効果を試算する</li>
          <li>冬季融雪需要の契約電力ピークシフトで基本料金がどれだけ下がるかを把握する</li>
          <li>容量拠出金・再エネ賦課金の追加コストを織り込んだトータル単価で評価する</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">参考: 金沢の気象データ（夏最高 {weather.summerTmax?.tmax2020_25}℃ など）と需要規模（全国 {DEMAND_AREA_SHARE.find(a => a.area === "hokuriku")?.share}%、負荷率 FY2023 {LOAD_FACTOR_FY.find(r => r.fy === 2023)?.hokuriku}%）を踏まえた診断条件設計が有効です。</p>
      </section>

      {/* 関連リンク */}

      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <SourcesAndFaq sources={sourcesItems} faq={faqItems} publishedAt="2026-04-17" />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/region-chubu-business-electricity",
              title: "中部電力エリアの法人電気代事情",
              description: "中部エリアの料金水準・電源構成と新電力動向を解説。",
            },
            {
              href: "/region-kansai-business-electricity",
              title: "関西電力エリアの法人電気代事情",
              description: "原発再稼働の影響と関西エリアの料金特性を解説。",
            },
            {
              href: "/business-electricity-retrospective/high-voltage-2019-2025",
              title: "高圧電力 2019〜2025年料金推移",
              description: "全国高圧電力の料金推移データを年次グラフで確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "燃調費の仕組みと法人の請求額への影響を詳しく解説。",
            },
            {
              href: "/emergency-supplier-withdrawal",
              title: "新電力から契約解除通知が届いたとき",
              description: "撤退通知を受けた際の対処手順と緊急対応フローを解説。",
            },
            {
              href: "/region-supplier-withdrawal-map",
              title: "エリア別 新電力撤退状況マップ",
              description: "2022年以降の新電力撤退・解除状況を10エリアで比較。",
            },
            {
              href: "/region-tohoku-business-electricity",
              title: "東北電力エリアの法人電気代事情",
              description: "北陸と並ぶ豪雪地域。冬季暖房需要・再エネ拡大の特性を北陸エリアと比較できる。",
            },
            {
              href: "/business-electricity-cost-reduction-review-points",
              title: "法人電気代見直しの基本ポイント",
              description: "業種・エリアを問わず適用できる、法人契約見直しの基本フレームワーク。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧の電気料金の仕組み",
              description: "アルミ精錬・電解工場など北陸の特高需要家で活用される料金体系を解説。",
            },
            {
              href: "/food-factory-electricity-cost-review",
              title: "食品工場の電気料金見直しポイント",
              description: "北陸で集積する食品・薬品工場の負荷特性と契約見直しの考え方。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光の費用対効果",
              description: "北陸の工場屋根を活用した自家消費型太陽光の投資回収期間を解説。",
            },
            {
              href: "/industry-electricity-calculator",
              title: "業種別電気料金シミュレーター",
              description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="北陸電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、燃料費変動・容量拠出金・再エネ賦課金のリスクを数値で把握できます。"
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
