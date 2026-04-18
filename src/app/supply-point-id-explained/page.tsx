import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

// --- 定数 ---
const pageTitle =
  "供給地点特定番号とは｜電力切り替え・見積依頼で必要になる基本情報を解説";
const pageDescription =
  "供給地点特定番号の意味と構成、請求書・検針票のどこに記載されているか、電力会社切り替えや見積依頼での使い方、複数拠点管理での注意点を法人向けに解説。";

// --- 送配電事業者コード一覧 ---
const gridOperators = [
  { code: "01", name: "北海道電力ネットワーク" },
  { code: "02", name: "東北電力ネットワーク" },
  { code: "03", name: "東京電力パワーグリッド" },
  { code: "04", name: "中部電力パワーグリッド" },
  { code: "05", name: "北陸電力送配電" },
  { code: "06", name: "関西電力送配電" },
  { code: "07", name: "中国電力ネットワーク" },
  { code: "08", name: "四国電力送配電" },
  { code: "09", name: "九州電力送配電" },
  { code: "10", name: "沖縄電力（送配電部門）" },
];

// --- 番号の構成 ---
const numberStructure = [
  { position: "1〜2桁目", digits: "2桁", content: "送配電事業者コード", example: "03（東京電力PG）" },
  { position: "3〜4桁目", digits: "2桁", content: "供給区域コード", example: "01" },
  { position: "5〜22桁目", digits: "18桁", content: "地点固有番号", example: "（各供給地点に固有）" },
];

// --- 記載書類一覧 ---
const documentList = [
  {
    doc: "電気料金の請求書",
    location: "契約情報欄・供給地点欄",
    howToFind: "「供給地点特定番号」「地点番号」で検索",
  },
  {
    doc: "検針票（電気ご使用量のお知らせ）",
    location: "上部の契約情報欄",
    howToFind: "22桁の数字を探す",
  },
  {
    doc: "電力会社のマイページ",
    location: "契約詳細画面",
    howToFind: "ログイン後「契約情報」で確認",
  },
  {
    doc: "電力契約書・約款",
    location: "契約条件欄",
    howToFind: "契約締結時の書類を確認",
  },
];

// --- 実務での使い方 ---
const useCases = [
  {
    title: "電力会社の切り替え手続き",
    body: "新しい電力会社に番号を伝えるだけで切替可能。設備工事は原則不要で、手続きはすべて番号の提出から始まります。",
  },
  {
    title: "見積依頼",
    body: "正確な電気料金の見積には供給地点特定番号が必須です。番号がないと電力会社が使用実績を照会できず、適切な単価を算出できません。",
  },
  {
    title: "複数拠点の一括管理",
    body: "拠点ごとに番号が異なります。一覧表にまとめて管理することで、切替・比較作業を効率化できます。",
  },
];

// --- FAQ ---
const faqs = [
  {
    question: "電力会社を変えると番号は変わりますか？",
    answer:
      "変わりません。送配電事業者が管理する番号のため、小売電気事業者の変更に影響されません。",
  },
  {
    question: "番号がわからない場合はどうすれば？",
    answer:
      "現在の電力会社に問い合わせるか、検針票・マイページで確認してください。",
  },
  {
    question: "引っ越し先でも同じ番号ですか？",
    answer:
      "いいえ。供給地点ごとの番号のため、移転先では新しい番号になります。",
  },
  {
    question: "番号を間違えて伝えるとどうなりますか？",
    answer:
      "切替や見積が正しく処理されません。22桁を正確に伝えることが重要です。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "供給地点特定番号",
    "電力切り替え",
    "見積依頼",
    "22桁",
    "検針票",
    "法人電気料金",
    "送配電事業者コード",
    "電力契約",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/supply-point-id-explained",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/supply-point-id-explained",
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

const faq = [
  { question: "供給地点特定番号はどこに記載されていますか？", answer: "毎月の電気料金の請求書または検針票に記載されています。「供給地点特定番号」「地点番号」などの名称で22桁の数字が印字されています。オンラインの電力会社マイページでも確認できます。" },
  { question: "供給地点特定番号はいつ必要になりますか？", answer: "電力会社の切り替え（新電力への変更）を依頼する際、または複数社に見積依頼をする際に必要です。この番号がないと正確な見積が取れないため、事前に請求書から確認しておくことが重要です。" },
  { question: "複数拠点ある場合、供給地点特定番号は拠点ごとに異なりますか？", answer: "はい。供給地点（メーター設置場所）ごとに固有の22桁番号が割り当てられています。複数拠点を一括で見直す際は、拠点リストと各拠点の供給地点特定番号をまとめて管理することが効率的です。" },
];

// --- Page Component ---
export default function SupplyPointIdExplainedPage() {
  return (
    <>
      <ArticleJsonLd
        headline="供給地点特定番号とは｜電力切り替え・見積依頼で必要になる基本情報を解説"
        description="供給地点特定番号の意味と構成、請求書・検針票のどこに記載されているか、電力会社切り替えや見積依頼での使い方、複数拠点管理での注意点を法人向けに解説。"
        url="https://simulator.eic-jp.org/supply-point-id-explained"
        datePublished="2026-04-13"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "供給地点特定番号とは" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li>
            <Link
              href="/articles/basic"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              基礎から知る
            </Link>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li className="text-slate-700">供給地点特定番号とは</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          供給地点特定番号とは
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          供給地点特定番号は、全国のすべての電力供給地点に割り振られた22桁の固有番号です。電力会社の切り替えや見積依頼の際に必ず求められる番号であり、請求書・検針票・マイページで確認できます。本ページでは、番号の意味と構成、記載箇所の確認方法、複数拠点を管理する際の実務ポイントを法人向けに解説します。
        </p>
      </header>

      <div className="mt-6 space-y-8">
        {/* H2: 供給地点特定番号の基本 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">供給地点特定番号の基本</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-sky-600">&#9679;</span>
              <span>
                <strong>全国の電力供給地点ごとに割り振られた22桁の固有番号</strong>です。工場・オフィス・店舗など、電力を供給される地点それぞれに1つの番号が割り当てられています。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-sky-600">&#9679;</span>
              <span>
                <strong>電力会社の切り替え・見積依頼では必ず必要</strong>になります。新しい小売電気事業者はこの番号をもとに、対象地点の使用実績や設備情報を照会します。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-sky-600">&#9679;</span>
              <span>
                <strong>送配電事業者が管理する番号</strong>であるため、小売電気事業者を変更しても番号は変わりません。一度確認した番号は継続して使用できます。
              </span>
            </li>
          </ul>
        </section>

        {/* H2: 番号の構成 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">番号の構成（22桁の内訳）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            22桁の番号はそれぞれ決まった情報を示しています。先頭2桁で送配電事業者（エリア）がわかります。
          </p>

          {/* 桁の構成テーブル */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-200 px-4 py-2 font-semibold">桁位置</th>
                  <th className="border border-slate-200 px-4 py-2 font-semibold">桁数</th>
                  <th className="border border-slate-200 px-4 py-2 font-semibold">内容</th>
                  <th className="border border-slate-200 px-4 py-2 font-semibold">例</th>
                </tr>
              </thead>
              <tbody>
                {numberStructure.map((row) => (
                  <tr key={row.position} className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-2 text-slate-800">{row.position}</td>
                    <td className="border border-slate-200 px-4 py-2 text-slate-800">{row.digits}</td>
                    <td className="border border-slate-200 px-4 py-2 text-slate-800">{row.content}</td>
                    <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 送配電事業者コード一覧テーブル */}
          <h3 className="mt-6 text-lg font-semibold text-slate-900">送配電事業者コード一覧</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-200 px-4 py-2 font-semibold">コード</th>
                  <th className="border border-slate-200 px-4 py-2 font-semibold">送配電事業者</th>
                </tr>
              </thead>
              <tbody>
                {gridOperators.map((op) => (
                  <tr key={op.code} className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-2 font-mono font-semibold text-sky-700">
                      {op.code}
                    </td>
                    <td className="border border-slate-200 px-4 py-2 text-slate-800">{op.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: どこに記載されているか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どこに記載されているか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            供給地点特定番号は以下の書類・媒体で確認できます。手元に請求書や検針票がある場合は、まず「供給地点特定番号」または「地点番号」という表記を探してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-200 px-4 py-2 font-semibold">書類</th>
                  <th className="border border-slate-200 px-4 py-2 font-semibold">記載箇所</th>
                  <th className="border border-slate-200 px-4 py-2 font-semibold">見つけ方</th>
                </tr>
              </thead>
              <tbody>
                {documentList.map((row) => (
                  <tr key={row.doc} className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                      {row.doc}
                    </td>
                    <td className="border border-slate-200 px-4 py-2 text-slate-700">{row.location}</td>
                    <td className="border border-slate-200 px-4 py-2 text-slate-700">{row.howToFind}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: 実務でどう使うか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">実務でどう使うか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            供給地点特定番号は、電力に関する主要な手続きすべてで活用されます。代表的な3つのケースを確認しておきましょう。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{uc.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{uc.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* H2: 複数拠点を管理するときの注意点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">複数拠点を管理するときの注意点</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-amber-500">&#9650;</span>
              <span>
                <strong>拠点ごとに番号が異なります。</strong>同一ビル内でもフロアや区画ごとに別途契約している場合、それぞれ異なる供給地点特定番号が割り当てられています。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-amber-500">&#9650;</span>
              <span>
                <strong>テナントビルでは個別番号がないことがあります。</strong>一括受電方式のビルでは、ビルオーナーが一括で電力を受電しているため、テナント側に個別の供給地点特定番号が存在しない場合があります。この場合は電力会社との契約主体をビルオーナーに確認してください。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-sky-600">&#9632;</span>
              <span>
                <strong>管理台帳での一元管理を推奨します。</strong>複数拠点の切替・比較を効率化するために、以下の列を含む台帳を作成すると便利です。
              </span>
            </li>
          </ul>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  {["拠点名", "住所", "供給地点特定番号", "契約電力", "電力会社", "契約期間"].map(
                    (col) => (
                      <th key={col} className="border border-slate-200 px-4 py-2 font-semibold">
                        {col}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-slate-500 italic">
                  <td className="border border-slate-200 px-4 py-2">東京本社</td>
                  <td className="border border-slate-200 px-4 py-2">東京都〇〇区…</td>
                  <td className="border border-slate-200 px-4 py-2 font-mono">03xxxxxxxxxxxxxxxxxx</td>
                  <td className="border border-slate-200 px-4 py-2">50kW</td>
                  <td className="border border-slate-200 px-4 py-2">〇〇電力</td>
                  <td className="border border-slate-200 px-4 py-2">2025年4月〜</td>
                </tr>
                <tr className="bg-slate-50 text-slate-400 italic">
                  <td className="border border-slate-200 px-4 py-2">大阪支社</td>
                  <td className="border border-slate-200 px-4 py-2">大阪府…</td>
                  <td className="border border-slate-200 px-4 py-2 font-mono">06xxxxxxxxxxxxxxxxxx</td>
                  <td className="border border-slate-200 px-4 py-2">30kW</td>
                  <td className="border border-slate-200 px-4 py-2">△△電力</td>
                  <td className="border border-slate-200 px-4 py-2">2026年1月〜</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">※ 上記は管理台帳の記載例です。</p>
        </section>

        {/* H2: よくある質問 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある質問</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-200 px-4 py-2 font-semibold">質問</th>
                  <th className="border border-slate-200 px-4 py-2 font-semibold">回答</th>
                </tr>
              </thead>
              <tbody>
                {faqs.map((faq) => (
                  <tr key={faq.question} className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800 align-top">
                      {faq.question}
                    </td>
                    <td className="border border-slate-200 px-4 py-2 text-slate-700 leading-7">
                      {faq.answer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-sky-600">&#10003;</span>
              <span>供給地点特定番号は22桁の固有番号で、送配電事業者が管理する。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-sky-600">&#10003;</span>
              <span>電力会社を変えても番号は変わらない。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-sky-600">&#10003;</span>
              <span>請求書・検針票・マイページ・契約書で確認できる。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-sky-600">&#10003;</span>
              <span>切り替え・見積依頼のどちらにも必須。事前に番号を控えておくとスムーズ。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-sky-600">&#10003;</span>
              <span>複数拠点を持つ法人は管理台帳を作成し、拠点ごとの番号を一元管理することを推奨する。</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-6">
        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "供給地点特定番号・電力切り替え制度に関する情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
            { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "供給地点管理・系統情報" },
          ]}
          publishedAt="2026-04-13"
        />
      </div>

      {/* 関連リンク */}
      
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書の読み方",
              description: "請求書の各項目の意味と確認ポイントを解説します。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "電気料金の見積書の読み方",
              description: "見積書の構成と比較時のチェックポイントを解説します。",
            },
            {
              href: "/documents-needed-for-electricity-contract-review",
              title: "電力契約見直しに必要な書類",
              description: "見直し手続きで用意すべき書類一覧をまとめました。",
            },
            {
              href: "/switching-business-electricity-contract",
              title: "法人の電力契約を切り替える方法",
              description: "切り替えの流れと注意点をステップごとに解説します。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "固定・市場連動など契約メニューを条件別に比較できます。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直しを始めるには",
              description: "供給地点特定番号を手元に用意して見直しを進める手順を確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "切り替え先を検討する際のプラン選択軸を整理できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="電気料金のリスクを数値で把握する"
          description="供給地点特定番号を手元に用意したら、シミュレーターで自社の電気料金上昇リスクを診断してみましょう。契約内容に応じた具体的なリスクスコアを確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/basic", label: "基礎知識をもっと読む" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
