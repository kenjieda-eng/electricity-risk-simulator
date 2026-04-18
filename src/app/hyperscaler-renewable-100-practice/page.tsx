import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "ハイパースケーラーの再エネ100%調達の実務｜AWS・GCP・Azureの事例";
const pageDescription =
  "AWS・Google Cloud・Microsoft Azureなどハイパースケーラーの再エネ調達戦略と、法人顧客への示唆を整理します。";
const pageUrl = "https://simulator.eic-jp.org/hyperscaler-renewable-100-practice";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力"],
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
          { name: "データセンター・AI需要", url: "https://simulator.eic-jp.org/articles/datacenter-ai-demand" },
          { name: "ハイパースケーラーの再エネ100%調達の実務" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/datacenter-ai-demand" className="underline-offset-2 hover:underline">データセンター・AI需要</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">ハイパースケーラーの再エネ100%調達の実務</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">ハイパースケーラーの再エネ100%調達の実務｜AWS・GCP・Azureの事例</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">AWS・Google Cloud・Microsoft Azureなどハイパースケーラーの再エネ調達戦略と、法人顧客への示唆を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ハイパースケーラーの再エネ100%宣言</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">主要クラウド事業者は、2020年代前半から再エネ100%・カーボンニュートラルの目標を掲げています。Amazon（2025年まで再エネ100%）、Google（2030年までに24/7カーボンフリーエネルギー）、Microsoft（2030年までにカーボンネガティブ）、などが代表例です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これらの目標は、単なる「年間総量で再エネ」ではなく、時間マッチング（24/7）へと高度化しており、業界の調達基準を引き上げています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">調達戦略の特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①大規模PPA：GW規模の風力・太陽光PPAを世界各国で締結。②24/7カーボンフリー：発電と需要の時間帯マッチングを目指す。③グリッド影響の最小化：地域の系統負荷を考慮した立地・調達。④技術革新への投資：次世代原子力（SMR）、蓄電池、水素など。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">AWS・GoogleはSMR（小型モジュール炉）への先行投資でも知られ、電力調達戦略の次フェーズとして、次世代電源の確保が進んでいます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">顧客企業への示唆</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">法人がクラウドサービスを利用することで、自社のScope3排出量にクラウド事業者の取組が反映されます。クラウドプロバイダの調達水準（24/7 vs 年間総量、地域マッチング）は、Scope3開示の品質に影響します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">クラウド事業者選定時、電力調達戦略を比較項目に入れる企業が増えており、特にサステナビリティ評価が重要な業種ではクラウド選定の判断軸として定着しつつあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3社のサステナビリティ戦略比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【Amazon（AWS）】2025年までに再エネ100%。2040年ネットゼロ。巨大PPA契約者として世界トップ。取組例：インド・欧州・米国でGW規模PPA締結。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【Google（GCP）】2017年から年間総量100%達成。2030年までに24/7カーボンフリー。先進的な時間マッチング調達。SMRへの投資公表。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【Microsoft（Azure）】2025年再エネ100%。2030年カーボンネガティブ。炭素除去技術への投資拡大。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">3社とも調達規模・技術投資は圧倒的で、産業全体の再エネ需給を牽引しています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">各社の再エネ調達実績はSustainability Report（年次公開）で開示されており、詳細な契約件数・PPA地域・進捗が確認できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">24/7カーボンフリー構想はRE100、UN Energy Compacts（国連エネルギー合意）でも取り上げられ、国際標準化が進んでいます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.there100.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">RE100 (The Climate Group)</a></li>
            <li><a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">IEA (国際エネルギー機関)</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/datacenter-power-demand-trend", title: "データセンターの電力需要動向", description: "日本・世界の状況" },
              { href: "/ai-workload-energy-impact", title: "生成AIの電力消費", description: "学習・推論の実態" },
              { href: "/datacenter-cooling-optimization", title: "データセンター冷却最適化", description: "PUE改善と液冷" },
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/datacenter-ai-demand", title: "データセンター・AI需要", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/datacenter-ai-demand", label: "データセンター・AI需要の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
