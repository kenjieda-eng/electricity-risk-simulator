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

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


// --- 定数 ---
const pageTitle = "法人の電気料金はいつ下がる？2026-2028年の値下がり条件と構造的に下がらない3つの理由";
const pageDescription =
  "法人電気料金が下がる条件を燃料価格・為替・制度要因で分析。2026-2028年は容量拠出金が1.5-2.8倍増で上昇要因優勢、構造的に下がりにくい費目3つ、下がる可能性がある費目、実務で使える予算策定の考え方を解説。";
const pageUrl =
  "https://simulator.eic-jp.org/when-will-business-electricity-prices-drop";

// --- データ定義 ---
const dropConditions = [
  {
    no: 1,
    label: "LNG等燃料価格の下落",
    detail:
      "燃料費調整額は国際LNG・原油・石炭価格に連動。価格下落から約2〜5ヶ月遅れで電気料金に反映される。",
  },
  {
    no: 2,
    label: "円高方向への為替変動",
    detail:
      "燃料は外貨建て調達のため、円高進行は輸入コストを直接押し下げ、燃調費の低下につながる。",
  },
  {
    no: 3,
    label: "JEPX市場価格の低下",
    detail:
      "市場連動型プランを契約している場合、日本卸電力取引所（JEPX）のスポット価格が下がれば電力調達コストが減少する。",
  },
  {
    no: 4,
    label: "再エネ賦課金の引き下げ",
    detail:
      "回避可能費用がFIT買取費用を上回ると引き下げが起きる。2023年度はこの条件が成立し、3.45円→1.40円/kWhへ急落した。",
  },
  {
    no: 5,
    label: "政府の補助制度（激変緩和措置等）",
    detail:
      "エネルギー価格高騰対策として政府が直接補填する制度が導入されると、請求単価が実質的に低下する。ただし時限措置であり、終了後は反動上昇が生じる。",
  },
];

type DropPeriodRow = {
  period: string;
  factor: string;
  rangeEstimate: string;
  background: string;
};

const dropPeriods: DropPeriodRow[] = [
  {
    period: "2016年",
    factor: "原油・LNG価格下落",
    rangeEstimate: "▲2〜3円/kWh",
    background: "シェール革命の影響で国際エネルギー価格が大幅下落。燃料費調整額がマイナス圏へ突入。",
  },
  {
    period: "2020年前半",
    factor: "コロナ需要減＋原油暴落",
    rangeEstimate: "▲1〜3円/kWh",
    background:
      "新型コロナウイルスによる世界的需要減退に伴い、WTI原油がマイナス価格を記録。燃調費が大幅に低下。",
  },
  {
    period: "2023年度",
    factor: "LNG価格正常化＋激変緩和措置",
    rangeEstimate: "▲5〜10円/kWh",
    background:
      "2022年ウクライナ危機による急騰からの反動と、政府の電気代補助（最大▲3.5円/kWh相当）が重なり大幅低下。",
  },
  {
    period: "2023年度",
    factor: "再エネ賦課金急落",
    rangeEstimate: "▲2.09円/kWh",
    background:
      "回避可能費用がFIT買取費用を超過し、賦課金単価が3.45円→1.40円/kWhへ。2016年度以来初めての大幅引き下げ。",
  },
];

type EasinesRow = {
  item: string;
  easiness: string;
  easinessLevel: "high" | "medium" | "low" | "none";
  reason: string;
  pastRecord: string;
};

const easinessRows: EasinesRow[] = [
  {
    item: "燃料費調整額",
    easiness: "下がりやすい",
    easinessLevel: "high",
    reason: "燃料価格に連動。下落時は2〜5ヶ月遅れで反映される。",
    pastRecord: "2020年・2023年にマイナス圏まで低下",
  },
  {
    item: "市場価格調整額",
    easiness: "下がりやすい（市場連動型のみ）",
    easinessLevel: "high",
    reason: "JEPX低下に連動するため、スポット価格が落ち着けば効果が出る。",
    pastRecord: "2023年後半に大幅低下",
  },
  {
    item: "再エネ賦課金",
    easiness: "まれに下がる",
    easinessLevel: "medium",
    reason:
      "回避可能費用が買取費用を上回った場合のみ引き下げ。構造的には増加傾向にある。",
    pastRecord: "3.45→1.40円/kWh（2023年度）",
  },
  {
    item: "基本料金",
    easiness: "下がりにくい",
    easinessLevel: "low",
    reason:
      "契約変更・乗り換え交渉次第。デマンド実績を下げることで引き下げが可能。",
    pastRecord: "交渉・切り替えによる引き下げ事例あり",
  },
  {
    item: "託送料金",
    easiness: "ほぼ下がらない",
    easinessLevel: "none",
    reason:
      "送配電ネットワーク投資が継続増。レベニューキャップ制度で抑制効果はあるが下落実績はない。",
    pastRecord: "下落実績なし",
  },
  {
    item: "容量拠出金",
    easiness: "当面下がらない",
    easinessLevel: "none",
    reason:
      "容量市場の拡大フェーズにあり、2024年度に急増したばかり。しばらくは増加傾向が続く見通し。",
    pastRecord: "2024年度に急増",
  },
];

type OutlookRow = {
  factor: string;
  direction: string;
  directionBadge: "up" | "neutral" | "down";
  impact: string;
};

const outlookRows: OutlookRow[] = [
  {
    factor: "LNG価格",
    direction: "やや安定〜小幅上昇",
    directionBadge: "neutral",
    impact: "燃調費は大幅な下落を期待しにくい局面が続く。",
  },
  {
    factor: "為替（円ドル）",
    direction: "円安基調が継続",
    directionBadge: "up",
    impact: "燃料調達コストの下押し効果は限定的。円高転換がないと恩恵は薄い。",
  },
  {
    factor: "再エネ賦課金",
    direction: "2025年度は過去最高（3.49円）",
    directionBadge: "up",
    impact: "下がる要素なし。FIT買取費用の増大が単価を押し上げ続けている。",
  },
  {
    factor: "容量拠出金",
    direction: "増加傾向",
    directionBadge: "up",
    impact: "容量市場の本格稼働により、構造的な上昇圧力が続く。",
  },
  {
    factor: "託送料金",
    direction: "横ばい〜小幅上昇",
    directionBadge: "neutral",
    impact: "送配電投資の継続により、中長期では上昇方向。",
  },
  {
    factor: "補助金（激変緩和措置等）",
    direction: "終了済み",
    directionBadge: "up",
    impact: "再導入は不透明。政策判断次第だが、恒久制度化は想定しにくい。",
  },
];

const practicalActions = [
  {
    no: 1,
    title: "電力プランの見直し・乗り換え交渉",
    body: "現在の契約条件を棚卸しし、複数の新電力・大手電力から相見積もりを取得する。市場環境が落ち着いた今こそ有効な交渉タイミング。",
  },
  {
    no: 2,
    title: "デマンド削減によるピーク抑制",
    body: "最大需要電力（デマンド）を下げることで、基本料金を恒久的に引き下げられる。設備の更新時・夏冬ピーク前が最大の機会。",
  },
  {
    no: 3,
    title: "市場連動型プランへの切り替え検討",
    body: "JEPX価格が落ち着いている局面では、市場連動型プランが固定プランより低コストになるケースがある。ただし価格変動リスクとのトレードオフを理解した上で判断する。",
  },
  {
    no: 4,
    title: "オンサイト電源・省エネ機器の導入",
    body: "太陽光発電や高効率空調・照明への投資により、買電量そのものを減らす。料金水準に依存しないコスト削減効果が得られる。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 いつ下がる",
    "電気料金 値下がり 条件",
    "燃料費調整額 下落",
    "再エネ賦課金 引き下げ",
    "電気料金 見通し 2025 2026",
    "高圧電力 料金 下がる",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/price-increase", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-increase"],
  },
};

// --- ヘルパー: 下がりやすさバッジ ---
function EasinessLabel({
  level,
  label,
}: {
  level: EasinesRow["easinessLevel"];
  label: string;
}) {
  const colorMap: Record<EasinesRow["easinessLevel"], string> = {
    high: "bg-sky-100 text-sky-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-orange-100 text-orange-800",
    none: "bg-slate-100 text-slate-600",
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${colorMap[level]}`}
    >
      {label}
    </span>
  );
}

// --- ヘルパー: 方向性バッジ ---
function DirectionBadge({
  badge,
  label,
}: {
  badge: OutlookRow["directionBadge"];
  label: string;
}) {
  const colorMap: Record<OutlookRow["directionBadge"], string> = {
    up: "bg-red-100 text-red-700",
    neutral: "bg-yellow-100 text-yellow-700",
    down: "bg-sky-100 text-sky-700",
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${colorMap[badge]}`}
    >
      {label}
    </span>
  );
}

// --- Page Component ---
export default function WhenWillBusinessElectricityPricesDropPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電気料金はいつ下がるのか｜値下がりの条件と今後の見通し"
        description="法人の電気料金が下がる条件を、燃料価格・為替・市場環境・制度要因から整理。過去に下がった時期の分析、構造的に下がりにくい費目と下がる可能性がある費目、今後の見通しを解説。"
        url="https://simulator.eic-jp.org/when-will-business-electricity-prices-drop"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電気料金はいつ下がるのか" },
        ]}
      faq={__CATEGORY_FAQ__}
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
              href="/articles/price-increase"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              料金が上がる理由を知る
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-slate-600">いつ下がるのか</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電気料金はいつ下がるのか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金はここ数年で大幅に上昇し、高止まりが続いています。「いつになったら下がるのか」は多くの企業の共通の疑問です。このページでは、電気料金が下がるために必要な条件を費目別・要因別に整理し、過去に実際に下がった時期の背景を分析したうえで、2025〜2026年度の見通しと実務上の対応策を解説します。
        </p>
      </header>

      <div className="mt-8 space-y-10">
        {/* H2: 電気料金が下がる条件とは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気料金が下がる条件とは
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金は複数の費目の合算です。「料金全体が下がる」ためには、主要費目のうち少なくとも一つ以上で下落要因が生じる必要があります。以下の5つが主な下落トリガーです。
          </p>
          <ol className="mt-4 space-y-3">
            {dropConditions.map((c) => (
              <li
                key={c.no}
                className="flex gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                  {c.no}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {c.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            これらの条件は独立して発生することもあれば、複数が重なって大幅な下落を引き起こすこともあります。一方で、託送料金・容量拠出金のような「制度固定費」は下落トリガーが存在せず、上昇方向にしか動かない費目である点も重要です。
          </p>
        </section>

        {/* H2: 過去に電気料金が下がった時期 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            過去に電気料金が下がった時期
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            過去に法人向け電気料金が実際に低下した時期と、その主な要因を以下にまとめます。いずれも「燃料価格の急落」か「政策措置」が引き金となっており、構造的な費目（託送・容量）の下落による値下がりは過去に事例がありません。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    時期
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    下落要因
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    高圧単価の変動幅（目安）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    背景
                  </th>
                </tr>
              </thead>
              <tbody>
                {dropPeriods.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                      {row.period}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.factor}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">
                      {row.rangeEstimate}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.background}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            ※変動幅は代表的な高圧電力契約の目安。電力会社・契約種別・地域によって異なります。
          </p>
        </section>

        {/* H2: 費目別に見る「下がりやすさ」 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            費目別に見る「下がりやすさ」
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金を構成する主要費目ごとに、下がりやすさの違いを整理します。燃料費調整額や市場価格調整額は比較的下落しやすい一方、制度的に決まる費目は構造的な上昇方向にある点が特徴です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    費目
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    下がりやすさ
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    理由
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    過去の下落実績
                  </th>
                </tr>
              </thead>
              <tbody>
                {easinessRows.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                      {row.item}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      <EasinessLabel
                        level={row.easinessLevel}
                        label={row.easiness}
                      />
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.reason}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">
                      {row.pastRecord}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            このように「下がる可能性がある費目」と「構造的に下がらない費目」が混在しています。仮に燃料費調整額が下落しても、託送料金・容量拠出金・再エネ賦課金がその幅を打ち消すケースが増えており、2025年度以降は特にその傾向が顕著です。
          </p>
        </section>

        {/* H2: 2025〜2026年度の見通し */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            2025〜2026年度の見通し
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            主要な価格形成要因ごとに、2025〜2026年度の方向性と法人電気料金への影響を整理します。全体として「大幅に下がる要素は乏しく、複数の費目で上昇圧力が残る」状況です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    要因
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    方向性
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    法人電気料金への影響
                  </th>
                </tr>
              </thead>
              <tbody>
                {outlookRows.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                      {row.factor}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      <DirectionBadge
                        badge={row.directionBadge}
                        label={row.direction}
                      />
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2023年度に見られたような「燃料価格反落＋補助金」という二重の下落要因が重なる局面は、現時点では見込みにくい状況です。燃料価格が落ち着いても、再エネ賦課金・容量拠出金・託送料金の上昇がオフセットするため、純粋な値下がり感は限定的にとどまると考えられます。
          </p>
        </section>

        {/* H2: 「下がるのを待つ」より「今の条件を最適化する」 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「下がるのを待つ」より「今の条件を最適化する」
          </h2>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            構造的に下がりにくい費目が増えている現実
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の構成要素のうち、契約者が制御できない「制度固定費」（再エネ賦課金・容量拠出金・託送料金）が請求額に占める割合は年々高まっています。2016年頃と比較すると、これらの合計は高圧契約で5〜8円/kWh程度増加しており、燃料費が下がっても料金全体が下がりにくい構造になっています。
          </p>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">
            待つリスク vs 見直すメリット
          </h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-700">待つリスク</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                <li>・構造的上昇費目が毎年積み上がる</li>
                <li>・契約が自動更新され、割高条件が継続する</li>
                <li>・相見積もりのタイミングを逃す</li>
                <li>・省エネ投資の機会損失が累積する</li>
              </ul>
            </div>
            <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-sky-700">見直すメリット</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                <li>・市場が落ち着いた今は交渉しやすいタイミング</li>
                <li>・デマンド削減は料金水準に依存しない効果</li>
                <li>・省エネ投資は買電量を恒久的に減らせる</li>
                <li>・複数社見積もりで競争原理を活用できる</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">
            4つの実務アクション
          </h3>
          <ol className="mt-3 space-y-3">
            {practicalActions.map((action) => (
              <li
                key={action.no}
                className="flex gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                  {action.no}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {action.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {action.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* H2: まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-2">
              <span className="mt-1 text-sky-600">▸</span>
              <span>
                電気料金が下がるには「燃料価格の下落」「円高」「JEPX低下」「再エネ賦課金引き下げ」「政府補助」のいずれかが必要。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-sky-600">▸</span>
              <span>
                過去の大幅下落（2016年・2020年・2023年）はいずれも燃料急落か政策対応が引き金。構造費目の下落による値下がりは過去に事例がない。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-sky-600">▸</span>
              <span>
                2025〜2026年度は再エネ賦課金が過去最高水準、容量拠出金も増加傾向にあり、燃料費が落ち着いても料金全体が大幅に下がる可能性は低い。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-sky-600">▸</span>
              <span>
                「下がるのを待つ」戦略は構造費目の累積上昇リスクを抱える。今のうちにプラン見直し・デマンド削減・省エネ投資を進めることが実務上有効。
              </span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-6">
        <GlossaryLinks currentSlug="when-will-business-electricity-prices-drop" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "託送料金", "市場連動プラン", "JEPX"]} />
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
              title: "なぜ法人の電気料金は上がるのか",
              description:
                "料金上昇の構造的な要因を費目別に解説。値下がりとの対比で理解が深まります。",
            },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人の電気料金はどれくらい上がったのか",
              description:
                "2020年以降の上昇幅を数字で確認。値下がりとの比較に役立ちます。",
            },
            {
              href: "/fuel-cost-adjustment-history",
              title: "燃料費調整額の推移詳細",
              description:
                "下がりやすい費目の代表・燃料費調整額の2018年度以降の変動履歴。",
            },
            {
              href: "/renewable-energy-surcharge-history",
              title: "再エネ賦課金の推移と今後",
              description:
                "2023年度の急落と2025年度の過去最高更新をデータで確認。",
            },
            {
              href: "/impact-of-electricity-subsidy-ending",
              title: "電気代補助終了の影響",
              description:
                "激変緩和措置の終了が請求額に与えた影響と今後の見通し。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description:
                "自社の契約条件と市場の標準的なプランを比較して見直し余地を確認。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "価格が下がらない実態を直近の推移データで確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="現在の条件で見直し余地を確認する"
          description="シミュレーターで現在の電気料金のリスクスコアを算出し、見直しの優先度を把握しましょう。料金メニュー比較診断では、現在の契約と別プランの試算を並べて確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
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
