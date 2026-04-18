import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["case-studies"];


const pageTitle = "最終保障供給から通常契約に切り替えた事例｜中小製造業";
const pageDescription =
  "新電力の撤退で最終保障供給に移行した中小製造業が、5ヶ月で通常契約への切り替えを完了し、電気代を月額36%削減した事例。最終保障供給の実態・脱出手順・新たな電力調達戦略を解説します。";
const pageUrl = "https://simulator.eic-jp.org/case-study-last-resort-recovery";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["最終保障供給 脱出", "最終保障供給 切り替え", "新電力 撤退 対応", "最終保障供給 高い", "電力 緊急対応", "中小企業 電気代"],
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

const monthlyComparison = [
  { month: "最終保障（1ヶ月目）", type: "最終保障供給", amount: "432,000", note: "移行直後。実態把握中" },
  { month: "最終保障（2ヶ月目）", type: "最終保障供給", amount: "445,000", note: "季節要因で増加" },
  { month: "最終保障（3ヶ月目）", type: "最終保障供給", amount: "438,000", note: "並行して新契約交渉中" },
  { month: "最終保障（4ヶ月目）", type: "最終保障供給", amount: "421,000", note: "切り替え手続き完了間近" },
  { month: "最終保障（5ヶ月目）", type: "最終保障供給", amount: "428,000", note: "切り替え月（按分）" },
  { month: "切り替え後（1ヶ月目）", type: "新電力（通常契約）", amount: "274,000", note: "▲154,000円（▲36%）" },
  { month: "切り替え後（2ヶ月目）", type: "新電力（通常契約）", amount: "268,000", note: "安定稼働" },
  { month: "切り替え後（3ヶ月目）", type: "新電力（通常契約）", amount: "281,000", note: "季節変動あるも安定" },
];

const beforeAfter = [
  { item: "基本料金（月額）", before: "198,000円", after: "124,000円", diff: "▲74,000円" },
  { item: "電力量料金（月額）", before: "162,000円", after: "108,000円", diff: "▲54,000円" },
  { item: "燃料費調整額（月額）", before: "58,000円", after: "38,000円", diff: "▲20,000円" },
  { item: "最終保障供給加算金（月額）", before: "15,000円", after: "0円", diff: "▲15,000円" },
  { item: "合計（月額）", before: "433,000円", after: "270,000円", diff: "▲163,000円（▲38%）" },
  { item: "合計（年額換算）", before: "約520万円", after: "約324万円", diff: "▲約196万円" },
];

const steps = [
  {
    step: "STEP 1",
    title: "最終保障供給の実態を把握する",
    detail: "移行後すぐに一般送配電事業者から届いた通知書を精読し、最終保障供給の料金体系（電力量料金の割増・加算金・契約制限）を確認。月額コストが従来比で約60%増加していることを試算。「最大1年程度しか供給されない」制度であることも把握。",
  },
  {
    step: "STEP 2",
    title: "新規電力調達先の緊急探索",
    detail: "複数の新電力・大手電力の営業担当に連絡を取り、現在の状況を説明。最終保障供給から切り替えること自体は特別な手続きは不要で、通常の新規申し込みと同様のプロセスで対応可能であることを確認。3社に同時見積もりを依頼。",
  },
  {
    step: "STEP 3",
    title: "電力調達条件の精査と事業者選定",
    detail: "3社の見積もりを比較検討。「また突然撤退する可能性が低いか」「燃調費上限設定があるか」「契約期間と違約金条項」を重視。財務基盤が安定している事業者を選定。単価最安ではなく安定性を重視した。",
  },
  {
    step: "STEP 4",
    title: "切り替え手続きの実施",
    detail: "選定した新電力と契約締結後、一般送配電事業者への切り替え申請。最終保障供給からの切り替えは通常の新規切り替えと同様のスケジュール感（申請から切り替えまで約1ヶ月）で完了。移行から5ヶ月目で通常契約に復帰。",
  },
];

export default function CaseStudyLastResortRecoveryPage() {
  return (
    <>
      <ArticleJsonLd
        headline="最終保障供給から通常契約に切り替えた事例｜中小製造業"
        description="新電力の撤退で最終保障供給に移行した中小製造業が、5ヶ月で通常契約への切り替えを完了し、電気代を月額36%削減した事例。最終保障供給の実態・脱出手順・新たな電力調達戦略を解説します。"
        url="https://simulator.eic-jp.org/case-study-last-resort-recovery"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給から通常契約に切り替えた事例" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/case-studies" className="underline-offset-2 hover:underline">事例・削減実績を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">最終保障供給からの通常契約復帰事例</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">CASE STUDY ／ 事例・削減実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          最終保障供給から通常契約に切り替えた事例
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">中小製造業（従業員45名）／ 高圧受電</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          コスト削減のため新電力へ切り替えていた中小製造業が、その新電力の事業撤退により
          自動的に最終保障供給へ移行。電気代が従来の約1.6倍に跳ね上がる緊急事態に直面しました。
          通知から5ヶ月という短期間で通常契約への復帰を完了し、
          電気代を最終保障供給比で月額<strong>約38%削減（約163,000円/月）</strong>しました。
          最終保障供給の実態と、速やかに脱出するための手順を解説します。
        </p>
      </header>

      {/* 企業プロフィール */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">企業プロフィール</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["業種", "樹脂・プラスチック成形加工"],
                ["従業員数", "約45名"],
                ["立地", "近畿圏（関西電力管内）"],
                ["受電区分", "高圧（6,600V）"],
                ["最終保障供給移行前の電力会社", "中規模新電力（撤退）"],
                ["月額電気代（新電力時）", "約270万円"],
                ["最終保障供給移行後の月額", "約433万円（約+60%）"],
                ["通常契約復帰後の月額", "約270万円（最終保障比▲38%）"],
                ["最終保障供給の期間", "約5ヶ月"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-700 w-52">{label}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 最終保障供給とは */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最終保障供給とは：なぜこんなに高いのか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給とは、電力会社が撤退・契約解除などで電気の供給を受けられなくなった需要家に対し、
          一般送配電事業者が最終的に電力を供給する制度です。
          「セーフティネット」としての制度であり、料金は通常の電力プランより<strong>大幅に割高</strong>に設定されています。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            { title: "料金が高い理由", body: "最終保障供給料金は、通常の電力プランより電力量料金が割高。さらに「最終保障供給加算金」が上乗せされる。" },
            { title: "供給期間の制限", body: "最終保障供給は「当面の電力供給確保」が目的で、通常は最大9ヶ月〜1年程度。その間に新たな契約先を見つける必要がある。" },
            { title: "制度の主な適用ケース", body: "供給する新電力の倒産・撤退、契約違反による強制解除、転居等で引き継ぎが生じた場合など。" },
            { title: "対処の基本方針", body: "最終保障供給に移行したらできるだけ早く新たな電力会社と契約すること。長期間放置するほどコスト超過が積み上がる。" },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 課題 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">移行時の状況と課題</h2>
        <ul className="mt-4 space-y-3">
          {[
            "新電力からの「事業停止・電力供給終了」の通知が届いたのは供給終了の1ヶ月前。準備する時間が非常に短かった。",
            "最終保障供給に自動移行した後、料金が月額で約163万円増加。製造業の利益率を考えると経営に直接影響する水準だった。",
            "「最終保障供給は最大1年程度しか続かない」という制限があり、焦る中で冷静に次の電力会社を選ぶ必要があった。",
            "同じ失敗を繰り返さないよう、次の電力会社の選定は「安さ」だけでなく「安定性」「撤退リスクの低さ」を重視したかった。",
            "担当者に電力調達の専門知識がなく、どこから手をつければ良いかわからない状態だった。",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 施策 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">実施した手順（最終保障供給からの脱出）</h2>
        <div className="mt-4 space-y-4">
          {steps.map((m, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-sky-700">{m.step}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 月別推移テーブル */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">月別の電気代推移</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">時期</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">供給形態</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">月額電気代</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">備考</th>
              </tr>
            </thead>
            <tbody>
              {monthlyComparison.map((row, i) => (
                <tr key={i} className={row.type === "最終保障供給" ? "bg-red-50" : "bg-green-50"}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.month}</td>
                  <td className={`border border-slate-200 px-3 py-2 font-medium ${row.type === "最終保障供給" ? "text-red-700" : "text-green-700"}`}>{row.type}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{parseInt(row.amount).toLocaleString()}円</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Before/After テーブル */}
        <h3 className="mt-5 text-base font-semibold text-slate-900">費目別 Before / After（月額）</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">費目</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">最終保障供給時</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">通常契約復帰後</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">削減額</th>
              </tr>
            </thead>
            <tbody>
              {beforeAfter.map((row, i) => (
                <tr key={i} className={i === beforeAfter.length - 1 ? "bg-sky-100 font-bold" : i === beforeAfter.length - 2 ? "bg-sky-50 font-semibold" : ""}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.item}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.before}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.after}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-green-700">{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CSS バー */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">電気代の推移（月額・万円）</h3>
          <div className="space-y-2">
            {[
              { label: "最終保障供給時（平均）", amount: 43, color: "bg-red-400" },
              { label: "通常契約復帰後（平均）", amount: 27, color: "bg-sky-500" },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>{bar.label}</span>
                  <span className="font-semibold">約{bar.amount}万円/月</span>
                </div>
                <div className="h-4 w-full rounded bg-slate-200">
                  <div className={`h-4 rounded ${bar.color}`} style={{ width: `${(bar.amount / 50) * 100}%` }} />
                </div>
              </div>
            ))}
            <p className="text-xs text-green-700 font-semibold mt-1">通常契約復帰で月額▲約16万円（▲38%）</p>
          </div>
        </div>
      </section>

      {/* 成功要因 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">成功要因・今後の対策</h2>
        <ul className="mt-4 space-y-3">
          {[
            "早期対応が最重要：最終保障供給への移行が確定した段階ですぐに新契約の探索を開始したことで5ヶ月での復帰が可能に",
            "複数社への同時打診：1社ずつ順番に当たるのではなく、複数社に同時に見積もり依頼し選択肢を確保",
            "安定性を選定基準の最優先に：同じ失敗を繰り返さないため、単価の安さより事業継続性・財務基盤を重視",
            "最終保障供給の仕組みを理解：「最大1年」という制限を知っていたため、焦りすぎず計画的に動けた",
            "今後は年1回の電力調達見直しを定期化：電力会社の財務状況確認と代替先リストの常時更新をルールに",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-1 flex-shrink-0 text-green-600 font-bold">✓</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 担当者コメント */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">担当者コメント</h2>
        <blockquote className="mt-4 border-l-4 border-sky-400 pl-4 text-sm leading-7 text-slate-700 sm:text-base italic">
          「最終保障供給に移行したとき、会社の電気が止まるのかと最初は本当に焦りました。
          でも制度を理解すれば、次の契約先を探す時間は十分あることがわかりました。
          5ヶ月は長かったですが、その間に電力調達について本当に深く学びました。
          今は定期的に電力会社の状況を確認するようにしています。
          最終保障供給は『緊急避難先』であって、長居する場所ではありません。」
        </blockquote>
        <p className="mt-2 text-xs text-slate-500">― 総務部 管理担当</p>
      </section>

      {/* 誘導 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">最終保障供給に移行している方へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は「すぐに新しい電力契約を探してください」というサインです。
          <Link href="/last-resort-supply-emergency-response" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給に入りそうなときの対応手順</Link>を確認し、
          できるだけ早く複数の電力会社への見積もり依頼を開始してください。
          お急ぎの場合は<Link href="/contact" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">お問い合わせ</Link>から直接ご相談ください。
        </p>
      </section>

      <p className="mt-4 text-xs text-slate-400 leading-5">
        ※本ページの事例は、複数の実務相談内容をもとに再構成したモデルケースです。数値は業界平均を参考にした概算値であり、実際の削減効果は条件により異なります。
      </p>

      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連事例・記事"
          links={[
            { href: "/last-resort-supply-emergency-response", title: "最終保障供給に入りそうなときの対応手順", description: "最終保障供給への移行前・移行後の対処法を解説" },
            { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "次の電力会社を選ぶための比較手順" },
            { href: "/when-to-review-electricity-contract", title: "見直しのタイミングはいつか", description: "緊急時を含む電力契約見直しのタイミング" },
            { href: "/case-study-price-increase-negotiation", title: "値上げ通知の交渉で15%圧縮した事例", description: "値上げ通知への対処法と交渉のポイント" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="最終保障供給の状況を今すぐ確認・相談"
          description="最終保障供給に移行している、または移行しそうな場合は早急な対処が必要です。まずシミュレーターで現状を確認し、必要に応じてご相談ください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "相談・問い合わせ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
