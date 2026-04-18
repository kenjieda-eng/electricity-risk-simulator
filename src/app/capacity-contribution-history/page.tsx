import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "容量拠出金の年度別推移｜オークション結果と転嫁単価の変動を整理";
const pageDescription =
  "容量拠出金の年度別推移をオークション結果・kWhあたり転嫁単価・法人への影響額で整理。2024年度の本格開始から今後の見通しまで、燃調費・再エネ賦課金との比較も含めて解説。";
const pageUrl = "https://simulator.eic-jp.org/capacity-contribution-history";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "容量拠出金 推移",
    "容量市場 オークション結果",
    "容量拠出金 単価",
    "容量拠出金 2024年度",
    "容量市場 法人影響",
    "容量拠出金 見通し",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const auctionResults = [
  {
    fiscalYear: "2024年度",
    auctionYear: "2020年",
    priceYenPerKw: "14,137円/kW",
    volumeManKw: "約16,770万kW",
    totalAmount: "約2.4兆円",
    note: "制度初年度・高値",
  },
  {
    fiscalYear: "2025年度",
    auctionYear: "2021年",
    priceYenPerKw: "5,242円/kW",
    volumeManKw: "約17,010万kW",
    totalAmount: "約0.9兆円",
    note: "大幅低下",
  },
  {
    fiscalYear: "2026年度",
    auctionYear: "2022年",
    priceYenPerKw: "3,495円/kW",
    volumeManKw: "約16,900万kW",
    totalAmount: "約0.6兆円",
    note: "さらに低下",
  },
  {
    fiscalYear: "2027年度",
    auctionYear: "2023年",
    priceYenPerKw: "5,100円/kW（メインオークション）",
    volumeManKw: "約16,500万kW",
    totalAmount: "約0.8兆円",
    note: "底打ちの兆し",
  },
];

const transferPrices = [
  {
    fiscalYear: "2024年度",
    unitPrice: "約1.5〜2.0円/kWh",
    yoy: "―",
    impact5: "約7.5〜10万円",
    impact20: "約30〜40万円",
  },
  {
    fiscalYear: "2025年度",
    unitPrice: "約0.6〜0.8円/kWh",
    yoy: "▲50〜60%",
    impact5: "約3〜4万円",
    impact20: "約12〜16万円",
  },
  {
    fiscalYear: "2026年度（見込み）",
    unitPrice: "約0.4〜0.6円/kWh",
    yoy: "▲25〜30%",
    impact5: "約2〜3万円",
    impact20: "約8〜12万円",
  },
  {
    fiscalYear: "2027年度（見込み）",
    unitPrice: "約0.5〜0.7円/kWh",
    yoy: "+10〜30%",
    impact5: "約2.5〜3.5万円",
    impact20: "約10〜14万円",
  },
];

const comparisonRows = [
  {
    name: "燃料費調整額",
    unitPrice2024: "▲2〜+5円/kWh",
    variability: "毎月変動・燃料連動",
    future: "市況次第で上下",
  },
  {
    name: "再エネ賦課金",
    unitPrice2024: "3.49円/kWh",
    variability: "年1回改定",
    future: "高止まり〜微増",
  },
  {
    name: "容量拠出金",
    unitPrice2024: "1.5〜2.0円/kWh（2024年度）",
    variability: "年度ごと",
    future: "低下後に反転の可能性",
  },
  {
    name: "託送料金",
    unitPrice2024: "3.0〜5.0円/kWh",
    variability: "数年ごと見直し",
    future: "微増傾向",
  },
];

export default function CapacityContributionHistoryPage() {
  return (
    <>
      <ArticleJsonLd
        headline="容量拠出金の年度別推移｜オークション結果と転嫁単価の変動を整理"
        description="容量拠出金の年度別推移をオークション結果・kWhあたり転嫁単価・法人への影響額で整理。2024年度の本格開始から今後の見通しまで、燃調費・再エネ賦課金との比較も含めて解説。"
        url="https://simulator.eic-jp.org/capacity-contribution-history"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "容量拠出金の年度別推移" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-increase" className="underline-offset-2 hover:underline">料金が上がる理由を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">容量拠出金の推移</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">容量拠出金の年度別推移</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          容量拠出金は2024年度から電気料金に本格転嫁が始まりましたが、初年度は突出して高く、その後は低下傾向をたどっています。
          このページでは、容量市場オークションの約定結果をもとに年度別の転嫁単価を整理し、<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>・<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>との
          比較や法人への影響額、今後の見通しまでをデータで解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">

        {/* 容量市場オークション結果 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">容量市場オークション結果の推移</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場では、実需給年度の4年前に「メインオークション」が実施されます。2024年度向けは2020年に、
            2025年度向けは2021年にそれぞれ約定価格が決まりました。
            約定価格は「実需給年度に確保される容量（kW）あたりの対価（円/kW）」であり、
            これが電力会社を通じてkWhあたりの転嫁単価に換算されます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">実需給年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">オークション実施年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">約定価格（円/kW）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">総約定量（万kW）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">総額（概算）</th>
                </tr>
              </thead>
              <tbody>
                {auctionResults.map((row) => (
                  <tr key={row.fiscalYear} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 font-medium">{row.fiscalYear}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.auctionYear}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.priceYenPerKw}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.volumeManKw}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{row.totalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出典: 電力広域的運営推進機関（OCCTO）容量市場メインオークション結果。2024年度は制度初年度で高値。2025年度以降は低下傾向だが底打ちの兆しあり。
          </p>
        </section>

        {/* kWhあたり転嫁単価の推移 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">kWhあたり転嫁単価の推移</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            kWあたりの約定価格は、各社の発電設備構成や系統利用量をもとにkWhあたりの転嫁単価に換算されます。
            換算方法は電力会社によって異なるため、以下は目安の幅として示します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">kWhあたり転嫁単価（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">前年比</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月5万kWh施設の月額影響</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月20万kWh施設の月額影響</th>
                </tr>
              </thead>
              <tbody>
                {transferPrices.map((row) => (
                  <tr key={row.fiscalYear} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 font-medium">{row.fiscalYear}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{row.unitPrice}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">{row.yoy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.impact5}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.impact20}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            転嫁方法は電力会社により異なるため、実際の請求書の「容量拠出金相当額」欄を確認してください。2026年度以降は見込み値です。
          </p>
        </section>

        {/* 燃調・再エネとの比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額・再エネ賦課金との比較</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金を構成する主な変動要素を並べると、容量拠出金は2024年度には再エネ賦課金（3.49円/kWh）に次ぐ規模の
            上乗せ負担となっていました。変動特性と将来方向性の違いを把握しておくことが重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[580px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">制度負担</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2024年度の単価目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">変動特性</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">将来の方向性</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.name} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 font-medium">{row.name}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.unitPrice2024}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.variability}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.future}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            託送料金は地域・電圧区分によって異なります。各単価はいずれも目安であり、実際の請求額は契約内容により変わります。
          </p>
        </section>

        {/* なぜ2024年度は突出して高かったのか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ2024年度は突出して高かったのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2024年度向けオークション（2020年実施）の約定価格14,137円/kWは、2025年度向け（5,242円/kW）の約2.7倍に上ります。
            この高値には複数の要因が重なっていました。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">制度初年度の不確実性</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                容量市場が初めて実施されたオークションであり、発電事業者・小売事業者ともに価格形成の根拠となるデータが
                少なかった。不確実性の高い状況では入札者が保守的に高値を設定する傾向があります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">発電事業者の入札行動</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                老朽化した火力発電所の維持費用を回収するため、発電事業者が容量収入に高い期待を持って参加しました。
                初回オークションは約定価格の上限（リザーブプライス）が相対的に高く設定されていたことも要因です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">市場設計の学習効果</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                2025年度以降は電力広域的運営推進機関がオークション設計を改善し、需給調整市場との連携も進みました。
                入札者側も価格形成を理解するにつれ、競争的な水準へ収斂していく学習効果が働いています。
              </p>
            </div>
          </div>
        </section>

        {/* 今後の見通しと法人への影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">今後の見通しと法人への影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025〜2026年度向けのオークション結果はいずれも2024年度より大幅に低下しており、転嫁単価も下落しています。
            しかし2027年度向けでは5,100円/kWへと再び上昇しており、底打ちの可能性が出てきています。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">火力維持コストの構造的要因</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                再生可能エネルギーが拡大しても、バックアップ電源として火力発電所の維持は当面必要です。
                老朽化設備の更新投資や燃料費の上昇は容量価格を押し上げる構造的な要因であり、
                市場設計の学習効果だけで単価の低位安定が続くとは言い切れません。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">法人の予算策定への織り込み方</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                容量拠出金は燃調費と異なり月次での変動がなく、年度単位で転嫁単価が確定しています。
                中期予算（2〜3年先）を組む際は、実施済みオークションの約定結果から転嫁単価の幅を試算し、
                シナリオ別に影響額を織り込んでおくことが有効です。
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-slate-800">
              <strong>ポイント：</strong>2025〜2026年度向けのオークション約定価格はすでに確定しており、
              2026年度の転嫁単価は0.4〜0.6円/kWh程度が見込まれます。
              2027年度以降は上振れリスクも残るため、契約更新時には「容量拠出金の変動シナリオ」を織り込むことを推奨します。
            </p>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>容量拠出金は2024年度に1.5〜2.0円/kWh程度の転嫁単価で本格スタート。制度初年度の特殊要因で突出して高かった。</li>
            <li>2025〜2026年度は大幅に低下し0.4〜0.8円/kWh程度が見込まれるが、2027年度向けには再び上昇している。</li>
            <li>燃料費調整額のように毎月変動せず、年度単位で転嫁単価が決まるため、中期予算への織り込みがしやすい。</li>
            <li>火力維持コストの構造的要因があるため、長期的には低位安定を見込みにくく、シナリオ別の影響試算が重要。</li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="capacity-contribution-history" terms={["容量拠出金", "再エネ賦課金", "燃料費調整額", "電力量料金", "電気料金の内訳"]} />
        </div>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは何か",
              description: "制度の基本的な仕組みと、なぜ電気料金に上乗せされるのかを解説します。",
            },
            {
              href: "/capacity-contribution-cost-impact",
              title: "容量拠出金の法人別コスト影響",
              description: "業種・規模別の月額負担を試算表で比較できます。",
            },
            {
              href: "/capacity-contribution-what-to-check",
              title: "容量拠出金で確認すべきポイント",
              description: "請求書の確認方法と、契約交渉時のチェックリストを整理しています。",
            },
            {
              href: "/renewable-energy-surcharge-history",
              title: "再エネ賦課金の推移と変動要因",
              description: "2012〜2026年度の単価推移と変動背景を解説します。",
            },
            {
              href: "/fuel-cost-adjustment-history",
              title: "燃料費調整額の推移詳細",
              description: "2018〜2026年度の燃調単価推移をウクライナ危機・補助措置とあわせて整理します。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "契約メニューを比較して、容量拠出金を含めたトータルコストを診断できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "容量拠出金上昇が料金全体に与えた影響を推移データで確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="容量拠出金を含めた自社リスクを試算する"
          description="シミュレーターで月間使用量を入力すると、容量拠出金の変動シナリオを含む電気料金上昇リスクを確認できます。"
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
