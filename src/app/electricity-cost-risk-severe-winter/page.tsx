import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "厳冬で法人・企業・自治体の電気料金・電気代はどう上がる？冬の上振れリスクを解説";
const pageDescription =
  "厳冬によって法人・企業・自治体の電気料金・電気代が上がる仕組みを解説。12月〜2月の暖房需要増、市場連動プランと固定プランの違い、冬季コスト上昇への備えを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "厳冬 電気料金 法人",
    "冬 電気代 上振れ",
    "暖房需要 電力コスト",
    "市場連動 固定 比較",
    "電力契約 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-cost-risk-severe-winter",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-cost-risk-severe-winter",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "厳冬リスクの解説",
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

export default function ElectricityCostRiskSevereWinterPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          厳冬で法人・企業・自治体の電気料金・電気代はどう上がるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          冬は夏ほど注目されにくい一方で、暖房需要や供給余力の変化によって電気料金・電気代が上振れしやすい場面があります。
          法人・企業・自治体では、朝夕の需要集中や長時間運用が請求額に影響するケースが見られます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、厳冬リスクの基本構造と、契約メニューごとの見え方、冬前に確認したい実務ポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">厳冬リスクとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            厳冬リスクは、主に12月〜2月の暖房需要増により、電気料金が上振れしやすくなる要因です。特に朝夕は需要が伸びやすく、
            需給バランスが厳しくなることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            夏と同様に、単価の変動と使用量増が重なると、電気代の上振れ幅が大きくなるため、冬季も事前確認が重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ冬に電気料金・電気代が上がりやすいのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            冬季は暖房負荷の増加により使用量が伸びやすくなります。あわせて燃料コストや市場価格の変動が重なると、
            単価面でも上振れが生じる可能性があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            つまり、冬の電気料金上昇は「使った量が増えた」だけでは説明しきれない場合があります。請求書では、使用量、単価、調整項目を分けて確認する視点が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランで違いはあるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            は、冬季の価格変動が請求額に反映されやすい傾向があります。対して、
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            は毎月単価が急変しにくいものの、請求額増や契約更新時の上昇が起こり得ます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            冬季だけでなく年間契約として見ることが重要です。契約タイプの整理は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの違い
            </Link>
            を参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・企業・自治体で影響が出やすい施設</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>寒冷地の事業所や倉庫、物流拠点</li>
            <li>福祉施設、医療系施設、学校、公共施設など暖房需要が高い施設</li>
            <li>稼働時間が長く、朝夕の需要増が顕著な施設</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            施設ごとの使用パターンを把握し、冬季特有の負荷を前提に契約や運用を見直すことが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">冬前に確認したい契約・運用ポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約更新タイミングと更新条件</li>
            <li>月別・時間帯別の使用パターン</li>
            <li>空調・暖房の運用計画</li>
            <li>料金メニューと調整項目の再確認</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            具体的な見直し手順は{" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              電力契約を見直すタイミング
            </Link>
            、背景要因の全体像は{" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が上がる理由
            </Link>
            のページで確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">厳冬リスクをシミュレーターでどう見るか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ベースケースとの比較で冬季要因の影響を把握したうえで、他要因と重ねた場合の変化を確認すると判断しやすくなります。
            最後に{" "}
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            と照合することで、年間の安全幅を検討しやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="冬季の上振れ要因を、契約比較と見直し判断に接続するための関連ページです。"
          links={[
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "価格変動の影響を受けやすい契約の特徴を確認できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "予算見通しを重視する契約の考え方を整理できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "契約タイプ別のリスク差を比較できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "電力契約を見直すタイミング",
              description: "更新前に確認したい実務ポイントを整理できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "冬以外も含む上昇要因の全体像を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="冬季リスクを前提に比較・試算する"
          description="厳冬リスクを把握した後は、契約条件の比較とシミュレーションで、自社・自施設の上振れ幅を具体的に確認できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="electricity-cost-risk-severe-winter" />
      </div>
    </main>
  );
}
