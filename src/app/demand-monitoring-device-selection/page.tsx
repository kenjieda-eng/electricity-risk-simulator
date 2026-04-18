import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "デマンド監視装置の選び方｜単機能・クラウド連携・警報システムの比較";
const pageDescription =
  "契約電力の超過防止に使うデマンド監視装置の種類と、規模別の選び方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/demand-monitoring-device-selection";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "デマンド監視"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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
          { name: "エネルギーマネジメント・DX", url: "https://simulator.eic-jp.org/articles/energy-dx" },
          { name: "デマンド監視装置の選び方" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-dx" className="underline-offset-2 hover:underline">エネルギーマネジメント・DX</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">デマンド監視装置の選び方</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">デマンド監視装置の選び方｜単機能・クラウド連携・警報システムの比較</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">契約電力の超過防止に使うデマンド監視装置の種類と、規模別の選び方を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">デマンド監視装置とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド監視装置は、30分単位の電力需要を測定し、契約電力を超過しそうなときに警報を出したり、制御信号を出したりする装置です。契約電力超過はペナルティ的な料金改定につながるため、多くの工場・ビルで導入されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">機能は単純な警報ブザーから、AI予測・クラウド蓄積・メール通知・空調自動制御まで幅広いです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">単機能型とクラウド連携型の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">単機能型は、装置単体で予測計算と警報を行う方式で、導入費用は10〜30万円程度と安価です。中小工場・店舗に向いています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">クラウド連携型は、データをクラウドに蓄積し、複数拠点を統合管理、他システムとの連携（BEMS・EMS）が可能です。導入費用は数十万〜数百万円、月額料金が発生します。複数拠点持ち・データ活用志向の企業向けです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">選定のチェックポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①予測精度（何分前に警報が出るか）、②外部制御連携（空調・生産設備の自動制御可否）、③複数拠点統合可否、④オープンデータ形式（CSV・API）の4点を確認します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">工場の場合は生産ライン制御との連携が可否が重要で、オフィスビルの場合は空調制御との連携が優先度高い傾向があります。</p>
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
      </main>
    </>
  );
}
