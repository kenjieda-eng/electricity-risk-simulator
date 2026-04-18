import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["subsidies"];


const pageTitle = "補助金と電力契約見直し、どちらを先に進めるべきか｜優先順位の考え方";
const pageDescription =
  "補助金による設備投資と電力契約見直しのどちらを先に進めるべきか、判断の軸と組み合わせ方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/subsidy-vs-contract-review-priority";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "補助金 契約見直し 優先順位",
    "電力契約 設備投資 どちら",
    "省エネ 契約見直し 順番",
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

const comparisonTable = [
  {
    axis: "初期費用",
    contractReview: "原則ゼロ〜数十万円（コンサル費用）",
    subsidyInvestment: "数百万〜数億円（補助後でも自己負担あり）",
  },
  {
    axis: "効果が出るまでの期間",
    contractReview: "切替後翌月〜数か月",
    subsidyInvestment: "設備完成後（交付決定から半年〜1年以上かかる場合も）",
  },
  {
    axis: "削減効果の大きさ",
    contractReview: "10〜20%程度（契約の最適化による）",
    subsidyInvestment: "20〜50%以上（設備・投資規模による）",
  },
  {
    axis: "効果の持続性",
    contractReview: "料金体系変更・市況変動で変わりうる",
    subsidyInvestment: "設備の耐用年数（10〜20年）にわたり安定",
  },
  {
    axis: "リスク",
    contractReview: "切替先の料金体系が想定より高くなるリスク",
    subsidyInvestment: "補助金不採択リスク・着工前発注NG・工期遅延",
  },
  {
    axis: "必要なリソース",
    contractReview: "担当者の調査・交渉・契約切替工数",
    subsidyInvestment: "申請書作成・設備選定・工事管理・資金調達",
  },
  {
    axis: "専門知識の必要性",
    contractReview: "中程度（料金体系・市場価格の理解）",
    subsidyInvestment: "高（設備・省エネ計算・補助金要件の理解）",
  },
];

const contractFirstCases = [
  {
    case: "すぐに電気代を削減する必要がある",
    detail: "資金繰りや収益改善が喫緊の課題で、数か月以内に効果を出したい場合は契約見直しが先手。補助金申請から設備稼働まで最短でも半年以上かかる。",
  },
  {
    case: "設備投資の余力・タイミングがない",
    detail: "事業計画や資金計画の都合で今期は大型設備投資に踏み切れない状況。契約見直しでコストを下げながら設備投資の準備期間を確保する。",
  },
  {
    case: "既存の電力契約が割高になっている可能性がある",
    detail: "長期間見直しをしていない契約、失効した自由化以前の従量電灯B・低圧電力メニューを使い続けている場合は、まず契約の最適化で即効性のある削減を狙う。",
  },
  {
    case: "補助金の次の公募まで時間がある",
    detail: "目当ての補助金の次回公募が半年以上先の場合、その間に契約見直しを完了させることで削減効果を積み上げながら補助金申請の準備ができる。",
  },
];

const subsidyFirstCases = [
  {
    case: "補助金の公募締切が迫っている",
    detail: "SII省エネ補助金などは年1〜2回しか公募がない。申請準備が整っているならば、補助金申請を最優先にして逃さないようにする。",
  },
  {
    case: "設備の更新時期が来ており、どうせ更新が必要",
    detail: "老朽化した設備の更新が避けられない状況では、補助金を活用して最新の高効率設備に更新するほうが長期的なコスト削減効果が大きい。",
  },
  {
    case: "電力消費量が多く設備効率の改善余地が大きい",
    detail: "電力使用量の多い製造業・冷凍冷蔵を使う食品業などでは、設備改善による削減幅が契約見直しを大きく上回ることがある。まず設備投資を優先することが合理的。",
  },
  {
    case: "自社の脱炭素・Scope2削減目標がある",
    detail: "RE100・SBT・カーボンニュートラル宣言をしている企業では、単純な料金削減より使用電力量そのものの削減が求められる。設備投資が先行することが多い。",
  },
];

const parallelFlow = [
  {
    phase: "今月〜1か月後",
    actions: ["現状の電気代・使用量の把握（シミュレーターで診断）", "契約内容の確認（デマンド超過・力率割増の確認）", "補助金の次回公募スケジュールの確認"],
  },
  {
    phase: "1〜3か月後",
    actions: ["電力会社・新電力への切替見積もり取得・比較", "省エネ設備の候補絞り込み・見積取得", "補助金申請のGビズID取得・専門家相談"],
  },
  {
    phase: "3〜6か月後",
    actions: ["電力契約の切替実施（効果確認開始）", "補助金の申請・採択待ち", "社内稟議・設備投資の意思決定"],
  },
  {
    phase: "6か月〜1年後",
    actions: ["補助金交付決定後に設備発注・工事着工", "契約見直し効果の検証・調整", "設備稼働後の削減効果測定"],
  },
];

const decisionPoints = [
  { question: "補助金の公募締切まで2か月以内か？", yesPath: "補助金申請を最優先にする", noPath: "次の質問へ" },
  { question: "今の電力契約を3年以上見直していないか？", yesPath: "まず契約見直しで即効削減を狙う", noPath: "次の質問へ" },
  { question: "設備の老朽化・更新時期が来ているか？", yesPath: "補助金を活用した設備更新を進める", noPath: "次の質問へ" },
  { question: "今期の資金調達に余裕があるか？", yesPath: "契約見直しと補助金申請を並行して進める", noPath: "まず契約見直しで資金を作る" },
];

export default function SubsidyVsContractReviewPriorityPage() {
  return (
    <>
      <ArticleJsonLd
        headline="補助金と電力契約見直し、どちらを先に進めるべきか｜優先順位の考え方"
        description="補助金による設備投資と電力契約見直しのどちらを先に進めるべきか、判断の軸と組み合わせ方を整理します。"
        url="https://simulator.eic-jp.org/subsidy-vs-contract-review-priority"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "補助金と電力契約見直し、どちらを先に進めるべきか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">補助金と電力契約見直し、どちらを先に進めるべきか</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          補助金と電力契約見直し、どちらを先に進めるべきか
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">優先順位の考え方｜判断フローと両方を並行する進め方</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金対策を検討する企業から「補助金を使った設備投資と電力契約の見直し、どちらを先に進めるべきか」という質問を頻繁にいただきます。
          この問いに対する答えは「状況による」ですが、判断の軸は明確にできます。
          本ページでは両者の特性を比較した上で、契約見直しを先に進めるべきケースと
          設備投資（補助金活用）を先に進めるべきケース、そして両方を並行する場合の進め方を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-4">

        {/* 特性比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約見直しと設備投資（補助金活用）の特性比較</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">比較軸</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">電力契約の見直し</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-emerald-700">設備投資（補助金活用）</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.axis}</td>
                    <td className="border border-slate-200 px-3 py-2 text-sky-800">{row.contractReview}</td>
                    <td className="border border-slate-200 px-3 py-2 text-emerald-800">{row.subsidyInvestment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            契約見直しは「即効性・低リスク・低コスト」、設備投資は「大きな削減効果・長期安定・高リソース要求」という性質があります。
            どちらが優れているという話ではなく、自社の状況に応じて使い分けることが重要です。
          </p>
        </section>

        {/* 契約見直しを先に進めるべきケース */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約見直しを先に進めるべきケース</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {contractFirstCases.map((item, i) => (
              <div key={i} className="rounded-lg border border-sky-200 bg-white p-4">
                <p className="text-sm font-semibold text-sky-800">{item.case}</p>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 設備投資を先に進めるべきケース */}
        <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">設備投資（補助金活用）を先に進めるべきケース</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {subsidyFirstCases.map((item, i) => (
              <div key={i} className="rounded-lg border border-emerald-200 bg-white p-4">
                <p className="text-sm font-semibold text-emerald-800">{item.case}</p>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 判断フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">判断フロー：どちらから始めるか</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            以下の質問に順番に答えることで、自社の状況に応じた優先順位が見えてきます。
          </p>
          <div className="mt-4 space-y-3">
            {decisionPoints.map((dp, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-white">{i + 1}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">{dp.question}</p>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2 text-xs">
                      <div className="rounded-lg border border-sky-200 bg-sky-50 p-2">
                        <span className="font-bold text-sky-700">はい →</span>
                        <span className="ml-1 text-slate-700">{dp.yesPath}</span>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-slate-100 p-2">
                        <span className="font-bold text-slate-500">いいえ →</span>
                        <span className="ml-1 text-slate-700">{dp.noPath}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 並行して進める場合 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">両方を並行して進める場合のロードマップ</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            資金・リソースに余裕がある場合は、契約見直しと補助金申請を並行して進めることが最も効果的です。
            契約見直しで早期に削減効果を得ながら、補助金申請の準備を進めることができます。
          </p>
          <div className="mt-4 space-y-3">
            {parallelFlow.map((phase, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="shrink-0 rounded-full bg-sky-600 px-3 py-1 text-xs font-bold text-white whitespace-nowrap">{phase.phase}</span>
                <ul className="space-y-1 text-sm text-slate-700">
                  {phase.actions.map((action, j) => <li key={j}>・ {action}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">並行進行の注意点</p>
            <p className="mt-2 text-sm text-slate-700">
              電力の供給契約を変更すると、省エネ設備の省エネ効果の計算基準が変わる場合があります。
              補助金の省エネ量計算は「変更前の設備と変更後の設備の消費電力の差」を根拠にするため、
              契約変更と設備変更を同時進行させる場合は計算の整合性を専門家に確認してください。
            </p>
          </div>
        </section>

        {/* 削減効果の積み上げイメージ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">削減効果の積み上げイメージ</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">施策</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">効果発現時期</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">削減幅目安</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">初期費用</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { measure: "電力契約の最適化（メニュー見直し）", timing: "翌月〜3か月", reduction: "5〜15%", cost: "ほぼゼロ" },
                  { measure: "デマンド超過・力率改善（無効電力対策）", timing: "即時〜1か月", reduction: "3〜10%", cost: "数十万円〜" },
                  { measure: "省エネ設備の補助金活用（LED・空調更新）", timing: "6〜18か月後", reduction: "15〜35%追加", cost: "補助後1/2〜2/3自己負担" },
                  { measure: "自家消費太陽光の導入（補助金活用）", timing: "1〜2年後", reduction: "20〜40%追加", cost: "補助後1/2〜2/3自己負担" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.measure}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.timing}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-emerald-700">{row.reduction}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            施策を段階的に積み上げることで、合計30〜60%以上の電気代削減を実現するケースもあります。
            一度に全てを進める必要はなく、優先順位をつけて順番に取り組むことが現実的です。
          </p>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：状況に応じた優先順位の設計が鍵</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>・ 契約見直しは即効性・低コスト・低リスク。補助金締切前でなければ先に着手しやすい。</li>
            <li>・ 補助金活用は効果が大きく長期安定だが、申請から稼働まで時間がかかる。</li>
            <li>・ 補助金の公募締切が迫っている・設備更新時期が来ている場合は補助金を優先する。</li>
            <li>・ 余裕があれば契約見直しと補助金申請を並行して進めることが最大の削減効果を生む。</li>
            <li>・ 各施策の削減効果は積み上げられる。段階的に取り組む計画を立てることが現実的。</li>
          </ul>
        </section>
      </section>

      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/subsidies-overview", title: "法人向け電力・省エネ補助金まとめ", description: "2026年度に使える主要制度を横断比較" },
            { href: "/what-to-start-with-electricity-contract-review", title: "電力契約の見直し、まず何から始めるか", description: "契約見直しの進め方と優先順位" },
            { href: "/contract-review-reduction-effect", title: "電力契約見直しで電気代はどれだけ下がるか", description: "削減幅の目安と試算方法" },
            { href: "/battery-consideration-for-business", title: "法人の蓄電池導入検討ガイド", description: "蓄電池の費用対効果と導入判断の考え方" },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="どの施策から始めるか、まず現状診断から"
          description="電力契約の最適化も設備投資も、現状の電気料金コストを数値で把握することが出発点です。シミュレーターで診断することで、どの施策の優先度が高いかが見えてきます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/subsidies-overview", label: "補助金一覧ページへ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
