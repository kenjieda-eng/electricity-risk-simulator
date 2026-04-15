import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "コンビニの電気料金見直しポイント｜24時間営業と多拠点を踏まえた考え方";
const pageDescription =
  "コンビニエンスストアの電気料金見直しを解説。24時間365日の冷蔵・照明負荷、面積当たりの高い電力密度、フランチャイズ契約の制約、多拠点一括見直しの考え方まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "コンビニ 電気料金 見直し",
    "コンビニエンスストア 電気代 削減",
    "24時間営業 電力契約 見直し",
    "フランチャイズ 電気料金",
    "コンビニ 多拠点 電力コスト",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/convenience-store-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/convenience-store-electricity-cost-review",
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
    label: "冷蔵・冷凍ショーケース",
    detail:
      "コンビニの電力使用の最大の要因は冷蔵・冷凍ショーケースです。24時間365日稼働するため、ベースロードとしての電力消費が大きく、外気温が上がる夏場はさらに負荷が増加します。多くの店舗で電力使用量の40〜50%を占めると言われています。",
  },
  {
    label: "店内照明・サイン",
    detail:
      "24時間明るさを維持する店内照明と、夜間の集客に重要な外部看板・サインが常時稼働します。LED化によって削減が進んでいますが、営業時間が長いため絶対的な消費量は大きくなります。",
  },
  {
    label: "空調設備",
    detail:
      "24時間開閉される出入り口と、冷蔵ケースからの冷気漏れによって、空調の負荷は一般店舗より高くなります。夏の冷房は特に負荷が大きく、冷蔵ケースの発熱との相互作用で効率が低下することもあります。",
  },
  {
    label: "電子レンジ・ホットケース・ATM",
    detail:
      "顧客向けの電子レンジや中食用ホットケース、ATMは終日稼働します。ATMは金融機関との契約設備のため店舗側の制御が難しいことがあります。電子レンジの集中利用はピーク時間帯のデマンド形成に寄与します。",
  },
];

const reviewPoints = [
  {
    heading: "フランチャイズ本部との関係を確認する",
    content:
      "フランチャイズ加盟店の場合、電力契約の条件や推奨電力会社が本部から指定されているケースがあります。独自に見直しを進める前に、フランチャイズ契約上の制約を確認することが重要です。本部が一括契約して加盟店に配賦しているモデルでは、個別見直しの余地がない場合もあります。",
  },
  {
    heading: "店舗ごとの使用量と契約条件の把握",
    content:
      "複数店舗を運営するオーナーや法人の場合、店舗ごとに面積・設備・立地が異なるため、電力使用量も異なります。まず各店舗の直近12か月の使用量と契約電力を一覧化し、現状を把握することから始めます。使用量の多い店舗から優先的に見直すことで、投資対効果が高まります。",
  },
  {
    heading: "24時間稼働前提のデマンド管理",
    content:
      "コンビニは閉店時間がなく、夜間も最低限の設備は稼働し続けます。デマンドのピークは、朝の仕入れ・開梱作業と空調の同時稼働が起きやすい時間帯に発生しがちです。デマンドコントローラーの導入で契約電力を最適化できる余地があるかを確認しておきましょう。",
  },
  {
    heading: "多店舗の一括見直しと交渉力",
    content:
      "複数店舗をまとめて新電力に切り替える場合、総使用量の大きさが交渉材料になります。ただし店舗ごとに契約者が異なる場合（個人オーナー）は一括契約が難しい場合もあります。法人として複数店舗を運営している場合は、一括見積依頼を検討する価値があります。",
  },
];

export default function ConvenienceStoreElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">コンビニの見直しポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          コンビニの電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          コンビニエンスストアは、24時間365日の冷蔵・照明・空調が必須の業種です。店舗面積は小さいものの、坪当たりの電力消費量は小売業種のなかでも高い部類に入ります。フランチャイズ加盟店の場合は本部との関係も考慮しながら、契約見直しの可能性を探ることになります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、コンビニ特有の負荷特性と多拠点運営の視点から、電気料金見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>コンビニの電気料金が上がりやすい構造的な理由</li>
            <li>冷蔵・照明・空調の負荷特性から見た着眼点</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>フランチャイズ制約と個別見直しの関係</li>
            <li>多店舗一括見直しの考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            コンビニの電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            コンビニは店舗規模の小ささにかかわらず、電気料金が事業コストに占める割合が高くなりやすい業種です。主な要因は以下のとおりです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>24時間365日の冷蔵ショーケース稼働でベースロードが高い</li>
            <li>坪当たりの電力使用量が一般小売店舗より大幅に高い</li>
            <li>夏場は冷蔵・空調の負荷が重なり使用量が急増する</li>
            <li>深夜帯も最低限の設備が稼働し続ける構造</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>の上昇が24時間稼働分すべてに影響する</li>
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
            コンビニの電力使用は、以下の設備カテゴリに大きく分けて考えることができます。設備ごとの特性を把握しておくと、見直しの優先順位を判断しやすくなります。
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
            コンビニは24時間稼働で大きなベースロードを持つため、電力市場価格の変動影響を常時受け続ける構造です。この特性から、固定プランが向きやすいと考えられます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>24時間の大きなベースロードが価格変動に常時さらされる</li>
                <li>夏のピーク期に使用量増加と市場高値が重なるリスクが高い</li>
                <li>利益率が低い業態で電気料金の上振れが直接経営に響く</li>
                <li>多店舗運営時の管理工数を最小化できる</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>市場価格高騰時の使用量が大きいため、影響額が甚大になるリスク</li>
                <li>夜間・深夜帯の使用量も大きいため価格変動の恩恵が限定的</li>
                <li>フランチャイズ本部の指定プランと競合する可能性</li>
                <li>多店舗での価格変動管理は複雑になりがち</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランと市場連動プランの特徴の詳細は{" "}
            <Link
              href="/market-linked-vs-fixed"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランと固定プランの違い
            </Link>{" "}
            で確認できます。
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
            契約見直しと並行して、設備面での対策を組み合わせることで、コンビニの電気代削減効果をさらに高められます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">冷蔵ショーケースの扉付き化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                オープン型ショーケースに扉を設置することで、冷蔵負荷を20〜30%削減できると言われています。空調負荷の低減にもつながり、相乗効果があります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">LED照明・看板への切替え</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                蛍光灯・ハロゲン使用の店舗では、LED化によって照明電力を40〜50%削減できます。24時間稼働であるほど回収期間が短くなります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンドコントローラー</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                複数設備の同時起動を制御してデマンドのピークを抑制します。<Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>の引き下げが実現すれば、<Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>の削減に直結します。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">空調の効率改善</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                自動ドアの二重化や風除室の設置によって、冷暖房効率が改善されます。空調機のフィルター清掃と定期的な冷媒チェックも電力効率維持に重要です。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーター活用の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            コンビニは使用量が大きく、市場価格変動の影響を直接受けるため、シミュレーターを使って年間コストの変動幅を事前に把握することが重要です。複数店舗をお持ちの場合は、代表的な1店舗の条件で試算してみることをおすすめします。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約での年間上振れリスクを確認する</li>
            <li>夏のピーク月を前提にした影響額を試算する</li>
            <li>固定プランへの切替えによるコスト安定効果を比較する</li>
            <li>多店舗の合計使用量ベースでのリスク全体像を把握する</li>
          </ul>
        </section>

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
              href: "/small-office-electricity-cost-review",
              title: "中小オフィスの電気料金見直しポイント",
              description: "限られた使用量でも効果を出す考え方。",
            },
            {
              href: "/shopping-mall-electricity-cost-review",
              title: "ショッピングモールの電気料金見直しポイント",
              description: "大規模施設の空調・共用部を踏まえた考え方。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
            {
              href: "/multi-site-company-price-surge-risk",
              title: "多拠点企業の電気料金高騰リスク",
              description: "コンビニなど多店舗展開企業が直面する電気料金高騰リスクの管理方法。",
            },
            {
              href: "/led-air-conditioning-reduction-effect",
              title: "LED・空調更新による電気料金削減効果",
              description: "コンビニの照明・空調設備の更新で期待できる電気料金削減効果を解説。",
            },
          ]}
        />

        <ContentCta
          heading="自店舗の条件でリスクを確認する"
          description="コンビニの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの年間コスト比較にも活用できます。"
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
