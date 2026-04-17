import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "LNG高騰で法人の電気料金はどう上がるか｜価格波及の仕組みと備え方";
const pageDescription =
  "LNG（液化天然ガス）価格の高騰が法人の電気料金にどう波及するかを解説。燃料費調整額への反映メカニズム、影響を受けやすい企業の特徴、シミュレーターを活用した備え方まで詳しく説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "LNG高騰 電気料金",
    "液化天然ガス 法人 電気料金",
    "燃料費調整額 LNG",
    "電気料金上昇 リスク 法人",
    "LNG価格 電力コスト",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/lng-price-surge-electricity-cost-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/lng-price-surge-electricity-cost-impact",
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

const impactSteps = [
  {
    step: "① 国際LNG価格の上昇",
    content:
      "LNGは原油価格や需給バランス、地政学的リスクによって国際市場で価格が変動します。欧州での需要急増、産ガス国の生産トラブル、アジア全体での冬季需要集中などが価格を押し上げる代表的な要因です。",
  },
  {
    step: "② 電力会社の調達コスト上昇",
    content:
      "日本の電力会社はLNGを主要燃料とするガス火力発電を多数保有しています。国際LNG価格が上昇すると、電力会社の燃料調達コストが直接的に増加します。",
  },
  {
    step: "③ 燃料費調整額への反映",
    content:
      "日本の電力料金制度では、燃料価格の変動を燃料費調整額として翌々月から請求に反映させる仕組みがあります。LNG価格が上昇してから数カ月後に、法人の電気料金請求に上乗せされます。",
  },
  {
    step: "④ 法人の月次コスト増加",
    content:
      "使用量の大きい工場や商業施設では、燃料費調整額の1円/kWh上昇が月額数十万〜数百万円規模のコスト増に直結することがあります。",
  },
];

const vulnerableCompanies = [
  {
    type: "電力多消費型製造業",
    reason: "使用量が大きく、燃調額の変動が金額ベースで非常に大きくなる。",
  },
  {
    type: "冷蔵・冷凍倉庫",
    reason: "24時間365日稼働で電力消費が多く、コスト圧縮余地が少ない。",
  },
  {
    type: "市場連動プラン契約企業",
    reason: "JEPX価格にLNG高騰が即座に反映され、固定プランより影響が大きい。",
  },
  {
    type: "食品スーパー・飲食チェーン",
    reason: "利益率が低く、コスト転嫁が難しいため営業利益への影響が大きい。",
  },
  {
    type: "病院・介護施設",
    reason: "公定価格で運営するため、価格転嫁が制度上できない。",
  },
];

export default function LngPriceSurgeElectricityCostImpactPage() {
  return (
    <>
      <ArticleJsonLd
        headline="LNG高騰で法人の電気料金はどう上がるか｜価格波及の仕組みと備え方"
        description="LNG（液化天然ガス）価格の高騰が法人の電気料金にどう波及するかを解説。燃料費調整額への反映メカニズム、影響を受けやすい企業の特徴、シミュレーターを活用した備え方まで詳しく説明します。"
        url="https://simulator.eic-jp.org/lng-price-surge-electricity-cost-impact"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "LNG高騰で法人の電気料金はどう上がるか" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">LNG高騰の影響</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          LNG高騰で法人の電気料金はどう上がるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          LNG（液化天然ガス）は、日本の電力供給においてガス火力発電の主要燃料として重要な役割を担っています。国際市場でLNG価格が高騰すると、その影響は数カ月後に法人の電気料金請求として現れます。このシナリオは2021〜2022年に現実のものとなり、多くの法人が想定外のコスト増に直面しました。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、LNG価格上昇がどのような経路で法人の電気料金に波及するか、どのような企業が特に影響を受けやすいか、そしてどのように備えるかを整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>LNG価格が電気料金に波及する仕組み（燃料費調整額との関係）</li>
            <li>LNG高騰シナリオが法人に与える具体的な影響</li>
            <li>影響を受けやすい業種・企業タイプ</li>
            <li>備え方とシミュレーターを活用した確認ポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            LNG高騰が起きるシナリオとは
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNG価格が急騰する背景には複数のシナリオが考えられます。最も典型的なのは、欧州など他地域での需要急増により、アジア向けLNGの供給が奪われるケースです。2021〜2022年にかけての欧州エネルギー危機では、ロシア産天然ガスの供給減少を補うため欧州各国がLNG調達を急増させ、アジア市場との争奪戦が生じました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            その他にも、主要産ガス国（カタール、オーストラリア、米国など）での生産トラブル、アジアの冬季需要集中、地政学的リスクによる供給経路の不安定化なども価格急騰の引き金となり得ます。これらのリスクは単独でも複合的にも発生し得るため、「LNG高騰は一時的な異常事態」ではなく、定期的に到来し得るリスクシナリオとして認識することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            LNG価格から電気料金への波及経路
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNG価格の上昇が法人の電気料金に反映されるまでの流れを段階的に示します。
          </p>
          <div className="mt-4 space-y-3">
            {impactSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{item.step}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.content}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の詳しい仕組みは{" "}
            <Link
              href="/fuel-cost-adjustment"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              燃料費調整額（燃調費）とは
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人への具体的な影響
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNG高騰が波及する際、法人の電気料金はどの程度変動するのでしょうか。2021〜2022年の実例では、燃料費調整額が1kWhあたり数円単位で上昇し、年間通じて数十円/kWhの上乗せとなったケースも見られました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            仮に月間電力使用量が50,000kWhの法人で、燃調額が3円/kWh上昇したとすると、月額で15万円、年間では180万円のコスト増となります。100,000kWhの法人では年間360万円規模の増加です。これは経常利益の数%に相当するケースも珍しくなく、経営上の重大なリスクとなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            また、市場連動プランを契約している場合は、LNG高騰がJEPX（日本卸電力取引所）のスポット価格上昇を通じてさらに即時かつ大きく反映されることがあります。固定プランであっても燃料費調整額の上限設定がないプランでは、同様にコスト増が発生します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            影響を受けやすい企業の特徴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下のような企業はLNG高騰シナリオで特に大きな影響を受けやすい傾向があります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">企業・業種タイプ</th>
                  <th className="p-3 text-left font-semibold text-slate-900">影響が大きい理由</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {vulnerableCompanies.map((row) => (
                  <tr key={row.type}>
                    <td className="p-3 font-medium text-slate-700">{row.type}</td>
                    <td className="p-3 text-slate-700">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            備え方：LNG高騰リスクへの対応策
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNG高騰リスクに対して法人が取れる主な対策を整理します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">燃料費調整額に上限があるプランを選ぶ：</span>
              上限設定のあるプランでは、LNGが高騰しても請求額の上振れが一定額でキャップされます。ただし上限を超えた分は電力会社が吸収するため、供給継続リスクにも注意が必要です。
            </li>
            <li>
              <span className="font-semibold text-slate-900">固定プランで一定期間リスクをヘッジする：</span>
              電力量料金を固定することで、LNG高騰の即時影響を受けにくくなります。ただし燃料費調整額の扱いはプランごとに異なるため確認が必要です。
            </li>
            <li>
              <span className="font-semibold text-slate-900">コスト増を予算に織り込む：</span>
              LNG高騰シナリオを仮定した電気料金の上振れ額を年度予算の想定幅として組み込むことで、突発的な影響を緩和できます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">省エネ・ピーク対策で使用量を削減する：</span>
              使用量そのものを減らすことで、単価上昇の影響額を小さくできます。省エネ投資の優先順位を検討する際の参考にもなります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">シミュレーターで影響額を定量的に確認する：</span>
              燃調額が「+2円/kWh」「+5円/kWh」高騰した場合の年間コスト増を事前に試算しておくと、対策の優先度が明確になります。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターを活用した確認ポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNG高騰リスクをシミュレーターで確認する際は、以下の手順が効果的です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現在の月間使用量と契約電力を入力する</li>
            <li>燃料費調整額が「現在値」「+2円」「+5円」「+10円」の場合を比較する</li>
            <li>年間コスト増加額を確認し、許容できる範囲かどうかを判断する</li>
            <li>固定プランと市場連動プランで高騰時のコスト差を比較する</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNG高騰は過去に複数回発生しており、今後も発生し得るリスクシナリオです。事前の試算が、契約見直しや予算策定の判断材料になります。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="lng-price-surge-electricity-cost-impact" terms={["燃料費調整額", "市場価格調整額", "JEPX", "再エネ賦課金", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "LNG価格が電気料金に反映される仕組みを詳しく解説。",
            },
            {
              href: "/jepx-spike-electricity-cost-impact",
              title: "JEPX急騰で法人の電気料金はどう上がるか",
              description: "市場連動プランへのJEPX価格上昇の影響。",
            },
            {
              href: "/fuel-adjustment-surge-impact",
              title: "燃料費調整額上昇で法人の電気料金はどう上がるか",
              description: "燃調額上昇が請求に与える影響と確認ポイント。",
            },
            {
              href: "/supply-demand-tightness-impact",
              title: "需給逼迫で法人の電気料金はどう変わるか",
              description: "需給が逼迫する局面での市場価格高騰と法人への影響。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "LNG高騰リスクを避けたい法人に向いているプランの考え方。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "リスクシナリオを踏まえた契約見直しの確認項目。",
            },
          ]}
        />

        <ContentCta
          heading="LNG高騰シナリオを自社の数字で確認する"
          description="現在の使用量と契約条件を入力して、LNG価格が高騰した場合の年間コスト増加額をシミュレーターで試算できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
