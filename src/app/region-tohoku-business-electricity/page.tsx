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
  { question: "東北電力エリアの料金は震災後どう変わりましたか？", answer: "東日本大震災（2011年）後、女川・東通の原発停止により火力依存度が大きく上昇し、燃料費調整額のプラス幅が拡大しました。2023年の規制料金値上げで実質的な単価が上昇した一方、太平洋沿岸部の風力・洋上風力を中心とした再エネ拡大が進み、長期的には電源構成多様化による料金安定化が見込まれます。" },
  { question: "東北 6 県の冬季暖房需要対策はどうすればよいですか？", answer: "東北・新潟の冬季は暖房負荷が極めて大きく、契約電力（kW）が冬季最大需要で決まる需要家が多数存在します。寒冷地仕様ヒートポンプの活用、産業用熱源のガス・灯油代替、コージェネによる熱電併給などで電力ピークを下げる事例が増えています。冬季ピークの15〜30%圧縮で基本料金を顕著に下げられる場合があります。" },
  { question: "東北の再エネ比率拡大は法人料金にどう影響？", answer: "東北電力エリアは陸上・洋上風力、地熱、太陽光の導入が全国でも積極的なエリアで、再エネ比率は20%超の水準まで上昇しています。再エネ拡大は中長期で燃料費調整額の安定化に寄与する一方、再エネ賦課金は全国一律のため直接的な電気代低減効果は限定的です。法人としてはRE100対応・GHG削減目標の達成に活用しやすい立地メリットがあります。" },
  { question: "東北新電力選択で気をつけるべきポイントは？", answer: "東北電力エリアは冬季の需給逼迫リスクが他エリアより高く、新電力の調達能力が試される構造があります。特に2022年冬の需給逼迫局面では複数の新電力が撤退・解約通知を出した経緯があり、選定時は『冬季の調達手段の多様性』『財務安定性』『緊急時のバックアップ供給契約の有無』を重視するのが定石です。" },
  { question: "東北電力との契約交渉で重要なポイントは？", answer: "震災後の電源構成変化により、燃料費調整額のプラス幅が他エリアより大きい構造があるため、燃調費キャップの交渉余地が他エリアより大きく出る傾向があります。また、特別高圧では年次入札型の単価交渉や、再エネ証書とのバンドル契約など、新しい契約形態への対応が広がっています。" },
  { question: "東北エリアの工場・観光業の削減事例の典型値は？", answer: "業界平均レンジとして、自動車関連工場（高圧、年間1,000万kWh級）で年間500〜1,200万円（5〜10%）、観光ホテル（高圧、年間500万kWh級）で年間150〜400万円（5〜8%）の削減事例が報告されています。冬季暖房需要のピークシフトと、夏季JEPXスポット価格低下を活用した市場連動部分採用が東北特有の有効施策です。" },
];

const sourcesItems = [
  { name: "東北電力", url: "https://www.tohoku-epco.co.jp/", description: "東北電力エリアの法人向け料金プラン情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・東北地方需給情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp", description: "東北エリアの需給・系統情報" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit", description: "エリア別の電力単価・統計（公開情報ベースの目安）" },
];


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
      faq={faqItems}
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
        <h2 className="text-xl font-semibold text-slate-900">なぜ東北電力エリアの法人電気料金見直しが重要なのか — 大震災後の電源構成変化</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          東北電力エリアの規模感・事業者構成を確認してください。
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
        <h2 className="text-xl font-semibold text-slate-900">東北電力の法人向け料金体系（業種別料金）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は東北電力フロンティアの標準メニューをベースにした概算値です。
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
          <p className="mt-2 text-xs text-slate-500">※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。</p>
        </div>
      </section>

      {/* エリア特有の事情 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">東北 6 県の冬季暖房需要と業種構成</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">東北の冬季暖房需要対策と料金改定（2023〜2026 年）</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">東北新電力と再エネ比率の高さによる切替動向</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">東北エリアの工場 / 観光業削減事例</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          東北エリアでは冬季暖房需要のピークシフトと、再エネ比率の高さを活かした調達ポートフォリオが他エリアより有効です。下記は当エリアでの典型的な削減事例ベンチマークです。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">自動車関連工場（高圧 1,000 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>新電力相見積もり: 約3〜5%</li>
              <li>冬季暖房ヒートポンプ化＋ピークシフト: 約3〜4%</li>
              <li>再エネ証書バンドル契約: GHG削減＋実費中立</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約500〜1,200万円</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">温泉観光ホテル（高圧 500 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>契約プラン見直し: 約3〜5%</li>
              <li>給湯・暖房コージェネ更新: 約3〜5%</li>
              <li>夏季 JEPX 安値時間帯活用: 約1〜2%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約150〜400万円</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">食品工場（高圧 300 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>新電力相見積もり（再エネプラン併用）: 約3〜4%</li>
              <li>冷凍冷蔵インバーター化: 約3〜5%</li>
              <li>自家消費太陽光（屋根 50kW）: 約2〜3%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約120〜300万円</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">東北電力エリア共通の見直しチェックリスト</p>
          <ol className="mt-2 list-decimal list-inside space-y-1 text-xs leading-6 text-slate-700">
            <li>再エネ比率を活かした調達プラン（グリーン証書・東北産PPAなど）</li>
            <li>製造業はデマンド管理を徹底（冬季ピーク抑制）</li>
            <li>出力制御リスクを考慮した調達計画（バックアップ電源・バランシンググループ）</li>
            <li>女川原発の再稼働影響を料金予測に織り込む</li>
            <li>
              容量拠出金・再エネ賦課金の動向を把握（
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の詳細</Link>
              ）
            </li>
          </ol>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: エネルギー情報センター内部試算、東北圏法人事例ヒアリング、業界平均レンジで作成。</p>
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
        <h2 className="text-xl font-semibold text-slate-900">JEPX 東北エリアプライス推移と冬季需給逼迫</h2>
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
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
      </section>

      {/* エリア需要の特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">東北電力エリアの再エネ拡大と電源構成</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          東北電力エリアは全国需要の約{DEMAND_AREA_SHARE.find(a => a.area === "tohoku")?.share}%を占めます。再エネ比率高く、西日本との需要相関は中程度(0.83)。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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

      {/* H2-Z シミュレーター */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の状況を確認する</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          東北電力エリアの法人需要家として、自社の上振れリスクを定量化するには以下の観点でシミュレーターを活用してください。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          <li>女川原発再稼働シナリオ別の燃調費影響を比較する</li>
          <li>冬季暖房需要のピークシフトで基本料金がどれだけ下がるかを把握する</li>
          <li>再エネプラン・グリーン証書バンドル契約の追加コスト/便益を試算する</li>
          <li>容量拠出金・再エネ賦課金の追加コストを織り込んだトータル単価で評価する</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">参考: 仙台の気象データ（夏最高 {weather.summerTmax?.tmax2020_25}℃ など）と需要規模（全国 {DEMAND_AREA_SHARE.find(a => a.area === "tohoku")?.share}%、負荷率 FY2023 {LOAD_FACTOR_FY.find(r => r.fy === 2023)?.tohoku}%）を踏まえた診断条件設計が有効です。</p>
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
              href: "/tohoku-epco-corporate-electricity-guide",
              title: "東北電力の法人向けプラン解説",
              description: "エリア全体の市況に対し、東北電力という特定企業のプラン体系・女川原発再稼働進行と水力資源・サポートを中立的に解説（電力会社別解説）。",
            },
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
            {
              href: "/region-hokuriku-business-electricity",
              title: "北陸電力エリアの法人電気代事情",
              description: "東北と並ぶ豪雪・冬季暖房需要地域。日本海側の冬季ピーク対策を比較できる。",
            },
            {
              href: "/business-electricity-cost-reduction-review-points",
              title: "法人電気代見直しの基本ポイント",
              description: "業種・エリアを問わず適用できる、法人契約見直しの基本フレームワーク。",
            },
            {
              href: "/non-fossil-certificates",
              title: "非化石証書の仕組みと活用法",
              description: "東北エリアの再エネ比率の高さを RE100 対応に活用する具体的手段。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧の電気料金の仕組み",
              description: "東北の自動車関連大手など特別高圧需要家向け料金体系を解説。",
            },
            {
              href: "/corporate-ppa-overview",
              title: "コーポレートPPAの概要と選び方",
              description: "東北の風力・太陽光ポテンシャルを活かしたコーポレートPPAの調達設計。",
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
