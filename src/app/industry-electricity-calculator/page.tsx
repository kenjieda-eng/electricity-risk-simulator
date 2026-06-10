import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, HowToJsonLd } from "../../components/seo/JsonLd";
import { IndustryElectricityCalculator } from "../../components/calculator/IndustryElectricityCalculator";

const pageTitle =
  "業種別電気代計算機｜業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算";
const pageDescription =
  "業種・規模・契約区分・電力エリアを選ぶだけで、推定年間電気代の中央値・レンジ・業種ベンチマーク比較（業種中央値／上位25%）・削減余地3案（契約見直し／省エネ投資／再エネ調達PPA）を即時試算。ブラウザ内計算でデータ送信なし。本計算結果は中立的立場の判断材料で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/industry-electricity-calculator";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "業種別 電気代 計算",
    "法人 電気代 試算",
    "業種ベンチマーク 電気代",
    "電気代 削減余地",
    "PPA 省エネ 契約見直し",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const howToSteps = [
  { name: "業種を選択", text: "10種類の業種（オフィス・小売・飲食・製造・医療福祉・ホテル・物流・教育・データセンター・その他公共）から自社に近いものを選びます。" },
  { name: "電力エリアを選択", text: "事業所がある電力エリア（北海道〜沖縄の11エリア）を選択します。" },
  { name: "契約区分を選択", text: "低圧／高圧／特別高圧から選択します。契約電力 50kW 未満は低圧、50〜2,000kW は高圧、2,000kW 以上は特別高圧が一般的です。" },
  { name: "規模を選択", text: "中小（月10万kWh未満）／中堅（月10万〜100万kWh）／大規模（月100万kWh超）から選択。任意で月間kWhを直接入力するとより精度の高い試算になります。" },
  { name: "計算ボタンを押す", text: "推定年間電気代（中央値・レンジ）、業種ベンチマーク比較、削減余地3案が即時に表示されます。本試算はあくまで目安です。" },
];

export default function IndustryElectricityCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "業種別電気代計算機", url: pageUrl },
        ]}
      />
      <HowToJsonLd
        name="業種別電気代計算機の使い方"
        description="業種・電力エリア・契約区分・規模を選択して、推定年間電気代と削減余地3案を即時試算する手順。"
        totalTime="PT1M"
        steps={howToSteps}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">業種別電気代計算機</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            業種別電気代計算機
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種・規模・契約区分・電力エリアの 4 項目を選ぶだけで、推定年間電気代（中央値・レンジ）／業種ベンチマーク比較／削減余地 3 案を即時に試算します。「自社の電気代は業種平均と比べてどうか・どこに削減余地があるか」を 1 分で把握できます。
          </p>
          <ul className="mt-4 grid gap-1 text-xs leading-6 text-slate-700 sm:text-sm">
            <li>・推定年間電気代の中央値・レンジ（条件差・燃調変動を ±8% で織り込み）</li>
            <li>・業種中央値・上位 25% との横棒グラフ比較</li>
            <li>・削減余地 3 案（契約見直し／省エネ投資／再エネ調達 PPA）の概算削減額</li>
            <li>・計算はブラウザ内完結・サーバ送信なし</li>
          </ul>
          <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-900">
            <strong>※ 本試算はあくまで目安です。</strong>実際の電気代は契約条件・使用パターン・燃調・各種制度負担により変動します。具体的な単価・条件は契約書および個別見積で確認してください。本計算機は中立的立場で判断材料を提供するもので、特定の電力会社・契約形態を推奨するものではありません。
          </p>
        </header>

        <section className="mt-6">
          <IndustryElectricityCalculator />
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">関連コンテンツ</h2>
          <p className="mt-2 text-xs leading-6 text-slate-600">
            この計算機は「現状」の年間電気代を試算します。原油高・円安・補助終了などで将来どう動くかを 4 シナリオで比較したい場合は、シナリオ別シミュレーションをご利用ください（入力条件は本計算機と共通です）。
          </p>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <Link href="/electricity-scenario-simulation" className="text-sky-700 underline-offset-2 hover:underline">
                → 電気代シナリオ別シミュレーション（将来の電気代を 4 シナリオで試算）
              </Link>
            </li>
            <li>
              <Link href="/benchmark" className="text-sky-700 underline-offset-2 hover:underline">
                → 業種×規模 電気代ベンチマークツール（参照型）
              </Link>
            </li>
            <li>
              <Link href="/simulate" className="text-sky-700 underline-offset-2 hover:underline">
                → 料金上昇リスク シミュレーター（高騰時の上振れリスクを 30 秒診断）
              </Link>
            </li>
            <li>
              <Link href="/compare" className="text-sky-700 underline-offset-2 hover:underline">
                → 料金メニュー比較診断（固定／市場連動などの比較）
              </Link>
            </li>
            <li>
              <Link href="/articles/by-industry" className="text-sky-700 underline-offset-2 hover:underline">
                → 業種別の電気代解説（カテゴリハブ）
              </Link>
            </li>
            <li>
              <Link href="/articles/power-utility-guide" className="text-sky-700 underline-offset-2 hover:underline">
                → 電力会社別解説（旧一電 10 社・主要新電力の中立比較）
              </Link>
            </li>
          </ul>
        </section>

        <footer className="mt-8 rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-xs leading-6 text-slate-600">
            <strong>※ 本試算はあくまで目安です。</strong>本計算機の結果は公開情報に基づく中立的な判断材料であり、特定の電力会社・契約形態への勧誘や推奨を行うものではありません。実際の契約・更新・切替判断は、相見積の取得および専門家への相談をおすすめします。
          </p>
          <p className="mt-2 text-xs text-slate-500">
            出典: 各電力会社公式料金プラン・各社統合報告書・資源エネルギー庁・OCCTO・電力ガス取引監視等委員会の公表データ（2025年10月時点）。本計算機は一般社団法人エネルギー情報センターが運営します。
          </p>
        </footer>
      </main>
    </>
  );
}
