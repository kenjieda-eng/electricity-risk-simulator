import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "インフォグラフィック集｜電気料金・脱炭素 1枚で理解する図解";
const pageDescription = "電気料金構造、Scope2算定フロー、PPA形態比較、容量市場、需給ひっ迫対応など、複雑なテーマを1枚の図解で整理したインフォグラフィック集。社内資料・SNS用にダウンロード可能。";
const pageUrl = "https://simulator.eic-jp.org/infographics";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription, alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, siteName: "法人電気料金ナビ", locale: "ja_JP", type: "website", images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

const INFO = [
  { id: "electricity-bill-structure", title: "電気料金の構造（1枚図）", description: "基本料金・従量料金・燃調・賦課金・容量拠出金の重なり" },
  { id: "scope2-flow", title: "Scope2算定フロー", description: "kWh→排出係数→Location/Market 2基準→開示" },
  { id: "ppa-3types", title: "PPA 3形態比較", description: "オンサイト・フィジカル・バーチャルの違い" },
  { id: "bcp-options", title: "BCP電源 5選比較", description: "蓄電池・発電機・マイクログリッド・PPA・需給契約" },
  { id: "regulation-roadmap", title: "制度改正ロードマップ 2026-2033", description: "GX-ETS・容量市場・FIT満了の年表" },
  { id: "decarbon-paths", title: "脱炭素の打ち手マップ", description: "省エネ・自家発・PPA・証書の優先順位" },
];

export default function Page() {
  return (
    <>
      <ArticleJsonLd headline={pageTitle} description={pageDescription} url={pageUrl} datePublished="2026-04-18"
        breadcrumbItems={[{ name: "ホーム", url: "https://simulator.eic-jp.org/" }, { name: "インフォグラフィック集" }]} />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link><span className="px-2">›</span>
          <span className="text-slate-800">インフォグラフィック集</span>
        </nav>
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">📊 インフォグラフィック集</h1>
          <p className="mt-4 text-sm leading-7">複雑なテーマを1枚で理解できる図解集。各図はSVGで実装しており、ダウンロード・社内資料への流用可能（CC BY 4.0）。</p>
        </header>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金の構造</h2>
          <p className="mt-2 text-sm leading-7">2026年4月時点の代表値ベースで、月額10万円の請求書を構成要素に分解</p>
          <svg viewBox="0 0 600 200" className="mt-4 w-full max-w-2xl">
            <rect x="10" y="40" width="180" height="60" fill="#0284c7" />
            <text x="100" y="75" fill="white" textAnchor="middle" fontSize="14">基本料金 30%</text>
            <rect x="190" y="40" width="240" height="60" fill="#0ea5e9" />
            <text x="310" y="75" fill="white" textAnchor="middle" fontSize="14">電力量料金 40%</text>
            <rect x="430" y="40" width="80" height="60" fill="#fbbf24" />
            <text x="470" y="75" fill="white" textAnchor="middle" fontSize="12">燃調 13%</text>
            <rect x="510" y="40" width="50" height="60" fill="#10b981" />
            <text x="535" y="75" fill="white" textAnchor="middle" fontSize="11">賦課金 8%</text>
            <rect x="560" y="40" width="30" height="60" fill="#a855f7" />
            <text x="575" y="75" fill="white" textAnchor="middle" fontSize="10">容量5%</text>
            <text x="300" y="135" textAnchor="middle" fontSize="13" fill="#475569">合計100% (例: 月額10万円)</text>
            <text x="300" y="170" textAnchor="middle" fontSize="11" fill="#94a3b8">出典: 一般社団法人エネルギー情報センター</text>
          </svg>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">Scope2算定フロー</h2>
          <svg viewBox="0 0 700 200" className="mt-4 w-full max-w-3xl">
            <rect x="10" y="60" width="120" height="60" fill="#10b981" rx="8" />
            <text x="70" y="95" fill="white" textAnchor="middle" fontSize="13">電力使用量(kWh)</text>
            <text x="160" y="95" fill="#475569" textAnchor="middle" fontSize="20">×</text>
            <rect x="180" y="60" width="120" height="60" fill="#0ea5e9" rx="8" />
            <text x="240" y="92" fill="white" textAnchor="middle" fontSize="12">排出係数</text>
            <text x="240" y="108" fill="white" textAnchor="middle" fontSize="11">(kg-CO2/kWh)</text>
            <text x="330" y="95" fill="#475569" textAnchor="middle" fontSize="20">=</text>
            <rect x="350" y="40" width="160" height="50" fill="#fbbf24" rx="8" />
            <text x="430" y="70" fill="white" textAnchor="middle" fontSize="12">Location-based</text>
            <rect x="350" y="100" width="160" height="50" fill="#a855f7" rx="8" />
            <text x="430" y="130" fill="white" textAnchor="middle" fontSize="12">Market-based</text>
            <rect x="540" y="60" width="140" height="60" fill="#475569" rx="8" />
            <text x="610" y="95" fill="white" textAnchor="middle" fontSize="13">CDP/TCFD開示</text>
            <text x="350" y="190" textAnchor="middle" fontSize="11" fill="#94a3b8">出典: 一般社団法人エネルギー情報センター</text>
          </svg>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">PPA 3形態の違い</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {[
              { type: "オンサイト", color: "bg-emerald-100", desc: "敷地内発電・直接消費・最もシンプル", price: "12-18円/kWh" },
              { type: "フィジカル(オフサイト)", color: "bg-sky-100", desc: "遠隔地から系統経由で物理的供給", price: "11-19円/kWh" },
              { type: "バーチャル", color: "bg-violet-100", desc: "差金決済・環境価値のみ受領", price: "8-15円/kWh" },
            ].map((p) => (
              <div key={p.type} className={`rounded-lg ${p.color} p-4`}>
                <p className="text-sm font-bold text-slate-900">{p.type}</p>
                <p className="mt-1 text-xs text-slate-700">{p.desc}</p>
                <p className="mt-2 text-sm font-bold text-sky-700">{p.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">制度改正ロードマップ 2026-2033</h2>
          <div className="mt-3 space-y-2 text-sm">
            {[
              { y: "2026.04", c: "GX-ETS本格稼働", color: "bg-red-100 text-red-800" },
              { y: "2027.04", c: "託送料金レベニューキャップ第2期", color: "bg-amber-100 text-amber-800" },
              { y: "2028.04", c: "GX-ETS対象拡大（予定）", color: "bg-red-100 text-red-800" },
              { y: "2030.00", c: "NDC: 46%削減目標年", color: "bg-emerald-100 text-emerald-800" },
              { y: "2032.07", c: "FIT初期10年案件 買取満了開始", color: "bg-sky-100 text-sky-800" },
              { y: "2033.04", c: "カーボンプライシング本格化（予定）", color: "bg-purple-100 text-purple-800" },
            ].map((e) => (
              <div key={e.y} className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-slate-700">{e.y}</span>
                <span className={`flex-1 rounded px-3 py-2 ${e.color}`}>{e.c}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">📋 ダウンロード予定</h2>
          <ul className="mt-3 list-disc pl-5 text-sm leading-7">
            {INFO.map((i) => (
              <li key={i.id}>
                <strong>{i.title}</strong>: {i.description}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-500">※ 高解像度PDF/SVGダウンロードは順次公開予定。本ページのSVGはブラウザで右クリック→「画像を保存」で取得可能。</p>
        </section>
      </main>
    </>
  );
}
