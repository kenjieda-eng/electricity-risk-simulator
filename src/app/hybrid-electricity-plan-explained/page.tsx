import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

// --- 定数 ---
const pageTitle =
  "ハイブリッド型電力プランとは｜固定と市場連動を組み合わせた契約の仕組みと選び方";
const pageDescription =
  "固定と市場連動を組み合わせたハイブリッド型電力プランの仕組みを解説。一部固定・一部市場連動の料金構造、メリット・デメリット、向いている法人の特徴を整理。";
const pageUrl = "https://simulator.eic-jp.org/hybrid-electricity-plan-explained";

// 3プランタイプ比較データ
const planComparisonRows = [
  {
    item: "電力量料金",
    fixed: "固定単価",
    hybrid: "固定ベース+市場連動調整",
    market: "JEPX+マージン",
  },
  {
    item: "燃調費",
    fixed: "別途変動",
    hybrid: "一部吸収",
    market: "JEPX価格に含む",
  },
  {
    item: "上振れリスク",
    fixed: "低（燃調除く）",
    hybrid: "中",
    market: "高",
  },
  {
    item: "下振れメリット",
    fixed: "なし",
    hybrid: "一部享受",
    market: "フル享受",
  },
  {
    item: "予算の立てやすさ",
    fixed: "高い",
    hybrid: "中程度",
    market: "低い",
  },
  {
    item: "典型的な計算式",
    fixed: "18円/kWh固定",
    hybrid: "15円+0.3×(JEPX−基準)",
    market: "JEPX+8円",
  },
];

// 月額シミュレーションデータ（月5万kWh）
const monthlySimRows = [
  {
    jepxLabel: "JEPX 安値局面（8円/kWh）",
    fixed: "90万円",
    hybrid: "74万円",
    market: "80万円",
    fixedNote: "18×5万",
    hybridNote: "15×5万+0.3×(8-10)×5万",
    marketNote: "(8+8)×5万",
    jepxRef: 8,
    baseRef: 10,
  },
  {
    jepxLabel: "JEPX 通常局面（15円/kWh）",
    fixed: "90万円",
    hybrid: "92.5万円",
    market: "115万円",
    fixedNote: "18×5万",
    hybridNote: "15×5万+0.3×(15-10)×5万",
    marketNote: "(15+8)×5万",
    jepxRef: 15,
    baseRef: 10,
  },
  {
    jepxLabel: "JEPX 高騰局面（25円/kWh）",
    fixed: "90万円",
    hybrid: "117.5万円",
    market: "165万円",
    fixedNote: "18×5万",
    hybridNote: "15×5万+0.3×(25-10)×5万",
    marketNote: "(25+8)×5万",
    jepxRef: 25,
    baseRef: 10,
  },
];

// メリット・デメリット
const merits = [
  {
    type: "merit",
    label: "メリット",
    items: [
      "市場価格が基準値を下回った局面ではコスト削減の恩恵を一部受けられる",
      "完全固定型よりも連動係数の範囲でエネルギーコストの最適化余地がある",
      "高騰時は連動係数で緩衝されるため、完全市場連動型ほど単価が跳ね上がらない",
      "月次予算の試算に「固定ベース」という起点を置けるため、ゼロから変動を読むより管理しやすい",
    ],
  },
  {
    type: "demerit",
    label: "デメリット",
    items: [
      "契約条件（連動係数・基準価格・調整幅）が複雑で複数社比較がしにくい",
      "「完全固定と比べてどちらが安いか」はJEPXの実績次第になり、事前の正確な試算が難しい",
      "燃調費の取り扱いが契約によって異なるため、見落とすと実効コストが想定より高くなる",
      "電力会社によって設計が異なるため、連動部分のルールを個別に確認する必要がある",
    ],
  },
];

// 向いている法人の特徴
const suitableConditions = [
  {
    title: "市場価格の下落メリットをある程度取り込みたいが、大幅高騰は抑制したい",
    detail:
      "完全固定型では相場が下がっても恩恵がなく、完全市場連動型では高騰リスクが大きすぎると感じる法人に向く。ハイブリッド型は中間的なポジションを取れる。",
  },
  {
    title: "月次の予算管理に一定の予測基準が必要",
    detail:
      "固定ベース単価がある分、完全市場連動型よりも月次コストの下限ラインを読みやすく、予算説明の根拠を作りやすい。",
  },
  {
    title: "電力使用量が月5万kWh以上で、単価変動の影響が金額に直結する規模",
    detail:
      "使用量が大きいほど連動係数1%の差が数万〜数十万円の差になる。一定規模以上の施設で費用対効果が出やすい。",
  },
  {
    title: "エネルギー担当者が月次で請求データを確認できる体制がある",
    detail:
      "変動部分の実績を毎月チェックして、契約内容の妥当性を継続的に評価できる体制が必要。",
  },
  {
    title: "2〜3年スパンでコスト動向を見ながら契約見直しを検討できる",
    detail:
      "ハイブリッド型の効果はJEPX水準によって変わるため、短期ではなく中期的な傾向を見ながら評価するのが適切。",
  },
];

// 確認ポイントチェックリスト
const checklistItems = [
  {
    no: 1,
    point: "連動係数（市場連動割合）はいくつか",
    detail:
      "0.1〜0.5の範囲が多い。係数が大きいほど価格変動の影響を強く受ける。自社の変動許容度と照合する。",
  },
  {
    no: 2,
    point: "基準JEPX価格（ベース単価の参照値）はいくらか",
    detail:
      "「10円」「12円」などの基準値によって月ごとのコスト計算が変わる。実態に近い設定かを確認する。",
  },
  {
    no: 3,
    point: "燃料費調整額はどう扱われるか",
    detail:
      "固定ベースに含まれるのか、別途加算されるのかを確認する。含まれない場合は変動リスクが追加で生じる。",
  },
  {
    no: 4,
    point: "調整単価に上限・下限（キャップ・フロア）があるか",
    detail:
      "高騰時の上限があれば予算リスクを限定できる。下限があれば相場が下がっても削減効果が頭打ちになる。",
  },
  {
    no: 5,
    point: "契約期間と途中解約の条件はどうなっているか",
    detail:
      "1〜3年契約が多いが、途中解約時のペナルティ有無を確認しておく。市場環境変化に対応できるかを見極める。",
  },
  {
    no: 6,
    point: "複数の電力会社で同じ条件で比較できているか",
    detail:
      "連動係数・基準価格・燃調扱いが会社ごとに異なるため、見かけの単価だけで比較せず、条件を揃えて試算する。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ハイブリッド型電力プラン",
    "固定 市場連動 組み合わせ",
    "法人 電力契約 選び方",
    "JEPX 連動係数",
    "電気料金 プラン比較",
    "ハイブリッドプラン メリット デメリット",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

// --- Page Component ---
export default function HybridElectricityPlanExplainedPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">
          ホーム
        </Link>
        <span className="px-2">›</span>
        <Link
          href="/articles/plan-types"
          className="underline-offset-2 hover:underline"
        >
          契約メニューの違いを知る
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">ハイブリッド型電力プランとは</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          ハイブリッド型電力プランとは
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約には大きく「固定型」と「市場連動型」がありますが、その中間に位置するのが「ハイブリッド型」です。料金の一部を固定ベースで確保しながら、残りの部分をJEPXなどの市場価格に連動させる設計で、完全固定型よりも柔軟なコスト対応ができる一方、完全市場連動型より変動リスクを抑えられる点が特徴です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、ハイブリッド型プランの仕組み・3タイプの比較・月額シミュレーション・向いている法人の条件・選ぶときのチェックポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* H2: ハイブリッド型プランとは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ハイブリッド型プランとは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ハイブリッド型プランとは、電力量料金の計算式に「固定ベース単価」と「市場連動調整分」の両方を組み込んだ電力契約です。一般的な計算式は次のような形をとります。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">計算式のイメージ</p>
            <p className="mt-2 font-mono text-sm text-slate-800">
              電力量料金（円/kWh）＝ 固定ベース単価 ＋ 連動係数 × （実績JEPX価格 − 基準JEPX価格）
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-600">
              <li><span className="font-medium text-slate-800">固定ベース単価：</span>市場価格によらず必ず発生する下限単価（例：15円/kWh）</li>
              <li><span className="font-medium text-slate-800">連動係数：</span>市場価格変動のうち何割を料金に反映するか（例：0.3 → 30%連動）</li>
              <li><span className="font-medium text-slate-800">基準JEPX価格：</span>連動調整の起点となる参照価格（例：10円/kWh）</li>
            </ul>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            たとえば連動係数0.3・基準JEPX10円のプランで、実績JEPXが15円だった月は「15 + 0.3×(15−10) = 16.5円/kWh」となります。JEPXが8円に下がれば「15 + 0.3×(8−10) = 14.4円/kWh」に下がります。完全固定型（18円固定）と比べると、JEPX安値局面でコストを抑えられる設計です。
          </p>
        </section>

        {/* H2: 3つのプランタイプ比較テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">3つのプランタイプ比較</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            完全固定型・ハイブリッド型・完全市場連動型の主要な違いを整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold">完全固定型</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold bg-sky-50">ハイブリッド型</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold">完全市場連動型</th>
                </tr>
              </thead>
              <tbody>
                {planComparisonRows.map((row) => (
                  <tr key={row.item} className="align-top hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.item}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-slate-700">
                      {row.fixed}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center font-medium text-sky-800 bg-sky-50">
                      {row.hybrid}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-slate-700">
                      {row.market}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 燃調費の扱いは電力会社・契約内容によって異なります。契約前に必ず個別確認してください。
          </p>
        </section>

        {/* H2: 月額シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            ハイブリッド型の月額シミュレーション（JEPX 3パターン × 月5万kWh）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間使用量5万kWhの施設を例に、JEPX価格3パターンで各プランの月額コストを試算します。ハイブリッド型の条件は「固定ベース15円 + 連動係数0.3 × （JEPX − 基準10円）」、完全市場連動型は「JEPX + マージン8円」、完全固定型は「18円」で統一しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">JEPXシナリオ</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold">完全固定型</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold bg-sky-50">ハイブリッド型</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold">完全市場連動型</th>
                </tr>
              </thead>
              <tbody>
                {monthlySimRows.map((row) => (
                  <tr key={row.jepxLabel} className="align-top hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 text-slate-800 font-medium">
                      {row.jepxLabel}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      <span className="font-semibold">{row.fixed}</span>
                      <br />
                      <span className="text-xs text-slate-500">（{row.fixedNote}）</span>
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right bg-sky-50">
                      <span className="font-semibold text-sky-800">{row.hybrid}</span>
                      <br />
                      <span className="text-xs text-slate-500">（{row.hybridNote}）</span>
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      <span className="font-semibold">{row.market}</span>
                      <br />
                      <span className="text-xs text-slate-500">（{row.marketNote}）</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">シミュレーションのポイント</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-600">
              <li>JEPX安値（8円）局面ではハイブリッド型が最安値になり、完全市場連動型（80万円）より低くなる</li>
              <li>JEPX通常（15円）局面では完全固定型（90万円）よりハイブリッド型（92.5万円）がわずかに高い</li>
              <li>JEPX高騰（25円）局面では完全固定型が最安値。ハイブリッド型は完全市場連動型（165万円）より48万円少ない</li>
              <li>年間コストは市場が「安い月」と「高い月」の比率で大きく変わるため、過去のJEPX実績と照合する</li>
            </ul>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 本シミュレーションは理解のための例示です。実際の契約では基本料金・再エネ賦課金・燃調費が別途加算されます。
          </p>
        </section>

        {/* H2: メリットとデメリット */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ハイブリッド型のメリットとデメリット</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {merits.map((group) => (
              <div
                key={group.type}
                className={`rounded-lg border p-4 ${
                  group.type === "merit"
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-rose-200 bg-rose-50"
                }`}
              >
                <p
                  className={`text-sm font-semibold ${
                    group.type === "merit" ? "text-emerald-800" : "text-rose-800"
                  }`}
                >
                  {group.label}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* H2: 向いている法人の特徴 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">向いている法人の特徴（5条件）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ハイブリッド型プランが実務上機能しやすい法人の条件を整理します。
          </p>
          <div className="mt-4 space-y-3">
            {suitableConditions.map((cond, i) => (
              <div key={cond.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {cond.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{cond.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* H2: 選ぶときの確認ポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">選ぶときの確認ポイント（6項目チェックリスト）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ハイブリッド型プランを比較・選定する際に確認すべき6つのポイントです。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold w-12">No.</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">確認ポイント</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">詳細・注意点</th>
                </tr>
              </thead>
              <tbody>
                {checklistItems.map((row) => (
                  <tr key={row.no} className="align-top hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 text-center font-semibold text-sky-700">
                      {row.no}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.point}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：ハイブリッド型プランを選ぶ前に確認すること</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>連動係数・基準JEPX価格・燃調費の扱いを契約書で確認し、実効単価を自社で計算できるようにする</li>
            <li>JEPX過去実績（安値・高値・平均）を参照して、自社に有利な局面と不利な局面を把握しておく</li>
            <li>月5万kWh規模での完全固定型との差額を複数シナリオで試算し、年間コストの幅を把握する</li>
            <li>上限・下限（キャップ・フロア）の設定有無を確認し、最悪シナリオの月額コストを見積もる</li>
            <li>担当者が毎月の請求データを照合できる体制を整えてから契約を判断する</li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="hybrid-electricity-plan-explained" terms={["市場連動プラン", "固定プラン", "JEPX", "市場価格調整額", "燃料費調整額"]} />
        </div>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/market-linked-vs-fixed",
                title: "市場連動プランと固定プランの違い",
                description:
                  "料金の動き方・予算管理・リスクの出方を軸に、固定と市場連動の基本的な差を整理。",
              },
              {
                href: "/market-linked-plan",
                title: "市場連動プランとは",
                description:
                  "JEPXスポット価格に連動して単価が動く仕組みと、メリット・デメリットを解説。",
              },
              {
                href: "/fixed-price-plan",
                title: "固定プランとは",
                description:
                  "単価を固定して予算管理を安定させたい法人向けに、固定プランの特徴と注意点を整理。",
              },
              {
                href: "/budget-focused-plan-selection",
                title: "予算管理を重視する法人はどちらを選ぶべきか",
                description:
                  "年間予算の安定性を軸に固定と市場連動を比較する実務的な判断軸を解説。",
              },
              {
                href: "/compare",
                title: "料金メニュー比較診断",
                description:
                  "自社の条件を入力して、プランタイプ別のコスト見通しを確認できます。",
              },
              {
                href: "/when-to-review-electricity-contract",
                title: "法人が電力契約を見直すタイミング",
                description: "ハイブリッドプランへの切替を検討する際の見直し開始タイミング。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="プランタイプ別のコストをシミュレーターで確認する"
            description="自社の月間使用量・契約電力を入力して、ハイブリッド型・固定型・市場連動型それぞれの試算コストを比較できます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
              { href: "/how-to", label: "使い方を確認する" },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
