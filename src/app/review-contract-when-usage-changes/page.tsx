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
  "使用量やデマンドが変わったとき電力契約は見直すべきか｜見直しトリガーと影響試算";
const pageDescription =
  "使用量やデマンドの変化は法人電力契約見直しの重要なサインです。変動パターン別の見直しトリガーと、月5万kWh→6万kWhに増えた場合の月額影響試算を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "使用量変化",
    "デマンド変動",
    "電力契約見直し",
    "契約電力",
    "法人電気料金",
    "デマンド管理",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/review-contract-when-usage-changes",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/review-contract-when-usage-changes",
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

const triggerRows = [
  {
    pattern: "使用量+20%以上の増加",
    threshold: "+20%以上（3ヶ月平均）",
    shouldReview: "要検討",
    reviewClass: "text-red-600 font-semibold",
    check: "契約容量・プランの最適化、高圧切替要件の確認",
  },
  {
    pattern: "使用量▲20%以上の減少",
    threshold: "▲20%以上（3ヶ月平均）",
    shouldReview: "要検討",
    reviewClass: "text-red-600 font-semibold",
    check: "契約容量縮小余地、最低料金条項の有無",
  },
  {
    pattern: "デマンド+15%以上の上昇",
    threshold: "ピーク需要+15%以上",
    shouldReview: "強く要検討",
    reviewClass: "text-red-700 font-bold",
    check: "契約電力の見直し・デマンドコントロール施策の検討",
  },
  {
    pattern: "デマンド▲15%以上の低下",
    threshold: "ピーク需要▲15%以上",
    shouldReview: "要検討",
    reviewClass: "text-red-600 font-semibold",
    check: "契約電力の引き下げ申請タイミング・違約金の確認",
  },
  {
    pattern: "操業パターンの変更",
    threshold: "夜間・土休日稼働の開始/終了",
    shouldReview: "条件次第で検討",
    reviewClass: "text-amber-600 font-semibold",
    check: "時間帯別・季節別料金プランとの相性確認",
  },
  {
    pattern: "設備増減（空調・EV等）",
    threshold: "主要設備のkW増減",
    shouldReview: "条件次第で検討",
    reviewClass: "text-amber-600 font-semibold",
    check: "デマンドへの影響・省エネ後の契約条件との整合性",
  },
];

// 月額影響試算: 月5万kWh → 6万kWhに増加
const impactRows = [
  {
    item: "電力量料金（従量単価 18円/kWh）",
    before: "900,000円",
    after: "1,080,000円",
    diff: "+180,000円",
    note: "従量単価に変化なし",
  },
  {
    item: "燃料費調整額（5円/kWh）",
    before: "250,000円",
    after: "300,000円",
    diff: "+50,000円",
    note: "市場連動で変動",
  },
  {
    item: "再エネ賦課金（3.49円/kWh）",
    before: "174,500円",
    after: "209,400円",
    diff: "+34,900円",
    note: "固定単価",
  },
  {
    item: "基本料金（デマンド未変化の場合）",
    before: "150,000円",
    after: "150,000円",
    diff: "変化なし",
    note: "デマンドが増加すれば上昇",
  },
  {
    item: "月額合計",
    before: "約1,474,500円",
    after: "約1,739,400円",
    diff: "+264,900円",
    note: "年間+約317万円",
  },
];

export default function ReviewContractWhenUsageChangesPage() {
  return (
    <>
      <ArticleJsonLd
        headline="使用量やデマンドが変わったとき電力契約は見直すべきか｜見直しトリガーと影響試算"
        description="使用量やデマンドの変化は法人電力契約見直しの重要なサインです。変動パターン別の見直しトリガーと、月5万kWh→6万kWhに増えた場合の月額影響試算を整理します。"
        url="https://simulator.eic-jp.org/review-contract-when-usage-changes"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "使用量やデマンドが変わったとき電力契約は見直すべきか" },
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
        <span className="text-slate-700">使用量・デマンドが変わったとき</span>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          使用量やデマンドが変わったとき、電力契約は見直すべきか
        </h1>
        <p className="mt-2 text-xs text-slate-500">見直しトリガーと月額影響試算</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          値上げ通知がなくても、使用量やデマンドの変化は契約見直しの重要なサインです。
          運用実態が変わると、契約条件との相性が崩れ、電気代が想定どおりに動かなくなることがあります。
          このページでは、変動パターン別の見直しトリガーと、月5万kWh→6万kWhに増えた場合の月額影響試算を解説します。
        </p>
      </header>

      {/* 本文 */}
      <div className="mt-6 space-y-6">

        {/* セクション1 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量やデマンドの変化が契約見直しのサインになる理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量が減っていても請求額が思ったほど下がらない場合、契約電力や調整項目の影響が残っている可能性があります。
            単純な使用量比較だけでは、見直し余地を把握しきれません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、使用量・単価・調整項目を分けて確認し、どこにコスト要因があるかを切り分けることが重要です。
            特にデマンド（最大需要電力）は基本料金に直結するため、ピーク需要の変化を見落とすとコスト改善機会を逃します。
          </p>
        </section>

        {/* 見直しトリガー表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量・デマンド変動の見直しトリガー</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の変動パターンを確認し、自社の状況に該当する項目があれば見直し検討を進めてください。
            変動幅の目安はあくまで参考値であり、契約区分・エリアにより異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">変動パターン</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">変動幅の目安</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">見直し検討すべきか</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">確認事項</th>
                </tr>
              </thead>
              <tbody>
                {triggerRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.pattern}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.threshold}</td>
                    <td className={`border border-slate-200 px-3 py-2 ${row.reviewClass}`}>{row.shouldReview}</td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600 sm:text-sm">{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">※ 変動幅は3ヶ月平均との比較を推奨。単月の変動は季節要因を含む場合があります。</p>
          </div>
        </section>

        {/* 月額影響試算表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">変動時の月額影響試算（月5万kWh→6万kWhに増えた場合）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧事業所で月間使用量が5万kWhから6万kWhに増加した場合（+20%増）の、
            各料金項目ごとのBefore/After比較です。デマンドが変化しない前提での試算です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">料金項目</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">Before（5万kWh）</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">After（6万kWh）</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">差額</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
                </tr>
              </thead>
              <tbody>
                {impactRows.map((row, i) => {
                  const isTotal = i === impactRows.length - 1;
                  return (
                    <tr
                      key={i}
                      className={isTotal ? "bg-sky-50 font-semibold" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className={`border border-slate-200 px-3 py-2 ${isTotal ? "font-bold text-slate-900" : "text-slate-700"}`}>{row.item}</td>
                      <td className={`border border-slate-200 px-3 py-2 text-right ${isTotal ? "font-bold text-slate-900" : "text-slate-700"}`}>{row.before}</td>
                      <td className={`border border-slate-200 px-3 py-2 text-right ${isTotal ? "font-bold text-slate-900" : "text-slate-700"}`}>{row.after}</td>
                      <td className={`border border-slate-200 px-3 py-2 text-right font-bold ${row.diff === "変化なし" ? "text-slate-400" : "text-red-600"}`}>{row.diff}</td>
                      <td className="border border-slate-200 px-3 py-2 text-xs text-slate-500">{row.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">※ 単価は参考値。従量単価18円/kWh、燃調5円/kWh、再エネ賦課金3.49円/kWhで試算。</p>
            <p className="mt-1 text-xs text-slate-500">※ デマンドが同時に上昇した場合、基本料金が別途+5〜15万円/月増加するケースがあります。</p>
          </div>
        </section>

        {/* セクション: 確認手順 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用実態と契約条件がずれていないか確認する手順</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見直し時は、現契約の前提が現在の使用実態と合っているかを確認します。
            契約期間、更新条件、違約金を把握したうえで、実績に合う比較前提を作ることが大切です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            過去1年程度の請求書や需要実績を並べると、季節要因と構造変化を区別しやすくなります。
            設備投資後は省エネ効果だけでなく、契約側の再確認が必要です。
          </p>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな会社で見直し効果が出やすいか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量が大きい法人、複数拠点を持つ法人、更新時期が近い法人は、見直し効果が出やすい傾向があります。
            コスト低減だけでなく、契約安定性や社内説明のしやすさまで含めて効果を評価すると、
            実務で納得感のある判断につながります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            上記のトリガー表と影響試算を活用し、自社の変動パターンに当てはめて判断を進めることを推奨します。
          </p>
        </section>
      </div>

      <div className="mt-6">
        <GlossaryLinks currentSlug="review-contract-when-usage-changes" terms={["契約電力", "デマンド値", "基本料金", "電力量料金", "燃料費調整額", "力率"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          intro="使用実態の変化を確認した後は、デマンドの仕組みと請求書の読み方をあわせて確認するとより判断しやすくなります。"
          links={[
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力（デマンド）とは何か",
              description: "デマンドの仕組みと基本料金への影響を体系的に確認できます。",
            },
            {
              href: "/demand-value-guide",
              title: "デマンド値の見方と管理のポイント",
              description: "デマンド実績値の確認方法と削減施策の基礎を把握できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金明細の読み方",
              description: "使用量変化を請求書から確認する手順を把握できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "変動後の使用実態をもとに現契約と候補条件を実務的に比較できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "使用量・デマンド変化を踏まえたプラン選択の考え方。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="使用実態の変化を整理できたら次のステップへ"
          description="変動後の使用量・デマンドをもとに比較ページで現契約との差分を確認し、社内説明に使える形で検討を進めます。"
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
