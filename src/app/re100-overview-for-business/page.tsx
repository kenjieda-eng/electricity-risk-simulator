import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "RE100とは｜法人が参加する意義と実務フロー";
const pageDescription =
  "RE100は事業用電力を100%再エネで賄うことを宣言する国際イニシアチブです。加盟要件、参加コスト、実務上の進め方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/re100-overview-for-business";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["decarbonization"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "RE100"],
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
        datePublished="2026-04-17"
        faq={FAQ_ITEMS}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "脱炭素・GX対応", url: "https://simulator.eic-jp.org/articles/decarbonization" },
          { name: "RE100とは" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/decarbonization" className="underline-offset-2 hover:underline">脱炭素・GX対応</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">RE100とは</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">RE100とは｜法人が参加する意義と実務フロー</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">RE100は事業用電力を100%再エネで賄うことを宣言する国際イニシアチブです。加盟要件、参加コスト、実務上の進め方を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">RE100の基本</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">RE100（Renewable Energy 100%）は、2014年にThe Climate Group（英）とCDPが共同で始めた国際イニシアチブで、事業に使用する電力を2050年までに100%再エネに転換することを宣言する企業の集まりです。参加企業は世界で400社超、日本企業は90社超が加盟（2026年時点）で、製造業から金融業まで幅広い業種が参加しています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">加盟には年間電力消費量が100GWh以上（中小企業は要件緩和あり）、明確な目標年（遅くとも2050年）、年次報告の3条件が主要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">日本企業が再エネ100%を達成する方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本のRE100加盟企業の調達手段は、非化石証書付き電力メニュー、オフサイトPPA、オンサイト太陽光、J-クレジットの4つが代表的です。初期は非化石証書付きメニューが簡便ですが、長期では自家発電・PPAへの移行が主流です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">コーポレートPPAは電源を特定できる点と、価格ヘッジ効果がある点で注目されていますが、契約期間は10〜20年と長期化する傾向があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">参加のハードルとコスト試算</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">再エネ100%化による電力コストの上乗せは、選択する手段によりkWhあたり1〜3円程度の追加負担が生じるケースが多いです。年間100GWh規模なら年1〜3億円、1GWh規模でも年100〜300万円の追加コストになります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">取引先からのScope3情報開示要請、ESG投資評価、採用ブランディングといった定量化しにくい便益と比較して判断します。</p>
          </section>
        </section>

        <section className="mt-6 space-y-6">

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務でよくある落とし穴</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>検討段階で複数社の見積・提案を比較せず、初回提示を採用してしまうケース</li>
              <li>会計・税務処理の事前確認不足による仕訳修正の発生</li>
              <li>契約条項（解約・自動更新・違約金）の確認漏れによる後続トラブル</li>
              <li>関連部門（経理・法務・施設・経営）への早期共有不足</li>
              <li>データ更新頻度の低さ（年1回以下）による効果測定の困難化</li>
            </ul>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務チェックリスト</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li>□ 現状コスト・排出量・契約条件の棚卸しが完了している</li>
              <li>□ 複数の選択肢（3案以上）を比較検討している</li>
              <li>□ 投資回収期間・TCO・ROIを定量評価している</li>
              <li>□ 会計・税務・法務面の影響を確認済みである</li>
              <li>□ 関連部門への情報共有・合意形成ができている</li>
              <li>□ 効果測定のKPI・計測方法を定義している</li>
              <li>□ 万一の撤退・変更時の対応策を用意している</li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">出典・参考情報</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>経済産業省 資源エネルギー庁 公表資料</li>
              <li>電力・ガス取引監視等委員会 監視報告</li>
              <li>環境省 温室効果ガス排出量算定・報告・公表制度</li>
              <li>電力広域的運営推進機関（OCCTO）需給・供給力データ</li>
              <li>日本卸電力取引所（JEPX）取引データ</li>
              <li>一般社団法人エネルギー情報センター 独自調査</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">※ 各数値・制度は公表時点の情報。最新情報は各機関公式サイトをご確認ください。</p>
          </section>
        </section>

        <MarketDataFaq items={FAQ_ITEMS} />

        <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-04-18" />


        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/decarbonization", label: "脱炭素・GX対応の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
