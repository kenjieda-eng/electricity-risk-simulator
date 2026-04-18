import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "テナント契約と電気代の関係｜サブメーター・按分の扱い";
const pageDescription =
  "複数テナントが入居するビル・商業施設で、電気代をどう按分・請求するかのルールと実務を整理します。";
const pageUrl = "https://simulator.eic-jp.org/tenant-sub-meter-electricity-billing";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "テナント電気代"],
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
          { name: "中小企業・小規模事業者向け", url: "https://simulator.eic-jp.org/articles/sme-guide" },
          { name: "テナント契約と電気代の関係" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/sme-guide" className="underline-offset-2 hover:underline">中小企業・小規模事業者向け</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">テナント契約と電気代の関係</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">テナント契約と電気代の関係｜サブメーター・按分の扱い</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">複数テナントが入居するビル・商業施設で、電気代をどう按分・請求するかのルールと実務を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">テナント契約の電気代構造</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">商業ビル・オフィスビルでは、ビルオーナーが電力会社と一括契約し、テナントには共益費・専有部電気代として転嫁するパターンが多いです。この場合、テナントはビル経由で間接的に電気代を支払います。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">一方で、テナントが個別契約（メーターごと）を持ち、電力会社に直接支払うパターンもあります。契約形態により管理責任・自由度が変わります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">サブメーターによる按分</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ビル一括契約の場合、サブメーター（戸別メーター）を設置して実使用量を計測し、それに基づいて按分するのが公平な方式です。メーターなしで面積按分するケースもありますが、使用パターンによる差を反映できません。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">按分ルール（単価・基本料金比率・共用部の扱い）は、賃貸借契約または管理規約で明示する必要があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">インボイス制度対応</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2023年のインボイス制度導入により、ビルオーナーからテナントへの電気代請求もインボイス発行が必要です。ビルオーナーが適格請求書発行事業者でなければ、テナント側で仕入税額控除できなくなります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約見直し時は、ビルオーナーの登録状況と請求書フォーマットを確認しておくことが重要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">テナント契約形態別の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【ビル一括契約＋実費按分】：ビル全体の電気代を、サブメーター実測値で按分。テナントには自由度なし。単価が低めに設定されるケース多。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【ビル一括契約＋面積按分】：サブメーターなし、床面積比で按分。実使用量と乖離するリスクあり。不公平感の原因。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【個別契約】：テナントが電力会社と直接契約。自由度・価格交渉権あり。ただし、小規模テナントは単価が高めに。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模の大きいテナント（年間数百万円以上）は個別契約が有利なケースが多く、小規模は一括契約が簡便。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">インボイス制度の詳細は、国税庁「インボイス制度特設サイト」で公開されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">テナント電気代の按分は、中小企業庁「賃貸借契約の公正化ガイドライン」などに配慮して設計する必要があります。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.nta.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">国税庁</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/sme-electricity-basics", title: "中小企業の電気料金の基礎", description: "低圧契約を理解する" },
              { href: "/low-voltage-review-essentials", title: "低圧契約の見直し要点", description: "チェックリスト" },
              { href: "/sme-cost-reduction-ideas", title: "中小企業向けの電気代削減アイデア", description: "低予算で即効性のある打ち手" },
              { href: "/articles/accounting-tax", title: "電気代の経理・税務", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/sme-guide", title: "中小企業・小規模事業者向け", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/sme-guide", label: "中小企業・小規模事業者向けの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
