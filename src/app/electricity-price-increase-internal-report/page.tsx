import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

// --- 定数 ---
const pageTitle =
  "電気料金の値上げを社内に説明する方法｜資料テンプレート付き";
const pageDescription =
  "経営層や他部署に電気料金の値上げを説明するための資料構成を、PowerPoint・Word のセクション目次例と話し方のコツつきで解説。現状把握・値上げ要因の分解・影響試算・対応策・判断依頼事項の5ブロックで、社内稟議と経営報告の両方に対応できます。";
const pageUrl =
  "https://simulator.eic-jp.org/electricity-price-increase-internal-report";

// --- 5ブロック構成 ---
type Block = {
  title: string;
  purpose: string;
  slides: string[];
  tips: string;
};

const blocks: Block[] = [
  {
    title: "1. 現状把握（過去12ヶ月の推移）",
    purpose: "値上げが特殊な出来事ではなく、継続的な流れの一部であることを共有する",
    slides: [
      "月次の電気代推移グラフ（直近12ヶ月／可能なら24ヶ月）",
      "同期間の使用量（kWh）推移グラフ",
      "kWh単価の推移（総額÷使用量で算出）",
      "契約ごとの一覧（拠点・契約電力・プラン種別・単価）",
    ],
    tips: "「使用量はほぼ一定なのに単価だけ上がっている」という構図を早い段階で視覚的に示すと、後段の説明が通りやすくなります。",
  },
  {
    title: "2. 値上げ要因の分解",
    purpose: "単純な値上げではなく、複数要因が重なっていることを示す",
    slides: [
      "燃料費調整額の推移と寄与分",
      "再エネ賦課金の推移と単価改定",
      "容量拠出金（2024年度〜）の新規発生分",
      "託送料金のレベニューキャップ改定",
      "電力会社の単価改定（基本料金・電力量料金）",
    ],
    tips: "「制度要因」と「市況要因」を色分けすると、経営層が「自社の経営努力で減らせるもの」「外部要因で減らせないもの」を直感的に区別できます。",
  },
  {
    title: "3. 影響試算（年間コスト変化）",
    purpose: "経営判断に使える定量的なインパクトを示す",
    slides: [
      "年間総額のBefore / After比較",
      "事業セグメント別の影響額（売上比での見せ方も有効）",
      "上振れシナリオ（燃料価格＋20%・JEPX高騰時）の試算",
      "対応しなかった場合の翌年度予算超過リスク",
    ],
    tips: "単年度だけでなく、3年スパンでの累積影響を示すと、投資回収期間のある対応策が提案しやすくなります。",
  },
  {
    title: "4. 対応策（短期・中期）",
    purpose: "「値上げは避けられないが、打ち手はある」ことを示す",
    slides: [
      "短期施策：契約電力適正化・相見積もり・プラン見直し",
      "中期施策：設備投資（LED・空調・蓄電池）・自家消費太陽光",
      "運用施策：デマンド監視・ピークカット・時間帯別運用",
      "各施策の期待効果・投資回収期間・実行難易度マトリクス",
    ],
    tips: "「全部やる」ではなく「まず何から」を明確にしたほうが稟議は通りやすい。1枚に施策優先順位のスライドを入れるのが定石です。",
  },
  {
    title: "5. 判断依頼事項",
    purpose: "経営層・他部署に具体的に何を決めてほしいかを明示する",
    slides: [
      "今回の稟議／報告で判断してほしい事項",
      "判断期限（契約更新期限との関係）",
      "必要となる予算・投資額",
      "実行後の成果報告スケジュール",
    ],
    tips: "「ご報告のみ」の資料と「承認依頼」の資料を明確に分けること。承認依頼であれば、表紙に「ご承認依頼」と明記します。",
  },
];

// --- PowerPoint 目次例 ---
const pptToc: string[] = [
  "1. サマリー（1ページ）",
  "2. 現状把握（2〜3ページ）",
  "3. 値上げ要因の分解（2〜3ページ）",
  "4. 影響試算（2ページ）",
  "5. 対応策（3〜4ページ）",
  "6. 判断依頼事項（1ページ）",
  "7. 参考資料・出典（1ページ）",
];

// --- Word 資料構成例 ---
const wordOutline: string[] = [
  "件名：電気料金値上げへの対応について（稟議書／報告書）",
  "1. 背景と目的",
  "2. 現状の電気料金と推移",
  "3. 値上げ要因の分析",
  "4. 事業への影響試算",
  "5. 対応策の検討",
  "6. 推奨する対応と判断依頼事項",
  "7. 添付資料（請求書コピー・試算根拠）",
];

// --- 話し方のコツ ---
const talkingTips: { tip: string; detail: string }[] = [
  {
    tip: "結論を先に伝える",
    detail: "「年間コストが○%増加する見込み。対応しないと予算超過となる」と冒頭で結論を置く。",
  },
  {
    tip: "数字と根拠を必ず分ける",
    detail: "「○%上昇」は要因ごとに分解して示す。「なぜそう試算したのか」を質問されても答えられる状態に。",
  },
  {
    tip: "外部要因と内部努力を明確に区別",
    detail: "制度要因や市況要因は努力で減らせない。内部で減らせる部分だけを施策として提示する。",
  },
  {
    tip: "判断を曖昧にしない",
    detail: "「どうしましょうか」ではなく「A案・B案・C案のいずれかの承認をお願いします」と選択肢を出す。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 値上げ 社内説明",
    "電気代 値上げ 報告書",
    "電気料金 経営層 説明",
    "電気代 稟議書 資料",
    "電気料金 値上げ PowerPoint",
    "法人 電気代 社内報告",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/internal-explanation",
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
    images: ["/api/og/internal-explanation"],
  },
};

// --- Page Component ---
export default function ElectricityPriceIncreaseInternalReportPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          {
            name: "社内説明・稟議を知る",
            url: "https://simulator.eic-jp.org/articles/internal-explanation",
          },
          { name: "電気料金値上げの社内説明資料の作り方" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        {/* パンくずナビ */}
        <nav
          aria-label="パンくずリスト"
          className="mb-4 flex items-center gap-1.5 text-xs text-slate-500"
        >
          <Link href="/" className="hover:text-sky-700 hover:underline">
            ホーム
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/articles/internal-explanation"
            className="hover:text-sky-700 hover:underline"
          >
            社内説明・稟議を知る
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">値上げの社内説明資料の作り方</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            社内説明・稟議を知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            電気料金の値上げを社内に説明する方法｜資料テンプレート付き
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の値上げを経営層や他部署に説明する場面は、
            突然の燃料価格高騰や制度改定のたびに発生します。
            「値上げ幅は○%です」だけでは承認も共感も得にくく、
            要因の分解・影響試算・対応策まで一貫して示すことが求められます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、資料を5ブロック構成で組み立てる方法、
            PowerPoint・Word の目次テンプレート、話し方のコツを整理しています。
            稟議書と経営報告の両方に使える構成です。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 前提：資料の役割を整理 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              値上げ説明資料で達成したい3つのこと
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  1. 理解の共通化
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  値上げの構造と要因を関係者全員が同じ粒度で理解する状態を作る。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  2. 影響の定量把握
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  年間予算・中期経営計画への具体的な影響額を数字で示す。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  3. 具体的な判断の引き出し
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  「報告しただけ」で終わらせず、次の意思決定につなげる。
                </p>
              </div>
            </div>
          </section>

          {/* 5ブロック */}
          {blocks.map((b) => (
            <section
              key={b.title}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <h2 className="text-xl font-semibold text-slate-900">{b.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                <strong>目的：</strong>
                {b.purpose}
              </p>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  盛り込むスライド／項目
                </p>
                <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                  {b.slides.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="shrink-0 text-sky-700">&#9679;</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-semibold text-amber-700">
                  伝え方のコツ
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{b.tips}</p>
              </div>
            </section>
          ))}

          {/* PowerPoint 目次 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              PowerPoint 目次テンプレート（経営層向け）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              経営会議・役員会で使う前提のスライドは、
              合計10〜14ページで完結させるのが現実的です。
              細部の根拠は添付資料・参考資料に回します。
            </p>
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <ul className="space-y-1 text-sm leading-7 text-slate-700">
                {pptToc.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Word 資料構成 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              Word 稟議書・報告書の構成テンプレート
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              稟議書フォーマットが決まっている会社では、
              以下の見出し構成を社内テンプレートに落とし込むと汎用的に使えます。
            </p>
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <ul className="space-y-1 text-sm leading-7 text-slate-700">
                {wordOutline.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              稟議書の論点整理の詳細は
              <Link
                href="/approval-document-key-points"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                電力契約見直しの稟議書に入れたい論点整理
              </Link>
              も参照してください。
            </p>
          </section>

          {/* 話し方のコツ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              口頭説明での4つのコツ
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {talkingTips.map((t) => (
                <div
                  key={t.tip}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-slate-900">{t.tip}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {t.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  資料は「現状把握／要因分解／影響試算／対応策／判断依頼事項」の5ブロックで構成する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  PowerPointは10〜14ページ、Wordは社内テンプレートに合わせて見出しを整理する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  外部要因と内部努力を明確に区別。判断依頼事項は選択肢で提示する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  シミュレーター結果を試算根拠として添付すると説得力が増す。
                </span>
              </li>
            </ul>
          </section>
        </section>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/explaining-to-executives",
                title: "経営層向けに電力契約見直しを説明するときのポイント",
                description:
                  "コストとリスクを経営層に伝えるための論点整理を深掘り。",
              },
              {
                href: "/approval-document-key-points",
                title: "電力契約見直しの稟議書に入れたい論点整理",
                description:
                  "承認を得やすい稟議書の構成と論点を整理します。",
              },
              {
                href: "/explaining-bill-fluctuation-factors",
                title: "請求書の変動要因を社内で説明するときのポイント",
                description:
                  "なぜ金額が変わるのかの伝え方の基本を整理します。",
              },
              {
                href: "/using-simulator-results-for-explanation",
                title: "シミュレーター結果を説明材料にする方法",
                description:
                  "診断結果の読み方と社内説明への活用方法を整理します。",
              },
              {
                href: "/how-to-explain-electricity-price-increase-internally",
                title: "電気料金値上げを社内で説明するときの入門",
                description:
                  "値上げ説明の基本的な考え方と、まず押さえたい論点をまとめた入門記事。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="資料に添付できる試算データをまず用意する"
            description="シミュレーターで自社の契約条件・使用量からシナリオ別の影響額を算出すると、社内資料の試算根拠としてそのまま使えます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "資料作成のご相談" },
            ]}
          />
        </div>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="電気料金値上げの社内報告、専門家に相談しませんか？"
            description="値上げ要因の分析資料作成から対策オプションの整理、経営層向け説明のポイントまで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
