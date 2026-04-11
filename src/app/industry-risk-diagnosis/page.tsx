import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "業種別リスク診断｜自社の業種から見た電気料金リスクと対策";
const pageDescription =
  "製造業・小売業・飲食業・医療・オフィスなど業種ごとの電気料金リスクの特徴と、優先すべき対策を整理。自社の業種特性から見た電力コスト管理のポイントをチェックします。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "業種別 電気料金 リスク",
    "製造業 電力コスト リスク",
    "小売業 電気代 リスク",
    "法人 業種別 電力コスト",
    "電気料金 業種 診断",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/industry-risk-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/industry-risk-diagnosis",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const industries = [
  {
    name: "製造業（工場・生産設備）",
    slug: "manufacturing",
    usageCharacteristics: "電力使用量が多く、24時間稼働や夜間操業があるケースが多い。設備の稼働状況によって使用量が大きく変動する。",
    riskLevel: "非常に高い",
    risks: [
      "燃料費調整額・市場価格調整額の変動が年間コストに与えるインパクトが大きい",
      "電力使用量が多いため、単価が少し上がっても年間総額への影響が大きい",
      "生産コストに占める電力コストの比率が高く、価格転嫁が難しい業種では収益直撃リスクがある",
      "設備の老朽化でデマンド値（最大需要電力）が高止まりしているケースがある",
    ],
    countermeasures: [
      "固定型プランで料金の予見性を確保することが基本戦略になりやすい",
      "契約電力（デマンド値）の最適化でコスト削減できる余地がある",
      "太陽光・蓄電池の自家消費導入で昼間ピークのコストを抑制できる",
      "電力使用量の可視化（スマートメーター活用）でピークシフトを検討する",
    ],
  },
  {
    name: "小売業・スーパーマーケット",
    slug: "retail",
    usageCharacteristics: "店舗の照明・空調・冷蔵冷凍設備が主な消費源。営業時間中の使用量が多く、季節変動（夏・冬）もある。",
    riskLevel: "高い",
    risks: [
      "冷凍冷蔵設備は電力依存度が高く、停電・供給不安への対応が重要",
      "食品小売では電力コストを販売価格に転嫁しにくく、原価圧迫リスクが大きい",
      "夏・冬の空調需要増加と燃料費調整額の上昇が重なるタイミングが最大リスク",
      "複数店舗の契約をバラバラに管理していると、最適化の機会を逃しやすい",
    ],
    countermeasures: [
      "複数店舗を一括で見直すことで、交渉力を高め有利な条件を引き出しやすい",
      "冷蔵冷凍設備のインバーター化・省エネ設備更新でデマンドピークを抑制する",
      "太陽光発電の自家消費（屋根置き）で昼間の買電コストを削減する",
      "LED照明・高効率空調への更新で基礎的な使用量を削減する",
    ],
  },
  {
    name: "飲食業・飲食チェーン",
    slug: "food-service",
    usageCharacteristics: "厨房設備・空調・照明が主な消費源。店舗規模は中小が多く、使用量は比較的小さいが数が多い。",
    riskLevel: "中〜高",
    risks: [
      "低圧契約が多く、高圧に比べて単価が高い傾向がある",
      "電気・ガスの両方が値上がりしているため、光熱費全体の上昇インパクトが大きい",
      "物価高の中で客単価調整が難しく、コスト転嫁に限界がある",
      "オーナー経営の多店舗展開では、契約管理が手薄になりがち",
    ],
    countermeasures: [
      "まず請求書を確認し、現状の変動費（調整額）の構成比を把握する",
      "低圧から高圧への切替が可能な規模（50kW以上）であれば検討価値がある",
      "省エネ補助金（中小企業向け）を活用した設備更新を検討する",
      "フランチャイズの場合は本部との情報共有で、一括調達の可能性を探る",
    ],
  },
  {
    name: "医療・福祉施設（病院・介護施設）",
    slug: "healthcare",
    usageCharacteristics: "24時間稼働で安定供給が最優先。電力は生命維持に直結するインフラ。",
    riskLevel: "高い（コスト＋安定性の両面）",
    risks: [
      "24時間稼働のため使用量が多く、単価変動の影響が年間を通じて大きい",
      "医療機器・生命維持装置への電力供給の安定性が最優先事項",
      "公的病院・福祉施設は予算制度により、電力コスト上昇を吸収できないケースがある",
      "新電力撤退リスクへの備えとして、供給安定性の高い電力会社を選ぶ必要性が高い",
    ],
    countermeasures: [
      "供給安定性・財務基盤が強固な電力会社を優先的に比較する",
      "非常用発電設備の整備状況を確認し、停電リスクへの備えを強化する",
      "固定型プランで予算の安定化を図ることが基本戦略になりやすい",
      "太陽光＋蓄電池の導入で自家発電比率を高め、供給安定性とコスト削減を両立する",
    ],
  },
  {
    name: "オフィス（事務所・本社機能）",
    slug: "office",
    usageCharacteristics: "空調・照明・OA機器が主な消費源。営業時間（9〜18時）集中型で夜間は少ない。テレワーク普及で使用パターンが変化している。",
    riskLevel: "中程度",
    risks: [
      "使用量はそれほど多くないが、燃料費調整額の上昇が続くと予算超過の原因になる",
      "賃貸ビルでは電力契約をビル管理会社が一括管理しており、個別最適化が難しい場合がある",
      "テレワーク普及で使用パターンが変化しており、現行の契約電力が実態に合っていない可能性がある",
    ],
    countermeasures: [
      "ビル管理会社に電力契約の条件を確認し、変更の余地があるか照会する",
      "現在の契約電力が実際のデマンド実績に対して過大でないか確認する",
      "LED照明・高効率空調への更新で基礎的な使用量を削減する",
      "省エネ診断を受け、費用対効果の高い改善策を特定する",
    ],
  },
  {
    name: "宿泊業（ホテル・旅館）",
    slug: "hotel",
    usageCharacteristics: "客室・レストラン・温水・空調・照明など施設全体で24時間電力を使用。繁忙期と閑散期で使用量が大きく変動。",
    riskLevel: "高い",
    risks: [
      "繁忙期（夏・冬・連休）は使用量増加と燃料費調整額上昇が重なりやすい",
      "温水・給湯（ガス・電気）と電力両方のコスト上昇が同時に発生する",
      "旅行需要の回復局面で稼働率が上がると、電力コストも比例して上昇する",
      "温泉施設・プール付き施設は電力使用量が特に多く、変動コストの影響が大きい",
    ],
    countermeasures: [
      "繁忙期・閑散期の使用量変動に対応した時間帯別料金プランを検討する",
      "太陽光発電の自家消費で昼間の買電コストを削減する（駐車場・屋上等に設置）",
      "ヒートポンプ式給湯設備への切替で電力コストと熱エネルギーコストを最適化する",
      "電力使用量の多い繁忙期を念頭に、固定型プランで料金上限を確保する",
    ],
  },
];

export default function IndustryRiskDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          業種別リスク診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の上昇リスクは「どの業種か」によって影響の大きさと対策の優先順位が異なります。製造業と小売業では電力使用量の規模が異なりますし、医療施設では安定供給の重要性が格別に高い。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、主要な業種ごとに電力使用の特性・リスクの傾向・優先すべき対策を整理します。自社の業種に近いものを確認し、見直しの方向性を検討する参考にしてください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>業種ごとの電力使用特性とリスク水準の違い</li>
            <li>製造業・小売・飲食・医療・オフィス・宿泊業の6業種別リスクと対策</li>
            <li>業種特性に応じた優先アクションの整理</li>
            <li>全業種共通で確認すべき基本チェックポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">全業種共通の基本確認ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種を問わず、以下の確認は見直しの前提として全法人担当者に共通です。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { label: "現在の電力プランが固定型か市場連動型かを把握している", note: "プランの種類によってリスク構造が根本的に異なります。" },
              { label: "燃料費調整額に上限設定があるかを確認している", note: "上限なしプランは市場価格高騰時に青天井で上昇するリスクがあります。" },
              { label: "直近12か月の請求書から変動費の動向を把握している", note: "調整額の推移を確認することで、コスト上昇の原因を特定できます。" },
              { label: "次回の契約更新時期を把握している", note: "更新3〜6か月前に見直しを開始することが最も選択肢の多い状況を作れます。" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {industries.map((industry) => (
          <section key={industry.slug} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-semibold text-slate-900">{industry.name}</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                リスク水準：{industry.riskLevel}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              <span className="font-semibold text-slate-800">電力使用の特性：</span>
              {industry.usageCharacteristics}
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-red-700">主なリスク</p>
                <ul className="mt-2 space-y-2">
                  {industry.risks.map((risk) => (
                    <li key={risk} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-red-200 bg-red-50 text-xs text-red-400">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-700">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-sky-700">優先的な対策</p>
                <ul className="mt-2 space-y-2">
                  {industry.countermeasures.map((measure) => (
                    <li key={measure} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-sky-200 bg-sky-50 text-xs text-sky-500">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-700">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別リスク診断を終えたら</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自社の業種特性とリスクを確認したら、次のステップに進みましょう。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "シミュレーターで現行プランの上振れリスクを業種の使用量規模で試算する" },
              { step: 2, text: "固定型・市場連動型のどちらが業種特性に合っているかを確認する" },
              { step: 3, text: "業種に応じた設備投資（太陽光・蓄電池等）のコスト試算を行う" },
              { step: 4, text: "見積比較を実施し、業種特性に応じた条件で複数社を比較する" },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="業種別リスク診断の後、さらに情報を深めるためのページです。"
          links={[
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "見直しの必要性があるかを10項目で確認する診断ページ。",
            },
            {
              href: "/fixed-vs-market-quick-diagnosis",
              title: "固定プラン向き・市場連動向き診断",
              description: "業種特性に合ったプランの方向性を確認する。",
            },
            {
              href: "/solar-suitability-diagnosis",
              title: "太陽光導入向き不向き診断",
              description: "業種特性から見て自家消費型太陽光が向くかを確認。",
            },
            {
              href: "/battery-suitability-diagnosis",
              title: "蓄電池導入向き不向き診断",
              description: "業種特性から見て蓄電池導入が向くかを確認。",
            },
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電力コスト見直し",
              description: "小売業に特化した電力コスト管理と見直しのポイントを解説。",
            },
            {
              href: "/which-companies-benefit-most-from-review",
              title: "電力契約見直しで最も恩恵が大きい法人の特徴",
              description: "見直し効果が高い企業の条件を業種含めて解説。",
            },
          ]}
        />

        <ContentCta
          heading="業種に合わせたリスクをシミュレーターで確認する"
          description="業種特性から見たリスクを把握したら、シミュレーターで実際の使用量・プラン条件をもとに数値で確認しましょう。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="industry-risk-diagnosis" />
      </div>
    </main>
  );
}
