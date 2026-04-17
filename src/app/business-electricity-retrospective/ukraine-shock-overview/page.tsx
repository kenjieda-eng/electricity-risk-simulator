import type { Metadata } from "next";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";
import UkraineShockSeriesNav, { UkraineShockPrevNext } from "../_components/UkraineShockSeriesNav";
import { MultiBarChartCard, MultiLineChartCard } from "../_components/FeatureCharts";
import {
  ConclusionThreePoints,
  DataNote,
  EventNotes,
  HormuzInsight,
  RelatedLinks,
  SourceList,
} from "../_components/FeatureArticleSections";
import {
  DATA_DISCLAIMER,
  SHOCK_EVENT_NOTES,
  VOLTAGE_ORDER,
  getSeriesByRange,
  getYearlyAverages,
} from "../../../lib/businessElectricityRetrospective/shock-feature-data";

const pageTitle = "ウクライナショックとは何だったのか｜法人電気料金に起きた変化を全体整理";
const pageDescription =
  "ウクライナ危機を契機に、法人電気料金に何が起きたのかを全体整理。燃料高騰、補助政策、区分別の違い、2026年3月ホルムズ海峡封鎖への示唆まで実務視点で解説。";
const canonicalUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/ukraine-shock-overview";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["ウクライナショック 電気料金", "法人 電気代 高騰", "ウクライナ 電力 影響", "電気料金 急騰 2022", "ウクライナ エネルギー危機"],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "ウクライナショック総論" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function UkraineShockOverviewPage() {
  const yearlyRows = getYearlyAverages(2019, 2025).map((row) => ({ label: `${row.year}年`, values: row.values }));
  const focusedRows = getSeriesByRange("2021-07-01", "2023-12-01").map((row) => ({ label: row.label, values: row.values }));
  const compareRows = getYearlyAverages(2021, 2023).map((row) => ({ label: `${row.year}年`, values: row.values }));

  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={canonicalUrl}
        datePublished="2025-04-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人電気料金振り返り", url: "https://simulator.eic-jp.org/business-electricity-retrospective" },
          { name: "ウクライナショックとは" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <UkraineShockSeriesNav currentSlug="ukraine-shock-overview" />

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2021年後半からの燃料高に、2022年2月以降の地政学リスク、卸市場の緊張、補助政策が重なり、法人電気料金は単発ではない構造変化を経験しました。
          このページは、6本の検証特集の入口として、2019年から2025年の俯瞰と、2021年後半〜2023年の急変局面を実務向けに整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <ConclusionThreePoints
          points={[
            "2022年の上昇は単月の変動ではなく、燃料・市場・制度が重なった大きな局面だった。",
            "法人電気料金は区分や契約条件によって影響の出方が違い、同じ月でも体感差が大きかった。",
            "2026年3月のホルムズ海峡封鎖は、供給不安リスクが再び料金に波及し得ることを思い出させた。",
          ]}
        />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年から見ると何が特異だったのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年から2021年前半までは、区分差はあってもレンジは比較的読みやすい状態でした。2021年後半からはLNG・石炭・為替の同時進行で上昇圧力が増し、
            2022年にかけて4区分すべてで水準が切り上がりました。2024年以降は低下した月もありますが、2019年平均には戻り切っていません。
          </p>
          <div className="mt-4 space-y-4">
            <MultiLineChartCard
              title="2019年〜2025年の年平均推移（4区分比較）"
              description="特別高圧・高圧・低圧電力・低圧電灯の年平均単価を同一スケールで比較。ショック後の基準値上昇を俯瞰できます。"
              points={yearlyRows}
              keys={VOLTAGE_ORDER}
            />
            <MultiBarChartCard
              title="2021年→2023年の水準変化"
              description="上昇局面の前後で、どの区分の平均単価がどの程度切り上がったかを比較しています。"
              rows={compareRows}
              keys={VOLTAGE_ORDER}
            />
          </div>
          <DataNote note={DATA_DISCLAIMER} />
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ウクライナショックの法人電気料金への影響サマリー</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ウクライナショック前・ピーク時・2025年現在の主要指標を区分別に比較しました。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">指標・区分</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">ショック前（2021年平均）</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">ピーク時（2022〜2023年最高水準）</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">2025年現在（年平均）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">特別高圧 平均単価</td>
                  <td className="border-b border-slate-200 px-3 py-2">10.8円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">24.2円/kWh（2023年1月）</td>
                  <td className="border-b border-slate-200 px-3 py-2">17.4円/kWh（2019年比+41%）</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">高圧 平均単価</td>
                  <td className="border-b border-slate-200 px-3 py-2">14.3円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">27.5円/kWh（2023年1月）</td>
                  <td className="border-b border-slate-200 px-3 py-2">21.1円/kWh（2019年比+31%）</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">低圧電力 平均単価</td>
                  <td className="border-b border-slate-200 px-3 py-2">25.2円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">36.8円/kWh（2022年11月）</td>
                  <td className="border-b border-slate-200 px-3 py-2">30.2円/kWh（2019年比+15%）</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">低圧電灯 平均単価</td>
                  <td className="border-b border-slate-200 px-3 py-2">21.2円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">31.3円/kWh（2023年1月）</td>
                  <td className="border-b border-slate-200 px-3 py-2">26.9円/kWh（2019年比+19%）</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">JEPX卸市場（年度平均）</td>
                  <td className="border-b border-slate-200 px-3 py-2">FY2021: 約10〜13円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">FY2022: 20.41円/kWh（+157% vs FY2019）</td>
                  <td className="border-b border-slate-200 px-3 py-2">FY2023以降低下も、FY2019比+35%水準が継続</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※単価は当社団運営「新電力ネット」掲載データおよびJEPX公表データをもとにした参考値です。実際の契約単価は条件により異なります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2021年後半から2023年にかけて何が起きたか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021年後半に始まった上昇圧力は、2022年2月以降の緊張拡大で加速し、2022年後半から2023年前半にピーク圏へ入りました。
            2023年は補助政策が効き始めた一方、ピークからの低下は一様ではなく、契約区分ごとに戻り方が異なります。
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
            <MultiLineChartCard
              title="2021年後半〜2023年末の局面拡大"
              description="最も変動が大きかった時期を拡大し、上昇の速度と戻りの差を比較できるようにしています。"
              points={focusedRows}
              keys={VOLTAGE_ORDER}
              compact
            />
            <EventNotes items={SHOCK_EVENT_NOTES} />
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ウクライナショックの波及メカニズム（フロー図）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ウクライナ侵攻がどのような経路で日本の法人電気料金に影響したかを、段階別に整理します。
          </p>
          <div className="mt-4 space-y-1">
            {[
              { step: "1", label: "ロシアのウクライナ侵攻（2022年2月）", detail: "欧州がロシア産天然ガスからの脱却を宣言", color: "bg-red-100 border-red-200" },
              { step: "2", label: "欧州がLNGを大量調達", detail: "パイプラインガスの代替として世界中からLNGを争奪。スポット価格が70ドル/MMBtu超に", color: "bg-orange-100 border-orange-200" },
              { step: "3", label: "アジアLNG価格が連れ高", detail: "日本のLNG調達コストも急騰。長期契約分は安定だが、スポット調達分が急上昇", color: "bg-amber-100 border-amber-200" },
              { step: "4", label: "円安が追い打ち（115円→150円）", detail: "ドル建て燃料価格の上昇に加え、円安が輸入コストをさらに20〜30%押し上げ", color: "bg-yellow-100 border-yellow-200" },
              { step: "5", label: "燃料費調整額が急上昇", detail: "3〜6ヶ月のタイムラグを経て、燃調費が月々の請求額に反映。高圧で月額数十万円の増加も", color: "bg-lime-100 border-lime-200" },
              { step: "6", label: "JEPX卸市場が高騰", detail: "燃料高と需給逼迫で卸市場も連日の高値。市場連動プランの需要家に直撃", color: "bg-sky-100 border-sky-200" },
              { step: "7", label: "新電力の経営悪化・撤退", detail: "仕入れコスト急騰に耐えられず、60社超が撤退。契約解除通知が法人に送付", color: "bg-violet-100 border-violet-200" },
              { step: "8", label: "法人電気代が過去最高水準に", detail: "2022年秋〜冬にかけて、多くの法人で電気代が前年同期比50〜100%増", color: "bg-rose-100 border-rose-200" },
            ].map((item) => (
              <div key={item.step} className={`flex items-start gap-3 rounded-lg border p-3 ${item.color}`}>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-700 shadow-sm">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-0.5 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人電気料金にどう波及したか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧と高圧は、燃料・市場の変化が先に見えやすく、低圧系は補助政策の反映で請求感が変わりやすい傾向が見えます。
            実務では、調達単価の上昇そのものに加えて、契約更新時期、燃料費調整、請求月とのタイムラグを分けて説明することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助政策で何が和らいだか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助政策は請求ベースの急変を和らげましたが、燃料・調達構造由来の上昇圧力を消したわけではありません。したがって、補助期の単価を平常値と置くと、
            補助縮小・終了時に予算差異が生じます。社内説明では「補助が効いた見え方」と「実力値」を分けて示すのが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高止まり局面をどう読むか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2024〜2025年はピークアウト後の低下局面ですが、2019年対比では依然高い水準です。見積や予算は「急騰前に戻る前提」ではなく、
            平均値が一段高い前提で複数シナリオを置くほうが実務的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXデータで見るウクライナショック</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本卸電力取引所（JEPX）のスポット市場データは、ウクライナショックの影響を定量的に裏付けます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">FY2019平均: 7.93円/kWh</span> →{" "}
              <span className="font-semibold text-slate-900">FY2022平均: 20.41円/kWh（+157%）</span> — 3年間で価格が2.5倍超に上昇
            </li>
            <li>
              <span className="font-semibold text-slate-900">FY2022のスパイク: 282コマ、最高100円/kWh</span> — 市場連動プランの法人が直撃を受けた時期と一致
            </li>
            <li>
              <span className="font-semibold text-slate-900">FY2023に10.74円/kWhへ急落（-47%）</span>だが、FY2019比ではまだ+35%の水準にあり、「元に戻った」とは言えない
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            卸市場の急変は燃料費調整額を通じて法人料金に波及します。スパイク発生やボラティリティの高まりは、市場連動プランのリスクを直接的に示す指標です。
            FY2022のボラティリティ（日次標準偏差6.74）は、FY2019（1.76）の約4倍に達しており、不確実性の大きさを数字で説明できます。
          </p>
        </section>

        <HormuzInsight
          same="海外起点の供給不安が、燃料・卸市場を通じて日本の法人電気料金へ時間差で波及し得る点です。"
          diff="ウクライナショックは欧州ガス需給の長期ひっ迫色が強く、ホルムズ海峡封鎖は輸送途絶リスクの即時性が強い点が異なります。"
          actions={[
            "契約更新前に、固定単価・市場連動・調整項目の条件差を比較する。",
            "予算は単一ケースではなく、平常・上振れ・再上振れの3ケースで置く。",
            "経営層向け説明では、未確定データを断定せず、示唆として前提条件を明示する。",
          ]}
        />

        <RelatedLinks
          links={[
            { href: "/business-electricity-retrospective", label: "法人電気料金振り返りトップ" },
            { href: "/business-electricity-retrospective/high-voltage-2019-2025", label: "高圧の年次通史ページ" },
            { href: "/business-electricity-retrospective/special-high-voltage-2019-2025", label: "特別高圧の年次通史ページ" },
            { href: "/business-electricity-retrospective/ukraine-shock-and-contract-practice", label: "契約実務への波及を見る" },
          ]}
        />

        <UkraineShockPrevNext currentSlug="ukraine-shock-overview" />

        <SourceList
          items={[
            { href: "https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/summary/", label: "資源エネルギー庁 電力・ガス政策情報" },
            { href: "https://www.iea.org/topics/energy-security", label: "IEA Energy Security" },
            { href: "https://www.jepx.jp/", label: "日本卸電力取引所（JEPX）" },
            { href: "https://simulator.eic-jp.org/business-electricity-retrospective", label: "法人電気料金振り返り（新電力ネット由来データ）" },
          ]}
        />
      </section>
      </main>
    </>
  );
}
