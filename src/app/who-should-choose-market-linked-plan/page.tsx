import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
const pageTitle = "市場連動プランが向いている法人・向いていない法人｜電気料金の変動リスクをどう見るか";
const pageDescription =
  "市場連動プランが向いている法人と向いていない法人の違いを、電気料金の変動、使用時間帯、予算管理、社内説明のしやすさから整理します。法人・企業・自治体の電力契約見直しに役立つ解説です。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "市場連動", "市場連動プラン", "電力契約見直し", "自治体電力契約"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/who-should-choose-market-linked-plan",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/who-should-choose-market-linked-plan",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "市場連動プランが向いている法人・向いていない法人" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const faqItems = [
  { question: "市場連動プランが向いている法人の特徴は何ですか？", answer: "月次でコスト管理ができる体制がある、電力使用量の変動が少なくモニタリングしやすい、価格変動をある程度許容できるリスク管理ができる、といった特徴がある法人に向いています。" },
  { question: "市場連動プランが向いていない法人はどんな会社ですか？", answer: "年間予算を固定的に管理したい法人、電気代の変動が損益に直結しやすい業種（飲食・小売など）、担当者のリソースが限られている法人、社内説明で変動理由を毎月説明するのが難しい組織には向いていません。" },
  { question: "市場連動プランを選ぶ前に確認すべきことは何ですか？", answer: "月次での電力コストモニタリング体制があるか、相場急騰時の許容コスト上限はどの程度か、社内承認・説明体制が整っているかを事前に確認することが重要です。" },
];

export default function WhoShouldChooseMarketLinkedPlanPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/who-should-choose-market-linked-plan"
        datePublished="2026-03-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約メニューの違いを知る", url: "https://simulator.eic-jp.org/articles/plan-types" },
          { name: "市場連動プランが向いている法人" },
        ]}
        faq={faqItems}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">市場連動が向く法人</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場連動プランが向いている法人・向いていない法人</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電力契約で市場連動プランを検討するときは、「固定より安いか」だけで判断するとズレやすくなります。実務では、
          電気料金の変動をどこまで受け入れられるか、使用時間帯が市場価格とどう重なるか、予算管理や社内説明を回せるかまで含めて考えることが重要です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランは、単価の安さよりも変動の受け方で考える</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランは、平時には魅力的な単価に見えることがあります。一方で、相場急騰局面では同じ使用量でも請求額が大きく動きうる契約です。
            そのため、安さの平均値より「上振れが出た月を自社で運用できるか」を先に整理する方が、稟議や予算管理に沿った判断になりやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動の基本は{" "}
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランとは
            </Link>
            、固定との構造差は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの違い
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランが向いている法人</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>30分ごとの使用実績を把握し、時間帯ごとの負荷特性を見ている法人</li>
            <li>昼中心・夜中心など、使用パターンに明確な特徴がある企業や自治体</li>
            <li>月ごとの電気代の変動を一定範囲で許容できる予算運用体制がある法人</li>
            <li>相場変動の背景を社内へ説明できる担当体制や意思決定プロセスがある法人</li>
            <li>単年の見え方より、中長期での調達最適化を重視する法人</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランが向いていない法人</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>毎月の予算をできるだけ一定に置きたい法人</li>
            <li>社内稟議や施設運営の都合で料金変動を抑えたい自治体・公共施設</li>
            <li>使用時間帯やピーク時間の把握が十分でない法人</li>
            <li>契約単価の見えやすさを重視したい企業</li>
            <li>相場上昇時の説明負担をできるだけ避けたい法人</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金表だけでは分からない確認ポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>30分値ベースの使用状況と、季節ピーク時の負荷集中</li>
            <li>夏冬ピークと市場価格ピークの重なりやすさ</li>
            <li>高騰時の上限設定や想定外条件の有無</li>
            <li>市場価格調整の扱いと反映タイミング</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>や追加費用が別建てかどうか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約名だけで判断せず、見積条件を比較する際は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較時の確認ポイント
            </Link>
            をあわせて参照すると整理しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動を検討するときに見たい社内データ</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>拠点別の30分使用量実績（最低1年分）</li>
            <li>季節別・曜日別のピーク時間帯</li>
            <li>予算管理で許容できる月次変動レンジ</li>
            <li>上振れ時に説明すべき社内関係者と承認フロー</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランは「安い契約かどうか」でなく、「変動を受ける契約を運用できるか」で判断するのが実務的です。自社の使用パターン、予算管理、
            説明体制を合わせて確認し、必要なら{" "}
            <Link href="/compare" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較ページ
            </Link>
            で前提をそろえて検討してください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランのリスクリターン実績（2020〜2024年）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間<span className="font-semibold text-slate-900">50,000kWh</span>使用の高圧事業所で、市場連動プラン（JEPX+手数料8円/kWh）と固定プラン（20円/kWh）を比較した過去実績です。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年度</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX年平均</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">市場連動 年間費</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">固定20円との差</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">有利な方</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2020</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">6.5円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約870万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲330万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-sky-700">市場連動</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2021</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">12.7円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,242万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲42万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-sky-700">市場連動</span></td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2022</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">22.1円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,806万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+606万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">固定</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2023</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">13.9円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,314万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲114万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-sky-700">市場連動</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2024</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">14.2円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,332万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲96万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-sky-700">市場連動</span></td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            5年中4年で市場連動が有利ですが、2022年の1年だけで<span className="font-semibold text-slate-900">+606万円</span>のコスト増が発生。
            数年分のメリットが1年の高騰で吹き飛ぶリスクがあることを示しています。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="who-should-choose-market-linked-plan" terms={["市場連動プラン", "固定プラン", "JEPX", "市場価格調整額", "燃料費調整額"]} />
        </div>

        <SourcesAndFaq
          faq={faqItems}
          sources={[
            { name: "JEPX（日本卸電力取引所）", url: "http://www.jepx.org", description: "スポット市場価格データ" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度に関する情報" },
          ]}
          publishedAt="2026-03-27"
        />

        <RelatedLinks
          heading="あわせて読みたいページ"
          intro="市場連動の適性判断を、比較検討と社内説明の実務へつなげる導線です。"
          links={[
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "契約の基本構造と注意点を先に確認したいときに役立ちます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "単価だけでなくリスクの出方を比較できます。",
            },
            {
              href: "/who-should-choose-fixed-price-plan",
              title: "固定プランが向いている法人・向いていない法人",
              description: "市場連動と対で検討する際に、固定側の適性を整理できます。",
            },
            {
              href: "/articles",
              title: "解説ページ一覧",
              description: "契約メニューカテゴリ全体を通して判断軸を確認できます。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "法人の電力契約見直しは何から始めるべきか",
              description: "プラン選択の判断後に進める見直し手順の入口。",
            },
          ]}
        />

        <ContentCta
          heading="比較条件をそろえて検討したい方へ"
          description="判断軸を整理したら、比較ページと使い方ページで実際の前提条件をそろえ、社内説明に使える形で試算を進めましょう。"
          links={[
            { href: "/how-to-compare-electricity-suppliers", label: "比較前の確認ポイントを見る" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles", label: "解説ページ一覧に戻る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
