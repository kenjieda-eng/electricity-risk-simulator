import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { JEPX_AREA_YEARLY_AVG } from "../../data/jepxData";
import { DEMAND_AREA_FY, LOAD_FACTOR_FY, DEMAND_AREA_SHARE } from "../../data/demandData";
import { getWeatherByRegion } from "../../data/weatherData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["by-region"];


const pageTitle = "東京電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況";
const pageDescription =
  "東京電力エリア（関東9都県）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、2023〜2026年の料金改定動向、新電力の参入・撤退状況、LNG火力依存リスクと契約見直しのポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-tokyo-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "東京電力 法人",
    "東電エリア 電気料金",
    "関東 高圧電力 単価",
    "東京電力 料金改定",
    "関東 新電力",
    "法人電気代 東京",
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

const prefectures = [
  "東京都",
  "神奈川県",
  "埼玉県",
  "千葉県",
  "茨城県",
  "栃木県",
  "群馬県",
  "山梨県",
  "静岡県（富士川以東）",
];

const areaBasicInfo = [
  { label: "担当都道府県", value: "東京都・神奈川・埼玉・千葉・茨城・栃木・群馬・山梨・静岡（富士川以東）" },
  { label: "旧一般電気事業者", value: "東京電力ホールディングス（送配電：東京電力パワーグリッド）" },
  { label: "小売子会社", value: "東京電力エナジーパートナー（TEPCO EP）" },
  { label: "管内面積（概算）", value: "約 39,500 km²" },
  { label: "管内世帯数（概算）", value: "約 1,870万世帯（全国最大）" },
  { label: "法人需要家数の目安", value: "約 220万口（高圧以上：約 19万口）" },
  { label: "電源構成の特徴", value: "LNG火力が約 50〜55%、再エネ比率は全国平均程度" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 30〜35%（高圧・特別高圧の推計）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,400〜1,700 円/kW",
    ryoryo: "約 11〜14 円/kWh",
    nencho: "燃調費別途",
    note: "大工場・大型ビル向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,500〜1,900 円/kW",
    ryoryo: "約 14〜17 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・工場向け",
  },
  {
    menu: "高圧（6kV）低圧移行品",
    kihon: "固定 + 需要割",
    ryoryo: "約 16〜19 円/kWh",
    nencho: "燃調費別途",
    note: "小規模事業所",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 900〜1,100 円/kW",
    ryoryo: "約 15〜18 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ申請認可。高圧・特別高圧は自由化のため規制外だが、TEPCO EPも同時期に標準メニューを改定。",
  },
  {
    date: "2023年12月",
    content: "燃料費調整額の基準燃料価格を改定。LNG価格高止まりを受けてプラス幅が拡大。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。高圧・特別高圧需要家の契約単価に容量市場調達コストが転嫁される形となった。",
  },
  {
    date: "2024年10月",
    content: "電気・ガス料金激変緩和措置が段階的縮小・終了。法人の請求額が再び上昇。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金が 3.49 円/kWh に引き上げ（前年比 +0.4 円程度）。高圧以上の影響も大きい。",
  },
  {
    date: "2026年4月（直近）",
    content: "LNG価格の落ち着きにより燃調費プラス幅はやや縮小傾向。ただし容量拠出金・再エネ賦課金のコストは継続。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "全国最大規模の需要エリアであり、新電力の参入社数は最多。100社超が高圧向けプランを展開（2024年時点）。競争が最も活発なエリア。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022年のロシアウクライナ情勢以降、複数の新電力が高圧向け新規受付停止・既存契約の解除通知を実施。大手新電力も相次ぎ料金メニューを見直し。",
  },
  {
    category: "市場シェア推移",
    detail:
      "2020年に約 15% だった新電力シェアが 2022年には 35% 超に拡大した後、撤退ラッシュで 2023年は 30% 前後に縮小。2025年以降はやや回復傾向。",
  },
  {
    category: "価格競争力",
    detail:
      "エネルギー価格安定期は TEPCO EP の標準メニューより 5〜15% 安い料金を提示する事業者が多数存在。ただし市場連動型は変動リスクあり。",
  },
];

export default function RegionTokyoBusinessElectricityPage() {
  const weather = getWeatherByRegion("tokyo");
  return (
    <>
      <ArticleJsonLd
        headline="東京電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況"
        description="東京電力エリア（関東9都県）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、2023〜2026年の料金改定動向、新電力の参入・撤退状況、LNG火力依存リスクと契約見直しのポイントを解説します。"
        url="https://simulator.eic-jp.org/region-tokyo-business-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "東京電力エリアの法人電気代事情" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">東京電力エリアの事情</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          東京電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">料金水準・改定動向・新電力状況</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          東京電力エリア（関東9都県）は国内最大の電力消費地域であり、新電力の競争が最も活発です。
          一方、LNG火力への高い依存度から燃料費変動リスクを受けやすく、2022〜2023年の高騰局面では多数の新電力が
          契約解除を通知しました。本ページでは、エリアの基本情報・料金水準・改定動向・新電力状況・
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

      {/* エリア基本情報テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア基本情報</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          東京電力エリアの規模感・事業者構成を確認してください。
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
          以下は TEPCO EP の標準メニューをベースにした概算値です。
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
              { area: "東京電力エリア（当エリア）", value: 15.5, color: "bg-sky-600" },
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
        <h2 className="text-xl font-semibold text-slate-900">東京電力エリア特有の事情</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">LNG火力への高依存</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              東京電力エリアは国内最大規模の LNG（液化天然ガス）火力発電を保有しており、電源構成の約50〜55%を占めます。
              国際LNG価格が上昇すると燃料費調整額がダイレクトに上乗せされ、法人の請求額に直結します。
              2022年のエネルギー危機では同エリアの高圧需要家が月次で数十万円規模の追加コストを負担した事例もあります。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">首都圏集中による需要規模</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              関東9都県に日本の全就業者の約35%が集中しており、ビル・データセンター・商業施設など業務用電力の需要が
              全国で最も大きいエリアです。需要集中は送配電インフラへの設備投資を必要とし、
              将来の託送料金上昇リスクも相対的に高い点に注意が必要です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">新電力の小売競争が最も活発</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              需要規模が大きいため、新電力各社が優先的に営業リソースを投入するエリアです。
              価格競争が激しく、エネルギー価格安定期には旧一電より5〜15%安い提案が日常的でした。
              ただし撤退リスクも全国で最も多くの事例が発生しており、契約先の財務安定性の確認が重要です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">再エネ導入の制約</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              関東は大規模太陽光発電の適地（北海道・九州など）から遠く、系統制約や送電コストから
              再エネ電力の調達コストが高くなりやすい構造があります。
              オフサイトPPAや環境価値証書（非化石証書）を活用したGHG削減策が注目されています。
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
        <h2 className="text-xl font-semibold text-slate-900">東京電力エリアで契約見直しを進める際のポイント</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>
            <span className="font-semibold">燃料費調整額の仕組みを確認する</span>
            — 新電力との契約時にキャップ（上限）の有無を必ず確認。上限なしのプランは LNG 高騰時に大きなリスクとなります。
          </li>
          <li>
            <span className="font-semibold">複数の新電力から見積もりを取る</span>
            — 最大規模エリアのため競合が多く、比較によるコスト削減余地が大きい。最低3社以上の比較を推奨します。
          </li>
          <li>
            <span className="font-semibold">契約先の財務安定性を確認する</span>
            — 2022〜2023年に同エリアで最も多くの新電力撤退が発生。事業者の信用情報・規模・調達手段を確認してください。
          </li>
          <li>
            <span className="font-semibold">デマンドコントロールの余地を検討する</span>
            — 高圧・特別高圧の基本料金はデマンド（最大需要電力）で決まります。ピーク抑制施策で基本料金を削減できる場合があります。
          </li>
          <li>
            <span className="font-semibold">容量拠出金の影響を試算する</span>
            — 2024年度以降、電力調達コストに容量市場落札価格が加算されています。
            <Link href="/capacity-contribution-cost-impact" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              容量拠出金の詳細はこちら
            </Link>
          </li>
        </ol>
      </section>

      {/* 電源構成の実績データ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電源構成の実績データ（30分値集計）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          2024〜2026年の30分値データ（35,501レコード）を集計した東京エリアの電源構成実績です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p className="text-xs font-semibold text-orange-700">LNG火力</p>
            <p className="mt-1 text-2xl font-bold text-orange-900">55.7%</p>
            <p className="text-xs text-orange-600">平均 15,260 MW（全国最大）</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600">石炭火力</p>
            <p className="mt-1 text-2xl font-bold text-slate-800">20.2%</p>
            <p className="text-xs text-slate-500">平均 5,539 MW</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">太陽光</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">10.7%</p>
            <p className="text-xs text-amber-600">最大 17,840 MW / 抑制率 0.0%</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-xs font-semibold text-red-700">連系線（輸入）</p>
            <p className="mt-1 text-2xl font-bold text-red-900">+4,456 MW</p>
            <p className="text-xs text-red-600">常時輸入（最小+217MW）</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          LNG火力55.7%は全国最高の依存度です。太陽光出力は最大17,840MWと全国最大ですが、
          需要規模も最大のため抑制は発生していません（抑制率0.0%）。常時4,456MWを他エリア（主に東北）から
          輸入しており、連系線への依存度も高い構造です。
          <a href="/area-power-supply-mix-comparison" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">→ 9エリアの電源構成を比較する</a>
        </p>
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
                const areaPrice = row.tokyo;
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
          東京エリアは全期間を通じてシステムプライスを上回る傾向があり、FY2022は+3.09円、FY2026は+5.33円と需要集中によるプレミアムが拡大しています。
        </p>
      </section>

      {/* エリア需要の特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア需要の特徴</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          東京電力エリアは全国需要の約{DEMAND_AREA_SHARE.find(a => a.area === "tokyo")?.share}%を占めます。全国最大の需要エリア。負荷率はFY2016の{LOAD_FACTOR_FY.find(r => r.fy === 2016)?.tokyo}%→FY2022の{LOAD_FACTOR_FY.find(r => r.fy === 2022)?.tokyo}%と全国最低水準まで低下し、ピーク尖鋭化が顕著。
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
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{d?.tokyo.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{lf?.tokyo}%</td>
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
          東京の気象データから、当エリアの電力需要に影響する気候特性を整理します。
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
          東京は2023年に年平均気温18.14℃で観測史上1位を記録。猛暑日は1990年代の5倍に増加し、冷房需要（CDD）も+24%拡大。夏場のピーク電力とJEPX高騰リスクが構造的に増大しています。
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
              href: "/how-to-compare-electricity-suppliers",
              title: "電力会社の比較方法",
              description: "新電力を比較する際の評価軸と見積もり取得のコツを紹介。",
            },
            {
              href: "/region-kansai-business-electricity",
              title: "関西電力エリアの法人電気代事情",
              description: "原発再稼働の影響と関西エリアの料金特性を解説。",
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
          heading="東京電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、燃料費変動・容量拠出金・再エネ賦課金のリスクを数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "解説記事一覧へ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
