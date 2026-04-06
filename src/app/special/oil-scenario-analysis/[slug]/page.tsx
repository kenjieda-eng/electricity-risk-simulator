import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentCta from "../../../../components/simulator/ContentCta";
import RelatedLinks from "../../../../components/simulator/RelatedLinks";
import {
  OIL_SCENARIO_BASE_PATH,
  OIL_SCENARIO_SLUGS,
  getOilScenarioPageBySlug,
} from "../../../../lib/oilScenarioAnalysis";
import OilScenarioChartCard from "../_components/OilScenarioCharts";
import OilScenarioLayout from "../_components/OilScenarioLayout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return OIL_SCENARIO_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getOilScenarioPageBySlug(slug);
  if (!page || slug === "index") {
    return {};
  }

  const url = `https://simulator.eic-jp.org${OIL_SCENARIO_BASE_PATH}/${slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
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
        <h2 className="text-xl font-semibold text-slate-900">ガソリン価格の構成要素</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          ガソリン1リットルの店頭価格は、大きく4つの要素で構成されています。税金が全体の約4割を占めるため、
          原油価格が2倍になってもガソリン価格は2倍にはなりません。
        </p>
      </section>

      <OilScenarioChartCard kind="mechanism-breakdown" title="ガソリン価格の構成比（概算）" heightClassName="h-[260px] sm:h-[300px]" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-slate-900">170円の内訳（補助金適用後・2026年4月概算）</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">項目</th>
                <th className="border border-slate-200 px-3 py-2 text-right">金額（円/L）</th>
                <th className="border border-slate-200 px-3 py-2 text-right">構成比</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">原油・精製コスト</td><td className="border border-slate-200 px-3 py-2 text-right">93</td><td className="border border-slate-200 px-3 py-2 text-right">55%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">ガソリン税（本則＋旧暫定→廃止済）</td><td className="border border-slate-200 px-3 py-2 text-right">28.7</td><td className="border border-slate-200 px-3 py-2 text-right">17%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">石油石炭税</td><td className="border border-slate-200 px-3 py-2 text-right">2.8</td><td className="border border-slate-200 px-3 py-2 text-right">2%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">消費税（10%）</td><td className="border border-slate-200 px-3 py-2 text-right">15.5</td><td className="border border-slate-200 px-3 py-2 text-right">9%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">流通・スタンドマージン</td><td className="border border-slate-200 px-3 py-2 text-right">14</td><td className="border border-slate-200 px-3 py-2 text-right">8%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold text-emerald-700">補助金による値引き</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">-48.1</td><td className="border border-slate-200 px-3 py-2 text-right">—</td></tr>
              <tr className="font-semibold"><td className="border border-slate-300 px-3 py-2">店頭価格（概算）</td><td className="border border-slate-300 px-3 py-2 text-right">≈170</td><td className="border border-slate-300 px-3 py-2 text-right">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">原油価格の反映タイムラグ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          中東で原油が高騰しても、すぐに店頭価格へ反映されるわけではありません。ただし、ガソリンは電気代（3〜4カ月）と比べて
          タイムラグが短く、約1カ月で反映されます。
        </p>
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-4">
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-center">原油高騰<br /><span className="text-xs">中東市場</span></div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-center">タンカー輸送<br /><span className="text-xs">約3週間</span></div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-center">精製・卸売<br /><span className="text-xs">数日〜1週間</span></div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-center">店頭価格<br /><span className="text-xs">約1カ月後</span></div>
        </div>
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">ただし元売りは先取り反映する</p>
          <p>
            石油元売り業者は海外の原油先物価格を卸売価格へ迅速に反映するため、実際にはタンカーが到着する前から値上げが始まります。
            「原油が上がったらすぐ高くなるのに、下がってもなかなか安くならない」という体感はこの仕組みに起因します。
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">暫定税率廃止の効果と現実</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          2025年12月31日にガソリンの暫定税率（25.1円/L）が廃止されました。本来であれば25円の値下げ効果があるはずでしたが、
          2月28日のイラン攻撃による原油急騰で、値下げ効果は完全に打ち消されています。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">時期</th>
                <th className="border border-slate-200 px-3 py-2 text-right">暫定税率</th>
                <th className="border border-slate-200 px-3 py-2 text-right">原油影響</th>
                <th className="border border-slate-200 px-3 py-2 text-right">差し引き</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">2025年12月（廃止直前）</td><td className="border border-slate-200 px-3 py-2 text-right">+25.1円</td><td className="border border-slate-200 px-3 py-2 text-right">±0</td><td className="border border-slate-200 px-3 py-2 text-right">基準</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">2026年1月（廃止後）</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">-25.1円</td><td className="border border-slate-200 px-3 py-2 text-right">±0</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">-25円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">2026年3月（原油急騰後）</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">-25.1円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+50〜60円</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">+25〜35円</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function SubsidyContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">補助金の仕組み</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          2026年3月19日出荷分から再開された「緊急的激変緩和措置」は、ガソリン全国平均小売価格を170円程度に抑えることを目標としています。
          170円を超える分を全額補助する変動型で、原油高が続くほど補助額が大きくなります。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-orange-200 bg-orange-50 p-4">
            <p className="text-xs text-orange-800">支給単価（3月26日〜）</p>
            <p className="mt-1 text-2xl font-bold text-orange-900">48.1円/L</p>
            <p className="text-xs text-orange-800">過去最高額</p>
          </article>
          <article className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-xs text-sky-800">確保済み財源</p>
            <p className="mt-1 text-2xl font-bold text-sky-900">1兆800億円</p>
            <p className="text-xs text-sky-800">基金残高＋予備費</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs text-slate-600">終了時期</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">未定</p>
            <p className="text-xs text-slate-600">暫定税率の結論が出るまで</p>
          </article>
        </div>
      </section>

      <OilScenarioChartCard kind="subsidy-fund" title="シナリオ別：財源残高の推移" description="ガソリン・軽油・灯油・重油への補助を合算した月間支出額を前提に試算。" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">シナリオ</th>
                <th className="border border-slate-200 px-3 py-2 text-right">月間支出（概算）</th>
                <th className="border border-slate-200 px-3 py-2 text-right">枯渇時期</th>
                <th className="border border-slate-200 px-3 py-2">影響</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">S1：短期安定化</td><td className="border border-slate-200 px-3 py-2 text-right">600〜800億円</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">枯渇せず</td><td className="border border-slate-200 px-3 py-2">原油下落で支出減。年内は持続可能。</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">S2：夏まで長期化</td><td className="border border-slate-200 px-3 py-2 text-right">1,000〜1,200億円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">2026年末〜</td><td className="border border-slate-200 px-3 py-2">補助額の段階的縮小の可能性。</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">S3：秋以降も継続</td><td className="border border-slate-200 px-3 py-2 text-right">1,300〜1,500億円</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">2026年10〜11月</td><td className="border border-slate-200 px-3 py-2">枯渇後はガソリン200円超えに。</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">補助金が縮小・終了した場合の価格</h2>
        <p className="mt-3 text-sm leading-7 text-red-900">
          原油WTI100ドル＋円安（1ドル=155〜160円）が続いた場合、補助金なしのレギュラーガソリン価格は210〜230円になると試算されます。
          これは2008年の過去最高値（185円）を大きく上回る水準です。
        </p>
      </section>

      <OilScenarioChartCard kind="subsidy-gap" title="「補助金あり」vs「補助金なし」の価格差（S2想定）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人が押さえるべきポイント</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
          <li><strong>補助金は「いつまでも続く」前提で予算を組まない</strong> — シナリオ3では秋に枯渇するリスク。</li>
          <li><strong>軽油への補助も同時に縮小される</strong> — 物流コストへの直接的な影響に注意。</li>
          <li><strong>補助金終了の「段階的移行」</strong> — 1回あたり最大5円の変動幅で段階的に移行する方針。</li>
          <li><strong>追加財源の可能性</strong> — 政治的判断次第で追加予備費の投入もあり得る。</li>
        </ul>
      </section>
    </>
  );
}

function DieselContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">軽油引取税 暫定税率廃止のリアル</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          2026年4月1日に軽油引取税の暫定税率（17.1円/L）が廃止されました。しかし、2025年11月27日の時点から同額の補助金が既に支給されていたため、
          店頭価格への追加的な値下げ効果は実質ゼロです。
        </p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-base font-semibold text-slate-900">なぜ「4月から安くなる」は誤解なのか</p>
          <div className="mt-3 grid gap-2 text-center text-sm md:grid-cols-3">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">2025年11月〜<br /><strong>補助金17.1円/L</strong><br />暫定税率と同額</div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">2026年4月〜<br /><strong>暫定税率廃止</strong><br />-17.1円/L</div>
            <div className="rounded-lg border border-slate-200 bg-white p-3">差し引き<br /><strong>±0円</strong><br />追加効果なし</div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            補助金で先に同額が値引きされていたため、税率廃止による追加の値下げは発生しません。
          </p>
        </div>
      </section>

      <OilScenarioChartCard kind="diesel-scenarios" title="軽油価格のシナリオ別推移" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">重油価格と影響を受ける業種</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          重油はA重油（ボイラー・漁船）とC重油（大型船舶・発電）に分かれます。特にA重油を使う温室栽培農家、漁業者、食品加工業は原油高の直撃を受けています。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">燃料種別</th>
                <th className="border border-slate-200 px-3 py-2">主な使用業種</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2での値上げ率</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">軽油</td><td className="border border-slate-200 px-3 py-2">トラック、バス、建設機械、農業機械</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">A重油</td><td className="border border-slate-200 px-3 py-2">ボイラー、温室暖房、漁船、食品加工</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+20〜30%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">C重油</td><td className="border border-slate-200 px-3 py-2">大型船舶、一部の発電</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+25〜35%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">灯油</td><td className="border border-slate-200 px-3 py-2">暖房、農業用ハウス</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">航空燃料</td><td className="border border-slate-200 px-3 py-2">航空会社（燃油サーチャージに転嫁）</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+25〜40%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">トラック事業者への影響試算</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"><p className="text-xs text-slate-600">4tトラック 1台/月</p><p className="mt-1 text-2xl font-bold text-amber-800">+1.5〜3万円</p><p className="text-xs text-slate-600">月間走行3,000km想定</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"><p className="text-xs text-slate-600">10tトラック 1台/月</p><p className="mt-1 text-2xl font-bold text-amber-800">+3〜6万円</p><p className="text-xs text-slate-600">月間走行5,000km想定</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"><p className="text-xs text-slate-600">10台保有 年間</p><p className="mt-1 text-2xl font-bold text-rose-800">+180〜720万円</p><p className="text-xs text-slate-600">S2〜S3想定</p></article>
        </div>
        <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
          <p className="font-semibold">燃料サーチャージの転嫁が課題</p>
          <p>
            軽油価格の上昇分を荷主に転嫁できない中小運送業者は、利益が直接圧迫されます。適正な燃料サーチャージ導入が進んでも、
            荷主との力関係で転嫁が難しい実態が残ります。
          </p>
        </div>
      </section>
    </>
  );
}

function LogisticsContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">燃料サーチャージの仕組み</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          燃料サーチャージは、軽油価格の変動分を運賃に上乗せする仕組みです。国土交通省は「標準的な運賃」のガイドラインで導入を推奨していますが、
          実際の適用は荷主との交渉次第です。
        </p>
      </section>

      <OilScenarioChartCard kind="logistics-surcharge" title="軽油価格と燃料サーチャージ率の関係" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">配送パターン別のコスト増試算</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          軽油価格が2025年平均（約125円/L）から各シナリオ想定水準へ上昇した場合の、配送1件あたりのコスト増を示します。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">配送パターン</th>
                <th className="border border-slate-200 px-3 py-2 text-right">1件あたり距離</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S1 コスト増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2 コスト増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3 コスト増</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2"><strong>宅配（ラストワンマイル）</strong><br /><span className="text-xs">2tトラック・市内近距離</span></td><td className="border border-slate-200 px-3 py-2 text-right">5〜15km</td><td className="border border-slate-200 px-3 py-2 text-right">+3〜5円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+8〜15円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+15〜25円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2"><strong>食品配送（温度管理）</strong><br /><span className="text-xs">冷凍車・中距離</span></td><td className="border border-slate-200 px-3 py-2 text-right">30〜80km</td><td className="border border-slate-200 px-3 py-2 text-right">+10〜18円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+25〜40円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+40〜65円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2"><strong>幹線輸送（長距離）</strong><br /><span className="text-xs">10tトラック・都市間</span></td><td className="border border-slate-200 px-3 py-2 text-right">300〜600km</td><td className="border border-slate-200 px-3 py-2 text-right">+800〜1,500円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+2,000〜3,500円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+3,500〜6,000円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">荷主企業への影響</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          運送業者の燃料コスト増は、最終的に荷主企業へ転嫁されます。EC事業者・食品メーカー・小売チェーンなど、物流を外部委託している企業は
          運賃の値上げ交渉に直面することになります。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"><p className="text-xs text-slate-600">月間1,000件配送の企業</p><p className="mt-1 text-2xl font-bold text-amber-800">+2.5〜4万円/月</p><p className="text-xs text-slate-600">S2 宅配パターン</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"><p className="text-xs text-slate-600">月間100件幹線輸送</p><p className="mt-1 text-2xl font-bold text-amber-800">+20〜35万円/月</p><p className="text-xs text-slate-600">S2 長距離パターン</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"><p className="text-xs text-slate-600">年間トータル（中規模）</p><p className="mt-1 text-2xl font-bold text-rose-800">+300〜600万円</p><p className="text-xs text-slate-600">S3 複合パターン</p></article>
        </div>
      </section>

      <OilScenarioChartCard kind="logistics-industry" title="業界別の影響度（物流コスト増加率）" />

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">電気代＋物流費のダブルコスト増に注意</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          冷凍冷蔵を扱う食品業界は、電気代（冷凍機の稼働コスト）と物流費（冷凍車の燃料コスト）の両方が上昇します。
          <Link href="/special/emergency-scenario-analysis" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
            電気代シナリオ分析
          </Link>
          と合わせて、トータルのコストインパクトを把握してください。
        </p>
      </section>
    </>
  );
}

function FleetContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">保有台数別 年間燃料費の増加額</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          営業車1台あたり月間走行1,500km、燃費12km/Lのガソリン車を想定した試算です。
        </p>
      </section>

      <OilScenarioChartCard kind="fleet-annual" title="保有台数別の年間増加額（万円）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">保有台数</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S1 年間増加額</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2 年間増加額</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3 年間増加額</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">5台</td><td className="border border-slate-200 px-3 py-2 text-right">+6〜9万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+12〜18万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+18〜30万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">10台</td><td className="border border-slate-200 px-3 py-2 text-right">+12〜18万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+24〜36万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+36〜60万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">50台</td><td className="border border-slate-200 px-3 py-2 text-right">+60〜90万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+120〜180万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+180〜300万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">100台</td><td className="border border-slate-200 px-3 py-2 text-right">+120〜180万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+240〜360万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+360〜600万円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ガソリン車 vs HV vs EV ランニングコスト比較</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">月間走行1,500km、年間18,000kmを想定した1台あたり年間エネルギーコストです。</p>
      </section>

      <OilScenarioChartCard kind="fleet-vehicle" title="車種別ランニングコスト比較（万円/年）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">車種</th>
                <th className="border border-slate-200 px-3 py-2 text-right">2025年</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2想定</th>
                <th className="border border-slate-200 px-3 py-2 text-right">差額</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3想定</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">ガソリン車（12km/L）</td><td className="border border-slate-200 px-3 py-2 text-right">234,000円</td><td className="border border-slate-200 px-3 py-2 text-right">270,000円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+36,000円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+66,000円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">ハイブリッド（22km/L）</td><td className="border border-slate-200 px-3 py-2 text-right">127,600円</td><td className="border border-slate-200 px-3 py-2 text-right">147,300円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+19,700円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+36,000円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">EV（6km/kWh）</td><td className="border border-slate-200 px-3 py-2 text-right">90,000円</td><td className="border border-slate-200 px-3 py-2 text-right">108,000円</td><td className="border border-slate-200 px-3 py-2 text-right">+18,000円</td><td className="border border-slate-200 px-3 py-2 text-right">+27,000円</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">EVも電気代が上がる — ただしガソリンほどではない</p>
          <p>
            EVのランニングコストも電気代高騰の影響を受けますが、ガソリン車と比べて上昇幅は小さくなります。これはEVのエネルギー効率が
            ガソリン車の約3倍高いためです。
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">EV切替の損益分岐シミュレーション</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          ガソリン車からEVへの切替えにかかる追加コスト（車両価格差）を、年間の燃料費削減で回収する年数です。ガソリン価格が高いほど回収が早まります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">車両価格差</th>
                <th className="border border-slate-200 px-3 py-2 text-right">2025年価格</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2想定</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3想定</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">+80万円（軽EV）</td><td className="border border-slate-200 px-3 py-2 text-right">5.6年</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">4.9年</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">3.8年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">+150万円（普通車EV）</td><td className="border border-slate-200 px-3 py-2 text-right">10.4年</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">9.3年</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">7.2年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">+250万円（商用EV）</td><td className="border border-slate-200 px-3 py-2 text-right">17.4年</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">15.4年</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">12.0年</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">※ 補助金（CEV補助金等）を含まない単純計算。補助金活用で回収年数はさらに短縮されます。</p>
      </section>
    </>
  );
}

function TravelContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">マイカー通勤の燃料費負担</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          マイカー通勤者への通勤手当は、多くの企業が「1kmあたり○円」のキロ単価で支給しています。ガソリン価格が上昇すると、
          支給額と実費の乖離が生じ、従業員の自己負担が増加します。
        </p>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">キロ単価と実費の比較</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">ガソリン価格</th>
                <th className="border border-slate-200 px-3 py-2 text-right">実費（燃費12km/L）</th>
                <th className="border border-slate-200 px-3 py-2 text-right">一般的な支給単価</th>
                <th className="border border-slate-200 px-3 py-2 text-right">差額</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">156円（2025年平均）</td><td className="border border-slate-200 px-3 py-2 text-right">13.0円/km</td><td className="border border-slate-200 px-3 py-2 text-right">15円/km</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">+2.0円（余裕あり）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">170円（S1想定）</td><td className="border border-slate-200 px-3 py-2 text-right">14.2円/km</td><td className="border border-slate-200 px-3 py-2 text-right">15円/km</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+0.8円（ほぼトントン）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">180円（S2想定）</td><td className="border border-slate-200 px-3 py-2 text-right">15.0円/km</td><td className="border border-slate-200 px-3 py-2 text-right">15円/km</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">±0（赤字突入）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">200円（S3想定）</td><td className="border border-slate-200 px-3 py-2 text-right">16.7円/km</td><td className="border border-slate-200 px-3 py-2 text-right">15円/km</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">-1.7円（自己負担）</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
          <p className="font-semibold">通勤距離20kmの従業員の場合</p>
          <p>往復40km × 月20日 = 月間800km。ガソリン200円の場合、実費は月約13,300円に対し、支給額は12,000円（15円/km）。月約1,300円の自己負担が発生します。年間では約15,600円です。</p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">旅費規程の見直しポイント</h2>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">① キロ単価の改定</h3>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          実勢のガソリン価格に応じたキロ単価見直しが必要です。「半年ごとに見直す」「ガソリン価格が○円を超えたら自動改定する」といった
          トリガー条件を規程に盛り込むと運用しやすくなります。
        </p>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">② 出張時のガソリン代・高速代</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">項目</th>
                <th className="border border-slate-200 px-3 py-2">影響</th>
                <th className="border border-slate-200 px-3 py-2">対策の方向性</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">自家用車での出張</td><td className="border border-slate-200 px-3 py-2">実費精算のキロ単価が実態と乖離</td><td className="border border-slate-200 px-3 py-2">キロ単価の改定 or 燃料価格連動制の導入</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">レンタカー</td><td className="border border-slate-200 px-3 py-2">ガソリン代実費の負担増</td><td className="border border-slate-200 px-3 py-2">HV/EV車種の指定、指定GSの活用</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">航空券</td><td className="border border-slate-200 px-3 py-2">燃油サーチャージの急騰（+25〜40%）</td><td className="border border-slate-200 px-3 py-2">早期予約の推奨、Web会議への切替え</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">タクシー</td><td className="border border-slate-200 px-3 py-2">LPG価格連動で値上がりの可能性</td><td className="border border-slate-200 px-3 py-2">配車アプリでの事前確定運賃の活用</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">③ 通勤手段の見直し支援</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
          <li>公共交通機関への切替え支援金（一時金）</li>
          <li>電動自転車の購入補助</li>
          <li>テレワーク日数の柔軟化</li>
          <li>カーシェア・相乗りの制度化</li>
        </ul>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">航空燃油サーチャージの急騰</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"><p className="text-xs text-slate-600">国内線 片道</p><p className="mt-1 text-2xl font-bold text-amber-800">+800〜1,500円</p><p className="text-xs text-slate-600">S2想定</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"><p className="text-xs text-slate-600">国際線 往復（欧米）</p><p className="mt-1 text-2xl font-bold text-rose-800">+3〜6万円</p><p className="text-xs text-slate-600">S3想定</p></article>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          出張の多い企業では、航空燃油サーチャージの増加だけで年間数十万円のコスト増になる可能性があります。
          Web会議の活用や出張の優先順位付けなど、「本当に行く必要があるか」の判断基準の明確化が求められます。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">FAQ</h2>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">通勤手当のキロ単価を引き上げると税務上の問題はありますか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            通勤手当には所得税の非課税限度額があります。非課税限度額を超えた分は課税対象となりますが、ガソリン高騰を理由とした合理的な引き上げであれば、
            実費相当額として認められやすい傾向があります。顧問税理士への確認を推奨します。
          </p>
        </details>
      </section>
    </>
  );
}

function ActionContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "法人のガソリン代を今すぐ削減する方法は？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "法人向け燃料カードの見直し、エコドライブの徹底、ルート最適化ツールの導入が即効性の高い対策です。",
        },
      },
      {
        "@type": "Question",
        name: "社用車をEVに切り替えるべきですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ガソリン200円超えが続くシナリオでは投資回収年数が短縮されます。用途ごとの適合性と充電設備コストを併せて判断してください。",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シナリオ別 対策の優先度</h2>

        <article className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-xs font-semibold text-emerald-800">全シナリオ共通（今すぐ・コストゼロ）</p>
          <p className="mt-2 text-sm leading-7 text-emerald-900">どのシナリオでもガソリン価格は2025年より高い水準です。コストゼロで始められる対策から着手します。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">燃料カードの見直し</p><p className="text-sm text-slate-700">法人カード各社で1Lあたり2〜5円の差。年間数十万円の差になることも。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">エコドライブ研修</p><p className="text-sm text-slate-700">急発進・急加速の抑制で燃費10〜15%改善。ドラレコデータも活用。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">ルート最適化</p><p className="text-sm text-slate-700">配車管理システム導入で走行距離5〜10%削減。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">アイドリングストップ</p><p className="text-sm text-slate-700">1時間のアイドリングで約1Lの無駄。待機時の停止を徹底。</p></div>
          </div>
        </article>

        <article className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800">S2以上に備える（夏までに着手）</p>
          <p className="mt-2 text-sm leading-7 text-amber-900">ガソリン180円超えが続く場合、運用改善だけでは吸収しきれません。設備投資・契約見直しが必要です。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">HV/PHEVへの切替え</p><p className="text-sm text-slate-700">次回更新時にHV指定。燃費2倍で年間燃料費を半減。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">共同配送の検討</p><p className="text-sm text-slate-700">同業他社との共同配送で積載率向上。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">モーダルシフト</p><p className="text-sm text-slate-700">長距離はトラックから鉄道・船舶への移行を検討。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">運送業者の相見積もり</p><p className="text-sm text-slate-700">燃料サーチャージ率の適正性を複数社で比較。</p></div>
          </div>
        </article>

        <article className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4">
          <p className="text-xs font-semibold text-rose-800">S3に備える（経営判断）</p>
          <p className="mt-2 text-sm leading-7 text-rose-900">ガソリン200円超えが常態化する場合、ビジネスモデルそのものの変革が必要です。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">EV社用車の導入</p><p className="text-sm text-slate-700">軽EVから段階的に切替え。補助金活用で初期投資を圧縮。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">自社充電インフラ</p><p className="text-sm text-slate-700">夜間充電や太陽光併用で運用コスト最適化。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">再配達削減の仕組み</p><p className="text-sm text-slate-700">置き配・宅配ボックス推進で配送効率向上。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">物流DX・自動配車</p><p className="text-sm text-slate-700">AI配車で積載率最適化。長期的に構造改善。</p></div>
          </div>
        </article>
      </section>

      <OilScenarioChartCard kind="action-effect" title="対策の効果とコスト一覧（回収月数 × 削減率）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">対策</th>
                <th className="border border-slate-200 px-3 py-2 text-right">初期投資</th>
                <th className="border border-slate-200 px-3 py-2 text-right">削減効果</th>
                <th className="border border-slate-200 px-3 py-2 text-right">回収年数</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">燃料カード見直し</td><td className="border border-slate-200 px-3 py-2 text-right">0円</td><td className="border border-slate-200 px-3 py-2 text-right">2〜5%</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">即日</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">エコドライブ研修</td><td className="border border-slate-200 px-3 py-2 text-right">5〜20万円</td><td className="border border-slate-200 px-3 py-2 text-right">10〜15%</td><td className="border border-slate-200 px-3 py-2 text-right">1〜3カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">ルート最適化ツール</td><td className="border border-slate-200 px-3 py-2 text-right">月1〜5万円</td><td className="border border-slate-200 px-3 py-2 text-right">5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right">2〜6カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">HV/PHEV切替（1台）</td><td className="border border-slate-200 px-3 py-2 text-right">+30〜80万円</td><td className="border border-slate-200 px-3 py-2 text-right">40〜50%</td><td className="border border-slate-200 px-3 py-2 text-right">3〜5年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">EV切替（1台）</td><td className="border border-slate-200 px-3 py-2 text-right">+80〜250万円</td><td className="border border-slate-200 px-3 py-2 text-right">60〜70%</td><td className="border border-slate-200 px-3 py-2 text-right">4〜8年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">充電設備設置</td><td className="border border-slate-200 px-3 py-2 text-right">50〜200万円</td><td className="border border-slate-200 px-3 py-2 text-right">—</td><td className="border border-slate-200 px-3 py-2 text-right">EV台数に依存</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電気代対策と合わせたトータル戦略</h2>
        <div className="mt-3 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">燃料費＋光熱費のトータルで最適化を</p>
          <p className="mt-1">
            EV化を進めると燃料費は削減されますが、電気代は増加します。事業所への太陽光導入を組み合わせればEV充電コストも抑えられます。
            燃料費と電気代を切り離さず、トータルのエネルギーコストとして最適化することが重要です。
          </p>
          <p className="mt-1">
            <Link href="/special/emergency-scenario-analysis" className="underline underline-offset-2">
              法人電気代シナリオ分析はこちら
            </Link>
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">よくある質問</h2>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">法人のガソリン代を今すぐ削減する方法は？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">法人向け燃料カードの見直し、エコドライブの徹底、ルート最適化ツールの導入が即効性のある対策です。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">社用車をEVに切り替えるべきですか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">ガソリン200円超えが続くシナリオでは回収年数が短縮されますが、充電インフラや用途適合性の確認が必要です。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">物流コストの値上げ交渉にどう対応すべき？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">燃料サーチャージ率の妥当性確認、複数社見積もり、共同配送やモーダルシフトの検討を並行して進めてください。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">ガソリン補助金はいつまで続きますか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">明確な終了日は未定ですが、シナリオ3では年内枯渇リスクがあるため、補助金頼みの前提は避ける必要があります。</p>
        </details>
      </section>
    </>
  );
}

function renderContent(slug: string) {
  if (slug === "price-mechanism") return <MechanismContent />;
  if (slug === "subsidy-outlook") return <SubsidyContent />;
  if (slug === "diesel-and-heavy-oil") return <DieselContent />;
  if (slug === "logistics-cost") return <LogisticsContent />;
  if (slug === "fleet-cost") return <FleetContent />;
  if (slug === "travel-and-commute") return <TravelContent />;
  if (slug === "action-roadmap") return <ActionContent />;
  return null;
}

const relatedLinksBySlug: Record<string, { heading: string; links: { href: string; title: string; description: string }[] }> = {
  "price-mechanism": {
    heading: "関連ページ",
    links: [
      { href: `${OIL_SCENARIO_BASE_PATH}/subsidy-outlook`, title: "補助金の行方", description: "170円抑制の持続性を確認する。" },
      { href: `${OIL_SCENARIO_BASE_PATH}/diesel-and-heavy-oil`, title: "軽油・重油", description: "物流・輸送燃料への影響を確認する。" },
    ],
  },
  "subsidy-outlook": {
    heading: "関連ページ",
    links: [
      { href: `${OIL_SCENARIO_BASE_PATH}/logistics-cost`, title: "配送・物流コスト", description: "軽油補助の縮小が運賃へ与える影響を確認。" },
      { href: `${OIL_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "補助金頼みを避ける実務対応を確認。" },
    ],
  },
  "diesel-and-heavy-oil": {
    heading: "関連ページ",
    links: [
      { href: `${OIL_SCENARIO_BASE_PATH}/logistics-cost`, title: "配送・物流コスト", description: "燃料サーチャージと配送単価の詳細分析。" },
      { href: `${OIL_SCENARIO_BASE_PATH}/fleet-cost`, title: "社用車・営業車", description: "社用車燃料費とEV比較を確認。" },
    ],
  },
  "logistics-cost": {
    heading: "関連ページ",
    links: [
      { href: `${OIL_SCENARIO_BASE_PATH}/diesel-and-heavy-oil`, title: "軽油・重油", description: "軽油価格シナリオの前提を確認。" },
      { href: `${OIL_SCENARIO_BASE_PATH}/travel-and-commute`, title: "出張旅費・通勤費", description: "人件費側への波及も併せて確認。" },
    ],
  },
  "fleet-cost": {
    heading: "関連ページ",
    links: [
      { href: `${OIL_SCENARIO_BASE_PATH}/travel-and-commute`, title: "出張旅費・通勤費", description: "通勤規程・旅費規程の見直し論点を確認。" },
      { href: `${OIL_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "HV/EV導入の優先順位を確認。" },
    ],
  },
  "travel-and-commute": {
    heading: "関連ページ",
    links: [
      { href: `${OIL_SCENARIO_BASE_PATH}/fleet-cost`, title: "社用車・営業車", description: "車両コストの全体像を確認。" },
      { href: `${OIL_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "規程改定と合わせる全社対応を確認。" },
    ],
  },
  "action-roadmap": {
    heading: "関連ページ",
    links: [
      { href: `${OIL_SCENARIO_BASE_PATH}/subsidy-outlook`, title: "補助金の行方", description: "補助金枯渇リスクを再確認する。" },
      { href: `${OIL_SCENARIO_BASE_PATH}/logistics-cost`, title: "配送・物流コスト", description: "値上げ交渉の論点を確認する。" },
    ],
  },
};

const leadBySlug: Record<string, string> = {
  "price-mechanism": "税金・原油・流通の内訳と、価格反映のタイムラグを把握して、店頭価格の動きを構造的に理解します。",
  "subsidy-outlook": "170円抑制補助金の持続性を、財源残高と月間支出の両面から確認します。",
  "diesel-and-heavy-oil": "軽油・重油の価格シナリオと、輸送・農業・漁業に波及する影響を整理します。",
  "logistics-cost": "燃料サーチャージと配送単価の変動を、配送パターン別に具体化して確認します。",
  "fleet-cost": "社用車保有台数ごとのコスト増と、HV/EV切替の経済性を比較します。",
  "travel-and-commute": "通勤手当・旅費規程の見直しポイントを、実費ベースで確認します。",
  "action-roadmap": "短期・中期・長期で実行する対策を、効果と投資回収の観点で整理します。",
};

export default async function OilScenarioPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getOilScenarioPageBySlug(slug);
  if (!page || slug === "index") {
    notFound();
  }

  const related = relatedLinksBySlug[slug];

  return (
    <OilScenarioLayout slug={slug} lead={leadBySlug[slug]}>
      {renderContent(slug)}

      <RelatedLinks heading={related.heading} links={related.links} />

      <ContentCta
        heading="次にすること"
        description="総論ページと電気代シナリオ分析もあわせて見ることで、エネルギーコスト全体の意思決定に繋げやすくなります。"
        links={[
          { href: OIL_SCENARIO_BASE_PATH, label: "総論トップへ戻る" },
          { href: "/special/emergency-scenario-analysis", label: "電気代シナリオ分析を見る" },
          { href: "/", label: "電気料金上昇リスクを診断する" },
        ]}
      />
    </OilScenarioLayout>
  );
}
