import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "太陽光導入向き不向き診断｜自家消費型太陽光が自社に合うかを整理";
const pageDescription =
  "自家消費型太陽光発電の導入に自社が向いているかを診断チェックで確認。屋根・設置スペース・電力使用パターン・予算・補助金など、法人の導入判断に必要なポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自家消費 太陽光 診断",
    "法人 太陽光発電 向き不向き",
    "産業用太陽光 導入 チェック",
    "太陽光 コスト削減 法人",
    "自家消費型太陽光 費用対効果",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/solar-suitability-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/solar-suitability-diagnosis",
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

const suitabilityCategories = [
  {
    category: "設置場所・建物の条件",
    items: [
      {
        label: "屋根・屋上・駐車場に一定の面積がある（目安：50坪以上のスペース）",
        note: "自家消費型太陽光発電では、屋根・屋上・駐車場の遊休スペースが設置面積となります。10kW以上のシステムを設置するには数十坪以上のスペースが必要です。",
        positive: true,
      },
      {
        label: "屋根の向きが南向き〜東西向きで、日当たりが確保されている",
        note: "南向きが最も発電効率が高く、東・西向きでも一定の発電量が期待できます。北向き屋根や周囲の建物・木によって日当たりが大幅に遮られる場合は発電量が少なくなります。",
        positive: true,
      },
      {
        label: "建物の築年数が新しく（目安：20年以内）、屋根の強度が十分にある",
        note: "太陽光パネルは重量があるため、屋根の耐荷重が不足している場合は補強工事が必要になるか、設置が難しい場合があります。事前に構造調査が推奨されます。",
        positive: true,
      },
      {
        label: "建物が老朽化しており、近いうちに解体・建替えの予定がある",
        note: "建物の寿命が残り5〜10年程度の場合、太陽光発電の投資回収（一般的に7〜15年）が間に合わない可能性があります。",
        positive: false,
      },
      {
        label: "賃借建物であり、オーナーの許可取得が難しい",
        note: "賃借物件では建物オーナーの同意が必要です。オーナーの理解が得られない場合は設置が困難になります。ただし、最近はオーナー同意を得た導入事例も増えています。",
        positive: false,
      },
    ],
  },
  {
    category: "電力使用パターン",
    items: [
      {
        label: "昼間（9〜17時頃）に電力使用量が多い",
        note: "太陽光発電は昼間に発電するため、昼間の消費量が多いほど自家消費率が高まり、コスト削減効果が出やすくなります。夜間のみ稼働する工場などは自家消費率が低くなります。",
        positive: true,
      },
      {
        label: "年間を通じて安定した電力需要がある",
        note: "太陽光発電量は季節・天候によって変動します。通年で電力需要がある施設（工場・病院・オフィス等）は自家消費率を確保しやすい傾向があります。",
        positive: true,
      },
      {
        label: "業種的に電力使用量が多く、現在の買電コストが高い",
        note: "買電単価が高いほど、同じ発電量でも経済的なメリットが大きくなります。特に高圧・特別高圧の需要家や電力多消費産業では投資回収が早くなりやすい傾向があります。",
        positive: true,
      },
      {
        label: "稼働が週末・祝日含む年中で、発電量を無駄なく使いやすい",
        note: "週5日稼働・祝日休業の施設では、休日の余剰発電量が多くなります。余剰電力を売電（余剰売電）する形でも収益化できますが、自家消費型の場合は自家使用量の最大化が基本です。",
        positive: true,
      },
    ],
  },
  {
    category: "資金・予算・補助金",
    items: [
      {
        label: "初期投資の目処が立っている（100kWシステムで数百万〜数千万円規模）",
        note: "産業用太陽光発電の導入コストは容量・工事条件によって異なりますが、100kWクラスで概ね1,000〜3,000万円程度が目安です。補助金活用で圧縮できる場合があります。",
        positive: true,
      },
      {
        label: "国・自治体の補助金・税制優遇の活用を検討できる",
        note: "中小企業省エネ補助金・RE100関連補助金・地方自治体の補助制度など、太陽光設備に活用できる補助金が複数あります。毎年公募内容が変わるため最新情報の確認が必要です。",
        positive: true,
      },
      {
        label: "PPA（電力購入協定）や屋根貸しモデルを活用できる可能性がある",
        note: "初期費用ゼロで太陽光を設置できるPPAモデルや、屋根を事業者に貸すことで固定賃料を受け取る屋根貸しモデルも選択肢になります。自己資金が限られる場合でも検討できます。",
        positive: true,
      },
    ],
  },
  {
    category: "環境・ESG目標との連携",
    items: [
      {
        label: "CO2削減・脱炭素目標（RE100・SBT等）への取り組みが求められている",
        note: "自家消費型太陽光は再エネ由来の電力を直接使用することで、Scope2（間接排出）の削減に直結します。サプライチェーン上の要求や投資家対応としても有効です。",
        positive: true,
      },
      {
        label: "取引先・顧客から再エネ使用の証明を求められている",
        note: "自家消費型太陽光は、再エネ使用の証明（電力使用報告・グリーン電力証書等）に活用できます。非化石証書と組み合わせることで証明力がさらに高まります。",
        positive: true,
      },
    ],
  },
];

const notSuitableConditions = [
  "屋根・屋上・駐車場等の設置スペースがほとんどない（都市部の狭小ビル等）",
  "建物の老朽化が著しく、近いうちに解体・建替えが予定されている",
  "完全夜間稼働で昼間の電力需要がほぼゼロ",
  "建物オーナーの許可が取れない賃借物件（交渉の余地なし）",
];

export default function SolarSuitabilityDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          太陽光導入向き不向き診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          自家消費型太陽光発電は、電気料金の削減とCO2削減・脱炭素対応を同時に実現できる設備として、多くの法人で関心が高まっています。一方、施設条件・電力使用パターン・予算によって向き不向きが大きく異なります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは「設置場所・建物」「電力使用パターン」「資金・補助金」「ESG目標」の4カテゴリで、自社が自家消費型太陽光に向いているかを診断します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>自家消費型太陽光が向く設置場所・建物の条件</li>
            <li>電力使用パターンからの向き不向きの確認</li>
            <li>PPA・屋根貸しモデルを含む資金調達の選択肢</li>
            <li>ESG・脱炭素目標との連携の考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自家消費型太陽光でできること</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光とは、発電した電力を売電せず自社で使用することを主目的とした太陽光発電システムです。電力料金の高騰局面では、買電量を減らすことで直接的なコスト削減効果が得られます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "買電コストの削減", body: "発電量分だけ電力会社からの買電を減らすため、電力単価が高いほど削減効果が大きくなる。" },
              { title: "CO2排出量の削減", body: "再エネ由来の電力を自社で使用することで、Scope2排出量の削減に直結する。" },
              { title: "電力価格変動リスクの軽減", body: "自家発電分は電力市場価格の影響を受けないため、価格高騰局面のリスクヘッジになる。" },
              { title: "蓄電池との組み合わせ効果", body: "蓄電池と組み合わせることで自家消費率がさらに向上し、夜間・停電時にも活用できる。" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {suitabilityCategories.map((section) => (
          <section key={section.category} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">{section.category}</h2>
            <div className="mt-4 space-y-3">
              {section.items.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-3 rounded-lg border p-4 ${
                    item.positive
                      ? "border-sky-100 bg-sky-50"
                      : "border-amber-100 bg-amber-50"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border bg-white text-xs ${
                      item.positive
                        ? "border-sky-300 text-sky-500"
                        : "border-amber-300 text-amber-500"
                    }`}
                  >
                    {item.positive ? "✓" : "✕"}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          item.positive
                            ? "bg-sky-100 text-sky-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {item.positive ? "向いている" : "注意が必要"}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-amber-100 bg-amber-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">自家消費型太陽光が向いていない条件</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の条件が当てはまる場合は、太陽光よりも先に検討すべき対策がある可能性があります。
          </p>
          <div className="mt-4 space-y-3">
            {notSuitableConditions.map((condition) => (
              <div key={condition} className="flex items-start gap-3 rounded-lg border border-amber-200 bg-white p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-300 bg-white text-xs text-amber-500">
                  ✕
                </span>
                <p className="text-sm leading-6 text-slate-700">{condition}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            上記に当てはまる場合でも、PPAモデルや屋根貸し、小規模な部分自家消費など、従来とは異なるアプローチが可能なケースも増えています。まず専門業者への相談から始めることを推奨します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">導入モデルの選択：自己投資・PPA・屋根貸しの違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光の導入形態は複数あり、自社の資金状況・目的に応じて選択できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              {
                title: "自己投資型",
                pros: "・コスト削減効果を全て享受できる\n・補助金・税制優遇の活用が可能",
                cons: "・初期投資が大きい（数百万〜数千万円）\n・設備管理・保守の責任が自社",
              },
              {
                title: "PPAモデル（電力購入協定）",
                pros: "・初期費用ゼロで設置可能\n・発電電力を固定単価で購入（相場より安い場合が多い）",
                cons: "・長期契約（10〜20年）が前提\n・発電電力のコスト削減分はPPA事業者と分配",
              },
              {
                title: "屋根貸しモデル",
                pros: "・設置・維持管理コストが不要\n・賃貸収入を受け取れる",
                cons: "・自家消費によるコスト削減効果は限定的\n・賃貸条件の交渉が必要",
              },
            ].map((model) => (
              <div key={model.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{model.title}</p>
                <p className="mt-2 text-xs leading-5 text-green-700 whitespace-pre-line">{model.pros}</p>
                <p className="mt-2 text-xs leading-5 text-amber-700 whitespace-pre-line">{model.cons}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断後の次のステップ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「向いている」項目が多かった場合の次のアクションを整理します。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "設置可能スペースの確認（屋根・屋上・駐車場の面積・向き・日当たり）" },
              { step: 2, text: "直近1年の電力使用量データを整理し、昼間使用量の比率を確認する" },
              { step: 3, text: "補助金の公募状況（経産省・環境省・自治体）を確認する" },
              { step: 4, text: "自己投資・PPA・屋根貸しのどの導入モデルが自社に適しているかを検討する" },
              { step: 5, text: "複数の施工業者・PPA事業者に現場調査・見積依頼を行い、投資回収期間を試算する" },
              { step: 6, text: "蓄電池との組み合わせも合わせて検討し、自家消費率最大化プランを比較する" },
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
          intro="太陽光導入検討と合わせて確認したいページです。"
          links={[
            {
              href: "/battery-suitability-diagnosis",
              title: "蓄電池導入向き不向き診断",
              description: "太陽光と組み合わせる蓄電池の向き不向きを確認する診断ページ。",
            },
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "設備投資の前にまず電力契約の見直しを確認する。",
            },
            {
              href: "/industry-risk-diagnosis",
              title: "業種別リスク診断",
              description: "業種別に太陽光導入の必要性と優先度を確認する。",
            },
            {
              href: "/non-fossil-certificates",
              title: "非化石証書とは",
              description: "再エネ証明に使える非化石証書の仕組みと活用方法を解説。",
            },
            {
              href: "/renewable-power-procurement",
              title: "再エネ電力調達の方法",
              description: "自家消費以外の再エネ調達手段の選択肢を整理。",
            },
            {
              href: "/fixed-vs-market-quick-diagnosis",
              title: "固定プラン・市場連動向き診断",
              description: "太陽光導入後の電力プラン選択にも参考になる診断ページ。",
            },
          ]}
        />

        <ContentCta
          heading="設備投資の前に電力コストの現状を把握する"
          description="太陽光発電の投資判断をする前に、現行の電力プランのコストリスクをシミュレーターで確認することで、投資の優先度と費用対効果の判断がしやすくなります。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="solar-suitability-diagnosis" />
      </div>
    </main>
  );
}
