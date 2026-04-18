import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "中小企業でも使えるPPAメニュー｜小規模向けアグリゲーションPPAの仕組み";
const pageDescription =
  "従来は大企業向けだったPPAを、中小企業が使えるようにしたアグリゲーション型や小規模向けメニューを整理します。";
const pageUrl = "https://simulator.eic-jp.org/sme-accessible-ppa-options";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "コーポレートPPA", "中小企業電気代"],
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
          { name: "コーポレートPPA", url: "https://simulator.eic-jp.org/articles/corporate-ppa" },
          { name: "中小企業でも使えるPPAメニュー" },
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
          <span className="text-slate-800">中小企業でも使えるPPAメニュー</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">中小企業でも使えるPPAメニュー｜小規模向けアグリゲーションPPAの仕組み</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">従来は大企業向けだったPPAを、中小企業が使えるようにしたアグリゲーション型や小規模向けメニューを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中小企業がPPAに参加しにくかった理由</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従来のコーポレートPPAは、発電事業者が需要家1社と長期契約を結ぶ形が主流で、最低契約規模が数MW以上・年間数億円規模の調達が必要でした。中小企業にとっては契約ハードルが高く、参加は困難でした。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">また、20年の長期契約に耐える信用力（格付け）も要求されるため、中堅以下の企業には参入の壁がありました。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">アグリゲーション型PPAの仕組み</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">アグリゲーターが複数の中小需要家をまとめ、発電事業者と1つの大型PPA契約を結ぶスキームです。各需要家は自社の需要量（数百MWh/年〜）に応じて契約を切り出すことで、小規模でも参加可能になります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本では2022年以降、自治体や地銀系のアグリゲーターが参入し、中小製造業・病院・学校などの参加が増えています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">小規模向けメニューの選び方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①電力会社の再エネ100%メニュー（トラッキング付き）、②地域エネルギー会社のPPAメニュー、③アグリゲーターのグループPPA、の3つが中小企業の選択肢です。①は手軽、②は地域貢献、③は価格ヘッジと再エネ由来が両立できる特徴があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約期間は5〜15年、契約規模は年間100MWh〜と、従来より参入しやすい条件のメニューが増えています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中小企業向けPPAの選定チェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 自社の年間電力使用量（MWh）を把握している</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 契約期間（5年・10年・15年）のコミット可否を社内で合意している</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 価格変動リスク（固定か市場連動か）の方針が定まっている</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 信用力要件（契約保証金・親会社保証）を確認している</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 中途解約時のペナルティ条項を理解している</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 環境価値（トラッキング情報付き）がScope2報告に使える形式か確認している</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業向けのPPA・再エネ調達支援は、中小企業庁・経産省の補助金事業として展開されており、公募条件は毎年更新されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">RE100「SME Climate Hub」では、中小企業向けの簡易SBT取得・再エネ調達手段が紹介されており、参考になります。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.chusho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業庁</a></li>
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
