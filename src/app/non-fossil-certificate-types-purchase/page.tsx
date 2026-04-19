import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "非化石証書の種類と購入方法｜FIT非化石・非FIT非化石・再エネ指定の違い";
const pageDescription =
  "非化石証書の3分類と購入手段を整理し、トラッキング情報の扱いやScope2反映の実務を解説します。";
const pageUrl = "https://simulator.eic-jp.org/non-fossil-certificate-types-purchase";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "Scope2", "非化石証書"],
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
          { name: "脱炭素・GX対応", url: "https://simulator.eic-jp.org/articles/decarbonization" },
          { name: "非化石証書の種類と購入方法" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/decarbonization" className="underline-offset-2 hover:underline">脱炭素・GX対応</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">非化石証書の種類と購入方法</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">非化石証書の種類と購入方法｜FIT非化石・非FIT非化石・再エネ指定の違い</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">非化石証書の3分類と購入手段を整理し、トラッキング情報の扱いやScope2反映の実務を解説します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">非化石証書とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">非化石証書は、非化石電源（再エネ・原子力）で発電された電力の「環境価値」を切り離して取引できるようにしたものです。2018年に創設され、日本卸電力取引所（JEPX）の非化石価値取引市場で売買されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">発行単位は1kWh単位、取引は小売電気事業者と需要家が市場を通じて行います。需要家直接取引は、制度上は2021年以降の需要家公募枠のみで、通常は小売電気事業者経由で購入します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3種類の証書の違い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①FIT非化石証書：FIT電源由来。再エネ指定ありで、価格は最低0.3円/kWh、取引量は最大規模。②非FIT非化石証書（再エネ指定あり）：卒FIT太陽光・大規模水力などが由来。③非FIT非化石証書（再エネ指定なし）：原子力も含む。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">RE100や再エネ調達を明示したい場合は再エネ指定ありの証書が必要です。単に非化石比率を上げるだけなら指定なしで十分です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Scope2算定への反映</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">証書はマーケット基準のScope2算定で使えますが、トラッキング情報付きである必要があります。FIT非化石証書は2021年度からトラッキング対応され、発電所・電源種別が明記されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">購入コストは、FIT非化石（再エネ指定）で0.3〜1.3円/kWh、非FIT再エネ指定でそれ以上の水準で推移しており、制度改正や需給で変動します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">購入手順と価格推移</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">法人需要家が非化石証書を購入する主な経路は、①小売電気事業者経由（再エネメニュー契約）、②需要家公募枠での直接購入（JEPX開催の年4回入札）、の2つです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">価格推移：FIT非化石（再エネ指定）は2021年度0.3円/kWhの下限設定、2022年度以降も同水準。非FIT非化石は入札結果で変動、最近は1〜3円/kWhのレンジで取引されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">追加性（Additionality）を重視する企業はFIT非化石より非FIT非化石を選好する傾向があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">非化石価値取引市場の運営はJEPX、制度設計は経済産業省（資源エネルギー庁）が担当しています。毎年度のオークション結果・取引量は経産省・JEPXの公式サイトで確認できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">CDP回答やRE100報告では、証書購入根拠として「トラッキング情報付きの証書」であることが要求されるため、購入時に必ず確認します。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.jepx.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">日本卸電力取引所（JEPX）</a></li>
            <li><a href="https://ghg-santeikohyo.env.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">環境省 温室効果ガス算定報告公表制度</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/corporate-decarbonization-overview", title: "法人の脱炭素対応の全体像", description: "電力調達と情報開示の4段階を整理" },
              { href: "/re100-overview-for-business", title: "RE100とは", description: "参加要件と実務フローを解説" },
              { href: "/scope2-electricity-accounting", title: "Scope2算定と報告ガイド", description: "マーケット基準とロケーション基準" },
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/decarbonization", label: "脱炭素・GX対応の他の記事を読む" },
            ]}
          />
        </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

      </main>
    </>
  );
}
