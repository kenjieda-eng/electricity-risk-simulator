import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "中国・東南アジア拠点の電力事情と再エネ調達｜現地PPA・証書制度";
const pageDescription =
  "中国・東南アジア主要国の電力事情と、現地拠点での再エネ調達手段を整理します。";
const pageUrl = "https://simulator.eic-jp.org/china-southeast-asia-electricity-procurement";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "コーポレートPPA", "中国電力"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "海外拠点・グローバルエネルギー", url: "https://simulator.eic-jp.org/articles/global-energy" },
          { name: "中国・東南アジア拠点の電力事情と再エネ調達" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/global-energy" className="underline-offset-2 hover:underline">海外拠点・グローバルエネルギー</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">中国・東南アジア拠点の電力事情と再エネ調達</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">中国・東南アジア拠点の電力事情と再エネ調達｜現地PPA・証書制度</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">中国・東南アジア主要国の電力事情と、現地拠点での再エネ調達手段を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中国の電力事情と再エネ調達</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中国は世界最大の電力消費国で、2030年カーボンピーク・2060年カーボンニュートラル目標を宣言しています。電力市場は部分自由化の途上で、需要家が電力会社を選べる範囲は省により異なります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">再エネ調達手段は、①Green Energy Certificates（GEC）、②Corporate PPA（一部省で実施可能）、③Green Electricity Trading（緑電取引）、④自家発電（太陽光）、が主流です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">東南アジア主要国の状況</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">タイ・ベトナム・マレーシア・インドネシアなどでは、制度整備の進展度が異なります。タイは比較的自由化が進み、需要家選択肢あり。ベトナムは国営電力（EVN）独占が強い。マレーシアはCorporate PPA制度あり。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">現地工場・オフィスで再エネを調達する場合、①現地証書（各国ごと）の購入、②オンサイト太陽光、③現地PPAの順で検討するのが一般的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">グローバル対応の実務</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グローバル企業がRE100を達成する場合、各国で利用できる制度を組み合わせることが必要です。特に中国・東南アジアは制度が変わりやすく、現地パートナー・コンサルとの連携が不可欠です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グローバル本社のScope2算定では、各国の証書・PPA由来のクレジットを正しく集約・トラッキングする仕組みが重要になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">各国制度の概要（比較表）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【中国】再エネ調達：GEC制度あり、一部省でPPA可能。電力市場：部分自由化。為替・制度リスク：高。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【タイ】再エネ調達：REC（I-REC準拠）あり、自家太陽光普及。電力市場：部分自由化。リスク：中。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【ベトナム】再エネ調達：制度整備中、DPPA（Direct PPA）導入議論中。電力市場：EVN独占。リスク：高。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【マレーシア】再エネ調達：Corporate PPA制度あり、Green Electricity Tariff（GET）あり。リスク：中。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【インドネシア】再エネ調達：制度整備中、自家太陽光が現実的。リスク：高。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">各国のルール変更頻度が高く、調達戦略は年次でレビューが必要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">東南アジア各国の再エネ調達動向は、IEA Annual Report、アジア開発銀行（ADB）エネルギー報告書で継続的に公表されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">I-REC（International REC）の国別対応状況は、International Tracking Standard Foundation公式サイトで確認できます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">IEA (国際エネルギー機関)</a></li>
            <li><a href="https://www.there100.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">RE100 (The Climate Group)</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/global-energy-procurement-overview", title: "海外拠点の電力調達", description: "各国制度と価格水準" },
              { href: "/major-countries-electricity-price-comparison", title: "主要国電気料金比較", description: "日本・米国・欧州・東南アジア" },
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/global-energy", title: "海外拠点・グローバルエネルギー", description: "このカテゴリの記事一覧を見る" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算する" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="このテーマの理解を深めたら、シミュレーターで自社の電気料金リスクを確認しましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/global-energy", label: "海外拠点・グローバルエネルギーの他の記事を読む" },
            ]}
          />
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
