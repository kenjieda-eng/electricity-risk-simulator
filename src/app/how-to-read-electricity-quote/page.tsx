import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人向け電気料金見積書の見方｜比較時に確認したい項目と注意点";
const pageDescription =
  "法人向け電気料金見積書の見方を解説。基本料金、電力量料金、燃料費調整額、契約条件、リスクの見方など、比較時に確認したいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 見積書 見方 法人",
    "新電力 見積 比較 法人",
    "電力会社 見積書 確認ポイント",
    "法人 電気料金 見積",
    "電力見積 比較 注意点",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-read-electricity-quote",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-read-electricity-quote",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金見積書の見方",
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

export default function HowToReadElectricityQuotePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電気料金見積書の見方</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          見積書を受け取ると、単価だけを見て判断したくなります。ただ、法人の電力契約では料金項目だけでなく契約条件や変動リスクの確認が重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、切り替えや比較を検討する場面で、見積書のどこを確認するかを実務目線で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページで分かること</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>見積書で最初に確認したい項目</li>
            <li>現在契約と同じ前提で比較する方法</li>
            <li>単価が安く見えても有利とは限らない理由</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書と見積書は役割が違う</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>請求書は現在の実績を確認する書類</li>
            <li>見積書は将来の契約条件を比較する書類</li>
            <li>見積書は前提条件がそろっているかの確認が最優先</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書でまず確認したい項目</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">基本料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力が同じ前提か、固定費部分が増えていないか、現在契約と条件差がないかを確認します。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">電力量料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価だけでなく課金方式を確認します。時間帯別単価の有無や条件差がある場合は、実際の使用実態に合うか評価が必要です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">燃料費調整額の扱い</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>見積に含まれている前提か</li>
            <li>別建てで加算されるか</li>
            <li>上限有無や現在契約との差</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">再エネ賦課金の扱い</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積総額に含める表示か別建て表示かで見え方が変わります。現在契約比較で見落とさないことが重要です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">契約期間・更新条件・解約条件</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金条件だけでなく、契約期間、自動更新、中途解約、違約金、切替時期まで確認します。導入後の柔軟性に直結する項目です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較で特に注意したい条件差</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">確認項目</th>
                  <th className="border border-slate-200 px-3 py-2">現在契約</th>
                  <th className="border border-slate-200 px-3 py-2">提案見積</th>
                  <th className="border border-slate-200 px-3 py-2">確認ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">契約電力</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">同じ前提か</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">固定費が増えていないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">単価体系が違わないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">燃料費調整額</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">含む/含まない差はないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">見せ方の差で見落としていないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">契約期間</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">長すぎないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">中途解約条件</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">柔軟性を失わないか</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動型か固定型かも確認したい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価が低く見えても、市場連動型では将来の変動リスクが大きいことがあります。固定型は安定性を見やすい一方、相場下落局面では割高に見える場合もあります。
            予算管理方針やリスク許容度に合わせて判断することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書を見る前に用意したい資料</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            資料の洗い出しは{" "}
            <Link href="/documents-needed-for-electricity-contract-review" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金見直しで集めるべき資料一覧
            </Link>
            で先に整理すると、比較依頼の段階で抜け漏れが減ります。見直しの着手時期は{" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人が電力契約を見直すタイミング
            </Link>
            も参照してください。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>直近数か月の請求書</li>
            <li>契約電力</li>
            <li>使用量推移</li>
            <li>現在の契約条件</li>
            <li>更新時期</li>
            <li>拠点ごとの情報</li>
          </ol>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">安く見える提案で確認したい具体例</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金の前提が違い、固定費が増える</li>
            <li>燃料費調整額の扱いが違い、見積段階で安く見える</li>
            <li>市場連動型で将来の変動リスクを含む</li>
            <li>契約期間が長く中途解約条件が重い</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較を判断につなげる流れ</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現在の請求構造を整理する</li>
            <li>見積書の前提条件をそろえて確認する</li>
            <li>単価だけでなく条件差を確認する</li>
            <li>必要に応じてシミュレーターで固定型・市場連動型の違いを確認する</li>
          </ol>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書は単価だけでなく条件まで見る必要があります。契約電力、燃料費調整額、契約条件を確認し、現在の請求書と並べて判断することが実務上の基本です。
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
            <li>現在の請求を確認するなら「電気料金の請求書で確認したいポイント」</li>
            <li>固定と市場連動の違いを見るなら「市場連動プランと固定プランの違い」</li>
            <li>契約条件を詳しく見るなら「法人向け電力契約で確認したい契約条件」</li>
            <li>比較前提を理解するなら「契約電力とは」</li>
          </ul>
        </section>

        <RelatedLinks
          heading="あわせて読みたい記事"
          intro="見積の前提を、内訳・相場・見直し実務までつなげると比較判断が安定しやすくなります。"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "請求書と見積書を同じ項目軸で読むための全体像です。",
            },
            {
              href: "/business-electricity-price-benchmark",
              title: "法人向け電気料金の相場はどう見るか",
              description: "単価の妥当性を判断するときの相場観のつかみ方です。",
            },
            {
              href: "/documents-needed-for-electricity-contract-review",
              title: "法人の電気料金見直しで集めるべき資料一覧",
              description: "見積比較前にそろえる資料の範囲を整理できます。",
            },
            {
              href: "/5-minimum-checkpoints-for-electricity-contract-review",
              title: "法人の電力契約見直しで最低限確認したい5項目",
              description: "単価以外の条件まで含めた最低限のチェックに進めます。",
            },
            {
              href: "/switching-business-electricity-contract",
              title: "法人が電力契約を切り替えるときの注意点",
              description: "比較後の切替で確認したい期限と請求のズレを整理できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "見積に現れやすい契約タイプ差を比較軸で確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="同じ前提で見積を比較する"
          description="見積書の読み方を押さえたら、比較ページで条件差を整理し、総額と契約条件の両面で判断できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
