import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
const pageTitle = "固定プランが向いている法人・向いていない法人｜予算管理しやすい電力契約の考え方";
const pageDescription =
  "固定プランが向いている法人と向いていない法人の違いを、電気料金の安定性、予算管理、社内説明、契約条件の確認ポイントから整理します。法人向けの電力契約見直しに役立つ解説ページです。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "固定プラン", "電力契約見直し"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/who-should-choose-fixed-price-plan",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/who-should-choose-fixed-price-plan",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "固定プランが向いている法人・向いていない法人" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const faqItems = [
  { question: "固定プランが向いている法人の特徴は何ですか？", answer: "年間予算を固定的に管理したい法人、電気代の変動が損益に大きく影響する業種、担当者のリソースが限られている、社内説明で変動理由を毎月説明するのが難しい組織に向いています。" },
  { question: "固定プランは燃料費の高騰時に本当に安全ですか？", answer: "固定プランは契約単価が固定されるため電力量料金の変動リスクを抑えられます。ただし燃料費調整額は固定プランでも変動します。見積時に燃調費の計算方式と上限設定を確認することが重要です。" },
  { question: "固定プランへ切り替える際の注意点は何ですか？", answer: "現契約の解約条件・違約金・通知期限を確認することが最初のステップです。また切替タイミングによっては市場連動の方が有利な局面もあるため、見積比較で年間コスト差を試算して判断することが重要です。" },
];

export default function WhoShouldChooseFixedPricePlanPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/who-should-choose-fixed-price-plan"
        datePublished="2026-03-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約メニューの違いを知る", url: "https://simulator.eic-jp.org/articles/plan-types" },
          { name: "固定プランが向いている法人" },
        ]}
        faq={faqItems}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">固定が向く法人</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">固定プランが向いている法人・向いていない法人</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          固定プランは「絶対に請求額が変わらない契約」ではなく、単価の見通しを持ちやすい契約です。法人の契約見直しでは、電気料金をどこまで安定させたいか、
          予算管理や社内説明をどう回すかという運用面と合わせて判断する必要があります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランは、単価を固定するというより見通しを持ちやすい契約</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランの強みは、契約期間中の単価見通しを置きやすい点です。一方で、燃料費調整額や再エネ賦課金など契約の外側で動く項目があるため、
            固定という言葉だけで請求全体を判断するのは避けるべきです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            固定契約の基本は{" "}
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プランとは
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランが向いている法人</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>月次予算を安定させたい法人</li>
            <li>稟議資料や社内説明で単価前提を明確に示したい企業</li>
            <li>相場の読みより、運用の安定性を優先したい法人</li>
            <li>拠点数が多く、料金のばらつきを抑えたい企業</li>
            <li>自治体や公共施設のように変動リスクを抑えたい需要家</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランが向いていない法人</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>市場価格の下落局面を積極的に取り込みたい法人</li>
            <li>電力使用パターンを細かく最適化して調達に反映できる法人</li>
            <li>短期変動を許容してでも平均単価の低減を重視する法人</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            固定を選ばない判断が合理的になる場面もあります。市場連動との比較は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動と固定の違い
            </Link>
            で整理できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定でも確認しておきたい変動要素</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料費調整額の扱い</li>
            <li>再エネ賦課金の反映</li>
            <li>契約期間中の条件変更の有無</li>
            <li>中途解約時の違約金</li>
            <li>更新時の単価見直し条件</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特に「固定なのに請求が動く理由」は誤解されやすいため、{" "}
            <Link
              href="/does-fuel-cost-adjustment-change-even-in-fixed-plan"
              className="text-slate-900 underline underline-offset-2 hover:text-slate-700"
            >
              固定プランでも燃料費調整額で請求が変わる理由
            </Link>
            を事前に確認すると社内説明がしやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランを選ぶときの確認ポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約との比較条件（期間、負荷前提、調整項目）がそろっているか</li>
            <li>契約満了前後の見直し余地が確保されているか</li>
            <li>見積単価だけでなく、実請求で動く項目まで説明できるか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランは「保守的だから選ぶ」のではなく、予算管理と説明可能性を重視する法人にとって合理的な選択肢です。見積比較では、
            固定される部分と変動する部分を分けて確認し、契約更新時の条件まで含めて判断してください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランの実勢価格帯（2024〜2025年度参考）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約区分</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">電力量料金単価（税抜目安）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高圧（50kW〜）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">18〜24円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">エリア・使用時間帯で差</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">特別高圧（2,000kW〜）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">15〜20円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">大口ほど交渉余地</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">低圧電力</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">22〜30円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">小規模事業所向け</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定 vs 市場連動 年間コスト比較シミュレーション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間<span className="font-semibold text-slate-900">50,000kWh</span>使用の高圧事業所（固定プラン20円/kWh）の場合。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">市場環境</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">固定プラン</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">市場連動プラン</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">差額</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">有利な方</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">安定期（JEPX 10円）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">960万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+240万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-sky-700">市場連動</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">やや高騰（JEPX 18円）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">±0</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">同等</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高騰期（JEPX 25円）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,680万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲480万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">固定</span></td>
              </tr>
            </tbody>
          </table>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="who-should-choose-fixed-price-plan" terms={["固定プラン", "市場連動プラン", "燃料費調整額", "容量拠出金", "基本料金"]} />
        </div>

        <SourcesAndFaq
          faq={faqItems}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・自由化に関する情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力取引監視に関する情報" },
          ]}
          publishedAt="2026-03-27"
        />

        <RelatedLinks
          heading="あわせて確認したいページ"
          intro="固定プランの適性判断を、比較実務や見直しタイミングへつなげるための関連ページです。"
          links={[
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "固定契約の基本構造とメリット・注意点を整理できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "変動性、予算管理、リスクの差を比較できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "固定契約でも影響する調整項目の基礎を確認できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "固定を含む契約見直しを始める時期の判断に役立ちます。",
            },
          ]}
        />

        <ContentCta
          heading="比較条件をそろえて検討する"
          description="固定プランの適性を確認したら、現行契約との差分を同条件で比較し、社内説明に使える形で判断材料を整理しましょう。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/how-to", label: "使い方ページを見る" },
            { href: "/articles", label: "解説ページ一覧に戻る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
