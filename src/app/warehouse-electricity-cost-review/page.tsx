import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "物流倉庫の電気料金見直しポイント｜稼働時間と設備負荷を踏まえた考え方";
const pageDescription =
  "物流倉庫・配送センターの電気料金見直しの考え方を解説。稼働時間・照明・空調・搬送設備の負荷特性、固定プランと市場連動の向き不向き、多拠点での見直し注意点まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "物流倉庫 電気料金 見直し",
    "倉庫 電気代 削減",
    "配送センター 電力契約",
    "物流 電力コスト 対策",
    "倉庫 電気料金 高い",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/warehouse-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/warehouse-electricity-cost-review",
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

const loadFactors = [
  {
    label: "照明",
    detail:
      "大規模な倉庫では、天井高の関係で高出力の照明が必要になります。24時間稼働の倉庫では照明の年間消費電力が大きな割合を占めます。LED化の進捗によって改善余地がある場合もあります。",
  },
  {
    label: "空調",
    detail:
      "常温倉庫でも夏場の作業環境維持のために空調が必要です。断熱性能が低い建物では空調負荷が大きくなりやすく、夏場の使用量ピークの主因になることがあります。",
  },
  {
    label: "搬送設備",
    detail:
      "フォークリフトの充電、コンベア、仕分け装置など、搬送設備の電力使用はピーク時間帯に集中しやすく、デマンドの押し上げ要因になります。",
  },
  {
    label: "冷蔵・冷凍設備（冷蔵倉庫の場合）",
    detail:
      "冷蔵・冷凍倉庫では、庫内温度維持のための冷凍機が24時間稼働します。ベースロードが非常に大きく、外気温の影響で夏場の消費電力が大幅に増加します。",
  },
];

export default function WarehouseElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          物流倉庫の電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          物流倉庫は、照明・空調・搬送設備を長時間稼働させる必要があり、電気料金が施設運営コストの中で大きな割合を占めます。特に24時間稼働の倉庫や冷蔵・冷凍倉庫では、電気料金の上昇が収益に直接影響するため、契約見直しは経営判断の重要な要素です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、物流倉庫特有の負荷特性を踏まえ、契約見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>物流倉庫の電気料金が上がりやすい構造的要因</li>
            <li>照明・空調・搬送設備の負荷特性と着眼点</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>多拠点企業として見直す際の注意点</li>
            <li>設備対策との組み合わせの考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            物流倉庫の電気料金が上がりやすい要因
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            物流倉庫の電気料金が上がりやすい背景には、業種特有の構造的な要因があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>稼働時間が長く（深夜・24時間含む）、使用量のベースが大きい</li>
            <li>大空間の照明・空調で消費電力量が多い</li>
            <li>搬送設備のピーク稼働でデマンドが上がりやすい</li>
            <li>冷蔵・冷凍倉庫では冷凍機の常時稼働でベースロードが非常に大きい</li>
            <li>物流コスト全体が上昇傾向にある中、電気料金がさらに上乗せされる</li>
            <li>燃料費調整額の上昇が使用量の大きさに比例して影響する</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            倉庫特有の負荷特性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            物流倉庫の電力使用は、施設の種類（常温・定温・冷蔵・冷凍）と稼働時間によって大きく異なります。自社の負荷パターンを理解しておくことで、契約条件の妥当性を判断しやすくなります。
          </p>
          <div className="mt-4 space-y-3">
            {loadFactors.map((item) => (
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
            固定と市場連動の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            物流倉庫の契約プラン選択は、倉庫の種類と稼働パターンによって判断が分かれます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">倉庫タイプ</th>
                  <th className="p-3 text-left font-semibold text-slate-900">固定プラン</th>
                  <th className="p-3 text-left font-semibold text-slate-900">市場連動プラン</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 text-slate-700">常温倉庫（日勤）</td>
                  <td className="p-3 text-slate-700">安定志向なら選択肢</td>
                  <td className="p-3 text-slate-700">夜間非稼働の場合、夜間の安値メリットが限定的</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">常温倉庫（24時間）</td>
                  <td className="p-3 text-slate-700">予算管理重視なら安定性がメリット</td>
                  <td className="p-3 text-slate-700">深夜帯の安値を一定程度享受できる可能性あり</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">冷蔵・冷凍倉庫</td>
                  <td className="p-3 text-slate-700">ベースロードが大きく、上振れリスク回避が重要</td>
                  <td className="p-3 text-slate-700">使用量が大きいため高騰時の影響が大きい。慎重な検討が必要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            一般的に、冷蔵・冷凍倉庫はベースロードが大きく市場連動リスクの影響が金額ベースで大きいため、固定プランとの相性がよいケースが多くなります。詳しくは{" "}
            <Link
              href="/businesses-suited-for-fixed-price-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              固定プランが向く法人の特徴
            </Link>{" "}
            をご覧ください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見直し時に確認したい項目
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            物流倉庫の契約見直しでは、以下のポイントを確認しておくと比較の精度が上がります。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">契約電力の妥当性：</span>
              デマンドの実績値と契約電力に乖離がないか。過剰な契約電力は基本料金の無駄につながる。
            </li>
            <li>
              <span className="font-semibold text-slate-900">稼働時間と料金体系の整合性：</span>
              時間帯別料金がある場合、自社の稼働パターンと料金体系が合っているか。
            </li>
            <li>
              <span className="font-semibold text-slate-900">燃料費調整額の上限有無：</span>
              使用量が大きい倉庫では、燃料費調整額の上限の有無が年間数百万円の差になることがある。
            </li>
            <li>
              <span className="font-semibold text-slate-900">力率の確認：</span>
              搬送設備やモーターが多い倉庫では力率が低下しやすく、力率割増が適用されている場合がある。力率改善で基本料金を下げられる可能性がある。
            </li>
            <li>
              <span className="font-semibold text-slate-900">季節変動の把握：</span>
              冷蔵倉庫は夏場の電力使用量が大幅に増加する。ピーク月の条件で見積を依頼するのが実務的。
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見直しの準備事項は{" "}
            <Link
              href="/business-electricity-contract-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しチェックリスト
            </Link>{" "}
            で一覧できます。請求書の読み方は{" "}
            <Link
              href="/how-to-read-electricity-bill"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              請求書の見方
            </Link>{" "}
            も参考にしてください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            多拠点で考えるときの注意点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            物流企業は複数の倉庫・配送センターを運営していることが多く、拠点ごとに契約条件が異なる場合があります。多拠点での見直しでは以下に注意してください。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>拠点ごとの契約電力・使用量・契約期間を一覧化する</li>
            <li>契約満了時期がバラバラの場合、見直し可能な拠点から段階的に進める</li>
            <li>一括見積が可能な電力会社を検討する（ボリュームメリットの可能性）</li>
            <li>拠点ごとに負荷特性が異なる場合（常温と冷蔵が混在する場合など）は個別に条件を検討する</li>
            <li>既存の一括契約を解除する際の違約金・解約条件を事前に確認する</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            設備対策との組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            物流倉庫では、契約見直しと並行して以下の設備対策を検討することで、電気料金の総合的な削減が見込めます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">自家消費型太陽光発電</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                倉庫の広い屋根面積を活用できる。昼間のベースロードが大きい倉庫では自家消費率が高くなりやすく、投資回収の見通しが立てやすい。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">蓄電池</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                デマンドピーク時に放電してピークカット。太陽光と組み合わせると自家消費率の向上と基本料金削減の両方が期待できる。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">LED照明への更新</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                天井高の高い倉庫では高出力照明の消費電力が大きい。LED化で大幅な使用量削減が可能。投資回収が比較的早い対策のひとつ。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンドコントローラー</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                搬送設備の同時起動を制御し、デマンドのピークを抑える。契約電力の引き下げにつながり、基本料金の削減に効果がある。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーター活用の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            物流倉庫の契約見直しでは、以下の観点でシミュレーターを活用すると、判断材料を数値で整理できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行条件での年間上振れリスクを確認する</li>
            <li>固定プランと市場連動プランの年間コスト差を試算する</li>
            <li>冷蔵倉庫のピーク月を前提にした影響額を確認する</li>
            <li>拠点ごとの条件でそれぞれシミュレーションし、優先順位をつける</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電気料金見直しポイント",
              description: "冷蔵・空調負荷が大きい商業施設の見直しの考え方。",
            },
            {
              href: "/hospital-electricity-cost-review",
              title: "病院の電気料金見直しポイント",
              description: "安定性重視の医療施設における契約見直し。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "予算管理と安定性を重視する法人に固定プランが向く理由。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目を一覧で整理。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目と見積比較への活用ポイント。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
          ]}
        />

        <ContentCta
          heading="自社の倉庫条件でリスクを確認する"
          description="倉庫の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定と市場連動の比較にもご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="warehouse-electricity-cost-review" />
      </div>
    </main>
  );
}
