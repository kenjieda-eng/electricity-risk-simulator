import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "データセンター立地と送電網制約｜系統空き容量の確認方法";
const pageDescription =
  "データセンター新設時に直面する送電網制約と、系統空き容量の確認プロセスを整理します。";
const pageUrl = "https://simulator.eic-jp.org/datacenter-location-grid-constraints";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["datacenter-ai-demand"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "データセンター電力"],
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
          { name: "データセンター・AI需要", url: "https://simulator.eic-jp.org/articles/datacenter-ai-demand" },
          { name: "データセンター立地と送電網制約" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/datacenter-ai-demand" className="underline-offset-2 hover:underline">データセンター・AI需要</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">データセンター立地と送電網制約</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">データセンター立地と送電網制約｜系統空き容量の確認方法</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">データセンター新設時に直面する送電網制約と、系統空き容量の確認プロセスを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">送電網制約の現状</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">データセンター大規模化に伴い、日本国内でも系統接続が受けられない・長時間待たされる事例が増えています。特に首都圏・関西圏の主要エリアでは系統空き容量が逼迫しており、新設が困難なケースがあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">制約の背景には、①送電網の老朽化・増強遅延、②再エネ接続の増加、③特定エリアへの需要集中、があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">空き容量の確認方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①一般送配電事業者のWeb公開情報（空き容量マップ）、②事前協議（正式な接続検討申請前の相談）、③本申請（接続検討申込）、の3段階で確認します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">事前協議でも数ヶ月、本申請から接続承諾まで半年〜2年かかるケースもあり、早期着手が重要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ノンファーム型接続など新方式</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">近年、系統混雑エリアでの接続を可能にするため、ノンファーム型接続（需給逼迫時に接続制限を受け入れる代わりに接続可能）、容量市場連動型などの新方式が導入されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">データセンター事業者は、従来のファーム接続とノンファーム接続のハイブリッド運用を検討することで、立地選択肢を広げています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代替立地としての地方エリア</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【北海道】再エネ豊富、冷涼な気候で冷却コスト低。課題：本州との連系線容量制約。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【東北】再エネ発電量多い、用地広い。課題：需要地（首都圏）への送電制約。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【九州】太陽光出力大きい、ただし出力制御頻発エリアあり。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">地方立地は、再エネ調達の容易さ・用地コスト低減・気候メリットを享受できる一方、サービス遅延（レイテンシ）の影響があるため、用途に応じた設計が必要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">系統空き容量情報は、各一般送配電事業者（例：東京電力パワーグリッド、関西電力送配電）の公式サイトで随時更新されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ノンファーム型接続・容量市場連動型の制度詳細は、電力広域的運営推進機関（OCCTO）および経産省「電力ネットワーク次世代化小委員会」の資料で確認できます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.occto.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力広域的運営推進機関（OCCTO）</a></li>
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
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
              { href: "/datacenter-power-demand-trend", title: "データセンターの電力需要動向", description: "日本・世界の状況" },
              { href: "/ai-workload-energy-impact", title: "生成AIの電力消費", description: "学習・推論の実態" },
              { href: "/datacenter-cooling-optimization", title: "データセンター冷却最適化", description: "PUE改善と液冷" },
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/datacenter-ai-demand", title: "データセンター・AI需要", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/datacenter-ai-demand", label: "データセンター・AI需要の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
