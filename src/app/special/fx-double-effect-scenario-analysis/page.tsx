import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import {
  FX_DOUBLE_EFFECT_BASE_PATH,
  FX_DOUBLE_EFFECT_SERIES,
  getFxDoubleEffectPagePath,
} from "../../../lib/fxDoubleEffectScenarioAnalysis";
import FxDoubleEffectChartCard from "./_components/FxDoubleEffectCharts";
import FxDoubleEffectLayout from "./_components/FxDoubleEffectLayout";

const pageTitle = "【2026年最新】円安×原油高 ダブルショックの家計・法人への影響";
const pageDescription =
  "1ドル159円台×WTI102ドルのW効果を定量シミュレーション。日銀利上げ後ずれから円安、輸入コスト増までの連鎖構造を図解します。";
const canonicalUrl = `https://simulator.eic-jp.org${FX_DOUBLE_EFFECT_BASE_PATH}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
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

export default function FxDoubleEffectTopPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "円安×原油高 ダブルショックの家計・法人への影響",
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    author: { "@type": "Organization", name: "一般社団法人エネルギー情報センター" },
    description: pageDescription,
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <FxDoubleEffectLayout
      slug="index"
      lead="159円台×WTI102ドルの局面で、為替と原油の「W効果」が輸入コストを二重に押し上げる構造を、家計・法人双方の影響まで通しで整理します。"
    >
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">「W効果（ダブル効果）」とは何か</h2>
        <p className="mt-3 text-sm leading-7 text-red-900">
          原油価格がドル建てで上昇し、同時に円安が進行すると、日本の輸入コストは「原油高×円安」の掛け算で増大します。原油が+30%、円が-10%（円安）なら、
          円建て輸入コストは+43%上昇します。これがW効果です。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">このサイトの全体構成</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700">
          {FX_DOUBLE_EFFECT_SERIES.map((item) => (
            <li key={item.slug}>
              {item.slug === "index" ? (
                <span className="font-semibold text-slate-900">総論（このページ） — ダブルショックの全体像</span>
              ) : (
                <Link href={getFxDoubleEffectPagePath(item.slug)} className="underline-offset-2 hover:underline">
                  {item.label} — {item.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">現在地 — 2026年4月の為替と原油</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-semibold text-rose-800">ドル円</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">159円台</p>
            <p className="text-xs text-rose-800">160円突破が視野</p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-semibold text-rose-800">WTI原油</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">$102</p>
            <p className="text-xs text-rose-800">イラン情勢で高止まり</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">円建て原油</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">16,218円/bbl</p>
            <p className="text-xs text-amber-800">2025年平均比+45%</p>
          </article>
        </div>
      </section>

      <FxDoubleEffectChartCard
        kind="overview-main"
        title="ドル円 × WTI原油の推移"
        description="2025年から2026年4月までの推移を見ると、為替と原油が同時に上昇する局面で円建て輸入コストが急拡大しています。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">3シナリオの比較</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">シナリオ</th>
                <th className="border border-slate-200 px-3 py-2 text-right">ドル円</th>
                <th className="border border-slate-200 px-3 py-2 text-right">WTI</th>
                <th className="border border-slate-200 px-3 py-2 text-right">円建て原油</th>
                <th className="border border-slate-200 px-3 py-2 text-right">2025年比</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">S1 短期安定化</td><td className="border border-slate-200 px-3 py-2 text-right">150〜155円</td><td className="border border-slate-200 px-3 py-2 text-right">$80〜85</td><td className="border border-slate-200 px-3 py-2 text-right">12,400円</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">+11%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">S2 夏まで長期化</td><td className="border border-slate-200 px-3 py-2 text-right">155〜162円</td><td className="border border-slate-200 px-3 py-2 text-right">$95〜105</td><td className="border border-slate-200 px-3 py-2 text-right">16,000円</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-amber-700">+43%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">S3 秋以降も継続</td><td className="border border-slate-200 px-3 py-2 text-right">160〜168円</td><td className="border border-slate-200 px-3 py-2 text-right">$105〜125</td><td className="border border-slate-200 px-3 py-2 text-right">19,600円</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">+75%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ円安と原油高が同時に起きるのか</h2>
        <div className="mt-4 grid gap-3 text-center text-sm md:grid-cols-4">
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3">イラン情勢緊迫化</div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">原油高騰 WTI$100超</div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-3">日本の貿易赤字拡大</div>
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-3">円売り圧力で円安進行</div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          加えて、原油高によるコストプッシュ型インフレを日銀が「基調的な物価上昇」と異なると判断し、利上げを後ずれさせると、
          日米金利差の縮小が進まず、円安圧力がさらに長期化する負の連鎖が発生します。
        </p>
      </section>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">各コスト分析との連携</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          このW効果がガソリン・ガス・食料品・原材料にどう波及するかは各特集をご覧ください。
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link href="/special/oil-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ガソリン代特集</Link>
          <Link href="/special/gas-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ガス代特集</Link>
          <Link href="/special/food-procurement-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食料仕入特集</Link>
          <Link href="/special/materials-packaging-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">原材料特集</Link>
        </div>
      </section>

      <RelatedLinks
        heading="下層ページから詳細を見る"
        intro="連鎖構造、シナリオ、家計・法人影響、対策を順に確認すると全体像を把握しやすくなります。"
        links={[
          { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/chain-mechanism`, title: "連鎖構造", description: "日銀利上げ後ずれと円安進行の構造を確認。" },
          { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/double-effect-matrix`, title: "W効果試算", description: "為替×原油の12パターンを定量比較。" },
          { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/household-impact`, title: "家計への影響", description: "世帯タイプ別の年間支出増を確認。" },
          { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/corporate-impact`, title: "法人への影響", description: "業種別の利益圧迫と二極化を確認。" },
        ]}
      />

      <ContentCta
        heading="次に確認するページ"
        description="まず連鎖構造とW効果マトリクスを確認し、その後に家計・法人影響へ進むと、対策の優先順位を決めやすくなります。"
        links={[
          { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/chain-mechanism`, label: "連鎖構造を見る" },
          { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/double-effect-matrix`, label: "W効果マトリクスを見る" },
          { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/action-roadmap`, label: "対策ロードマップを見る" },
        ]}
      />
    </FxDoubleEffectLayout>
  );
}
