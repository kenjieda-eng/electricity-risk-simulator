import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "蓄電池のBCP活用と経済性｜ピークカット兼用のハイブリッド運用";
const pageDescription =
  "蓄電池をBCP備蓄と平常時のピークカットで併用するハイブリッド運用と、投資回収の考え方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/battery-storage-bcp-peak-cut-hybrid";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電力BCP", "産業用蓄電池"],
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
          { name: "電力BCP・災害対策", url: "https://simulator.eic-jp.org/articles/energy-bcp" },
          { name: "蓄電池のBCP活用と経済性" },
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
          <span className="text-slate-800">蓄電池のBCP活用と経済性</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">蓄電池のBCP活用と経済性｜ピークカット兼用のハイブリッド運用</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">蓄電池をBCP備蓄と平常時のピークカットで併用するハイブリッド運用と、投資回収の考え方を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">蓄電池のBCP活用の基本</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">産業用蓄電池は、停電時のバックアップ電源と平常時のピークカット・デマンド制御の両方で使えます。単一用途（BCPのみ）だと投資回収が難しい一方、兼用運用（ハイブリッド）でROIが大きく改善します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">リチウムイオン電池の価格は過去10年で1/5以下に下がっており、2026年時点でkWhあたり5〜10万円程度まで低下しています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ハイブリッド運用の収益源</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①平常時のピークカットによる基本料金削減、②TOU（時間帯別料金）での経済運用（夜間充電・昼間放電）、③需給調整市場参加による収益、④停電時のBCPバックアップ、の4つが主な収益源です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">年間の経済効果は、100kWh規模で数十万〜数百万円、MW規模で数千万〜億円規模に達することがあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">投資回収の試算</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">初期投資：100kWh規模で500〜1,000万円、500kWh規模で2,000〜5,000万円。年間効果：100〜500万円/100kWh規模。投資回収：5〜10年が一般的。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">補助金（BCP関連・省エネ関連）で初期投資を圧縮できる場合、投資回収が3〜5年に短縮することもあります。脱炭素・再エネ連携（太陽光＋蓄電池）の相乗効果も検討価値が高いです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">蓄電池選定の比較軸</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【容量（kWh）】：BCPの必要時間×必要電力で決定。典型は4時間分のバックアップ。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【出力（kW）】：同時に給電可能な電力。最大負荷と同等以上が必要。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【充放電サイクル寿命】：年間サイクル数×寿命年数。一般的なリチウムイオンで6,000〜10,000サイクル。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【SCR（短絡容量比）】：瞬時出力対応力。工場のモーター起動など瞬間的な高負荷対応に重要。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【設置条件】：屋外設置可否、温度範囲、防火基準、耐震性能。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">用途（BCP専用/ピークカット兼用/太陽光連携）で重視ポイントが変わります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">蓄電池導入補助金は、環境省「レジリエンス強化型蓄電池導入支援事業」、経産省「系統用蓄電池・再エネ関連補助金」が代表的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">税制優遇では、中小企業経営強化税制（即時償却）、カーボンニュートラル投資促進税制（税額控除）が活用可能です。</p>
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
