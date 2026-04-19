import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "データセンターの電力契約｜特別高圧の選び方と注意点";
const pageDescription =
  "データセンター（DC）の電力契約は24時間定常負荷・N+1冗長・高負荷率が前提です。特別高圧契約の設計、UPS/自家発連携、GPU増設を見越した余裕度、10MW〜ハイパースケール級の契約パターンを実務視点で整理します。";
const pageUrl = "https://simulator.eic-jp.org/datacenter-electricity-contract-guide";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["datacenter-ai-demand"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "データセンター 電力契約",
    "DC 特別高圧",
    "データセンター 特別高圧",
    "N+1 冗長 電源",
    "ハイパースケール 電力",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/datacenter-ai-demand", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/datacenter-ai-demand"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        faq={FAQ_ITEMS}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "データセンター・AI需要", url: "https://simulator.eic-jp.org/articles/datacenter-ai-demand" },
          { name: "データセンターの電力契約" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/datacenter-ai-demand" className="underline-offset-2 hover:underline">データセンター・AI需要</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">データセンターの電力契約</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">データセンターの電力契約｜特別高圧の選び方と注意点</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>結論：10MW級以上のDCは特別高圧が前提、N+1冗長のため契約電力は実需の1.3〜1.5倍で設計し、GPU増設余地を織り込む必要があります。</strong>
            このページでは、24時間定常負荷・高負荷率（80%超）のDC特有論点を、10MW・30MW・ハイパースケール級の契約パターンで比較しながら整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">なぜDCは特別高圧契約が基本なのか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              データセンターは一般的なオフィスビルや工場と異なり、<strong>24時間365日の定常負荷</strong>が続きます。負荷率（平均需要／契約電力）は一般オフィスの15〜25%に対し、DCは80〜95%に達することが珍しくありません。kWあたりの基本料金を稼働時間で割り戻すと、契約電力の安い単価が効いてくるため、2,000kW以上での特別高圧契約が圧倒的に有利になります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              10MW（10,000kW）を超えるハイパースケール級では、特別高圧でも66kV以上の高電圧受電が一般的です。受電点が変電所に近い立地を選ぶほど、引込線の建設費と託送料金の負担が軽くなる構造で、DC立地選定はしばしば「電力コスト最適化プロジェクト」でもあります。ラック単位（6kW〜30kW/ラック）の消費電力設計と、サーバー室全体の契約電力設計は、必ず受電段階から遡って検討する必要があります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">N+1冗長電源と契約電力の設計</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              Tier III以上のDCでは<strong>N+1（またはN+N）冗長</strong>が標準です。実需が8MWでも、冗長経路を同時通電する運用では受電側の契約電力は実需の1.3〜1.5倍、つまり10〜12MWが必要になります。ここを「実需＝契約電力」で見積もると、冗長系統への切替時にデマンドを超過し、翌月以降の基本料金が跳ね上がるリスクが生じます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              逆にTier II相当（N冗長のみ）や、クラウド事業者のアベイラビリティゾーン設計でソフトウェア側で冗長化するケースでは、契約電力は実需＋10〜20%マージンで済みます。Tier水準と契約電力設計は裏表の関係にあり、SLA設計との整合が不可欠です。30分デマンドで判定される最大需要電力は、冗長切替の瞬間値に引きずられるため、<Link href="/demand-value-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド値の考え方</Link>を踏まえた運用監視が必須になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">高負荷率に合うプラン選びとPPA</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DCの高負荷率は、夜間・休日に需要が落ちる一般工場とは逆の料金最適化課題を生みます。時間帯別料金（TOU）で夜間単価が安いプランは、むしろ夜間比率が高いDCにとって有利ですが、24時間フラット消費では昼夜の単価差を活かし切れないケースもあります。燃料費調整・再エネ賦課金を含めた<strong>実質的な平均単価</strong>で比較する視点が重要です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ハイパースケーラーは10〜25年のコーポレートPPA（電力購入契約）で価格を長期固定し、JEPX市場変動リスクを遮断する戦略を取ります。一方で国内DC事業者は、市場連動＋燃料費調整の伝統的プランに留まるケースも多く、2022〜2023年の急騰局面で大きなコスト変動を受けました。AI需要で電力リスクが再び上昇する2026年以降は、<Link href="/corporate-ppa-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コーポレートPPA</Link>や非化石証書の組み合わせが主流となる見通しです。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">UPS・自家発との連携と停電対策</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DCの停電対策は、<strong>UPSが瞬断〜数分をカバーし、自家発（ディーゼル／ガスタービン）が長時間をカバーする</strong>二段構えが標準です。UPSのバッテリー容量はラックあたり5〜15分が一般的で、その間に自家発が起動・同期して負荷を引き継ぎます。自家発の定格容量は、受電点喪失時に全負荷を支えるため、契約電力とほぼ同等以上を確保するのが通例です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法令面では、消防法上の非常電源（排煙・避難照明）とDC事業継続用の自家発は分けて設計すべきケースが多く、また電気事業法の保安規程・主任技術者の選任も必要になります。系統への逆潮流を伴う自家発連系（ピークカット兼用など）を検討する場合は、一般送配電事業者との協議と接続検討申込みが前提です。詳細は<Link href="/emergency-power-source-options" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">非常用電源の選び方</Link>も参照してください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">GPU増設を見越した契約電力の余裕度</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              生成AI需要の拡大で、DCのラック密度は従来の6〜10kW/ラックから、GPUサーバー中心のHPC型では30〜60kW/ラックへと急上昇しています。既存DCに後からGPUラックを増設する場合、受電設備・配電盤・冷却設備のいずれかが最初にボトルネックとなり、契約電力の増加だけでは対応できないことが多くあります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新設・改修の契約電力設計では、<strong>将来3〜5年のGPU増設シナリオ</strong>を織り込んだキャパシティプランが求められます。増設後に契約電力を引き上げると、一般送配電事業者の接続検討に6ヶ月以上、場合によっては変電所増強を伴い2〜3年かかるケースもあります。AIワークロードの立ち上がりの速さに追いつくため、初期設計段階で「物理容量」と「契約容量」の双方にマージンを持たせることが実務上の定石です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">冷却電力の計上とPUE</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DCの総消費電力は、IT機器そのものの電力（ITロード）と、冷却・照明・UPS損失を含む補機電力で構成されます。両者の比率がPUE（Power Usage Effectiveness）で、一般的な空冷DCでPUE1.5前後、最新のハイパースケール液冷DCでPUE1.1〜1.2です。契約電力はIT＋補機の総計で決まるため、<strong>PUEの1割改善は契約電力の1割削減に直結</strong>します。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              冷却電力は外気温に依存するため、月次・季節で総需要が変動します。夏季ピーク月のデマンドが契約電力を規定するため、北海道・東北など涼しい立地のDCはPUE改善と契約電力抑制の両面で有利になります。PUE最適化の具体策は<Link href="/datacenter-cooling-optimization" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンター冷却最適化</Link>で詳述しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">10MW級・30MW級・ハイパースケール級の契約パターン比較</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border border-slate-200 px-3 py-2 text-left">規模</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">受電電圧</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">契約パターン</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">主な論点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">10MW級</td>
                    <td className="border border-slate-200 px-3 py-2">特別高圧 22kV／66kV</td>
                    <td className="border border-slate-200 px-3 py-2">標準特高メニュー＋燃調、または市場連動ハイブリッド</td>
                    <td className="border border-slate-200 px-3 py-2">GPU増設余地・N+1冗長・燃調ヘッジ</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">30MW級</td>
                    <td className="border border-slate-200 px-3 py-2">特別高圧 66kV／154kV</td>
                    <td className="border border-slate-200 px-3 py-2">相対交渉プラン＋一部PPA、非化石証書併用</td>
                    <td className="border border-slate-200 px-3 py-2">系統接続の余裕・再エネ比率・長期固定</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">ハイパースケール級（100MW超）</td>
                    <td className="border border-slate-200 px-3 py-2">特別高圧 154kV／275kV</td>
                    <td className="border border-slate-200 px-3 py-2">長期PPA（10〜25年）中心、自営線・専用変電所検討</td>
                    <td className="border border-slate-200 px-3 py-2">立地×系統容量、RE100対応、容量市場拠出金</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">※ 実際の電圧区分・契約メニューは一般送配電事業者・小売事業者で差があります。上記は代表例です。</p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">DC電力契約の実務チェックリスト</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li>□ 24時間負荷率・冗長経路の同時通電有無を明文化している</li>
              <li>□ 契約電力に3〜5年のGPU増設余地を織り込んでいる</li>
              <li>□ UPS・自家発の定格と契約電力の整合を確認している</li>
              <li>□ 燃料費調整・市場連動の価格変動幅を経営層と共有している</li>
              <li>□ PUE目標値と冷却電力ピーク月の契約電力を整合している</li>
              <li>□ PPA・非化石証書の併用で脱炭素要件を満たしている</li>
            </ul>
          </section>
        </section>

        <MarketDataFaq items={FAQ_ITEMS} />

        <AuthorBadge publishedAt="2026-04-19" updatedAt="2026-04-19" />

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/datacenter-electricity-demand-surge", title: "データセンター電力需要の急増", description: "AI時代のDC需要動向と法人電気料金への波及。" },
              { href: "/datacenter-cooling-optimization", title: "データセンター冷却最適化", description: "PUE改善と液冷の実務ポイント。" },
              { href: "/datacenter-location-grid-constraints", title: "データセンター立地と送電網制約", description: "系統空き容量の確認プロセス。" },
              { href: "/extra-high-voltage-electricity-pricing", title: "特別高圧の電気料金", description: "特別高圧料金メニューの基礎。" },
              { href: "/articles/datacenter-ai-demand", title: "データセンター・AI需要カテゴリ", description: "関連記事の一覧を見る。" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="DC規模の特別高圧契約は、設計段階の前提次第で年間コストに数千万円単位の差が出ます。自社案件のリスクをまず可視化しましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "DC電力設計を専門家に相談する" },
            ]}
          />
        </div>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="DC電力契約の設計、専門家に相談しませんか？"
            description="10MW級以上の特別高圧契約やN+1冗長設計、将来のGPU増設を見越した契約電力の決め方まで、エネルギー情報センターの専門スタッフが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
