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

const pageTitle = "自動更新条項のリスク｜意図しない長期拘束を避ける契約管理";
const pageDescription =
  "電力契約の自動更新条項による意図しない契約継続を防ぐため、通知期限管理と解除の流れを整理します。";
const pageUrl = "https://simulator.eic-jp.org/auto-renewal-clause-risks";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["contract-legal"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金"],
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
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "自動更新条項のリスク" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/contract-legal" className="underline-offset-2 hover:underline">契約書・約款の読み方</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">自動更新条項のリスク</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">自動更新条項のリスク｜意図しない長期拘束を避ける契約管理</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力契約の自動更新条項による意図しない契約継続を防ぐため、通知期限管理と解除の流れを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自動更新条項の典型</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">「契約期間満了の3ヶ月前までに解約通知がなければ、同条件で1年間自動更新する」といった条項が一般的です。通知を失念すると、意図せず1〜3年延長されることになります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特に複数拠点を管理している企業では、拠点ごとに契約期間・通知期限が異なり、管理漏れが起きやすい領域です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">リスクと失敗事例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①通知期限を見逃し、高単価契約が延長、②新規見積取得中に自動更新が発動、③他社への切替予定だが違約金発生のため断念、の3パターンがよくある失敗です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">年間数百万円規模のコスト増につながる可能性があり、契約台帳の整備が必須です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約管理のベストプラクティス</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①全拠点の契約期間・通知期限を一覧化、②更新3ヶ月前・6ヶ月前にアラート設定、③更新月の4〜6ヶ月前から見直し検討開始、④解約通知の書面送付と受領確認、の運用ルールを社内で整備します。</p>
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
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/contract-legal", label: "契約書・約款の読み方の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
