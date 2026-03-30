import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人向け電気料金の内訳とは｜基本料金・電力量料金・燃調費・再エネ賦課金を整理";
const pageDescription =
  "法人向け電気料金の内訳を解説。基本料金、電力量料金、燃料費調整額、再エネ賦課金など、請求額が何で構成されているかを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人向け 電気料金 内訳",
    "電気料金 内訳 企業",
    "高圧 電気料金 内訳",
    "請求書 電気料金 内訳 法人",
    "電気料金 何で決まる 法人",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-bill-breakdown",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-bill-breakdown",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金の内訳とは",
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

export default function BusinessElectricityBillBreakdownPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電気料金の内訳とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は、単純に使用量だけで決まるわけではありません。請求書には複数の項目が並ぶため、初めて見る担当者には分かりにくいことがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、請求額が何で構成されているかを全体俯瞰で整理します。各項目の詳細確認ページへ進む前提として活用してください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページで分かること</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>請求額を「固定費・使用量連動・調整項目・制度項目」の4つで見る考え方</li>
            <li>請求書や見積書で内訳をどの順番で確認すると切り分けしやすいか</li>
            <li>総額上昇時に見直し判断へつなげるための初期チェックの進め方</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人向け電気料金は「固定費」「使用量連動」「調整項目」「制度項目」に分けて見る
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">項目</th>
                  <th className="border border-slate-200 px-3 py-2">何を表すか</th>
                  <th className="border border-slate-200 px-3 py-2">何で変わるか</th>
                  <th className="border border-slate-200 px-3 py-2">実務での見方</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2">固定的にかかる費用</td>
                  <td className="border border-slate-200 px-3 py-2">契約電力・契約条件</td>
                  <td className="border border-slate-200 px-3 py-2">固定費が高すぎないかを見る</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2">使った分に応じた費用</td>
                  <td className="border border-slate-200 px-3 py-2">使用量・単価</td>
                  <td className="border border-slate-200 px-3 py-2">使用量増減の影響を見る</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">燃料費調整額</td>
                  <td className="border border-slate-200 px-3 py-2">燃料価格などを反映する費用</td>
                  <td className="border border-slate-200 px-3 py-2">燃料市況・制度</td>
                  <td className="border border-slate-200 px-3 py-2">前月比・前年同月比で確認する</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2">制度に基づく費用</td>
                  <td className="border border-slate-200 px-3 py-2">使用量・年度単価</td>
                  <td className="border border-slate-200 px-3 py-2">制度要因として別枠で見る</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求額が上がったときの内訳の見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            例えば「使用量は前年同月とほぼ同じなのに総額が上がった」場合、使用量以外の要因が動いた可能性があります。
            まず燃料費調整額と再エネ賦課金を確認し、次に契約電力や契約条件の変化を確認すると切り分けしやすくなります。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量が増えたか</li>
            <li>基本料金が変わったか</li>
            <li>燃料費調整額が動いたか</li>
            <li>再エネ賦課金の影響が増えたか</li>
            <li>契約条件に変更がないか</li>
          </ol>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある誤解</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>単価だけ見れば十分と考えてしまう</li>
            <li>請求額はすべて使用量で決まると考えてしまう</li>
            <li>燃料費調整額と再エネ賦課金を同じ要因として扱ってしまう</li>
            <li>固定費である基本料金の影響を軽く見てしまう</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書と見積書で内訳を見る順番</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力</li>
            <li>基本料金</li>
            <li>使用量</li>
            <li>燃料費調整額</li>
            <li>再エネ賦課金</li>
            <li>前月・前年同月との差</li>
          </ol>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            この順で確認すると、請求構造を理解したうえで見積比較に進みやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページで扱わないこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            このページは全体像の把握が目的です。契約電力の詳細な算定やデマンドの実務運用は、関連ページで個別に確認してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現在の請求構造を理解しておくと、見積書の単価だけで判断しにくくなり、条件差を正確に比較できます。
            このページは、請求確認と見積比較に進む前の地図として使うのがおすすめです。
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
            <li>基本料金との関係を詳しく見るなら「契約電力とは」</li>
            <li>ピーク使用との関係を見るなら「デマンドとは」</li>
            <li>請求書を確認するなら「電気料金の請求書で確認したいポイント」</li>
            <li>見積比較に進むなら「法人向け電気料金見積書の見方」</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="全体俯瞰の次に、各項目を個別に深掘りするための導線です。"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "月次の変動要因としての燃調費を確認できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度要因としての賦課金を整理できます。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "基本料金と見積比較の前提を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "実際の請求書確認の手順に進めます。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "比較・切り替え検討時の確認軸を整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="現状の料金構造を比較につなげる"
          description="内訳の全体像を押さえたら、現在条件と候補条件を同じ前提で比較して判断する流れが実務的です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
