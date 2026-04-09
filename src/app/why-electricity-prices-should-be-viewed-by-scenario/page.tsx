import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気料金はなぜシナリオ別に見る必要があるのか｜法人の予算策定と説明資料で役立つ考え方";
const pageDescription =
  "法人向けに、電気料金をシナリオ別に確認する必要性を解説します。要因ごとに異なる影響時期や上振れの出方を整理し、予算策定や社内説明で使いやすい見方をそろえます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/why-electricity-prices-should-be-viewed-by-scenario",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/why-electricity-prices-should-be-viewed-by-scenario",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "電気料金をシナリオ別に見る必要性" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function WhyElectricityPricesShouldBeViewedByScenarioPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気料金はなぜシナリオ別に見る必要があるのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金リスクは、単に「上がるかどうか」だけで整理しきれません。どの要因が、いつ、どの程度、どれくらい続くかまで
          把握して初めて、予算策定や契約判断に使える情報になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、なぜシナリオ別の見方が必要なのかを実務目線で整理します。前提となる考え方は{" "}
          <Link href="/what-is-electricity-price-risk-scenario" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
            電気料金のリスクシナリオとは
          </Link>{" "}
          でも確認できます。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金の上振れリスクは要因ごとに出方が違う</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            猛暑と厳冬は季節要因として短期に強く出やすく、円安や地政学リスクは一定期間のコスト高につながることがあります。
            災害は発生時期が読みにくく、需給や供給制約を通じて不連続な影響が出る場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            要因別に出方が異なるため、単一想定で年間を均してしまうと、必要な対策の優先順位が見えにくくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">影響時期が違うと予算の見え方も変わる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            同じ上振れ幅でも、夏の単月で発生する場合と、四半期単位で続く場合では予算への効き方が異なります。月次予算と年間予算の
            どちらに重く効くかを切り分けるには、時期ごとのシナリオが有効です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            部門ごとの使用時期が偏る企業ほど、影響時期を前提にした説明資料を作っておくことで、社内調整が進めやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単月の急騰と高止まりでは意味が違う</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単月の急騰はインパクトが分かりやすく、即時対応が必要になります。一方で高止まりは、毎月の増分が蓄積して年間予算に効きやすく、
            利益計画や自治体の財政運営にじわじわ影響します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            どちらが重いかは企業ごとの資金計画で変わるため、両方のシナリオを分けて確認しておくことが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の説明資料では複数シナリオのほうが使いやすい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            稟議や経営会議では、通常ケースだけではなく、注意ケースや厳しめケースを並べた資料のほうが納得を得やすくなります。
            「前提が変わったらどうなるか」を示せるためです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            価格予測を断定せず、備えとしての幅を示す構成にすることで、過度に不安を煽らない説明がしやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">シナリオ別に見ることで何が判断しやすくなるか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>どの時期の電気料金上振れを優先して管理すべきか</li>
            <li>市場連動プランと固定プランで、どちらが運用しやすいか</li>
            <li>契約更新時の見直し幅をどこまで確保するか</li>
            <li>社内説明で使う比較表の軸をどうそろえるか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            個別シナリオを読む際は、影響の大きさだけでなく、影響時期・継続性・契約メニューとの相性をセットで確認するのが実務的です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="必要性の理解から、使い分け・比較・個別要因の確認へ進む導線です。"
          links={[
            {
              href: "/how-to-use-electricity-price-risk-scenarios",
              title: "電気料金のリスクシナリオはどう使い分けるか",
              description: "予算・稟議・見積比較での使い方を確認できます。",
            },
            {
              href: "/how-to-compare-electricity-price-risk-scenarios",
              title: "電気料金のリスクシナリオを比較するときの見方",
              description: "影響時期や継続性など比較軸を整理できます。",
            },
            {
              href: "/worst-case-electricity-cost-risk",
              title: "ワーストシナリオとは",
              description: "全体の上限感を確認する入口として活用できます。",
            },
            {
              href: "/electricity-cost-risk-heatwave",
              title: "猛暑で電気料金・電気代はどう上がるか",
              description: "季節要因の具体的な見方を確認できます。",
            },
            {
              href: "/electricity-cost-risk-geopolitics",
              title: "地政学リスクで電気料金・電気代はどう上がるか",
              description: "国際要因の高止まりリスクを確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="必要性を確認したら、シナリオ別比較に進む"
          description="複数シナリオで見る意味を押さえた後は、比較ページやシミュレーターで契約条件ごとの差を確認すると判断しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
