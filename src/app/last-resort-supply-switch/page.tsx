import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "最終保障供給から切り替えるには 法人が確認したい流れと注意点";
const pageDescription =
  "最終保障供給から通常の法人向け電力契約へ切り替えるときに、確認したい流れ、必要情報、注意点をわかりやすく解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 切り替え",
    "最終保障供給 いつまで",
    "最終保障供給 法人 契約見直し",
    "最終保障供給 高圧 切替",
    "最終保障供給 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-switch",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-switch",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "最終保障供給から切り替えるには",
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

export default function LastResortSupplySwitchPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給から切り替えるには</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は、通常の法人向け電力契約までのつなぎとして考えるのが基本です。切り替え作業は後回しにすると選択肢が狭まりやすいため、
          早めの準備が重要になります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給は次の契約までのつなぎ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            供給継続のために有効な制度ですが、長期運用向きの契約ではありません。契約条件の見通しを安定させるには、
            次の小売契約へ計画的に移行する必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">切り替え前に確認したい情報</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力、受電区分（高圧・特別高圧）</li>
            <li>直近12か月の使用量</li>
            <li>30分値やデマンド情報</li>
            <li>現在の料金条件と請求内訳</li>
            <li>契約満了時期と希望切替時期</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積もり依頼の前に整理したい項目</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積精度を上げるには、単価比較の前に前提条件をそろえることが重要です。使用実績だけでなく、
            契約条件の優先順位（安定性重視か、柔軟性重視か）を社内で整理しておくと判断しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較軸の作り方は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              新電力を比較するときのポイント
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">切り替えで注意したい契約条件</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料費調整額・市場価格調整額の扱い</li>
            <li>契約期間、更新条件、違約金</li>
            <li>供給開始可能日と手続き期限</li>
            <li>請求明細の粒度や運用サポート体制</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            条件確認の観点は{" "}
            <Link href="/electricity-contract-terms" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人向け電力契約で確認したい契約条件
            </Link>{" "}
            も参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">早めに動いたほうがよい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧では供給開始まで調整期間が必要になることがあり、検討開始が遅れるほど切り替え候補が限られます。
            「いつまでに何をするか」を逆算し、社内決裁や庁内手続きも含めた工程を先に置くことが実務上のポイントです。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "切り替え着手の適切な時期を整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "見積比較時の判断軸をそろえられます。",
            },
            {
              href: "/electricity-contract-terms",
              title: "法人向け電力契約で確認したい契約条件",
              description: "契約期間・更新・違約金の確認観点を整理できます。",
            },
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度の位置づけと対象の基本を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="切り替え準備を比較に落とし込む"
          description="必要情報をそろえたら、比較ページとシミュレーターで次契約の候補を具体化できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーターを使う" },
          ]}
        />
      </section>
    </main>
  );
}
