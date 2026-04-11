import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "電気料金のリスクシナリオを比較するときの見方｜影響時期・継続性・上振れの出方の整理";
const pageDescription =
  "電気料金のリスクシナリオを比較するときに確認したいポイントを法人向けに解説します。影響の大きさ、出る時期、継続性、契約メニューとの相性など、比較の軸を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-compare-electricity-price-risk-scenarios",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-compare-electricity-price-risk-scenarios",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "電気料金リスクシナリオの比較軸" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function HowToCompareElectricityPriceRiskScenariosPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気料金のリスクシナリオを比較するときの見方</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          リスクシナリオ比較は「どれが一番怖いか」を決める作業ではなく、比較軸をそろえて意思決定に使える形へ整理する作業です。
          軸がずれると、同じ電気料金上振れでも判断がぶれやすくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          前提整理から始める場合は{" "}
          <Link href="/what-is-electricity-price-risk-scenario" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
            リスクシナリオとは
          </Link>{" "}
          もあわせてご覧ください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まず比べたいのは影響の大きさだけではない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較では、上振れ幅の大小だけを見ると誤解が生まれやすくなります。確認したいのは、影響の大きさ、影響時期、継続性、
            契約メニューとの相性、年間予算への効き方の5点です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            同じ上振れ幅でも「短く大きい上昇」と「長く続く上昇」では、対応策や意思決定者への説明内容が変わります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">影響時期で比べる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/electricity-cost-risk-heatwave" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              猛暑
            </Link>
            や
            <Link href="/electricity-cost-risk-severe-winter" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              厳冬
            </Link>
            は季節性が強く、月次管理でインパクトを捉えやすい要因です。一方、
            <Link href="/electricity-cost-risk-yen-depreciation" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              円安
            </Link>
            と
            <Link href="/electricity-cost-risk-geopolitics" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              地政学リスク
            </Link>
            は、通年での積み上げを意識して比較する必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            月単位の比較表に加え、四半期・年間の比較欄を用意すると、資料の説明力が高まります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単月型か高止まり型かで比べる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単月型は短期ショックとしての対応が中心になり、高止まり型は予算配分や契約戦略の見直しが中心になります。比較時にこの区分を
            分けておくと、対策の優先順位を立てやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            は、単独比較というより、複数要因が重なる上限イメージを持つための基準として使うのが適切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約メニューとの相性で比べる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランは短期変動の影響を受けやすく、固定プランは更新時や調整項目で影響が出ることがあります。どのシナリオで差が
            開きやすいかを比較できると、契約方針の検討が進めやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約メニュー比較は
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動と固定の比較
            </Link>
            と併用すると、シナリオ別の差分が読み取りやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較の軸をそろえると説明資料に使いやすい</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>同じ前提期間で比較する（例: 12か月、四半期）</li>
            <li>同じ指標で比較する（上振れ率、増分コスト、影響月）</li>
            <li>同じ表現で比較する（通常・注意・厳しめ）</li>
            <li>前提条件の変更履歴を残して、説明の再現性を持たせる</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            資料化しやすい比較軸を最初に決めることで、毎回の説明コストを抑えながら判断の質を保ちやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="比較軸の整理と、実際の優先順位付けをつなげるためのページです。"
          links={[
            {
              href: "/how-to-use-electricity-price-risk-scenarios",
              title: "電気料金のリスクシナリオはどう使い分けるか",
              description: "用途ごとの使い方を先に整理できます。",
            },
            {
              href: "/which-electricity-price-risk-scenarios-to-check-first",
              title: "電気料金のリスクシナリオはどれから優先して見るべきか",
              description: "自社条件に応じた確認順序を決められます。",
            },
            {
              href: "/electricity-cost-risk-disaster",
              title: "災害で電気料金・電気代はどう上がるか",
              description: "発生時期を読み切りにくい要因の比較視点を補えます。",
            },
            {
              href: "/articles",
              title: "解説ページ一覧",
              description: "カテゴリ全体から必要なページに戻れます。",
            },
          ]}
        />

        <ContentCta
          heading="比較軸を決めたら条件別に試算する"
          description="比較の見方をそろえた後は、同じ前提条件で複数メニューを試算し、資料化しやすい形で判断材料を整えます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="how-to-compare-electricity-price-risk-scenarios" />
      </div>
    </main>
  );
}
