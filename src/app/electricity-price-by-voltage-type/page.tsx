import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "特別高圧・高圧・低圧で上がり方はどう違うか｜年次データと区分間の構造差を解説";
const pageDescription =
  "特別高圧・高圧・低圧の電気料金推移を2019〜2025年の年次データで比較し、区分間で上がり方が異なる構造的な理由をJEPX連動・燃料費調整・規制料金改定・交渉力の観点から法人向けに解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "特別高圧 高圧 低圧 違い",
    "法人 電気料金 区分比較",
    "電気料金 推移 区分別",
    "高圧電力 料金見直し",
    "契約区分 比較方法",
    "電気料金 年次データ",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-price-by-voltage-type",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-price-by-voltage-type",
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

export default function ElectricityPriceByVoltageTypePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav aria-label="パンくず" className="mb-4 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li>
            <Link
              href="/articles/price-trends"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金の推移と高止まり
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="text-slate-700">区分別の上がり方</li>
        </ol>
      </nav>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          特別高圧・高圧・低圧で上がり方はどう違うか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の高止まりを確認するときは、契約区分を分けて見ることが欠かせません。特別高圧・高圧・低圧では契約条件や価格決定の仕組みが異なり、
          同じ期間でも上がり方や落ち着き方に大きな差が出ます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは2019〜2025年の年次推移データをもとに区分ごとの差を整理し、なぜ区分間で上がり方が違うのかを構造的に解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 年次推移テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            区分別・年次電気料金推移（2019〜2025年）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下表は資源エネルギー庁の電力調査統計をもとにした電力量料金単価（円/kWh）の年次推移です。前年比は前年の単価との比較。▲はマイナス（低下）を示します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold" rowSpan={2}>
                    年
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold" colSpan={2}>
                    特別高圧
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold" colSpan={2}>
                    高圧
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold" colSpan={2}>
                    低圧電灯
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold" colSpan={2}>
                    低圧電力
                  </th>
                </tr>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-right font-medium">円/kWh</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-medium">前年比</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-medium">円/kWh</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-medium">前年比</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-medium">円/kWh</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-medium">前年比</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-medium">円/kWh</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-medium">前年比</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-center font-medium">2019</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">12.08</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-400">―</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">15.58</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-400">―</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">22.10</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-400">―</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">26.26</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-400">―</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-center font-medium">2020</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">11.39</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲5.7%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">14.24</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲8.6%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">22.14</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-600">+0.2%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">25.42</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲3.2%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-center font-medium">2021</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">10.83</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲4.9%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">14.25</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-600">+0.1%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">21.24</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲4.1%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">25.18</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲0.9%</td>
                </tr>
                {/* 2022行: 急騰年 — 背景を赤みに */}
                <tr className="bg-red-50">
                  <td className="border border-slate-200 px-3 py-2 text-center font-semibold text-red-700">
                    2022
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-medium">17.14</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-600">
                    +58.3%
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-medium">20.58</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-600">
                    +44.4%
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-medium">26.84</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-600">
                    +26.4%
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-medium">30.34</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-600">
                    +20.5%
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-center font-medium">2023</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">17.84</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-600">+4.0%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">21.47</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-600">+4.3%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">29.25</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-600">+9.0%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">29.86</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲1.6%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-center font-medium">2024</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">16.52</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲7.4%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">20.24</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲5.7%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">28.21</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲3.6%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">28.07</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲6.0%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-center font-medium">2025</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">17.41</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-600">+5.4%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">21.15</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-600">+4.4%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">26.89</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-600">▲4.7%</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">30.19</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-600">+7.6%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出所：資源エネルギー庁「電力調査統計」をもとに作成。単位は円/kWh（電力量料金ベース）。▲はマイナス（前年比低下）。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
            <p>
              <span className="font-semibold">注目点：</span>
              2022年の特別高圧は前年比+58.3%と全区分で最大の上昇幅を記録しました。これはJEPX卸電力市場価格が急騰し、市場連動型契約を多く持つ特別高圧・高圧が直撃を受けたためです。一方、低圧電灯は規制料金の比率が高く上昇幅が相対的に抑制されましたが、2023年に規制料金の値上げが実施された影響で+9.0%の上昇となりました。
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            詳細な推移については{" "}
            <Link
              href="/electricity-price-trend-2019-2025"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              2019〜2025年の電気料金推移まとめ
            </Link>
            と{" "}
            <Link
              href="/business-electricity-price-trend-10-years"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人電気料金10年間の推移
            </Link>
            もあわせてご覧ください。
          </p>
        </section>

        {/* なぜ区分間で上がり方が違うのか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜ区分間で上がり方が違うのか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            区分間で上昇幅が異なる背景には、価格決定の仕組みの違いがあります。JEPX連動の度合い・燃料費調整額の影響・規制料金改定の有無・補助金の効き方・交渉力の差が複合的に作用しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">要因</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">特別高圧への影響</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">高圧への影響</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">低圧への影響</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">JEPX・市場連動</td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className="font-semibold text-red-600">大</span>（市場調達比率が高い）
                  </td>
                  <td className="border border-slate-200 px-3 py-2">中〜大</td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className="text-sky-700">小</span>（規制料金メニューが多い）
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">燃料費調整額</td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className="font-semibold text-red-600">大</span>（使用量が大きく影響額が大きい）
                  </td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className="font-semibold text-red-600">大</span>
                  </td>
                  <td className="border border-slate-200 px-3 py-2">中</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">規制料金改定</td>
                  <td className="border border-slate-200 px-3 py-2">
                    なし（全て自由料金）
                  </td>
                  <td className="border border-slate-200 px-3 py-2">一部影響</td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className="font-semibold text-red-600">大</span>（規制料金メニューが多い）
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">補助金効果</td>
                  <td className="border border-slate-200 px-3 py-2">kWh単位では同額だが総額で差</td>
                  <td className="border border-slate-200 px-3 py-2">同左</td>
                  <td className="border border-slate-200 px-3 py-2">同左</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">契約交渉力</td>
                  <td className="border border-slate-200 px-3 py-2">
                    個別交渉で条件改善余地あり
                  </td>
                  <td className="border border-slate-200 px-3 py-2">見積比較で一定の交渉余地</td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className="text-slate-500">交渉余地が限定的</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧は市場と直結しているため価格変動が素早く反映されます。高圧はその中間で、規制料金と自由料金が混在します。低圧は規制料金の割合が高い分、急騰時の上昇は抑制されますが、規制料金改定のタイミングで一気に上がる点が特徴です。
          </p>
        </section>

        {/* 区分別の月額コスト比較 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            区分別の月額コスト比較（同一使用量50,000kWhで試算）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            同じ50,000kWhを使用した場合でも、契約区分によって月額コストに大きな差が生じます。特別高圧は単価が最も安く抑えられる一方、高圧・低圧電力は単価が高くなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-100 text-slate-800">
                  <th className="border border-sky-200 px-3 py-2 text-left font-semibold">項目</th>
                  <th className="border border-sky-200 px-3 py-2 text-right font-semibold">特別高圧</th>
                  <th className="border border-sky-200 px-3 py-2 text-right font-semibold">高圧</th>
                  <th className="border border-sky-200 px-3 py-2 text-right font-semibold">低圧電力</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="bg-white hover:bg-sky-50">
                  <td className="border border-sky-200 px-3 py-2 font-medium">電力量料金単価</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">17.4円/kWh</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">21.1円/kWh</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">30.2円/kWh</td>
                </tr>
                <tr className="bg-white hover:bg-sky-50">
                  <td className="border border-sky-200 px-3 py-2 font-medium">月間電力量料金</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">87万円</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">106万円</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">151万円</td>
                </tr>
                <tr className="bg-white hover:bg-sky-50">
                  <td className="border border-sky-200 px-3 py-2 font-medium">基本料金（目安）</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">45万円</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">75万円</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">33万円</td>
                </tr>
                <tr className="bg-sky-100 font-semibold">
                  <td className="border border-sky-200 px-3 py-2">月額合計（目安）</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">約150万円</td>
                  <td className="border border-sky-200 px-3 py-2 text-right">約200万円</td>
                  <td className="border border-sky-200 px-3 py-2 text-right text-red-700">約200万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 rounded-lg border border-sky-200 bg-white p-3 text-xs text-slate-500">
            <p>
              ※試算は2025年平均単価をもとにした概算。基本料金は契約電力・需要家規模により大幅に異なる。特別高圧は単価が安いが受電設備の維持コストが別途発生する。低圧は単価が高いが基本料金の体系が異なりデマンド管理が不要なケースが多い。実際のコストは契約条件・デマンド値・時間帯別使用量によって変動する。
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧と低圧電力を比べると月額で約50万円の差が生じる計算です。ただし特別高圧には受電設備の設置・維持コストが必要なため、使用電力量が大きい場合に初めてコストメリットが出ます。
          </p>
        </section>

        {/* 契約区分ごとに確認したいポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人が自社の契約区分で確認したいポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約区分に応じて、見るべき論点は変わります。以下の観点で自社の状況を整理することが実務上の第一歩です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">特別高圧</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                <li>市場連動型か固定型か、調達構成の確認</li>
                <li>単価上振れリスクとヘッジ条件の見直し</li>
                <li>個別交渉での条件改善余地の検討</li>
              </ul>
              <p className="mt-3 text-sm">
                <Link
                  href="/extra-high-voltage-electricity-pricing"
                  className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                >
                  特別高圧の料金解説を見る
                </Link>
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">高圧</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                <li>基本料金と電力量料金のバランス確認</li>
                <li>契約更新時の見積もり比較</li>
                <li>デマンド値の適正化による基本料金削減</li>
              </ul>
              <p className="mt-3 text-sm">
                <Link
                  href="/high-voltage-electricity-pricing"
                  className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                >
                  高圧電力の料金解説を見る
                </Link>
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">低圧電灯</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                <li>規制料金か自由料金かの確認</li>
                <li>補助金終了後の実質単価の変化</li>
                <li>制度改定スケジュールの把握</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">低圧電力</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                <li>季節変動を含む年間での推移比較</li>
                <li>高圧契約への切り替え可否の検討</li>
                <li>使用量増加時のコスト増試算</li>
              </ul>
              <p className="mt-3 text-sm">
                <Link
                  href="/low-voltage-electricity-pricing"
                  className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                >
                  低圧電力の料金解説を見る
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* 単純比較の注意点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単純な平均比較だけでは見落としやすい点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            区分をまたいだ単純比較だけで「自社は高い・安い」を判断すると、見落としが発生しやすくなります。契約条件・稼働時間・季節変動・調整項目の扱いが区分によって異なるため、まずは同一区分内で時系列比較するのが基本です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            料金プランの比較には{" "}
            <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              料金メニュー比較診断
            </Link>
            を活用することで、自社の使用パターンに合った条件を見つけやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="区分差を把握したうえで、各区分の詳細と契約見直しの実務に接続しやすいページです。"
          links={[
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "高圧契約で確認したい請求項目と単価構造を整理できます。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧の料金解説",
              description: "市場連動型の調達リスクと個別交渉のポイントを解説します。",
            },
            {
              href: "/low-voltage-electricity-pricing",
              title: "低圧電力の料金解説",
              description: "低圧の料金体系と規制料金・自由料金の違いを確認できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "2019〜2025年の電気料金推移まとめ",
              description: "全区分の年次推移を一覧で確認できます。",
            },
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人電気料金10年間の推移",
              description: "長期視点でのトレンドと構造変化を解説します。",
            },
            {
              href: "/articles/price-trends",
              title: "電気料金の推移と高止まり（カテゴリ一覧）",
              description: "推移・高止まり関連の記事をまとめて確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="自社区分でコストをシミュレーションする"
          description="区分ごとの単価水準と上昇リスクを把握したうえで、現行契約のリスクを数値で確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニュー比較診断を使う" },
          ]}
        />
      </section>
    </main>
  );
}
