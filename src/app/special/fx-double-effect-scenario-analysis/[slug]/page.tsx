import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "../../../../components/seo/JsonLd";
import ContentCta from "../../../../components/simulator/ContentCta";
import RelatedLinks from "../../../../components/simulator/RelatedLinks";
import {
  FX_DOUBLE_EFFECT_BASE_PATH,
  FX_DOUBLE_EFFECT_SLUGS,
  getFxDoubleEffectPageBySlug,
} from "../../../../lib/fxDoubleEffectScenarioAnalysis";
import FxDoubleEffectChartCard from "../_components/FxDoubleEffectCharts";
import FxDoubleEffectLayout from "../_components/FxDoubleEffectLayout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return FX_DOUBLE_EFFECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getFxDoubleEffectPageBySlug(slug);
  if (!page || slug === "index") return {};

  const url = `https://simulator.eic-jp.org${FX_DOUBLE_EFFECT_BASE_PATH}/${slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "法人電気料金ナビ",
      locale: "ja_JP",
      type: "article",
      images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: page.label }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/twitter-default.png"],
    },
  };
}

function MechanismContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">負の連鎖の全体図</h2>
        <div className="mt-4 grid gap-3 text-center text-sm md:grid-cols-4">
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3">1. イラン情勢・ホルムズ海峡</div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">2. 原油高騰 WTI$100超</div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-3">3. コストプッシュ型インフレ</div>
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-3">4. 日銀利上げの後ずれ</div>
        </div>
        <div className="mt-3 grid gap-3 text-center text-sm md:grid-cols-4">
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-3">4. 日銀利上げの後ずれ</div>
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3">5. 日米金利差が縮小せず</div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">6. 円安進行 160円接近</div>
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-3">7. 輸入コスト二重増大</div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ日銀は利上げを後ずれさせるのか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          原油高によるコストプッシュ型インフレは、賃金上昇を伴う基調的な物価上昇とは性質が異なるため、利上げの根拠になりにくいと判断されます。
          その結果、政策金利の据え置きが続くと日米金利差の縮小が遅れ、円安圧力が残りやすくなります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">選択肢</th>
                <th className="border border-slate-200 px-3 py-2">メリット</th>
                <th className="border border-slate-200 px-3 py-2">デメリット</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">利上げする</td><td className="border border-slate-200 px-3 py-2">円安抑制、インフレ対策</td><td className="border border-slate-200 px-3 py-2">景気下押し、住宅ローン負担増</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">利上げしない</td><td className="border border-slate-200 px-3 py-2">景気下支え、企業資金繰り支援</td><td className="border border-slate-200 px-3 py-2">円安加速、輸入コスト増大</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          現在の政策金利は0.75%（2025年12月の利上げで到達）。次の利上げ予想は2026年7月が中心ですが、原油高が続く限り後ずれリスクがあります。
        </p>
      </section>

      <FxDoubleEffectChartCard kind="mechanism-rate" title="日米金利差とドル円の関係" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">貿易赤字の拡大が円安を加速させる</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          原油高は日本のエネルギー輸入額を直接押し上げ、貿易赤字を拡大させます。貿易赤字はドルの実需買い（円売り）を強め、構造的な円安圧力になります。
          これが「原油高→円安→円建て輸入コスト増」のフィードバックループを形成します。
        </p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
          <p className="font-semibold text-slate-900">「有事のドル買い」も追い打ち</p>
          <p>
            中東紛争の長期化はリスク回避のドル買いを誘発します。日米金利差に加えて有事のドル買いが重なると、日銀の政策だけでは円安の流れを変えにくくなります。
          </p>
        </div>
      </section>
    </>
  );
}

function YenScenarioContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">4段階の円安シナリオ</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">水準</th>
                <th className="border border-slate-200 px-3 py-2">前提条件</th>
                <th className="border border-slate-200 px-3 py-2 text-right">輸入コスト（2025年比）</th>
                <th className="border border-slate-200 px-3 py-2">確率（市場予想）</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">150〜152円</td><td className="border border-slate-200 px-3 py-2">日銀が早期利上げ、原油下落</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">+0〜3%</td><td className="border border-slate-200 px-3 py-2">20%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">155〜158円</td><td className="border border-slate-200 px-3 py-2">現状維持、緩やかな利上げ</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+5〜10%</td><td className="border border-slate-200 px-3 py-2">35%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">159〜162円</td><td className="border border-slate-200 px-3 py-2">利上げ後ずれ、原油高継続</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+8〜15%</td><td className="border border-slate-200 px-3 py-2">30%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">163〜168円</td><td className="border border-slate-200 px-3 py-2">利上げ見送り、原油急騰</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+12〜20%</td><td className="border border-slate-200 px-3 py-2">15%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <FxDoubleEffectChartCard kind="yen-scenarios" title="ドル円の年内シナリオ推移" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">円安を止めるトリガー</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">日銀の利上げ</p><p className="mt-1 text-sm text-slate-700">展望レポートでタカ派姿勢を明示すれば円高材料。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">中東情勢の緩和</p><p className="mt-1 text-sm text-slate-700">停戦でWTI85ドル割れなら構造的な円高圧力。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">為替介入</p><p className="mt-1 text-sm text-slate-700">160円超えで介入余地。ただし効果は一時的。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">FRBの利下げ</p><p className="mt-1 text-sm text-slate-700">日米金利差の縮小が円高への転換点。</p></article>
        </div>
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-7 text-red-900">
          <p className="font-semibold">165円接近で自己強化的円安のリスク</p>
          <p>輸入コスト増が貿易赤字を拡大し、円売りをさらに強めるループが発生しやすくなります。</p>
        </div>
      </section>
    </>
  );
}

function OilScenarioContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">3段階の原油シナリオ</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[780px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">WTI水準</th>
                <th className="border border-slate-200 px-3 py-2">前提条件</th>
                <th className="border border-slate-200 px-3 py-2 text-right">円建て原油（@155円）</th>
                <th className="border border-slate-200 px-3 py-2 text-right">2025年比</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">$75〜85</td><td className="border border-slate-200 px-3 py-2">停戦・ホルムズ正常化</td><td className="border border-slate-200 px-3 py-2 text-right">12,400円</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">+11%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">$95〜105</td><td className="border border-slate-200 px-3 py-2">現状継続・部分的混乱</td><td className="border border-slate-200 px-3 py-2 text-right">15,500円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+39%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">$110〜125</td><td className="border border-slate-200 px-3 py-2">ホルムズ完全封鎖</td><td className="border border-slate-200 px-3 py-2 text-right">18,200円</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">+63%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <FxDoubleEffectChartCard kind="oil-scenarios" title="WTI原油の年内シナリオ推移" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">日本のエネルギー輸入構造</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4"><p className="text-xs text-rose-800">原油の中東依存</p><p className="mt-1 text-2xl font-bold text-rose-900">95%</p><p className="text-xs text-rose-800">ホルムズ海峡経由</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">LNG中東依存</p><p className="mt-1 text-2xl font-bold text-amber-900">約11%</p><p className="text-xs text-amber-800">カタール＋UAE</p></article>
          <article className="rounded-lg border border-sky-200 bg-sky-50 p-4"><p className="text-xs text-sky-800">石油備蓄</p><p className="mt-1 text-2xl font-bold text-sky-900">254日分</p><p className="text-xs text-sky-800">国家＋民間</p></article>
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
          <p className="font-semibold text-slate-900">原油$10上昇ごとのインパクト</p>
          <p>WTIが$10上昇すると、日本の年間エネルギー輸入額は約1.5〜2兆円増加し、貿易赤字と円安圧力を強めます。</p>
        </div>
      </section>
    </>
  );
}

function DoubleEffectMatrixContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">W効果の計算式</h2>
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
          <p className="font-semibold text-slate-900">円建て輸入コスト = ドル建て価格 × ドル円レート</p>
          <p>基準：2025年平均（WTI $72 × 155円 = 11,160円/bbl）</p>
          <p>
            例：WTI $100 × 160円 = 16,000円（基準比 +43.4%）。原油+39%と円安+3%が別々に見えても、掛け算すると+43%になります。
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">W効果マトリクス（円建て原油コスト・2025年比）</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">WTI ＼ ドル円</th>
                <th className="border border-slate-200 px-3 py-2 text-right">150円</th>
                <th className="border border-slate-200 px-3 py-2 text-right">155円</th>
                <th className="border border-slate-200 px-3 py-2 text-right">160円</th>
                <th className="border border-slate-200 px-3 py-2 text-right">165円</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">$80</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">+7.5%（12,000円）</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">+11.1%（12,400円）</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+14.7%（12,800円）</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+18.3%（13,200円）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">$100</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+34.4%（15,000円）</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+38.9%（15,500円）</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+43.4%（16,000円）</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+47.8%（16,500円）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">$120</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+61.3%（18,000円）</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+66.7%（18,600円）</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">+72.0%（19,200円）</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">+77.4%（19,800円）</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-7 text-red-900">
          <p className="font-semibold">最悪シナリオ（$120×165円）では+77%の輸入コスト増</p>
          <p>2025年平均の11,160円/bblから19,800円/bblへ。日本経済全体に深刻な影響を与える水準です。</p>
        </div>
      </section>

      <FxDoubleEffectChartCard
        kind="double-impact"
        title="品目別のW効果波及（積み上げ）"
        description="原油要因と為替要因を分けて見ると、W効果による上乗せ分が品目ごとに異なることが分かります。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">輸入品目別の影響整理</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">輸入品目</th>
                <th className="border border-slate-200 px-3 py-2 text-right">原油高の影響</th>
                <th className="border border-slate-200 px-3 py-2 text-right">円安の影響</th>
                <th className="border border-slate-200 px-3 py-2 text-right">W効果</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">原油・LNG</td><td className="border border-slate-200 px-3 py-2 text-right">+30〜40%</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">+38〜54%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">輸入食料品</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜21%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">化学品・プラスチック原料</td><td className="border border-slate-200 px-3 py-2 text-right">+20〜35%</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+26〜48%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">非鉄金属</td><td className="border border-slate-200 px-3 py-2 text-right">+10〜20%</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+16〜32%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">半導体・電子部品</td><td className="border border-slate-200 px-3 py-2 text-right">±0〜5%</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜16%</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function HouseholdImpactContent() {
  return (
    <>
      <FxDoubleEffectChartCard
        kind="household-impact"
        title="世帯タイプ別の年間支出増"
        description="4人家族・マイカーありの世帯ほど、食費・ガソリン・光熱費の三重打撃を受けやすくなります。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">世帯タイプ別の年間支出増</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">世帯タイプ</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S1 年間増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2 年間増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3 年間増</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">単身（都市部・車なし）</td><td className="border border-slate-200 px-3 py-2 text-right">+3〜5万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+6〜10万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+10〜16万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">夫婦2人（都市部・車なし）</td><td className="border border-slate-200 px-3 py-2 text-right">+4〜7万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+9〜15万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+15〜24万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">4人家族（郊外・車1台）</td><td className="border border-slate-200 px-3 py-2 text-right">+7〜11万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜24万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+24〜38万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">4人家族（地方・車2台）</td><td className="border border-slate-200 px-3 py-2 text-right">+9〜14万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+18〜30万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+30〜48万円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">支出項目別の内訳（4人家族・車1台・S2想定）</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">支出項目</th>
                <th className="border border-slate-200 px-3 py-2 text-right">月間増加額</th>
                <th className="border border-slate-200 px-3 py-2 text-right">年間増加額</th>
                <th className="border border-slate-200 px-3 py-2">主な原因</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">食費</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+5,000〜8,000円</td><td className="border border-slate-200 px-3 py-2 text-right">+6〜9.6万円</td><td className="border border-slate-200 px-3 py-2">食材原価＋包装資材＋物流費の転嫁</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">ガソリン代</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+3,000〜5,000円</td><td className="border border-slate-200 px-3 py-2 text-right">+3.6〜6万円</td><td className="border border-slate-200 px-3 py-2">原油高＋円安の直接影響</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">電気代</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+2,000〜3,500円</td><td className="border border-slate-200 px-3 py-2 text-right">+2.4〜4.2万円</td><td className="border border-slate-200 px-3 py-2">LNG高騰＋補助金終了</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">ガス代</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+1,000〜2,000円</td><td className="border border-slate-200 px-3 py-2 text-right">+1.2〜2.4万円</td><td className="border border-slate-200 px-3 py-2">LNG高騰＋補助金終了</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">日用品</td><td className="border border-slate-200 px-3 py-2 text-right">+500〜1,500円</td><td className="border border-slate-200 px-3 py-2 text-right">+0.6〜1.8万円</td><td className="border border-slate-200 px-3 py-2">プラスチック容器＋原料高</td></tr>
              <tr className="font-semibold"><td className="border border-slate-300 px-3 py-2">合計</td><td className="border border-slate-300 px-3 py-2 text-right">+11,500〜20,000円</td><td className="border border-slate-300 px-3 py-2 text-right text-amber-700">+13.8〜24万円</td><td className="border border-slate-300 px-3 py-2"> </td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
          <p className="font-semibold text-slate-900">実質賃金との関係</p>
          <p>
            名目賃金が+3〜4%上昇しても、物価が+2〜3%上昇すれば実質賃金の上昇は限定的です。S2では物価上昇率が上回り、実質賃金がマイナスになるリスクがあります。
          </p>
        </div>
      </section>
    </>
  );
}

function CorporateImpactContent() {
  return (
    <>
      <FxDoubleEffectChartCard kind="corporate-impact" title="業種別のW効果インパクト" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">輸入型企業への影響</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">業種</th>
                <th className="border border-slate-200 px-3 py-2">W効果の経路</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2 利益圧迫率</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">飲食業</td><td className="border border-slate-200 px-3 py-2">食材輸入＋ガス代＋包装資材</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">30〜50%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">食品製造業</td><td className="border border-slate-200 px-3 py-2">原材料輸入＋包装＋エネルギー</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">20〜40%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">運輸・物流</td><td className="border border-slate-200 px-3 py-2">軽油＋燃料サーチャージ</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">15〜30%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">小売業</td><td className="border border-slate-200 px-3 py-2">輸入商品＋物流費＋光熱費</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">10〜25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">化学・素材</td><td className="border border-slate-200 px-3 py-2">ナフサ＋エネルギー</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">15〜30%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">輸出型企業のメリットと相殺要因</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          自動車・電機・精密機器などの輸出型企業は、円安で海外売上の円換算額が増加します。一方で、原材料や部品の輸入コスト増がメリットを一部相殺します。
        </p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
          <p className="font-semibold text-slate-900">円安1円の営業利益感応度（主要企業の目安）</p>
          <p>
            大手自動車メーカーではドル円1円の円安で営業利益が年間400〜500億円増加する一方、食品メーカーでは年間数億〜数十億円のコスト増となり、業種間格差が拡大します。
          </p>
        </div>
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">「円安倒産」増加リスク</p>
          <p>輸入依存度の高い中小企業では、価格転嫁が追いつかず資金繰りが悪化するリスクがあります。</p>
        </div>
      </section>
    </>
  );
}

function ActionRoadmapContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "円安はいつまで続きますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2026年内は150〜165円のレンジが中心と見込まれます。日銀の追加利上げ、中東情勢の緩和、FRB利下げが反転トリガーですが不確実性は高い状況です。",
        },
      },
      {
        "@type": "Question",
        name: "中小企業ができる為替対策は？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "為替予約による輸入コスト固定化、仕入先の国内回帰・近隣国シフト、ドル建て売上の確保が主な選択肢です。",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人向け対策</h2>

        <article className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-xs font-semibold text-emerald-800">全シナリオ共通（今すぐ着手）</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">為替エクスポージャーの可視化</p><p className="text-sm text-slate-700">輸入依存度を品目別・通貨別に把握し影響額を定量化。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">エネルギーコスト監視</p><p className="text-sm text-slate-700">ガソリン・ガス・電気の請求推移を月次監視。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">契約の為替条項確認</p><p className="text-sm text-slate-700">仕入契約の為替変動条項の有無を確認。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">価格転嫁の準備</p><p className="text-sm text-slate-700">コスト増エビデンスを整理し説明資料を整備。</p></div>
          </div>
        </article>

        <article className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800">S2以上に備える（夏までに）</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">為替予約（フォワード）</p><p className="text-sm text-slate-700">3〜6カ月先の輸入分を現在レートで予約。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">仕入先の国内回帰</p><p className="text-sm text-slate-700">輸入品から国産品へ切替え、為替リスクを削減。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">エネルギー転換</p><p className="text-sm text-slate-700">ガスから電気、ガソリン車からEVへ段階移行。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">ドル建て売上の確保</p><p className="text-sm text-slate-700">輸出・インバウンドで自然ヘッジを強化。</p></div>
          </div>
        </article>

        <article className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4">
          <p className="text-xs font-semibold text-rose-800">S3に備える（経営判断）</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">サプライチェーン再構築</p><p className="text-sm text-slate-700">中東依存を下げ、ASEAN・豪州・北米調達を拡大。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">自社発電・省エネ投資</p><p className="text-sm text-slate-700">太陽光＋蓄電池で為替影響を受けにくい体質へ。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">高付加価値化</p><p className="text-sm text-slate-700">価格決定力を高め、コスト増耐性を向上。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">海外拠点活用</p><p className="text-sm text-slate-700">生産・調達の現地化で為替リスクを自然ヘッジ。</p></div>
          </div>
        </article>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">家計向け対策</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">対策</th>
                <th className="border border-slate-200 px-3 py-2">効果</th>
                <th className="border border-slate-200 px-3 py-2">実施の手軽さ</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">電気・ガスのプラン見直し</td><td className="border border-slate-200 px-3 py-2">年間1〜3万円削減</td><td className="border border-slate-200 px-3 py-2">すぐできる</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">エコドライブ・給油先最適化</td><td className="border border-slate-200 px-3 py-2">月1,000〜3,000円削減</td><td className="border border-slate-200 px-3 py-2">すぐできる</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">食費見直し（PB活用）</td><td className="border border-slate-200 px-3 py-2">月2,000〜5,000円削減</td><td className="border border-slate-200 px-3 py-2">すぐできる</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">外貨建て資産の保有</td><td className="border border-slate-200 px-3 py-2">円安メリットを取り込む</td><td className="border border-slate-200 px-3 py-2">検討が必要</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">省エネ家電への買い替え</td><td className="border border-slate-200 px-3 py-2">年間1〜5万円削減</td><td className="border border-slate-200 px-3 py-2">初期投資あり</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">各コスト対策との連携</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          W効果はガソリン代・ガス代・食料仕入・原材料コストの上流要因です。為替と原油の見通しを押さえた上で、各特集の個別対策を組み合わせてください。
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link href="/special/oil-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ガソリン代分析</Link>
          <Link href="/special/gas-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ガス代分析</Link>
          <Link href="/special/food-procurement-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食料仕入分析</Link>
          <Link href="/special/materials-packaging-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">原材料分析</Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">よくある質問</h2>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">円安はいつまで続きますか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2026年内は150〜165円のレンジが中心と見込まれます。日銀の追加利上げ、中東情勢の緩和、FRBの利下げが反転トリガーですが、いずれも不確実性が高い状況です。
          </p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">中小企業ができる為替対策は？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            為替予約による輸入コスト固定化が直接的です。加えて、仕入先の国内回帰・近隣国シフト、ドル建て売上の確保が有効です。
          </p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">原油価格はどこまで上がりますか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            S2ではWTI95〜105ドル、S3では110〜125ドルを想定しています。ホルムズ海峡の完全封鎖が現実化した場合は130ドル超の可能性もあります。
          </p>
        </details>
      </section>
    </>
  );
}

function renderContent(slug: string) {
  if (slug === "chain-mechanism") return <MechanismContent />;
  if (slug === "yen-scenario") return <YenScenarioContent />;
  if (slug === "oil-scenario") return <OilScenarioContent />;
  if (slug === "double-effect-matrix") return <DoubleEffectMatrixContent />;
  if (slug === "household-impact") return <HouseholdImpactContent />;
  if (slug === "corporate-impact") return <CorporateImpactContent />;
  if (slug === "action-roadmap") return <ActionRoadmapContent />;
  return null;
}

const relatedLinksBySlug: Record<string, { heading: string; links: { href: string; title: string; description: string }[] }> = {
  "chain-mechanism": {
    heading: "関連ページ",
    links: [
      { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/yen-scenario`, title: "円安シナリオ", description: "為替水準別の影響を確認する。" },
      { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/double-effect-matrix`, title: "W効果試算", description: "掛け算の定量結果を確認する。" },
    ],
  },
  "yen-scenario": {
    heading: "関連ページ",
    links: [
      { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/oil-scenario`, title: "原油シナリオ", description: "為替と組み合わさる原油要因を確認する。" },
      { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/double-effect-matrix`, title: "W効果試算", description: "12パターン比較で影響幅を確認する。" },
    ],
  },
  "oil-scenario": {
    heading: "関連ページ",
    links: [
      { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/yen-scenario`, title: "円安シナリオ", description: "原油と同時進行する為替リスクを確認。" },
      { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/double-effect-matrix`, title: "W効果試算", description: "為替×原油の掛け算結果を見る。" },
    ],
  },
  "double-effect-matrix": {
    heading: "関連ページ",
    links: [
      { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/household-impact`, title: "家計への影響", description: "世帯別の年間支出増へ落とし込む。" },
      { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/corporate-impact`, title: "法人への影響", description: "業種別の利益圧迫へ落とし込む。" },
    ],
  },
  "household-impact": {
    heading: "関連ページ",
    links: [
      { href: "/special/oil-scenario-analysis", title: "ガソリン代特集", description: "燃料費の詳細な前提を確認する。" },
      { href: "/special/gas-scenario-analysis", title: "ガス代特集", description: "光熱費側の影響も合わせて確認する。" },
    ],
  },
  "corporate-impact": {
    heading: "関連ページ",
    links: [
      { href: "/special/food-procurement-scenario-analysis", title: "食料仕入特集", description: "食品業の実務影響を深掘りする。" },
      { href: "/special/materials-packaging-scenario-analysis", title: "原材料特集", description: "素材・包装の調達影響を確認する。" },
    ],
  },
  "action-roadmap": {
    heading: "関連ページ",
    links: [
      { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/double-effect-matrix`, title: "W効果試算", description: "対策前提となる数値を再確認する。" },
      { href: `${FX_DOUBLE_EFFECT_BASE_PATH}/corporate-impact`, title: "法人への影響", description: "業種別の優先課題を再確認する。" },
    ],
  },
};

const leadBySlug: Record<string, string> = {
  "chain-mechanism": "イラン情勢から原油高、日銀の利上げ判断、円安、輸入コスト増までの連鎖をつないで把握します。",
  "yen-scenario": "150円から165円までの4段階で、為替水準別に輸入コストの上振れ幅を比較します。",
  "oil-scenario": "WTI 80/100/120ドルの3段階で、日本のエネルギー輸入構造への影響を整理します。",
  "double-effect-matrix": "為替と原油を掛け合わせた12パターンを同じ基準で比較し、W効果の実額を確認します。",
  "household-impact": "世帯タイプ別に、食費・ガソリン・光熱費が家計へ与える年間負担を見える化します。",
  "corporate-impact": "輸入型と輸出型で分かれる業種別インパクトを比較し、利益構造への影響を確認します。",
  "action-roadmap": "家計と法人の対策を、全シナリオ共通・S2以上・S3想定の3段階で整理します。",
};

export default async function FxDoubleEffectPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getFxDoubleEffectPageBySlug(slug);
  if (!page || slug === "index") notFound();

  const related = relatedLinksBySlug[slug];
  const url = `https://simulator.eic-jp.org${FX_DOUBLE_EFFECT_BASE_PATH}/${slug}`;

  return (
    <>
      <ArticleJsonLd
        headline={page.title}
        description={page.description}
        url={url}
        datePublished="2026-03-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "有事シナリオ分析（円安×原油高 W効果）", url: `https://simulator.eic-jp.org${FX_DOUBLE_EFFECT_BASE_PATH}` },
          { name: page.label },
        ]}
      />
      <FxDoubleEffectLayout slug={slug} lead={leadBySlug[slug]}>
        {renderContent(slug)}

        <RelatedLinks heading={related.heading} links={related.links} />

        <ContentCta
          heading="次にすること"
          description="総論ページと他のコスト特集もあわせて確認すると、W効果を前提にした実務判断がしやすくなります。"
          links={[
            { href: FX_DOUBLE_EFFECT_BASE_PATH, label: "総論トップへ戻る" },
            { href: "/special/oil-scenario-analysis", label: "ガソリン代特集を見る" },
            { href: "/special/food-procurement-scenario-analysis", label: "食料仕入特集を見る" },
          ]}
        />
      </FxDoubleEffectLayout>
    </>
  );
}
