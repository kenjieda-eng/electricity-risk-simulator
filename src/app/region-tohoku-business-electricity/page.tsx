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
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import TableOfContents from "../../components/market-data/TableOfContents";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["by-region"];


const pageTitle = "東北電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況";
const pageDescription =
  "東北電力エリア（東北6県＋新潟）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、2023〜2026年の料金改定動向、新電力の参入・撤退状況、再エネ比率の高さと出力制御リスクを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-tohoku-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "東北電力 法人",
    "東北エリア 電気料金",
    "東北 高圧電力 単価",
    "東北電力 料金改定",
    "東北 新電力",
    "法人電気代 東北",
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
  "青森県",
  "岩手県",
  "秋田県",
  "宮城県",
  "山形県",
  "福島県",
  "新潟県",
];

const areaBasicInfo = [
  { label: "担当都道府県", value: "青森県・岩手県・秋田県・宮城県・山形県・福島県・新潟県" },
  { label: "旧一般電気事業者", value: "東北電力" },
  { label: "送配電事業者", value: "東北電力ネットワーク" },
  { label: "小売事業者", value: "東北電力フロンティア" },
  { label: "管内面積（概算）", value: "約 79,500 km²" },
  { label: "管内世帯数（概算）", value: "約 460万世帯" },
  { label: "法人需要家数の目安", value: "約 50万口（高圧以上：約 3万口）" },
  { label: "電源構成の特徴", value: "水力約 15〜20%、LNG火力約 25%、石炭火力約 20%、再エネ（太陽光・風力）約 15%、原子力（段階的再稼働）" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 20〜25%" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,500〜1,800 円/kW",
    ryoryo: "約 12〜15 円/kWh",
    nencho: "燃調費別途",
    note: "大工場・大型施設向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,600〜2,000 円/kW",
    ryoryo: "約 14〜17 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・工場向け",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 950〜1,200 円/kW",
    ryoryo: "約 16〜19 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ申請が認可。東北電力フロンティアも同時期に高圧・特別高圧の標準メニューを改定。",
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
    content: "電気・ガス料金激変緩和措置が段階的縮小・終了。法人の請求額が再び上昇。製造業の多い東北では影響が大きかった。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金が 3.49 円/kWh に引き上げ（前年比 +0.4 円程度）。再エネ比率の高い東北では将来的な賦課金動向にも注目が必要。",
  },
  {
    date: "2026年4月（直近）",
    content: "LNG・石炭価格のやや落ち着きにより燃調費プラス幅はわずかに縮小傾向。女川原発 2 号機の再稼働進展により一定の安定化が期待される。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "製造業集積地（仙台・郡山周辺など）を中心に新電力の参入が見られる。高圧向けは数十社が展開しているが、東京エリアと比較すると競合は限定的（2024年時点）。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022年のエネルギー危機以降、東北でも複数の新電力が高圧向け新規受付停止や既存契約の解除通知を実施。特に製造業向けの大口契約で影響が出た。",
  },
  {
    category: "市場シェア推移",
    detail:
      "新電力シェアは 20〜25% 程度で推移。エネルギー危機後の撤退ラッシュで一時的に低下したが、2025年以降は再参入・回復傾向にある。",
  },
  {
    category: "価格競争力",
    detail:
      "東北電力フロンティアの標準メニューより 5〜12% 安い提案をする新電力が存在。再エネ電源比率の高さを訴求したグリーンプランも複数見られる。",
  },
];

export default function RegionTohokuBusinessElectricityPage() {
  const weather = getWeatherByRegion("tohoku");
  return (
    <>
      <ArticleJsonLd
        headline="東北電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況"
        description="東北電力エリア（東北6県＋新潟）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、2023〜2026年の料金改定動向、新電力の参入・撤退状況、再エネ比率の高さと出力制御リスクを解説します。"
        url="https://simulator.eic-jp.org/region-tohoku-business-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "東北電力エリアの法人電気代事情" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">東北電力エリアの事情</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          東北電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">料金水準・改定動向・新電力状況</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          東北電力エリア（東北6県と新潟県）は全国でも再エネ比率が高く、水力・太陽光・風力が豊富なエリアです。
          一方、製造業（自動車・電子部品）が集積しており電力多消費産業の比重が大きく、
          原発再稼働の動向や出力制御の頻発が法人の電力調達に影響を与えています。
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
        <h2 className="text-xl font-semibold text-slate-900">エリア基本情報</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          東北電力エリアの規模感・事業者構成を確認してください。
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
        <h2 className="text-xl font-semibold text-slate-900">料金水準（法人向け標準メニュー目安）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は東北電力フロンティアの標準メニューをベースにした概算値です。
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
              { area: "東北電力エリア（当エリア）", value: 16.2, color: "bg-teal-600" },
              { area: "東京電力エリア", value: 15.5, color: "bg-sky-400" },
              { area: "中部電力エリア", value: 15.0, color: "bg-emerald-400" },
              { area: "北陸電力エリア", value: 14.5, color: "bg-green-400" },
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
        </div>
      </section>

      {/* エリア特有の事情 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">東北電力エリア特有の事情</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">再エネ比率の高さと出力制御</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              東北エリアは太陽光・風力・水力を合わせた再エネ比率が全国でも上位に位置します。
              しかしその分、晴天・強風時には再エネ出力が需要を上回り、出力制御（カーテルメント）が
              頻発しています。再エネ調達プランを検討する際は、出力制御の影響による調達不安定リスクも
              考慮が必要です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">製造業（自動車・電子部品）の集積</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              宮城・福島・岩手を中心に自動車関連サプライチェーンや電子部品メーカーが集積しており、
              高圧・特別高圧需要家の電力消費量が大きいエリアです。
              製造コストに占める電力費比率が高く、電気料金の変動が企業収益に直結します。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">原発再稼働による供給安定化の可能性</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              女川原発 2 号機（宮城県）が2024年に再稼働し、東通原発（青森県）も審査中です。
              原子力の再稼働が進むと、燃料費の低い電源比率が上昇し、中長期的な電気料金の
              安定化につながる可能性があります。ただし規制審査・安全対策費用の動向にも注目が必要です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">出力制御の頻発とPPA活用の課題</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              再エネ比率が高いため系統の需給バランス調整が難しく、特に春・秋の軽負荷期に
              出力制御が頻発します。オンサイト太陽光の発電計画策定や PPA 契約の安定供給条件の
              確認では、東北特有の出力制御リスクを織り込んだ検討が必要です。
            </p>
          </div>
        </div>
      </section>

      {/* 最近の改定動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最近の料金改定動向（2023〜2026年）</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">新電力動向</h2>
        <div className="mt-4 space-y-3">
          {newPowerStatus.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-800">{item.category}</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 契約見直しポイント */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">東北電力エリアで契約見直しを進める際のポイント</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>
            <span className="font-semibold">再エネ比率を活かした調達プランを検討する</span>
            — グリーン電力証書・非化石証書・東北産再エネ PPA など、東北の豊富な再エネを活用したプランを比較検討してください。
          </li>
          <li>
            <span className="font-semibold">製造業ならばデマンド管理を徹底する</span>
            — 工場ラインの稼働スケジュール最適化やインバーター導入でデマンド値を抑制し、基本料金を削減できます。
          </li>
          <li>
            <span className="font-semibold">出力制御リスクを考慮した調達計画を立てる</span>
            — 再エネ電源のみに依存する契約では出力制御時に不足インバランスが生じる可能性があります。バックアップ電源・バランシンググループの設計を確認してください。
          </li>
          <li>
            <span className="font-semibold">原発再稼働の影響を料金予測に組み込む</span>
            — 女川原発の本格運転が進むと燃料費コストが低減し、長期契約の単価改定交渉に有利に働く可能性があります。
          </li>
          <li>
            <span className="font-semibold">容量拠出金・再エネ賦課金の動向を把握する</span>
            — 系統費用の追加転嫁が続いています。中長期の電気料金予測を行い、固定費削減策を並行して推進してください。
            <Link href="/capacity-contribution-cost-impact" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              容量拠出金の詳細はこちら
            </Link>
          </li>
        </ol>
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
        <h2 className="text-xl font-semibold text-slate-900">JEPX卸市場でのエリアプライス推移</h2>
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
                const areaPrice = row.tohoku;
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
          東北エリアは再エネ比率の高さと需要規模のバランスから、システムプライスとの差は比較的小さい。
        </p>
      </section>

      {/* エリア需要の特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア需要の特徴</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          東北電力エリアは全国需要の約{DEMAND_AREA_SHARE.find(a => a.area === "tohoku")?.share}%を占めます。再エネ比率高く、西日本との需要相関は中程度(0.83)。
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
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{d?.tohoku.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{lf?.tohoku}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: OCCTO公表データを集計（FY2016〜FY2023）</p>
      </section>

      {/* 気候データと電力需要の関係 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">気候データと電力需要の関係</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          仙台の気象データから、当エリアの電力需要に影響する気候特性を整理します。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {weather.summerTmax && (
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">夏の最高気温（7-8月平均）</p>
              <p className="mt-1 text-2xl font-bold text-red-900">{weather.summerTmax.tmax2020_25}℃</p>
              <p className="mt-1 text-sm text-red-700">1990年代後半比 +{weather.summerTmax.change}℃</p>
            </div>
          )}
          {weather.winterTmin && (
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">冬の最低気温（1-2月平均）</p>
              <p className="mt-1 text-2xl font-bold text-blue-900">{weather.winterTmin.tmin2020_25}℃</p>
              <p className="mt-1 text-sm text-blue-700">1990年代後半比 {weather.winterTmin.change > 0 ? "+" : ""}{weather.winterTmin.change}℃</p>
            </div>
          )}
          {weather.hotDays && (
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-800">猛暑日（35℃超）の10年合計</p>
              <p className="mt-1 text-sm text-amber-700">1990年代: {weather.hotDays.d1990s}日 → 2020年代: {weather.hotDays.d2020s}日</p>
              <p className="mt-1 text-sm font-semibold text-amber-900">
                {weather.hotDays.d2020s > weather.hotDays.d1990s * 2 ? `約${Math.round(weather.hotDays.d2020s / Math.max(weather.hotDays.d1990s, 1))}倍に増加` : "増加傾向"}
              </p>
            </div>
          )}
          {weather.cdd ? (
            <div className="rounded-lg border border-orange-100 bg-orange-50 p-4">
              <p className="text-sm font-semibold text-orange-800">冷房度日（CDD）の変化</p>
              <p className="mt-1 text-sm text-orange-700">{weather.cdd.cdd1995_99} → {weather.cdd.cdd2020_24}</p>
              <p className="mt-1 text-sm font-semibold text-orange-900">+{weather.cdd.changePercent}%増加</p>
            </div>
          ) : weather.hdd ? (
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-sky-800">暖房度日（HDD）の変化</p>
              <p className="mt-1 text-sm text-sky-700">{weather.hdd.hdd1995_99} → {weather.hdd.hdd2020_24}</p>
              <p className="mt-1 text-sm font-semibold text-sky-900">{weather.hdd.changePercent}%減少</p>
            </div>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          仙台の夏の最高気温上昇は+2.7℃で全都市最大。猛暑日も1日→32日に急増。暖房需要（HDD）は-16%減少し、夏冬の電力需要バランスが変化しています。
        </p>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/region-hokkaido-business-electricity",
              title: "北海道電力エリアの法人電気代事情",
              description: "石炭火力依存と全国最高水準の料金特性を解説。",
            },
            {
              href: "/region-tokyo-business-electricity",
              title: "東京電力エリアの法人電気代事情",
              description: "関東エリアの料金特性とLNG火力リスクを詳しく解説。",
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
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="東北電力エリアの電気料金リスクを診断する"
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
