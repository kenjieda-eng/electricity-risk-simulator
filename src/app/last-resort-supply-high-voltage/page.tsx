import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "高圧・特別高圧の法人が最終保障供給で確認したいポイント｜料金差と回避策";
const pageDescription =
  "高圧・特別高圧で受電している法人が最終保障供給に入ったとき確認すべき料金差・月額影響・入りやすいケース・回避策をデータ付きで解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 高圧",
    "最終保障供給 特別高圧",
    "高圧 最終保障供給 切り替え",
    "特別高圧 電気料金 見直し",
    "最終保障供給 法人 実務",
    "最終保障供給 料金差",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-high-voltage",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-high-voltage",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/last-resort-supply",
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
    images: ["/api/og/last-resort-supply"],
  },
};

const faqItems = [
  {
    question: "高圧需要家が最終保障供給に移行した場合、月額電気代はどのくらい増加しますか？",
    answer: "受電規模や市場状況によりますが、通常契約と比べて月額数十万〜数百万円の増加が発生することがあります。高圧・特別高圧は使用電力量が大きいため、単価差が小さくても月額影響は大きくなります。早期の通常契約への切替が不可欠です。",
  },
  {
    question: "高圧需要家が最終保障供給に入りやすいのはどのような状況ですか？",
    answer: "契約中の新電力が撤退・倒産した場合、市場価格急騰期に新規受付停止が相次いだ場合、契約満了後の切替先が見つからない場合などです。大規模需要家ほど受入可能な事業者が限られるため、最終保障供給に移行するリスクがある点に注意が必要です。",
  },
  {
    question: "特別高圧の最終保障供給と高圧の最終保障供給で手続きに違いはありますか？",
    answer: "基本的な仕組みは同じですが、特別高圧では受電設備の確認や切替工事に時間がかかるため、通常契約への切替期間がより長くなる傾向があります。また特別高圧の最終保障供給は対応可能な事業者が限られるため、早めの複数社への相談が重要です。",
  },
];

const sources = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "高圧・特別高圧の最終保障供給件数・料金データ" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "高圧電力・特別高圧の制度解説" },
];

export default function LastResortSupplyHighVoltagePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/last-resort-supply-high-voltage"
        datePublished="2025-09-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給を知る", url: "https://simulator.eic-jp.org/articles/last-resort-supply" },
          { name: "高圧・特別高圧のポイント" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-slate-500">
        <Link href="/" className="hover:text-sky-700 underline underline-offset-2">ホーム</Link>
        <span>/</span>
        <Link href="/articles/last-resort-supply" className="hover:text-sky-700 underline underline-offset-2">最終保障供給を知る</Link>
        <span>/</span>
        <span className="text-slate-700">高圧・特高の最終保障供給</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          高圧・特別高圧の法人が最終保障供給で確認したいポイント｜料金差と回避策
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給の実務は、高圧・特別高圧の受電区分を前提に整理する必要があります。低圧契約と異なり、
          契約電力や30分値、デマンド、使用パターンが切り替え判断に直結します。大口需要家ほど料金差が月額数百万円規模に拡大するため、
          早期発見と迅速な対応が求められます。
        </p>
      </header>

      <section className="mt-6 space-y-6">

        {/* 料金影響比較表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分別の最終保障供給料金影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給の電力量単価は通常契約より大幅に高く設定されています。高圧・特別高圧の大口需要家ほど月額差が大きくなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">通常契約の単価目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">最終保障供給の単価目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">差額（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">月5万kWhの月額差</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">高圧</td>
                  <td className="border border-slate-200 px-3 py-2">18〜22円／kWh</td>
                  <td className="border border-slate-200 px-3 py-2">28〜35円／kWh</td>
                  <td className="border border-slate-200 px-3 py-2">+10〜13円／kWh</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+50〜65万円</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">特別高圧</td>
                  <td className="border border-slate-200 px-3 py-2">15〜19円／kWh</td>
                  <td className="border border-slate-200 px-3 py-2">26〜33円／kWh</td>
                  <td className="border border-slate-200 px-3 py-2">+11〜14円／kWh</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+55〜70万円</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">低圧（参考）</td>
                  <td className="border border-slate-200 px-3 py-2">25〜32円／kWh</td>
                  <td className="border border-slate-200 px-3 py-2">35〜45円／kWh</td>
                  <td className="border border-slate-200 px-3 py-2">+10〜13円／kWh</td>
                  <td className="border border-slate-200 px-3 py-2">+50〜65万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 単価は電力量料金のみの概算であり、基本料金・燃料費調整額・再エネ賦課金は含まない目安です。地域・事業者・時期によって異なります。
          </p>
        </section>

        {/* 最終保障供給に入りやすいケース */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧・特高で最終保障供給に入りやすいケース</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            大口需要家であっても、以下のような状況では意図せず最終保障供給に移行してしまうことがあります。
            各ケースの回避策を事前に押さえておくことが重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">ケース</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">理由</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">回避策</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">新電力の撤退・倒産</td>
                  <td className="border border-slate-200 px-3 py-2">契約していた新電力が供給停止になると自動的に最終保障供給へ移行する</td>
                  <td className="border border-slate-200 px-3 py-2">契約先の財務・供給能力を定期チェックし、複数候補を常に把握しておく</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">契約更新の見落とし</td>
                  <td className="border border-slate-200 px-3 py-2">自動更新条項がなく期間満了で失効した場合、供給空白が生じる</td>
                  <td className="border border-slate-200 px-3 py-2">満了3〜6か月前に更新・見直し手続きをカレンダー管理する</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">信用力・与信不足</td>
                  <td className="border border-slate-200 px-3 py-2">新電力から保証金要求・拒否を受けると契約締結に至らない</td>
                  <td className="border border-slate-200 px-3 py-2">財務状況の改善や保証書準備など信用補完の手段を確認しておく</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">大口需要・採算悪化</td>
                  <td className="border border-slate-200 px-3 py-2">電力市場価格高騰期に特高・高圧大口は新電力の採算が合わず、供給を断られる</td>
                  <td className="border border-slate-200 px-3 py-2">市場連動型・固定型の選択肢を複数確保し、価格高騰前に契約を確定する</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">エリア制約</td>
                  <td className="border border-slate-200 px-3 py-2">特定地域では新電力の参入が少なく、競争が起きにくい</td>
                  <td className="border border-slate-200 px-3 py-2">エリア外事業者の参入可否や送電網状況を確認し、既存電力も選択肢に残す</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 料金表・請求書の確認項目 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金表・請求書で見たい項目</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力と基本料金の関係（デマンド管理の有無）</li>
            <li>電力量料金と使用量の月次変動</li>
            <li>燃料費調整額など調整項目の寄与額</li>
            <li>前月比・前年同月比での変化率</li>
            <li>最終保障供給料金が適用されているかの確認（請求書の料金種別欄）</li>
          </ul>
        </section>

        {/* 切替時の使用実績整理 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">切替時に整理したい使用実績</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積の前提として、月次使用量だけでなく30分値・最大デマンド・季節変動・稼働時間帯を整理すると比較精度が上がります。
            高圧・特別高圧ではこの準備が切り替えスピードを左右します。基本料金に影響するデマンド値は特に重要で、
            過去12か月の最大デマンドを把握しておくことで見積依頼の精度が大きく改善します。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              { label: "月次電力量", detail: "過去12〜24か月分。季節変動の把握に必須" },
              { label: "最大デマンド（30分最大値）", detail: "基本料金算定の根拠。kW単位で記録" },
              { label: "30分値データ", detail: "スマートメーター設置済みなら取得可。負荷パターン分析に使用" },
              { label: "稼働時間帯・休日パターン", detail: "時間帯別料金メニューの適否判断に必要" },
            ].map(({ label, detail }, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-800">{label}</p>
                <p className="mt-1 text-xs text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* チェックリスト */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧・特高の最終保障供給チェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の項目を定期的に点検することで、意図しない最終保障供給移行を防げます。
          </p>
          <ul className="mt-4 space-y-3">
            {[
              {
                item: "現在の電力供給契約の満了日を把握し、6か月前にリマインダーを設定している",
                note: "見落としによる期間失効が最もシンプルな移行原因",
              },
              {
                item: "契約している新電力の財務状況・供給継続能力を年1回以上確認している",
                note: "撤退・倒産リスクを早期察知し、代替先の検討を前倒しできる",
              },
              {
                item: "複数の小売電気事業者から毎年見積を取得し、切り替え候補を持っている",
                note: "価格高騰時に即座に動けるよう関係を維持しておく",
              },
              {
                item: "最大デマンド・30分値データを最新の状態で保持している",
                note: "見積依頼の精度が上がり、より良い条件を引き出しやすくなる",
              },
              {
                item: "市場価格高騰期でも固定型メニューの選択肢があるか確認している",
                note: "変動リスクを一定期間ヘッジする手段として重要",
              },
              {
                item: "現在の請求書が最終保障供給料金でないことを毎月確認している",
                note: "料金種別欄や単価水準の変化に早期気づきのための定点チェック",
              },
            ].map(({ item, note }, i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-sky-100 bg-white p-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-800">{item}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 既存解説ページ案内 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧・特高の料金体系をさらに詳しく知る</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            基本の読み方は{" "}
            <Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              高圧電力の料金の見方
            </Link>
            、特別高圧の論点は{" "}
            <Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              特別高圧電力の料金の見方
            </Link>{" "}
            を参照してください。それぞれの契約区分の特性を理解することで、最終保障供給との差異をより正確に把握できます。
          </p>
        </section>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2025-09-01" />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度全体の位置づけと基本事項を確認できます。",
            },
            {
              href: "/last-resort-supply-price",
              title: "最終保障供給の料金水準",
              description: "通常契約との単価差と月額負担増加の目安を確認できます。",
            },
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "請求項目の基礎を整理できます。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧電力の料金の見方",
              description: "特別高圧の契約特性と確認ポイントを整理できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "受電区分と使用実績を整理したら比較検討を進める入口です。",
            },
          ]}
        />

        <ContentCta
          heading="区分別の整理を比較実務へつなげる"
          description="受電区分と使用実績を整理したら、比較ページで切り替え候補を具体化できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーターで診断する" },
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
