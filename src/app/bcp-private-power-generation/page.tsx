import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "BCP対策としての自家発電｜導入コストと電気料金への影響";
const pageDescription =
  "BCP観点で自家発電（ディーゼル・ガスタービン・太陽光+蓄電池）を導入する際のコスト比較と、通常時の電気料金への影響（ピークカットによる基本料金削減 or コスト増）を整理。工場・病院・データセンター別の推奨構成と投資回収期間も解説します。";
const pageUrl = "https://simulator.eic-jp.org/bcp-private-power-generation";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["energy-bcp"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "BCP 自家発電",
    "自家発電 導入コスト",
    "ガスタービン BCP",
    "ディーゼル 非常用",
    "太陽光 蓄電池 BCP",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/energy-bcp", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/energy-bcp"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        faq={FAQ_ITEMS}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "電力BCP・災害対策", url: "https://simulator.eic-jp.org/articles/energy-bcp" },
          { name: "BCP対策としての自家発電" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-bcp" className="underline-offset-2 hover:underline">電力BCP・災害対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">BCP対策としての自家発電</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">BCP対策としての自家発電｜導入コストと電気料金への影響</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>結論：自家発電は「停電回避のBCP投資」だけでなく、平常時のピークカットで基本料金を下げる「経済投資」の側面があります。ディーゼルはBCP専用、ガスタービンはコジェネ併用、太陽光+蓄電池は脱炭素兼用と、目的に応じた構成選定が投資回収の鍵です。</strong>
            このページでは既存の「<Link href="/emergency-power-source-options" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">非常用電源の選び方</Link>」を補完し、電気料金インパクトと業種別推奨構成を深掘りします。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自家発電の3タイプの導入コスト比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              BCP目的で検討される自家発電は、主に<strong>ディーゼル発電機・ガスタービン（コジェネ含む）・太陽光+蓄電池</strong>の3タイプです。導入コスト・稼働可能時間・起動時間・燃料備蓄の観点で特徴が大きく異なります。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border border-slate-200 px-3 py-2 text-left">タイプ</th>
                    <th className="border border-slate-200 px-3 py-2 text-right">導入コスト目安</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">起動時間</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">稼働可能時間</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">主な用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">ディーゼル（500kW級）</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">3,000〜6,000万円</td>
                    <td className="border border-slate-200 px-3 py-2">10〜30秒</td>
                    <td className="border border-slate-200 px-3 py-2">燃料次第（72時間が目安）</td>
                    <td className="border border-slate-200 px-3 py-2">BCP専用・非常用</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">ガスタービン（1MW級）</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">1.5〜3億円</td>
                    <td className="border border-slate-200 px-3 py-2">数分</td>
                    <td className="border border-slate-200 px-3 py-2">都市ガスがあれば連続</td>
                    <td className="border border-slate-200 px-3 py-2">BCP+コジェネ常用</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">太陽光200kW+蓄電池400kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">5,000〜9,000万円</td>
                    <td className="border border-slate-200 px-3 py-2">即時（UPS兼用）</td>
                    <td className="border border-slate-200 px-3 py-2">晴天時のみ日中補充</td>
                    <td className="border border-slate-200 px-3 py-2">BCP+脱炭素+ピークカット</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">※ 導入コストは設備本体・設置工事・連系工事を含む概算。現場条件により変動します。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BCP観点での評価軸</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              BCPとして自家発電を評価する際は、単純な出力容量ではなく<strong>「起動時間×稼働可能時間×燃料備蓄」</strong>の3次元で判断します。ディーゼルは10〜30秒で起動できUPSと組み合わせれば瞬断対策にもなりますが、燃料タンク容量が稼働時間の上限を決めます。消防法の屋外タンク規制もあり、72時間連続稼働を確保するには地下タンク設置などの追加工事が必要です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガスタービン（コジェネ）は都市ガスが生きていれば無制限に稼働できますが、地震時の中圧供給停止リスクを考慮した二重化が必要です。太陽光+蓄電池は即時給電できるものの、長期停電時は日中発電分だけが頼りとなるため、冬季や悪天候が続くと供給能力が低下します。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">通常時の電気料金への影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自家発電の経済性を評価するとき、多くの担当者が見落としがちなのが<strong>「平常時の電気料金インパクト」</strong>です。常用可能な構成（ガスタービン・太陽光+蓄電池）は、平常時にピークカットを行うことで基本料金を下げられます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              例えば契約電力1,000kWの工場で、ピーク時に200kWを自家発で賄えば、翌月以降の契約電力は800kWまで下がり、基本料金は年間で約400万円（単価1,900円/kW×12ヶ月×200kW）削減できます。この平常時の削減額が、BCP投資の回収期間を大きく短縮します。詳細は<Link href="/battery-storage-bcp-peak-cut-hybrid" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池のBCP活用とピークカット</Link>も参照してください。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              一方で、非常用ディーゼル専用の構成は平常時に稼働しないため、純粋な「保険料」としてのコスト増にしかなりません。導入を躊躇される場合が多いのも、この経済性の薄さが一因です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">投資回収期間の試算</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              投資回収は「BCP価値（停電時の機会損失回避）＋平常時の電気料金削減＋補助金」の合計で評価します。典型的な目安は次の通りです。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><strong>ディーゼル非常用（500kW）：</strong>平常時削減ゼロ、BCP価値と補助金のみ。回収年数は算定せず「保険」として位置づけるケースが多い。</li>
              <li><strong>ガスタービンコジェネ（1MW）：</strong>平常時の電気+熱代削減で年間4,000〜7,000万円。補助金2,000〜5,000万円活用で5〜8年で回収可能。</li>
              <li><strong>太陽光+蓄電池（200kW+400kWh）：</strong>平常時の自家消費とピークカットで年間600〜1,000万円削減。補助金適用後の実質投資額で7〜12年で回収。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              停電時の事業損失（時間あたり損失×停電時間）をBCP価値として算定に含めると、回収期間がさらに短縮されます。業種別の損失試算は<Link href="/outage-loss-simulation-by-industry" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">停電時の損失試算と投資判断</Link>で詳述しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助金活用の現状（2026年度）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年度時点で、自家発電関連には以下のような補助金が活用できます。公募時期・要件は毎年変わるため、最新情報は各公募サイトで確認してください。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>需要家主導型太陽光発電導入促進事業（経産省）：オンサイト太陽光に対し1/2〜2/3補助</li>
              <li>ストレージパリティの達成に向けた太陽光発電設備等の価格低減促進事業（環境省）：蓄電池併設型太陽光への補助</li>
              <li>省エネルギー投資促進に向けた支援補助金（SII）：コジェネ・高効率発電設備への補助</li>
              <li>自治体独自補助金：都道府県・市区町村ごとにBCP支援補助金あり</li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別の推奨構成</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              停電時の事業損失規模・稼働時間・脱炭素要件で、最適な構成が分かれます。
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="rounded border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">工場（製造業）</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">ガスタービンコジェネで平常時の熱利用＋BCP兼用が王道。電力多消費で基本料金削減効果も大きく、投資回収期間が短い。重要ラインのみUPS+ディーゼルを組み合わせる構成が現実的。</p>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">病院・介護施設</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">生命維持装置の瞬断対策が最優先。UPS+ディーゼル（法令上必須）に加え、太陽光+蓄電池で長時間停電の備えを二重化。コジェネで温水供給も兼ねる大病院も増加中。</p>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">データセンター</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">UPS+ディーゼルが基本だが、大規模DCはガスタービン+蓄電池+太陽光の組み合わせで再エネ100%を目指す。長期PPAと組み合わせたエネルギー自律性が競争力に直結。</p>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">オフィス・商業施設</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">事業継続要件が中位のため、太陽光+蓄電池でピークカット＋数時間のBCP対応を兼ねる構成が費用対効果に優れる。ディーゼルは法令対応分のみに留める。</p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務チェックリスト</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li>□ 停電時の時間あたり損失額を業種別に試算している</li>
              <li>□ BCP価値＋平常時削減＋補助金の3要素で投資評価している</li>
              <li>□ 起動時間・稼働可能時間・燃料備蓄の3軸で設備を選定している</li>
              <li>□ 消防法・電気事業法・都市ガス事業法の法令要件を確認している</li>
              <li>□ コジェネ導入時は系統連系の接続検討を事前に済ませている</li>
              <li>□ 脱炭素目標（Scope1・Scope2）との整合を確認している</li>
            </ul>
          </section>
        </section>

        <MarketDataFaq items={FAQ_ITEMS} />

        <AuthorBadge publishedAt="2026-04-19" updatedAt="2026-04-19" />

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/emergency-power-source-options", title: "非常用電源の選び方", description: "ディーゼル・ガス・蓄電池・ハイブリッドの比較。" },
              { href: "/battery-storage-bcp-peak-cut-hybrid", title: "蓄電池のBCP活用と経済性", description: "ピークカット兼用のハイブリッド運用。" },
              { href: "/outage-loss-simulation-by-industry", title: "停電時の損失試算と投資判断", description: "業種別の時間当たり損失額。" },
              { href: "/microgrid-for-business", title: "マイクログリッドとは", description: "自立運転を実現する電力システム。" },
              { href: "/energy-bcp-overview", title: "法人の電力BCP概論", description: "事業継続に必要な電力量の算定から。" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="自家発電はBCPと経済性の両面で評価することで、投資回収期間が大きく変わります。自社の電力使用実態から検討を始めましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "BCP自家発電を専門家に相談する" },
            ]}
          />
        </div>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="BCP自家発電の導入設計、専門家に相談しませんか？"
            description="ディーゼル・ガスタービン・太陽光+蓄電池の比較、補助金活用、投資回収試算まで、エネルギー情報センターの専門スタッフが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
