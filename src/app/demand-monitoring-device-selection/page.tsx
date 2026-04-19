import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

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
          { name: "エネルギーマネジメント・DX", url: "https://simulator.eic-jp.org/articles/energy-dx" },
          { name: "デマンド監視装置の選び方" },
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
          <span className="text-slate-800">デマンド監視装置の選び方</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

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
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">機能別比較表</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【ベーシック型（10〜30万円）】：30分デマンド計測、予測警報、パルス出力。単体運用、複数拠点統合不可。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【クラウド連携型（50〜150万円＋月額1〜3万円）】：複数拠点統合、AI需要予測、メール・LINE通知、API連携。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【フルBEMS統合型（300万円〜）】：空調・照明の自動制御、需給調整市場連携、AIピーク最適化、詳細レポート。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自社の契約規模・拠点数・運用担当者の人数で選定範囲が決まります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド監視装置の導入には、省エネ補助金（資源エネルギー庁）や中小企業向けのIT導入補助金が活用可能です。補助率は1/2〜2/3が一般的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">省エネ法定期報告では、デマンド管理の実績（契約電力推移）も記載事項となるため、装置導入と社内報告体制を一体で整備します。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.enecho.meti.go.jp/category/saving_and_new/saving/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 省エネ法</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/bems-fems-ems-overview", title: "BEMS/FEMS/EMSの違い", description: "目的と選定基準" },
              { href: "/ai-electricity-optimization", title: "AIによる電力最適化の実務", description: "需要予測と自動制御" },
              { href: "/smart-meter-data-utilization", title: "スマートメーターデータの業務活用", description: "30分値データの分析" },
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "関連カテゴリも合わせて読む" },
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
