import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import { getMonthlyPageData } from "../_lib/monthly-page-data";
import { MonthlyDataCards, MonthlyTrendChart, YearComparisonTable } from "../_components/MonthlyVisuals";

const pageTitle = "【2025年10月】法人の電気料金はどう動いた？激変緩和補助金の正式終了月";
const pageDescription =
  "2025年10月使用分の法人向け電気料金動向を、低圧・高圧・特別高圧ごとに整理。激変緩和措置正式終了により初めて実力値ベースの請求が全面化した月の変化を解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective/2025-10",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/2025-10",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "2025年10月の法人向け電気料金動向",
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

export default function BusinessElectricityRetrospective202510Page() {
  const monthlyData = getMonthlyPageData(2025, 10);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2025年10月】法人の電気料金はどう動いた？</h1>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          激変緩和補助金の正式終了月・実力値ベースの請求が初めてフルに見える月
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2025年10月使用分の法人向け電気料金は、政府による激変緩和措置（電気料金補助）が正式に終了した、極めて重要な節目の月です。
          当社団が運営している「新電力ネット」のデータでは、この時期から電気料金が補助なしの実力値ベースで確認できるようになり、
          9月以前に比べて明確な上昇が見られます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          低圧では29〜30円/kWh程度、高圧では20〜21円/kWh程度、特別高圧では16〜17円/kWh程度の水準となっています。
          補助が入っていた時期と比較すると、低圧では数円/kWh以上の上昇が一度に顕在化したケースも多く、
          企業によっては請求書を見て初めて影響の大きさを実感した月でもあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          容量拠出金・再エネ賦課金の継続上乗せも、実力値を押し上げる構造要因として働き続けています。
          10月は補助終了という「一回限りのショック」ではなく、今後の電気料金水準を判断するための新しい基準点となる月です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          この記事では、当社団が運営している「新電力ネット」のデータと政府の公表情報をもとに、
          2025年10月使用分の電気料金動向を、低圧・高圧・特別高圧ごとに法人向けに整理します。
        </p>
      </header>

      {monthlyData && <MonthlyDataCards data={monthlyData} />}

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2025年10月の結論3点</h2>
          <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              2025年10月使用分は、激変緩和措置が正式終了した月であり、補助なし実力値ベースの料金が初めてフルに請求に反映されました。
              低圧では29〜30円/kWh程度と、補助あり時代の感覚から大きく乖離した水準です。
            </li>
            <li>
              低圧・高圧・特別高圧のすべてで、補助終了の影響が一斉に顕在化しています。加えて容量拠出金・再エネ賦課金の
              継続上乗せが実力値をさらに押し上げる構造となっています。
            </li>
            <li>
              10月は補助終了という「イベント月」ですが、その後11月・12月と暖房需要が加わりさらに上昇が続きます。10月の水準が
              「底」ではなく「新しいスタートライン」である点を企業は認識する必要があります。
            </li>
          </ol>
        </section>

        {monthlyData && <MonthlyTrendChart data={monthlyData} />}
        {monthlyData && <YearComparisonTable data={monthlyData} />}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ2025年10月使用分は大きく上がったのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年10月使用分の上昇を理解するには、まず激変緩和措置がどのような仕組みで電気料金を押し下げていたかを把握する必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            政府による電気料金補助（激変緩和措置）は、燃料価格高騰を受けて2023年から実施され、低圧・高圧向けに1kWhあたり数円の補助を
            電力会社を通じて消費者に還元するものでした。この補助が2025年10月をもって正式に終了したため、
            それまで見えにくくなっていた実力値がそのまま請求額に出るようになりました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            当社団が運営している「新電力ネット」のデータでも、9月から10月にかけての変化として上昇が明確に現れており、
            特に低圧の変化幅が大きくなっています。これは低圧が高圧よりも補助単価が大きかったため、
            終了によるインパクトも大きく出やすい構造になっていたためです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            加えて、容量拠出金は2024年から本格的な適用が始まっており、2025年10月時点でも継続してコストに上乗せされています。
            再エネ賦課金も同様に継続しており、補助終了と構造コストの継続が重なった月として10月は特に重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">低圧の電気料金動向</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧は、小規模事業所や店舗などで使われる契約区分です。2025年10月使用分では29〜30円/kWh程度の水準となっており、
            補助があった時期と比べると明確な上昇となっています。低圧は補助単価が最も大きかった区分のため、
            終了インパクトも最も顕著に表れます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実務上は、10月使用分の請求が11月に届くため、多くの事業者は11月の請求書を見て初めて「補助終了の現実」を
            実感することになります。前月比で請求額が大幅に増加している場合、誤請求ではなく補助終了による正規の変化です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>コンビニ、物販店、ドラッグストアなどの小売業</li>
            <li>飲食店、カフェ、ベーカリーなどの店舗業態</li>
            <li>クリニック、サロン、整骨院などのサービス業</li>
            <li>小規模オフィス、営業所、学習塾などの拠点</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            低圧の事業者は、まず10月使用分の請求書を「補助なし実力値の初確認」として丁寧に読み解くことが重要です。
            基本料金・電力量料金・燃料費調整額・再エネ賦課金・容量拠出金の各内訳を確認し、今後の予算の基準を
            実力値ベースに切り替えるタイミングです。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧の電気料金動向</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧は、工場、病院、学校、商業施設、物流施設、オフィスビルなどで広く使われる契約区分です。2025年10月使用分では
            20〜21円/kWh程度の水準となり、補助終了の影響が低圧と比べると単価ベースでは小さいものの、
            使用量が大きいため総額への影響は大きくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧では、補助終了と並行して燃料費調整額の変動、デマンドチャージの管理、契約容量との乖離など、
            複合的なコスト要因を継続的に管理する必要があります。10月を機に、請求書の詳細内訳を再確認することを
            お勧めします。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>中規模工場、加工場、食品工場</li>
            <li>スーパー、ショッピング施設、量販店</li>
            <li>病院、介護施設、学校法人</li>
            <li>倉庫、物流拠点、配送センター</li>
            <li>延床面積の大きいオフィスビル</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧の事業者にとって10月は、補助終了後の実力値を初めて正確に把握できる月です。この水準を記録し、
            11月以降の暖房需要増加による追加上昇を予測するための基準データとして活用してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧の電気料金動向</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧は、大規模工場、データセンター、大型商業施設、自治体の基幹施設などが中心です。2025年10月使用分では
            16〜17円/kWh程度の水準となっています。特別高圧は元来補助対象外であったため、他の区分と異なり
            「補助終了による変化」は直接的には発生していません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし、特別高圧も容量拠出金の継続上乗せや再エネ賦課金の影響は受けており、水準としては
            燃料価格と市場需給の動向が主要な変動要因です。10月は秋の需給バランスが比較的安定している時期ですが、
            11月以降の暖房需要増加に伴い上昇が想定されます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>素材、化学、金属、機械などの大規模工場</li>
            <li>24時間稼働の生産拠点</li>
            <li>データセンターや大規模サーバー施設</li>
            <li>大型商業施設や再開発拠点</li>
            <li>自治体の上下水道施設や大型公共施設</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧の事業者にとって10月は、低圧・高圧が補助終了という一大転換点を迎える中で、
            自社が相対的にどのポジションにいるかを確認する機会でもあります。冬季に向けた燃料・需給リスクの
            先読みが特に重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな企業が2025年10月の影響を受けやすかったか</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              低圧中心で、補助終了の影響が一気に出た企業: 多店舗展開の小売業・飲食チェーン・サービス業。
              補助単価が大きかった区分のため、終了インパクトも最大。11月請求書での大幅増加に注意が必要。
            </li>
            <li>
              高圧中心で、使用量が大きく総額インパクトが大きい企業: 工場・物流施設・病院・商業施設。
              単価上昇幅は低圧ほどではないが、使用量が多いため総額変化は大きい。
            </li>
            <li>
              特別高圧で、補助終了の直接影響は小さいが燃料リスクが続く企業: 大規模製造業・データセンター。
              冬場の燃料価格上昇に引き続き備える必要がある。
            </li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2025年10月使用分は、全ての法人にとって電気料金の「新しい現実」が始まった月です。影響の大きさは契約区分と
            使用量によって異なりますが、どの企業も実力値ベースでの予算見直しが急務です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助終了を「一過性の値上がり」と捉えてはいけない理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年10月使用分の上昇を「補助終了という一回限りのイベント」として捉えることは危険です。
            補助終了は確かに一つの転換点ですが、実力値ベースへの移行は永続的な変化です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>補助終了後も、容量拠出金・再エネ賦課金のコスト上乗せは継続する</li>
            <li>11月・12月と暖房需要が加わり、10月よりさらに上昇する可能性が高い</li>
            <li>2026年以降も補助が再設定されるかは不確実であり、実力値を基準に計画を立てる必要がある</li>
            <li>電力会社・契約メニューによって実力値の水準には差があり、見直しで削減余地がある場合もある</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            10月使用分を「新しいスタートライン」として受け止め、今後の電気料金管理の体制を実力値ベースに切り替えることが
            企業にとって最も重要なアクションです。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金を動かす補助以外の要因</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年10月使用分の上昇の主因は補助終了ですが、電気料金を動かす構造要因はそれだけではありません。
            主なものは、LNGと石炭の価格動向、容量拠出金の継続適用、再エネ賦課金、そして電力需給バランスです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            日本の電力は火力発電への依存が高く、燃料価格の変動が電気料金に敏感に反映されます。
            容量拠出金は電力の安定供給を確保するための仕組みとして2024年から本格適用されており、
            今後も継続的なコスト要因となります。再エネ賦課金も再生可能エネルギーの普及に伴い継続します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            これらの構造要因は、補助が再設定されたとしても根本的には変わりません。法人としては、
            目先の補助の有無にかかわらず、中長期的な電気料金の構造変化を見据えた計画が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2025年10月時点で企業が確認したい実務ポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>10月使用分（11月請求分）の請求書を、補助なし実力値の基準として丁寧に確認・記録する</li>
            <li>前月（9月）との比較で、補助終了によるコスト増加額を把握する</li>
            <li>今後の予算は実力値ベースに切り替え、補助再設定を期待した楽観的な見積もりを避ける</li>
            <li>容量拠出金・再エネ賦課金・燃料費調整額の内訳を請求書で確認し、増加要因を分解する</li>
            <li>契約更新時期が近い場合、現在の実力値水準をもとに複数社見積もりを取得する</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">月次サマリー：2025年10月の電気料金概況</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年10月使用分の主要指標をまとめました。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">契約区分</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">2025年10月水準（目安）</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">前月（9月）比変化</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">主な変動要因</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">低圧電灯・低圧電力</td>
                  <td className="border-b border-slate-200 px-3 py-2">29〜30円/kWh程度</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">上昇（補助終了で数円増）</td>
                  <td className="border-b border-slate-200 px-3 py-2">激変緩和補助金の正式終了</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">高圧</td>
                  <td className="border-b border-slate-200 px-3 py-2">20〜21円/kWh程度</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">上昇（実力値に切替）</td>
                  <td className="border-b border-slate-200 px-3 py-2">補助終了・容量拠出金の継続</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">特別高圧</td>
                  <td className="border-b border-slate-200 px-3 py-2">16〜17円/kWh程度</td>
                  <td className="border-b border-slate-200 px-3 py-2">小幅変動（補助対象外のため直接影響なし）</td>
                  <td className="border-b border-slate-200 px-3 py-2">容量拠出金・再エネ賦課金の継続</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">共通の構造要因</td>
                  <td className="border-b border-slate-200 px-3 py-2">全区分に継続影響</td>
                  <td className="border-b border-slate-200 px-3 py-2">−</td>
                  <td className="border-b border-slate-200 px-3 py-2">容量拠出金・再エネ賦課金の上乗せ継続</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※水準は当社団運営「新電力ネット」掲載データをもとにした目安です。実際の請求額は電力会社・契約条件により異なります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年10月使用分は、激変緩和措置（電気料金補助）が正式終了し、補助なし実力値ベースの料金が初めてフルに請求に
            反映された歴史的な転換点の月でした。低圧では29〜30円/kWh程度、高圧では20〜21円/kWh程度、
            特別高圧では16〜17円/kWh程度となり、容量拠出金・再エネ賦課金の継続上乗せも確認されます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            10月は「新しいスタートライン」です。補助があった時代の感覚から実力値ベースに切り替え、
            11月以降の暖房需要増加による追加上昇も見越した予算・契約戦略の見直しを速やかに進めることが
            法人にとって最も重要なアクションです。
          </p>
        </section>

        <div className="mt-2">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/business-electricity-retrospective",
                title: "法人電気料金振り返り一覧",
                description: "月次・年次の電気料金動向を、契約区分ごとに整理しています。",
              },
              {
                href: "/business-electricity-retrospective/2025-11",
                title: "2025年11月の記事を見る",
                description: "補助終了2ヶ月目・暖房シーズン入りの動向を確認します。",
              },
              {
                href: "/electricity-price-subsidy-impact",
                title: "補助金縮小で見え方はどう変わったか",
                description: "補助金終了前後の料金変化を整理します。",
              },
              {
                href: "/articles",
                title: "法人向け電気料金の基礎知識",
                description: "電気料金の仕組みや見直しポイントを学べます。",
              },
            ]}
          />
        </div>
      </section>

      <div className="mt-6">
        <ContentCta
          heading="補助終了後の実力値で自社リスクを診断する"
          description="激変緩和補助金が終了した今、自社の電気料金リスクを実力値ベースで把握することが重要です。シミュレーターで現状を確認しましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "料金の仕組みを学ぶ" },
          ]}
        />
      </div>
    </main>
  );
}
