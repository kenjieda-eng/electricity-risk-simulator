import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "JEPXとは何か｜卸電力市場の仕組みと法人向け電気料金への影響";
const pageDescription =
  "JEPX（日本卸電力取引所）とは何か。電力会社が利用する卸電力市場の仕組み、価格変動の背景、法人向け電気料金との関係をわかりやすく解説します。";
const pageUrl = "https://simulator.eic-jp.org/jepx-explained";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "JEPXとは何か",
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

export default function JepxExplainedPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">JEPXとは何か｜卸電力市場の仕組み</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPX（日本卸電力取引所）は、電気を売りたい事業者と買いたい事業者が取引する市場です。法人向け電気料金の背景を理解するうえで、市場調達の位置づけを知っておくことは重要です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXは電気を売買する市場</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            小売電気事業者がすべてを自社発電で賄うわけではないため、外部調達の場が必要になります。JEPXは、必要な量を調達するための主要な仕組みの一つとして機能しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな事業者がJEPXを利用しているのか</h2>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">小売電気事業者</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            需要変動や調達計画のズレを補うために市場を利用します。柔軟性は高い一方、価格上昇局面では調達コストが増える可能性があります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">発電事業者</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            発電した電気の販売先として市場を活用します。相対契約と市場売電を使い分けながら、販売機会を確保します。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">その他の市場参加者</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場は複数の立場の参加者で成り立っています。読者にとって重要なのは、料金の背景に市場取引が組み込まれている点です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXで取引される電気とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気は大量に保存しにくく、必要な時間帯に需給を合わせる必要があります。そのため、余裕がある時間帯と逼迫する時間帯では価格の動き方が変わりやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜJEPXが重要なのか</h2>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">必要な電気を機動的に調達できる</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場は、短期の需要変化に対応しやすいという強みがあります。予測と実需の差を埋める役割を担います。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">価格シグナルが見える</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格は、需給の厳しさや燃料事情が反映される場面があります。調達判断や料金設計の参考指標として使われます。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">一方で価格変動リスクもある</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            需給逼迫や燃料高騰が重なると、調達コストが急に上がる可能性があります。市場調達の利便性とリスクは表裏一体です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXの動きが法人向け電気料金に与える影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            すべての料金メニューが同じ形で市場価格を反映するわけではありません。ただし、市場連動型では影響が見えやすく、固定型でも見積時点の調達環境が条件に反映されることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランを理解するうえでもJEPXは重要</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型の料金はJEPXの価格動向と関係が深いため、市場の仕組みを知ると変動の意味が読みやすくなります。次ページでは、価格そのものがどう決まるかを掘り下げます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="JEPXの理解を起点に、価格決定と契約メニューへつなげて確認できます。"
          links={[
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格と料金メニューの関係を実務目線で整理します。",
            },
            {
              href: "/how-electricity-prices-are-determined",
              title: "電気の価格はどう決まるのか",
              description: "需給、燃料、天候などの価格決定要因を解説します。",
            },
            {
              href: "/how-electricity-is-procured",
              title: "電力会社の仕入れの全体像",
              description: "自社発電・市場・相対契約の全体構造を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニューを比較する",
              description: "仕組みの理解を踏まえて、契約条件の比較に進めます。",
            },
          ]}
        />

        <ContentCta
          heading="次のステップ"
          description="価格の決まり方まで理解すると、料金メニューの比較軸が明確になります。"
          links={[
            { href: "/how-electricity-prices-are-determined", label: "JEPX価格の決まり方を見る" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
