import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "固定プラン向き・市場連動向き簡易診断｜自社に合うプランを整理する";
const pageDescription =
  "固定型電力プランと市場連動型プランのどちらが自社に向いているかを、予算優先度・使用量・リスク許容度などの観点から診断。法人担当者がプラン選択の方向性を整理できます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "固定プラン 市場連動 診断",
    "電力プラン どちらが向いている",
    "法人 電力プラン 選び方",
    "固定型 市場連動型 比較",
    "電気料金プラン 診断",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/fixed-vs-market-quick-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/fixed-vs-market-quick-diagnosis",
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

const decisionNodes = [
  {
    question: "電気料金の予算を毎月一定額で安定させることが最優先か？",
    yesLabel: "はい：料金変動は避けたい",
    noLabel: "いいえ：多少の変動は許容できる",
    yesResult: "fixed",
    noNext: true,
  },
  {
    question: "電力使用量が季節・稼働状況によって大きく変わるか？",
    yesLabel: "はい：繁忙期・閑散期で大きく変動する",
    noLabel: "いいえ：通年でほぼ安定している",
    yesResult: null,
    noNext: true,
  },
  {
    question: "電気料金の高騰リスクを自社の経費管理上どの程度織り込めるか？",
    yesLabel: "ほとんど余裕がない：固定で確定させたい",
    noLabel: "ある程度余裕がある：変動リスクを取れる",
    yesResult: "fixed",
    noNext: true,
  },
];

const fixedPlanTraits = [
  { label: "料金の予見性が高い", detail: "基本料金・電力量料金が原則固定されるため、月々の電気料金をある程度見通すことができます。予算管理・財務計画を立てやすい組織に向いています。" },
  { label: "相場が上がっても単価は上がりにくい", detail: "電力市場価格が高騰しても、契約時の単価が変わらないため、外部ショックを受けにくい構造です。" },
  { label: "燃料費調整額に上限設定があるプランが多い", detail: "固定型プランは燃料費調整額に上限を設けているケースが多く、極端な上振れを防げます。ただし上限の有無と算定方法はプランごとに異なります。" },
  { label: "中途解約違約金が発生しやすい", detail: "固定単価の裏返しとして、契約期間内の解約に違約金が設定されているプランが多くあります。契約期間と中途解約条件を事前に確認してください。" },
];

const marketPlanTraits = [
  { label: "市場価格が下がると料金も安くなる可能性がある", detail: "JEPXなどの電力市場価格に連動するため、相場が安定・下落した局面では固定型より低コストになる可能性があります。" },
  { label: "市場価格が上がると料金も上昇する", detail: "燃料高・需給逼迫・季節変動の影響を直接受けます。2021〜2022年の電力価格高騰局面では、市場連動プランの料金が大幅に上昇しました。" },
  { label: "上限なしの調整額には注意が必要", detail: "市場連動型で燃料費調整額に上限がないプランは、極端な相場上昇時に請求額が大きく膨らむリスクがあります。" },
  { label: "使用量が多い・安定している組織には一定のメリットがある", detail: "使用量が大きく安定していて、市場動向を自社でモニタリングできる組織であれば、コストメリットを享受しやすい構造です。" },
];

const checklist = [
  { category: "固定プランが向く傾向", items: [
    "毎月の電気料金を予算に組み込んで管理している",
    "電気料金の変動を財務・経営上の大きなリスクと捉えている",
    "料金高騰時に対応できる余力（コスト吸収・価格転嫁）が乏しい",
    "長期的に安定した契約関係を重視する",
    "エネルギー担当者がおらず、料金動向のモニタリングが難しい",
  ]},
  { category: "市場連動プランが向く傾向", items: [
    "市場価格が安い局面でのコスト削減を優先したい",
    "電力使用量が大きく、コスト変動を吸収できる体力がある",
    "電気料金動向を定期的にモニタリングできる体制がある",
    "短期的な価格変動よりも長期的なトータルコストを重視する",
    "太陽光・蓄電池など自家消費設備があり、市場連動を活用できる",
  ]},
];

export default function FixedVsMarketQuickDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          固定プラン向き・市場連動向き簡易診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しや新規契約を検討する際に、まず迷うのが「固定型プランと市場連動型プランのどちらを選ぶか」という問題です。このページでは、自社の状況に照らし合わせて方向性を整理するための診断フローとチェックリストを提供します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          最終的な判断は個別の見積条件を比較して行いますが、まず「自社の優先軸」を明確にしておくことで、比較の基準がぶれにくくなります。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>固定型・市場連動型それぞれの特徴とリスク構造</li>
            <li>自社の優先軸を整理するための判断フロー</li>
            <li>各プランが向く組織の傾向チェックリスト</li>
            <li>プラン選択時に確認すべき具体的ポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2つのプランの基本的な違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定型と市場連動型は、料金の変動構造が根本的に異なります。詳しい解説は{" "}
            <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              市場連動型と固定型プランの違い
            </Link>{" "}
            をご覧ください。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-base font-semibold text-slate-900">固定型プラン</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                契約時に電力量単価が決まり、契約期間中は原則変わらない。安定性が高い反面、市場価格が下がっても恩恵を受けにくい。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-base font-semibold text-slate-900">市場連動型プラン</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                JEPXなど電力市場の価格に連動して料金が変動する。安価になる局面もある一方で、相場上昇時は請求額が増加するリスクがある。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">判断フロー：3つの問いで方向性を確認する</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の問いに順番に答えることで、自社の優先軸が固定寄りか市場連動寄りかの方向性が見えてきます。
          </p>
          <div className="mt-4 space-y-4">
            {decisionNodes.map((node, i) => (
              <div key={i} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{node.question}</p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-sm text-blue-800">
                      → {node.yesLabel}
                    </div>
                    <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                      → {node.noLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            「料金安定を最優先」「コスト変動を吸収する余裕が乏しい」「モニタリング体制がない」といった条件が重なるほど、固定型プランが向く傾向があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定型プランの特徴と注意点</h2>
          <div className="mt-4 space-y-3">
            {fixedPlanTraits.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動型プランの特徴と注意点</h2>
          <div className="mt-4 space-y-3">
            {marketPlanTraits.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自社が向くプランを確認するチェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            当てはまる項目が多い方のプランが、自社の傾向に合っている可能性が高いといえます。ただし、最終判断は見積条件の比較で行ってください。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {checklist.map((section) => (
              <div key={section.category} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">{section.category}</p>
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">プラン選択時に必ず確認したいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            どちらのプランを選ぶ場合でも、以下の点は見積の段階で必ず確認してください。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料費調整額に上限設定があるか、またその上限額はいくらか</li>
            <li>市場価格調整額の算定方式と過去の変動実績</li>
            <li>容量拠出金の請求への反映方法</li>
            <li>契約期間と中途解約時の違約金の有無・金額</li>
            <li>再エネ賦課金の扱い（プラン共通の場合も確認）</li>
            <li>複数年契約の場合の単価改定条件</li>
          </ol>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書の読み方は{" "}
            <Link href="/how-to-read-business-electricity-quotation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人向け電気料金見積書の見方
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="プラン選択の判断をさらに深めるためのページです。"
          links={[
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動型と固定型プランの違い",
              description: "2つのプランの料金構造・リスクの違いを比較形式で解説。",
            },
            {
              href: "/who-should-choose-fixed-price-plan",
              title: "固定型プランを選ぶべき法人の特徴",
              description: "固定プランが特に向いている組織の条件を詳しく解説。",
            },
            {
              href: "/who-should-choose-market-linked-plan",
              title: "市場連動型プランを選ぶべき法人の特徴",
              description: "市場連動型のメリットを活かせる組織の条件を解説。",
            },
            {
              href: "/compare-market-linked-and-fixed-by-risk-pattern",
              title: "リスクパターン別：固定型と市場連動型の比較",
              description: "価格高騰・安定・下落の各シナリオで2プランを比較する。",
            },
            {
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "見積書でどの項目を比較すればよいかを項目別に解説。",
            },
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "そもそも見直しが必要かを10項目で確認する診断ページ。",
            },
          ]}
        />

        <ContentCta
          heading="シミュレーターで2つのプランを比較する"
          description="固定型と市場連動型のどちらが自社に有利かを、シミュレーターで具体的な数値として比較できます。リスクシナリオ別の試算も可能です。"
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
