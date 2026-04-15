import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "原子力発電所の稼働状況と電気料金の関係｜エリア別の料金差への影響を解説";
const pageDescription =
  "原発稼働エリアと非稼働エリアの法人電気料金差を分析。再稼働が進んだ場合の料金見通し、法人の立地判断への示唆を整理。";
const pageUrl = "https://simulator.eic-jp.org/nuclear-power-and-electricity-price";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "原発 電気料金 影響",
    "原子力 再稼働 電気料金",
    "エリア別 電気料金 差",
    "核 電力 法人 コスト",
    "原子力 稼働 料金見通し",
    "電力 立地 コスト比較",
    "原発 再稼働 コスト削減",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const areaData = [
  {
    area: "北海道エリア",
    company: "北海道電力",
    activePlants: "泊1〜3号（停止中・審査中）",
    activeCount: "0基（審査中）",
    outputMW: "—（停止中）",
    reShare: "約24%",
    highVoltageUnit: "約28〜32円/kWh",
    note: "泊原発の停止が高コスト要因。火力・再エネ依存",
  },
  {
    area: "東北エリア",
    company: "東北電力",
    activePlants: "女川2号（2024年再稼働）",
    activeCount: "1基",
    outputMW: "約825MW",
    reShare: "約25%",
    highVoltageUnit: "約24〜28円/kWh",
    note: "女川再稼働が料金下押しに寄与。東通は審査中",
  },
  {
    area: "東京エリア",
    company: "東京電力EP",
    activePlants: "柏崎刈羽（停止中・一部規制命令解除）",
    activeCount: "0基（稼働準備中）",
    outputMW: "—",
    reShare: "約25%",
    highVoltageUnit: "約23〜27円/kWh",
    note: "柏崎刈羽の再稼働が最大の料金低減ファクター",
  },
  {
    area: "中部エリア",
    company: "中部電力",
    activePlants: "浜岡（全基停止中）",
    activeCount: "0基",
    outputMW: "—",
    reShare: "約16%",
    highVoltageUnit: "約24〜27円/kWh",
    note: "LNG火力依存が高く、燃料費変動の影響が大きい",
  },
  {
    area: "北陸エリア",
    company: "北陸電力",
    activePlants: "志賀1・2号（停止中・審査中）",
    activeCount: "0基",
    outputMW: "—",
    reShare: "約30%",
    highVoltageUnit: "約21〜25円/kWh",
    note: "水力比率が高く比較的安定。志賀再稼働は審査中",
  },
  {
    area: "関西エリア",
    company: "関西電力",
    activePlants: "高浜1〜4号、大飯3・4号、美浜3号",
    activeCount: "7基",
    outputMW: "約6,300MW（日本最大級）",
    reShare: "約20%（原子力が大部分）",
    highVoltageUnit: "約19〜23円/kWh",
    note: "原発比率が高く、他エリアより単価が低め。再稼働の恩恵が最大",
  },
  {
    area: "中国エリア",
    company: "中国電力",
    activePlants: "島根2号（2024年再稼働）",
    activeCount: "1基",
    outputMW: "約820MW",
    reShare: "約25%",
    highVoltageUnit: "約23〜27円/kWh",
    note: "島根3号の審査中。再稼働進展で料金低下余地あり",
  },
  {
    area: "四国エリア",
    company: "四国電力",
    activePlants: "伊方3号",
    activeCount: "1基",
    outputMW: "約890MW",
    reShare: "約35%（再エネも高水準）",
    highVoltageUnit: "約22〜26円/kWh",
    note: "伊方稼働と高い再エネ比率で中程度の単価水準",
  },
  {
    area: "九州エリア",
    company: "九州電力",
    activePlants: "玄海3・4号、川内1・2号",
    activeCount: "4基",
    outputMW: "約3,700MW",
    reShare: "約45%（再エネ比率も国内最高水準）",
    highVoltageUnit: "約19〜22円/kWh",
    note: "原発再稼働と太陽光の拡大で国内最安値圏。出力制御が課題",
  },
  {
    area: "沖縄エリア",
    company: "沖縄電力",
    activePlants: "原発なし（系統分離）",
    activeCount: "0基",
    outputMW: "—",
    reShare: "約15%",
    highVoltageUnit: "約29〜34円/kWh",
    note: "完全離島。LNG・石油火力依存で全国最高水準の単価",
  },
];

const areaComparison = [
  {
    category: "原発稼働エリア（関西・九州・四国）",
    avgUnit: "約19〜23円/kWh",
    monthlyAmount5man: "約95〜115万円",
    annualAmount5man: "約1,140〜1,380万円",
    characteristics: "原発の低燃料費が基準単価を押し下げ。燃調の影響も相対的に小さい",
  },
  {
    category: "原発停止エリア（北海道・東京・沖縄）",
    avgUnit: "約25〜34円/kWh",
    monthlyAmount5man: "約125〜170万円",
    annualAmount5man: "約1,500〜2,040万円",
    characteristics: "火力依存による燃料費コストが直接反映。LNG価格の変動をフルに受ける",
  },
  {
    category: "エリア間の差（最大）",
    avgUnit: "最大+10〜12円/kWh",
    monthlyAmount5man: "最大+30〜55万円/月",
    annualAmount5man: "最大+360〜660万円/年",
    characteristics: "月5万kWh規模でも年間数百万円の差が生じる。立地選択に影響",
  },
];

const restartScenarios = [
  {
    scenario: "現状維持（追加再稼働なし）",
    additionalUnits: "0基追加",
    totalActiveMW: "現状の約12,500MW水準を維持",
    priceEffect: "現在の料金水準が継続。燃料費変動に対する耐性は低いまま",
    nationalImpact:
      "全国平均で▲0円。エリア格差は維持",
    note: "再エネ拡大で部分的に補完されるが、火力依存は続く",
  },
  {
    scenario: "追加5基再稼働",
    additionalUnits: "5基追加（柏崎刈羽6・7号、泊1号、島根3号、東通1号）",
    totalActiveMW: "約17,000〜18,000MW規模",
    priceEffect: "火力の焚き量が減少し、燃調費の上昇圧力を緩和",
    nationalImpact:
      "全国平均で▲0.5〜1.5円/kWh程度の下押し効果（試算）",
    note: "東京エリアの柏崎刈羽再稼働が特にインパクト大",
  },
  {
    scenario: "追加10基再稼働",
    additionalUnits: "10基追加（上記＋浜岡、大間等の審査通過を想定）",
    totalActiveMW: "約22,000〜24,000MW規模（2010年頃の水準に近づく）",
    priceEffect: "JEPXのベース価格が大幅低下。燃調費の構造的な低減",
    nationalImpact:
      "全国平均で▲2〜4円/kWh規模の下押し効果（試算）。エリア格差も縮小",
    note:
      "安全審査の期間・コストにより実現は2030年以降の可能性が高い",
  },
];

const keyPoints = [
  {
    title: "立地・拠点選択での活用",
    detail:
      "大電力消費型の工場・データセンターを新設・移転する場合、エリア単価の差は年間コストに直結します。関西・九州エリアは電力コスト面で有利ですが、労働力・物流・用地コストとのバランスも重要です。",
  },
  {
    title: "原発再稼働ニュースを料金見通しに活用する",
    detail:
      "規制委員会の審査通過ニュースは、そのエリアの将来単価低下シグナルです。翌年度以降の契約更新・単価前提を見直すタイミングの判断材料として活用できます。",
  },
  {
    title: "燃料費調整額のリスク感応度がエリアで異なる",
    detail:
      "原発比率の高いエリアは火力の焚き量が少ないため、LNG価格上昇時の燃調費上昇幅が相対的に小さくなります。為替・燃料リスクのエクスポージャーがエリアによって異なる点を理解しておくことが重要です。",
  },
  {
    title: "再稼働後も「即座に料金が下がる」わけではない",
    detail:
      "原発が再稼働しても、電力会社の料金に反映されるまでには時間がかかります。規制料金の改定には申請・認可が必要で、自由化料金も市場動向・契約更新のタイミングで調整されます。",
  },
];

export default function NuclearPowerAndElectricityPricePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link
              href="/"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              ホーム
            </Link>
          </li>
          <li className="select-none">/</li>
          <li>
            <Link
              href="/articles/price-trends"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金の推移と高止まり
            </Link>
          </li>
          <li className="select-none">/</li>
          <li className="text-slate-700">原子力稼働と電気料金の関係</li>
        </ol>
      </nav>

      {/* ページヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          原子力発電所の稼働状況と電気料金の関係
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2011年の福島第一原発事故以降、日本の多くの原発は停止し、電力会社は火力発電への依存を高めました。
          これがLNG・石炭の輸入増大を通じて電気料金上昇の一因となっています。
          一方で2023年以降、一部の原発が再稼働し、特に関西・九州・四国エリアでは他エリアより低い単価水準が続いています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、10エリアの原発稼働状況と高圧単価の比較、稼働エリアと非稼働エリアの料金差、
          再稼働シナリオ別の全国的な料金影響、そして法人が知っておくべきポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 原発稼働状況テーブル（10エリア） */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            原発稼働状況と高圧単価（10エリア比較）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年時点の各エリアの原発稼働状況と、高圧契約の総合単価目安を比較します。
            稼働基数の多いエリアほど単価が低い傾向が確認できます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    エリア
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    稼働中の原発
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-center">
                    稼働基数
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    設備容量
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    再エネ比率
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    高圧単価目安
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    補足
                  </th>
                </tr>
              </thead>
              <tbody>
                {areaData.map((row) => (
                  <tr
                    key={row.area}
                    className={`border-t border-slate-100 ${
                      row.activeCount !== "0基" &&
                      row.activeCount !== "0基（審査中）" &&
                      row.activeCount !== "0基（稼働準備中）"
                        ? "bg-green-50"
                        : ""
                    }`}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium">
                      {row.area}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.activePlants}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 text-center font-semibold ${
                        row.activeCount.startsWith("0")
                          ? "text-slate-500"
                          : "text-green-700"
                      }`}
                    >
                      {row.activeCount}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.outputMW}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.reShare}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">
                      {row.highVoltageUnit}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※
            稼働状況は2025年初頭時点の概況。単価は全国・会社平均の目安であり、契約条件・デマンド・使用量により異なります。
            緑色の行は2025年時点で原発が稼働中のエリアです。
          </p>
        </section>

        {/* 稼働エリアvs非稼働エリアの料金差 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            稼働エリアと非稼働エリアの料金差
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間5万kWh（中規模工場・商業施設の目安）でシミュレーションした場合の、
            エリア間コスト差のインパクトを示します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    区分
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    高圧総合単価（目安）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    月5万kWh・月額
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    年額（12ヶ月）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                {areaComparison.map((row) => (
                  <tr key={row.category} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-medium">
                      {row.category}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">
                      {row.avgUnit}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.monthlyAmount5man}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.annualAmount5man}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.characteristics}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※
            エリア間の差は年間で最大数百万円規模に達する場合があります。複数拠点を持つ企業では、エリアを横断した料金管理が重要です。
          </p>
        </section>

        {/* 再稼働シナリオ別の料金影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            再稼働シナリオ別の料金影響（0基・5基・10基追加）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現状から追加で何基再稼働するかによって、全国の電気料金に異なるインパクトが生じます。
            各シナリオの前提と料金効果の方向性を整理します。
          </p>
          <div className="mt-4 space-y-4">
            {restartScenarios.map((s, idx) => (
              <div
                key={s.scenario}
                className={`rounded-xl border p-4 ${
                  idx === 0
                    ? "border-slate-200 bg-slate-50"
                    : idx === 1
                      ? "border-amber-200 bg-amber-50"
                      : "border-green-200 bg-green-50"
                }`}
              >
                <h3 className="font-semibold text-slate-900">{s.scenario}</h3>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      追加対象（例）
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {s.additionalUnits}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      総稼働規模
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {s.totalActiveMW}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      料金への効果
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {s.priceEffect}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      全国平均への影響
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {s.nationalImpact}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※
            試算は複数の仮定に基づく定性的な整理です。実際の料金影響は電力市場の動向・補助政策・契約形態によって異なります。
          </p>
        </section>

        {/* 法人が知っておくべきポイント */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人が知っておくべきポイント
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {keyPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white bg-white p-4 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="nuclear-power-and-electricity-price" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "JEPX", "電力量料金"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/electricity-price-outlook-2026",
              title: "2026年度以降の法人電気料金見通し",
              description:
                "燃料・再稼働・再エネ・容量拠出金を含む8要因で整理した見通しと予算前提。",
            },
            {
              href: "/renewable-energy-expansion-price-impact",
              title: "再エネ拡大と電気料金の両面影響",
              description:
                "原発と並ぶ低炭素電源である再エネが料金に与える上昇・下降の両方向の影響。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人電気料金の2019〜2025年推移",
              description: "原発停止・再稼働を含む過去の変動要因を時系列で確認。",
            },
            {
              href: "/carbon-pricing-electricity-impact",
              title: "カーボンプライシングと電気料金",
              description:
                "GX-ETSと炭素税の導入が発電コストを通じて法人料金に波及する経路を解説。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "原発再稼働を含む複数の要因が法人料金に与える影響を費目別に整理します。",
            },
          ]}
        />

        <ContentCta
          heading="エリア別・契約別の料金をシミュレーションで比較する"
          description="現在の契約条件・拠点エリアをもとに、今後のリスクシナリオ別の月額・年額コストを試算できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
