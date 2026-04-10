import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "請求書確認ポイント診断｜電気料金請求書の見落としをチェック";
const pageDescription =
  "法人の電気料金請求書で見落としやすい項目を15チェックで診断。基本料金・燃料費調整額・市場価格調整額・容量拠出金など、各項目の意味と確認ポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 請求書 確認ポイント",
    "法人 電気代 請求書 見方",
    "燃料費調整額 請求書",
    "市場価格調整額 請求書",
    "電力 請求書 チェックリスト",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/bill-check-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/bill-check-diagnosis",
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

const basicItems = [
  {
    label: "基本料金の計算基準（契約電力kW）を確認している",
    note: "契約電力は基本料金の算定根拠です。実際の使用実績に対して過大に設定されていないかを確認しましょう。特に設備変更・移転後に見直されていないケースがあります。",
  },
  {
    label: "電力量料金の単価と時間帯区分を把握している",
    note: "時間帯別料金が設定されているプランでは、昼間・夜間・深夜の単価が異なります。稼働時間帯と料金帯が合っているかを確認することが最適化の基本です。",
  },
  {
    label: "再エネ賦課金の単価と月額負担を確認している",
    note: "再エネ賦課金は全需要家に一律適用されますが、年度ごとに単価が改定されます。使用量が多い事業者ほど負担が大きくなるため、金額推移を把握してください。",
  },
  {
    label: "電気料金の合計額を前月・前年同月と比較している",
    note: "変動要因を把握するために、月次・前年同月比での推移確認が基本です。使用量が変わっていないのに金額が上がっている場合は、単価要因（調整額等）が増えている可能性があります。",
  },
];

const adjustmentItems = [
  {
    label: "燃料費調整額の符号（プラス・マイナス）と金額を確認している",
    note: "燃料費調整額はLNG・石油などの燃料価格に連動して毎月変動します。プラス（追加負担）になっている月が多い場合、その累積額が年間コストに与える影響を確認しましょう。",
  },
  {
    label: "燃料費調整額に上限設定があるか確認している",
    note: "上限なしのプランでは燃料価格が高騰した際に調整額が青天井になります。上限の有無と上限単価を契約書で確認してください。固定型プランでは上限付きが多い傾向があります。",
  },
  {
    label: "市場価格調整額が加算されているかを確認している",
    note: "市場連動型プランでは、JEPX等の卸電力取引所の価格に連動した調整額が加算されます。請求書に「市場価格調整額」または同様の名称の項目がある場合、その算定方式を確認してください。",
  },
  {
    label: "容量拠出金が請求書に反映されているかを確認している",
    note: "容量拠出金は2024年度から導入された制度負担です。電力会社によって請求書への反映方法が異なります（単価に込みの場合・別建ての場合）。明細での表示方法を確認してください。",
  },
  {
    label: "託送料金の内訳（系統利用料）を確認したことがある",
    note: "新電力から電力を購入している場合、送配電網の利用料（託送料金）は電力小売価格に含まれています。プランによっては明細として開示されているケースもあります。",
  },
];

const usageItems = [
  {
    label: "月間電力使用量（kWh）の推移を直近12か月分把握している",
    note: "使用量の推移を把握することで、季節変動・設備変更の影響を把握できます。見積比較や契約電力の見直しにも必要な基礎情報です。",
  },
  {
    label: "デマンド値（最大需要電力）を確認したことがある",
    note: "高圧以上の契約では、30分単位の最大需要電力（デマンド）が基本料金に影響します。デマンドが高い月が契約電力の基準になる場合があるため、ピークカットの効果を検証できます。",
  },
  {
    label: "力率（パワーファクター）と割引・割増の適用を確認している",
    note: "力率が高い（進み力率）場合、基本料金の割引が適用されることがあります。力率が低い場合は逆に割増になるプランもあります。請求書に力率の記載があれば確認しましょう。",
  },
];

const contractConditionItems = [
  {
    label: "現在の契約電力（kW）が実態に即しているかを確認している",
    note: "契約電力が実使用量より大幅に大きい場合、基本料金を過剰に払っている可能性があります。特に設備縮小・移転・閉鎖後に契約変更をしていないケースに注意が必要です。",
  },
  {
    label: "複数拠点分の請求書を一元的に管理できている",
    note: "複数拠点がある場合、拠点ごとに電力会社・プランが異なることがあります。まとめて比較するには各拠点の供給地点特定番号と使用量データを一元管理することが有効です。",
  },
  {
    label: "前回の契約更新時から単価条件が変更されていないか確認している",
    note: "自動更新時に単価条件が変わっているケースがあります。更新のたびに契約書と請求書単価を照合するクセをつけると、見落としを防ぎやすくなります。",
  },
  {
    label: "補助金・価格激変緩和措置の終了が料金に反映されているか確認している",
    note: "政府の電気・ガス価格激変緩和対策は段階的に縮小・終了しています。補助金終了後の請求書で料金が上がっているかを確認し、その分を現行コストとして認識することが重要です。",
  },
];

export default function BillCheckDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          請求書確認ポイント診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の請求書には、見直しや比較に使える情報が多く含まれています。一方で、項目が多く専門用語も多いため、確認しきれていない箇所が残っているケースも少なくありません。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人の電気料金請求書で特に確認すべき15項目を4カテゴリに分類してチェックリスト形式で整理します。確認できていない項目は、今後の見直しや比較の優先ポイントとして活用してください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>請求書の基本料金・電力量料金で確認すべき項目</li>
            <li>燃料費調整額・市場価格調整額・容量拠出金の確認ポイント</li>
            <li>使用量データの把握方法と活用方法</li>
            <li>契約条件の実態確認チェックリスト</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ請求書の確認が見直しの起点になるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しを進めるうえで、請求書は最も手軽に入手できる「現状データ」です。現在どのような費用項目が、どの程度の金額で発生しているかを把握していないと、見積比較の精度が下がります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特に2020年以降、電力料金の変動要因が増えています。燃料費調整額・市場価格調整額・容量拠出金・再エネ賦課金など、変動費の構成を把握することが「なぜ高くなったのか」を説明するうえでも不可欠です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求書の読み方については{" "}
            <Link href="/how-to-read-business-electricity-bill" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人向け電気料金請求書の見方
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">基本料金・電力量料金の確認（4項目）</h2>
          <div className="mt-4 space-y-3">
            {basicItems.map((item) => (
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

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">変動費用項目の確認（5項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            近年の電気料金上昇の多くは、この変動費用項目の増加によるものです。各項目の有無と金額規模を必ず確認してください。
          </p>
          <div className="mt-4 space-y-3">
            {adjustmentItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-amber-100 bg-amber-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-300 bg-white text-xs text-amber-400">
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

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量データの把握（3項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量データは、見積比較・シミュレーター入力・社内説明のいずれにも必要な基礎情報です。
          </p>
          <div className="mt-4 space-y-3">
            {usageItems.map((item) => (
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

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約条件の実態確認（3項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書と契約書を照合することで、実態に即した契約条件になっているかを確認できます。
          </p>
          <div className="mt-4 space-y-3">
            {contractConditionItems.map((item) => (
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

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">確認できていない項目が多い場合の対応</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            チェックできない項目が複数ある場合、まず直近3か月分の請求書を手元に用意することから始めてください。以下の順で確認すると効率よく情報を整理できます。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "直近12か月分の請求書を電力会社のWebサービス等から入手する" },
              { step: 2, text: "基本料金・電力量料金・調整額・賦課金を項目ごとに分けてExcelなどで整理する" },
              { step: 3, text: "月次の使用量（kWh）と請求総額の推移をグラフ化して傾向を把握する" },
              { step: 4, text: "燃料費調整額・市場価格調整額の変動幅を確認し、年間への影響額を算出する" },
              { step: 5, text: "シミュレーターに使用量と契約電力を入力し、今後のリスクを試算する" },
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
          intro="請求書の理解を深め、見直しに役立てるためのページです。"
          links={[
            {
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目の意味と、見直し判断のための確認ポイントを詳しく解説。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "燃料費調整額の仕組みと、上限設定の意味を解説。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "市場連動プランに加算される調整額の仕組みを解説。",
            },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは",
              description: "2024年度から導入された容量拠出金の仕組みと請求書への影響。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "電力契約見直しチェックリスト",
              description: "請求書確認を含む、見直し全体の準備チェックリスト。",
            },
            {
              href: "/quotation-comparison-pre-check",
              title: "見積比較前チェック診断",
              description: "請求書確認が終わったら次は見積比較の準備へ。",
            },
          ]}
        />

        <ContentCta
          heading="請求書の情報をもとにリスクを試算する"
          description="請求書で確認した使用量・契約電力・プラン種別をシミュレーターに入力することで、現行契約の上振れリスクを数値で確認できます。"
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
