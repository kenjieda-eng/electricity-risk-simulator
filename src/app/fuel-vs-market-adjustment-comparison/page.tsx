import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "燃料費調整額と市場価格調整額の違いを完全比較｜法人向け仕組み・計算式・影響度";
const pageDescription =
  "燃料費調整額（燃調費）と市場価格調整額（市場調整額）の違いを、仕組み・計算式・影響の大きさ・見直しタイミングまで比較表で整理。法人の料金見直し時に「どちらのリスクが大きいか」を判断できるようにする完全ガイド。";
const pageUrl =
  "https://simulator.eic-jp.org/fuel-vs-market-adjustment-comparison";

// 10 項目比較表のデータ
const comparisonRows: {
  item: string;
  fuel: string;
  market: string;
}[] = [
  {
    item: "適用範囲",
    fuel: "ほぼ全契約（規制料金・自由化メニューの双方）",
    market: "市場連動プランが中心（一部の自由化メニューに限定）",
  },
  {
    item: "反映頻度",
    fuel: "月次（3 ヶ月平均の燃料 CIF 価格を参照）",
    market: "月次精算、ただし参照は 30 分単位の JEPX スポット実績",
  },
  {
    item: "計算基準",
    fuel: "原油・LNG・石炭の平均燃料価格と基準燃料価格の差",
    market: "JEPX スポット市場価格と契約の基準単価の差",
  },
  {
    item: "上限の有無",
    fuel: "規制メニューは上限あり、自由化メニューは撤廃済みが多数",
    market: "基本的に上限なし（青天井）",
  },
  {
    item: "過去最大の振れ幅",
    fuel: "2022〜2023 年に ±10〜15 円/kWh 規模で変動",
    market: "2020-21 冬に JEPX 250 円/kWh 超、2022 夏も高水準",
  },
  {
    item: "契約者の予測可能性",
    fuel: "2 ヶ月先まで単価が公表される（予算策定容易）",
    market: "前日スポット結果で確定、30 分単位で変動",
  },
  {
    item: "契約プランとの組み合わせ",
    fuel: "固定プランで主に露出（単価に内包 or 別建て）",
    market: "市場連動プランの中核要素、固定プランでは原則なし",
  },
  {
    item: "特別高圧での扱い",
    fuel: "業務用・産業用で燃調単価と換算係数が異なる",
    market: "市場連動メニューを選択すれば同様に露出",
  },
  {
    item: "再エネ余剰時の挙動",
    fuel: "燃料輸入価格次第でマイナス月が発生することあり",
    market: "九州・四国など再エネ豊富エリアでマイナス値になる月あり",
  },
  {
    item: "法人の見直し余地",
    fuel: "プラン選択（固定／市場連動の振り分け）で変動幅を限定",
    market: "需要側の時間シフト・蓄電・相対契約の検討で緩和",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "燃料費調整額",
    "市場価格調整額",
    "違い",
    "比較",
    "法人電気料金",
    "燃調費",
    "市場調整額",
    "燃調費 市場調整額 違い",
    "燃料費調整額 市場価格調整額 比較",
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
export default function FuelVsMarketAdjustmentComparisonPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          {
            name: "料金が上がる理由を知る",
            url: "https://simulator.eic-jp.org/articles/price-increase",
          },
          { name: "燃料費調整額と市場価格調整額の違いを完全比較" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            料金が上がる理由を知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            燃料費調整額と市場価格調整額の違い｜完全比較
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            <strong className="font-semibold text-slate-900">
              燃料費調整額（燃調費）
            </strong>
            と
            <strong className="font-semibold text-slate-900">
              市場価格調整額（市場調整額）
            </strong>
            は、どちらも電気料金に月次で反映される「調整額」ですが、参照する指標・反映される契約・変動の振れ幅はまったく別物です。本記事では法人の料金見直し判断に使える粒度で、仕組み・計算式・影響度・対策を比較表とシミュレーションで整理します。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            検索で「燃料費調整額と市場価格調整額の違いは？」と調べている方は、どちらかを解説した単独記事にたどり着いても比較ができないまま次の判断に進めないケースが多いはずです。本記事をブックマークして、契約更新・料金改定通知のたびに戻ってきて使える一次情報として活用してください。
          </p>
        </header>

        {/* 本文セクション群 */}
        <section className="mt-6 space-y-6">
          {/* H2-1: そもそも調整額とは */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              そもそも電気料金の「調整額」とは何か
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人の電気料金は、大きく 4 つの要素で構成されています:
              (1) 基本料金（契約電力 × 基本単価）、
              (2) 電力量料金（使用量 × 従量単価）、
              (3) 各種調整額（燃料費調整額・市場価格調整額など）、
              (4) 再エネ賦課金と容量拠出金などの制度要因。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              このうち
              <strong>調整額</strong>は「契約時点では確定していない外部変動を、月次で事後的に料金へ反映する」ための仕組みです。小売電気事業者は仕入れコスト（燃料・市場）が動いたときにその差分を吸収しきれないため、約款にもとづく調整額として需要家に転嫁します。
              どの調整額が請求書に載るかは、契約の種類（規制料金／自由化）と契約プラン（固定／市場連動）によって変わります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              代表的な調整額が、本記事で比較する
              <Link
                href="/fuel-cost-adjustment"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                燃料費調整額（燃調費）
              </Link>
              と、
              <Link
                href="/market-price-adjustment"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                市場価格調整額（市場調整額）
              </Link>
              の 2 つです。以降、それぞれの仕組みと両者の 10 項目比較、金額インパクト、対策まで順に整理します。
            </p>
          </section>

          {/* H2-2: 燃調費の仕組み */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整額（燃調費）の仕組みと計算式
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費調整額は、火力発電に使う
              <strong>原油・LNG・石炭</strong>
              の貿易統計上の平均 CIF 価格を基準価格と比較し、その差分を kWh あたりの単価として料金に反映する制度です。1996 年に規制料金向けに導入され、自由化以降も多くの小売電気事業者が約款で継続採用しています。
            </p>
            <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-900">
              <p className="font-semibold">
                燃料費調整単価 =（平均燃料価格 − 基準燃料価格）× 基準単価 ÷ 1,000
              </p>
              <p className="mt-2 text-xs text-slate-700">
                平均燃料価格 = 原油 CIF × α + LNG CIF × β + 石炭 CIF × γ（α / β / γ は小売電気事業者・契約区分ごとに設定）
              </p>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              月次改定ですが、参照するのは 3〜5 ヶ月前の貿易統計であるため、実際の燃料市況と請求への反映には
              <strong>常に 3〜5 ヶ月のタイムラグ</strong>
              が発生します。このラグがあることで、単価予測は 2 ヶ月先まで公表されるケースが多く、予算策定は比較的しやすい一方、急騰局面では「まだ請求に乗っていないが数ヶ月後に必ず乗る値上げ」が確定している状況が生まれます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              規制料金メニューには上限（基準燃料価格の 1.5 倍を超えた分は需要家負担なし）がありますが、自由化メニューは 2022 年以降に上限を撤廃するケースが相次ぎ、2023〜2025 年には +10〜15 円/kWh 規模の燃調単価が珍しくなくなりました。
            </p>
          </section>

          {/* H2-3: 市場調整額の仕組み */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              市場価格調整額（市場調整額）の仕組みと計算式
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              市場価格調整額は、JEPX（日本卸電力取引所）のスポット市場価格と、契約上の基準価格（7〜11 円/kWh のレンジで設定されることが多い）の差額を電力量料金に反映する仕組みです。「市場調整額」「電源調達調整額」「市場連動調整」など名称は小売ごとに異なりますが、考え方は同じです。
            </p>
            <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-900">
              <p className="font-semibold">
                市場価格調整単価 =（月次平均 JEPX 価格 − 基準価格）× 按分係数
              </p>
              <p className="mt-2 text-xs text-slate-700">
                契約によっては 30 分単位の精算式（使用量 × 30 分 JEPX 価格）を採用。この場合は「調整額」ではなく電力量料金そのものが市場連動する構造になります。
              </p>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              燃調費との決定的な違いは、
              <strong>基本的に上限がなく、30 分単位で変動する市場価格がほぼ直接反映される</strong>
              点です。2020-21 年冬の需給逼迫時には JEPX スポットが 250 円/kWh を超え、市場連動プラン契約の法人は同月の電気料金が前月比で 5〜10 倍に跳ね上がったケースも報告されています。2022 年夏・冬にも JEPX 年平均が 2019 年の 2.5 倍に達し、市場調整額のリスクが顕在化しました。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              参照する指標が 30 分単位の JEPX である以上、予算策定時点で確定できるのは
              <strong>前日のスポット結果まで</strong>
              。月次平均で見ても翌月に入らないと確定せず、1 年先の予算管理は困難です。
            </p>
          </section>

          {/* H2-4: 10項目比較表（本記事の核） */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃調費 vs 市場調整額｜10 項目比較表
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              両者の違いを実務判断に使える粒度で整理したのが以下の 10 項目です。契約プランの選択や月次請求書のチェックで、どちらのリスクが自社にとって大きいかをこの表で素早く照合できるようにしました。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-900">
                      比較項目
                    </th>
                    <th className="px-3 py-2 font-semibold text-slate-900">
                      燃料費調整額（燃調費）
                    </th>
                    <th className="px-3 py-2 font-semibold text-slate-900">
                      市場価格調整額（市場調整額）
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.item}
                      className="border-b border-slate-100 align-top"
                    >
                      <td className="px-3 py-2 font-medium text-slate-900">
                        {row.item}
                      </td>
                      <td className="px-3 py-2">{row.fuel}</td>
                      <td className="px-3 py-2">{row.market}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              表で特に押さえたいのは「上限の有無」「予測可能性」「過去最大の振れ幅」の 3 行です。燃調費は一定の見通しが立つ制度である一方、市場調整額は
              <strong>上限がなく 30 分単位で変動する青天井のリスク</strong>
              を抱えるため、契約プラン選択時にこの差分を定量的に織り込む必要があります。
            </p>
          </section>

          {/* H2-5: 金額規模シミュレーション */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              どちらのリスクが大きいのか｜金額規模シミュレーション
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              年間 1,000 万 kWh を使う中規模工場を想定します（高圧契約、月次使用量 83 万 kWh 程度）。2022 年の平均的な調整額水準で試算すると、おおよそ次のような影響規模になります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  固定プラン（燃調費のみ露出）
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  2022 年度の燃調費平均を +8 円/kWh と仮定すると、年間追加コストは
                  <strong>+8,000 万円</strong>
                  。単価予測が 2 ヶ月先まで立つため、値上げタイミングに合わせた予算積み増しや社内説明が可能。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  市場連動プラン（市場調整額が中核）
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  同年度の JEPX 年平均単価を 20 円/kWh（基準価格 10 円/kWh との差 +10 円/kWh 想定）とすると、年間追加コストは
                  <strong>+10,000 万円</strong>
                  。ただし月内のばらつきが大きく、最悪月だけで数千万円規模の追加請求が発生する可能性。
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              年額ベースでは同程度に見えても、
              <strong>予測可能性とキャッシュフローへのストレスは市場連動プランの方が圧倒的に大きい</strong>
              点に注意が必要です。固定プランは単価改定通知で対応できますが、市場連動は前日 JEPX 結果が出るまで翌月の料金が読めません。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              年間使用量 1,000 万 kWh 未満の中小法人の場合は、
              <Link
                href="/"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                シミュレーター
              </Link>
              で自社の契約電力・使用量を入力すると、容量拠出金・再エネ賦課金も含めた年間リスクを可視化できます。
            </p>
          </section>

          {/* H2-6: 法人がとるべき対策 3 つ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              法人がとるべき対策 3 つ
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  対策 1: 月次請求書で両者の内訳をウォッチする
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  請求書の調整額欄が 1 行だけの契約もあれば、燃調費と市場調整額が別建ての契約もあります。まずは 3 ヶ月分の請求書を並べて、どちらがどの比率で効いているかを確認してください。
                  <Link
                    href="/how-to-read-electricity-bill"
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    請求書の読み方ガイド
                  </Link>
                  を参照しながら、調整額の推移を月次トラッキングするのが第 1 歩です。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  対策 2: 契約メニューに合わせたリスクヘッジ
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  現契約が市場連動プランなら、高騰局面に弱いため固定プランとの組み合わせ（一部固定・一部市場連動のハイブリッド契約）を検討する価値があります。逆に固定プランで燃調費の振れ幅に苦しんでいるなら、市場が落ち着いている時期を狙って市場連動を部分的に取り入れる選択肢もあります。
                  <Link
                    href="/market-linked-vs-fixed"
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    市場連動 vs 固定プラン比較
                  </Link>
                  で契約設計の枠組みを確認してください。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  対策 3: 制度要因を含めた総コスト管理
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  燃調費・市場調整額だけでなく、2024 年度から転嫁が始まった
                  <Link
                    href="/capacity-contribution-explained"
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    容量拠出金
                  </Link>
                  や
                  <Link
                    href="/renewable-energy-surcharge"
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    再エネ賦課金
                  </Link>
                  も含めて、「単価以外のコスト要因」を合算でトラッキングするのが理想です。どれか 1 つだけをウォッチしていると、総請求額が上がった理由を特定できません。
                </p>
              </div>
            </div>
          </section>

          {/* H2-7: まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              まとめ｜「どちらか一方」ではなく両方の運用が必要
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費調整額と市場価格調整額は、仕組み・反映頻度・予測可能性・上限の有無・契約プランとの組み合わせがすべて異なる別制度です。法人の料金見直し時に「どちらのリスクが大きいか」を判断するには、まず自社の契約がどちらにどれだけ露出しているかを請求書で確認し、そのうえで対策 1〜3 を組み合わせて運用していくのが実務解です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              単独記事で片方だけを理解しても判断は難しいため、本ページを契約更新・料金改定通知のたびに再訪する一次情報としてブックマークしておくことをおすすめします。
            </p>
          </section>
        </section>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/fuel-cost-adjustment",
                title: "燃料費調整額の詳細",
                description:
                  "燃調費の計算根拠と上限撤廃後の実態を整理します。",
              },
              {
                href: "/market-price-adjustment",
                title: "市場価格調整額の詳細",
                description:
                  "JEPX 市場連動の仕組みと 2025 年冬の挙動を整理します。",
              },
              {
                href: "/fuel-cost-adjustment-history",
                title: "燃調費の推移",
                description:
                  "過去 5 年の燃調費推移と最大振れ幅を確認できます。",
              },
              {
                href: "/market-linked-vs-fixed",
                title: "市場連動 vs 固定プラン比較",
                description:
                  "契約プラン選択が燃調費・市場調整額露出度にどう効くかを整理します。",
              },
              {
                href: "/why-business-electricity-prices-rise",
                title: "電気料金上昇の 4 要因",
                description:
                  "調整額以外の値上がり要因も含めて全体像を俯瞰します。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="自社への影響額を数字で確認する"
            description="契約内容と今の使用量を入れるだけで、燃調費・市場調整額・再エネ賦課金を含めた年間リスクを可視化できます。"
            links={[
              { href: "/", label: "シミュレーターで試算する" },
              {
                href: "/articles/price-increase",
                label: "料金上昇の他の要因を学ぶ",
              },
            ]}
          />
        </div>

        {/* ContactCtaCard */}
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="燃調費・市場連動リスクの整理、専門家に相談しませんか？"
            description="契約メニューごとの影響度算定から、調達戦略の再設計までエネルギー情報センターの専門家がご支援します。"
          />
        </div>
      </main>
    </>
  );
}
