import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["review-points"];



const pageTitle =
  "法人の電力契約見直しチェックリスト｜見積依頼前に確認したいポイント";
const pageDescription =
  "法人の電力契約見直しを始めるとき、何から整理すべきかをチェックリスト形式で解説。契約情報の整理、請求書の確認項目、見積依頼前に揃えたい資料、社内で確認すべきポイントまで、実務に沿って一覧できます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電力契約 見直し チェックリスト",
    "電力契約 見直し 何から",
    "電気料金 契約見直し 準備",
    "見積依頼 前 確認項目",
    "法人 電力 契約更新 準備",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/business-electricity-contract-checklist",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-contract-checklist",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const contractInfoItems = [
  { label: "契約電力（kW）", note: "請求書や契約書に記載。基本料金の算定根拠になる。" },
  { label: "契約種別", note: "高圧・特別高圧・低圧のどれか。見積条件に直結する。" },
  { label: "契約期間と満了日", note: "更新時期を逃すと自動更新で1年延長されるケースがある。" },
  { label: "現在の電力会社名・プラン名", note: "比較先への説明や切替手続きに必要。" },
  { label: "中途解約条項の有無", note: "違約金や解約予告期間を事前に確認する。" },
  { label: "供給地点特定番号", note: "見積依頼時に求められることが多い。請求書に記載されている。" },
];

const billCheckItems = [
  { label: "基本料金", note: "契約電力と単価から算出。見積比較の基礎になる。" },
  { label: "電力量料金", note: "使用量×単価。時間帯別の設定がある場合もある。" },
  { label: "燃料費調整額", note: "燃料価格に連動して毎月変動。上限有無や算定式がプランごとに異なる。" },
  { label: "再エネ賦課金", note: "全需要家に一律適用。年度ごとに単価が改定される。" },
  { label: "市場価格調整額", note: "市場連動型プランの場合に加算される。有無の確認が重要。" },
  { label: "容量拠出金", note: "2024年度から新たに導入された制度負担。請求書への反映方法を確認する。" },
  { label: "力率割引・割増", note: "力率が高い（進み力率）と割引になる場合がある。" },
  { label: "月間使用量の推移", note: "直近12か月分を時系列で把握しておくと比較精度が上がる。" },
];

const documentsNeeded = [
  { label: "直近12か月分の請求書", note: "月ごとの使用量・請求額・契約電力の推移を把握する。" },
  { label: "現行の電力契約書", note: "契約期間、中途解約条件、自動更新条項を確認する。" },
  { label: "供給地点特定番号", note: "見積依頼先が供給条件を特定するために使う。" },
  { label: "建物・施設の概要", note: "用途、稼働時間帯、季節変動の有無など。見積精度に影響する。" },
  { label: "複数拠点がある場合は拠点一覧", note: "拠点ごとの契約条件を整理する。一括見積が可能な場合もある。" },
];

const internalCheckPoints = [
  { label: "見直しの目的を整理する", note: "コスト削減だけでなく、リスク低減・予算安定化・契約条件の改善など目的を明確にする。" },
  { label: "社内の意思決定フローを確認する", note: "承認者は誰か、稟議が必要か、決裁までの期間はどれくらいかを把握する。" },
  { label: "比較軸を事前にすり合わせる", note: "単価だけで判断するのか、契約条件・リスク・運用面も含めるのかを共有する。" },
  { label: "現行契約の満足点・不満点を整理する", note: "現行の良い点を見落としたまま切り替えると、運用面で後悔する場合がある。" },
  { label: "関係部署への事前共有", note: "経理・施設管理・経営企画など関係部署に見直し着手を伝える。" },
];

export default function BusinessElectricityContractChecklistPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電力契約見直しチェックリスト｜見積依頼前に確認したいポイント"
        description="法人の電力契約見直しを始めるとき、何から整理すべきかをチェックリスト形式で解説。契約情報の整理、請求書の確認項目、見積依頼前に揃えたい資料、社内で確認すべきポイントまで、実務に沿って一覧できます。"
        url="https://simulator.eic-jp.org/business-electricity-contract-checklist"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電力契約見直しチェックリスト" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">見直しチェックリスト</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電力契約見直しチェックリスト
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しを始めるとき、「何から手をつければよいか」は多くの法人担当者が最初に直面する課題です。見積依頼の前に現状を整理しておくことで、比較の精度が上がり、社内説明もスムーズに進めやすくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、契約見直しの準備段階で確認しておきたい項目をチェックリスト形式で整理しています。総務・経理・施設管理・経営企画・購買など、見直しに関わる担当者が実務の起点として使える内容です。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>契約見直しの前に整理しておきたい契約情報</li>
            <li>請求書で確認すべき項目と見方のポイント</li>
            <li>見積依頼前に揃えておきたい資料一覧</li>
            <li>社内で確認・共有しておくべき論点</li>
            <li>シミュレーターの活用タイミング</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人の電力契約見直しは何から始めればよいか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しは、見積を取る前の「現状整理」で成否が分かれることが少なくありません。現行契約の条件を正確に把握し、比較に必要な情報を揃えたうえで見積を依頼すると、提案内容の質が上がり、比較判断がしやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            逆に、現状整理が不十分なまま見積を取ると、条件がそろわず比較しづらい見積が届いたり、見積依頼のやりとりが何度も必要になるケースがあります。以下のチェックリストを使い、まず「自社の現状」を棚卸しすることから始めてみてください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まず整理したい契約情報
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積依頼先が条件を検討するために必要な基本情報です。契約書や請求書から確認できます。
          </p>
          <div className="mt-4 space-y-3">
            {contractInfoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
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
          <p className="mt-3 text-xs text-slate-500">
            契約書が手元にない場合は、現行の電力会社に問い合わせれば契約条件を確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            請求書で確認したい項目
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書には、見積比較や社内説明に使える情報が多く含まれています。以下の項目を直近12か月分確認しておくと、見積の前提条件をそろえやすくなります。請求書の読み方については{" "}
            <Link
              href="/how-to-read-electricity-bill"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金請求書の見方
            </Link>{" "}
            も参考にしてください。
          </p>
          <div className="mt-4 space-y-3">
            {billCheckItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
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
          <h2 className="text-xl font-semibold text-slate-900">
            見積依頼前に揃えておきたい資料
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積依頼を行う際に、以下の資料が揃っていると、提案の精度が上がり、比較作業もスムーズになります。見積書を受け取った後の確認については{" "}
            <Link
              href="/how-to-read-electricity-quote"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金見積書の見方
            </Link>{" "}
            で整理しています。
          </p>
          <div className="mt-4 space-y-3">
            {documentsNeeded.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
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
          <h2 className="text-xl font-semibold text-slate-900">
            社内で確認したいポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積を取る前に社内で確認・共有しておくことで、比較結果の報告や稟議がスムーズに進みます。社内説明の進め方については{" "}
            <Link
              href="/how-to-explain-electricity-cost-review-internally"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金見直しを社内で説明するときのポイント
            </Link>{" "}
            もあわせて確認してください。
          </p>
          <div className="mt-4 space-y-3">
            {internalCheckPoints.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
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
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターを使うときの考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーターは、現行契約の条件をもとに電気料金の上振れリスクを試算するツールです。見直しの準備段階と見積比較の段階、それぞれで異なる使い方ができます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">見直し前の現状把握</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                現行契約の条件でシミュレーションを行い、年間の上振れリスク幅を確認する。社内説明で「なぜ見直すのか」の根拠として使える。
              </p>
            </div>
            
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">見積比較時の判断補助</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                候補プランの条件でシミュレーションを行い、固定プランと市場連動プランの差分や、リスクシナリオ別の影響を比較する。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーターの操作方法は{" "}
            <Link
              href="/how-to"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              使い方ページ
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まとめ：見直しの準備で押さえたいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しは、見積を取る前の整理で判断の質が大きく変わります。以下の流れで進めると、比較から社内承認までスムーズに進めやすくなります。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約の基本情報を整理する</li>
            <li>請求書から比較に使う項目を確認する</li>
            <li>見積依頼に必要な資料を揃える</li>
            <li>社内で見直しの目的と比較軸を共有する</li>
            <li>シミュレーターで上振れリスクを試算する</li>
            <li>見積を取得し、条件・リスク・総額で比較する</li>
          </ol>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="チェックリストの各項目をさらに深掘りしたいときは、以下のページをあわせてご覧ください。"
          links={[
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目の意味と、見積比較に使うための確認ポイントを整理。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積書を受け取ったとき、どこを比較すればよいかを項目別に解説。",
            },
            {
              href: "/what-to-do-3-months-before-electricity-contract-renewal",
              title: "契約更新の3か月前にやること",
              description: "更新が近い法人向けに、時系列で具体的な準備手順を整理。",
            },
            {
              href: "/how-to-explain-electricity-cost-review-internally",
              title: "電気料金見直しを社内で説明するときのポイント",
              description: "稟議・上司説明で押さえたい論点構成と伝え方のポイント。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "単価以外に確認したい比較軸を整理。見積比較の精度を高める。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "見直しを始める最適な時期と判断基準を確認できる。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "見積比較の際のプラン選択判断に役立てる。",
            },
          ]}
        />

        <ContentCta
          heading="まず現状のリスクを確認する"
          description="チェックリストで整理した情報をもとに、現行契約の上振れリスクをシミュレーターで確認してみてください。見直しの必要性を数値で把握できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
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
