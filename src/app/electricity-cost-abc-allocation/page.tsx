import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "電気代の部門別・製品別配賦方法｜ABC原価計算と配賦基準・サブメーター活用の実務";
const pageDescription =
  "電気代を製造原価・部門別・製品別に配賦し、正確な製品原価を把握するためのABC（活動基準原価計算）の考え方と、電力量・契約kW・稼働時間など配賦基準の選び方、子メーター活用、規模別の導入例までを整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-cost-abc-allocation";

const faqItems = [
  {
    question: "電気代を配賦する際、最初に選ぶべき配賦基準は何ですか？",
    answer:
      "最も精度が高いのは、サブメーター（子メーター）で計測した実測の電力使用量（kWh）です。実測が難しい場合は、設備の定格出力×稼働時間、契約電力（kW）、生産数量や機械運転時間などを代替基準として用います。ポイントは「電力消費の実態にできるだけ近い基準を選ぶ」ことです。売上高や人員数による按分は簡便ですが、電力消費量と相関が弱いため、製品別収益性が歪みやすい点に注意してください。",
  },
  {
    question: "サブメーター（子メーター）はどこに設置すべきですか？",
    answer:
      "配賦の単位（コストプール）にしたい区切りごとに設置するのが基本です。たとえば、主要な生産ライン単位、空調系統単位、冷凍・冷蔵設備単位、照明・共用部単位などです。すべての機器に付ける必要はなく、電力消費の大きい設備や、製品別原価への影響が大きい設備を優先します。多消費の数カ所に絞って計測するだけでも、按分だけの状態に比べて原価精度は大きく改善します。",
  },
  {
    question: "ABC（活動基準原価計算）と伝統的な配賦は何が違いますか？",
    answer:
      "伝統的な配賦は、電気代を売上高や人員数などの単一基準で一律に按分します。これに対しABCは、電力を消費する『活動』（設備運転・空調・照明・倉庫冷蔵など）をコストプールとして定義し、各活動の電力消費量を計測したうえで、製品や部門が使った活動量に応じて配賦します。活動単位で実態に即して割り付けるため、製品ごとの真の電力コストが見えやすく、誤った価格決定や採算判断を防げます。",
  },
  {
    question: "省エネ法の定期報告と電気代の配賦データは連動させられますか？",
    answer:
      "連動させられます。省エネ法（エネルギーの使用の合理化等に関する法律）に基づく定期報告では、事業者・工場ごとのエネルギー使用量の把握が求められます。サブメーターで活動別・設備別に電力使用量を計測しておくと、定期報告に必要な数値の整備が容易になるだけでなく、どの設備・工程がエネルギー多消費なのかを特定でき、省エネ投資の優先順位付けにも使えます。原価管理と省エネ管理の両方に同じ計測データを活かせる点がメリットです。",
  },
  {
    question: "電気代の配賦精度を上げると、具体的にどんな経営判断が変わりますか？",
    answer:
      "電力多消費の製品・工程が正しく原価に反映されるため、製品別の採算性が正確になります。これにより、見かけ上は黒字でも電力コストを正しく乗せると赤字だった製品の発見、適正な販売価格の設定、生産設備の更新・省エネ投資の判断、不採算品目の見直しなどが、より確かな根拠に基づいて行えるようになります。とくに電力多消費業種では、配賦精度が価格競争力と直結します。",
  },
  {
    question: "燃料費調整額や市場連動部分も配賦の対象にすべきですか？",
    answer:
      "原価管理の目的によります。製品の総原価を正確に把握したいなら、燃料費調整額や再エネ賦課金、市場連動部分も含めた実際の支払総額を、使用電力量に応じて配賦するのが整合的です。一方、設備や工程の効率を評価したい場合は、これらの変動要素を除いた『使用量ベース』で見たほうが比較しやすいことがあります。実務では、基本料金・電力量料金・燃料費調整等の内訳を分けて配賦ルールを定義しておくと、目的に応じて使い分けられます。",
  },
  {
    question: "ABC導入にはどの程度のコストがかかりますか？",
    answer:
      "計測したい単位の数と既存設備の状況によって幅があります。一般には、サブメーターの設置費用と、データを集計・配賦する原価計算システムやBEMS（ビルエネルギー管理システム）の導入費用が中心になります。すべての設備に計測機器を入れるのではなく、電力消費の大きい主要設備に絞って段階的に導入することで、初期投資を抑えつつ効果の大きい部分から精度を上げられます。投資対効果は、製品別採算の改善・省エネ余地の発見・価格設定の適正化で評価します。",
  },
  {
    question: "中小規模の事業者でもABC配賦を導入する意味はありますか？",
    answer:
      "あります。フルスケールのABCを最初から構築する必要はなく、電力消費の大きい主要工程に数カ所だけサブメーターを設置し、その実測値で按分するだけでも、売上高按分のみの状態より大幅に精度が上がります。まずは『どの工程が電気を多く使っているか』を可視化することが第一歩です。小さく始めて、効果を確認しながら計測対象を広げていくアプローチが、中小規模の事業者には現実的です。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "ABC原価計算", "配賦基準", "サブメーター"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/accounting-tax", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/accounting-tax"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "電気代の経理・税務", url: "https://simulator.eic-jp.org/articles/accounting-tax" },
          { name: "電気代の部門別・製品別配賦方法" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/accounting-tax" className="underline-offset-2 hover:underline">電気代の経理・税務</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">電気代の部門別・製品別配賦方法</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気代の部門別・製品別配賦方法｜ABC原価計算と配賦基準・サブメーター活用の実務</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電気代を製造原価・部門別・製品別に配賦し、正確な製品原価を把握するためのABC（活動基準原価計算）の考え方を整理します。電力量・契約kW・稼働時間など配賦基準の選び方、子メーター（サブメーター）の活用、製造原価への反映、規模別の導入例、省エネ法定期報告との連動までを実務目線でまとめます。</p>
          <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-05-29" />
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">なぜ電気代の配賦が重要か</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">製造業・サービス業では、電気代は間接費として集計され、何らかのルールで製品・部門に配賦されます。配賦ルールが雑だと、製品別収益性が歪み、誤った価格決定・投資判断につながります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特に電力多消費業種（冷凍倉庫・データセンター・半導体など）では、電気代配賦の精度が原価管理の品質を大きく左右します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電気料金は燃料費調整や市場連動の影響で年度によって変動します。配賦が雑なまま電気代が上昇すると、本来は電力多消費の製品に乗るべきコストが、消費の少ない製品にまで薄く広がってしまい、製品別の採算が実態とずれます。結果として、価格に転嫁すべき品目を見落としたり、逆に競争力のある品目を不必要に高く見積もったりするリスクが生じます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電気代の配賦を精緻にすることは、単なる経理上の精度向上にとどまりません。どの工程・設備が電力を多く使っているかが見えるようになるため、省エネ投資の優先順位付けや、設備更新・生産計画の意思決定にも直結します。原価管理とエネルギー管理を同じデータで結びつけられる点が、配賦設計の本質的な価値です。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">伝統的な配賦方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①売上高按分：最も簡便だが、電力消費量と売上は必ずしも比例せず歪みが大きい。②人員数按分：間接部門向けで使うが、製造業には不適。③設備時間按分：設備ごとの稼働時間で按分、精度はまずまず。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これらは手軽だが、精度は限定的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">伝統的配賦の限界は「電力消費の実態と配賦基準のあいだに相関が弱い」点にあります。たとえば、高単価だが消費電力の小さい製品と、低単価だが電力多消費の製品が混在するラインで売上高按分を使うと、電力コストが高単価製品に過大に配賦され、低単価・多消費製品が実際より採算良く見えてしまいます。これは価格戦略や品目構成の判断を誤らせる典型的なパターンです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">一方で、伝統的配賦にも合理的な使いどころはあります。電力消費が製品間で大差ない事業や、計測コストをかけるほどの規模でない事業では、設備時間按分など実態に近い単一基準でも十分なことがあります。重要なのは、自社の電力消費の偏りの大きさを踏まえ、配賦精度に投資する価値があるかを見極めることです。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">配賦基準の選び方（電力量・契約kW・稼働時間）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">配賦基準は、電力消費の実態にどれだけ近いかで精度が決まります。代表的な基準を、精度と実装コストの観点で整理します。</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">電力使用量（kWh・実測）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">サブメーターで計測した実測値。最も精度が高いが計測機器が必要。電力量料金部分の配賦に最適。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">契約電力（kW・デマンド）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">基本料金は契約電力（最大需要）で決まるため、基本料金部分の配賦には設備の最大需要寄与で按分するのが整合的。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">稼働時間×定格出力</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">実測が難しい場合の代替。設備の定格出力に稼働時間を掛けて推計。計測なしでも比較的実態に近い。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">生産数量・機械運転時間</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">製品別の活動ドライバとして使用。製品が使った活動量に応じて電気代を割り付ける際の基準。</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">実務では、電気料金の内訳（基本料金・電力量料金・燃料費調整額・再エネ賦課金）ごとに適した基準を使い分けるのが理想です。基本料金は契約電力（最大需要への寄与）、電力量料金と燃料費調整は使用電力量（kWh）で按分すると、料金構造と整合した配賦になります。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ABC原価計算の活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ABC（Activity-Based Costing）は、活動（設備運転・空調・照明など）を基準に電気代を配賦する方法です。各活動の電力消費量を計測し、製品・部門が使う活動量に応じて配賦します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">精度は最も高いですが、計測機器の設置・データ集計コストが発生します。高コスト製品群・差別化が必要な業種ほどABCの効果が大きく現れます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ABCの考え方は二段階です。第一段階で、電気代を「活動（コストプール）」に集約します。たとえば生産ラインA・B、空調、照明、倉庫冷蔵などです。第二段階で、各活動から製品・部門へ、活動ドライバ（配賦基準）に応じてコストを割り付けます。ラインAの電気代はラインAで生産した製品の運転時間で、空調の電気代は対象エリアの面積×稼働時間で、といった形で実態に即して配賦するのがポイントです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ABCが特に効果を発揮するのは、製品ごとに電力消費の偏りが大きい事業です。多品種少量生産で、一部の製品が特定の電力多消費設備を集中的に使うようなケースでは、伝統的配賦との差が顕著になります。逆に、製品間で電力消費がほぼ均一なら、ABCの精度メリットは小さく、計測コストに見合わないこともあります。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">子メーター（サブメーター）の活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ABCや実測ベース配賦の精度を支えるのが、子メーター（サブメーター）による設備別・活動別の電力計測です。受電点の1つのメーターだけでは「どこで何kWh使ったか」が分からないため、配賦したい単位ごとに計測点を設けます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">設置の優先順位は、①電力消費が大きい設備（生産ライン・冷凍冷蔵・大型空調など）、②製品別原価への影響が大きい工程、③省エネ余地が大きいと見込まれる設備、の順で考えると投資対効果が高くなります。すべての機器に計測機器を入れる必要はなく、上位数カ所を押さえるだけで、按分のみの状態に比べて精度が大きく向上します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">計測したデータは、原価計算だけでなく、BEMS（ビルエネルギー管理システム）やエネルギー管理システムと連携させることで、リアルタイムの見える化・異常検知・省エネ施策の効果測定にも活用できます。テナントビルなどで電気代を入居者に再請求する場面では、計測の正確性が公平な精算の前提になります。区分計量と再請求の考え方は、<Link href="/tenant-sub-meter-electricity-billing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">テナント・子メーターによる電気代の按分・再請求</Link>も参考になります。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ABC導入の実務ステップ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Step1：主要活動（コストプール）の特定。例：生産ラインA・B、空調、照明、倉庫冷蔵。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Step2：活動別の電力消費量計測。サブメーター設置、またはインバータ・機器別電力計の設置。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Step3：活動ドライバ（配賦基準）の決定。例：ラインAは稼働時間、空調は面積×時間。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Step4：製品・部門別に活動使用量を集計し、電気代を按分。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">初期投資：メーター設置費用、BEMS／原価計算システムで数百万円〜。効果：製品別採算の精度向上、無駄のある製品の特定。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">運用に乗せるには、Step4の後にStep5として「定期的な見直し」を組み込むと効果が持続します。生産品目や設備構成が変われば、活動の定義や配賦基準も陳腐化します。少なくとも年1回、できれば半期ごとに、コストプール・ドライバ・計測点が実態に合っているかをレビューしてください。最初から完璧を目指さず、主要設備の計測から小さく始め、効果を確認しながら対象を広げる段階導入が現実的です。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">製造原価・管理会計への反映</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">配賦された電気代は、製造間接費として製品原価に組み込まれます。製品別の正確な電力コストが原価に乗ることで、製品別損益（プロダクトミックス）の評価、適正な販売価格の設定、不採算品目の特定が、確かな根拠に基づいて行えるようになります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">管理会計上は、配賦電気代を「変動費的に扱う部分（電力量料金・燃料費調整）」と「固定費的に扱う部分（基本料金）」に分けて捉えると、限界利益の分析や操業度の判断に役立ちます。電力多消費の工程ほど、操業度が下がったときに固定費（基本料金・契約電力）の負担が重くのしかかるため、稼働率と契約電力の最適化も併せて検討する価値があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">なお、原価計算基準（企業会計原則の体系）は配賦の枠組みを示しますが、どの基準で配賦するかは各社の合理的な判断に委ねられています。電気代の勘定科目や月次処理との関係は、<Link href="/articles/accounting-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気代の経理・税務</Link>のカテゴリも併せて確認してください。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">省エネ法定期報告との連動</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">省エネ法（エネルギーの使用の合理化等に関する法律）に基づき、一定規模以上の事業者にはエネルギー使用状況の把握・定期報告が求められます。配賦のために設置したサブメーターの計測データは、この定期報告に必要な数値の整備にもそのまま活用できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">原価管理（製品別の電力コスト把握）と省エネ管理（設備別のエネルギー使用量把握）は、必要とするデータの粒度が重なります。同じ計測基盤を両方に使うことで、二重の計測投資を避けられるうえ、「どの工程がエネルギー多消費か」という共通の問いに、原価と環境の両面から答えられるようになります。これは省エネ投資の費用対効果（コスト削減額×CO2削減量）を一体で評価する土台になります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">定期報告の対象範囲や報告様式は制度改正で見直されることがあるため、最新の要件は資源エネルギー庁の公表資料で確認してください（出典: 資源エネルギー庁 省エネ法関連資料 等から整理・2025年時点）。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別の導入例（Before / After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">以下は配賦精緻化の一般的なイメージであり、効果は事業内容・電力消費の偏り・計測体制で大きく変わる目安です（出典: 資源エネルギー庁 / 各種管理会計・原価管理の実務ガイド 等から整理・2025年時点）。</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">小規模（単一工場・少品種）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">Before：電気代を売上高で一括按分。After：主要工程に数カ所サブメーターを設置し実測按分。低投資で製品別原価の歪みを大きく是正。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">中規模（複数ライン・多品種）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">Before：設備時間按分のみ。After：活動（ライン・空調・冷蔵）をコストプール化したABCで配賦。電力多消費品目の採算を可視化。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">大規模（電力多消費業種）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">Before：間接費に埋没。After：BEMS連携で設備別にリアルタイム計測。原価・省エネ・契約電力最適化を一体運用。</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">※上記は精度向上の方向性を示す目安であり、特定の削減額や成果を保証するものではありません。自社の電気代水準と上昇リスクは、<Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">シミュレーター</Link>での試算と併せて把握すると、配賦設計の優先度判断に役立ちます。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">原価計算基準（企業会計原則）は管理会計の基本ルールですが、ABCは公式ルールではなく実務の選択肢です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業庁「原価管理ガイド」や、日本管理会計学会の実務事例集が導入時の参考になります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電気料金そのものの仕組み（とくに変動の大きい燃料費調整額）を理解しておくと、配賦すべき総額の構造が把握しやすくなります。詳しくは<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>を参照してください。省エネ法・エネルギー使用量の把握は資源エネルギー庁、原価計算の枠組みは原価計算基準が一次情報になります。本ページの数値・目安はこれらの公的資料・実務ガイドから整理したものです（2025年時点）。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
          <div className="mt-4 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-base font-semibold text-slate-900">Q. {item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.mof.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">財務省</a></li>
            <li><a href="https://www.chusho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業庁</a></li>
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁（省エネ法関連）</a></li>
            <li><a href="https://pps-net.org/unit" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力ネット 電気料金単価一覧（pps-net.org/unit）</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/electricity-cost-account-classification", title: "電気代の勘定科目", description: "部門配賦と月次処理" },
              { href: "/invoice-system-electricity", title: "インボイス制度と電気代", description: "仕入税額控除の扱い" },
              { href: "/battery-solar-depreciation", title: "蓄電池・太陽光の減価償却", description: "耐用年数と税制優遇" },
              { href: "/articles/sme-guide", title: "中小企業・小規模事業者向け", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/accounting-tax", title: "電気代の経理・税務", description: "このカテゴリの記事一覧を見る" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算する" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="このテーマの理解を深めたら、シミュレーターで自社の電気料金リスクを確認しましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/accounting-tax", label: "電気代の経理・税務の他の記事を読む" },
            ]}
          />
        </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

      </main>
    </>
  );
}
