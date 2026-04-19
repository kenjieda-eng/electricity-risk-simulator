import type { Metadata } from "next";
import Link from "next/link";
import { getLatestArticles } from "../lib/articles";
import { WebSiteJsonLd } from "../components/seo/JsonLd";

const pageTitle = "法人電気料金ナビ｜見直し・比較・リスク診断";
const pageDescription =
  "法人・自治体の電力コスト見直しに必要な情報をワンストップで提供。基礎知識・料金シミュレーション・契約メニュー比較・業種別ガイド・専門家への相談まで。一般社団法人エネルギー情報センター運営。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人電気料金",
    "電気代",
    "電気料金シミュレーター",
    "電力契約見直し",
    "市場連動プラン",
    "固定プラン",
    "電気料金リスク",
    "法人向け電気料金",
    "電力コスト 相談",
    "エネルギー情報センター",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人電気料金ナビ",
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

export default function Page() {
  const latestArticles = getLatestArticles(6);

  return (
    <>
      <WebSiteJsonLd
        name="法人電気料金ナビ"
        url="https://simulator.eic-jp.org/"
        description={pageDescription}
      />
      <section className="px-4 pb-6 pt-4 text-slate-800 sm:px-6 sm:pt-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              法人電気料金ナビ
            </h1>
            <p className="mt-1 text-xs font-semibold text-sky-700 sm:text-sm">
              見直し・比較・リスク診断
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-7">
              法人・自治体の電力コスト見直しに必要な情報を、基礎知識から診断・比較・相談までワンストップで提供します。
              一般社団法人エネルギー情報センターが運営する、電力契約の担当者のための専門情報サイトです。
            </p>
          </div>

          {/* ペルソナ別ナビカード（ヒーロー直下） */}
          <section className="mt-6" aria-labelledby="persona-nav">
            <h2 id="persona-nav" className="sr-only">
              目的から選ぶ
            </h2>
            <p className="mb-3 text-sm font-semibold text-slate-700 sm:text-base">
              目的から選ぶ：
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              <Link
                href="/articles/basic"
                className="group flex flex-col rounded-2xl border-2 border-sky-200 bg-sky-50 p-5 transition hover:border-sky-400 hover:bg-sky-100"
              >
                <span className="inline-flex w-fit rounded-full bg-sky-600 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                  STEP 1 ／ 学ぶ
                </span>
                <p className="mt-3 text-base font-bold text-slate-900 sm:text-lg">
                  まずは基礎知識を学びたい
                </p>
                <p className="mt-1.5 text-sm leading-6 text-slate-700">
                  電気料金の仕組み・値上げの理由・契約の種類をゼロから解説します。
                </p>
                <span className="mt-auto pt-3 text-sm font-semibold text-sky-700 group-hover:text-sky-900">
                  基礎記事へ →
                </span>
              </Link>

              <Link
                href="/simulate"
                className="group flex flex-col rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5 transition hover:border-emerald-400 hover:bg-emerald-100"
              >
                <span className="inline-flex w-fit rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                  STEP 2 ／ 診断
                </span>
                <p className="mt-3 text-base font-bold text-slate-900 sm:text-lg">
                  自社の料金リスクを診断したい
                </p>
                <p className="mt-1.5 text-sm leading-6 text-slate-700">
                  条件を入力するだけで、年間コストの上振れリスクと契約メニュー比較を30秒で試算できます。
                </p>
                <span className="mt-auto pt-3 text-sm font-semibold text-emerald-700 group-hover:text-emerald-900">
                  シミュレーターへ →
                </span>
              </Link>

              <Link
                href="/contact"
                className="group flex flex-col rounded-2xl border-2 border-amber-200 bg-amber-50 p-5 transition hover:border-amber-400 hover:bg-amber-100"
              >
                <span className="inline-flex w-fit rounded-full bg-amber-600 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                  STEP 3 ／ 相談
                </span>
                <p className="mt-3 text-base font-bold text-slate-900 sm:text-lg">
                  専門家に相談したい
                </p>
                <p className="mt-1.5 text-sm leading-6 text-slate-700">
                  契約見直し・入札準備・社内説明の進め方まで、エネルギー情報センターのスタッフが対応します。
                </p>
                <span className="mt-auto pt-3 text-sm font-semibold text-amber-700 group-hover:text-amber-900">
                  相談窓口へ →
                </span>
              </Link>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">解説・比較・月次動向の入口</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              試算の前後に、基礎解説や比較診断、月次の単価動向をあわせて確認すると判断材料が揃いやすくなります。
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Link
                href="/articles"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-sky-800 shadow-sm hover:bg-slate-50"
              >
                解説ページ一覧
              </Link>
              <Link
                href="/how-to"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-sky-800 shadow-sm hover:bg-slate-50"
              >
                使い方
              </Link>
              <Link
                href="/compare"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-sky-800 shadow-sm hover:bg-slate-50"
              >
                料金メニュー比較
              </Link>
              <Link
                href="/articles/basic"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 shadow-sm hover:bg-slate-50"
              >
                基礎から知る
              </Link>
              <Link
                href="/articles/price-increase"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 shadow-sm hover:bg-slate-50"
              >
                料金が上がる理由
              </Link>
              <Link
                href="/articles/price-trends"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 shadow-sm hover:bg-slate-50"
              >
                推移と高止まり
              </Link>
              <Link
                href="/articles/risk-scenarios"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 shadow-sm hover:bg-slate-50"
              >
                リスクシナリオ
              </Link>
              <Link
                href="/business-electricity-retrospective"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 shadow-sm hover:bg-slate-50"
              >
                法人電気料金振り返り
              </Link>
            </div>
            <p className="mt-3 text-xs text-slate-500 sm:text-sm">
              代表例:{" "}
              <Link href="/business-electricity-bill-breakdown" className="text-sky-700 underline-offset-2 hover:underline">
                料金の内訳
              </Link>
              ／
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline-offset-2 hover:underline">
                上がる理由
              </Link>
              ／
              <Link href="/when-to-review-electricity-contract" className="text-sky-700 underline-offset-2 hover:underline">
                見直しタイミング
              </Link>
              ／
              <Link href="/business-electricity-price-trend-10-years" className="text-sky-700 underline-offset-2 hover:underline">
                10年推移
              </Link>
              ／
              <Link href="/hidden-electricity-price-increases" className="text-sky-700 underline-offset-2 hover:underline">
                見えない値上げ
              </Link>
            </p>
          </section>

          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">テーマ別にさらに詳しく</h2>
            <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              <Link href="/articles/plan-types" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
                <p className="text-sm font-semibold text-slate-900">契約メニューの違いを知る</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">市場連動・固定・ハイブリッド型など契約タイプごとのリスクと選び方を比較</p>
              </Link>
              <Link href="/articles/review-points" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
                <p className="text-sm font-semibold text-slate-900">見直しポイントを知る</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">契約見直しの進め方と確認すべき書類・条件を整理</p>
              </Link>
              <Link href="/articles/price-trends" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
                <p className="text-sm font-semibold text-slate-900">電気料金の推移と高止まり</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">10年推移・高止まり・国際比較・エリア別差など25本の分析ページ</p>
              </Link>
              <Link href="/articles/for-executives" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
                <p className="text-sm font-semibold text-slate-900">経営層・CFO向け</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">EBITDA影響・取締役会報告・ESG開示など経営視点の判断材料</p>
              </Link>
              <Link href="/capacity-contribution-explained" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
                <p className="text-sm font-semibold text-slate-900">容量拠出金とは</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">2024年度から始まった新たな制度負担の仕組みと影響</p>
              </Link>
              <Link href="/articles/last-resort-supply" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
                <p className="text-sm font-semibold text-slate-900">最終保障供給を知る</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">制度の対象・料金・通常契約との違いと切替の基本</p>
              </Link>
              <Link href="/special/emergency-scenario-analysis/background" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
                <p className="text-sm font-semibold text-slate-900">有事シナリオ分析</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">有事局面で原油価格が動く背景と電気代への波及</p>
              </Link>
              <Link href="/articles/by-industry/commercial" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
                <p className="text-sm font-semibold text-slate-900">業種別ガイド：商業系</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">スーパー・飲食・小売など営業時間と設備負荷の影響</p>
              </Link>
              <Link href="/international-electricity-price-comparison" className="rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-sky-50">
                <p className="text-sm font-semibold text-slate-900">法人電気料金の国際比較</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">主要7カ国の産業用電気料金と日本が高い構造的理由</p>
              </Link>
            </div>
          </div>

          {/* 最近追加されたページ */}
          <section className="mt-6">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">最近追加されたページ</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              新しい解説ページを随時追加しています。
            </p>
            <div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50"
                >
                  <p className="font-semibold text-slate-900">{article.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 line-clamp-2">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </section>

      {/* 最終CTA：2ボタン並列（シミュレーター / 相談） */}
      <section className="mx-auto max-w-[1600px] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-sky-400 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-6 text-center shadow-md sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            次の一歩を選ぶ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
            まず自社の料金リスクを定量化したい方はシミュレーターへ、課題がすでに見えている方は専門家への相談へ。どちらも無料でご利用いただけます。
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/simulate"
              className="inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-sky-700 sm:w-auto sm:text-lg"
            >
              シミュレーターで診断する →
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-amber-600 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-amber-700 sm:w-auto sm:text-lg"
            >
              専門家に相談する →
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">無料・登録不要でご利用いただけます</p>
        </div>
      </section>

      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "法人電気料金ナビ",
            url: "https://simulator.eic-jp.org/",
            description: pageDescription,
            publisher: {
              "@type": "Organization",
              name: "一般社団法人エネルギー情報センター",
              url: "https://eic-jp.org/",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://simulator.eic-jp.org/articles?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "一般社団法人エネルギー情報センター",
            url: "https://eic-jp.org/",
            logo: "https://simulator.eic-jp.org/ogp-default.png",
            sameAs: [],
          }),
        }}
      />
    </>
  );
}
