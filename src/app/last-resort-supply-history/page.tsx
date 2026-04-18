import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import {
  LAST_RESORT_SUPPLY_MONTHLY,
  NEW_POWER_EXIT_YEARLY,
} from "../../data/lastResortSupplyHistory";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

// --- 定数 ---
const pageTitle = "最終保障供給の歴史とは｜制度の流れと現在の契約見直しへの示唆";
const pageDescription =
  "最終保障供給の制度がどのように整備されてきたかを整理し、現在の法人向け電力契約や見直し判断にどうつながるかを解説。電力自由化後の位置づけも含めて分かりやすくまとめています。";
const pageUrl = "https://simulator.eic-jp.org/last-resort-supply-history";

// --- 制度沿革タイムライン ---
const HISTORY_TIMELINE = [
  {
    year: "2000年",
    event: "電力小売の部分自由化（大口需要家）",
    detail:
      "特別高圧の大口需要家（原則2,000kW以上）を対象に小売自由化が始まる。新電力の参入が可能になった最初の段階。最終保障供給制度の前身となる「最終保障義務」が議論され始める。",
  },
  {
    year: "2004年",
    event: "自由化範囲の拡大（高圧・中規模）",
    detail:
      "高圧需要家（500kW以上）まで対象が広がる。新電力の選択肢が増える一方、供給責任の空白をどう埋めるかが政策課題として浮上。",
  },
  {
    year: "2005年",
    event: "最終保障供給制度の法的整備",
    detail:
      "電気事業法改正により、旧一般電気事業者に対して「最終保障供給義務」が明文化される。自由化市場で行き場を失った需要家を保護する「最後の砦」として制度が確立。",
  },
  {
    year: "2016年",
    event: "電力小売の全面自由化",
    detail:
      "家庭・低圧を含む全需要家が自由化対象に。新電力の参入が全電圧区分に拡大。最終保障供給は「自由化が進んだ後の公共的セーフティネット」として改めて重要性を増した。",
  },
  {
    year: "2020年",
    event: "JEPXスポット価格の高騰（冬季）",
    detail:
      "2020〜2021年冬に市場価格が急騰。市場連動型プランを持つ新電力が経営を圧迫され、一部で最終保障供給への移行が発生。制度の実効性が初めて大規模に問われた。",
  },
  {
    year: "2022年",
    event: "ウクライナ危機と最終保障供給の歴史的急増",
    detail:
      "ロシアのウクライナ侵攻でLNGスポット価格が急騰。新電力が相次いで撤退・受付停止。旧一般電気事業者も新規受付を絞る中、最終保障供給件数が12月には約52,000件でピークに達する。",
  },
  {
    year: "2023年",
    event: "激変緩和措置と市場正常化",
    detail:
      "政府の電気代補助（激変緩和措置）が開始。LNG価格が落ち着くとともに旧一般電気事業者が受付を再開。最終保障供給件数は減少に転じ、契約移行が進む。",
  },
  {
    year: "2024〜2025年",
    event: "件数の落ち着きと構造的リスクの残存",
    detail:
      "契約件数は6,000件台まで低下。しかし電力市場の構造的脆弱性（LNG依存、火力老朽化、新電力の財務体質）は解消されておらず、次のショックへの備えが引き続き必要。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 歴史",
    "最終保障供給 制度",
    "電力自由化 最終保障供給",
    "最終保障供給 件数 推移",
    "新電力 撤退 2022",
    "最終保障供給 法人 契約見直し",
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

const faqItems = [
  {
    question: "最終保障供給の件数が2022年に急増した背景は何ですか？",
    answer: "ウクライナ危機によるLNGスポット価格の急騰で新電力が相次いで撤退・受付停止したためです。旧一般電気事業者も新規受付を絞った結果、行き場を失った法人需要家が急増し、2022年12月には約52,000件の過去最高を記録しました。",
  },
  {
    question: "最終保障供給は今後また急増する可能性はありますか？",
    answer: "LNGスポット価格の再急騰、原子力停止による火力依存の高まり、新電力の財務脆弱性など構造的な問題は解消されていないため、同様の連鎖が再発する可能性は残っています。平時から通常契約の見直しや複数社への相見積もりを行うことが重要です。",
  },
  {
    question: "最終保障供給の歴史から法人担当者が学ぶべきことは何ですか？",
    answer: "「自社は関係ない」という油断が最大のリスクです。契約満了6〜12か月前から次の契約候補を探す、燃料費調整額の上限有無を確認する、複数社から見積もりを取るという3点が具体的な備えになります。",
  },
];

const sources = [
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売全面自由化の進捗状況・最終保障供給件数データ" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "最終保障供給件数の月次推移・公表資料" },
  { name: "新電力ネット", url: "https://pps-net.org", description: "新電力の撤退状況・事業停止件数の集計" },
];

// --- Page Component ---
export default function LastResortSupplyHistoryPage() {
  const labels = LAST_RESORT_SUPPLY_MONTHLY.map((r) => r.yearMonth);
  const values = LAST_RESORT_SUPPLY_MONTHLY.map((r) => r.contractCount);
  const exitLabels = NEW_POWER_EXIT_YEARLY.map((r) => `${r.year}年`);
  const exitValues = NEW_POWER_EXIT_YEARLY.map((r) => r.exitCount);

  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2025-08-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給を知る", url: "https://simulator.eic-jp.org/articles/last-resort-supply" },
          { name: "最終保障供給の歴史" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">

      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/last-resort-supply" className="underline-offset-2 hover:underline">最終保障供給を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">最終保障供給の歴史</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給の歴史</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は「電力市場で行き場を失った需要家を守る最後の砦」として、電力自由化の進展と並行して整備されてきた制度です。
          2022年に起きた歴史的な契約急増は、この制度が「存在するが使われないはずの非常口」ではなく、現実にいつでも発動しうる仕組みであることを証明しました。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、最終保障供給制度の成り立ちから2022年の急増・そして現在に至るまでの歴史を整理し、
          法人の電力担当者が今後の契約見直しや調達リスク管理にどう活かすべきかを具体的に解説します。
          件数推移グラフや新電力撤退データとあわせて読むことで、「なぜこの制度を知っておくべきか」がより明確になります。
        </p>
        <ul className="mt-4 space-y-1 text-sm text-slate-700">
          <li>・制度の法的整備（2005年〜）から全面自由化（2016年）、2022年危機までの流れ</li>
          <li>・月次件数推移データと新電力撤退件数のグラフ</li>
          <li>・歴史から読み取れる法人担当者への4つの示唆</li>
          <li>・再発リスクへの備え方</li>
        </ul>
      </header>

      <section className="mt-6 space-y-6">

        {/* 最終保障供給とは何か */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給とは、電力の小売契約が何らかの理由で終了または継続できなくなった場合に、
            旧一般電気事業者（東京電力エナジーパートナーや関西電力など、旧来の地域電力会社）が
            法律に基づいて供給を継続する義務を負う制度です。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            適用される主なケースは次の通りです。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約していた新電力が倒産・撤退した</li>
            <li>新電力から「次の契約先を見つけてください」と通知されたが、移行先が決まらなかった</li>
            <li>旧一般電気事業者の規制料金（低圧）から自由料金への移行で手続きが間に合わなかった</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            通常の電力契約と比べて料金単価が高く設定されており、長期継続には向きません。
            制度の詳細は
            <Link href="/last-resort-supply" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給とは（基本解説）</Link>
            を、料金水準の詳細は
            <Link href="/last-resort-supply-price" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給の料金</Link>
            をあわせてご確認ください。
          </p>
        </section>

        {/* 制度の流れと電力自由化の関係 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">制度の流れと電力自由化の関係</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給制度は、電力自由化の「影の部分」を埋めるために整備されてきました。
            市場競争を広げるほど、競争から脱落した事業者の顧客をどう守るかという問題が生まれます。
            この制度はその問いへの政策的な答えです。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の沿革表は、電力自由化の段階的進展と最終保障供給制度の位置づけがどう変化してきたかを示しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left whitespace-nowrap">年</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">出来事</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">制度的背景・意味</th>
                </tr>
              </thead>
              <tbody>
                {HISTORY_TIMELINE.map((row) => (
                  <tr key={row.year} className="border-t border-slate-100 align-top">
                    <td className="border border-slate-200 px-3 py-2 font-semibold whitespace-nowrap">{row.year}</td>
                    <td className="border border-slate-200 px-3 py-2 font-medium">{row.event}</td>
                    <td className="border border-slate-200 px-3 py-2 text-xs leading-6">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            注目すべきは、最終保障供給が「経過措置」ではなく「常設のセーフティネット」として設計されている点です。
            自由化が完成した後も制度は存続し続けます。これは電力市場が構造的に需要家リスクをゼロにできないという政策判断の表れです。
            法人の電力担当者にとって、この制度の存在を「他人事」として捉えることはできません。
          </p>
        </section>

        {/* 件数推移データ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">件数推移データ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下は資源エネルギー庁公表データをもとにした最終保障供給の月次契約件数推移です。
            2022年春からの急激な増加と、2023年以降の回復の様子が視覚的に確認できます。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "最終保障供給契約件数（件）",
                  values,
                  color: "#b91c1c",
                  fillColor: "rgba(185,28,28,0.12)",
                },
              ]}
              unit="件"
              yTitle="件数"
            />
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">時点</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">契約件数</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な動向</th>
                </tr>
              </thead>
              <tbody>
                {LAST_RESORT_SUPPLY_MONTHLY.map((r) => (
                  <tr key={r.yearMonth} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2">{r.yearMonth}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{r.contractCount.toLocaleString("ja-JP")} 件</td>
                    <td className="border border-slate-200 px-3 py-2 text-xs">{r.comment ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            出典：資源エネルギー庁「電力・ガス小売全面自由化の進捗状況」各月公表データをもとに作成。
          </p>
        </section>

        {/* 新電力の撤退と最終保障供給の連鎖 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">新電力の撤退と最終保障供給の連鎖</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給の急増は、新電力の大量撤退と表裏一体でした。
            2022年は単年で約114社もの新電力が撤退・事業停止・他社への顧客譲渡を行っており、
            その影響が直接、最終保障供給件数の急増として現れています。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={exitLabels}
              series={[
                {
                  label: "新電力の撤退・事業停止件数（社）",
                  values: exitValues,
                  color: "#dc2626",
                  fillColor: "rgba(220,38,38,0.14)",
                },
              ]}
              unit="社"
              yTitle="社数"
            />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">2022年の連鎖：何が起きていたのか</h3>
          <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong>2022年2月〜</strong>：ウクライナ危機発生。LNGスポット価格が歴史的水準まで急騰。
              JEPX年度平均は20円/kWhを超える水準に達し、市場連動型の調達を行っていた新電力が
              販売価格との逆ざやで経営を圧迫される。
            </li>
            <li>
              <strong>2022年3〜4月</strong>：新電力各社が相次いで新規受付停止を発表。
              契約満了を迎える法人需要家が次の契約先を見つけられない状況に。
              <Link href="/fuel-cost-adjustment-upper-limit" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の上限制度</Link>
              を持たない新電力は特に打撃が大きかった。
            </li>
            <li>
              <strong>2022年5〜6月</strong>：旧一般電気事業者も新規受付を停止・制限。
              法人需要家が事実上の「電力難民」になるケースが急増。
            </li>
            <li>
              <strong>2022年7〜12月</strong>：最終保障供給への移行が急増。12月には過去最高の約52,000件に到達。
              <Link href="/market-price-adjustment-risk" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額</Link>
              が含まれる最終保障供給の料金水準は、通常契約の数倍に達するケースもあり得る。
            </li>
            <li>
              <strong>2023年前半</strong>：政府の激変緩和措置（電気代補助）が開始。
              LNG価格の落ち着きで市場が正常化し、旧一般電気事業者が順次新規受付を再開。
            </li>
            <li>
              <strong>2023年後半〜2024年</strong>：切替が進み、最終保障供給からの順次離脱。
              2024年末には6,000件台まで減少。ただし、この水準は2020年以前と比べると依然として高い。
            </li>
          </ol>
        </section>

        {/* 歴史から読み取れる法人担当者への示唆 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">歴史から読み取れる法人担当者への示唆</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年の歴史は、最終保障供給が「他社に起きたこと」ではないことを示しています。
            以下の4点は、電力調達担当者として歴史から引き出すべき実践的な学びです。
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">① 通常契約との違いを正確に理解する</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                最終保障供給は通常の電力契約ではありません。料金体系・契約条件・継続可能期間がすべて異なります。
                「とりあえず電気が使える」状態に安心してしまうと、割高な料金を長期間支払い続けるリスクがあります。
                まず
                <Link href="/last-resort-supply" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給の基本</Link>
                を押さえておくことが出発点です。
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">② 料金や条件の見方を知っておく</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                最終保障供給の料金は、通常の自由料金より高く設定される傾向があります。
                <Link href="/last-resort-supply-price" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">料金の詳細と比較</Link>
                を事前に確認し、いざというとき「この水準になる」という想定を持っておくことが重要です。
                2022年には料金の高さに気づかず数か月間移行したままになったケースも報告されています。
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">③ 調達リスクへの備えを契約前から行う</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                最終保障供給に入らないための最善策は、通常契約を計画的に見直し続けることです。
                新電力の財務健全性の確認、複数社への見積依頼、契約満了の早期把握が基本になります。
                <Link href="/compare" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニューの比較診断</Link>
                を活用して、現在の契約が市場水準と比べてどの位置にあるかを定期的に確認してください。
              </p>
            </div>

            
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">④ 見直し判断のタイミングを逃さない</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                2022年の経験が示すように、市場が混乱してからでは「次の契約先を探す」ことが極めて困難になります。
                平時から代替候補を把握しておき、契約更新の6〜12か月前には動き出すことが理想です。
                すでに最終保障供給に移行している場合は、
                <Link href="/last-resort-supply-switch" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">切り替え手順</Link>
                を早急に確認してください。
              </p>
            </div>
          </div>
        </section>

        {/* カテゴリ内でのこのページの位置づけ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">「最終保障供給を知る」カテゴリ内でのこのページの位置づけ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            このページは「最終保障供給を知る」カテゴリの中で、制度の背景と歴史的事実を扱う補足ページです。
            カテゴリ内の各ページはそれぞれ異なる役割を持っており、以下の順序で読み進めると理解が深まります。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給とは</Link>
              ——制度の基本と適用条件（まず読む）
            </li>
            <li>
              <Link href="/last-resort-supply-price" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給の料金</Link>
              ——通常契約との料金差・具体的な水準
            </li>
            <li>
              <strong>最終保障供給の歴史（このページ）</strong>
              ——制度の成り立ちと2022年危機の経緯
            </li>
            <li>
              <Link href="/last-resort-supply-switch" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給から切り替えるには</Link>
              ——移行先探しと手続きの実務
            </li>
            <li>
              <Link href="/last-resort-supply-emergency-response" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給に入りそうなときの対応</Link>
              ——危機時の行動指針（平時の備えとして）
            </li>
          </ol>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            カテゴリ全体の一覧は
            <Link href="/articles/last-resort-supply" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給を知る（カテゴリページ）</Link>
            から確認できます。
            電力契約の基礎から学びたい場合は
            <Link href="/articles/basic" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">基礎から知るカテゴリ</Link>
            もあわせてご活用ください。
          </p>
        </section>

        {/* 今後のリスク */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">今後のリスク：再来する可能性</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年のような急増は特殊事象のように見えますが、次の条件が揃えば再発する可能性があります。
            2022年以降、電力市場の構造的な問題は完全には解消されていません。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>LNGスポット価格の再急騰（中東情勢・供給ショック・異常気象等）</li>
            <li>原子力発電所の長期停止による火力依存度の上昇</li>
            <li>夏季猛暑・冬季寒波での需給逼迫と卸市場価格の高騰</li>
            <li>新電力の財務体質が依然として脆弱な構造的問題</li>
            <li>再生可能エネルギー拡大に伴う調整力コストの増大</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            法人としては、契約更新時の上振れリスクを常に意識することが必要です。
            特に、
            <Link href="/fuel-cost-adjustment-upper-limit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の上限制度</Link>
            や
            <Link href="/market-price-adjustment-risk" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額の上振れリスク</Link>
            との関係を理解した上で、現在の契約がどのリスクをどこまで許容しているかを把握することが出発点になります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/last-resort-supply-emergency-response" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給に入りそうなときの対応手順</Link>
            を社内で共有しておくことも、いざというときの混乱を最小化するために重要です。
            平時の段階で
            <Link href="/how-to" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">シミュレーターの使い方</Link>
            を確認し、自社のリスク水準を数値で把握しておくことをお勧めします。
          </p>
        </section>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2025-08-01" />

        {/* 関連リンク */}
        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/last-resort-supply", title: "最終保障供給とは", description: "制度の基本と適用条件を解説。このページを読む前にまず確認。" },
            { href: "/last-resort-supply-price", title: "最終保障供給の料金", description: "通常契約との料金差と具体的な水準。割高になる理由を解説。" },
            { href: "/last-resort-supply-switch", title: "最終保障供給から切り替えるには", description: "移行先の探し方と切替手続きの実務的な手順。" },
            { href: "/last-resort-supply-emergency-response", title: "最終保障供給に入りそうなときの対応", description: "危機時の早期発見と具体的な行動指針。" },
            { href: "/fuel-cost-adjustment-upper-limit", title: "燃料費調整額の上限制度", description: "2022年撤退の背景となった制度の仕組みと影響。" },
            { href: "/market-price-adjustment-risk", title: "市場価格調整額の上振れリスク", description: "JEPX高騰リスクが経営に与える影響を解説。" },
            { href: "/articles/last-resort-supply", title: "最終保障供給を知る（カテゴリ一覧）", description: "カテゴリ内の全記事一覧。読む順序の確認に。" },
            { href: "/compare", title: "料金メニュー比較診断", description: "現在の契約が市場水準と比べてどの位置にあるかを診断。" },
          ]}
        />

        {/* CTA */}
        <ContentCta
          heading="自社の回避策を検討する"
          description="最終保障供給に移行しないための備えは、通常契約の計画的な見直しから始まります。料金メニューの比較診断やシミュレーターで、自社のリスク水準を確認してみてください。"
          links={[
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/", label: "シミュレーターで診断する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
