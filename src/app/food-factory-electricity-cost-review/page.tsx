import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "食品工場の電気料金見直しポイント｜連続操業と冷蔵設備を踏まえた考え方";
const pageDescription =
  "食品工場の電気料金が上がりやすい要因と契約見直しの着眼点を解説。連続操業・冷蔵冷凍設備・衛生管理空調・生産ラインの特性と、固定プランが選ばれる理由、設備対策まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "食品工場 電気料金 見直し",
    "食品製造 電気代 削減",
    "工場 電力契約 見直し",
    "食品工場 電力コスト",
    "冷凍冷蔵 工場 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/food-factory-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/food-factory-electricity-cost-review",
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
    label: "生産ライン（モーター・コンベア・包装機）",
    detail:
      "搬送コンベア・ミキサー・充填機・包装機・印字機などのラインが稼働時間中は連続して動く。稼働率が高い工場では、生産ラインのモーター類がベースロードの大きな割合を占める。稼働計画の見直しで負荷を平準化できる場合がある。",
  },
  {
    label: "冷蔵・冷凍・チルド設備",
    detail:
      "原材料・仕掛品・完成品の保管のために冷蔵・冷凍設備が24時間稼働。外気温が高い夏場は冷媒の稼働負荷が上がり、電力消費が増加する。温度帯の多段階管理（常温・冷蔵・冷凍）を行う工場ではベースロードが特に大きくなる。",
  },
  {
    label: "衛生管理・空調・クリーンルーム",
    detail:
      "食品衛生法の要求に従い、製造室の温度・湿度・清潔度を一定範囲に管理する必要がある。一般空調より厳しい温湿度管理を行うクリーンルーム・クリーンブース型製造室は、空調の消費量が大きくなる。",
  },
  {
    label: "蒸気・加熱・殺菌設備",
    detail:
      "加熱調理・殺菌・滅菌工程の電気ヒーター・スチームジェネレーターは大きな電力を消費する。ガス加熱との組み合わせ・電力需要のピーク時間帯との調整が可能な工程かを確認することが重要。",
  },
  {
    label: "コンプレッサー・ユーティリティ",
    detail:
      "製造ラインのエアシリンダー・空気搬送などに使うコンプレッサーは、稼働時間が長く電力消費が大きい。エア漏れの管理・インバーター制御型への更新で大きな削減効果が得られる場合がある。",
  },
];

const reviewPoints = [
  {
    heading: "停電リスクへの対応が最優先",
    content:
      "食品工場では、突然の停電は製品ロス・ライン停止・衛生管理上の問題（冷蔵温度の上昇など）に直結します。電力供給の安定性は最優先課題であり、新電力への切替を検討する際は、供給安定性・バックアップ体制・緊急時の対応を詳しく確認することが重要です。特に規模の小さい新電力では、需給逼迫時の対応能力に差がある場合があります。",
  },
  {
    heading: "連続操業パターンと季節変動の把握",
    content:
      "食品工場はシフト制で24時間稼働するケースも多く、日中・夜間を通じた電力使用パターンを把握しておくことが重要です。季節商品（アイス・鍋物素材など）を製造する工場では、繁忙期に生産量が集中し、電力使用量も大幅に増加することがあります。この季節変動を考慮した上で年間の見積条件を設定します。",
  },
  {
    heading: "高圧・特別高圧の区分と料金体系の確認",
    content:
      "工場の規模によって、低圧・高圧・特別高圧のいずれかで契約しているかが異なります。特別高圧（2,000kW以上）の場合は個別交渉による託送料金・インバランス料金の扱いが複雑になるため、専門知識を持つアドバイザーの活用も選択肢に入ります。契約電力の設定が実際のデマンドと大きくかけ離れていないかを確認します。",
  },
  {
    heading: "省エネ投資との整合性",
    content:
      "食品工場では、省エネ型冷凍機・コンプレッサー更新・インバーター導入・廃熱回収など、設備投資による電力削減を並行して検討することが多くあります。電力契約の見直しと省エネ投資を組み合わせることで、電気料金削減の効果を最大化できます。省エネ補助金・設備リース・リース型PPAなど、資金調達の選択肢も合わせて確認します。",
  },
];

export default function FoodFactoryElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">食品工場の見直しポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          食品工場の電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          食品工場は生産ライン・冷蔵冷凍設備・衛生管理空調が連続稼働し、電力使用量が多く電気料金コストが事業収支に大きな影響を与える業種です。停電は製品ロスや衛生管理上の問題に直結するため、電力供給の安定性と電気料金のコスト管理を両立させる契約設計が重要になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、食品工場特有の負荷特性を踏まえた契約見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>食品工場の電力消費を構成する主要設備と特性</li>
            <li>停電リスクへの対応と安定性を重視した契約選択</li>
            <li>固定プランが食品工場に向きやすい理由</li>
            <li>省エネ設備投資と契約見直しの組み合わせ方</li>
            <li>高圧・特別高圧の契約区分と確認ポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            食品工場の電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            食品工場の電気料金には、以下の構造的な上昇要因があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>24時間連続稼働のベースロードが高く、電力使用量の絶対量が多い</li>
            <li>冷蔵・冷凍設備の常時稼働で、夏場に特に負荷が増加する</li>
            <li>衛生管理要求から空調を大幅に削減することが難しく、省エネの余地が限られる</li>
            <li>生産ラインの稼働計画が変更しにくく、デマンドピーク管理の制約が大きい</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整</Link>・<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>・<Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金</Link>の増加による上乗せ費用</li>
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
            食品工場は固定プランとの相性が高い業種といえます。その理由を整理します。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>使用量が多く、市場価格変動の影響が金額ベースで大きくなる</li>
                <li>停電・供給不安定に直結するリスクを最小化したい</li>
                <li>生産コスト計算に電気料金を固定的に組み込みたい</li>
                <li>夏の生産繁忙期と需給逼迫・電力高騰のリスクが重なる</li>
                <li>製品価格への転嫁タイムラグを最小化するためコスト安定が重要</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する際の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>上振れ時の影響額が生産コスト全体に占める割合を試算する</li>
                <li>需給逼迫時の価格スパイク（kWh40円超など）の影響を確認する</li>
                <li>製品単価への転嫁タイミングと電気代変動のタイムラグを評価する</li>
                <li>電力価格モニタリング・リスク管理の体制整備が前提となる</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            詳細なプラン選択の考え方は{" "}
            <Link
              href="/fixed-vs-market-linked-guide"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              固定プランと市場連動プランの判断ガイド
            </Link>{" "}
            を参照してください。
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
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            設備対策との組み合わせ
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">省エネ型冷凍機・冷蔵設備</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                旧型スクリュー圧縮機からインバーター制御型への更新で大幅な電力削減が可能なケースがある。特にCOP（成績係数）が低い旧型設備では効果が大きい。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">コンプレッサー更新・エア漏れ対策</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                インバーター制御型エアコンプレッサーへの更新と、エア漏れ箇所の定期点検・修繕。省エネ効果が確認しやすく投資回収期間が短いケースが多い。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">蒸気・廃熱回収</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                加熱・殺菌工程の廃熱を給湯・予熱に再利用するヒートリカバリーシステム。電力・ガスの合計コスト削減に貢献し、省エネ<Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金</Link>の対象になる場合がある。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">自家消費型太陽光・蓄電池</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                工場屋根への<Link href="/solar-self-consumption-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光</Link>発電設置で昼間の購入電力を削減。<Link href="/battery-consideration-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池</Link>と組み合わせてデマンド抑制・停電バックアップにも活用できる。PPAモデルで初期費用ゼロでの導入も可能。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで確認したいこと
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスク額を確認する</li>
            <li>固定プランと市場連動プランの年間コスト差を試算する</li>
            <li>夏の生産繁忙期と需給逼迫シナリオが重なった場合の影響を把握する</li>
            <li>燃料費高騰・円安シナリオでの影響額を生産コスト比で確認する</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/industry-electricity-guide",
              title: "業種別の電気料金見直しガイド一覧",
              description: "業種ごとの負荷特性と契約見直しの考え方を一覧で確認。",
            },
            {
              href: "/data-center-electricity-cost-review",
              title: "データセンターの電気料金見直しポイント",
              description: "高ベースロード・冗長性要求・特別高圧契約の考え方。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "安定性重視・使用量大の業種に固定プランが向きやすい理由。",
            },
            {
              href: "/electricity-price-by-voltage-type",
              title: "電圧区分別の電気料金の違い",
              description: "低圧・高圧・特別高圧の料金体系の違いと選択の考え方。",
            },
            {
              href: "/hospital-electricity-cost-review",
              title: "病院の電気料金見直しポイント",
              description: "安定性最優先の施設における契約設計の考え方。",
            },
            {
              href: "/demand-control-reduction-effect",
              title: "デマンドコントロールによる電気料金削減効果",
              description: "食品工場でのデマンド管理が基本料金削減にどれだけ効果があるかを解説。",
            },
            {
              href: "/factory-fixed-vs-market-linked",
              title: "工場向け：固定プランと市場連動プランの選び方",
              description: "食品工場の操業特性に合った料金プランの選択基準を整理。",
            },
          ]}
        />

        <ContentCta
          heading="食品工場の条件でリスクを確認する"
          description="連続操業・冷蔵設備・衛生管理空調の特性を踏まえた契約条件をシミュレーターに入力して、年間リスク額や固定プランとの比較を確認できます。"
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
