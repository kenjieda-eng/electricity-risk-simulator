import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "ホテルの電気料金見直しポイント｜24時間稼働と客室管理を踏まえた考え方";
const pageDescription =
  "ホテルの電気料金が上がりやすい要因と契約見直しの着眼点を解説。24時間稼働・客室空調・共用部・厨房・ランドリーの複合負荷と、稼働率の季節変動、固定プランと市場連動の向き不向きを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ホテル 電気料金 見直し",
    "宿泊施設 電気代 削減",
    "ホテル 電力契約 見直し",
    "ホテル 電力コスト 対策",
    "宿泊業 電気代 空調",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/hotel-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/hotel-electricity-cost-review",
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
    label: "客室空調・換気",
    detail:
      "客室は全室分の空調設備が24時間稼働できる状態を維持する必要があります。稼働率100%の繁忙期は全室空調が稼働しますが、閑散期は稼働室数が減少します。客室ごとのインバーター制御・不在時自動オフ機能を活用することで、空室時の無駄な空調稼働を削減できます。",
  },
  {
    label: "共用部・ロビー・廊下",
    detail:
      "ロビー・廊下・エレベーター・駐車場・外灯など共用部の照明・空調は24時間稼働が基本。高天井のロビーは空調効率が低くなりやすく、電力消費が大きくなる傾向があります。LED化・自動調光で削減余地がある場合があります。",
  },
  {
    label: "レストラン・宴会場・厨房",
    detail:
      "宿泊特化型ホテルでも朝食サービスの厨房が稼働。フルサービスホテルでは昼・夜・宴会の厨房稼働が電力消費に大きく寄与します。宴会シーズン（11〜12月）には大空調・照明・音響設備の同時稼働でデマンドピークが発生しやすくなります。",
  },
  {
    label: "ランドリー・クリーニング",
    detail:
      "シーツ・タオル類の洗濯・乾燥設備は、業務用の大型機器が稼働します。稼働時間帯の管理（オフピーク時間への移行）でデマンド抑制に貢献できる場合があります。",
  },
  {
    label: "給湯・温水設備",
    detail:
      "客室・大浴場・厨房向けの給湯設備は、電気式ヒートポンプ給湯器の導入が進むホテルでは電力消費の大きな部分を占めます。深夜電力を活用したタンク貯湯型は、昼間のデマンドを抑制する効果があります。",
  },
];

const reviewPoints = [
  {
    heading: "稼働率の季節変動と電力使用量の関係",
    content:
      "ホテルの電気使用量は、客室稼働率と強い相関があります。繁忙期（夏・年末年始・ゴールデンウィーク）は稼働率が上がり、空調・照明・給湯の使用量が増加します。閑散期は稼働率低下に伴い使用量が減少しますが、共用部・厨房・セキュリティ設備のベースロードは変わりません。過去12か月の月次データから稼働率と使用量の相関を把握しておくと、見積条件の設定に役立ちます。",
  },
  {
    heading: "デマンドピークの管理",
    content:
      "宴会場と客室空調・厨房が同時にフル稼働する繁忙期のピーク日に、年間で最も高いデマンド値が発生することがあります。このタイミングが翌年以降の基本料金単価に影響するため、デマンドコントローラーによるピーク制御の効果は大きくなります。",
  },
  {
    heading: "複数拠点チェーンホテルの一括管理",
    content:
      "複数のホテルを運営するチェーンでは、各物件の電力契約を本部でまとめて管理し、一括での見積依頼・切替を行うことでスケールメリットが生まれる場合があります。ただし、各ホテルの立地・規模・需要パターンが異なるため、プランの個別対応も必要です。",
  },
  {
    heading: "改修・建替えのタイミングとの連動",
    content:
      "大規模改修・増改築を予定している場合は、電力設備の更新と同時に契約電力・メーター設備の見直しを検討するのが効率的です。改修後は負荷パターンが変わるため、旧来の契約電力設定が過大になることもあります。",
  },
];

export default function HotelElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">ホテルの見直しポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          ホテルの電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          ホテルは客室・共用部・厨房・ランドリーなど多様な設備が24時間稼働し、電気料金が事業コストの大きな部分を占める業種です。稼働率の季節変動が電力使用量に直結するため、年間を通じた使用パターンの把握と、コスト変動への対応が重要になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、ホテル特有の負荷特性を踏まえた契約見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>ホテルの電力消費を構成する主要設備と特性</li>
            <li>客室稼働率と電力使用量の関係</li>
            <li>デマンドピーク管理の重要性</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>設備対策（デマンド制御・LED・ヒートポンプ）との組み合わせ</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            ホテルの電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ホテルの電気料金は、以下の構造的な要因から上がりやすくなっています。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>24時間稼働のベースロードが大きく、電力使用量の総量が多い</li>
            <li>夏の猛暑・冬の厳冬で空調負荷が増し、繁忙期と重なるリスクがある</li>
            <li>宴会・イベント時の大型空調・照明・厨房の同時稼働でデマンドが急増する</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整</Link>・<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>・<Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金</Link>の増加で上乗せ費用が膨らむ</li>
            <li>インバウンド需要増加などによる稼働率上昇が使用量増加につながる</li>
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
            ホテルは電力使用量が多く、プラン選択の影響額も大きくなりやすい業種です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすいケース</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>使用量が多く、市場価格変動の絶対額が大きくなる大型ホテル</li>
                <li>繁忙期と夏の需給逼迫リスクが重なる観光地のホテル</li>
                <li>客室単価・宿泊プランに電気代を織り込めるよう、コストを固定したい場合</li>
                <li>財務管理の観点で電気代の月次変動を最小化したい場合</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討できるケース</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>閑散期に使用量が大幅に低下し、繁忙期との差が大きいホテル</li>
                <li>市場価格が低い時期の恩恵を受けられる体制がある</li>
                <li>上振れシナリオをシミュレーションして許容範囲内と確認できた</li>
                <li>電力コスト管理を担当できる担当者・体制が整っている</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            プラン選択の詳細な考え方は{" "}
            <Link
              href="/fixed-vs-market-linked-guide"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              固定プランと市場連動プランの判断ガイド
            </Link>{" "}
            も参照してください。
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
              <p className="text-sm font-semibold text-slate-900">客室の空調・照明自動制御</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                客室のキーカード連動型のエアコン・照明自動オフ機能。チェックアウト後の空室状態での無駄な稼働を削減する。後付けシステムも存在する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">ヒートポンプ給湯器</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                深夜電力を活用した貯湯型ヒートポンプ給湯器は、昼間のデマンドを抑制しながら給湯コストを削減できる。大規模ホテルでは業務用ヒートポンプシステムが有効。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">LED化・スマート照明</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                共用廊下・駐車場・外灯のLED化と人感センサー制御。客室照明の調光対応で雰囲気を保ちながら省エネを実現する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンドコントローラー</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                宴会・大型イベント時のデマンドピークを制御。空調設定の自動調整や一部設備の自動絞り込みで、<Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>を下げる可能性がある。
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
            <li>繁忙期（夏・年末年始）の電力コスト変動リスクを把握する</li>
            <li>固定プランと市場連動プランの年間コスト差を試算する</li>
            <li>燃料費高騰シナリオでの影響を確認し、宿泊単価への転嫁判断に役立てる</li>
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
              href: "/restaurant-chain-electricity-cost-review",
              title: "飲食店チェーンの電気料金見直しポイント",
              description: "調理・空調負荷と多拠点管理の考え方。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "使用量が大きい業種に固定プランが向きやすい理由。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "デマンド料金（基本料金）の仕組み",
              description: "デマンドピーク管理と基本料金削減の基礎知識。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し準備の基本項目を一覧で確認。",
            },
          ]}
        />

        <ContentCta
          heading="ホテルの条件でリスクを確認する"
          description="24時間稼働・客室管理・宴会需要の複合負荷を踏まえた契約条件をシミュレーターに入力して、年間リスク額や固定プランとの比較を確認できます。"
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
