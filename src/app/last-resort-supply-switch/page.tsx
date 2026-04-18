import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { TightSupplyAlertCalculator } from "../../components/market-data/AdditionalCalculators";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle = "最終保障供給から切り替えるには｜切替パターン別の所要期間と手続き";
const pageDescription =
  "最終保障供給から通常の法人向け電力契約へ切り替えるときに、確認したい流れ、必要情報、注意点をわかりやすく解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 切り替え",
    "最終保障供給 いつまで",
    "最終保障供給 法人 契約見直し",
    "最終保障供給 高圧 切替",
    "最終保障供給 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-switch",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-switch",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "最終保障供給から切り替えるには",
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
    question: "最終保障供給から通常の電力契約への切替にはどのくらいの期間がかかりますか？",
    answer: "一般的に低圧では2〜4週間、高圧では1〜2か月、特別高圧では2〜3か月以上かかる場合があります。メーター交換工事が必要な場合はさらに時間がかかることがあるため、できるだけ早めに手続きを開始することを推奨します。",
  },
  {
    question: "最終保障供給から切り替えるために必要な情報は何ですか？",
    answer: "現在の供給地点特定番号（お客さま番号）、月間使用量、受電電圧（高圧・特別高圧・低圧）、最大需要電力、契約電力などが必要です。これらを揃えた上で複数の小売電気事業者に見積もりを依頼してください。",
  },
  {
    question: "最終保障供給中に通常契約の見積もりを並行して取ることはできますか？",
    answer: "はい、可能です。最終保障供給は移行先が確定次第解除できます。複数社に見積もりを依頼し、料金水準・契約条件・燃料費調整額の上限有無を比較した上で、最も条件の良い事業者と契約することを検討してください。",
  },
];

const sources = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力契約切替手続き・監視情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売切替制度・手続きに関する資料" },
  { name: "新電力ネット", url: "https://pps-net.org", description: "小売電気事業者の比較・切替情報" },
];

export default function LastResortSupplySwitchPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/last-resort-supply-switch"
        datePublished="2025-08-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給を知る", url: "https://simulator.eic-jp.org/articles/last-resort-supply" },
          { name: "切り替えるには" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/last-resort-supply" className="underline-offset-2 hover:underline">最終保障供給を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">最終保障供給からの切替</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給から切り替えるには</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は、通常の法人向け電力契約までのつなぎとして考えるのが基本です。切り替え作業は後回しにすると選択肢が狭まりやすいため、
          早めの準備が重要になります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給は次の契約までのつなぎ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            供給継続のために有効な制度ですが、長期運用向きの契約ではありません。契約条件の見通しを安定させるには、
            次の小売契約へ計画的に移行する必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">切り替え前に確認したい情報</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力、受電区分（高圧・特別高圧）</li>
            <li>直近12か月の使用量</li>
            <li>30分値やデマンド情報</li>
            <li>現在の料金条件と請求内訳</li>
            <li>契約満了時期と希望切替時期</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積もり依頼の前に整理したい項目</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積精度を上げるには、単価比較の前に前提条件をそろえることが重要です。使用実績だけでなく、
            契約条件の優先順位（安定性重視か、柔軟性重視か）を社内で整理しておくと判断しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較軸の作り方は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              新電力を比較するときのポイント
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">切り替えで注意したい契約条件</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>・<Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額</Link>の扱い</li>
            <li>契約期間、更新条件、違約金</li>
            <li>供給開始可能日と手続き期限</li>
            <li>請求明細の粒度や運用サポート体制</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            条件確認の観点は{" "}
            <Link href="/electricity-contract-terms" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人向け電力契約で確認したい契約条件
            </Link>{" "}
            も参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">早めに動いたほうがよい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧では供給開始まで調整期間が必要になることがあり、検討開始が遅れるほど切り替え候補が限られます。
            「いつまでに何をするか」を逆算し、社内決裁や庁内手続きも含めた工程を先に置くことが実務上のポイントです。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給からの切替スケジュール目安</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">ステップ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">所要期間</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">主な作業</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">現状整理</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜2週間</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">請求書・使用量データ収集、契約条件確認</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積依頼・取得</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2〜4週間</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">3〜5社へ見積依頼、条件比較</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">社内検討・決裁</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜3週間</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">比較検討、稟議・庁内手続き</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約・供給切替</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2〜4週間</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">新契約締結、メーター切替手続き</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">合計</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約2〜3か月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">最終保障のコスト増は毎月続くため早期着手が重要</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月50,000kWh使用の場合、最終保障供給のまま<span className="font-semibold text-slate-900">3か月遅れるだけで+75〜120万円</span>の追加コストが発生します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">切替パターン別の所要期間と注意点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            切替の方向によって手続き内容と所要期間が異なります。どのパターンに該当するかを確認してから準備を進めます。
          </p>
          
      <TightSupplyAlertCalculator />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">切替パターン</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">所要期間</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">手続き内容</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">通常契約 → 最終保障</td>
                  <td className="border border-slate-200 px-3 py-2">数日〜2週間</td>
                  <td className="border border-slate-200 px-3 py-2">一般送配電事業者へ申請、契約終了確認</td>
                  <td className="border border-slate-200 px-3 py-2">移行後は料金が即座に高くなる。早期脱出の計画を同時に立てる</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">最終保障 → 通常契約（旧来大手）</td>
                  <td className="border border-slate-200 px-3 py-2">2〜4週間</td>
                  <td className="border border-slate-200 px-3 py-2">見積依頼・契約締結・供給開始日調整</td>
                  <td className="border border-slate-200 px-3 py-2">申込から供給開始まで最低2週間かかる場合が多い</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">最終保障 → 新電力</td>
                  <td className="border border-slate-200 px-3 py-2">4〜8週間</td>
                  <td className="border border-slate-200 px-3 py-2">見積・審査・契約・スイッチング手続き</td>
                  <td className="border border-slate-200 px-3 py-2">スイッチング申請からメーター切替まで追加の期間が必要。3社以上に並行見積を出す</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">通常契約 → 別の通常契約</td>
                  <td className="border border-slate-200 px-3 py-2">1〜2か月</td>
                  <td className="border border-slate-200 px-3 py-2">現契約の解約確認・違約金確認・新契約締結</td>
                  <td className="border border-slate-200 px-3 py-2">違約金の有無を先に確認。契約満了に合わせるとコスト最小化しやすい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 所要期間はエリア・事業者・設備状況によって異なります。高圧・特別高圧ではメーター切替工事が必要な場合があり、さらに時間がかかることがあります。
          </p>
        </section>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2025-08-01" />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "切り替え着手の適切な時期を整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "見積比較時の判断軸をそろえられます。",
            },
            {
              href: "/electricity-contract-terms",
              title: "法人向け電力契約で確認したい契約条件",
              description: "契約期間・更新・違約金の確認観点を整理できます。",
            },
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度の位置づけと対象の基本を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="切り替え準備を比較に落とし込む"
          description="必要情報をそろえたら、比較ページとシミュレーターで次契約の候補を具体化できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーターを使う" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
