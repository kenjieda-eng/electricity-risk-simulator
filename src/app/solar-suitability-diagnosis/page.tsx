import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import DiagnosisClient from "./DiagnosisClient";

const pageTitle =
  "太陽光導入向き不向き診断｜自家消費型太陽光が自社に合うかを整理";
const pageDescription =
  "自家消費型太陽光発電の導入に自社が向いているかを診断チェックで確認。屋根・設置スペース・電力使用パターン・予算・補助金など、法人の導入判断に必要なポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自家消費 太陽光 診断",
    "法人 太陽光発電 向き不向き",
    "産業用太陽光 導入 チェック",
    "太陽光 コスト削減 法人",
    "自家消費型太陽光 費用対効果",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/solar-suitability-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/solar-suitability-diagnosis",
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

const notSuitableConditions = [
  "屋根・屋上・駐車場等の設置スペースがほとんどない（都市部の狭小ビル等）",
  "建物の老朽化が著しく、近いうちに解体・建替えが予定されている",
  "完全夜間稼働で昼間の電力需要がほぼゼロ",
  "建物オーナーの許可が取れない賃借物件（交渉の余地なし）",
];

export default function SolarSuitabilityDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          太陽光導入向き不向き診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          自家消費型太陽光発電は、電気料金の削減とCO2削減・脱炭素対応を同時に実現できる設備として、多くの法人で関心が高まっています。一方、施設条件・電力使用パターン・予算によって向き不向きが大きく異なります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは「設置場所・建物」「電力使用パターン」「資金・補助金」「ESG目標」の4カテゴリで、自社が自家消費型太陽光に向いているかを診断します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>自家消費型太陽光が向く設置場所・建物の条件</li>
            <li>電力使用パターンからの向き不向きの確認</li>
            <li>PPA・屋根貸しモデルを含む資金調達の選択肢</li>
            <li>ESG・脱炭素目標との連携の考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自家消費型太陽光でできること</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光とは、発電した電力を売電せず自社で使用することを主目的とした太陽光発電システムです。電力料金の高騰局面では、買電量を減らすことで直接的なコスト削減効果が得られます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "買電コストの削減", body: "発電量分だけ電力会社からの買電を減らすため、電力単価が高いほど削減効果が大きくなる。" },
              { title: "CO2排出量の削減", body: "再エネ由来の電力を自社で使用することで、Scope2排出量の削減に直結する。" },
              { title: "電力価格変動リスクの軽減", body: "自家発電分は電力市場価格の影響を受けないため、価格高騰局面のリスクヘッジになる。" },
              { title: "蓄電池との組み合わせ効果", body: "蓄電池と組み合わせることで自家消費率がさらに向上し、夜間・停電時にも活用できる。" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">導入向き不向き診断チェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各項目をクリックしてチェックしてください。「向いている」条件が多いほど自家消費型太陽光の効果が期待できます。
          </p>
          <div className="mt-4">
            <DiagnosisClient />
          </div>
        </section>

        <section className="rounded-xl border border-amber-100 bg-amber-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">自家消費型太陽光が向いていない条件</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の条件が当てはまる場合は、太陽光よりも先に検討すべき対策がある可能性があります。
          </p>
          <div className="mt-4 space-y-3">
            {notSuitableConditions.map((condition) => (
              <div key={condition} className="flex items-start gap-3 rounded-lg border border-amber-200 bg-white p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-300 bg-white text-xs text-amber-500">
                  ✕
                </span>
                <p className="text-sm leading-6 text-slate-700">{condition}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            上記に当てはまる場合でも、PPAモデルや屋根貸し、小規模な部分自家消費など、従来とは異なるアプローチが可能なケースも増えています。まず専門業者への相談から始めることを推奨します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">導入モデルの選択：自己投資・PPA・屋根貸しの違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光の導入形態は複数あり、自社の資金状況・目的に応じて選択できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              {
                title: "自己投資型",
                pros: "・コスト削減効果を全て享受できる\n・補助金・税制優遇の活用が可能",
                cons: "・初期投資が大きい（数百万〜数千万円）\n・設備管理・保守の責任が自社",
              },
              {
                title: "PPAモデル（電力購入協定）",
                pros: "・初期費用ゼロで設置可能\n・発電電力を固定単価で購入（相場より安い場合が多い）",
                cons: "・長期契約（10〜20年）が前提\n・発電電力のコスト削減分はPPA事業者と分配",
              },
              {
                title: "屋根貸しモデル",
                pros: "・設置・維持管理コストが不要\n・賃貸収入を受け取れる",
                cons: "・自家消費によるコスト削減効果は限定的\n・賃貸条件の交渉が必要",
              },
            ].map((model) => (
              <div key={model.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{model.title}</p>
                <p className="mt-2 text-xs leading-5 text-green-700 whitespace-pre-line">{model.pros}</p>
                <p className="mt-2 text-xs leading-5 text-amber-700 whitespace-pre-line">{model.cons}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断後の次のステップ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「向いている」項目が多かった場合の次のアクションを整理します。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "設置可能スペースの確認（屋根・屋上・駐車場の面積・向き・日当たり）" },
              { step: 2, text: "直近1年の電力使用量データを整理し、昼間使用量の比率を確認する" },
              { step: 3, text: "補助金の公募状況（経産省・環境省・自治体）を確認する" },
              { step: 4, text: "自己投資・PPA・屋根貸しのどの導入モデルが自社に適しているかを検討する" },
              { step: 5, text: "複数の施工業者・PPA事業者に現場調査・見積依頼を行い、投資回収期間を試算する" },
              { step: 6, text: "蓄電池との組み合わせも合わせて検討し、自家消費率最大化プランを比較する" },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自家消費型太陽光のコスト・回収期間の目安</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">導入規模</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">初期費用目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間削減効果</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">回収期間目安</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10kW（小規模屋根）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">200〜300万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20〜35万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">7〜12年</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50kW（中規模工場・倉庫）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">800〜1,200万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">100〜170万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">6〜10年</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">100kW（大規模施設）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">1,500〜2,200万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">200〜340万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">5〜8年</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">500kW（メガソーラー級）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">6,000〜8,500万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">800〜1,400万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">5〜7年</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 補助金適用前の概算。日照条件・自家消費率・電気料金単価により大きく変動します。</p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">導入モデル別のコスト比較</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">モデル</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">初期費用</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額費用目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">電気代削減</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">自己投資</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">全額負担</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">0円（メンテ費除く）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">最大</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">回収後のメリット大</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">PPAモデル</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">0円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10〜15円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中程度</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">初期投資不要</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">屋根貸し</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">0円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">賃料収入あり</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">なし〜小</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">リスク最小</td>
              </tr>
            </tbody>
          </table>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="太陽光導入検討と合わせて確認したいページです。"
          links={[
            {
              href: "/battery-suitability-diagnosis",
              title: "蓄電池導入向き不向き診断",
              description: "太陽光と組み合わせる蓄電池の向き不向きを確認する診断ページ。",
            },
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "設備投資の前にまず電力契約の見直しを確認する。",
            },
            {
              href: "/industry-risk-diagnosis",
              title: "業種別リスク診断",
              description: "業種別に太陽光導入の必要性と優先度を確認する。",
            },
            {
              href: "/non-fossil-certificates",
              title: "非化石証書とは",
              description: "再エネ証明に使える非化石証書の仕組みと活用方法を解説。",
            },
            {
              href: "/renewable-power-procurement",
              title: "再エネ電力調達の方法",
              description: "自家消費以外の再エネ調達手段の選択肢を整理。",
            },
            {
              href: "/fixed-vs-market-quick-diagnosis",
              title: "固定プラン・市場連動向き診断",
              description: "太陽光導入後の電力プラン選択にも参考になる診断ページ。",
            },
          ]}
        />

        <ContentCta
          heading="設備投資の前に電力コストの現状を把握する"
          description="太陽光発電の投資判断をする前に、現行の電力プランのコストリスクをシミュレーターで確認することで、投資の優先度と費用対効果の判断がしやすくなります。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="solar-suitability-diagnosis" />
      </div>
    </main>
  );
}
