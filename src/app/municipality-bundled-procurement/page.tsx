import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["municipality"];


const pageTitle = "公共施設の電力一括調達（バンドリング）の進め方｜自治体向け";
const pageDescription =
  "複数の公共施設の電力契約を一括で調達するバンドリング手法について、メリット・手順・注意点を整理します。";
const pageUrl = "https://simulator.eic-jp.org/municipality-bundled-procurement";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "公共施設 電力 一括調達",
    "自治体 バンドリング",
    "公共施設 電力 まとめ契約",
    "自治体 電力 スケールメリット",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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

const merits = [
  {
    title: "調達単価の引き下げ",
    desc: "総使用量が増えるほど事業者にとって供給の採算が取りやすくなり、競争が生まれやすくなります。スケールメリットにより単価が5〜15%程度改善する事例もあります。",
  },
  {
    title: "入札事務の効率化",
    desc: "施設ごとに別々に入札していた手続きを一本化できるため、財政・総務担当者の工数を大幅に削減できます。仕様書・公告文・契約書の標準化も進めやすくなります。",
  },
  {
    title: "条件の統一と管理の一元化",
    desc: "供給条件・価格形式・契約期間を統一することで、施設ごとのバラつきをなくし、比較・管理がしやすくなります。月次の請求管理も一元化できます。",
  },
  {
    title: "入札不調リスクの低減",
    desc: "使用量規模が大きくなるほど事業者の参入意欲が高まり、不調になるリスクが下がります。小規模施設が単独で入札しても応札者ゼロになるケースでも、まとめることで解決できます。",
  },
];

const steps = [
  {
    step: "STEP 1",
    title: "施設リストの作成と使用実績の整備",
    desc: "全公共施設（庁舎・学校・体育館・公民館等）の使用量（kWh）・電圧区分（特別高圧・高圧・低圧）・需要番号・契約満了日を一覧にまとめます。使用実績は直近12か月分を取得してください。",
  },
  {
    step: "STEP 2",
    title: "一括調達の対象施設の選定とグルーピング",
    desc: "すべての施設を一まとめにするのが理想ですが、電圧区分・供給エリア・契約時期・指定管理の有無によってグループ分けが必要な場合があります。最初から全施設をまとめず、高圧以上を先行させる方法も有効です。",
  },
  {
    step: "STEP 3",
    title: "入札仕様書の作成",
    desc: "一括調達の仕様書は個別入札より詳細になります。施設リスト・電圧区分ごとの使用量・価格形式・緊急時対応・施設ごとの供給開始日と終了日を明記します。分割発注・一部施設の随意契約への変更条件も記載してください。",
  },
  {
    step: "STEP 4",
    title: "入札の実施",
    desc: "一般競争入札を原則とし、参加資格（小売電気事業者登録・保証金・過去の供給実績等）を設定します。事業者説明会を設けることで質問を事前に集約でき、公告後の問い合わせ対応を減らせます。",
  },
  {
    step: "STEP 5",
    title: "契約締結と施設別管理",
    desc: "落札後は一括の契約書を締結しつつ、施設ごとの供給条件を別紙（施設明細書）で管理します。途中で施設が追加・削除された場合の対応ルールも契約書に盛り込んでおいてください。",
  },
];

const scaleRows = [
  {
    scale: "10施設未満（小規模）",
    totalKwh: "〜500万kWh/年",
    approach: "高圧以上を先行して一括。低圧は個別または小口随意契約",
    note: "まずは高圧施設（庁舎・学校）のみでバンドリングを試みる",
  },
  {
    scale: "10〜50施設（中規模）",
    totalKwh: "500万〜3,000万kWh/年",
    approach: "電圧区分・エリアでグルーピングして2〜3本の入札に集約",
    note: "担当者が管理できる範囲で分割。全施設統合は次フェーズで",
  },
  {
    scale: "50施設以上（大規模）",
    totalKwh: "3,000万kWh以上/年",
    approach: "電圧区分ごとに別入札。必要に応じて都道府県共同調達に参加",
    note: "大規模ほどスケールメリットが出やすい反面、不調時の影響も大きい",
  },
];

const cautions = [
  {
    title: "施設ごとの特殊要件への対応",
    desc: "病院・福祉施設など24時間対応が必要な施設や、太陽光発電が設置されている施設は特殊な供給条件が必要です。一括仕様書に組み込むと複雑化するため、別途契約とするほうが無難な場合があります。",
  },
  {
    title: "指定管理施設の取り扱い",
    desc: "指定管理者が電力契約の当事者となっている施設は、自治体主導の一括調達の対象外となる場合があります。協定書・仕様書の確認が必要です。",
  },
  {
    title: "一部施設が不調になった場合の対応",
    desc: "一括入札でも特定施設だけ応札なし・条件合致なしとなるケースがあります。一部施設を随意契約に切り出す手続きを事前に準備しておき、4月1日以降の供給空白が生じないよう対応してください。",
  },
];

export default function MunicipalityBundledProcurementPage() {
  return (
    <>
      <ArticleJsonLd
        headline="公共施設の電力一括調達（バンドリング）の進め方｜自治体向け"
        description="複数の公共施設の電力契約を一括で調達するバンドリング手法について、メリット・手順・注意点を整理します。"
        url="https://simulator.eic-jp.org/municipality-bundled-procurement"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "公共施設の電力一括調達（バンドリング）の進め方" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/municipality" className="underline-offset-2 hover:underline">自治体・公共向け</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電力一括調達（バンドリング）</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          公共施設の電力一括調達（バンドリング）の進め方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          施設ごとにバラバラに行われていた電力調達を一本化する「バンドリング（一括調達）」は、
          入札不調の増加とコスト上昇が続く現在、多くの自治体が注目している調達改善手法です。
          一括調達のメリット・進め方・規模別の考え方・注意点を実務担当者向けに整理します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* バンドリングとは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">バンドリング（一括調達）とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            バンドリングとは、複数の公共施設（庁舎・学校・体育館・公民館・図書館等）の電力契約をまとめて一つの入札・契約として調達する手法です。
            従来は施設ごと・担当課ごとに個別に電力契約を締結していた自治体が多く、
            それぞれの施設で毎年度入札を行う必要がありました。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            バンドリングを導入することで、調達量の増加によるスケールメリットと手続きの効率化が同時に期待できます。
            電力市場の高騰・入札不調の増加という環境下で、多くの自治体が一括調達の検討を始めています。
          </p>
        </section>

        {/* メリット */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一括調達の4つのメリット</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {merits.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-indigo-700">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 対象施設の選び方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一括調達の対象施設の選び方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            すべての施設を最初から一括にする必要はありません。以下の観点で優先順位をつけてください。
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold">使用量規模：</span>
              高圧・特別高圧施設（庁舎・学校・体育館）を優先。使用量が大きいほどスケールメリットが出やすい。
            </li>
            <li>
              <span className="font-semibold">契約時期の統一：</span>
              契約満了日がバラバラな施設をまとめるには、一部施設の契約満了を早める・繰り延べするなどの調整が必要。
              まずは満了日が近い施設をグループ化する方法が現実的です。
            </li>
            <li>
              <span className="font-semibold">施設特性のグルーピング：</span>
              電圧区分（高圧・低圧）と供給エリア（電力会社エリア）は同一グループ内で統一することが原則です。
              異なるエリアをまたぐ入札は対応できる事業者が限られます。
            </li>
            <li>
              <span className="font-semibold">指定管理・直営の区分：</span>
              指定管理施設は契約主体が異なる場合があるため、直営施設と分けて検討してください。
            </li>
          </ul>
        </section>

        {/* 5ステップ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一括調達の進め方：5ステップ</h2>
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

        {/* 規模別パターン */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">バンドリングの規模別パターン</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">規模</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">年間使用量目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">推奨アプローチ</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
                </tr>
              </thead>
              <tbody>
                {scaleRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-indigo-700">{row.scale}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.totalKwh}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.approach}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 注意点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一括調達の注意点</h2>
          <div className="mt-4 space-y-4">
            {cautions.map((item, i) => (
              <div key={i} className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-800">{i + 1}. {item.title}</p>
                <p className="mt-2 text-sm leading-6 text-amber-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：バンドリング導入の判断ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            一括調達は「すべての施設を一度にまとめる」ことが目標ではなく、
            「スケールメリットを活かしながら調達の安定性と効率化を実現する」ことが本質です。
            まずは高圧以上の主要施設から試行し、運用実績を積みながら対象施設を拡大していく段階的アプローチが現実的です。
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm leading-7 text-slate-700 sm:text-base">
            <li>全施設の使用量・電圧区分・契約満了日を一覧化することが第一歩</li>
            <li>高圧以上の主要施設を先行してバンドリングし、効果を検証する</li>
            <li>指定管理施設・特殊施設は個別に判断し無理にまとめない</li>
            <li>一部不調に備えた随意契約への移行手順をあらかじめ決めておく</li>
          </ul>
        </section>
      </section>

      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/municipality-procurement-methods",
              title: "自治体電力調達の入札実務",
              description: "一般競争・指名競争・随意契約の使い分けと入札仕様書作成のポイントを解説。",
            },
            {
              href: "/municipality-long-term-contract",
              title: "自治体の長期継続契約（債務負担行為）と電力契約の関係",
              description: "単年度予算の制約下で複数年契約を結ぶ仕組みと注意点を整理。",
            },
            {
              href: "/municipality-facility-management-package",
              title: "公共施設の包括管理委託と電力契約の関係",
              description: "包括管理委託に電力調達を組み込む場合の考え方と留意点。",
            },
            {
              href: "/municipality-designated-manager-electricity",
              title: "指定管理施設の電力契約は誰がどう見直すか",
              description: "指定管理者制度下の電力契約における自治体と管理者の役割分担を整理。",
            },
            {
              href: "/executive-multi-site-cost-management",
              title: "複数拠点の電力コスト一元管理フレームワーク",
              description: "多施設の電力費を効率的に管理するための体制と手順を解説。",
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="一括調達の効果を試算する"
          description="シミュレーターで現在の電力コストを把握し、バンドリング導入後の効果試算の参考にご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/articles/municipality", label: "自治体向け記事一覧を見る" },
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
