import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle = "自治体と最終保障供給｜公共施設の電力契約リスクと備え方を解説";
const pageDescription =
  "自治体・公共施設が最終保障供給になる背景、年度予算制約・議会承認・入札制度との兼ね合いなど特有リスク、施設種別の料金増加目安、備えのチェックリストを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 自治体",
    "最終保障供給 入札不調",
    "自治体 電気料金 高騰",
    "公共施設 最終保障供給",
    "最終保障供給 調達 実務",
    "自治体 電力契約 リスク",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/municipality-last-resort-supply",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/municipality-last-resort-supply",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
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
    images: ["/twitter-default.png"],
  },
};

const faqItems = [
  {
    question: "自治体が最終保障供給になってしまう主な原因は何ですか？",
    answer: "電力調達の一般競争入札が不調（応札ゼロ・最低価格超過）となった場合が主な原因です。年度予算制約により契約電力単価に上限が設けられることが多く、市場価格が上昇した局面では応札事業者が現れないケースが発生します。",
  },
  {
    question: "最終保障供給になった場合、自治体の予算や議会承認にどう影響しますか？",
    answer: "最終保障供給の料金は通常契約より高いため、予算超過が発生し補正予算の計上が必要になる場合があります。年度途中の補正は議会承認が必要なため、説明準備と対応に時間がかかります。早期に切替準備を進めることが重要です。",
  },
  {
    question: "自治体が入札不調を回避するために事前にできることは何ですか？",
    answer: "調達仕様の柔軟化（価格点の配点見直し・変動費条件の緩和）、調達スケジュールの前倒し、複数年契約や一括調達による単価安定化などが有効です。また市場価格の動向を定期的にモニタリングし、価格上昇期には早めに入札条件を再検討することも重要です。",
  },
];

const sources = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "最終保障供給の件数・自治体事例に関するデータ" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "公共施設の電力調達・制度解説" },
  { name: "新電力ネット", url: "https://pps-net.org", description: "入札不調・調達実務に関する情報" },
];

export default function MunicipalityLastResortSupplyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/municipality-last-resort-supply"
        datePublished="2025-08-30"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給を知る", url: "https://simulator.eic-jp.org/articles/last-resort-supply" },
          { name: "自治体と最終保障供給" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-slate-500">
        <Link href="/" className="hover:text-sky-700 underline underline-offset-2">ホーム</Link>
        <span>/</span>
        <Link href="/articles/last-resort-supply" className="hover:text-sky-700 underline underline-offset-2">最終保障供給を知る</Link>
        <span>/</span>
        <span className="text-slate-700">自治体と最終保障供給</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">自治体と最終保障供給｜公共施設の電力契約リスクと備え方</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          自治体では電力調達を入札で進めることが多く、価格高騰局面では入札不調が発生することがあります。その結果、次契約までの暫定対応として
          最終保障供給を利用するケースが見られます。民間企業と異なり、年度予算制約・議会承認・住民説明責任など公共特有のリスクが重なるため、
          早期の備えが不可欠です。
        </p>
      </header>

      <section className="mt-6 space-y-6">

        {/* 自治体特有リスク表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体特有の最終保障供給リスク</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            民間企業と比較したとき、自治体が最終保障供給局面で直面するリスクは制度・手続き両面で複合的に生じます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">リスク要因</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">自治体での影響</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">民間企業との違い</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">対応の考え方</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">年度予算制約</td>
                  <td className="border border-slate-200 px-3 py-2">当初予算超過で補正が必要になり執行に遅延が生じる</td>
                  <td className="border border-slate-200 px-3 py-2">民間は費用発生後に即時計上できるが、自治体は予算の壁がある</td>
                  <td className="border border-slate-200 px-3 py-2">最終保障供給移行前に予算余裕を試算・補正予算を早期準備</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">議会承認</td>
                  <td className="border border-slate-200 px-3 py-2">補正予算や随意契約の変更が議会議決を要し、対応までに時間がかかる</td>
                  <td className="border border-slate-200 px-3 py-2">民間は経営判断のみで契約変更・追加費用承認が可能</td>
                  <td className="border border-slate-200 px-3 py-2">スケジュールに議会サイクルを組み込み、臨時議会も視野に準備</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">公共施設の停電不可</td>
                  <td className="border border-slate-200 px-3 py-2">病院・上下水道など供給継続が法的義務の施設があり、交渉余地が限られる</td>
                  <td className="border border-slate-200 px-3 py-2">民間は一部停止・縮小運転という選択肢も持てる</td>
                  <td className="border border-slate-200 px-3 py-2">施設の重要度を分類し、最終保障供給期間中の電力確保計画を作成</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">入札制度との兼ね合い</td>
                  <td className="border border-slate-200 px-3 py-2">価格高騰期に随意契約移行しにくく、条件整備に時間がかかる</td>
                  <td className="border border-slate-200 px-3 py-2">民間は相見積もりで迅速に契約変更できる</td>
                  <td className="border border-slate-200 px-3 py-2">随意契約の要件整備と調達仕様の弾力化を事前に検討しておく</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">住民説明責任</td>
                  <td className="border border-slate-200 px-3 py-2">電気料金増加が公費支出増として住民・メディアの注目を浴びる</td>
                  <td className="border border-slate-200 px-3 py-2">民間はコスト変動を内部で処理でき、対外説明義務が低い</td>
                  <td className="border border-slate-200 px-3 py-2">状況説明資料を早期に準備し、情報公開に備える</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 施設別料金影響表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体施設の契約区分別リスク</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            施設種別によって受電区分と規模が異なり、最終保障供給に移行した際の月額負担増加も大きく異なります。
            庁舎・学校は影響が小さく見えますが施設数が多く、総額では無視できない水準になることがあります。
          </p>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">施設種別</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">契約区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">月間使用量目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">最終保障供給時の月額増加目安</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">庁舎（本庁・支所）</td>
                  <td className="border border-slate-200 px-3 py-2">高圧</td>
                  <td className="border border-slate-200 px-3 py-2">1〜5万kWh</td>
                  <td className="border border-slate-200 px-3 py-2">+20〜100万円／棟</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">学校（小中高）</td>
                  <td className="border border-slate-200 px-3 py-2">高圧・低圧</td>
                  <td className="border border-slate-200 px-3 py-2">0.3〜2万kWh</td>
                  <td className="border border-slate-200 px-3 py-2">+6〜40万円／校</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">病院・診療所</td>
                  <td className="border border-slate-200 px-3 py-2">特別高圧・高圧</td>
                  <td className="border border-slate-200 px-3 py-2">10〜100万kWh</td>
                  <td className="border border-slate-200 px-3 py-2">+200万〜2,000万円／施設</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">上下水道施設</td>
                  <td className="border border-slate-200 px-3 py-2">特別高圧・高圧</td>
                  <td className="border border-slate-200 px-3 py-2">5〜50万kWh</td>
                  <td className="border border-slate-200 px-3 py-2">+100万〜1,000万円／施設</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">清掃工場（ごみ処理）</td>
                  <td className="border border-slate-200 px-3 py-2">特別高圧</td>
                  <td className="border border-slate-200 px-3 py-2">50〜200万kWh</td>
                  <td className="border border-slate-200 px-3 py-2">+1,000万〜4,000万円／施設</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 最終保障供給料金は一般送配電事業者によって異なります。増加目安は通常契約との差額を概算したもので、地域・時期によって変動します。
          </p>
        </section>

        {/* 入札不調と最終保障供給の関係 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">入札不調と最終保障供給の関係</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            入札不調が起きると、通常契約が決まるまでの期間をどうつなぐかが課題になります。最終保障供給はこの空白期間を埋める制度ですが、
            それ自体が調達完了ではありません。次回調達条件の再設計と並行して進める必要があります。
            入札不調の背景には、市場価格と入札予定価格の乖離、小売事業者の応札回避、仕様条件の問題など複合的な要因があります。
          </p>
        </section>

        {/* 備えチェックリスト */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体の備えチェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給リスクに備えるため、以下の項目を定期的に確認・整備することを推奨します。
          </p>
          <ul className="mt-4 space-y-3">
            {[
              {
                item: "施設別の受電区分・使用量データを毎年度更新している",
                note: "区分別の単価変動影響を即座に試算できる状態にしておく",
              },
              {
                item: "電力調達の入札スケジュールを現行契約満了の6〜12か月前に設定している",
                note: "入札不調後の再公募期間を確保するために前倒しが有効",
              },
              {
                item: "入札不調時の随意契約移行要件を事前に整理・確認している",
                note: "緊急随意契約の要件を担当部署が把握していることが重要",
              },
              {
                item: "最終保障供給移行時の補正予算規模を事前に試算している",
                note: "施設ごとの通常契約比増加額を集計し、補正規模を見積もる",
              },
              {
                item: "議会・住民向けの説明資料テンプレートを準備している",
                note: "最終保障供給の制度説明・費用増加の理由・次の対応方針を盛り込む",
              },
              {
                item: "病院・上下水道など供給継続必須施設の優先度を整理している",
                note: "複数施設の契約移行を段階的に進める優先順位付けに活用する",
              },
            ].map(({ item, note }, i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-sky-100 bg-white p-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-800">{item}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 次回調達準備 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">次回調達までに準備したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>施設別の使用実績と受電区分の整理</li>
            <li>仕様条件・評価項目の再点検（価格点と非価格点のバランス）</li>
            <li>契約期間・リスク分担の見直し（<Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プラン</Link>・<Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プラン</Link>の選択肢比較）</li>
            <li>調達スケジュールの前倒し検討（入札不調の猶予期間確保）</li>
            <li>複数年契約・一括調達による単価安定化の検討</li>
          </ul>
        </section>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2025-08-30" />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度全体の位置づけと基本事項を確認できます。",
            },
            {
              href: "/last-resort-supply-price",
              title: "最終保障供給の料金水準",
              description: "通常契約との単価差と月額負担増加の目安を確認できます。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替えるには",
              description: "次契約へ移るための実務フローを整理できます。",
            },
            {
              href: "/municipality-fixed-vs-market-linked",
              title: "自治体の固定型・市場連動型比較",
              description: "調達方式の選択と予算リスクの考え方を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "調達条件の再設計後に比較検討を進める入口です。",
            },
          ]}
        />

        <ContentCta
          heading="次回調達の準備を進める"
          description="自治体実務の論点を整理したら、通常契約への切り替え条件を比較し、段階的に調達を進めることが重要です。"
          links={[
            { href: "/last-resort-supply-switch", label: "切り替え手順を見る" },
            { href: "/compare", label: "比較ページを見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
