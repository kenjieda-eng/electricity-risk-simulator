import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";
import {
  HISTORICAL_EXPLANATION_ALL_LINKS,
  HISTORICAL_EXPLANATION_ITEMS,
  HUB_SERIES_POINTS,
  MONTHLY_RETROSPECTIVE_ITEMS,
  UKRAINE_SHOCK_FEATURE_ITEMS,
} from "./_lib/hub-data";

const pageTitle = "法人電気料金振り返り｜月次動向・年次推移を実務視点で確認";
const pageDescription =
  "法人向け電気料金の月次動向と年次推移を、補助政策と新電力ネットのデータをもとに整理した解説ページです。低圧・高圧・特別高圧ごとの違いや、予算・契約見直しに役立つ見方を確認できます。";
const canonicalUrl = "https://simulator.eic-jp.org/business-electricity-retrospective";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人 電気料金 振り返り", "電気代 推移 法人", "特別高圧 高圧 低圧 推移", "法人 電力コスト 月次", "電気料金 年次推移"],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人電気料金振り返り",
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

export default function BusinessElectricityRetrospectivePage() {
  const historicalExplanationItemsForHub = HISTORICAL_EXPLANATION_ITEMS.slice(0, 2);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人電気料金振り返り" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人電気料金振り返り</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          月次の法人向け電気料金動向を、補助政策と当社団が運営している「新電力ネット」の推移データをもとに整理するコンテンツです。
          「なぜ下がったのか・上がったのか」「契約区分ごとに意味がどう違うか」を、実務視点で確認できます。
        </p>
        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-4 sm:p-5">
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">このシリーズで確認できること</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {HUB_SERIES_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </header>

      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">どこから読むか迷ったら</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-sky-800">直近の動向を知りたい</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">最新の月次レポートから確認できます</p>
            <Link href="/business-electricity-retrospective/2026-02" className="mt-2 inline-block text-sm font-medium text-sky-700 underline">2026年2月の振り返り →</Link>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-sky-800">長期トレンドを把握したい</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">7年間の推移を区分別に確認できます</p>
            <Link href="/business-electricity-retrospective/high-voltage-2019-2025" className="mt-2 inline-block text-sm font-medium text-sky-700 underline">高圧の7年推移 →</Link>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-sky-800">危機の教訓を確認したい</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">ウクライナショックの影響を総括</p>
            <Link href="/business-electricity-retrospective/ukraine-shock-overview" className="mt-2 inline-block text-sm font-medium text-sky-700 underline">ウクライナショック特集 →</Link>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">年次データから背景理解へつなげる</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          特定年度・契約区分の単価推移を見たあと、長期の位置づけや上昇要因の解説へ進むと、単月・単年の印象だけで判断するリスクを下げられます。
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">
              <Link href="/business-electricity-retrospective/2025-low-voltage-lighting" className="underline-offset-2 hover:underline">
                【2025年】低圧電灯の電気料金を振り返る
              </Link>
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              店舗・小規模拠点で多い区分の年間推移を、月次と前後年比較まで一画面で確認できます。
            </p>
          </article>
          <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">
              <Link href="/business-electricity-retrospective/2024-low-voltage-power" className="underline-offset-2 hover:underline">
                【2024年】低圧電力の電気料金を振り返る
              </Link>
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              動力用途の低圧区分で、補助や市場の影響を年単位で位置づけたいときの参照先です。
            </p>
          </article>
          <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">
              <Link href="/business-electricity-retrospective/2020-extra-high-voltage" className="underline-offset-2 hover:underline">
                【2020年】特別高圧の電気料金を振り返る
              </Link>
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              急変期前後の大口需要家区分を、年平均・高値安値の観点で確認できます。
            </p>
          </article>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/business-electricity-price-trend-10-years"
            className="inline-flex rounded-md border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-900 hover:bg-sky-100"
          >
            10年単位の推移で全体像を見る
          </Link>
          <Link
            href="/why-business-electricity-prices-rise"
            className="inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            法人の電気料金が上がる理由を整理する
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">最新の月次振り返り</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {MONTHLY_RETROSPECTIVE_ITEMS.map((item) => (
            <article key={item.href} className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                <Link href={item.href} className="underline-offset-2 hover:underline">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline">
                {item.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs leading-6 text-slate-500 sm:text-sm">
          今後の月次記事もこのセクションに追加していく想定です。
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">検証特集：ウクライナショックと法人電気料金</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2022年のウクライナ危機が法人電気料金に与えた影響を、起点・波及・実務対応の流れで整理した特集です。
          2026年3月のホルムズ海峡封鎖を踏まえ、過去のショックを今どう読み直すかも扱います。
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {UKRAINE_SHOCK_FEATURE_ITEMS.map((item) => (
            <article
              key={`all-ukraine-${item.href}`}
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex items-start gap-3">
                {item.iconSrc ? (
                  <Image
                    src={item.iconSrc}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0"
                  />
                ) : (
                  <div className="h-10 w-10 shrink-0" aria-hidden="true" />
                )}
                <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                  <Link href={item.href} className="underline-offset-2 hover:underline">
                    {item.title}
                  </Link>
                </h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              <Link
                href={item.href}
                className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
              >
                {item.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">区分別の通史解説（2019年〜2025年）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2019年から2025年の推移を契約区分別に確認できる解説です。
          コロナ禍、燃料高騰、ウクライナ危機、補助政策の影響を通史で整理しています。
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {historicalExplanationItemsForHub.map((item) => (
            <article key={item.href} className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                <Link href={item.href} className="underline-offset-2 hover:underline">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline">
                {item.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">区分別通史の全ページ</h3>
          <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
            {HISTORICAL_EXPLANATION_ALL_LINKS.map((item) => (
              <li key={`all-history-${item.href}`}>
                <Link href={item.href} className="underline-offset-2 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">年次アーカイブ（2019年〜2025年）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          特別高圧・高圧・低圧電力・低圧電灯の4区分を、年ごとのページで確認できます。
          年別の推移を個別に見たい場合は、アーカイブ一覧から参照してください。
        </p>
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-base font-semibold text-slate-900">年次アーカイブ一覧</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2019年〜2025年の各年ページを一覧で確認できます。
          </p>
          <Link
            href="/business-electricity-retrospective/archive"
            className="mt-3 inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            年次アーカイブ一覧を見る
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">契約区分別の長期推移</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          月次データだけでなく、2019年以降の長期推移を契約区分ごとに確認すると、現在の水準を構造的に位置づけられます。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Link href="/business-electricity-retrospective/special-high-voltage-2019-2025" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">特別高圧の長期推移（2019〜2025）</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">大口需要家区分の年間平均単価の変遷</p>
          </Link>
          <Link href="/business-electricity-retrospective/low-voltage-power-2019-2025" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">低圧電力の長期推移（2019〜2025）</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">動力用途の低圧区分の推移を確認</p>
          </Link>
          <Link href="/business-electricity-retrospective/low-voltage-lighting-2019-2025" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">低圧電灯の長期推移（2019〜2025）</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">店舗・小規模拠点の代表区分の推移</p>
          </Link>
          <Link href="/business-electricity-retrospective/2026-02" className="rounded-lg border border-sky-200 bg-sky-50 p-4 transition hover:bg-sky-100">
            <p className="text-sm font-semibold text-sky-900">【2026年2月】法人の電気料金はどう動いた？</p>
            <p className="mt-1 text-xs leading-6 text-sky-700">最新の月次データで直近の動向を確認</p>
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">ウクライナ危機と電気料金の特集</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2022年の急騰を引き起こしたウクライナ危機の影響を、時系列・区分別・教訓の観点から整理した特集です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <Link href="/business-electricity-retrospective/why-business-electricity-prices-rose-after-ukraine" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">なぜ急騰したのか</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">ウクライナ危機後の料金急騰メカニズム</p>
          </Link>
          <Link href="/business-electricity-retrospective/ukraine-shock-by-voltage-class" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">契約区分別の影響</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">特別高圧・高圧・低圧で異なる急騰の出方</p>
          </Link>
          <Link href="/business-electricity-retrospective/ukraine-shock-and-contract-practice" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">契約実務への影響</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">危機を経て変わった契約の考え方</p>
          </Link>
          <Link href="/business-electricity-retrospective/lessons-from-ukraine-shock-for-2026" className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100">
            <p className="text-sm font-semibold text-slate-900">2026年への教訓</p>
            <p className="mt-1 text-xs leading-6 text-slate-600">急騰経験から学ぶ今後の備え</p>
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}
