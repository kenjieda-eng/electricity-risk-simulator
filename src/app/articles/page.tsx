import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "解説ページ一覧 | 法人向け電気料金の基礎知識",
  description:
    "法人向け電気料金の基礎知識をカテゴリ別に整理した解説ページ一覧です。料金の仕組み、上昇要因、契約メニューの違い、見直し時の確認ポイントを順に確認できます。",
  alternates: {
    canonical: "https://simulator.eic-jp.org/articles",
  },
  openGraph: {
    title: "解説ページ一覧 | 法人向け電気料金の基礎知識",
    description:
      "法人向け電気料金の基礎知識をカテゴリ別に整理した解説ページ一覧です。料金の仕組み、上昇要因、契約メニューの違い、見直し時の確認ポイントを順に確認できます。",
    url: "https://simulator.eic-jp.org/articles",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "解説ページ一覧",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "解説ページ一覧 | 法人向け電気料金の基礎知識",
    description:
      "法人向け電気料金の基礎知識をカテゴリ別に整理した解説ページ一覧です。料金の仕組み、上昇要因、契約メニューの違い、見直し時の確認ポイントを順に確認できます。",
    images: ["/twitter-default.png"],
  },
};

type ArticleLink = {
  href: string;
  title: string;
  description: string;
};

type ArticleCategory = {
  id: string;
  title: string;
  description: string;
  articles: ArticleLink[];
};

const categories: ArticleCategory[] = [
  {
    id: "basics",
    title: "1. 基礎から知る",
    description:
      "法人向け電気料金の基本構造や、請求書・見積書を見るうえで押さえたい基礎知識を整理したページです。まず全体像をつかみたい方に向いています。",
    articles: [
      {
        href: "/contract-demand-what-is-it",
        title: "契約電力とは",
        description:
          "契約電力の意味や基本料金との関係、請求書や見積書で確認したいポイントを法人向けに解説します。",
      },
      {
        href: "/demand-charge",
        title: "デマンドとは",
        description:
          "デマンドの意味や契約電力との関係、基本料金にどう影響するのかを法人向けに整理します。",
      },
      {
        href: "/business-electricity-bill-breakdown",
        title: "法人向け電気料金の内訳とは",
        description:
          "基本料金、電力量料金、燃料費調整額、再エネ賦課金など、法人向け電気料金の内訳を整理します。",
      },
      {
        href: "/business-electricity-price-benchmark",
        title: "法人向け電気料金の相場はどう見るか",
        description:
          "法人向け電気料金の相場感をどう見ればよいか、請求書や見積書を比較するときの考え方を整理します。",
      },
      {
        href: "/high-voltage-electricity-pricing",
        title: "高圧電力の料金の見方",
        description:
          "高圧電力の請求書にある基本料金、電力量料金、燃料費調整額などの見方を法人向けに解説します。",
      },
      {
        href: "/extra-high-voltage-electricity-pricing",
        title: "特別高圧電力の料金の見方",
        description:
          "特別高圧電力の料金構造や請求書で確認したいポイント、高圧との違いを法人向けに整理します。",
      },
      {
        href: "/how-to-read-electricity-bill",
        title: "電気料金の請求書で確認したいポイント",
        description:
          "契約電力、基本料金、電力量料金、燃料費調整額など、法人担当者が請求書でまず見るべき項目を整理します。",
      },
      {
        href: "/how-to-read-electricity-quote",
        title: "法人向け電気料金見積書の見方",
        description:
          "見積比較時に確認したい料金項目や契約条件、注意点を法人向けに解説します。",
      },
    ],
  },
  {
    id: "reasons-for-increase",
    title: "2. 料金が上がる理由を知る",
    description:
      "電気料金が変動する背景には、燃料価格、為替、市場価格、制度要因など複数の要素があります。料金上昇の理由を整理して理解したい方に向いています。",
    articles: [
      {
        href: "/why-business-electricity-prices-rise",
        title: "法人の電気料金が上がる理由",
        description:
          "燃料価格、為替、市場価格、制度要因、使用量や契約条件など、法人の電気料金が上がる主な要因を整理します。",
      },
      {
        href: "/fuel-cost-adjustment",
        title: "燃料費調整額（燃調費）とは",
        description:
          "発電用燃料の価格変動が法人の電気料金にどう影響するか、請求書で確認したいポイントとあわせて解説します。",
      },
      {
        href: "/market-price-adjustment",
        title: "市場価格調整額とは",
        description:
          "市場価格調整額の意味や、燃料費調整額・市場連動プランとの違いを法人向けに解説します。",
      },
      {
        href: "/renewable-energy-surcharge",
        title: "再エネ賦課金とは",
        description:
          "再エネ賦課金の仕組み、法人の電気料金への影響、請求書での見方、燃料費調整額との違いを整理します。",
      },
      {
        href: "/lng-electricity-price",
        title: "法人の電気料金とLNGの関係",
        description:
          "なぜ海外のLNG市場が日本の法人向け電気料金に影響するのかを、JEPX・燃料費調整額・契約見直しの観点で整理します。",
      },
    ],
  },
  {
    id: "menu-comparison",
    title: "3. 契約メニューの違いを知る",
    description:
      "法人向け電力契約では、料金が安定しやすいメニューと、市場価格に連動するメニューで特徴が大きく異なります。契約方式の違いを整理して比較したい方に向いています。",
    articles: [
      {
        href: "/market-linked-plan",
        title: "市場連動プランとは",
        description:
          "市場価格に連動して単価が動く仕組み、向いている法人・向きにくい法人、検討時の注意点を整理します。",
      },
      {
        href: "/fixed-price-plan",
        title: "固定プランとは",
        description:
          "電気料金を安定させやすい理由、予算管理との相性、メリットと注意点を法人向けにまとめます。",
      },
      {
        href: "/market-linked-vs-fixed",
        title: "市場連動プランと固定プランの違い",
        description:
          "料金の動き方、予算管理、リスクの出方、向いている法人像を比較し、選び方の軸を確認できます。",
      },
    ],
  },
  {
    id: "review",
    title: "4. 見直しポイントを知る",
    description:
      "実際に契約の見直しや比較検討を進めるときに確認したい視点をまとめたページです。見直しのタイミングや比較の考え方を整理したい方に向いています。",
    articles: [
      {
        href: "/when-to-review-electricity-contract",
        title: "法人が電力契約を見直すタイミング",
        description:
          "電気料金の上昇、契約更新、使用状況の変化など、法人が電力契約を見直すべき場面と確認ポイントを整理します。",
      },
      {
        href: "/how-to-compare-electricity-suppliers",
        title: "新電力を比較するときのポイント",
        description:
          "単価だけでなく、燃料費調整額、市場連動、契約条件、リスクまで含めて法人が比較時に確認したい視点を解説します。",
      },
      {
        href: "/electricity-contract-terms",
        title: "法人向け電力契約で確認したい契約条件",
        description:
          "契約期間、更新条件、違約金、解約時の扱いなど、見直し時に確認したい契約条件を整理します。",
      },
      {
        href: "/why-business-electricity-costs-are-high",
        title: "法人の電気料金が高い会社に共通する特徴",
        description:
          "契約電力、デマンド、調整項目、比較時の見落としなど、電気料金が高くなりやすい特徴を整理します。",
      },
    ],
  },
  {
    id: "last-resort-supply",
    title: "5. 最終保障供給を知る",
    description:
      "最終保障供給とは何か、どんな法人・自治体が対象になるのか、料金が高く見えやすい理由、切り替え時の注意点、自治体の入札不調との関係などを整理したページ群です。高圧・特別高圧の需要家が実務で確認したい論点を順に確認できます。",
    articles: [
      {
        href: "/last-resort-supply",
        title: "最終保障供給とは",
        description:
          "最終保障供給の仕組み、対象になる法人・自治体、通常契約との違い、確認したい基本を整理します。",
      },
      {
        href: "/last-resort-supply-price",
        title: "最終保障供給の料金はなぜ高いのか",
        description:
          "最終保障供給の料金が高く見えやすい理由と、通常契約との違いを法人向けに解説します。",
      },
      {
        href: "/last-resort-supply-target",
        title: "最終保障供給の対象は誰か",
        description:
          "高圧・特別高圧の違い、低圧との違い、自社が対象か確認するときの考え方を整理します。",
      },
      {
        href: "/last-resort-supply-switch",
        title: "最終保障供給から切り替えるには",
        description:
          "最終保障供給から通常の法人向け電力契約へ切り替える流れと注意点を整理します。",
      },
      {
        href: "/municipality-last-resort-supply",
        title: "自治体が最終保障供給になったとき",
        description:
          "入札不調との関係、予算・契約事務への影響、次回調達までの考え方を整理します。",
      },
      {
        href: "/last-resort-vs-retail-contract",
        title: "最終保障供給と通常の電力契約の違い",
        description:
          "料金、契約の考え方、継続前提の違いを比較しながら整理します。",
      },
      {
        href: "/last-resort-supply-high-voltage",
        title: "高圧・特別高圧の法人が最終保障供給で確認したいポイント",
        description:
          "高圧・特別高圧の担当者が、料金・契約・切替で見たい論点を整理します。",
      },
      {
        href: "/last-resort-supply-terms",
        title: "最終保障供給の約款はどう読むか",
        description:
          "約款や料金表のどこを確認すればよいかを、法人担当者向けにわかりやすく整理します。",
      },
    ],
  },
  {
    id: "risk-scenarios",
    title: "6. リスクシナリオ別に知る",
    description:
      "法人・企業・自治体の電気料金・電気代がどんな場面で上がりやすいのかを、シナリオごとに整理した解説ページです。猛暑、厳冬、円安、地政学リスク、災害など、上振れ要因ごとの違いを確認したい方に向いています。",
    articles: [
      {
        href: "/worst-case-electricity-cost-risk",
        title: "ワーストシナリオとは",
        description:
          "猛暑、厳冬、円安、地政学、災害など、主要な上振れ要因を一括で反映した場合に、法人・企業・自治体の電気料金・電気代がどう動きやすいかを解説します。",
      },
      {
        href: "/electricity-cost-risk-heatwave",
        title: "猛暑で電気料金・電気代はどう上がるか",
        description:
          "夏場の需給逼迫や冷房需要の増加によって、法人・企業・自治体の電気料金・電気代がどう上振れしやすいかを整理します。",
      },
      {
        href: "/electricity-cost-risk-severe-winter",
        title: "厳冬で電気料金・電気代はどう上がるか",
        description:
          "冬場の暖房需要増によって、法人・企業・自治体の電気料金・電気代がどう上振れしやすいかを整理します。",
      },
      {
        href: "/electricity-cost-risk-yen-depreciation",
        title: "円安で電気料金・電気代はどう上がるか",
        description:
          "輸入燃料コストの上昇が、法人・企業・自治体の電気料金・電気代にどう影響するかを解説します。",
      },
      {
        href: "/electricity-cost-risk-geopolitics",
        title: "地政学リスクで電気料金・電気代はどう上がるか",
        description:
          "中東情勢や国際紛争などによる燃料調達不安が、法人・企業・自治体の電気料金・電気代にどう波及するかを整理します。",
      },
      {
        href: "/electricity-cost-risk-disaster",
        title: "災害で電気料金・電気代はどう上がるか",
        description:
          "発電所停止や供給力低下によって、法人・企業・自治体の電気料金・電気代がどう上振れしやすいかを解説します。",
      },
    ],
  },
];

export default function ArticlesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">解説ページ一覧</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金の見直しや比較の前に押さえたい基礎知識を、テーマ別に整理した解説ページ一覧です。料金の仕組み、上昇要因、契約メニューの違い、見直し時の確認ポイントを、必要なテーマから確認できます。
        </p>
      </header>

      <div className="mt-8 space-y-10">
        {categories.map((category) => (
          <section key={category.id} className="space-y-4" aria-labelledby={`${category.id}-heading`}>
            <div>
              <h2 id={`${category.id}-heading`} className="text-2xl font-semibold tracking-tight text-slate-900">
                {category.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{category.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {category.articles.map((article) => (
                <article
                  key={article.href}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition hover:bg-slate-50"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    <Link href={article.href} className="underline-offset-2 hover:underline">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{article.description}</p>
                  <Link
                    href={article.href}
                    className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
                  >
                    詳しく見る
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">比較・シミュレーションへ進む</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          必要なテーマを確認した後は、比較ページやシミュレーションで自社条件に近いケースを試算できます。
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/compare"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            料金メニューの違いを比較したい方はこちら
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            電気料金リスクをシミュレーションしたい方はこちら
          </Link>
        </div>
      </section>
    </main>
  );
}
