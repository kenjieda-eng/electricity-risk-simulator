import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "マンガで分かる電気代見直し｜中小企業向け入門";
const pageDescription = "「電気代、なぜ高い？」「契約、どう見直す？」を4コマ形式で分かりやすく解説。中小企業の経営者・事務担当者向けの入門コンテンツ。";
const pageUrl = "https://simulator.eic-jp.org/manga";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription, alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, siteName: "法人電気料金ナビ", locale: "ja_JP", type: "website", images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

const STORIES = [
  { id: "ep1", title: "第1話: 「電気代が突然倍に？」", panels: [
    { scene: "事務所", who: "山田社長", text: "うわっ、今月の電気代、先月の倍じゃないか！何があったんだ？" },
    { scene: "電卓と請求書", who: "ナレーション", text: "実は、電気代の上昇は『燃料費調整』『再エネ賦課金』『使用量増』の3つが重なった結果。" },
    { scene: "山田社長", who: "山田社長", text: "なるほど、原因が分かれば対策もある...？" },
    { scene: "PCを見せる", who: "経理担当", text: "シミュレーターで計算してみましょう！" },
  ]},
  { id: "ep2", title: "第2話: 「契約見直し、何から始める？」", panels: [
    { scene: "オフィス", who: "山田社長", text: "電力会社って、変えられるの？どこに頼めばいいの？" },
    { scene: "請求書を持つ", who: "ナレーション", text: "まずは過去12ヶ月の請求書を集めて、月別単価を計算するのが第一歩。" },
    { scene: "比較サイト", who: "経理担当", text: "そして3社以上に相見積を依頼。最近はオンラインで簡単です！" },
    { scene: "握手", who: "山田社長", text: "年間20万円も削減できそうだ！早速見積もろう。" },
  ]},
  { id: "ep3", title: "第3話: 「市場連動プラン、危険って本当？」", panels: [
    { scene: "新聞を読む", who: "山田社長", text: "市場連動プラン、安いって聞いたけど、JEPX高騰で怖い目に遭った企業もあるとか..." },
    { scene: "ホワイトボード", who: "経理担当", text: "そうですね。市場連動は平時は安いですが、需給ひっ迫時には大幅上昇リスクがあります。" },
    { scene: "図表", who: "ナレーション", text: "リスク許容度に応じて、固定／市場連動／ハイブリッド型から選びましょう。" },
    { scene: "決断", who: "山田社長", text: "うちはハイブリッド型がよさそうだ！" },
  ]},
];

export default function Page() {
  return (
    <>
      <ArticleJsonLd headline={pageTitle} description={pageDescription} url={pageUrl} datePublished="2026-04-18"
        breadcrumbItems={[{ name: "ホーム", url: "https://simulator.eic-jp.org/" }, { name: "マンガで分かる" }]} />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">マンガで分かる電気代</span>
        </nav>
        <header className="mt-4 rounded-xl border border-pink-200 bg-pink-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">📚 マンガで分かる電気代見直し</h1>
          <p className="mt-4 text-sm leading-7">中小企業の経営者・事務担当者向け、4コマ形式で「電気代の謎」を解き明かします。テキスト版です（イラスト追加予定）。</p>
        </header>

        <div className="mt-6 space-y-8">
          {STORIES.map((story) => (
            <section key={story.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-semibold text-pink-700">{story.title}</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {story.panels.map((panel, i) => (
                  <div key={i} className="rounded-xl border-2 border-slate-300 bg-slate-50 p-4">
                    <p className="text-xs font-bold text-slate-500">コマ{i + 1}: {panel.scene}</p>
                    <p className="mt-2 text-sm font-bold text-pink-800">{panel.who}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-800">「{panel.text}」</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">🎯 マンガを読んだら次のステップ</h2>
          <ul className="mt-3 list-disc pl-5 text-sm leading-7">
            <li><Link href="/" className="text-sky-700 underline">電気料金リスクシミュレーターで自社診断</Link></li>
            <li><Link href="/sme-electricity-basics" className="text-sky-700 underline">中小企業の電気代基礎を読む</Link></li>
            <li><Link href="/compare" className="text-sky-700 underline">料金メニュー比較診断を試す</Link></li>
          </ul>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs text-slate-500">原案: 一般社団法人エネルギー情報センター。CC BY 4.0で社内勉強会・社員研修に流用可能です。イラスト版・印刷用PDFは順次公開予定。</p>
        </section>
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
