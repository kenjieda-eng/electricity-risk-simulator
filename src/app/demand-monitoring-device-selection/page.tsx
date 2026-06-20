import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "デマンド監視装置の選び方｜単機能・クラウド連携・警報システムの比較";
const pageDescription =
  "契約電力の超過防止に使うデマンド監視装置（デマンドコントローラー）の種類と、警報型・制御型・クラウド型の比較、高圧/低圧別・規模別の選び方、設置要件、BEMS連携、補助金活用まで実務目線で整理します。数値は前提を置いた目安です。";
const pageUrl = "https://simulator.eic-jp.org/demand-monitoring-device-selection";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "デマンド監視", "デマンドコントローラー", "契約電力削減", "ピークカット", "警報型 制御型"],
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
    images: [{ url: "/api/og/energy-dx", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/energy-dx"],
  },
};

const faqItems = [
  {
    question: "デマンド監視装置とは何をする装置ですか？",
    answer:
      "デマンド監視装置（デマンドコントローラー）は、30分単位で電力需要を計測し、契約電力を超過しそうなときに警報を出したり、空調・生産設備に制御信号を出してピークを抑えたりする装置です。高圧・特別高圧の契約電力（最大需要電力）は、過去1年間の各月の最大デマンドの最大値で決まるため、ピークを一度でも超えると以後1年間の基本料金が上がります。これを未然に防ぐのがデマンド監視装置の役割です（出典: 省エネルギーセンター / 資源エネルギー庁 等から整理・2025年時点）。",
  },
  {
    question: "警報型と制御型はどう違いますか？",
    answer:
      "警報型は、デマンドが目標値に近づくとブザーやランプ、メール・LINE等で警報を出し、人が手動で設備を止める方式です。安価で導入しやすい反面、対応する人が常駐していないと効果が出ません。制御型は、警報に加えて空調・照明・生産設備などに自動で制御信号を出し、人手を介さずにピークを抑える方式です。人手不足の現場や夜間・休日の無人運転がある現場では制御型が有効ですが、制御対象設備の運用に支障が出ないよう優先順位設定が重要です（出典: 省エネルギーセンター / メーカー一般仕様から整理・2025年時点）。",
  },
  {
    question: "クラウド型を選ぶメリットは何ですか？",
    answer:
      "クラウド型は、計測データをクラウドに蓄積し、複数拠点を統合管理できる点が最大のメリットです。スマートフォンやPCからどこでも需要状況を確認でき、AI需要予測やメール・LINE通知、CSV/API連携によるBEMS・EMSとのデータ連携も可能です。本社で多拠点のデマンドを一元監視したい企業や、データを分析して省エネ施策につなげたい企業に向きます。一方、初期費用に加えて月額料金（クラウド利用料）が継続的に発生する点は、ランニングコストとして見込む必要があります。",
  },
  {
    question: "高圧と低圧で選ぶ装置は違いますか？",
    answer:
      "違います。高圧（契約電力50kW以上）はデマンド契約のため、契約電力の超過が基本料金に直結し、デマンド監視装置の費用対効果が出やすい区分です。一般的にこの区分が主な導入対象になります。低圧の中でも『低圧電力』はデマンド的な料金体系を持つ場合があり、簡易な監視が有効なケースがあります。一方『低圧電灯』など小規模契約では効果が限定的なことが多く、まずは契約区分と料金体系を確認したうえで装置の要否を判断します（出典: 省エネルギーセンター / 資源エネルギー庁 等から整理・2025年時点）。",
  },
  {
    question: "デマンド監視装置でどのくらい契約電力を削減できますか？",
    answer:
      "現場のピークの出方と運用次第ですが、ピークカットによって最大需要を抑えられれば、契約電力（基本料金）の引き下げにつながります。一般に、ピークが特定の時間帯や設備に集中している現場ほど削減余地が大きく、見える化と運用改善だけでも一定の効果が見込めます。制御型で自動的にピークを抑えれば、人手に頼らず安定的に削減できます。削減幅は現場ごとに大きく異なるため、過去のデマンド実績データを基に保守的に見積もるのが堅実です（出典: 省エネルギーセンター 等から整理・2025年時点）。",
  },
  {
    question: "設置にあたって必要な要件や工事は何ですか？",
    answer:
      "一般的には、受変電設備（キュービクル）の計器用変成器（CT・VT）からパルス信号や計測値を取り込み、デマンド監視装置に接続します。設置には電気工事士による工事が必要で、停電を伴う作業が発生する場合もあります。クラウド型では通信回線（携帯回線・LAN等）の確保が、制御型では空調・生産設備側に制御を受け入れる仕組み（外部接点・通信インターフェース）が必要です。既設設備の仕様によって追加工事の範囲が変わるため、事前に現地調査を行うのが標準です（出典: メーカー一般仕様 / 省エネルギーセンター 等から整理・2025年時点）。",
  },
  {
    question: "デマンド監視装置は補助金の対象になりますか？",
    answer:
      "なり得ます。省エネ補助金（資源エネルギー庁・SIIが執行）や中小企業向けのIT導入補助金等で、デマンド監視・制御に関わる設備が対象になる場合があります。補助率は1/2〜2/3が一般的ですが、対象設備・要件・公募時期は制度ごとに異なり、年度で変わります。BEMSと一体で導入する場合はより大きな補助の枠組みに乗せられることもあります。採択・交付決定が前提のため、補助なしの場合の費用対効果も併せて確認しておくのが堅実です（出典: SII / 資源エネルギー庁 / 中小企業庁 等から整理・2025年時点）。",
  },
  {
    question: "装置選定や契約電力の見直しはどこに相談すればよいですか？",
    answer:
      "デマンド監視装置の選定は、契約区分・料金体系、現場のピークの出方、制御対象設備の運用制約など、複数の要素を踏まえた判断が必要です。まずシミュレーターで自社の電気料金と契約電力の負担感を確認し、装置の種類選定・BEMS連携・補助金活用を一体で設計するには、電力契約と省エネ実務を理解した中立的な専門家に相談するのが安全です。装置導入と並行して電力契約そのものの見直しを行うことで、コスト削減効果を高められる場合があります。",
  },
];

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
          { name: "エネルギーマネジメント・DX", url: "https://simulator.eic-jp.org/articles/energy-dx" },
          { name: "デマンド監視装置の選び方" },
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
          <Link href="/articles/energy-dx" className="underline-offset-2 hover:underline">エネルギーマネジメント・DX</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">デマンド監視装置の選び方</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">デマンド監視装置の選び方｜単機能・クラウド連携・警報システムの比較</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">契約電力の超過防止に使うデマンド監視装置の種類と、警報型・制御型・クラウド型の比較、高圧/低圧別・規模別の選び方、設置要件、BEMS連携、補助金活用まで実務目線で整理します。数値は前提を置いた目安です。</p>
          <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>デマンド監視装置の役割と契約電力との関係</li>
              <li>警報型・制御型・クラウド型のタイプ別比較</li>
              <li>選定のチェックポイントと機能別比較表</li>
              <li>高圧/低圧別・規模別の選定例</li>
              <li>設置要件・BEMS連携・補助金活用・導入の落とし穴</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">デマンド監視装置とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド監視装置は、30分単位の電力需要を測定し、契約電力を超過しそうなときに警報を出したり、制御信号を出したりする装置です。契約電力超過はペナルティ的な料金改定につながるため、多くの工場・ビルで導入されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">機能は単純な警報ブザーから、AI予測・クラウド蓄積・メール通知・空調自動制御まで幅広いです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">高圧・特別高圧で採用される実量制（デマンド制）では、契約電力が過去1年間の各月の最大デマンド（30分ごとの平均需要電力の最大値）の最大値で決まります。一度ピークを更新すると、その値が以後1年間の契約電力となり、基本料金が上がってしまいます。だからこそ、ピークを未然に抑えるデマンド監視装置の役割が重要になります（出典: 省エネルギーセンター / 資源エネルギー庁 等から整理・2025年時点）。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約電力とデマンドの基礎</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電気料金の基本料金は『契約電力 × 基本料金単価 × 力率割引』で決まります。契約電力が下がれば基本料金も下がるため、デマンド管理によるピーク抑制は、電力量（kWh）の削減とは別に、基本料金の削減という効果を持ちます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド監視装置は、30分の計測時限の途中で『このペースで使い続けると目標値（デマンド目標）を超える』と予測したときに警報・制御を行います。つまり、時限が終わる前に手を打つことでピークの確定を防ぐ仕組みです。目標値を厳しく設定するほど削減効果は大きくなりますが、警報・制御の頻度が増えて現場運用の負担が高まるため、現場のピークの出方に合わせた設定が肝心です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">燃料費調整や再エネ賦課金など料金全体の構造については、{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整制度の解説</Link>
              も併せて参照してください。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">警報型・制御型・クラウド型のタイプ別比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド監視装置は、機能の観点から大きく3タイプに分けられます。</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-semibold">警報型：</span>デマンドが目標値に近づくとブザー・ランプ・通知で知らせ、人が手動で設備を止める。安価で導入しやすいが、対応する人がいないと効果が出ない。</li>
              <li><span className="font-semibold">制御型：</span>警報に加え、空調・照明・生産設備へ自動で制御信号を出してピークを抑える。人手を介さず安定的に削減できるが、制御対象の優先順位設計が必要。</li>
              <li><span className="font-semibold">クラウド型：</span>計測データをクラウドに蓄積し、多拠点統合・遠隔監視・AI予測・BEMS連携が可能。月額料金が継続発生する。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これらは排他的ではなく、クラウド型でかつ制御機能を持つ製品もあります。自社の人員体制（常駐者の有無）、拠点数、データ活用志向に応じて組み合わせを選びます（出典: メーカー一般仕様 / 省エネルギーセンター 等から整理・2025年時点）。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">単機能型とクラウド連携型の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">単機能型は、装置単体で予測計算と警報を行う方式で、導入費用は10〜30万円程度と安価です。中小工場・店舗に向いています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">クラウド連携型は、データをクラウドに蓄積し、複数拠点を統合管理、他システムとの連携（BEMS・EMS）が可能です。導入費用は数十万〜数百万円、月額料金が発生します。複数拠点持ち・データ活用志向の企業向けです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">選定では、初期費用だけでなく、月額料金・保守費・通信費を含めた数年間の総保有コスト（TCO）で比較することが重要です。単機能型は初期費用が安い一方で多拠点管理ができず、拠点が増えると管理工数がかさみます。クラウド型は月額が発生する反面、多拠点を一元管理でき、データ活用による追加の省エネ施策につなげやすい構造です。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">選定のチェックポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①予測精度（何分前に警報が出るか）、②外部制御連携（空調・生産設備の自動制御可否）、③複数拠点統合可否、④オープンデータ形式（CSV・API）の4点を確認します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">工場の場合は生産ライン制御との連携が可否が重要で、オフィスビルの場合は空調制御との連携が優先度高い傾向があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これに加えて、⑤通知手段（ブザー・メール・LINE・スマホアプリ）、⑥データの保存期間と分析機能、⑦既設のキュービクル・計測機器との接続互換性、⑧サポート・保守体制、も確認しておくと選定の精度が上がります。とくに⑦は追加工事の有無に直結するため、現地調査の段階で受変電設備の仕様を確認することが重要です。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">機能別比較表</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【ベーシック型（10〜30万円）】：30分デマンド計測、予測警報、パルス出力。単体運用、複数拠点統合不可。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【クラウド連携型（50〜150万円＋月額1〜3万円）】：複数拠点統合、AI需要予測、メール・LINE通知、API連携。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【フルBEMS統合型（300万円〜）】：空調・照明の自動制御、需給調整市場連携、AIピーク最適化、詳細レポート。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自社の契約規模・拠点数・運用担当者の人数で選定範囲が決まります。</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 bg-slate-50 text-slate-700">
                    <th className="p-2 font-semibold">タイプ</th>
                    <th className="p-2 font-semibold">費用目安</th>
                    <th className="p-2 font-semibold">自動制御</th>
                    <th className="p-2 font-semibold">多拠点統合</th>
                    <th className="p-2 font-semibold">向く事業者</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-200"><td className="p-2">ベーシック型</td><td className="p-2">10〜30万円</td><td className="p-2">×（警報のみ）</td><td className="p-2">×</td><td className="p-2">中小工場・店舗</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-2">クラウド連携型</td><td className="p-2">50〜150万円＋月額</td><td className="p-2">△（製品による）</td><td className="p-2">○</td><td className="p-2">多拠点・データ活用志向</td></tr>
                  <tr><td className="p-2">フルBEMS統合型</td><td className="p-2">300万円〜</td><td className="p-2">○</td><td className="p-2">○</td><td className="p-2">大規模工場・ビル</td></tr>
                </tbody>
              </table>
              <p className="mt-2 text-xs text-slate-500">※ 費用はメーカー一般仕様から整理した目安（2025年時点）。実際の費用は構成・拠点数で変動します。</p>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">高圧/低圧別・規模別の選定例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約区分と事業規模によって、現実的な装置の選択肢は変わります。以下は前提を置いたシナリオ例です。</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                <p className="font-semibold text-slate-900">小規模（高圧50〜100kW・1拠点）</p>
                <p className="mt-2">ベーシックな警報型から開始。常駐者がいればまず手動対応で効果を確認。</p>
                <p className="mt-2">投資を抑えつつデマンド管理の習慣を定着させる段階。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                <p className="font-semibold text-slate-900">中規模（高圧数百kW・無人運転あり）</p>
                <p className="mt-2">制御型で空調等を自動制御。夜間・休日の無人時でもピークを抑制。</p>
                <p className="mt-2">制御対象の優先順位を設計し、生産・快適性への影響を最小化。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                <p className="font-semibold text-slate-900">大規模・多拠点（特別高圧含む）</p>
                <p className="mt-2">クラウド型／フルBEMS統合で多拠点を一元監視・分析。</p>
                <p className="mt-2">AI予測・需給調整市場連携も視野に、全社で最適化。</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">低圧電灯など小規模契約では、デマンド管理の費用対効果が出にくいことが多いため、まずは契約区分と料金体系を確認し、装置導入の要否そのものを見極めることが先決です（出典: 省エネルギーセンター / 資源エネルギー庁 等から整理・2025年時点）。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">設置要件と工事の流れ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">一般的な設置の流れは、（1）現地調査（受変電設備・計測機器・通信環境の確認）、（2）装置・センサーの設置工事、（3）デマンド目標値・制御設定の初期設定、（4）試運転・チューニング、です。受変電設備（キュービクル）の計器用変成器（CT・VT）からパルス信号や計測値を取り込み、装置に接続します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">工事は電気工事士による施工が必要で、停電を伴う作業が発生する場合があります。クラウド型では携帯回線やLANなどの通信回線の確保が、制御型では空調・生産設備側に制御を受け入れる外部接点や通信インターフェースが必要です。既設設備の仕様により追加工事の範囲が変わるため、事前の現地調査が重要です（出典: メーカー一般仕様 / 省エネルギーセンター 等から整理・2025年時点）。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BEMS・エネマネシステムとの連携</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド監視装置は、それ単体でも契約電力の削減に役立ちますが、BEMS（ビルエネルギー管理システム）やFEMS（工場エネルギー管理システム）と連携させることで、ピーク管理にとどまらない全体最適が可能になります。30分値の計測データを見える化・分析の基盤として活用し、空調・照明・生産設備の運用改善や自動制御につなげる流れです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">連携の前提として、装置がCSV・API等のオープンなデータ形式に対応していることが重要です。将来BEMS導入を検討している場合は、データ連携の拡張性を選定基準に加えておくと、後々の投資が無駄になりません。BEMS/FEMSの全体像は{" "}
              <Link href="/bems-fems-ems-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">BEMS/FEMS/EMSの違い</Link>
              、AIによる最適化は{" "}
              <Link href="/ai-electricity-optimization" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">AIによる電力最適化の実務</Link>
              も参考になります。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助金の活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド監視・制御に関わる設備は、省エネ補助金（資源エネルギー庁・SIIが執行）や中小企業向けのIT導入補助金等の対象になる場合があります。補助率は1/2〜2/3が一般的です。BEMSと一体で導入する場合は、より大きな補助の枠組みに乗せられることもあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">補助金は対象設備・要件・公募時期が制度ごと・年度ごとに異なります。採択・交付決定が前提のため、補助なしの場合の費用対効果も併せて確認しておくのが堅実です。制度の詳細は{" "}
              <Link href="/subsidy-bemms-fems" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">BEMS/FEMS補助金の解説</Link>
              、{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              を参照してください（出典: SII / 資源エネルギー庁 / 中小企業庁 等から整理・2025年時点）。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入でよくある落とし穴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド監視装置の導入で効果が出ないケースには、共通する落とし穴があります。</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-semibold">警報を放置：</span>警報型を入れても、対応する人がいない・無人時間帯があると効果が出ない。人員体制に合わせて制御型を検討する。</li>
              <li><span className="font-semibold">目標値の設定不備：</span>目標値が緩すぎると削減できず、厳しすぎると現場運用に支障が出る。実績データを基に適切に設定し、季節ごとに見直す。</li>
              <li><span className="font-semibold">制御対象の優先順位未設計：</span>制御型で生産設備を止めると業務に影響する。空調から優先的に制御するなど、影響の小さい順に設計する。</li>
              <li><span className="font-semibold">月額料金の見落とし：</span>クラウド型は初期費用だけでなく月額の累計を費用対効果に織り込む。</li>
              <li><span className="font-semibold">契約電力の見直し漏れ：</span>装置でピークを抑えられたら、実態に合わせて契約電力を引き下げる。装置導入だけでは基本料金は自動で下がらない。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">とくに最後の点は重要で、デマンドを抑えても契約電力を見直さなければ基本料金は下がりません。装置導入と契約見直しはセットで進めます（出典: 省エネルギーセンター 等から整理・2025年時点）。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド監視装置の導入には、省エネ補助金（資源エネルギー庁）や中小企業向けのIT導入補助金が活用可能です。補助率は1/2〜2/3が一般的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">省エネ法定期報告では、デマンド管理の実績（契約電力推移）も記載事項となるため、装置導入と社内報告体制を一体で整備します。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
            <div className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">Q. {item.question}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">A. {item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.enecho.meti.go.jp/category/saving_and_new/saving/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 省エネ法</a></li>
            <li><a href="https://sii.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII（環境共創イニシアチブ）省エネ補助金</a></li>
            <li><a href="https://pps-net.org/unit" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力ネット（電力単価・産業別エネルギーデータ）</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイト・メーカー一般仕様を参考に編集しています。掲載する費用・補助率・削減効果は前提を置いた目安であり、最新の制度・数値・製品仕様は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/bems-fems-ems-overview", title: "BEMS/FEMS/EMSの違い", description: "目的と選定基準" },
              { href: "/ai-electricity-optimization", title: "AIによる電力最適化の実務", description: "需要予測と自動制御" },
              { href: "/smart-meter-data-utilization", title: "スマートメーターデータの業務活用", description: "30分値データの分析" },
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/energy-dx", label: "エネルギーマネジメント・DXの他の記事を読む" },
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
