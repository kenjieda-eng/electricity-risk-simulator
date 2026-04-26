import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import DiagnosisClient from "./DiagnosisClient";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["diagnostic-tools"];

const PUBLISHED_AT = "2026-04-11";
const UPDATED_AT = "2026-04-26";

const FAQ_ITEMS = [
  {
    question: "診断結果はどの程度正確ですか？",
    answer:
      "簡易診断は方向性の把握を目的としており、正確な試算には実際の請求書データや見積もりが必要です。本ページの 10 項目は「見直し検討の優先度」を素早く可視化するためのもので、確定的なコスト削減幅を示すものではありません。詳細な数値は、シミュレーター（電気料金リスク アセスメント）と複数社見積もりを併用して確認してください。",
  },
  {
    question: "「中立な第三者によるリスク診断」とはどういう意味ですか？",
    answer:
      "本サイトは一般社団法人エネルギー情報センターが運営する非営利の情報発信メディアで、特定の小売電気事業者と契約紹介の業務提携を結んでいません。診断結果に基づく業者紹介や成果報酬モデルを採用していないため、利益相反のない立場でリスク評価を提供できます。節約コンサルや代理店ではなく、業界全体のリスク構造を踏まえた中立評価をお届けします。",
  },
  {
    question: "10 項目の診断はどの順番で確認すれば良いですか？",
    answer:
      "重要度「高」とラベリングされた項目（契約満了日が近い・大幅値上げ通知が届いた・最終保障供給に切り替わった等）から優先確認してください。1 つでも該当する場合は早急な見直しが必要です。重要度「中」が複数該当する場合は、まずシミュレーターで現契約の上振れリスクを定量化し、社内共有用の根拠資料を作成するフェーズに進むのが推奨です。",
  },
  {
    question: "燃料費調整・容量拠出金・市場連動の 3 つのリスクはどう違いますか？",
    answer:
      "燃料費調整は LNG・石炭・原油の輸入価格変動を毎月反映する制度コストで、月次で 5〜10 円/kWh の変動幅があります。容量拠出金は将来の供給力確保のための新コストで、2024 年度から 2028 年度にかけて段階的に増額（首都圏は最大 14,812 円/kW・年）されます。市場連動はプラン契約者のみが受ける単価変動で、JEPX 急騰時は瞬間的に 100 円/kWh 超になる可能性があります。3 リスクは相互に関連しますが計算式が異なるため、別々に試算する必要があります。",
  },
  {
    question: "他社の見積もり比較サービスとどう併用すれば良いですか？",
    answer:
      "本診断は「見直し着手の判断」のための前段階ツールです。診断で見直しが必要と判定された後に、複数の見積比較サービス（一括見積もりサイトや個別見積もり依頼）を併用するのが効率的な流れです。本サイトの「見積比較前チェック診断」記事で必要な事前情報を整理してから、外部の比較サービスへ進むと、得られる見積もりの精度が大幅に向上します。",
  },
];


const pageTitle =
  "法人向け電力契約見直し自己診断｜中立な第三者による電気料金リスク アセスメント";
const pageDescription =
  "電気代 リスク アセスメント を 10 項目の簡易チェックで実施。一般社団法人エネルギー情報センターが運営する中立な第三者評価ツールで、契約見直しの優先度・燃料費調整/容量拠出金/市場連動の 3 リスクを法人担当者が素早く棚卸しできます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 見直し 自己診断",
    "法人 電気料金 見直し チェック",
    "電力契約 見直すべきか",
    "法人電力 自己診断",
    "電気料金 見直し タイミング",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/self-diagnosis-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/self-diagnosis-contract-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/diagnostic-tools", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/diagnostic-tools"],
  },
};

export default function SelfDiagnosisContractReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/self-diagnosis-contract-review"
        datePublished={PUBLISHED_AT}
        dateModified={UPDATED_AT}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "診断ツール・チェックリスト", url: "https://simulator.eic-jp.org/articles/diagnostic-tools" },
          { name: "電力契約見直し自己診断" },
        ]}
        faq={FAQ_ITEMS}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/diagnostic-tools" className="underline-offset-2 hover:underline">自己診断・簡易チェック</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電力契約見直し自己診断</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電力契約見直し自己診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「今の電力契約を見直すべきか」を判断するための簡易診断ページです。10項目のチェックを通じて、現状の課題を素早く整理できます。すべての項目に回答することで、見直しの優先度を自分で把握できます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          総務・経理・施設管理・購買など、電力契約に関わる法人担当者が、初期の状況確認として活用できます。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>自社の電力契約に見直しの必要性があるかの判断基準</li>
            <li>10項目の診断チェックリストと各項目の意味</li>
            <li>チェックが多い場合・少ない場合それぞれの対応方針</li>
            <li>見直しを始めるうえで次にとるべきアクション</li>
          </ul>
        </div>
        <AuthorBadge publishedAt={PUBLISHED_AT} updatedAt={UPDATED_AT} />
      </header>

      <TableOfContents />

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断の使い方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の10項目について、自社の現状と照らし合わせてください。「当てはまる」と感じた項目が多いほど、今すぐ見直しを検討する価値が高い状況といえます。診断後、より具体的な金額試算が必要な場合は{" "}
            <Link href="/" className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline">
              法人電気料金リスク アセスメント（30秒で診断）
            </Link>{" "}
            に進んで定量化することをおすすめします。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-700">重要度：高</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                1つでも該当する場合、早急な確認を推奨します。
              </p>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-700">重要度：中</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                複数該当する場合、見直しの準備を始めることが有効です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">重要度：低</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                今後の方針として検討の参考にしてください。
              </p>
            </div>
          </div>
        </section>

        <DiagnosisClient />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断結果の見方と次のアクション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            チェック数と重要度に応じた対応の目安を以下に示します。あくまで参考ですが、優先度を判断する材料として活用してください。
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                1
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  重要度「高」に1つ以上該当する場合
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  まず現行の契約書と直近12か月分の請求書を手元に用意してください。契約満了日と中途解約条件を確認したうえで、見積依頼先のリストアップを始めることを推奨します。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                2
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  重要度「中」に複数該当する場合
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  見直しの準備段階として、まず{" "}
                  <Link href="/" className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline">
                    30秒でリスク診断（電気料金リスク アセスメント）
                  </Link>{" "}
                  で現行契約の上振れリスクを試算しましょう。リスクの数値を社内共有することで、見直し着手の判断を得やすくなります。
                </p>
              </div>
            </div>
            
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                3
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  該当項目が少ない・ほとんどない場合
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  現時点では緊急性は低いと考えられます。ただし、次回の契約更新時期の把握と、年1回程度の定期的な料金チェックは続けることをおすすめします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直しを始めるための整理ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            診断後に見直しを進める場合、以下の順で情報を整理すると効率よく進めることができます。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約書から「プラン名・契約期間・満了日・中途解約条件」を確認する</li>
            <li>直近12か月分の請求書から「基本料金・変動費用項目・月間使用量」を抽出する</li>
            <li>
              <Link href="/" className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline">
                電気料金リスク アセスメント（30秒でリスク診断）
              </Link>
              で現行プランの上振れリスクを試算する
            </li>
            <li>社内での見直し目的・比較軸を事前に共有する</li>
            <li>複数の電力会社から見積を取り、条件・リスク・総額で比較する</li>
          </ol>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            詳細な手順については{" "}
            <Link
              href="/business-electricity-contract-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しチェックリスト
            </Link>{" "}
            もあわせてご覧ください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自己診断結果の目安</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            チェック数に応じた判定と推奨アクションの目安です。重要度「高」の項目に1つでも該当する場合は、スコアに関わらず早急な確認を推奨します。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">スコア</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">判定</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">推奨アクション</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">優先度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">0〜2点</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">様子見</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回の定期チェックを継続。次回更新時期を把握しておく。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">低</span></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">3〜4点</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">情報収集</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">シミュレーターで現行プランのリスクを試算。他社のプラン情報を収集開始。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">中</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">5〜6点</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積依頼</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">複数社への見積依頼を開始。契約満了日と中途解約条件を確認する。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">高</span></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">7点以上</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">早急に見直し</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">今すぐ見直し手続きに着手。社内稟議・比較・切替先決定を最速で進める。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">緊急</span></td>
              </tr>
            </tbody>
          </table>
        </section>

        <SourcesAndFaq
          faq={FAQ_ITEMS}
          sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp" },
          { name: "新電力ネット（pps-net.org）", url: "https://pps-net.org" },
          ]}
          publishedAt={PUBLISHED_AT}
        />



        <RelatedLinks
          heading="関連ページ"
          intro="診断結果をもとに、次のステップへ進むためのページをご紹介します。"
          links={[
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し前の準備で確認したい情報・書類・社内調整ポイントを一覧で整理。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "どのタイミングで見直しを始めるべきか、判断基準と行動指針を解説。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動型と固定型プランの違い",
              description: "2つのプランのリスク・コスト構造の違いを比較して理解する。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目の意味と、見直し判断に使える確認ポイントを解説。",
            },
            {
              href: "/contract-renewal-timing-diagnosis",
              title: "契約更新タイミング診断",
              description: "更新時期から逆算して、いつ見直しを始めるべきかを確認する。",
            },
            {
              href: "/quotation-comparison-pre-check",
              title: "見積比較前チェック診断",
              description: "見積を依頼する前に揃えておくべき情報・資料を確認する。",
            },
          ]}
        />

        <ContentCta
          heading="現行契約のリスクをシミュレーターで確認する"
          description="診断で見直しの必要性を確認したら、次はシミュレーターで現行プランの上振れリスクを数値で把握しましょう。社内説明の根拠資料にも活用できます。"
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
