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
  "補助金終了・縮小の前後で電力契約は見直すべきか｜タイムラインと影響シミュレーション";
const pageDescription =
  "補助金の終了や縮小で電気料金の見え方は変わります。終了6ヶ月前から終了後3ヶ月までのアクションタイムラインと、契約区分別の月額影響シミュレーションを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "補助金終了",
    "電力契約見直し",
    "電気料金補助",
    "補助金縮小",
    "電気代上昇",
    "法人電力",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/should-you-review-around-subsidy-end",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/should-you-review-around-subsidy-end",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

// --- データ ---

const timelineRows = [
  {
    timing: "終了6ヶ月前",
    action: "補助金終了日・終了単価の確認",
    check: "電力会社・政府公表情報で終了スケジュールを把握",
    point: "早期確認で契約見直し準備に十分な時間を確保できる",
  },
  {
    timing: "終了3ヶ月前",
    action: "現契約の単価・更新条件の再確認",
    check: "契約単価・調整費・更新月・違約金の有無",
    point: "補助なしベースの見積比較を開始するタイミング",
  },
  {
    timing: "終了月",
    action: "請求書の内訳変化を確認",
    check: "補助控除額の消失・電力量料金・燃調費の変動幅",
    point: "総額ではなく項目別で変化を把握し政策要因と契約要因を切り分ける",
  },
  {
    timing: "終了後3ヶ月",
    action: "複数月比較で構造変化を判断",
    check: "3ヶ月平均の変動率・デマンド・基本料金の推移",
    point: "季節変動を除いた実態コストを把握し見直し余地を最終判断する",
  },
];

const simulationRows = [
  {
    contractType: "低圧（従量電灯・低圧電力）",
    withSubsidy: "約 68,000円",
    withoutSubsidy: "約 86,000円",
    diff: "+18,000円",
    basis: "月500kWh想定、補助3.5円/kWh",
  },
  {
    contractType: "高圧（業務用・産業用）",
    withSubsidy: "約 1,750,000円",
    withoutSubsidy: "約 2,225,000円",
    diff: "+475,000円",
    basis: "月50,000kWh想定、補助3.5円＋1.8円/kWh段階縮小後",
  },
  {
    contractType: "特別高圧",
    withSubsidy: "約 8,400,000円",
    withoutSubsidy: "約 10,920,000円",
    diff: "+2,520,000円",
    basis: "月240,000kWh想定、補助3.5円/kWh終了",
  },
];

export default function ShouldYouReviewAroundSubsidyEndPage() {
  return (
    <>
      <ArticleJsonLd
        headline="補助金終了・縮小の前後で電力契約は見直すべきか｜タイムラインと影響シミュレーション"
        description="補助金の終了や縮小で電気料金の見え方は変わります。終了6ヶ月前から終了後3ヶ月までのアクションタイムラインと、契約区分別の月額影響シミュレーションを整理します。"
        url="https://simulator.eic-jp.org/should-you-review-around-subsidy-end"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "補助金終了・縮小の前後で電力契約は見直すべきか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav aria-label="パンくずナビ" className="mb-4 flex flex-wrap items-center gap-1 text-xs text-slate-500">
        <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホーム</Link>
        <span>/</span>
        <Link href="/articles/review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">見直しポイントを知る</Link>
        <span>/</span>
        <span className="text-slate-700">補助金終了の前後で見直すべきか</span>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          補助金終了・縮小の前後で電力契約は見直すべきか
        </h1>
        <p className="mt-2 text-xs text-slate-500">タイムラインと月額影響シミュレーション</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          補助金の終了や縮小で電気料金の見え方が急変すると、契約問題と政策要因が混同されやすくなります。
          終了前後の適切なタイミングでアクションを取るには、要因を切り分けて整理することが不可欠です。
          このページでは、終了6ヶ月前から終了後3ヶ月までのアクションタイムラインと、契約区分別の月額影響シミュレーションを解説します。
        </p>
      </header>

      {/* 本文 */}
      <div className="mt-6 space-y-6">

        {/* セクション1 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金終了で電力契約の見直しが話題になりやすい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助がある期間は請求額が抑えられて見えるため、契約条件の差が見えにくくなります。
            補助終了後に急な上昇を感じることで、見直し検討が一気に進むケースが多くなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし、上昇要因が補助縮小によるものなのか、契約条件に問題があるのかを分けないと、
            比較判断の精度が下がります。政策要因と契約要因を切り分けることが、見直し判断の第一歩です。
          </p>
          <ul className="mt-3 space-y-1 pl-4 text-sm text-slate-700 sm:text-base">
            <li className="list-disc">政策要因: 補助対象・補助額・適用期間</li>
            <li className="list-disc">契約要因: 単価体系・調整項目・契約条件</li>
            <li className="list-disc">運用要因: 使用量・デマンド・設備稼働</li>
          </ul>
        </section>

        {/* アクションタイムライン表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金終了前後のアクションタイムライン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金終了の局面ではタイミングを逃すと比較検討の時間が不足します。
            終了6ヶ月前から終了後3ヶ月までの標準的なアクションと確認事項を整理しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">時期</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">アクション</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">確認事項</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {timelineRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900 whitespace-nowrap">{row.timing}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.action}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.check}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600 text-xs sm:text-sm">{row.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">※ 見直し着手から切替完了まで2〜4ヶ月かかることが多いため、終了6ヶ月前の確認開始が推奨されます。</p>
          </div>
        </section>

        {/* 月額影響シミュレーション表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金終了時の月額影響シミュレーション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金終了が月額電気代に与える影響は契約区分によって大きく異なります。
            過去の補助単価（3.5円/kWh・1.8円/kWh）を参考に、代表的な契約区分別の目安を示します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約区分</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">補助あり月額</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">補助なし月額</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">差額（月）</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">前提条件</th>
                </tr>
              </thead>
              <tbody>
                {simulationRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.contractType}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.withSubsidy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.withoutSubsidy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-bold text-red-600">{row.diff}</td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-500">{row.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">※ 補助単価は過去実績の参考値。実際の影響額は契約条件・エリア・使用量により異なります。</p>
            <p className="mt-1 text-xs text-slate-500">※ このタイミングでの契約見直しにより、年間▲30〜80万円の最適化余地が生まれるケースがあります（高圧・月5万kWh規模の場合）。</p>
          </div>
        </section>

        {/* セクション: 比較のしかた */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直し判断を誤らないための比較のしかた</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助がある間に、契約条件や見積前提を整理しておくと、補助終了後に慌てずに比較できます。
            期限が近い契約では、準備時期の前倒しが有効です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較では、単価差だけでなく年間総額の見え方とリスクの出方を確認すると、
            政策変動に左右されにくい判断ができます。補助なしベースの単価で比較することが基本です。
          </p>
        </section>

        {/* セクション: 社内説明 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">社内説明で押さえたい整理のポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            社内説明では「補助影響」と「契約見直し余地」を分けて示すと、判断理由が伝わりやすくなります。
            補助終了だけを理由にした切替提案は説得力が弱くなりがちです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            政策変動があっても継続的に使える確認軸を共有しておくと、次回の見直し実務も安定します。
            上記のタイムラインと影響シミュレーションを社内資料として活用することを推奨します。
          </p>
        </section>
      </div>

      <div className="mt-6">
        <GlossaryLinks currentSlug="should-you-review-around-subsidy-end" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "電力量料金", "市場連動プラン", "固定プラン"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          intro="補助前後の判断を安定させるために、請求書確認と見積比較の実務ページをあわせて確認できます。"
          links={[
            {
              href: "/impact-of-electricity-subsidy-ending",
              title: "電気料金補助終了の影響と対策",
              description: "補助終了が法人電気代に与える影響を数値で確認できます。",
            },
            {
              href: "/electricity-price-subsidy-impact",
              title: "電気料金補助が電力契約に与える影響",
              description: "補助政策が契約選択や比較判断にどう影響するかを整理できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "電力契約の見直しに最適なタイミングはいつか",
              description: "補助終了以外の見直し最適タイミングを体系的に確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "補助なしベースの単価で現契約と候補条件を実務的に比較できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "補助終了後の料金安定化に向けた固定プランの特徴と注意点。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="補助影響と契約要因を整理したら次のステップへ"
          description="補助なしベースの単価で現契約と候補条件を比較し、社内説明に使える形でリスクを評価します。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
