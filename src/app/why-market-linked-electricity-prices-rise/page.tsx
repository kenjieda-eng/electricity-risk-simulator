import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import { JEPX_MONTHLY_SUMMARY } from "../../data/jepxData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "市場連動プランで電気料金が上がるときの仕組み｜法人向けにわかりやすく解説";
const pageDescription =
  "市場連動プランで法人の電気料金が上がる仕組みを、卸電力市場との関係、需給逼迫、燃料高、夏冬の影響などから解説します。固定プランとの違いや、確認したい注意点も整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "市場連動プラン なぜ上がる",
    "法人 電気料金 卸電力市場",
    "需給逼迫 電気料金 上昇",
    "市場連動 固定 違い",
    "市場連動メニュー 注意点",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/why-market-linked-electricity-prices-rise",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/why-market-linked-electricity-prices-rise",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "市場連動プランで電気料金が上がるときの仕組み" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const LAST_12_MONTHS = JEPX_MONTHLY_SUMMARY.slice(-12);

// months where max >= 35 are flagged as high-spike
const HIGH_MAX_THRESHOLD = 35;

function formatMonth(yyyyMm: string) {
  const [y, m] = yyyyMm.split("-");
  return `${y}年${parseInt(m, 10)}月`;
}

export default function WhyMarketLinkedElectricityPricesRisePage() {
  return (
    <>
      <ArticleJsonLd
        headline="市場連動プランで電気料金が上がるときの仕組み｜法人向けにわかりやすく解説"
        description="市場連動プランで法人の電気料金が上がる仕組みを、卸電力市場との関係、需給逼迫、燃料高、夏冬の影響などから解説します。固定プランとの違いや、確認したい注意点も整理します。"
        url="https://simulator.eic-jp.org/why-market-linked-electricity-prices-rise"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "市場連動プランで電気料金が上がるときの仕組み" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場連動プランで電気料金が上がるのはなぜか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          市場連動プランは、卸電力市場の価格動向と結びついた料金メニューです。そのため、市場価格が上がる局面では法人の電気料金も上がりやすくなります。
          一方で、下落局面ではメリットが出る場合もあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは「市場連動プランとは何か」よりも、「どんなときに、なぜ上がるのか」に焦点を当てて整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランは卸電力市場の動きとつながっている</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランでは、調達コストの一部または多くが市場価格の影響を受けます。そのため、卸電力市場で価格が上昇すると、
            その影響が料金へ反映されやすくなります。契約によって反映ルールは異なりますが、固定型より相場変動の影響を受けやすい点が特徴です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            基本構造の確認は{" "}
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランの解説
            </Link>
            を参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">需給が逼迫すると市場価格が上がりやすい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力は需要と供給のバランスが崩れると、短期間で価格が大きく動くことがあります。猛暑・厳冬、発電設備の停止、需給余力の低下が重なると、
            市場価格は上がりやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランでは、こうした需給逼迫の影響が請求額へ出やすくなる点を理解しておくことが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料価格の上昇も市場価格へ影響する</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            火力発電のコストが上がると、卸電力市場の価格形成にも影響が及びます。LNG、石炭、原油などの燃料価格が上昇する局面では、
            市場価格の上昇圧力も強まりやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            背景要因は{" "}
            <Link href="/lng-electricity-price" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金とLNGの関係
            </Link>
            でも整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">夏季・冬季は価格変動が大きくなりやすい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            夏は冷房需要、冬は暖房需要で電力使用量が増えやすく、需給が締まりやすくなります。その結果、季節要因によって市場価格が
            上がりやすい場面があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            法人の使用パターンによっては、価格が上がりやすい時間帯に多く使っているため、影響が大きく出る場合があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランとの違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランは一定期間の単価が比較的読みやすい一方、市場連動プランは相場の影響を受けやすい特徴があります。
            相場が落ち着いている局面では市場連動型に利点が出ることもありますが、上昇局面では負担が大きくなりやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            判断の比較軸は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの違い
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランで確認したい注意点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>料金の反映ルールと算定の考え方</li>
            <li>調整項目の有無と重複影響</li>
            <li>上限設定の有無</li>
            <li>時間帯別の影響を受ける設計かどうか</li>
            <li>契約更新時の条件見直しルール</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            名称だけで判断せず、見積書や契約条件まで確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が見ておきたい判断ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランを検討する際は、安く見えるかどうかだけでなく、上振れ時にどの程度まで許容できるかを確認する必要があります。
            使用時間帯、季節変動、拠点特性、予算管理のしやすさも判断材料になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求額の全体像を確認する入り口として{" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が上がる理由
            </Link>
            もあわせて参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">直近の月次JEPX推移で見る上昇パターン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランでは、この<Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link>のMAX値に近い単価が一部の時間帯で適用されるため、月平均以上のコスト負担が生じます。
            直近12ヶ月の動向を確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">月</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold">月平均（円/kWh）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold">最高値（円/kWh）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">備考</th>
                </tr>
              </thead>
              <tbody>
                {LAST_12_MONTHS.map((row) => {
                  const isHighMax = row.max >= HIGH_MAX_THRESHOLD;
                  return (
                    <tr key={row.month} className={`align-top ${isHighMax ? "bg-red-50" : ""}`}>
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{formatMonth(row.month)}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{row.avg.toFixed(2)}</td>
                      <td className={`border border-slate-200 px-3 py-2 text-right ${isHighMax ? "font-semibold text-red-700" : ""}`}>
                        {row.max.toFixed(2)}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                        {row.month === "2024-09" && "平均13.96円、最高45.01円 — 猛暑で需要急増"}
                        {row.month === "2025-03" && "最高37.55円 — 年度末需要集中"}
                        {row.month === "2025-07" && "夏季需要増加"}
                        {row.month === "2026-04" && "地政学リスクの影響"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランでは、このMAX値に近い単価が一部の時間帯で適用されるため、月平均以上のコスト負担が生じます。
            特に夏季（7〜9月）・冬季（1〜2月）は変動幅が大きくなりやすい傾向があります。
          </p>
          <p className="mt-1 text-xs text-slate-500">出典: JEPX公表データ（スポット市場システムプライス月次集計）</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランは、卸電力市場の価格上昇が料金へ反映されやすい仕組みです。需給逼迫、燃料高、季節要因などが重なると、
            法人の電気料金も上がりやすくなります。契約内容を確認し、自社の使用パターンとリスク許容度に合うかを見極めることが重要です。
          </p>
        </section>

        
      <MarketDataDownload
        apiPath="/api/datasets/jepx"
        caption="JEPX市場データ（CC BY 4.0、商用利用可）"
      />
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="why-market-linked-electricity-prices-rise" terms={["市場連動プラン", "固定プラン", "JEPX", "市場価格調整額", "燃料費調整額", "再エネ賦課金", "容量拠出金"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="市場連動の上振れ要因を整理した後に、契約比較と要因別解説へつなげる導線です。"
          links={[
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場連動メニューの基本構造を確認できます。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "市場要因が請求額へ反映される項目を整理できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金変動リスクの比較軸を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description: "自社条件で固定型と市場連動型を比較できます。",
            },
          ]}
        />

        <ContentCta
          heading="市場連動の上振れを前提に比較する"
          description="契約比較では、平常時だけでなく上振れ局面を含めて確認すると、実務で使える判断につながります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/plan-types", label: "契約メニューカテゴリを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="why-market-linked-electricity-prices-rise" />
      </div>
    </main>
    </>
  );
}
