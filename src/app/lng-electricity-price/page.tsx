import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import FlowDiagram from "../../components/simulator/FlowDiagram";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "法人の電気料金とLNGの関係｜価格推移・影響試算・調達リスクを解説";
const pageDescription =
  "LNG価格と法人向け電気料金の関係を解説。2019〜2024年の輸入価格推移、価格変動が燃調費・月額に与える影響試算、日本の調達先構成とリスク要因を整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 LNG",
    "LNG 価格 電気代 影響",
    "LNG JEPX 関係",
    "燃料費調整額 法人",
    "電力契約 見直し",
    "LNG輸入価格 推移",
    "LNG調達先 リスク",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/lng-electricity-price",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/lng-electricity-price",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/price-increase",
        width: 1200,
        height: 630,
        alt: "法人の電気料金とLNGの関係",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-increase"],
  },
};

export default function LngElectricityPricePage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電気料金とLNGの関係｜価格推移・影響試算・調達リスクを解説"
        description="LNG価格と法人向け電気料金の関係を解説。2019〜2024年の輸入価格推移、価格変動が燃調費・月額に与える影響試算、日本の調達先構成とリスク要因を整理。"
        url="https://simulator.eic-jp.org/lng-electricity-price"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電気料金とLNGの関係" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">

      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずナビ">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホーム</Link>
          </li>
          <li className="select-none">›</li>
          <li>
            <Link href="/articles/price-increase" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金が上がる理由を知る</Link>
          </li>
          <li className="select-none">›</li>
          <li className="text-slate-700">LNGと電気料金の関係</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の電気料金とLNGの関係</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          日本の法人向け電気料金は、国内の需要だけで決まるわけではありません。電力供給を支えるLNG火力の燃料価格や調達環境は、
          海外市場の影響を受けるため、数か月のタイムラグを経て料金へ波及することがあります。契約見直しでは、単価だけでなく、
          その背景にある構造を理解しておくことが実務上の判断精度につながります。
        </p>
      </header>

      <section className="mt-6 space-y-6">

        {/* 日本の電力供給でLNGが重要な理由 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">日本の電力供給でLNGが重要な理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本の電力供給では、LNG火力が引き続き大きな役割を担っています。再生可能エネルギーや原子力の比率が時期により変動しても、
            需給調整を行う上でLNGの存在感は小さくありません。そのため、海外のLNG価格や供給不安が起きると、国内電力市場にも影響が出やすくなります。
          </p>
        </section>

        {/* LNG輸入価格の推移 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LNG輸入価格の推移（2019〜2024年度）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本のLNG輸入CIF価格は、世界的な需給動向や地政学的変動を反映して大きく変動してきました。
            特に2022年はウクライナ危機による欧州需要の急増が、アジア市場にも波及し記録的な水準を記録しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">LNG輸入CIF価格（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">前年比</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">背景</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">2019</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約55円/kg</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-500">―</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">コロナ前の安定期</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">2020</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約42円/kg</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-700">▲24%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">コロナによる需要減</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">2021</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約62円/kg</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-600">+48%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">経済回復＋アジア需要増</td>
                </tr>
                <tr className="bg-red-50 hover:bg-red-100">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">2022</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">約105円/kg</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+69%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">ウクライナ危機・欧州争奪</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">2023</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約78円/kg</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-700">▲26%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">暖冬・在庫積み増し</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">2024</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約72円/kg</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-sky-700">▲8%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">供給安定化</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 財務省貿易統計・資源エネルギー庁データをもとにした目安値。実際の契約価格は長期契約・スポット比率等により異なります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年の価格高騰は、
            <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の急騰</Link>
            を通じて法人の電気料金を押し上げた主因の一つです。現在は落ち着いているものの、地政学リスクが再燃すれば同様の局面が再現しうる水準にあります。
          </p>
        </section>

        {/* LNG価格変動と法人電気料金への影響試算 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LNG価格変動と法人電気料金への影響試算</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNG輸入価格の上昇は、
            <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>
            を通じて法人の電気料金に転嫁されます。以下は、価格変動シナリオ別に燃調費への影響と月額コスト増を試算した目安です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">LNG価格変動</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">燃調費への影響（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">月5万kWh施設</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">月20万kWh施設</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">+10円/kg上昇</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約+0.5〜1.0円/kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-orange-700">+2.5〜5万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-orange-700">+10〜20万円</td>
                </tr>
                <tr className="bg-orange-50 hover:bg-orange-100">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">+30円/kg上昇（2022年水準）</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-orange-700">約+2.0〜3.5円/kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-orange-700">+10〜17.5万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-orange-700">+40〜70万円</td>
                </tr>
                <tr className="bg-red-50 hover:bg-red-100">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">+50円/kg上昇（危機水準）</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700">約+3.5〜5.0円/kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+17.5〜25万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+70〜100万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 試算値は燃料費調整額の構造に基づく目安。実際は電力会社・契約種別・基準燃料価格の設定により異なります。
            <Link href="/market-price-adjustment" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整費</Link>
            も加わる場合は別途影響が生じます。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月20万kWhクラスの施設では、2022年水準の高騰が再来した場合、年間で500万円超のコスト増になりうる計算です。
            <Link href="/market-price-adjustment-risk" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整のリスク</Link>
            とあわせて確認しておくことをお勧めします。
          </p>
        </section>

        {/* LNG価格変動が電気料金に波及する流れ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LNG価格の変動が電気料金に波及する流れ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            価格変動は一気に請求へ反映されるのではなく、複数の経路を通じて段階的に波及します。特に法人契約では、卸電力市場価格（JEPX）や
            燃料費調整額の動きが、月次請求や契約更新時の条件見直しに影響することがあります。
          </p>
          <div className="mt-4">
            <FlowDiagram
              heading="LNG市場から法人の電気料金までの主な流れ"
              steps={[
                {
                  title: "1. 海外のLNG市場",
                  description: "需給バランス、地政学、為替などでLNG価格や調達環境が変化",
                },
                {
                  title: "2. 発電コスト",
                  description: "燃料調達コストの変化が、LNG火力の発電コストへ反映",
                },
                {
                  title: "3. JEPX / 燃料費調整額",
                  description: "卸市場価格や燃料費調整の水準に影響し、小売料金の前提が動く",
                },
                {
                  title: "4. 法人の電気料金",
                  description: "月次請求や契約更新時の単価条件として、実務上の負担に波及",
                },
              ]}
            />
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型の契約では、この流れの影響を比較的受けやすい傾向があります。
            <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人電気料金が上がる仕組み
            </Link>
            も合わせて確認すると、価格変動の全体像が把握しやすくなります。
          </p>
        </section>

        {/* 日本のLNG調達先と供給リスク */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">日本のLNG調達先と供給リスク</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本のLNG調達は複数国から行われており、調達先の分散によるリスク低減が図られています。ただし、各供給国には固有のリスク要因があり、
            特定地域での問題が市場全体に波及する可能性を念頭に置く必要があります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">調達先</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">シェア目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">主なリスク要因</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">オーストラリア</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約35%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">設備老朽化・環境規制</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">マレーシア</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約13%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">国内需要増</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">カタール</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約12%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">中東地政学リスク</td>
                </tr>
                <tr className="bg-orange-50 hover:bg-orange-100">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">ロシア</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-orange-700">約9%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">制裁・地政学リスク</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">アメリカ</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約8%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">パナマ運河渋滞・輸送コスト</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">その他</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約23%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">分散効果あり</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 資源エネルギー庁の統計をもとにした目安。年度・時期により変動します。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            調達先の上位はオーストラリア・マレーシア・カタールで全体の約60%を占めます。ロシア産については2022年以降の地政学リスクへの対応が課題となっており、
            代替調達先の確保が進んでいます。中東地域の緊張が高まった場合はカタール産を含むルートへの影響も想定する必要があります。
          </p>
        </section>

        {/* なぜ有事のときに電気料金が上がりやすいのか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ有事のときに電気料金が上がりやすいのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            有事では、足元の燃料価格だけでなく、将来の調達不安が価格に織り込まれやすくなります。供給見通しへの不確実性が高まると、
            市場での調達コストやリスクプレミアムが上がり、JEPXや契約単価の見直しにつながる場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            法人側では、急な請求増として表れることもあれば、更新時に契約条件が慎重化する形で現れることもあります。すぐに結論を出すというより、
            「どの条件で、どこまで上振れしうるか」を事前に確認しておく姿勢が大切です。
          </p>
        </section>

        {/* 2022年のエネルギー危機から何を学ぶべきか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年のエネルギー危機から何を学ぶべきか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年には、欧州のLNG需要増加が世界市場に波及し、調達価格の上昇と市場の不安定化が広がりました。日本でも電力市場価格の上昇、
            新電力の経営悪化、燃料費調整額の上昇が実務上の課題として顕在化しました。
          </p>
          <InfoBox title="実務で押さえたいポイント">
            海外のガス市場は、国内の法人契約と切り離せるテーマではありません。平時の単価比較だけでなく、相場変動時にどの程度影響を受けるかを
            契約条件ごとに確認しておくことが、再現性のある見直し判断につながります。
          </InfoBox>
        </section>

        {/* 直近の中東リスクをどう見るべきか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">直近の中東リスクをどう見るべきか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中東の地政学リスクは、原油だけでなくLNG供給にも影響しうる要素です。主要供給国であるカタール周辺の設備障害や輸送混乱が起きると、
            実需だけでなく市場心理にも影響し、調達コストが動く可能性があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            常設の解説ページとしては、個別ニュースの評価よりも、「供給リスクが電気料金に波及しうる構造が再認識されている」という点を押さえることが重要です。
          </p>
        </section>

        {/* 法人が確認しておきたい契約ポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が確認しておきたい契約ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約見直しでは、提示単価の高低だけでなく、価格が動いたときの耐性を確認することが重要です。次の観点を先に整理しておくと、
            社内での比較検討が進めやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自社契約が市場連動型か固定型か（またはその中間設計か）</li>
            <li>
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>
              の扱いと、請求への反映タイミング
            </li>
            <li>契約更新時の見直し条件、単価改定の考え方</li>
            <li>高騰時に想定される上振れ幅と、損益への影響範囲</li>
            <li>予算管理・稟議プロセスとの相性</li>
            <li>拠点ごとの使用量変動を踏まえた管理体制</li>
          </ul>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <InfoBox title="比較の視点">
              市場連動型と固定型のどちらが良いかは一律ではありません。
              <Link href="/compare" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較ページ</Link>
              で、料金の動き方と運用面を合わせて確認できます。
            </InfoBox>
            <InfoBox title="実務の進め方">
              まず現行契約を基準に影響幅を把握し、次に更新候補を同条件で比較する流れが有効です。上振れシナリオを含めた確認は、
              予算管理の精度向上にも役立ちます。
            </InfoBox>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：LNG価格と法人電気料金の関係</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>LNG輸入価格は2022年に約105円/kgと記録的高水準に達し、2024年には約72円/kgまで落ち着いている</li>
            <li>+30円/kg の上昇で、月20万kWhの施設では月額+40〜70万円の電気料金増が生じうる</li>
            <li>日本の調達先はオーストラリア・マレーシア・カタールで約60%を占め、それぞれ固有のリスクがある</li>
            <li>燃料費調整額を通じた波及には数か月のラグがあるため、先行指標として輸入価格の動向を追うことが重要</li>
            <li>契約種別（市場連動型・固定型）によって影響の受け方が異なるため、自社契約の構造確認が優先事項</li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="lng-electricity-price" terms={["燃料費調整額", "市場価格調整額", "JEPX", "再エネ賦課金", "市場連動プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="LNGと電気料金の関係を把握したら、燃調費の仕組みや価格変動の影響を実務で確認するページもあわせてご覧ください。"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "LNG価格が電気料金に反映される燃料費調整額の計算構造と影響を解説。",
            },
            {
              href: "/fuel-cost-adjustment-history",
              title: "燃料費調整額の推移と高騰の記録",
              description: "2022年を中心に燃調費がどこまで上昇したか、履歴と背景を整理。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整費とは",
              description: "JEPX連動で変動するもう一つのコスト要素の仕組みと実務への影響。",
            },
            {
              href: "/market-price-adjustment-risk",
              title: "市場価格調整のリスク",
              description: "電力スポット価格高騰時に法人コストが膨らむ構造とリスク管理のポイント。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人電気料金が上がる理由",
              description: "LNG・燃調費・JEPXなど複数の要因が重なる価格上昇の全体像。",
            },
            {
              href: "/articles/price-increase",
              title: "料金が上がる理由を知る（カテゴリ）",
              description: "電気料金値上がりの背景を体系的に学べる記事一覧。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "LNG価格を含む料金水準の推移実態をデータで確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="契約条件ごとの影響を試算する"
          description="LNGや燃調費の動向を踏まえ、自社の電気料金リスクを数値で確認しましょう。シミュレーターと比較ページで契約ごとの影響幅を把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
