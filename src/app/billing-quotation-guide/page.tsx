import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "請求書・見積書・契約条件の見方ガイド一覧｜比較と判断に使える確認ポイント";
const pageDescription =
  "法人向け電気料金の請求書・見積書・契約条件書の読み方を解説するガイド一覧。基本料金・燃料費調整・再エネ賦課金・市場連動条件の確認ポイントと、見積比較での落とし穴を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 請求書 見方",
    "法人 電力 見積書 比較",
    "電力契約 条件 確認",
    "燃料費調整 再エネ賦課金 見方",
    "電気代 請求書 項目",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/billing-quotation-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/billing-quotation-guide",
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

const guideItems = [
  {
    category: "請求書の読み方",
    items: [
      {
        href: "/business-electricity-bill-breakdown",
        title: "法人向け電気料金請求書の見方",
        summary:
          "基本料金・電力量料金・燃料費調整額・再エネ賦課金・容量拠出金など、各行項目の意味と金額の読み方を解説します。",
      },
      {
        href: "/fuel-cost-adjustment",
        title: "燃料費調整制度の仕組みと確認ポイント",
        summary:
          "燃料費調整額がなぜ変動するのか、計算の仕組みと請求書上での確認方法を整理します。プラスにもマイナスにもなる点に注意が必要です。",
      },
      {
        href: "/capacity-contribution-explained",
        title: "容量拠出金とは何か",
        summary:
          "2024年以降に法人向け請求書に登場した容量拠出金の仕組み・計算方法・今後の動向を解説します。",
      },
    ],
  },
  {
    category: "見積書の比較ポイント",
    items: [
      {
        href: "/compare-business-electricity-estimates",
        title: "法人の電力見積書の比較ポイント",
        summary:
          "複数社の見積を正確に比較するための条件揃えの方法。基本料金の計算基準・燃料費調整の上限有無・契約期間条件の確認が重要です。",
      },
      {
        href: "/cheap-unit-price-not-always-better",
        title: "単価が安くても有利とは限らない理由",
        summary:
          "電力量単価だけで比較すると見落としやすい項目を整理。基本料金・調整費・解約違約金の組み合わせで総コストが変わることがあります。",
      },
      {
        href: "/documents-needed-for-electricity-contract-review",
        title: "電力契約見直しに必要な書類と情報",
        summary:
          "見積依頼時に準備すべき書類・情報の一覧。現行契約書・使用量データ・設備情報など、精度の高い見積を得るための事前準備です。",
      },
    ],
  },
  {
    category: "契約条件の確認",
    items: [
      {
        href: "/electricity-contract-terms",
        title: "電力契約の契約期間と更新タイミング",
        summary:
          "契約期間の種類（1年・2年・3年など）と自動更新の仕組み。更新日の確認と解約通知のタイミングを整理します。",
      },
      {
        href: "/electricity-contract-cancellation-renewal-terms",
        title: "電力契約の解約・更新条件の確認ポイント",
        summary:
          "中途解約時の違約金条件・解約通知の必要期間・切替手続きの流れを事前に把握しておくことで、タイミングを逃しません。",
      },
      {
        href: "/does-fuel-cost-adjustment-change-even-in-fixed-plan",
        title: "固定プランでも燃料費調整は変動するのか",
        summary:
          "「固定プラン＝すべて固定」という誤解を整理。固定される範囲と変動が残る部分の違いを請求書の観点から確認します。",
      },
    ],
  },
];

const faq = [
  { question: "電気料金の請求書・見積書・契約条件書はどう違いますか？", answer: "請求書は毎月の請求内容を記載した書類、見積書は切替前の試算を示す書類、契約条件書は契約期間・解約条件・調整費の扱いなどを定める書類です。比較時はこの3種類を揃えて確認することが重要です。" },
  { question: "見積書と実際の請求書で金額が異なる場合はなぜですか？", answer: "燃料費調整額・市場価格調整額が見積条件と異なる場合に差が生じます。見積書が「調整費別途」の場合、燃料価格が変動すると実際の請求額は見積を超える可能性があります。" },
  { question: "電力契約書のどの条項を優先して確認すべきですか？", answer: "自動更新の有無・解約予告期間・燃料費調整額の扱い（上限の有無）・市場価格調整額の条件・容量拠出金の負担方式の5点が特に重要です。これらを見落とすと予算超過や解約トラブルの原因になります。" },
];

export default function BillingQuotationGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline="請求書・見積書・契約条件の見方ガイド一覧｜比較と判断に使える確認ポイント"
        description="法人向け電気料金の請求書・見積書・契約条件書の読み方を解説するガイド一覧。基本料金・燃料費調整・再エネ賦課金・市場連動条件の確認ポイントと、見積比較での落とし穴を整理します。"
        url="https://simulator.eic-jp.org/billing-quotation-guide"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "請求書・見積書・契約条件の見方ガイド一覧" },
        ]}
        faq={faq}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          請求書・見積書・契約条件の見方ガイド一覧
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しを正確に進めるためには、現行の請求書を読み解き、複数の見積書を正しく比較し、契約条件の細部を確認できることが前提になります。しかし実際には、燃料費調整・再エネ賦課金・容量拠出金・基本料金の計算基準など、わかりにくい項目が多く、見落としによる判断ミスが起きやすい領域です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、請求書・見積書・契約条件の読み方に関するガイドを一覧にまとめています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>電気料金請求書の各項目（基本料金・燃料費調整・再エネ賦課金・容量拠出金）の意味</li>
            <li>見積書を正確に比較するための条件揃えの方法</li>
            <li>契約期間・解約条件・更新タイミングの確認ポイント</li>
            <li>固定プランでも変動する費用項目とその確認方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人向け電気料金の基本構造
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金（高圧・特別高圧）は、家庭向けと異なり複数の費用項目が組み合わさっています。契約見直しや見積比較を正確に行うためには、各項目の意味と変動のしくみを理解しておくことが重要です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              {
                label: "基本料金（デマンド料金）",
                detail:
                  "契約電力（kW）に基づいて毎月固定的に発生する料金。最大30分値デマンドが契約電力を超えると翌月以降の基本料金が上がるため、ピーク管理が重要です。",
              },
              {
                label: "電力量料金",
                detail:
                  "実際に使用した電力量（kWh）に単価をかけた料金。固定プランでは単価が固定され、市場連動プランではJEPXスポット価格に連動して変動します。",
              },
              {
                label: "燃料費調整額",
                detail:
                  "液化天然ガス・石炭・石油等の燃料価格の変動を反映して毎月変動する調整額。固定プランでも燃料費調整が残る契約では変動が続きます。",
              },
              {
                label: "再生可能エネルギー賦課金",
                detail:
                  "再エネ電源（FIT制度）の買取費用を全需要家に按分する賦課金。使用量（kWh）に比例して発生し、年度ごとに単価が改定されます。",
              },
              {
                label: "容量拠出金",
                detail:
                  "2024年度から容量市場（長期的な発電容量の維持費用）を電力使用量に按分して徴収する費用。請求書上の新しい行項目で、今後増加が見込まれます。",
              },
              {
                label: "その他付加サービス料金",
                detail:
                  "DR（需要応答）サービス・スマートメーター管理費・ゼロカーボンオプションなどの付加サービスに対する費用。契約時に条件を確認します。",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {guideItems.map((category) => (
          <section
            key={category.category}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">{category.category}</h2>
            <div className="mt-4 space-y-3">
              {category.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  <p className="text-sm font-semibold text-sky-700 underline underline-offset-2">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積比較でよくある誤解
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            複数社から見積を取った際に、正確な比較ができないまま判断してしまうケースが少なくありません。以下の点を意識しながら比較することで、判断の精度を高められます。
          </p>
          <div className="mt-4 space-y-3">
            {[
              {
                title: "電力量単価だけを比べている",
                detail:
                  "基本料金の計算基準（契約電力vs最大デマンド）・燃料費調整の上限有無・再エネ賦課金の内外など、単価以外の条件が大きく影響します。総年間コストで比較することが基本です。",
              },
              {
                title: "燃料費調整の見込みを揃えていない",
                detail:
                  "見積書の燃料費調整は、作成時点の仮定値が使われます。複数社の見積では「同じ燃料費調整単価の仮定」で比較しないと、プランの差ではなく仮定の差を比べることになります。",
              },
              {
                title: "市場連動部分の「平均値」を額面どおりに比べている",
                detail:
                  "市場連動プランの見積は「過去平均」を使うことが多いですが、将来の市場価格は不確かです。平均値だけでなく上振れ時のシナリオも確認した上で判断します。",
              },
              {
                title: "解約・切替コストを考慮していない",
                detail:
                  "現行契約に違約金がある場合、切替コストを差し引いても見直し効果があるかを確認します。切替直後の数か月は旧契約の精算が並行することもあります。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">△ {item.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで数値確認をする
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書の読み方・比較方法を理解した上で、当サイトのシミュレーターを使うことで、より具体的な数値確認が可能になります。現行契約条件での上振れリスクの確認や、固定プランと市場連動プランの比較を自社の使用量データで行えます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行の電力量料金・基本料金条件を入力して年間リスクを試算</li>
            <li>固定プランと市場連動プランの条件を入れ替えて比較</li>
            <li>燃料費高騰・市場価格高騰シナリオでの影響を把握</li>
            <li>見積書を複数社から取る前に「どの条件で比較するか」を明確にする</li>
          </ul>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">6種類の書類 確認ポイント比較</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">書類</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">主な確認目的</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">最重要チェック項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">入手タイミング</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">請求書（低圧）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">現状コストの把握</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量・単価・調整額の内訳</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">毎月届く</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">請求書（高圧）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">デマンドと変動費の確認</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約電力・デマンド値・力率</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">毎月届く</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">請求書（特別高圧）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">大口契約の総額管理</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金比率・負荷率</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">毎月届く</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積書（高圧）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">新規・切替の条件比較</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">単価・燃調上限・違約金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積依頼時</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積書（特別高圧）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">大口交渉の条件整理</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">負荷率前提・特約条件</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積依頼時</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約書</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">条件拘束の確認</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">期間・自動更新・解約条件</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約締結時</td>
              </tr>
            </tbody>
          </table>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="billing-quotation-guide" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "基本料金", "電力量料金", "市場連動プラン", "固定プラン"]} />
        </div>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力料金の制度・請求書の規制情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
            { name: "新電力ネット", url: "https://pps-net.org", description: "電力市場データ・新電力情報" },
          ]}
          publishedAt="2026-04-10"
        />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/contract-review-practice-guide",
              title: "契約見直し実務ガイド一覧",
              description: "準備から切替完了まで、実務の進め方をまとめた一覧。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し準備で確認すべき基本項目の一覧。",
            },
            {
              href: "/fixed-vs-market-linked-guide",
              title: "固定プランと市場連動プランの判断ガイド一覧",
              description: "見積比較後のプラン選択判断に使えるガイド一覧。",
            },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは何か",
              description: "請求書に登場した新しい費用項目の解説。",
            },
          ]}
        />

        <ContentCta
          heading="見積書の数値をシミュレーターで検証する"
          description="見積書の条件をシミュレーターに入力して、年間コストとリスク幅を確認できます。固定プランと市場連動プランの比較にも活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="billing-quotation-guide" />
      </div>
    </main>
    </>
  );
}
