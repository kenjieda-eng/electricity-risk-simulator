import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "グローバル企業の再エネ調達戦略｜国別の調達手段マッピング";
const pageDescription =
  "多国籍企業が各国拠点で再エネを調達する戦略と、国別制度の違いを整理します。";
const pageUrl = "https://simulator.eic-jp.org/global-renewable-procurement-strategy";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["global-energy"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力"],
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
        faq={FAQ_ITEMS}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "海外拠点・グローバルエネルギー", url: "https://simulator.eic-jp.org/articles/global-energy" },
          { name: "グローバル企業の再エネ調達戦略" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/global-energy" className="underline-offset-2 hover:underline">海外拠点・グローバルエネルギー</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">グローバル企業の再エネ調達戦略</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">グローバル企業の再エネ調達戦略｜国別の調達手段マッピング</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">多国籍企業が各国拠点で再エネを調達する戦略と、国別制度の違いを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">グローバル再エネ調達の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">多国籍企業がRE100やSBT目標を達成するには、各国拠点での再エネ調達が必要です。国により利用できる調達手段（再エネメニュー・PPA・証書）と制度的成熟度が大きく異なり、グローバル戦略は国別の調達手段マッピングから始まります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">主要国では米国・欧州がPPA中心、日本は非化石証書とPPAの併用、中国は新興市場の形成中、東南アジアは制度整備の途上です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">国別調達手段の代表例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">米国：バーチャルPPA・フィジカルPPAが主流、REC（再エネ証書）市場も活発。欧州：PPA・Guarantees of Origin（GO）・電力メニューの組み合わせ。日本：非化石証書・コーポレートPPA・再エネメニュー。中国：Green Energy Certificates（GEC）市場の拡大。東南アジア：国別制度整備の途上、現地PPA・証書を組み合わせ。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">国により価格レベル・契約期間・財務的扱いが異なるため、グループ全体の目標達成では国別にポートフォリオを組むアプローチが主流です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">戦略設計のポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①グローバル目標から各国配分、②各国の調達手段・単価・制度の棚卸し、③コスト最小・リスク分散のポートフォリオ設計、④定期的なレビュー、のサイクルで戦略を運用します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グローバル調達は、本社サステナビリティチーム主導で進めるのが効果的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要国の調達手段と単価（比較表）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【米国】バーチャルPPA 30〜50 USD/MWh｜REC 3〜5 USD/MWh｜電力メニュー 20〜40 USD/MWh。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【欧州】PPA 40〜70 EUR/MWh｜Guarantees of Origin 1〜5 EUR/MWh｜電力メニュー 60〜120 EUR/MWh。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【日本】非化石証書 0.3〜3 JPY/kWh｜オフサイトPPA 14〜22 JPY/kWh｜再エネメニュー 22〜28 JPY/kWh。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【中国】GEC 50〜150 CNY/MWh｜PPA 300〜500 CNY/MWh。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">為替・税制・制度で実質コストが変動するため、その年の実勢値を継続モニタリングします。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">主要国の再エネ調達制度はIEA Annual Report、RE100 Annual Disclosure Report、各国政府の公表資料で確認できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">国際的な証書基準（I-REC）は、日本でも対応が進みつつあり、グローバル統一のトラッキング体制構築が進んでいます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.there100.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">RE100 (The Climate Group)</a></li>
            <li><a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">IEA (国際エネルギー機関)</a></li>
            <li><a href="https://www.cdp.net/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CDP (Disclosure Insight Action)</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
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
              { href: "/global-energy-procurement-overview", title: "海外拠点の電力調達", description: "各国制度と価格水準" },
              { href: "/major-countries-electricity-price-comparison", title: "主要国電気料金比較", description: "日本・米国・欧州・東南アジア" },
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/global-energy", title: "海外拠点・グローバルエネルギー", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/global-energy", label: "海外拠点・グローバルエネルギーの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
