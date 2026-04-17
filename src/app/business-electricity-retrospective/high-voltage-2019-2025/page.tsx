import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";
import HighVoltageRetrospectiveCharts from "../_components/HighVoltageRetrospectiveCharts";
import { HIGH_VOLTAGE_MONTHLY_PRICES, getYearlySummary } from "../_lib/high-voltage-price-data";

const pageTitle =
  "高圧の電気料金推移（2019年～2025年）｜コロナ・ウクライナ危機・補助金の影響を年別に解説";
const pageDescription =
  "2019年から2025年までの高圧の電気料金推移を年別に解説。コロナ禍による需要減、ウクライナ危機後の燃料高、電気・ガス料金支援の影響まで、法人向けにわかりやすく整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["高圧 電気料金 推移", "高圧 2019 2025", "法人 電気代 長期推移", "高圧 コロナ ウクライナ", "高圧 電力見直し"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective/high-voltage-2019-2025",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/high-voltage-2019-2025",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "高圧の電気料金推移（2019年～2025年）",
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

export default function HighVoltageRetrospectivePage() {
  const yearlyRows = getYearlySummary();
  const firstYear = yearlyRows[0];
  const latestYear = yearlyRows[yearlyRows.length - 1];
  const changeFrom2019 =
    firstYear && latestYear
      ? (((latestYear.averagePrice - firstYear.averagePrice) / firstYear.averagePrice) * 100).toFixed(1)
      : null;

  const peakPoint = HIGH_VOLTAGE_MONTHLY_PRICES.reduce((max, current) =>
    current.price > max.price ? current : max
  );
  const bottomPoint = HIGH_VOLTAGE_MONTHLY_PRICES.reduce((min, current) =>
    current.price < min.price ? current : min
  );

  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/business-electricity-retrospective/high-voltage-2019-2025"
        datePublished="2025-04-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人電気料金振り返り", url: "https://simulator.eic-jp.org/business-electricity-retrospective" },
          { name: "高圧の推移（2019-2025年）" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/business-electricity-retrospective" className="underline-offset-2 hover:underline">法人電気料金振り返り</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">高圧 料金推移</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          高圧の電気料金は、2019年から2025年にかけて大きく変動しました。2019年から2021年は緩やかな低下傾向で
          推移していましたが、2022年のロシアによるウクライナ侵攻をきっかけに燃料価格と電力価格が急騰しました。
          2023年以降は政府支援で一定の押し下げが入った一方、2025年時点でもコロナ前の水準には戻っていません。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年平均の推移</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          年平均の推移を見ると、高圧の平均単価は2019年が16.1円/kWh、2020年が14.7円/kWh、2021年が14.3円/kWh
          でした。そこから2022年に20.6円/kWhへ急上昇し、2023年は23.0円/kWhとさらに上がっています。2024年は
          21.5円/kWh、2025年は21.1円/kWhまでやや低下しましたが、それでも2019年比では
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

        <HighVoltageRetrospectiveCharts />
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
              コロナ禍による産業活動の停滞と世界的な燃料需要の急減が重なり、高圧の年平均は16.1円→14.3円/kWhへと緩やかに低下しました。
              この時期の水準が「コロナ前・コロナ禍の基準値」として、後の急騰の比較対象になります。
              中規模工場・病院・学校・商業施設にとっては、電気料金の予算策定を行いやすい環境が続いていました。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-red-800">フェーズ2：急騰・危機期（2021年後半〜2023年初頭）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              LNG価格急騰・ウクライナ侵攻・円安の三重苦で単価が歴史的水準に達しました。
              高圧の年平均は14.3円→23.0円/kWhへ、わずか2年で+61%超の急騰となっています。
              JEPX卸市場も連日の高値となり、新電力の撤退ラッシュ・最終保障供給への移行急増・法人の予算超過が相次ぎました。
              この局面では、固定単価契約と市場連動契約で受ける影響が大きく分かれた点も特徴です。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-amber-800">フェーズ3：高止まり・構造変化期（2023年中盤〜2025年）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              政府の激変緩和補助金で見かけ上は沈静化しましたが、補助を除いた実力値はコロナ前比で+30〜40%の高止まりです。
              高圧の年平均は2025年も21.1円/kWhと、2019年の16.1円/kWhには戻っていません。
              容量拠出金・再エネ賦課金増という新たなコスト要因も加わり、「燃料安でも下がりにくい」構造が定着しつつあります。
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2019年：コロナ前の比較的安定した水準</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2019年の高圧は、年平均で16.1円/kWhでした。月別では15.3円～16.8円/kWhの範囲に収まり、年間を通じて
          緩やかな変動にとどまっています。後年と比べると、この年は高圧の電気料金がまだ落ち着いたレンジにあった
          時期です。中規模工場、病院、学校、商業施設などの需要家にとって、見積や予算策定を比較的行いやすい環境でした。
          再エネ賦課金は2019年度で2.95円/kWhと上昇傾向にあったものの、燃料費調整は比較的安定しており、単価全体の変動幅は小さく抑えられていました。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2020年：コロナ禍で需要が落ち、電気料金も低下</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2020年の年平均は14.7円/kWhで、2019年の16.1円/kWhから約8.7%低下しました。特に年後半にかけて下がり、12月は
          13.1円/kWhまで低下しています。背景には、新型コロナウイルス感染拡大による世界的な需要減があります。
          IMFも、2020年初頭にはコロナ禍で経済活動が急停止し、石油需要が急減、原油価格が大きく下落したと整理しています。
          工場・病院・商業施設の稼働率低下が重なり、JEPX卸価格も低水準で推移したことで、燃料費調整の下振れが高圧単価を押し下げました。
          緊急事態宣言による自粛要請が需要に直撃し、前年より電気代が下がった法人も多い時期でした。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2021年：まだ低水準だが、後半から上昇基調へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2021年の年平均は14.3円/kWhで、2020年の14.7円/kWhからさらにわずかに低下しました（前年比約2.7%低下）。
          ただし、月別に見ると前半の12.9円～14.2円/kWhから、年末には15.6円/kWhまで上がっており、後半から上昇基調に転じています。
          IEAは、2021年以降の価格上昇要因として、急速な経済回復、天候要因、メンテナンス遅れ、供給の引き締まりを
          指摘しており、2022年危機の前段階として理解することが重要です。
          特にアジアのLNG需要回復とEU圏のガス在庫不足が重なり、秋以降のLNG価格が急上昇しました。
          2021年冬には日本でも電力需給ひっ迫注意報が発令され、JEPX価格が急騰する局面が発生しています。
          この後半の動きが、2022年の本格的な高騰への助走期間にあたります。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          2022年：ウクライナ危機で急騰、高圧の電気料金が一気に跳ね上がる
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2022年はロシアのウクライナ侵攻（2月24日）を契機に国際エネルギー価格が急騰し、高圧の年平均は20.6円/kWhへ急上昇しました（前年比+44.1%）。
          1月の15.8円/kWhから12月には27.0円/kWhまで上がり、年間を通じて右肩上がりに近い動きです。
          LNGスポット価格が年中盤に70ドル/MMBtu超に達し、円安（年間で115円→150円近辺）も輸入コストを押し上げました。
          JEPX卸市場も連日高値となり、特に秋〜冬に単価が急伸しています。
          IEAもこの侵攻を世界的なエネルギー危機の引き金と位置づけており、新電力の撤退が相次ぎ、この年だけで多数の小売電気事業者が高圧向け新規受付を停止しました。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2023年：補助金が始まってもなお高い、年平均は23.0円/kWh</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2023年の年平均は23.0円/kWhで、2022年（20.6円）からさらに11.7%上昇しました。1月27.5円/kWh、2月24.7円/kWh、
          4月24.8円/kWhと非常に高い水準が続きます。政府の電気・ガス価格激変緩和対策（高圧向け3.5円/kWh値引き）により
          ある程度の下支えが入りましたが、それでも年平均が2022年を上回ったのは、燃料高騰の影響が年初に強く残り、
          市場価格の高止まりが継続したためです。
          また、2023年6月には大手電力会社の規制料金値上げが実施され、燃料費調整と規制料金値上げが重なる形で、
          高圧の単価下限が構造的に切り上がった年でもあります。新電力から大手電力へ戻る逆流現象も顕著でした。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          2024年：補助金と市況の落ち着きで低下、ただし高止まり感は続く
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2024年の年平均は21.5円/kWhで、2023年（23.0円）から前年比6.5%低下しました。2023年より下がったものの、2019年の
          16.1円/kWhと比べると依然として高水準です。月次レンジも20.3円〜22.9円/kWhに収まり、急騰局面は
          抜けましたが、企業の予算感覚としては「平常値が一段切り上がった」状態が続いています。
          LNG価格の落ち着きと激変緩和補助金の継続が下押し要因となった一方、2024年度からは容量拠出金の本格賦課が始まり、
          新たな固定的コストが単価に上乗せされました。補助金終了後の単価水準が注目された年でもあります。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2025年：やや低下するが、依然としてコロナ前より高い</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2025年の年平均は21.1円/kWhで、2024年（21.5円）からさらに1.9%低下しました。月別では年初22.2円/kWh前後から、
          秋にかけて19.7円〜20.1円/kWhまで下がっています。政策支援の継続は下押し要因となった一方、年平均で見れば
          2019年比で約31%高く、「落ち着いたが安くはない」状態です。
          再エネ賦課金は高水準を維持し、容量拠出金も完全定着しているため、燃料市況が落ち着いても単価の下限は高圧で20円前後が続く構造になっています。
          法人の予算策定や設備投資の意思決定において、この「恒久的に切り上がった単価水準」を前提とすることが不可欠な年となりました。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2019年～2025年の高圧の電気料金推移から読み取れること</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          この7年間の推移は、(1)2019〜2021年の低位安定、(2)2022〜2023年の急騰、(3)2024〜2025年の高止まり下での
          低下、の3局面に分けられます。高圧の電気代は、国際情勢・燃料価格・政策対応の影響を強く受ける経営コストです。
          コロナ禍では需要減で下がり、ウクライナ危機では急騰し、補助金で押し下げられるという流れが明確に確認できます。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金を判断する際は、「今年は上がった・下がった」だけでなく、どの年に何が起きたか、補助金が
          入っている時期かどうか、単価への反映タイミングはどうか、をあわせて確認することが重要です。予算策定、
          契約見直し、社内説明、設備投資判断の精度向上のためにも、推移の構造的理解が欠かせません。
        </p>

        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">まとめ</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧の電気料金は、2019年の16.1円/kWhから、2025年でも21.1円/kWhと高い水準にあります。2020年は
            コロナ禍で低下、2022年はウクライナ危機で急騰、2023年は補助金があってもなお高止まり、2024年と2025年は
            やや低下したものの、コロナ前には戻っていません。今後も、燃料市況、為替、政策支援、需給ひっ迫の有無により、
            高圧の電気料金は変動し続けると考えられます。
          </p>
        </div>
      </section>
      </main>
    </>
  );
}
