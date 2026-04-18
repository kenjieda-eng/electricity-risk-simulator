import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import SmeQuickDiagnosis from "../../components/market-data/SmeQuickDiagnosis";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "中小企業の電気料金の基礎｜低圧契約を理解する";
const pageDescription =
  "中小企業の電気料金はほぼ低圧契約。高圧との違い、料金体系、見直しの余地を分かりやすく整理します。";
const pageUrl = "https://simulator.eic-jp.org/sme-electricity-basics";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["sme-guide"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "中小企業電気代", "低圧契約"],
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
          { name: "中小企業・小規模事業者向け", url: "https://simulator.eic-jp.org/articles/sme-guide" },
          { name: "中小企業の電気料金の基礎" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/sme-guide" className="underline-offset-2 hover:underline">中小企業・小規模事業者向け</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">中小企業の電気料金の基礎</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">中小企業の電気料金の基礎｜低圧契約を理解する</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">中小企業の電気料金はほぼ低圧契約。高圧との違い、料金体系、見直しの余地を分かりやすく整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低圧と高圧の違い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約電力50kW未満は低圧、50kW以上は高圧、2,000kW以上は特別高圧と分類されます。中小企業の多くは低圧（低圧電力・低圧電灯）に該当し、電柱から直接電力を引き込む形が一般的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">高圧と違い自前のキュービクル設備が不要で、保安費用も発生しません。一方、電力量単価は高圧より高めで、削減の余地は限定的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低圧プランの種類</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">低圧電力（動力）は業務用冷蔵庫・エアコン・業務用機器向け、低圧電灯は照明・コンセント向けです。両者は契約単位が異なり、プランも別々に選べます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従量電灯B/C、動力プラン、時間帯別料金、市場連動プランなど、地域と電力会社によって選択肢があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">見直しの着眼点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①電力会社の切り替え（新電力比較）、②プランの切り替え（時間帯別・市場連動）、③契約アンペアの見直し、④設備の省エネ化、の順に検討します。切り替えは違約金・手数料が少なく、即効性のある打ち手です。</p>
          </section>
        </section>

        <SmeQuickDiagnosis />

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
              { href: "/articles/sme-guide", title: "中小企業・小規模事業者向け", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/sme-guide", label: "中小企業・小規模事業者向けの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
