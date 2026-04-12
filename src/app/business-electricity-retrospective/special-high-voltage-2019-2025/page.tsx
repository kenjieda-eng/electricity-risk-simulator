import type { Metadata } from "next";
import RetrospectiveCharts from "../_components/RetrospectiveCharts";
import {
  EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES,
  getYearlySummary,
} from "../_lib/extra-high-voltage-price-data";

const pageTitle =
  "特別高圧の電気料金推移（2019年～2025年）｜コロナ・ウクライナ危機・補助金の影響を年別に解説";
const pageDescription =
  "2019年から2025年までの特別高圧の電気料金推移を年別に解説。コロナ禍による需要減、ウクライナ危機後の燃料高、電気・ガス料金支援の影響まで、法人向けにわかりやすく整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/business-electricity-retrospective/special-high-voltage-2019-2025",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/special-high-voltage-2019-2025",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "特別高圧の電気料金推移（2019年～2025年）",
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

export default function SpecialHighVoltageRetrospectivePage() {
  const yearlyRows = getYearlySummary();
  const firstYear = yearlyRows[0];
  const latestYear = yearlyRows[yearlyRows.length - 1];
  const changeFrom2019 =
    firstYear && latestYear
      ? (((latestYear.averagePrice - firstYear.averagePrice) / firstYear.averagePrice) * 100).toFixed(1)
      : null;

  const peakPoint = EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES.reduce((max, current) =>
    current.price > max.price ? current : max
  );
  const bottomPoint = EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES.reduce((min, current) =>
    current.price < min.price ? current : min
  );

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          特別高圧の電気料金は、2019年から2025年にかけて大きく動きました。2019年から2021年は比較的低い
          水準で推移していましたが、2022年のロシアによるウクライナ侵攻を境に、燃料価格と電力価格が急騰しました。
          2023年以降は政府支援で一定の押し下げが入った一方、2025年時点でもコロナ前の水準には戻っていません。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年平均の推移</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          年平均の推移を見ると、特別高圧の平均単価は2019年が12.3円/kWh、2020年が11.2円/kWh、2021年が
          10.8円/kWhでした。そこから2022年に17.1円/kWhへ急上昇し、2023年は21.2円/kWhとさらに上がっています。
          2024年は18.2円/kWh、2025年は17.4円/kWhまでやや低下しましたが、それでも2019年比では
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

        <RetrospectiveCharts />
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
              コロナ禍による需要減と燃料安が重なり、特別高圧の年平均は12.3円→10.8円/kWhへと緩やかに低下しました。
              特別高圧は大規模工場・鉄道・データセンターなど大口需要家が対象のため、産業活動の停滞が単価に直接反映されやすい区分です。
              この時期の水準が「コロナ前の基準値」として、後の急騰の比較対象になります。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-red-800">フェーズ2：急騰・危機期（2021年後半〜2023年初頭）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              LNG価格急騰・ウクライナ侵攻・円安の三重苦で単価が歴史的水準に達しました。
              特別高圧の年平均は10.8円→21.2円/kWhへ、わずか2年で+96%超という急騰を記録しています。
              大口需要家は市場連動契約の比率が高いため、JEPX価格の高騰がほぼダイレクトに調達コストに反映され、
              製造業や鉄道事業者を中心に電気代が経営上の最重要課題として浮上しました。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-amber-800">フェーズ3：高止まり・構造変化期（2023年中盤〜2025年）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              補助金効果で見かけ上は沈静化しましたが、2025年の年平均17.4円/kWhはコロナ前比で+41%の高止まりです。
              特別高圧向けの補助単価は高圧より低く設定されたため、絶対値での負担感が大きく残りました。
              容量拠出金の本格徴収開始や再エネ賦課金の高止まりという新たなコスト要因も加わり、「燃料安でも下がりにくい」構造が定着しています。
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2019年：コロナ前の比較的安定した水準</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2019年の特別高圧は、年平均で12.3円/kWhでした。月別では11.6円～13.0円/kWhの範囲に収まり、
          年間を通じて大きな乱高下は見られません。後年と比べると、この年は特別高圧の電気料金がまだ落ち着いた
          レンジにあった時期といえます。企業にとって2019年は、電気料金の見積や予算策定を比較的行いやすい時期でした。
          大規模工場・鉄道・データセンターなど特別高圧の需要家にとって、単価水準は比較的コントロールしやすく、
          長期固定契約を更新しやすい環境が続いていました。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2020年：コロナ禍で需要が落ち、電気料金も低下</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2020年の年平均は11.2円/kWhで、2019年の12.3円/kWhから約9%低下しました。特に年後半にかけて下がり、12月は
          9.7円/kWhまで低下しています。背景には、新型コロナウイルス感染拡大による世界的な需要減があります。
          IMFも、2020年初頭にはコロナ禍で経済活動が急停止し、石油需要が急減、原油価格が大きく下落したと整理しています。
          特別高圧の大口需要家（製造業・鉄道・大型商業施設）は稼働率低下と単価低下が重なり、
          電気代の絶対額が大幅に圧縮された事業者も多くありました。JEPX卸価格も低水準で推移し、市場連動契約の需要家は恩恵を受けた局面です。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2021年：まだ低水準だが、後半から上昇基調へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2021年の年平均は10.8円/kWhで、2020年の11.2円/kWhからさらにわずかに低下しました（前年比約3.6%低下）。
          ただし、月別に見ると前半の9.6円～10円台前半から、年末には12.4円/kWhまで上がっており、年後半から明確に上昇基調へ転じています。
          IEAは、2021年以降の価格上昇要因として、急速な経済回復、天候要因、メンテナンス遅れ、供給の引き締まりを
          指摘しており、2022年危機の前段階として理解することが重要です。
          特にアジアのLNG需要回復が顕著で、アジア向けスポット価格（JKM）が年後半に急騰しました。
          2021年冬の電力需給ひっ迫とJEPX価格急騰は特別高圧の市場連動契約に影響し、大口需要家の調達コストが年後半に急上昇しています。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          2022年：ウクライナ危機で急騰、特別高圧の電気料金が一気に跳ね上がる
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2022年の年平均は17.1円/kWhで、2021年（10.8円）から前年比58.3%増という歴史的な急上昇でした。1月の12.8円/kWhから12月には
          23.1円/kWhまで上がり、年間を通じて右肩上がりに近い動きです。最大の転機は、2022年2月24日のロシアに
          よるウクライナ侵攻です。IEAもこの侵攻を世界的なエネルギー危機の引き金と位置づけています。
          LNGスポット価格が過去最高水準に達し、円安（年間で115円→150円近辺）も輸入コストを直撃しました。
          大口の特別高圧需要家は市場連動契約の比率が高く、JEPX価格の高騰がほぼダイレクトに調達コストに反映されました。
          製造業や鉄道事業者を中心に電気代が経営上の最重要課題として急浮上した年です。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          2023年：補助金が始まってもなお高い、年平均は21.2円/kWh
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2023年の年平均は21.2円/kWhで、2022年（17.1円）からさらに23.6%上昇しました。1月23.9円/kWh、2月24.2円/kWh、
          4月24.2円/kWhと非常に高い水準が続きます。政府の電気・ガス価格激変緩和対策により特別高圧向け1.8円/kWh値引きが入った年
          ですが、それでも年平均が高いのは、燃料高騰の影響が年初に強く残り、市場価格の高止まりが続いたためです。
          2023年6月には大手電力の規制料金値上げが実施され、特別高圧の自由化料金にも間接的な影響が出ました。
          大口需要家の間では自家発電・PPAへの切り替えや省エネ設備投資が加速した年でもあります。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          2024年：補助金と市況の落ち着きで低下、ただし高止まり感は続く
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2024年の年平均は18.2円/kWhで、2023年（21.2円）から前年比14.1%低下しました。2023年より下がったものの、2019年の
          12.3円/kWhと比べると依然として高水準です。月次レンジも17.7円〜18.6円/kWhに収まり、急騰局面は
          抜けましたが、企業の予算感覚としては「平常値が一段切り上がった」状態が続いています。
          LNG価格の落ち着きと激変緩和補助金の継続が下押し要因となった一方、2024年度から容量拠出金の本格賦課が始まり、
          特別高圧の大口需要家にとっては相当規模の固定コスト増となりました。
          製造業の中には電力調達先の見直しや複数年固定契約への切り替えを進める動きも増加しました。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2025年：やや低下するが、依然としてコロナ前より高い</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2025年の年平均は17.4円/kWhで、2024年（18.2円）からさらに4.4%低下しました。月別では年初18.3円/kWh前後から、
          秋にかけて16.6円〜16.9円/kWhまで下がっています。政策支援の継続は下押し要因となった一方、年平均で見れば
          2019年比で約41%高く、「落ち着いたが安くはない」状態です。
          容量拠出金・再エネ賦課金が定着したことで単価の下限が切り上がっており、
          燃料価格がさらに下がっても特別高圧の単価が2019年水準に戻ることは構造的に難しい局面になっています。
          大口需要家にとって、「電気代が安い時期」を前提とした事業計画は見直しが必要な時代となりました。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          2019年～2025年の特別高圧の電気料金推移から読み取れること
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          この7年間の推移は、(1)2019〜2021年の低位安定、(2)2022〜2023年の急騰、(3)2024〜2025年の高止まり下での
          低下、の3局面に分けられます。特別高圧の電気代は、もはや一時的な変動費ではなく、国際情勢・燃料価格・政策対応
          の影響を強く受ける経営コストです。コロナ禍では需要減で下がり、ウクライナ危機では急騰し、補助金で押し下げられる
          という流れが明確に確認できます。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金を判断する際は、「今年は上がった・下がった」だけでなく、どの年に何が起きたか、補助金が入っている
          時期かどうか、単価への反映タイミングはどうか、をあわせて確認することが重要です。予算策定、契約見直し、社内説明、
          設備投資判断の精度向上のためにも、推移の構造的理解が欠かせません。
        </p>

        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">まとめ</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧の電気料金は、2019年の12.3円/kWhから、2025年でも17.4円/kWhと高い水準にあります。2020年は
            コロナ禍で低下、2022年はウクライナ危機で急騰、2023年は補助金があってもなお高止まり、2024年と2025年は
            やや低下したものの、コロナ前には戻っていません。今後も、燃料市況、為替、政策支援、需給ひっ迫の有無により、
            特別高圧の電気料金は変動し続けると考えられます。
          </p>
        </div>
      </section>
    </main>
  );
}
