import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電力データAPIとBIツール連携｜エネルギーダッシュボード構築手順";
const pageDescription =
  "電力使用データをBIツール（Power BI・Tableau・Lookerなど）で可視化し、経営層が使えるダッシュボードを構築する手順を整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-data-api-bi-integration";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電力データ分析"],
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
          { name: "電力データAPIとBIツール連携" },
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
          <span className="text-slate-800">電力データAPIとBIツール連携</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電力データAPIとBIツール連携｜エネルギーダッシュボード構築手順</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力使用データをBIツール（Power BI・Tableau・Lookerなど）で可視化し、経営層が使えるダッシュボードを構築する手順を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力データ取得の主要経路</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力使用データの取得元は、①電力会社のWebポータル（CSVダウンロード）、②スマートメーターのBルートAPI、③自社EMS・デマンド監視装置、の3つが主流です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Bルート（Home Route）は、スマートメーターから家庭内・施設内へのリアルタイムデータ送信経路で、Wi-SUNなどの無線で通信します。法人でも一定の条件下で利用可能です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BIツールでの可視化</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Power BI・Tableau・Looker StudioなどのBIツールにデータを取り込むと、時間帯別負荷・契約ピーク・拠点比較・月次推移をインタラクティブに分析できます。経営層・現場の両方で使える共通言語になります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">データ更新は日次または週次が現実的で、リアルタイム性は必須ではないことが多いです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実装ステップ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①データ取得経路を決定、②クラウドストレージ（BigQuery・Snowflake・Azure SQLなど）にデータ集約、③BIツールで可視化、④関係者にレポート配信、の4ステップで構築します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">初期構築は1〜3ヶ月、費用は規模により数十万〜数百万円。社内にデータエンジニアがいれば内製も可能、いない場合はSaaS型エネマネサービスを使うのが現実的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">推奨ダッシュボード指標</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">経営層向け：①月次電気代（前年比・予算比）、②CO2排出量（Scope2）、③契約電力使用率、④拠点別コスト比較、⑤主要リスク指標（市場価格変動・ピーク超過アラート）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">現場担当者向け：①30分デマンド実績、②設備別使用量、③時間帯別負荷、④異常検知アラート、⑤月次目標達成率。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">異なる指標を異なるダッシュボードで提供し、権限管理で閲覧範囲を制御するのが運用効率化の鍵です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Bルート利用には電力会社への申込みが必要で、運用は一般社団法人スマートメーターBルート運営管理機構で管理されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力データの外部活用では、経産省「電力データ活用に関するガイドライン」（2021年策定）に沿った個人情報保護・データガバナンスが求められます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.occto.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力広域的運営推進機関（OCCTO）</a></li>
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
      </main>
    </>
  );
}
