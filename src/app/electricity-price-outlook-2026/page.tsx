import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "2026年度以降の法人電気料金見通し｜要因別の方向性とシナリオ別予算前提";
const pageDescription =
  "2026年度以降の法人電気料金見通しを要因別に整理。燃料/為替/再エネ/容量/託送の方向性、楽観・基本・悲観の3シナリオ別に予算前提の置き方を解説。";
const pageUrl = "https://simulator.eic-jp.org/electricity-price-outlook-2026";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 2026年度 見通し",
    "法人電気料金 予測 2026",
    "電気料金 シナリオ 予算",
    "燃料費 為替 電気料金",
    "容量拠出金 2026",
    "電気料金 楽観 悲観",
    "電気料金 レンジ管理",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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

const factors = [
  {
    name: "燃料費（LNG・石炭）",
    current: "LNG 約7〜9万円/トン水準。2022年急騰から落ち着き",
    outlook2026: "中東情勢次第で上昇リスク。ベースは横ばい〜微減",
    outlook20272028: "欧州需要動向と新規LNG供給量がカギ",
    direction: "横ばい",
    directionColor: "text-slate-600",
  },
  {
    name: "為替（円安・円高）",
    current: "1ドル＝145〜155円水準が継続",
    outlook2026: "日米金利差縮小なら円高方向。ただし不確実性大",
    outlook20272028: "構造的な円安圧力は残存。125〜160円レンジ想定",
    direction: "下降期待・上昇リスク",
    directionColor: "text-amber-600",
  },
  {
    name: "卸電力価格（JEPX）",
    current: "2024年度平均で約10〜14円/kWh（季節変動大）",
    outlook2026: "再エネ増加で昼間押し下げ。需要増（データセンター等）が下支え",
    outlook20272028: "時間帯格差がさらに拡大。平均は横ばい〜微減",
    direction: "横ばい（時間帯格差拡大）",
    directionColor: "text-slate-600",
  },
  {
    name: "再エネ賦課金",
    current: "2024年度：3.49円/kWh",
    outlook2026: "FIT買取総額の増加が続くが、単価上昇ペースは鈍化傾向",
    outlook20272028: "2028年頃から大型太陽光のFIT期間終了が増え横ばいへ",
    direction: "微増〜横ばい",
    directionColor: "text-amber-600",
  },
  {
    name: "容量拠出金",
    current: "2024年度から需要家への請求が始まった段階",
    outlook2026: "本格拡大。高圧で+0.3〜0.7円/kWh規模の追加コスト",
    outlook20272028: "容量市場の落札価格次第でさらに拡大の可能性",
    direction: "上昇",
    directionColor: "text-red-600",
  },
  {
    name: "託送料金（送配電コスト）",
    current: "2023年度料金改定で一部引き上げ済み",
    outlook2026: "系統増強コストの回収で段階的引き上げが続く",
    outlook20272028: "再エネ連系増加に伴う追加投資が料金に反映される",
    direction: "上昇",
    directionColor: "text-red-600",
  },
  {
    name: "炭素コスト（GX-ETS）",
    current: "2026年試行段階で電力セクターへの影響は軽微",
    outlook2026: "試行運転。電気料金への直接転嫁はまだ小さい",
    outlook20272028: "2028年本格化で電力コストへの影響が顕在化し始める",
    direction: "上昇（中期）",
    directionColor: "text-red-600",
  },
  {
    name: "政府補助（激変緩和等）",
    current: "2024年度末で激変緩和措置は原則終了",
    outlook2026: "新規補助の予定なし。補助終了分が単価に上乗せ",
    outlook20272028: "電力市場の設計見直し（市場改革）の動向を注視",
    direction: "料金押し上げ（補助なし）",
    directionColor: "text-red-600",
  },
];

const scenarios = [
  {
    name: "楽観シナリオ",
    assumption:
      "LNG価格下落（6万円/トン水準）、円高（130円台）、補助終了の影響軽微",
    unitHigh: "約21〜23円/kWh",
    monthlyAmount: "約105〜115万円",
    annualAmount: "約1,260〜1,380万円",
    bgClass: "bg-green-50 border-green-200",
    labelClass: "text-green-700",
  },
  {
    name: "基本シナリオ",
    assumption:
      "燃料横ばい（7〜8万円/トン）、為替145〜155円、容量拠出金・託送が段階増",
    unitHigh: "約24〜27円/kWh",
    monthlyAmount: "約120〜135万円",
    annualAmount: "約1,440〜1,620万円",
    bgClass: "bg-slate-50 border-slate-200",
    labelClass: "text-slate-700",
  },
  {
    name: "悲観シナリオ",
    assumption:
      "LNG急騰（10万円/トン超）、円安（160円超）、容量拠出金急拡大、炭素コスト転嫁",
    unitHigh: "約28〜33円/kWh",
    monthlyAmount: "約140〜165万円",
    annualAmount: "約1,680〜1,980万円",
    bgClass: "bg-red-50 border-red-200",
    labelClass: "text-red-700",
  },
];

const budgetSteps = [
  {
    step: "STEP 1",
    title: "現在の実績単価を正確に把握する",
    detail:
      "直近12ヶ月の電気料金請求書から基本料金・電力量料金・燃調・賦課金・容量拠出金を分解し、kWh単価の実績値を計算します。",
  },
  {
    step: "STEP 2",
    title: "固定費と変動費を分離する",
    detail:
      "基本料金・容量拠出金・託送基本料は使用量にかかわらずほぼ固定。燃調・燃料費は変動費。分離することで、どの部分が予算リスクかを特定できます。",
  },
  {
    step: "STEP 3",
    title: "基本シナリオで予算ベースを作る",
    detail:
      "楽観でも悲観でもなく「中央値」で年間予算を置き、月次で実績との差異を管理します。基本シナリオの単価に現在の年間使用量を掛けて年額ベースを算出します。",
  },
  {
    step: "STEP 4",
    title: "悲観シナリオとの差をリスク積立で管理",
    detail:
      "悲観シナリオと基本シナリオの差（年額）をリスク予算または予備費として設定します。発動条件（LNG価格が○万円を超えたら）を事前に決めておくと意思決定が早くなります。",
  },
  {
    step: "STEP 5",
    title: "年に1〜2回、前提を更新する",
    detail:
      "LNG価格・為替・制度変更（容量拠出金の決定価格等）を確認して前提を更新します。年度開始前（3〜4月）と期中（9〜10月）の2回が実務的に運用しやすいタイミングです。",
  },
];

export default function ElectricityPriceOutlook2026Page() {
  return (
    <>
      <ArticleJsonLd
        headline="2026年度以降の法人電気料金見通し｜要因別の方向性とシナリオ別予算前提"
        description="2026年度以降の法人電気料金見通しを要因別に整理。燃料/為替/再エネ/容量/託送の方向性、楽観・基本・悲観の3シナリオ別に予算前提の置き方を解説。"
        url="https://simulator.eic-jp.org/electricity-price-outlook-2026"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "2026年度以降の法人電気料金見通し" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
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
          <li className="text-slate-700">2026年度以降の料金見通し</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ページヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          2026年度以降の法人電気料金見通し
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2024〜2025年にかけて政府の激変緩和措置が終了し、容量拠出金の請求が始まりました。
          2026年度以降は、燃料費・為替・再エネ賦課金・容量拠出金・託送・炭素コストの6つが複合的に作用する局面に入ります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは8つの要因別に方向性を整理し、楽観・基本・悲観の3シナリオ別に予算前提の数値と置き方を解説します。
          電気料金は「予測」ではなく「レンジ管理」が実務的な考え方です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 要因別の方向性テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            要因別の方向性（8要因）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金を構成する8つの要因について、現状・2026年度見通し・2027〜2028年の方向性を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    要因
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    現状（2024〜2025年度）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    2026年度見通し
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    2027〜2028年
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-center">
                    方向性
                  </th>
                </tr>
              </thead>
              <tbody>
                {factors.map((row) => (
                  <tr key={row.name} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-medium">
                      {row.name}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.current}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.outlook2026}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.outlook20272028}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 text-center text-xs font-semibold ${row.directionColor}`}
                    >
                      {row.direction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※
            見通しは公開情報・業界予測をもとにした定性的な整理です。実際の料金は市場動向・政策判断により大きく変わります。
          </p>
        </section>

        {/* 3シナリオ別の単価前提テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            3シナリオ別の単価前提（2026〜2027年度）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約の総合単価（基本料金＋電力量料金＋燃調＋賦課金等）を、月間使用量5万kWh（中規模工場・商業施設の目安）で試算した参考値です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    シナリオ
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    主な前提条件
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    高圧総合単価（目安）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    月5万kWh・月額
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    年額（12ヶ月換算）
                  </th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((s) => (
                  <tr key={s.name} className="border-t border-slate-100">
                    <td
                      className={`border border-slate-200 px-3 py-2 font-semibold ${s.labelClass}`}
                    >
                      {s.name}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {s.assumption}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">
                      {s.unitHigh}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {s.monthlyAmount}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {s.annualAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※
            月間5万kWhは電力会社・エリア・デマンド値によって基本料金が大きく変わります。あくまで規模感の参考値としてご利用ください。
            特別高圧は高圧より単価が低め（概算で▲1〜3円/kWh）です。
          </p>
        </section>

        {/* 「予測」ではなく「レンジ管理」の考え方 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「予測」ではなく「レンジ管理」という考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金は燃料市場・為替・政策の3つが複合的に絡み合うため、1年先でも「正確な予測」は困難です。
            重要なのは「何円になるか」を当てることではなく、「どのレンジに収まる確率が高いか」を把握して予算を設計することです。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-white bg-white p-4 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                予算管理の方針
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                基本シナリオで年間予算をベース設定し、悲観シナリオとの差をリスク予備費として確保。楽観シナリオは下振れ恩恵として扱う。
              </p>
            </div>
            <div className="rounded-xl border border-white bg-white p-4 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                月次モニタリング
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                毎月の請求書でkWh単価を計算し、シナリオの想定レンジと比較。上振れが2ヶ月続いたら前提を見直す。
              </p>
            </div>
            <div className="rounded-xl border border-white bg-white p-4 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                トリガー設定
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                「LNG価格が9万円/トン超になったら悲観シナリオに移行」のように、外部指標でシナリオを切り替えるルールを事前に決めておく。
              </p>
            </div>
          </div>
        </section>

        {/* 予算策定5ステップ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            予算策定で使える前提の置き方（5ステップ）
          </h2>
          <ol className="mt-4 space-y-4">
            {budgetSteps.map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="shrink-0 text-sm font-bold text-sky-700">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="electricity-price-outlook-2026" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "託送料金", "JEPX", "市場連動プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/renewable-energy-expansion-price-impact",
              title: "再エネ拡大と電気料金の両面影響",
              description:
                "上昇・下降の両方向への影響を6項目で整理。メリットオーダー効果も解説。",
            },
            {
              href: "/carbon-pricing-electricity-impact",
              title: "カーボンプライシングと電気料金への影響",
              description:
                "GX-ETSと炭素税の導入スケジュールと電力コストへの転嫁経路を解説。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人電気料金の2019〜2025年推移",
              description: "過去の推移データをもとに高止まりの実態を確認。",
            },
            {
              href: "/electricity-price-high-plateau-reasons",
              title: "電気料金が高止まりする理由",
              description:
                "燃料費が下がっても料金が下がりにくい構造的な要因を整理。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "2026年以降も上昇を続ける構造的な要因を費目別に解説します。",
            },
          ]}
        />

        <ContentCta
          heading="自社のコストをシミュレーションで確認する"
          description="現在の契約条件・使用量をもとに、今後の単価シナリオ別の月額・年額コストを試算できます。予算前提の検討にご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
