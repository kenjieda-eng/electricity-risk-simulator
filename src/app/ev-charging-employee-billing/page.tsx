import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "EV充電の従量課金・サブスク比較｜従業員向け課金の方法";
const pageDescription =
  "社内EV充電設備を従業員に開放する際の、従量課金・サブスク・無料供与の各選択肢と法務・税務整理を解説します。";
const pageUrl = "https://simulator.eic-jp.org/ev-charging-employee-billing";

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
          { name: "EV充電の従量課金・サブスク比較" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ev-charging" className="underline-offset-2 hover:underline">EV・充電インフラ</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">EV充電の従量課金・サブスク比較</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">EV充電の従量課金・サブスク比較｜従業員向け課金の方法</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">社内EV充電設備を従業員に開放する際の、従量課金・サブスク・無料供与の各選択肢と法務・税務整理を解説します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">従業員向け課金のパターン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①無料供与：事業所に設置した充電器を従業員が自由利用。福利厚生として税務処理。②従量課金：充電量に応じて従業員に請求。③サブスク：月額固定で使い放題。④割引券・ポイント：利用実績に応じてインセンティブ。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">米国・欧州では多様な課金方式が導入されており、日本でも大企業中心に普及が進んでいます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">税務上の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従業員への無料充電提供は、経済的利益として給与扱い（源泉徴収・社保対象）となるケースがあります。税務調査で指摘を受けない設計には、①実費徴収または相当額課金、②業務使用のみの限定、などのルール明示が有効です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">福利厚生としての無償提供が可能な範囲は、1人あたり月額数千円までが目安ですが、社員全員に均等提供が前提です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">運用システムの選定</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従業員別の充電量データ・請求・決済を自動化するには、充電管理クラウドサービスが便利です。OCPP対応の充電器なら、複数メーカー混在でも統合管理できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">給与天引き・経費精算との連携、個人識別（RFIDカード・アプリ）、の2点が運用効率化の鍵です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">課金方式別の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【無料供与】運用コスト：低。福利厚生として訴求。税務リスク：要注意（個人利用の場合）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【従量課金】運用コスト：中（システム必要）。公平性：高。税務リスク：低（実費徴収）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【サブスク】運用コスト：中。管理簡便。税務リスク：低（月額固定）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【割引券・ポイント】運用コスト：高。インセンティブ設計自由。税務リスク：設計による。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">企業規模・EV普及率・運用担当者数で選定方針が変わります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従業員向け充電の税務整理は、国税庁「法人税法基本通達」および「所得税法基本通達」で扱い方の指針が示されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">充電管理プラットフォームの標準規格（OCPP）は、Open Charge Alliance（OCA）公式サイトで詳細仕様が公開されています。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.nta.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">国税庁</a></li>
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
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
