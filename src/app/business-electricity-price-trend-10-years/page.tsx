import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人向け電気料金の推移を10年で見る｜高止まりと値上げの流れを解説";
const pageDescription =
  "法人向け電気料金の推移を10年単位で見ながら、値上げの流れや高止まりの背景を解説します。急騰後も元に戻りにくい理由や、補助金・制度要因の見え方も整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 推移 10年",
    "電気代 値上げ 推移",
    "法人向け電気料金 高止まり",
    "電気料金 いつから高くなった",
    "法人 電気料金 長期推移",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-price-trend-10-years",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-price-trend-10-years",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "法人向け電気料金の推移を10年で見る" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function BusinessElectricityPriceTrend10YearsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電気料金の推移を10年で見る</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金を10年単位で確認すると、一時的な値上がりではなく、複数回の上昇局面と高止まりが見えてきます。直近の上下だけでは判断しにくい
          背景を、時系列で切り分けて見ることが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページは、カテゴリ内の俯瞰ページとして、上昇局面、高止まり、補助政策の見え方、契約区分差をまとめて整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人向け電気料金の推移を10年で見る意味</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単月や前年比だけでは、急騰なのか、構造的な高止まりなのかを見分けにくいことがあります。10年で見ると、どの時期に何が要因だったのかを
            分解しやすくなり、社内説明や予算計画の前提がそろえやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2010年代後半から2020年代にかけて何が変わったか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2010年代後半は比較的安定した時期が続いた一方、2020年代は燃料価格、為替、需給環境、制度要因が重なり、料金変動の振れ幅が大きくなりました。
            とくに法人向け電気料金では、調整項目の影響が総額へ反映されやすい点を押さえる必要があります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 px-3 py-2 text-left">時期</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">見えやすい特徴</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">確認したい論点</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">2016年-2019年</td>
                  <td className="border border-slate-200 px-3 py-2">比較的安定した水準</td>
                  <td className="border border-slate-200 px-3 py-2">基準期としての単価と内訳</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">2020年-2022年</td>
                  <td className="border border-slate-200 px-3 py-2">急騰局面が目立つ</td>
                  <td className="border border-slate-200 px-3 py-2">燃料・市場・為替の重なり</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">2023年以降</td>
                  <td className="border border-slate-200 px-3 py-2">ピーク後も高止まり感が残る</td>
                  <td className="border border-slate-200 px-3 py-2">補助政策と本来水準の切り分け</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">急騰が目立った時期</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            急騰期は、燃料価格上昇と市場価格上振れが同時に起きた局面で目立ちやすくなります。法人向け契約では、調整項目の反映タイミングの差によって、
            実際の変化よりも急激に見えるケースがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">急騰後も高止まりして見える理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            一度上がった料金が完全には元に戻らない背景には、調達環境の変化、契約単価の見直し、調整項目の残存影響が重なる構造があります。詳しくは{" "}
            <Link href="/why-electricity-prices-have-not-returned" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              急騰後も元に戻らない背景
            </Link>
            でも整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金や制度要因をどう見るか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金がある時期は見かけ上の負担が抑えられるため、終了後に本来の水準が表面化しやすくなります。単価改定と補助政策の影響を混同しないよう、
            請求書の内訳を分けて確認することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            補助政策の見え方は{" "}
            <Link href="/impact-of-electricity-subsidy-ending" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              補助金終了の影響
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分によって見え方が違う理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧・高圧・低圧では、単価水準や調整項目の効き方が異なるため、同じニュースでも影響の出方に差が出ます。自社の契約区分に近いデータで見ることが、
            実務では最も再現性の高い確認方法です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">推移を見るときに注意したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>総額だけでなく、使用量・単価・調整項目を分けて見る</li>
            <li>前月比・前年同月比に加えて、複数年比較を行う</li>
            <li>補助政策の有無を分けて、実質水準を確認する</li>
            <li>契約区分の違いを考慮し、単純比較を避ける</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金を10年で見ると、複数回の上昇局面と高止まりの構造が見えてきます。短期の上下だけでなく、単価、契約区分、制度要因を切り分けて確認することが、
            継続的なコスト管理と見直し判断につながります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="長期推移の全体像を確認した後に、高止まり背景と比較実務へ進むための導線です。"
          links={[
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "上昇要因の全体像を構造で確認できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "直近推移を区分別に確認できます。",
            },
            {
              href: "/why-electricity-prices-have-not-returned",
              title: "急騰後も元に戻らないのはなぜか",
              description: "高止まりの背景を整理できます。",
            },
            {
              href: "/impact-of-electricity-subsidy-ending",
              title: "法人向け電気料金の補助金終了で何が変わるか",
              description: "政策要因の見え方を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description: "推移理解を契約比較へつなげられます。",
            },
          ]}
        />

        <ContentCta
          heading="長期推移を前提に比較する"
          description="高止まりを前提に、現行契約と候補条件を同じ前提で比較すると、見直しの優先順位を整理しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/price-trends", label: "推移と高止まりカテゴリを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
