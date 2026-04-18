import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["internal-explanation"];


const pageTitle =
  "比較表を社内共有するときのポイント｜わかりやすい比較表の作り方";
const pageDescription =
  "電力契約見直しの比較表を社内で共有する際のポイントを解説。複数サプライヤーの見積を整理するための比較表の構成、伝わる見せ方、共有時の注意点まで実務目線でまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力会社 比較表 社内共有",
    "電気料金 見積比較 まとめ方",
    "電力契約 比較 作り方",
    "電力サプライヤー 比較 資料",
    "電気料金見直し 比較表",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/sharing-comparison-table-internally",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/sharing-comparison-table-internally",
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

const tableColumns = [
  {
    label: "会社名・プラン名",
    detail:
      "現行の電力会社を含むすべての比較対象を記載する。プラン名は正式名称で記載し、後から照合できるようにする。",
  },
  {
    label: "料金プランの種類",
    detail:
      "固定プラン・市場連動プラン・燃料費調整あり固定など、プランの特性を端的に記載する。審査者がリスク特性を理解できるようにする。",
  },
  {
    label: "年間電気料金の試算（円）",
    detail:
      "同一の使用量・使用パターンを前提にした年間料金の試算を記載する。比較の基準を揃えることが最重要。基準となった使用量・期間も脚注に明記する。",
  },
  {
    label: "現行との差分（削減額）",
    detail:
      "現行と各候補の年間料金差分を「年間○万円の削減」「▲○%」の形で示す。プラスの場合（値上がり）もそのまま記載し、正確性を保つ。",
  },
  {
    label: "契約期間・解約条件",
    detail:
      "契約の拘束期間と途中解約時のペナルティ（違約金など）を記載する。短期での見直しを想定する場合は特に重要な項目。",
  },
  {
    label: "料金変動リスクの性質",
    detail:
      "固定か変動か、変動する場合はどの指標に連動するか（JEPX・燃料費など）を記載する。リスク許容度の低い経営層への説明に役立つ。",
  },
];

const shareTips = [
  {
    heading: "前提条件を明記する",
    content:
      "比較表の信頼性は、前提条件の透明性にかかっています。「どの期間の使用量を基準にしたか」「各社の見積条件は揃っているか」を脚注や注記として必ず明記する。前提が異なる比較は「不公平な比較」として差し戻しの原因になりやすい。",
  },
  {
    heading: "「なぜこの会社を推薦するか」を別途記載する",
    content:
      "比較表は事実の羅列であるため、推薦理由は別途「担当者コメント」欄や補足文書として添付する。「金額面だけでなく、契約条件・安定性・実績を総合的に評価した結果、○社を推奨します」という形で、選定の合理性を示す。",
  },
  {
    heading: "「現行」を必ず比較対象に含める",
    content:
      "比較表に現行の電力会社を含めることで、見直しの必要性が一目でわかる。「現行のままでいること」もひとつの選択肢として明示した上で、見直す理由を示す構成が審査者にとってわかりやすい。",
  },
  {
    heading: "過度に複雑にしない",
    content:
      "比較表の列・行が多すぎると審査者が重要点を見失いやすい。最重要の比較項目（年間料金・削減額・プラン種別・契約期間）に絞り、詳細は添付資料に回す。一覧表は1ページ以内に収まるシンプルさが理想的。",
  },
];

export default function SharingComparisonTableInternallyPage() {
  return (
    <>
      <ArticleJsonLd
        headline="比較表を社内共有するときのポイント｜わかりやすい比較表の作り方"
        description="電力契約見直しの比較表を社内で共有する際のポイントを解説。複数サプライヤーの見積を整理するための比較表の構成、伝わる見せ方、共有時の注意点まで実務目線でまとめます。"
        url="https://simulator.eic-jp.org/sharing-comparison-table-internally"
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "社内説明・稟議サポート", url: "https://simulator.eic-jp.org/articles/internal-explanation" },
        ]}
        faq={[
    { question: "電力契約見直しを社内で提案するときのコツは？", answer: "現状の電気代と見直し後の削減見込みを数値で示し、リスク（市場変動・違約金等）も併記すると経営層の判断が得やすくなります。" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/internal-explanation" className="underline-offset-2 hover:underline">社内説明・稟議の進め方</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">比較表の社内共有のポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          比較表を社内共有するときのポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しを社内で推進する際、複数の電力会社・プランを比較した「比較表」は重要な説明資料になります。ただし、比較表の作り方が不適切だと、審査者に誤解を与えたり、差し戻しの原因になったりします。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、社内での承認・合意を得やすい比較表の構成と共有時のポイントを整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>比較表に含めるべき6つの主要項目</li>
            <li>比較の前提条件を揃える重要性</li>
            <li>社内共有時に意識したい4つのポイント</li>
            <li>推薦理由の示し方</li>
            <li>稟議書との連携方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            比較表に含めるべき主要項目
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の比較表には、審査者が判断するために必要な情報を過不足なく含める必要があります。以下の項目を基本構成として検討してください。
          </p>
          <div className="mt-4 space-y-3">
            {tableColumns.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            比較表の例（イメージ）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下は比較表の基本構成のイメージです。実際の数値は各社の見積に基づいて作成します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">項目</th>
                  <th className="border border-slate-200 px-3 py-2">現行（A社）</th>
                  <th className="border border-slate-200 px-3 py-2">候補1（B社）</th>
                  <th className="border border-slate-200 px-3 py-2">候補2（C社）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">プラン種別</td>
                  <td className="border border-slate-200 px-3 py-2">固定（燃調あり）</td>
                  <td className="border border-slate-200 px-3 py-2">固定（燃調あり）</td>
                  <td className="border border-slate-200 px-3 py-2">市場連動</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">年間料金試算</td>
                  <td className="border border-slate-200 px-3 py-2">○○○万円</td>
                  <td className="border border-slate-200 px-3 py-2">△△△万円</td>
                  <td className="border border-slate-200 px-3 py-2">□□□万円（参考）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">現行比削減額</td>
                  <td className="border border-slate-200 px-3 py-2">—</td>
                  <td className="border border-slate-200 px-3 py-2">▲○○万円/年</td>
                  <td className="border border-slate-200 px-3 py-2">変動（最大▲△△万円）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">契約期間</td>
                  <td className="border border-slate-200 px-3 py-2">1年</td>
                  <td className="border border-slate-200 px-3 py-2">2年</td>
                  <td className="border border-slate-200 px-3 py-2">1年</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">料金変動リスク</td>
                  <td className="border border-slate-200 px-3 py-2">燃調のみ変動</td>
                  <td className="border border-slate-200 px-3 py-2">燃調のみ変動</td>
                  <td className="border border-slate-200 px-3 py-2">JEPX連動・変動大</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※上記はイメージです。実際の比較表は各社からの見積書に基づいて作成してください。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            比較表に入れるべき項目
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下は比較表の標準的な項目構成の例です。A社・B社は候補先、「現行契約」は現在の電力会社を指します。確認ポイントも合わせて整理することで、審査者が判断しやすい資料になります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">項目</th>
                  <th className="border border-slate-200 px-3 py-2">A社（候補1）</th>
                  <th className="border border-slate-200 px-3 py-2">B社（候補2）</th>
                  <th className="border border-slate-200 px-3 py-2">現行契約</th>
                  <th className="border border-slate-200 px-3 py-2">確認ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">電力量単価（円/kWh）</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">比較の基本単位。燃調込みか別か要確認</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">基本料金（円/kW）</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">デマンド契約の場合は契約電力との掛け合わせで確認</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">燃料費調整額</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">上限あり・なし、計算方式の違いに注意</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">市場連動の有無</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">変動リスクの有無を明示。固定か変動かで性質が大きく異なる</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">契約期間</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">短期と長期では柔軟性とリスクのバランスが異なる</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">違約金・解約条件</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">中途解約時のペナルティの有無・金額を必ず確認</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">年間総額（試算）</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">同一使用量で揃えた試算が比較の前提。前提条件を脚注に明記</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">備考・特記事項</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">記入欄</td>
                  <td className="border border-slate-200 px-3 py-2">再エネ比率・ポイント還元・特典など比較外の条件を記載</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※各欄は実際の見積に基づく数値を記入します。比較の前提（使用量・期間）を脚注に明記してください。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内共有時のポイント
          </h2>
          <div className="mt-4 space-y-4">
            {shareTips.map((item) => (
              <div key={item.heading}>
                <h3 className="text-lg font-semibold text-slate-900">{item.heading}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定プランと市場連動プランの比較を含む場合
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランと市場連動プランの比較を含む場合、両者の料金特性の違いを説明する補足が必要です。市場連動プランは「平均すれば安い可能性があるが、高騰時には大きく上振れる」という特性を持つため、年間料金の「試算値」だけで比較すると誤解を招く可能性があります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定と市場連動の違いについては{" "}
            <Link
              href="/explaining-fixed-vs-market-to-management"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              固定と市場連動の比較を経営層に説明するときのポイント
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <SourcesAndFaq
          faq={[
          { question: "電力契約見直しを社内で提案するときのコツは？", answer: "現状の電気代と見直し後の削減見込みを数値で示し、リスク（市場変動・違約金等）も併記すると経営層の判断が得やすくなります。" },
          ]}
          sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp" },
          { name: "新電力ネット", url: "https://pps-net.org" },
          ]}
          publishedAt="2026-04-11"
        />


          <GlossaryLinks currentSlug="sharing-comparison-table-internally" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/approval-document-key-points",
              title: "電力契約見直しの稟議書に入れたい論点整理",
              description: "比較表を添付する稟議書の構成と論点整理。",
            },
            {
              href: "/explaining-to-executives",
              title: "経営層向けに電力契約見直しを説明するときのポイント",
              description: "比較表を使った経営層説明の構成方法。",
            },
            {
              href: "/explaining-fixed-vs-market-to-management",
              title: "固定と市場連動の比較を経営層に説明するときのポイント",
              description: "比較表でプラン特性の差を示すための説明方法。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積書を比較表に整理するための読み方。",
            },
            {
              href: "/using-simulator-results-for-explanation",
              title: "シミュレーター結果を説明材料にする方法",
              description: "比較表に添付できるシミュレーション結果の使い方。",
            },
            {
              href: "/compare-business-electricity-estimates",
              title: "法人の電気料金見積もりを比較するポイント",
              description: "複数社の見積もりを適切に比較するための観点。",
            },
          ]}
        />

        <ContentCta
          heading="比較の根拠となる数値を準備する"
          description="シミュレーターを使うことで、現行契約と候補プランの料金差を試算できます。比較表の数値根拠として活用できます。"
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
