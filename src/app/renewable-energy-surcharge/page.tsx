import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "再エネ賦課金とは｜法人の電気料金への影響と請求書での見方、燃料費調整額との違い";
const pageDescription =
  "再エネ賦課金の仕組みや法人の電気料金への影響を解説。請求書での見方、燃料費調整額との違い、高圧契約でも押さえておきたいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ賦課金 とは",
    "法人 電気料金 制度負担",
    "再エネ賦課金 燃料費調整額 違い",
    "電気料金 請求書 見方",
    "電力契約 見直し ポイント",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/renewable-energy-surcharge",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/renewable-energy-surcharge",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "再エネ賦課金とは",
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

export default function RenewableEnergySurchargePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">再エネ賦課金とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の請求書には、基本料金や電力量料金のほかに再エネ賦課金が記載されます。名称は見たことがあっても、
          仕組みや意味は分かりにくい項目です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人の請求実務で押さえたい範囲に絞って、再エネ賦課金の役割、請求への反映、燃料費調整額との違いを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ賦課金とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は、再生可能エネルギー導入を支える制度の一部として、電気料金に上乗せされる費用です。小売料金の一部として請求されるため、
            多くの法人で請求書上に現れます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約先の電力会社が変わっても、制度項目として理解しておく必要があります。契約比較のときも、単価だけでなくこの項目を含めて確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の電気料金ではどのように反映されるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は使用量に応じて影響が大きくなる項目です。使用量が多い法人ほど負担感を持ちやすく、請求額全体を見るうえで無視できません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単価の問題だけではなく、月間使用量との掛け合わせで金額が決まる点を押さえると、請求増の説明がしやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書ではどこを見ればよいか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金の欄、使用量、他の調整項目を分けて確認すると、請求変動の要因を切り分けやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>再エネ賦課金の記載欄</li>
            <li>月間使用量との関係</li>
            <li>燃料費調整額など他項目との差分</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求額が増えた理由が賦課金によるものか、燃料費調整額によるものか、使用量によるものかを区別することが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額との違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金と燃料費調整額は、どちらも請求額に影響するため混同されがちですが、役割は異なります。
          </p>
          <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[520px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">比較観点</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">再エネ賦課金</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">燃料費調整額</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-slate-200 px-3 py-2">何に基づいて変わるか</td>
                  <td className="border-b border-slate-200 px-3 py-2">制度上の負担項目</td>
                  <td className="border-b border-slate-200 px-3 py-2">発電用燃料価格などの変動</td>
                </tr>
                <tr>
                  <td className="border-b border-slate-200 px-3 py-2">請求額への反映</td>
                  <td className="border-b border-slate-200 px-3 py-2">使用量に応じて反映</td>
                  <td className="border-b border-slate-200 px-3 py-2">調整単価として反映</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">確認ポイント</td>
                  <td className="px-3 py-2">制度要因として理解する</td>
                  <td className="px-3 py-2">燃料市況の影響として把握する</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の詳細は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説
            </Link>{" "}
            で確認できます。同じ調整項目のように一括で見るのではなく、役割を分けて理解することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ賦課金を理解しておく意味</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金を理解しておくと、料金内訳の説明がしやすくなります。値上がり理由の切り分けや契約比較時の誤解防止にもつながります。
            制度要因と契約要因を分けて考えるための基礎として有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が確認しておきたいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量との関係</li>
            <li>請求額に占める割合感</li>
            <li>燃料費調整額との違い</li>
            <li>契約比較時にどこまで含めて見るか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は請求書で目にする重要項目です。使用量が多い法人ほど影響を意識しやすく、燃料費調整額と分けて理解することで判断しやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連する解説ページ"
          intro="賦課金を燃料調整や内訳・上昇幅・長期推移と分けて見ると、請求の説明がしやすくなります。"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "賦課金が請求のどこに位置するかを全体像で確認できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "制度要因を含めた上昇要因の全体像を整理できます。",
            },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人の電気料金はどの程度上がるのか",
              description: "賦課金を含めた上がり幅の見方に進めます。",
            },
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の10年推移",
              description: "制度改定を含む長期の位置づけを確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "賦課金と混同しやすい燃調費の役割を切り分けられます。",
            },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは",
              description: "再エネ賦課金と並ぶ制度要因として、容量拠出金の仕組みと影響を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="実際に比較して確認する"
          description="制度項目を理解したうえで、現行契約と候補条件を同条件で比較すると、見直し判断を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
