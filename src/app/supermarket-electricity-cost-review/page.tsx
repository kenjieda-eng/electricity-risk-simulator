import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "スーパーマーケットの電気料金見直しポイント｜冷蔵・空調負荷を踏まえた考え方";
const pageDescription =
  "スーパーマーケットの電気料金が上がりやすい要因と、契約見直しの着眼点を解説。冷蔵・冷凍・空調負荷の特性、固定プランと市場連動の向き不向き、設備対策との組み合わせ方まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "スーパー 電気料金 見直し",
    "スーパーマーケット 電気代 削減",
    "食品小売 電力契約 見直し",
    "スーパー 電力コスト 対策",
    "冷蔵 冷凍 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/supermarket-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/supermarket-electricity-cost-review",
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
    label: "冷蔵・冷凍設備",
    detail:
      "ショーケース、冷蔵庫、冷凍庫は24時間稼働するため、ベースロードの大きな部分を占めます。外気温が高い夏場は冷媒の負荷が上がり、電力使用量が増加します。",
  },
  {
    label: "空調設備",
    detail:
      "売場面積が広いスーパーでは、空調の占める割合が大きくなります。来客動線を考慮した温度管理が求められるため、空調の使用を大幅に抑えることが難しい場合が多いです。",
  },
  {
    label: "照明",
    detail:
      "営業時間中は売場全体の照明が必要です。LED化が進んだ店舗でも、売場面積あたりの照明密度は一般オフィスより高い傾向にあります。",
  },
  {
    label: "調理・惣菜設備",
    detail:
      "惣菜コーナーやベーカリーを持つ店舗では、加熱調理設備の電力使用も無視できません。ピーク時間帯と重なると最大需要電力（デマンド）を押し上げる要因になります。",
  },
];

const reviewPoints = [
  {
    heading: "営業時間と負荷パターンの整理",
    content:
      "スーパーは早朝の搬入・仕込みから閉店後の清掃まで、実質的な電力使用時間が長い業種です。営業時間帯のピーク負荷と、閉店後の冷蔵ベースロードを分けて把握することで、契約電力の妥当性を確認できます。",
  },
  {
    heading: "季節変動の確認",
    content:
      "夏場は冷蔵・空調の両方が負荷増加するため、年間で最も電気料金が高くなりやすい時期です。冬場はお歳暮・年末商戦で営業時間が延長される場合もあります。直近12か月の請求書から季節パターンを把握しておくと、見積条件の設定に活かせます。",
  },
  {
    heading: "デマンド管理の状況",
    content:
      "複数の設備が同時に起動するタイミング（開店準備時など）にデマンドのピークが発生しやすくなります。デマンドコントローラーの導入有無や、設備の起動タイミングの分散化がされているかを確認しておくと、契約電力の引き下げ余地が見えてきます。",
  },
  {
    heading: "複数店舗の一括見直し",
    content:
      "チェーン展開しているスーパーでは、店舗ごとに契約条件が異なるケースがあります。複数店舗をまとめて見積依頼することで、ボリュームディスカウントの可能性が出る場合もあります。ただし、各店舗の負荷特性が異なる場合は個別に条件を精査する必要があります。",
  },
];

export default function SupermarketElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          スーパーマーケットの電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          スーパーマーケットは、冷蔵・冷凍・空調・照明など常時稼働の設備が多く、電気料金が事業コストに占める割合が大きい業種です。電気料金の上昇は利益率に直接影響するため、契約見直しは経営判断の重要な要素になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、スーパー特有の負荷特性を踏まえ、契約見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>スーパーの電気料金が上がりやすい構造的な理由</li>
            <li>冷蔵・空調・照明など負荷特性から見た着眼点</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>契約見直しで確認したい具体的なポイント</li>
            <li>蓄電池・太陽光などの設備対策との相性</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            スーパーマーケットの電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            スーパーの電気料金は、他の商業施設と比べても高くなりやすい構造を持っています。主な要因は以下のとおりです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>冷蔵・冷凍設備が24時間稼働し、ベースロードが大きい</li>
            <li>営業時間が長く、照明と空調の稼働時間も長い</li>
            <li>夏場は冷蔵・空調の二重負荷で使用量が急増しやすい</li>
            <li>惣菜・ベーカリー設備がデマンドのピークを押し上げる</li>
            <li>利益率が低い業種のため、電気料金の上昇が収益に直結する</li>
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
            スーパーの電力使用は、以下の設備カテゴリに大きく分けて考えることができます。各設備の負荷特性を理解しておくと、契約見直しや設備対策の優先順位が見えてきます。
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
            スーパーマーケットは、一般的に固定プランとの相性がよい業種と考えられています。その理由は以下のとおりです。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>利益率が低く、電気料金の上振れが収益を直接圧迫する</li>
                <li>使用量が大きいため、市場価格の変動が金額ベースで大きく影響する</li>
                <li>予算管理の安定性が重要（月次の経費予測が必要）</li>
                <li>社内説明で「価格変動リスクを抑えた」と説明しやすい</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>市場価格が高騰する局面で使用量が多い夏場と重なるリスク</li>
                <li>上振れ時の影響額を事前にシミュレーションしておく必要がある</li>
                <li>「平均すれば安い」が成立しない年が出るリスク</li>
                <li>社内説明・稟議での説明負荷が高くなりがち</li>
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
            契約見直しと並行して、設備面での対策を検討することで、電気料金の削減効果をさらに高められる場合があります。スーパーマーケットで検討されることの多い設備対策は以下のとおりです。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">蓄電池</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                ピーク時間帯の電力を蓄電池から供給し、デマンド値を抑制する。基本料金の削減につながる可能性がある。停電時のバックアップ電源としても機能する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">自家消費型太陽光</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                屋根面積が広い郊外型店舗では、自家消費型太陽光発電が検討しやすい。昼間の購入電力を削減できるため、電力量料金の圧縮に効果がある。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">冷蔵設備の更新</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                旧型の冷蔵ショーケースから高効率型への更新は、電力使用量の削減に直結する。扉付きケースへの切替えも効果が大きい。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンドコントローラー</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                設備の同時起動を制御し、最大需要電力のピークを抑える。契約電力の引き下げにつながり、基本料金の削減効果がある。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            スーパーマーケットの契約見直しでは、以下の観点でシミュレーターを活用すると、判断材料を数値で把握できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスクを確認する</li>
            <li>固定プランと市場連動プランの年間コスト差を比較する</li>
            <li>夏場のピーク月を前提にした影響額を試算する</li>
            <li>燃料費高騰シナリオでの影響幅を把握する</li>
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
              href: "/warehouse-electricity-cost-review",
              title: "物流倉庫の電気料金見直しポイント",
              description: "倉庫特有の負荷特性と契約見直しの考え方。",
            },
            {
              href: "/hospital-electricity-cost-review",
              title: "病院の電気料金見直しポイント",
              description: "安定性を重視した医療施設の契約見直しの考え方。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
          ]}
        />

        <ContentCta
          heading="自社の条件でリスクを確認する"
          description="スーパーの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの比較にも活用できます。"
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
