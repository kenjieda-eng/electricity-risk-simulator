import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気料金のリスクシナリオはどれから優先して見るべきか｜法人の契約条件や使用状況に応じた考え方";
const pageDescription =
  "法人が電気料金のリスクシナリオを確認するとき、どれから優先して見るべきかを解説します。契約メニュー、季節変動、使用状況に応じた考え方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/which-electricity-price-risk-scenarios-to-check-first",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/which-electricity-price-risk-scenarios-to-check-first",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "電気料金リスクシナリオの優先順位" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function WhichElectricityPriceRiskScenariosToCheckFirstPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気料金のリスクシナリオはどれから優先して見るべきか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          すべての法人が同じ順番でシナリオを確認する必要はありません。契約条件、使用量の季節差、社内説明の目的によって、
          優先して確認すべきリスクシナリオは変わります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、一般的な確認順を示しつつ、自社条件に合わせた優先順位の決め方を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">すべてのシナリオを同じ重さで見る必要はない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金リスクの確認では、情報量を増やすほど良いとは限りません。関係の薄いシナリオを同じ重みで扱うと、実務上の意思決定が
            かえって遅くなることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            まずは「自社に影響が出やすい要因」へ集中し、次に補助的なシナリオを追加する順序が現実的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まず確認したい基本的なシナリオ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            初期確認では、まず
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            で全体の上限感を把握し、その後に単独要因シナリオへ分解する流れが分かりやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            先に上限を見ておくことで、個別要因を読んだときに「どの要因がどれだけ寄与するか」を整理しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランで先に見たいシナリオ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランでは、需給逼迫や市場変動の影響が出やすいため、
            <Link href="/electricity-cost-risk-heatwave" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              猛暑
            </Link>
            、
            <Link href="/electricity-cost-risk-severe-winter" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              厳冬
            </Link>
            、
            <Link href="/electricity-cost-risk-geopolitics" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              地政学リスク
            </Link>
            を優先して確認する意味が大きくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            これらは単月インパクトと高止まりの両面を持つため、月次と年間の双方で影響を確認しておくと、予算説明の精度が上がります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランでも確認したいシナリオ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランでも、更新時の見積条件、燃料関連コスト、調整項目などを通じて影響が出る場合があります。特に
            <Link href="/electricity-cost-risk-yen-depreciation" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              円安
            </Link>
            、
            <Link href="/electricity-cost-risk-geopolitics" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              地政学リスク
            </Link>
            、
            <Link href="/electricity-cost-risk-disaster" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              災害
            </Link>
            は無視しにくい論点です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「固定だから影響がない」と決めつけず、更新タイミングを含めた中期視点で確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自社の使用状況に合わせて優先順位を変える考え方</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>夏季使用量が大きい企業は猛暑シナリオを優先する</li>
            <li>冬季負荷が高い施設は厳冬シナリオを先に確認する</li>
            <li>稼働率変動が大きい拠点は単月ショック要因を重視する</li>
            <li>長期予算を重視する組織は高止まり要因を厚く見る</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            最終的には一般論よりも、自社の契約条件・使用パターン・社内説明の必要性に合わせて優先順位を決めることが実務的です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="優先順位を決める前提として、比較軸や使い分けもあわせて確認できます。"
          links={[
            {
              href: "/how-to-use-electricity-price-risk-scenarios",
              title: "電気料金のリスクシナリオはどう使い分けるか",
              description: "用途別の使い分けを整理できます。",
            },
            {
              href: "/how-to-compare-electricity-price-risk-scenarios",
              title: "電気料金のリスクシナリオを比較するときの見方",
              description: "優先順位を決めるための比較軸を確認できます。",
            },
            {
              href: "/what-is-electricity-price-risk-scenario",
              title: "電気料金のリスクシナリオとは",
              description: "リスクシナリオの基本概念を確認できます。",
            },
            {
              href: "/articles/risk-scenarios",
              title: "リスクシナリオ別に知る（カテゴリ一覧）",
              description: "カテゴリ7の全記事へアクセスできます。",
            },
          ]}
        />

        <ContentCta
          heading="優先順を決めたら重点シナリオを試算する"
          description="自社に合う優先順位を決めた後は、重点シナリオから順に比較と試算を行うと、判断の抜け漏れを減らせます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
