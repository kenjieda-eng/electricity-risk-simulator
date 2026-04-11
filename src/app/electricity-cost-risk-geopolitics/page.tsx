import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "地政学リスクで法人・企業・自治体の電気料金・電気代はどう上がる？燃料調達不安を解説";
const pageDescription =
  "中東情勢や国際紛争などの地政学リスクが、法人・企業・自治体の電気料金・電気代にどう影響するかを解説。燃料調達不安、市場価格、円安との重なりも整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "地政学リスク 電気料金",
    "中東情勢 電気代 法人",
    "燃料調達不安 電力",
    "円安 LNG 影響",
    "市場連動 固定 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-cost-risk-geopolitics",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-cost-risk-geopolitics",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "地政学リスクの解説",
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

export default function ElectricityCostRiskGeopoliticsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          地政学リスクで法人・企業・自治体の電気料金・電気代はどう上がるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          中東情勢や国際紛争は遠い話に見えても、日本では燃料輸入や電力市場を通じて電気料金・電気代に波及しやすい要因です。
          法人・企業・自治体の調達実務でも、外部環境として無視しにくいテーマです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、地政学リスクが燃料価格と市場価格にどうつながるかを、契約メニューの違いも含めて整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">地政学リスクとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地政学リスクとは、中東情勢や国際紛争、資源輸出国や輸送ルートの不安定化などにより、エネルギー調達の不確実性が高まる状態を指します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            調達不安が高まると、市場参加者の見通しが慎重になり、燃料価格や電力市場価格の変動が大きくなることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ地政学リスクで電気料金・電気代が上がるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地政学リスクが高まると、燃料そのものの価格が上がりやすくなります。あわせて調達不安が市場の不安定化を招き、
            卸市場価格が上振れしやすくなる場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに円安が重なると、輸入燃料の円換算コストが上がり、法人の電気料金・電気代への影響が強まることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランで見え方はどう違うか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            は、価格変動が早く反映されやすいため、地政学リスクの影響を把握しやすい契約です。一方で、
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            でも中長期では無関係ではなく、契約更新時や再見積で影響が出ることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約方式の違いは{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの違い
            </Link>
            で確認しつつ、単月と年間の両面で判断することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・企業・自治体にとっての実務上の論点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>予算修正時にどこまで変動リスクを見込むか</li>
            <li>契約更新時に価格前提と条件をどう確認するか</li>
            <li>調達先比較で単価以外の項目をどう扱うか</li>
            <li>上司・庁内説明で変動リスクをどう説明するか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単月だけでなく年間視点で確認することで、実務判断の再現性を高めやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">地政学リスクと円安・燃料価格の関係</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地政学リスクは単独で発生するより、為替やLNG価格と重なって影響が拡大することが多い要因です。法人の電気料金上昇は、
            複数の要因が組み合わさって起きるケースを前提に見ておく必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            背景理解には{" "}
            <Link href="/lng-electricity-price" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              LNGページ
            </Link>
            と{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額ページ
            </Link>
            が有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">地政学リスクをシミュレーターでどう見るか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            通年影響としてどの程度差が出るかを確認し、契約メニュー別に見え方を比較することで、判断軸をそろえやすくなります。
            最後に{" "}
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            で他要因と重ねて確認すると、上振れ幅の全体像を把握しやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="地政学リスクの理解を、燃料要因と契約比較の実務へつなげる導線です。"
          links={[
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "燃料市場から請求額への波及経路を確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "調整項目の見方を請求書視点で整理できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "価格変動が反映される契約の特徴を確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "契約方式ごとのリスクの違いを比較できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "複合要因で上がる構造を全体像で確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="複合リスクを前提に比較・試算する"
          description="地政学リスクの構造を確認した後は、比較ページとシミュレーションで契約条件ごとの上振れ影響を具体的に確認できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="electricity-cost-risk-geopolitics" />
      </div>
    </main>
  );
}
