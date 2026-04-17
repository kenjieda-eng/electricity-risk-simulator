import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "太陽光と蓄電池を組み合わせる意味｜自家消費率向上とコスト削減の相乗効果";
const pageDescription =
  "自家消費型太陽光に蓄電池を加えると、どのような相乗効果が生まれるかを解説します。自家消費率の向上、夜間対応、デマンド抑制、そして経済効果と投資判断の考え方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "太陽光 蓄電池 組み合わせ 効果",
    "自家消費率 向上 蓄電池",
    "太陽光発電 蓄電池 法人 メリット",
    "自家消費型 太陽光 蓄電池 費用対効果",
    "法人 太陽光 蓄電池 セット",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/solar-battery-combination-benefit",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/solar-battery-combination-benefit",
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

const synergyEffects = [
  {
    effect: "余剰電力の有効活用",
    solar: "昼間に発電した余剰電力（使いきれない分）は逆潮流か廃棄になる",
    combined: "余剰電力を蓄電池に貯めて夕方〜夜間に使用。自家消費率が大幅に向上する",
  },
  {
    effect: "夜間・悪天候時の対応",
    solar: "発電できない時間帯は100%系統電力に依存",
    combined: "蓄電池から放電して購入量を削減。深夜に充電して単価の低い電力を利用できる",
  },
  {
    effect: "デマンドピーク抑制",
    solar: "晴天昼間のみピーク抑制に貢献できる",
    combined: "蓄電池が天候・時間帯を問わずピークをカバー。基本料金削減効果が安定する",
  },
  {
    effect: "停電時の対応",
    solar: "系統連系型は停電時に自動停止（自立運転は限定的）",
    combined: "蓄電池があれば太陽光＋蓄電池で一定期間の自立運転が可能。BCP効果が高まる",
  },
];

const economicConsiderations = [
  {
    aspect: "組み合わせによる追加投資額",
    detail:
      "蓄電池の設置コストは太陽光単体に対して追加投資となります。蓄電池の容量（kWh）と出力（kW）の規模設計によって、追加コストと削減効果のバランスが変わります。",
  },
  {
    aspect: "太陽光単体との投資回収期間の比較",
    detail:
      "太陽光単体と太陽光＋蓄電池のセットでは、セットの方が投資回収期間が長くなるケースが多いです。しかし、BCP価値・将来の電気料金上昇リスクの低減効果を加味すると投資価値が上がる場合があります。",
  },
  {
    aspect: "補助金の組み合わせ活用",
    detail:
      "太陽光・蓄電池それぞれに国・自治体の補助金が用意されている場合があります。組み合わせで申請することで、補助額が増える制度もあります。事前に活用できる制度を確認することが重要です。",
  },
];

const designPoints = [
  {
    point: "蓄電池容量の設計",
    detail: "1日の余剰電力量（昼間の発電量から昼間の消費量を引いた量）を目安に、蓄電池容量を設計します。余剰量と夜間消費量のバランスを確認します。",
  },
  {
    point: "蓄電池出力の設計",
    detail: "デマンドピーク時にどれだけの電力を供給する必要があるかに応じて、蓄電池の最大出力（kW）を決定します。ピーク抑制を目的とする場合は出力重視で設計します。",
  },
  {
    point: "充放電の制御ロジック",
    detail: "「余剰蓄電モード」「夜間充電ピークシフトモード」「デマンドピーク抑制モード」などを組み合わせた制御が必要です。EMS（エネルギーマネジメントシステム）の設計がカギになります。",
  },
];

export default function SolarBatteryCombinationBenefitPage() {
  return (
    <>
      <ArticleJsonLd
        headline="太陽光と蓄電池を組み合わせる意味｜自家消費率向上とコスト削減の相乗効果"
        description="自家消費型太陽光に蓄電池を加えると、どのような相乗効果が生まれるかを解説します。自家消費率の向上、夜間対応、デマンド抑制、そして経済効果と投資判断の考え方を整理します。"
        url="https://simulator.eic-jp.org/solar-battery-combination-benefit"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "太陽光と蓄電池を組み合わせる意味" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/energy-equipment" className="underline-offset-2 hover:underline">蓄電池・太陽光・DR</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">太陽光と蓄電池の組み合わせ</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          太陽光と蓄電池を組み合わせる意味
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          自家消費型太陽光だけでは対応できない「夜間・悪天候時の電力依存」と「余剰電力の無駄」を蓄電池が補完することで、電気料金削減の効果が大きく高まります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          太陽光単体と蓄電池を加えた場合の違い、経済効果の考え方、設計のポイントを整理します。単純に「両方設置すれば良い」というわけではなく、自社の使用パターンに合わせた設計が重要です。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>太陽光単体と組み合わせの効果の違い</li>
            <li>4つの相乗効果（余剰活用・夜間対応・デマンド・BCP）</li>
            <li>組み合わせの経済性の考え方</li>
            <li>設計時の主要な検討ポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            太陽光単体の限界と蓄電池が補う部分
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光は昼間の購入電力を削減する効果がありますが、以下のような限界があります。蓄電池はこれらの限界を補う役割を果たします。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">太陽光単体の限界</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>夜間・雨天・曇天では発電ゼロ</li>
                <li>昼間に使いきれない余剰電力が発生</li>
                <li>デマンドピークが夜間や悪天候時に発生する場合は対応できない</li>
                <li>停電時の自立運転が限定的（系統連系型の場合）</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">蓄電池が補う部分</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>余剰電力を蓄えて夜間に使用する</li>
                <li>夜間の安い電力を充電して昼間のピークに放電</li>
                <li>天候・時間帯を問わずデマンドピーク抑制が可能</li>
                <li>停電時に太陽光と連携して自立運転を継続</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            4つの相乗効果
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            太陽光と蓄電池を組み合わせることで生まれる主な相乗効果を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">効果</th>
                  <th className="p-3 text-left font-semibold text-slate-900">太陽光単体</th>
                  <th className="p-3 text-left font-semibold text-slate-900">太陽光＋蓄電池</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {synergyEffects.map((row) => (
                  <tr key={row.effect}>
                    <td className="p-3 font-medium text-slate-800">{row.effect}</td>
                    <td className="p-3 text-slate-600">{row.solar}</td>
                    <td className="p-3 text-slate-600">{row.combined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            経済性の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            太陽光と蓄電池の組み合わせを経済的に評価する際の考え方を整理します。削減効果には<Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>の削減と<Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金</Link>の削減の両面があり、<Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金</Link>の活用により投資回収を早めることもできます。
          </p>
          <div className="mt-4 space-y-4">
            {economicConsiderations.map((item) => (
              <div
                key={item.aspect}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.aspect}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            モデルケース試算表
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            100kW太陽光を例に、蓄電池あり・なしの比較試算を示します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">項目</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">太陽光のみ</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">太陽光＋蓄電池</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="border border-slate-200 p-3 text-slate-700">太陽光容量</td><td className="border border-slate-200 p-3 text-slate-700">100 kW</td><td className="border border-slate-200 p-3 text-slate-700">100 kW</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">蓄電池容量</td><td className="border border-slate-200 p-3 text-slate-700">—</td><td className="border border-slate-200 p-3 text-slate-700">50 kWh</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">年間発電量</td><td className="border border-slate-200 p-3 text-slate-700">約110,000 kWh</td><td className="border border-slate-200 p-3 text-slate-700">約110,000 kWh</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">自家消費率</td><td className="border border-slate-200 p-3 text-slate-700">約60%（66,000 kWh）</td><td className="border border-slate-200 p-3 text-slate-700">約85%（93,500 kWh）</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">購入電力削減額</td><td className="border border-slate-200 p-3 text-slate-700">約132万円</td><td className="border border-slate-200 p-3 text-slate-700">約187万円</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">ピーク削減による基本料金削減</td><td className="border border-slate-200 p-3 text-slate-700">—</td><td className="border border-slate-200 p-3 text-slate-700">約30万円/年</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">年間トータル削減額</td><td className="border border-slate-200 p-3 text-slate-700">約132万円</td><td className="border border-slate-200 p-3 text-slate-700">約217万円</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">導入費用目安</td><td className="border border-slate-200 p-3 text-slate-700">約1,500万円</td><td className="border border-slate-200 p-3 text-slate-700">約2,250万円</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">単純回収年数</td><td className="border border-slate-200 p-3 text-slate-700">約11年</td><td className="border border-slate-200 p-3 text-slate-700">約10年</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※電力量料金20円/kWh、基本料金1,650円/kW想定。上記は2025〜2026年時点の業界概算値です。実際の効果は施設条件・契約内容により異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            システムサイズ別費用の目安
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            導入規模に応じた概算費用と回収期間の目安を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">太陽光容量</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">蓄電池容量</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">概算費用</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">年間削減目安</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">回収目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="border border-slate-200 p-3 text-slate-700">30 kW</td><td className="border border-slate-200 p-3 text-slate-700">—</td><td className="border border-slate-200 p-3 text-slate-700">約500万円</td><td className="border border-slate-200 p-3 text-slate-700">約40万円</td><td className="border border-slate-200 p-3 text-slate-700">約12年</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">50 kW</td><td className="border border-slate-200 p-3 text-slate-700">25 kWh</td><td className="border border-slate-200 p-3 text-slate-700">約1,100万円</td><td className="border border-slate-200 p-3 text-slate-700">約100万円</td><td className="border border-slate-200 p-3 text-slate-700">約11年</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">100 kW</td><td className="border border-slate-200 p-3 text-slate-700">50 kWh</td><td className="border border-slate-200 p-3 text-slate-700">約2,250万円</td><td className="border border-slate-200 p-3 text-slate-700">約217万円</td><td className="border border-slate-200 p-3 text-slate-700">約10年</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">200 kW</td><td className="border border-slate-200 p-3 text-slate-700">100 kWh</td><td className="border border-slate-200 p-3 text-slate-700">約4,200万円</td><td className="border border-slate-200 p-3 text-slate-700">約420万円</td><td className="border border-slate-200 p-3 text-slate-700">約10年</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※上記は2025〜2026年時点の業界概算値です。実際の効果は施設条件・契約内容により異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            設計時の主要な検討ポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            太陽光と蓄電池を組み合わせるシステムを設計・発注する際に確認すべき主要ポイントを整理します。
          </p>
          <div className="mt-4 space-y-3">
            {designPoints.map((item) => (
              <div
                key={item.point}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item.point}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            工場・倉庫それぞれの特有の検討事項については{" "}
            <Link
              href="/factory-battery-considerations"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              工場で蓄電池を検討するときの着眼点
            </Link>{" "}
            および{" "}
            <Link
              href="/warehouse-battery-considerations"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              倉庫で蓄電池を検討するときの着眼点
            </Link>{" "}
            をご参照ください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            組み合わせが特に有効なケース
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            太陽光と蓄電池の組み合わせが特に効果を発揮しやすい法人の特徴を整理します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              <span className="font-semibold">広い屋根を持つ倉庫・工場：</span>
              設置容量を確保でき、余剰電力が発生しやすいため蓄電池との組み合わせ効果が高い。
            </li>
            <li>
              <span className="font-semibold">昼夜ともに電力消費がある施設：</span>
              昼間は太陽光を自家消費し、夜間は蓄電池から供給することで24時間の購入電力削減が可能。
            </li>
            <li>
              <span className="font-semibold">時間帯別料金プランを利用している法人：</span>
              昼夜・ピーク/オフピークの単価差が大きいほど、ピークシフト効果が大きくなる。
            </li>
            <li>
              <span className="font-semibold">BCP要件が高い事業所：</span>
              災害時の停電でも重要業務を継続する必要がある施設では、太陽光＋蓄電池の自立運転能力が重要な価値を持つ。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            太陽光と蓄電池を組み合わせることで、太陽光単体では対応できなかった夜間対応・余剰活用・安定したデマンド抑制が可能になり、電気料金削減効果が高まります。一方で、追加投資額に対する経済効果の検証と、自社の使用パターンに合わせた容量・制御ロジックの設計が不可欠です。コスト削減の試算だけでなく、将来の電気料金上昇リスクやBCP価値も含めた総合的な投資判断をお勧めします。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光は電気料金対策としてどう効くか",
              description: "購入電力削減の基本的な考え方と効果の出やすい条件。",
            },
            {
              href: "/battery-electricity-cost-benefit",
              title: "蓄電池は電気料金対策としてどう効くか",
              description: "デマンド抑制とピークカットの仕組みを解説。",
            },
            {
              href: "/warehouse-battery-considerations",
              title: "倉庫で蓄電池を検討するときの着眼点",
              description: "屋根面積と太陽光の組み合わせを含む倉庫特有の検討。",
            },
            {
              href: "/factory-battery-considerations",
              title: "工場で蓄電池を検討するときの着眼点",
              description: "生産ラインとの両立を含めた工場特有の検討事項。",
            },
            {
              href: "/demand-suppression-effectiveness",
              title: "デマンド抑制はどこまで効果があるか",
              description: "基本料金削減の可能性と限界を整理。",
            },
            {
              href: "/why-corporations-consider-batteries",
              title: "法人が蓄電池を検討する理由",
              description: "電気料金対策とBCPの両面から検討の動機を整理。",
            },
            {
              href: "/subsidies-overview",
              title: "省エネ・再エネ設備の補助金概要",
              description: "太陽光・蓄電池セット導入に使える補助金制度の整理。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約見直しの始め方",
              description: "設備導入と合わせて契約条件を最適化する手順。",
            },
          ]}
        />

        <ContentCta
          heading="電気料金の現状を把握してから検討する"
          description="現在の契約条件と使用パターンをシミュレーションして、対策の優先度を確認できます。"
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
