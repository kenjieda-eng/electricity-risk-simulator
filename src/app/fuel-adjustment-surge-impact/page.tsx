import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "燃料費調整額上昇で法人の電気料金はどう上がるか｜請求への影響と確認ポイント";
const pageDescription =
  "燃料費調整額（燃調費）が上昇したとき、法人の電気料金請求にどう影響するかを解説。仕組みの確認方法、上限設定の有無の確認、コスト増加額の計算方法を詳しく説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "燃料費調整額 上昇 法人",
    "燃調費 電気料金 影響",
    "燃料費調整 上限 確認",
    "法人 電気料金 燃調",
    "燃料費調整額 請求",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/fuel-adjustment-surge-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/fuel-adjustment-surge-impact",
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

const checkPoints = [
  {
    point: "上限設定の有無",
    description:
      "契約プランに燃料費調整額の上限（キャップ）が設けられているかを確認します。上限があれば高騰時の影響が一定額でキャップされます。ただし上限超過分は電力会社が吸収する構造のため、供給継続リスクも別途確認が必要です。",
  },
  {
    point: "調整方式（基準燃料価格との差額計算）",
    description:
      "基準となる燃料価格から実際の調達価格との差額を算出し、電力量料金に加減算する仕組みです。基準価格からの乖離が大きいほど調整額が大きくなります。",
  },
  {
    point: "適用月のラグ",
    description:
      "燃料費調整額は通常、2〜3カ月前の燃料価格に基づいて算定されます。燃料価格が上昇してから請求に反映されるまでにラグがあるため、いつの燃料価格が現在の請求に影響しているかを理解することが重要です。",
  },
  {
    point: "プランごとの算定式の違い",
    description:
      "旧来の規制料金メニューと新電力のプランでは算定方式が異なる場合があります。見積書に記載されている燃調の算定方式を確認し、他のプランと比較する際に注意が必要です。",
  },
];

export default function FuelAdjustmentSurgeImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          燃料費調整額上昇で法人の電気料金はどう上がるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          燃料費調整額（燃調費）は、電気料金の構成要素のうち、燃料価格の変動を反映する項目です。LNGや石炭などの燃料価格が上昇すると、数カ月後に燃調額がプラス方向に大きく振れ、法人の月次請求が急増することがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          燃料費調整額は、固定プランを選んでいても多くのケースで変動します。「固定プランだから安心」と思っていたにもかかわらず、燃調額の急増で請求が想定を大きく上回るケースが2021〜2022年に多数報告されました。このページでは、燃調額上昇の仕組みと、法人が確認すべきポイントを整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>燃料費調整額が上昇する仕組みとタイミング</li>
            <li>上昇が法人の月次請求に与える影響の試算方法</li>
            <li>プランの確認ポイント（上限設定など）</li>
            <li>燃調リスクへの備え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            燃料費調整額の上昇が起きるシナリオ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額はLNG・石炭・石油の価格指数に基づいて算定されます。これらの国際商品価格が上昇すると、数カ月後に調整額がプラス方向に振れます。代表的な上昇シナリオは以下の通りです。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">LNG国際価格の高騰：</span>
              地政学的リスクや欧州での需要急増により、LNG調達コストが急上昇するシナリオ。
            </li>
            <li>
              <span className="font-semibold text-slate-900">原油価格の長期上昇：</span>
              原油とリンクして算定されるケースでは、原油高騰が直接影響します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">円安進行：</span>
              燃料は外貨建てで調達されるため、円安が進むと円換算での調達コストが上昇し、燃調額に反映されます。
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の基本的な仕組みは{" "}
            <Link
              href="/fuel-cost-adjustment"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              燃料費調整額（燃調費）とは
            </Link>{" "}
            で詳しく確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人の月次請求への影響：試算の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の変動が月次請求に与える影響は、次の計算で求められます。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">影響額の計算式</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              月次コスト増加額（円）＝ 月間使用量（kWh）× 燃調額変化分（円/kWh）
            </p>
            <div className="mt-3 space-y-1 text-sm leading-7 text-slate-700">
              <p>例1：月間使用量 30,000kWh × 燃調 +2円/kWh ＝ 月額 +60,000円</p>
              <p>例2：月間使用量 100,000kWh × 燃調 +5円/kWh ＝ 月額 +500,000円</p>
              <p>例3：月間使用量 50,000kWh × 燃調 +10円/kWh ＝ 月額 +500,000円</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021〜2022年には燃料費調整額が10円/kWhを超えて上昇したケースもあり、年間換算では事業規模に応じて数百万〜数千万円の想定外コストが発生しました。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            プランで確認すべき4つのポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額のリスクを管理するために、現在の契約プランで以下の点を確認しておくことが重要です。
          </p>
          <div className="mt-4 space-y-3">
            {checkPoints.map((item) => (
              <div
                key={item.point}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{item.point}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            影響を受けやすい企業の特徴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の上昇で特に大きな影響を受けやすい企業の特徴を以下に示します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">電力使用量が大きい法人：</span>
              製造業、冷蔵倉庫、大型商業施設など。使用量に比例して影響額が拡大します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">燃調上限がないプランを契約している法人：</span>
              上限なしのプランでは、燃料価格がどれだけ上がっても全額が請求に反映されます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">利益率が低い業種：</span>
              スーパー、飲食、物流など。電気料金の数%上昇が直接的に営業利益を圧迫します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">価格転嫁が難しい法人：</span>
              医療機関、介護施設、公定価格で運営する機関。コスト増をサービス価格に転嫁できないため直接的に収益を損ないます。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            備え方：燃調上昇リスクへの対策
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の上昇リスクに対して、以下の対策が有効です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">上限設定のあるプランに切り替える：</span>
              燃調上限付きのプランを選ぶことで、高騰時のリスクをキャップできます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">複数シナリオで年間コストを試算する：</span>
              燃調が現状、+3円、+7円、+10円となった場合を想定して年間コストを比較します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">予算策定時に変動幅を織り込む：</span>
              燃調額の過去の変動幅を参考に、予算に幅（バッファ）を持たせます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">省エネで使用量を削減する：</span>
              同じ燃調上昇率でも、使用量が少なければ影響額は小さくなります。
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃調の基本的な仕組みと算定方式の詳細解説。",
            },
            {
              href: "/lng-price-surge-electricity-cost-impact",
              title: "LNG高騰で法人の電気料金はどう上がるか",
              description: "燃調上昇の主要因であるLNG高騰シナリオの解説。",
            },
            {
              href: "/renewable-surcharge-increase-impact",
              title: "再エネ賦課金上昇で法人の電気料金はどう変わるか",
              description: "燃調以外の電気料金上昇要因の解説。",
            },
            {
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "見積書で燃調の条件を正しく比較する方法。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "燃調リスクを考慮したプラン選択の考え方。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "燃調条件を含む契約見直し時の確認項目。",
            },
          ]}
        />

        <ContentCta
          heading="燃調上昇シナリオを自社の数字で確認する"
          description="燃料費調整額が上昇した場合の年間コスト増加額を、シミュレーターで試算できます。プランごとの比較にも活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
