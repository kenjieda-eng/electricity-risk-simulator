import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "値上げ通知の交渉で15%圧縮した事例｜製造業B社";
const pageDescription =
  "新電力から突然の大幅値上げ通知を受けた製造業B社が、交渉と代替調達の同時並行で値上げ幅を15%圧縮した事例。値上げ通知への対処法・交渉の進め方・代替先の探し方を詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/case-study-price-increase-negotiation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力 値上げ通知 対応", "電気代 値上げ交渉", "新電力 値上げ", "電力契約 交渉", "製造業 電気代 値上げ対策", "電力 単価交渉"],
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

const negotiationTimeline = [
  { day: "Day 1", event: "新電力から値上げ通知書が届く（電力量料金+28%、燃調費上限撤廃）", action: "通知内容を精査し、経営・財務への影響額を試算" },
  { day: "Day 3", event: "社内で緊急対策会議を開催", action: "「交渉」と「代替調達探索」を同時並行で進める方針を決定" },
  { day: "Day 5", event: "現契約の電力会社に交渉アポイント取得", action: "交渉担当者を1名に絞り、代替先の見積もりも同時依頼" },
  { day: "Day 10", event: "代替新電力2社・大手電力の見積もりを受領", action: "現契約電力に「他社見積もり」を提示しながら交渉開始" },
  { day: "Day 18", event: "現契約電力との交渉決着", action: "当初の+28%から+13%への圧縮に成功。燃調費上限も一部設定を継続" },
  { day: "Day 22", event: "最終的な契約更新", action: "交渉結果を文書化し、次回更新時の条件も事前合意" },
];

const impactCalc = [
  { item: "通知された値上げ後の電力量料金（月額）", value: "1,536,000円", note: "現行1,200,000円に+28%" },
  { item: "交渉後の電力量料金（月額）", value: "1,356,000円", note: "現行に+13%（+156,000円）" },
  { item: "交渉による圧縮額（月額）", value: "▲180,000円", note: "値上げ通知比▲15%の圧縮" },
  { item: "交渉による圧縮額（年額）", value: "▲2,160,000円", note: "値上げ幅を年間216万円抑制" },
  { item: "燃調費上限設定の継続", value: "リスク軽減", note: "上限撤廃を阻止。年間リスク額を最大500万円抑制" },
];

export default function CaseStudyPriceIncreaseNegotiationPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">CASE STUDY ／ 事例・削減実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          値上げ通知の交渉で15%圧縮した事例
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">製造業B社（従業員120名）／ 高圧受電</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          新電力から「電力量料金を28%値上げ、燃料費調整額の上限を撤廃」という通知を突然受け取った製造業B社の事例です。
          通知から22日間という短期間で、<strong>交渉と代替調達の同時並行</strong>という戦略を実施。
          値上げ幅を28%から13%へ15%圧縮することに成功し、燃調費上限の一部継続も勝ち取りました。
          値上げ通知を受けた際の具体的な対処手順を詳しく解説します。
        </p>
      </header>

      {/* 企業プロフィール */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">企業プロフィール</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["業種", "機械部品製造"],
                ["従業員数", "約120名"],
                ["立地", "中部圏（中部電力管内）"],
                ["受電区分", "高圧（6,600V）"],
                ["現契約", "新電力（切り替えから2年目）"],
                ["月額電気代（見直し前）", "約220万円"],
                ["値上げ通知内容", "電力量料金+28%・燃調費上限撤廃"],
                ["値上げ後の月額（通知どおり）", "約281万円（+61万円/月）"],
                ["交渉後の月額", "約236万円（+16万円/月）"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-700 w-48">{label}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 値上げ通知の内容 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">値上げ通知の内容と問題点</h2>
        <ul className="mt-4 space-y-3">
          {[
            "通知は契約更新60日前に届き、拒否すれば契約解除・最終保障供給への移行となる内容だった。実質的に「受け入れるか解約か」の二択に見えた。",
            "電力量料金の+28%は年間で約730万円の増加。経営への影響が深刻で、価格転嫁もすぐには難しかった。",
            "燃料費調整額の上限撤廃は、市場価格が高騰した際のリスクが無制限になることを意味し、将来的にさらに大きなコスト増が懸念された。",
            "通知を受けた時点で、代替となる電力会社をすぐに探せる体制がなく、当初は値上げを受け入れるしかないと感じていた。",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 交渉タイムライン */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">交渉の進め方（タイムライン）</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">時期</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">出来事</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">対処・アクション</th>
              </tr>
            </thead>
            <tbody>
              {negotiationTimeline.map((row, i) => (
                <tr key={i}>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-sky-700 whitespace-nowrap">{row.day}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.event}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 交渉の結果 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">交渉の結果（コスト影響）</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">項目</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">金額・内容</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">備考</th>
              </tr>
            </thead>
            <tbody>
              {impactCalc.map((row, i) => (
                <tr key={i} className={row.item.includes("圧縮額") ? "bg-green-50 font-medium" : ""}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.item}</td>
                  <td className={`border border-slate-200 px-3 py-2 text-right ${row.value.startsWith("▲") ? "text-green-700" : "text-slate-700"}`}>{row.value}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CSS バー */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">値上げ幅の圧縮（月額電力量料金）</h3>
          <div className="space-y-3">
            {[
              { label: "通知どおりの値上げ後（+28%）", amount: 1536, color: "bg-red-400", max: 1600 },
              { label: "交渉後の確定額（+13%）", amount: 1356, color: "bg-amber-400", max: 1600 },
              { label: "交渉前の現行額", amount: 1200, color: "bg-sky-500", max: 1600 },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>{bar.label}</span>
                  <span className="font-semibold">{bar.amount.toLocaleString()}円/月</span>
                </div>
                <div className="h-3 w-full rounded bg-slate-200">
                  <div className={`h-3 rounded ${bar.color}`} style={{ width: `${(bar.amount / bar.max) * 100}%` }} />
                </div>
              </div>
            ))}
            <p className="text-xs text-green-700 font-semibold">交渉による圧縮効果：月額▲180,000円 / 年間▲216万円</p>
          </div>
        </div>
      </section>

      {/* 交渉で有効だったポイント */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">交渉で有効だった3つのポイント</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "「他社見積もり」を武器にする",
              body: "代替事業者の見積もりを取得し、現契約電力に提示することで「切り替えもあり得る」という選択肢を示した。交渉力の源泉となった。",
            },
            {
              title: "交渉期限を自分で設定する",
              body: "「〇月〇日までに回答がなければ他社に切り替える」と期限を明示することで、相手の意思決定を迅速化した。",
            },
            {
              title: "値上げの根拠を問いただす",
              body: "「なぜ+28%なのか、燃料費・調達コストのデータを開示してほしい」と根拠を求めた。根拠が曖昧な部分が圧縮の余地になった。",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 成功要因 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">成功要因</h2>
        <ul className="mt-4 space-y-3">
          {[
            "「受け入れるしかない」と思わなかった：値上げ通知は交渉の開始点であり、必ずしも受け入れる義務はない",
            "代替調達の探索を同時に進めた：逃げ道があることが交渉力の根拠。代替先なしでは交渉にならない",
            "短期間での集中交渉：60日の猶予期間を最大活用し、20日以内に決着させた",
            "燃調費上限の継続を重視：目先の単価だけでなく、将来のリスクヘッジを交渉条件に含めた",
            "文書による合意：口頭ではなく書面で交渉結果を確認し、後からの解釈齟齬を防いだ",
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
          「最初は+28%の値上げを受け入れるしかないと思っていました。
          でも他社見積もりを取ってみると、切り替え可能な選択肢があることがわかりました。
          そこから一気に交渉が進みました。
          年間216万円の圧縮は大きいですが、燃調費上限を守れたことが長期的にはもっと重要かもしれません。」
        </blockquote>
        <p className="mt-2 text-xs text-slate-500">― 総務部 電力契約担当</p>
      </section>

      {/* 誘導 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">値上げ通知を受けた方へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          値上げ通知は「交渉の開始」です。まず<Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">代替となる電力会社の見積もりを取ること</Link>が最初のステップです。
          選択肢があることがわかれば、交渉はより有利に進められます。
          <Link href="/when-to-review-electricity-contract" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">見直しのタイミング</Link>も合わせてご確認ください。
        </p>
      </section>

      <p className="mt-4 text-xs text-slate-400 leading-5">
        ※本ページの事例は、複数の実務相談内容をもとに再構成したモデルケースです。数値は業界平均を参考にした概算値であり、実際の削減効果は条件により異なります。
      </p>

      <div className="mt-8">
        <RelatedLinks
          heading="関連事例・記事"
          links={[
            { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "代替先を探すための電力会社比較の方法" },
            { href: "/fuel-cost-adjustment", title: "燃料費調整額とは", description: "燃調費の仕組みと上限設定の重要性" },
            { href: "/when-to-review-electricity-contract", title: "見直しのタイミングはいつか", description: "値上げ通知を受けた際の対応タイミング" },
            { href: "/case-study-manufacturing-cost-reduction", title: "製造業：年間18%削減した事例", description: "契約見直しで大幅削減した製造業の事例" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="値上げ通知を受けた方は今すぐ診断を"
          description="シミュレーターで現在の電気代リスクを確認し、代替調達の相談につなげましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "相談・問い合わせ" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="case-study-price-increase-negotiation" />
      </div>
    </main>
  );
}
