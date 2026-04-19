import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "エネマネ・DX用語集｜BEMS・FEMS・SCADA・EnOcean";
const pageDescription =
  "エネルギーマネジメント・電力DXに関する設備・通信プロトコル用語を整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/energy-management-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力用語", "電気代用語", "用語集", "BEMS"],
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
    images: [{ url: "/api/og/glossary", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/glossary"],
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
          { name: "用語集", url: "https://simulator.eic-jp.org/articles/glossary" },
          { name: "エネマネ・DX用語集" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/glossary" className="underline-offset-2 hover:underline">用語集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">エネマネ・DX用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">エネマネ・DX用語集｜BEMS・FEMS・SCADA・EnOcean</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">エネマネ導入時に出会う技術用語は多岐にわたります。マネジメントシステム種別から通信プロトコル、データ規格まで体系的に整理しました。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">マネジメントシステム</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">BEMS（Building EMS）</dt><dd className="mt-1">建物向けエネマネシステム。空調・照明・換気などビル設備を統合管理。</dd></div>
              <div><dt className="font-semibold text-slate-900">FEMS（Factory EMS）</dt><dd className="mt-1">工場向けエネマネシステム。生産設備・受変電・コンプレッサーを統合管理。</dd></div>
              <div><dt className="font-semibold text-slate-900">HEMS（Home EMS）</dt><dd className="mt-1">家庭向けエネマネシステム。</dd></div>
              <div><dt className="font-semibold text-slate-900">CEMS（Community EMS）</dt><dd className="mt-1">地域・複数建物向けエネマネシステム。</dd></div>
              <div><dt className="font-semibold text-slate-900">EMS（Energy Management System）</dt><dd className="mt-1">エネルギーマネジメントシステム全般を指す総称。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">通信プロトコル</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">BACnet</dt><dd className="mt-1">ビル設備の通信標準プロトコル。空調・照明制御の業界標準。</dd></div>
              <div><dt className="font-semibold text-slate-900">Modbus</dt><dd className="mt-1">産業用制御機器の通信プロトコル。シリアル・TCP/IPの両方をサポート。</dd></div>
              <div><dt className="font-semibold text-slate-900">LonWorks</dt><dd className="mt-1">ビル・産業設備向けの分散型通信プロトコル。</dd></div>
              <div><dt className="font-semibold text-slate-900">EnOcean</dt><dd className="mt-1">電源不要の無線通信規格。センサー・スイッチで使用。</dd></div>
              <div><dt className="font-semibold text-slate-900">Wi-SUN</dt><dd className="mt-1">スマートメーターのBルート通信規格。</dd></div>
              <div><dt className="font-semibold text-slate-900">OPC UA</dt><dd className="mt-1">産業向け標準データ通信プロトコル。Industry 4.0の基盤。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">計測・制御の用語</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">SCADA</dt><dd className="mt-1">監視制御・データ収集システム。プラント・系統運用で使用。</dd></div>
              <div><dt className="font-semibold text-slate-900">PLC（Programmable Logic Controller）</dt><dd className="mt-1">産業設備の自動制御装置。</dd></div>
              <div><dt className="font-semibold text-slate-900">センサー（IoTセンサー）</dt><dd className="mt-1">温度・湿度・電力・人感など、現場データを収集する装置。</dd></div>
              <div><dt className="font-semibold text-slate-900">デマンド予測</dt><dd className="mt-1">AI・機械学習による30分先・翌日の需要予測。</dd></div>
              <div><dt className="font-semibold text-slate-900">ピーク制御</dt><dd className="mt-1">デマンドピーク超過時の自動制御。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">データ活用</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">API（Application Programming Interface）</dt><dd className="mt-1">システム間連携のための仕様。</dd></div>
              <div><dt className="font-semibold text-slate-900">BIツール</dt><dd className="mt-1">Business Intelligenceツール。Tableau・Power BI・Looker Studio等。</dd></div>
              <div><dt className="font-semibold text-slate-900">デジタルツイン</dt><dd className="mt-1">現実設備の仮想モデル。シミュレーション・最適化に使用。</dd></div>
              <div><dt className="font-semibold text-slate-900">エネルギーダッシュボード</dt><dd className="mt-1">電力使用量・コスト・CO2を統合表示する画面。</dd></div>
            </dl>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/category/saving_and_new/saving/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 エネルギーマネジメント</a></li>
            <li><a href="https://www.bacnet.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">BACnet Standard</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/high-voltage-glossary", title: "高圧・特別高圧電気契約の用語集", description: "高圧・特別高圧の電気契約・受変電設備に関する専門用語を一覧で整理した用語集です。" },
              { href: "/low-voltage-glossary", title: "低圧電気契約の用語集", description: "低圧電気契約に関する用語と、料金プラン・契約条件の基本概念を整理した用語集です。" },
              { href: "/demand-power-glossary", title: "デマンド・契約電力関連用語集", description: "デマンド管理・契約電力の決定方式に関する専門用語を整理した用語集です。" },
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/glossary", title: "用語集", description: "このカテゴリの記事一覧を見る" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算する" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="用語の理解を深めたら、関連する解説記事や料金シミュレーターも合わせてご活用ください。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/glossary", label: "用語集の他の記事を読む" },
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
