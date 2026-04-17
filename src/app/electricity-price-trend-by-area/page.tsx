import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "エリア別（電力会社別）の電気料金推移比較｜法人向けに10エリアの単価差を整理";
const pageDescription =
  "全国10電力エリアの法人向け電気料金水準を横並びで比較。関西が安い理由、北海道・沖縄が高い理由、エリア間の単価差の推移を整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "エリア別 電気料金 比較",
    "電力会社別 料金 推移",
    "関西 電気代 安い理由",
    "北海道 沖縄 電気料金 高い",
    "法人 電気料金 地域差",
    "高圧 単価 エリア比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-price-trend-by-area",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-price-trend-by-area",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
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

// 10エリア高圧単価比較（円/kWh、参考値）
const areaPriceRows = [
  { area: "北海道", company: "北海道電力", p2019: 18.2, p2022: 22.1, p2025: 25.8 },
  { area: "東北", company: "東北電力", p2019: 16.8, p2022: 20.4, p2025: 23.9 },
  { area: "東京", company: "東京電力EP", p2019: 17.5, p2022: 21.6, p2025: 24.7 },
  { area: "中部", company: "中部電力ミライズ", p2019: 16.9, p2022: 20.9, p2025: 24.2 },
  { area: "北陸", company: "北陸電力", p2019: 15.4, p2022: 19.3, p2025: 22.6 },
  { area: "関西", company: "関西電力", p2019: 14.8, p2022: 18.5, p2025: 21.3 },
  { area: "中国", company: "中国電力", p2019: 16.2, p2022: 20.1, p2025: 23.4 },
  { area: "四国", company: "四国電力", p2019: 16.6, p2022: 20.7, p2025: 24.0 },
  { area: "九州", company: "九州電力", p2019: 15.1, p2022: 19.0, p2025: 22.1 },
  { area: "沖縄", company: "沖縄電力", p2019: 19.4, p2022: 24.2, p2025: 27.6 },
];

// エリア間単価差の要因
const factorRows = [
  {
    factor: "原発稼働状況",
    detail: "稼働が多いエリアは燃料費比率が低く単価が下がりやすい",
    lowAreas: "関西・九州",
    highAreas: "北海道・東北",
  },
  {
    factor: "燃料構成",
    detail: "LNG・石炭・石油の比率によってコスト水準が変わる",
    lowAreas: "九州（原発+再エネ比率大）",
    highAreas: "沖縄（石油依存）",
  },
  {
    factor: "需要密度",
    detail: "需要が集中するほど送配電コストが分散され単価が下がる",
    lowAreas: "東京・関西（都市圏）",
    highAreas: "北海道・沖縄（分散）",
  },
  {
    factor: "再エネ比率",
    detail: "再エネ発電比率が高いと燃料費変動の影響を受けにくい",
    lowAreas: "九州（太陽光大量導入）",
    highAreas: "沖縄（導入余地が限定的）",
  },
  {
    factor: "系統連系・離島構造",
    detail: "本州との連系が弱い・離島構造は調達コスト高になりやすい",
    lowAreas: "東京・関西（連系豊富）",
    highAreas: "沖縄（本土と独立）",
  },
];

// チェックリスト
const checkList = [
  "自社拠点のエリアで、過去3年の高圧単価上昇率を確認しているか",
  "同じ業種・同規模の企業が他エリアで契約している単価水準を把握しているか",
  "複数エリアに拠点を持つ場合、エリアごとに契約見直しのタイミングが異なることを認識しているか",
  "エリア料金差が自社の競争力や製造コストに与えている影響を試算しているか",
  "新規拠点の立地検討時に、エリア別電力コストを比較要素に含めているか",
];

export default function ElectricityPriceTrendByAreaPage() {
  return (
    <>
      <ArticleJsonLd
        headline="エリア別（電力会社別）の電気料金推移比較｜法人向けに10エリアの単価差を整理"
        description="全国10電力エリアの法人向け電気料金水準を横並びで比較。関西が安い理由、北海道・沖縄が高い理由、エリア間の単価差の推移を整理。"
        url="https://simulator.eic-jp.org/electricity-price-trend-by-area"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "エリア別（電力会社別）の電気料金推移比較" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav aria-label="パンくず" className="mb-4 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link
              href="/"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              ホーム
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li>
            <Link
              href="/articles/price-trends"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金の推移と高止まり
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="text-slate-700">エリア別推移比較</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          エリア別の電気料金推移比較
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          日本の電気料金は全国一律ではありません。北海道・沖縄のような単価が高いエリアと、関西・九州のような比較的低いエリアが存在し、その差は法人の事業コストに直接影響します。
          本ページでは全国10電力エリアの高圧単価を2019年・2022年・2025年の3時点で横並びにし、単価差が生まれる構造的な要因と、法人として確認しておくべき視点を整理します。
        </p>
      </header>

      <div className="mt-8 space-y-8">

        {/* 1. 10エリア高圧単価比較テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            10エリアの高圧単価比較（2019・2022・2025年）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下表は各エリアの高圧電力（業務・産業用）における年間平均単価の目安です。2022年以降、すべてのエリアで単価が上昇していますが、その水準とペースにはエリアごとの差があります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">エリア</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">電力会社</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">2019年<br/><span className="font-normal text-xs text-slate-500">円/kWh</span></th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">2022年<br/><span className="font-normal text-xs text-slate-500">円/kWh</span></th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">2025年<br/><span className="font-normal text-xs text-slate-500">円/kWh</span></th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">2019→2025<br/><span className="font-normal text-xs text-slate-500">上昇幅</span></th>
                </tr>
              </thead>
              <tbody>
                {areaPriceRows.map((row, i) => {
                  const diff = (row.p2025 - row.p2019).toFixed(1);
                  const isLow = row.p2025 <= 22.5;
                  const isHigh = row.p2025 >= 25.0;
                  return (
                    <tr
                      key={row.area}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                    >
                      <td className="px-3 py-2 font-medium text-slate-800">{row.area}</td>
                      <td className="px-3 py-2 text-slate-600">{row.company}</td>
                      <td className="px-3 py-2 text-right text-slate-700">{row.p2019}</td>
                      <td className="px-3 py-2 text-right text-slate-700">{row.p2022}</td>
                      <td className={`px-3 py-2 text-right font-semibold ${isHigh ? "text-red-700" : isLow ? "text-emerald-700" : "text-slate-800"}`}>
                        {row.p2025}
                      </td>
                      <td className="px-3 py-2 text-right text-orange-700 font-medium">+{diff}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※参考値。燃料費調整・再エネ賦課金・市場価格調整を含む年間平均概算。各社の公開データや業界統計をもとに整理。実際の請求単価は契約内容や使用時間帯により異なります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
              <p className="text-xs font-semibold text-emerald-800">最低水準エリア</p>
              <p className="mt-1 text-sm text-emerald-700">関西（21.3円）・九州（22.1円）。原発稼働と再エネ導入が燃料費依存を抑えている。</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3">
              <p className="text-xs font-semibold text-red-800">最高水準エリア</p>
              <p className="mt-1 text-sm text-red-700">沖縄（27.6円）・北海道（25.8円）。燃料依存度が高く、需要密度も低い構造。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold text-slate-800">最大エリア差（2025年）</p>
              <p className="mt-1 text-sm text-slate-700">沖縄と関西の差は約6.3円/kWh。年間100万kWh契約なら年600万円超の差が生まれる。</p>
            </div>
          </div>
        </section>

        {/* 2. エリア間単価差の要因テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            エリア間単価差が生まれる4つの要因
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            エリアごとの単価差は、偶然ではなく構造的な理由から生じています。以下の4要因がそれぞれ「安いエリア」「高いエリア」に影響を与えています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[540px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">要因</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">影響の出方</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 text-emerald-700">単価が低いエリア例</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 text-red-700">単価が高いエリア例</th>
                </tr>
              </thead>
              <tbody>
                {factorRows.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-3 py-2 font-medium text-slate-800 whitespace-nowrap">{row.factor}</td>
                    <td className="px-3 py-2 text-slate-600">{row.detail}</td>
                    <td className="px-3 py-2 text-emerald-700">{row.lowAreas}</td>
                    <td className="px-3 py-2 text-red-700">{row.highAreas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-sky-900">関西が安い理由</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              関西電力は原子力発電所の再稼働が進んでおり、燃料費の変動に左右されにくいベース電源の比率が高い状態が続いています。
              さらに大阪・神戸・京都の都市圏を抱えることで需要密度が高く、固定的な送配電コストが広く分散されます。
              この2点が組み合わさることで、他エリアと比較して安定的に低い単価水準が維持されています。
            </p>
          </div>
          <div className="mt-3 rounded-lg border border-orange-200 bg-orange-50 p-4">
            <p className="text-sm font-semibold text-orange-900">北海道・沖縄が高い理由</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              北海道は泊原発が停止中であるうえ、LNG・石炭への依存度が高く、燃料価格の上昇が直接単価に波及しやすい構造です。
              沖縄は本土の電力系統と連系しておらず、燃料調達や需給調整を域内で完結させなければならない制約があります。
              石油火力への依存度が高く、原油価格の高止まりが料金に強く反映されます。
            </p>
          </div>
        </section>

        {/* 3. エリア別 法人チェックリスト */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            エリア別の電気料金で法人が確認したい5項目
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            エリアの違いは「知っていても変えられない」と思われがちですが、拠点の立地選択・契約タイミング・コスト管理の精度に影響します。以下の項目を自社の状況に照らして確認してください。
          </p>
          <ol className="mt-4 space-y-3">
            {checkList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                  {i + 1}
                </span>
                <span className="text-sm leading-6 text-slate-700">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* 4. 「安いエリアに移転」は現実的か */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「安いエリアに移転」は現実的か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            エリア間の電力単価差が年600万円超になるケースがあると聞くと、「拠点を関西や九州に移せばコストが下がる」という発想が出てきます。
            しかし実際には、移転コスト・従業員の採用環境・取引先との距離・物流拠点との関係など、電力コスト以外の要素が総コストを大きく左右します。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">移転で電力コストが下がりやすいケース</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                <li>・電力集約型製造業で、年間使用量が1,000万kWh超</li>
                <li>・既存拠点が北海道・東北・沖縄など単価の高いエリア</li>
                <li>・移転先で同等の労働力・物流条件が確保できる</li>
                <li>・新規拠点の設立（既存移転ではなく増設）の場合</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">移転より契約見直しが先のケース</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                <li>・年間使用量が数十万kWh以下の中小規模</li>
                <li>・現在の契約が市場連動型で、固定型への切り替えで対応可能</li>
                <li>・同エリア内の新電力・PPA・デマンドコントロールで削減余地あり</li>
                <li>・拠点の物理移動がビジネス上の制約となっている</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-sky-900">まず行うべきこと</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              エリア間の単価差を「参照情報」として使いながら、まず現在の契約内容・燃料費調整の仕組み・市場価格調整の有無を確認することが先決です。
              同じエリア内でも、契約プランの選択と交渉によって1〜3円/kWhの差が生まれることは珍しくありません。
              移転はその後の選択肢として検討するのが現実的なアプローチです。
            </p>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページのまとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>・10エリアの高圧単価には、2025年時点で最大6円/kWh超の差がある</li>
            <li>・差の主因は原発稼働・燃料構成・需要密度・再エネ比率・系統連系の5要因</li>
            <li>・関西・九州が安い構造は当面続く見込みだが、燃料価格や政策変化で変わりうる</li>
            <li>・北海道・沖縄の高単価構造は地理的・電源構成的な制約が大きく、短期では変わりにくい</li>
            <li>・移転よりも先に、現行契約の見直しとシミュレーションを行うことが現実的な第一歩</li>
          </ul>
        </section>
      </div>

      <div className="mt-6">
        <GlossaryLinks currentSlug="electricity-price-trend-by-area" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "高圧電力", "特別高圧", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の推移を10年で見る",
              description: "急騰・高止まり・補助政策の流れを長期視点で整理したハブページ。",
            },
            {
              href: "/electricity-price-by-voltage-type",
              title: "特別高圧・高圧・低圧で上がり方はどう違うか",
              description: "契約区分ごとの価格構造と推移の違いを年次データで比較。",
            },
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金体系と単価の見方",
              description: "高圧契約の料金構造・基本料金・従量単価の読み方を解説。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "現在の契約プランが自社にとって最適かどうかを診断できます。",
            },
            {
              href: "/articles/price-trends",
              title: "電気料金の推移と高止まり",
              description: "推移・高止まりに関する解説記事の一覧。",
            },
            {
              href: "/articles/by-region",
              title: "地域別の電気料金動向",
              description: "各エリアの電気料金動向を地域別にまとめたカテゴリ。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社拠点の電気料金リスクを把握する"
          description="エリアの単価水準と自社の契約条件を照らし合わせ、リスクシミュレーションを行いましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/price-trends", label: "推移と高止まりの解説を読む" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
