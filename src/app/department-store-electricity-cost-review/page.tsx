import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "百貨店の電気料金リスク｜大規模空調と営業時間を踏まえた考え方";
const pageDescription =
  "百貨店の電気料金が上がりやすい要因と、契約見直しの着眼点を解説。大規模空調・照明・エスカレーターなどの設備特性、固定プランと市場連動の向き不向き、設備対策との組み合わせ方まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "百貨店 電気料金 見直し",
    "デパート 電気代 削減",
    "百貨店 電力契約 見直し",
    "百貨店 電力コスト 対策",
    "商業施設 電気料金 大規模",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/department-store-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/department-store-electricity-cost-review",
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
    label: "大規模空調設備",
    detail:
      "百貨店は大規模建物を全館空調で管理するため、空調設備が電力消費の最大要因となります。夏季・冬季の外気温変化への対応に加え、催事・セール時の来客増加による内部発熱が空調負荷を増大させます。中央熱源方式の場合、熱源機器（チラーなど）の電力消費が特に大きくなります。",
  },
  {
    label: "照明設備（演出・展示照明を含む）",
    detail:
      "売場の演出照明・スポット照明は商品の見映えを重視するため、一般小売よりも照度・演色性が求められます。食品フロア・コスメ・ジュエリー売場など用途ごとに異なる照明設計が採用されており、照明電力の合計は建物全体で大きな規模になります。",
  },
  {
    label: "エスカレーター・エレベーター",
    detail:
      "多層階建物では多数のエスカレーターとエレベーターが稼働します。営業時間中は常時稼働しており、稼働台数が多い百貨店では垂直搬送設備の電力消費も無視できない規模になります。",
  },
  {
    label: "テナント・飲食フロアの電力",
    detail:
      "テナント入居している場合、テナント側の電力消費が建物全体の電力として集計されるケースがあります。飲食フロアの調理設備・換気・給排気は特に電力消費が大きく、食品催事スペースも繁忙期に電力需要を押し上げます。",
  },
];

const reviewPoints = [
  {
    heading: "特別高圧契約の条件確認",
    content:
      "百貨店規模になると特別高圧契約が適用されることが多く、契約条件が複雑になります。現在の最大需要電力と契約電力の乖離、力率割引・割増の状況、時間帯別料金の活用可否などを確認することが重要です。特別高圧契約では数年ごとの更改タイミングが重要な交渉機会になります。",
  },
  {
    heading: "テナントとの電力配分の整理",
    content:
      "百貨店はテナントへの転売電力を含む複雑な電力配分があります。テナントへの電力供給単価と自社電力調達単価の差益管理、テナントの使用量把握の精度、専用メーターの設置状況などを確認しておくと、全体の電力コスト構造が明確になります。",
  },
  {
    heading: "季節・催事による電力変動の把握",
    content:
      "百貨店は年末・お盆・セール期間などに来客が集中し、空調・照明・エスカレーターの電力消費が増加します。過去2〜3年の月別使用量を確認し、ピーク月と閑散月の差を把握しておくことが、契約条件交渉の際の根拠になります。",
  },
  {
    heading: "リニューアル・閉店フロアの影響",
    content:
      "百貨店では定期的なリニューアル工事や売場変更が行われます。改装中は電力使用量が変化し、また新設備・新テナントの入居後は使用量が増減することがあります。リニューアルのタイミングを電力契約の見直し機会として捉え、工事完了後の設備構成を前提にした契約を締結することが望ましいです。",
  },
];

export default function DepartmentStoreElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">百貨店の電気料金</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          百貨店の電気料金リスク
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          百貨店は大規模建物を全館空調・高照度照明・多数のエスカレーターで運営するため、電力使用量が非常に大きく、電気料金が経営コストに占める割合も高い業種です。<Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧</Link>契約の適用やテナントへの電力転売など、電力管理の複雑さも特徴的です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、百貨店特有の電力需要構造と設備特性を踏まえ、電気料金リスクの把握と契約見直しの考え方を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>百貨店の電気料金が上がりやすい構造的な理由</li>
            <li>空調・照明・エスカレーターなど設備特性から見た着眼点</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>特別高圧契約・テナント電力管理での確認ポイント</li>
            <li>省エネ設備改修・BEMSとの組み合わせ</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            百貨店の電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            百貨店の電気料金は、以下の構造的な要因から高止まりしやすい特性があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>大規模建物の全館空調に大電力が必要であり、季節変動の影響を強く受ける</li>
            <li>演出照明・展示照明など高照度・高品質な照明が常時稼働する</li>
            <li>エスカレーター・エレベーターが多数設置され、営業時間中は常時電力を消費する</li>
            <li>テナント入居の飲食フロア・食品売場は調理・換気設備で電力消費が大きい</li>
            <li>催事・セール時に来客が増加し空調・照明負荷が上昇する</li>
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
            百貨店の電力使用は設備カテゴリごとに特性が大きく異なります。各設備の特性を理解しておくことで、見直しや設備投資の優先順位が明確になります。
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
            百貨店は電力使用量が非常に大きいため、市場価格の変動が金額ベースで甚大な影響を及ぼします。固定プランによるリスクヘッジの重要性が高い業種です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>使用量が非常に大きく、単価変動が年間コストに大きく影響する</li>
                <li>テナントへの電力転売価格との差益管理において、調達単価の安定性が重要</li>
                <li>テナント契約上の電力供給価格を固定する場合、調達側も固定が自然</li>
                <li>投資家・株主・テナントへの説明において電力コストの予見可能性が重要</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>価格高騰時の年間影響額が他の業種と比べて非常に大きくなる可能性がある</li>
                <li>テナントへの電力転売がある場合、調達と販売の価格差管理が複雑になる</li>
                <li>中長期の事業計画における電力費の変動幅を許容できるかを試算する必要がある</li>
                <li>投資家へのIR説明において電力費変動のリスク開示が求められる場合がある</li>
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
            百貨店規模の施設では、設備改修の投資規模が大きくなる一方、削減効果の絶対額も大きくなります。以下の設備対策が検討されることが多くあります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">高効率熱源設備への更新</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                ターボ冷凍機・吸収冷凍機などの熱源設備を高効率型に更新することで、空調の電力消費を大幅に削減できます。更新効果が大きく、<Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金</Link>活用で投資回収年数を短縮できる場合があります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">BEMSの高度化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                フロア別・テナント別の電力使用をリアルタイムで管理するBEMSの高度化により、過剰稼働の発見とテナントへの省エネ指導が可能になります。デマンド管理精度の向上にも寄与します。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">照明のLED化・調光制御</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                売場照明・通路照明・バックヤード照明のLED化と調光制御の導入により、照明電力消費を40〜60%削減できる場合があります。リニューアルのタイミングで計画的に実施することが効果的です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">エスカレーターの省エネ化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                人感センサーによる低速・停止制御や、高効率モーターへの更新により、垂直搬送設備の電力消費を削減できます。乗客数の少ない時間帯の制御が特に効果的です。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            百貨店の契約見直しでは、以下の観点でシミュレーターを活用することで、経営層・取締役会への説明に必要な数値を把握できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスクを金額ベースで確認する</li>
            <li>固定プランと市場連動プランの年間コスト差を比較し、経営判断の材料にする</li>
            <li>燃料費高騰シナリオでの影響額を試算し、投資家へのリスク開示に活用する</li>
            <li>催事シーズンのピーク月を前提にした影響額を確認する</li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="department-store-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "特別高圧", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
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
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目を見積比較に活用するためのポイント。",
            },
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電気料金見直しポイント",
              description: "冷蔵・空調負荷を踏まえた食品小売の契約見直しの考え方。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "電気料金を構成する要素と上昇の構造を解説。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
            {
              href: "/demand-control-reduction-effect",
              title: "デマンドコントロールによる電気料金削減効果",
              description: "百貨店でのデマンド管理が基本料金削減にどれだけ効果があるかを解説。",
            },
          ]}
        />

        <ContentCta
          heading="自社の条件でリスクを確認する"
          description="百貨店の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの比較にも活用できます。"
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
