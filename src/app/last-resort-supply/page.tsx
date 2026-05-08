import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import TableOfContents from "../../components/market-data/TableOfContents";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { LAST_RESORT_SUPPLY_MONTHLY } from "../../data/lastResortSupplyHistory";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "最終保障供給とは｜仕組み・料金・契約件数推移・切替実務を徹底解説";
const pageDescription =
  "最終保障供給の仕組み、料金水準、契約件数の推移（2021〜2025年）、2022年の急増と新電力撤退の背景、切替実務までを法人・自治体向けに解説します。グラフと公表データで詳しく整理。";
const pageUrl = "https://simulator.eic-jp.org/last-resort-supply";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給",
    "最終保障供給 とは",
    "最終保障供給 契約件数",
    "最終保障供給 推移",
    "最終保障供給 料金",
    "新電力 撤退",
    "最終保障供給 高圧",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/last-resort-supply", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/last-resort-supply"],
  },
};

const faqItems = [
  {
    question: "最終保障供給とはどういう制度ですか？",
    answer: "どの小売電気事業者とも契約合意に至らない高圧・特別高圧の法人・自治体に対して、一般送配電事業者が電気事業法第17条に基づき臨時供給する制度です。事業継続のためのセーフティネットであり、料金は通常の小売契約より2〜3割高く設定されています。",
  },
  {
    question: "2022年に最終保障供給が急増した理由は何ですか？",
    answer: "ウクライナ危機によるLNGスポット価格の急騰で新電力が相次いで撤退・新規受付停止し、旧一般電気事業者も受付を絞ったため行き場を失った需要家が急増しました。2022年12月に過去最高の約52,000件に達しました。",
  },
  {
    question: "最終保障供給に入った場合、どう対応すれば良いですか？",
    answer: "早期に通常の小売契約へ切り替えることが優先です。複数の電力会社に見積もりを依頼し、料金比較とシミュレーターで条件を確認した上で契約を進めてください。長期間にわたる最終保障供給は追加コストが蓄積するため、早期解消が重要です。",
  },
  {
    question: "最終保障供給に移行しそうだと気づいたら最初に何をすべきですか？",
    answer: "現在の電力会社または一般送配電事業者に連絡し、供給継続の可否と最終保障供給移行の見通しを確認します。次に使用量データ（月間・30分コマ別）を取得し、複数の代替電力会社への見積依頼を即時に開始することが優先です。",
  },
  {
    question: "経営層への社内説明はどう構成すべきですか？",
    answer: "①現状説明（なぜ最終保障供給に入ったか）②コスト影響（通常契約との月額・年額差）③対応策（切替先候補と見積取得状況、早期離脱スケジュール）の 3 ステップ構成が伝わりやすいです。担当者の管理不足ではなく電力自由化制度上のリスクである点を明確にします。",
  },
  {
    question: "最終保障供給を長期利用してはいけない理由は？",
    answer: "通常契約より 20〜60% 高い料金が毎月発生し続けます。供給期間には上限（通常 9 ヶ月程度）があり、期限切れで供給停止リスクがあります。プランの選択肢が制約され、コスト予測も難しくなります。原則として移行から 3 ヶ月以内に通常契約への切替を完了させることが目標です。",
  },
];

const sources = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "最終保障供給の件数推移・公表データ" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・最終保障供給の制度解説" },
  { name: "新電力ネット", url: "https://pps-net.org", description: "新電力の撤退状況・市場動向" },
];

export default function LastResortSupplyPage() {
  const labels = LAST_RESORT_SUPPLY_MONTHLY.map((r) => r.yearMonth);
  const values = LAST_RESORT_SUPPLY_MONTHLY.map((r) => r.contractCount);

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
          { name: "最終保障供給とは" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="mb-4 text-sm text-slate-600">
        <Link href="/" className="underline underline-offset-2 hover:text-slate-900">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/articles/last-resort-supply" className="underline underline-offset-2 hover:text-slate-900">最終保障供給を知る</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">最終保障供給とは</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は、<Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧電力</Link>または<Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧</Link>で電気を使う法人・企業・自治体などが、
          どの小売電気事業者とも契約合意に至らない場合に、一般送配電事業者から臨時的に供給を受ける仕組みです。
          電気事業法第 17 条に基づく供給義務に支えられており、電気が止まらないためのセーフティネットです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          2022 年のウクライナ危機と新電力撤退の連鎖で利用件数が一時 52,000 件まで急増し、
          それまで一般にほとんど知られていなかった制度が広く注目されるようになりました。
        </p>
      </header>

      <TableOfContents />

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約件数の推移（2021〜2025年）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021 年までは月末時点で全国 100 件以下の小規模な制度でしたが、2022 年春から新電力の撤退・新規受付停止を受けて急増。
            2022 年 12 月に過去最高の約 52,000 件に達しました。その後、市場の落ち着きと旧一般電気事業者の受付再開により、
            2025 年時点では 5,000 件台で落ち着いています。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "最終保障供給の契約件数（月末時点、全国合計）",
                  values,
                  color: "#b91c1c",
                  fillColor: "rgba(185,28,28,0.14)",
                },
              ]}
              unit="件"
              yTitle="契約件数"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出典: 電力・ガス取引監視等委員会公表資料等に基づく概算。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給の基本</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は、通常の小売契約が成立しない局面で電気供給を継続するための制度です。料金の安さを競う契約ではなく、
            事業継続や公共サービス継続の観点で電気を途切れさせないことが主眼です。
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>供給主体：各エリアの一般送配電事業者（送電会社）</li>
            <li>対象：高圧・特別高圧需要家（低圧は「最終保障供給」ではなく別制度）</li>
            <li>料金水準：通常の小売契約より 2〜3 割高い設定（激変緩和措置あり）</li>
            <li>継続期間：原則として次の供給者が見つかるまでの暫定</li>
            <li>申請：小売から供給拒否通知を受けた後に送配電事業者に申込み</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ2022年に急増したのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022 年 2 月のウクライナ危機以降、LNG スポット価格が急騰し、<Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link> 年度平均は 20 円/kWh 超に達しました。
            これにより、JEPX 依存度が高い新電力の多くが赤字に転落し、次のような連鎖反応が発生しました。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>新電力が新規受付停止 → 契約満了需要家が行き場を失う</li>
            <li>旧一般電気事業者も新規受付停止 → 切替先がない状態</li>
            <li>やむなく最終保障供給へ移行 → 件数急増</li>
            <li>2022 年 12 月に 52,000 件のピーク</li>
            <li>2023 年から段階的に市場正常化 → 順次減少</li>
          </ol>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-slate-800">
              <strong>ポイント：</strong>最終保障供給の料金水準は通常より 2〜3 割高いため、
              法人の請求額は急増。自治体でも補正予算で数千万〜数億円規模の追加計上が相次ぎました。
            </p>
          </div>
        </section>

        <section id="emergency-response" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給に入りそうなときの緊急対応</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給に移行すると、電気料金が通常より大幅に高くなります。できる限り短期間で通常の小売契約に戻ることが重要で、そのためには早期発見と迅速な行動が不可欠です。発覚から切替完了までの 5 ステップで動きます。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">緊急対応タイムライン</h3>
          <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">時期</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">アクション</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">ゴール</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">発覚直後（1〜3日）</td>
                  <td className="border border-slate-200 px-3 py-2">状況把握・社内報告</td>
                  <td className="border border-slate-200 px-3 py-2">経営層への第一報</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-700">1 週間以内</td>
                  <td className="border border-slate-200 px-3 py-2">見積依頼開始</td>
                  <td className="border border-slate-200 px-3 py-2">3 社以上に見積依頼</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">2〜4 週間</td>
                  <td className="border border-slate-200 px-3 py-2">見積比較・候補選定</td>
                  <td className="border border-slate-200 px-3 py-2">切替先の決定</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">1〜2 ヶ月</td>
                  <td className="border border-slate-200 px-3 py-2">切替手続き完了</td>
                  <td className="border border-slate-200 px-3 py-2">最終保障からの離脱</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">最終保障供給に近づく警告サイン</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li><span className="font-semibold text-red-700">最高緊急度</span>：契約先の電力会社から「供給継続困難」「契約解除予告」「事業撤退」通知</li>
            <li><span className="font-semibold text-red-700">最高緊急度</span>：契約満了日の見落とし・更新手続き期限切れ</li>
            <li><span className="font-semibold text-orange-700">高緊急度</span>：候補先電力会社が新規受付停止を発表</li>
            <li><span className="font-semibold text-orange-700">高緊急度</span>：複数社から見積拒否、または通常の 2 倍以上の異常な単価提示</li>
          </ul>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">対応 5 ステップ</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li><span className="font-semibold text-slate-900">STEP 1：現状確認と初期対応</span>（電力会社・送配電事業者へ連絡、使用量データ準備）</li>
            <li><span className="font-semibold text-slate-900">STEP 2：社内報告と意思決定体制の確立</span>（経営層報告、予算枠確保、担当者・権限の明確化）</li>
            <li><span className="font-semibold text-slate-900">STEP 3：代替供給先の打診・見積依頼</span>（複数社に使用量データ提供、見積回答期限を明確に）</li>
            <li><span className="font-semibold text-slate-900">STEP 4：見積比較と候補選定</span>（年間総コスト比較、供給安定性・財務健全性も評価）</li>
            <li><span className="font-semibold text-slate-900">STEP 5：契約締結と切替手続き</span>（送配電事業者への切替手続き、最終保障供給からの脱出日確認）</li>
          </ol>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">緊急時のチェックリスト（6 項目）</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>現行の電力契約書と直近 12 ヶ月分の請求書を手元に用意している</li>
            <li>供給地点特定番号（22 桁）を把握している（見積依頼に必須）</li>
            <li>月間使用量と最大需要電力（kW）のデータを準備している</li>
            <li>最終保障供給の適用開始日と上限期間（通常 9 ヶ月）を確認している</li>
            <li>3 社以上の電力会社・新電力に見積依頼を送付済みである</li>
            <li>経営層への第一報を完了し、切替完了の目標期日を合意している</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            供給期間の上限（通常 9 ヶ月程度）が来ても代替先が見つからない場合は、電力供給が停止するリスクがあります。
            発覚後できる限り早く複数社への相談を開始し、必要であれば電力コンサルタントに支援を依頼することも選択肢です。
          </p>
        </section>

        <section id="internal-explanation" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給を社内説明するときのポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は一般的にはなじみの薄い制度であり、なぜ料金が高いのか、いつまで続くのか、どう対処するのかを分かりやすく伝えることが求められます。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">社内説明例（一言要約）</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              「最終保障供給とは、電力会社との通常契約が何らかの理由で失効した際に、電力の供給を一定期間継続するための制度です。電力自由化後のセーフティネットとして法律で定められており、一般送配電事業者（旧来の地域電力会社）が担当します。料金は通常契約より高く設定されており、あくまでも緊急避難的な利用が前提です。」
            </p>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">通常契約 vs 最終保障供給 比較表（社内説明用）</h3>
          <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">比較項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">通常契約</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">最終保障供給</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">説明のポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">料金水準</td>
                  <td className="border border-slate-200 px-3 py-2">契約ベース</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">通常比 +20〜60% 高い</td>
                  <td className="border border-slate-200 px-3 py-2">「割高だが供給は継続」</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">契約期間</td>
                  <td className="border border-slate-200 px-3 py-2">1〜3 年</td>
                  <td className="border border-slate-200 px-3 py-2">原則 1 年以内の切替前提</td>
                  <td className="border border-slate-200 px-3 py-2">「一時的な措置」</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">選択の自由度</td>
                  <td className="border border-slate-200 px-3 py-2">複数社から選択</td>
                  <td className="border border-slate-200 px-3 py-2">送配電事業者が指定</td>
                  <td className="border border-slate-200 px-3 py-2">「選べない」</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">料金の予見性</td>
                  <td className="border border-slate-200 px-3 py-2">契約条件で見通せる</td>
                  <td className="border border-slate-200 px-3 py-2">市場環境で変動しやすい</td>
                  <td className="border border-slate-200 px-3 py-2">「予算超過リスク」</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">経営層への報告 3 ステップ</h3>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Step 1：現状説明</span> — 最終保障供給に入った／入りそうな状況。なぜこうなったか（新電力撤退／契約切れ）を端的に。
            </li>
            <li>
              <span className="font-semibold text-slate-900">Step 2：コスト影響</span> — 月額・年額の増加額。通常契約との差額を具体的な数値で。
            </li>
            <li>
              <span className="font-semibold text-slate-900">Step 3：対応策</span> — 切替先の候補と見積取得状況、早期離脱のスケジュール（○月までに完了）を提示。
            </li>
          </ol>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">「なぜこうなったのか」への回答準備</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li><span className="font-semibold">電力自由化制度上のリスクであること</span>：電力会社の倒産・撤退は制度上起こりうるリスクとして認識されています。</li>
            <li><span className="font-semibold">事前察知が難しい場合があること</span>：突然の事業停止発表ケースでは事前察知に限界があります。</li>
            <li><span className="font-semibold">今後の再発防止策</span>：契約先の定期モニタリング、代替候補リスト作成、更新タイミングでの複数社見積など、管理強化策を提示します。</li>
          </ul>
        </section>

        <section id="comparison-positioning" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給を比較検討の中でどう位置づけるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は電力自由化後のセーフティネット制度ですが、法人の電気料金管理の観点からは「使い続けるべき選択肢」ではなく「一時的な緊急避難手段」として位置づけられます。医療における救急医療に近い位置づけで、緊急の際には頼れるが、日常的に使い続けることを前提とした制度ではありません。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">長期利用すべきでない 4 つの理由</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li><span className="font-semibold text-slate-900">コストが高止まりし続ける</span>：通常契約に比べて高い料金が毎月発生。使用量の大きい法人では月額数百万円規模の余分なコストが積み上がります。</li>
            <li><span className="font-semibold text-slate-900">供給期間の上限がある</span>：通常 9 ヶ月程度の上限。期限が切れると電力供給が停止するリスク。</li>
            <li><span className="font-semibold text-slate-900">プランの選択肢が制約される</span>：地域の一般送配電事業者からしか電力を受けられず、コストや条件を最適化する余地がない。</li>
            <li><span className="font-semibold text-slate-900">コスト予測がしにくい</span>：通常契約の固定プランと違い、料金改定があり得るため予算策定が難しい。</li>
          </ul>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">契約選択の判断基準マトリクス（5 パターン）</h3>
          <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">状況</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">最終保障供給を選ぶべきか</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">優先アクション</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">新電力が撤退し代替先が見つからない</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-amber-700">やむを得ず利用</td>
                  <td className="border border-slate-200 px-3 py-2">即座に 3 社以上に見積依頼</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2">契約切れが迫り準備が間に合わない</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-amber-700">一時的に利用</td>
                  <td className="border border-slate-200 px-3 py-2">並行して見積取得を進める</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">他社の見積単価が最終保障より高い</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-amber-700">最終保障を短期利用</td>
                  <td className="border border-slate-200 px-3 py-2">市場安定後に再見積</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2">通常契約の候補がある</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-emerald-700">利用不要</td>
                  <td className="border border-slate-200 px-3 py-2">通常切替手続きを進める</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">最終保障に入っている期間が長期化</td>
                  <td className="border border-slate-200 px-3 py-2 font-bold text-red-700">早急に離脱</td>
                  <td className="border border-slate-200 px-3 py-2">条件を緩めて切替先を確保</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※「最終保障を短期利用」の場合も、原則として移行から 3 ヶ月以内に通常契約への切替を完了させることを目標にします。
          </p>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">通常契約への切替タイミングの判断基準</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li><span className="font-semibold text-slate-900">供給期間の上限から逆算する</span>：残余期間が 3 ヶ月を切ったら、遅くとも切替手続きを開始（通常数週間〜1 ヶ月かかる）。</li>
            <li><span className="font-semibold text-slate-900">通常契約の年間コストが確定したら速やかに切り替える</span>：見積比較完了で合理的な選択肢が確定したら即決定、コスト差の累積を防ぐ。</li>
            <li><span className="font-semibold text-slate-900">「もっとよい条件が出るかもしれない」と先延ばしにしない</span>：先延ばしの間も高い料金が積み上がるため、合理的な範囲で早期判断。</li>
          </ul>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">脱出を特に急ぐべき状況</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>月間電力使用量が大きく、毎月の余分なコストが大きい場合</li>
            <li>供給期間の残余が半分を切っている場合</li>
            <li>利益率が低く、高いコストが直接的に損益に影響する業種の場合</li>
            <li>複数拠点が最終保障供給に移行しており、累積コストが増大している場合</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給シリーズの関連ページ</h2>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-3 grid gap-2 md:grid-cols-2">
            <Link href="/last-resort-supply-history" className="rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm transition hover:bg-sky-100">
              <span className="font-semibold text-slate-900">最終保障供給の件数推移と2022年急増の詳細</span>
            </Link>
            <Link href="/last-resort-supply-target" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給の対象は誰か</span>
            </Link>
            <Link href="/last-resort-supply-price" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給の料金はなぜ高いのか</span>
            </Link>
            <Link href="/last-resort-supply-switch" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給から切り替えるには</span>
            </Link>
            <Link href="/municipality-last-resort-supply" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">自治体向け最終保障供給の注意点</span>
            </Link>
            <Link href="/last-resort-supply-high-voltage" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">高圧需要家の最終保障供給</span>
            </Link>
            <Link href="/last-resort-supply-extra-high-voltage" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">特別高圧での最終保障供給の注意点</span>
            </Link>
            <Link href="/last-resort-supply-terms" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給の契約条件</span>
            </Link>
            <Link href="/last-resort-vs-retail-contract" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給と通常契約の違い</span>
            </Link>
            <Link href="/last-resort-supply-emergency-response" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給に入りそうなときの対応</span>
            </Link>
            <Link href="/last-resort-supply-internal-explanation" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">社内説明のポイント</span>
            </Link>
            <Link href="/articles/last-resort-supply" className="rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm transition hover:bg-sky-100">
              <span className="font-semibold text-sky-900">最終保障供給カテゴリ一覧へ</span>
            </Link>
          </div>
        </section>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2025-08-01" />

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/last-resort-vs-retail-contract", title: "最終保障供給と通常契約の違い", description: "役割・料金・期間の差を比較。" },
            { href: "/fuel-cost-adjustment-upper-limit", title: "燃料費調整額の上限制度", description: "2022年の新電力撤退の背景。" },
            { href: "/market-price-adjustment-risk", title: "市場価格調整額の上振れリスク", description: "JEPX急騰の請求影響。" },
            { href: "/when-to-review-electricity-contract", title: "法人が電力契約を見直すタイミング", description: "橋渡しから本契約への整理。" },
            { href: "/concierge", title: "AI コンシェルジュで関連情報を探す", description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。" },
            { href: "/articles/basic", title: "法人電気料金の基礎知識", description: "電気料金の構成・契約の種類・値上がり要因など、基礎から体系的に学べます（人気ハブページ）。" },
            { href: "/case-study-last-resort-recovery", title: "最終保障供給からの復旧事例", description: "最終保障供給から通常契約に戻した事例。" },
          ]}
        />

        <AuthorBadge publishedAt="2026-03-01" updatedAt="2026-03-01" />

        <ContentCta
          heading="通常契約への見直しを進める"
          description="最終保障供給の基本を整理したら、比較ページとシミュレーターで次契約の方向性を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーターを使う" },
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
