import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import InfoBox from "../../components/simulator/InfoBox";
import CapacityContributionChartCard from "../../components/capacity-contribution/CapacityContributionCharts";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "容量拠出金を踏まえて法人が確認したいこと｜見積書・契約書・予算策定のポイント";
const pageDescription =
  "容量拠出金に関して法人が見積書・契約書で確認すべきポイントと、予算策定への織り込み方を実務向けに整理します。固定プランと市場連動プランそれぞれの注意点も解説。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "容量拠出金 確認ポイント",
    "容量拠出金 見積書",
    "容量拠出金 契約書",
    "法人 電気料金 予算策定",
    "容量拠出金 固定プラン 市場連動",
    "電力契約 見直し 容量市場",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/capacity-contribution-what-to-check",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/capacity-contribution-what-to-check",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/price-increase", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-increase"],
  },
};

export default function CapacityContributionWhatToCheckPage() {
  return (
    <>
      <ArticleJsonLd
        headline="容量拠出金を踏まえて法人が確認したいこと｜見積書・契約書・予算策定のポイント"
        description="容量拠出金に関して法人が見積書・契約書で確認すべきポイントと、予算策定への織り込み方を実務向けに整理します。固定プランと市場連動プランそれぞれの注意点も解説。"
        url="https://simulator.eic-jp.org/capacity-contribution-what-to-check"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "容量拠出金を踏まえて法人が確認したいこと" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">料金が上がる理由を知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">容量拠出金を踏まえて法人が確認したいこと</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
            容量拠出金の仕組み
          </Link>
          と
          <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
            コスト影響
          </Link>
          を踏まえたうえで、このページでは法人の実務担当者が確認すべき具体的なポイントを整理します。
          見積書・契約書の確認項目、契約タイプ別の注意点、予算策定への織り込み方を解説します。
        </p>
      </header>


      <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-700 sm:text-base">
        📌 容量拠出金の全体像（仕組み・影響額・対策）は{" "}
        <Link href="/what-is-capacity-contribution" className="font-semibold text-sky-700 underline-offset-2 hover:text-sky-900">
          容量拠出金とは｜2026〜2028年度の単価・法人への影響額・対策
        </Link>
        （Pillar A）、制度全体の沿革は{" "}
        <Link href="/capacity-market-timeline" className="font-semibold text-sky-700 underline-offset-2 hover:text-sky-900">
          容量市場の制度変遷と電気料金への影響
        </Link>
        （Pillar B）を参照してください。
      </div>
      <TableOfContents />
      <section className="mt-6 space-y-6">
        {/* 確認の重要度 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">確認すべきポイントの優先度</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金に関する確認は、見積書の記載確認から予算への織り込みまで複数のステップがあります。
            以下のグラフは、実務上の優先度を整理したものです。
          </p>
          <div className="mt-4">
            <CapacityContributionChartCard
              kind="check-priority"
              title="容量拠出金に関する確認ポイントの重要度"
              description="見積書での記載有無と契約単価への含有方法の確認が最優先です。"
            />
          </div>
        </section>

        {/* 見積書で確認したいこと */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書で確認したい3つのポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力会社から見積書を受け取ったとき、容量拠出金について以下の3点を確認します。
            <Link href="/how-to-read-electricity-quote" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人向け電気料金見積書の見方
            </Link>
            も合わせて確認すると、全体像がつかみやすくなります。
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">1</span>
                <h3 className="text-lg font-semibold text-slate-900">容量拠出金の記載があるか</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                見積書に「容量拠出金」「容量市場費用」「容量確保費」などの記載があるかを確認します。
                記載がない場合、電力量料金の単価に含まれている可能性があります。
                その場合は「容量拠出金は単価に含まれていますか？」と直接確認することをお勧めします。
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">2</span>
                <h3 className="text-lg font-semibold text-slate-900">単価に含まれているか、別建てか</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                容量拠出金が電力量料金の単価に含まれている場合と、別項目として上乗せされる場合では、
                見積比較の方法が変わります。A社は単価込み、B社は別建てという状況では、
                見かけの単価だけでは正確な比較ができません。
              </p>
              <InfoBox title="見積比較のポイント">
                <p className="text-sm leading-7 text-slate-700">
                  複数社の見積もりを比較する場合は、容量拠出金の扱いを統一して確認しましょう。
                  「kWhあたり総額（容量拠出金込み）」で横並びにすることで、実質的な比較が可能になります。
                </p>
              </InfoBox>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">3</span>
                <h3 className="text-lg font-semibold text-slate-900">年度改定時の通知・変更条件</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                容量拠出金は年度ごとに金額が変わるため、契約期間中に単価が変更される可能性があります。
                変更の際に事前通知があるか、通知から適用までの猶予期間はどのくらいか、を確認しておくと安心です。
              </p>
            </div>
          </div>
        </section>

        {/* 契約書で確認したいこと */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約書で確認したい条項</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            既存の契約を見直す際、あるいは新規契約を結ぶ際に、容量拠出金に関連する条項を確認します。
            <Link href="/where-to-check-in-electricity-contract" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力契約のどこを確認すべきか
            </Link>
            も参考にしてください。
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-900">確認項目</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">確認内容</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">注意点</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 font-medium">料金改定条項</td>
                  <td className="px-3 py-2">容量拠出金の変動を理由とした単価改定が可能か</td>
                  <td className="px-3 py-2">固定プランでも改定条項がある場合がある</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 font-medium">費用負担条項</td>
                  <td className="px-3 py-2">制度変更に伴う新たな費用負担の取り扱い</td>
                  <td className="px-3 py-2">「制度変更に伴う費用は需要家負担」となっていないか</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 font-medium">通知条項</td>
                  <td className="px-3 py-2">料金変更時の事前通知義務と期間</td>
                  <td className="px-3 py-2">通知なしで即時適用になっていないか</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">中途解約条項</td>
                  <td className="px-3 py-2">容量拠出金の大幅増を理由とした解約の可否</td>
                  <td className="px-3 py-2">違約金の有無と金額を確認</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 予算策定への織り込み */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">予算策定にどう織り込むか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金は年度ごとに金額が変動する制度費用です。予算策定では、以下の観点で織り込みを検討します。
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">短期（当年度・翌年度）</h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-7 text-slate-700">
                <li>&#9679; 現在の契約で容量拠出金がどう処理されているか確認</li>
                <li>&#9679; 翌年度のkWhあたり転嫁単価の見込みを把握</li>
                <li>&#9679; 年間使用量 &times; 転嫁単価で概算影響額を試算</li>
                <li>&#9679; 再エネ賦課金・燃調費と合わせた制度負担の合計を把握</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">中期（2〜3年先）</h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-7 text-slate-700">
                <li>&#9679; 容量市場の約定価格の上昇トレンドを前提に幅を持たせる</li>
                <li>&#9679; 契約更新タイミングでの単価交渉に容量拠出金の変動を織り込む</li>
                <li>&#9679; 複数拠点の場合は拠点ごとの契約条件の差を確認</li>
                <li>&#9679; 省エネ投資やデマンド削減による使用量自体の圧縮も検討</li>
              </ul>
            </div>
          </div>

          <InfoBox title="複数拠点を持つ法人の注意点">
            <p className="text-sm leading-7 text-slate-700">
              複数の拠点で異なる電力会社と契約している場合、容量拠出金の転嫁方法が拠点ごとに異なることがあります。
              <Link href="/review-multi-site-electricity-contracts" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                複数拠点の電力契約見直し
              </Link>
              も参考に、拠点横断で条件を比較することをお勧めします。
            </p>
          </InfoBox>
        </section>

        {/* 容量拠出金が含まれない/見えにくいケース */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">容量拠出金が見えにくいケース</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            すべての請求書で容量拠出金が明示されるわけではありません。以下のケースでは特に注意が必要です。
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">固定単価契約で内包されている場合</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                固定プランでは、容量拠出金が電力量料金の単価に含まれていることが多いです。
                請求書には独立した項目として現れないため、「容量拠出金は払っていない」と誤解されることがあります。
                実際には単価に含まれており、契約更新時に反映される形で負担しています。
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">旧契約で制度導入前の条件のまま据え置かれている場合</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                長期契約の途中で容量市場が導入された場合、契約更新まで旧条件が適用されることがあります。
                その場合、小売電気事業者が容量拠出金を負担しているか、次回更新で大幅な単価上昇として転嫁される可能性があります。
                <Link href="/review-contract-renewal-deadlines" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                  契約更新期限の確認
                </Link>
                を優先して行いましょう。
              </p>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：容量拠出金の確認チェックリスト</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <div className="flex gap-2">
              <span className="shrink-0">&#9744;</span>
              <span>見積書に「容量拠出金」「容量市場費用」の記載があるか確認する</span>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0">&#9744;</span>
              <span>記載がない場合、電力量料金の単価に含まれているかを電力会社に確認する</span>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0">&#9744;</span>
              <span>複数社の見積もりを比較する際は、容量拠出金込みのkWhあたり総額で比較する</span>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0">&#9744;</span>
              <span>契約書の料金改定条項で、容量拠出金変動による改定が可能か確認する</span>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0">&#9744;</span>
              <span>年度ごとの影響額（年間使用量 &times; 転嫁単価）を予算に織り込む</span>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0">&#9744;</span>
              <span>複数拠点がある場合は、拠点ごとの契約条件の差を確認する</span>
            </div>
          </div>
        </section>
      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="capacity-contribution-what-to-check" terms={["容量拠出金", "燃料費調整額", "再エネ賦課金", "市場連動プラン", "固定プラン", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/what-is-capacity-contribution", title: "容量拠出金とは｜2026〜2028年度の単価・法人への影響額・対策（Pillar A）", description: "拠出金の定義・単価表・法人月額試算・4 つの対策をまとめた起点記事。" },
            { href: "/capacity-market-timeline", title: "容量市場の制度変遷と電気料金への影響（Pillar B）", description: "制度沿革・初回オークション・拠出金導入の経緯を時系列で整理。" },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは｜法人の電気料金にどう影響するか",
              description: "容量市場の仕組みと転嫁構造の基本を解説します。",
            },
            {
              href: "/capacity-contribution-cost-impact",
              title: "容量拠出金で電気代はどのくらい上がるのか",
              description: "kWhあたりの影響額を契約区分別に試算します。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積比較で見落としやすい条件や項目を実務向けに確認できます。",
            },
            {
              href: "/where-to-check-in-electricity-contract",
              title: "電力契約のどこを確認すべきか",
              description: "契約書の確認ポイントを体系的に整理しています。",
            },
            {
              href: "/compare-business-electricity-estimates",
              title: "法人の電力見積もりを比較する方法",
              description: "見積比較の進め方と比較時の注意点を解説します。",
            },
            {
              href: "/review-multi-site-electricity-contracts",
              title: "複数拠点の電力契約を見直す",
              description: "拠点横断での比較・見直しの実務ポイントを整理します。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="容量拠出金を含めた料金リスクを確認する"
          description="制度負担の変化を含めた電気料金の上昇リスクを、30秒で診断できます。見直しの判断材料としてご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/articles/review-points", label: "見直しポイントを確認する" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="capacity-contribution-what-to-check" />
      </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
