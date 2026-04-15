import type { Metadata } from "next";
import Link from "next/link";
import PowerProcurementSeriesNav from "../../components/articles/PowerProcurementSeriesNav";
import ContentCta from "../../components/simulator/ContentCta";
import FlowDiagram from "../../components/simulator/FlowDiagram";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "非化石証書とは何か｜再エネ価値をどう確保するのか";
const pageDescription =
  "非化石証書は、電気そのものとは別に、非化石価値や環境価値を扱う仕組みです。再エネメニューの背景を理解する前提として、電気の調達と環境価値の調達の違いを整理します。";
const pageUrl = "https://simulator.eic-jp.org/non-fossil-certificates";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
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

const comparisonRows = [
  {
    item: "電気そのもの",
    meaning: "物理的に供給される電気",
    what: "kWhとして使われるエネルギー",
    usage: "需給調整や販売電力量の前提",
  },
  {
    item: "環境価値",
    meaning: "再エネ・非化石由来であることの価値",
    what: "CO2排出や非化石性に関する属性",
    usage: "商品設計や説明価値の基礎",
  },
  {
    item: "非化石証書",
    meaning: "環境価値を取引可能な形に切り出したもの",
    what: "証書として売買される非化石価値",
    usage: "再エネメニューや高度化法対応など",
  },
];

export default function NonFossilCertificatesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">非化石証書とは何か｜再エネ価値をどう確保するのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          再エネメニューや環境配慮型の電気料金プランを見るとき、電気そのものの調達と、環境価値の確保が同じように見えてしまうことがあります。
          そこで重要になるのが、非化石証書という考え方です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          非化石証書は、電気そのものとは別に、非化石電源由来であることの価値を扱う仕組みです。そのため、再エネ電気の調達を理解するには、
          「物理的な電気」と「環境価値」を分けて考える視点が欠かせません。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">非化石証書とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            非化石証書は、非化石電源由来であることの価値を、電気そのものから切り分けて扱う仕組みです。小売会社の調達では、
            再エネ電気そのものを仕入れるケースだけでなく、調達した電気に対して非化石価値を組み合わせるケースもあります。
          </p>
          <InfoBox title="ここで混同しやすい点">
            非化石証書を買ったからといって、そのまま物理的な再エネ電気が同時に届くわけではありません。電気の調達と価値の調達は別のレイヤーです。
          </InfoBox>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気そのもの・環境価値・非化石証書の違い</h2>
          <table className="mt-4 min-w-[860px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">項目</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">意味</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">何を確保するか</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">どんな場面で使うか</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.item} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.item}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.meaning}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.what}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ環境価値を分けて扱うのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力系統では、発電された電気は送配電網の中で混ざります。そのため、ある需要家に届いた電気を物理的に特定電源だけへ対応づけることは簡単ではありません。
            そこで、再エネや非化石由来であることの価値を証書として切り出し、取引や表示の整理に使う考え方が生まれています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">非化石証書はどんな場面で使われるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            小売会社の観点では、非化石証書は再エネメニューや環境配慮型メニューを設計するときの裏付けとして使われます。また、
            非化石価値をどのように調達するかは、高度化法対応や商品設計の一部としても重要です。
          </p>
          <div className="mt-4">
            <FlowDiagram
              heading="電気と非化石価値を組み合わせるイメージ"
              steps={[
                {
                  title: "1. 電気を調達する",
                  description: "市場、相対契約、再エネ電源などから物理的な電気を確保する",
                },
                {
                  title: "2. 価値を調達する",
                  description: "必要に応じて非化石証書などで環境価値を確保する",
                },
                {
                  title: "3. 商品へ反映する",
                  description: "再エネ・非化石メニューとして販売条件を組み立てる",
                },
              ]}
            />
          </div>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">非化石証書の価格帯と取引実績</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            非化石証書は入札方式で取引されており、区分によって価格帯が異なります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">区分</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">最低入札価格</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">約定平均価格（2024年度）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">取引量傾向</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ指定（FIT）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">0.3円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">0.3〜0.6円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">増加傾向</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ指定（非FIT）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">0.6円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">0.6〜1.3円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">拡大中</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">非再エネ（原子力等）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">0.6円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">0.6〜0.8円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">横ばい</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2023年度のFIT非化石証書取引量は約<span className="font-semibold text-slate-900">1,200億kWh</span>相当で、RE100対応などの企業需要を背景に増加しています。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">法人の電気料金への影響目安</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間<span className="font-semibold text-slate-900">50,000kWh</span>使用の<Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧</Link>事業所で再エネメニューを選択した場合の追加コスト目安です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>FIT証書（0.3円/kWh）使用時: 月額<span className="font-semibold text-slate-900">+約1.5万円</span>、年間<span className="font-semibold text-slate-900">+約18万円</span></li>
            <li>非FIT証書（1.3円/kWh）使用時: 月額<span className="font-semibold text-slate-900">+約6.5万円</span>、年間<span className="font-semibold text-slate-900">+約78万円</span></li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            RE100対応を目指す企業にとって、FIT証書の低コストは大きな利点ですが、供給量の上限やトラッキング情報の扱いも確認が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">読むときに混同しやすいポイント</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>再エネ電気を仕入れることと、再エネ価値を確保することは同じではない</li>
            <li>非化石証書は物理電力ではなく、価値を取引する仕組みである</li>
            <li>制度区分や市場区分は見直しが入ることがあるため、最新の公式資料確認が前提になる</li>
          </ul>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            2026年4月2日時点では、資源エネルギー庁公開の非化石価値取引市場・非化石証書関連資料をもとに制度区分を確認しています。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="再エネ電気の仕入れ方と、環境価値の持ち方を続けて読むと、再エネメニューの調達構造が整理しやすくなります。"
          links={[
            {
              href: "/renewable-power-procurement",
              title: "再エネ電気はどう調達しているのか｜FIT・FIP・PPA・相対契約の考え方",
              description: "再エネ電気そのものの調達方法を整理できます。",
            },
            {
              href: "/power-risk-management",
              title: "電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方",
              description: "環境価値も含めて調達ポートフォリオの中で考えられます。",
            },
            {
              href: "/articles/power-procurement",
              title: "電力調達の仕組みを知るカテゴリ一覧",
              description: "10本構成の流れを一覧で見直せます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "非化石証書制度と関わる再エネ促進コストの仕組みを確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="締めの記事へ進む"
          description="最後にリスク管理の記事を読むと、ここまでの各手段がどのリスクに対応しているのかをまとめて整理できます。"
          links={[
            { href: "/power-risk-management", label: "リスク管理の記事へ進む" },
            { href: "/articles/power-procurement", label: "カテゴリ一覧を見る" },
          ]}
        />

        <PowerProcurementSeriesNav
          currentSlug="non-fossil-certificates"
          extraLinks={[{ href: "/renewable-power-procurement", title: "再エネ調達の記事に戻る" }]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="non-fossil-certificates" />
      </div>
    </main>
  );
}
