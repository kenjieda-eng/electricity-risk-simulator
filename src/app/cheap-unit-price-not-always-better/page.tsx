import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["review-points"];


const pageTitle =
  "なぜ単価が安い提案でも有利とは限らないのか｜落とし穴5パターンと実質コスト比較";
const pageDescription =
  "電力契約で単価が安く見えても有利とは限りません。燃調費上限なし・市場連動・違約金・容量拠出金など5パターンの落とし穴と、固定vs市場連動の月額シミュレーションを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力 単価 安い 落とし穴",
    "法人 電気料金 市場連動",
    "電力契約 違約金",
    "燃料費調整額 上限なし",
    "電力見積 実質コスト",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/cheap-unit-price-not-always-better",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/cheap-unit-price-not-always-better",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const pitfallPatterns = [
  {
    pattern: "燃調費上限なし",
    surfacePrice: "13.5円/kWh",
    costDiff: "+約180万円/年（高騰時）",
    reason: "燃調費が無制限に上乗せされ、高騰期に実質単価が18〜20円超になる場合がある",
  },
  {
    pattern: "市場連動型（JEPX連動）",
    surfacePrice: "14.0円/kWh（標準時）",
    costDiff: "+約120〜300万円/年（市場高騰時）",
    reason: "JEPX価格が急騰すると連動して請求が増加。夏・冬の需給逼迫期に集中しやすい",
  },
  {
    pattern: "基本料金の前提差",
    surfacePrice: "15.0円/kWh",
    costDiff: "+約60万円/年",
    reason:
      "提示単価の前提となる契約電力が実態より低く設定されており、実運用では基本料金が跳ね上がる",
  },
  {
    pattern: "契約期間3年＋違約金",
    surfacePrice: "14.5円/kWh",
    costDiff: "早期解約時に月額費用×3ヶ月分",
    reason:
      "将来の値下がり局面や使用量変化に対して契約変更できず、拘束コストが発生する",
  },
  {
    pattern: "容量拠出金別途請求",
    surfacePrice: "14.8円/kWh",
    costDiff: "+約0.5〜0.8円/kWh相当",
    reason:
      "容量拠出金が単価外で別途請求され、実質単価が15.3〜15.6円/kWh水準になる",
  },
];

const simulationRows = [
  {
    scenario: "JEPX平常時（8〜10円/kWh）",
    fixed: "約800,000円",
    linked: "約770,000円",
    diff: "連動型が▲30,000円",
  },
  {
    scenario: "JEPX上昇時（12〜15円/kWh）",
    fixed: "約800,000円",
    linked: "約900,000円",
    diff: "固定型が▲100,000円",
  },
  {
    scenario: "JEPX高騰時（20円/kWh超）",
    fixed: "約800,000円",
    linked: "約1,100,000円以上",
    diff: "固定型が▲300,000円以上",
  },
];

const checkAxes = [
  "燃料費調整額の上限・下限・計算式を確認する",
  "市場連動型か固定型かを明示させ、連動の場合は変動範囲を試算する",
  "契約電力の前提を自社の実績デマンドに統一する",
  "契約期間・中途解約条件・自動更新の条件を条件欄で確認する",
  "容量拠出金が単価内か別建てかを明記させる",
];

export default function CheapUnitPriceNotAlwaysBetterPage() {
  return (
    <>
      <ArticleJsonLd
        headline="なぜ単価が安い提案でも有利とは限らないのか｜落とし穴5パターンと実質コスト比較"
        description="電力契約で単価が安く見えても有利とは限りません。燃調費上限なし・市場連動・違約金・容量拠出金など5パターンの落とし穴と、固定vs市場連動の月額シミュレーションを解説します。"
        url="https://simulator.eic-jp.org/cheap-unit-price-not-always-better"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "なぜ単価が安い提案でも有利とは限らないのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav aria-label="パンくずナビ" className="mb-4 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-sky-700 underline underline-offset-2">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li>
            <Link
              href="/articles/review-points"
              className="hover:text-sky-700 underline underline-offset-2"
            >
              見直しポイントを知る
            </Link>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li className="text-slate-700">安い単価が有利とは限らない理由</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          なぜ単価が安い提案でも有利とは限らないのか
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          落とし穴5パターンと実質コスト比較
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          見積比較で最も起きやすい判断ミスは「単価が安いほど有利」という前提です。法人向け電力契約では、燃料費調整額の上限・市場連動条件・容量拠出金の含み方・違約金など、単価以外の条件が実質コストを大きく左右します。このページでは具体的な5パターンと月額シミュレーションを使って、単価偏重の判断を避けるための確認軸を整理します。
        </p>
      </header>

      <div className="mt-6 space-y-6">
        {/* セクション1: 落とし穴5パターンテーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            単価が安く見えるケースの落とし穴（5パターン）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            いずれも見積書の表面には出にくく、条件欄を読み込まないと見落としやすいパターンです。月5万kWhの法人を前提としたコスト差の目安を示します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    パターン
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    表面単価
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    実質年間コスト差
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    理由
                  </th>
                </tr>
              </thead>
              <tbody>
                {pitfallPatterns.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.pattern}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.surfacePrice}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">
                      {row.costDiff}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※コスト差は月間使用量5万kWhの試算例。実態は使用量・相場水準により変動します。
          </p>
        </section>

        {/* セクション2: 月額シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            月額シミュレーション：単価16円の固定型 vs 単価14円の市場連動型
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月5万kWhを使用する法人が、固定型（16円/kWh）と市場連動型（14円ベース＋JEPX連動）を比較した場合の月額推移イメージです。JEPX価格の水準によって有利不利が逆転します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    JEPXシナリオ
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-center">
                    固定型（16円/kWh）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-center">
                    市場連動型（14円ベース）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-center">
                    差額（月）
                  </th>
                </tr>
              </thead>
              <tbody>
                {simulationRows.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.scenario}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-slate-800">
                      {row.fixed}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-slate-800">
                      {row.linked}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 text-center font-semibold ${
                        i === 0
                          ? "text-amber-700"
                          : "text-sky-700"
                      }`}
                    >
                      {row.diff}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※電力量料金のみの概算。基本料金・再エネ賦課金・容量拠出金は別途。JEPX価格は季節・需給状況によって大きく変動します。
          </p>
        </section>

        {/* セクション3: 安さだけで選ばないための5軸チェックリスト */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            安さだけで選ばないための5つの確認軸
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積を受け取ったら単価比較の前に以下5軸を確認します。これらが統一されていない状態での単価比較は、根拠のない判断になります。
          </p>
          <ul className="mt-4 space-y-2">
            {checkAxes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-sky-300 bg-white text-xs font-bold text-sky-700">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* セクション4: 社内説明への整理 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            提案を実務的に比較するための考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較では「年間総額」「契約条件の柔軟性」「価格変動リスクの出方」を同時に整理し、説明可能な判断基準を作ります。市場連動型を含む比較では、平常時・高騰時の2ケースを併記することで、決裁者への説明と導入後の認識差を減らせます。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価差の説明だけで社内決裁を進めると、後から条件面の懸念が出て手戻りになりやすいため、5軸を先に統一することが実務上の近道です。
          </p>
        </section>
      </div>

      <div className="mt-6">
        <GlossaryLinks currentSlug="cheap-unit-price-not-always-better" terms={["燃料費調整額", "市場価格調整額", "基本料金", "電力量料金", "市場連動プラン", "固定プラン"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          intro="単価偏重の判断を避けるために、あわせて確認できるページです。"
          links={[
            {
              href: "/compare-business-electricity-estimates",
              title: "法人向け電力見積書の比較で見落としやすい項目",
              description:
                "見積書の7項目チェックリストと3社比較実例を確認できます。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "電力見積書の読み方：各行の意味と確認ポイント",
              description:
                "見積書の各行が何を意味するかを実務目線で整理できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動型と固定型の違いと選び方",
              description:
                "連動型・固定型それぞれのリスク構造と判断基準を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description:
                "整理した判断軸で候補条件を横並びで確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="単価以外の判断軸を整理したら比較へ"
          description="5つの確認軸を手元でそろえたら、比較ページで年間総額と条件差を確認し、使い方ページで社内説明しやすい形に落とし込みます。"
          links={[
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/", label: "シミュレーターで診断する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
