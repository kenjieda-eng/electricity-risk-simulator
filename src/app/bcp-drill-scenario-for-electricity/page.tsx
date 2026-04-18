import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "BCP訓練シナリオ（電力編）｜社内演習の進め方";
const pageDescription =
  "電力停止を想定したBCP訓練シナリオの設計と、演習実施の手順を整理します。";
const pageUrl = "https://simulator.eic-jp.org/bcp-drill-scenario-for-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電力BCP"],
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
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "電力BCP・災害対策", url: "https://simulator.eic-jp.org/articles/energy-bcp" },
          { name: "BCP訓練シナリオ（電力編）" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-bcp" className="underline-offset-2 hover:underline">電力BCP・災害対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">BCP訓練シナリオ（電力編）</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">BCP訓練シナリオ（電力編）｜社内演習の進め方</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力停止を想定したBCP訓練シナリオの設計と、演習実施の手順を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力BCP訓練の意義</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力BCPは、計画を作るだけでは機能せず、定期的な訓練（演習）で手順を浸透させることが重要です。特に非常用電源の操作、手動作業への切替、データのバックアップ手順などは、訓練で初めて課題が可視化されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">年1回の全社訓練、四半期ごとの部門訓練、月次のチェックリスト確認、の3層で運用するのが標準的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">訓練シナリオの例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">シナリオ1：夕方のピーク時に1時間停電→非常用電源起動、業務継続範囲の確認、復旧手順の確認。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">シナリオ2：需給ひっ迫警報発令→節電レベル3実施、営業時間短縮、顧客への通知。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">シナリオ3：災害による長時間停電（24〜72時間）→全面BCP起動、従業員の安否確認、拠点間フェイルオーバー。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実施時のチェックポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①停電通知から業務停止までのタイムラグ計測、②非常用電源の起動時間と維持時間、③データ保全の成否、④顧客・取引先への連絡手順、⑤復旧後の業務再開手順、を確認項目に含めます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">訓練後は振り返り（KPT：Keep/Problem/Try）を実施し、BCP計画を継続的に改善します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">訓練実施の具体的な手順</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【準備フェーズ（訓練2週間前）】：対象部門の周知、訓練時間の調整、評価シートの準備、ファシリテーター任命。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【実施フェーズ（訓練当日）】：開始宣言、シナリオ投入、各部門のアクション実行、観察・記録、タイムライン追跡。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【振り返りフェーズ（訓練1週間後まで）】：評価シート集約、改善項目リスト化、BCP文書への反映、次回訓練への申送り。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">訓練の効果は、1回目より2回目、2回目より3回目と、実施回数を重ねるごとに向上します。継続的な実施が鍵です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">内閣府「事業継続ガイドライン」と中小企業庁「中小企業BCP策定運用指針」が、訓練シナリオ設計の参考になります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">業界団体（電機工業会・日本BCP協会）が提供するBCP訓練プログラムも、実施ノウハウを得るのに有用です。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.occto.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力広域的運営推進機関（OCCTO）</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

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
