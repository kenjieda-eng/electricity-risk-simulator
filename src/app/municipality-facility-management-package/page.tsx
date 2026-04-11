import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "公共施設包括管理委託と電力契約の関係｜メリットと注意点";
const pageDescription =
  "公共施設の包括管理委託（包括委託）で電力契約をどう扱うかを財政・施設管理担当者向けに解説。電力調達を包括委託に含める場合の契約設計、透明性の確保、コスト管理の落とし穴、随意契約・入札との整合まで実務的にまとめます。";
const pageUrl = "https://simulator.eic-jp.org/municipality-facility-management-package";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "公共施設 包括管理委託",
    "包括委託 電力契約",
    "PFI 電力調達",
    "指定管理者 電力費",
    "公共施設 電気代 委託",
    "包括外部監査 電力",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

const contractPatterns = [
  {
    pattern: "自治体が電力を直接調達",
    description: "包括委託とは別に、自治体が自ら入札で電力調達を行い、施設に供給する",
    merit: [
      "コストの透明性が高い",
      "入札・随意契約の法令手続きを自治体が直接管理",
      "電力コストの変動を予算で直接把握できる",
    ],
    demerit: [
      "施設管理と電力調達の担当部署が分かれ、調整が必要",
      "受託事業者が省エネ努力をするインセンティブが弱い",
    ],
    typical: "学校・庁舎など直営施設が多い自治体",
  },
  {
    pattern: "包括委託に電力調達を含める",
    description: "受託事業者が電力調達も行い、委託料に電力費を含む形で一括して管理",
    merit: [
      "受託事業者の省エネ努力が委託費削減に直結（インセンティブが機能）",
      "施設管理と電力の一体的マネジメントが可能",
      "自治体の電力調達手続きを省力化できる",
    ],
    demerit: [
      "電力費の透明性が低下（受託事業者の利ザヤが見えにくい）",
      "電力市況上昇時のコスト転嫁交渉が発生",
      "契約期間中の電力市況上昇を委託料に反映するルール設計が複雑",
    ],
    typical: "指定管理・PFI・DBO型で施設を一括管理している場合",
  },
  {
    pattern: "電力費を分離した包括委託",
    description: "包括委託の対象業務から電力調達を除き、別途入札で調達する",
    merit: [
      "電力コストの透明性と競争性を確保",
      "受託事業者の業務範囲が明確",
      "電力市況変動の影響が委託料に波及しない",
    ],
    demerit: [
      "施設管理と電力の連携が不十分になりやすい（省エネ効果の帰属問題）",
      "受託事業者が省エネ投資をするインセンティブが弱まる場合あり",
    ],
    typical: "電力コストを明確に管理したい場合・包括委託移行当初",
  },
];

const steps = [
  {
    step: "STEP 1",
    title: "現在の電力調達方法の確認",
    desc: "各施設の電力契約が直接調達か、指定管理者・委託事業者経由かを整理する。混在している場合は一覧表を作成し、契約主体・契約期間・単価を把握する。",
  },
  {
    step: "STEP 2",
    title: "包括委託への移行可否の検討",
    desc: "施設の規模・種別・運営体制を踏まえ、電力調達を包括委託に含めるかどうかを判断する。コスト透明性・省エネインセンティブ・手続き負担のバランスで選択する。",
  },
  {
    step: "STEP 3",
    title: "契約設計：電力費の取り扱いルールを明確化",
    desc: "包括委託に電力を含める場合は、電力費の算定方法・市況変動時の精算ルール・節電インセンティブの設計を契約書・仕様書に明記する。",
  },
  {
    step: "STEP 4",
    title: "モニタリング体制の構築",
    desc: "受託事業者が電力調達を行う場合でも、自治体として電力使用量・単価・コストの月次報告を義務付けるモニタリング体制を設ける。",
  },
  {
    step: "STEP 5",
    title: "入札・随意契約との整合確認",
    desc: "包括委託の発注は一般競争入札が原則。電力調達を含む場合でも、競争性と透明性が確保された手続きを経ることが必要。包括外部監査での指摘リスクも事前に確認する。",
  },
];

const checkPoints = [
  {
    title: "電力費の「見える化」",
    detail:
      "委託料一式で電力費が埋没していないか確認。受託事業者から「電力費（kWh・単価・金額）の月次報告書」を義務付けることで透明性を確保する。",
  },
  {
    title: "市況変動の契約上の取り扱い",
    detail:
      "電力市況が大幅に変動した場合に委託料を改定するかどうか、改定の計算式と協議プロセスを契約書に明記する。不明確なままでは交渉が難航する。",
  },
  {
    title: "省エネインセンティブの設計",
    detail:
      "受託事業者が省エネ投資をした場合の節電効果の帰属（受託者取り分 vs. 自治体取り分）を明確にする。受託者に利益が帰属する設計が省エネ促進に有効。",
  },
  {
    title: "契約解除・引き継ぎ時の取り扱い",
    detail:
      "包括委託の解除・更新時に電力契約をどうするかを事前に設計する。受託事業者名義で締結した電力契約が残ると引き継ぎが複雑になる。",
  },
  {
    title: "包括外部監査への対応",
    detail:
      "電力費を含む包括委託は、包括外部監査で「委託費の妥当性」が問われやすい。電力費の積算根拠・市況との照合・競争性の証明を資料として保存しておく。",
  },
];

export default function MunicipalityFacilityManagementPackagePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          公共施設包括管理委託と電力契約の関係
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-600">メリットと注意点</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          公共施設の包括管理委託（包括委託）は、複数の施設・業務を一括して民間事業者に委託することで
          運営の効率化・コスト削減を図る手法です。この包括委託に電力調達を含めるかどうかは、
          コストの透明性・省エネインセンティブ・手続き負担のバランスに大きな影響を与えます。
          本ページでは電力調達の取り扱いパターン・契約設計のポイント・落とし穴を解説します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 背景 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">包括管理委託が広がる背景</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            少子高齢化・人口減少を背景に多くの自治体が公共施設の維持管理コストの削減を迫られており、
            PFI・指定管理・包括委託など民間活力を活用した施設管理手法の導入が進んでいます。
            特に2010年代以降、清掃・警備・設備点検・修繕をまとめた「包括管理委託」の導入が中規模以上の自治体で増加しています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            この流れの中で「電力調達も委託に含めるべきか」という議論が生じています。
            電気代高騰が続く現在、電力コストの扱いは包括委託の費用対効果に直結する重要な論点です。
          </p>
        </section>

        {/* 契約パターン比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力調達の3つの取り扱いパターン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            包括委託における電力調達の取り扱いは主に3パターンあります。それぞれのメリット・デメリットを比較し、
            自団体の施設特性に合った方式を選択してください。
          </p>
          <div className="mt-4 space-y-4">
            {contractPatterns.map((p, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-indigo-700">{p.pattern}</p>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-700">メリット</p>
                    <ul className="mt-1 list-disc pl-4 text-sm leading-6 text-slate-700">
                      {p.merit.map((m, j) => (
                        <li key={j}>{m}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">デメリット・注意点</p>
                    <ul className="mt-1 list-disc pl-4 text-sm leading-6 text-slate-700">
                      {p.demerit.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500">典型的な適用場面：{p.typical}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 実務フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">担当者の実務フロー（5ステップ）</h2>
          <div className="mt-4 space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex-shrink-0 border-l-4 border-indigo-400 pl-4">
                  <p className="text-xs font-bold text-indigo-600">{s.step}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 落とし穴チェックリスト */}
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">落とし穴チェックリスト：5つの確認ポイント</h2>
          <div className="mt-3 space-y-3">
            {checkPoints.map((cp, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-amber-800">
                  {i + 1}. {cp.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">{cp.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 比較表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">規模別：包括委託と電力調達の推奨アプローチ</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">規模</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">推奨アプローチ</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">留意点</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium">政令市・中核市</td>
                  <td className="border border-slate-200 px-3 py-2">電力を包括委託から分離して別途入札（透明性重視）</td>
                  <td className="border border-slate-200 px-3 py-2">施設規模が大きく、電力費の金額も大きいため透明性確保が優先</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">一般市（5万人以上）</td>
                  <td className="border border-slate-200 px-3 py-2">電力費報告義務付きで包括委託に含める（省エネ促進）</td>
                  <td className="border border-slate-200 px-3 py-2">モニタリングシートで月次確認。市況変動の精算ルールを明記</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium">小規模市・町村</td>
                  <td className="border border-slate-200 px-3 py-2">手続き負担を考慮して包括委託に含める（または共同調達）</td>
                  <td className="border border-slate-200 px-3 py-2">入札手続きを自力で行うリソースが限られる場合は委託推奨</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 議会・住民説明 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">議会・住民への説明ポイント</h2>
          <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold">包括委託のコスト削減効果：</span>
              電力費を含む包括委託全体のコスト削減額・削減率を数値で示す
            </li>
            <li>
              <span className="font-semibold">電力費の透明性確保措置：</span>
              月次報告書・モニタリング体制により電力費を把握していることを説明
            </li>
            <li>
              <span className="font-semibold">市況変動への対応：</span>
              電力市況が大幅変動した場合の精算ルールが契約に明記されていることを示す
            </li>
            <li>
              <span className="font-semibold">省エネ実績：</span>
              受託事業者が実施した省エネ対策と節電効果（kWh・金額）の実績を報告
            </li>
          </ol>
        </section>

        {/* 参考事例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">他自治体の参考事例</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">一般市（人口10万人規模）：</span>
            25施設の包括管理委託に電力調達を含める設計で発注。
            受託事業者が共同購入で電力単価を自治体単独調達比10%削減。
            ただし市況上昇時の精算ルールが不明確だったため、2年目に委託料増額交渉が発生。
            契約更新時に精算条項を明記した。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">中核市（人口20万人規模）：</span>
            包括委託から電力を分離し、別途一般競争入札で調達。
            受託事業者には月次の省エネ実績報告書を義務付け、節電目標を達成した場合にインセンティブ料を支払う設計を採用。
            省エネインセンティブにより前年比8%の使用量削減を達成。
          </p>
        </section>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/municipality-resident-service-impact",
              title: "電気代高騰が住民サービスに与える影響と対応｜公共施設の運営",
              description: "施設別の節電対策・使用料見直し・統廃合の判断基準を解説。",
            },
            {
              href: "/municipality-procurement-methods",
              title: "自治体電力調達の入札実務｜一般競争・指名競争・随意契約の使い分け",
              description: "入札方式の基本から使い分け判断まで体系的に解説します。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直しはどこから始めるか",
              description: "電力契約見直しのステップと着手ポイントを解説。",
            },
            {
              href: "/articles/municipality",
              title: "自治体・公共向け記事一覧",
              description: "自治体の電力調達に関する記事をカテゴリでまとめています。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="包括委託の電力コスト水準を把握する"
          description="シミュレーターで施設の電力コストを試算し、包括委託の電力費設計の参考としてください。詳細はお問い合わせから。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/contact", label: "専門家に相談する" },
          ]}
        />
      </div>
    </main>
  );
}
