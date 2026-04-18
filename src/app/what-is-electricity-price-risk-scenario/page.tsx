import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import RiskScenarioStressTest from "../../components/market-data/RiskScenarioStressTest";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle = "電気料金のリスクシナリオとは｜法人が上振れリスクを把握するための基本的な考え方";
const pageDescription =
  "電気料金のリスクシナリオとは何かを、法人向けに分かりやすく解説します。単一の想定だけでは見えにくい電気料金・電気代の上振れリスクを、複数の前提で確認する意味を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電気料金シナリオ", "リスク分析"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/what-is-electricity-price-risk-scenario",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/what-is-electricity-price-risk-scenario",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "電気料金のリスクシナリオとは" }],
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
    question: "電気料金のリスクシナリオとは何ですか？",
    answer: "将来の電気料金がどのように上振れし得るかを、複数の前提条件（季節、為替、燃料価格、需給など）で確認するための見方です。単一の想定だけでは把握できないリスクを可視化し、予算策定や契約判断に活用します。予言ではなく「備えのための確認手段」です。",
  },
  {
    question: "なぜ電気料金は一つの想定だけで見ると不十分なのですか？",
    answer: "猛暑・厳冬のような季節要因は特定時期に需要を押し上げ、円安・地政学リスクは燃料調達コストを通じて通年影響します。これらは影響時期・継続性が異なるため、一本の想定だけでは予算や契約判断の前提が粗くなり、実際に大きな上振れが発生した際に対応が後手に回るリスクがあります。",
  },
  {
    question: "リスクシナリオは具体的にどのように活用できますか？",
    answer: "主な活用場面は3つです。①予算策定時に通常ケースと厳しめケースを併記して承認を取りやすくする、②電力契約の比較検討時に市場連動プランと固定プランの条件差を評価する、③社内説明資料でリスクの出方と対策を共有する、といった使い方が有効です。",
  },
];

const sources = [
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電気料金の構成要因・リスク要因に関する解説" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "市場価格の動向・需給状況のモニタリング" },
  { name: "JEPX（日本卸電力取引所）", url: "http://www.jepx.org", description: "スポット市場の過去価格データ" },
];

export default function WhatIsElectricityPriceRiskScenarioPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/what-is-electricity-price-risk-scenario"
        datePublished="2026-03-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "リスクシナリオ別に知る", url: "https://simulator.eic-jp.org/articles/risk-scenarios" },
          { name: "リスクシナリオとは" },
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
        <span className="text-slate-800">リスクシナリオとは</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気料金のリスクシナリオとは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は、一つの前提だけで将来を見通すのが難しい費目です。季節要因、為替、燃料価格、需給、制度変更などで、
          電気代の上振れ方は変わります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、リスクシナリオの基本的な考え方を整理し、要因別の記事を読む前の共通前提をそろえます。カテゴリ全体は{" "}
          <Link href="/articles/risk-scenarios" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
            リスクシナリオ別に知る
          </Link>{" "}
          から確認できます。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクシナリオとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金のリスクシナリオは、将来を断定する予言ではありません。複数の前提を置き、それぞれの条件で電気料金・電気代が
            どのように上振れし得るかを確認するための見方です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単一の見通しだけでは、起こり得る変動幅を過小評価することがあります。シナリオを分けて確認することで、予算と契約検討の前提を
            共有しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ電気料金は一つの想定だけでは見えにくいのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            例えば猛暑や厳冬のような季節要因は、特定時期に需要を押し上げます。一方で円安や地政学リスクは、燃料調達コストや市場価格を
            通じて、一定期間の高止まりに影響する場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            影響時期や継続性が異なるため、一本の想定だけでは、予算策定、見積比較、社内説明での論点が粗くなりやすい点に注意が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人がリスクシナリオで確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>いつ影響が出やすいか（夏季、冬季、通年など）</li>
            <li>どの程度続く可能性があるか（単月か高止まりか）</li>
            <li>市場連動プランと固定プランで影響の受け方がどう違うか</li>
            <li>予算や稟議資料で説明しやすい比較軸になっているか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単価の上下だけでなく、時期・継続性・契約条件を合わせて見ることで、電力契約の見直し判断が実務に落とし込みやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクシナリオは予測ではなく備えのための見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シナリオは「どれが当たるか」を競うためのものではなく、どの前提になっても意思決定の質を落とさないための確認手段です。
            そのため、通常ケースと厳しめケースを併記し、条件差を明示しておく運用が有効です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            結果を断定的に扱わず、見積比較や予算調整の余地を確保するための資料として使うと、社内合意を取りやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">次に確認したい代表的なリスクシナリオ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            入口としては、まず
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            で全体の上限感を把握し、その後に要因別シナリオへ進む流れが分かりやすくなります。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <Link href="/electricity-cost-risk-heatwave" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                猛暑
              </Link>
              ・
              <Link href="/electricity-cost-risk-severe-winter" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                厳冬
              </Link>
              ：季節要因の影響を見る
            </li>
            <li>
              <Link href="/electricity-cost-risk-yen-depreciation" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                円安
              </Link>
              ・
              <Link href="/electricity-cost-risk-geopolitics" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                地政学リスク
              </Link>
              ：通年影響や高止まりを見る
            </li>
            <li>
              <Link href="/electricity-cost-risk-disaster" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                災害
              </Link>
              ：供給制約発生時の影響を見る
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクシナリオの実例: 2021年1月のJEPXスパイク</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            リスクシナリオが「なぜ必要か」を最も端的に示す実例が、2021年1月のJEPX価格高騰です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>通常時のJEPX: <span className="font-semibold text-slate-900">7〜10円/kWh</span></li>
            <li>2021年1月のピーク: 一時<span className="font-semibold text-slate-900">251円/kWh</span>（通常の約25倍）</li>
            <li>2021年1月の月平均: <span className="font-semibold text-slate-900">66.5円/kWh</span>（通常の約7倍）</li>
            <li>原因: LNG在庫枯渇＋全国的寒波＋需給逼迫が同時発生</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランの法人では、月額電気代が通常の<span className="font-semibold text-slate-900">3〜5倍</span>に膨らんだケースもありました。
            この事例が示すのは、「単一の想定（通常ケースのみ）では把握できないリスクが現実に存在する」ということです。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスク要因と過去の実績一覧</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">リスク要因</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">代表的な過去事例</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX影響</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">持続期間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">猛暑</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2023年7月（全国猛暑）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+3〜8円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜2か月</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">厳冬</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2021年1月（寒波＋LNG不足）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+50〜200円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2〜4週間</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">円安</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2022年（1ドル150円台）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+3〜5円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">6か月超</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">地政学リスク</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2022年（ウクライナ情勢）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+5〜10円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1年超</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">大規模災害</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2018年（北海道胆振東部地震）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+30〜100円/kWh</span>（エリア）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">数日〜2か月</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※ JEPX影響はエリアプライスの一時的なピーク値を含みます。通常時のJEPXは7〜12円/kWh程度です。
          </p>
        </section>

        
      <RiskScenarioStressTest />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="what-is-electricity-price-risk-scenario" terms={["燃料費調整額", "市場価格調整額", "JEPX", "市場連動プラン", "固定プラン", "再エネ賦課金"]} />
        </div>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2026-03-28" />

        <RelatedLinks
          heading="関連ページ"
          intro="リスクシナリオの基本を押さえた後に、必要な順序で読み進められる導線です。"
          links={[
            {
              href: "/articles",
              title: "解説ページ一覧",
              description: "全カテゴリから必要なテーマを選んで確認できます。",
            },
            {
              href: "/why-electricity-prices-should-be-viewed-by-scenario",
              title: "電気料金はなぜシナリオ別に見る必要があるのか",
              description: "シナリオ別に確認する実務上の意味を整理しています。",
            },
            {
              href: "/how-to-use-electricity-price-risk-scenarios",
              title: "電気料金のリスクシナリオはどう使い分けるか",
              description: "予算策定・説明資料・見積比較での使い分けを確認できます。",
            },
            {
              href: "/worst-case-electricity-cost-risk",
              title: "ワーストシナリオとは",
              description: "複数要因が重なった場合の上限感を把握できます。",
            },
          ]}
        />

        <ContentCta
          heading="シナリオの土台を確認したら比較に進む"
          description="基本を押さえた後は、比較ページやシミュレーターで自社条件に近いケースを確認すると、契約判断に使いやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
