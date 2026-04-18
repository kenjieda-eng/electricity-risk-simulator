import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle = "最終保障供給の約款はどう読むか｜確認すべき7項目と見落としリスク";
const pageDescription =
  "最終保障供給の約款や料金表を見るときに、法人担当者がどこを確認すればよいかを、難しい条文をそのまま並べずに整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 約款",
    "最終保障供給 料金表 見方",
    "最終保障供給 法人 担当者",
    "最終保障供給 高圧 特別高圧 約款",
    "最終保障供給 供給条件",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-terms",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-terms",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "最終保障供給の約款はどう読むか",
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
    question: "最終保障供給の約款で特に重要な確認ポイントはどこですか？",
    answer: "料金算定方式（JEPX連動の有無・基本料金の計算方法）、供給終了条件（移行完了後の扱い）、支払い条件・遅延損害金の扱い、および適用エリア・事業者ごとの特有条件の4点が特に重要です。エリアごとに約款内容が異なるため、一般送配電事業者の公表資料を直接確認することが必要です。",
  },
  {
    question: "最終保障供給の約款は一般の事業者でも入手できますか？",
    answer: "はい、各エリアの一般送配電事業者（東京電力パワーグリッドなど）がウェブサイトで約款・料金表を公開しています。難解な条文が多いため、必要に応じて電力コンサルタントや専門家への確認も選択肢になります。",
  },
  {
    question: "最終保障供給の約款を確認せずに放置するとどのようなリスクがありますか？",
    answer: "料金の変動条件（JEPX高騰時の請求増加）や解約条件を理解しないまま在籍し続けると、予期しない高額請求が発生することがあります。また切替のタイミングを逃すと、割高な料金が長期間継続するリスクがあります。",
  },
];

const sources = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "最終保障供給の供給条件・約款規制に関する情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電気供給約款・制度解説" },
];

export default function LastResortSupplyTermsPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/last-resort-supply-terms"
        datePublished="2025-09-02"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給を知る", url: "https://simulator.eic-jp.org/articles/last-resort-supply" },
          { name: "最終保障供給の約款" },
        ]}
        faq={faqItems}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/last-resort-supply" className="underline-offset-2 hover:underline">最終保障供給を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">最終保障供給の契約条件</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給の約款はどう読むか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給の情報は、一般送配電事業者ごとに約款や料金表として公表されています。条文を最初から順に読むと負担が大きいため、
          実務では「何を先に確認するか」を決めて読むことが重要です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">約款でまず確認したい項目</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>対象需要家の条件（高圧・特別高圧）</li>
            <li>供給開始・終了に関する取り扱い</li>
            <li>契約期間や変更手続き</li>
            <li>供給継続に関する前提条件</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金表で見たいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金単価だけでなく、基本料金、電力量料金、調整項目の扱いをセットで確認します。どの項目が固定的で、どの項目が変動しやすいかを分けて見ると、
            請求額の読み違いを減らせます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約期間や供給条件の確認ポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約の継続前提と位置づけ</li>
            <li>供給条件変更時の扱い</li>
            <li>次契約への移行時に必要な手続き</li>
            <li>自社・自施設で必要な社内承認プロセス</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">エリアごとに見るときの注意点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            約款・料金表はエリアごとに記載形式や表現が異なる場合があります。条文そのものを比較するより、
            「対象」「料金」「供給条件」「切り替え時の実務」を同じ観点で横並びに確認するのが実務的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">約款を読んだ後に確認したい実務対応</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            約款確認の目的は、制度理解で終わらず次契約への行動に移すことです。対象判定、料金構造の把握、切り替えスケジュールの作成までつなげることで、
            実務で使える情報になります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給の料金水準目安（エリア別・高圧）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給の電力量料金は、一般的な小売契約より<span className="font-semibold text-slate-900">20〜40%</span>割高に設定されています。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">エリア</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">最終保障 電力量料金</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">小売平均（参考）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">差額目安</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">東京</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約25〜28円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約18〜22円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+5〜8円/kWh</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">関西</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約23〜26円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約17〜20円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+5〜7円/kWh</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中部</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約24〜27円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約17〜21円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+5〜8円/kWh</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">九州</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約22〜25円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約16〜19円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+5〜7円/kWh</span></td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間50,000kWh使用の高圧事業所では、最終保障供給のまま1年間継続した場合、通常小売より年間<span className="font-semibold text-slate-900">+300〜480万円</span>の追加コストが見込まれます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">約款で確認すべき7項目</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            条文を最初から読むより、以下の7項目を絞って確認する方が実務的です。見落とすと予算超過や手続き漏れにつながるリスクがあります。
          </p>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">約款での記載箇所（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">確認ポイント</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">見落としリスク</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">料金算定方法</td>
                  <td className="border border-slate-200 px-3 py-2">料金表・別表</td>
                  <td className="border border-slate-200 px-3 py-2">基本料金・電力量料金・調整額の計算式</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700">請求額の読み違いで予算オーバー</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">適用期間</td>
                  <td className="border border-slate-200 px-3 py-2">供給条件の章</td>
                  <td className="border border-slate-200 px-3 py-2">供給開始日・上限期間・延長の可否</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700">期限切れで突然供給停止のリスク</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">解約条件</td>
                  <td className="border border-slate-200 px-3 py-2">契約解除の章</td>
                  <td className="border border-slate-200 px-3 py-2">通常契約への切替時の手続きと期間</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700">切替手続きに想定以上の期間がかかる</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">供給開始日</td>
                  <td className="border border-slate-200 px-3 py-2">供給開始の章</td>
                  <td className="border border-slate-200 px-3 py-2">申請からどのくらいで供給が始まるか</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700">空白期間が生じて電気が止まるリスク</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">需給調整</td>
                  <td className="border border-slate-200 px-3 py-2">需給管理・調整の章</td>
                  <td className="border border-slate-200 px-3 py-2">計画外の電力使用増減時の対応</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700">使用量変動時に追加費用が発生することがある</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900"><Link href="/wheeling-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">託送料金</Link></td>
                  <td className="border border-slate-200 px-3 py-2">料金表・付則</td>
                  <td className="border border-slate-200 px-3 py-2">送配電費用の取り扱いと請求方法</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700">総額計算時に託送分を見落とす</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">変更届</td>
                  <td className="border border-slate-200 px-3 py-2">届出・通知の章</td>
                  <td className="border border-slate-200 px-3 py-2">設備変更・使用量変更時の届出義務</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700">届出漏れで契約違反・追加請求のリスク</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 約款の章構成はエリア（一般送配電事業者）ごとに異なります。上記は確認すべき内容の整理であり、実際の章番号は各事業者の公表資料をご確認ください。
          </p>
        </section>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2025-09-02" />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度全体の前提を整理できます。",
            },
            {
              href: "/last-resort-supply-price",
              title: "最終保障供給の料金はなぜ高いのか",
              description: "料金表確認時の見方を実務寄りに整理できます。",
            },
            {
              href: "/last-resort-supply-target",
              title: "最終保障供給の対象は誰か",
              description: "対象判定の考え方を確認できます。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替えるには",
              description: "約款確認後に進める切り替え準備を確認できます。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約見直しの始め方",
              description: "次契約に向けた実務の最初のステップを整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="約款確認を切り替え実務へつなげる"
          description="確認項目を整理したら、比較ページとシミュレーターで次契約の判断を具体化しやすくなります。"
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
