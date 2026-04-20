import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

// --- 定数 ---
const pageTitle = "工場の電気代削減｜生産ラインを止めずにできる5つの施策";
const pageDescription =
  "製造業（金属加工・食品・化学）向けに、生産を止めずに取り組める電気代削減施策を5つ解説。デマンド監視、ピークシフト、エア漏れ対策、高効率モーター、太陽光自家消費の効果と工場規模別の優先順位を整理します。";
const pageUrl = "https://simulator.eic-jp.org/factory-electricity-cost-reduction";

// 5つの施策
const measures = [
  {
    no: 1,
    title: "デマンド監視による契約電力最適化",
    effect: "契約電力を5〜15%削減可能。基本料金は契約電力 × 単価で決まるため、直接効果が大きい",
    action:
      "デマンドコントローラーを設置して30分デマンド値を常時監視。警報閾値を超える前に空調・生産設備の負荷を自動的に調整します。設備投資は100〜500万円、投資回収は1〜3年が一般的。",
    suited: "契約電力500kW以上で、ピークが短時間に集中する工場",
  },
  {
    no: 2,
    title: "夜間・休日のピークシフト運用",
    effect: "電力量料金単価が安い時間帯にシフトすることで、電気代を3〜8%削減",
    action:
      "生産工程のうちシフト可能な工程（加熱処理・電解・製氷など）を夜間・休日に寄せる。高圧受電の時間帯別料金メニュー（ピーク/オフピーク）と組み合わせるとさらに効果が高い。",
    suited: "連続操業ではなくバッチ生産の工場、夜間稼働が可能な設備を持つ工場",
  },
  {
    no: 3,
    title: "エア漏れ・待機電力の削減",
    effect: "コンプレッサー消費電力の10〜30%を占めるエア漏れを削減。工場全体で2〜5%の電気代削減",
    action:
      "超音波リーク検知器で漏れ箇所を特定し、継手・バルブを更新。あわせて配管圧力を適正化（0.1MPa下げるごとに7%の電力削減）。待機時の自動シャットダウンも組み合わせる。",
    suited: "圧縮空気を多用する工場（金属加工・組立・食品）、稼働10年以上の工場",
  },
  {
    no: 4,
    title: "高効率モーター・インバータ化",
    effect: "旧型三相モーターをIE3以上に更新することで、モーター消費電力を3〜8%削減",
    action:
      "100kW以上の大型モーター、長時間稼働するポンプ・ファン・コンプレッサーから優先的に更新。可変負荷工程ではインバータ制御を導入（変動率が大きいほど効果大）。",
    suited: "モーター負荷が大きい工場（化学・鉄鋼・食品加工）、生産ラインが固定化されている工場",
  },
  {
    no: 5,
    title: "太陽光自家消費の導入",
    effect: "年間電気代の15〜30%を削減。再エネ賦課金・託送料金の回避にもつながる",
    action:
      "屋根・遊休地にPPA（第三者所有）または自社投資で太陽光を導入し、発電電力を工場内で自家消費。蓄電池と組み合わせると、夕方ピークのカット効果も追加できる。",
    suited: "日中の負荷が大きい工場（食品・化学・製薬）、広い屋根面積を持つ工場",
  },
];

// 工場規模別の優先順位
const priorityRows = [
  {
    scale: "月50万円クラス（契約電力100kW前後）",
    first: "エア漏れ・待機電力",
    second: "デマンド監視（簡易機器）",
    third: "モーター更新（要度に応じて）",
    note: "投資回収が早い施策を優先。太陽光は屋根面積次第",
  },
  {
    scale: "月200万円クラス（契約電力300〜500kW）",
    first: "デマンド監視＋契約電力見直し",
    second: "ピークシフト運用",
    third: "高効率モーター・インバータ化",
    note: "複合施策で年間5〜10%の削減が現実的",
  },
  {
    scale: "月500万円クラス（契約電力1,000kW以上）",
    first: "太陽光自家消費（PPA）",
    second: "デマンド監視高度化",
    third: "契約メニュー見直し（市場連動・ハイブリッド）",
    note: "設備投資と契約最適化を組み合わせて年間10〜20%削減も視野",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "工場 電気代 削減",
    "製造業 電気料金 削減",
    "デマンド監視 工場",
    "ピークシフト 工場",
    "エア漏れ 対策",
    "高効率モーター IE3",
    "工場 太陽光 自家消費",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/industry-guide"],
  },
};

export default function FactoryElectricityCostReductionPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "業種別の見直しポイント集", url: "https://simulator.eic-jp.org/articles/industry-guide" },
          { name: "工場の電気代削減" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">工場の電気代削減</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            工場の電気代削減｜生産ラインを止めずにできる5つの施策
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            工場にとって電気代は、原材料・人件費と並ぶ主要コスト項目です。特に金属加工・食品・化学の3業種では、売上高に占める電気代比率が5〜15%に達する事業所も珍しくありません。しかし「生産を止めてしまうと機会損失のほうが大きい」という制約があるため、削減施策は稼働を維持できるものに絞り込む必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            本記事では、生産ラインを止めずに実行できる電気代削減施策を5つ整理し、工場規模別（月50/200/500万円クラス）の優先順位を提示します。業種特性と負荷パターンを踏まえた実務的な選び方をまとめています。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* H2: 工場の電気代構造 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">工場の電気代構造を押さえる</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              工場の電気代は、基本料金（契約電力 × 単価）と電力量料金（使用量 × 単価）の合算で成り立ちます。加えて燃料費調整額・再エネ賦課金が上乗せされます。削減には、この構造のうちどの部分に手をつけるかを意識することが重要です。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-medium text-slate-900">基本料金削減：</span>契約電力（デマンド値）を下げる。デマンド監視が主要施策</li>
              <li><span className="font-medium text-slate-900">電力量料金削減：</span>使用量を下げる、または安い時間帯にシフトする。エア漏れ・モーター更新・ピークシフト</li>
              <li><span className="font-medium text-slate-900">構造的な単価削減：</span>太陽光自家消費で賦課金・託送料金を回避する</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              基本料金は契約電力1kWあたり1,600〜2,000円/月、年間では約2万円相当。100kW削減できれば年間200万円程度のインパクトとなり、多くの場合、使用量削減より投資対効果が良いのが特徴です。
            </p>
          </section>

          {/* H2: 5つの施策 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">生産を止めずにできる5つの施策</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下の5施策は、生産ラインを停止せずに実行できることを基準に選定しています。それぞれに効果の目安・実行ステップ・向いている工場を示します。
            </p>
            <div className="mt-4 space-y-4">
              {measures.map((m) => (
                <div key={m.no} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                      {m.no}
                    </span>
                    {m.title}
                  </p>
                  <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                    <p><span className="font-medium text-slate-900">効果：</span>{m.effect}</p>
                    <p><span className="font-medium text-slate-900">実行内容：</span>{m.action}</p>
                    <p><span className="font-medium text-slate-900">向いている工場：</span>{m.suited}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* H2: 工場規模別の優先順位 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">工場規模別の優先順位（月50/200/500万円クラス）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気代の規模によって投資対効果のある施策が変わります。小規模では投資回収の早い運用施策を、大規模では構造的な削減施策を優先するのが基本です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
                <thead>
                  <tr className="bg-slate-50 text-slate-900">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">規模</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">最優先</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">次点</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">第3優先</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {priorityRows.map((row) => (
                    <tr key={row.scale} className="align-top hover:bg-slate-50">
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{row.scale}</td>
                      <td className="border border-slate-200 px-3 py-2">{row.first}</td>
                      <td className="border border-slate-200 px-3 py-2">{row.second}</td>
                      <td className="border border-slate-200 px-3 py-2">{row.third}</td>
                      <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* H2: 業種別の留意点 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別の留意点（金属加工・食品・化学）</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                <span className="font-medium text-slate-900">金属加工：</span>
                プレス機・溶接機の瞬時負荷が大きく、デマンド監視の効果が高い。電炉を持つ工場は再エネ賦課金の減免制度対象になる可能性がある
              </li>
              <li>
                <span className="font-medium text-slate-900">食品：</span>
                冷蔵・冷凍の連続負荷が中心。高効率冷凍機・LED化との組み合わせが有効。HACCP対応の温度管理制約を超えない範囲でピークシフトする
              </li>
              <li>
                <span className="font-medium text-slate-900">化学：</span>
                反応炉・蒸発缶など長時間運転設備の負荷率改善が鍵。インバータ化と排熱回収の併用で大幅削減が見込める。屋根面積が広いため太陽光自家消費との相性も良い
              </li>
            </ul>
          </section>

          {/* H2: 契約見直しとの組み合わせ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約見直しとの組み合わせ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              設備・運用面の削減と並行して、電力契約の見直しも効果的です。特に月200万円クラス以上では、5施策のうち設備投資が重い施策（モーター更新・太陽光）よりも、契約メニュー切替のほうが投資ゼロで即効性があるケースが多くあります。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>固定プランから市場連動プランへ切替：JEPX安値局面での削減メリットを享受</li>
              <li>ハイブリッドプランへ切替：市場連動の恩恵と固定の安定性を両立</li>
              <li>複数拠点一括での契約再編：ボリューム交渉で単価低減を狙う</li>
              <li>設備投資施策と契約見直しを組み合わせ、短期（契約）＋中長期（設備）の二段構えで削減効果を積み上げる</li>
            </ul>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ：工場電気代削減を進める順番</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>基本料金削減（デマンド監視）は投資回収が早く、どの規模でも最優先候補</li>
              <li>運用施策（エア漏れ・ピークシフト）は投資ゼロ〜少額で即効性があるため、まず着手する</li>
              <li>設備投資施策（モーター・太陽光）は中期計画として、規模に応じた優先度で検討する</li>
              <li>業種特性と負荷パターンを踏まえて、5施策の組み合わせを最適化する</li>
              <li>契約見直しと並行して進めると、短期効果と中長期効果を積み上げられる</li>
            </ul>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/factory-electricity-cost-benchmark",
                title: "工場の電気代相場（業種・規模別）",
                description: "業種別・規模別の月額電気代ベンチマークを整理。",
              },
              {
                href: "/assembly-factory-electricity-cost-review",
                title: "組立工場の電気料金見直しポイント",
                description: "生産ラインとデマンド管理の観点からの見直し。",
              },
              {
                href: "/food-factory-electricity-cost-review",
                title: "食品工場の電気料金見直しポイント",
                description: "冷蔵・冷凍負荷を踏まえた食品工場の対策。",
              },
              {
                href: "/demand-response-cost-benefit",
                title: "デマンドレスポンスの費用対効果",
                description: "契約電力削減・需給調整への貢献を両立する仕組み。",
              },
              {
                href: "/self-consumption-solar-cost-benefit",
                title: "自家消費型太陽光の費用対効果",
                description: "屋根・遊休地を活用した太陽光自家消費の導入判断。",
              },
            ]}
          />

          <ContentCta
            heading="工場の電気代削減シナリオを試算する"
            description="現在の契約電力と使用量を入力すると、契約見直しによる削減余地を自動で試算できます。設備投資との組み合わせ提案も可能ですので、詳細はお問い合わせください。"
            links={[
              { href: "/", label: "シミュレーターで試算する" },
              { href: "/contact", label: "削減施策について相談する" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="工場の電気代削減、専門家に相談しませんか？"
            description="生産ラインの電力使用パターン分析からデマンド抑制策、契約メニューの最適化まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
