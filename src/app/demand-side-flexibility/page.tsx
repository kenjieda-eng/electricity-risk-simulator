import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "デマンドレスポンス・需要家リソース（VPP）活用の基本";
const pageDescription =
  "需要家側の柔軟性（需要抑制・創エネ・蓄電）を組み合わせて提供するVPP・デマンドレスポンスの仕組みと収益化を整理します。";
const pageUrl = "https://simulator.eic-jp.org/demand-side-flexibility";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金"],
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
    images: [{ url: "/api/og/energy-dx", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/energy-dx"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "エネルギーマネジメント・DX", url: "https://simulator.eic-jp.org/articles/energy-dx" },
          { name: "デマンドレスポンス・需要家リソース（VPP）活用の基本" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-dx" className="underline-offset-2 hover:underline">エネルギーマネジメント・DX</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">デマンドレスポンス・需要家リソース（VPP）活用の基本</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">デマンドレスポンス・需要家リソース（VPP）活用の基本</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">需要家側の柔軟性（需要抑制・創エネ・蓄電）を組み合わせて提供するVPP・デマンドレスポンスの仕組みと収益化を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">デマンドレスポンス・VPPとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンドレスポンス（DR）は、需給ひっ迫時などに電力消費を抑える、または蓄電池の放電を行うことで、電力会社から対価を得る仕組みです。VPP（仮想発電所）は、複数の需要家リソースを束ねて1つの発電所のように運用するシステムで、DRの高度版と位置づけられます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本では2021年から需給調整市場が本格運用され、DRアグリゲーター経由で参加する事業者が急増しています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">参加の要件</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">DR参加には、原則として高圧以上の契約が必要で、30分値の計測が可能なスマートメーターが前提です。BEMS・FEMSによる自動制御、または人手での生産調整などで、指定時間帯の消費削減を実施します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約電力の10〜30%程度を調整力として提供するケースが多く、年間数十万〜数百万円の収益が得られることがあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実施のリスクと注意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">生産への影響、空調・照明水準の低下、従業員の負担など、運用面の配慮が必要です。アグリゲーターと契約する場合、報酬体系とペナルティ条件を事前に確認します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/energy-dx", label: "エネルギーマネジメント・DXの他の記事を読む" },
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
