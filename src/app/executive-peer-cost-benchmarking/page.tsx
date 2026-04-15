import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "同業他社との電力コスト比較の進め方｜経営層向け";
const pageDescription =
  "同業他社・業界平均との電力コスト比較を行うための情報源と分析の進め方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/executive-peer-cost-benchmarking";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力コスト 比較", "同業他社 電気代", "電力コスト ベンチマーク", "業界平均 電気代"],
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

const industryBenchmarks = [
  { industry: "製造業（素材・化学・鉄鋼）", salesRatio: "8〜15%", perFloor: "高", perOutput: "要確認", note: "電気炉・コンプレッサー等の大電力設備が主因" },
  { industry: "食品・飲料製造", salesRatio: "3〜6%", perFloor: "中〜高", perOutput: "要確認", note: "冷蔵・冷凍・調理工程の電力が大きい" },
  { industry: "データセンター・IT", salesRatio: "10〜25%", perFloor: "極めて高", perOutput: "PUEで評価", note: "冷却設備・サーバー電力が主コスト" },
  { industry: "小売業（スーパー・コンビニ）", salesRatio: "1.5〜4%", perFloor: "中", perOutput: "—", note: "照明・冷蔵ケース・空調が主" },
  { industry: "外食・フードサービス", salesRatio: "2〜5%", perFloor: "中〜高", perOutput: "—", note: "厨房・空調・照明" },
  { industry: "ホテル・宿泊施設", salesRatio: "3〜7%", perFloor: "中〜高", perOutput: "—", note: "空調・給湯・照明・厨房" },
  { industry: "病院・医療施設", salesRatio: "2〜5%", perFloor: "高", perOutput: "—", note: "24時間稼働・医療設備の電力大" },
  { industry: "物流・倉庫業", salesRatio: "1〜3%", perFloor: "低〜中", perOutput: "—", note: "冷凍倉庫はこれより高め" },
  { industry: "オフィス・サービス業", salesRatio: "0.5〜1.5%", perFloor: "低〜中", perOutput: "—", note: "空調・照明・OA機器中心" },
  { industry: "小売業（アパレル・専門店）", salesRatio: "1〜2.5%", perFloor: "低〜中", perOutput: "—", note: "照明が主。店舗面積で変動大" },
];

const infoPources = [
  {
    source: "経済産業省・資源エネルギー庁「エネルギー消費統計」",
    type: "公的統計",
    detail: "業種別エネルギー消費量の集計データ。電力消費量の業種平均を把握できる。",
    url: "https://www.enecho.meti.go.jp/",
  },
  {
    source: "有価証券報告書（上場企業）",
    type: "企業開示",
    detail: "「ユーティリティ費」「光熱費」として計上された金額を確認できる。売上高との比率計算に使える。",
    url: "https://www.edinet-fsa.go.jp/",
  },
  {
    source: "業界団体・工業会の調査レポート",
    type: "業界団体",
    detail: "製造業・食品・流通等の業界団体が電力消費・コスト調査を公表している場合がある。各業界団体のWebサイトを確認。",
    url: "",
  },
  {
    source: "省エネ法定期報告書（特定事業者）",
    type: "法定開示",
    detail: "一定規模以上の特定事業者はエネルギー使用量を国に報告。公表データとして活用できる場合がある。",
    url: "",
  },
];

const analysisSteps = [
  { step: "Step 1", title: "比較指標の選定", body: "売上高対比・床面積あたり・生産量あたりなど、自社の業種に合った指標を1〜2個選ぶ。" },
  { step: "Step 2", title: "自社数値の算出", body: "直近3年分の年間電力費と選んだ指標の分母（売上高・床面積等）を整理し、自社の比率を計算する。" },
  { step: "Step 3", title: "ベンチマーク数値の収集", body: "上記の情報源を活用し、業界平均・競合他社の比率データを収集する。" },
  { step: "Step 4", title: "差異分析", body: "自社と業界平均の差を確認。高い場合は「設備年次」「立地」「稼働率」の影響を除いた真の差異を分析する。" },
  { step: "Step 5", title: "目標設定と社内報告", body: "3〜5年での改善目標を設定し、経営会議・取締役会に報告する資料にまとめる。" },
];

export default function ExecutivePeerCostBenchmarkingPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/for-executives" className="underline-offset-2 hover:underline">経営層・CFO向け</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">同業他社との電力コスト比較の進め方</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          同業他社との電力コスト比較の進め方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「自社の電力コストは高いのか、妥当なのか」——この問いに答えるためには、業界平均や競合他社との比較が不可欠です。
          しかし、電力費のベンチマーク情報は分散しており、どこを見ればよいか分かりにくいのが現状です。
          本ページでは、同業比較に使える公開情報源と、比較指標の選び方、分析の5ステップを整理します。
        </p>
      </header>

      {/* セクション1: なぜ同業比較が必要か */}
      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. なぜ同業比較が必要か</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            電力コストの絶対値だけでは「高い・安い」の判断はできません。
            業種・規模・設備の違いを加味した上で、同業他社と比べて自社の水準を測ることで初めて、
            「改善余地があるかどうか」「経営資源を投じる価値があるか」を判断できます。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "意思決定の根拠になる",
                body: "「業界平均より20%高い」という数字は、省エネ投資・契約見直しへの経営判断を後押しする具体的な根拠になります。",
              },
              {
                title: "目標設定に使える",
                body: "業界平均を目指す・トップクォータイルに入るといった数値目標が設定でき、社内のモチベーション向上にもつながります。",
              },
              {
                title: "投資家・取引先への説明になる",
                body: "ESG開示・カーボンニュートラルへの取り組みの文脈で、業界平均対比の電力効率を示すことは対外的な説明力を高めます。",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション2: 公開情報源 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. 比較に使える公開情報源</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            以下の情報源を組み合わせることで、業界平均・競合他社の電力費水準を把握できます。
          </p>
          <div className="mt-5 space-y-3">
            {infoPources.map((src, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-start gap-2">
                  <span className="shrink-0 rounded bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-700">{src.type}</span>
                  <h3 className="text-sm font-semibold text-slate-900">{src.source}</h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{src.detail}</p>
                {src.url && (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    {src.url}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション3: 比較指標の選び方 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. 比較指標の選び方</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            電力コストの比較は「何で割るか（分母の選択）」で結果が大きく変わります。
            業種の特性に合った指標を選ぶことが重要です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">指標名</th>
                  <th className="p-3 text-left font-semibold">算出方法</th>
                  <th className="p-3 text-left font-semibold">適した業種</th>
                  <th className="p-3 text-left font-semibold">注意点</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["売上高対比（%）", "年間電力費 ÷ 年間売上高 × 100", "製造業・小売業・サービス業（汎用）", "売上が大きく変動する年は比較が歪む"],
                  ["床面積あたり（円/m²）", "年間電力費 ÷ 延床面積", "オフィス・商業施設・ホテル", "テナントビル等は管理範囲の定義に注意"],
                  ["生産量あたり（円/t 等）", "年間電力費 ÷ 生産量", "製造業・食品業", "生産品種が多様な場合は換算が難しい"],
                  ["従業員一人あたり（円/人）", "年間電力費 ÷ 従業員数", "オフィス業種・IT業種", "部門別の人員配置に偏りがある場合は不向き"],
                  ["kWh単価（円/kWh）", "年間電力費 ÷ 年間kWh使用量", "全業種（契約の優劣評価）", "需要規模・地域・契約種別で単価は異なる"],
                ].map(([name, calc, suitable, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{name}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-600 font-mono">{calc}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-700">{suitable}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション4: 業種別電力コスト比率の目安表 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">4. 業種別 電力コスト比率の目安</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base mb-5">
            以下は売上高対比の電力費比率の業界目安です。自社の数値と照合し、業界水準に対する相対的な位置づけを把握してください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">業種</th>
                  <th className="p-3 text-center font-semibold">売上高比率の目安</th>
                  <th className="p-3 text-center font-semibold">床面積あたり傾向</th>
                  <th className="p-3 text-left font-semibold">主な電力用途・備考</th>
                </tr>
              </thead>
              <tbody>
                {industryBenchmarks.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 text-slate-800">{row.industry}</td>
                    <td className="p-3 border-b border-slate-100 text-center font-semibold text-slate-900">{row.salesRatio}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-slate-600">{row.perFloor}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※ 上記は概算の目安であり、立地・設備年次・稼働率・電力契約形態により実際の数値は大きく異なります。参考値としてご活用ください。</p>
        </div>
      </section>

      {/* セクション5: 比較分析の5ステップ */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">5. 比較分析の進め方（5ステップ）</h2>
        <div className="space-y-3">
          {analysisSteps.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 flex gap-4">
              <div className="shrink-0 rounded-full bg-sky-100 text-sky-700 font-bold text-sm w-10 h-10 flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* セクション6: 結果の活用と注意点 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">6. ベンチマーク結果の活用と注意点</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">社内での活用方法</h3>
            <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-700">
              <li className="flex gap-2"><span className="text-sky-600 font-bold shrink-0">▸</span>経営目標として「3年以内に業界平均以下」を設定する</li>
              <li className="flex gap-2"><span className="text-sky-600 font-bold shrink-0">▸</span>省エネ投資・契約見直しの優先順位付けの根拠にする</li>
              <li className="flex gap-2"><span className="text-sky-600 font-bold shrink-0">▸</span>取締役会・経営会議の報告資料に数値を組み込む</li>
              <li className="flex gap-2"><span className="text-sky-600 font-bold shrink-0">▸</span>ESG報告書・統合報告書にエネルギー効率の改善を記載する</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">単純比較できない要素（注意点）</h3>
            <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-700">
              <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">!</span>立地・地域（電力会社の料金体系が異なる）</li>
              <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">!</span>設備年次（古い設備ほど一般的に電力消費量が多い）</li>
              <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">!</span>稼働率・操業形態（24時間稼働か昼間のみかで差が大きい）</li>
              <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">!</span>契約種別（高圧・特別高圧では単価水準が異なる）</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/executive-ebitda-impact",
              title: "電気代がEBITDAに与える影響の測り方",
              description: "電力費上昇がEBITDA・営業利益率に与える財務インパクトを試算するフレームワーク。",
            },
            {
              href: "/electricity-cost-benchmark-by-industry",
              title: "業種別電力コストベンチマーク",
              description: "業種ごとの電力費水準と平均単価の目安を解説します。",
            },
            {
              href: "/executive-electricity-kpi-dashboard",
              title: "電力コストのKPI管理と経営ダッシュボードの設計",
              description: "電力費を経営KPIとして定常監視するための指標とダッシュボードの設計ガイド。",
            },
            {
              href: "/executive-board-report-template",
              title: "取締役会向け電力リスク報告テンプレートの作り方",
              description: "取締役会・経営会議で使える電力コスト・リスク報告のテンプレート構成と記載項目。",
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="自社の電力コスト水準を診断する"
          description="シミュレーターで自社の電気代リスクを試算し、業界平均との比較の出発点としてご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "関連解説記事を読む" },
          ]}
        />
      </div>
    </main>
  );
}
