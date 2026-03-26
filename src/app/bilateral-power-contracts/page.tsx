import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "相対契約とは何か｜市場に依存しない電力調達の考え方を解説";
const pageDescription =
  "相対契約とは何か。電力会社が市場だけでなく、発電事業者との契約によって電気を調達する仕組みと、そのメリット・注意点をわかりやすく解説します。";
const pageUrl = "https://simulator.eic-jp.org/bilateral-power-contracts";

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
        alt: "相対契約とは何か",
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

export default function BilateralPowerContractsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          相対契約とは何か｜市場に依存しない仕入れの考え方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          相対契約は、市場を通さず発電事業者などと個別契約で電気を調達する方法です。市場だけに依存しない調達設計を理解すると、法人向け料金メニューの安定性の違いが見えやすくなります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">相対契約とは、発電事業者などとの個別契約</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            相対契約では、価格や供給条件を個別に取り決めて調達します。市場価格が大きく動く局面でも、契約条件次第で影響を受けにくくできる場合があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ相対契約が使われるのか</h2>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">価格の安定性を確保しやすい</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一定期間の条件を見通しやすくできるため、短期の市場変動を直接受けにくい調達設計を取りやすくなります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">市場急騰時の影響を抑えやすい</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            必要量の一部を相対契約で確保していれば、すべてを高い市場価格で調達する状況を避けやすくなります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">調達の見通しを立てやすい</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            小売会社にとっては、どの程度の量をどの条件で確保できるかを把握しやすく、料金設計にも反映しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ただし相対契約だけで完結するわけではない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実需は予測どおりにならないため、不足時は市場調達が必要になります。相対契約は安定調達の柱ですが、単独で完全に運用できるわけではありません。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場調達と相対契約はどう使い分けられるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            相対契約は安定性、市場調達は柔軟性に強みがあります。実務では両者を組み合わせ、価格変動と需給変動の双方に対応する設計が一般的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人向け料金メニューを見るうえでの参考ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較時は「安いか」だけでなく、「どの程度安定しやすいか」も確認することが重要です。調達背景は見積書に直接書かれない場合もありますが、料金メニューの性格に反映されることがあります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="市場調達との違いを押さえると、料金メニュー比較の解像度が上がります。"
          links={[
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "安定性を重視する料金設計の特徴を確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "価格と変動性の観点で契約方式を比較できます。",
            },
            {
              href: "/how-electricity-is-procured",
              title: "電力会社の仕入れの全体像",
              description: "自社発電・市場・相対契約の位置づけを整理します。",
            },
            {
              href: "/power-risk-management",
              title: "分散調達とヘッジの考え方",
              description: "相対契約を含むリスク管理の全体像を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニューを比較する",
              description: "安定性と変動性の観点で自社条件を比較できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較判断へ進む"
          description="相対契約の考え方を踏まえて、固定型・市場連動型の違いを確認すると契約方針を整理しやすくなります。"
          links={[
            { href: "/market-linked-vs-fixed", label: "市場連動と固定を比較する" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
