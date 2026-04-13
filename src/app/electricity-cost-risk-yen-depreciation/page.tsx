import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "円安で法人・企業・自治体の電気料金・電気代はどう上がる？為替リスクを解説";
const pageDescription =
  "円安が法人・企業・自治体の電気料金・電気代に与える影響を解説。輸入燃料コスト、燃料費調整額、市場価格、固定プランと市場連動プランの違いを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "円安 電気料金 法人",
    "為替リスク 電気代",
    "輸入燃料コスト",
    "燃料費調整額 見積",
    "市場連動 固定 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-cost-risk-yen-depreciation",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-cost-risk-yen-depreciation",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "円安リスクの解説",
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

export default function ElectricityCostRiskYenDepreciationPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">円安リスク</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          円安で法人・企業・自治体の電気料金・電気代はどう上がるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金は国内要因だけで決まるわけではありません。燃料を海外から輸入する日本では、為替の変動が発電コストに波及しやすく、
          法人・企業・自治体の電気代にも影響します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、円安がどのような経路で請求額に反映されるのかを、専門用語に偏りすぎず整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">円安リスクとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            円安リスクは、通年で影響し得る上振れ要因です。円安になると、海外から購入するLNG、石炭、原油などの燃料を円換算したコストが上がります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この変化は発電コストに波及し、結果として法人・企業・自治体の電気料金・電気代に反映されやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ円安で電気料金・電気代が上がるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            輸入燃料コストが上がると、発電コストも上昇しやすくなります。電力契約では、この影響が
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額
            </Link>
            や見積単価に反映されることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            背景の理解には{" "}
            <Link href="/lng-electricity-price" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              LNGと電気料金の関係
            </Link>
            も有効です。為替と燃料価格が重なる局面では、上振れ幅が大きくなる可能性があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランの両方に影響する理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            は短期の価格変動が見えやすい一方、<Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            でも契約更新や調整項目で影響を受けることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「固定だから為替は関係ない」とは言い切れません。契約タイプの違いは{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較ページ
            </Link>
            で確認しつつ、為替影響を前提に判断することが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・企業・自治体が確認したい請求書・見積書のポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金と従量料金の構成</li>
            <li>燃料費調整額の扱い</li>
            <li>市場価格調整額などの調整項目</li>
            <li>契約期間と更新条件</li>
            <li>見積単価の前提条件</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            これらを分けて確認すると、円安局面でどこに影響が出やすいかを把握しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">円安局面で契約を見直すときの考え方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較は単価だけでなく、調整項目を含めた総額で確認することが重要です。短期の安さだけでなく、
            中長期の変動リスクに安全幅を持つ視点が、法人の実務では有効です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較の具体的な進め方は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              新電力を比較するときのポイント
            </Link>
            をご確認ください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">円安リスクをシミュレーターでどう見るか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            円安は通年影響として表れる要因です。単月の増減だけでなく、年間でどの程度の差になるかを確認し、
            他リスク要因と重ねた場合の変化も確認することが有効です。最終的には{" "}
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            で位置づけを確認すると、予算管理に使いやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="為替と燃料要因の理解を、契約比較や見直し実務へつなげるための導線です。"
          links={[
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "輸入燃料と電気料金のつながりを整理できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "請求額に反映される調整項目の基礎を確認できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "価格変動の反映が早い契約の特徴を把握できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "料金安定を重視する契約の考え方を確認できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "見積比較で確認したい実務項目を整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="為替影響を含めて比較・試算する"
          description="円安リスクの構造を理解した後は、比較ページとシミュレーションで自社条件に近い試算を行うと、見直し判断が具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
