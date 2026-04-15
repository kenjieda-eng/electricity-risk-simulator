import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { LOAD_FACTOR_FY, DEMAND_FY_TREND } from "../../data/demandData";

const pageTitle = "デマンドコントロールの削減効果｜基本料金を下げる仕組み";
const pageDescription =
  "デマンドコントロールで基本料金をどれだけ削減できるか？仕組みと効果を具体的な数値で解説。デマンドコントローラーの費用対効果・導入事例・よくある疑問もあわせて紹介します。";
const pageUrl = "https://simulator.eic-jp.org/demand-control-reduction-effect";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "デマンドコントロール 削減効果",
    "デマンドコントローラー",
    "基本料金 削減",
    "デマンド管理",
    "デマンド値 下げ方",
    "電気代 基本料金 節約",
  ],
  alternates: { canonical: pageUrl },
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

const savingsByDemand = [
  { demand: "50kW", demandSaved: "5〜8kW", monthlySaving: "6,000〜1.2万円", annualSaving: "7.2〜14.4万円", roi: "2〜4年" },
  { demand: "100kW", demandSaved: "10〜15kW", monthlySaving: "1.2〜2.2万円", annualSaving: "14.4〜26.4万円", roi: "2〜3年" },
  { demand: "200kW", demandSaved: "20〜30kW", monthlySaving: "2.4〜4.5万円", annualSaving: "28.8〜54万円", roi: "1〜3年" },
  { demand: "300kW", demandSaved: "30〜45kW", monthlySaving: "3.6〜6.75万円", annualSaving: "43.2〜81万円", roi: "1〜2年" },
  { demand: "500kW", demandSaved: "50〜75kW", monthlySaving: "6〜11.25万円", annualSaving: "72〜135万円", roi: "1〜2年" },
  { demand: "1,000kW", demandSaved: "100〜150kW", monthlySaving: "12〜22.5万円", annualSaving: "144〜270万円", roi: "1年未満〜2年" },
  { demand: "2,000kW", demandSaved: "200〜300kW", monthlySaving: "24〜45万円", annualSaving: "288〜540万円", roi: "1年未満" },
];

const controlMethods = [
  {
    method: "デマンドコントローラー（自動制御）",
    mechanism: "電力使用量をリアルタイム監視し、デマンド警報が出ると自動で優先度の低い設備（空調・照明など）をOFF",
    effect: "デマンド10〜25%削減",
    cost: "20〜100万円",
    difficulty: "中",
  },
  {
    method: "手動ピーク管理（人的対応）",
    mechanism: "デマンド警報を担当者が受信し、手動で設備をオフ。コントローラー不要だがレスポンスが遅い。",
    effect: "デマンド5〜12%削減",
    cost: "0〜5万円",
    difficulty: "低",
  },
  {
    method: "生産・業務シフト最適化",
    mechanism: "大電力設備の起動タイミングを分散させ、30分デマンドのピークを抑制する運用管理",
    effect: "デマンド8〜20%削減",
    cost: "運用コストのみ",
    difficulty: "中",
  },
  {
    method: "蓄電池によるピークシフト",
    mechanism: "深夜電力で充電した電池を昼間ピーク時に放電することでデマンドを抑制",
    effect: "デマンド15〜30%削減",
    cost: "500万〜数千万円",
    difficulty: "高",
  },
  {
    method: "自家発電設備の活用",
    mechanism: "ピーク時に自家発電を使用することで、系統からの電力購入量（デマンド）を抑制",
    effect: "デマンド20〜40%削減",
    cost: "数百万〜数千万円",
    difficulty: "高",
  },
];

export default function DemandControlReductionEffectPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/benchmarks" className="underline-offset-2 hover:underline">ベンチマーク・数値で見る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">デマンドコントロールの効果</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">BENCHMARK ／ 相場・削減効果</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          デマンドコントロールの削減効果
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">基本料金を下げる仕組みと数値で見る効果</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気代の<Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>は「<Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>（kW）」に単価を掛けたものです。そして契約電力は「過去12か月の最大デマンド値」によって決まります。
          つまり、月に1回でもデマンド値が高くなれば、その後1年間の基本料金がその高い値に固定されます。
          デマンドコントロールとは、この最大デマンド値を抑制して基本料金を下げる取り組みです。
        </p>
      </header>

      {/* デマンドの仕組み解説 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">デマンドが基本料金に与える影響の仕組み</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            デマンド（kW）とは、30分間の平均電力使用量です。1か月の中で最も高かった30分のデマンド値が「最大デマンド」となり、
            この値が翌12か月の「契約電力」として基本料金の算定基準になります。
          </p>
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-sky-800">例：契約電力300kW、基本料金単価1,200円/kWの事業者の場合</p>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <div className="flex items-center justify-between rounded bg-white p-2">
                <span>現在の基本料金（300kW × 1,200円）</span>
                <span className="font-semibold text-rose-600">月額 36万円</span>
              </div>
              <div className="flex items-center justify-between rounded bg-white p-2">
                <span>デマンド10%削減後（270kW × 1,200円）</span>
                <span className="font-semibold text-emerald-600">月額 32.4万円（▲3.6万円）</span>
              </div>
              <div className="flex items-center justify-between rounded bg-white p-2">
                <span>デマンド20%削減後（240kW × 1,200円）</span>
                <span className="font-semibold text-emerald-600">月額 28.8万円（▲7.2万円）</span>
              </div>
              <div className="flex items-center justify-between rounded bg-white p-2 font-semibold">
                <span>年間削減額（20%削減の場合）</span>
                <span className="text-emerald-700">▲86.4万円/年</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メインテーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力別 デマンドコントロールの削減効果試算</h2>
          <p className="mt-2 text-sm text-slate-600">デマンド10〜15%削減、基本料金単価1,200〜1,500円/kWとして試算</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">現在の契約電力</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">削減期待値</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月額削減額</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">年間削減額</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">投資回収目安</th>
                </tr>
              </thead>
              <tbody>
                {savingsByDemand.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-800">{row.demand}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.demandSaved}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-emerald-700">{row.monthlySaving}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.annualSaving}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※デマンドコントローラーの導入費用を20〜100万円として投資回収を試算。基本料金単価は電力会社・プランにより異なります。</p>
        </div>
      </section>

      {/* 年間削減額バーグラフ */}
      <section className="mt-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">契約電力別 年間削減額の比較（デマンド15%削減時の中間値）</h3>
          <div className="mt-5 space-y-4">
            {[
              { label: "契約電力 50kW", value: 22, note: "約11万円/年" },
              { label: "契約電力 100kW", value: 28, note: "約21万円/年" },
              { label: "契約電力 200kW", value: 42, note: "約41万円/年" },
              { label: "契約電力 300kW", value: 55, note: "約62万円/年" },
              { label: "契約電力 500kW", value: 68, note: "約104万円/年" },
              { label: "契約電力 1,000kW", value: 82, note: "約207万円/年" },
              { label: "契約電力 2,000kW", value: 96, note: "約414万円/年" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className="h-4 rounded bg-emerald-500" style={{ width: `${item.value}%` }} />
                </div>
                <span className="w-28 shrink-0 text-right text-sm font-semibold text-emerald-700">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コントロール方法の比較 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">デマンドコントロールの方法と特徴</h2>
          <div className="mt-4 space-y-4">
            {controlMethods.map((item, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">{item.method}</h3>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">{item.effect}</span>
                    <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-800">導入費：{item.cost}</span>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.mechanism}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* デマンドコントローラーの効果が出やすい条件 */}
      <section className="mt-6">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">デマンドコントロールの効果が出やすい条件</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-800">効果が大きい事業所の特徴</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・大電力設備が同時に稼働するタイミングがある（昼休み明けの一斉起動など）</li>
                <li>・空調・照明など一時的にOFFにできる設備がある</li>
                <li>・基本料金が電気代全体の30%以上を占めている</li>
                <li>・デマンド値が過去12か月で大きくばらついている</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">効果が出にくい事業所の特徴</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・設備が常時フル稼働で制御できる余地がない</li>
                <li>・デマンド値がほぼ一定で変動が少ない</li>
                <li>・基本料金の比率が低く（20%未満）電力量料金が大部分を占める</li>
                <li>・医療・食品など安全上・品質上セーフカット不可の設備が多い</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* デマンドコントローラーのよくある疑問 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある疑問</h2>
          <div className="mt-4 space-y-4">
            {[
              { q: "デマンドコントローラーを導入するとどんな設備が制御されますか？", a: "一般的には優先度の低い設備（一部の空調・照明・給湯器など）が対象になります。生産ラインや医療設備などの重要設備は制御対象から除外できます。" },
              { q: "導入したらすぐに基本料金が下がりますか？", a: "デマンドコントローラーで新たな最大デマンドを記録した月から翌12か月に適用されます。最短で翌月から効果が出ますが、前の高いデマンドが消えるのに最大12か月かかります。" },
              { q: "デマンドコントローラーの費用はどのくらいですか？", a: "機能・規模によって異なりますが、中小規模の設備（〜200kW）であれば20〜50万円、大規模・多拠点対応では100万円以上になることもあります。" },
              { q: "設備を制御されて業務に影響は出ませんか？", a: "デマンド警報時間は30分のうち数分程度の制御が多く、空調であれば体感できない場合がほとんどです。制御対象・制御時間・制御頻度は設定でカスタマイズできます。" },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-sky-300 pl-4">
                <p className="font-semibold text-slate-900">Q: {item.q}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-7 text-slate-600">
            ※本ページの削減効果は業界平均を参考にした概算値です。実際の削減効果は設備構成・操業パターン・季節変動によって異なります。正確な効果試算は専門業者にご相談ください。
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

      {/* 負荷率低下トレンドとデマンド制御の投資価値 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">負荷率低下トレンドとデマンド制御の投資価値</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            東京エリアのFY2016〜2023の実績データから、負荷率（平均需要÷ピーク需要）の推移を確認します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">年度</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">平均需要（MW）</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">ピーク（MW）</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">負荷率（東京）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {DEMAND_FY_TREND.map((row, i) => {
                  const lf = LOAD_FACTOR_FY.find((l) => l.fy === row.fy);
                  return (
                    <tr key={row.fy} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="border border-slate-200 p-3 font-medium text-slate-800">FY{row.fy}</td>
                      <td className="border border-slate-200 p-3 text-right text-slate-700">{row.avgMW.toLocaleString()}</td>
                      <td className="border border-slate-200 p-3 text-right text-slate-700">{row.peakMW.toLocaleString()}</td>
                      <td className="border border-slate-200 p-3 text-right font-semibold text-sky-700">{lf ? lf.tokyo : "—"}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-900 mb-3">東京エリア 負荷率の推移</p>
            <div className="space-y-2">
              {LOAD_FACTOR_FY.map((row) => (
                <div key={row.fy} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 text-sm text-slate-700">FY{row.fy}</span>
                  <div className="flex-1 rounded bg-slate-100">
                    <div
                      className="h-4 rounded bg-sky-500 transition-all"
                      style={{ width: `${(row.tokyo / 70) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right text-sm font-semibold text-sky-700">{row.tokyo}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-amber-800">
              <span className="font-semibold">投資価値の高まり:</span>{" "}
              負荷率の低下は「ピークが尖鋭化」していることを意味します。平均は下がっているのにピークは下がらない（むしろ上がっている）。この構造では、デマンド制御による基本料金削減の投資対効果が年々高まっています。
            </p>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※出典: 電力広域的運営推進機関（OCCTO）公表データ（FY2016〜2023）を集計。
          </p>
        </div>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/contract-demand-what-is-it", title: "デマンドとは", description: "デマンドの仕組みと基本料金への影響を詳しく解説" },
            { href: "/contract-demand-what-is-it", title: "契約電力とは", description: "契約電力の設定方法と見直しのポイント" },
            { href: "/contract-review-reduction-effect", title: "契約見直しによる削減額の目安", description: "プラン切替・契約電力見直しの効果を解説" },
            { href: "/electricity-cost-reduction-action-map", title: "電気代削減アクション一覧", description: "即効・短期・中長期で整理した施策マップ" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="デマンドコントロールの効果を自社で試算する"
          description="現在の契約電力・月間使用量を入力して、基本料金の削減余地とリスクをシミュレーションできます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contract-demand-what-is-it", label: "デマンドの仕組みを学ぶ" },
          ]}
        />
      </div>
    </main>
  );
}
