import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方";
const pageDescription =
  "電力会社は価格変動や需給変動のリスクをどう管理しているのか。市場調達、相対契約、分散調達、ヘッジの考え方を、法人向け電気料金の背景としてわかりやすく解説します。";
const pageUrl = "https://simulator.eic-jp.org/power-risk-management";

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
        alt: "電力会社のリスク管理",
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

export default function PowerRiskManagementPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社は、価格変動や需給変動に常に向き合いながら調達を組み立てています。法人向け契約を比較する側も、単価だけでなくリスク管理の考え方を理解しておくと判断しやすくなります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力会社にとって何がリスクになるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            主なリスクは、市場価格の変動、需要予測のずれ、燃料価格や天候要因です。複数要因が同時に動くため、調達方針の設計は料金メニューの性格に直結します。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">市場価格の変動</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場依存度が高いほど、急騰局面の調達コスト影響を受けやすくなります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">需要予測のずれ</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            需要が予測より増えると追加調達が必要になり、減っても調整コストが生じる可能性があります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">燃料価格や天候の変動</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            燃料コストと再エネ出力は外部要因の影響を受けやすく、調達環境を変動させます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ一つの調達方法に依存しないのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            どの手段にも強みと弱みがあるためです。市場調達は柔軟ですが変動が大きく、相対契約は安定しやすい一方で需要変化に完全一致させるのは難しいため、分散が合理的になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">分散調達という考え方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            分散調達は、必ず安くすることより、極端な振れを抑えながら安定供給を維持するための考え方です。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">市場調達</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            不足分へ機動的に対応しやすい反面、急騰局面の影響を受けやすい面があります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">相対契約</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            条件を見通しやすく、急騰時の影響を一部抑えやすい手段です。ただし単独では過不足調整が難しいため、併用が前提になります。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">その他のリスク分散の考え方</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            調達先、期間、契約条件を分散させ、一つの要因に偏りすぎないよう設計する実務が行われます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ヘッジという考え方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ヘッジは、価格を必ず下げるためではなく、極端な変動の影響を抑えるための手段です。コスト最小化だけでなく、振れ幅管理の視点で使われます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">それでもリスクをゼロにはできない理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気は需給調整が必要で、燃料・天候・需要といった外部要因の影響を受けます。現実的なリスク管理は、ゼロ化ではなく大きな上振れを抑える設計に近い考え方です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が契約を比較するときに見るべきポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較時は、単価に加えて変動性、契約条件、見直しタイミングを確認することが重要です。特に使用量が大きい事業所では、料金の安定性が経営管理に与える影響も小さくありません。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="シリーズ全体と既存解説を横断すると、契約比較に必要な視点を整理できます。"
          links={[
            {
              href: "/bilateral-power-contracts",
              title: "相対契約とは何か",
              description: "市場以外の調達手段としての役割を確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "リスク管理の違いが料金メニューにどう現れるかを比較できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "実務で見直し判断を行う際の確認軸を整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "単価以外に確認すべき契約条件やリスクを確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニューを比較する",
              description: "調達背景を踏まえた比較・試算に進めます。",
            },
          ]}
        />

        <ContentCta
          heading="実際の比較へ進む"
          description="調達とリスク管理の考え方を理解したら、自社の予算管理方針に合う契約条件を比較してください。"
          links={[
            { href: "/how-to-compare-electricity-suppliers", label: "比較ポイントを確認する" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
