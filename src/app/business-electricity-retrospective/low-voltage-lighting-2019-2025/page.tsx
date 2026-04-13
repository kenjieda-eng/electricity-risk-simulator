import type { Metadata } from "next";
import Link from "next/link";
import LowVoltageLightingRetrospectiveCharts from "../_components/LowVoltageLightingRetrospectiveCharts";
import {
  LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES,
  getYearlySummary,
} from "../_lib/low-voltage-lighting-price-data";

const pageTitle =
  "低圧電灯の電気料金推移（2019年～2025年）｜コロナ・燃料高・補助金の影響を年別に解説";
const pageDescription =
  "2019年から2025年までの低圧電灯の電気料金推移を年別に解説。コロナ禍による需要変化、ウクライナ危機後の燃料高、電気・ガス料金支援の影響まで、法人向けにわかりやすく整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective/low-voltage-lighting-2019-2025",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/low-voltage-lighting-2019-2025",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "低圧電灯の電気料金推移（2019年～2025年）",
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

export default function LowVoltageLightingRetrospectivePage() {
  const yearlyRows = getYearlySummary();
  const firstYear = yearlyRows[0];
  const latestYear = yearlyRows[yearlyRows.length - 1];
  const changeFrom2019 =
    firstYear && latestYear
      ? (((latestYear.averagePrice - firstYear.averagePrice) / firstYear.averagePrice) * 100).toFixed(1)
      : null;

  const peakPoint = LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES.reduce((max, current) =>
    current.price > max.price ? current : max
  );
  const bottomPoint = LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES.reduce((min, current) =>
    current.price < min.price ? current : min
  );

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/business-electricity-retrospective" className="underline-offset-2 hover:underline">法人電気料金振り返り</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">低圧電灯 料金推移</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          低圧電灯の電気料金は、2019年から2025年にかけて大きく変動しました。2020年から2021年は低下傾向で推移
          しましたが、2022年には燃料高の影響で急上昇し、その後も高止まりしながら推移しています。店舗・小規模
          オフィスなどの照明系契約では、単価変動が毎月のコスト感に直結するため、年次で流れを確認することが重要です。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年平均の推移</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          年平均の推移を見ると、低圧電灯の平均単価は2019年が22.7円/kWh、2020年が21.4円/kWh、2021年が
          21.2円/kWhでした。そこから2022年に26.8円/kWhへ急上昇し、2023年は25.5円/kWh、2024年は26.4円/kWh、
          2025年は26.9円/kWhと高水準が続いています。2019年比では
          {changeFrom2019 !== null ? `約${changeFrom2019}%高い` : "高い"}水準です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          月次データではピークが{peakPoint.date.slice(0, 7).replace("-", "年")}月の
          {peakPoint.price.toFixed(1)}円/kWh、ボトムが{bottomPoint.date.slice(0, 7).replace("-", "年")}月の
          {bottomPoint.price.toFixed(1)}円/kWhでした。
        </p>

        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full border-collapse text-sm sm:text-base">
            <thead className="bg-slate-100">
              <tr>
                <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">年</th>
                <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                  年平均単価（円/kWh）
                </th>
                <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">前年比</th>
              </tr>
            </thead>
            <tbody>
              {yearlyRows.map((row) => (
                <tr key={row.year} className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">{row.year}</td>
                  <td className="border-b border-slate-200 px-3 py-2">{row.averagePrice.toFixed(1)}</td>
                  <td className="border-b border-slate-200 px-3 py-2">
                    {row.yearOverYear === null
                      ? "-"
                      : `${row.yearOverYear > 0 ? "+" : ""}${row.yearOverYear.toFixed(1)}%`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <LowVoltageLightingRetrospectiveCharts />
      </section>

      <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">7年間を3つのフェーズで読む</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2019年から2025年の推移は、大きく3つのフェーズに分けると構造的な変化を整理しやすくなります。
        </p>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-emerald-800">フェーズ1：安定・低下期（2019〜2021年前半）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              コロナ禍による需要減と燃料安が重なり、低圧電灯の年平均は22.7円→21.2円/kWhへと緩やかに低下しました。
              低圧電灯は照明・コンセント系の一般家庭・小規模店舗・事務所が対象で、需要家数が最も多い区分です。
              この時期の水準が「コロナ前の基準値」として、後の急騰の比較対象になります。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-red-800">フェーズ2：急騰・危機期（2021年後半〜2023年初頭）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              LNG価格急騰・ウクライナ侵攻・円安の三重苦で単価が上昇し、低圧電灯の年平均は21.2円→26.8円/kWhへ+26%超の急騰となりました。
              月次では31円台の高値も記録し、一般家庭・店舗・小規模事務所にとって電気代の急増が家計・経営双方に大きな影響を与えました。
              大手電力会社が規制料金の値上げ申請を相次いで実施したのもこの局面で、2023年6月に多くの大手電力が規制料金を大幅値上げしました。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-amber-800">フェーズ3：高止まり・構造変化期（2023年中盤〜2025年）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              補助金効果で急騰は一服しましたが、低圧電灯の年平均は2025年も26.9円/kWhとコロナ前比+19%の高止まりです。
              規制料金の値上げが恒久的に単価水準を切り上げたことに加え、容量拠出金・再エネ賦課金という固定的コストが下値を支えており、
              「補助金が終わっても元の水準には戻らない」構造変化が起きています。
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2019年：コロナ前の比較的安定した水準</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2019年の低圧電灯は、年平均で22.7円/kWhでした。月別では21.7円～23.2円/kWhの範囲で推移しており、
          年内の振れ幅は限定的です。後年と比べると、この年は低圧電灯単価が比較的安定していた時期といえます。
          再エネ賦課金が2.95円/kWhと年々増加する中でも、燃料費調整額の変動は小さく、多くの需要家にとって
          電気代を予測・管理しやすい時期でした。規制料金の単価体系は大きく変更されておらず、単価水準は安定していました。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2020年：コロナ禍で低下基調に</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2020年の年平均は21.4円/kWhで、2019年の22.7円/kWhから約5.7%低下しました。年後半にかけて下がる流れが続き、12月は
          19.7円/kWhまで低下しています。新型コロナウイルス感染拡大による緊急事態宣言・外出自粛で飲食店・小売店・
          サービス業の照明系電力需要が大幅に減少しました。
          世界的な需要減と燃料価格の軟化が燃料費調整額を引き下げ、低圧電灯の単価にも反映された年でした。
          この年の低下は一時的なものでしたが、2020年の水準が後年の急騰比較の基準になっています。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2021年：低水準で推移しつつ後半に持ち直し</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2021年の年平均は21.2円/kWhで、2020年の21.4円/kWhからわずかに低下しました（前年比約0.9%低下）。
          前半は19円台中心でしたが、年後半には22円台まで戻しており、翌年の上昇局面につながる変化が見られます。
          この上昇の背景は、コロナ禍からの経済活動再開に伴う電力需要の回復と、LNGスポット価格の上昇が燃料費調整に反映され始めたことです。
          照明・コンセント系の低圧電灯は需要家数が最も多い区分のため、単価変化の社会的影響も大きく、
          後半の上昇傾向は翌2022年の本格急騰の予兆として位置づけられます。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2022年：燃料高で急上昇、31円台まで到達</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2022年の年平均は26.8円/kWhで、2021年（21.2円）から前年比26.4%増の大幅上昇でした。1月22.9円/kWhから12月31.2円/kWhへ
          一気に上がり、低圧電灯でも仕入環境の悪化が強く反映された年です。
          2022年2月のウクライナ侵攻をきっかけに国際エネルギー価格が急騰し、LNG輸入コストが急増しました。
          円安（115円→150円近辺）も輸入コストを押し上げ、燃料費調整額がプラス方向に大きく振れました。
          低圧電灯は規制料金との関係が深い区分のため、大手電力各社が相次いで燃料費調整の上限撤廃・見直しを行い、
          需要家への影響が大きく拡大した局面でもあります。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2023年：補助金が下支えするも高値圏が続く</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2023年の年平均は25.5円/kWhで、2022年（26.8円）から4.9%低下しました。ただし年初は31.3円/kWhと非常に高く、
          年間を通じて24〜26円台中心の高値圏です。政府の電気・ガス価格激変緩和対策による値引きが下支えしましたが、
          補助を除いた実力値は依然高く、平時水準には戻っていません。
          2023年6月には大手電力各社の規制料金値上げが実施され、低圧電灯の単価水準が構造的に切り上がりました。
          この規制料金値上げは過去最大級のものとなり、以後の単価の下限が大きく引き上げられた歴史的転換点です。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2024年：再び上昇し、夏場に29円台</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2024年の年平均は26.4円/kWhで、2023年（25.5円）から前年比3.5%上昇しました。夏場にかけて上昇し、7月は29.0円/kWhまで
          上がっています。2024年度から容量拠出金の本格賦課が始まり、規制料金値上げ後の単価底上げとあわせて固定的なコスト要因が増大しました。
          激変緩和補助金の縮小・終了も価格の戻りを加速させた要因です。
          低圧電灯は需要家数が多く、単価水準の変化が広い業種・家庭に影響する点が特徴であり、
          社会的な節電意識の高まりや省エネ機器への切り替えが加速した年でもあります。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2025年：高止まりのまま年平均は26.9円/kWh</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2025年の年平均は26.9円/kWhで、2024年（26.4円）からさらに1.9%上昇しました。年内では25円台後半〜28円台後半で
          推移しており、低圧電灯単価は依然としてコロナ前より高い水準にあります。2019年（22.7円）比で約19%高い水準です。
          2023年の規制料金大幅値上げが単価の恒久的な底上げをもたらし、補助金が終了した後も以前の水準には戻らない構造が定着しています。
          容量拠出金・再エネ賦課金の高止まりも下値を形成しており、燃料価格が下がっても単価が大きく低下しにくい環境が続いています。
          店舗・小規模事務所・一般家庭にとって、電気代の「高止まり」を前提とした支出管理が求められる状況です。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2019年～2025年の低圧電灯の電気料金推移から読み取れること</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          この7年間の推移は、(1)2019〜2021年の低下・安定、(2)2022年の急上昇、(3)2023〜2025年の高止まり局面、
          の3段階で整理できます。低圧電灯は、照明・コンセント用途を中心とする契約のため、幅広い業種で実務的な影響が
          大きい区分です。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          価格判断では、「単月で下がったか」だけでなく、年平均の位置、ピーク月とボトム月、政策支援の有無を合わせて
          見ることが重要です。予算策定・契約見直し・社内説明の精度を高めるには、長期の推移を構造的に把握する視点が
          欠かせません。
        </p>

        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">まとめ</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電灯の電気料金は、2019年の22.7円/kWhから、2025年は26.9円/kWhへ上昇しました。2020年から2021年は
            低下傾向でしたが、2022年に急騰し、2023年以降も高止まり水準が続いています。今後の判断でも、単月だけでなく
            年次推移と政策影響をセットで確認することが実務上重要です。
          </p>
        </div>
      </section>
    </main>
  );
}
