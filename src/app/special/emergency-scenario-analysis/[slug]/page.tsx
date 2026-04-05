import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EmergencyScenarioChartCard from "../_components/EmergencyScenarioCharts";
import EmergencyScenarioLayout from "../_components/EmergencyScenarioLayout";
import {
  EMERGENCY_SCENARIO_BASE_PATH,
  EMERGENCY_SCENARIO_SLUGS,
  getEmergencyScenarioPageBySlug,
} from "../../../../lib/emergencyScenarioAnalysis";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return EMERGENCY_SCENARIO_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getEmergencyScenarioPageBySlug(slug);
  if (!page || slug === "index") {
    return {};
  }

  const url = `https://simulator.eic-jp.org${EMERGENCY_SCENARIO_BASE_PATH}/${slug}`;
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

function BackgroundContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2026年有事局面のタイムライン</h2>
        <div className="mt-4 space-y-3 border-l-2 border-slate-200 pl-4 text-sm leading-7 text-slate-700">
          <p><strong>2月28日:</strong> 中東での軍事緊張が急上昇し、原油市場が急反応。</p>
          <p><strong>3月2日:</strong> 海上輸送に制約が発生し、供給不安が拡大。</p>
          <p><strong>3月9日:</strong> WTI が一時 120 ドル近辺まで上昇。</p>
          <p><strong>3月下旬:</strong> 停戦観測が強まる一方で、市場は高ボラティリティを維持。</p>
          <p><strong>4月初旬:</strong> 100 ドル台で高止まりし、電力コストへの波及が現実化。</p>
        </div>
      </section>

      <EmergencyScenarioChartCard
        kind="oil-history"
        title="原油価格の推移（2026年）"
        description="停戦観測で下がる局面があっても、供給懸念が残る間は高止まりが続きやすい構造です。"
      />

      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">ホルムズ海峡が重要な理由</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-red-900">
          <li>世界の原油供給の約2割が通過するボトルネック。</li>
          <li>日本の輸入エネルギーは中東依存度が高く、物流停止の影響を受けやすい。</li>
          <li>停戦しても航路再開と保険正常化には時間差が生じる。</li>
        </ul>
      </section>
    </>
  );
}

function MechanismContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人電気代の構成要素</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm">① 固定単価（基本料金・従量単価）</div>
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm">② 変動単価（燃料費調整・市場調整）</div>
          <div className="rounded-lg border border-violet-200 bg-violet-50 p-3 text-sm">③ 再エネ賦課金（年度改定）</div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700">有事局面では②と③が同時に効くため、固定単価だけを見ても実際の請求変動は把握できません。</p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">算定期間短縮で変化したポイント</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">項目</th>
                <th className="border border-slate-200 px-3 py-2">変更前</th>
                <th className="border border-slate-200 px-3 py-2">変更後</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="border border-slate-200 px-3 py-2">平均燃料価格の参照期間</td>
                <td className="border border-slate-200 px-3 py-2">過去3〜5カ月平均</td>
                <td className="border border-slate-200 px-3 py-2">過去1〜1.5カ月中心</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">上昇時の反応速度</td>
                <td className="border border-slate-200 px-3 py-2">緩やか</td>
                <td className="border border-slate-200 px-3 py-2">速い</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">下落時の戻り</td>
                <td className="border border-slate-200 px-3 py-2">遅い</td>
                <td className="border border-slate-200 px-3 py-2">比較的速い</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function QuadrupleContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">4つの上昇要因</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-3"><p className="text-xs">① 原油・LNG</p><p className="text-xl font-bold text-rose-800">最大 +10%</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-3"><p className="text-xs">② 補助金終了</p><p className="text-xl font-bold text-amber-800">+4% 前後</p></article>
          <article className="rounded-lg border border-violet-200 bg-violet-50 p-3"><p className="text-xs">③ 再エネ賦課金</p><p className="text-xl font-bold text-violet-800">+2% 前後</p></article>
          <article className="rounded-lg border border-orange-200 bg-orange-50 p-3"><p className="text-xs">④ 円安進行</p><p className="text-xl font-bold text-orange-800">+2〜4%</p></article>
        </div>
      </section>

      <EmergencyScenarioChartCard
        kind="quadruple-stack"
        title="4要因の積み上げ推移（シナリオ2想定）"
        description="単独要因ではなく、複数要因の重なりが夏場の請求上振れをつくる点が重要です。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">月別コスト上昇内訳（概算）</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">月</th>
                <th className="border border-slate-200 px-3 py-2">原油</th>
                <th className="border border-slate-200 px-3 py-2">補助金</th>
                <th className="border border-slate-200 px-3 py-2">再エネ</th>
                <th className="border border-slate-200 px-3 py-2">円安</th>
                <th className="border border-slate-200 px-3 py-2">合計</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ["4月", "+1%", "+4%", "-", "+1%", "+6%"],
                ["5月", "+2%", "+4%", "+2%", "+2%", "+10%"],
                ["6月", "+5%", "+4%", "+2%", "+3%", "+14%"],
                ["7月", "+8%", "+4%", "+2%", "+3%", "+17%"],
                ["8月", "+10%", "+4%", "+2%", "+4%", "+20%"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={`${row[0]}-${cell}`} className="border border-slate-200 px-3 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function ScenarioContent(kind: "scenario-1" | "scenario-2" | "scenario-3") {
  const conf =
    kind === "scenario-1"
      ? {
          chart: "scenario-1" as const,
          range: "+5〜8%",
          risk: "傷は浅いが、補助金終了分は残る",
          panelClass: "rounded-xl border border-emerald-200 bg-emerald-50 p-5",
          headingClass: "text-xl font-semibold text-emerald-900",
          textClass: "mt-3 text-sm leading-7 text-emerald-900",
        }
      : kind === "scenario-2"
        ? {
            chart: "scenario-2" as const,
            range: "+15〜25%",
            risk: "夏ピークで使用量×単価のダブルパンチ",
            panelClass: "rounded-xl border border-amber-200 bg-amber-50 p-5",
            headingClass: "text-xl font-semibold text-amber-900",
            textClass: "mt-3 text-sm leading-7 text-amber-900",
          }
        : {
            chart: "scenario-3" as const,
            range: "+20〜35%",
            risk: "高コストが構造化し、事業計画見直しが必要",
            panelClass: "rounded-xl border border-rose-200 bg-rose-50 p-5",
            headingClass: "text-xl font-semibold text-rose-900",
            textClass: "mt-3 text-sm leading-7 text-rose-900",
          };

  return (
    <>
      <section className={conf.panelClass}>
        <h2 className={conf.headingClass}>想定レンジと実務上の論点</h2>
        <p className={conf.textClass}>
          想定上昇レンジは <strong>{conf.range}</strong>。{conf.risk} という前提で、契約と予算の二軸で備える必要があります。
        </p>
      </section>

      <EmergencyScenarioChartCard kind={conf.chart} title="月別の前年同月比（想定）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">チェックすべきポイント</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
          <li>契約プランが固定単価か市場連動かを確認する</li>
          <li>契約更新時期と違約金条件を確認する</li>
          <li>6〜10月の資金繰りに電力コスト上振れを織り込む</li>
          <li>必要に応じて設備対策と調達対策を同時に進める</li>
        </ul>
      </section>
    </>
  );
}

function ContractRiskContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">契約タイプ × シナリオ リスクマトリクス</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">契約タイプ</th>
                <th className="border border-slate-200 px-3 py-2">S1</th>
                <th className="border border-slate-200 px-3 py-2">S2</th>
                <th className="border border-slate-200 px-3 py-2">S3</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">高圧・固定単価</td><td className="border px-3 py-2">+5〜8%</td><td className="border px-3 py-2">+10〜18%</td><td className="border px-3 py-2">+18〜28%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">市場連動型</td><td className="border px-3 py-2">+8〜15%</td><td className="border px-3 py-2">+20〜35%</td><td className="border px-3 py-2">+30〜50%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">特別高圧</td><td className="border px-3 py-2">+4〜7%</td><td className="border px-3 py-2">+12〜22%</td><td className="border px-3 py-2">+20〜35%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">新電力（中小PPS）</td><td className="border px-3 py-2">+7〜12%</td><td className="border px-3 py-2">+18〜30%</td><td className="border px-3 py-2">+25〜45%</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">市場連動型で特に注意する点</h2>
        <p className="mt-3 text-sm leading-7 text-red-900">
          JEPX 上昇が即時反映されるため、夏季ピーク時は固定単価より高い上振れになりやすく、資金繰り上の安全余裕が小さくなります。
        </p>
      </section>
    </>
  );
}

function IndustryImpactContent() {
  return (
    <>
      <EmergencyScenarioChartCard
        kind="industry-impact"
        title="業種別インパクト比較（シナリオ別）"
        description="電力多消費業種ほどシナリオ2・3で上振れ幅が大きくなります。"
      />
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">業種別の注視ポイント</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm"><strong>製造業・冷凍冷蔵:</strong> 電力比率が高く、ピーク需要抑制と契約最適化を同時に進める必要があります。</article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm"><strong>データセンター:</strong> PPA・長期固定調達で価格変動耐性を確保する戦略が有効です。</article>
          <article className="rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm"><strong>商業施設:</strong> テナント契約条件と空調運用の見直しで短期対応余地があります。</article>
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm"><strong>オフィス:</strong> BEMS や温度設定最適化で、低コストに削減余地を作れます。</article>
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
        name: "2026年の法人電気代は何%上がる想定ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "短期安定化で+5〜8%、夏まで長期化で+15〜25%、秋以降も継続するケースでは+20〜35%を想定します。",
        },
      },
      {
        "@type": "Question",
        name: "今すぐ実行すべき対策は何ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "契約プランの棚卸し、複数社見積もり、デマンド管理の3点を最優先で進めることが実務上の第一歩です。",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シナリオ別のアクション優先順位</h2>
        <div className="mt-4 space-y-3 text-sm">
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4"><strong>今すぐ:</strong> 契約棚卸し・見積もり取得・請求内訳確認</article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><strong>5月まで:</strong> 市場連動から固定単価の切替検討・空調運用最適化</article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4"><strong>経営判断:</strong> PPA・太陽光・蓄電池・大規模省エネ投資の評価</article>
        </div>
      </section>

      <EmergencyScenarioChartCard
        kind="action-priority"
        title="対策の優先度イメージ（削減効果）"
        description="短期施策と中長期施策を分けて、資金計画に合わせて進めることが重要です。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">FAQ</h2>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">2026年の法人電気代は何%上がりますか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">シナリオ1で+5〜8%、シナリオ2で+15〜25%、シナリオ3で+20〜35%を想定しています。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">市場連動型プランはリスクが高いですか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">高騰局面では価格が即時反映されるため、上振れリスクは固定単価より高くなります。</p>
        </details>
      </section>
    </>
  );
}

function renderContent(slug: string) {
  if (slug === "background") return <BackgroundContent />;
  if (slug === "mechanism") return <MechanismContent />;
  if (slug === "quadruple-pressure") return <QuadrupleContent />;
  if (slug === "scenario-1" || slug === "scenario-2" || slug === "scenario-3") return ScenarioContent(slug);
  if (slug === "contract-risk") return <ContractRiskContent />;
  if (slug === "industry-impact") return <IndustryImpactContent />;
  if (slug === "action-roadmap") return <ActionRoadmapContent />;
  return null;
}

export default async function EmergencyScenarioPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getEmergencyScenarioPageBySlug(slug);
  if (!page || slug === "index") {
    notFound();
  }

  const leadBySlug: Record<string, string> = {
    background: "有事局面の経緯を時系列で整理し、価格変動がなぜ長引くのかという前提を確認します。",
    mechanism: "原油高騰が請求に反映されるまでのタイムラグと、料金改定で変化した実務上の注意点を整理します。",
    "quadruple-pressure": "原油だけではない複合上昇要因を積み上げで可視化し、月次の上振れ要因を分解します。",
    "scenario-1": "停戦・航路再開が早期に進んだ場合でも残るコスト上昇の実務影響を確認します。",
    "scenario-2": "夏の需要ピークと価格高騰が重なるケースを想定し、予算インパクトを確認します。",
    "scenario-3": "高コスト局面が長期化した場合の事業継続リスクと経営対応を整理します。",
    "contract-risk": "契約タイプごとに上振れ幅が異なるため、見直し優先度を明確化します。",
    "industry-impact": "業種ごとの電力消費特性を踏まえて、影響度の違いを比較します。",
    "action-roadmap": "短期・中期・長期の3段階で、実行順序を持った対策を提示します。",
  };

  return <EmergencyScenarioLayout slug={slug} lead={leadBySlug[slug]}>{renderContent(slug)}</EmergencyScenarioLayout>;
}
