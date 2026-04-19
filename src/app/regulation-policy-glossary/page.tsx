import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "電力制度・政策用語集｜電力自由化・容量市場・需給調整市場";
const pageDescription =
  "電力制度改革・政策に関する制度名・機関名を網羅的に整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/regulation-policy-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力用語", "電気代用語", "用語集", "電力制度用語"],
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
          { name: "電力制度・政策用語集" },
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
          <span className="text-slate-800">電力制度・政策用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電力制度・政策用語集｜電力自由化・容量市場・需給調整市場</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力制度は2016年の小売全面自由化以降、毎年のように改正・新設されています。主要制度・関連機関を時系列も意識して整理しました。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">市場制度</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">電力小売全面自由化</dt><dd className="mt-1">2016年4月から低圧需要家も電力会社を選択可能に。</dd></div>
              <div><dt className="font-semibold text-slate-900">発送電分離</dt><dd className="mt-1">2020年4月から大手電力会社の発電・送配電部門を法的分離。</dd></div>
              <div><dt className="font-semibold text-slate-900">容量市場</dt><dd className="mt-1">将来の供給力確保のための市場。2020年初回オークション・2024年から本格供給。</dd></div>
              <div><dt className="font-semibold text-slate-900">需給調整市場</dt><dd className="mt-1">リアルタイムの需給バランス維持のための調整力市場。2021年〜段階開設。</dd></div>
              <div><dt className="font-semibold text-slate-900">非化石価値取引市場</dt><dd className="mt-1">非化石電源の環境価値を取引する市場。2018年開設。</dd></div>
              <div><dt className="font-semibold text-slate-900">先物市場（電力先物）</dt><dd className="mt-1">TOCOM・EEXで取引される電力先物。価格ヘッジ手段。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連機関</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">OCCTO（電力広域的運営推進機関）</dt><dd className="mt-1">全国の電力需給・系統運用を調整する機関。</dd></div>
              <div><dt className="font-semibold text-slate-900">JEPX（日本卸電力取引所）</dt><dd className="mt-1">電力卸市場の運営機関。</dd></div>
              <div><dt className="font-semibold text-slate-900">一般送配電事業者</dt><dd className="mt-1">送電網を運営する事業者。10エリアに分割。</dd></div>
              <div><dt className="font-semibold text-slate-900">電力・ガス取引監視等委員会</dt><dd className="mt-1">電力市場の監視・トラブル対応を行う経産省の委員会。</dd></div>
              <div><dt className="font-semibold text-slate-900">資源エネルギー庁</dt><dd className="mt-1">エネルギー政策を所管する経産省の外局。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">制度名・法律</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">エネルギー基本計画</dt><dd className="mt-1">国のエネルギー政策の基本方針。3〜4年ごとに見直し。</dd></div>
              <div><dt className="font-semibold text-slate-900">GX推進法</dt><dd className="mt-1">グリーン・トランスフォーメーション推進法。2023年成立。</dd></div>
              <div><dt className="font-semibold text-slate-900">省エネ法</dt><dd className="mt-1">エネルギーの使用の合理化等に関する法律。1979年制定、2022年改正で名称変更。</dd></div>
              <div><dt className="font-semibold text-slate-900">電気事業法</dt><dd className="mt-1">電気事業の根拠法。</dd></div>
              <div><dt className="font-semibold text-slate-900">FIT法</dt><dd className="mt-1">再生可能エネルギー特別措置法。FIT・FIP制度の根拠。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">料金・調整</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">託送料金</dt><dd className="mt-1">一般送配電事業者の送電網利用料金。</dd></div>
              <div><dt className="font-semibold text-slate-900">レベニューキャップ</dt><dd className="mt-1">託送料金の総収入上限規制。2023年導入。</dd></div>
              <div><dt className="font-semibold text-slate-900">容量拠出金</dt><dd className="mt-1">小売電気事業者が容量市場へ拠出する金銭。</dd></div>
              <div><dt className="font-semibold text-slate-900">インバランス料金</dt><dd className="mt-1">計画値と実績値の差分に対する精算金。</dd></div>
            </dl>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/electricity_liberalization/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 電力システム改革</a></li>
            <li><a href="https://www.occto.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力広域的運営推進機関（OCCTO）</a></li>
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
