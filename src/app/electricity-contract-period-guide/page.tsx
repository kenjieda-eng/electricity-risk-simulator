import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "電力契約の契約期間の見方と注意点｜1年・2年・3年契約の違い";
const pageDescription =
  "法人向け電力契約の契約期間（1年・2年・3年）の違いと、自動更新条項・早期解約・料金ロックのメリットと柔軟性のトレードオフを解説。契約期間を選ぶ際の判断基準を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 契約期間",
    "法人 電気料金 1年契約 2年契約",
    "電力契約 自動更新",
    "電力 長期契約 メリット",
    "電気 契約 期間 選び方",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/electricity-contract-period-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-contract-period-guide",
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

export default function ElectricityContractPeriodGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline="電力契約の契約期間の見方と注意点｜1年・2年・3年契約の違い"
        description="法人向け電力契約の契約期間（1年・2年・3年）の違いと、自動更新条項・早期解約・料金ロックのメリットと柔軟性のトレードオフを解説。契約期間を選ぶ際の判断基準を整理します。"
        url="https://simulator.eic-jp.org/electricity-contract-period-guide"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力契約の契約期間の見方と注意点" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">契約期間の見方</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電力契約の契約期間の見方と注意点
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電力契約では、契約期間として1年・2年・3年の選択肢が一般的です。期間が長いほど単価が安くなる傾向がありますが、その分柔軟性が下がり、早期に切り替えたい場合に制約が生じます。どの期間が適切かは、事業環境や料金動向の見通しによって変わります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、契約期間の基本的な仕組みと、長期・短期それぞれの特徴、自動更新条項への注意点を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>1年・2年・3年契約の単価と柔軟性のトレードオフ</li>
            <li>自動更新条項の仕組みと確認方法</li>
            <li>早期解約・契約変更の制約と注意点</li>
            <li>料金ロックのメリットが活きる場面</li>
            <li>契約期間を選ぶ際の判断基準</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約期間の基本的な仕組み
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の契約期間とは、特定の料金条件（単価・料金体系）が適用される期間を指します。契約期間中は原則として変更・解約ができないか、解約には条件（違約金・予告期間）が伴います。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約期間が終了すると、自動更新条項がある場合は同じ条件で自動的に更新されます。自動更新を拒否したい場合は、契約書に定められた期限（多くは満了の1〜3か月前）までに意思表示が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            1年・2年・3年契約の比較
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-sky-700">1年契約</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">特徴</p>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-6 text-slate-600">
                <li>毎年見直し可能で柔軟性が高い</li>
                <li>単価は長期契約より高め</li>
                <li>市場環境が改善した場合に早期対応できる</li>
              </ul>
              <p className="mt-2 text-sm font-semibold text-slate-900">向く場面</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                事業規模の変動が大きい場合や、料金動向を見ながら柔軟に対応したい場合。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-sky-700">2年契約</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">特徴</p>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-6 text-slate-600">
                <li>1年と3年の中間的な選択</li>
                <li>単価はやや優遇される場合が多い</li>
                <li>中期的に料金を固定できる</li>
              </ul>
              <p className="mt-2 text-sm font-semibold text-slate-900">向く場面</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                短期的な柔軟性と中期的なコスト安定の両立を求める場合。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-sky-700">3年契約</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">特徴</p>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-6 text-slate-600">
                <li>最も単価が優遇されるケースが多い</li>
                <li>料金変動リスクをヘッジしやすい</li>
                <li>解約・変更の自由度が最も低い</li>
              </ul>
              <p className="mt-2 text-sm font-semibold text-slate-900">向く場面</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                コスト予測の安定を重視し、今後3年間の事業計画が固まっている場合。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自動更新条項の確認方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            多くの電力契約には自動更新条項が含まれており、更新拒否の申出期限を過ぎると自動的に同条件で更新されます。確認すべき項目は以下のとおりです。
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">更新拒否の申出期限</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                契約書に「満了○か月前までに申し出がない場合は自動更新」と定められていることが多い。1〜3か月前が一般的だが、契約によって異なる。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">更新後の契約期間</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                自動更新後の期間が最初と同じ期間（例：3年）になるのか、1年になるのかを確認する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">更新後の単価・条件</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                自動更新の際に単価が変更される場合がある。「市場動向に応じて改定」などの文言がある場合は、更新前に確認が必要。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            料金ロックのメリットが活きる場面
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            長期固定契約（特に固定単価型）は、料金が上昇局面では有利に働きます。逆に市場価格が下落した場合は、割高になるリスクもあります。料金ロックのメリットが特に有効な場面は以下です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料費や市場価格の上昇が続く局面で、今の単価を固定することで将来の上振れリスクをヘッジできる</li>
            <li>予算管理を重視する業種・規模の企業で、電気料金の変動を最小化したい場合</li>
            <li>大型設備投資の計画があり、コスト予測の安定が事業計画上必要な場合</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の上昇リスクをシミュレーションで確認することで、長期固定契約の価値を定量的に評価できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約期間を選ぶ際の判断基準
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約期間の選択は、以下の視点から総合的に判断します。
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">事業の安定性</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                今後の使用量・施設の変動が大きい場合は短期、事業計画が固まっている場合は長期の方が合理的。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">料金動向の見通し</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                上昇傾向が続くと見るなら長期固定、下落が見込まれるなら短期の方が有利になる可能性がある。ただし見通しは不確かであり、リスク許容度によって判断が変わる。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">解約コストとの比較</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                長期契約の中途解約には違約金が発生することがある。長期契約の単価優遇と解約コストを比較して、実質的なコスト優位性を確認する。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中途解約の詳細な注意点については{" "}
            <Link
              href="/mid-term-cancellation-clause-guide"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電力契約の中途解約条項の見方と注意点
            </Link>{" "}
            で整理しています。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="electricity-contract-period-guide" terms={["燃料費調整額", "市場価格調整額", "市場連動プラン", "固定プラン", "最終保障供給", "基本料金"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/mid-term-cancellation-clause-guide",
              title: "電力契約の中途解約条項の見方と注意点",
              description: "違約金と予告期間の確認方法と判断基準。",
            },
            {
              href: "/information-to-prepare-before-quotation-request",
              title: "新電力の相見積もり前に整理したい情報",
              description: "見積精度を上げるための事前情報整理。",
            },
            {
              href: "/what-to-do-3-months-before-electricity-contract-renewal",
              title: "法人の電力契約更新の3か月前にやること",
              description: "更新準備の時系列手順と見積依頼の進め方。",
            },
            {
              href: "/non-price-factors-in-electricity-contract",
              title: "法人の電力契約で単価以外に確認したい項目",
              description: "条件・リスク・運用面の確認ポイント。",
            },
            {
              href: "/not-just-unit-price-comparison-checklist",
              title: "請求単価だけで比較しないためのチェックポイント",
              description: "総額比較の考え方と見落としやすい項目。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "見直しのきっかけと判断基準の整理。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "長期契約で検討しやすい固定プランの特徴と注意点。",
            },
          ]}
        />

        <ContentCta
          heading="契約期間の選択をシミュレーションで検証する"
          description="固定型・市場連動型の違いを数値で比較することで、長期・短期契約の選択に根拠が生まれます。"
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
