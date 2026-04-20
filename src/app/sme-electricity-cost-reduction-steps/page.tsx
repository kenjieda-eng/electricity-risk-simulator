import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "中小企業の電力コスト削減｜月5万円から始める3ステップ";
const pageDescription =
  "月間電気代5〜30万円クラスの中小企業向けに、実務担当者が着手しやすい3ステップ（請求書の内訳把握・運用改善・契約見直し）を整理。各ステップの所要時間、期待削減額、担当者の目安をまとめます。";
const pageUrl = "https://simulator.eic-jp.org/sme-electricity-cost-reduction-steps";
const datePublished = "2026-04-19";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中小企業 電気代 削減",
    "電力コスト 削減 方法",
    "法人 電気代 見直し",
    "中小 電気料金 下げる",
    "小規模事業者 電気代",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/sme-guide", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/sme-guide"],
  },
};

const stepSummary = [
  { step: "STEP 1", name: "請求書の内訳把握", time: "2〜3時間/月", reduction: "0円（可視化のみ）", owner: "経理・総務担当" },
  { step: "STEP 2", name: "照明・空調の運用改善", time: "初期1日＋継続運用", reduction: "月額 5〜15%削減", owner: "現場責任者＋総務" },
  { step: "STEP 3", name: "契約見直し（年1回）", time: "3〜6週間（年1回）", reduction: "月額 5〜20%削減", owner: "総務＋経営判断" },
];

export default function SmeElectricityCostReductionStepsPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={datePublished}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "記事一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "中小企業・小規模事業者向け", url: "https://simulator.eic-jp.org/articles/sme-guide" },
          { name: "中小企業の電力コスト削減3ステップ" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            中小企業の電力コスト削減｜月5万円から始める3ステップ
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            月間電気代が5〜30万円クラスの中小企業では、<strong>専門部署を置かず総務・経理が兼務</strong>で対応しているケースが多く、
            大企業向けの削減施策（BEMS/蓄電池/コーポレートPPA）はそのまま当てはまりません。限られた人的リソースと予算の範囲で効果を出すには、「可視化 → 運用改善 → 契約見直し」の順で着手するのが最も現実的です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            本記事では、中小企業の担当者が<strong>迷わず動ける3ステップ</strong>として、所要時間・期待削減額・担当者の目安をセットで整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3ステップの全体像</h2>
            <table className="mt-4 w-full min-w-[620px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">ステップ</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">内容</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">所要時間</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">期待削減額</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">担当者</th>
                </tr>
              </thead>
              <tbody>
                {stepSummary.map((s) => (
                  <tr key={s.step} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-semibold">{s.step}</td>
                    <td className="border border-slate-200 px-3 py-2">{s.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{s.time}</td>
                    <td className="border border-slate-200 px-3 py-2">{s.reduction}</td>
                    <td className="border border-slate-200 px-3 py-2">{s.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-xs text-slate-500">
              ※ 削減額は現状の電気代に対する割合。実際の効果は業種・使用パターン・設備状況で変動します。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">STEP 1：請求書の内訳把握（可視化）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              多くの中小企業では、電気代の請求書は「総額しか見ていない」ケースが大半です。まずは請求書を4つの要素に分解します。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><strong>基本料金</strong>：契約電力/契約アンペアと単価で決まる固定費。削減には契約見直しが必要。</li>
              <li><strong>電力量料金</strong>：使用量（kWh）× 単価。運用改善で減らす主な対象。</li>
              <li><strong>燃料費調整額</strong>：燃料市況で上下する変動分。契約プランの種類（固定型/市場連動型/上限付き）で影響が変わる。</li>
              <li><strong>再エネ賦課金</strong>：全国一律（2025年度3.98円/kWh）。契約では減らせないが使用量を減らせば下がる。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              月次でこの4要素に分解するだけで、「何に対して施策を打てば良いか」が明確になります。Excelやスプレッドシートで12か月の推移表を作るのがスタート地点です。
              担当は<strong>経理または総務</strong>。月次決算の一部として定型化すれば継続しやすくなります。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              詳細は<Link href="/business-electricity-bill-breakdown" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気代の請求書の内訳</Link>を参照。低圧契約の見方は<Link href="/sme-electricity-basics" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業の電気料金の基礎</Link>に整理しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">STEP 2：照明・空調の運用改善（投資ゼロで5〜15%削減）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中小企業の電気代の多くは、<strong>照明＋空調＋OA機器</strong>で8〜9割を占めます。とくに小売・飲食・小規模オフィスでは、運用改善だけで<strong>月額5〜15%の削減</strong>が現実的なラインです。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>空調の設定温度を夏28度・冬20度にそろえる（1度で約10%の消費電力差）</li>
              <li>開店前後1時間の照明・空調起動をずらし、一斉ピークを回避</li>
              <li>営業時間外（深夜・早朝）の待機電力削減（OA機器・自販機・看板照明）</li>
              <li>フィルター清掃の定期化（月1回）で空調効率を維持</li>
              <li>照明のLED化は投資ゼロではないが3〜5年で回収可能、優先度高め</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              担当は<strong>現場責任者＋総務</strong>。現場での実行が必須のため、店長・工場長クラスを巻き込むのが鍵になります。STEP 1の可視化と組み合わせると、「先月と比べて何%減った」を毎月報告できるため、施策の定着度が上がります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">STEP 3：契約見直し（年1回・見積比較）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              運用改善で使用量を下げたら、年に1回は契約条件の見直しを検討します。中小企業の低圧契約は複数の新電力が競合している領域で、<strong>5〜20%の削減余地が残っているケースが多い</strong>のが実情です。
              見直しの選択肢は大きく2つあります。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><strong>同じ小売の別プランへ切り替え</strong>：大手電力の業務用プラン間スイッチなど。手続きが軽く、数%〜10%の削減が狙える。</li>
              <li><strong>新電力への切り替え</strong>：より大きな削減余地がある一方、調整項目の上限有無・契約期間・中途解約金の確認が必須。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              担当は<strong>総務＋経営判断</strong>。見積比較の実務は総務が担い、最終判断は経営層に上げるのが通常です。契約期間は最長2〜3年程度を上限にして、市場状況に合わせて毎年見直せる体制を作るのが安全です。
              比較時の確認項目は<Link href="/5-minimum-checkpoints-for-electricity-contract-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約見直しで最低限確認したい5項目</Link>にまとめています。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">1年を通じた運用サイクル</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              3ステップは<strong>年間サイクルで回す</strong>のが理想です。STEP 1の可視化は月次、STEP 2の運用改善は日常運用、STEP 3の契約見直しは年1回（更新月の3か月前）。
              この3層を継続することで、外部要因（燃料費高騰・単価改定）があっても影響を最小化できます。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>毎月：請求書の4要素分解・前年同月比</li>
              <li>四半期：運用改善の効果レビューと現場フィードバック</li>
              <li>年1回：契約プランの再見積り・契約条件の比較</li>
            </ul>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/sme-electricity-basics",
                title: "中小企業の電気料金の基礎",
                description: "低圧契約の構造を理解する最初の1本。",
              },
              {
                href: "/sme-cost-reduction-quick-wins",
                title: "中小企業の電気代削減｜即効策",
                description: "今日から始められる運用改善アイデア集。",
              },
              {
                href: "/low-voltage-review-essentials",
                title: "低圧契約の見直し要点",
                description: "契約見直しで確認すべき項目のチェックリスト。",
              },
              {
                href: "/small-business-electricity-review-timing",
                title: "小規模事業者の電気代｜見直すべきタイミング",
                description: "STEP 3をいつ実行するかの判断基準。",
              },
              {
                href: "/business-electricity-bill-breakdown",
                title: "法人電気代の請求書の内訳",
                description: "STEP 1の4要素分解を詳しく解説。",
              },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="3ステップの全体像を把握したら、まずは直近12か月の請求書を並べて可視化するところから始めましょう。具体的な施策の優先順位で迷ったらご相談ください。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門家に相談する" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="中小企業の電力コスト削減、専門家に相談しませんか？"
            description="現状の電気代診断から削減施策の優先順位づけ、補助金活用の検討まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
