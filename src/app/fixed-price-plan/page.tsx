import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

// --- 定数 ---
const pageTitle = "固定プランとは｜法人向け電力契約の料金構造・メリット・注意点を解説";
const pageDescription =
  "固定プランの料金構成（基本料金・電力量料金・燃調費など）、メリット・デメリット比較表、月額シミュレーション（高圧50,000kWh）、契約前の5つの注意点を法人向けに解説します。";

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "固定プラン",
    "法人 電気料金",
    "予算管理 電力契約",
    "固定プラン 料金構成",
    "固定プラン メリット デメリット",
    "電力契約 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/fixed-price-plan",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/fixed-price-plan",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
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

// --- 料金構成テーブルデータ ---
const feeStructureRows = [
  {
    item: "基本料金",
    treatment: "契約電力（kW）に単価を乗じた固定費",
    variable: "原則固定",
    checkPoint: "契約kWの設定が実態と合っているか確認",
  },
  {
    item: "電力量料金",
    treatment: "使用量（kWh）に対して契約単価を乗じた従量費",
    variable: "原則固定（契約期間中）",
    checkPoint: "季節・時間帯別単価の有無を確認",
  },
  {
    item: "燃料費調整額（燃調費）",
    treatment: "固定プランでも別建てで加算されるケースが多い",
    variable: "変動あり",
    checkPoint: "燃調費込みか込みでないかを契約書で確認",
  },
  {
    item: "再生可能エネルギー賦課金",
    treatment: "国が定める単価を使用量に乗じて加算",
    variable: "毎年度改定あり",
    checkPoint: "2026年度単価: 3.49円/kWh",
  },
  {
    item: "容量拠出金",
    treatment: "容量市場落札量に応じて電力会社が転嫁",
    variable: "変動あり",
    checkPoint: "2024年度以降は明細への反映が拡大中",
  },
];

// --- メリット・デメリットテーブルデータ ---
const meritDemeritsRows = [
  {
    aspect: "予算管理",
    merit: "年度予算・月次予実の精度を上げやすい",
    demerit: "実使用量が想定より増えると予算超過になりやすい",
  },
  {
    aspect: "価格変動リスク",
    merit: "市場高騰局面で請求額の上振れを抑えられる",
    demerit: "市場下落局面では相対的に割高になる可能性がある",
  },
  {
    aspect: "社内説明",
    merit: "単価の根拠が明確で稟議・説明資料を作りやすい",
    demerit: "相場変動を理由にした値下げ交渉が難しい",
  },
  {
    aspect: "契約条件",
    merit: "契約期間中は突然の単価改定リスクが低い",
    demerit: "中途解約や途中変更に違約金が発生するケースがある",
  },
  {
    aspect: "調整費の扱い",
    merit: "電力量料金部分は読みやすく管理しやすい",
    demerit: "燃調費・再エネ賦課金・容量拠出金は別途変動する",
  },
];

// --- 月額シミュレーションデータ（高圧・月50,000kWh想定） ---
const simulationRows = [
  {
    item: "基本料金",
    unitPrice: "1,800円/kW",
    quantity: "500kW",
    monthly: "900,000円",
  },
  {
    item: "電力量料金",
    unitPrice: "16.00円/kWh",
    quantity: "50,000kWh",
    monthly: "800,000円",
  },
  {
    item: "燃料費調整額",
    unitPrice: "2.50円/kWh",
    quantity: "50,000kWh",
    monthly: "125,000円",
  },
  {
    item: "再生可能エネルギー賦課金",
    unitPrice: "3.49円/kWh",
    quantity: "50,000kWh",
    monthly: "174,500円",
  },
  {
    item: "容量拠出金（概算）",
    unitPrice: "0.50円/kWh",
    quantity: "50,000kWh",
    monthly: "25,000円",
  },
];

// --- 注意点チェックリスト ---
const checklistItems = [
  {
    num: 1,
    title: "燃調費・賦課金が「別建て」かどうかを確認する",
    body: "「固定プラン」と案内されていても、燃料費調整額や再エネ賦課金が別途加算される契約が大半です。明細の費目を必ず確認し、固定なのは電力量料金部分のみかどうかを把握してください。",
  },
  {
    num: 2,
    title: "契約期間と中途解約の条件を確認する",
    body: "固定プランは1〜3年の契約期間を設定しているケースが多く、期間途中での解約には違約金が発生する場合があります。事業計画や拠点変更の予定を踏まえて期間を選定してください。",
  },
  {
    num: 3,
    title: "自動更新・更新時の単価改定を確認する",
    body: "契約満了後に自動更新される条件を見落とすと、更新後の単価が変わっていても気づかないケースがあります。更新通知の時期と更新後の単価条件を事前に確認してください。",
  },
  {
    num: 4,
    title: "容量拠出金の転嫁状況を確認する",
    body: "2024年度以降、容量市場の拠出金が電気料金明細に反映される事例が増えています。固定プランでも容量拠出金が別建てで加算されているかどうかを明細と契約書で確認してください。",
  },
  {
    num: 5,
    title: "市場連動プランとの単価差を比較検討する",
    body: "固定プランは安定性に優れる一方、市場が落ち着いている局面では市場連動プランの方が安くなることがあります。現在の電力市況と自社の使用量規模を踏まえ、定期的に比較検討することが重要です。",
  },
];

// --- Page Component ---
export default function FixedPricePlanPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-slate-500" aria-label="パンくずリスト">
        <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホーム</Link>
        <span>/</span>
        <Link href="/articles/plan-types" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約メニューの違いを知る</Link>
        <span>/</span>
        <span className="text-slate-700">固定プランとは</span>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">固定プランとは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          固定プランは、契約期間中の電力量料金単価を読みやすく抑えた設計の電力契約です。市場価格の短期変動に左右されにくく、
          法人の予算管理・稟議対応のしやすさを重視する場面で選ばれます。ただし「固定」とされるのは電力量料金部分が中心で、
          燃料費調整額・再エネ賦課金・容量拠出金は別建てで変動するケースがほとんどです。本ページでは料金構成・メリット・デメリット・
          月額シミュレーション・注意点を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">

        {/* 固定プランの基本的な考え方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランの基本的な考え方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランは、契約期間中の電力量料金単価が大きく変わりにくい設計のため、月次・四半期・年度単位での予算管理を行いやすい点が特徴です。
            担当者にとっては、契約期間中の見積もり精度を高めやすく、稟議資料の作成でも説明軸を揃えやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方で、固定プランだからといって請求額がまったく変わらないわけではありません。
            電力量料金以外の費目（燃調費・再エネ賦課金・容量拠出金）は変動するため、
            これらを含めた総額ベースで管理する視点が必要です。詳しくは
            <Link href="/does-fuel-cost-adjustment-change-even-in-fixed-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              固定プランでも燃調費は変わるのか
            </Link>
            をあわせて確認してください。
          </p>
        </section>

        {/* 固定プランの料金構成テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランの料金構成</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け固定プランの請求は、複数の費目で構成されています。「固定」の対象範囲を費目ごとに把握することが、
            実際の予算管理精度を高める第一歩です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">費目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">固定プランでの扱い</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">変動するか</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">確認ポイント</th>
                </tr>
              </thead>
              <tbody>
                {feeStructureRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.item}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.treatment}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.variable}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.checkPoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 各費目の実際の適用条件は電力会社・契約プランによって異なります。契約書・料金明細で個別に確認してください。
          </p>
        </section>

        {/* メリット・デメリットテーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランのメリットとデメリット</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランは安定性に優れる一方、自社の事業状況や市況によっては不利になる局面もあります。
            以下の比較表で観点ごとに整理してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">観点</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800 text-sky-800">メリット</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">デメリット</th>
                </tr>
              </thead>
              <tbody>
                {meritDemeritsRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.aspect}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.merit}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.demerit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランと市場連動プランのどちらが自社に合うかは、事業環境・使用量規模・予算管理方針によって異なります。
            <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              市場連動プランと固定プランの違い
            </Link>
            で詳細な比較を確認してください。
          </p>
        </section>

        {/* 月額シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランの月額シミュレーション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約・月間使用量50,000kWh（500kW契約）の法人を想定した月額試算です。
            「固定」の電力量料金以外に、燃調費・再エネ賦課金・容量拠出金が別途加算されることを確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">費目</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-800">単価</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-800">数量</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-800">月額（税抜）</th>
                </tr>
              </thead>
              <tbody>
                {simulationRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 text-slate-800">{row.item}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.unitPrice}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.quantity}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-medium text-slate-800">{row.monthly}</td>
                  </tr>
                ))}
                <tr className="bg-sky-50">
                  <td className="border border-slate-200 px-3 py-2 font-bold text-slate-900" colSpan={3}>合計（月額概算）</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-bold text-sky-800">約2,024,500円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 単価は2026年4月時点の想定値です。実際の請求額は契約内容・電力会社・適用単価によって異なります。
            燃調費・容量拠出金は変動費のため、時期によって合計額は増減します。
          </p>
          <p className="mt-2 text-sm text-slate-700">
            自社の契約条件で詳細な試算を行いたい場合は、
            <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較診断</Link>
            をご利用ください。
          </p>
        </section>

        {/* 注意点チェックリスト */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランで確認したい5つの注意点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランへの切り替えや更新時には、以下の5点を契約書・料金明細で事前に確認してください。
          </p>
          <ol className="mt-4 space-y-4">
            {checklistItems.map((item) => (
              <li key={item.num} className="flex gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            契約の更新・解約条件の詳細については、
            <Link href="/electricity-contract-cancellation-renewal-terms" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力契約の解約・更新条件
            </Link>
            も参照してください。
          </p>
        </section>

        {/* 固定プランが向いている法人 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランが向いている法人</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>予算管理・稟議でコスト見通しの明確さが重要な法人</li>
            <li>価格変動リスクを抑えて安定運用を優先したい法人</li>
            <li>電力使用量が多く、急な上振れを避けたい法人</li>
            <li>複数拠点を一括管理しており、単価の比較軸を統一したい法人</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自社が固定プランに向いているかどうかの判断基準については、
            <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              固定プランに向いている法人の特徴
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* 関連リンク */}
        <RelatedLinks
          heading="あわせて確認したいページ"
          intro="固定プランを深く理解するために、市場連動プランとの比較・燃調費の扱い・向いている法人像を確認してください。"
          links={[
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方、予算管理、リスクの出方を並べて整理した比較ページです。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格に連動して単価が動く仕組みと、向いている法人像を解説しています。",
            },
            {
              href: "/does-fuel-cost-adjustment-change-even-in-fixed-plan",
              title: "固定プランでも燃調費は変わるのか",
              description: "「固定なのに請求が増えた」の原因になりやすい燃調費の扱いを解説します。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランに向いている法人の特徴",
              description: "業種・使用量・予算管理の観点から固定プランに向く法人像を整理します。",
            },
            {
              href: "/electricity-contract-cancellation-renewal-terms",
              title: "電力契約の解約・更新条件",
              description: "中途解約の違約金・自動更新の仕組みなど契約条件の確認ポイントを解説します。",
            },
            {
              href: "/articles/plan-types",
              title: "契約メニューの違いを知る（カテゴリ一覧）",
              description: "固定・市場連動・規制料金など電力契約メニューの違いをまとめたカテゴリページです。",
            },
          ]}
        />

        {/* CTA */}
        <ContentCta
          heading="自社の条件で固定プランの料金を確認する"
          description="固定プランの仕組みを理解した後は、実際の使用量・契約条件をもとに試算することで判断精度が上がります。比較診断ツールやシミュレーターをご活用ください。"
          links={[
            { href: "/compare", label: "料金メニュー比較診断を使う" },
            { href: "/market-linked-vs-fixed", label: "市場連動プランと比較する" },
            { href: "/", label: "シミュレーターで診断する" },
          ]}
        />
      </section>
    </main>
  );
}
