import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "PPAと自家消費太陽光の比較｜設置形態・資金調達・所有権の違い";
const pageDescription =
  "自社資金で太陽光を設置する「自家消費」と第三者所有の「オンサイトPPA」の違いを、コスト・税務・責任分担で比較します。";
const pageUrl = "https://simulator.eic-jp.org/ppa-vs-self-consumption-solar";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "コーポレートPPA", "オンサイトPPA"],
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
    images: [{ url: "/api/og/corporate-ppa", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/corporate-ppa"],
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
          { name: "PPAと自家消費太陽光の比較" },
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
          <span className="text-slate-800">PPAと自家消費太陽光の比較</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">PPAと自家消費太陽光の比較｜設置形態・資金調達・所有権の違い</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">自社資金で太陽光を設置する「自家消費」と第三者所有の「オンサイトPPA」の違いを、コスト・税務・責任分担で比較します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自家消費太陽光の特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自家消費太陽光は、自社で太陽光パネルを購入・設置し、発電した電力を自社で使う方式です。初期投資は必要ですが、長期的にkWhあたりのコストを抑えられ、売電や補助金で投資回収を狙います。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">設備は自社資産となり、減価償却・固定資産税・保険の対象になります。メンテナンスも自社責任です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">オンサイトPPAの特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オンサイトPPAは、発電事業者が自社所有のままパネルを設置し、発電した電力を自社が買い取る方式です。初期投資ゼロ、設備所有は発電事業者で、メンテナンスも任せられます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">一方、月々の電気代として支払うため長期コストは自家消費より高くなる傾向があり、契約期間も10〜20年と長期化します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">どちらを選ぶか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">資金・借入余力があり、長期コストを最小化したいなら自家消費。初期投資を避けたい、メンテナンス負担を減らしたい、減価償却の財務影響を避けたいならPPA、が大まかな判断基準です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">税制優遇（中小企業経営強化税制・生産性向上投資促進税制）が使える場合、自家消費が優位になることがあります。契約前に税理士と確認することが重要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">コスト比較表（1MW規模・20年）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【自家消費】初期投資：1.5〜2.5億円。年間メンテ：50〜100万円。税制優遇：中小企業経営強化税制で即時償却可。想定LCOE：8〜12円/kWh。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【オンサイトPPA】初期投資：0円。月額支払い：発電量×12〜18円/kWh。メンテナンス：PPA事業者負担。税制優遇：なし（サービス費用として損金処理）。想定LCOE：12〜18円/kWh。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">20年トータルコスト：自家消費の方が2〜4割低くなるのが一般的ですが、初期投資・減損リスクの扱いで判断が分かれます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自家消費太陽光の税制優遇（中小企業経営強化税制・カーボンニュートラル投資促進税制）は、中小企業庁・経産省の制度で、毎年改正があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">PPA契約の会計処理は、新リース会計基準（IFRS16・日本基準2027年適用予定）の影響を受け、オンバランス化される場合もあるため、会計士との事前確認が必要です。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.env.go.jp/earth/ondanka/supply_chain/gvc/index.html" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">環境省 脱炭素経営</a></li>
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
