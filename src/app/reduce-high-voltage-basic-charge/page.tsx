import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "高圧電力の基本料金を下げる5つの方法｜削減効果と投資回収期間の目安";
const pageDescription =
  "高圧電力の基本料金は契約電力×単価で決まり、全体料金の3〜4割を占めます。デマンドコントロール・契約電力見直し・力率改善・時間分散・建物統合の5つの削減策を、効果目安と投資回収期間、適用条件とセットで整理します。";
const pageUrl = "https://simulator.eic-jp.org/reduce-high-voltage-basic-charge";
const datePublished = "2026-04-19";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "高圧電力 基本料金",
    "基本料金 下げる",
    "契約電力 見直し",
    "デマンドコントロール",
    "力率改善 高圧",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/review-points", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/review-points"],
  },
};

const methods = [
  {
    no: "方法1",
    title: "デマンドコントロール装置の導入",
    effect: "基本料金 ▲5〜15%（ピーク10〜20%抑制時）",
    payback: "1〜3年",
    conditions: "過去1年のピーク月が突出している施設、空調・大型設備が複数系統ある施設",
    detail:
      "30分デマンド値が契約電力を超えないよう監視・警報・自動制御する仕組みです。過去1年の最大デマンドが他の月より明確に高い場合は効果が出やすく、監視のみのシンプル装置なら10〜30万円、空調・設備制御と連動する本格システムは30〜150万円程度が目安です。",
    note:
      "スマートメーターの30分値データを取得できれば、導入前にシミュレーションが可能。過去12か月のデマンド推移を見てピーク月の再現性を確認するのが最初の判断材料になります。",
  },
  {
    no: "方法2",
    title: "契約電力の見直し（実績値契約 / 協議契約）",
    effect: "基本料金 ▲10〜25%（実績値に対して契約が過大な場合）",
    payback: "初月から（初期費用なし）",
    conditions: "実績値契約で過去1年の最大デマンドが契約電力を下回っている施設",
    detail:
      "高圧の契約電力は「実績値契約（過去1年の最大デマンド）」「協議契約（双方合意の値）」「負荷設備契約」に分かれます。実績値契約では過去12か月の最大デマンドが自動反映されるため、設備廃止や省エネ施策で最大値が下がっていれば、契約電力が自然に下がります。協議契約で過大設定になっている施設は、小売との協議で下げ余地がある場合があります。",
    note:
      "一度下げた後に再度ピークが出ると、以降12か月の契約電力がそのピーク値に固定されます。翌1年の稼働計画と整合させて判断してください。",
  },
  {
    no: "方法3",
    title: "力率改善（進相コンデンサ等）",
    effect: "基本料金 ▲最大15%（力率85%→100%時）",
    payback: "2〜5年",
    conditions: "無効電力が大きいモーター中心の施設で、現状の力率が85〜90%程度",
    detail:
      "高圧契約の基本料金は「力率割引・割増」制度があり、力率100%で▲15%、85%で±0、それ以下は割増されます。進相コンデンサを設置して力率を改善すると、そのぶん基本料金が下がります。工場のモーター負荷や古い蛍光灯が多い施設で効果が出やすい施策です。",
    note:
      "過補償になると逆に進み力率割増の対象になる場合があります。電気主任技術者による現状測定から始めるのが確実です。",
  },
  {
    no: "方法4",
    title: "設備運転の時間分散（ピークシフト）",
    effect: "基本料金 ▲3〜10%（ピークを10〜20%下げたとき）",
    payback: "初月から（運用変更のみ）",
    conditions: "複数の大型設備を同時起動している施設、始業時の一斉起動がある施設",
    detail:
      "30分デマンドは同じ30分枠に設備が集中するほど跳ね上がります。始業時の空調一斉起動をずらす、生産設備の立ち上げを15分ずつ分散する、充電設備を深夜帯に移す、といった運用改善だけでピーク値を下げられます。投資ゼロで効果が出るため、まず最初に検討したい施策です。",
    note:
      "効果は現場の協力次第で大きく変わります。計量値の月次見える化（BEMS/EMSの簡易導入）と併用すると定着しやすくなります。",
  },
  {
    no: "方法5",
    title: "建物統合・契約分割の再設計",
    effect: "施設構成によって ▲5〜20%（基本料金ベース）",
    payback: "3〜10年（受電設備投資を含む場合）",
    conditions: "隣接棟ごとに低圧契約を複数持っている、または1つの高圧で余剰がある施設",
    detail:
      "近接する複数棟で低圧契約を分散している場合、受電設備を共通化して高圧1契約にまとめると基本料金単価が下がることがあります。逆に、1つの高圧に過大な契約電力が張り付いている場合は、使用実態に合わせて契約区分を見直したり、低圧契約に分けた方が有利になる場合もあります。キュービクル更新時期と合わせて検討するのが定石です。",
    note:
      "高圧→低圧は主任技術者選任の要否や保安点検コストにも影響します。受電方式の変更は数百万円単位の投資になるため、シミュレーション必須です。",
  },
];

export default function ReduceHighVoltageBasicChargePage() {
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
          { name: "見直しポイントを知る", url: "https://simulator.eic-jp.org/articles/review-points" },
          { name: "高圧電力の基本料金を下げる5つの方法" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            高圧電力の基本料金を下げる5つの方法
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力の基本料金は「<strong>契約電力（kW）× 基本料金単価（円/kW）× 力率係数</strong>」で決まり、年間電気料金の30〜40%を占めるケースが少なくありません。
            単価の見直しには限界があるため、契約電力とデマンドを下げる工夫を組み合わせることが、基本料金削減の近道になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            本記事では、実務で採用されることが多い5つの削減策について、<strong>効果目安・投資回収期間・適用条件</strong>をセットで整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">基本料金はなぜ変動するのか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧契約（500kW未満）では、契約電力は原則として過去1年間で記録された最大30分デマンド値により自動決定されます（実績値契約）。つまり、ある月1回でも大きなピークを出すと、以降12か月分の基本料金が上がり続ける仕組みです。
              逆に言えば、ピーク値を抑えれば翌月以降の基本料金が段階的に下がっていきます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              500kW以上の高圧（標準）および特別高圧では協議契約が基本となり、設備能力や使用実態を踏まえた交渉で契約電力が決まります。どちらの契約区分かによって、取るべき打ち手の優先順位が変わります。
            </p>
          </section>

          {methods.map((m) => (
            <section key={m.no} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                  {m.no}
                </span>
                <h2 className="text-xl font-semibold text-slate-900">{m.title}</h2>
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-semibold text-slate-500">効果目安</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{m.effect}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-semibold text-slate-500">投資回収期間</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{m.payback}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-semibold text-slate-500">適用条件</p>
                  <p className="mt-1 text-sm text-slate-900">{m.conditions}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{m.detail}</p>
              <p className="mt-2 text-xs leading-6 text-slate-500">
                補足: {m.note}
              </p>
            </section>
          ))}

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">5つの打ち手をどう組み合わせるか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              投資ゼロで着手できる<strong>方法4（時間分散）</strong>を最初に試し、デマンドが十分下がったら<strong>方法2（契約電力の見直し）</strong>で契約条件に反映する、という順序が定石です。
              そのうえで、ピーク抑制の定着を確認したら方法1（デマンドコントロール装置）で自動化し、並行して方法3（力率改善）で割引率を上げます。方法5（建物統合）は受電設備更新のタイミングで検討する中長期策として位置づけるとよいでしょう。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              重要なのは、<strong>単一の施策ではなく複数組み合わせで削減する設計</strong>です。1つで▲10%狙うより、▲3〜5%の施策を3つ重ねた方が再現性があります。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">実施前に確認したいこと</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>過去12か月の30分デマンド推移（月別・時間帯別）</li>
              <li>現在の力率（85〜100%のどこにいるか）</li>
              <li>契約区分（実績値契約か協議契約か）</li>
              <li>キュービクル・受変電設備の更新サイクル</li>
              <li>ピーク月が夏冬集中型か通年型か</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              定量評価には<Link href="/demand-value-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド値の見方</Link>や<Link href="/what-is-power-factor" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">力率とは</Link>の基礎を確認しておくと、現場の数字を解釈しやすくなります。
            </p>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/demand-control-guide",
                title: "デマンドコントロールとは？導入効果と費用の目安",
                description: "方法1の詳細ガイド。監視装置とEMS連動型の違い。",
              },
              {
                href: "/demand-control-reduction-effect",
                title: "デマンドコントロールの削減効果",
                description: "基本料金削減の実例ベースの目安。",
              },
              {
                href: "/contract-demand-what-is-it",
                title: "契約電力とは",
                description: "方法2で見直す対象となる契約電力の基礎。",
              },
              {
                href: "/demand-value-guide",
                title: "デマンド値の見方",
                description: "30分デマンドの読み解き方と判断軸。",
              },
              {
                href: "/high-voltage-electricity-pricing",
                title: "高圧電力の料金構造",
                description: "基本料金と電力量料金の全体像。",
              },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="5つの打ち手のうち、どれが自社に効くかを定量的に確認するには、デマンド推移と契約電力データを並べて試算するのが近道です。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門家に相談する" },
            ]}
          />
        </section>
      </main>
    </>
  );
}
