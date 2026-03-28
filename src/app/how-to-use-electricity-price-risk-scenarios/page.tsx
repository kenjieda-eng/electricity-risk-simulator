import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気料金のリスクシナリオはどう使い分けるか｜法人の予算策定・比較検討・社内説明のための見方";
const pageDescription =
  "電気料金のリスクシナリオを、どの場面でどう使い分けるかを法人向けに解説します。予算策定、社内説明、契約見直し、比較検討での使い方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-use-electricity-price-risk-scenarios",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-use-electricity-price-risk-scenarios",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "電気料金のリスクシナリオの使い分け" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function HowToUseElectricityPriceRiskScenariosPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気料金のリスクシナリオはどう使い分けるか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          リスクシナリオは、読むための知識ではなく、判断材料として使ってこそ価値が出ます。法人の実務では、予算策定、社内説明、
          見積比較、契約見直しで使い方を分けることで、電気料金の上振れに備えやすくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          まず基本の整理が必要な場合は{" "}
          <Link href="/what-is-electricity-price-risk-scenario" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
            電気料金のリスクシナリオとは
          </Link>{" "}
          もあわせてご確認ください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">予算策定で使うときの見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            予算策定では、通常ケースだけでなく、やや厳しめケースとワースト寄りケースを持つことで、想定外の上振れに対応しやすくなります。
            上振れ幅の最大値だけでなく、発生時期と継続期間も併記するのが実務的です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年間予算と月次管理の双方に効くよう、単月型シナリオと高止まり型シナリオを分けて管理する運用が有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">社内説明や稟議で使うときの見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            いきなり最悪ケースだけを提示すると、判断が極端に見えやすくなります。通常・注意・厳しめの複数シナリオを並べることで、
            前提の違いと判断理由を説明しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            断定的な予測ではなく「備えの幅」として示すことが、過度に煽らない説明につながります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較や契約見直しで使うときの見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較では、平常時の単価差だけでなく、どのシナリオで差が開きやすいかを見ることが重要です。市場連動プランと固定プランで、
            影響が出るタイミングと項目が異なるためです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約更新時には、更新条件、調整項目、違約金なども含め、シナリオごとの総コストで比較する視点が欠かせません。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ワーストシナリオと単独要因シナリオの使い分け</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            は、複数要因が重なった場合の上限感を把握する用途に向きます。一方で、
            <Link href="/electricity-cost-risk-heatwave" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              猛暑
            </Link>
            や
            <Link href="/electricity-cost-risk-yen-depreciation" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              円安
            </Link>
            などの単独要因シナリオは、「どの要因に弱いか」を把握する用途に向きます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            先に上限感を見てから個別要因に分解すると、対策の優先順位を決めやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使い分けるときに押さえたい注意点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>一つのシナリオだけで結論を断定しない</li>
            <li>前提条件を資料に明記し、社内で共有する</li>
            <li>毎年同じ前提で固定せず、契約や使用実態に合わせて更新する</li>
            <li>比較時は同じ期間・同じ条件で見て差分を評価する</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            使い分けのルールを決めておくと、担当者が変わっても説明の質を維持しやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="使い分けを実務に落とし込むための比較・優先順位・個別要因ページです。"
          links={[
            {
              href: "/why-electricity-prices-should-be-viewed-by-scenario",
              title: "電気料金はなぜシナリオ別に見る必要があるのか",
              description: "シナリオ分解の必要性を前提から確認できます。",
            },
            {
              href: "/how-to-compare-electricity-price-risk-scenarios",
              title: "電気料金のリスクシナリオを比較するときの見方",
              description: "影響時期と継続性をそろえた比較軸を整理できます。",
            },
            {
              href: "/which-electricity-price-risk-scenarios-to-check-first",
              title: "電気料金のリスクシナリオはどれから優先して見るべきか",
              description: "契約条件と使用状況に応じた順序を確認できます。",
            },
            {
              href: "/electricity-cost-risk-disaster",
              title: "災害で電気料金・電気代はどう上がるか",
              description: "発生時期が読みづらい要因の見方を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="使い分けの設計を比較表に反映する"
          description="使い分け方を整理したら、比較ページやシミュレーターで同条件の比較表を作成し、実務判断につなげます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
