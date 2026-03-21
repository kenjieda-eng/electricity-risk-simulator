import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人向け電気料金見積書の見方｜比較時に確認したい項目と注意点";
const pageDescription =
  "法人向け電気料金見積書の見方を解説。基本料金、電力量料金、燃料費調整額、契約条件、リスクの見方など、比較時に確認したいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 見積書 見方 法人",
    "新電力 見積 比較 法人",
    "電力会社 見積書 確認ポイント",
    "法人 電気料金 見積",
    "電力見積 比較 注意点",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-read-electricity-quote",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-read-electricity-quote",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金見積書の見方",
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

export default function HowToReadElectricityQuotePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電気料金見積書の見方</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          見積書を受け取ると、単価だけを見て判断したくなります。ただ、法人の電力契約では料金項目だけでなく契約条件や変動リスクの確認が重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、切り替えや比較を検討する場面で、見積書のどこを確認するかを実務目線で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書でまず確認したい項目</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">基本料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力との関係を確認し、現在契約と同じ前提で算出されているかを見ます。前提が異なると単純比較はできません。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">電力量料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価だけでなく課金方式を確認します。時間帯別単価や条件差がある場合は、実際の使用実態に照らして評価する必要があります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">燃料費調整額の扱い</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>見積に含まれている前提か</li>
            <li>別建てで加算されるか</li>
            <li>変動の考え方はどうか</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">再エネ賦課金の扱い</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書の見せ方によって分かりにくいことがあるため、請求総額比較で見落とさないことが重要です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">契約期間・更新条件・解約条件</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金条件だけでなく、契約期間や自動更新、中途解約条件を確認します。導入後の運用負担や柔軟性に直結する項目です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較で特に注意したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>単価だけで比較しない</li>
            <li>契約電力の前提をそろえる</li>
            <li>現在契約との比較条件をそろえる</li>
            <li>燃料費調整額や市場連動の影響を見落とさない</li>
            <li>安く見える場合でも条件差を確認する</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動型か固定型かも確認したい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型と固定型では、料金の安定性や相場変動時の影響が異なります。自社のリスク許容度と予算管理方針に合うかをあわせて確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書を見る前に用意したい資料</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>直近の請求書</li>
            <li>契約電力</li>
            <li>使用量推移</li>
            <li>現在の契約条件</li>
            <li>更新時期</li>
            <li>拠点ごとの情報</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書をどう判断につなげるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終判断では、総額の決まり方と契約条件をあわせて比較します。すぐ切り替えるか、まず追加診断するかを判断するためにも、
            現在の請求構造と見積条件を同じ前提で照合することが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書は単価だけでなく条件まで見る必要があります。契約電力、燃料費調整額、契約条件を確認し、現在の請求書と並べて判断することが実務上の基本です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="見積比較の前提整理と契約タイプ理解に役立つ関連ページです。"
          links={[
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "見積比較時の判断軸を全体で確認できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "変動型契約の特徴と注意点を整理できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "安定性重視の契約の考え方を確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "契約タイプごとの差分を比較できます。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "見積前提の基礎概念を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "現在請求の確認項目を整理して比較精度を高められます。",
            },
          ]}
        />

        <ContentCta
          heading="同じ前提で見積を比較する"
          description="見積書の読み方を押さえたら、比較ページで条件差を整理し、総額と契約条件の両面で判断できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
