import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["review-points"];


const pageTitle =
  "容量拠出金の扱いを確認する方法｜見積比較での確認ポイント";
const pageDescription =
  "電力契約の見積比較で見落としやすい容量拠出金の扱いを解説。見積への含有状況の確認方法、今後のコスト推移の見通し、ベンダーへの確認ポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "容量拠出金 確認方法",
    "容量拠出金 見積 含まれる",
    "電力契約 容量市場 拠出金",
    "法人 電気料金 容量拠出金 上昇",
    "新電力 容量拠出金 比較",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/how-to-check-capacity-contribution-terms",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-check-capacity-contribution-terms",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/review-points", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/review-points"],
  },
};

export default function HowToCheckCapacityContributionTermsPage() {
  return (
    <>
      <ArticleJsonLd
        headline="容量拠出金の扱いを確認する方法｜見積比較での確認ポイント"
        description="電力契約の見積比較で見落としやすい容量拠出金の扱いを解説。見積への含有状況の確認方法、今後のコスト推移の見通し、ベンダーへの確認ポイントを整理します。"
        url="https://simulator.eic-jp.org/how-to-check-capacity-contribution-terms"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "容量拠出金の扱いを確認する方法" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">容量拠出金の扱い確認</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          容量拠出金の扱いを確認する方法
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          容量拠出金は、日本の容量市場制度のもとで電力会社が負担し、最終的に需要家に転嫁されるコストです。2024年度から本格的な支払いが開始され、今後数年にわたって段階的に増加する見込みです。見積比較の際に「含まれているか否か」を確認しておかないと、後から追加費用が発生するケースがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、容量拠出金の基本と、見積書・約款での確認ポイントを整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>容量拠出金の仕組みと転嫁の経緯</li>
            <li>見積に含まれているかの確認方法</li>
            <li>今後のコスト水準の推移見通し</li>
            <li>ベンダーへの確認ポイント</li>
            <li>長期契約への影響の考え方</li>
          </ul>
        </div>
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
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            容量拠出金とは何か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場は、将来の電力供給力（発電設備の設備容量）を事前に確保するための市場制度です。発電事業者は容量市場のオークションで落札し、電力の安定供給を確約する代わりに「容量収入」を受け取ります。その原資となる費用が「容量拠出金」として電力会社（小売電気事業者）に課せられ、最終的に需要家の電気料金に転嫁されます。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金は使用電力量（kWh）ではなく、需要家の「調達電力量」または「契約電力」に比例して請求される仕組みが一般的です。そのため、使用量が多い法人ほど負担額が大きくなります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金の詳細については{" "}
            <Link
              href="/capacity-contribution-explained"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              容量拠出金とは
            </Link>{" "}
            で解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積に含まれているかの確認方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金は、見積書への記載方法が電力会社によって異なります。以下の3パターンを確認します。
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">パターン①：電力量料金に含まれている</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                容量拠出金が電力量単価に織り込まれているケース。見積書には「電力量料金：○○円/kWh」と記載されるのみで、容量拠出金の記載がない。含まれているかを電力会社に確認する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">パターン②：別途記載されている</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                容量拠出金が「容量拠出金：○○円/kWh」や「容量費用：○○円/kW」として別行で記載されているケース。金額と計算方式が明示されるため比較しやすい。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">パターン③：見積に含まれず後から請求</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                見積時点では容量拠出金が含まれておらず、契約後に実費で別途請求されるケース。見積段階では判断できないため、必ず事前に確認が必要。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            今後のコスト水準の推移見通し
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金の単価は毎年変動します。容量市場のオークション結果によって決まり、2024年度から本格支払いが始まった後、2026年度以降はさらに高い水準で推移することが見込まれています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            長期契約（2〜3年）を結ぶ場合、契約締結時点では見積に含まれていた容量拠出金の単価が、翌年度以降に上昇した分をどちらが負担するかを確認する必要があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>「容量拠出金の単価は固定ですか？それとも毎年変動しますか？」を必ず確認する</li>
            <li>変動する場合、上昇分は電力会社が負担するのか需要家が負担するのかを確認する</li>
            <li>変動リスクを電力会社が引き受ける場合は、その分が単価に織り込まれていると考えられる</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            ベンダーへの確認時の質問例
          </h2>
          <div className="mt-4 space-y-3">
            {[
              {
                q: "「見積書に容量拠出金は含まれていますか？含まれていない場合はいくらになりますか？」",
                note: "パターンの特定と、含まれない場合の追加費用の把握が目的。",
              },
              {
                q: "「容量拠出金の単価は契約期間中固定ですか？変動する場合は誰が負担しますか？」",
                note: "長期契約時に重要。将来のコスト変動リスクの所在を確認する。",
              },
              {
                q: "「現時点での容量拠出金の単価と、来年度以降の予想水準を教えてください」",
                note: "コスト推移の参考情報として活用。",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.q}</p>
                <p className="mt-1 text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積比較での容量拠出金の取り扱い原則
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>各社の見積で容量拠出金の含有状況が異なる場合は、含まれていない見積に対して別途見込み額を加算して比較する</li>
            <li>含まれている場合は、現在の単価水準と将来の変動リスクの取り扱いを確認したうえで比較する</li>
            <li>容量拠出金単価が今後上昇する見込みがある場合、3年固定契約で現在の単価を固定することがコスト優位になる可能性がある</li>
            <li>容量拠出金は業界全体で発生するコストであり、「含まれていない」見積が実際に安いわけではない点に注意する</li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="how-to-check-capacity-contribution-terms" terms={["容量拠出金", "燃料費調整額", "市場価格調整額", "再エネ賦課金", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/what-is-capacity-contribution", title: "容量拠出金とは｜2026〜2028年度の単価・法人への影響額・対策（Pillar A）", description: "拠出金の定義・単価表・法人月額試算・4 つの対策をまとめた起点記事。" },
            { href: "/capacity-market-timeline", title: "容量市場の制度変遷と電気料金への影響（Pillar B）", description: "制度沿革・初回オークション・拠出金導入の経緯を時系列で整理。" },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは",
              description: "容量市場の仕組みと容量拠出金の基本解説。",
            },
            {
              href: "/how-to-check-fuel-cost-adjustment-terms",
              title: "燃料費調整額の扱いを確認する方法",
              description: "上限設定と計算方式の確認ポイント。",
            },
            {
              href: "/how-to-check-market-price-adjustment-terms",
              title: "市場価格調整額の有無を確認する方法",
              description: "固定と市場連動を見分けるポイント。",
            },
            {
              href: "/not-just-unit-price-comparison-checklist",
              title: "請求単価だけで比較しないためのチェックポイント",
              description: "総額比較の考え方と確認事項。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積書の構成と比較すべき項目の解説。",
            },
            {
              href: "/information-to-prepare-before-quotation-request",
              title: "新電力の相見積もり前に整理したい情報",
              description: "見積依頼の精度を上げる事前準備。",
            },
            {
              href: "/does-fuel-cost-adjustment-change-even-in-fixed-plan",
              title: "固定プランでも燃料費調整は変動するのか",
              description: "固定プランの変動リスクを容量拠出金と合わせて確認。",
            },
          ]}
        />

        <ContentCta
          heading="容量拠出金上昇の影響をシミュレーションで確認する"
          description="容量拠出金の段階的な上昇が年間コストに与える影響を試算し、契約選択の判断根拠として活用してください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
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
