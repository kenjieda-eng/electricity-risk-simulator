import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "EV充電の深夜電力活用とTOU料金｜時間帯別単価の最適化";
const pageDescription =
  "EV充電を時間帯別料金（TOU）の安い時間に集中させて電気代を削減する手法と、必要な設備を整理します。";
const pageUrl = "https://simulator.eic-jp.org/ev-charging-off-peak-tou";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "EV充電", "充電設備"],
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
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "EV・充電インフラ", url: "https://simulator.eic-jp.org/articles/ev-charging" },
          { name: "EV充電の深夜電力活用とTOU料金" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ev-charging" className="underline-offset-2 hover:underline">EV・充電インフラ</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">EV充電の深夜電力活用とTOU料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">EV充電の深夜電力活用とTOU料金｜時間帯別単価の最適化</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">EV充電を時間帯別料金（TOU）の安い時間に集中させて電気代を削減する手法と、必要な設備を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">TOU料金プランとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">TOU（Time of Use）料金は、時間帯により単価が変わる料金プランで、昼間ピーク・夜間オフピーク・中間時間の3段階が一般的です。夜間単価は昼間の30〜60%程度まで低下するケースが多いです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">EV充電は、深夜（オフピーク）に集中させることで、充電コストを大きく削減できます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">スマート充電制御</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">EV充電器にスマート充電機能があれば、電力系統の需給に応じて自動で充電開始・停止を制御できます。OCPP（Open Charge Point Protocol）準拠の機器なら、メーカーを問わずクラウド制御可能です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">スマート充電を活用することで、深夜電力帯のフル活用、契約電力超過の回避、需給調整市場への参加による対価獲得、などが可能です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入のチェックポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①TOU料金プランがエリア・電力会社にあるか、②充電器のスマート充電対応可否、③複数車両の充電スケジューリング、④充電量のデータ可視化、を確認します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">大規模なEVフリートを持つ物流業・運送業では、TOU＋スマート充電の組み合わせで年間数百万〜数千万円の節約事例もあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">TOU料金プラン比較（主要エリア）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【東京電力】業務用TOUプラン：昼間22〜26時間×20円差。年間EV10台なら40〜60万円節約。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【関西電力】エレサル法人プラン：昼間単価と夜間単価で約15円差。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【中部電力】法人TOU：夜間23時〜7時は通常単価から30%安。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【新電力】TOU＋市場連動ハイブリッドプランで、さらに柔軟な運用も可能。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">プラン選定時は、自社の充電スケジュール（夜間集中可能か・昼間必須か）を考慮します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">EV充電の時間帯最適化は、経産省「EV・PHV関連ガイドライン」および主要電力会社の料金プラン詳細で情報提供されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">需給調整市場への参加はアグリゲーター経由で、OCCTOとアグリゲーター各社の資料で手続き方法を確認できます。</p>
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
              { href: "/ev-charging-facility-contract", title: "EV充電設備の契約区分", description: "社内専用・従業員用・一般開放" },
              { href: "/corporate-ev-introduction", title: "法人EV導入時の電力コスト", description: "充電設備と契約区分" },
              { href: "/corporate-ev-roi-calculation", title: "社用車EV化のROI試算", description: "月間電気代と燃料費比較" },
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/ev-charging", title: "EV・充電インフラ", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/ev-charging", label: "EV・充電インフラの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
