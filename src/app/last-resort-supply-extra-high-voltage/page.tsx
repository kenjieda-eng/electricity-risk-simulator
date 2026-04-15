import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "特別高圧で最終保障供給を使うときの注意点｜料金差シミュレーションと確認ポイント";
const pageDescription =
  "特別高圧需要家が最終保障供給に切り替わる場合の注意点を解説。高圧との料金差、月100万kWhのコストシミュレーション、確認すべき5項目を詳しく説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 特別高圧",
    "特別高圧 緊急 電力供給",
    "大規模需要家 最終保障",
    "特別高圧 電力契約 失効",
    "最終保障供給 料金 特別高圧",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/last-resort-supply-extra-high-voltage",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-extra-high-voltage",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const differencePoints = [
  {
    point: "供給の仕組みが複雑",
    detail:
      "特別高圧では、最終保障供給を提供できる電力会社が高圧に比べて限られます。また、大型の変電設備が絡むため、供給条件の調整に時間がかかることがあります。",
  },
  {
    point: "影響額が非常に大きい",
    detail:
      "特別高圧の使用量は非常に大きいため、最終保障供給の高い料金単価が適用されると、月次コストが通常時の数倍〜十数倍規模になることがあります。",
  },
  {
    point: "代替供給先の確保が困難",
    detail:
      "特別高圧を受け入れられる電力会社・新電力の数は限られています。最終保障供給から早期に脱出するための代替先を素早く確保することが高圧より困難になる場合があります。",
  },
  {
    point: "供給期間の上限への注意",
    detail:
      "最終保障供給には供給期間の上限（通常9カ月程度）があります。特別高圧では新規供給の調整に時間がかかるため、期間内に代替契約を結べるよう早期に動く必要があります。",
  },
];

const checklistItems = [
  {
    item: "現在の月間使用量（kWh）と最大需要電力（kW）を把握しているか",
    note: "見積依頼・コスト試算の基礎データ。30分コマ別データが理想",
  },
  {
    item: "最終保障供給の適用期間の上限と残余日数を確認しているか",
    note: "通常9カ月。残余期間内に代替契約を完了させるスケジュールを逆算する",
  },
  {
    item: "特別高圧を受け入れ可能な電力会社・新電力へ打診を開始しているか",
    note: "対応可能な事業者は限られるため、早期に複数社へ同時打診することが重要",
  },
  {
    item: "経営層へ月額・年額の追加コスト影響を数字で報告しているか",
    note: "下記シミュレーション表を活用して具体的な金額を伝える",
  },
  {
    item: "一般送配電事業者との連絡窓口と切替手続きの流れを確認しているか",
    note: "切替完了まで数週間〜2カ月かかるため、早期に手続きを開始する",
  },
];

export default function LastResortSupplyExtraHighVoltagePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/last-resort-supply" className="underline-offset-2 hover:underline">最終保障供給を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">特別高圧の最終保障供給</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          特別高圧で最終保障供給を使うときの注意点
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は、電力小売会社の倒産や契約失効などで電力供給を受けられなくなった法人が、一時的に電力の供給を確保できるセーフティネット制度です。高圧需要家でもよく知られていますが、特別高圧需要家が最終保障供給を利用する場合には、さらに注意が必要な事項があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          特別高圧の大規模需要家では、最終保障供給に切り替わった際のコスト増が事業運営に甚大な影響を与えるケースがあります。このページでは、特別高圧需要家が留意すべき注意点を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>特別高圧と高圧の最終保障供給料金差（比較表）</li>
            <li>月100万kWhでの費用シミュレーション</li>
            <li>高圧との違いと特別高圧特有の注意点</li>
            <li>早期脱出のための5つの確認ポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            最終保障供給とは
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給（Last Resort Supply）は、一般送配電事業者（旧一般電気事業者）が提供する制度で、電力小売業者との契約が失効した法人に対して一定期間、電力供給を継続する制度です。電力自由化後のセーフティネットとして位置づけられています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし、最終保障供給の料金は通常の小売契約に比べて高く設定されており、あくまでも「緊急避難的」な利用が前提です。早期に通常の小売契約に戻ることが求められます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給の基本的な仕組みは{" "}
            <Link
              href="/last-resort-supply"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              最終保障供給とは
            </Link>
            {" "}で確認できます。
          </p>
        </section>

        {/* Table 1: 料金差比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            特別高圧と高圧の最終保障供給料金差
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧は通常契約の単価が低い分、最終保障供給に移行した際の絶対額の影響が極めて大きくなります。下表で高圧との差を確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">項目</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">高圧</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">特別高圧</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">特別高圧の特記事項</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">契約電力</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">50〜2,000kW</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">2,000kW超</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">個別設定が多い</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">通常契約の単価目安</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">18〜22円/kWh</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">14〜18円/kWh</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">個別交渉ベース</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">最終保障供給の単価目安</td>
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-red-700">25〜30円/kWh</td>
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-red-700">22〜28円/kWh</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">通常比+40〜60%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">月5万kWhの月額差</td>
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-red-700">+15〜40万円</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-500">―</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-500">―</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">月50万kWhの月額差</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-500">―</td>
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-red-700">+200〜500万円</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">年間2,400〜6,000万円増</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">※単価・差額は目安です。電力会社・時期・地域により異なります。</p>
        </section>

        {/* Table 2: シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            特別高圧で最終保障供給に入った場合のシミュレーション（月100万kWh）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            大規模工場やデータセンターを想定した月間使用量100万kWhのケースで試算すると、最終保障供給移行による年間影響額は約9,600万円に達します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[540px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">費目</th>
                  <th className="border border-slate-300 px-4 py-2 text-right font-semibold text-slate-900">通常契約時</th>
                  <th className="border border-slate-300 px-4 py-2 text-right font-semibold text-slate-900">最終保障供給時</th>
                  <th className="border border-slate-300 px-4 py-2 text-right font-semibold text-slate-900">差額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">電力量料金</td>
                  <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">1,500万円</td>
                  <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">2,200万円</td>
                  <td className="border border-slate-300 px-4 py-2 text-right font-semibold text-red-700">+700万円</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">基本料金</td>
                  <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">480万円</td>
                  <td className="border border-slate-300 px-4 py-2 text-right text-slate-700">600万円</td>
                  <td className="border border-slate-300 px-4 py-2 text-right font-semibold text-red-700">+120万円</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">月額合計</td>
                  <td className="border border-slate-300 px-4 py-2 text-right font-semibold text-slate-900">約2,000万円</td>
                  <td className="border border-slate-300 px-4 py-2 text-right font-semibold text-slate-900">約2,800万円</td>
                  <td className="border border-slate-300 px-4 py-2 text-right font-semibold text-red-700">+約800万円</td>
                </tr>
                <tr className="bg-sky-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">年額影響</td>
                  <td className="border border-slate-300 px-4 py-2 text-right text-slate-500">―</td>
                  <td className="border border-slate-300 px-4 py-2 text-right text-slate-500">―</td>
                  <td className="border border-slate-300 px-4 py-2 text-right font-bold text-red-700">+約9,600万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">※試算値です。実際の料金は電力会社・契約条件・燃料費調整額等により異なります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            特別高圧の最終保障供給：高圧との違いと注意点
          </h2>
          <div className="mt-3 space-y-3">
            {differencePoints.map((item) => (
              <div
                key={item.point}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{item.point}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            特別高圧需要家が確認すべき5項目
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給に入った直後、または入る可能性が生じた時点で以下の5項目を確認してください。
          </p>
          <div className="mt-4 space-y-3">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.item}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            早期脱出のための準備事項
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給に入る前、または入った直後から、以下の準備を並行して進めることが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">代替供給先の早期打診：</span>
              特別高圧を受け入れられる電力会社・大手新電力に直ちに相談を開始します。新規調達には数カ月かかることがあるため、最終保障供給に切り替わった直後から動くことが重要です。
            </li>
            <li>
              <span className="font-semibold text-slate-900">使用量データの迅速な提供：</span>
              見積依頼には過去の使用量データが必要です。30分コマ別のデータを準備しておきます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">供給期間の残日数を把握する：</span>
              最終保障供給には供給期間の上限があります。残余期間を常に把握し、余裕を持って代替契約を締結します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">経営層への報告と意思決定の迅速化：</span>
              最終保障供給への移行は速やかに経営層に報告し、代替先選定の意思決定を早める体制を整えます。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            最終保障供給に入らないための事前の備え
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給リスクを回避するためには、契約先の電力会社の経営状況を定期的に確認し、供給停止リスクを事前に察知することが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約先の決算・財務状況を年に一度確認する。</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>の上限超過が継続している場合、電力会社の経営圧迫の可能性を検討する。</li>
            <li>契約更新時期が近い場合は複数社から見積を取り、代替候補を持っておく。</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給に近づいている状況の対応手順は{" "}
            <Link
              href="/last-resort-supply-emergency-response"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              最終保障供給に入りそうなときの対応手順
            </Link>
            {" "}で確認できます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "最終保障供給制度の基本的な仕組みと概要。",
            },
            {
              href: "/last-resort-supply-emergency-response",
              title: "最終保障供給に入りそうなときの対応手順",
              description: "事前察知と切替準備の手順。",
            },
            {
              href: "/last-resort-supply-internal-explanation",
              title: "最終保障供給を社内説明するときのポイント",
              description: "経営層への説明と意思決定のスピードアップ。",
            },
            {
              href: "/extra-high-voltage-contract-review-points",
              title: "特別高圧契約の見直しで確認したいこと",
              description: "最終保障供給リスクを踏まえた通常契約の見直し。",
            },
            {
              href: "/high-voltage-vs-extra-high-voltage-differences",
              title: "高圧と特別高圧の違い",
              description: "特別高圧の基本的な位置づけの理解。",
            },
            {
              href: "/last-resort-supply-comparison-positioning",
              title: "最終保障供給を比較検討の中でどう位置づけるか",
              description: "通常契約と最終保障供給の判断基準。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約見直しの始め方",
              description: "最終保障供給脱出後の通常契約への移行手順。",
            },
          ]}
        />

        <ContentCta
          heading="特別高圧の電気料金リスクをシミュレーターで確認する"
          description="現在の使用量をもとに、最終保障供給水準の料金になった場合のコスト増加額をシミュレーターで試算できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
