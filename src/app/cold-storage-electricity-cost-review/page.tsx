import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "冷蔵倉庫の電気料金見直しポイント｜大きなベースロードを踏まえた考え方";
const pageDescription =
  "冷蔵倉庫の電気料金見直しを解説。巨大な冷凍冷蔵ベースロード、温度帯（-25°C/-5°C/+5°C）別の電力特性、夏季ピーク、断熱性能の影響、固定プランが強く向く理由まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "冷蔵倉庫 電気料金 見直し",
    "冷凍倉庫 電気代 削減",
    "冷蔵倉庫 電力契約 見直し",
    "冷蔵庫 電力コスト",
    "低温倉庫 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/cold-storage-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/cold-storage-electricity-cost-review",
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

const temperatureZones = [
  {
    label: "冷凍帯（-25°C前後）",
    detail:
      "冷凍食品・アイスクリーム・水産物などを保管する最も低温のゾーンです。圧縮機の稼働負荷が大きく、外気温との差が最も大きいため、夏季の電力消費が著しく増加します。単位体積当たりの電力使用量が最も大きい温度帯です。",
  },
  {
    label: "冷蔵帯（-5°C前後）",
    detail:
      "生鮮食品・乳製品・畜産物などを保管する中温帯です。冷凍帯より消費電力は小さいですが、保管量が多い場合は総電力量として大きくなります。入出庫の頻度が高いほど扉開閉による温度変動が増え、設備の稼働頻度が上がります。",
  },
  {
    label: "定温帯（+5〜15°C前後）",
    detail:
      "青果・飲料・チルド食品などを保管する温度帯です。冷凍・冷蔵帯と比べて設備負荷は軽いですが、夏季には冷却負荷が増加します。空調に近い設備を使う場合もあり、電力効率は比較的高い温度帯です。",
  },
];

const loadCharacteristics = [
  {
    label: "冷凍冷蔵設備（コンプレッサー・冷却塔）",
    detail:
      "冷蔵倉庫の電力消費の大部分を占めるのが冷凍機・コンプレッサーです。24時間365日稼働し、外気温が高い夏季には稼働率が上がり電力消費が増加します。設備の経年劣化によって効率が低下すると、同じ温度管理でも電力消費量が増えます。",
  },
  {
    label: "フォークリフト充電設備",
    detail:
      "入出庫作業に使用するフォークリフト（電動式）の充電設備は、作業シフト終了後に集中して稼働します。充電タイミングが重なるとデマンドを押し上げる要因になります。充電スケジュールの分散によってデマンド削減の余地があります。",
  },
  {
    label: "照明・空調（作業エリア）",
    detail:
      "仕分け・梱包などの作業エリアは、作業時間中の照明・空調が必要です。低温作業環境での防寒対策（ヒーター）も電力消費に含まれます。作業時間帯を把握することで、時間帯別のピーク状況が見えてきます。",
  },
  {
    label: "デフロスト（霜取り）ヒーター",
    detail:
      "冷凍設備では定期的な霜取り（デフロスト）のためにヒーターが稼働します。デフロストのタイミングは設備側で自動制御されますが、複数の設備が同時にデフロスト運転に入るとデマンドを一時的に押し上げる要因になります。",
  },
];

const reviewPoints = [
  {
    heading: "使用量の大きさと固定プランの相性",
    content:
      "冷蔵倉庫は電力使用量が非常に大きい業種です。24時間365日の冷凍冷蔵稼働により、年間電力使用量は一般的なオフィスビルの数倍以上になる施設も多くあります。これほど大きな使用量が市場価格変動に常時さらされると、電力コストの上振れが事業リスクレベルの影響を持ちます。価格を固定することの優先度が非常に高い業種です。",
  },
  {
    heading: "夏季ピークと契約電力の管理",
    content:
      "冷蔵倉庫は夏季に電力使用量が大幅に増加します。外気温が高いほど、目標温度との差を維持するために冷凍機がより多くの電力を消費します。夏季のピーク月を前提にした契約電力の設定が必要で、年間の最大需要電力（デマンド値）を把握しておくことが契約条件交渉の基礎になります。",
  },
  {
    heading: "断熱性能と電力消費の関係",
    content:
      "倉庫の断熱性能は電力消費に直接影響します。断熱材の経年劣化・扉のパッキン劣化・シートシャッターの隙間などから外気が侵入すると、設備の稼働率が上がり電力消費が増加します。定期的な断熱性能の点検・補修は、設備投資なしに電力消費を削減できる有効な手段です。",
  },
  {
    heading: "高圧・特別高圧受電の特性を踏まえた交渉",
    content:
      "大規模な冷蔵倉庫は高圧または特別高圧で受電しているケースが多く、この場合は電力自由化の対象として幅広い電力会社・新電力から選択できます。使用量が大きいほど見積条件の交渉余地が生まれます。複数社から見積もりを取り比較することが重要です。",
  },
];

export default function ColdStorageElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">冷蔵倉庫の見直しポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          冷蔵倉庫の電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          冷蔵倉庫は、冷凍冷蔵設備が24時間365日稼働するため、業種別の電力使用量がとりわけ大きい部類に入ります。外気温の影響を直接受けながら一定温度を維持し続けるために、電力コストは経営の主要変数のひとつです。価格変動リスクを適切にコントロールする契約選択が不可欠です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、冷蔵倉庫特有の温度帯別負荷特性と、契約見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>冷蔵倉庫の電気料金が上がりやすい構造的な理由</li>
            <li>温度帯（冷凍帯・冷蔵帯・定温帯）別の電力特性</li>
            <li>固定プランが強く向く理由と市場連動の高リスク性</li>
            <li>夏季ピーク・断熱性能・デマンド管理の着眼点</li>
            <li>設備対策との組み合わせ方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            冷蔵倉庫の電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            冷蔵倉庫は、業種の特性として電気料金の上昇影響を最も強く受けやすい施設のひとつです。主な要因は以下のとおりです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>冷凍冷蔵設備が24時間365日稼働し、ベースロードが極めて大きい</li>
            <li>夏季は外気温の上昇によって設備負荷が著しく増加する</li>
            <li>電力使用量が大きいため、料金単価の上昇が金額ベースで甚大な影響になる</li>
            <li>燃料費調整額の上昇が大使用量すべてに毎月上乗せされる</li>
            <li>断熱性能の低下が設備稼働率を上げ、電力消費を増やす</li>
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
            温度帯別の電力特性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            冷蔵倉庫は保管品の種類によって複数の温度帯を持つ施設も多く、温度帯によって電力消費の特性が異なります。どの温度帯が電力コストの主体になっているかを把握しておくことが重要です。
          </p>
          <div className="mt-4 space-y-3">
            {temperatureZones.map((item) => (
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
            負荷特性から見た着眼点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            冷蔵倉庫全体の電力使用は複数の設備カテゴリから構成されています。主要設備の特性を把握しておくと、デマンド管理や省エネ対策の優先順位が見えてきます。
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
            冷蔵倉庫は、業種別で見ても固定プランの必要性が最も高い部類に入ります。使用量の大きさと24時間稼働という特性から、市場連動の場合のリスクが他業種より著しく大きくなります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが強く向く理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>年間使用量が非常に大きく、価格変動の影響額が事業リスクになる</li>
                <li>夏のピーク期に使用量増加と市場高値が重なる構造的リスク</li>
                <li>電力コストが事業収支の主要変数であるため確実性が不可欠</li>
                <li>保管料・物流コストの見積もりに電力コストの安定が必要</li>
                <li>24時間365日の稼働で価格変動の影響から逃れる手段がない</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>夏の市場高値期に最も電力を使う季節特性がリスクを増幅する</li>
                <li>使用量が大きいため高騰時の追加コストが甚大になる</li>
                <li>荷主向け保管料に電力コスト上昇を即座に転嫁できない</li>
                <li>電力市場の常時監視と柔軟な対応体制が必要になる</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランのリスクについては{" "}
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
            冷蔵倉庫は電力使用量が大きいため、省エネ設備投資の効果が金額ベースで非常に大きく出やすい業種です。契約見直しと設備対策を組み合わせることで、電力コスト削減の効果を最大化できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">断熱性能の補修・強化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                断熱パネルの劣化補修・扉パッキンの交換・シートシャッターの整備など、断熱性能の維持は設備更新より低コストで電力消費を削減できる有効な手段です。定期点検のサイクルに組み込むことをおすすめします。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">冷凍機・コンプレッサーの更新</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                インバーター制御の高効率冷凍機への更新は、電力消費量を大幅に削減できます。設備更新の検討時期には、電力使用量削減効果を投資回収試算に含めることが重要です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンドコントローラー</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                フォークリフト充電・デフロスト・作業エリア空調などの稼働タイミングを制御してデマンドのピークを抑制します。契約電力の引き下げに成功すれば、基本料金の削減効果が毎月継続します。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">自家消費型太陽光発電</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                広大な屋根面積を持つ冷蔵倉庫は自家消費型太陽光の設置に適しています。昼間の電力購入量を削減するとともに、夏季ピーク期の電力調達量を抑制する効果が期待できます。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーター活用の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            冷蔵倉庫の契約見直しでは、使用量が大きいだけに、プラン選択の差が年間で非常に大きな金額差になります。市場価格が高騰したシナリオでの影響額をシミュレーターで試算することで、固定プランの必要性を具体的な数値で把握できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスクを確認する</li>
            <li>夏のピーク月（7〜9月）を前提にした影響額を試算する</li>
            <li>固定プランと市場連動プランの年間コスト差の規模感を把握する</li>
            <li>電力価格が大幅に高騰したシナリオでの事業収支への影響を確認する</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/warehouse-electricity-cost-review",
              title: "物流倉庫の電気料金見直しポイント",
              description: "倉庫特有の負荷特性と契約見直しの考え方。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "予算管理と安定性を重視する法人に固定プランが向きやすい理由。",
            },
            {
              href: "/businesses-not-suited-for-market-linked-electricity-plan",
              title: "市場連動プランが向かない法人の特徴",
              description: "大使用量・24時間稼働法人が市場連動を避けるべき理由。",
            },
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電気料金見直しポイント",
              description: "冷蔵・冷凍設備を多数持つ食品小売の契約見直しの考え方。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目を一覧で整理。",
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
          description="冷蔵倉庫の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの年間コスト比較にも活用できます。"
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
