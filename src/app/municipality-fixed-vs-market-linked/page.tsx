import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
const pageTitle =
  "自治体施設は固定と市場連動のどちらが向くか｜年度予算制と説明責任から考える";
const pageDescription =
  "自治体・公共施設が電力契約を検討する際の判断軸を整理します。年度予算制の制約、議会・住民への説明責任、入札・調達ルール、リスク説明の難しさなど、公共機関特有の観点から固定プランと市場連動プランを比較します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自治体 電力契約 固定 市場連動",
    "公共施設 電気料金 プラン選択",
    "自治体 電気代 年度予算",
    "市区町村 電力調達 入札",
    "公共機関 電気料金 リスク",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/municipality-fixed-vs-market-linked",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/municipality-fixed-vs-market-linked",
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

const publicConstraints = [
  {
    constraint: "年度予算制による硬直性",
    description:
      "自治体は年度（4月〜3月）ごとに議会承認を得た予算の範囲内で執行します。電気料金の市場連動プランで高騰が発生した場合、予算を超過する恐れがあります。予算超過への対応には補正予算の編成が必要で、これは議会審議・承認のプロセスを経るため、緊急対応に時間がかかります。",
    impact: "高い",
  },
  {
    constraint: "議会・住民への説明責任",
    description:
      "電気料金が高騰し、当初予算を大幅に上回る支出が生じた場合、議会での説明を求められることがあります。「なぜ市場連動プランを選んだのか」「リスク管理はどうしていたのか」という問いに対して、担当者が明確に答えられる状態を保つ必要があります。説明が難しくなる選択は、行政の意思決定として不適切と判断される可能性があります。",
    impact: "高い",
  },
  {
    constraint: "調達ルール・入札手続きとの整合性",
    description:
      "多くの自治体では、電力調達に競争入札や見積もり合わせを採用しています。市場連動プランは、入札時点での価格が確定していないため、他の入札業者との比較が難しくなる場合があります。また、落札後の支払い額が変動するため、契約の適法性・透明性の観点から問題になるケースがあります。",
    impact: "高い",
  },
  {
    constraint: "担当者の異動と継続性のリスク",
    description:
      "自治体では担当者が定期的に異動するため、市場連動プランを選んだ経緯・リスク管理の方針が引き継がれないリスクがあります。前任者が判断した市場連動プランを後任者が管理することになった場合、価格高騰時の対応判断が遅れる可能性があります。",
    impact: "中程度",
  },
  {
    constraint: "国・都道府県の省エネ・グリーン調達指針との整合",
    description:
      "一部の自治体では、電力調達において再エネ比率や省エネ目標との整合を求める方針が設けられています。市場連動プランの中には再エネ比率が不透明なものもあるため、自治体の調達方針と整合するかを確認することが必要です。",
    impact: "施設・自治体によって異なる",
  },
];

const facilityTypes = [
  {
    facility: "市役所・区役所（本庁舎）",
    characteristics: "昼間稼働が中心。市民窓口のある施設。",
    budgetSensitivity: "非常に高い（議会承認予算）",
    recommendation: "固定プランを強く推奨",
  },
  {
    facility: "学校（小中高）",
    characteristics: "夏季は長期休校。年間の使用量変動が大きい。",
    budgetSensitivity: "高い",
    recommendation: "固定プランを優先",
  },
  {
    facility: "体育館・スポーツ施設",
    characteristics: "夜間・週末の稼働が多い。空調設備の大小で変わる。",
    budgetSensitivity: "高い",
    recommendation: "固定プランを優先",
  },
  {
    facility: "図書館・文化施設",
    characteristics: "昼間稼働。利用者への快適な環境維持が必要。",
    budgetSensitivity: "高い",
    recommendation: "固定プランを優先",
  },
  {
    facility: "公営住宅（共用部）",
    characteristics: "使用量が比較的小さい。共用部の照明・エレベーター等。",
    budgetSensitivity: "中程度",
    recommendation: "固定プランを基本",
  },
  {
    facility: "水道・下水処理場",
    characteristics: "24時間稼働。使用量が大きく安定的。インフラ設備。",
    budgetSensitivity: "高い（コスト変動が水道料金に影響）",
    recommendation: "固定プランを強く推奨",
  },
];

export default function MunicipalityFixedVsMarketLinkedPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">自治体施設の選び方</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          自治体施設は固定と市場連動のどちらが向くか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          自治体・公共機関の電力契約は、民間企業とは異なる制約と要件のもとで判断する必要があります。年度予算制、議会・住民への説明責任、入札・調達ルールなど、公共機関特有の観点が電力プランの選択に大きく影響します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、自治体・公共施設が電力契約を検討する際に特に重要な判断軸を整理します。一般論としては固定プランとの親和性が高い理由が多くありますが、個別の施設特性や調達ルールによって判断は変わります。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>自治体特有の5つの制約と電力プラン選択への影響</li>
            <li>施設タイプ別（市役所・学校・体育館・水処理場など）の考え方</li>
            <li>市場連動プランの説明責任を果たすための条件</li>
            <li>調達ルールと市場連動プランの整合性の確認方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自治体の電力調達が持つ固有の特性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自治体の電力調達は、民間企業とは異なる複数の制約のもとで行われます。電力プランの選択は「どちらがコスト的に有利か」だけでなく、「調達ルールに適合しているか」「説明責任を果たせるか」という観点から評価される必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2022年の電力価格高騰では、市場連動プランを採用していた複数の自治体が電気料金の急騰により補正予算を組まざるを得ない状況になりました。この経験は、公共機関における市場連動プランのリスクを改めて示すものとなりました。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自治体特有の5つの制約と影響
          </h2>
          <div className="mt-4 space-y-4">
            {publicConstraints.map((item) => (
              <div key={item.constraint} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-base font-semibold text-slate-900">{item.constraint}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    item.impact === "高い"
                      ? "bg-red-100 text-red-700"
                      : item.impact === "中程度"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-slate-100 text-slate-700"
                  }`}>
                    影響：{item.impact}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            施設タイプ別の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自治体が管理する施設はその種類によって電力使用特性が異なります。以下は代表的な施設タイプ別の整理です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">施設タイプ</th>
                  <th className="p-3 text-left font-semibold text-slate-900">特性</th>
                  <th className="p-3 text-left font-semibold text-slate-900">予算への感度</th>
                  <th className="p-3 text-left font-semibold text-slate-900">方向性の目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {facilityTypes.map((row) => (
                  <tr key={row.facility}>
                    <td className="p-3 font-medium text-slate-800">{row.facility}</td>
                    <td className="p-3 text-slate-700">{row.characteristics}</td>
                    <td className="p-3 text-slate-700">{row.budgetSensitivity}</td>
                    <td className="p-3 font-medium text-slate-800">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 施設の特性・規模・調達方針によって判断は異なります。上記は一般的傾向の整理です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自治体が市場連動プランを選ぶ場合に必要な準備
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自治体が市場連動プランを採用する場合、以下のような準備と体制整備が必要です。これらが整っていない状態での採用は、高騰時に行政対応が機能しなくなるリスクがあります。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">調達ルールとの整合確認：</span>
              市場連動プランが現行の入札・調達規則のもとで適法に採用できるか、法務・財務部門と事前確認する。
            </li>
            <li>
              <span className="font-semibold text-slate-900">高騰シナリオの試算と予備費の設定：</span>
              市場価格が高騰した場合のコスト増額を事前に試算し、予備費を予算に組み込む。補正予算の手続きを事前に確認しておく。
            </li>
            <li>
              <span className="font-semibold text-slate-900">議会・首長への事前説明：</span>
              採用前に、市場連動プランのリスクと期待コストを資料化し、意思決定者に説明・承認を得る。
            </li>
            <li>
              <span className="font-semibold text-slate-900">モニタリングと切り替え基準の明確化：</span>
              JEPX価格を定期的にモニタリングし、「月額コストが○○円を超えたら固定に切り替える」という基準をあらかじめ設定しておく。
            </li>
            <li>
              <span className="font-semibold text-slate-900">担当者異動時の引き継ぎ資料の整備：</span>
              採用の経緯・リスク管理方針・モニタリング体制を文書化し、担当者交代時に確実に引き継がれるようにする。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            2022年の電力価格高騰が公共機関に与えた教訓
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年初頭から中頃にかけて、JEPX価格は高騰局面を迎え、市場連動プランを採用していた施設では電気料金が急増しました。この時期、複数の自治体・公共機関が「想定外の電気代増加」による予算超過を公表し、一部では補正予算の編成を余儀なくされました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この経験から得られた教訓として、自治体の電力調達担当者からは「価格変動のリスクを受け入れるには、それに対応できる予算・体制・説明ロジックが必要」という点が指摘されています。固定プランであれば発生しなかった補正予算の手続き、議会での説明コスト、担当者への批判といった「見えないコスト」も市場連動プランのリスクに含まれます。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年以降の電力価格の動きについては{" "}
            <Link
              href="/electricity-price-history-2022"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金の推移と高止まり
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まとめ：自治体の電力プラン選択の判断ポイント
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>年度予算制のもとでは、電気代の変動が予算超過・補正予算を引き起こすリスクがあり、固定プランの安定性が重要</li>
            <li>議会・住民への説明責任の観点から、変動リスクを引き受けた根拠を説明できない選択は避けるべき</li>
            <li>入札・調達ルールとの整合性を、採用前に法務・財務部門と確認することが必須</li>
            <li>市場連動プランを採用する場合は、高騰シナリオの試算・予備費確保・モニタリング体制・引き継ぎ資料の整備が前提条件</li>
            <li>2022年の高騰事例は、公共機関における市場連動プランのリスクを具体的に示した事例として参照価値がある</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "自治体以外の固定プランとの相性が高い法人の特徴。",
            },
            {
              href: "/budget-focused-plan-selection",
              title: "予算管理を重視する法人はどちらを選ぶべきか",
              description: "予算変動の許容度から電力プランを選ぶ考え方。",
            },
            {
              href: "/market-linked-risk-internal-explanation",
              title: "市場連動プランのリスクを社内説明するときのポイント",
              description: "議会・首長・住民への説明に応用できる考え方。",
            },
            {
              href: "/commercial-facility-fixed-vs-market-linked",
              title: "商業施設は固定と市場連動のどちらが向くか",
              description: "公共施設と類似した昼間稼働施設の判断軸。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "固定プランの仕組みと特徴を理解する。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "公共施設の電力契約見直し前に確認すべき項目。",
            },
          ]}
        />

        <ContentCta
          heading="施設の電力コストをシミュレーターで試算する"
          description="施設の使用量・契約電力を入力して、固定プランと市場連動プランの年間コスト差を確認できます。予算策定の参考にご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
    </main>
  );
}
