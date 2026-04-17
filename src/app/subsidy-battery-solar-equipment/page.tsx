import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "蓄電池・太陽光の補助金活用ガイド｜法人向け設備投資の支援制度";
const pageDescription =
  "蓄電池・自家消費型太陽光の導入に使える補助金制度を、対象設備・補助率・併用可否の観点で整理します。";
const pageUrl = "https://simulator.eic-jp.org/subsidy-battery-solar-equipment";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "蓄電池 補助金 法人",
    "太陽光 補助金 法人",
    "自家消費 補助金",
    "設備投資 補助金",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const batterySubsidies = [
  {
    name: "DER補助金（分散型エネルギーリソース補助）",
    operator: "環境省・経済産業省",
    rate: "1/3〜1/2以内",
    limit: "数千万円程度（規模による）",
    target: "蓄電池・EV充放電設備・太陽光との組み合わせ",
    note: "太陽光との併設が前提となることが多い。自家消費率の要件に注意。",
  },
  {
    name: "SII省エネ補助金（蓄電設備枠）",
    operator: "SII（環境共創イニシアチブ）",
    rate: "1/3以内（C類型）",
    limit: "最大1億円",
    target: "業務用大型蓄電システム",
    note: "省エネルギー量の要件を満たす必要がある。単独導入より太陽光連携型が通りやすい。",
  },
  {
    name: "自治体独自の蓄電池導入補助金",
    operator: "都道府県・市区町村",
    rate: "定額または1/2〜2/3程度",
    limit: "50〜500万円程度（自治体による）",
    target: "業務用蓄電システム（容量要件あり）",
    note: "自治体により大きく異なる。法人向けと家庭用で要件が分かれる場合がある。",
  },
];

const solarSubsidies = [
  {
    name: "需要家主導型太陽光PPA補助",
    operator: "環境省",
    rate: "1/3〜1/2以内",
    limit: "発電出力・事業規模による",
    target: "オフサイトPPA型の再エネ電力調達",
    note: "発電事業者（売り手）側が申請する。自家消費型より大規模な電力調達に向く。",
  },
  {
    name: "自家消費型太陽光設備補助（SII等）",
    operator: "SII・経済産業省",
    rate: "1/3以内",
    limit: "最大1億円",
    target: "屋根置き・カーポート型など事業所内設置",
    note: "自家消費率の要件（50%以上等）を満たすことが条件になる場合が多い。",
  },
  {
    name: "脱炭素先行地域・ゼロカーボン補助（環境省）",
    operator: "環境省",
    rate: "事業費の1/2〜2/3以内",
    limit: "地域・事業規模による（数億円も可）",
    target: "再エネ導入を含む脱炭素化計画全体",
    note: "自治体経由で申請。個社単独より地域一体型・複数施設型が採択されやすい。",
  },
];

const comparisonTable = [
  {
    equipment: "蓄電池（単独）",
    subsidy: "自治体補助金・DER補助（条件付き）",
    rate: "定額〜1/2",
    limit: "50〜500万円（自治体）",
    payback: "10〜15年",
    note: "補助後でも回収期間は長め。電気料金単価が高い場合に有利。",
  },
  {
    equipment: "太陽光（自家消費型）",
    subsidy: "SII省エネ補助・自治体補助",
    rate: "1/3〜1/2",
    limit: "〜1億円（SII）",
    payback: "7〜12年",
    note: "発電量・自家消費率が高いほど回収が早い。屋根面積・方位が重要。",
  },
  {
    equipment: "太陽光＋蓄電池（併設）",
    subsidy: "DER補助・SII補助・自治体補助",
    rate: "1/3〜1/2",
    limit: "1,000万〜数億円",
    payback: "8〜13年",
    note: "最も補助が手厚い組み合わせ。自治体・国の補助金を重ねやすい。",
  },
  {
    equipment: "オフサイトPPA（需要家側）",
    subsidy: "需要家主導型PPA補助（発電側申請）",
    rate: "発電事業者側に補助",
    limit: "発電事業者規模による",
    payback: "PPA契約のため初期投資なし",
    note: "需要家は初期費用ゼロで再エネ調達が可能。電力料金の固定化がメリット。",
  },
];

const combinationRules = [
  {
    combination: "国補助金（SII）＋自治体補助金",
    available: "原則不可（同一設備への重複適用）",
    detail: "同一の設備・工事に対して複数の補助金を重ねることは原則禁止。自治体補助金の公募要領で「国補助との重複不可」と明記されているケースが多い。",
  },
  {
    combination: "太陽光補助金＋蓄電池補助金（別設備として申請）",
    available: "可能な場合がある",
    detail: "太陽光と蓄電池を別々の設備として、それぞれ異なる補助制度で申請するケース。制度ごとに対象設備の範囲を確認し、重複申請にならないよう注意。",
  },
  {
    combination: "補助金＋省エネ投資促進税制（税額控除）",
    available: "原則可能",
    detail: "補助金を受けた設備でも税制優遇の適用は可能（圧縮記帳後の取得価額に対して計算）。節税と補助金の二重取りが狙える組み合わせ。",
  },
  {
    combination: "補助金＋低利融資（政策金融公庫等）",
    available: "可能",
    detail: "補助金とつなぎ融資・低利融資の併用は認められる。補助金は後払いのため、導入費用の立て替えに融資を活用するのが一般的。",
  },
];

const investmentImpact = [
  { scenario: "太陽光200kW導入、補助なし", cost: "2,400万円", subsidy: "0円", netCost: "2,400万円", annualSaving: "240万円/年", payback: "約10年" },
  { scenario: "太陽光200kW導入、SII補助1/3", cost: "2,400万円", subsidy: "800万円", netCost: "1,600万円", annualSaving: "240万円/年", payback: "約6.7年" },
  { scenario: "太陽光＋蓄電池、SII＋自治体補助（別設備申請）", cost: "4,000万円", subsidy: "1,400万円", netCost: "2,600万円", annualSaving: "360万円/年", payback: "約7.2年" },
];

export default function SubsidyBatterySolarEquipmentPage() {
  return (
    <>
      <ArticleJsonLd
        headline="蓄電池・太陽光の補助金活用ガイド｜法人向け設備投資の支援制度"
        description="蓄電池・自家消費型太陽光の導入に使える補助金制度を、対象設備・補助率・併用可否の観点で整理します。"
        url="https://simulator.eic-jp.org/subsidy-battery-solar-equipment"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "蓄電池・太陽光の補助金活用ガイド" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">蓄電池・太陽光の補助金活用ガイド</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          蓄電池・太陽光の補助金活用ガイド
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">法人向け設備投資の支援制度｜対象設備・補助率・併用可否</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金対策として<Link href="/battery-electricity-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池</Link>や自家消費型<Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光</Link>への投資を検討する法人が増えています。
          これらの設備には国や自治体の補助金が複数用意されており、うまく活用することで
          初期投資額を圧縮し、投資回収期間を大幅に短縮することができます。
          本ページでは設備別の主な補助制度と補助率の比較、国と自治体の補助金の併用可否、
          投資回収期間への影響試算の考え方を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-4">

        {/* 蓄電池補助金 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">蓄電池導入に使える主な補助金</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け業務用蓄電システムに適用できる補助金は、国の制度と自治体独自制度の2層構造になっています。
            補助率・上限額・対象設備の要件が制度によって異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">制度名</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">実施機関</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助率</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">上限額目安</th>
                </tr>
              </thead>
              <tbody>
                {batterySubsidies.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.name}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.operator}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-sky-700">{row.rate}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 space-y-2">
            {batterySubsidies.map((row, i) => (
              <p key={i} className="text-xs text-slate-500">
                <span className="font-semibold">{row.name}：</span>{row.note}
              </p>
            ))}
          </div>
        </section>

        {/* 太陽光補助金 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">太陽光導入に使える主な補助金</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光とオフサイトPPAでは活用できる補助金の種類が異なります。
            PPAモデルでは発電事業者側が補助金を受けるため、需要家の初期費用がゼロになるメリットがあります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">制度名</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">実施機関</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助率</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">上限額目安</th>
                </tr>
              </thead>
              <tbody>
                {solarSubsidies.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.name}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.operator}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-sky-700">{row.rate}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 space-y-2">
            {solarSubsidies.map((row, i) => (
              <p key={i} className="text-xs text-slate-500">
                <span className="font-semibold">{row.name}：</span>{row.note}
              </p>
            ))}
          </div>
        </section>

        {/* 設備別比較表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">設備別 補助率・投資回収期間の比較（目安）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 投資回収期間は電気料金単価・自家消費率・設備規模等によって大きく変わります。あくまで目安としてください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">設備</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">主な補助制度</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助率目安</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">上限額目安</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">回収期間目安</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.equipment}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.subsidy}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-sky-700">{row.rate}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.limit}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.payback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 space-y-1">
            {comparisonTable.map((row, i) => (
              <p key={i} className="text-xs text-slate-500">
                <span className="font-semibold">{row.equipment}：</span>{row.note}
              </p>
            ))}
          </div>
        </section>

        {/* 併用可否 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">国と自治体の補助金・制度の併用可否</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            同一設備への国補助金と自治体補助金の重複適用は原則禁止ですが、
            設備を分けて申請したり、補助金と税制優遇を組み合わせたりすることで、
            実質的な支援の積み上げが可能なケースがあります。
          </p>
          <div className="mt-4 space-y-3">
            {combinationRules.map((rule, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-semibold text-slate-800">{rule.combination}</span>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${rule.available.includes("不可") ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}>
                    {rule.available}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{rule.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 投資回収への影響試算 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">投資回収期間への影響試算の考え方（想定例）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 以下はあくまで参考試算です。実際の効果は設備規模・電気料金単価・自家消費率により異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">想定ケース</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">導入費用</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助額概算</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">実質負担</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">年間削減額</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">回収期間</th>
                </tr>
              </thead>
              <tbody>
                {investmentImpact.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.scenario}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.cost}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-sky-700">{row.subsidy}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-slate-800">{row.netCost}</td>
                    <td className="border border-slate-200 px-3 py-2 text-emerald-700">{row.annualSaving}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-slate-800">{row.payback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            補助金を活用することで投資回収期間を3〜4年短縮できるケースが多く見られます。
            電気料金が高止まりしている現状では、補助金を活用した設備投資の経済合理性が高まっています。
          </p>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：補助金で設備投資の回収を早める</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>・ 蓄電池・太陽光には国・自治体の複数補助制度が存在し、1/3〜1/2程度の補助が狙える。</li>
            <li>・ 太陽光＋蓄電池の併設は補助の組み合わせが最も手厚く、投資効率が高い。</li>
            <li>・ 国補助と自治体補助の同一設備への重複適用は原則禁止。設備を分けた申請は可能な場合がある。</li>
            <li>・ 補助金と税制優遇（省エネ投資促進税制）の組み合わせで支援の積み上げが狙える。</li>
            <li>・ オフサイトPPAモデルでは初期費用ゼロで再エネ調達が可能。</li>
          </ul>
        </section>
      </section>

      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/battery-consideration-for-business", title: "法人の蓄電池導入検討ガイド", description: "蓄電池の費用対効果と導入判断の考え方" },
            { href: "/solar-self-consumption-for-business", title: "自家消費型太陽光の活用ガイド", description: "法人が自家消費太陽光を活用する際の要点" },
            { href: "/subsidy-demand-side-ppa", title: "需要家主導型太陽光PPAの補助金活用", description: "オフサイトPPAで電力コストを削減する仕組みと補助制度" },
            { href: "/subsidy-schedule-and-approval-rate", title: "補助金申請のスケジュールと採択率の目安", description: "年間カレンダーと採択率から逆算する準備術" },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="電気料金の削減幅を数値で確認しましょう"
          description="蓄電池・太陽光の導入効果を試算する前に、現状の電気料金負担をシミュレーターで診断。投資対効果の説明資料に使える数値を取得できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/subsidies-overview", label: "補助金一覧ページへ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
