import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "介護施設の電気料金見直しポイント｜安定供給と予算管理を踏まえた考え方";
const pageDescription =
  "介護施設の電気料金見直しを解説。24時間介護の設備稼働、入浴・洗濯負荷、居室温度管理の電力需要、公的施設の予算制約、電力供給の安定性優先と固定プランの相性まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "介護施設 電気料金 見直し",
    "老人ホーム 電気代 削減",
    "特養 電力契約 見直し",
    "介護事業所 電力コスト",
    "福祉施設 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/nursing-care-facility-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/nursing-care-facility-electricity-cost-review",
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
    label: "24時間の居室空調・照明",
    detail:
      "介護施設では、利用者の安全・快適性のため、居室の空調と廊下照明が24時間稼働します。一般のオフィスや商業施設と異なり、深夜・休日も電力使用量が大幅には減少しません。これがベースロードを高くする主因のひとつです。",
  },
  {
    label: "入浴設備・給湯",
    detail:
      "特別養護老人ホームや介護老人保健施設では、大型浴槽・機械浴・シャワーチェアなどの入浴設備が特定の時間帯に集中して稼働します。電気式給湯設備では、この時間帯の電力消費がデマンドのピークを形成します。",
  },
  {
    label: "洗濯・乾燥設備",
    detail:
      "入所施設では、タオル・シーツ・衣類の洗濯が日々の業務として発生します。業務用洗濯機・乾燥機の電力消費は大きく、稼働スケジュールを分散させることでデマンドを抑制できる余地があります。",
  },
  {
    label: "医療機器・衛生設備",
    detail:
      "在宅支援設備や医療的ケアが必要な入所者が多い施設では、電動ベッド・吸引器・酸素濃縮器などの医療機器が常時稼働します。これらは停電時のバックアップ電源としての確保も重要な課題です。",
  },
];

const reviewPoints = [
  {
    heading: "供給安定性を最優先に考える",
    content:
      "介護施設では、電力供給の安定性は利用者の安全に直結します。契約の見直しにあたっては、価格条件だけでなく、小売事業者の経営基盤・供給安定性・最終保障供給のリスクについても確認することが必要です。信頼性の低い事業者への切替えは、最悪の場合、供給停止リスクを伴います。",
  },
  {
    heading: "公的施設の予算管理と電気料金の変動",
    content:
      "社会福祉法人・医療法人が運営する介護施設では、年度ごとの予算管理が必要です。電気料金が予算を大幅に超過した場合、補正対応や翌年度予算への転嫁が難しい場合があります。固定価格契約によって年間コストを事前に確定させておくことが、予算管理の観点から有効です。",
  },
  {
    heading: "デマンド管理と設備の稼働時間分散",
    content:
      "入浴・洗濯などの高電力設備の稼働時間を分散させることで、デマンドのピークを抑制できます。現状の最大需要電力（デマンド値）と契約電力を比較し、契約電力の引き下げ余地があるかを確認してみましょう。デマンドコントローラーの導入で基本料金削減につながる場合があります。",
  },
  {
    heading: "介護報酬・補助金との整合性",
    content:
      "介護施設の電力コスト削減は、施設全体の経営改善につながります。省エネ設備投資については、厚生労働省・経済産業省・自治体の補助金制度が活用できる場合があります。電力契約の見直しと省エネ設備投資を組み合わせた計画を立てることが、長期的なコスト改善に有効です。",
  },
];

export default function NursingCareFacilityElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">介護施設の見直しポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          介護施設の電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          介護施設は、利用者の生活・安全を守るために電力供給の途絶が許されない施設です。24時間稼働の空調・入浴・洗濯・医療機器など、夜間も含めた継続的な電力需要があります。コスト削減の観点だけでなく、供給安定性と予算管理の確実性を重視した契約選択が求められます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、介護施設特有の負荷特性と公的施設としての制約を踏まえ、電気料金見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>介護施設の電気料金が上がりやすい構造的な理由</li>
            <li>空調・入浴・洗濯・医療機器の負荷特性から見た着眼点</li>
            <li>固定プランが向きやすい理由と供給安定性の重要性</li>
            <li>公的施設の予算制約を踏まえた契約見直しのポイント</li>
            <li>省エネ設備投資との組み合わせ方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            介護施設の電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            介護施設は24時間稼働という特性から、電力コストの増加が経営に大きく影響します。主な要因は以下のとおりです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>居室・共用部の空調・照明が24時間365日稼働する</li>
            <li>利用者の体温調節能力の低下から室温管理基準が厳しく設定されやすい</li>
            <li>入浴・洗濯などの高電力設備が日常業務として毎日稼働する</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>の上昇が24時間稼働分すべてに影響する</li>
            <li>介護報酬制度のなかで電気料金上昇を価格に転嫁しにくい</li>
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
            介護施設の電力使用は、設備カテゴリによって稼働パターンが異なります。各設備の特性を把握しておくと、デマンド管理や省エネ対策の優先順位が見えてきます。
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
            介護施設は、供給安定性と予算の確実性の両面から、固定プランとの相性が非常に高い業種です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>年度予算の確実性確保に固定価格が不可欠</li>
                <li>利用者・家族への費用説明に価格安定性が重要</li>
                <li>24時間稼働で市場連動の変動影響を常時受け続けるリスク</li>
                <li>担当者の価格変動監視体制を省略できる</li>
                <li>経営基盤・供給安定性の高い事業者を選びやすい</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>24時間稼働分すべての料金が市場価格に連動する</li>
                <li>価格高騰時の予算超過に対応する手段が限られる</li>
                <li>価格変動の管理・モニタリング体制が必要になる</li>
                <li>新電力の経営悪化による供給停止リスクに注意が必要</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給のリスクについては{" "}
            <Link
              href="/last-resort-supply-risk"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              最終保障供給とそのリスク
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
            介護施設では、利用者への影響を最小限にしながら省エネを進める必要があります。運用を変えずに実施できる設備対策から優先的に検討することをおすすめします。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">LED照明への切替え</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                廊下・共用部・居室のLED化は、24時間稼働の照明電力削減に直接効果があります。人感センサーは居室では利用者の生活パターンへの影響に注意が必要ですが、廊下・トイレでは有効です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">空調設備の高効率化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                老朽化した空調設備の更新は電力削減効果が大きく、施設全体の温度管理品質も向上します。更新工事は利用者への影響を考慮した計画的な実施が必要です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">洗濯・給湯の稼働分散</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                洗濯・乾燥設備の稼働時間を分散させることで、デマンドのピークを下げられます。設備投資なしで実施できる運用改善として、比較的取り組みやすい対策です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">非常用電源の整備</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                停電時の利用者安全確保のため、非常用発電機や<Link href="/battery-consideration-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池</Link>の整備は施設運営上の重要課題です。省エネ目的の蓄電池導入を非常用電源として兼用する設計も検討できます。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーター活用の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            介護施設の契約見直しでは、24時間稼働という特性から年間の電気料金が安定して大きな水準になります。シミュレーターを使って、現行契約の上振れリスクを数値で把握することで、固定プランへの切替えの必要性を判断しやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスクを確認する</li>
            <li>固定プランへの切替えによる予算確実性を数値で把握する</li>
            <li>燃料費調整額の変動が月次予算に与える影響幅を確認する</li>
            <li>電力価格高止まりシナリオでの年間超過コストを試算する</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/hospital-electricity-cost-review",
              title: "病院の電気料金見直しポイント",
              description: "医療安全を前提とした供給安定性重視の契約見直しの考え方。",
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
              href: "/school-electricity-cost-review",
              title: "学校施設の電気料金見直しポイント",
              description: "公共施設の予算制約と季節変動を踏まえた考え方。",
            },
            {
              href: "/last-resort-supply-risk",
              title: "最終保障供給とそのリスク",
              description: "新電力からの切替え時に知っておくべき供給保証の仕組み。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
            {
              href: "/electricity-cost-benchmark-by-industry",
              title: "業種別・電気料金の相場と目安",
              description: "介護施設の電気料金水準を業界平均と比較し、コストの見直し根拠を把握する。",
            },
          ]}
        />

        <ContentCta
          heading="自施設の条件でリスクを確認する"
          description="介護施設の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの年間コスト比較にも活用できます。"
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
