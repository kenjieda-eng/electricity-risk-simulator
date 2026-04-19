import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "低圧電気契約の用語集｜従量電灯・低圧電力・契約アンペア";
const pageDescription =
  "低圧電気契約に関する用語と、料金プラン・契約条件の基本概念を整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/low-voltage-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力用語", "電気代用語", "用語集", "低圧契約用語"],
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
          { name: "低圧電気契約の用語集" },
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
          <span className="text-slate-800">低圧電気契約の用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">低圧電気契約の用語集｜従量電灯・低圧電力・契約アンペア</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">中小企業・小規模事業者の多くが該当する低圧契約。プラン名・契約条件・料金算定の用語を、初めての担当者でも理解できるように整理しました。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">プランの用語</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">従量電灯A/B/C</dt><dd className="mt-1">低圧需要家向けの3段階料金プラン。AはB・Cより小規模向けで、地域により細分化。</dd></div>
              <div><dt className="font-semibold text-slate-900">低圧電力（動力）</dt><dd className="mt-1">業務用機器（モーター・冷蔵・空調）向けの低圧プラン。基本料金は契約kW単位。</dd></div>
              <div><dt className="font-semibold text-slate-900">時間帯別料金</dt><dd className="mt-1">昼夜・季節で単価が変動するプラン。夜間操業の事業所に有利。</dd></div>
              <div><dt className="font-semibold text-slate-900">オール電化プラン</dt><dd className="mt-1">ガスを使わず電気のみで運用する事業所向け。低圧の中で割安。</dd></div>
              <div><dt className="font-semibold text-slate-900">市場連動プラン</dt><dd className="mt-1">JEPX市場価格に連動した単価のプラン。価格変動リスクあり。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約条件の用語</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">契約アンペア</dt><dd className="mt-1">低圧電灯契約での契約容量。10A〜60A単位で設定。</dd></div>
              <div><dt className="font-semibold text-slate-900">主開閉器</dt><dd className="mt-1">低圧需要家のメイン分電盤の主開閉器。契約容量を物理的に制限。</dd></div>
              <div><dt className="font-semibold text-slate-900">供給地点特定番号（SPIN）</dt><dd className="mt-1">電力供給地点を一意識別する22桁の番号。契約切替時に必須。</dd></div>
              <div><dt className="font-semibold text-slate-900">引込線</dt><dd className="mt-1">電柱から建物へ電力を引き込む線。位置・容量で施工方法が変わる。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">料金算定の用語</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">基本料金</dt><dd className="mt-1">契約アンペア・契約kWに応じた固定料金。使用量ゼロでも発生。</dd></div>
              <div><dt className="font-semibold text-slate-900">電力量料金</dt><dd className="mt-1">使用量（kWh）に応じた従量料金。3段階で単価が上昇するプランが多い。</dd></div>
              <div><dt className="font-semibold text-slate-900">最低料金</dt><dd className="mt-1">契約形態によらず最低限発生する料金。基本料金とは別概念。</dd></div>
              <div><dt className="font-semibold text-slate-900">燃料費調整額</dt><dd className="mt-1">燃料価格変動を反映する調整額。kWhあたり加減算。</dd></div>
              <div><dt className="font-semibold text-slate-900">再エネ賦課金</dt><dd className="mt-1">再エネ普及のための賦課金。kWhあたり加算。</dd></div>
            </dl>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/electricity_liberalization/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 電気料金のしくみ</a></li>
            <li><a href="https://www.chusho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業庁 電力コスト対策</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/high-voltage-glossary", title: "高圧・特別高圧電気契約の用語集", description: "高圧・特別高圧の電気契約・受変電設備に関する専門用語を一覧で整理した用語集です。" },
              { href: "/demand-power-glossary", title: "デマンド・契約電力関連用語集", description: "デマンド管理・契約電力の決定方式に関する専門用語を整理した用語集です。" },
              { href: "/renewable-detail-glossary", title: "再エネ調達詳細用語集", description: "再エネ調達の手段・国際証書・追加性に関する詳細用語を整理した発展編用語集です。" },
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
