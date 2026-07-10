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
  { question: "東京電力エリアの法人電気料金は他エリアと比べて高いですか？", answer: "高圧電力量料金の業界標準メニューベースで、東京電力エリアは全国10エリア中で中位（15〜16円/kWh前後）に位置します。北海道・沖縄・四国・中国エリアより安く、関西・九州・北陸エリアより高い水準です。ただしLNG火力依存のため燃調費プラス幅は全国上位で、燃料価格高騰局面では実質単価が上振れしやすい特徴があります。" },
  { question: "関東圏で容量拠出金の影響が大きい業種は何ですか？", answer: "ベース負荷が大きく契約電力（kW）が大きい業種ほど影響が大きく、データセンター・大型物流倉庫・冷蔵冷凍倉庫・大規模オフィスビル・病院などが代表例です。容量拠出金は契約電力に比例して請求されるため、契約kWの見直しと、デマンド管理による契約電力低減が他エリアより収益貢献が大きくなります。" },
  { question: "データセンター集積による東電エリア電気代上昇の見通しは？", answer: "印西・千葉ベイエリアを中心とした関東圏のDC需要急増により、2030年に向けて関東圏の電力需要は年率2〜3%増加見通しが各種シンクタンクから示されています。需要増は容量拠出金・送電線増強コストを通じて法人需要家の託送料金にも波及するため、中長期で東電エリアは料金上昇圧力が他エリアより高く出る構造です。" },
  { question: "東京エリアで法人向けに有利な新電力はどう選びますか？", answer: "競争最激戦エリアのため100社超の選択肢がある一方、2022〜2023年の撤退・解約通知ラッシュも全国最多が起きたエリアです。選定時は『提示単価の安さ』だけでなく『財務安定性・調達手段の多様性・供給責任条項』を必ず確認してください。地場系・親会社の信用力が高い事業者を優先するのが、撤退リスクを抑える定石です。" },
  { question: "東京電力との契約見直しで成功確率を上げるには？", answer: "30分値デマンドデータの取得（電力会社マイページから過去24か月分が取得可能）と、最低3社以上の相見積もりが基本です。さらに容量拠出金・燃調費キャップ・契約期間中途解約条項の3点を契約条件比較表で並べると、表面単価では見えない年間コスト差が定量化できます。" },
  { question: "東電エリアでLNG依存リスクは契約にどう反映すべきですか？", answer: "LNG価格は地政学リスクで急騰し得るため、固定単価プランか、燃調費キャップ付き市場連動プランで上振れ上限を設定するのが基本です。さらに自家消費型太陽光・蓄電池・コーポレートPPAでLNG由来電力への依存を構造的に下げる中長期施策と組み合わせるのが、関東圏の大手法人で増えています。" },
];

const sourcesItems = [
  { name: "東京電力エナジーパートナー", url: "https://www.tepco.co.jp/ep/", description: "東京電力エリアの法人向け料金プラン情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・関東圏需給情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp", description: "東京エリアの需給・系統情報" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit", description: "エリア別の電力単価・統計（公開情報ベースの目安）" },
];


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
      faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">東京電力エリアの事情</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
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

      <AuthorBadge publishedAt="2026-04-11" updatedAt="2026-04-11" />
      <TableOfContents />

      {/* エリア基本情報テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ東京電力エリアの法人電気料金見直しが重要なのか — 関東圏業務集積と LNG 依存</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          東京電力エリアの規模感・事業者構成を確認したうえで、関東圏業務集積と LNG 火力依存という二つの構造から、なぜいま見直しが他エリアより重要なのかを整理します。日本最大の業務需要集積地であり、LNG火力55%超の電源構成は燃料価格の上振れリスクを直接的に法人請求に反映する構造です。
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
        <h2 className="text-xl font-semibold text-slate-900">東京電力の法人向け料金体系（特高 / 高圧 / 業務用の単価目安）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は TEPCO EP の標準メニューをベースにした概算値です。
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
          <p className="mt-2 text-xs text-slate-500">※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。</p>
        </div>
      </section>

      {/* エリア特有の事情 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">関東圏業務集積と LNG 火力依存が形成する東電エリアの電力需要構造</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">東電エリアの料金改定タイミングと年度予算サイクルの整合（2023〜2026 年）</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">関東圏新電力の勢力図と切替動向（2026 年版）</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">東京エリアの業種別削減事例（オフィスビル / DC / 製造業）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          東電エリアの法人需要家は、業種ごとに有効な削減アプローチが異なります。下記は当エリアでの典型的な削減事例ベンチマークです。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">中規模オフィスビル（延床 5,000m²）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>契約プラン見直し: 約3〜5%</li>
              <li>BEMS導入＋運用改善: 約5〜8%</li>
              <li>LED完全化＋人感センサー: 約3〜5%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約360〜600万円（18〜30%）</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">商用データセンター（IT 10MW）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>外気冷却比率拡大（PUE 1.7→1.5）: 約12%</li>
              <li>高効率UPS更新（92→96%）: 約2〜3%</li>
              <li>特別高圧入札型単価交渉: 約3〜5%</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約5.0〜7.6億円（20〜30%）</li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">関東圏製造業（高圧・年間 500 万kWh）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
              <li>新電力相見積もり（3社以上）: 約5〜8%</li>
              <li>デマンドコントローラー: 約3〜5%</li>
              <li>燃調費キャップ条項追加: 上振れ抑制効果</li>
              <li className="font-semibold text-slate-800">合計年間削減: 約650〜1,300万円</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">東電エリア共通の見直しチェックリスト</p>
          <ol className="mt-2 list-decimal list-inside space-y-1 text-xs leading-6 text-slate-700">
            <li>燃料費調整額キャップの有無を全プランで確認（LNG高騰耐性）</li>
            <li>最低 3 社以上の新電力から相見積もり（最激戦エリアの優位を活用）</li>
            <li>契約先の財務安定性確認（2022〜2023 年撤退最多エリアのため必須）</li>
            <li>デマンドコントロールで基本料金圧縮（高圧・特高はデマンド連動）</li>
            <li>
              容量拠出金の影響額を試算（
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の詳細</Link>
              ）
            </li>
          </ol>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: エネルギー情報センター内部試算、関東圏法人事例ヒアリング、業界平均レンジで作成。</p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          特に東電エリアでは、契約見直しによる即効型の削減から着手し、その回収原資を BEMS や高効率空調・LED 化に投資する『自走モデル』を 2〜3 年かけて構築するパターンが、上場企業・中堅企業ともに増えています。1 年目は契約見直しと運用改善で 5〜10% 削減、2 年目以降に設備投資で追加 5〜15% を狙う段階展開が、関東圏での主流アプローチになりつつあります。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
      </section>

      {/* 電源構成の実績データ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">東電エリア電源構成と需要バランスの 30 分値分析</h2>
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
        <p className="mt-2 text-xs text-slate-500">
          ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
        </p>
      </div>

      {/* JEPXエリアプライスの推移 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">JEPX 東京エリアプライス推移と直近相場</h2>
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
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
      </section>

      {/* H2-Z シミュレーター */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の状況を確認する</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          東電エリアの法人需要家として自社の上振れリスクを定量化するには、以下の観点でシミュレーターを活用してください。
        </p>
        <p className="mt-2 text-xs text-slate-500">
          ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          <li>現行契約条件での年間上振れリスク額を確認する（LNG 高騰シナリオ）</li>
          <li>固定プランと市場連動プランの年間コスト差を試算する</li>
          <li>関東圏 DC 集積による中長期の託送料金上昇影響を把握する</li>
          <li>容量拠出金・再エネ賦課金の追加コストを織り込んだトータル単価で比較する</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">参考: 東京の気象データ（夏最高 {weather.summerTmax?.tmax2020_25}℃ / 冷房需要 +{weather.cdd?.changePercent ?? 0}% など）と需要規模（全国 {DEMAND_AREA_SHARE.find(a => a.area === "tokyo")?.share}%、負荷率 FY2023 {LOAD_FACTOR_FY.find(r => r.fy === 2023)?.tokyo}%）を踏まえた診断条件設計が有効です。</p>
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
              href: "/nakano-ku-business-electricity-cost",
              title: "中野区の法人電気料金完全ガイド",
              description: "中野駅再開発・中小オフィス・商業エリアの電力需要と契約最適化。",
            },
            {
              href: "/tepco-ep-corporate-electricity-guide",
              title: "東京電力エナジーパートナーの法人向けプラン解説",
              description: "エリア全体の市況に対し、東電EPという特定企業のプラン体系・燃調算定・サポートを中立的に解説（電力会社別解説）。",
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
            {
              href: "/region-tohoku-business-electricity",
              title: "東北電力エリアの法人電気代事情",
              description: "東京エリアと連系線で接続される隣接エリア。連系線輸入で東電エリアと密接な需給関係。",
            },
            {
              href: "/business-electricity-cost-reduction-review-points",
              title: "法人電気代見直しの基本ポイント",
              description: "業種・エリアを問わず適用できる、法人契約見直しの基本フレームワーク。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧の電気料金の仕組み",
              description: "東電エリアの大規模法人で適用される特別高圧契約の料金体系を解説。",
            },
            {
              href: "/data-center-electricity-cost-review",
              title: "データセンターの電気料金見直しポイント",
              description: "東電エリア集積が進む DC の負荷特性と契約見直しの考え方。",
            },
            {
              href: "/office-building-electricity-cost-review",
              title: "オフィスビルの電気料金見直しポイント",
              description: "東電エリアの主力業務用需要であるオフィスビルの負荷特性と契約見直し。",
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
          heading="東京電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、燃料費変動・容量拠出金・再エネ賦課金のリスクを数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "解説記事一覧へ" },
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
