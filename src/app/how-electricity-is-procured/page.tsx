import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気はどこから来るのか｜電力会社の仕入れの全体像をわかりやすく解説";
const pageDescription =
  "電力会社はどこから電気を仕入れているのか。自社発電、卸電力市場（JEPX）、相対契約など、法人向け電気料金の背景にある仕入れの全体像をわかりやすく解説します。";
const pageUrl = "https://simulator.eic-jp.org/how-electricity-is-procured";

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
        alt: "電気はどこから来るのか",
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

export default function HowElectricityIsProcuredPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気はどこから来るのか｜電力会社の仕入れの全体像
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向けの電気料金を比較するとき、見積書の単価だけでは背景を読み切れないことがあります。小売電気事業者は、自社発電だけでなく市場や契約を組み合わせて電気を調達しており、その構造が料金メニューの違いにもつながっています。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気は発電所からそのまま届いているわけではない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気は発電所でつくられた後、送配電網を通って需要家に届きます。ただし、小売電気事業者が販売する電気が常に自社発電だけで賄われているわけではありません。実際には、複数の調達手段を使って供給を組み立てています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この前提を押さえると、同じ法人向け契約でも料金の動き方が異なる理由を理解しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力会社はどこから電気を仕入れているのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            代表的な調達手段は、自社発電、卸電力市場（JEPX）、発電事業者との相対契約です。多くの小売会社は、いずれか一つではなく組み合わせで運用します。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">自社発電</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            発電設備を持つ事業者は、自社でつくった電気を販売に回せます。調達基盤としての強みがありますが、需要は季節や時間帯で変わるため、自社発電だけで常に過不足なく対応するのは簡単ではありません。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">卸電力市場（JEPX）</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場調達は、必要な量を機動的に確保しやすい手段です。一方で、需給が引き締まる局面では価格変動の影響を受けやすく、調達コストが短期間で動く可能性もあります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">発電事業者との相対契約</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場を通さず個別契約で調達する方法です。一定期間の条件を見通しやすくできる一方、需要が想定より増えた場合は追加で市場調達が必要になることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ仕入れ方法が複数あるのか</h2>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">安定供給のため</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一つの調達源に偏ると、設備停止や市場急騰などの影響を受けやすくなります。複数手段の併用は、供給の安定化に役立ちます。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">価格変動リスクを分散するため</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格は需給、燃料、天候などで変動します。市場調達と相対契約を組み合わせることで、価格変動の振れをならす設計を取りやすくなります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">需要の変動に対応するため</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            法人需要は操業状況や季節要因で変わります。需要予測と実需にはズレが出るため、安定調達と機動調達の両方を持つことが実務上の前提になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">仕入れ構造の違いが法人の電気料金にも影響する</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け料金は契約電力や使用量だけでなく、調達構造の違いによっても特徴が分かれます。市場連動型は価格変動を反映しやすく、固定型は見通しを重視した設計になりやすい傾向があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力会社の仕入れを知ると、契約メニューの見え方も変わる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較時は、現時点の単価だけでなく「どれくらい変動しうるか」「どの前提で設計された料金か」を見ることが大切です。調達の全体像を押さえると、契約メニューの違いを実務目線で理解しやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="次に読むと、調達構造から市場価格や契約比較まで一連で理解できます。"
          links={[
            {
              href: "/jepx-explained",
              title: "JEPXとは何か｜卸電力市場の仕組み",
              description: "市場調達の基礎として、JEPXの役割と特徴を整理します。",
            },
            {
              href: "/how-electricity-prices-are-determined",
              title: "電気の価格はどう決まるのか",
              description: "需給、燃料、天候など、価格が動く背景を解説します。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格が料金に反映される仕組みと注意点を確認できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "見通しを立てやすい料金設計の考え方を整理します。",
            },
            {
              href: "/compare",
              title: "料金メニューを比較する",
              description: "調達構造の理解を踏まえて、自社条件で比較を進められます。",
            },
          ]}
        />

        <ContentCta
          heading="比較・試算に進む"
          description="背景構造を把握したら、実際の契約比較で自社に合う方向性を確認しやすくなります。"
          links={[
            { href: "/jepx-explained", label: "JEPXの仕組みを詳しく見る" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
