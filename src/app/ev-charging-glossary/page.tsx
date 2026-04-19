import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "EV充電インフラ用語集｜CHAdeMO・OCPP・V2H・急速充電";
const pageDescription =
  "EV充電設備・規格・運用に関する用語を整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/ev-charging-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力用語", "電気代用語", "用語集", "EV充電用語"],
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
          { name: "用語集", url: "https://simulator.eic-jp.org/articles/glossary" },
          { name: "EV充電インフラ用語集" },
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
          <span className="text-slate-800">EV充電インフラ用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">EV充電インフラ用語集｜CHAdeMO・OCPP・V2H・急速充電</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">EV普及により充電インフラの専門用語が急増しています。規格・通信プロトコル・出力タイプから運用方式まで、頻出用語を一覧で確認できます。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">充電方式の用語</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">普通充電</dt><dd className="mt-1">AC200Vでの低速充電。出力3〜6kW、フル充電に8〜12時間。</dd></div>
              <div><dt className="font-semibold text-slate-900">急速充電</dt><dd className="mt-1">DC高出力での充電。50〜350kW、フル充電に30分〜1時間。</dd></div>
              <div><dt className="font-semibold text-slate-900">超急速充電（350kW以上）</dt><dd className="mt-1">最新世代の超高速充電。Hyundai・Porscheなどの新型EV対応。</dd></div>
              <div><dt className="font-semibold text-slate-900">AC充電</dt><dd className="mt-1">交流充電。普通充電が代表。</dd></div>
              <div><dt className="font-semibold text-slate-900">DC充電</dt><dd className="mt-1">直流充電。急速・超急速充電が代表。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規格・プロトコル</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">CHAdeMO</dt><dd className="mt-1">日本発のDC急速充電規格。日本・アジアで主流。</dd></div>
              <div><dt className="font-semibold text-slate-900">CCS（Combined Charging System）</dt><dd className="mt-1">欧米主流のDC急速充電規格。Combo1・Combo2方式。</dd></div>
              <div><dt className="font-semibold text-slate-900">Tesla Supercharger / NACS</dt><dd className="mt-1">Tesla独自の充電規格。北米でNACS（北米標準）化が進む。</dd></div>
              <div><dt className="font-semibold text-slate-900">Type 2</dt><dd className="mt-1">欧州主流のAC充電コネクタ。</dd></div>
              <div><dt className="font-semibold text-slate-900">OCPP（Open Charge Point Protocol）</dt><dd className="mt-1">充電器とクラウドサービスの通信標準プロトコル。</dd></div>
              <div><dt className="font-semibold text-slate-900">ISO 15118</dt><dd className="mt-1">車両・充電器間の通信規格。Plug & ChargeやV2G対応の基盤。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">V2H・V2G</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">V2H（Vehicle to Home）</dt><dd className="mt-1">EVから家庭への給電。</dd></div>
              <div><dt className="font-semibold text-slate-900">V2B（Vehicle to Building）</dt><dd className="mt-1">EVから業務用建物への給電。</dd></div>
              <div><dt className="font-semibold text-slate-900">V2G（Vehicle to Grid）</dt><dd className="mt-1">EVから電力系統への給電。需給調整・電力市場への参加。</dd></div>
              <div><dt className="font-semibold text-slate-900">Bidirectional Charger</dt><dd className="mt-1">双方向充放電器。V2H/V2G対応。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">運用・課金</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">スマート充電</dt><dd className="mt-1">需給状況・料金単価に応じて自動制御する充電。</dd></div>
              <div><dt className="font-semibold text-slate-900">Time-of-Use（TOU）料金</dt><dd className="mt-1">時間帯別料金。深夜充電で電気代節約。</dd></div>
              <div><dt className="font-semibold text-slate-900">RFIDカード</dt><dd className="mt-1">充電認証用ICカード。従業員・契約者識別に使用。</dd></div>
              <div><dt className="font-semibold text-slate-900">充電ネットワーク</dt><dd className="mt-1">複数事業者の充電器を相互利用可能にする連携サービス。</dd></div>
            </dl>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.chademo.com/ja/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CHAdeMO協議会</a></li>
            <li><a href="https://www.meti.go.jp/policy/automobile/evphv/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 EV充電インフラ</a></li>
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
