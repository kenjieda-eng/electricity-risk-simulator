import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import DemandHourlyChart from "../../components/market-data/DemandHourlyChart";
import DemandMonthlyChart from "../../components/market-data/DemandMonthlyChart";
import {
  DEMAND_FY_LABELS,
  DEMAND_FY_TOTAL,
  PEAK_DATES,
  PEAK_VALUES,
} from "../../data/marketData";

// --- 定数 ---
const pageTitle = "全国電力需要パターン｜時間帯・月・年度で見る需要構造";
const pageDescription =
  "全国の電力需要データを時間帯・月別・年度別に可視化。東京エリア32.4%シェア、ピーク需要164,910MWの背景、平日と週末の12%需要差、業種別需要パターンと法人電気コストへの影響を詳しく解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力需要パターン",
    "全国電力需要",
    "ピーク需要",
    "電力消費時間帯",
    "デマンドコントロール",
    "法人電気料金",
    "電力需要月別",
    "夏季ピーク",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-demand-pattern",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-demand-pattern",
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

// --- エリアシェアデータ ---
const areaNames = ["北海道","東北","東京","中部","北陸","関西","中国","四国","九州"];
const areaShares = [3.5, 9.4, 32.4, 15.2, 3.3, 16.4, 6.9, 3.1, 9.8];

// --- ピーク需要日の表示用フォーマット ---
function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default function ElectricityDemandPatternPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/market-data" className="underline-offset-2 hover:underline">データで見る電力市場</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">全国電力需要パターン</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">
          MARKET DATA ／ データで見る電力市場
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          全国電力需要パターン
        </h1>
        <p className="mt-1 text-base font-medium text-slate-600">時間帯・月・年度で見る需要構造</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力需要は「いつ・どこで・どれだけ」使われるかによって、電力価格と強く連動します。
          全国9エリアの需要データをFY2016〜FY2023にわたって集計し、時間帯・月別・年度別の
          パターンを多角的に可視化しました。ピーク需要の構造を理解することは、
          デマンドコントロールや電力調達戦略の最適化に直結します。
        </p>
      </header>

      {/* キーファクト */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-slate-900">需要構造を示す4つの数字</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">東京エリアの全国シェア</p>
            <p className="mt-1 text-2xl font-bold text-blue-600">32.4%</p>
            <p className="mt-1 text-xs text-slate-500">9エリア中最大・首都圏集中</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">全国最大瞬間需要</p>
            <p className="mt-1 text-2xl font-bold text-red-600">164,910 MW</p>
            <p className="mt-1 text-xs text-slate-500">2020年8月20日（猛暑日）</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">平日 vs 週末の需要差</p>
            <p className="mt-1 text-2xl font-bold text-orange-600">約12%</p>
            <p className="mt-1 text-xs text-slate-500">業務・工場需要の影響</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">最低需要月（5月）</p>
            <p className="mt-1 text-2xl font-bold text-green-600">84,831 MW</p>
            <p className="mt-1 text-xs text-slate-500">冷暖房不要・長期連休</p>
          </div>
        </div>
      </section>

      {/* グラフ1：時間帯別需要 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">時間帯別平均電力需要（年間・夏季・冬季）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          全国の時間帯別需要を年間平均・夏季（7〜9月）・冬季（12〜2月）に分けて可視化しました。
          年間平均では9〜10時台と17〜18時台に二つのピークが形成されます。
          夏季は日中から夕方にかけて高い水準が続き、冬季は朝8〜10時と夕方18〜20時に
          大きなピークが発生する「双峰型」になります。
        </p>
        <div className="mt-4">
          <DemandHourlyChart />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          ※ FY2016〜FY2023の全国9エリア合計値（30分値の時間帯集計）。単位はMW（メガワット）。
        </p>
      </section>

      {/* 時間帯別解説 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">時間帯別需要の構造的メカニズム</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">深夜〜早朝（0〜6時）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              需要が最も低い時間帯。工場の夜間生産ラインと基礎的家庭電力が主な構成要素です。
              スポット価格も低く、蓄電池への充電や水素製造など、低コスト電力を活用する
              「バレー利用」に適した時間帯です。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">朝ラッシュ（7〜10時）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              業務施設・工場の稼働開始とともに需要が急上昇します。
              特に冬季は暖房起動が重なり、7〜8時の需要増加率が高くなります。
              高圧受電施設では朝の立ち上がり時のデマンド値を管理することが重要です。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">日中フラット（10〜16時）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              年間平均では比較的フラットな時間帯。太陽光発電が最大出力を発揮するため、
              晴天日にはスポット価格が大幅に低下することがあります。
              この時間帯に電力集約型の作業を集中させる「時間シフト」が有効です。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">夕方ピーク（16〜20時）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              太陽光出力の急減と帰宅需要の重なりで価格が最高水準に達します。
              市場連動型プランの契約企業にとって最もコスト管理が重要な時間帯です。
              照明・空調の調整だけで月額コストの数%〜数十%削減が可能なケースもあります。
            </p>
          </div>
        </div>
      </section>

      {/* グラフ2：月別需要 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">月別平均電力需要（1〜12月）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          電力需要の月別分布を示しています。需要が最も高いのは8月（猛暑による冷房）と
          1〜2月（厳冬による暖房）です。逆に最も低いのは5月で、気温が穏やかでゴールデンウィークも
          重なり産業活動が一時的に低下するためです。
          赤いバーが高需要（年間平均+10%超）、緑が低需要（平均−10%未満）を示しています。
        </p>
        <div className="mt-4">
          <DemandMonthlyChart />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          ※ FY2016〜FY2023の月別平均需要（全国9エリア合計の30分値集計）。単位はMW。
        </p>
      </section>

      {/* エリア別シェア */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア別電力需要シェア</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          全国9エリアのうち、東京エリアが全体の32.4%を占め突出しています。
          次いで関西（16.4%）、中部（15.2%）となっており、三大都市圏で全体の約64%を
          消費しています。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">エリア</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">シェア（%）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">特徴</th>
              </tr>
            </thead>
            <tbody>
              {areaNames.map((name, i) => (
                <tr key={name} className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{name}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">
                    <span
                      className={
                        areaShares[i] >= 20
                          ? "font-bold text-red-600"
                          : areaShares[i] >= 10
                          ? "font-semibold text-orange-600"
                          : "text-slate-600"
                      }
                    >
                      {areaShares[i].toFixed(1)}%
                    </span>
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                    {name === "東京"
                      ? "首都圏集中・大規模データセンター多数"
                      : name === "関西"
                      ? "大阪・神戸・京都の工業・商業集積"
                      : name === "中部"
                      ? "自動車産業・製造業集積"
                      : name === "東北"
                      ? "広大な面積、製造業・農業"
                      : name === "九州"
                      ? "再エネ出力制御が頻発するエリア"
                      : name === "北海道"
                      ? "需要小・寒冷地のため暖房需要大"
                      : name === "中国"
                      ? "製鉄・化学工業が集積"
                      : name === "四国"
                      ? "最小エリア、水力発電依存"
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 年度別需要推移 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年度別需要推移（FY2016〜FY2023）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          全国総需要は省エネ推進・産業構造変化・人口減少を背景に緩やかな減少トレンドにあります。
          一方でデータセンター・EV充電など新たな需要が増加しており、今後は下げ止まりも予想されます。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">年間総需要（万MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">前年比</th>
              </tr>
            </thead>
            <tbody>
              {DEMAND_FY_LABELS.map((label, i) => {
                const prev = i > 0 ? DEMAND_FY_TOTAL[i - 1] : null;
                const diff = prev != null ? ((DEMAND_FY_TOTAL[i] - prev) / prev) * 100 : null;
                return (
                  <tr key={label} className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{label}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {(DEMAND_FY_TOTAL[i] / 10000).toFixed(1)}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {diff != null ? (
                        <span className={diff >= 0 ? "text-orange-600" : "text-green-600"}>
                          {diff >= 0 ? "+" : ""}{diff.toFixed(1)}%
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          ※ 全国9エリアの年間需要合計（30分値の積算）。FY2020はコロナ禍の影響で産業需要が減少。
        </p>
      </section>

      {/* ピーク需要日Top10 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">全国ピーク需要日 Top 10</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          過去のデータから全国需要が最大となった日のランキングです。上位10件すべてが
          7〜8月の猛暑日に集中しており、夏の冷房需要が需給逼迫の主要トリガーであることがわかります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">順位</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">日付</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">最大需要（MW）</th>
              </tr>
            </thead>
            <tbody>
              {PEAK_DATES.map((date, i) => (
                <tr key={date} className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-600">
                    {i + 1}位
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                    {formatDate(date)}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right">
                    <span className={i === 0 ? "font-bold text-red-600" : "text-slate-700"}>
                      {PEAK_VALUES[i].toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          ※ 全国合計の30分値最大コマ。需給逼迫時は翌日のJEPXスポット価格にも大きな影響が出ます。
        </p>
      </section>

      {/* 需要パターンの法人コストへの影響 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">需要パターンが法人コストに与える影響</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          電力市場では需要と供給のバランスが価格を決定します。需要が増えれば価格は上昇し、
          供給が増えれば（特に再エネ出力増加時）価格は低下します。法人の電力コストは
          以下の経路で需要パターンと連動しています。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">ピーク時間帯の価格プレミアム</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              夕方17〜18時は全時間帯平均より約50%高い価格水準です。
              市場連動型プランの法人がこの時間帯に消費を集中させると、
              月当たりの実効単価が固定型より大幅に上振れる可能性があります。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">最大需要（デマンド）制御の重要性</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              高圧・特別高圧の法人は「基本料金」がデマンド値（30分最大需要kW）で決まります。
              ピーク時間帯に需要が集中すると、デマンド契約値の超過ペナルティと基本料金上昇の
              二重コストが発生します。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">需要分散・時間シフトの効果</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              電力集約型の製造工程や空調運転を深夜〜早朝にシフトするだけで、
              市場連動プランの実質コストを5〜15%削減できるケースがあります。
              蓄電池との組み合わせでさらなる効果が期待できます。
            </p>
          </div>
        </div>
      </section>

      {/* 季節別特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">季節別需要特性と法人電力コスト</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-red-100 bg-red-50 p-5">
            <h3 className="text-lg font-semibold text-red-900">夏季（7〜9月）：猛暑リスク</h3>
            <p className="mt-2 text-sm leading-7 text-red-800">
              8月の平均需要109,998MWは全月中最高水準。冷房負荷が主要因で、
              最高気温35℃超の猛暑日には全国需要が150,000MWを超えることも。
              JEPXスポット価格も日中〜夕方に高騰しやすく、冷房系統の設備更新・
              運用最適化が直接コスト削減につながります。
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
            <h3 className="text-lg font-semibold text-blue-900">冬季（12〜2月）：需給逼迫リスク</h3>
            <p className="mt-2 text-sm leading-7 text-blue-800">
              1月の平均需要112,049MWは夏に次ぐ高水準。寒波時は暖房需要急増と
              太陽光出力低下が重なり、スポット価格スパイクが最も起きやすい季節です。
              FY2020冬のように年度平均を大きく上回る月が出現するリスクを念頭に置いた
              予算編成が必要です。
            </p>
          </div>
        </div>
      </section>

      {/* デマンドコントロール解説 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">デマンドコントロール：需要管理の実践</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          電力需要パターンのデータを活用した「デマンドコントロール」は、法人電気料金削減の
          最も実効性の高い手法の一つです。特に基本料金はデマンド値（30分最大需要kW）によって
          決まるため、ピーク需要を数%抑制するだけで年間基本料金が大幅に削減できます。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">デマンドコントロールの手順</h3>
            <ol className="mt-2 space-y-1 text-sm text-slate-700">
              <li>1. 現在の30分最大需要値（デマンド）を確認</li>
              <li>2. 時間帯別の需要グラフを作成・分析</li>
              <li>3. ピーク形成の主要機器を特定</li>
              <li>4. 起動タイミングのずらし・順次起動を実施</li>
              <li>5. デマンドコントローラーやBEMSの活用</li>
            </ol>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-semibold text-slate-900">業種別のポイント</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>・<strong>製造業：</strong>朝の生産ライン立ち上げ順序の管理</li>
              <li>・<strong>ビル・商業施設：</strong>空調の起動時間と設定温度</li>
              <li>・<strong>病院：</strong>非緊急設備の夜間シフト</li>
              <li>・<strong>データセンター：</strong>冷却システムの最適制御</li>
              <li>・<strong>食品工場：</strong>冷蔵・冷凍の蓄冷運用</li>
            </ul>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ：需要パターンの理解がコスト管理の起点</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          全国の電力需要は「夏の冷房・冬の暖房」「朝と夕方のビジネスピーク」「平日の産業活動」
          という3つの構造によって形成されています。東京エリアへの集中（32.4%シェア）、
          8月と1月の双峰型需要、夕方17〜18時のスポット価格プレミアムは、
          法人電力コスト管理において必ず把握しておくべき基礎データです。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          需要を「いつ使うか」を最適化することは、追加コストなしに電力コストを削減できる
          最も費用対効果の高いアプローチです。シミュレーターで現在の契約と需要パターンを
          照らし合わせることで、改善ポテンシャルを定量的に把握できます。
        </p>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連データ・解説"
          links={[
            {
              href: "/jepx-spot-price-dashboard",
              title: "JEPXスポット価格の全体像",
              description: "FY2010〜2026の17年間価格データ。需要と連動した価格変動のメカニズムを解説。",
            },
            {
              href: "/weather-electricity-price-link",
              title: "気温と電力価格の因果チェーン",
              description: "気温→需要→価格のU字構造。需要パターンが価格に転化するプロセスを詳述。",
            },
            {
              href: "/demand-management",
              title: "デマンド管理で基本料金を削減する",
              description: "最大需要（デマンド）の管理方法と具体的なコスト削減事例。",
            },
            {
              href: "/peak-demand-strategy",
              title: "ピーク需要対策の実践ガイド",
              description: "夏季・冬季のピーク需要を抑制するための設備・運用両面の対策を解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電力需要パターンを診断する"
          description="時間帯別・季節別の需要パターンと現在の契約プランを照らし合わせ、最適な料金メニューを診断します。デマンドコントロールによるコスト削減ポテンシャルもあわせて確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
  );
}
