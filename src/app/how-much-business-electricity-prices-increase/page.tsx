import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人の電気料金はどのくらい上がるのか｜値上げ幅の見方を解説";
const pageDescription =
  "法人の電気料金がどのくらい上がるのかを、単価改定、燃料費調整額、市場価格調整額、補助金終了などの観点から解説します。請求額の増え方を確認するポイントも整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 値上げ どのくらい",
    "電気料金 値上げ 比較",
    "法人向け電気料金 値上げ幅",
    "燃料費調整額 市場価格調整額",
    "請求額 増え方 見方",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-much-business-electricity-prices-increase",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-much-business-electricity-prices-increase",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "法人の電気料金はどのくらい上がるのか" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function HowMuchBusinessElectricityPricesIncreasePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の電気料金はどのくらい上がるのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金の値上げ幅は一律ではなく、契約条件、使用量、調整項目、補助政策の反映状況で変わります。実務では「なぜ上がるか」だけでなく、
          「どの項目がどれだけ上がったか」を分けて見ることが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、上がり幅の見方に絞って、請求額の増え方を確認するポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の電気料金はどのくらい上がるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            値上げ幅は、単価改定だけでなく、燃料費調整額や市場価格調整額の月次変動で大きく変わります。請求総額で判断すると実態を見誤ることがあるため、
            項目別に増減を確認する必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">上がり幅は何で決まるのか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金・電力量料金の単価改定</li>
            <li>燃料費調整額の変動</li>
            <li>市場価格調整額の変動</li>
            <li>再エネ賦課金など制度項目の増減</li>
            <li>補助政策の縮小・終了</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単価改定による上がり方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価改定は比較的説明しやすく、旧単価と新単価の差に使用量を掛けると増加影響を把握できます。契約更新時に反映されることが多いため、
            反映開始月と契約期間をあわせて確認することが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額や市場価格調整額による上がり方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            調整項目は月ごとの振れが出やすく、同じ使用量でも請求差が大きくなることがあります。仕組みの詳細は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額
            </Link>{" "}
            と{" "}
            <Link href="/market-price-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場価格調整額
            </Link>
            の解説で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金終了で見え方が変わるケース</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金終了時は、実際以上に急に上がったように感じることがあります。単価改定と政策要因を分けて確認すると、値上げ幅の説明が明確になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分や使用量で差が出る理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量が多い法人ほど、1kWhあたりの変動が総額に大きく響きます。また、契約区分や契約方式で調整項目の影響度が異なるため、
            他社事例をそのまま当てはめず自社条件で確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">上がり幅を見るときの注意点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>前月比だけでなく前年同月比・複数年比較も行う</li>
            <li>請求総額の前に、各項目の単価と数量を確認する</li>
            <li>補助政策の反映有無を分けて影響額を試算する</li>
            <li>契約更新による単価改定を別論点として整理する</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金がどのくらい上がるかは、単価改定だけでなく調整項目と制度要因の組み合わせで決まります。値上げ幅を正確に把握するには、
            請求項目ごとの内訳確認を前提にすることが重要です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="値上げ幅の見方を整理した後に、要因ごとの詳細確認と比較実務へ進むための導線です。"
          links={[
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "上昇要因の全体像を確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "調整項目の反映ルールを確認できます。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "市場要因による振れ幅の見方を整理できます。",
            },
            {
              href: "/impact-of-electricity-subsidy-ending",
              title: "法人向け電気料金の補助金終了で何が変わるか",
              description: "政策要因の見え方を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description: "自社条件で差分を比較できます。",
            },
          ]}
        />

        <ContentCta
          heading="上がり幅を比較で可視化する"
          description="請求項目を分解したうえで候補条件を比較すると、どの項目が増減するかを実務的に整理しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/price-increase", label: "料金上昇カテゴリを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
