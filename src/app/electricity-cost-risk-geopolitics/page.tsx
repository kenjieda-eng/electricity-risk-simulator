import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "地政学リスクで電気料金・電気代はどう上がるか｜過去5事例と波及経路を整理";
const pageDescription =
  "中東情勢・ウクライナ侵攻などの地政学リスクが法人・企業・自治体の電気料金にどう影響するか、過去5事例の燃調費変化と5段階の波及経路を解説。備えのチェックリストも掲載。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "地政学リスク 電気料金",
    "中東情勢 電気代 法人",
    "燃料調達不安 電力",
    "円安 LNG 影響",
    "市場連動 固定 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-cost-risk-geopolitics",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-cost-risk-geopolitics",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "地政学リスクの解説",
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

const historicalGeopoliticsEvents = [
  {
    event: "アラブの春",
    period: "2011年",
    fuelImpact: "原油一時+30%",
    electricityImpact: "燃調費+0.5〜1円/kWh",
    duration: "3〜6ヶ月",
  },
  {
    event: "クリミア併合",
    period: "2014年",
    fuelImpact: "ガス供給不安",
    electricityImpact: "限定的（日本への直接影響小）",
    duration: "1〜2ヶ月",
  },
  {
    event: "ウクライナ侵攻",
    period: "2022年",
    fuelImpact: "LNG+200%超",
    electricityImpact: "燃調費+5〜10円/kWh",
    duration: "1年以上",
    isHighImpact: true,
  },
  {
    event: "中東情勢緊迫",
    period: "2023-2024年",
    fuelImpact: "原油一時+15%",
    electricityImpact: "燃調費+0.5〜1.5円/kWh",
    duration: "数ヶ月",
  },
  {
    event: "ホルムズ海峡封鎖（想定）",
    period: "未発生",
    fuelImpact: "LNG供給途絶リスク",
    electricityImpact: "燃調費+5〜15円/kWh（推定）",
    duration: "数ヶ月〜年単位",
    isScenario: true,
  },
];

const propagationSteps = [
  {
    stage: "第1段階",
    content: "紛争・制裁発生",
    timeLag: "即時",
    checkPoint: "ニュースの確認",
  },
  {
    stage: "第2段階",
    content: "燃料スポット価格上昇",
    timeLag: "数日〜数週間",
    checkPoint: "LNG/原油市況の確認",
  },
  {
    stage: "第3段階",
    content: "JEPX価格への波及",
    timeLag: "数週間〜数ヶ月",
    checkPoint: "市場連動プランの確認",
  },
  {
    stage: "第4段階",
    content: "燃調費への反映",
    timeLag: "2〜5ヶ月",
    checkPoint: "請求書の確認",
  },
  {
    stage: "第5段階",
    content: "契約更新時の単価見直し",
    timeLag: "数ヶ月〜1年",
    checkPoint: "見積依頼の準備",
  },
];

const checklist = [
  "現在の契約が市場連動か固定かを確認し、地政学リスク発生時にどの段階で影響が出るか把握する",
  "LNG/原油の市場価格動向を月次で確認し、燃調費への反映タイムラグ（2〜5ヶ月）を意識する",
  "ホルムズ海峡封鎖など極端シナリオでの年間コスト増を試算し、稟議・予算修正の根拠として準備する",
  "契約更新の6ヶ月前に見積を取得し、地政学リスクを前提とした価格前提条件を確認する",
  "ワーストシナリオ（LNG急騰＋円安重複）での月額影響を把握し、年間予算に安全幅を設ける",
];

export default function ElectricityCostRiskGeopoliticsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">地政学リスク</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          地政学リスクで電気料金・電気代はどう上がるか｜過去5事例と波及経路を整理
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          中東情勢や国際紛争は遠い話に見えても、日本では燃料輸入や電力市場を通じて電気料金・電気代に波及しやすい要因です。
          法人・企業・自治体の調達実務でも、外部環境として無視しにくいテーマです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、過去5事例の燃料・電気料金への影響と、地政学リスクが請求書に反映されるまでの5段階の波及経路を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">地政学リスクとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地政学リスクとは、中東情勢や国際紛争、資源輸出国や輸送ルートの不安定化などにより、エネルギー調達の不確実性が高まる状態を指します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            調達不安が高まると、市場参加者の見通しが慎重になり、燃料価格や電力市場価格の変動が大きくなることがあります。
          </p>
        </section>

        {/* Table 1: 過去の地政学リスクと電気料金への影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">過去の地政学リスクと電気料金への影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            過去4事例と想定シナリオ1件について、燃料への影響・電気料金への影響・影響期間を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">事象</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">時期</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">燃料への影響</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">電気料金への影響</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">影響期間</th>
                </tr>
              </thead>
              <tbody>
                {historicalGeopoliticsEvents.map((row) => (
                  <tr
                    key={row.event}
                    className={`border-b border-slate-100 ${row.isHighImpact ? "bg-red-50" : row.isScenario ? "bg-amber-50" : "hover:bg-slate-50"}`}
                  >
                    <td className="px-4 py-3 font-medium text-slate-800">
                      {row.event}
                      {row.isScenario && (
                        <span className="ml-2 rounded bg-amber-200 px-1.5 py-0.5 text-xs text-amber-800">想定</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.period}</td>
                    <td className="px-4 py-3 text-slate-700">{row.fuelImpact}</td>
                    <td className={`px-4 py-3 ${row.isHighImpact || row.isScenario ? "font-semibold text-red-700" : "text-slate-700"}`}>
                      {row.electricityImpact}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 電気料金への影響幅はLNG価格・需給・為替との複合要因を含みます。地政学リスク単独の影響ではない場合があります。
          </p>
        </section>

        {/* Table 2: 地政学リスクの波及経路 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">地政学リスクの波及経路</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地政学リスクが発生してから電気料金の請求書に反映されるまでには、5段階の経路があります。各段階でタイムラグが生じるため、
            早期に確認すべき項目を把握しておくことが重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">段階</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">内容</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">影響のタイムラグ</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">法人が確認すべきこと</th>
                </tr>
              </thead>
              <tbody>
                {propagationSteps.map((row, index) => (
                  <tr key={row.stage} className={`border-b border-slate-100 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-sky-50`}>
                    <td className="px-4 py-3 font-semibold text-sky-700">{row.stage}</td>
                    <td className="px-4 py-3 text-slate-800">{row.content}</td>
                    <td className="px-4 py-3 text-slate-700">{row.timeLag}</td>
                    <td className="px-4 py-3 text-slate-700">{row.checkPoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ タイムラグは契約種別・電力会社の計算サイクルにより異なります。市場連動プランは第3段階の影響が早く出やすい傾向があります。
          </p>
        </section>

        {/* Checklist */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">地政学リスクへの備え チェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下5項目を事前に確認・対応しておくことで、地政学リスク発生時の対応をスムーズに進めやすくなります。
          </p>
          <ul className="mt-4 space-y-3">
            {checklist.map((item, index) => (
              <li key={index} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-slate-400 text-xs font-bold text-slate-500">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランで見え方はどう違うか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            は、価格変動が早く反映されやすいため、地政学リスクの影響を把握しやすい契約です。一方で、
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            でも中長期では無関係ではなく、契約更新時や再見積で影響が出ることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約方式の違いは{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの違い
            </Link>
            で確認しつつ、単月と年間の両面で判断することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・企業・自治体にとっての実務上の論点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>予算修正時にどこまで変動リスクを見込むか</li>
            <li>契約更新時に価格前提と条件をどう確認するか</li>
            <li>調達先比較で単価以外の項目をどう扱うか</li>
            <li>上司・庁内説明で変動リスクをどう説明するか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単月だけでなく年間視点で確認することで、実務判断の再現性を高めやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">地政学リスクと円安・燃料価格の関係</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地政学リスクは単独で発生するより、為替やLNG価格と重なって影響が拡大することが多い要因です。法人の電気料金上昇は、
            複数の要因が組み合わさって起きるケースを前提に見ておく必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            背景理解には{" "}
            <Link href="/lng-electricity-price" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              LNGページ
            </Link>
            と{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額ページ
            </Link>
            が有効です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="地政学リスクの理解を、燃料要因と契約比較の実務へつなげる導線です。"
          links={[
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "燃料市場から請求額への波及経路を確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "調整項目の見方を請求書視点で整理できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "価格変動が反映される契約の特徴を確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "契約方式ごとのリスクの違いを比較できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "複合要因で上がる構造を全体像で確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="複合リスクを前提に比較・試算する"
          description="地政学リスクの構造を確認した後は、比較ページとシミュレーションで契約条件ごとの上振れ影響を具体的に確認できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
