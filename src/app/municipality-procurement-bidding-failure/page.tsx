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


const pageTitle = "自治体電力入札が不調になったときの対応ガイド｜近年増える不落への実務";
const pageDescription =
  "電力入札の不調・不落が増加する中、自治体担当者が直面する随意契約移行・再入札・最終保障供給回避の実務手順を解説。地方自治法234条の適用要件、議会報告のポイント、他自治体の対応事例もまとめています。";
const pageUrl = "https://simulator.eic-jp.org/municipality-procurement-bidding-failure";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自治体 電力入札 不調",
    "入札不落 対応",
    "随意契約 電力",
    "自治体 電力調達",
    "地方自治法234条",
    "最終保障供給 自治体",
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

const steps = [
  {
    step: "STEP 1",
    title: "不調・不落の確認と記録",
    desc: "入札参加者ゼロ、または予定価格超過を確認。開札調書に不調理由を明記し、契約課・財政課へ速報する。",
  },
  {
    step: "STEP 2",
    title: "現行供給事業者への継続供給打診",
    desc: "現在の供給事業者に対し、暫定的な継続供給が可能かヒアリング。供給条件（単価・期間）を文書で確認する。",
  },
  {
    step: "STEP 3",
    title: "地方自治法234条に基づく随意契約の検討",
    desc: "競争に適しない場合（不落後再入札でも成立しない場合）は随意契約が可能。法令根拠と見積書取得先（1者以上）を整理する。",
  },
  {
    step: "STEP 4",
    title: "見積合わせ・価格交渉",
    desc: "複数社へ見積依頼（可能な範囲で）。近隣自治体の契約単価や電力市況を参考に価格の妥当性を確認する。",
  },
  {
    step: "STEP 5",
    title: "契約手続き・議会報告",
    desc: "随意契約理由書を作成し、内部決裁を取得。議会への報告基準額を超える場合は議決または委員会報告が必要。",
  },
  {
    step: "STEP 6",
    title: "次回入札への改善策立案",
    desc: "入札仕様の見直し（電力量の分割発注、複数年契約、変動料金条件の緩和）を検討し、次年度入札計画を策定する。",
  },
];

const comparisonRows = [
  {
    situation: "1回目入札で不調",
    legalBasis: "自治法施行令167条の2第1項第2号",
    action: "再入札（条件変更可）または随意契約",
    note: "再入札でも不調の場合は随意契約へ移行が一般的",
  },
  {
    situation: "再入札でも不調",
    legalBasis: "同上（競争に適しない場合）",
    action: "1者随意契約",
    note: "見積合わせは1者でも可。理由書必須",
  },
  {
    situation: "供給事業者が1社のみ",
    legalBasis: "同上（競争相手がいない）",
    action: "随意契約（特命）",
    note: "独占・寡占エリアや離島等で発生しやすい",
  },
  {
    situation: "緊急（供給切れが迫る）",
    legalBasis: "自治法施行令167条の2第1項第5号（緊急の必要）",
    action: "緊急随意契約",
    note: "事後の議会説明と随契理由書が必須",
  },
];

export default function MunicipalityProcurementBiddingFailurePage() {
  return (
    <>
      <ArticleJsonLd
        headline="自治体電力入札が不調になったときの対応ガイド｜近年増える不落への実務"
        description="電力入札の不調・不落が増加する中、自治体担当者が直面する随意契約移行・再入札・最終保障供給回避の実務手順を解説。地方自治法234条の適用要件、議会報告のポイント、他自治体の対応事例もまとめています。"
        url="https://simulator.eic-jp.org/municipality-procurement-bidding-failure"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "自治体電力入札が不調になったときの対応ガイド" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/municipality" className="underline-offset-2 hover:underline">自治体の電力契約</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">入札不調の対応</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          自治体電力入札が不調になったときの対応ガイド
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-600">近年増える不落への実務対応</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力市場の高止まりや新電力の撤退を背景に、自治体の電力調達入札が「不調（不落）」となるケースが急増しています。
          入札不調は単なる調達の失敗ではなく、最終保障供給への移行リスク、予算超過、議会対応など連鎖的な課題をはらみます。
          本ページでは財政・総務・施設管理担当者が迷わず動けるよう、法的根拠から実務手順・議会説明の骨子までを体系的に解説します。
        </p>
      </header>

      {/* 課題の背景 */}
      <section className="mt-6 space-y-4">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ今、入札不調が増えているのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年以降、ロシアによるウクライナ侵攻、LNG調達難、円安の同時発生により、日本の電力市場は構造的な高コスト時代へ突入しました。
            一方で多くの自治体の予定価格は旧来の市場環境を前提とした単価設定のままであったため、
            市場単価が予定価格を上回る「予定価格超過不落」が頻発しています。
            さらに新電力各社の自治体向け入札からの撤退により「参加者ゼロの不成立」も珍しくありません。
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電力市況の上昇で予定価格が市場実勢と乖離</li>
            <li>新電力各社が固定価格入札から撤退（スポット連動型のみ提示）</li>
            <li>離島・過疎地域ではそもそも入札参加者が1社以下</li>
            <li>複数年契約の仕様が事業者のリスクヘッジと合わない</li>
          </ul>
        </section>

        {/* 法的根拠 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法的根拠：地方自治法と施行令の整理</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地方自治法第234条は、契約の原則として一般競争入札を定めつつ、
            「政令で定める場合においては指名競争入札・随意契約・せり売りによることができる」と規定しています。
            入札不調後の随意契約は、地方自治法施行令第167条の2第1項第2号（競争入札に適しない場合）または
            第5号（緊急の必要）が根拠となります。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">重要：随意契約の要件</p>
            <p className="mt-1 text-sm leading-6 text-amber-700">
              随意契約を締結するには「競争に付することが不利と認められるとき」の事実認定が必要です。
              単に「入札が面倒」「高くなりたくない」は要件を満たしません。
              不調の客観的事実（開札調書・参加者ゼロの記録）を必ず保存してください。
            </p>
          </div>
        </section>

        {/* 実務フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">入札不調後の実務フロー</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            不調が確定してから次の契約締結までに自治体担当者が行う6つのステップを示します。
            供給切れまでの日数が短い場合はSTEP 2と3を並行して進めてください。
          </p>
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

        {/* 比較表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">状況別：入札不調後の対応方針と法的根拠</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            不調の状況によって適用する法令根拠と対応が異なります。下表で自団体の状況に合った対応を確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">状況</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">法的根拠</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">対応方針</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">留意点</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{row.situation}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.legalBasis}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.action}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 最終保障供給回避 */}
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給に入ってしまう前に</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            入札不調後に契約締結が間に合わない場合、自動的に<Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給</Link>（最終保障料金）へ移行します。
            最終保障供給の単価は標準的な低圧契約と比べて大幅に高く、公共施設の電気代を押し上げる要因となります。
            契約満了の90日前には入札スケジュールを見直し、不調リスクをあらかじめ財政担当に伝えてください。
          </p>
          <p className="mt-2 text-sm text-amber-800">
            詳細は{" "}
            <Link href="/last-resort-supply-emergency-response" className="underline underline-offset-2 hover:text-amber-900">
              最終保障供給に入りそうなときの対応手順
            </Link>{" "}
            を参照してください。
          </p>
        </section>

        {/* 議会・住民への説明ポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">議会・住民への説明ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            随意契約への移行は、適切に説明しなければ「競争回避」との批判を受ける可能性があります。
            以下の骨子で説明資料を構成することを推奨します。
          </p>
          <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold">入札不調の客観的事実</span>
              ：入札回数・参加者数・不調理由（予定価格超過 or 参加者ゼロ）を数値で示す
            </li>
            <li>
              <span className="font-semibold">市場環境の変化</span>
              ：電力市況の推移グラフ（JEPXスポット価格等）を添付し、構造的要因を説明
            </li>
            <li>
              <span className="font-semibold">随意契約の法的根拠</span>
              ：地方自治法施行令167条の2該当号を明示
            </li>
            <li>
              <span className="font-semibold">価格の妥当性</span>
              ：近隣自治体の契約単価比較、見積合わせの実施結果
            </li>
            <li>
              <span className="font-semibold">再発防止策</span>
              ：次回入札に向けた仕様改善計画（分割発注、変動制条件の検討等）
            </li>
          </ol>
        </section>

        {/* 規模別対応 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">規模別の対応チェックポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            政令市・中核市・一般市・町村では、入札不調時に動かせるリソースと制約が異なります。
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-indigo-700">政令市・中核市：</span>
              専任の入札・契約担当部署あり。複数年・分割発注の設計変更を内部で完結できる。
              共同購入（都道府県グループへの参加）も検討可能。
            </li>
            <li>
              <span className="font-semibold text-indigo-700">一般市（人口5万人以上）：</span>
              契約課と施設担当が分かれているケースが多い。不調後の調整役（コーディネーター）を明確にすることが重要。
            </li>
            <li>
              <span className="font-semibold text-indigo-700">一般市・町村（小規模）：</span>
              専任担当者がいない場合、都道府県や近隣市の前例を参照して随契理由書を作成する。
              一部広域連合経由の共同調達が有効。
            </li>
          </ul>
        </section>

        {/* 参考事例 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">他自治体の参考事例</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">中規模市（人口10万人規模）：</span>
            年間電力使用量1,000万kWhの一般競争入札が不調となり、随意契約で旧契約事業者と単年度契約を締結。
            翌年度は仕様を3エリアに分割し再入札した結果、2社から入札参加を得て契約が成立した。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">町村（人口2万人規模）：</span>
            電力供給可能な事業者が実質1社のみの地域で、毎年度特命随意契約を実施。
            包括外部監査で契約の適正性を確認し、指摘なし。見積書の取得と理由書の充実で対応。
          </p>
        </section>

        {/* 判断に迷うポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">判断に迷うポイント→専門家への相談を</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            随意契約の理由書作成・予定価格の見直し・分割発注設計など、内部対応が難しい場合は
            エネルギー調達の専門家への相談をご検討ください。
            シミュレーターを活用して自団体の電力コスト水準を把握した上でご相談いただくとスムーズです。
          </p>
          <p className="mt-2 text-sm text-sky-700">
            <Link href="/contact" className="underline underline-offset-2 hover:text-sky-900">
              お問い合わせはこちら
            </Link>
          </p>
        </section>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/municipality-procurement-methods",
              title: "自治体電力調達の入札実務｜一般競争・指名競争・随意契約の使い分け",
              description: "入札方式の基本から使い分け判断まで体系的に解説します。",
            },
            {
              href: "/last-resort-supply-emergency-response",
              title: "最終保障供給に入りそうなときの対応手順",
              description: "最終保障供給への移行リスクを回避するための実務フローを解説。",
            },
            {
              href: "/explaining-in-municipality",
              title: "自治体庁内で電力契約見直しを説明するとき",
              description: "財政・議会・首長への説明資料作成のポイントをまとめています。",
            },
            {
              href: "/articles/municipality",
              title: "自治体・公共向け記事一覧",
              description: "自治体の電力調達に関する記事をカテゴリでまとめています。",
            },
            {
              href: "/subsidies-overview",
              title: "法人向け電力・省エネ補助金まとめ",
              description: "入札不調後の省エネ投資検討時に活用できる主要補助制度を横断比較。",
            },
            {
              href: "/executive-business-continuity-risk",
              title: "電気代高騰と事業継続リスク",
              description: "電力調達リスクをBCPと財務リスク管理の視点で整理します。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自団体の電力コストを把握する"
          description="入札単価の妥当性確認や随意契約時の参考値として、シミュレーターで電力コストを試算できます。お問い合わせもお気軽にどうぞ。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/contact", label: "専門家に相談する" },
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
