import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["benchmarks"];


const pageTitle = "削減施策の効果・難易度マトリクス｜優先順位の判断軸";
const pageDescription =
  "電気代削減施策を「効果の大きさ」と「実施の難易度」の2軸でマトリクス化。どの施策から取り組むべきか優先順位の判断軸を解説。業種別・規模別の推奨施策も紹介します。";
const pageUrl = "https://simulator.eic-jp.org/reduction-measure-difficulty-matrix";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代削減 優先順位",
    "省エネ施策 難易度",
    "電力コスト削減 マトリクス",
    "電気代削減 効果 比較",
    "省エネ 施策 選び方",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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

type Measure = {
  name: string;
  effect: number; // 1-5
  difficulty: number; // 1-5
  cost: string;
  roi: string;
  category: string;
  note: string;
};

const allMeasures: Measure[] = [
  // 高効果・低難易度（最優先）
  { name: "照明LED化（蛍光灯→LED）", effect: 4, difficulty: 2, cost: "10〜300万円", roi: "2〜5年", category: "設備", note: "照明費40〜60%削減" },
  { name: "空調フィルター清掃", effect: 2, difficulty: 1, cost: "0〜数千円", roi: "即日", category: "運用", note: "2〜5%削減、コスト不要" },
  { name: "空調設定温度の適正化", effect: 3, difficulty: 1, cost: "0円", roi: "即日", category: "運用", note: "5〜10%削減" },
  { name: "不使用時の照明・空調オフ", effect: 2, difficulty: 1, cost: "0円", roi: "即日", category: "運用", note: "3〜8%削減" },
  { name: "デマンド実績の把握・分析", effect: 3, difficulty: 1, cost: "0円", roi: "即日", category: "把握", note: "改善の土台となる最重要ステップ" },
  { name: "契約電力の見直し申請", effect: 4, difficulty: 2, cost: "ほぼ0円", roi: "翌月から", category: "契約", note: "基本料金5〜20%削減" },
  { name: "電力プランの切り替え", effect: 3, difficulty: 2, cost: "ほぼ0円", roi: "翌月から", category: "契約", note: "5〜15%削減" },
  { name: "コンプレッサーエア漏れ補修", effect: 2, difficulty: 1, cost: "点検費のみ", roi: "即日", category: "運用", note: "1〜5%削減" },
  { name: "タイマー・センサー制御導入", effect: 3, difficulty: 2, cost: "5〜30万円", roi: "1〜3年", category: "設備", note: "5〜15%削減（照明・空調）" },
  { name: "小売電気事業者の切り替え", effect: 3, difficulty: 2, cost: "手続き費のみ", roi: "翌月から", category: "契約", note: "3〜12%削減" },
  // 高効果・高難易度（計画的に）
  { name: "デマンドコントローラー導入", effect: 4, difficulty: 3, cost: "20〜100万円", roi: "1〜3年", category: "設備", note: "基本料金10〜25%削減" },
  { name: "高効率空調設備への更新", effect: 5, difficulty: 4, cost: "50〜500万円/台", roi: "3〜7年", category: "設備", note: "空調電力20〜35%削減" },
  { name: "太陽光発電・PPA導入", effect: 5, difficulty: 4, cost: "PPAは0円〜", roi: "10〜20年（自己所有）", category: "調達", note: "再エネ調達・長期コスト安定" },
  { name: "蓄電池導入（ピークシフト）", effect: 4, difficulty: 5, cost: "500万〜数千万円", roi: "5〜10年", category: "設備", note: "基本料金10〜25%削減" },
  { name: "BEMS導入", effect: 4, difficulty: 4, cost: "数百万〜数千万円", roi: "3〜8年", category: "IT", note: "5〜20%の包括的削減" },
  { name: "コジェネレーション導入", effect: 5, difficulty: 5, cost: "1,000万円〜", roi: "5〜10年", category: "設備", note: "15〜40%削減・熱利用含む" },
  { name: "特別高圧契約への切り替え", effect: 4, difficulty: 5, cost: "受電設備費", roi: "3〜8年", category: "契約", note: "単価15〜30%低減" },
  { name: "生産シフト最適化", effect: 3, difficulty: 4, cost: "コンサル費", roi: "1〜3年", category: "運用", note: "デマンド10〜25%削減" },
  { name: "インバータ化（モーター）", effect: 4, difficulty: 3, cost: "100〜500万円", roi: "2〜5年", category: "設備", note: "20〜40%削減" },
  { name: "建物断熱改修（内窓等）", effect: 3, difficulty: 4, cost: "10〜500万円", roi: "3〜8年", category: "設備", note: "空調分10〜25%削減" },
];

// 4象限の分類
const q1 = allMeasures.filter(m => m.effect >= 3 && m.difficulty <= 2); // 高効果・低難易度
const q2 = allMeasures.filter(m => m.effect >= 4 && m.difficulty >= 3); // 高効果・高難易度
const q3 = allMeasures.filter(m => m.effect <= 2 && m.difficulty <= 2); // 低効果・低難易度
const q4 = allMeasures.filter(m => m.effect <= 3 && m.difficulty >= 4); // 低効果・高難易度

const industryRecommendations = [
  {
    industry: "製造業（工場）",
    top: ["デマンドコントローラー導入", "インバータ化（モーター）", "コンプレッサーエア漏れ補修", "照明LED化（工場・水銀灯）"],
    reason: "デマンド管理と動力設備の省エネが最大のレバレッジ",
  },
  {
    industry: "オフィス",
    top: ["空調設定温度の適正化", "照明LED化", "タイマー・センサー制御", "電力プランの切り替え"],
    reason: "空調と照明で電気代の70%以上を占めるため、この2つが最優先",
  },
  {
    industry: "小売業",
    top: ["照明LED化", "冷蔵ショーケースのナイトカーテン", "空調フィルター清掃", "小売電気事業者の切り替え"],
    reason: "照明と冷蔵設備が主な消費源。多店舗展開では一括対策が効果的",
  },
  {
    industry: "飲食業",
    top: ["換気ファンのインバータ制御", "空調フィルター清掃", "照明LED化", "空調設定温度の適正化"],
    reason: "換気・空調・照明が主な消費源。厨房換気のインバータ化は費用対効果が高い",
  },
  {
    industry: "宿泊業",
    top: ["デマンドコントローラー導入", "高効率空調への更新", "タイマー・センサー制御", "照明LED化"],
    reason: "24時間稼働でピーク管理が重要。デマンドコントロールの効果が大きい",
  },
  {
    industry: "医療機関",
    top: ["照明LED化（廊下・外来等）", "空調フィルター清掃", "電力プランの切り替え", "デマンド実績の把握"],
    reason: "重要設備の制御は困難なため、制御不要な照明・一般空調の最適化が優先",
  },
];

export default function ReductionMeasureDifficultyMatrixPage() {
  return (
    <>
      <ArticleJsonLd
        headline="削減施策の効果・難易度マトリクス｜優先順位の判断軸"
        description="電気代削減施策を「効果の大きさ」と「実施の難易度」の2軸でマトリクス化。どの施策から取り組むべきか優先順位の判断軸を解説。業種別・規模別の推奨施策も紹介します。"
        url="https://simulator.eic-jp.org/reduction-measure-difficulty-matrix"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "削減施策の効果・難易度マトリクス" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/benchmarks" className="underline-offset-2 hover:underline">ベンチマーク・数値で見る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">施策の効果・難易度マトリクス</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">BENCHMARK ／ 相場・削減効果</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          削減施策の効果・難易度マトリクス
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">優先順位の判断軸と業種別推奨施策</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気代削減施策は多岐にわたりますが、「効果の大きさ」と「実施の難易度（コスト・工数）」の2軸で整理することで、優先順位が明確になります。
          限られたリソースでコスト削減の成果を最大化するために、まず「高効果×低難易度」の施策から着手し、段階的に「高効果×高難易度」の施策へ移行することが基本の考え方です。
        </p>
      </header>

      {/* マトリクスの見方 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">マトリクスの4つの象限と対応方針</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50 p-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white">最優先</span>
                <h3 className="font-semibold text-emerald-800">高効果 × 低難易度</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                まず取り組むべき施策群。コストや手間が少なく、かつ削減効果が大きい。
                契約電力の見直し・照明LED化・空調設定の適正化などが該当します。
              </p>
            </div>
            <div className="rounded-lg border-2 border-sky-300 bg-sky-50 p-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-sky-500 px-2 py-0.5 text-xs font-bold text-white">計画的に</span>
                <h3 className="font-semibold text-sky-800">高効果 × 高難易度</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                中長期計画で取り組むべき施策。設備更新や大型投資が必要だが、実施すれば大きな削減効果が得られます。
                予算・補助金・ROIを精査してから着手します。
              </p>
            </div>
            <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-bold text-white">習慣化</span>
                <h3 className="font-semibold text-amber-800">低効果 × 低難易度</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                効果は小さいが手軽にできる施策。習慣として定着させることで積み重ねで効果が出ます。
                フィルター清掃・消灯徹底・PCスリープ設定などが該当します。
              </p>
            </div>
            <div className="rounded-lg border-2 border-rose-200 bg-rose-50 p-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-rose-400 px-2 py-0.5 text-xs font-bold text-white">後回し</span>
                <h3 className="font-semibold text-rose-700">低効果 × 高難易度</h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                コストと手間に対して削減効果が小さい施策。優先度は低く、他の施策が一段落してから検討します。
                補助金・助成金がなければ後回しにすることが合理的です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* メインマトリクステーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">削減施策 効果・難易度マトリクス一覧</h2>
          <p className="mt-2 text-sm text-slate-600">効果・難易度は1（低）〜5（高）のスコアで評価</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">施策名</th>
                  <th className="whitespace-nowrap px-4 py-2 text-center font-semibold text-slate-700">効果</th>
                  <th className="whitespace-nowrap px-4 py-2 text-center font-semibold text-slate-700">難易度</th>
                  <th className="whitespace-nowrap px-4 py-2 text-center font-semibold text-slate-700">優先度</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">初期費用</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">回収期間</th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">削減ポイント</th>
                </tr>
              </thead>
              <tbody>
                {allMeasures
                  .sort((a, b) => (b.effect - b.difficulty) - (a.effect - a.difficulty))
                  .map((row, i) => {
                    const priority =
                      row.effect >= 3 && row.difficulty <= 2 ? { label: "最優先", cls: "bg-emerald-100 text-emerald-800" } :
                      row.effect >= 4 && row.difficulty >= 3 ? { label: "計画的に", cls: "bg-sky-100 text-sky-800" } :
                      row.difficulty <= 2 ? { label: "習慣化", cls: "bg-amber-100 text-amber-800" } :
                      { label: "後回し", cls: "bg-rose-100 text-rose-700" };
                    return (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-2 font-medium text-slate-800">{row.name}</td>
                        <td className="px-4 py-2 text-center">
                          <span className="font-bold text-sky-700">{row.effect}</span>
                          <span className="text-slate-400">/5</span>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span className="font-bold text-rose-600">{row.difficulty}</span>
                          <span className="text-slate-400">/5</span>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${priority.cls}`}>{priority.label}</span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.cost}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.roi}</td>
                        <td className="px-4 py-2 text-slate-600">{row.note}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 効果スコアバーグラフ */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">施策別 効果スコアの比較（5段階評価）</h2>
          <div className="mt-5 space-y-3">
            {[
              { label: "高効率空調更新", effect: 5, difficulty: 4, color: "bg-sky-600" },
              { label: "太陽光発電・PPA", effect: 5, difficulty: 4, color: "bg-sky-500" },
              { label: "コジェネレーション", effect: 5, difficulty: 5, color: "bg-sky-400" },
              { label: "照明LED化", effect: 4, difficulty: 2, color: "bg-emerald-500" },
              { label: "契約電力見直し", effect: 4, difficulty: 2, color: "bg-emerald-500" },
              { label: "デマンドコントローラー", effect: 4, difficulty: 3, color: "bg-emerald-400" },
              { label: "インバータ化（モーター）", effect: 4, difficulty: 3, color: "bg-emerald-400" },
              { label: "空調設定温度適正化", effect: 3, difficulty: 1, color: "bg-amber-500" },
              { label: "電力プラン切り替え", effect: 3, difficulty: 2, color: "bg-amber-400" },
              { label: "空調フィルター清掃", effect: 2, difficulty: 1, color: "bg-slate-400" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className={`h-3 rounded ${item.color}`} style={{ width: `${item.effect * 20}%` }} />
                </div>
                <span className="w-16 shrink-0 text-right text-sm font-bold text-slate-700">効果 {item.effect}/5</span>
                <span className="w-16 shrink-0 text-right text-sm text-slate-500">難易度 {item.difficulty}/5</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 業種別推奨施策 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別 推奨施策（優先順位トップ4）</h2>
          <p className="mt-2 text-sm text-slate-600">業種によって電気消費の構造が異なるため、優先すべき施策も変わります</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industryRecommendations.map((item, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">{item.industry}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.reason}</p>
                <ol className="mt-3 space-y-1 text-sm leading-7 text-slate-700 list-decimal list-inside">
                  {item.top.map((t, j) => <li key={j}>{t}</li>)}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 優先順位の決め方まとめ */}
      <section className="mt-6">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">優先順位の決め方：3ステップ</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">STEP 1: 現状把握</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                請求書から「基本料金」「電力量料金」「燃調費」の比率を確認。
                デマンド実績と電気代の内訳を把握することが、施策選択の出発点です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">STEP 2: 最優先施策の選定</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                「高効果×低難易度」の施策を3〜5つ選び、まず取り組みます。
                コストゼロで実施できる運用改善・契約見直しから着手するのがセオリーです。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">STEP 3: 中長期計画の策定</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                「高効果×高難易度」の施策はROI計算・補助金調査・設備更新タイミングを踏まえて計画。
                設備の老朽化更新と省エネを組み合わせることで効率的な投資ができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-7 text-slate-600">
            ※本ページの効果・難易度スコアは業界一般的な傾向をもとにした概算評価です。
            実際の効果は施設の規模・設備状況・操業パターンによって大きく異なります。正確な削減余地の評価は省エネ診断士や専門業者にご相談ください。
          </p>
        </div>
      </section>

      {/* データの根拠と出典 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">データの根拠と出典</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          本ページの削減効果データは以下を参考にしています。
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
          <li>
            <span className="font-semibold">経済産業省</span>「省エネルギー政策」関連資料（省エネ診断事業の実績データ）
          </li>
          <li>
            <span className="font-semibold">一般財団法人 省エネルギーセンター（ECCJ）</span>「省エネ事例集」
          </li>
          <li>
            <span className="font-semibold">SII（環境共創イニシアチブ）</span>「補助金交付先の省エネ実績報告」
          </li>
          <li>
            <span className="font-semibold">一般社団法人エネルギー情報センター</span> 独自調査・シミュレーション結果
          </li>
        </ul>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm leading-7 text-amber-800">
            <span className="font-semibold">重要:</span> 本ページの数値は上記データをもとにした概算・目安であり、
            特定の契約条件や時期における正確な削減額を保証するものではありません。
            実際の削減効果は設備状況・使用パターン・建物特性により大きく異なります。
            最終的な判断には、必ず専門業者の診断や見積もりをご確認ください。
          </p>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          最終更新: 2026年4月（2024〜2025年度の施策実績を反映）
        </p>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/electricity-cost-reduction-action-map", title: "電気代削減アクション一覧", description: "即効・短期・中長期で整理した削減施策マップ" },
            { href: "/led-air-conditioning-reduction-effect", title: "LED化・空調最適化の削減効果", description: "設備対策の具体的な削減数値を解説" },
            { href: "/demand-control-reduction-effect", title: "デマンドコントロールの削減効果", description: "基本料金を下げるデマンド管理の効果" },
            { href: "/contract-review-reduction-effect", title: "契約見直しによる削減額の目安", description: "プラン切替・契約電力見直しの効果を解説" },
            { href: "/how-to-start-electricity-contract-review", title: "電力契約の見直しはどこから始めるか", description: "見直しの手順と最初にすべきことを解説。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の削減余地を診断する"
          description="現在の電気代水準と上昇リスクをシミュレーターで確認し、どの施策を優先すべきかの判断材料にしてください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to-start-electricity-contract-review", label: "電力契約の見直し方を読む" },
          ]}
        />
      </div>
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
