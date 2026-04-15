import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "公共体育館の電気料金見直しポイント｜空調・照明と稼働パターンを踏まえた考え方";
const pageDescription =
  "公共体育館の電気料金が上がりやすい要因と、契約見直しの着眼点を解説。空調・照明の大電力消費・稼働パターン、固定プランと市場連動の向き不向き、設備対策との組み合わせ方まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "公共体育館 電気料金 見直し",
    "体育館 電気代 削減",
    "スポーツ施設 電力契約 見直し",
    "体育館 空調 電気代",
    "公共施設 電力コスト 対策",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/public-gym-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/public-gym-electricity-cost-review",
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
    label: "空調設備（大容量）",
    detail:
      "体育館は天井が高く容積が大きいため、空調の電力消費が非常に大きくなります。メインアリーナの空調だけで施設全体の電力消費の半分以上を占めることも珍しくなく、夏季・冬季の気温差が大きいほど負荷が増加します。",
  },
  {
    label: "照明設備（高照度・広面積）",
    detail:
      "競技用照明は高照度が必要であり、アリーナ全体を照らすためには多数のランプが必要です。試合・大会開催時は全灯、練習・一般開放時は部分点灯など、利用形態によって照明負荷が変動します。",
  },
  {
    label: "附属施設（シャワー・更衣室・会議室）",
    detail:
      "シャワー室の給湯設備、トレーニングルームの冷暖房、会議室・控室の空調など、附属施設の電力消費も積み上がります。これらは本体アリーナとは別の利用パターンを持ちます。",
  },
  {
    label: "プール・温水設備（複合施設の場合）",
    detail:
      "温水プールを併設する複合体育館では、プールの加熱・循環ポンプが24時間稼働し大きなベースロードを形成します。プール棟の電力消費だけで全体の30〜50%を占める場合があります。",
  },
];

const reviewPoints = [
  {
    heading: "稼働スケジュールと電力使用パターンの把握",
    content:
      "公共体育館は一般開放・サークル利用・競技大会・学校利用など、用途によって稼働時間と負荷が大きく異なります。月ごとの利用状況と電力使用量の相関を確認しておくと、ピーク月の要因分析と対策の検討に役立ちます。特に夏季の大会シーズンと空調ピークが重なる時期の使用量は重点的に確認します。",
  },
  {
    heading: "施設管理主体と契約形態の確認",
    content:
      "公共体育館は自治体直営・指定管理者制度・PFI方式など管理形態が様々です。電力契約の契約者が自治体か指定管理者かによって、見直しの権限と手続きが異なります。現在の契約者と契約更改の決裁ルートを事前に確認しておく必要があります。",
  },
  {
    heading: "デマンド管理と最大需要電力の確認",
    content:
      "大会開催時に空調・照明・音響設備が同時にフル稼働すると、最大需要電力が急上昇します。このピークが契約電力を決める基準になるため、大会開催時のデマンド値を確認し、不必要に高い契約電力になっていないか検証することが重要です。",
  },
  {
    heading: "休館日・低稼働日の電力コスト",
    content:
      "休館日や低稼働日でも、照明待機電力・給湯設備・セキュリティ設備などにより一定の電力は消費されます。これらのベースロードを把握し、不要な設備の待機電力削減や、エネルギー管理の自動化を検討することで年間コストの改善につながります。",
  },
];

export default function PublicGymElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">公共体育館の見直しポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          公共体育館の電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          公共体育館は、大容量の空調設備と高照度照明を抱え、イベント開催時には電力消費が急増する施設です。自治体財政の観点からコスト管理が求められる一方、施設の安定稼働と利用者サービスの維持も不可欠です。電気料金の見直しには、施設の稼働パターンと設備特性の両面から検討する必要があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、公共体育館特有の負荷特性を踏まえた契約見直しの着眼点を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>公共体育館の電気料金が上がりやすい構造的な理由</li>
            <li>空調・照明・プール設備など負荷特性から見た着眼点</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>契約見直しで確認したい具体的なポイント</li>
            <li>LED化・高効率空調などの設備対策との相性</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            公共体育館の電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            公共体育館の電気料金は、以下の構造的な要因から高止まりしやすい特性があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>大空間の空調に大電力が必要であり、気温変化の影響を受けやすい</li>
            <li>競技用高照度照明は一般照明の数倍の電力を消費する</li>
            <li>大会・イベント開催時に複数設備が同時フル稼働しデマンドが急上昇する</li>
            <li>温水プール併設の場合は24時間ベースロードが大きくなる</li>
            <li>公共施設として稼働時間の大幅短縮や設備停止が難しい</li>
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
            体育館の電力使用は設備カテゴリごとに特性が大きく異なります。各設備の特性を理解しておくことが、見直しの優先度判断に役立ちます。
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
            公共体育館は自治体施設または自治体関連法人が管理するケースが多く、安定した予算管理と説明責任の観点から固定プランとの親和性が高い傾向があります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>単年度予算制のため、期中の電力費超過は補正予算対応が必要になる</li>
                <li>議会・首長への説明において価格変動リスクを低減した選択が求められる</li>
                <li>使用量が大きいため市場価格の変動影響が金額ベースで大きい</li>
                <li>指定管理者制度の場合、管理費超過は指定管理者の収支悪化に直結する</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>価格高騰時に施設運営費が大幅に増加するリスクへの備えが必要</li>
                <li>指定管理者契約の管理費条項との整合を確認する必要がある</li>
                <li>価格変動のリスクを誰が負担するか（自治体か指定管理者か）を事前に合意する</li>
                <li>複数年の平均でのコストメリットを議会説明できることが前提</li>
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
            公共体育館では省エネ設備への改修に<Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金</Link>が活用できるケースが多く、電力契約の見直しと設備改修を組み合わせることで効果が高まります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">LED照明への更新</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                競技用照明をLEDに更新することで消費電力を大幅に削減できます。スポーツ施設対応の高照度LEDは製品が充実しており、補助金活用で初期投資を圧縮できる場合があります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">高効率空調への更新</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                大空間対応の高効率空調（インバーター制御型）への更新で、空調の電力消費を削減できます。ESCO事業を活用することで初期投資なしで実施できる場合もあります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">太陽光発電の設置</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                屋根面積が広い体育館は<Link href="/solar-self-consumption-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光</Link>発電との相性が良く、昼間の電力購入を削減できます。PPA（電力購入契約）方式を利用することで初期投資ゼロでの導入も可能です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">BEMSによる制御</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                BEMSを導入することで空調・照明の稼働状況をリアルタイムで把握・制御し、過剰稼働を抑制できます。省エネ効果の見える化が補助金申請書類に活用できます。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            公共体育館の契約見直しでは、以下の観点でシミュレーターを活用することで、財政担当・議会への説明資料となる数値を把握できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスクを金額ベースで確認する</li>
            <li>固定プランと市場連動プランの年間コスト差を比較する</li>
            <li>燃料費高騰シナリオでの影響額を試算し、予算リスク管理に活用する</li>
            <li>夏季イベントシーズンのピーク月を前提にした影響額を試算する</li>
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
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目を見積比較に活用するためのポイント。",
            },
            {
              href: "/hospital-electricity-cost-review",
              title: "病院の電気料金見直しポイント",
              description: "安定性重視の公共的施設における契約見直しの考え方。",
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
          description="公共体育館の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの比較にも活用できます。"
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
