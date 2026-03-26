import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気の価格はどう決まるのか｜JEPX価格の仕組みをわかりやすく解説";
const pageDescription =
  "電気の価格はどのように決まるのか。JEPXにおける需給、燃料価格、天候、需給逼迫など、法人向け電気料金にも関係する価格決定の仕組みを解説します。";
const pageUrl = "https://simulator.eic-jp.org/how-electricity-prices-are-determined";

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
        alt: "電気の価格はどう決まるのか",
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

export default function HowElectricityPricesAreDeterminedPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気の価格はどう決まるのか｜JEPX価格の決まり方</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気の価格は、需要と供給のバランスを軸に、燃料価格や天候など複数要因が重なって決まります。法人の契約比較では、単価水準だけでなく変動幅まで見る視点が重要です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気の価格は需要と供給の影響を受ける</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            需要が強く供給余力が小さいと価格は上がりやすく、余裕があると落ち着きやすくなります。電気は保存しにくく同時同量が必要なため、需給変化が価格に出やすいのが特徴です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">需要が増えると価格が上がりやすい理由</h2>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">夏や冬の需要増</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            冷暖房需要が増える季節は、オフィス・工場・商業施設などで使用量が伸びやすく、価格が上がりやすい傾向があります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">猛暑・厳寒の影響</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            気温の振れが大きい年は需要が想定以上に増え、需給逼迫につながることがあります。短期間の高騰が発生する背景として重要な要素です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">供給側の事情でも価格は変わる</h2>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">燃料価格の上昇</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            火力発電の比重が高い局面では、LNGなど燃料価格の上昇が発電コストに反映されやすくなります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">発電所トラブルや供給余力の低下</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            設備停止や点検の重なりで供給余力が低下すると、同じ需要でも価格が上がりやすくなります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">再エネ出力の変動</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            太陽光や風力は天候に左右されるため、期待した出力が得られない時間帯には他電源で補う必要があり、価格変動につながる場面があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ急に高騰することがあるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高騰は、需要増、供給余力の低下、燃料高、天候要因などが同時に重なると起きやすくなります。平常時の単価だけでは見えにくい上振れリスクがある点に注意が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPX価格の変動は法人の電気料金にどう影響するか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型では価格変動が直接的に反映されやすく、固定型でも調達環境が新規見積や更新条件に影響する場合があります。料金比較では、価格の安さと安定性を分けて判断することが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">価格だけでなく、変動幅を見ることも重要</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量が大きい法人では、単価差より変動幅の影響が大きくなることがあります。予算管理の観点でも、平均単価だけでなく上振れ時の水準を確認しておくと判断しやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="価格決定の仕組みを、契約メニューの違いとあわせて確認できます。"
          links={[
            {
              href: "/jepx-explained",
              title: "JEPXとは何か",
              description: "価格形成の前提となる卸電力市場の基本を解説します。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "価格変動が料金にどう反映されるかを確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "価格水準と変動性のバランスで比較できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "価格上昇要因を全体構造で整理した解説です。",
            },
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "燃料価格が料金に波及する背景を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニューを比較する",
              description: "価格と変動幅の観点で自社条件を比較できます。",
            },
          ]}
        />

        <ContentCta
          heading="契約比較に進む"
          description="価格の動きを理解したら、自社の許容リスクに合わせて市場連動型と固定型を比較すると判断しやすくなります。"
          links={[
            { href: "/market-linked-vs-fixed", label: "市場連動と固定の違いを見る" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
