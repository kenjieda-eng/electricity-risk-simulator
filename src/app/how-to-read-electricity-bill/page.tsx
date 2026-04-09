import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気料金の請求書で確認したいポイント｜法人担当者がまず見るべき項目を整理";
const pageDescription =
  "電気料金の請求書で法人担当者が確認したいポイントを解説。契約電力、基本料金、電力量料金、燃料費調整額、再エネ賦課金など、どこを見るべきかを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 請求書 見方 法人",
    "高圧 請求書 見るポイント",
    "電気料金 明細 どこを見る",
    "請求書 確認項目 法人",
    "法人 電気料金 請求書",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-read-electricity-bill",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-read-electricity-bill",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "電気料金の請求書で確認したいポイント",
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

export default function HowToReadElectricityBillPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気料金の請求書で確認したいポイント</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          請求書は毎月届きますが、総額だけを見て終わることも少なくありません。ただ、料金上昇の要因分析や契約見直し判断には、
          内訳を確認することが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人担当者が請求書でまず確認したい項目を、実務で使いやすい順番で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページで分かること</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>請求書で最初に確認したい項目と順番</li>
            <li>総額が上がったときの切り分けフロー</li>
            <li>請求確認を見積比較や契約見直しにどうつなげるか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書はこの順番で確認すると分かりやすい</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力</li>
            <li>基本料金</li>
            <li>電力量料金（使用量）</li>
            <li>燃料費調整額</li>
            <li>再エネ賦課金</li>
            <li>総額と前月・前年同月との差</li>
          </ol>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            先に契約前提と固定費を確認し、その後に使用量連動・調整項目・制度項目を見ると、増減理由を説明しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">項目別に見るときの実務ポイント</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">項目</th>
                  <th className="border border-slate-200 px-3 py-2">何を確認するか</th>
                  <th className="border border-slate-200 px-3 py-2">見直し判断へのつなげ方</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">契約電力</td>
                  <td className="border border-slate-200 px-3 py-2">前月から変化がないか、実態に対して大きすぎないか</td>
                  <td className="border border-slate-200 px-3 py-2">見積比較の前提条件として使う</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2">固定費部分の水準と契約条件変化</td>
                  <td className="border border-slate-200 px-3 py-2">使用量減でも総額が下がらない理由を把握する</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2">使用量増減と単価体系の差</td>
                  <td className="border border-slate-200 px-3 py-2">操業変化や季節要因の影響を整理する</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">燃料費調整額</td>
                  <td className="border border-slate-200 px-3 py-2">前月・前年同月との変化</td>
                  <td className="border border-slate-200 px-3 py-2">使用量以外の上昇要因として切り分ける</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2">制度単価と使用量の掛け合わせ</td>
                  <td className="border border-slate-200 px-3 py-2">燃料費調整額とは別要因として整理する</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">総額が上がったときの確認フロー</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>まず使用量が増えたか確認する</li>
            <li>使用量が大きく変わっていなければ燃料費調整額を見る</li>
            <li>再エネ賦課金の影響を確認する</li>
            <li>基本料金が変わっていないか確認する</li>
            <li>契約条件や契約電力の変化有無を確認する</li>
          </ol>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            例えば「使用量はほぼ同じなのに総額が上がった」場合は、調整項目か契約条件の変化が原因であるケースが多くなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">前月・前年同月と比べて見たいポイント</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">比較項目</th>
                  <th className="border border-slate-200 px-3 py-2">前月比で見たいこと</th>
                  <th className="border border-slate-200 px-3 py-2">前年同月比で見たいこと</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">使用量</td>
                  <td className="border border-slate-200 px-3 py-2">季節要因や操業変化</td>
                  <td className="border border-slate-200 px-3 py-2">例年との差</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2">契約条件の変化</td>
                  <td className="border border-slate-200 px-3 py-2">固定費構造の変化</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">燃料費調整額</td>
                  <td className="border border-slate-200 px-3 py-2">月次変動の大きさ</td>
                  <td className="border border-slate-200 px-3 py-2">市況影響の継続性</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2">影響の有無</td>
                  <td className="border border-slate-200 px-3 py-2">制度単価の違い</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">複数拠点を比べるときの見方</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>総額だけでなく内訳差を見る</li>
            <li>契約電力の違いを確認する</li>
            <li>基本料金比率・使用量比率・調整項目比率を分けて見る</li>
            <li>同じ業態でも使用パターン差がある前提で比較する</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書を見るときの注意点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>総額だけで判断しない</li>
            <li>1か月だけで結論を出さず、複数月で傾向を見る</li>
            <li>使用量要因と制度要因を混同しない</li>
            <li>見積比較の前に現在の請求構造を整理する</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書は総額だけでなく、契約電力、基本料金、使用量、燃料費調整額、再エネ賦課金を分けて確認することが重要です。
            内訳理解を進めると、見直し判断や社内説明を行いやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">こんな方におすすめ</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>初めて請求書を見る担当者</li>
            <li>契約更新前に全体像を確認したい方</li>
            <li>見積比較の前提知識を整理したい方</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">次に読むページ</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>まず全体像を知るなら「法人向け電気料金の内訳とは」</li>
            <li>基本料金との関係を見るなら「契約電力とは」</li>
            <li>ピーク使用を見るなら「デマンドとは」</li>
            <li>見積比較に進むなら「法人向け電気料金見積書の見方」</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="請求書確認を、要因分析と比較判断につなげるための関連ページです。"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "料金全体の構造を先に俯瞰できます。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "基本料金の前提となる概念を確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "単価変動要因を個別に理解できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度要因の見方を整理できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "請求確認結果を見直し判断につなげる視点を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="請求確認を比較判断へつなげる"
          description="請求書で増減要因を切り分けた後に比較へ進むと、条件差を実務的に判断しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
