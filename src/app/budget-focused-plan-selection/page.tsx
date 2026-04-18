import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
const pageTitle =
  "予算管理を重視する法人はどちらを選ぶべきか｜固定と市場連動の判断軸";
const pageDescription =
  "年間予算の安定性を重視する法人が電力契約を選ぶ際の判断軸を整理します。予算変動の許容度、準備金の有無、予算策定サイクルとの整合性など、実務的な観点から固定プランと市場連動プランを比較します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 予算管理 法人",
    "固定プラン 市場連動 予算",
    "法人 電力契約 予算安定",
    "電気料金 予算 変動",
    "固定プラン 選び方 法人",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/budget-focused-plan-selection",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/budget-focused-plan-selection",
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

const budgetDimensions = [
  {
    heading: "予算の「安定性」への依存度はどの程度か",
    content:
      "年度予算を組む法人では、電気料金の月次変動が大きいと予算と実績の乖離が積み上がります。乖離が発生すると、追加承認の手続きや経営報告での説明が必要になり、実務上の負荷が増えます。予算達成率が経営評価の基準になっている法人や、予算修正に手続きが伴う法人（自治体・公益法人・上場企業の一部）では、予算の安定性が優先順位の高い要件になります。",
    implication: "固定プランを選ぶ根拠になりやすい",
  },
  {
    heading: "予算変動をどの程度まで許容できるか",
    content:
      "電気料金の予算変動の許容度は業種・規模・財務状況によって異なります。「±5%以内に収めたい」という厳格な法人では固定プランのほうが管理しやすくなります。一方、「多少の上振れは翌期調整でよい」という法人では、市場連動プランによるコスト削減機会を活用できる余地があります。自社の予算管理体制が「変動をどう扱うか」を整理することが出発点です。",
    implication: "変動許容度が低ければ固定、ある程度あれば市場連動を検討できる",
  },
  {
    heading: "高騰時の追加費用をカバーする準備金・予備費があるか",
    content:
      "市場連動プランを選ぶ場合、高騰期には月額コストが通常の1.5〜2倍以上になることがあります。これをカバーするための「光熱費予備費」が予算内に確保されているか、あるいは緊急の予算外支出が可能な仕組みがあるかが重要な確認点です。予備費が十分にある法人では市場連動プランの選択肢が広がります。逆に予備費がなく、すべて当初予算内で収めなければならない法人では固定プランが現実的です。",
    implication: "予備費が十分でなければ固定プランが安全側",
  },
  {
    heading: "年度予算の策定サイクルと契約更新タイミングが合っているか",
    content:
      "多くの法人では年度末（3月）に翌年度予算を確定します。電力契約の更新タイミングが予算策定の後になる場合、「来年度の電気代がいくらになるか確定してから予算を組みたい」という実務ニーズが生じます。固定プランであれば、更新時に翌年度の単価が確定するため、予算策定に反映しやすくなります。市場連動プランでは翌年度の電気代を確定できないため、保守的な試算で予備費を積む必要があります。",
    implication: "予算策定サイクルと相性がよいのは固定プラン",
  },
];

const decisionFramework = [
  {
    scenario: "予算管理が厳格（乖離許容度が低い）",
    recommendation: "固定プランを優先",
    reason: "予実乖離を最小化でき、追加承認手続きが不要になりやすい。",
  },
  {
    scenario: "予備費・準備金が十分に確保できる",
    recommendation: "市場連動の検討が可能",
    reason: "高騰時の追加コストをカバーできる余力がある。",
  },
  {
    scenario: "電気代が総コストの5%未満",
    recommendation: "市場連動の検討が可能",
    reason: "上振れの絶対額が小さく、予算への影響が限定的。",
  },
  {
    scenario: "年度ごとに予算が承認制（自治体・公益法人）",
    recommendation: "固定プランを優先",
    reason: "年度内の予算修正手続きが複雑なため、変動リスクを避けるべき。",
  },
  {
    scenario: "コスト削減目標が設定されており、差額を活用したい",
    recommendation: "固定・市場連動を比較検討",
    reason: "市場価格が固定より低い時期は削減効果があるが、逆転リスクも管理が必要。",
  },
];

const faqItems = [
  { question: "予算管理重視の法人はどのプランを選ぶべきですか？", answer: "年間予算を固定的に管理したい法人には固定プランが向いています。固定プランは電力量料金の単価が変動しないため、予算策定時のコスト見通しが立てやすくなります。ただし燃料費調整額は固定プランでも変動します。" },
  { question: "年度予算に電気代の変動リスクを組み込む方法はありますか？", answer: "市場連動プランを選ぶ場合は、過去の市場価格の変動幅（例：JEPXの最大値・最小値・平均値）を参考にシナリオ別の予算前提を置くことが有効です。ベースケースに加えてワーストシナリオの予備費を確保することを推奨します。" },
  { question: "固定プランで長期契約をした場合のリスクは何ですか？", answer: "市場価格が下落した場合に固定プランの方が割高になる可能性があります。また長期契約では途中での解約に違約金が発生するケースがあります。市場環境の変化を想定した契約期間の選択が重要です。" },
];

export default function BudgetFocusedPlanSelectionPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/budget-focused-plan-selection"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約メニューの違いを知る", url: "https://simulator.eic-jp.org/articles/plan-types" },
          { name: "予算管理重視の法人の判断軸" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">予算管理重視の法人</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          予算管理を重視する法人はどちらを選ぶべきか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約を固定プランにするか市場連動プランにするかを判断するとき、「予算管理のしやすさ」は多くの法人にとって重要な判断軸の一つです。電気料金が月ごとに変動すると、予算策定・予実管理・社内報告の各場面で実務上の負荷が増えることがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、予算管理の観点から固定プランと市場連動プランを比較するための考え方を整理します。どちらが正解という話ではなく、自社の予算体制に合った選択をするための判断材料として活用してください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>予算管理の観点から重要な4つの確認軸</li>
            <li>予算変動の許容度に応じた判断の考え方</li>
            <li>準備金・予備費の有無がプラン選択に与える影響</li>
            <li>年度予算サイクルと電力契約更新タイミングの関係</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「電気代の変動」が予算管理に与える影響
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金は、プランの種類にかかわらず季節・気象・使用量によって変動します。ただし、変動の幅と予測可能性が固定プランと市場連動プランでは大きく異なります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランの変動要因</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-7 text-slate-700">
                <li>使用量の変動（季節・稼働状況）</li>
                <li>再エネ賦課金の年度改定</li>
                <li>燃料費調整額（上限設定の有無による）</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">単価は固定。変動は量ベース・制度ベース。</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動プランの変動要因</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-7 text-slate-700">
                <li>使用量の変動</li>
                <li>JEPXスポット価格の変動（日次・時間帯別）</li>
                <li>再エネ賦課金・容量拠出金</li>
                <li>需給逼迫時の急騰リスク</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">単価そのものが変動。予測が難しい。</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            予算管理の観点では、変動の「幅」よりも「予測可能性」のほうが実務上重要です。使用量の変動は過去実績から見積もれますが、市場価格の変動は外部要因に依存するため、予算の精度が下がりやすくなります。
          </p>
        </section>

        {budgetDimensions.map((item) => (
          <section
            key={item.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">{item.heading}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              {item.content}
            </p>
            <p className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm font-medium text-sky-800">
              判断への示唆：{item.implication}
            </p>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シナリオ別の判断の目安
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下は、予算管理の観点から見たシナリオ別の判断の目安です。自社の状況に近いものを参考にしてください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">シナリオ</th>
                  <th className="p-3 text-left font-semibold text-slate-900">方向性の目安</th>
                  <th className="p-3 text-left font-semibold text-slate-900">主な理由</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {decisionFramework.map((row) => (
                  <tr key={row.scenario}>
                    <td className="p-3 text-slate-700">{row.scenario}</td>
                    <td className="p-3 font-medium text-slate-800">{row.recommendation}</td>
                    <td className="p-3 text-slate-700">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 上記はあくまで一般的な傾向の整理です。個別の電力会社の条件・価格水準・契約電力によって最適解は異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            実務での試算：「許容できる上振れ額」を金額で把握する
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            予算管理の観点でプランを比較するには、「いくらまでの上振れなら問題ないか」を金額で把握しておくことが役立ちます。たとえば、月間電力使用量が50,000kWhの施設で、市場価格が通常より10円/kWh高騰した場合、1か月あたりの追加コストは50万円になります。年間の予備費に50万円×高騰月数を確保できるか、という観点で固定・市場連動を比較できます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーターでは自社の使用量・契約電力を入力して、市場価格高騰時のコスト増加額を試算することができます。この数字を予算担当者や経営層と共有したうえで、許容範囲を確認するのが実務的なステップです。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格の過去の高騰事例は{" "}
            <Link
              href="/jepx-price-trends"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              JEPXスポット価格の推移
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まとめ：予算管理重視の法人が確認すべきこと
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自社の予算乖離の許容範囲を金額で把握しているか</li>
            <li>高騰時に追加費用をカバーできる予備費の仕組みがあるか</li>
            <li>電力契約の更新タイミングが年度予算策定の前後どちらに来るか確認したか</li>
            <li>市場連動プランを選ぶ場合、高騰シナリオでの追加コストを試算したか</li>
            <li>固定プランの場合も、燃料費調整額の扱いを確認し完全固定ではない部分を把握しているか</li>
          </ul>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="budget-focused-plan-selection" terms={["固定プラン", "市場連動プラン", "燃料費調整額", "市場価格調整額", "容量拠出金"]} />
        </div>

        <SourcesAndFaq
          faq={faqItems}
          sources={[
            { name: "JEPX（日本卸電力取引所）", url: "http://www.jepx.org", description: "スポット市場価格データ" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度に関する情報" },
          ]}
          publishedAt="2026-04-10"
        />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "予算安定性以外の観点も含めた固定プランとの相性を整理。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の仕組みと変動リスクの差を比較する。",
            },
            {
              href: "/municipality-fixed-vs-market-linked",
              title: "自治体施設は固定と市場連動のどちらが向くか",
              description: "年度予算制と説明責任の観点から考える。",
            },
            {
              href: "/market-linked-risk-internal-explanation",
              title: "市場連動プランのリスクを社内説明するときのポイント",
              description: "経営層・予算担当者へのリスク説明の進め方。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "固定プランでも変動する燃調費の仕組みを理解する。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し前に確認すべき項目の一覧。",
            },
          ]}
        />

        <ContentCta
          heading="予算変動リスクをシミュレーターで確認する"
          description="自社の使用量・契約電力を入力して、市場価格が高騰した場合のコスト増加額を試算できます。予算担当者との協議にご活用ください。"
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
