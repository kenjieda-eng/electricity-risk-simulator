import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "アミューズメント施設の電気料金リスク｜照明・空調・設備の高負荷を踏まえた考え方";
const pageDescription =
  "アミューズメント施設の電気料金が上がりやすい要因と、契約見直しの着眼点を解説。照明・空調・遊戯設備の大電力消費特性、固定プランと市場連動の向き不向き、設備対策との組み合わせ方まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "アミューズメント施設 電気料金 見直し",
    "ゲームセンター 電気代 削減",
    "アミューズメント 電力契約 見直し",
    "遊戯施設 電力コスト 対策",
    "アミューズメント 照明 電気代",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/amusement-facility-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/amusement-facility-electricity-cost-review",
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
    label: "遊戯設備・ゲーム機",
    detail:
      "ビデオゲーム・プライズゲーム・メダルゲームなどの遊戯設備は営業時間中に常時通電されており、多数の筐体が並ぶ施設では合計消費電力が非常に大きくなります。1台あたりの消費電力は数百Wから数kWに達するものもあり、稼働台数が増えるほど電力消費が比例的に増加します。",
  },
  {
    label: "照明設備（演出・装飾照明）",
    detail:
      "アミューズメント施設は集客と演出のために強い照明・装飾照明を多用します。ネオン・LEDストリップ・スポットライト・電飾サインなど、通常の商業施設と比べて照明密度が高く、照明電力消費が大きくなります。一部は24時間点灯しているケースもあります。",
  },
  {
    label: "空調設備",
    detail:
      "遊戯設備や来客の体温・照明からの発熱が大きく、特に夏季は空調の稼働負荷が非常に高くなります。来客数が多い土日・祝日・長期休暇中は発熱量が増加し、空調電力が急増します。深夜営業の施設では夜間も空調が必要です。",
  },
  {
    label: "音響・映像設備",
    detail:
      "大型スクリーン・プロジェクター・音響システムなどのAV設備も電力を消費します。シアター型の施設やカラオケ設備を含む場合は、これら設備の電力消費も積み上がります。",
  },
];

const reviewPoints = [
  {
    heading: "繁閑差が大きい稼働パターンの把握",
    content:
      "アミューズメント施設は平日と週末・祝日・長期休暇で来客数が大きく変動します。この変動が電力使用量の変動に直結するため、月別・曜日別の使用量パターンを把握しておくことが重要です。特に夏季・年末年始・ゴールデンウィークのピーク時の使用量と最大需要電力を確認します。",
  },
  {
    heading: "営業時間と深夜稼働の確認",
    content:
      "深夜営業を行うアミューズメント施設では、深夜料金（夜間割引）が設定された料金プランとの相性が重要です。現在の契約メニューが深夜の電力使用に対応した料金設定になっているかを確認し、深夜割引プランへの切り替えでコスト削減できる可能性があります。",
  },
  {
    heading: "遊戯設備の台数・消費電力の把握",
    content:
      "設置されている遊戯設備の台数と各台の消費電力を一覧化することで、電力消費の全体構造が把握できます。旧型機種は消費電力が高い傾向があるため、機種更新のタイミングで省エネ性能を確認することが電力コスト削減につながります。",
  },
  {
    heading: "テナント入居か自社物件かの確認",
    content:
      "ショッピングモールや複合施設内のテナントとして入居している場合、電力契約がテナント個別か建物一括かを確認する必要があります。建物一括の場合はオーナーへの申請が必要になりますが、テナント個別メーターがある場合は独自に新電力への切り替えが可能なケースがあります。",
  },
];

export default function AmusementFacilityElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          アミューズメント施設の電気料金リスク
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          アミューズメント施設は、遊戯設備・演出照明・空調が複合的に稼働し、電力消費が集中しやすい業種です。繁閑差による電力使用量の変動が大きく、また深夜営業を行う施設も多いため、料金プランの選択が電気料金に大きく影響します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、アミューズメント施設特有の負荷特性を踏まえた電気料金リスクの把握と契約見直しの考え方を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>アミューズメント施設の電気料金が上がりやすい構造的な理由</li>
            <li>遊戯設備・照明・空調など負荷特性から見た着眼点</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>繁閑差・深夜営業を踏まえた契約見直しのポイント</li>
            <li>省エネ設備更新との組み合わせ方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            アミューズメント施設の電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            アミューズメント施設の電気料金は、以下の構造的な要因から高止まりしやすい特性があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>多数の遊戯設備が常時通電され、施設全体の電力消費が大きい</li>
            <li>演出照明・装飾照明が高密度で稼働し照明電力が大きい</li>
            <li>遊戯設備の発熱・来客の体熱が夏季の空調負荷を急増させる</li>
            <li>繁閑差による使用量変動が大きくデマンドのピークが高くなりやすい</li>
            <li>深夜営業を行う施設は夜間も全設備が稼働し続ける</li>
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
            アミューズメント施設の電力使用は設備カテゴリごとに特性が大きく異なります。各設備の特性を理解することで、見直しと設備投資の優先順位が明確になります。
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
            アミューズメント施設は使用量が大きく収益性に対して電力コストの比率が高いため、固定プランによるコスト安定化のメリットが大きい業種です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>電力使用量が大きく市場価格変動の金額影響が大きい</li>
                <li>繁忙期（夏休み・年末年始）と市場価格高騰が重なる可能性がある</li>
                <li>月次収支管理において電力費の予測可能性が重要</li>
                <li>多店舗展開の場合は全社的なリスク管理の観点から固定単価の方が管理しやすい</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>夏季繁忙期と市場価格高騰が重なった場合の影響額を試算する</li>
                <li>深夜営業時間帯の市場価格が高い時期のリスクを確認する</li>
                <li>価格高騰時の追加コストを吸収できる財務的余裕があるか確認する</li>
                <li>過去の市場価格と繁忙期の使用量を掛け合わせたリスクシナリオを作成する</li>
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
            で、市場連動プランのリスクについては{" "}
            <Link
              href="/businesses-not-suited-for-market-linked-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランが向かない法人の特徴
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
            アミューズメント施設では、電力契約の見直しと並行して設備の省エネ化を進めることで削減効果が高まります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">遊戯設備の省エネ機種への更新</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                旧型ゲーム機は消費電力が高い傾向があります。機種更新の際に省エネ性能を比較し、消費電力の少ない機種を選択することで、設備全体の電力消費を抑制できます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">照明のLED化・スマート制御</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                装飾照明・一般照明をLEDに更新し、人感センサーや時間帯別の調光制御を組み合わせることで、照明電力を大幅に削減できます。演出品質を維持しながら省エネを実現できます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">高効率空調への更新</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                発熱量が多い施設特性に合わせた高効率空調への更新で、夏季の空調電力を削減できます。インバーター制御により来客数の変動に合わせた能力調整が可能になります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">閉店後の設備管理</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                営業終了後に不要な設備への給電を自動的に遮断するシステムを導入することで、夜間・早朝の無駄な電力消費を削減できます。一定の投資回収効果が見込めます。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            アミューズメント施設の契約見直しでは、以下の観点でシミュレーターを活用することで、経営判断に必要な数値を把握できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスクを確認する</li>
            <li>固定プランと市場連動プランの年間コスト差を比較する</li>
            <li>夏季繁忙期のピーク月を前提にした影響額を試算する</li>
            <li>燃料費高騰シナリオでの影響幅を把握し、事業計画に反映する</li>
          </ul>
        </section>

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
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目を見積比較に活用するためのポイント。",
            },
            {
              href: "/retail-store-electricity-cost-review",
              title: "小売店舗の電気料金見直しポイント",
              description: "照明・空調と営業時間を踏まえた商業施設の見直しの考え方。",
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
          ]}
        />

        <ContentCta
          heading="自施設の条件でリスクを確認する"
          description="アミューズメント施設の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの比較にも活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="amusement-facility-electricity-cost-review" />
      </div>
    </main>
  );
}
