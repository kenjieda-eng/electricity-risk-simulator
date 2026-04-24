import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import { ArticleJsonLd, BreadcrumbJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "2026〜2028年 法人電気料金 制度改定カレンダー｜容量拠出金・再エネ賦課金・託送料金の時系列一覧";
const pageDescription =
  "2026年度から2028年度にかけての法人電気料金に影響する制度改定（容量拠出金の段階的増額、再エネ賦課金新単価、託送料金 第2次規制期間、特別高圧小売競争促進）を時系列カレンダー形式で整理。確定事項と見通しを区別し、予算策定と契約見直しに使える形でまとめます。";
const pageUrl =
  "https://simulator.eic-jp.org/tariff-revision-calendar-2026";
const publishedDate = "2026-04-27";

// カレンダー表のデータ
const calendarRows: {
  period: string;
  item: string;
  unitPrice: string;
  impact: string;
  status: "confirmed" | "announced" | "discussion";
}[] = [
  {
    period: "2026-05 検針分",
    item: "再エネ賦課金 新単価適用",
    unitPrice: "4.18円/kWh（+0.20円）",
    impact: "約200万円/年 増",
    status: "confirmed",
  },
  {
    period: "2026-04",
    item: "託送料金（本体改定なし、期中調整のみ）",
    unitPrice: "エリア別の微調整",
    impact: "小〜中規模（契約条件による）",
    status: "confirmed",
  },
  {
    period: "2026-04",
    item: "小売約款 改定（市場調整額、予告期間）",
    unitPrice: "契約による",
    impact: "契約条件による",
    status: "confirmed",
  },
  {
    period: "2026年度",
    item: "容量拠出金(全国平均、既決)",
    unitPrice: "5,226円/kW",
    impact: "契約形態による（kWh 転嫁 or kW 転嫁）",
    status: "confirmed",
  },
  {
    period: "2026-11〜",
    item: "冬季 JEPX スパイク（市場連動メニュー）",
    unitPrice: "スポット 20円/kWh 超の日あり",
    impact: "単月で数百万円の上振れ",
    status: "announced",
  },
  {
    period: "2027年度",
    item: "容量拠出金(全国平均、既決)",
    unitPrice: "7,847円/kW（+50%）",
    impact: "数百〜2,000万円規模の増",
    status: "confirmed",
  },
  {
    period: "2027-04",
    item: "特別高圧 競争促進策 開始",
    unitPrice: "情報開示・標準約款整備",
    impact: "契約見直しで数%削減の可能性",
    status: "discussion",
  },
  {
    period: "2027-04〜",
    item: "需給調整市場 全商品整備",
    unitPrice: "一次〜三次調整力 整備完了",
    impact: "DR 収益機会の拡大",
    status: "announced",
  },
  {
    period: "2028年度",
    item: "容量拠出金(エリア別、既決)",
    unitPrice: "8,785〜14,812円/kW",
    impact: "エリア別に 1,000〜1,500万円規模の増",
    status: "confirmed",
  },
  {
    period: "2028-04",
    item: "託送料金 第2次規制期間入り",
    unitPrice: "エリア別改定（各社公表予定）",
    impact: "数百万円〜（規模依存）",
    status: "announced",
  },
];

const statusLabel = {
  confirmed: { icon: "🔴", label: "確定", color: "text-red-600" },
  announced: { icon: "🟡", label: "公表予定", color: "text-amber-600" },
  discussion: { icon: "⚪", label: "議論中", color: "text-slate-500" },
} as const;

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 制度改定 2026",
    "容量拠出金 2027",
    "容量拠出金 2028",
    "再エネ賦課金 2026",
    "託送料金 改定",
    "法人電気料金 予算",
    "制度改定カレンダー",
    "レベニューキャップ 第2次",
    "特別高圧 競争促進",
    "需給調整市場 整備",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

// --- Page Component ---
export default function TariffRevisionCalendar2026Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          {
            name: "電気料金の推移と高止まり",
            url: "https://simulator.eic-jp.org/articles/price-trends",
          },
          { name: "2026〜2028年 法人電気料金 制度改定カレンダー" },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          {
            name: "電気料金の推移と高止まり",
            url: "https://simulator.eic-jp.org/articles/price-trends",
          },
          { name: "2026〜2028年 法人電気料金 制度改定カレンダー" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            電気料金の推移と高止まり
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            2026〜2028年 法人電気料金 制度改定カレンダー
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2026年度から2028年度は、法人の電気料金に直結する制度改定が集中する3年間です。容量拠出金の段階的増額（2027年度 +50%、2028年度エリア別に最大2.8倍）、再エネ賦課金の新単価、託送料金 第2次規制期間入り、需給調整市場の整備などが重なります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            本記事では、確定事項と公表ベースの見通しを時系列で整理し、法人契約者が予算策定と契約見直しの際に参照できるカレンダー形式でまとめます。
          </p>
        </header>

        {/* 本文セクション群 */}
        <section className="mt-6 space-y-6">
          {/* §1 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              2026年度は制度改定の集中年度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2024年の容量市場本格運用開始、2025年の燃料費調整額上限撤廃から続く制度改定の波は、2026年度にさらに大きくなります。特に法人契約者に直接影響する改定は、
              <strong>再エネ賦課金の年度更新（毎年5月検針分から適用）</strong>、
              <strong>
                託送料金のレベニューキャップ制度下の期中調整（年次）および第2次規制期間入りによる本体改定（2028年4月）
              </strong>
              、
              <strong>
                容量拠出金の年次単価改定（毎年度4月〜翌年度3月適用、実需給年度ごとに単価が決定）
              </strong>
              の3本柱に加え、2027年度に向けた需給調整市場の整備や特別高圧小売競争促進関連の議論が並行しています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本記事の対象範囲は、2026年4月から2028年3月までの2年間。この間に発生する、あるいは公表ベースで予定されている制度変更を、
              <strong>確定事項</strong>・<strong>公表予定</strong>・
              <strong>議論中</strong>の3段階で色分けし、それぞれの影響を金額規模で示します。
            </p>
          </section>

          {/* §2 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              2026年4月〜: 現時点で確定している改定
            </h2>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              再エネ賦課金の新単価適用（2026年5月検針分〜）
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              2026年度の再エネ賦課金単価は、2026年3月19日の経済産業省告示により
              <strong> 4.18円/kWh </strong>と決定されました。2025年度単価
              3.98円/kWh から
              <strong> +0.20円/kWh（前年度比 +5.0%）</strong>
              の値上げです。適用は2026年5月検針分の電気料金から2027年4月検針分までの12ヶ月間。年間500万kWhを使う中規模事業所では、前年比で
              <strong> 約100万円の賦課金増 </strong>
              が発生します（500万kWh × 0.20円/kWh = 100万円）。年間1,000万kWhの大口事業所では
              <strong> 約200万円増 </strong>の見込みです。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は固定価格買取制度（FIT）および入札制度（FIP）による買取費用を、全需要家から使用量に応じて徴収する仕組みです。法人契約者にとって「避けようがない固定コスト」であり、契約メニューを切り替えても単価は変わりません。
              <strong>予算上は外部環境コストとして別枠で管理する</strong>
              ことをお勧めします。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              託送料金はレベニューキャップ制度で期中調整（2026年度は小規模調整のみ）
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              託送料金については、
              <strong>2026年4月には全国一律の大規模な定期改定はありません</strong>
              。現行の託送料金は、2023年4月に導入されたレベニューキャップ制度の下、第1次規制期間（2023〜2027年度）の5年計画に基づいて運用されており、
              <strong>次の本体改定は2028年4月の第2次規制期間入り</strong>
              を待つことになります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ただし、毎年度の
              <strong>期中調整</strong>
              （レベニューキャップ制度下での事後的な費用回収調整）により、小幅な託送料金の変動が発生することはあります。系統安定化のための追加電源調達費用、連系線整備費用、需給調整市場関連費用などは、期中調整として単価に反映される場合があります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複数エリアに事業所を持つ企業は、
              <strong>
                2028年4月の第2次規制期間入りに向けて、各一般送配電事業者が2027年度中に公表する収入計画（収入見通し）をウォッチ
              </strong>
              しておくと、2028年度以降の託送料金の方向性を早期に把握できます。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              小売電気事業者の契約約款改定
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費調整額の上限撤廃以降、小売電気事業者各社は自由料金メニューの約款を随時見直しています。2026年4月適用の約款改定で多く見られるのは、
              <strong>市場価格調整額の算式変更</strong>と
              <strong>予告期間の短縮</strong>
              。契約更新前に約款最新版を確認しないと、契約期間中に想定外の単価変更を受け入れることになります。
            </p>
          </section>

          {/* §3 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              2026年度の容量拠出金と冬季スパイクの織り込み
            </h2>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              容量拠出金の 2026年度適用単価（全国平均 5,226円/kW、既知値）
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              容量拠出金は、実需給年度の4年前にOCCTO（電力広域的運営推進機関）がメインオークションを実施して単価を決定し、実需給年度に小売電気事業者経由で需要家に転嫁される仕組みです。2026年度（実需給）の約定結果はすでに2023年1月に公表済で、
              <strong>全国平均 5,226.43円/kW</strong>
              です。法人契約者には、小売事業者経由で
              <strong>
                使用電力量に比例して（kWh単価に上乗せ）
              </strong>
              転嫁されるか、
              <strong>
                契約電力に比例して（kW単価に上乗せ）
              </strong>
              転嫁されるかが契約約款で決まります。どちらの方式かで負荷率の高低による実効単価が変わるため、契約約款の拠出金条項は必ず確認してください。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              重要なのは、
              <strong>次年度以降の単価上昇がすでに確定している</strong>
              ことです。2027年度（実需給）の約定結果は2024年1月24日に公表され、
              <strong>全国平均 7,847円/kW</strong>。2026年度比
              <strong> +2,620円/kW（約1.5倍）</strong>
              の大幅上昇です。さらに2028年度（実需給）の約定結果は2025年1月29日に公表され、エリア別に
              <strong>
                {" "}
                8,785円/kW（北陸・関西・中国・四国）〜14,812円/kW（北海道・東北・東京）{" "}
              </strong>
              と分化しています（詳細は次セクションで解説）。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大口事業所では、この段階的な単価上昇により年度ごとの単月請求額が拡大していくパターンが発生するため、
              <strong>
                単年度予算ではなく 2026〜2028年度の3年予算で容量拠出金を捉える
              </strong>
              ことを推奨します。容量拠出金の仕組みと2024年度からの履歴については{" "}
              <Link
                href="/capacity-contribution-simulation"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                容量拠出金シミュレーション
              </Link>{" "}
              で個別に試算できます。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              冬季調整の織り込み
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              JEPX 市場連動メニューでは、11月〜3月の冬季は需要ピークに合わせてスポット価格が上昇しやすい傾向があります。2025年冬も 20円/kWh を超える日が複数ありました。市場連動型の契約者は、
              <strong>
                冬季スポット上昇 + 翌年度からの容量拠出金単価の段階的上昇
              </strong>
              が重なる時期に、単月請求の山が来ることを前提に資金繰りを組む必要があります。特に2026年冬は、翌2027年度に容量拠出金が +50% に跳ね上がることが確定しているため、冬のJEPX高騰と併せて、年明けの契約更新タイミングで相見積もりを取るのが実務的です。
            </p>
          </section>

          {/* §4 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              2027年度〜2028年度: 容量拠出金の段階的増額と特別高圧改革
            </h2>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              容量拠出金の本格増額（2027年度 +1.5倍、2028年度はエリア別に最大2.8倍）
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              OCCTO が2024年1月24日に公表した2027年度実需給メインオークション約定結果では、
              <strong>全国平均単価が 7,847円/kW</strong>
              となり、2026年度の 5,226.43円/kW から
              <strong> 約1.5倍 </strong>
              に跳ね上がりました。さらに2025年1月29日公表の2028年度実需給約定結果では、
              <strong>エリア別に大きく分化</strong>
              しています：
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                北海道・東北・東京エリア: <strong>14,812円/kW</strong>
                （2026年度比 <strong>約2.8倍</strong>）
              </li>
              <li>
                中部エリア: <strong>10,280円/kW</strong>（同 約2.0倍）
              </li>
              <li>
                北陸・関西・中国・四国エリア: <strong>8,785円/kW</strong>
                （同 約1.7倍）
              </li>
              <li>
                九州エリア: <strong>13,177円/kW</strong>
                （同 約2.5倍、マルチプライス適用）
              </li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              背景には、
              <strong>北海道・東京・九州エリアで追加電源確保が必要</strong>
              と判断されたこと、老朽火力の退場と調整機能を持つ電源への切り替えコスト、容量市場の経過措置（初期割引）の段階的解除があります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              <strong>事業所立地による負担差が拡大</strong>
              するのがポイントです。首都圏や東北にデータセンター、工場、大型物流拠点を置く企業は、関西・中国エリア立地の同規模事業所と比べて、容量拠出金ベースで
              <strong> 1.7倍前後のコスト負担差 </strong>
              が発生します。年間1,000万kWhを使う事業所で仮に容量拠出金単価が1円/kWh分上乗せされれば、
              <strong> 年間1,000万円 </strong>
              のコスト増。2028年度には首都圏事業所でこの2倍近くが効いてくる計算です。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              特別高圧小売の競争促進関連
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧契約者の料金水準については、旧一般電気事業者以外の新電力の参入が限定的な状況が続いています。経産省は2027年度をメドに、特別高圧小売の競争促進策（情報開示の強化、標準約款の整備、切り替え手続きの簡素化など）を検討中です。この方向性が確定すれば、特別高圧契約者は従来以上に相見積もり取得と契約見直しの機会が増える可能性があります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特に2023〜2025年に高止まりした旧一電各社の自由料金メニューに対し、2027年度以降は競争による単価の正常化が期待されます。ただし、制度整備が遅れた場合や、発電側のコスト上昇で新電力側の提示単価も上がる場合は、競争効果が限定的になる可能性もあります。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              需給調整市場の更なる整備
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              2024年から本格運用が始まった需給調整市場は、2027年度にかけて一次・二次・三次調整力の全商品が整備される見込みです。法人契約者にとっては、ディマンドリスポンス（DR）による収益化の機会が拡大する方向性と読めます。詳しくは{" "}
              <Link
                href="/demand-response-revenue-model"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                DR 収益モデル
              </Link>{" "}
              で別途解説しています。
            </p>
          </section>

          {/* §5 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              法人契約者が押さえるべきアクションポイント
            </h2>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              契約更新時期と改定タイミングの突合
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              高圧・特別高圧の法人契約は通常1〜2年の契約期間があります。
              <strong>
                契約更新月と制度改定月（再エネ賦課金は5月検針分、容量拠出金は年度切替の4月）が重なるか、どちらが先に来るか
              </strong>
              を把握しないと、「改定後の新単価」と「更新時の提示単価」の比較が正しくできません。とくに2027年4月と2028年4月の直前に契約更新を迎える事業所は、容量拠出金の +1.5倍 / +2.8倍 分を織り込んだ単価が提示されているか、別扱い（実費ベース転嫁）になっているかを約款で確認してください。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              予算策定時の織り込み方
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              年度予算（4月〜翌年3月）で電気代を計画する場合、制度改定の発生タイミングをそのまま反映すると、
              <strong>
                月次変動が大きくなりすぎて経営層に説明しづらい
              </strong>
              という実務上の課題があります。推奨は、年間総額を「基本単価×使用量」「燃調費想定」「再エネ賦課金」「容量拠出金」「託送料金」の5分類で分けて積算し、改定発生月ごとに注記を付ける方式です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              <Link
                href="/5-minimum-checkpoints-for-electricity-contract-review"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                5分チェックポイント
              </Link>{" "}
              では、契約見直し時に外してはならない論点をチェックリスト形式で整理しています。
            </p>
          </section>

          {/* §6 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              カレンダー1枚まとめ表
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              <strong>凡例</strong>: 🔴 確定事項 / 🟡 公表ベース予定 / ⚪
              議論中・見通し
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                      時期
                    </th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                      項目
                    </th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                      確定・想定単価
                    </th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                      影響規模（年間1,000万kWh事業所）
                    </th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                      状態
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {calendarRows.map((row, idx) => (
                    <tr key={idx} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                        {row.period}
                      </td>
                      <td className="border-b border-slate-200 px-3 py-2">
                        {row.item}
                      </td>
                      <td className="border-b border-slate-200 px-3 py-2">
                        {row.unitPrice}
                      </td>
                      <td className="border-b border-slate-200 px-3 py-2">
                        {row.impact}
                      </td>
                      <td
                        className={`border-b border-slate-200 px-3 py-2 whitespace-nowrap ${statusLabel[row.status].color}`}
                      >
                        {statusLabel[row.status].icon} {statusLabel[row.status].label}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 2026年度・2027年度・2028年度の容量拠出金単価はすでにOCCTOのオークションで確定済み（🔴）であり、2026年12月の審議会決定で覆るものではありません。🟡
              と ⚪
              の項目は今後の公表・審議会決定により内容が確定します。エリア別単価は北海道・東北・東京と北陸・関西・中国・四国で大きく異なり、複数エリアに事業所を持つ企業は事業所別の試算が必須です。
            </p>
          </section>

          {/* §7 */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年度から2028年度にかけての3年間は、法人電気料金に影響する制度改定が集中します。
              <strong>
                特に容量拠出金は、2027年度に全国平均 +50%（5,226 →
                7,847円/kW）、2028年度には首都圏・北海道・東北で2.8倍（14,812円/kW）に跳ね上がることがすでにオークション結果で確定しています
              </strong>
              。年間1,000万kWh事業所では、首都圏立地なら2028年度に容量拠出金関連だけで1,000万円規模の負担増が見込まれます。再エネ賦課金は2026年度
              4.18円/kWh（+0.20円）、託送料金は2028年4月の第2次規制期間入りまで本体改定なし、という違いも押さえておくポイントです。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              <strong>
                制度改定ごとに「すでに確定」「公表予定」「議論中」に分けて、確定事項から予算に織り込む
              </strong>
              のが王道です。制度改定個別ではなく全体構造から料金上昇を捉え直したい場合は{" "}
              <Link
                href="/why-business-electricity-prices-rise"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                法人電気料金が上昇する4つの構造要因
              </Link>{" "}
              も併読ください。改定発生時のインパクトを自社の契約条件で試算するには、
              <Link
                href="/"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                シミュレーター
              </Link>{" "}
              をご活用ください。
            </p>
          </section>
        </section>

        {/* RelatedLinks */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連記事"
            intro="制度改定の個別論点をさらに詳しく読む"
            links={[
              {
                href: "/electricity-rate-revision-mechanism",
                title: "電気料金の改定はどう決まる",
                description:
                  "規制料金の認可プロセスと自由料金の通知方式の違い、改定頻度を解説。",
              },
              {
                href: "/renewable-energy-surcharge-2026",
                title: "再エネ賦課金 2026年度単価",
                description:
                  "2026年度の新単価、過去推移、法人の負担試算方法。",
              },
              {
                href: "/capacity-contribution-simulation",
                title: "容量拠出金シミュレーション",
                description:
                  "単価変動が自社の年間コストに与える影響を試算。",
              },
              {
                href: "/business-electricity-retrospective",
                title: "月次振り返り",
                description:
                  "毎月の JEPX 動向・制度運用状況を時系列で記録。",
              },
              {
                href: "/why-business-electricity-prices-rise",
                title: "法人電気料金が上昇する4つの構造要因",
                description:
                  "改定個別ではなく、全体構造から料金上昇を理解する。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="改定を織り込んだ予算を作る"
            description="2026〜2028年度の改定見通しを反映した年間電気代を、御社の契約条件で試算できます。"
            links={[
              { href: "/", label: "予算向けシミュレーションを実行" },
              { href: "/articles/price-trends", label: "料金推移の解説を読む" },
            ]}
          />
        </div>

        {/* ContactCtaCard */}
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="primary"
            heading="2026〜2028年度 改定対応、予算策定にお困りではありませんか？"
            description="制度改定を織り込んだ年間予算、取締役会用資料、契約見直し戦略を当社がご支援します。"
          />
        </div>
      </main>
    </>
  );
}
