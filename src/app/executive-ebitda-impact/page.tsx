import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気代がEBITDAに与える影響の測り方｜CFO向けインパクト分析";
const pageDescription =
  "電気代の上昇がEBITDA・営業利益率に与える定量的インパクトを、売上高・原価率・電気代比率から試算する方法を解説。シナリオ別感応度分析と業種別リスク水準の一覧表で、経営層が財務影響を即座に把握できる実践ガイド。";
const pageUrl = "https://simulator.eic-jp.org/executive-ebitda-impact";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "EBITDA 電気代",
    "電気代 営業利益 影響",
    "電力コスト CFO",
    "電気代 感応度分析",
    "電力費 財務インパクト",
    "法人電気料金 経営",
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

const ebitdaScenarios = [
  { scenario: "現状維持（基準シナリオ）", change: "±0%", impact: "±0万円", note: "2024年度水準継続" },
  { scenario: "軽微上昇（+10%）", change: "+10%", impact: "▲250万円", note: "燃調費小幅上昇" },
  { scenario: "中程度上昇（+20%）", change: "+20%", impact: "▲500万円", note: "燃料高・市場高止まり" },
  { scenario: "大幅上昇（+35%）", change: "+35%", impact: "▲875万円", note: "有事・容量拠出金急騰" },
  { scenario: "急騰（+50%）", change: "+50%", impact: "▲1,250万円", note: "エネルギー危機並み" },
];

const industryRisk = [
  { industry: "製造業（素材・化学）", electricityRatio: "8〜15%", sensitivity: "極めて高い", note: "電気炉・コンプレッサー常時稼働" },
  { industry: "食品・飲料製造", electricityRatio: "3〜6%", sensitivity: "高い", note: "冷蔵・冷凍・調理工程" },
  { industry: "データセンター・IT", electricityRatio: "10〜25%", sensitivity: "極めて高い", note: "冷却・サーバー電力が主コスト" },
  { industry: "小売・スーパー", electricityRatio: "2〜4%", sensitivity: "中程度", note: "照明・冷蔵ケース" },
  { industry: "ホテル・宿泊", electricityRatio: "3〜7%", sensitivity: "高い", note: "空調・給湯・厨房" },
  { industry: "オフィス（サービス業）", electricityRatio: "0.5〜1.5%", sensitivity: "低い", note: "空調・照明中心" },
  { industry: "病院・医療施設", electricityRatio: "2〜5%", sensitivity: "高い（代替不可）", note: "24時間稼働・設備電力大" },
  { industry: "物流・倉庫", electricityRatio: "1〜3%", sensitivity: "中程度", note: "照明・荷役・冷凍倉庫は高め" },
];

const actionItems = [
  {
    title: "1. 電気代の売上高比率を把握する",
    body: "まず自社の年間電力費を売上高で割り、比率を把握する。0.5%未満なら影響軽微、2%超なら重点管理対象。業種標準値と比較して感応度を評価する。",
  },
  {
    title: "2. EBITDA感応度分析を財務部門に依頼する",
    body: "本ページのフレームワークを活用し、電気代+10%・+20%・+35%シナリオでEBITDAへの影響を試算させる。予算計画・中計への織り込みを検討する。",
  },
  {
    title: "3. 固定費化・リスクヘッジ戦略を検討する",
    body: "市場連動型契約は変動リスクが大きい。固定単価契約への切り替えによるコストの安定化、または長期契約によるヘッジが有効かを精査する。",
  },
  {
    title: "4. 省エネ投資のROIを計算する",
    body: "電気代上昇局面では省エネ投資の回収期間が短縮される。LED・空調更新・蓄電池・太陽光のROI/NPV計算を担当部門に指示する。",
  },
  {
    title: "5. 電力契約の次回見直し時期を確認する",
    body: "現在の契約期間終了タイミングと市場見通しを照合し、見直しに向けた社内承認プロセスのスケジュールを確認する。",
  },
];

export default function ExecutiveEbitdaImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">

      {/* ヘッダー */}
      <header className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-white">
        <p className="text-xs font-semibold tracking-wide text-amber-300">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          電気代がEBITDAに与える影響の測り方
        </h1>
        <p className="mt-1 text-lg font-medium text-amber-200">CFO向けインパクト分析</p>
        <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
          電気代の上昇は、売上ではなく利益を直撃するコストショックです。
          2023〜2025年にかけて法人向け電気料金は実質30〜50%上昇し、製造業・食品・ホテル・データセンターを中心に
          EBITDAへの重大な影響が顕在化しました。本ページでは、CFOが財務計画・中計・取締役会報告で活用できる
          「電力コスト感応度分析のフレームワーク」を、定量テーブルと業種別リスク水準とともに解説します。
        </p>
      </header>

      {/* エグゼクティブサマリー */}
      <section className="mt-6 border-l-4 border-amber-400 bg-amber-50 p-5 rounded-r-xl">
        <h2 className="text-base font-bold text-amber-900">エグゼクティブサマリー</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-900">
          <li>・ 電気代は「売上高比率」で管理すると感応度が明確になる。製造業では5〜15%に達する場合もある。</li>
          <li>・ 電気代が20%上昇すると、年間2.5億円の電力費を持つ企業では<strong>EBITDA▲5,000万円</strong>相当のインパクトが生じる。</li>
          <li>・ 市場連動型契約の企業は、卸電力市場の急騰時に単価が連動するため、固定費型に比べて変動リスクが高い。</li>
          <li>・ 電力コストの感応度分析は、中期経営計画・予算策定・投資意思決定に組み込むべき財務リスク管理の基本項目である。</li>
          <li>・ 省エネ投資・契約切り替えを組み合わせた「電力コスト最適化戦略」は、ROIが測定可能な経営施策として有効。</li>
        </ul>
      </section>

      {/* セクション1: EBITDAへの影響フレームワーク */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. EBITDAインパクトの基本フレームワーク</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            電気代は製造原価・販管費のいずれかに計上される固定的変動費です。
            売上が増えなければ電気代上昇分はそのままEBITDAを圧迫します。
            以下のフレームワークで、自社の感応度を計算してください。
          </p>
          <div className="mt-5 rounded-xl border border-slate-300 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500 mb-3">EBITDA感応度計算式</p>
            <div className="space-y-2 text-sm font-mono text-slate-800">
              <p>【Step 1】 年間電力費 ÷ 年間売上高 ＝ 電力費売上高比率（%）</p>
              <p>【Step 2】 年間電力費 × 上昇率 ＝ 電気代増加額</p>
              <p>【Step 3】 電気代増加額 ÷ 売上高 ＝ EBITDA率への影響（pt）</p>
              <p className="text-slate-500 text-xs mt-2">※ 税引前利益・D&A変動がない前提での粗い試算値</p>
            </div>
          </div>

          {/* 試算テーブル（モデル企業：売上100億円） */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700 mb-2">
              ▼ EBITDA影響試算テーブル（モデル：年間売上100億円・電力費2.5億円）
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left font-semibold">項目</th>
                    <th className="p-3 text-right font-semibold">金額・比率</th>
                    <th className="p-3 text-left font-semibold">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["年間売上高", "100億円", "モデル企業"],
                    ["原価率", "70%", "売上原価70億円"],
                    ["年間電力費（現状）", "2.5億円", "売上高対比 2.5%"],
                    ["EBITDA（現状）", "15億円", "EBITDA率 15%と仮定"],
                    ["電気代 +10% 上昇時", "+2,500万円", "EBITDA率 ▲0.25pt"],
                    ["電気代 +20% 上昇時", "+5,000万円", "EBITDA率 ▲0.50pt"],
                    ["電気代 +35% 上昇時", "+8,750万円", "EBITDA率 ▲0.875pt"],
                    ["電気代 +50% 上昇時", "+1.25億円", "EBITDA率 ▲1.25pt"],
                  ].map(([item, value, note], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 border-b border-slate-100 text-slate-700">{item}</td>
                      <td className="p-3 border-b border-slate-100 text-right font-semibold text-slate-900">{value}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-500 text-xs">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* セクション2: シナリオ別EBITDA感応度 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. 価格シナリオ別EBITDA影響分析</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            2020年以降の電力価格変動幅を踏まえると、年間+10〜+50%のシナリオは実現性のある範囲です。
            以下は年間電力費2.5億円の企業での試算です。自社の電力費規模に合わせて倍率を掛け合わせてください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">シナリオ</th>
                  <th className="p-3 text-right font-semibold">電気代上昇率</th>
                  <th className="p-3 text-right font-semibold">EBITDA影響（▲）</th>
                  <th className="p-3 text-left font-semibold">想定される状況</th>
                </tr>
              </thead>
              <tbody>
                {ebitdaScenarios.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 text-slate-700">{row.scenario}</td>
                    <td className="p-3 border-b border-slate-100 text-right font-semibold text-slate-900">{row.change}</td>
                    <td className="p-3 border-b border-slate-100 text-right font-bold text-red-700">{row.impact}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※ 年間電力費2.5億円モデルでの試算。電力費規模が異なる場合は比例換算してください。</p>
        </div>
      </section>

      {/* セクション3: 業種別リスク感応度 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. 業種別 電力費比率とリスク感応度</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            電力費の売上高比率は業種によって大きく異なります。
            自社の比率が業種平均より高い場合、電気代上昇に対する感応度は相対的に高くなります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">業種</th>
                  <th className="p-3 text-right font-semibold">電力費/売上高比率</th>
                  <th className="p-3 text-center font-semibold">感応度</th>
                  <th className="p-3 text-left font-semibold">主な電力用途</th>
                </tr>
              </thead>
              <tbody>
                {industryRisk.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 text-slate-700">{row.industry}</td>
                    <td className="p-3 border-b border-slate-100 text-right font-semibold text-slate-900">{row.electricityRatio}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                      row.sensitivity.includes("極めて高い") ? "text-red-700" :
                      row.sensitivity.includes("高い") ? "text-orange-600" : "text-slate-600"
                    }`}>{row.sensitivity}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション4: 経営指標との関係 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">4. 経営指標との連関</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">営業利益率への直撃</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              電気代増加はほぼ全額が営業費用の増加となり、売上・仕入・人件費が変わらなければ
              そのままEBITDA・営業利益の圧縮につながります。価格転嫁できない業種では
              特に営業利益率の低下が深刻です。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">ROEへの波及</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              営業利益率の低下は税引後利益の減少を通じてROEを悪化させます。
              デュポン分解で見ると、電力コスト上昇は純利益率の低下として顕れ、
              資産回転率・財務レバレッジが同一でもROEが悪化します。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">設備投資判断への影響</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              省エネ設備・太陽光・蓄電池のNPV計算では、電気代単価の前提が変わると
              回収期間が大幅に短縮されます。高い電気代を前提にしたNPVで投資判断を
              再評価することで、追加投資の正当性が増す場合があります。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">キャッシュフローへの影響</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              電気代の支払いは毎月発生する現金支出です。EBITDAへの会計的影響だけでなく、
              運転資本・フリーキャッシュフローへの影響も把握し、資金繰り計画に組み込む
              必要があります。
            </p>
          </div>
        </div>
      </section>

      {/* セクション5: 経営判断の論点 */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">5. 取締役会・経営会議の論点</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q1.</span>現在の電力契約形態（固定・市場連動）は財務リスクの観点から適切か？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q2.</span>電気代上昇分を製品・サービス価格に転嫁できる体制・交渉力があるか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q3.</span>電力コスト削減のための設備投資（省エネ・太陽光）のROIは試算済みか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q4.</span>今後3〜5年の電気代見通しは中期経営計画に織り込まれているか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q5.</span>複数拠点を持つ場合、拠点ごとの電力費と感応度を把握しているか？</li>
        </ul>
      </section>

      {/* セクション6: アクションアイテム */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">6. 経営層のアクションアイテム</h2>
        <div className="space-y-3">
          {actionItems.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* セクション7: 次ステップ */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">7. 担当者への指示事項（次ステップ）</h2>
        <ol className="mt-4 space-y-2 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>直近3年間の年間電力費・月次推移データを経理部門から収集させる</li>
          <li>本ページのフレームワークを使い、+10%・+20%・+35%シナリオでEBITDA影響を試算させる</li>
          <li>現在の電力契約書を確認し、契約種別・単価体系・更新時期を整理させる</li>
          <li>拠点別の電力費データを集約し、重点管理拠点を特定させる</li>
          <li>電力見直し・省エネ投資の概算ROIを1ページにまとめた経営資料を作成させる</li>
        </ol>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/executive-business-continuity-risk",
              title: "電気代高騰と事業継続リスク（BCPと財務リスクの観点から）",
              description: "電力供給不安・コスト急騰を事業継続計画と財務リスク管理の視点で整理します。",
            },
            {
              href: "/executive-cfo-electricity-basics",
              title: "CFOのための電力市場基礎",
              description: "燃調費・市場連動・容量拠出金の仕組みを1ページで把握できます。",
            },
            {
              href: "/executive-board-reporting-items",
              title: "取締役会で報告すべき電力リスク5項目",
              description: "経営会議の議題として設定すべき電力リスクの論点を整理します。",
            },
            {
              href: "/explaining-to-executives",
              title: "経営層向けに電力契約見直しを説明するポイント",
              description: "現場担当者が経営層に提案するときの説明フレームワーク。",
            },
            {
              href: "/articles/risk-scenarios",
              title: "リスクシナリオカテゴリ",
              description: "電力コストに関するリスクシナリオ解説の一覧。",
            },
          ]}
        />
      </div>

      {/* ContentCta */}
      <div className="mt-6">
        <ContentCta
          heading="電気代の財務インパクトを今すぐ試算する"
          description="シミュレーターを使えば、自社の電気代上昇リスクを数値で確認できます。経営相談はお問い合わせください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "経営相談はこちら" },
          ]}
        />
      </div>
    </main>
  );
}
