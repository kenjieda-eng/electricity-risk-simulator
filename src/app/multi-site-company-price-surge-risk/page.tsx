import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "多拠点企業が電気料金高騰に直面したときのリスク｜拠点数別の累積影響と管理ポイント";
const pageDescription =
  "複数の事業所・店舗・工場を持つ多拠点企業が電気料金高騰に直面した場合のリスクを解説。拠点数別の年間累積コスト、多拠点特有の5つのリスク要因、見直しチェックリストを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "多拠点 電気料金 高騰 リスク",
    "複数拠点 電力契約 管理",
    "法人 多拠点 電気代",
    "電力 一括切替 多拠点",
    "多拠点企業 電力コスト",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/multi-site-company-price-surge-risk",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/multi-site-company-price-surge-risk",
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

const managementChallenges = [
  {
    challenge: "拠点ごとに契約が分散している",
    detail:
      "電力会社、プラン、契約更新時期がバラバラになっているケースが多く、全社でのコスト把握が困難になります。一部の拠点が割高な契約のまま放置されていることもあります。",
  },
  {
    challenge: "担当者が各拠点で異なる",
    detail:
      "電気料金の担当が本社ではなく各拠点任せになっていると、高騰時に全社的なコスト増の実態把握が遅れます。",
  },
  {
    challenge: "高騰時の累積コストを事前に把握しにくい",
    detail:
      "拠点数が多いほど、電気料金の高騰が全社コストに与える累積影響を事前に試算しにくくなります。個別の影響は小さくても、合計すると大きくなります。",
  },
  {
    challenge: "低圧・高圧が混在している",
    detail:
      "小規模店舗（低圧）と大規模施設（高圧）が混在する場合、適用される料金メニューや変動要因が異なり、一括管理が複雑になります。",
  },
];

const cumulativeImpactRows = [
  {
    sites: "3拠点",
    perSite: "月5万kWh×3",
    monthlyIncrease: "+75万円/月",
    annualIncrease: "+900万円",
  },
  {
    sites: "10拠点",
    perSite: "月3万kWh×10",
    monthlyIncrease: "+150万円/月",
    annualIncrease: "+1,800万円",
  },
  {
    sites: "30拠点",
    perSite: "月2万kWh×30",
    monthlyIncrease: "+300万円/月",
    annualIncrease: "+3,600万円",
  },
  {
    sites: "100拠点",
    perSite: "月1万kWh×100",
    monthlyIncrease: "+500万円/月",
    annualIncrease: "+6,000万円",
    isLarge: true,
  },
];

const multiSiteRiskFactors = [
  {
    risk: "契約条件のばらつき",
    detail: "拠点ごとに契約内容が異なる",
    difference: "管理コスト増・比較困難",
    measure: "一括管理台帳の整備",
  },
  {
    risk: "エリアまたぎ",
    detail: "電力会社エリアが異なる",
    difference: "燃調費・託送料金に差",
    measure: "エリア別の単価把握",
  },
  {
    risk: "契約更新時期のずれ",
    detail: "更新月がバラバラ",
    difference: "一括交渉が困難",
    measure: "更新時期の集約",
  },
  {
    risk: "担当者の分散",
    detail: "拠点ごとに管理者が異なる",
    difference: "情報集約の遅れ",
    measure: "本部一元管理",
  },
  {
    risk: "規模メリットの未活用",
    detail: "個別交渉のまま",
    difference: "ボリュームディスカウント不可",
    measure: "一括見積・交渉",
  },
];

const reviewChecklist = [
  "全拠点の契約電力会社・プラン・更新時期を一覧化した管理台帳を作成する",
  "電力エリアごとに燃調費・託送料金の差を確認し、エリアまたぎの拠点を把握する",
  "月間使用量の多い上位拠点を抽出し、優先的に見直し・再見積の対象にする",
  "契約更新時期を本社主導で把握し、更新6ヶ月前に一括見積依頼できる体制を整える",
  "全拠点の合計使用量に+5円/kWhシナリオを当てはめ、年間累積影響を経営層に報告する",
  "低圧と高圧が混在する場合は区分ごとに試算し、一括切替と個別対応のどちらが最適かを検討する",
];

export default function MultiSiteCompanyPriceSurgeRiskPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">多拠点企業のリスク</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          多拠点企業が電気料金高騰に直面したときのリスク｜拠点数別の累積影響と管理ポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          複数の店舗・工場・事業所を持つ多拠点企業では、電気料金が高騰した場合の影響が拠点数分だけ累積します。1拠点あたりの影響は限定的でも、数十〜数百拠点では年間数百万〜数千万円規模のコスト増になることがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          さらに、多拠点企業では各拠点の契約が分散していることが多く、一括管理や一括切替が進んでいないケースも見られます。このページでは、多拠点企業固有のリスク構造と、効率的な管理・対策の方向性を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>多拠点企業で高騰の影響が累積する仕組み</li>
            <li>拠点管理上の課題</li>
            <li>一括切替・一括管理の考え方</li>
            <li>シミュレーターを活用した全社コストの確認</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        {/* Table 1: 拠点数別の料金高騰累積影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">拠点数別の料金高騰累積影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価が+5円/kWh上昇した場合の、拠点数別の月額増加・年間増加を試算します。拠点が増えるほど累積影響は急拡大します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">拠点数</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">1拠点あたり月額</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">単価+5円/kWh時の月額増（全拠点）</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">年間増加額</th>
                </tr>
              </thead>
              <tbody>
                {cumulativeImpactRows.map((row) => (
                  <tr
                    key={row.sites}
                    className={`border-b border-slate-100 ${row.isLarge ? "bg-red-50 font-semibold" : "hover:bg-slate-50"}`}
                  >
                    <td className="px-4 py-3 text-slate-800">{row.sites}</td>
                    <td className="px-4 py-3 text-slate-700">{row.perSite}</td>
                    <td className={`px-4 py-3 ${row.isLarge ? "text-red-700 font-bold" : "text-slate-700"}`}>{row.monthlyIncrease}</td>
                    <td className={`px-4 py-3 ${row.isLarge ? "text-red-700 font-bold" : "text-slate-700"}`}>{row.annualIncrease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 単価+5円/kWhの場合の試算。基本料金・消費税は含みません。実際の影響は契約内容・使用量・エリアにより異なります。
          </p>
        </section>

        {/* Table 2: 多拠点特有のリスク要因 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">多拠点特有のリスク要因</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単拠点と比較したときに多拠点企業が直面しやすいリスク要因と、その対策を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">リスク要因</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">内容</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">単拠点との違い</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">対策</th>
                </tr>
              </thead>
              <tbody>
                {multiSiteRiskFactors.map((row, index) => (
                  <tr
                    key={row.risk}
                    className={`border-b border-slate-100 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-sky-50`}
                  >
                    <td className="px-4 py-3 font-medium text-slate-800">{row.risk}</td>
                    <td className="px-4 py-3 text-slate-700">{row.detail}</td>
                    <td className="px-4 py-3 text-slate-700">{row.difference}</td>
                    <td className="px-4 py-3 text-sky-700">{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Checklist */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">多拠点の見直しチェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            多拠点の電気料金管理を本社主導で進めるための6ステップを確認します。
          </p>
          <ul className="mt-4 space-y-3">
            {reviewChecklist.map((item, index) => (
              <li key={index} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-slate-400 text-xs font-bold text-slate-500">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            多拠点で影響が累積するメカニズム
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の高騰は、使用している拠点すべてに同時に影響します。1拠点あたり月額2万円の増加でも、50拠点あれば月額100万円、年間1,200万円の累積影響になります。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">累積影響の試算例</p>
            <div className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
              <p>店舗チェーン（50店舗）× 月額 +2万円/店 ＝ 月額 +100万円、年間 +1,200万円</p>
              <p>物流センター（10拠点）× 月額 +20万円/拠点 ＝ 月額 +200万円、年間 +2,400万円</p>
              <p>オフィス（20拠点）× 月額 +5万円/拠点 ＝ 月額 +100万円、年間 +1,200万円</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特に利益率の低い業種（スーパー、飲食チェーン、物流）では、この累積影響が全社の営業利益を大きく圧迫します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            多拠点管理に特有の課題
          </h2>
          <div className="mt-3 space-y-3">
            {managementChallenges.map((item) => (
              <div
                key={item.challenge}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{item.challenge}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            一括切替・一括管理の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            多拠点企業では、電力会社への交渉力を高めるためにも、拠点をまとめて一括で切り替える「一括切替」の検討が有効です。以下に一括管理のメリットと注意点を整理します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">交渉力の向上：</span>
              複数拠点を束ねて入札することで、電力会社への価格交渉力が高まります。個別契約より有利な単価を得られる可能性があります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">管理負荷の軽減：</span>
              一社の電力会社にまとめることで、請求処理・更新管理の工数を削減できます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">全社コストの可視化：</span>
              一括管理することで全社の電力コストをリアルタイムに把握しやすくなります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">注意点：</span>
              一括切替が最適かどうかは拠点ごとの使用量・電圧区分・地域によって異なります。低圧と高圧が混在する場合は個別検討が必要です。
            </li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="multi-site-company-price-surge-risk" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/retail-chain-price-surge-risk",
              title: "店舗チェーンが料金高騰に直面したときのリスク",
              description: "多拠点小売チェーンへの累積影響の具体例。",
            },
            {
              href: "/low-margin-company-price-surge-risk",
              title: "利益率の低い企業が電気料金高騰に直面したときのリスク",
              description: "多拠点かつ低利益率の場合の収益インパクト。",
            },
            {
              href: "/lng-price-surge-electricity-cost-impact",
              title: "LNG高騰で法人の電気料金はどう上がるか",
              description: "全拠点に影響する高騰シナリオの仕組み。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "多拠点管理の観点を含む契約確認項目。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "多拠点の見積比較で確認すべきポイント。",
            },
            {
              href: "/how-to-explain-electricity-cost-review-internally",
              title: "電気料金見直しを社内で説明するときのポイント",
              description: "多拠点の一括切替を稟議・経営層に説明する方法。",
            },
          ]}
        />

        <ContentCta
          heading="多拠点の電気料金コストをまとめて試算する"
          description="代表的な拠点の使用量をもとに、全拠点への高騰シナリオの累積影響をシミュレーターで確認できます。"
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
