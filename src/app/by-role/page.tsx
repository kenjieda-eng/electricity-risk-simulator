import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "役割別ガイド｜経理・法務・経営・施設・ESG担当者向け";
const pageDescription = "電気料金・脱炭素・契約見直しを、経理・法務・経営層・施設・ESG担当者の役割別に整理。自分に必要な情報に最短到達できます。";
const pageUrl = "https://simulator.eic-jp.org/by-role";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription, alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, siteName: "法人電気料金ナビ", locale: "ja_JP", type: "website", images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

const ROLES = [
  { id: "executive", name: "👔 経営層・役員", description: "経営判断に必要な定量データと戦略", articles: [
    { href: "/articles/for-executives", title: "経営層向け解説まとめ" },
    { href: "/", title: "電気料金リスクシミュレーター" },
    { href: "/articles/risk-scenarios", title: "リスクシナリオ別解説" },
    { href: "/budget-planning-in-high-price-era", title: "高止まり時代の予算策定" },
  ]},
  { id: "accounting", name: "💴 経理・財務", description: "勘定科目・税制・部門配賦・予算", articles: [
    { href: "/electricity-expense-accounting", title: "電気代の勘定科目" },
    { href: "/invoice-system-electricity", title: "インボイス制度対応" },
    { href: "/solar-battery-depreciation", title: "蓄電池・太陽光の減価償却" },
    { href: "/department-cost-allocation", title: "部門別配賦方法" },
    { href: "/budget-planning-in-high-price-era", title: "高止まり時代の予算策定" },
  ]},
  { id: "legal", name: "⚖ 法務・契約", description: "契約条項・約款・違約金・M&A対応", articles: [
    { href: "/electricity-contract-clauses", title: "契約書の主要条項" },
    { href: "/auto-renewal-clause-risks", title: "自動更新条項のリスク" },
    { href: "/force-majeure-electricity", title: "不可抗力条項の読み方" },
    { href: "/contract-termination-penalty", title: "違約金条項" },
    { href: "/ma-electricity-contract-handling", title: "M&A時の契約承継" },
  ]},
  { id: "esg", name: "🌱 ESG・サステナビリティ", description: "Scope2算定・RE100・脱炭素戦略", articles: [
    { href: "/scope2-electricity-accounting", title: "Scope2算定" },
    { href: "/ghg-protocol-scope2-market-based", title: "Market-based方式" },
    { href: "/re100-overview-for-business", title: "RE100加盟ガイド" },
    { href: "/corporate-ppa-overview", title: "コーポレートPPA入門" },
    { href: "/tcfd-cdp-electricity-disclosure", title: "TCFD/CDP開示" },
    { href: "/gx-ets-impact-business-electricity", title: "GX-ETS影響" },
  ]},
  { id: "facility", name: "🏭 施設・設備管理", description: "BEMS・蓄電池・太陽光・省エネ", articles: [
    { href: "/articles/energy-equipment", title: "エネルギー設備の選び方" },
    { href: "/bems-fems-ems-overview", title: "BEMS/FEMS/EMS" },
    { href: "/articles/energy-bcp", title: "電力BCP・災害対策" },
    { href: "/microgrid-for-business", title: "マイクログリッド" },
    { href: "/corporate-ev-charging-basics", title: "EV充電インフラ" },
  ]},
  { id: "procurement", name: "📦 調達・購買", description: "電力会社選定・相見積・契約交渉", articles: [
    { href: "/articles/review-points", title: "見直しポイント" },
    { href: "/compare", title: "料金メニュー比較診断" },
    { href: "/quotation-comparison-pre-check", title: "相見積前チェック" },
    { href: "/articles/last-resort-supply", title: "最終保障供給" },
  ]},
  { id: "internal-com", name: "📢 社内説明・稟議", description: "稟議書・経営報告・社内勉強会", articles: [
    { href: "/articles/internal-explanation", title: "社内説明の準備" },
    { href: "/internal-explanation-preparation-checklist", title: "稟議準備チェックリスト" },
    { href: "/how-to-explain-electricity-price-increase-internally", title: "値上げの社内説明" },
    { href: "/using-simulator-results-for-explanation", title: "シミュレーター結果の活用" },
  ]},
  { id: "sme", name: "🏪 中小企業・店舗", description: "低圧契約・小規模・SOHO向け", articles: [
    { href: "/sme-electricity-basics", title: "中小企業の電気代基礎" },
    { href: "/low-voltage-review-essentials", title: "低圧契約見直し" },
    { href: "/sme-cost-reduction-quick-wins", title: "クイックウィン削減策" },
    { href: "/sme-subsidy-funding-guide", title: "補助金活用ガイド" },
  ]},
];

export default function ByRolePage() {
  return (
    <>
      <ArticleJsonLd headline={pageTitle} description={pageDescription} url={pageUrl} datePublished="2026-04-18"
        breadcrumbItems={[{ name: "ホーム", url: "https://simulator.eic-jp.org/" }, { name: "役割別ガイド" }]} />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">役割別ガイド</span>
        </nav>
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">👥 役割別ガイド</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            あなたの担当役割を選ぶと、必要な記事・ツールが整理された状態で表示されます。
          </p>
        </header>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {ROLES.map((role) => (
            <section key={role.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-semibold text-slate-900">{role.name}</h2>
              <p className="mt-1 text-xs text-slate-500">{role.description}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {role.articles.map((a) => (
                  <li key={a.href}>
                    <Link href={a.href} className="text-sky-700 hover:underline">→ {a.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
