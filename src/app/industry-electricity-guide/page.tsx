import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "業種別の電気料金見直しガイド一覧｜業種特性を踏まえた契約見直しの考え方";
const pageDescription =
  "スーパー・倉庫・病院・オフィス・飲食店・ホテルなど業種ごとの電気料金見直しポイントを一覧で整理。負荷特性・固定vs市場連動の向き不向き・設備対策まで業種別に解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "業種別 電気料金 見直し",
    "法人 電気代 削減 業種",
    "電力契約 業種別 ガイド",
    "業種 電力コスト 特性",
    "電気料金 見直し 一覧",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/industry-electricity-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/industry-electricity-guide",
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

const industryPages = [
  {
    href: "/supermarket-electricity-cost-review",
    name: "スーパーマーケット",
    characteristic: "冷蔵・冷凍24時間稼働、季節変動大",
    summary:
      "ショーケース・空調・照明が常時稼働。利益率が低く電気料金上昇の影響が直結しやすい。固定プランとの相性が高い業種。",
  },
  {
    href: "/warehouse-electricity-cost-review",
    name: "物流倉庫",
    characteristic: "照明・荷役設備、昼夜シフト稼働",
    summary:
      "照明と荷役設備が主な負荷。自動化倉庫では空調・サーバー設備も増加。稼働時間帯の整理が契約見直しの鍵。",
  },
  {
    href: "/hospital-electricity-cost-review",
    name: "病院・医療施設",
    characteristic: "24時間安定供給必須、高い信頼性要求",
    summary:
      "医療機器・空調・給湯が常時稼働。電力供給の安定性を最優先とした契約設計が求められる。",
  },
  {
    href: "/office-building-electricity-cost-review",
    name: "オフィスビル",
    characteristic: "空調・照明・エレベーター、平日日中負荷",
    summary:
      "平日昼間に負荷が集中し、夜間・休日は大きく低下。季節によって空調負荷の変動幅が大きい。",
  },
  {
    href: "/municipality-electricity-cost-review",
    name: "自治体庁舎",
    characteristic: "年度予算制、調達ルール・説明責任の制約",
    summary:
      "年度予算管理と入札・見積合せ規則のもとで見直しを進める必要がある。固定プランとの相性が高い。",
  },
  {
    href: "/restaurant-chain-electricity-cost-review",
    name: "飲食店チェーン",
    characteristic: "調理・空調、長時間営業・多拠点",
    summary:
      "調理設備と空調の同時負荷でデマンドが高くなりやすい。多拠点での一括見直しが有効な場合がある。",
  },
  {
    href: "/hotel-electricity-cost-review",
    name: "ホテル",
    characteristic: "24時間稼働、客室・宴会場・厨房の複合負荷",
    summary:
      "客室空調・共用部照明・厨房設備・ランドリーが複合する。稼働率の季節変動が使用量に直結する。",
  },
  {
    href: "/food-factory-electricity-cost-review",
    name: "食品工場",
    characteristic: "連続操業、冷蔵・生産ライン・衛生管理",
    summary:
      "生産ラインと冷蔵設備が常時稼働。停電は製品ロスに直結するため、安定性重視の契約設計が求められる。",
  },
  {
    href: "/data-center-electricity-cost-review",
    name: "データセンター",
    characteristic: "高ベースロード、冷却設備、冗長性要求",
    summary:
      "IT機器と冷却設備が電気料金の大半を占める。特別高圧契約が基本で、PUE改善が電力コスト最適化の核心。",
  },
];

const viewpoints = [
  {
    heading: "負荷特性の把握",
    content:
      "業種によって「どの設備がいつ電力を使うか」が大きく異なります。24時間稼働の設備が多い業種（スーパー・病院・データセンター）は、ベースロードが高く固定費（基本料金）の割合も大きくなります。一方、平日日中に負荷が集中するオフィスは夜間・休日の需要が低く、時間帯別の料金設計との相性を検討する余地があります。",
  },
  {
    heading: "固定プランと市場連動プランの選択",
    content:
      "電力コストの予測可能性を重視するか、市場価格が低い時期の恩恵を受けることを優先するかは、業種の収益構造や予算管理の方法によって異なります。利益率が低い小売・飲食や、電力調達の安定性が事業継続に直結する医療・データセンターでは、固定プランが選ばれやすい傾向があります。",
  },
  {
    heading: "設備対策との組み合わせ",
    content:
      "契約見直しと並行して、設備の更新・省エネ対策・自家発電設備の導入を検討することで、電力コスト削減の効果を高められます。太陽光発電・蓄電池・デマンドコントローラーなど、業種に応じた設備対策の優先順位が変わります。",
  },
  {
    heading: "多拠点・グループ会社の一括対応",
    content:
      "複数店舗・複数施設を運営する法人では、個別契約を一括で見直すことで交渉力が高まる場合があります。ただし各拠点の負荷特性が異なる場合は、一律の条件では最適解が得られないこともあるため、拠点別の精査も必要です。",
  },
];

export default function IndustryElectricityGuidePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">業種別ガイド一覧</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          業種別の電気料金見直しガイド一覧
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の見直しは、自社の業種・施設の特性を踏まえて考えることが重要です。同じ「契約電力100kW」でも、24時間稼働の冷凍倉庫と平日日中のみ稼働するオフィスでは、固定プランと市場連動プランの向き不向き、設備対策の優先順位、そして見直しによる効果の大きさが大きく異なります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、業種ごとの電気料金見直しガイドを一覧にまとめています。自社の業種に近いページから確認してください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>業種別の電気料金見直しガイドへのリンク一覧</li>
            <li>業種によって見直しアプローチが異なる理由</li>
            <li>負荷特性・プラン選択・設備対策の基本的な考え方</li>
            <li>複数拠点・グループ対応の考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜ業種ごとに見直しアプローチが異なるのか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の契約見直しには、料金体系の選択（固定・市場連動）、契約電力の設定、供給者の切り替えなど複数の要素があります。しかし、これらの最適解は業種の特性によって大きく変わります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            たとえば、利益率の低い食品小売や飲食業では、電気料金の上振れが経営に直結するため、コストの予測可能性（固定プランの安定性）が重視されます。一方、電力使用量が少ない小規模オフィスでは、市場連動プランの単価が安い時期の恩恵を受けやすく、リスクの絶対額も小さくなります。
          </p>
          <div className="mt-4 space-y-4">
            {viewpoints.map((item) => (
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
            業種別ガイド一覧
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各業種の負荷特性、固定プランと市場連動プランの向き不向き、契約見直しポイント、設備対策について解説しています。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industryPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
              >
                <p className="text-base font-semibold text-slate-900">{page.name}</p>
                <p className="mt-1 text-xs font-medium text-sky-700">{page.characteristic}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{page.summary}</p>
                <p className="mt-3 text-sm font-medium text-sky-700 underline underline-offset-2">
                  詳しく見る →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種を問わず確認したい共通事項
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種別の特性が異なっても、契約見直しの基本的な確認事項は共通しています。以下の項目は、どの業種でも見直しの出発点となります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">現行契約の把握</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                契約電力・料金メニュー・契約期間・解約条件・燃料費調整単価の確認。現状を把握しないまま見積依頼すると比較が難しくなります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">直近12か月の使用量データ</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                季節変動を把握するために最低でも直近12か月、できれば24か月分の月次使用量データを準備します。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">契約切替のタイミング</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                契約更新時期の確認と、解約通知の締め切りの把握。見直しの検討開始は更新日の6か月前が目安です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">見積書の比較ポイント</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                単価だけでなく、基本料金・燃料費調整・再エネ賦課金・市場連動部分の条件を揃えて比較することが重要です。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            見直しの全体的な進め方は{" "}
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
            料金体系の種類と業種別の向き不向き
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向けの電気料金には大きく「固定プラン（完全固定・部分固定）」と「市場連動プラン（JEPX連動）」があります。業種ごとの収益構造・電力使用量・リスク許容度によって、適切なプランが異なります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい業種</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                <li>スーパー・食品小売（利益率が低く上振れ耐性が弱い）</li>
                <li>病院・医療施設（安定性が最優先）</li>
                <li>自治体庁舎（予算管理・説明責任の観点）</li>
                <li>食品工場（停電・コスト変動が生産に直結）</li>
                <li>データセンター（高ベースロードで変動の絶対額が大きい）</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動も検討できる業種</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                <li>オフィスビル（使用量が中程度でリスク管理できる場合）</li>
                <li>物流倉庫（昼間使用が中心でスポット価格を活用できる場合）</li>
                <li>ホテル（繁閑差を活用できる場合）</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                ※市場連動プランはリスク管理の仕組みがある場合に限ります。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            詳細は{" "}
            <Link
              href="/compare-market-linked-and-fixed-by-risk-pattern"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              リスクパターン別・市場連動と固定の比較
            </Link>{" "}
            も参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターの活用方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種別の見直しを検討する際、当サイトのシミュレーターを使うと、現行契約での年間リスク額や、固定プランと市場連動プランのコスト差を数値で把握できます。業種ページで整理した着眼点をもとに、自社の契約条件・使用量で確認することで、より具体的な判断材料になります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での上振れリスク（年間・月次）を確認する</li>
            <li>固定プランと市場連動プランの条件を入れ替えて比較する</li>
            <li>燃料費高騰・円安・需給逼迫などのシナリオ別影響を把握する</li>
            <li>業種ページの結果と照らし合わせ、社内説明の資料に活用する</li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="industry-electricity-guide" />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "業種を問わず確認すべき見直し準備の基本項目。",
            },
            {
              href: "/compare-market-linked-and-fixed-by-risk-pattern",
              title: "リスクパターン別・市場連動と固定の比較",
              description: "自社のリスク許容度から料金プランを選ぶ考え方。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "固定プランが有利に働く条件と業種の傾向。",
            },
            {
              href: "/contract-review-practice-guide",
              title: "契約見直し実務ガイド一覧",
              description: "準備から切替完了まで、実務的な進め方をまとめた一覧。",
            },
          ]}
        />

        <ContentCta
          heading="自社の業種・条件でリスクを確認する"
          description="業種ごとの特性を踏まえたうえで、自社の契約条件・使用量をシミュレーターに入力して年間リスク額を確認できます。"
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
