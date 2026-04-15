import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "ショッピングモールの電気料金見直しポイント｜大規模施設の空調・共用部を踏まえた考え方";
const pageDescription =
  "ショッピングモールの電気料金見直しを解説。大規模空調・共用部照明・テナントとオーナーの費用分担、特別高圧受電、ピーク需要管理、固定プランと市場連動の選択基準まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ショッピングモール 電気料金 見直し",
    "商業施設 電気代 削減",
    "大規模商業施設 電力契約 見直し",
    "特別高圧 電力 見直し",
    "モール 空調 電力コスト",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/shopping-mall-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/shopping-mall-electricity-cost-review",
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

const loadCharacteristics = [
  {
    label: "大規模中央空調システム",
    detail:
      "ショッピングモールの電力消費の最大部分を占めるのが中央空調設備です。屋内モール全体の温度管理を担うため、夏・冬の運転負荷は大きく、年間電力消費の40〜50%を占める施設もあります。外気温が極端な日のピーク負荷への対応が、デマンド管理の核心になります。",
  },
  {
    label: "共用部照明・エスカレーター・エレベーター",
    detail:
      "コリドー・駐車場・エントランス・トイレなどの共用部照明は、営業時間中は常時稼働します。エスカレーター・エレベーターは稼働電力に加え、ブレーキや制御系の待機電力も一定量発生します。LED化・センサー制御の導入余地が大きい部分です。",
  },
  {
    label: "テナント区画への電力供給",
    detail:
      "テナント区画の電力は、モールオーナーが一括受電して各テナントに転売（転貸）するモデルが一般的です。テナントごとの使用量を把握し、費用分担の仕組みが適切か定期的に確認することが重要です。テナントの業態（飲食・物販・映画館等）によって使用量が大きく異なります。",
  },
  {
    label: "飲食テナント・フードコートの設備",
    detail:
      "飲食テナントやフードコートは、調理設備・換気設備・食材保管冷蔵庫などにより、物販テナントと比べて電力密度が高くなります。昼食・夕食のピーク時間帯にデマンドが集中するため、モール全体のピーク需要を押し上げる要因になります。",
  },
];

const reviewPoints = [
  {
    heading: "特別高圧受電の特性を理解する",
    content:
      "大型ショッピングモールは電力使用量が大きく、特別高圧（2,000kW以上）で受電している施設が多くあります。特別高圧の場合、電力会社との契約条件や自由化の適用範囲が高圧と異なるため、現在の契約形態と受電種別を正確に把握したうえで見直しを検討する必要があります。",
  },
  {
    heading: "テナントとオーナーの費用分担の整合性確認",
    content:
      "共用部の電気代をどのようにテナントに配賦しているかは、施設ごとに異なります。共益費に含める方式・使用量に比例する方式など、配賦方法によってオーナー負担部分が変わります。定期的に配賦方式の妥当性を確認し、必要に応じてテナント契約時の条件に反映させることが重要です。",
  },
  {
    heading: "ピーク需要の分析とデマンド管理",
    content:
      "ショッピングモールは繁忙期（夏・年末）と閑散期で使用量に大きな差があります。デマンドのピークが発生しやすい時期・時間帯を分析し、中央空調の段階起動・照明の部分制御・エスカレーター台数の時間帯管理などで、最大需要電力を抑制できる余地を確認しておきます。",
  },
  {
    heading: "長期契約の条件設定",
    content:
      "大型施設は使用量が大きいため、電力会社・新電力との交渉において価格条件を引き出しやすい立場にあります。一方で、複数年固定の場合は中途解約条件・価格改定条項・燃料費調整の取り扱いなど、契約書の細部を確認することが重要です。法務部門や専門コンサルタントの関与を検討する価値があります。",
  },
];

export default function ShoppingMallElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">モールの見直しポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          ショッピングモールの電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          ショッピングモールは、大規模な中央空調・共用部照明・テナントへの電力供給など、複雑な電力消費構造を持つ施設です。電力コストは施設運営費の中でも大きな割合を占め、収益性に直結します。テナントとの費用分担も考慮しながら、契約条件の最適化を検討することが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、ショッピングモール特有の負荷特性と特別高圧受電の視点から、電気料金見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>大規模商業施設の電気料金が上がりやすい構造的な理由</li>
            <li>中央空調・共用部・テナント負荷の特性から見た着眼点</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>特別高圧受電を踏まえた契約見直しのポイント</li>
            <li>テナントとの費用分担と設備対策の組み合わせ</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            ショッピングモールの電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ショッピングモールは、電力使用量が大きく、料金上昇の影響も絶対額として大きくなりがちです。主な要因は以下のとおりです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>大規模中央空調が電力消費全体の大部分を占める</li>
            <li>夏・冬の繁忙期は空調負荷が最大になり使用量が急増する</li>
            <li><Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧</Link>受電では市場価格連動条件が適用されやすい</li>
            <li>テナント区画も含めた使用量合計で<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>の影響が大きい</li>
            <li><Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>が全使用量に比例して増加している</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の上昇要因の全体像は{" "}
            <Link
              href="/why-business-electricity-prices-rise"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電気料金が上がる理由
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            負荷特性から見た着眼点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ショッピングモールの電力使用は用途が複雑に絡み合っています。各カテゴリの特性を把握し、見直しの優先順位をつけることが重要です。
          </p>
          <div className="mt-4 space-y-3">
            {loadCharacteristics.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定プランと市場連動プランの考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            大規模施設は使用量が大きいため、プラン選択による金額差も大きくなります。特別高圧受電では市場連動条件が適用されるケースもあり、条件の内容を詳細に確認する必要があります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>使用量が大きいため価格変動の影響額が非常に大きくなる</li>
                <li>テナント向け転売価格の安定性確保に固定価格が有利</li>
                <li>施設全体の収支予測に電気料金の固定化が有効</li>
                <li>繁忙期（夏・年末）と市場高値が重なるリスクを排除できる</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>大使用量ゆえに価格高騰時の影響額が事業リスクレベルになる</li>
                <li>テナントへの費用転嫁が遅れると施設側の損失になる</li>
                <li>特別高圧での市場連動条件は複雑で専門的な評価が必要</li>
                <li>電力市場の専門部署・外部コンサルなしでの対応が困難</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランが向く法人の特徴は{" "}
            <Link
              href="/businesses-suited-for-fixed-price-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              固定プランが向く法人の特徴
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約見直しで確認したいこと
          </h2>
          <div className="mt-4 space-y-4">
            {reviewPoints.map((item) => (
              <div key={item.heading}>
                <h3 className="text-lg font-semibold text-slate-900">{item.heading}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            契約見直しの全体的な進め方は{" "}
            <Link
              href="/business-electricity-contract-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しチェックリスト
            </Link>{" "}
            で整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            設備対策との組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ショッピングモールは設備規模が大きく、省エネ設備投資の効果が金額ベースで大きく出やすいため、契約見直しと設備対策を組み合わせた中長期計画が有効です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">空調設備の高効率化・BEMS導入</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                BEMS（ビルエネルギー管理システム）による空調の最適制御は、大規模施設では最も費用対効果が高い対策の一つです。外気温・来客数に連動した制御で無駄な稼働を削減できます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">共用部LED照明・センサー制御</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                駐車場・廊下・トイレなどの共用部照明をLED＋センサー制御に切替えることで、照明電力を大幅削減できます。大面積の施設ほど絶対的な削減量が大きくなります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">蓄電池・デマンドコントローラー</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                ピーク時間帯の電力需要を<Link href="/battery-consideration-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池</Link>で補完しデマンド値を抑制することで、<Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>の削減につながります。大容量システムの導入は専門的な設計と費用対効果分析が必要です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">屋根・駐車場への太陽光発電</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                広大な屋根や駐車場（カーポート型）への<Link href="/solar-self-consumption-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光</Link>発電設置は、昼間の電力自給に有効です。PPA（電力購入契約）モデルでは初期費用なしでの導入も可能です。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーター活用の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ショッピングモールの契約見直しでは、使用量が大きいだけに、プラン選択の差が年間で非常に大きな金額になる場合があります。シミュレーターを使って価格変動シナリオ別の影響額を把握することで、意思決定の根拠を明確にできます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスクを確認する</li>
            <li>繁忙期（夏・年末）のピーク月を前提にした影響額を試算する</li>
            <li>固定プランと市場連動プランの年間コスト差の規模感を把握する</li>
            <li>電力価格が高止まりするシナリオでの事業収支への影響を確認する</li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="shopping-mall-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン", "特別高圧"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電気料金見直しポイント",
              description: "冷蔵・空調負荷を踏まえた食品小売の契約見直しの考え方。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "予算管理と安定性を重視する法人に固定プランが向きやすい理由。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目を一覧で整理。",
            },
            {
              href: "/convenience-store-electricity-cost-review",
              title: "コンビニの電気料金見直しポイント",
              description: "24時間営業と多拠点を踏まえた考え方。",
            },
            {
              href: "/cold-storage-electricity-cost-review",
              title: "冷蔵倉庫の電気料金見直しポイント",
              description: "大きなベースロードを踏まえた契約見直しの考え方。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
            {
              href: "/commercial-facility-fixed-vs-market-linked",
              title: "商業施設向け：固定プランと市場連動プランの選び方",
              description: "ショッピングモールの負荷特性に合った料金プランの選択基準を整理。",
            },
            {
              href: "/demand-control-reduction-effect",
              title: "デマンドコントロールによる電気料金削減効果",
              description: "ショッピングモールでのデマンド管理が基本料金削減にどう貢献するかを解説。",
            },
          ]}
        />

        <ContentCta
          heading="自施設の条件でリスクを確認する"
          description="ショッピングモールの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの年間コスト比較にも活用できます。"
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
