import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "電気料金のリスクシナリオはどう使い分けるか｜法人の予算策定・比較検討・社内説明のための見方";
const pageDescription =
  "電気料金のリスクシナリオを、どの場面でどう使い分けるかを法人向けに解説します。予算策定、社内説明、契約見直し、比較検討での使い方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電気料金シナリオ", "リスク分析", "電力契約見直し", "電力会社比較"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-use-electricity-price-risk-scenarios",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-use-electricity-price-risk-scenarios",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "電気料金のリスクシナリオの使い分け" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const faqItems = [
  {
    question: "リスクシナリオは予算策定でどのように使えばよいですか？",
    answer: "ベースライン（通常想定）と上振れシナリオ（猛暑・円安など）を並記し、予算に幅を持たせる形で使うのが有効です。「通常ケースで〇〇円、厳しいケースで〇〇円」という形式で提示することで、稟議の通りやすさと追加計上の説明資料として活用できます。",
  },
  {
    question: "社内説明資料にリスクシナリオを使うメリットは何ですか？",
    answer: "電気料金が上振れた場合の根拠を事前に示せるため、実際に高騰した際の説明コストが減ります。また「なぜ固定プランにしたか」「なぜ市場連動プランを選ばなかったか」という判断の根拠資料としても機能します。",
  },
  {
    question: "リスクシナリオを電力契約の比較検討でどう使えばよいですか？",
    answer: "市場連動プランと固定プランで「猛暑シナリオ」や「円安シナリオ」ごとにコスト差がどう出るかを試算します。どのシナリオで市場連動が不利になるかを明示することで、契約選択の根拠が具体的になります。",
  },
];

const sources = [
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電気料金の要因別解説・政策情報" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "市場価格・電力需給データ" },
];

export default function HowToUseElectricityPriceRiskScenariosPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/how-to-use-electricity-price-risk-scenarios"
        datePublished="2026-03-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "リスクシナリオ別に知る", url: "https://simulator.eic-jp.org/articles/risk-scenarios" },
          { name: "シナリオの使い分け" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">シナリオの使い方</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気料金のリスクシナリオはどう使い分けるか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          リスクシナリオは、読むための知識ではなく、判断材料として使ってこそ価値が出ます。法人の実務では、予算策定、社内説明、
          見積比較、契約見直しで使い方を分けることで、電気料金の上振れに備えやすくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          まず基本の整理が必要な場合は{" "}
          <Link href="/what-is-electricity-price-risk-scenario" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
            電気料金のリスクシナリオとは
          </Link>{" "}
          もあわせてご確認ください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">予算策定で使うときの見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            予算策定では、通常ケースだけでなく、やや厳しめケースとワースト寄りケースを持つことで、想定外の上振れに対応しやすくなります。
            上振れ幅の最大値だけでなく、発生時期と継続期間も併記するのが実務的です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年間予算と月次管理の双方に効くよう、単月型シナリオと高止まり型シナリオを分けて管理する運用が有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">社内説明や稟議で使うときの見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            いきなり最悪ケースだけを提示すると、判断が極端に見えやすくなります。通常・注意・厳しめの複数シナリオを並べることで、
            前提の違いと判断理由を説明しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            断定的な予測ではなく「備えの幅」として示すことが、過度に煽らない説明につながります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較や契約見直しで使うときの見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較では、平常時の単価差だけでなく、どのシナリオで差が開きやすいかを見ることが重要です。<Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プラン</Link>と<Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プラン</Link>で、
            影響が出るタイミングと項目が異なるためです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約更新時には、更新条件、調整項目、違約金なども含め、シナリオごとの総コストで比較する視点が欠かせません。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ワーストシナリオと単独要因シナリオの使い分け</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            は、複数要因が重なった場合の上限感を把握する用途に向きます。一方で、
            <Link href="/electricity-cost-risk-heatwave" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              猛暑
            </Link>
            や
            <Link href="/electricity-cost-risk-yen-depreciation" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              円安
            </Link>
            などの単独要因シナリオは、「どの要因に弱いか」を把握する用途に向きます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            先に上限感を見てから個別要因に分解すると、対策の優先順位を決めやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使い分けるときに押さえたい注意点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>一つのシナリオだけで結論を断定しない</li>
            <li>前提条件を資料に明記し、社内で共有する</li>
            <li>毎年同じ前提で固定せず、契約や使用実態に合わせて更新する</li>
            <li>比較時は同じ期間・同じ条件で見て差分を評価する</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            使い分けのルールを決めておくと、担当者が変わっても説明の質を維持しやすくなります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">予算策定に使える3段階シナリオの試算例</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間<span className="font-semibold text-slate-900">50,000kWh</span>使用の高圧事業所を想定した、3段階シナリオの試算です。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">シナリオ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">前提条件</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額電力費</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間電力費</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">通常比 増分</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">通常ケース</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">JEPX平均 10円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約50万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約600万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">注意ケース</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">JEPX平均 13円/kWh、円安130円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約65万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約780万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+180万円/年</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">厳しめケース</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">JEPX平均 18円/kWh、円安145円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約90万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約1,080万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+480万円/年</span></td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※ 電力量料金のみの概算です。基本料金・再エネ賦課金・燃料費調整額等は含みません。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較で見えるシナリオ別の差 ― 市場連動 vs 固定</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            平常時は市場連動が安く見えても、リスクシナリオで逆転するケースがあります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">市場環境</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">市場連動プラン</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">固定プラン（20円/kWh）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">差額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">平常時（JEPX 10円）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約18円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動が<span className="font-semibold text-slate-900">▲2円安い</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">猛暑月（JEPX 20円）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約28円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動が<span className="font-semibold text-slate-900">+8円高い</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年間平均</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約19円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">リスク許容度次第</td>
              </tr>
            </tbody>
          </table>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="how-to-use-electricity-price-risk-scenarios" terms={["燃料費調整額", "市場価格調整額", "JEPX", "再エネ賦課金", "容量拠出金", "市場連動プラン"]} />
        </div>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2026-03-28" />

        <RelatedLinks
          heading="関連ページ"
          intro="使い分けを実務に落とし込むための比較・優先順位・個別要因ページです。"
          links={[
            {
              href: "/why-electricity-prices-should-be-viewed-by-scenario",
              title: "電気料金はなぜシナリオ別に見る必要があるのか",
              description: "シナリオ分解の必要性を前提から確認できます。",
            },
            {
              href: "/how-to-compare-electricity-price-risk-scenarios",
              title: "電気料金のリスクシナリオを比較するときの見方",
              description: "影響時期と継続性をそろえた比較軸を整理できます。",
            },
            {
              href: "/which-electricity-price-risk-scenarios-to-check-first",
              title: "電気料金のリスクシナリオはどれから優先して見るべきか",
              description: "契約条件と使用状況に応じた順序を確認できます。",
            },
            {
              href: "/electricity-cost-risk-disaster",
              title: "災害で電気料金・電気代はどう上がるか",
              description: "発生時期が読みづらい要因の見方を確認できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人の電気料金推移（2019〜2025年）",
              description: "各シナリオが実際の料金推移にどう現れたかを確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="使い分けの設計を比較表に反映する"
          description="使い分け方を整理したら、比較ページやシミュレーターで同条件の比較表を作成し、実務判断につなげます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
