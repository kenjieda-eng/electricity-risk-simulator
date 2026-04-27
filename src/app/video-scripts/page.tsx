import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "動画スクリプト集｜法人向け電気料金・脱炭素 解説動画台本";
const pageDescription = "電気料金・脱炭素・契約見直しなどの解説動画スクリプト集。社内勉強会・YouTube動画・ウェビナー用の台本としてご活用ください。CC BY 4.0で改変・再利用可。";
const pageUrl = "https://simulator.eic-jp.org/video-scripts";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription, alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, siteName: "法人電気料金ナビ", locale: "ja_JP", type: "website", images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

const SCRIPTS = [
  { id: "scope2-5min", title: "Scope2排出量とは（5分動画）", duration: "5分", scenes: [
    { time: "0:00-0:30", narration: "ESGや脱炭素経営の文脈で頻繁に登場する『Scope2』。今日はこの基本を5分で解説します。" },
    { time: "0:30-1:30", narration: "Scope2とは、企業が外部から購入した電力・熱・蒸気の使用に伴う間接排出量です。発電時のCO2を、電気を買った側で算入する考え方ですね。" },
    { time: "1:30-3:00", narration: "計算は簡単。電力使用量(kWh) × 排出係数(kg-CO2/kWh)。ただしこの排出係数には2つの基準があります。Location-basedとMarket-basedです。" },
    { time: "3:00-4:00", narration: "Location-basedは系統の平均値、Market-basedは契約した電源の値。RE100加盟企業は両方を併記し、Market-basedで0排出を目指します。" },
    { time: "4:00-5:00", narration: "今日のまとめ。Scope2は購入電力の間接排出。Market-basedで再エネメニューや非化石証書を活用すれば、削減認定可能。詳細はサイトで。" },
  ]},
  { id: "ppa-3types", title: "PPA 3形態の違い（7分動画）", duration: "7分", scenes: [
    { time: "0:00-0:45", narration: "コーポレートPPA。よく聞くけど、3形態（オンサイト・フィジカル・バーチャル）の違いを正確に説明できますか。今日は7分でクリアにします。" },
    { time: "0:45-2:30", narration: "1つ目、オンサイトPPA。需要家敷地内に発電設備を置き、直接消費。最もシンプルな形。屋根上太陽光が代表例。" },
    { time: "2:30-4:30", narration: "2つ目、オフサイトのフィジカルPPA。遠隔地の発電所から系統経由で電力を実際に届ける形。託送料金が別途かかります。" },
    { time: "4:30-6:00", narration: "3つ目、バーチャルPPA。これは電力ではなく差金決済。固定価格と市場価格の差額のみやり取り。会計上はデリバティブ評価になる場合あり。" },
    { time: "6:00-7:00", narration: "選び方は、敷地・規模・契約年数・会計対応で決まります。当社サイトのPPA形態診断で5問チェックできます。" },
  ]},
  { id: "bcp-5min", title: "電力BCPの考え方（5分動画）", duration: "5分", scenes: [
    { time: "0:00-0:45", narration: "停電・需給ひっ迫・新電力撤退。電力リスクは多様化しています。今日は電力BCPの基本を5分で。" },
    { time: "0:45-2:00", narration: "BCP設計の出発点は、自社のクリティカル負荷を特定すること。事業継続に絶対必要な電力量はどれくらいか、リストアップ。" },
    { time: "2:00-3:30", narration: "次に対策を選ぶ。短時間なら蓄電池、長時間なら発電機、自律運転ならマイクログリッド。組合せが基本。" },
    { time: "3:30-4:30", narration: "見落としがちなのが新電力撤退リスク。代替供給先を平時から1-2社確保しておく。最終保障供給は『つなぎ』であって解ではない。" },
    { time: "4:30-5:00", narration: "BCPは投資判断。停電による事業中断損失と、対策投資のバランスで決めます。当社サイトでBCP適合度診断もできます。" },
  ]},
  { id: "gx-ets-5min", title: "GX-ETS 5分入門（2026年本格稼働）", duration: "5分", scenes: [
    { time: "0:00-0:30", narration: "2026年4月、GX-ETSが本格稼働。年間10万t-CO2以上の事業者は対象。今日は5分で全体像を。" },
    { time: "0:30-2:00", narration: "GX-ETSは排出量取引制度。事業者に排出枠が割当てられ、超過分は市場で購入。減らせば余剰枠を売却可。キャップ＆トレード方式の日本版です。" },
    { time: "2:00-3:30", narration: "対象は当面、年間10万t-CO2超の大企業。ただし、電気事業者経由で間接コストとして全需要家に転嫁されます。" },
    { time: "3:30-4:30", narration: "炭素価格は3,000-10,000円/t-CO2と想定。年間5万t排出企業なら年間1.5億〜5億円の追加負担が発生する可能性。" },
    { time: "4:30-5:00", narration: "対策は省エネ・再エネ・PPA・効率改善の4本柱。早期着手が将来コスト圧縮の鍵。当社GX-ETSコスト試算ツールをお試しください。" },
  ]},
  { id: "sme-3min", title: "中小企業の電気代見直し3分", duration: "3分", scenes: [
    { time: "0:00-0:30", narration: "中小企業の電気代、なんとなく高いまま放置していませんか。3分で見直しの最初のステップを。" },
    { time: "0:30-1:30", narration: "ステップ1: 直近12ヶ月の請求書を集める。ステップ2: 月別kWh単価を計算（請求金額÷使用量）。" },
    { time: "1:30-2:30", narration: "ステップ3: 3社以上に相見積。エネルギー比較サイトで簡単に取得できます。低圧でも年間10-30万円の差が出ることが珍しくない。" },
    { time: "2:30-3:00", narration: "今すぐできるアクション、当社の3分診断ツールで現状を把握しましょう。リンクは概要欄に。" },
  ]},
];

export default function Page() {
  return (
    <>
      <ArticleJsonLd headline={pageTitle} description={pageDescription} url={pageUrl} datePublished="2026-04-18"
        breadcrumbItems={[{ name: "ホーム", url: "https://simulator.eic-jp.org/" }, { name: "動画スクリプト集" }]} />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link><span className="px-2">›</span>
          <span className="text-slate-800">動画スクリプト集</span>
        </nav>
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">🎬 解説動画スクリプト集</h1>
          <p className="mt-4 text-sm leading-7">社内勉強会・YouTube動画・ウェビナー用の台本としてご活用ください。<strong>CC BY 4.0</strong>で出典明記の上、改変・再利用可能です。</p>
        </header>
        <div className="mt-6 space-y-6">
          {SCRIPTS.map((s) => (
            <section key={s.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-semibold text-slate-900">{s.title} <span className="ml-2 text-xs text-slate-500">{s.duration}</span></h2>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr><th className="px-2 py-1 text-left">タイム</th><th className="px-2 py-1 text-left">ナレーション</th></tr>
                  </thead>
                  <tbody>
                    {s.scenes.map((sc, i) => (
                      <tr key={i} className="border-b border-slate-100">
                        <td className="px-2 py-2 align-top text-xs font-mono text-slate-500">{sc.time}</td>
                        <td className="px-2 py-2 leading-6">{sc.narration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/articles", title: "記事ハブ", description: "動画台本の元になった解説記事一覧。" },
            { href: "/how-to", title: "シミュレーターの使い方", description: "動画と合わせて視聴。" },
            { href: "/manga", title: "マンガで分かる電気代", description: "動画とは別の入門コンテンツ。" },
            { href: "/business-electricity-retrospective", title: "月次振り返り", description: "動画の最新ネタ元。" },
            { href: "/", title: "シミュレーター", description: "リスクを30秒で診断。" },
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
