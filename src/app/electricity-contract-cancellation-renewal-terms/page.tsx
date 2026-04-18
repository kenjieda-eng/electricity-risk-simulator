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

const pageTitle = "法人向け電力契約で確認したい違約金・契約期間・更新条件｜金額パターンとチェックリスト";
const pageDescription =
  "法人向け電力契約を比較するときに確認したい、違約金、契約期間、更新条件の見方を解説します。単価だけでは分からない契約条件の違いを整理し、見直しや乗り換えの判断に役立てます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電力契約見直し", "電力会社比較"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-contract-cancellation-renewal-terms",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-contract-cancellation-renewal-terms",
    siteName: "法人電気料金ナビ",
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

const renewalChecklist = [
  {
    item: "自動更新の有無",
    detail: "契約満了時に自動更新される仕組みかどうかを確認。自動更新の場合は更新拒否に期限があります。",
  },
  {
    item: "更新拒否の通知期限",
    detail: "更新しない場合の申し出期限（例：満了2か月前）を確認。期限を過ぎると自動更新が確定します。",
  },
  {
    item: "更新時の単価改定条件",
    detail: "更新単価の提示方法（再見積・自動改定・市場連動など）と、改定に同意できない場合の対処を確認。",
  },
  {
    item: "解約予告期間",
    detail: "契約期間中に解約する場合の予告期間（例：3か月前通知）を確認。予告期間が長いほど行動が制約されます。",
  },
  {
    item: "解約違約金の計算方法",
    detail: "残存契約期間に応じた違約金の計算式（残月数×基本料金の一定割合など）が明示されているか確認。",
  },
  {
    item: "価格改定条項の有無",
    detail: "燃料費調整や市況変化を理由に電力会社側から単価を改定できる条項があるかを確認。",
  },
];

const faqItems = [
  { question: "法人の電力契約で違約金が発生するのはどんな場合ですか？", answer: "契約期間中に解約する場合に違約金が発生するケースが多いです。違約金の計算方法は残期間に応じた月数×月額基本料金などさまざまです。契約書の中途解約条項を必ず確認してください。" },
  { question: "自動更新条項がある電力契約の注意点は何ですか？", answer: "通知期限（多くは更新月の2〜3か月前）までに解約・変更の申し出をしないと自動更新されます。自動更新後は違約金なしに解約できない場合があるため、更新日と通知期限をカレンダー管理することが重要です。" },
  { question: "電力契約の更新条件はどこで確認できますか？", answer: "電力供給契約書の本文、または別紙・覚書に記載されています。更新月・通知期限・自動更新の有無・更新後の契約期間を確認してください。不明な点は電力会社に直接問い合わせることを推奨します。" },
];

export default function ElectricityContractCancellationRenewalTermsPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/electricity-contract-cancellation-renewal-terms"
        datePublished="2026-03-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約メニューの違いを知る", url: "https://simulator.eic-jp.org/articles/plan-types" },
          { name: "違約金・契約期間・更新条件" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずナビ">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホーム</Link>
          </li>
          <li className="before:mx-1 before:content-['>']">
            <Link href="/articles/plan-types" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約メニューの違いを知る</Link>
          </li>
          <li className="before:mx-1 before:content-['>']">
            <span className="text-slate-700">違約金・契約期間・更新条件</span>
          </li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電力契約で確認したい違約金・契約期間・更新条件</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の見積比較では単価が目に入りやすい一方、契約期間・違約金・更新条件は後回しになりがちです。実務では、これらの条件が運用のしやすさや
          乗り換えの自由度に直結するため、初期比較の段階から確認することが重要です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金の比較は単価だけでは足りない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積単価が有利でも、契約期間が長すぎたり、途中解約条件が厳しかったりすると、結果的に見直ししづらい契約になることがあります。価格と条件を分けて比較し、
            将来の運用変更に対応できるかまで確認する視点が必要です。
          </p>
        </section>

        {/* 違約金の金額パターン */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">違約金の金額パターン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            違約金の金額は契約期間の長さと残存期間によって大きく変わります。月間使用量5万kWh程度の施設を想定した目安を下表に示します。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約期間</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">違約金の典型パターン</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">金額目安（月5万kWh施設）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">注意点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">1年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">なし or 残月×定額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">0〜50万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">短期なら柔軟性高い</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">残月×基本料金の一定割合</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50〜200万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中途解約時の負担を確認</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">3年以上</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">残月×電力量料金差額</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">100〜500万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">長期ほど違約金が大きい</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 違約金は契約条件・残存期間・使用量により大きく異なります。契約書で必ず確認してください。</p>
        </section>

        {/* 契約期間別のメリット・デメリット */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約期間別のメリット・デメリット</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価の安さと運用の柔軟性はトレードオフになりやすい構造です。拠点の増減・移転・統廃合の予定とあわせて判断します。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約期間</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">メリット</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">デメリット</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">向いている法人</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">1年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">柔軟性が高く乗り換えしやすい</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">単価が割高になりやすい</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">拠点変更・統廃合の予定がある法人</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1年より単価が抑えやすい</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中途解約時に違約金が発生する場合がある</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量が安定している中規模法人</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">3年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">価格安定性が高く予算管理しやすい</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">解約時の違約金が大きくなる</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">長期安定運営を重視する法人</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">5年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">最も単価を抑えやすい長期固定</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">解約違約金が最大規模になる可能性</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">施設の長期継続が確定している大規模法人</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 実際の単価・違約金条件は電力会社・契約内容により異なります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">違約金で確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>中途解約時にどの条件で発生するか</li>
            <li>どのタイミングから発生対象になるか</li>
            <li>計算方法が明示されているか</li>
            <li>拠点の統廃合や用途変更時に影響するか</li>
          </ul>
        </section>

        {/* 更新条件チェックリスト */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">更新条件チェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約更新時の見落としを防ぐために、以下の6項目を事前に確認してください。
          </p>
          <div className="mt-4 space-y-3">
            {renewalChecklist.map((c, i) => (
              <div key={c.item} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{c.item}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">乗り換えや見直し前に確認したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現在契約の満了時期と通知期限</li>
            <li>施設再編や拠点統廃合の予定</li>
            <li>使用量の増減見込み</li>
            <li>将来の入札・稟議スケジュールとの整合</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            どのタイミングで検討を始めるべきかは{" "}
            <Link href="/when-to-review-electricity-contract" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              見直しタイミングの解説
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力会社タイプ別の解約・更新条件の目安</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">電力会社タイプ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約期間</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">解約通知期限</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">違約金目安</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">大手電力（旧一般電気事業者）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1年（自動更新）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜3か月前</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">なし〜少額</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">新電力（短期契約型）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜2か月前</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">0〜10万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">新電力（長期契約型）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2〜3年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">3〜6か月前</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">10〜50万円</span></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">新電力（低単価+拘束型）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">3〜5年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">6か月前</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">20〜100万円</span></td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 違約金は契約条件・残存期間・使用量により大きく異なります。契約書で必ず確認してください。</p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電力契約では、安い契約かどうかだけでなく、運用しやすい契約かどうかを見る必要があります。契約期間・違約金・更新条件を先に確認しておくことで、
            乗り換え時の想定外を減らしやすくなります。特に3年以上の長期契約では月5万kWhクラスの施設でも違約金が数百万円規模になる可能性があるため、
            自動更新の通知期限と解約条件のチェックリストを活用してください。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="electricity-contract-cancellation-renewal-terms" terms={["市場連動プラン", "固定プラン", "燃料費調整額", "最終保障供給", "基本料金"]} />
        </div>

        <SourcesAndFaq
          faq={faqItems}
          sources={[
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力供給契約の制度・ルールに関する情報" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・自由化に関する情報" },
          ]}
          publishedAt="2026-03-27"
        />

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            intro="単価比較に加えて契約条件を確認する際に、あわせて見ておきたいページです。"
            links={[
              {
                href: "/when-to-review-electricity-contract",
                title: "法人が電力契約を見直すタイミング",
                description: "見直しの開始時期と準備順序を整理できます。",
              },
              {
                href: "/how-to-compare-electricity-suppliers",
                title: "新電力を比較するときのポイント",
                description: "単価以外の比較軸を全体で確認できます。",
              },
              {
                href: "/market-linked-vs-fixed",
                title: "市場連動プランと固定プランの違い",
                description: "契約タイプの違いと条件確認を接続できます。",
              },
              {
                href: "/articles",
                title: "解説ページ一覧",
                description: "契約メニューカテゴリ全体を確認できます。",
              },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="契約条件まで含めて比較する"
            description="比較時は、単価と契約条件を別々に整理したうえで総合判断すると、導入後の運用ギャップを減らしやすくなります。"
            links={[
              { href: "/compare", label: "比較ページを見る" },
              { href: "/articles", label: "解説ページ一覧に戻る" },
            ]}
          />
        </div>
      </section>
    </main>
    </>
  );
}
