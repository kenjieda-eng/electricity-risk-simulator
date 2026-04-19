import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle = "電気料金のリスクヘッジ｜固定×市場のハイブリッド契約とは";
const pageDescription =
  "電気料金の上振れリスクをヘッジするハイブリッド契約の仕組みを解説。固定70%＋市場連動30%等の配分型、CAP付き市場連動、複数拠点分散、期間区切り切替の4手法と、3〜5年スパンでの判断フレームを整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-price-risk-hedge-hybrid";

// 4つのハイブリッド型
const hybridTypes = [
  {
    type: "A. 配分型（固定70% + 市場連動30%）",
    mechanism:
      "契約使用量を固定プランと市場連動プランに配分し、加重平均で料金を決定",
    merit:
      "予算の安定性（固定部分）と市場下落メリット（連動部分）を両取り。配分比率を調整することでリスク許容度に合わせられる",
    risk:
      "JEPX高騰時は連動部分が上振れるが、固定部分で緩衝される。配分比率30%なら、市場価格2倍でも全体は約30%の上昇にとどまる",
    suited: "中規模以上の法人、予算管理とコスト最適化の両立を求めるケース",
  },
  {
    type: "B. 上限付き市場連動（CAP付き）",
    mechanism:
      "市場連動プランに「単価の上限（CAP）」を設定。CAPを超えた部分は供給事業者が負担",
    merit:
      "市場下落時はフルに恩恵を受けつつ、高騰時の最悪シナリオを限定できる",
    risk:
      "CAPの対価として固定マージンが上乗せされるため、平時は市場連動のみより単価が高くなる",
    suited: "市場連動のメリットを活かしたいが、年度予算の上限は超えたくない法人",
  },
  {
    type: "C. 複数拠点分散（拠点ごと別プラン）",
    mechanism:
      "拠点Aは固定、拠点Bは市場連動、拠点Cはハイブリッドといった形で拠点ごとに異なるプランを適用",
    merit:
      "全社平均ではリスクが分散される。拠点ごとの負荷特性・稼働パターンに合わせた最適化が可能",
    risk:
      "契約管理が複雑化。拠点ごとの請求・契約更新のタイミング管理が必要",
    suited: "3拠点以上を持つ多拠点法人、拠点ごとに負荷パターンが異なるケース",
  },
  {
    type: "D. 期間区切り切替（契約期間中の見直し条項）",
    mechanism:
      "契約期間の途中で、指定期日にプランタイプを切替できる条項を入れる。例：1年目は固定、2年目以降は市場連動を選択可",
    merit:
      "市場環境の変化に応じて柔軟に切替えられる。初年度は予算安定、以降は市場動向を見て判断",
    risk:
      "切替条項付き契約は供給事業者側も慎重になりやすく、単価交渉で不利になる場合がある",
    suited: "市場の中期見通しが読みにくい局面で契約更新を迎える法人",
  },
];

// シミュレーションシナリオ
const simRows = [
  {
    scenario: "平穏局面（JEPX平均10円/kWh）",
    fixed: "100万円",
    market: "80万円",
    hybrid7030: "94万円",
    cap: "85万円",
    note: "市場下落の恩恵は配分30%分のみ",
  },
  {
    scenario: "中程度高騰（JEPX平均18円/kWh）",
    fixed: "100万円",
    market: "144万円",
    hybrid7030: "113万円",
    cap: "120万円",
    note: "固定＞ハイブリッド＞CAP＞市場連動",
  },
  {
    scenario: "大幅高騰（JEPX平均30円/kWh）",
    fixed: "100万円",
    market: "240万円",
    hybrid7030: "142万円",
    cap: "150万円",
    note: "CAP付きの安全性が際立つ",
  },
];

// 判断フレーム（3〜5年）
const frameworkSteps = [
  "1. 現契約の残期間と、更新タイミングを把握する（3〜5年のカレンダーに落とし込む）",
  "2. 過去3年のJEPX実績を月次で収集し、自社使用パターンとの重ね合わせで月額コストを再計算する",
  "3. 今後3年のLNG価格・再エネ賦課金・託送料金の見通しから、固定と市場連動のどちらが有利か試算する",
  "4. 自社の予算管理ルール・BCP要件・説明責任の強さから、リスク許容度を明文化する",
  "5. 配分型／CAP付き／拠点分散／切替条項の4パターンを比較し、自社に合うハイブリッド型を絞り込む",
  "6. 1年後・3年後のレビュー時期を契約締結時に決めておき、市場環境の変化に合わせて再評価する",
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 リスクヘッジ",
    "電力 ハイブリッド契約",
    "固定 市場連動 組み合わせ",
    "CAP付き 市場連動",
    "電力 複数拠点 契約",
    "電力契約 見直し条項",
    "電気料金 リスク分散",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/plan-types", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/plan-types"],
  },
};

export default function ElectricityPriceRiskHedgeHybridPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約メニューの違いを知る", url: "https://simulator.eic-jp.org/articles/plan-types" },
          { name: "ハイブリッド契約によるリスクヘッジ" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">ハイブリッド契約によるリスクヘッジ</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            電気料金のリスクヘッジ｜固定×市場のハイブリッド契約とは
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の意思決定で最終局面まで迷うのが、「固定プランで予算を守るか、市場連動プランでコストを攻めるか」という二者択一です。実務では、この中間に位置する<strong>ハイブリッド型契約</strong>で、両方のリスクをコントロールする選択肢が徐々に普及しています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            本記事では、ハイブリッド契約を「配分型」「CAP付き」「複数拠点分散」「期間区切り切替」の4パターンに分類し、それぞれの仕組み・効果・向いている法人を整理します。後半では、3〜5年スパンで意思決定するための判断フレームを提示します。基本的なハイブリッドプランの解説は
            <Link href="/hybrid-electricity-plan-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ハイブリッド型電力プランとは</Link>
            を参照してください。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* H2: なぜハイブリッド契約が必要か */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">なぜハイブリッド契約によるリスクヘッジが必要か</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2022年以降のエネルギー市場は、燃料価格の急騰と補助金の出入りで、電気料金の振れ幅が歴史的に拡大しました。固定プランと市場連動プランを「0か100か」で選んでしまうと、振れ幅が大きい局面でどちらか一方のリスクを全面的に背負うことになります。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-medium text-slate-900">固定プランのリスク：</span>契約時の単価が相場平均より高く設定されていると、市場下落後も高値で支払い続けることになる</li>
              <li><span className="font-medium text-slate-900">市場連動プランのリスク：</span>ウクライナ危機級の高騰局面で電気代が2〜3倍に膨らみ、年度予算を大幅超過する</li>
              <li><span className="font-medium text-slate-900">ハイブリッド契約の狙い：</span>両リスクを切り分けて、自社のリスク許容度に合わせた配分を作る</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実務的には、BCP・予算管理・経営への説明責任という3軸でリスク許容度を整理し、それに合わせた配分・CAP設定・拠点戦略を設計するのが鍵になります。
            </p>
          </section>

          {/* H2: 4つのハイブリッド型 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">4つのハイブリッド型を比較する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ハイブリッド契約は単一の設計ではありません。実務では少なくとも以下の4パターンが組み合わせ可能で、自社の条件に合わせて選択・重ね掛けできます。
            </p>
            <div className="mt-4 space-y-4">
              {hybridTypes.map((h) => (
                <div key={h.type} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{h.type}</p>
                  <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                    <p><span className="font-medium text-slate-900">仕組み：</span>{h.mechanism}</p>
                    <p><span className="font-medium text-slate-900">メリット：</span>{h.merit}</p>
                    <p><span className="font-medium text-slate-900">リスク：</span>{h.risk}</p>
                    <p><span className="font-medium text-slate-900">向いている法人：</span>{h.suited}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* H2: シミュレーション */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">リスクヘッジ効果のシミュレーション</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              月額電気代100万円（固定プランベース）の法人を例に、JEPXの3シナリオでプランごとの月額を試算します。ハイブリッドは固定70%＋市場連動30%の配分型、CAPは市場連動に単価15円/kWh上限を付けたケースです。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
                <thead>
                  <tr className="bg-slate-50 text-slate-900">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">シナリオ</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold">固定</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold">市場連動</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold bg-sky-50">ハイブリッド70/30</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold">CAP付き</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">所感</th>
                  </tr>
                </thead>
                <tbody>
                  {simRows.map((r) => (
                    <tr key={r.scenario} className="align-top hover:bg-slate-50">
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{r.scenario}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{r.fixed}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{r.market}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-sky-800 bg-sky-50">{r.hybrid7030}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{r.cap}</td>
                      <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ シミュレーションは概念理解のための試算です。実際の単価は契約条件・燃調費・基本料金により変動します。
            </p>
          </section>

          {/* H2: どんな法人に適しているか */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">どんな法人に適しているか</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-medium text-slate-900">中〜大規模の製造業：</span>年間電気代5,000万円以上。固定100%では機会損失、市場連動100%では上振れリスクが大きすぎるケース</li>
              <li><span className="font-medium text-slate-900">多拠点運営の小売・外食：</span>拠点ごとの負荷特性が異なるため、拠点分散型が有効</li>
              <li><span className="font-medium text-slate-900">利益率が薄い法人：</span>単一プランの上振れリスクが経営を直撃するため、CAP付きで最悪シナリオを制限する</li>
              <li><span className="font-medium text-slate-900">自治体・公共機関：</span>議会説明上「予算超過ゼロ」が強く求められるため、CAP付きや配分型の優位性が高い</li>
              <li><span className="font-medium text-slate-900">中期で市場見通しが読みにくい局面：</span>期間区切り切替条項で柔軟性を確保</li>
            </ul>
          </section>

          {/* H2: 3〜5年スパンの判断フレーム */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3〜5年スパンでの判断フレーム</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ハイブリッド契約の効果は単年では評価しにくく、3〜5年スパンで判断するのが実務的です。以下のステップを順に踏むことで、場当たり的でない意思決定ができます。
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {frameworkSteps.map((step) => (
                <li key={step} className="pl-1">{step.replace(/^\d+\.\s*/, "")}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特に重要なのはステップ6の「レビュー時期を契約時に決める」ことです。市場環境は1〜2年で大きく変わるため、締結時に確定した配分比率が3年後も最適とは限りません。見直しトリガー（JEPX平均が閾値を超えた場合など）を明文化しておくと、再交渉がスムーズに進みます。
            </p>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ：ハイブリッド契約によるリスクヘッジの要点</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>ハイブリッド契約は配分型・CAP付き・拠点分散・切替条項の4パターンを組み合わせ可能</li>
              <li>固定70%＋市場連動30%の配分型は、上振れ緩衝と下落恩恵のバランスが取りやすい</li>
              <li>CAP付き市場連動は、最悪シナリオの予算リスクを限定したい法人に適する</li>
              <li>多拠点法人は拠点別プラン併用でリスクを自然に分散できる</li>
              <li>3〜5年スパンで評価し、レビュー時期・見直しトリガーを契約時に決めておく</li>
            </ul>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/hybrid-electricity-plan-explained",
                title: "ハイブリッド型電力プランとは",
                description: "ハイブリッド型プランの基本的な仕組みを解説。",
              },
              {
                href: "/market-linked-vs-fixed",
                title: "市場連動プランと固定プランの違い",
                description: "料金の動き方・リスクの出方を軸に基本を整理。",
              },
              {
                href: "/budget-focused-plan-selection",
                title: "予算管理を重視する法人のプラン選定",
                description: "年間予算の安定性を軸にした判断基準。",
              },
              {
                href: "/multi-site-plan-selection",
                title: "多拠点法人のプラン選定",
                description: "拠点ごとに異なる契約を組み合わせる考え方。",
              },
              {
                href: "/high-voltage-market-linked-considerations",
                title: "高圧・特別高圧で市場連動を考えるときの注意点",
                description: "使用量の大きい契約におけるリスクの出方。",
              },
            ]}
          />

          <ContentCta
            heading="自社に合うハイブリッド比率をシミュレーターで確認する"
            description="固定と市場連動の配分比率を変えながら、月額・年額コストのレンジを試算できます。意思決定の詰めに迷う場合は個別相談もお受けしています。"
            links={[
              { href: "/", label: "シミュレーターで試算する" },
              { href: "/contact", label: "ハイブリッド契約の設計を相談する" },
            ]}
          />
        </section>
      </main>
    </>
  );
}
