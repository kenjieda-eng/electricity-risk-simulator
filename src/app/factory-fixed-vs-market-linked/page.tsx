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

const __CATEGORY_FAQ__ = CATEGORY_FAQ["plan-types"];

const pageTitle =
  "工場は固定と市場連動のどちらが向くか｜稼働パターンと負荷から考える";
const pageDescription =
  "製造業の工場が電力契約を固定プランと市場連動プランで比較する際の視点を整理します。連続稼働と交替勤務の違い、ベースロードの大きさ、生産コストへの影響など、工場特有の判断軸を解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "工場 電力契約 固定 市場連動",
    "製造業 電気料金 プラン選択",
    "工場 電気代 固定プラン",
    "製造業 電力 コスト管理",
    "工場 JEPX 市場連動",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/factory-fixed-vs-market-linked",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/factory-fixed-vs-market-linked",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const operationPatterns = [
  {
    pattern: "24時間連続稼働（3交替制）",
    examples: "化学プラント、鉄鋼、製紙、食品（一部）",
    loadCharacteristics: "使用量が大きく、昼夜の変動が小さい。需要ピーク時間帯（昼間）の回避が難しい。",
    marketLinkedRisk: "高い。日中のJEPX価格が高騰する時間帯を避けることができず、常に市場価格の影響を受ける。",
    recommendation: "固定プランを優先",
    reason: "時間帯別の調整余地が少なく、高騰リスクの回避が難しい。生産コストの安定性が重要。",
  },
  {
    pattern: "昼間稼働（1〜2交替制）",
    examples: "機械加工、電子部品、自動車部品（一部）",
    loadCharacteristics: "稼働は主に平日昼間。夜間・休日は低負荷または停止。昼間の使用量が大きい。",
    marketLinkedRisk: "高い。JEPXの価格が高い時間帯（昼間）に稼働が集中するため、高騰の影響を受けやすい。",
    recommendation: "固定プランを基本に検討",
    reason: "稼働時間帯がJEPXの高価格帯と重なりやすく、市場連動のメリットを享受しにくい。",
  },
  {
    pattern: "夜間シフト中心",
    examples: "パン・菓子製造、新聞印刷など特定業種",
    loadCharacteristics: "稼働は主に夜間〜早朝。昼間は低負荷。夜間は一般的にJEPX価格が低い傾向。",
    marketLinkedRisk: "比較的低い。夜間の市場価格は昼間より低い傾向があり、市場連動の恩恵を受けやすい。",
    recommendation: "市場連動の検討余地あり",
    reason: "稼働時間帯が安価な夜間に集中している場合、市場連動でのコスト削減が期待できる可能性がある。",
  },
  {
    pattern: "需要が季節により大きく変動",
    examples: "食品（農産物加工）、繊維（季節性）、飲料",
    loadCharacteristics: "繁忙期と閑散期で使用量が大きく異なる。繁忙期が夏季・冬季に重なる場合は高騰リスクが高い。",
    marketLinkedRisk: "繁忙期の時期による。夏季・冬季の需給逼迫期と繁忙期が重なると高騰リスクが集中する。",
    recommendation: "繁忙期と高騰期の重なり具合で判断",
    reason: "春・秋が繁忙期の業種は市場連動を検討できる可能性。夏・冬繁忙の業種は固定が安全側。",
  },
];

const keyFactors = [
  {
    factor: "ベースロードの大きさ",
    description:
      "工場の電力使用量の中で、生産の有無にかかわらず常時必要な電力（空調・照明・設備待機など）の割合が大きいほど、単価変動の影響を受ける量も大きくなります。ベースロードが全使用量の70%以上を占める工場では、市場価格の変動が金額ベースで非常に大きくなります。",
  },
  {
    factor: "需要ピークのタイミング",
    description:
      "電力使用量が最大になるタイミングが、JEPXの価格が高騰しやすい時間帯（夏の昼間ピーク、冬の朝夕）と重なる場合、市場連動プランのリスクが高まります。逆に、生産のピークが夜間・休日に集中する工場では、高騰時間帯の影響を受けにくい可能性があります。",
  },
  {
    factor: "生産コスト構造への影響",
    description:
      "製造業では、製品の原価に電気代が含まれます。市場連動プランで電気代が変動すると、製品の原価も変動します。製品価格を頻繁に改定できない業種では、電気代の上振れがそのまま利益を圧迫します。製造業は一般的に「電気代変動のコスト転嫁が遅れる構造」を持つことが多いです。",
  },
  {
    factor: "稼働停止・負荷シフトの可否",
    description:
      "市場価格が急騰した時間帯に稼働を一時停止したり、需要を他の時間帯にシフトできる工場では、市場連動プランのリスクをある程度コントロールできます。ただし、連続プロセスが必要な工場（化学・製紙・鉄鋼など）では稼働停止自体が困難なため、価格シグナルへの対応が実質的に不可能なケースがあります。",
  },
];

export default function FactoryFixedVsMarketLinkedPage() {
  return (
    <>
      <ArticleJsonLd
        headline="工場は固定と市場連動のどちらが向くか｜稼働パターンと負荷から考える"
        description="製造業の工場が電力契約を固定プランと市場連動プランで比較する際の視点を整理します。連続稼働と交替勤務の違い、ベースロードの大きさ、生産コストへの影響など、工場特有の判断軸を解説します。"
        url="https://simulator.eic-jp.org/factory-fixed-vs-market-linked"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "工場は固定と市場連動のどちらが向くか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">工場の選び方</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          工場は固定と市場連動のどちらが向くか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          製造業の工場は法人の中でも電力使用量が大きく、電力コストが製造原価に直接影響する業態です。固定プランと市場連動プランのどちらが適切かは、工場の稼働パターン・ベースロードの大きさ・需要ピークのタイミングによって大きく異なります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、工場特有の電力使用の特性を踏まえて、稼働パターン別の判断の考え方を整理します。個別の最適解は使用量・単価・生産計画によって変わるため、このページの内容はあくまで判断の枠組みとしてご活用ください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>工場の稼働パターン別（連続・昼間・夜間・季節変動）の判断の考え方</li>
            <li>ベースロード・需要ピークが市場連動リスクに与える影響</li>
            <li>負荷シフトが可能かどうかによる判断の差</li>
            <li>製造業の生産コスト構造と電気代変動の関係</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            工場が電力プランを選ぶうえで重要な4つの要因
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            工場の電力コスト管理において、以下の4つの要因が固定プランと市場連動プランの比較判断に特に影響します。
          </p>
          <div className="mt-4 space-y-4">
            {keyFactors.map((item) => (
              <div key={item.factor} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-base font-semibold text-slate-900">{item.factor}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            稼働パターン別の判断の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            工場の稼働パターンは業種・生産形態によって大きく異なります。以下では、代表的な稼働パターン別に市場連動リスクの度合いと判断の方向性を整理します。
          </p>
          <div className="mt-4 space-y-4">
            {operationPatterns.map((item) => (
              <div key={item.pattern} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.pattern}</h3>
                <p className="mt-1 text-xs text-slate-500">業種例：{item.examples}</p>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-700">負荷特性</p>
                    <p className="mt-1 text-sm leading-7 text-slate-700">{item.loadCharacteristics}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">市場連動リスク</p>
                    <p className="mt-1 text-sm leading-7 text-slate-700">{item.marketLinkedRisk}</p>
                  </div>
                </div>
                <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-3">
                  <p className="text-sm font-medium text-sky-800">
                    方向性の目安：{item.recommendation}
                  </p>
                  <p className="mt-1 text-xs text-sky-700">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 上記はあくまで稼働パターンに基づく一般的な傾向です。実際の判断は使用量・単価・財務状況・電力会社の提示条件によって変わります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            大型工場の場合の特別高圧・高圧の違い
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            大規模工場では<Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧</Link>（2万V以上）での受電になることが多く、電力会社との契約条件も中小規模の高圧や低圧とは異なります。特別高圧では個別交渉の比重が大きく、固定・市場連動の選択も交渉の中で提示されることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧の場合、使用量が非常に大きいため、市場価格が高騰した際の追加コストの絶対額も非常に大きくなります。たとえば月間使用量が500万kWhの大型工場で、市場価格が5円/kWh上昇した場合の月額追加コストは2,500万円になります。この規模の変動リスクを引き受けるかどうかは、財務部門との十分な協議が必要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            電圧区分別の電力契約の違いは{" "}
            <Link
              href="/electricity-voltage-contract-types"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              高圧・特別高圧の電力契約とは
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            製造業が市場連動プランを検討する場合の条件
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            製造業の工場が市場連動プランを検討できる可能性があるのは、以下の条件が揃う場合です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>稼働時間帯が夜間・休日に集中しており、昼間の高騰時間帯の影響を受けにくい</li>
            <li>電気代が製造原価に占める比率が低く（2〜3%以下）、上振れの影響が限定的</li>
            <li>需要ピークを時間帯シフトできる設備・工程の柔軟性がある</li>
            <li>高騰時のコスト増に対応できる財務的な余裕がある</li>
            <li>担当部門がJEPX価格の動向を定期的にモニタリングできる体制がある</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            これらの条件のうち、特に「稼働時間帯が昼間ピーク時間帯と重なるかどうか」が判断の核心になります。まず自社の稼働スケジュールを時間帯別に整理し、JEPXの平均価格パターンと比較することをお勧めします。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まとめ：工場のプラン選択の判断ポイント
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>連続稼働や昼間中心の工場は、JEPX高騰時間帯の回避が難しく固定プランが安全側</li>
            <li>夜間稼働中心の工場は、安価な時間帯に稼働が集中するため市場連動の検討余地がある</li>
            <li>生産コストに占める電気代の比率が高いほど、変動リスクの影響が大きい</li>
            <li>負荷シフトができない連続プロセス工場は、価格シグナルへの対応が困難なため固定が現実的</li>
            <li>大型特別高圧工場は、高騰時の追加コストの絶対額が非常に大きくなるため、財務部門との協議が不可欠</li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="factory-fixed-vs-market-linked" terms={["市場連動プラン", "固定プラン", "JEPX", "特別高圧", "高圧電力", "契約電力"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "安定性を重視する判断軸の整理。",
            },
            {
              href: "/market-linked-plan-suited-businesses",
              title: "市場連動プランが向く可能性がある法人の特徴",
              description: "市場連動を検討できる前提条件を整理。",
            },
            {
              href: "/low-margin-business-plan-selection",
              title: "利益率が低い業種はどちらを選ぶべきか",
              description: "製造業の利益率と電気代変動の影響を考える。",
            },
            {
              href: "/multi-site-plan-selection",
              title: "多拠点企業はどちらを選ぶべきか",
              description: "複数工場・拠点を持つ場合の管理とプラン選択。",
            },
            {
              href: "/market-linked-risk-internal-explanation",
              title: "市場連動プランのリスクを社内説明するときのポイント",
              description: "製造部門・経営層へのリスク説明の進め方。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "両プランの料金構造とリスクの差。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "工場のプラン変更を進めるための見直し開始タイミングの確認。",
            },
          ]}
        />

        <ContentCta
          heading="工場の電力コストをシミュレーターで試算する"
          description="工場の使用量・契約電力を入力して、固定プランと市場連動プランの年間コスト差を確認できます。稼働パターン別の比較にご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
