import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "託送料金（送配電使用料）とは｜法人の電気料金に含まれる見えにくいコスト構造";
const pageDescription =
  "法人の電気料金に含まれる託送料金の仕組みを解説。電気料金全体の約3〜4割を占める送配電使用料の構成、エリア別の単価差、レベニューキャップ制度、今後の値上げ見通しを整理。";

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "託送料金とは",
    "送配電使用料 法人",
    "電気料金 託送 割合",
    "レベニューキャップ 電気料金",
    "託送料金 値上げ",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/wheeling-charge-explained",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/wheeling-charge-explained",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

// --- データ ---
const billBreakdownData = [
  {
    item: "基本料金",
    ratio: "25〜35%",
    controllable: "契約見直しで一部可能",
    controllableBool: true,
  },
  {
    item: "電力量料金（発電コスト分）",
    ratio: "20〜30%",
    controllable: "契約メニュー選択で影響",
    controllableBool: true,
  },
  {
    item: "託送料金（送配電使用料）",
    ratio: "30〜40%",
    controllable: "コントロール不可",
    controllableBool: false,
    highlight: true,
  },
  {
    item: "燃料費調整額",
    ratio: "5〜15%",
    controllable: "コントロール不可",
    controllableBool: false,
  },
  {
    item: "再エネ賦課金",
    ratio: "5〜10%",
    controllable: "コントロール不可",
    controllableBool: false,
  },
  {
    item: "容量拠出金",
    ratio: "1〜3%",
    controllable: "コントロール不可",
    controllableBool: false,
  },
];

const wheelingBreakdownData = [
  {
    item: "送電サービス料金",
    content: "高圧送電線の維持・運用コスト",
    ratio: "約15〜20%",
  },
  {
    item: "配電サービス料金",
    content: "配電線・変圧器の維持・運用コスト",
    ratio: "約50〜60%",
  },
  {
    item: "電力量調整供給料金",
    content: "需給調整・周波数維持のコスト",
    ratio: "約10〜15%",
  },
  {
    item: "損失率相当分",
    content: "送配電中の電力ロス",
    ratio: "約5〜10%",
  },
  {
    item: "政策的経費",
    content: "再エネ賦課金・省エネ対策費等",
    ratio: "約10〜15%",
  },
];

const areaData = [
  {
    area: "北海道",
    rate: "約4.5〜5.0円",
    feature: "広域・低密度で高め",
  },
  {
    area: "東北",
    rate: "約4.0〜4.5円",
    feature: "広域だが再エネ送電投資増",
  },
  {
    area: "東京",
    rate: "約3.5〜4.0円",
    feature: "需要密度が高く相対的に低め",
  },
  {
    area: "中部",
    rate: "約3.5〜4.0円",
    feature: "工業地帯で安定需要",
  },
  {
    area: "北陸",
    rate: "約3.5〜4.0円",
    feature: "水力比率高・規模小",
  },
  {
    area: "関西",
    rate: "約3.0〜3.5円",
    feature: "原発稼働効果で低め",
  },
  {
    area: "中国",
    rate: "約3.5〜4.0円",
    feature: "中規模",
  },
  {
    area: "四国",
    rate: "約4.0〜4.5円",
    feature: "小規模・離島コスト",
  },
  {
    area: "九州",
    rate: "約3.5〜4.0円",
    feature: "再エネ大量導入の調整コスト",
  },
  {
    area: "沖縄",
    rate: "約5.5〜6.5円",
    feature: "孤立系統で全国最高",
  },
];

const revenueCapComparison = [
  {
    item: "料金設定",
    oldSystem: "コスト積み上げ＋適正利潤",
    newSystem: "収入上限を5年ごと設定",
  },
  {
    item: "効率化インセンティブ",
    oldSystem: "弱い",
    newSystem: "コスト削減分を利益に計上可能",
  },
  {
    item: "値上げの仕方",
    oldSystem: "改定申請→認可",
    newSystem: "上限内で毎年調整可能",
  },
  {
    item: "投資反映",
    oldSystem: "都度認可",
    newSystem: "事業計画に基づき上限に反映",
  },
];

const checklistItems = [
  {
    no: 1,
    item: "自社の電気料金明細に「託送料金」または「送配電使用料」が明記されているか確認する",
    note: "多くの小売電力会社は内訳を開示していないが、低圧・高圧で開示義務が異なる。",
  },
  {
    no: 2,
    item: "自社拠点のエリア（一般送配電事業者）を把握する",
    note: "エリアによって単価差が最大2円/kWh以上あり、拠点ごとのコスト構造が異なる。",
  },
  {
    no: 3,
    item: "契約している小売電気事業者の電力量料金に含まれる託送料金水準を問い合わせる",
    note: "小売事業者は自社で安くできないが、透明性の高い事業者を選ぶ判断材料になる。",
  },
  {
    no: 4,
    item: "レベニューキャップ制度の第1規制期間（2023〜2027年度）の見直し動向を追う",
    note: "2028年度以降の第2規制期間に向けた議論で単価の方向性が示される見込み。",
  },
  {
    no: 5,
    item: "省エネ・需要シフトで電力量そのものを削減し、託送料金の絶対額を抑える",
    note: "単価はコントロールできないが、使用量削減は即効性のある対策。ピーク需要の平準化も基本料金に効く。",
  },
];

// --- Page Component ---
export default function WheelingChargeExplainedPage() {
  return (
    <>
      <ArticleJsonLd
        headline="託送料金（送配電使用料）とは｜法人の電気料金に含まれる見えにくいコスト構造"
        description="法人の電気料金に含まれる託送料金の仕組みを解説。電気料金全体の約3〜4割を占める送配電使用料の構成、エリア別の単価差、レベニューキャップ制度、今後の値上げ見通しを整理。"
        url="https://simulator.eic-jp.org/wheeling-charge-explained"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "託送料金（送配電使用料）とは" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずナビ">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li className="select-none">/</li>
          <li>
            <Link
              href="/articles/price-increase"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              料金が上がる理由を知る
            </Link>
          </li>
          <li className="select-none">/</li>
          <li className="text-slate-700">託送料金とは</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          託送料金（送配電使用料）とは
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の3〜4割を占めるが請求書に明示されにくい費用——それが<strong>託送料金（送配電使用料）</strong>です。
          発電された電気を法人の施設まで届けるために使われる送配電ネットワークの維持・運用コストであり、
          小売電気事業者を変えても下がらない<strong>構造的な固定コスト</strong>です。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、託送料金の仕組み・内訳・エリア別単価差・レベニューキャップ制度・今後の見通しを体系的に整理します。
        </p>
        <ul className="mt-4 space-y-1 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-sky-600">▶</span>
            <span>託送料金が電気料金に占める割合と内訳</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-sky-600">▶</span>
            <span>エリア（10電力管内）ごとの単価差と背景</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-sky-600">▶</span>
            <span>2023年度から始まったレベニューキャップ制度の概要</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-sky-600">▶</span>
            <span>今後の値上がりリスクと法人が取れる対策</span>
          </li>
        </ul>
      </header>

      {/* 本文 */}
      <div className="mt-6 space-y-6">

        {/* 1. 仕組み */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">託送料金の仕組み</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力の流れは大きく「発電→送配電→小売（消費者）」の3段階で構成されます。
            このうち<strong>送配電</strong>の部分を担うのが、各エリアの<strong>一般送配電事業者</strong>（東京電力パワーグリッド、関西電力送配電など）です。
          </p>

          {/* フロー図 */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-center">
              <p className="text-xs text-slate-500">発電事業者</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">発電</p>
              <p className="mt-1 text-xs text-slate-500">火力・原子力・再エネ等</p>
            </div>
            <div className="text-slate-400">→</div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-center">
              <p className="text-xs text-slate-500">一般送配電事業者</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">送配電</p>
              <p className="mt-1 text-xs font-medium text-amber-700">← 託送料金が発生</p>
            </div>
            <div className="text-slate-400">→</div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center">
              <p className="text-xs text-slate-500">小売電気事業者</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">小売</p>
              <p className="mt-1 text-xs text-slate-500">電力量料金に含めて転嫁</p>
            </div>
            <div className="text-slate-400">→</div>
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center">
              <p className="text-xs text-slate-500">需要家</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">法人・一般家庭</p>
              <p className="mt-1 text-xs text-slate-500">電気料金として支払い</p>
            </div>
          </div>

          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              小売電気事業者は送配電ネットワークを「借りて」電気を届けるため、
              一般送配電事業者に<strong>託送料金</strong>を支払います。
              この費用は最終的に法人の電気料金（主に電力量料金の一部）に含まれて転嫁されます。
            </p>
            <p>
              重要な点は、<strong>どの小売電気事業者と契約しても、送配電ネットワークは変わらない</strong>ことです。
              つまり、新電力に切り替えても、大手電力会社のままでも、託送料金の水準はエリアごとに一律です。
              法人が直接コントロールできない構造的コストとして理解しておく必要があります。
            </p>
          </div>
        </section>

        {/* 2. 電気料金全体に占める割合 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気料金全体に占める託送料金の割合
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金は複数の費目で構成されています。下表はそれぞれの割合目安と、
            法人がコントロールできるかどうかをまとめたものです。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">費目</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">
                    電気料金に占める割合（目安）
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    法人がコントロールできるか
                  </th>
                </tr>
              </thead>
              <tbody>
                {billBreakdownData.map((row) => (
                  <tr
                    key={row.item}
                    className={`border-b border-slate-200 ${
                      row.highlight ? "bg-amber-50" : "odd:bg-white even:bg-slate-50"
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-slate-800">
                      {row.item}
                      {row.highlight && (
                        <span className="ml-2 rounded bg-amber-200 px-1.5 py-0.5 text-xs font-semibold text-amber-800">
                          このページで解説
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-slate-700">{row.ratio}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded px-2 py-0.5 text-xs font-medium ${
                          row.controllableBool
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {row.controllable}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※割合は契約電圧・使用量・エリア・時期により異なります。高圧・特別高圧の法人を想定した目安値です。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-900">
              コントロール不可のコストが電気料金の半分以上を占める
            </p>
            <p className="mt-2 text-sm leading-7 text-amber-800">
              上表のとおり、託送料金・燃料費調整額・再エネ賦課金・容量拠出金を合計すると、
              電気料金全体の<strong>50〜65%前後</strong>はいずれの契約でも変わらない費用です。
              法人が電力切り替えや節電で効果を出せる範囲には構造的な限界があります。
            </p>
          </div>
        </section>

        {/* 3. 内訳 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">託送料金の内訳</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            託送料金は単一の費用ではなく、複数の費目で構成されています。
            各一般送配電事業者が経済産業省の認可を受けて設定します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">内訳項目</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">内容</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">割合目安</th>
                </tr>
              </thead>
              <tbody>
                {wheelingBreakdownData.map((row) => (
                  <tr key={row.item} className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.item}</td>
                    <td className="px-4 py-3 text-slate-700">{row.content}</td>
                    <td className="px-4 py-3 text-right font-mono text-slate-700">{row.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※各一般送配電事業者の届出料金体系に基づく目安値。実際の比率はエリアや契約電圧により異なります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            配電サービス料金が最大費目となっており、これは低圧・高圧の配電線や変圧器の設置・維持コストです。
            老朽化した設備の更新投資が今後増加する見通しであり、この費目を中心に単価が上昇する可能性があります。
          </p>
        </section>

        {/* 4. エリア別単価 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">エリア別の託送料金単価</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本には10の一般送配電事業者が存在し、エリアごとに託送料金単価が異なります。
            需要密度・系統規模・設備投資状況・地理的条件が単価差の主な要因です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[440px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">エリア</th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">
                    高圧託送料金（円/kWh）目安
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">特徴</th>
                </tr>
              </thead>
              <tbody>
                {areaData.map((row) => (
                  <tr key={row.area} className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.area}</td>
                    <td className="px-4 py-3 text-right font-mono text-slate-700">{row.rate}</td>
                    <td className="px-4 py-3 text-slate-600">{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※高圧（6,600V）契約の電力量に対する託送料金の概算目安。特別高圧・低圧では異なります。
            燃料費調整額や再エネ賦課金は含みません。実際の料金は各社届出値を確認してください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">単価が高いエリアの要因</p>
              <ul className="mt-2 space-y-1 text-sm text-red-700">
                <li>・需要密度が低く、1kWh当たりのインフラコストが大きい（北海道）</li>
                <li>・孤立系統で大陸間連系がなく、予備力を自前で確保（沖縄）</li>
                <li>・離島・山間部への配電コストが嵩む（四国・東北）</li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">単価が低いエリアの要因</p>
              <ul className="mt-2 space-y-1 text-sm text-green-700">
                <li>・需要密度が高くインフラコストを多くのkWhで分担（東京）</li>
                <li>・原発稼働で調整コストが相対的に低い（関西）</li>
                <li>・大規模工業需要で安定した電力消費（中部）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. レベニューキャップ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            レベニューキャップ制度とは（2023年度〜）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2023年度から、一般送配電事業者の収入規制に<strong>レベニューキャップ制度</strong>（収入上限規制）が導入されました。
            従来の<strong>総括原価方式</strong>（かかったコストに適正利潤を乗せて料金を決める方式）から大きく転換しています。
          </p>

          {/* 制度比較表 */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">項目</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    総括原価方式（旧制度）
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-sky-700">
                    レベニューキャップ（新制度）
                  </th>
                </tr>
              </thead>
              <tbody>
                {revenueCapComparison.map((row) => (
                  <tr key={row.item} className="border-b border-slate-200 odd:bg-white even:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.item}</td>
                    <td className="px-4 py-3 text-slate-600">{row.oldSystem}</td>
                    <td className="px-4 py-3 font-medium text-slate-700">{row.newSystem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              レベニューキャップ制度では、<strong>5年ごと</strong>に各社の収入上限（レベニューキャップ）を経済産業省が設定します。
              第1規制期間は2023〜2027年度です。収入上限内であれば、送配電事業者は毎年料金を調整できます。
            </p>
            <p>
              新制度の下では、送配電事業者が効率化によってコストを下げた場合、
              その削減分を利益として計上できます。効率化のインセンティブが働く構造ですが、
              同時に<strong>必要投資を収入上限に反映させやすくなった</strong>という側面もあります。
            </p>
          </div>

          {/* 投資増加要因 */}
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-800">収入上限が上昇する主な投資要因</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                <span>
                  <strong>再エネ接続対応：</strong>太陽光・風力の大量導入に伴う系統増強（特に北海道・東北・九州エリア）
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                <span>
                  <strong>老朽設備の更新：</strong>高度経済成長期に敷設した電柱・電線・変圧器の大規模更新時期が到来
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                <span>
                  <strong>レジリエンス強化：</strong>台風・地震等の自然災害対策、地中化工事、非常用電源確保
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                <span>
                  <strong>デジタル化・スマート化：</strong>スマートメーター全量更新（2024〜2028年度）、配電自動化設備
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 6. 今後の見通し */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">託送料金は今後上がるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            構造的な要因から、託送料金は今後も<strong>上昇圧力が続く</strong>見通しです。
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">再エネ系統投資の増加</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                2030年に再エネ比率36〜38%を目指す政策目標のもと、
                洋上風力・大規模太陽光の系統接続に必要な長距離送電線・変電所の新増設投資が続きます。
                投資コストは将来の収入上限に反映されます。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">老朽設備の更新ピーク</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                日本の送配電インフラは1960〜70年代に大量整備されており、
                設備寿命（30〜40年）の観点から2030年代にかけて更新投資のピークを迎えます。
                この費用が配電サービス料金を押し上げる要因となります。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">需要の伸びが鈍化</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                省エネの進展・人口減少により電力需要の増加が見込みにくい一方、
                インフラコストは固定費性が高い。
                需要量が増えないと1kWh当たりの単価が上がる「コスト割り負け」が生じやすくなります。
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-sky-900">
              法人として「コントロールできないが理解しておくべきコスト」
            </p>
            <p className="mt-2 text-sm leading-7 text-sky-800">
              託送料金は小売契約の選択では下げられません。しかし上昇トレンドを把握していれば、
              中長期の電気料金予算の精度が上がります。省エネ・需要シフト・ピーク削減による
              <strong>使用量そのものの削減</strong>が、構造的コストへの唯一の実効的な対応策です。
            </p>
          </div>
        </section>

        {/* 7. チェックリスト */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人が託送料金について確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            託送料金は直接コントロールできませんが、正しく理解することでコスト管理の精度が上がります。
            以下の5点を確認してください。
          </p>
          <div className="mt-4 space-y-3">
            {checklistItems.map((row) => (
              <div
                key={row.no}
                className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {row.no}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{row.item}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{row.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              <span>
                <strong>託送料金は電気料金の30〜40%</strong>を占め、発電・小売コスト以外の最大費目。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              <span>
                一般送配電事業者が設定するためどの小売業者と契約しても変わらず、
                <strong>法人が直接コントロールできない構造的コスト</strong>。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              <span>
                エリアによって1kWh当たり<strong>最大2〜3円以上の単価差</strong>があり、拠点ごとのコスト構造が異なる。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              <span>
                2023年度から<strong>レベニューキャップ制度</strong>に移行。
                5年ごとの見直しで、送配電投資の増加分が収入上限に反映される仕組み。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              <span>
                再エネ系統投資・老朽設備更新・需要の鈍化から、<strong>今後も上昇圧力が続く</strong>見込み。
                省エネ・ピーク削減による使用量削減が最も有効な対策。
              </span>
            </li>
          </ul>
        </section>
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人の電気料金の内訳を知る",
              description: "基本料金・電力量料金・各種調整費の全体像をわかりやすく整理。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "燃料価格の変動が電気料金に反映される仕組みと法人への影響。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "FIT制度に基づく再エネ賦課金の仕組みと今後の水準見通し。",
            },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは",
              description: "容量市場の仕組みと法人の電気料金への上乗せ構造を解説。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書を読む",
              description: "明細書のどこを見れば何のコストかが分かるかを解説。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "契約メニューの違いを整理し、自社に合う選択肢を診断。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "託送料金を含む電気料金全体の水準推移をデータで確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="電気料金の構造を理解して比較する"
          description="託送料金など「変えられないコスト」を把握したうえで、契約内容や使用量の見直し余地をシミュレーターで確認しましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
