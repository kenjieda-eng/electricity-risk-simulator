import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気料金のリスクシナリオとは｜法人が上振れリスクを把握するための基本的な考え方";
const pageDescription =
  "電気料金のリスクシナリオとは何かを、法人向けに分かりやすく解説します。単一の想定だけでは見えにくい電気料金・電気代の上振れリスクを、複数の前提で確認する意味を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/what-is-electricity-price-risk-scenario",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/what-is-electricity-price-risk-scenario",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "電気料金のリスクシナリオとは" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function WhatIsElectricityPriceRiskScenarioPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気料金のリスクシナリオとは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は、一つの前提だけで将来を見通すのが難しい費目です。季節要因、為替、燃料価格、需給、制度変更などで、
          電気代の上振れ方は変わります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、リスクシナリオの基本的な考え方を整理し、要因別の記事を読む前の共通前提をそろえます。カテゴリ全体は{" "}
          <Link href="/articles/risk-scenarios" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
            リスクシナリオ別に知る
          </Link>{" "}
          から確認できます。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクシナリオとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金のリスクシナリオは、将来を断定する予言ではありません。複数の前提を置き、それぞれの条件で電気料金・電気代が
            どのように上振れし得るかを確認するための見方です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単一の見通しだけでは、起こり得る変動幅を過小評価することがあります。シナリオを分けて確認することで、予算と契約検討の前提を
            共有しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ電気料金は一つの想定だけでは見えにくいのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            例えば猛暑や厳冬のような季節要因は、特定時期に需要を押し上げます。一方で円安や地政学リスクは、燃料調達コストや市場価格を
            通じて、一定期間の高止まりに影響する場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            影響時期や継続性が異なるため、一本の想定だけでは、予算策定、見積比較、社内説明での論点が粗くなりやすい点に注意が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人がリスクシナリオで確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>いつ影響が出やすいか（夏季、冬季、通年など）</li>
            <li>どの程度続く可能性があるか（単月か高止まりか）</li>
            <li>市場連動プランと固定プランで影響の受け方がどう違うか</li>
            <li>予算や稟議資料で説明しやすい比較軸になっているか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単価の上下だけでなく、時期・継続性・契約条件を合わせて見ることで、電力契約の見直し判断が実務に落とし込みやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクシナリオは予測ではなく備えのための見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シナリオは「どれが当たるか」を競うためのものではなく、どの前提になっても意思決定の質を落とさないための確認手段です。
            そのため、通常ケースと厳しめケースを併記し、条件差を明示しておく運用が有効です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            結果を断定的に扱わず、見積比較や予算調整の余地を確保するための資料として使うと、社内合意を取りやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">次に確認したい代表的なリスクシナリオ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            入口としては、まず
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            で全体の上限感を把握し、その後に要因別シナリオへ進む流れが分かりやすくなります。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <Link href="/electricity-cost-risk-heatwave" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                猛暑
              </Link>
              ・
              <Link href="/electricity-cost-risk-severe-winter" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                厳冬
              </Link>
              ：季節要因の影響を見る
            </li>
            <li>
              <Link href="/electricity-cost-risk-yen-depreciation" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                円安
              </Link>
              ・
              <Link href="/electricity-cost-risk-geopolitics" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                地政学リスク
              </Link>
              ：通年影響や高止まりを見る
            </li>
            <li>
              <Link href="/electricity-cost-risk-disaster" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                災害
              </Link>
              ：供給制約発生時の影響を見る
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="リスクシナリオの基本を押さえた後に、必要な順序で読み進められる導線です。"
          links={[
            {
              href: "/articles",
              title: "解説ページ一覧",
              description: "全カテゴリから必要なテーマを選んで確認できます。",
            },
            {
              href: "/why-electricity-prices-should-be-viewed-by-scenario",
              title: "電気料金はなぜシナリオ別に見る必要があるのか",
              description: "シナリオ別に確認する実務上の意味を整理しています。",
            },
            {
              href: "/how-to-use-electricity-price-risk-scenarios",
              title: "電気料金のリスクシナリオはどう使い分けるか",
              description: "予算策定・説明資料・見積比較での使い分けを確認できます。",
            },
            {
              href: "/worst-case-electricity-cost-risk",
              title: "ワーストシナリオとは",
              description: "複数要因が重なった場合の上限感を把握できます。",
            },
          ]}
        />

        <ContentCta
          heading="シナリオの土台を確認したら比較に進む"
          description="基本を押さえた後は、比較ページやシミュレーターで自社条件に近いケースを確認すると、契約判断に使いやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
