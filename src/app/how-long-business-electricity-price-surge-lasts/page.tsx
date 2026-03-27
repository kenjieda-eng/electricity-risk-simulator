import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人の電気料金が高騰するのはいつまで続くのか｜高止まりを見るポイント";
const pageDescription =
  "法人の電気料金高騰がいつまで続くのかを、燃料価格、為替、卸電力市場、補助政策などの観点から解説します。今後の見通しを考えるうえで確認したいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代高騰 いつまで",
    "電気代 値上げ 2026",
    "法人向け電気料金 見通し",
    "電気料金 高止まり いつまで",
    "法人 電力市場 価格動向",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-long-business-electricity-price-surge-lasts",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-long-business-electricity-price-surge-lasts",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "法人の電気料金が高騰するのはいつまで続くのか" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function HowLongBusinessElectricityPriceSurgeLastsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の電気料金が高騰するのはいつまで続くのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「いつまで続くか」を1つの数字で断定することは難しく、法人向け電気料金は複数要因の重なりで決まります。重要なのは、将来予測を当てることよりも、
          高騰が続くかどうかを判断する観点をそろえることです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、見通しを立てるときに確認したい指標と、請求額の見え方が変わる条件を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の電気料金高騰はいつまで続くのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高騰の継続は、燃料価格、為替、需給、契約方式、制度要因が同時に影響します。短期の相場が落ち着いても、別の要因で請求額が高く見えることがあり、
            単一指標で判断しないことが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">すぐ元に戻るとは限らない理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            急騰期のピークを越えても、契約単価の見直しや調整項目の残存影響で、基準期には戻り切らないケースがあります。背景構造は{" "}
            <Link href="/why-electricity-prices-have-not-returned" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              急騰後も元に戻らない理由
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料価格と為替の影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料価格が落ち着いても、為替が円安方向に動くと輸入コストは高止まりしやすくなります。燃料費調整額の反映にはタイムラグがあるため、
            実際の請求変化は遅れて現れることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">卸電力市場の価格動向</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            卸電力市場価格の変動が続くと、市場連動要素を持つ契約では高騰感が残りやすくなります。市場価格の仕組みは{" "}
            <Link href="/lng-electricity-price" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              LNGと電気料金の関係
            </Link>
            や{" "}
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            の解説も参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助政策の影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助政策がある間は負担が抑えられますが、縮小・終了時には本来の水準が見えやすくなります。これにより、調達環境が同じでも高騰が続いているように
            感じる場合があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高騰が長引くときに見られやすい条件</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料価格と為替が同時に不安定な状態が続く</li>
            <li>卸電力市場価格の高止まりや変動幅拡大が続く</li>
            <li>補助政策の縮小・終了と契約更新時期が重なる</li>
            <li>市場連動要素の比率が高い契約を採用している</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が見通しを立てるときの確認ポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>短期相場だけでなく、複数年の推移を確認する</li>
            <li>契約方式ごとのリスク配分を把握する</li>
            <li>補助政策の反映有無を請求書上で切り分ける</li>
            <li>契約更新月と調整項目の変化時期を重ねて確認する</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金高騰がいつまで続くかは断定しにくい一方、判断の軸は整理できます。燃料価格、為替、市場価格、補助政策、契約方式をセットで確認し、
            見通しと見直し判断を分けて進めることが実務では有効です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="見通し判断の軸を整理した後に、推移確認と契約要因の分解へ進むための導線です。"
          links={[
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の推移を10年で見る",
              description: "時系列の全体像を俯瞰できます。",
            },
            {
              href: "/why-electricity-prices-have-not-returned",
              title: "急騰後も元に戻らないのはなぜか",
              description: "高止まり背景の構造を確認できます。",
            },
            {
              href: "/impact-of-electricity-subsidy-ending",
              title: "法人向け電気料金の補助金終了で何が変わるか",
              description: "補助政策要因の見え方を整理できます。",
            },
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "燃料市場と価格連動の前提を確認できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "価格変動が請求へ伝わる契約特性を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="見通しを比較判断につなげる"
          description="高騰継続の可能性を前提に、現行契約と候補条件を比較すると、予算策定と見直し判断を進めやすくなります。"
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
