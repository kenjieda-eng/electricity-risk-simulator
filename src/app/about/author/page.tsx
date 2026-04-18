import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";

const pageTitle = "著者・監修体制｜一般社団法人エネルギー情報センター";
const pageDescription = "本サイトの著者・監修体制を公開します。エネルギー業界10年以上の実績を持つ専門家によって編集されています。";
const pageUrl = "https://simulator.eic-jp.org/about/author";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription, alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, siteName: "法人電気料金ナビ", locale: "ja_JP", type: "article", images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd headline={pageTitle} description={pageDescription} url={pageUrl} datePublished="2026-04-18"
        breadcrumbItems={[{ name: "ホーム", url: "https://simulator.eic-jp.org/" }, { name: "サイトについて" }, { name: "著者・監修体制" }]} />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link><span className="px-2">›</span>
          <span className="text-slate-800">著者・監修体制</span>
        </nav>
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">著者・監修体制</h1>
          <p className="mt-4 text-sm leading-7">本サイトの編集主体と専門性を公開します。</p>
        </header>
        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">編集責任者</h2>
            <p className="mt-3 text-sm leading-7"><strong>江田 健二（えだ けんじ）</strong></p>
            <p className="mt-2 text-sm leading-7">一般社団法人エネルギー情報センター 代表理事。エネルギー業界・スマートエネルギー分野の調査・コンサルティング・出版・講演活動を10年以上にわたり手がける。著書多数。</p>
            <p className="mt-2 text-sm leading-7">経済産業省・環境省関連委員会、自治体エネルギー戦略策定アドバイザリーなど公職多数。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">運営法人</h2>
            <p className="mt-3 text-sm leading-7"><strong>一般社団法人エネルギー情報センター</strong></p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7">
              <li>設立: 法人向けエネルギー情報の中立的提供を目的に設立</li>
              <li>事業: 電気料金リスク分析、脱炭素対応支援、調査・出版、セミナー</li>
              <li>会員: 国内主要企業、自治体、教育機関</li>
              <li>公式: <a href="https://eic-jp.org" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline">https://eic-jp.org</a></li>
            </ul>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">専門分野</h2>
            <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm leading-7">
              <li className="rounded border border-slate-200 bg-slate-50 p-3">⚡ 電力市場・JEPX分析</li>
              <li className="rounded border border-slate-200 bg-slate-50 p-3">🌱 脱炭素・GX対応</li>
              <li className="rounded border border-slate-200 bg-slate-50 p-3">📊 電気料金リスクモデリング</li>
              <li className="rounded border border-slate-200 bg-slate-50 p-3">🏭 産業用電力契約見直し</li>
              <li className="rounded border border-slate-200 bg-slate-50 p-3">🌐 海外エネルギー動向</li>
              <li className="rounded border border-slate-200 bg-slate-50 p-3">🔋 再エネ・蓄電・PPA</li>
            </ul>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">監修・寄稿協力</h2>
            <p className="mt-3 text-sm leading-7">必要に応じて、以下の専門家による監修・寄稿協力を受けています。</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7">
              <li>弁護士（エネルギー法・契約法専門）</li>
              <li>税理士（中小企業設備投資・補助金・脱炭素税制）</li>
              <li>気候変動リスク分析専門家（CDP・TCFD対応支援）</li>
              <li>電気主任技術者（高圧・特別高圧設備実務）</li>
            </ul>
          </section>
          <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              <li><Link href="/about/editorial-policy" className="text-sky-700 underline">編集ポリシー</Link></li>
              <li><Link href="/downloads" className="text-sky-700 underline">データセット・ダウンロードセンター</Link></li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}
