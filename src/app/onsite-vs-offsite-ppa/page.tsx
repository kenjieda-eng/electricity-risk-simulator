import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import PpaTypeRecommender from "../../components/market-data/PpaTypeRecommender";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "オンサイトPPAとオフサイトPPAの違い｜設置条件とコスト比較";
const pageDescription =
  "オンサイトPPAとオフサイトPPAの違いを、設置場所・規模・コスト・契約期間の観点で比較し、企業タイプ別の選び方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/onsite-vs-offsite-ppa";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["corporate-ppa"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "コーポレートPPA"],
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
          { name: "コーポレートPPA", url: "https://simulator.eic-jp.org/articles/corporate-ppa" },
          { name: "オンサイトPPAとオフサイトPPAの違い" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/corporate-ppa" className="underline-offset-2 hover:underline">コーポレートPPA</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">オンサイトPPAとオフサイトPPAの違い</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">オンサイトPPAとオフサイトPPAの違い｜設置条件とコスト比較</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">オンサイトPPAとオフサイトPPAの違いを、設置場所・規模・コスト・契約期間の観点で比較し、企業タイプ別の選び方を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">オンサイトPPAの特徴と向き不向き</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オンサイトPPAは、企業が所有または賃借している建物屋根・敷地内駐車場・遊休地に発電事業者が太陽光パネルを設置し、発電した電力を自社が買い取る方式です。企業側の初期投資はゼロで、工事費用・メンテナンスは発電事業者負担が基本です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">向いているのは、広い屋根を持つ工場・物流倉庫・ショッピングセンター・学校・病院などです。発電容量は敷地面積で上限が決まり、自社電力需要の全てをまかなうのは難しいケースが多く、他の再エネ調達と組み合わせる運用が現実的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">オフサイトPPAの特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オフサイトPPAでは、発電事業者が自社とは離れた場所に太陽光や風力の発電所を建設し、送電網を通じて企業へ供給します。発電容量を自由に設計でき、企業の需要量に合わせたスケールで調達できる点がメリットです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ただし託送料金（送電利用料）や需給管理手数料が上乗せされるため、オンサイトよりも1kWhあたり3〜6円程度のコスト増になりやすい傾向があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">コスト・契約条件の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オンサイトは託送料不要で単価が比較的低く、初期規模は数百kW〜数MW。オフサイトは託送料ありで単価は高めだが規模は10MW以上も可能。大規模な再エネ調達を目指す場合はオフサイトが選ばれやすく、敷地条件の良い企業は両方の併用を検討します。</p>
          </section>
        </section>

        <PpaTypeRecommender />

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
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/corporate-ppa", label: "コーポレートPPAの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
