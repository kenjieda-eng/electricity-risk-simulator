import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "停電時の損失試算と投資判断｜業種別の時間当たり損失額";
const pageDescription =
  "停電が発生した場合の売上損失・追加費用を業種別に試算し、BCP投資の判断材料にする方法を整理します。";
const pageUrl = "https://simulator.eic-jp.org/outage-loss-simulation-by-industry";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["energy-bcp"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電力BCP", "停電対応"],
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
          { name: "電力BCP・災害対策", url: "https://simulator.eic-jp.org/articles/energy-bcp" },
          { name: "停電時の損失試算と投資判断" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-bcp" className="underline-offset-2 hover:underline">電力BCP・災害対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">停電時の損失試算と投資判断</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">停電時の損失試算と投資判断｜業種別の時間当たり損失額</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">停電が発生した場合の売上損失・追加費用を業種別に試算し、BCP投資の判断材料にする方法を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">停電損失の構成要素</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">停電による損失は、①機会損失（売上減少）、②復旧費用（再起動・廃棄・修繕）、③人件費（残業・振替）、④信用損失（顧客離脱・契約違反）、の4要素で構成されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">業種・停電時間により、これらの比重は大きく変わります。短時間停電は②③、長時間停電は①④の比重が大きくなります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別の損失目安</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">データセンター：時間当たり数百万〜数千万円（SLA違反含む）。製造業：時間当たり数十万〜数百万円（生産停止）。飲食店：時間当たり数万〜数十万円。小売店：数万〜数十万円。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これらはあくまで目安で、自社の事業規模・利益率・復旧体制で変わります。過去の停電事例や計画停電の経験から、自社固有の数字を持つことが重要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BCP投資のROI判断</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">損失額×発生頻度（期待値）がBCP投資額を上回る場合、投資が正当化されます。停電確率は地域・過去実績で異なり、年0.5〜2回程度の発生を想定することが多いです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">投資判断は、純経済性だけでなく、顧客・従業員・サプライチェーンへの責任という観点も含めて総合的に検討します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">停電損失試算の業種別テンプレート</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【データセンター（月間売上1億円）】時間損失：50〜500万円（SLA違反補償含む）。6時間停電で総損失：数千万円。UPS＋非常用電源＋マイクログリッドへの投資は短期回収可能。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【食品製造業（月間売上5,000万円）】時間損失：10〜100万円。原料廃棄・生産停止含む。6時間停電で総損失：数百万円〜1,000万円規模。非常用電源投資が妥当。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【物流倉庫（月間売上3,000万円）】時間損失：5〜30万円。冷凍設備は追加リスク。冷凍倉庫は数時間の停電でも数千万円の商品廃棄発生の可能性。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">試算時は、売上損失と復旧費用の両方を含めた「直接損失」と、顧客離脱・評判毀損の「間接損失」を分けて考えるのが実務的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">内閣府「事業継続ガイドライン」、経産省「企業BCP策定運用指針」が、BCP策定時の標準的なガイドラインです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">停電損失の業界統計データは、BCPコンサル会社の調査レポート、電気新聞・日経新聞などで定期的に公表されます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">IEA (国際エネルギー機関)</a></li>
            <li><a href="https://www.occto.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力広域的運営推進機関（OCCTO）</a></li>
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
              { href: "/energy-bcp-overview", title: "法人の電力BCP概論", description: "停電・需給ひっ迫への備え" },
              { href: "/emergency-power-source-options", title: "非常用電源の選び方", description: "ディーゼル・ガス・蓄電池の比較" },
              { href: "/microgrid-for-business", title: "マイクログリッドとは", description: "自立運転可能な電力システム" },
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/ev-charging", title: "EV・充電インフラ", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/energy-bcp", label: "電力BCP・災害対策の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
