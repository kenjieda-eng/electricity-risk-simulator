import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "法人の脱炭素対応の全体像｜電力調達と情報開示の両輪";
const pageDescription =
  "企業の脱炭素対応は、排出量の把握、削減計画、再エネ調達、情報開示の4段階で設計します。それぞれの実務ポイントと関連制度を整理します。";
const pageUrl = "https://simulator.eic-jp.org/corporate-decarbonization-overview";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["decarbonization"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "脱炭素", "再エネ電力"],
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
          { name: "法人の脱炭素対応の全体像" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/decarbonization" className="underline-offset-2 hover:underline">脱炭素・GX対応</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">法人の脱炭素対応の全体像</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の脱炭素対応の全体像｜電力調達と情報開示の両輪</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">企業の脱炭素対応は、排出量の把握、削減計画、再エネ調達、情報開示の4段階で設計します。それぞれの実務ポイントと関連制度を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">脱炭素対応が企業に求められる理由</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">気候変動対応は、2015年のパリ協定を起点に、世界の機関投資家と大手取引先からの要求事項として急速に広がりました。日本でも2050年カーボンニュートラル宣言、2030年GHG46%削減目標が国策として示され、上場企業を中心に有価証券報告書でのサステナビリティ情報開示が義務化されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業にとっても、大手サプライヤーからのScope3（サプライチェーン排出量）の情報提供要請が増えており、脱炭素対応は競争条件の一部に組み込まれつつあります。コストではなく取引継続の条件として整理する企業が増えています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">脱炭素対応の4段階（測る・減らす・変える・伝える）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">第1段階は「測る」。自社のScope1（直接排出）、Scope2（電力由来）、Scope3（その他間接）を把握し、排出源を特定します。法人向け電気料金に関わるのは主にScope2です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">第2段階は「減らす」。省エネ投資、設備更新、運用改善でそもそもの消費量を下げます。第3段階が「変える」で、電力調達を再エネに切り替えます。手段はPPA、非化石証書購入、再エネ電力プラン契約の3つが主流です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">第4段階は「伝える」。CDP・TCFD・SBTiなどの国際枠組みに沿って、投資家や取引先に進捗を開示します。開示の品質は第三者保証の有無で評価が分かれます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力調達で企業が選ぶ選択肢</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力調達の観点では、①再エネ100%プラン、②非化石証書の自主購入、③コーポレートPPAの3択です。コストは①と②が近く、③は長期契約で単価を固定できる代わりに契約期間が10年以上と長くなります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Scope2の報告では「マーケット基準」と「ロケーション基準」の両方を開示するのが原則で、マーケット基準ではトラッキング付き非化石証書や再エネメニューを反映できます。</p>
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
