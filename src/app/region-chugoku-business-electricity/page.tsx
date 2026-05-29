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
  { question: "中国電力エリアの料金水準は他エリアと比べてどうですか？", answer: "高圧電力量料金の業界標準メニューベースで、中国電力エリアは全国10エリア中で割高グループ（16〜17円/kWh前後）に位置します。北海道・沖縄・四国に次ぐ水準で、関西・九州エリアより1〜3円/kWh高い構造です。これは石炭・LNG火力依存度の高さと、原子力比率が低いことに由来します。" },
  { question: "山陽工業地帯の鉄鋼・化学業界で電気代削減の余地は？", answer: "鉄鋼・化学・自動車製造業はベース負荷の絶対量が大きく、契約電力（kW）と使用量（kWh）の両方で年間電気代が数億円〜数十億円規模になる場合があります。デマンド管理・廃熱回収・コージェネ導入・特別高圧契約での個別交渉により、数%の削減でも金額インパクトが大きくなります。生産ライン更新サイクルと電力契約見直しを同期させる経営判断が定石です。" },
  { question: "中国電力エリアの燃料調達依存リスクは？", answer: "中国電力は石炭火力比率が全国でも高い水準にあり、国際石炭価格や為替変動による燃料費調整額の上振れリスクが構造的に大きいエリアです。一方で島根原発2号機の再稼働（2024年）と3号機の運転開始（2030年代見込み）が進めば、原子力比率上昇による燃調費安定化が中長期で期待できます。" },
  { question: "中国地方の新電力勢力図はどうなっていますか？", answer: "東京・関西エリアと比べると新電力数は限定的（30〜50社程度）で、地場系・大手系がメイン。中国電力自身も小売自由化後にエリア外進出を進めており、エリア内競争は限定的な構造です。法人需要家としては、相見積もりで提示される単価差が他エリアより小さい傾向があるものの、3社以上の比較で確実なベンチマーキングを行うことが重要です。" },
  { question: "中国電力との契約交渉で重要なポイントは？", answer: "石炭火力依存を背景に、燃料費調整額のキャップ（上限）設定の交渉余地が他エリアより大きい場合があります。また、特別高圧契約では年次入札型の単価交渉に応じる事例も増加しています。山陽工業地帯の重工業需要家は契約電力規模が大きいため、相対契約・先物ヘッジを組み合わせた調達ポートフォリオ設計が経営課題となります。" },
  { question: "中国エリアの工場削減事例の典型値は？", answer: "業界平均レンジとして、鉄鋼・化学プラント（特別高圧、年間2億kWh級）で年間1.0〜2.5億円（5〜12%）、自動車部品工場（高圧、年間1,000万kWh級）で年間500〜1,200万円（5〜10%）の削減事例が報告されています。コージェネ＋廃熱回収の組み合わせで燃料費由来コストを構造的に下げる中長期施策が重要です。" },
];

const sourcesItems = [
  { name: "中国電力", url: "https://www.energia.co.jp/", description: "中国電力エリアの法人向け料金プラン情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・中国地方需給情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp", description: "中国エリアの需給・系統情報" },
];


const pageTitle = "中国電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況";
const pageDescription =
  "中国電力エリア（広島・岡山・山口・鳥取・島根）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、石炭火力依存リスク、島根原発3号機再稼働の影響、新電力状況と契約見直しポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-chugoku-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中国電力 法人",
    "中国電力エリア 電気料金",
    "広島 高圧電力 単価",
    "中国電力 料金改定",
    "中国地方 新電力",
    "法人電気代 広島",
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

const prefectures = ["広島県", "岡山県", "山口県", "鳥取県", "島根県"];

const areaBasicInfo = [
  { label: "担当都道府県", value: "広島県・岡山県・山口県・鳥取県・島根県" },
  { label: "旧一般電気事業者", value: "中国電力（送配電：中国電力ネットワーク）" },
  { label: "小売子会社", value: "中国電力" },
  { label: "管内面積（概算）", value: "約 31,900 km²" },
  { label: "管内世帯数（概算）", value: "約 310万世帯" },
  { label: "法人需要家数の目安", value: "約 35万口（高圧以上：約 2万口）" },
  { label: "電源構成の特徴", value: "石炭火力が約40〜45%、LNG約15%、原子力（島根原発3号機2024年再稼働）、水力約10%、再エネ約10%" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 15〜20%（高圧・特別高圧の推計）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,500〜1,900 円/kW",
    ryoryo: "約 13〜16 円/kWh",
    nencho: "燃調費別途",
    note: "大工場・製鉄・石油化学向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,700〜2,100 円/kW",
    ryoryo: "約 15〜18 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・工場向け",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 1,000〜1,200 円/kW",
    ryoryo: "約 16〜19 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ申請認可。高圧・特別高圧の自由化メニューも標準プランを同時期に改定。石炭・LNG高騰を反映した水準に。",
  },
  {
    date: "2023年12月",
    content: "燃料費調整額の基準燃料価格を改定。石炭価格の高止まりを受けてプラス幅が拡大傾向を継続。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。高圧・特別高圧需要家の契約単価に容量市場調達コストが転嫁される形となった。",
  },
  {
    date: "2024年12月",
    content: "島根原発3号機が再稼働。石炭火力への依存度が一部緩和され、CO2排出量削減と供給安定に寄与する見込み。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金が 3.49 円/kWh に引き上げ（前年比 +0.4 円程度）。高圧以上の影響も大きい。",
  },
  {
    date: "2026年4月（直近）",
    content: "原発稼働による石炭火力抑制で燃調費は若干改善傾向。ただしGX賦課金・容量拠出金のコストは継続して上昇圧力に。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "中規模エリアのため大都市圏と比べると新電力の参入社数は限られる。30〜40社程度が高圧向けプランを展開（2024年時点）。製造業向けの大口プランに特化した事業者が目立つ。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022年のエネルギー危機以降、一部新電力が高圧向け新規受付を停止。製造業系の大口需要家を中心に既存契約の見直し圧力が高まった。",
  },
  {
    category: "市場シェア推移",
    detail:
      "2020年に約10%だった新電力シェアが2022年には20%前後まで拡大したが、撤退ラッシュで2023年は15〜18%程度に縮小。2025年以降は横ばい傾向。",
  },
  {
    category: "価格競争力",
    detail:
      "石炭火力が多く電力量料金が高めなため、新電力との価格差が出やすいエリア。ただし調達コスト上昇時に中国電力の標準メニューを下回れる事業者が限られる点に注意。",
  },
];

export default function RegionChugokuBusinessElectricityPage() {
  const weather = getWeatherByRegion("chugoku");
  return (
    <>
      <ArticleJsonLd
        headline="中国電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況"
        description="中国電力エリア（広島・岡山・山口・鳥取・島根）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、石炭火力依存リスク、島根原発3号機再稼働の影響、新電力状況と契約見直しポイントを解説します。"
        url="https://simulator.eic-jp.org/region-chugoku-business-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "中国電力エリアの法人電気代事情" },
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
        <span className="text-slate-800">中国電力エリアの事情</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          中国電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">料金水準・改定動向・新電力状況</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          中国電力エリア（広島・岡山・山口・鳥取・島根の5県）は石炭火力への依存度が全国でも高く、
          CO2コストやGX賦課金の影響を受けやすいエリアです。製造業（鉄鋼・自動車・石油化学）の集積地でもあり、
          電力多消費型の法人需要家にとってはコスト管理が特に重要です。2024年には島根原発3号機が再稼働し、
          供給面での改善が期待されています。本ページでは、エリアの基本情報・料金水準・改定動向・
          新電力状況・契約見直しポイントを詳しく解説します。
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
        <h2 className="text-xl font-semibold text-slate-900">なぜ中国電力エリアの法人電気料金見直しが重要なのか — 山陽工業地帯の重工業負荷</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          中国電力エリアの規模感・事業者構成を確認してください。
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
        <h2 className="text-xl font-semibold text-slate-900">中国電力の法人向け料金体系（業種別単価目安）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は中国電力の標準メニューをベースにした概算値です。
          燃料費調整額・再エネ賦課金（2026年4月時点: 3.49 円/kWh）は別途加算されます。
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
              { area: "中国電力エリア（当エリア）", value: 16.8, color: "bg-orange-600" },
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
        </div>
      </section>

      {/* エリア特有の事情 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">山陽工業地帯の鉄鋼・化学・自動車製造の電力需要構造</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">石炭火力への高依存とCO2コストリスク</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              中国電力エリアは電源構成の約40〜45%を石炭火力が占め、全国でも高い依存度を持ちます。
              国際石炭価格の変動が燃料費調整額に直結するほか、GX（グリーントランスフォーメーション）推進に伴う
              炭素賦課金の導入・拡充により、石炭火力由来の電力コストが将来的にさらに上昇するリスクがあります。
              製造業を中心とした電力多消費型の法人需要家は特に注意が必要です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">製造業（鉄鋼・自動車・石油化学）の集積</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              広島・岡山・山口県には自動車（マツダなど）、鉄鋼、石油化学などの電力多消費産業が集積しています。
              特別高圧での大口需要が多く、電力コストが製造原価に直結するため、エネルギー調達戦略の重要性が高いエリアです。
              需要の大きさゆえに電力会社との個別交渉余地も比較的あります。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">島根原発3号機再稼働による供給改善</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              2024年に島根原発3号機が再稼働し、石炭火力の一部代替が期待されています。
              原子力の稼働率が高まることで燃料費調整額のプラス幅が抑制される可能性があり、
              中長期的な料金安定化への寄与が見込まれます。ただし定期検査や規制対応で停止期間も生じるため、
              過度な楽観視は禁物です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">料金水準は全国で高め</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              石炭火力依存と設備コストの関係で、中国電力エリアの高圧電力量料金は全国10エリアの中でも
              比較的高い水準にあります。電力量料金16〜17円台前後は北海道・沖縄に次ぐ水準であり、
              年間電力使用量が多い法人ほど、新電力や自家発電との組み合わせによるコスト削減効果が大きくなります。
            </p>
          </div>
        </div>
      </section>

      {/* 最近の改定動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">中国電力エリアの工業需要時期と料金改定（2023〜2026 年）</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">中国地方の新電力選定基準と地方都市の市場</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">中国エリアの工場削減事例（鉄鋼 / 化学 / 製造業）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          中国電力エリアは山陽工業地帯に重工業需要家が集積し、契約電力規模が大きいゆえの削減金額インパクトが他エリアより大きい構造です。下記は当エリアでの典型的な削減事例ベンチマークです。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">鉄鋼・化学プラント（特高 2 億kWh級）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>特別高圧個別交渉: 約3〜5%</li>
              <li>廃熱回収＋コージェネ更新: 約5〜10%</li>
              <li>燃調キャップ条項追加: 上振れ抑制効果</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約1.0〜2.5億円</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">自動車部品工場（高圧 1,000 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>新電力相見積もり（3社以上）: 約3〜5%</li>
              <li>デマンドコントローラー: 約3〜5%</li>
              <li>LED＋高効率空調: 約2〜3%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約500〜1,200万円</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">中規模製造業（高圧 300 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>契約プラン見直し: 約3〜4%</li>
              <li>自家消費型太陽光（屋根 100kW）: 約3〜5%</li>
              <li>デマンドコントローラー導入: 約3〜4%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約180〜400万円</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">中国電力エリア共通の見直しチェックリスト</p>
          <ol className="mt-2 list-decimal list-inside space-y-1 text-xs leading-6 text-slate-700">
            <li>石炭・GX賦課金リスクを把握する（CO2コスト増加リスクの先読み）</li>
            <li>特別高圧需要家は個別交渉を検討（標準メニューに縛られない条件交渉）</li>
            <li>島根原発の稼働状況を継続ウォッチ（燃調費変動の予測）</li>
            <li>デマンドコントロールで基本料金を削減（ピーク抑制施策）</li>
            <li>
              容量拠出金の影響を試算（
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の詳細</Link>
              ）
            </li>
          </ol>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: エネルギー情報センター内部試算、山陽工業地帯法人事例ヒアリング、業界平均レンジで作成。</p>
      </section>

      {/* 注記 */}
      <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          ※本ページの料金・シェア情報は2026年4月時点の公開情報をもとにした概算値です。
          正確な単価は各電力会社の公式ホームページまたは見積書でご確認ください。
        </p>
      </div>

      {/* JEPXエリアプライスの推移 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">JEPX 中国エリアプライス推移と燃料調達依存</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          JEPX（日本卸電力取引所）における当エリアの年度別平均価格です。市場連動型プランの仕入れコストに直結するデータです。
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
                const areaPrice = row.chugoku;
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
          中国エリアは石炭火力の影響を受けつつも、エリアプライスはシステムプライスをやや下回る傾向。
        </p>
      </section>

      {/* エリア需要の特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">中国電力エリア需要と火力依存の電源構成</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          中国電力エリアは全国需要の約{DEMAND_AREA_SHARE.find(a => a.area === "chugoku")?.share}%を占めます。西日本の高連動クラスター(0.93〜0.97)の一角。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均需要（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">負荷率（%）</th>
              </tr>
            </thead>
            <tbody>
              {[2016, 2023].map((fy, i) => {
                const d = DEMAND_AREA_FY.find(r => r.fy === fy);
                const lf = LOAD_FACTOR_FY.find(r => r.fy === fy);
                return (
                  <tr key={fy} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">FY{fy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{d?.chugoku.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{lf?.chugoku}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: OCCTO公表データを集計（FY2016〜FY2023）</p>
      </section>

      {/* H2-Z シミュレーター */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の状況を確認する</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          中国電力エリアの法人需要家として、自社の上振れリスクを定量化するには以下の観点でシミュレーターを活用してください。
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          <li>石炭・LNG価格高騰シナリオでの年間上振れリスク額を確認する</li>
          <li>島根原発稼働シナリオ別の燃調費影響を比較する</li>
          <li>特別高圧の個別交渉で得られる単価優位を試算する</li>
          <li>容量拠出金・再エネ賦課金の追加コストを織り込んだトータル単価で評価する</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">参考: 広島の気象データ（夏最高 {weather.summerTmax?.tmax2020_25}℃ など）と需要規模（全国 {DEMAND_AREA_SHARE.find(a => a.area === "chugoku")?.share}%、負荷率 FY2023 {LOAD_FACTOR_FY.find(r => r.fy === 2023)?.chugoku}%）を踏まえた診断条件設計が有効です。</p>
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
              href: "/energia-corporate-electricity-guide",
              title: "中国電力（エネルギア）の法人向けプラン解説",
              description: "エリア全体の市況に対し、中国電力という特定企業のプラン体系・島根原発2号機再稼働進行・サポートを中立的に解説（電力会社別解説）。",
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
              href: "/region-kansai-business-electricity",
              title: "関西電力エリアの法人電気代事情",
              description: "原発再稼働の影響と関西エリアの料金特性を解説。",
            },
            {
              href: "/region-shikoku-business-electricity",
              title: "四国電力エリアの法人電気代事情",
              description: "伊方原発と四国エリアの料金特性を解説。",
            },
            {
              href: "/region-supplier-withdrawal-map",
              title: "エリア別 新電力撤退状況マップ",
              description: "2022年以降の新電力撤退・解除状況を10エリアで比較。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧の電気料金の仕組み",
              description: "山陽工業地帯の重工業需要家で活用される特別高圧契約の料金体系と個別交渉の考え方。",
            },
            {
              href: "/business-electricity-cost-reduction-review-points",
              title: "法人電気代見直しの基本ポイント",
              description: "業種・エリアを問わず適用できる、法人契約見直しの基本フレームワーク。",
            },
            {
              href: "/food-factory-electricity-cost-review",
              title: "食品工場の電気料金見直しポイント",
              description: "中国エリアに集積する食品製造業の負荷特性と契約見直しの考え方。",
            },
            {
              href: "/region-hokuriku-business-electricity",
              title: "北陸電力エリアの法人電気代事情",
              description: "中国エリアと並ぶ製造業集積地域。北陸の地場産業と中国地方の重工業を比較できる。",
            },
            {
              href: "/data-center-electricity-cost-review",
              title: "データセンターの電気料金見直しポイント",
              description: "中国エリア大規模需要家向け：特別高圧契約と PUE 改善の考え方。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="中国電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、石炭火力リスク・容量拠出金・再エネ賦課金の影響を数値で把握できます。"
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
