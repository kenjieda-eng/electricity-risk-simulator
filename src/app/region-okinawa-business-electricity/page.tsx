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
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import TableOfContents from "../../components/market-data/TableOfContents";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["by-region"];

const faqItems = [
  { question: "沖縄電力の料金が全国最高水準なのはなぜですか？", answer: "本土との連系線がない孤立系統であること、本島と石垣・宮古・久米島など多数の有人離島への送電コスト、LNG・石炭・石油の複合燃料調達コストが構造的に高い水準にあるためです。沖縄電力の高圧電力量料金は他エリアより2〜5円/kWh高く、年間電気代に換算すると数十%の差になります。これらは構造的要因のため短期的な解消は困難です。" },
  { question: "離島送電コストは法人料金にどれくらい上乗せされますか？", answer: "離島送電コストは託送料金に含まれており、本島・離島問わず沖縄電力エリア全体の電気料金に分散転嫁されています。具体的金額は公表されていませんが、業界推計では電力量料金の3〜5円/kWh程度が離島系統由来コストと見られています。これは需要家規模では年間数百万〜数千万円規模の追加負担に相当します。" },
  { question: "沖縄独立系統で新電力を選ぶ余地はありますか？", answer: "新電力の参入数は数社程度と全国最少で、価格競争による値下げ余地はほぼありません。事実上、沖縄電力との契約が唯一の選択肢となるケースが大半です。法人需要家としては、新電力切替よりも『使用量自体を減らす』省エネ投資・自家消費型太陽光・蓄電池の導入が、コスト削減の主戦場となります。" },
  { question: "沖縄の通年冷房・台風時系統リスクへの対応は？", answer: "沖縄は通年で冷房需要が発生し、夏冬のメリハリが他エリアと異なります。さらに台風時は系統が孤立しているため、本土からの応援送電が不可能で大規模停電リスクが他エリアより高い構造があります。法人需要家としては、BCP電源として蓄電池・自家消費型太陽光・非常用発電の組み合わせを、平時のピークカット用途と兼ねて導入する経営判断が広がっています。" },
  { question: "沖縄観光業の電気代見直しの典型例は？", answer: "中規模リゾートホテル（高圧、年間500万kWh級）で、客室稼働率連動のデマンド管理＋高効率空調更新＋自家消費型太陽光（屋根30〜50kW）＋蓄電池の組み合わせにより、年間電気代の8〜15%削減事例（金額にして約150〜500万円）が報告されています。日射量が全国最高クラスのため自家消費太陽光の投資回収期間が他エリアより短くなります。" },
  { question: "沖縄 DC・ホテル業界の削減事例の典型値は？", answer: "業界平均レンジとして、リゾートホテル（高圧、年間500万kWh）で年間150〜500万円（8〜15%）、商業施設（高圧、年間300万kWh）で年間100〜300万円（8〜12%）、商用DC（特高、年間2,000万kWh）で年間2,000〜4,000万円（8〜12%）の削減事例が報告されています。日射量・気候を活かした自家消費型太陽光と蓄電池BCPが沖縄特有の有効施策です。" },
];

const sourcesItems = [
  { name: "沖縄電力", url: "https://www.okiden.co.jp/", description: "沖縄電力エリアの法人向け料金プラン情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・沖縄電力の規制情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp", description: "離島系統に関する制度・統計情報" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit", description: "エリア別の電力単価・統計（公開情報ベースの目安）" },
];


const pageTitle = "沖縄電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況";
const pageDescription =
  "沖縄電力エリア（沖縄県）の法人向け電気料金を詳解。全国最高水準の電力量料金、孤立系統・離島送電コスト、新電力がほぼ参入しない市場構造、観光業中心の電力需要と契約見直しポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-okinawa-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "沖縄電力 法人",
    "沖縄電力エリア 電気料金",
    "沖縄 高圧電力 単価",
    "沖縄電力 料金改定",
    "沖縄 新電力",
    "法人電気代 沖縄",
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

const prefectures = ["沖縄県"];

const areaBasicInfo = [
  { label: "担当都道府県", value: "沖縄県" },
  { label: "旧一般電気事業者", value: "沖縄電力（送配電・小売一体）" },
  { label: "小売子会社", value: "沖縄電力（分社化なし）" },
  { label: "管内面積（概算）", value: "約 2,280 km²" },
  { label: "管内世帯数（概算）", value: "約 70万世帯" },
  { label: "法人需要家数の目安", value: "約 10万口（高圧以上：約 0.5万口）" },
  { label: "電源構成の特徴", value: "LNG火力約50%、石炭火力約30%、石油火力約10%、再エネ約10%（ほぼ太陽光）" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 5〜8%（全国最低クラス）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,700〜2,100 円/kW",
    ryoryo: "約 15〜18 円/kWh",
    nencho: "燃調費別途",
    note: "大型ホテル・大型商業施設向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,900〜2,300 円/kW",
    ryoryo: "約 17〜20 円/kWh",
    nencho: "燃調費別途",
    note: "ホテル・商業施設・中規模工場向け",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 1,100〜1,400 円/kW",
    ryoryo: "約 18〜21 円/kWh",
    nencho: "燃調費別途",
    note: "飲食店・小規模事業所など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ申請認可。LNG・石炭・石油の高騰を受けた改定。本土との連系線がないため独自の燃料調達コストが反映。",
  },
  {
    date: "2023年12月",
    content: "燃料費調整額の基準燃料価格を改定。石油火力の燃油価格高止まりもあり、他エリアより高いプラス幅を維持。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。沖縄電力も制度の対象となり、高圧・特別高圧の調達コストに容量市場コストが加算。",
  },
  {
    date: "2024年10月",
    content: "電気・ガス料金激変緩和措置が終了。沖縄でも法人の請求額が他エリアと同様に上昇。電力量料金の高さから影響額が大きい。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金が 3.49 円/kWh に引き上げ。電力量料金がもともと高いエリアだけに、賦課金の絶対額負担も大きい。",
  },
  {
    date: "2026年4月（直近）",
    content: "LNG価格のやや落ち着きで燃調費は若干改善傾向。ただし石油火力由来コストと離島送電コストは構造的に高止まりが続く見込み。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "沖縄電力が送配電と小売を一体で担い、本土との連系線がないため新電力の参入障壁が極めて高い。参入社数は全国最低クラスの数社程度に限られ（2024年時点）、高圧向けプランを展開できる事業者は非常に限定的。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "もともと参入社数が少ないため、2022〜2023年の撤退ラッシュの影響は限定的だった。ただし少ない選択肢のなかで契約していた需要家には打撃となった事例も存在。",
  },
  {
    category: "市場シェア推移",
    detail:
      "新電力シェアは長年5〜8%程度で推移し、全国10エリアの中で最も低い水準。孤立系統という構造的な制約から、短中期での大幅なシェア拡大は見込みにくい状況。",
  },
  {
    category: "価格競争力",
    detail:
      "沖縄電力との競合プランを持つ新電力が極めて少なく、価格競争による恩恵を受けにくいエリア。自家発電（太陽光＋蓄電池）や省エネ投資による使用量削減が最も有効なコスト低減策となる。",
  },
];

export default function RegionOkinawaBusinessElectricityPage() {
  return (
    <>
      <ArticleJsonLd
        headline="沖縄電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況"
        description="沖縄電力エリア（沖縄県）の法人向け電気料金を詳解。全国最高水準の電力量料金、孤立系統・離島送電コスト、新電力がほぼ参入しない市場構造、観光業中心の電力需要と契約見直しポイントを解説します。"
        url="https://simulator.eic-jp.org/region-okinawa-business-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "沖縄電力エリアの法人電気代事情" },
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
        <span className="text-slate-800">沖縄電力エリアの事情</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          沖縄電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">料金水準・改定動向・新電力状況</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          沖縄電力エリア（沖縄県）は全国10エリアの中で最も電力量料金が高く、本土との連系線がない孤立系統として
          独自の電力需給バランスを保っています。LNG・石炭・石油の燃料コストが高い構造に加え、
          離島送電コストも料金水準を押し上げています。新電力がほぼ参入しておらず、
          観光業（宿泊・飲食）を中心とした法人需要家にとって、コスト削減の選択肢が限られるのが現状です。
          本ページでは、エリアの基本情報・料金水準・改定動向・新電力状況・契約見直しポイントを詳しく解説します。
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
        <h2 className="text-xl font-semibold text-slate-900">なぜ沖縄電力エリアの法人電気料金見直しが重要なのか — 離島系統と全国最高水準料金</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          沖縄電力エリアの規模感・事業者構成を確認してください。
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
        <h2 className="text-xl font-semibold text-slate-900">沖縄電力の独自料金体系（全国最高水準の電力量料金）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は沖縄電力の標準メニューをベースにした概算値です。
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
              { area: "北陸電力エリア", value: 14.5, color: "bg-green-400" },
              { area: "関西電力エリア", value: 13.8, color: "bg-indigo-400" },
              { area: "中国電力エリア", value: 16.8, color: "bg-orange-400" },
              { area: "四国電力エリア", value: 17.0, color: "bg-amber-400" },
              { area: "九州電力エリア", value: 14.2, color: "bg-yellow-500" },
              { area: "沖縄電力エリア（当エリア）", value: 19.5, color: "bg-red-600" },
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
        <h2 className="text-xl font-semibold text-slate-900">観光業中心の電力需要と通年空調・台風時系統リスク</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">全国最高水準の電力量料金</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              沖縄電力の高圧電力量料金は全国10エリアの中で最も高く、高圧メニューで17〜20円/kWh前後、
              低圧電力では18〜21円/kWh前後と突出しています。LNG・石炭・石油の複数燃料への依存と
              離島エリア特有の設備コストが重なり、構造的な高コスト体質が続いています。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">離島送電コストと孤立系統</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              沖縄本島のほか、石垣島・宮古島・久米島など多数の有人離島に送電する必要があり、
              その設備投資・維持コストが電気料金に含まれています。また本土（九州電力エリア）との
              連系線がなく「孤立系統」であるため、緊急時の電力融通や需給調整が本土より困難です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">新電力がほぼ参入していない</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              送配電と小売が分社化されず一体運営されていること、市場規模が小さいこと、
              孤立系統のため本土からの電力調達が不可能なことから、新電力の参入が極めて困難な構造になっています。
              事実上、沖縄電力との契約が唯一の選択肢となるケースが大半です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">観光業中心の電力需要構造</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              沖縄の産業は観光業（ホテル・宿泊・飲食・商業施設）が中心であり、
              冷房需要が大きい夏季に電力ピークが集中します。客室稼働率に応じた電力消費変動が大きく、
              デマンドコントロールや省エネ設備投資（高効率空調・LED等）が特に効果的な対策となります。
            </p>
          </div>
        </div>
      </section>

      {/* 最近の改定動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">沖縄の通年冷房需要と料金改定パターン（2023〜2026 年）</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">沖縄独立系統での新電力可否と現実的選択肢</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">沖縄エリアのホテル / DC 削減事例</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          沖縄エリアは新電力切替の選択肢がほぼないため、自家消費型太陽光＋蓄電池＋省エネ設備投資の三位一体施策が他エリアより有効です。下記は当エリアでの典型的な削減事例ベンチマークです。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">中規模リゾートホテル（高圧 500 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>客室稼働率連動デマンド管理: 約3〜5%</li>
              <li>高効率空調更新（VRV系）: 約3〜5%</li>
              <li>自家消費型太陽光（屋根 50kW）+蓄電池: 約3〜5%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約150〜500万円（8〜15%）</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">大型商業施設（高圧 300 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>BEMS導入＋デマンド制御: 約3〜4%</li>
              <li>LED完全化＋人感センサー: 約2〜3%</li>
              <li>蓄電池BCP（食品ロス防止兼用）: 約3〜5%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約100〜300万円（8〜12%）</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">商用 DC（特高 2,000 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>特別高圧長期固定単価交渉: 約3〜5%</li>
              <li>液冷・コールドアイル分離: 約3〜5%</li>
              <li>自家消費型太陽光（メガソーラー級）: 約2〜3%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約2,000〜4,000万円（8〜12%）</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">沖縄電力エリア共通の見直しチェックリスト</p>
          <ol className="mt-2 list-decimal list-inside space-y-1 text-xs leading-6 text-slate-700">
            <li>省エネ投資でコスト削減（新電力切替が困難なため使用量削減が主戦場）</li>
            <li>太陽光＋蓄電池の自家発電を検討（日射量全国最高クラス）</li>
            <li>デマンドコントロールを徹底（観光業の夏季冷房ピーク抑制）</li>
            <li>燃料費調整額の上限設定を確認（LNG・石炭・石油の3燃料動向ウォッチ）</li>
            <li>
              容量拠出金の影響を試算（
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の詳細</Link>
              ）
            </li>
          </ol>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: エネルギー情報センター内部試算、沖縄県内法人事例ヒアリング、業界平均レンジで作成。</p>
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

      {/* 離島系統 H2-4'（JEPX 代替） */}
      <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">沖縄電力独立系統と本土系統の電気代差（離島送電コスト構造）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          沖縄電力エリアは本土との送電線（連系線）がなく、JEPX（日本卸電力取引所）のエリアプライスが設定されていません。
          このため、市場連動型プランの概念が他エリアとは異なり、電力調達は沖縄電力の自社電源に大きく依存しています。
          JEPXの価格変動が直接影響しないことは、市場リスク面ではメリットですが、競争環境が限定的なため
          新電力による値下げ余地も小さい構造です。本土系統との電気代差は概ね電力量料金で2〜5円/kWhあり、年間電気代換算では数十%の差になります。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">離島送電コストの構造</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-700">
            <li>沖縄本島の主要発電所（具志川火力・吉の浦火力など）から、本島内・周辺離島へ送電するインフラ</li>
            <li>石垣島・宮古島・久米島など多数の有人離島には独自のディーゼル発電設備＋小規模送電網が必要</li>
            <li>これらの設備投資・維持コストが託送料金経由で電気料金全体に分散転嫁</li>
            <li>業界推計で電力量料金の3〜5円/kWh程度が離島系統由来コストとされる</li>
          </ul>
        </div>
      </section>

      {/* 電源構成 H2-5（新設） */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">沖縄電力エリアの電源構成（火力依存と再エネ展望）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          沖縄電力エリアは本土との連系線がない孤立系統のため、エリア内で完結する電源構成を維持する必要があります。これが料金水準に与える影響は他エリアより大きく、構造的な高コスト要因の一つです。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p className="text-xs font-semibold text-orange-700">LNG火力</p>
            <p className="mt-1 text-2xl font-bold text-orange-900">約 50%</p>
            <p className="text-xs text-orange-600">主力ベース電源</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600">石炭火力</p>
            <p className="mt-1 text-2xl font-bold text-slate-800">約 30%</p>
            <p className="text-xs text-slate-500">石川石炭火力等</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">石油火力</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">約 10%</p>
            <p className="text-xs text-amber-600">離島系統で重要</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs font-semibold text-emerald-700">再エネ（太陽光主体）</p>
            <p className="mt-1 text-2xl font-bold text-emerald-900">約 10%</p>
            <p className="text-xs text-emerald-600">日射量全国最高</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          石油火力10%は他エリアと比べ突出して高く、これは離島での燃料供給性・小規模発電の効率の制約から維持されています。一方、日射量は全国最高水準で再エネ太陽光のポテンシャルは大きく、自家消費型太陽光・PPAモデルの導入で電源構成の脱火力化が進む見込みです。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <p className="mt-2 text-xs text-slate-500">出典: 沖縄電力公式公表資料、経産省「沖縄電力に関する規制」関連資料、業界平均レンジで作成。</p>
      </section>

      {/* H2-Z シミュレーター */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の状況を確認する</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          沖縄電力エリアの法人需要家として、自社の上振れリスクと省エネ投資効果を定量化するには以下の観点でシミュレーターを活用してください。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          <li>LNG・石炭・石油の3燃料高騰シナリオでの年間上振れリスク額を確認する</li>
          <li>自家消費型太陽光＋蓄電池導入時の投資回収期間と年間削減額を試算する</li>
          <li>夏季冷房ピーク時のデマンド削減で基本料金がどれだけ下がるかを把握する</li>
          <li>容量拠出金・再エネ賦課金の追加コストを織り込んだトータル単価で評価する</li>
        </ul>
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
              href: "/region-chugoku-business-electricity",
              title: "中国電力エリアの法人電気代事情",
              description: "石炭火力依存と島根原発再稼働による影響を解説。",
            },
            {
              href: "/region-shikoku-business-electricity",
              title: "四国電力エリアの法人電気代事情",
              description: "伊方原発と四国エリアの料金特性を解説。",
            },
            {
              href: "/region-kyushu-business-electricity",
              title: "九州電力エリアの法人電気代事情",
              description: "原発比率が高く料金水準が安定している九州エリアを解説。",
            },
            {
              href: "/region-supplier-withdrawal-map",
              title: "エリア別 新電力撤退状況マップ",
              description: "2022年以降の新電力撤退・解除状況を10エリアで比較。",
            },
            {
              href: "/region-kansai-business-electricity",
              title: "関西電力エリアの法人電気代事情",
              description: "離島系統の沖縄に対し、本土の中で原発を活用する関西エリアの電源構成を比較できる。",
            },
            {
              href: "/business-electricity-cost-reduction-review-points",
              title: "法人電気代見直しの基本ポイント",
              description: "業種・エリアを問わず適用できる、法人契約見直しの基本フレームワーク。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光の費用対効果",
              description: "日射量全国最高クラスの沖縄では、自家消費型太陽光が最も効果的なコスト削減策。",
            },
            {
              href: "/articles/by-industry/hotel-leisure",
              title: "ホテル・観光業種ハブ：観光業向け電気料金関連記事",
              description: "沖縄観光業の主力業種であるホテル・リゾートの電気料金関連記事を一覧で確認。",
            },
            {
              href: "/battery-suited-corporations",
              title: "法人向け蓄電池導入の検討ポイント",
              description: "台風時系統リスクが高い沖縄では、蓄電池BCPと平時ピークカットの兼用が経営判断として重要。",
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
          heading="沖縄電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、燃料費変動・容量拠出金・再エネ賦課金の影響を数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "シミュレーターの使い方を見る" },
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
