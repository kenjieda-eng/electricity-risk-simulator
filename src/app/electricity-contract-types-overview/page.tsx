import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

// --- 定数 ---
const pageTitle =
  "電力契約の種類と選び方の基本｜法人が最初に知りたい契約区分を一覧で整理";
const pageDescription =
  "法人向け電力契約の種類を一覧で解説。低圧電灯・低圧電力・高圧・特別高圧の4区分の違い、契約容量の目安、業種別の対応表、契約区分の選び方フローを整理。";

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 種類",
    "低圧電灯",
    "低圧電力",
    "高圧契約",
    "特別高圧",
    "法人 電気契約",
    "契約区分",
    "電力契約 選び方",
    "キュービクル",
    "契約電力",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-contract-types-overview",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-contract-types-overview",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/basic",
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
    images: ["/api/og/basic"],
  },
};

// --- 契約区分一覧データ ---
const contractTypes = [
  {
    name: "低圧電灯",
    voltage: "100V/200V（単相）",
    capacity: "60A以下 or 6kVA〜50kVA",
    equipment: "不要",
    facilities: "小規模オフィス・店舗",
    monthlyUsage: "500〜3,000kWh",
    monthlyCost: "1.5〜10万円",
  },
  {
    name: "低圧電力（動力）",
    voltage: "200V（三相）",
    capacity: "0.5〜50kW",
    equipment: "不要",
    facilities: "飲食店・クリニック・小型工場",
    monthlyUsage: "1,000〜15,000kWh",
    monthlyCost: "3〜30万円",
  },
  {
    name: "高圧",
    voltage: "6,000V",
    capacity: "50〜2,000kW",
    equipment: "キュービクル必要",
    facilities: "中規模工場・商業施設・病院",
    monthlyUsage: "10,000〜500,000kWh",
    monthlyCost: "30〜1,500万円",
  },
  {
    name: "特別高圧",
    voltage: "20,000V〜",
    capacity: "2,000kW超",
    equipment: "特高受電設備",
    facilities: "大規模工場・データセンター",
    monthlyUsage: "500,000kWh〜",
    monthlyCost: "1,500万円〜",
  },
];

// --- 料金構造の違いデータ ---
const priceStructureRows = [
  {
    item: "基本料金の決まり方",
    teito: "契約アンペア×単価",
    teiryoku: "契約kW×単価",
    kouatsu: "契約kW×単価×力率",
    tokubetsu: "個別交渉",
  },
  {
    item: "電力量料金",
    teito: "段階制（3段階）",
    teiryoku: "一律単価",
    kouatsu: "一律or時間帯別",
    tokubetsu: "個別交渉（時間帯別）",
  },
  {
    item: "燃調費の扱い",
    teito: "上限あり（規制料金）",
    teiryoku: "上限あり/なし混在",
    kouatsu: "上限なし（多くの場合）",
    tokubetsu: "上限なし",
  },
  {
    item: "市場連動の有無",
    teito: "なし（多くの場合）",
    teiryoku: "一部あり",
    kouatsu: "あり（選択可能）",
    tokubetsu: "あり（多くの場合）",
  },
  {
    item: "見積の取り方",
    teito: "Web申込み中心",
    teiryoku: "Web/電話",
    kouatsu: "個別見積依頼",
    tokubetsu: "完全個別交渉",
  },
  {
    item: "切替の自由度",
    teito: "高い",
    teiryoku: "高い",
    kouatsu: "中程度",
    tokubetsu: "低い（手続き複雑）",
  },
];

// --- 業種別データ ---
const industryRows = [
  {
    industry: "オフィス",
    small: "低圧電灯（〜30名）",
    medium: "高圧（30〜500名）",
    large: "特別高圧（500名超・ビル全体）",
  },
  {
    industry: "飲食店",
    small: "低圧電力（1店舗）",
    medium: "高圧（大型店・チェーン本部）",
    large: "―",
  },
  {
    industry: "工場",
    small: "低圧電力（町工場）",
    medium: "高圧（中規模ライン）",
    large: "特別高圧（24時間大規模）",
  },
  {
    industry: "商業施設",
    small: "低圧電灯（個人店）",
    medium: "高圧（SC・モール）",
    large: "特別高圧（百貨店）",
  },
  {
    industry: "病院",
    small: "低圧電力（クリニック）",
    medium: "高圧（200床規模）",
    large: "特別高圧（大学病院）",
  },
  {
    industry: "学校",
    small: "低圧電灯（小規模塾）",
    medium: "高圧（中学・高校）",
    large: "特別高圧（大学キャンパス）",
  },
];

// --- 選び方フローデータ ---
const selectionSteps = [
  {
    step: 1,
    title: "月間使用量を確認する",
    description:
      "直近3か月の電気代明細で月間使用量（kWh）を確認する。10,000kWh未満であれば低圧が基本。10,000kWh以上なら高圧以上の検討に進む。",
  },
  {
    step: 2,
    title: "契約電力（kW）を確認する",
    description:
      "現在の契約電力または最大需要電力を確認する。50kW未満であれば低圧、50kW以上であれば高圧の対象となる。",
  },
  {
    step: 3,
    title: "2,000kW超なら特別高圧を検討",
    description:
      "契約電力または最大需要電力が2,000kWを超える場合は特別高圧の対象。大規模工場やデータセンターが典型例。",
  },
  {
    step: 4,
    title: "キュービクル設置の可否・コストを確認",
    description:
      "高圧以上に切り替える場合はキュービクル（受変電設備）の設置が必要。設置スペース・初期費用（数百万円〜）・維持管理コストを事前に確認する。",
  },
  {
    step: 5,
    title: "年間コスト比較で最終判断",
    description:
      "高圧切替によるkWh単価の削減効果と、受電設備の初期費用・維持費を比較して投資回収年数を試算する。一般に年間電気代が数百万円以上になると高圧切替の経済合理性が生まれやすい。",
  },
];

// --- 詳細ページリンクデータ ---
const detailPages = [
  {
    href: "/low-voltage-electricity-pricing",
    title: "低圧電力の料金体系と見直しポイント",
    description:
      "低圧電灯・低圧電力（動力）の料金構造、段階制料金、切替時の注意点を詳しく解説。",
  },
  {
    href: "/high-voltage-electricity-pricing",
    title: "高圧電力の料金体系と契約のしくみ",
    description:
      "高圧6kVの料金体系、基本料金の力率割引、時間帯別料金、一括受電の活用法を解説。",
  },
  {
    href: "/extra-high-voltage-electricity-pricing",
    title: "特別高圧の料金体系と個別交渉のポイント",
    description:
      "特別高圧契約の料金構造、電力会社との個別交渉、PPA・自家発との組み合わせを解説。",
  },
  {
    href: "/high-voltage-vs-extra-high-voltage-differences",
    title: "高圧と特別高圧の違いを徹底比較",
    description:
      "高圧と特別高圧の電圧・受電設備・契約手続き・コストの違いを比較表で整理。",
  },
];

const faq = [
  { question: "法人電力契約の4区分の違いは何ですか？", answer: "低圧電灯（100/200V・家庭用と同じ）、低圧電力（3相200V・動力用）、高圧（6,600V・50kW〜2,000kW未満）、特別高圧（20kV以上・2,000kW以上）の4つがあります。使用電力量と施設規模によって適切な区分が決まります。" },
  { question: "契約区分はどのタイミングで見直すべきですか？", answer: "使用量が大幅に増減したとき（特に50kWの壁・2,000kWの壁に近づいたとき）、施設の増改築時、既存設備の撤廃・追加時などに見直しを検討します。区分変更には電力会社への申請と設備工事が必要です。" },
  { question: "自社の電力契約区分はどこで確認できますか？", answer: "毎月の電気料金の請求書・検針票に記載されています。「高圧電力」「特別高圧電力」など契約種別が明記されています。複数拠点がある場合は拠点ごとに異なる区分になることがあります。" },
];

// --- Page Component ---
export default function ElectricityContractTypesOverviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電力契約の種類と選び方の基本｜法人が最初に知りたい契約区分を一覧で整理"
        description="法人向け電力契約の種類を一覧で解説。低圧電灯・低圧電力・高圧・特別高圧の4区分の違い、契約容量の目安、業種別の対応表、契約区分の選び方フローを整理。"
        url="https://simulator.eic-jp.org/electricity-contract-types-overview"
        datePublished="2026-04-13"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "電力契約の種類と選び方の基本" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link
              href="/articles/basic"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              基礎から知る
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-slate-700">電力契約の種類</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電力契約の種類と選び方の基本
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人が電気を契約する際、電圧や使用規模によって「低圧電灯」「低圧電力」「高圧」「特別高圧」の4つの区分に分かれます。区分が異なると料金体系・受電設備の要否・切替手続きの複雑さがすべて変わります。このページでは、各区分の特徴を一覧で整理し、自社に合った契約区分の選び方フローを解説します。
        </p>
      </header>

      {/* 本文セクション群 */}
      <div className="mt-6 space-y-6">
        {/* H2: 法人の電力契約は4つの区分に分かれる */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人の電力契約は4つの区分に分かれる
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力会社との契約区分は、受電する電圧と契約電力の大きさによって決まります。電圧が高くなるほど単価（円/kWh）は下がる傾向がありますが、受電設備の設置・維持コストが発生します。まず自社の使用量と契約電力を把握し、該当する区分を確認しましょう。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">契約区分</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">電圧</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">契約電力</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">受電設備</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">典型的な施設</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">月間使用量目安</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">月額電気代目安</th>
                </tr>
              </thead>
              <tbody>
                {contractTypes.map((row, i) => (
                  <tr
                    key={row.name}
                    className={i % 2 === 0 ? "border-b border-slate-100" : "border-b border-slate-100 bg-slate-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.name}</td>
                    <td className="px-4 py-3 text-slate-700">{row.voltage}</td>
                    <td className="px-4 py-3 text-slate-700">{row.capacity}</td>
                    <td className="px-4 py-3 text-slate-700">{row.equipment}</td>
                    <td className="px-4 py-3 text-slate-700">{row.facilities}</td>
                    <td className="px-4 py-3 text-slate-700">{row.monthlyUsage}</td>
                    <td className="px-4 py-3 font-semibold text-sky-700">{row.monthlyCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※月間使用量・月額電気代は目安です。業種・稼働時間・設備構成により大きく異なります。
          </p>
        </section>

        {/* H2: 各契約区分の料金構造の違い */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">各契約区分の料金構造の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約区分によって、基本料金の算定方法・電力量料金の単価体系・燃料費調整額の扱い・市場連動の有無が異なります。特に高圧・特別高圧は燃調費の上限がない場合が多く、市場価格の変動リスクを直接受けやすい点に注意が必要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">項目</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">低圧電灯</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">低圧電力</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">高圧</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">特別高圧</th>
                </tr>
              </thead>
              <tbody>
                {priceStructureRows.map((row, i) => (
                  <tr
                    key={row.item}
                    className={i % 2 === 0 ? "border-b border-slate-100" : "border-b border-slate-100 bg-slate-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-800">{row.item}</td>
                    <td className="px-4 py-3 text-slate-700">{row.teito}</td>
                    <td className="px-4 py-3 text-slate-700">{row.teiryoku}</td>
                    <td className="px-4 py-3 text-slate-700">{row.kouatsu}</td>
                    <td className="px-4 py-3 text-slate-700">{row.tokubetsu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※電力会社・メニュー・契約時期によって異なります。詳細は各社の供給約款を確認してください。
          </p>
        </section>

        {/* H2: 業種・施設規模別の典型的な契約区分 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種・施設規模別の典型的な契約区分
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種と施設規模の組み合わせによって、一般的に対応する契約区分が異なります。下表はあくまで目安ですが、競合他社の契約区分を把握する際や、新規出店・増床時の電力コスト試算に活用できます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">業種・施設</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">小規模</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">中規模</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">大規模</th>
                </tr>
              </thead>
              <tbody>
                {industryRows.map((row, i) => (
                  <tr
                    key={row.industry}
                    className={i % 2 === 0 ? "border-b border-slate-100" : "border-b border-slate-100 bg-slate-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.industry}</td>
                    <td className="px-4 py-3 text-slate-700">{row.small}</td>
                    <td className="px-4 py-3 text-slate-700">{row.medium}</td>
                    <td className="px-4 py-3 text-slate-700">{row.large}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: 契約区分の選び方フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分の選び方フロー</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自社に最適な契約区分を判断するには、現在の使用量・契約電力を起点に5つのステップで検討します。特に低圧から高圧への切替は初期投資を伴うため、年間コスト削減効果との比較が重要です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {selectionSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm leading-7 text-slate-700">
              <span className="font-semibold text-sky-700">判断の目安：</span>
              月間電気代が50万円以上（年間600万円以上）になる場合、高圧切替による単価削減効果が受電設備コストを上回るケースが多いとされています。ただし施設の構造・設置スペース・電力会社のメニューによって異なるため、複数社からの見積比較が不可欠です。
            </p>
          </div>
        </section>

        {/* H2: 契約区分ごとの詳細ページ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分ごとの詳細ページ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各契約区分の料金体系・メリット・注意点・見直しポイントを詳しく解説したページです。自社が該当する区分のページから読み進めることをお勧めします。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {detailPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100"
              >
                <p className="text-sm font-semibold text-slate-900">{page.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-700">{page.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* H2: まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              ・法人の電力契約は<strong>低圧電灯・低圧電力・高圧・特別高圧</strong>の4区分に分かれ、電圧と契約電力で決まる
            </li>
            <li>
              ・区分によって基本料金の算定方法・燃調費の上限有無・市場連動リスクが大きく異なる
            </li>
            <li>
              ・高圧以上はkWh単価が下がる一方、<strong>キュービクルなどの受電設備</strong>の設置・維持コストが発生する
            </li>
            <li>
              ・契約区分の見直しは月間使用量・契約電力・年間コストシミュレーションの3点を軸に判断する
            </li>
            <li>
              ・高圧・特別高圧は燃調費上限なし・市場連動あり のケースが多く、<strong>料金変動リスク管理</strong>が特に重要になる
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-6">
        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力契約区分・制度に関するデータ" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
            { name: "新電力ネット", url: "https://pps-net.org", description: "電力市場データ・新電力情報" },
          ]}
          publishedAt="2026-04-13"
        />
      </div>

      {/* 関連リンク */}
      
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人の電気代の内訳を読む",
              description:
                "基本料金・電力量料金・燃調費・再エネ賦課金の仕組みと、明細書の読み方を解説。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは？決まり方と削減のポイント",
              description:
                "契約電力（kW）の算定ルール、デマンド値の仕組み、ピークカットによる基本料金削減策を解説。",
            },
            {
              href: "/business-electricity-price-benchmark",
              title: "法人の電気代の相場と業種別ベンチマーク",
              description:
                "業種・規模別の平均的な電気代水準と、自社の電気代が割高かどうかを判断する目安を紹介。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気代明細書の見方と各項目の意味",
              description:
                "請求書に記載された各項目の意味と計算方法を、実際の明細サンプルをもとに解説。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description:
                "自社の契約条件を入力して、現行メニューとの比較・最適プランの目安を確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "契約区分を決めたあとのプラン選択軸を整理できます。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直しを始めるには",
              description: "契約区分の整理を踏まえた見直し手順を確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気代リスクを診断する"
          description="契約区分・使用量・地域を入力するだけで、電気料金上昇リスクのスコアと今後の料金変動シミュレーションを無料で確認できます。契約見直しの前に、まずリスク水準を把握しましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する（無料）" },
            { href: "/articles/basic", label: "基礎知識をもっと学ぶ" },
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
