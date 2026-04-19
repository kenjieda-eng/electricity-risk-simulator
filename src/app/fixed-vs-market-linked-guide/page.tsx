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
import ContactCtaCard from "../../components/contact/ContactCtaCard";
const pageTitle =
  "固定プランと市場連動プランの判断ガイド一覧｜法人の契約選択を整理する";
const pageDescription =
  "固定プランと市場連動プランのどちらを選ぶか迷う法人向けに、判断の基準・リスクの考え方・業種別の向き不向きを整理したガイド一覧。コスト比較・リスク許容度・社内説明のポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "固定プラン 市場連動 比較",
    "電力契約 固定 変動 選び方",
    "法人 電気料金 プラン選択",
    "JEPX連動 リスク 法人",
    "電力 固定単価 市場価格 違い",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/fixed-vs-market-linked-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/fixed-vs-market-linked-guide",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/plan-types", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/plan-types"],
  },
};

const guideItems = [
  {
    href: "/fixed-price-plan",
    title: "固定プランの仕組みと特徴",
    summary:
      "固定プランで何が固定されて何が変動するのかを整理。「完全固定」と「部分固定」の違いや、燃料費調整の扱いも解説します。",
  },
  {
    href: "/market-linked-vs-fixed",
    title: "市場連動プランと固定プランの違い",
    summary:
      "料金の動き方・コスト構造・リスクの違いを比較。どのような状況でどちらが有利になるかの基本的な考え方を整理します。",
  },
  {
    href: "/compare-market-linked-and-fixed-by-risk-pattern",
    title: "リスクパターン別・市場連動と固定の比較",
    summary:
      "需給逼迫・燃料高騰・円安・猛暑などのシナリオ別に、固定プランと市場連動プランの影響差を整理します。自社のリスク対応力から選択肢を絞れます。",
  },
  {
    href: "/businesses-suited-for-fixed-price-electricity-plan",
    title: "固定プランが向く法人の特徴",
    summary:
      "予算管理・収益構造・業種特性から「固定プランを選ぶべき」ケースを整理。稟議・社内説明での説明ロジックにも使えます。",
  },
  {
    href: "/businesses-not-suited-for-market-linked-electricity-plan",
    title: "市場連動プランが向かない法人の特徴",
    summary:
      "市場連動プランを選ぶと大きなリスクになりやすい法人のパターン。電力使用量・業種・財務体力の観点から判断基準を示します。",
  },
];

const decisionFactors = [
  {
    factor: "電力使用量の規模",
    detail:
      "使用量が大きいほど、市場価格の変動が金額ベースの影響（上振れ・下振れ）を増幅します。月間100万円以上の電気代がかかる法人では、上振れリスクの絶対額が大きくなるため、固定プランの安心感が重要になりやすいです。",
  },
  {
    factor: "事業の利益率",
    detail:
      "利益率が低い業種（食品小売・飲食・物流など）では、電気料金の上振れが直接的に赤字化につながることがあります。利益率が高い業種では、ある程度のコスト変動を吸収できる余地があります。",
  },
  {
    factor: "予算管理の方法",
    detail:
      "年度予算を月次で管理する組織（特に自治体・公益法人・大企業）では、電気代の予測可能性が重要です。市場連動プランでは月次の金額がブレるため、予算管理上の説明が難しくなる場合があります。",
  },
  {
    factor: "社内の意思決定プロセス",
    detail:
      "稟議・取締役会・議会などの承認が必要な組織では、「コストが変動するリスクをとって安い場合もある」という説明より、「コストを固定した」という説明の方が通りやすいことが多いです。",
  },
  {
    factor: "電力価格の市場リテラシー",
    detail:
      "市場連動プランのリスク管理には、JEPXスポット価格の動きや需給状況のモニタリングが必要です。担当者のリテラシーや、価格情報を日常的に確認できる体制があるかも判断材料になります。",
  },
  {
    factor: "契約期間と切替コスト",
    detail:
      "固定プランは通常1〜3年の契約期間があります。市場環境が大きく変わった場合でも切り替えに制約があることを考慮し、契約期間の長さとリスク許容度のバランスを確認します。",
  },
];

const faqItems = [
  { question: "固定プランと市場連動プランはどちらが法人に向いていますか？", answer: "一概にどちらとは言えません。予算管理の安定性を重視する場合は固定プラン、電力コスト管理体制があり変動を許容できる場合は市場連動が選択肢になります。業種・規模・社内体制によって判断が変わります。" },
  { question: "プラン選択で最も重要な判断基準は何ですか？", answer: "電気代の変動に対するリスク許容度・予算管理のしやすさ・社内説明の容易さ・コスト管理体制の3点が重要です。単純な単価の高低だけでなく、変動の受け方と運用負荷を総合的に評価することを推奨します。" },
  { question: "業種別にプランの向き不向きはありますか？", answer: "飲食・小売・医療介護・自治体など利益率が低く変動許容度が低い業種は固定が向く傾向があります。製造業・物流など使用量が多く管理体制がある場合は市場連動も選択肢になります。詳細は業種別ガイドを参照してください。" },
];

export default function FixedVsMarketLinkedGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/fixed-vs-market-linked-guide"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約メニューの違いを知る", url: "https://simulator.eic-jp.org/articles/plan-types" },
          { name: "固定プランと市場連動プランの判断ガイド" },
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
        <span className="text-slate-800">判断ガイド一覧</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          固定プランと市場連動プランの判断ガイド一覧
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金の契約選択で最も頻繁に悩まれるのが、「固定プラン」と「市場連動プラン（JEPX連動）」のどちらを選ぶかという問題です。どちらが「正解」というわけではなく、自社の事業規模・業種・リスク許容度・予算管理の方法によって判断が変わります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、判断の基準となるガイドを一覧にまとめています。目的に応じたページを参照してください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>固定プランと市場連動プランの基本的な違い</li>
            <li>プラン選択の判断に使える6つの要素</li>
            <li>業種・リスクパターン別のガイドページ一覧</li>
            <li>社内説明でよく使われる比較の論点</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定プランと市場連動プランの基本的な違い
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2つのプランの最大の違いは、電力量料金単価が「固定されているか」「市場価格に連動して変動するか」です。どちらのプランにもメリット・デメリットがあり、特定のシナリオでは大きな差が生じます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プラン</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                <li>電力量料金単価が契約期間中に原則固定</li>
                <li>コストの予測可能性が高く、予算管理しやすい</li>
                <li>市場価格が急騰した局面でのリスクを回避できる</li>
                <li>市場価格が低い時期は割高になる可能性がある</li>
                <li>燃料費調整が残る契約では一部変動が続く場合がある</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動プラン（JEPX連動）</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                <li>電力量料金がJEPXスポット価格に連動して変動</li>
                <li>市場価格が低い時期は固定より安くなる可能性</li>
                <li>需給逼迫・燃料高騰時に大幅に上振れるリスクがある</li>
                <li>月次の電気代が読みにくく予算管理が難しい</li>
                <li>価格モニタリング・リスク管理の知識が求められる</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            詳細な仕組みの比較は{" "}
            <Link
              href="/market-linked-vs-fixed"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランと固定プランの違い
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            判断ガイド一覧
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            プラン選択の判断に使えるガイドページを目的別にまとめています。
          </p>
          <div className="mt-4 space-y-3">
            {guideItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-sky-50"
              >
                <p className="text-sm font-semibold text-sky-700 underline underline-offset-2">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            プラン選択の判断に使える6つの要素
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランと市場連動プランの選択は、以下の6つの要素を整理することで、自社に適した判断に近づけます。
          </p>
          <div className="mt-4 space-y-4">
            {decisionFactors.map((item) => (
              <div key={item.factor}>
                <h3 className="text-lg font-semibold text-slate-900">{item.factor}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内説明でよく使われる論点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            プラン変更の稟議・社内説明では、以下の論点が経営層や承認者からよく問われます。事前に回答を準備しておくとスムーズです。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              {
                question: "「市場連動の方が安い」と言われたが本当か？",
                answer:
                  "平均的にはそうなる年もありますが、市場価格が急騰した年には逆転します。過去の高騰事例（2021年1月、2022年夏など）の影響額を示した上で、上振れシナリオも提示することが重要です。",
              },
              {
                question: "「固定は割高では」という指摘にどう答えるか？",
                answer:
                  "固定プランはリスクプレミアムが含まれるため平常時は割高になりますが、それは「コスト変動リスクの保険」と考えられます。上振れ時の影響額と比較してどちらが合理的かを示します。",
              },
              {
                question: "「なぜ今切り替えるのか」を説明するには？",
                answer:
                  "市場環境の変化（燃料費の動向・需給状況）、現行契約の更新タイミング、見積価格の有効期限を整理して、今が判断適期であることを数値で示します。",
              },
              {
                question: "「切り替えてコストが増えたらどうするか」への回答",
                answer:
                  "プラン切替後に市場価格が大きく下落した場合の影響額をシミュレーションで示した上で、それが許容できる範囲かどうかを経営判断として位置づけます。",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">Q: {item.question}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種別の向き不向き（簡易一覧）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種によって、固定プランと市場連動プランのどちらが向きやすいかの傾向があります。各業種の詳細は{" "}
            <Link
              href="/industry-electricity-guide"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              業種別電気料金見直しガイド
            </Link>{" "}
            を参照してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-700">
                  <th className="pb-2 pr-4 font-semibold">業種</th>
                  <th className="pb-2 pr-4 font-semibold">プランの傾向</th>
                  <th className="pb-2 font-semibold">主な理由</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { industry: "スーパー・食品小売", plan: "固定寄り", reason: "低利益率、使用量大、コスト変動耐性が低い" },
                  { industry: "病院・医療施設", plan: "固定寄り", reason: "安定性最優先、停電・コスト変動が医療に直結" },
                  { industry: "自治体庁舎", plan: "固定寄り", reason: "年度予算制、説明責任の制約" },
                  { industry: "食品工場", plan: "固定寄り", reason: "連続操業、停電・コスト変動が生産に直結" },
                  { industry: "データセンター", plan: "固定寄り", reason: "高ベースロード、変動の絶対額が大きい" },
                  { industry: "オフィスビル", plan: "要検討", reason: "使用量中程度、業態によりリスク管理できる" },
                  { industry: "物流倉庫", plan: "要検討", reason: "稼働時間帯次第でスポット活用の余地あり" },
                  { industry: "ホテル", plan: "要検討", reason: "繁閑差を活用できる場合に限り検討余地あり" },
                ].map((row) => (
                  <tr key={row.industry} className="text-slate-700">
                    <td className="py-2 pr-4 font-medium">{row.industry}</td>
                    <td className="py-2 pr-4">
                      <span
                        className={`rounded px-2 py-0.5 text-xs font-semibold ${
                          row.plan === "固定寄り"
                            ? "bg-sky-100 text-sky-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {row.plan}
                      </span>
                    </td>
                    <td className="py-2 text-slate-600">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="fixed-vs-market-linked-guide" terms={["市場連動プラン", "固定プラン", "JEPX", "市場価格調整額", "燃料費調整額", "容量拠出金"]} />
        </div>

        <SourcesAndFaq
          faq={faqItems}
          sources={[
            { name: "JEPX（日本卸電力取引所）", url: "http://www.jepx.org", description: "スポット市場価格データ" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度に関する情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力取引監視に関する情報" },
          ]}
          publishedAt="2026-04-10"
        />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "プランの仕組みとコスト構造の基本的な比較。",
            },
            {
              href: "/compare-market-linked-and-fixed-by-risk-pattern",
              title: "リスクパターン別・市場連動と固定の比較",
              description: "シナリオ別に影響差を整理した実践的な比較ガイド。",
            },
            {
              href: "/industry-electricity-guide",
              title: "業種別の電気料金見直しガイド一覧",
              description: "業種ごとの負荷特性とプラン選択の考え方。",
            },
            {
              href: "/contract-review-practice-guide",
              title: "契約見直し実務ガイド一覧",
              description: "プラン選択後の切替手続きの実務ガイド。",
            },
          ]}
        />

        <ContentCta
          heading="自社の条件でプランを比較する"
          description="固定プランと市場連動プランの年間コスト差・上振れリスクを、自社の使用量・契約条件を入力してシミュレーターで確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
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
