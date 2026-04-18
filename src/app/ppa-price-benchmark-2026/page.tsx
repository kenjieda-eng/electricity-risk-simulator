import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "PPA価格の相場と交渉ポイント｜2026年時点の円/kWh水準";
const pageDescription =
  "コーポレートPPAの単価相場、固定・市場連動の組み合わせ方、交渉で押さえるべき論点を整理します。";
const pageUrl = "https://simulator.eic-jp.org/ppa-price-benchmark-2026";

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
          { name: "コーポレートPPA", url: "https://simulator.eic-jp.org/articles/corporate-ppa" },
          { name: "PPA価格の相場と交渉ポイント" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/corporate-ppa" className="underline-offset-2 hover:underline">コーポレートPPA</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">PPA価格の相場と交渉ポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">PPA価格の相場と交渉ポイント｜2026年時点の円/kWh水準</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">コーポレートPPAの単価相場、固定・市場連動の組み合わせ方、交渉で押さえるべき論点を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">PPA単価の相場</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2026年時点の日本におけるコーポレートPPA単価は、オンサイト太陽光で12〜18円/kWh、オフサイト太陽光で14〜22円/kWh、バーチャルPPAで10〜16円/kWh程度が一般的です（環境価値込み）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これは通常の小売電気料金（法人高圧で20〜30円/kWh）より低いケースもあり、価格ヘッジと脱炭素の両立手段として注目されています。ただし立地・規模・発電事業者により幅があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">価格構成と交渉余地</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">PPA単価は、①発電コスト（設備・O&M・金利）、②利益、③託送料金（オフサイト）、④需給管理手数料、⑤環境価値、で構成されます。交渉余地が大きいのは、契約期間・固定価格の期間・支払い条件です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約期間を20年→15年に短縮すると単価は1〜2円/kWh上昇する代わりに、需要変動リスクが減少します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約形態の選び方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①完全固定価格：20年間一定、シンプルだが市場下落時に割高。②市場連動＋ヘッジ：市場価格連動をベースに上下限を設定、変動ある程度受容する企業向け。③バーチャル（価格差精算）：物理調達と分離、会計処理が複雑だが柔軟性最大。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自社のリスク許容度・会計方針・調達規模で選定します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">PPA価格比較の実例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【比較例（想定値・環境価値込み）】オンサイト屋根太陽光（1MW、20年契約）：14円/kWh｜オフサイト太陽光（10MW、20年契約、託送含）：17円/kWh｜バーチャルPPA（10MW、15年契約）：13円/kWh（市場価格連動、精算あり）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">同条件で小売電気料金（法人高圧、再エネメニュー）は22〜26円/kWh程度。PPAの方がkWhあたり5〜10円安い結果となるケースが多いですが、長期コミットメントを前提とする点に留意が必要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">PPAの価格動向は経産省「コーポレートPPA推進ガイドブック」、RE100の「RE100 Annual Disclosure Report」でトレンドが確認できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">制度面では、2022年に非化石証書の需要家直接取引が解禁され、バーチャルPPAの実施環境が整備されました。託送料金（レベニューキャップ制度）の動向もPPA価格に影響します。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">IEA (国際エネルギー機関)</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/corporate-ppa-overview", title: "コーポレートPPAとは", description: "3形態の基本と選び方" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイトPPAとオフサイトPPA", description: "設置条件とコスト比較" },
              { href: "/virtual-ppa-explained", title: "バーチャルPPAとは", description: "仕組みと日本での実施" },
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX", description: "関連カテゴリも合わせて読む" },
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
