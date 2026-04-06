import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentCta from "../../../../components/simulator/ContentCta";
import RelatedLinks from "../../../../components/simulator/RelatedLinks";
import {
  GAS_SCENARIO_BASE_PATH,
  GAS_SCENARIO_SLUGS,
  getGasScenarioPageBySlug,
} from "../../../../lib/gasScenarioAnalysis";
import GasScenarioChartCard from "../_components/GasScenarioCharts";
import GasScenarioLayout from "../_components/GasScenarioLayout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GAS_SCENARIO_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getGasScenarioPageBySlug(slug);
  if (!page || slug === "index") {
    return {};
  }

  const url = `https://simulator.eic-jp.org${GAS_SCENARIO_BASE_PATH}/${slug}`;
  return {
    title: `${page.title}｜法人ガス代2026`,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title}｜法人ガス代2026`,
      description: page.description,
      url,
      siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
      locale: "ja_JP",
      type: "article",
      images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: page.label }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title}｜法人ガス代2026`,
      description: page.description,
      images: ["/twitter-default.png"],
    },
  };
}

function MechanismContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">都市ガス料金の構成要素</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          都市ガスの料金は「基本料金＋従量料金」で構成されます。従量料金の中に含まれる「原料費調整額」が、LNG（液化天然ガス）の国際価格変動を反映する部分です。
          原料価格が上がれば従量料金が上がり、下がれば下がる仕組みです。
        </p>
      </section>

      <GasScenarioChartCard kind="mechanism-structure" title="都市ガス料金の構成比（目安）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-slate-900">東京ガスエリア 料金構造（2026年4月検針分）</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">項目</th>
                <th className="border border-slate-200 px-3 py-2 text-right">金額（30m3使用時）</th>
                <th className="border border-slate-200 px-3 py-2">備考</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">基本料金</td><td className="border border-slate-200 px-3 py-2 text-right">1,056円</td><td className="border border-slate-200 px-3 py-2">契約区分により異なる</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">基準単位料金 × 使用量</td><td className="border border-slate-200 px-3 py-2 text-right">約3,800円</td><td className="border border-slate-200 px-3 py-2">基準単位料金 約126円/m3</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">原料費調整額</td><td className="border border-slate-200 px-3 py-2 text-right">+約760円</td><td className="border border-slate-200 px-3 py-2">LNG価格上昇分</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold text-emerald-700">補助金値引き</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">-180円</td><td className="border border-slate-200 px-3 py-2">6円/m3 × 30m3（4月分）</td></tr>
              <tr className="font-semibold"><td className="border border-slate-300 px-3 py-2">請求額（概算）</td><td className="border border-slate-300 px-3 py-2 text-right">約5,436円</td><td className="border border-slate-300 px-3 py-2">前月比 +416円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">原料費調整制度の仕組み</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          都市ガスの原料費調整は、電気の燃料費調整と類似した制度ですが、反映までのタイムラグがやや長いのが特徴です。3カ月間の平均原料価格を算定し、
          そこから約3カ月後の検針分に反映されます。
        </p>
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">原料費調整の計算式（東京ガスの考え方）</p>
          <p className="mt-1">平均原料価格 ＝ LNG平均価格 × 0.9479 ＋ LPG平均価格 × 0.0546</p>
          <p className="mt-1">基準平均原料価格（57,250円/t）との差額に基づき、1m3あたりの調整額が算定されます。上限は156,200円/tです。</p>
        </div>
        <div className="mt-4 grid gap-3 text-sm md:grid-cols-4">
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-center">LNG価格変動<br /><span className="text-xs">1〜3月の平均</span></div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-center">調整額算定<br /><span className="text-xs">4月に計算</span></div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-center">料金に反映<br /><span className="text-xs">6月検針分</span></div>
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-center">請求書に記載<br /><span className="text-xs">7月支払い</span></div>
        </div>
      </section>

      <GasScenarioChartCard
        kind="mechanism-jkm"
        title="LNG価格（JKM）と原油（WTI）の推移"
        description="3月のJKM急騰は、最短でも6月検針分から、実感としては7〜8月請求で顕在化しやすい構造です。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">規制料金 vs 自由料金</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          都市ガスにも電気と同様に「規制料金」と「自由料金」があります。法人の場合、使用量が大きいほど自由料金プランで契約しているケースが多く、上限なしのリスクに注意が必要です。
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">区分</th>
                <th className="border border-slate-200 px-3 py-2">規制料金</th>
                <th className="border border-slate-200 px-3 py-2">自由料金</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">対象</td><td className="border border-slate-200 px-3 py-2">主に小口需要家（家庭等）</td><td className="border border-slate-200 px-3 py-2">法人・大口需要家・新ガス会社</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">原料費調整の上限</td><td className="border border-slate-200 px-3 py-2">あり</td><td className="border border-slate-200 px-3 py-2">なし（多くの場合）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">価格変動リスク</td><td className="border border-slate-200 px-3 py-2">上限で頭打ち</td><td className="border border-slate-200 px-3 py-2">青天井の可能性</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">LNG急騰時</td><td className="border border-slate-200 px-3 py-2">ガス会社が超過分を負担</td><td className="border border-slate-200 px-3 py-2">全額が料金に転嫁</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm leading-7 text-rose-900">
          <p className="font-semibold">自由料金プランの法人は要注意</p>
          <p className="mt-1">
            規制料金には原料費調整の上限がありますが、自由料金プランでは上限がないケースがほとんどです。自社の契約内容を早めに確認してください。
          </p>
        </div>
      </section>
    </>
  );
}

function SubsidyContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">補助金の推移</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          政府の「電気・ガス料金支援」は2022年以降、断続的に実施されてきました。都市ガスについては1m3あたりの値引き単価が設定され、ガス会社を通じて料金から差し引かれます。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-xs text-emerald-800">2026年2〜3月検針分</p>
            <p className="mt-1 text-2xl font-bold text-emerald-900">18円/m3</p>
            <p className="text-xs text-emerald-800">値引き</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs text-amber-800">2026年4月検針分</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">6円/m3</p>
            <p className="text-xs text-amber-800">縮小済み</p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs text-rose-800">2026年5月以降</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">未定</p>
            <p className="text-xs text-rose-800">終了の可能性</p>
          </article>
        </div>
      </section>

      <GasScenarioChartCard kind="subsidy-trend" title="補助金単価の推移（都市ガス）" heightClassName="h-[260px] sm:h-[320px]" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シナリオ別：補助金終了の影響</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          補助金が終了するタイミングと、LNG高騰の原料費調整が反映されるタイミングが重なると、法人のガス代は急激に上昇します。
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">シナリオ</th>
                <th className="border border-slate-200 px-3 py-2">補助金</th>
                <th className="border border-slate-200 px-3 py-2">原料費調整</th>
                <th className="border border-slate-200 px-3 py-2 text-right">合計影響</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">S1 短期安定化</td><td className="border border-slate-200 px-3 py-2">5月以降も継続</td><td className="border border-slate-200 px-3 py-2">小幅上昇</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">+5〜10%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">S2 夏まで長期化</td><td className="border border-slate-200 px-3 py-2">5月で終了</td><td className="border border-slate-200 px-3 py-2">夏に本格反映</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-amber-700">+15〜25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">S3 秋以降も継続</td><td className="border border-slate-200 px-3 py-2">終了</td><td className="border border-slate-200 px-3 py-2">上限接近</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">+30〜50%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <GasScenarioChartCard
        kind="subsidy-gap"
        title="「補助金あり」vs「補助金なし」の料金差（月間300m3）"
        description="中規模飲食店・小規模工場相当の使用量で比較しています。"
      />

      <section className="rounded-xl border border-rose-200 bg-rose-50 p-5">
        <h2 className="text-xl font-semibold text-rose-900">S3で補助金なし＋LNG高騰が重なった場合</h2>
        <p className="mt-3 text-sm leading-7 text-rose-900">
          月間300m3使用の法人では、2025年比で月額+2〜4.5万円、年間で+24〜54万円の増加になる可能性があります。使用量が多い製造業・食品加工業ではさらに大きな影響です。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人が押さえるべきポイント</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
          <li><strong>補助金は段階的に縮小</strong> — 18円→6円と3分の1に。</li>
          <li><strong>LPガス（プロパンガス）は補助金対象外</strong> — LPガス主体拠点は恩恵を受けにくい。</li>
          <li><strong>年間使用量1,000万m3以上の大口需要家は対象外</strong> — 大規模工場は自力対策が必要。</li>
          <li><strong>補助金終了＝即値上げではないが重なりやすい</strong> — LNG高騰の反映期と重なる点に注意。</li>
        </ul>
      </section>
    </>
  );
}

function LpgContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">LPガスと都市ガスの根本的な違い</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          法人のガスコストを考える上で、まず自社が「都市ガス」と「LPガス（プロパンガス）」のどちらを使用しているかを把握することが重要です。両者は原料も供給方法も料金体系も異なります。
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">項目</th>
                <th className="border border-slate-200 px-3 py-2">都市ガス</th>
                <th className="border border-slate-200 px-3 py-2">LPガス</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">主原料</td><td className="border border-slate-200 px-3 py-2">LNG（液化天然ガス）</td><td className="border border-slate-200 px-3 py-2">LPG（液化石油ガス）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">供給方法</td><td className="border border-slate-200 px-3 py-2">導管（パイプライン）</td><td className="border border-slate-200 px-3 py-2">ボンベ配送</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">料金規制</td><td className="border border-slate-200 px-3 py-2">規制料金＋自由料金</td><td className="border border-slate-200 px-3 py-2">完全自由料金</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">政府補助金</td><td className="border border-slate-200 px-3 py-2">対象</td><td className="border border-slate-200 px-3 py-2">対象外</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">原料価格の連動</td><td className="border border-slate-200 px-3 py-2">LNGスポット価格</td><td className="border border-slate-200 px-3 py-2">CP価格（原油連動）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">発熱量</td><td className="border border-slate-200 px-3 py-2">45MJ/m3</td><td className="border border-slate-200 px-3 py-2">99MJ/m3（約2.2倍）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">単価水準</td><td className="border border-slate-200 px-3 py-2">約145円/m3</td><td className="border border-slate-200 px-3 py-2">約550円/m3</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">熱量で比較すると差は縮まる</p>
          <p className="mt-1">LPガスは都市ガスの約2.2倍の発熱量があるため、同じ熱量を得るための単価で比較すると差は見かけほど大きくありません。ただし、それでもLPガスの方が1.5〜1.8倍割高な傾向にあります。</p>
        </div>
      </section>

      <GasScenarioChartCard kind="lpg-trend" title="LPガスと都市ガス（熱量換算）の単価推移" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">CP価格と原油価格の連動</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          LPガスの国際指標であるCP（Contract Price：サウジアラムコが毎月決定）は、原油価格と連動する傾向があります。イラン情勢による原油高騰は、LPガスの仕入れコストにも直接影響します。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs text-amber-800">CP価格（2026年3月）</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">650$/t</p>
            <p className="text-xs text-amber-800">前月比 +15%</p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs text-rose-800">S3想定CP</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">750〜850$/t</p>
            <p className="text-xs text-rose-800">2022年水準に迫る</p>
          </article>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">LPガス事業所への影響試算</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">事業所タイプ</th>
                <th className="border border-slate-200 px-3 py-2 text-right">月間使用量</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S1 コスト増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2 コスト増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3 コスト増</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">小規模飲食店（ラーメン店・居酒屋等）</td><td className="border border-slate-200 px-3 py-2 text-right">30〜50m3</td><td className="border border-slate-200 px-3 py-2 text-right">+3,000〜5,000円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+8,000〜15,000円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+15,000〜30,000円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">中規模飲食店（ファミレス・給食センター）</td><td className="border border-slate-200 px-3 py-2 text-right">80〜150m3</td><td className="border border-slate-200 px-3 py-2 text-right">+8,000〜15,000円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+2〜4万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+4〜8万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">宿泊施設（旅館・民宿）</td><td className="border border-slate-200 px-3 py-2 text-right">200〜500m3</td><td className="border border-slate-200 px-3 py-2 text-right">+2〜5万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+5〜12万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+12〜25万円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">LPガスの法人向け対策</h2>
        <div className="mt-3 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">まず「相場との比較」から始める</p>
          <p className="mt-1">LPガスは自由料金制のため、現在の契約単価が適正かどうかの確認が最優先です。地域相場と比較して割高であれば、事業者切替だけで10〜30%削減できる場合があります。</p>
          <ul className="mt-2 list-disc pl-5">
            <li>複数のLPガス事業者から相見積もりを取得する</li>
            <li>地域の平均従量単価と自社の単価を比較する</li>
            <li>無償貸与契約の条件を確認する（機器条件で割高化するケース）</li>
            <li>都市ガスエリアであれば都市ガスへの切替も検討する</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function IndustryContent() {
  return (
    <>
      <GasScenarioChartCard kind="industry-impact" title="業種別のガス代増加率（S2/S3比較）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">飲食業への影響</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          飲食業はガスを厨房の調理、給湯、食洗機の加温に使用します。営業利益率が3〜8%の業界において、ガス代の15〜50%上昇は利益を大きく圧迫します。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs text-amber-800">小規模飲食（席数20）</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">+1.5〜3万円/月</p>
            <p className="text-xs text-amber-800">S2想定</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs text-amber-800">中規模飲食（席数60）</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">+3〜6万円/月</p>
            <p className="text-xs text-amber-800">S2想定</p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs text-rose-800">給食・セントラルキッチン</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">+10〜30万円/月</p>
            <p className="text-xs text-rose-800">S3想定</p>
          </article>
        </div>
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm leading-7 text-rose-900">
          <p className="font-semibold">ラーメン店・中華料理店は特に影響大</p>
          <p className="mt-1">強火で大量の湯を沸かす業態は、席数あたりのガス使用量が他業態の2〜3倍になることがあります。価格転嫁が難しい場合は利益を直接圧迫します。</p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">食品製造・加工業への影響</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          食品製造業では蒸気ボイラー、殺菌、乾燥、加熱調理など工程の多くでガスを使用します。使用量が大きい分、コスト増の絶対額も大きくなります。
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">工程</th>
                <th className="border border-slate-200 px-3 py-2">ガス使用用途</th>
                <th className="border border-slate-200 px-3 py-2 text-right">月間使用量目安</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2コスト増</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">蒸気ボイラー</td><td className="border border-slate-200 px-3 py-2">殺菌・加熱・洗浄</td><td className="border border-slate-200 px-3 py-2 text-right">2,000〜10,000m3</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+6〜30万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">乾燥工程</td><td className="border border-slate-200 px-3 py-2">食品乾燥・粉末化</td><td className="border border-slate-200 px-3 py-2 text-right">1,000〜5,000m3</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+3〜15万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">フライヤー</td><td className="border border-slate-200 px-3 py-2">揚げ物加工</td><td className="border border-slate-200 px-3 py-2 text-right">500〜2,000m3</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+1.5〜6万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">包装・シール</td><td className="border border-slate-200 px-3 py-2">ヒートシール</td><td className="border border-slate-200 px-3 py-2 text-right">100〜500m3</td><td className="border border-slate-200 px-3 py-2 text-right">+3,000〜1.5万円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">宿泊業・その他業種への影響</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs text-amber-800">ビジネスホテル（100室）</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">+5〜12万円/月</p>
            <p className="text-xs text-amber-800">S2想定</p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs text-rose-800">温泉旅館（50室）</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">+15〜40万円/月</p>
            <p className="text-xs text-rose-800">S3想定</p>
          </article>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">業種</th>
                <th className="border border-slate-200 px-3 py-2">主なガス使用用途</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2での年間増加額</th>
                <th className="border border-slate-200 px-3 py-2">リスク</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">クリーニング業</td><td className="border border-slate-200 px-3 py-2">蒸気ボイラー・乾燥機</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+30〜80万円</td><td className="border border-slate-200 px-3 py-2">高</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">病院・介護施設</td><td className="border border-slate-200 px-3 py-2">給湯・暖房・厨房・滅菌</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+50〜150万円</td><td className="border border-slate-200 px-3 py-2">高</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">温浴施設</td><td className="border border-slate-200 px-3 py-2">加温・循環ボイラー</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+40〜120万円</td><td className="border border-slate-200 px-3 py-2">高</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">パン・菓子製造</td><td className="border border-slate-200 px-3 py-2">オーブン・発酵室</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+20〜60万円</td><td className="border border-slate-200 px-3 py-2">中</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">一般オフィス</td><td className="border border-slate-200 px-3 py-2">給湯・暖房（冬季）</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜15万円</td><td className="border border-slate-200 px-3 py-2">低</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">電気代＋ガス代のダブルコスト増に注意</p>
          <p className="mt-1">
            食品製造業や宿泊業は、冷凍冷蔵の電気代とガス代の両方が同時に上昇します。
            <Link href="/special/oil-scenario-analysis" className="ml-1 underline underline-offset-2">ガソリン代シナリオ分析</Link>
            も合わせて全体最適で判断してください。
          </p>
        </div>
      </section>
    </>
  );
}

function CostContent() {
  return (
    <>
      <GasScenarioChartCard
        kind="cost-annual"
        title="使用量別 年間ガス代の増加額"
        description="2025年の年間平均単価を基準に、各シナリオでの増加額（万円/年）を比較しています。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">月間使用量</th>
                <th className="border border-slate-200 px-3 py-2">事業所の目安</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S1 年間増加</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2 年間増加</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3 年間増加</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">100m3</td><td className="border border-slate-200 px-3 py-2">小規模事務所</td><td className="border border-slate-200 px-3 py-2 text-right">+6〜12万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+18〜30万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+36〜60万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">300m3</td><td className="border border-slate-200 px-3 py-2">飲食店・クリニック</td><td className="border border-slate-200 px-3 py-2 text-right">+18〜36万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+54〜90万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+108〜180万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">1,000m3</td><td className="border border-slate-200 px-3 py-2">中規模工場・ホテル</td><td className="border border-slate-200 px-3 py-2 text-right">+60〜120万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+180〜300万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+360〜600万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">3,000m3</td><td className="border border-slate-200 px-3 py-2">大規模工場</td><td className="border border-slate-200 px-3 py-2 text-right">+180〜360万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+540〜900万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+1,080〜1,800万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">10,000m3</td><td className="border border-slate-200 px-3 py-2">大規模製造拠点</td><td className="border border-slate-200 px-3 py-2 text-right">+600〜1,200万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+1,800〜3,000万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+3,600〜6,000万円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <GasScenarioChartCard
        kind="cost-monthly"
        title="月別のコスト推移（月間300m3の場合）"
        description="補助金終了とLNG高騰の反映が重なる夏以降に、コスト増が加速する構造を示しています。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">複数拠点の法人への影響</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">飲食チェーン 10店舗</p><p className="mt-1 text-xl font-bold text-amber-900">+180〜540万円/年</p><p className="text-xs text-amber-800">S2想定・1店舗300m3</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">介護施設 5拠点</p><p className="mt-1 text-xl font-bold text-amber-900">+150〜450万円/年</p><p className="text-xs text-amber-800">S2想定・1拠点500m3</p></article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4"><p className="text-xs text-rose-800">製造業 3工場</p><p className="mt-1 text-xl font-bold text-rose-900">+1,080〜5,400万円/年</p><p className="text-xs text-rose-800">S3想定・1工場1,000〜3,000m3</p></article>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ガス代が経営に与えるインパクト</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">業態</th>
                <th className="border border-slate-200 px-3 py-2 text-right">年商目安</th>
                <th className="border border-slate-200 px-3 py-2 text-right">営業利益率</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2でのガス代増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">利益への影響</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">飲食店（1店舗）</td><td className="border border-slate-200 px-3 py-2 text-right">3,000万円</td><td className="border border-slate-200 px-3 py-2 text-right">5%</td><td className="border border-slate-200 px-3 py-2 text-right">+54万円</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">利益の36%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">クリーニング店</td><td className="border border-slate-200 px-3 py-2 text-right">2,000万円</td><td className="border border-slate-200 px-3 py-2 text-right">8%</td><td className="border border-slate-200 px-3 py-2 text-right">+40万円</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-amber-700">利益の25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">食品工場</td><td className="border border-slate-200 px-3 py-2 text-right">5億円</td><td className="border border-slate-200 px-3 py-2 text-right">4%</td><td className="border border-slate-200 px-3 py-2 text-right">+540万円</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-amber-700">利益の27%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">ビジネスホテル</td><td className="border border-slate-200 px-3 py-2 text-right">3億円</td><td className="border border-slate-200 px-3 py-2 text-right">10%</td><td className="border border-slate-200 px-3 py-2 text-right">+120万円</td><td className="border border-slate-200 px-3 py-2 text-right">利益の4%</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm leading-7 text-rose-900">
          <p className="font-semibold">飲食業は利益の3分の1以上が吹き飛ぶリスク</p>
          <p className="mt-1">営業利益率5%の飲食店にとって、S2でのガス代増加は利益の36%に相当します。S3では利益の半分以上を浸食する可能性があります。</p>
        </div>
      </section>
    </>
  );
}

function ElectrificationContent() {
  return (
    <>
      <GasScenarioChartCard
        kind="electrification-comparison"
        title="給湯方式別のランニングコスト比較"
        description="月間給湯量1,000L/日（中規模事業所）を想定した年間の給湯エネルギーコストです。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">給湯方式</th>
                <th className="border border-slate-200 px-3 py-2 text-right">2025年</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2想定</th>
                <th className="border border-slate-200 px-3 py-2 text-right">差額</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3想定</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">都市ガス給湯器（効率80%）</td><td className="border border-slate-200 px-3 py-2 text-right">72万円</td><td className="border border-slate-200 px-3 py-2 text-right">90万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+18万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+36万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">LPガス給湯器（効率80%）</td><td className="border border-slate-200 px-3 py-2 text-right">108万円</td><td className="border border-slate-200 px-3 py-2 text-right">130万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+22万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+45万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">業務用ヒートポンプ（COP3.5）</td><td className="border border-slate-200 px-3 py-2 text-right">36万円</td><td className="border border-slate-200 px-3 py-2 text-right">42万円</td><td className="border border-slate-200 px-3 py-2 text-right">+6万円</td><td className="border border-slate-200 px-3 py-2 text-right">+10万円</td></tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">ヒートポンプは電気代の影響も受けるが、ガスほどではない</p>
          <p className="mt-1">電気代が20%上がっても、ガス代が30%上がるよりコスト増は小さくなるケースが多く、給湯需要の大きい事業所ほど差が開きます。</p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電化シフトの投資回収シミュレーション</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">設備投資額</th>
                <th className="border border-slate-200 px-3 py-2">対象規模</th>
                <th className="border border-slate-200 px-3 py-2 text-right">2025年価格</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2想定</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3想定</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">150万円</td><td className="border border-slate-200 px-3 py-2">小規模飲食・事務所</td><td className="border border-slate-200 px-3 py-2 text-right">5.0年</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">3.1年</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">2.3年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">400万円</td><td className="border border-slate-200 px-3 py-2">中規模事業所</td><td className="border border-slate-200 px-3 py-2 text-right">8.3年</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">5.6年</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">4.0年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">1,000万円</td><td className="border border-slate-200 px-3 py-2">ホテル・大規模施設</td><td className="border border-slate-200 px-3 py-2 text-right">13.9年</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">10.4年</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">7.7年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">3,000万円</td><td className="border border-slate-200 px-3 py-2">工場ボイラー置換</td><td className="border border-slate-200 px-3 py-2 text-right">15.0年以上</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">12.5年</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">9.6年</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">※ 各種補助金（省エネ補助金等）を含まない単純計算。補助金活用で回収年数はさらに短縮。</p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">用途別：電化の適用しやすさ</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">用途</th>
                <th className="border border-slate-200 px-3 py-2">電化の選択肢</th>
                <th className="border border-slate-200 px-3 py-2">適用性</th>
                <th className="border border-slate-200 px-3 py-2">注意点</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">給湯</td><td className="border border-slate-200 px-3 py-2">業務用ヒートポンプ給湯機</td><td className="border border-slate-200 px-3 py-2">適しやすい</td><td className="border border-slate-200 px-3 py-2">設置スペースの確保が必要</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">暖房</td><td className="border border-slate-200 px-3 py-2">エアコン（ヒートポンプ）</td><td className="border border-slate-200 px-3 py-2">適しやすい</td><td className="border border-slate-200 px-3 py-2">寒冷地では効率低下</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">厨房（加熱調理）</td><td className="border border-slate-200 px-3 py-2">IHクッキングヒーター</td><td className="border border-slate-200 px-3 py-2">業態による</td><td className="border border-slate-200 px-3 py-2">中華・鍋振り料理には不向き</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">蒸気ボイラー</td><td className="border border-slate-200 px-3 py-2">電気ボイラー・ヒートポンプ</td><td className="border border-slate-200 px-3 py-2">規模による</td><td className="border border-slate-200 px-3 py-2">大容量は電力契約見直しが必要</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">高温乾燥（200℃以上）</td><td className="border border-slate-200 px-3 py-2">現状では困難</td><td className="border border-slate-200 px-3 py-2">代替困難</td><td className="border border-slate-200 px-3 py-2">産業用高温プロセスはガス依存</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電化＋太陽光の組み合わせ</h2>
        <div className="mt-3 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">ヒートポンプ＋太陽光発電でエネルギーコスト最小化</p>
          <p className="mt-1">事業所に太陽光発電を導入し、その電力でヒートポンプを稼働させれば、ガス代も電気代も同時に削減できます。S3の長期化時は投資回収5年以内が見えるケースもあります。</p>
        </div>
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm leading-7 text-rose-900">
          <p className="font-semibold">シナリオ3では電化シフトの経済合理性が急速に高まる</p>
          <p className="mt-1">ガス代が30〜50%上昇する局面では、特に小規模事業所で2〜3年程度の回収も視野に入り、電化が現実的なコスト削減策になります。</p>
        </div>
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
        name: "法人のガス代を今すぐ削減する方法は？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ガス会社の契約プラン見直し、高効率給湯器への更新、厨房でのガス使用の最適化（予熱時間の短縮、蓋の活用等）が即効性のある対策です。",
        },
      },
      {
        "@type": "Question",
        name: "都市ガスからLPガスに切り替えるべきですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "一般的に都市ガスの方がLPガスより安価です。逆に、LPガスから都市ガスへの切替えが可能な地域であれば検討の価値があります。",
        },
      },
      {
        "@type": "Question",
        name: "ヒートポンプ給湯への切替えは得ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ガス代が30%以上上昇するシナリオ3では、ヒートポンプへの切替え投資は3〜5年で回収可能です。給湯需要が大きい事業所ほど効果が大きくなります。",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シナリオ別 対策の優先度</h2>

        <article className="mt-4 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-4">
          <p className="text-xs font-semibold text-emerald-800">全シナリオ共通（今すぐ・コストゼロ）</p>
          <p className="mt-2 text-sm leading-7 text-emerald-900">どのシナリオでもガス料金は2025年より高い水準に。コストゼロで始められる対策から着手します。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-white p-3 text-sm"><strong>契約プランの見直し</strong><p>法人向け割引プランの適用漏れを確認。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3 text-sm"><strong>使用量の可視化</strong><p>月別・用途別のガス使用量を把握。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3 text-sm"><strong>厨房の運用改善</strong><p>予熱時間短縮、蓋活用、火力調整で5〜10%削減。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3 text-sm"><strong>給湯温度の最適化</strong><p>60℃→55℃で約8%削減の目安。</p></div>
          </div>
        </article>

        <article className="mt-4 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800">S2以上に備える（夏までに着手）</p>
          <p className="mt-2 text-sm leading-7 text-amber-900">ガス代+15〜25%が続く場合、運用改善だけでは吸収しきれません。設備投資・契約見直しを並行します。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-amber-200 bg-white p-3 text-sm"><strong>高効率ガス機器へ更新</strong><p>潜熱回収型給湯器、高効率ボイラーで15〜20%改善。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 text-sm"><strong>ガス会社の切替え</strong><p>相見積もりで3〜8%削減の可能性。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 text-sm"><strong>LPガス事業者見直し</strong><p>自由料金差により20〜30%削減事例も。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3 text-sm"><strong>断熱・保温の強化</strong><p>配管保温・断熱改修で暖房ガス使用を削減。</p></div>
          </div>
        </article>

        <article className="mt-4 rounded-xl border-l-4 border-rose-500 bg-rose-50 p-4">
          <p className="text-xs font-semibold text-rose-800">S3に備える（経営判断）</p>
          <p className="mt-2 text-sm leading-7 text-rose-900">ガス代+30〜50%が常態化する場合、エネルギー源そのものの転換が必要です。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-rose-200 bg-white p-3 text-sm"><strong>ヒートポンプ給湯導入</strong><p>ガス給湯比で50〜70%削減を狙う。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3 text-sm"><strong>IH化（厨房）</strong><p>火力工程はガス継続のハイブリッド方式も。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3 text-sm"><strong>太陽光＋蓄電池</strong><p>ヒートポンプ電力を自家発で賄う。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3 text-sm"><strong>コージェネ検討</strong><p>大規模施設で排熱利用を最大化。</p></div>
          </div>
        </article>
      </section>

      <GasScenarioChartCard kind="action-effect" title="対策の効果とコスト（回収月数 × 削減率）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">対策の効果とコスト一覧</h2>
        <div className="mt-3 overflow-x-auto">
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
              <tr><td className="border border-slate-200 px-3 py-2">契約プラン見直し</td><td className="border border-slate-200 px-3 py-2 text-right">0円</td><td className="border border-slate-200 px-3 py-2 text-right">3〜8%</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">即日</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">運用改善（厨房・給湯）</td><td className="border border-slate-200 px-3 py-2 text-right">0円</td><td className="border border-slate-200 px-3 py-2 text-right">5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">即日</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">LPガス事業者切替え</td><td className="border border-slate-200 px-3 py-2 text-right">0円</td><td className="border border-slate-200 px-3 py-2 text-right">10〜30%</td><td className="border border-slate-200 px-3 py-2 text-right">1〜2カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">高効率給湯器更新</td><td className="border border-slate-200 px-3 py-2 text-right">50〜200万円</td><td className="border border-slate-200 px-3 py-2 text-right">15〜20%</td><td className="border border-slate-200 px-3 py-2 text-right">2〜4年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">ヒートポンプ給湯導入</td><td className="border border-slate-200 px-3 py-2 text-right">150〜1,000万円</td><td className="border border-slate-200 px-3 py-2 text-right">50〜70%</td><td className="border border-slate-200 px-3 py-2 text-right">3〜8年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">太陽光＋ヒートポンプ</td><td className="border border-slate-200 px-3 py-2 text-right">300〜2,000万円</td><td className="border border-slate-200 px-3 py-2 text-right">60〜80%</td><td className="border border-slate-200 px-3 py-2 text-right">5〜10年</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ガソリン代・電気代と合わせたトータル戦略</h2>
        <div className="mt-3 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          <p className="font-semibold">ガス代＋電気代＋燃料費のトータルで最適化を</p>
          <p className="mt-1">
            ガスから電気への転換を進めると、ガス代は削減されますが電気代は増加します。物流コストの上昇は別チャネルで経営を圧迫します。
            エネルギーコストを一元管理し、トータルで最適なエネルギーミックスを設計してください。
          </p>
          <p className="mt-1">
            <Link href="/special/oil-scenario-analysis" className="underline underline-offset-2">→ 法人ガソリン代2026シナリオ分析はこちら</Link>
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">よくある質問</h2>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">法人のガス代を今すぐ削減する方法は？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">契約見直し、高効率給湯器への更新、厨房運用最適化が即効性の高い対策です。LPガスは事業者切替のみで10〜30%削減できるケースがあります。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">ヒートポンプ給湯への切替えは得ですか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">ガス代が30%以上上昇するS3では、小規模で2〜3年、中規模で4〜6年回収の目安です。高温蒸気工程には不向きな場合があります。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">ガス料金の補助金はいつまで続きますか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2026年4月検針分では6円/m3が適用されていますが、5月以降は未定です。詳細は
            <Link href={`${GAS_SCENARIO_BASE_PATH}/subsidy-outlook`} className="ml-1 underline underline-offset-2">補助金の行方</Link>
            をご確認ください。
          </p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">LPガスから都市ガスに切り替えるべきですか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">都市ガス導管が近くに来ていれば検討価値があります。工事費（数十万〜数百万円）と使用量を比較して判断してください。</p>
        </details>
      </section>
    </>
  );
}

function renderContent(slug: string) {
  if (slug === "price-mechanism") return <MechanismContent />;
  if (slug === "subsidy-outlook") return <SubsidyContent />;
  if (slug === "lpg-trend") return <LpgContent />;
  if (slug === "industry-impact") return <IndustryContent />;
  if (slug === "cost-simulation") return <CostContent />;
  if (slug === "electrification-comparison") return <ElectrificationContent />;
  if (slug === "action-roadmap") return <ActionContent />;
  return null;
}

const relatedLinksBySlug: Record<string, { heading: string; links: { href: string; title: string; description: string }[] }> = {
  "price-mechanism": {
    heading: "関連ページ",
    links: [
      { href: `${GAS_SCENARIO_BASE_PATH}/subsidy-outlook`, title: "補助金の行方", description: "補助金縮小・終了時の影響を確認する。" },
      { href: `${GAS_SCENARIO_BASE_PATH}/cost-simulation`, title: "コスト試算", description: "使用量別の年間コスト増を確認する。" },
    ],
  },
  "subsidy-outlook": {
    heading: "関連ページ",
    links: [
      { href: `${GAS_SCENARIO_BASE_PATH}/lpg-trend`, title: "LPガス価格動向", description: "補助金対象外のLPガス影響を確認する。" },
      { href: `${GAS_SCENARIO_BASE_PATH}/industry-impact`, title: "業種別影響", description: "業種別の利益影響を確認する。" },
    ],
  },
  "lpg-trend": {
    heading: "関連ページ",
    links: [
      { href: `${GAS_SCENARIO_BASE_PATH}/subsidy-outlook`, title: "補助金の行方", description: "都市ガス補助金縮小と比較する。" },
      { href: `${GAS_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "LPガス拠点での実務対策を確認する。" },
    ],
  },
  "industry-impact": {
    heading: "関連ページ",
    links: [
      { href: `${GAS_SCENARIO_BASE_PATH}/cost-simulation`, title: "コスト試算", description: "使用量別の増加額を数値で確認する。" },
      { href: `${GAS_SCENARIO_BASE_PATH}/electrification-comparison`, title: "電化比較", description: "電化シフトの採算性を確認する。" },
    ],
  },
  "cost-simulation": {
    heading: "関連ページ",
    links: [
      { href: `${GAS_SCENARIO_BASE_PATH}/industry-impact`, title: "業種別影響", description: "業態ごとの打撃の違いを確認する。" },
      { href: `${GAS_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "削減施策の優先順位を確認する。" },
    ],
  },
  "electrification-comparison": {
    heading: "関連ページ",
    links: [
      { href: `${GAS_SCENARIO_BASE_PATH}/cost-simulation`, title: "コスト試算", description: "現状コストを再確認する。" },
      { href: `${GAS_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "実行順序を整理する。" },
    ],
  },
  "action-roadmap": {
    heading: "関連ページ",
    links: [
      { href: `${GAS_SCENARIO_BASE_PATH}/subsidy-outlook`, title: "補助金の行方", description: "補助金依存リスクを再確認する。" },
      { href: `${GAS_SCENARIO_BASE_PATH}/electrification-comparison`, title: "電化比較", description: "中長期投資の採算を確認する。" },
    ],
  },
};

const leadBySlug: Record<string, string> = {
  "price-mechanism": "原料費調整制度とタイムラグを理解し、夏以降の請求変動を先読みするための基礎を整理します。",
  "subsidy-outlook": "補助金縮小・終了とLNG高騰反映の重なりによる二重上昇リスクを確認します。",
  "lpg-trend": "補助金対象外であるLPガス拠点の価格リスクと、都市ガスとの違いを具体的に整理します。",
  "industry-impact": "業種ごとのガス依存度を踏まえ、利益インパクトの大きい業態から優先的に確認します。",
  "cost-simulation": "使用量と拠点数で増加額を可視化し、予算見直しに必要な金額感を把握します。",
  "electrification-comparison": "ガス・ヒートポンプ・オール電化の比較から、設備投資判断に必要な採算ラインを確認します。",
  "action-roadmap": "今すぐ・夏まで・中長期の3段階で、実行順序のある対策を整理します。",
};

export default async function GasScenarioPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getGasScenarioPageBySlug(slug);
  if (!page || slug === "index") {
    notFound();
  }

  const related = relatedLinksBySlug[slug];

  return (
    <GasScenarioLayout slug={slug} lead={leadBySlug[slug]}>
      {renderContent(slug)}

      <RelatedLinks heading={related.heading} links={related.links} />

      <ContentCta
        heading="次にすること"
        description="総論トップとガソリン・電気代の特集も併せて確認すると、エネルギーコスト全体での意思決定に繋げやすくなります。"
        links={[
          { href: GAS_SCENARIO_BASE_PATH, label: "総論トップへ戻る" },
          { href: "/special/oil-scenario-analysis", label: "ガソリン代シナリオ分析を見る" },
          { href: "/special/emergency-scenario-analysis", label: "電気代シナリオ分析を見る" },
        ]}
      />
    </GasScenarioLayout>
  );
}
