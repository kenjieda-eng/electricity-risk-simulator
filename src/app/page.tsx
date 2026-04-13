import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLatestArticles } from "../lib/articles";

export const metadata: Metadata = {
  title: "法人向け電気料金上昇、高騰リスクシミュレーター | 電気代・電気料金の上昇リスクを試算",
  description:
    "法人向けに、契約条件や価格上昇・高騰リスク要因をもとに、年間の電気代と電気料金の変動や上昇リスクを試算できるシミュレーターです。基礎知識・料金推移・契約メニュー比較・業種別ガイドも充実。",
  alternates: {
    canonical: "https://simulator.eic-jp.org/",
  },
  openGraph: {
    title: "法人向け電気料金上昇、高騰リスクシミュレーター | 電気代・電気料金の上昇リスクを試算",
    description:
      "法人向けに、契約条件や価格上昇・高騰リスク要因をもとに、年間の電気代と電気料金の変動や上昇リスクを試算できるシミュレーターです。",
    url: "https://simulator.eic-jp.org/",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金上昇、高騰リスクシミュレーター",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "法人向け電気料金上昇、高騰リスクシミュレーター | 電気代・電気料金の上昇リスクを試算",
    description:
      "法人向けに、契約条件や価格上昇・高騰リスク要因をもとに、年間の電気代と電気料金の変動や上昇リスクを試算できるシミュレーターです。",
    images: ["/twitter-default.png"],
  },
};

export default function Page() {
  const latestArticles = getLatestArticles(6);

  return (
    <>
      <section className="px-4 pb-6 pt-4 text-slate-800 sm:px-6 sm:pt-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              法人向け電気料金上昇、高騰リスクシミュレーター
            </h1>
            <p className="mt-2.5 text-sm leading-7 text-slate-700 sm:mt-3 sm:text-base sm:leading-7">
              市場価格や燃料費の変動を踏まえて、企業や自治体を含む法人組織の電気料金上昇・高騰リスクを簡易に確認できる電気料金シミュレーターです。
              月次・年間の電気代と電気料金の両面で、どれだけ負担が増えるかを試算できます。
              固定プランと市場連動型プランの比較を通じて、電力契約の更新や見直し時の検討材料を整理できます。
            </p>
          </div>

          <section className="mt-6">
            <h2 className="flex items-center gap-2.5 text-xl font-semibold text-slate-900">
              <Image
                src="/icons/section-tools.png"
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                className="h-9 w-9 shrink-0"
              />
              このツールでわかること
            </h2>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Image
                    src="/icons/item-impact.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0"
                  />
                  電気料金上昇時の影響イメージ
                </p>
                <p className="mt-0.5 text-sm leading-5 text-slate-600">
                  季節変動やリスク要因を重ねたときに、年間の電気料金がどの程度上振れしうるかを確認できます。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Image
                    src="/icons/item-compare.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0"
                  />
                  固定プランと市場連動の比較
                </p>
                <p className="mt-0.5 text-sm leading-5 text-slate-600">
                  固定プランと市場連動型プランの差分を同じ条件で見比べ、価格変動への強さを把握できます。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Image
                    src="/icons/item-review.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0"
                  />
                  電力契約の見直しポイント
                </p>
                <p className="mt-0.5 text-sm leading-5 text-slate-600">
                  契約更新時に確認したい条件を整理し、新電力を含む候補プラン比較のたたき台として使えます。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Image
                    src="/icons/item-material.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0"
                  />
                  社内検討の説明材料
                </p>
                <p className="mt-0.5 text-sm leading-5 text-slate-600">
                  想定条件ごとの数値差を可視化できるため、担当者間での比較や稟議前の整理に活用できます。
                </p>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="flex items-center gap-2.5 text-xl font-semibold text-slate-900">
              <Image
                src="/icons/section-users.png"
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                className="h-9 w-9 shrink-0"
              />
              どんな利用者に向いているか
            </h2>
            <ul className="mt-3 grid gap-2 text-sm leading-5 text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                <Image
                  src="/icons/list-check.png"
                  alt=""
                  aria-hidden="true"
                  width={22}
                  height={22}
                  className="mt-0.5 h-[22px] w-[22px] shrink-0"
                />
                高圧・特別高圧の電力契約を見直したい企業・自治体・各種法人
              </li>
              <li className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                <Image
                  src="/icons/list-check.png"
                  alt=""
                  aria-hidden="true"
                  width={22}
                  height={22}
                  className="mt-0.5 h-[22px] w-[22px] shrink-0"
                />
                市場連動型プランのリスクを整理し、固定プランとの比較を進めたい担当者
              </li>
              <li className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                <Image
                  src="/icons/list-check.png"
                  alt=""
                  aria-hidden="true"
                  width={22}
                  height={22}
                  className="mt-0.5 h-[22px] w-[22px] shrink-0"
                />
                電気料金の変動幅を確認し、新電力を含む選択肢を検討したい企業や法人
              </li>
              <li className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                <Image
                  src="/icons/list-check.png"
                  alt=""
                  aria-hidden="true"
                  width={22}
                  height={22}
                  className="mt-0.5 h-[22px] w-[22px] shrink-0"
                />
                電気料金上昇リスクを社内・庁内で説明するための下準備をしたい担当者
              </li>
            </ul>
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

      <section className="mx-auto max-w-[1600px] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-sky-400 bg-gradient-to-br from-sky-50 to-white p-6 text-center shadow-md sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            電気料金の上昇リスクを30秒で診断
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
            契約条件やリスク要因を入力するだけで、年間の電気代がどれだけ上振れしうるかを試算できます。固定プランと市場連動型プランの比較も可能です。
          </p>
          <div className="mt-5">
            <Link
              href="/simulate"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-sky-700 sm:text-lg"
            >
              <Image
                src="/icons/nav-risk-check.png"
                alt=""
                aria-hidden="true"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              シミュレーターで診断する
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">無料・登録不要でご利用いただけます</p>
        </div>
      </section>

      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "法人向け電気料金上昇、高騰リスクシミュレーター",
            url: "https://simulator.eic-jp.org/",
            description:
              "法人向けに、契約条件や価格上昇・高騰リスク要因をもとに、年間の電気代と電気料金の変動や上昇リスクを試算できるシミュレーターです。",
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
