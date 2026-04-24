import type { Metadata } from "next";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PowerProcurementSeriesNav from "../../components/articles/PowerProcurementSeriesNav";
import ContentCta from "../../components/simulator/ContentCta";
import FlowDiagram from "../../components/simulator/FlowDiagram";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["power-procurement"];


const pageTitle = "電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方";
const pageDescription =
  "電力調達では、価格リスク、数量リスク、需給逼迫リスク、燃料リスクなど複数の不確実性に備える必要があります。長期契約、相対契約、先物、再エネ調達などをどう組み合わせるのかを整理します。";
const pageUrl = "https://simulator.eic-jp.org/power-risk-management";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "再エネ賦課金"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/power-procurement",
        width: 1200,
        height: 630,
        alt: "電力会社のリスク管理",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/power-procurement"],
  },
};

export default function PowerRiskManagementPage() {
  const riskRows = [
    {
      risk: "価格リスク",
      response: "相対契約、長期契約、先物、価格設計の分散",
      note: "短期市場への依存度を下げ、急変時の振れ幅を抑えやすくする",
    },
    {
      risk: "数量リスク",
      response: "JEPX、時間前調整、複数契約の組み合わせ",
      note: "需要予測との差分を市場で吸収しやすくする",
    },
    {
      risk: "需給逼迫リスク",
      response: "ベース調達の厚み確保、分散調達、需給監視",
      note: "必要量を短期市場だけに依存しない構造を持つ",
    },
    {
      risk: "燃料リスク",
      response: "燃料連動の把握、先物・長期契約、電源構成の分散",
      note: "LNG・石炭・原油の影響を単一燃料へ寄せすぎない",
    },
    {
      risk: "制度変更リスク",
      response: "制度依存度の分散、証書・再エネ価値の確認、契約条項管理",
      note: "FIT/FIPや非化石価値の扱い変更を調達設計へ織り込む",
    },
  ];

  return (
    <>
      <ArticleJsonLd
        headline="電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方"
        description="電力調達では、価格リスク、数量リスク、需給逼迫リスク、燃料リスクなど複数の不確実性に備える必要があります。長期契約、相対契約、先物、再エネ調達などをどう組み合わせるのかを整理します。"
        url="https://simulator.eic-jp.org/power-risk-management"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力会社はどうリスクを管理しているのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          ここまで見てきたように、電力会社の仕入れには、市場調達、相対契約、長期契約、先物、再エネ調達、環境価値の確保など、いくつもの手段があります。
          その理由は、どれか一つが万能だからではなく、対応できるリスクの種類がそれぞれ違うためです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          電力調達では、価格が上がるリスクだけでなく、必要量を確保しきれないリスク、需給が急に引き締まるリスク、燃料価格の変動、
          制度変更の影響など、複数の不確実性を同時に抱えます。そのため、調達の現場では「一番安い方法を一つ選ぶ」というより、
          「性格の違う手段をどう組み合わせるか」という発想が重要になります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力調達で管理したい主なリスク</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            主なリスクは、市場価格の変動、需要予測のずれ、需給逼迫、燃料価格、制度変更です。これらは別々に動くのではなく、
            同時に重なることがあります。たとえば、燃料高と猛暑と供給余力低下が重なれば、価格も数量確保も厳しくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ一つの調達方法に依存しないのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            どの手段にも強みと弱みがあるためです。JEPXは柔軟ですが価格変動を受けやすく、相対契約や長期契約は安定しやすい一方で、
            需要変化に完全一致させるのは難しくなります。再エネ調達は電源構成や環境価値の面で有効ですが、出力変動や制度面の読み替えも必要です。
          </p>
          <InfoBox title="分散調達の前提">
            分散調達は、必ず平均コストを最小化するためだけの考え方ではありません。極端な上振れを抑え、供給継続性を高めるための設計でもあります。
          </InfoBox>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクと対応手段の対応表</h2>
          <table className="mt-4 min-w-[860px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">リスクの種類</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主な対応手段</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">補足</th>
              </tr>
            </thead>
            <tbody>
              {riskRows.map((row) => (
                <tr key={row.risk} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.risk}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.response}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">長期契約・相対契約・先物・再エネ調達の役割分担</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            長期契約や相対契約は、ベース需要に対する数量確保と価格安定に向きやすい手段です。先物は、その上で残る将来価格の変動を抑える役割があります。
            再エネ調達は、電源構成の多様化や環境価値の確保に寄与し、非化石証書は価値のレイヤーを補います。
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <InfoBox title="ベースを支える手段">
              相対契約、長期契約、自社電源、PPAなどは、数量確保と見通しの土台を作る役割を持ちます。
            </InfoBox>
            <InfoBox title="変動に備える手段">
              JEPX、時間前市場、先物、複数の契約期間の組み合わせは、短期変動や将来価格変動を吸収する役割を持ちます。
            </InfoBox>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">調達ポートフォリオという見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、一番安い手段を一つ選ぶのではなく、ベース部分を安定的な契約で押さえ、残る変動を市場やヘッジで吸収するというポートフォリオ発想が重要です。
            これに再エネ調達や環境価値の確保を重ねていくことで、価格、数量、制度、環境価値のバランスを取ります。
          </p>
          <div className="mt-4">
            <FlowDiagram
              heading="典型的な調達ポートフォリオの考え方"
              steps={[
                {
                  title: "1. ベース需要",
                  description: "長期契約・相対契約・自社電源で基礎量を押さえる",
                },
                {
                  title: "2. 残る変動需要",
                  description: "JEPXや時間前市場で不足分を調整する",
                },
                {
                  title: "3. 将来価格リスク",
                  description: "先物などで大きな価格変動に備える",
                },
                {
                  title: "4. 再エネ・価値",
                  description: "再エネ調達や非化石証書で商品設計や価値要件を補う",
                },
              ]}
            />
          </div>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">調達ポートフォリオの構成比イメージ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中規模新電力の典型的な調達構成例です。実際の比率は事業規模や顧客構成で異なります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">調達手段</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">構成比目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">価格水準イメージ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">リスク特性</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">相対契約（ベース）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">40〜50%</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">11〜14円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">価格安定・数量固定</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">JEPX（変動調整）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">20〜30%</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">8〜25円/kWh（変動大）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">柔軟だが価格リスク</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">先物ヘッジ</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">10〜20%</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">12〜16円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">価格上限を制御</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ・PPA</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">5〜15%</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10〜15円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">長期安定・環境価値</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年の燃料高騰で何が起きたか ― ポートフォリオ分散の実効性</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年のウクライナ情勢を契機とした燃料高騰は、調達ポートフォリオの設計が経営存続を左右することを示しました。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">JEPX依存率80%のA社</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>年間調達コスト: 前年比<span className="font-semibold text-slate-900">+120%</span></li>
                <li>JEPX年平均22円/kWhの影響を直接被る</li>
                <li>結果: <span className="font-semibold text-slate-900">経営破綻・事業撤退</span></li>
              </ul>
            </div>
            
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">相対60%+先物20%+JEPX20%のB社</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>年間調達コスト: 前年比<span className="font-semibold text-slate-900">+30%</span></li>
                <li>ベースを相対で押さえ、先物でヘッジ</li>
                <li>結果: <span className="font-semibold text-slate-900">経営継続・収益確保</span></li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            同じ市場環境でもコスト増加率に<span className="font-semibold text-slate-900">約4倍の差</span>が出ました。2022年には新電力<span className="font-semibold text-slate-900">31社</span>が倒産・撤退しており、その多くがJEPX依存率の高い事業者でした。
          </p>
        </section>

        <RelatedLinks
          heading="このカテゴリのまとめ"
          intro="リスク管理は単独では完結しません。ここまでの各記事へ戻ると、どの手段がどのリスクに効くかを再確認できます。"
          links={[
            {
              href: "/bilateral-power-contracts",
              title: "相対契約とは何か｜市場に依存しない仕入れの考え方",
              description: "市場以外の調達手段としての役割を確認できます。",
            },
            {
              href: "/long-term-power-procurement",
              title: "長期契約とは何か｜安定調達のために期間を長く取る考え方",
              description: "ベース需要の安定調達をどう考えるかを振り返れます。",
            },
            {
              href: "/power-futures",
              title: "先物取引とは何か｜将来の価格を先に固定する仕組み",
              description: "価格ヘッジの役割を確認できます。",
            },
            {
              href: "/renewable-power-procurement",
              title: "再エネ電気はどう調達しているのか｜FIT・FIP・PPA・相対契約の考え方",
              description: "電源構成と価値の観点からポートフォリオを広げられます。",
            },
            {
              href: "/non-fossil-certificates",
              title: "非化石証書とは何か｜再エネ価値をどう確保するのか",
              description: "環境価値のレイヤーをポートフォリオにどう入れるかを確認できます。",
            },
            {
              href: "/electricity-cost-risk-geopolitics",
              title: "地政学リスクで電気料金はどう上がるか",
              description: "リスク管理の背景にある燃料・地政学リスクの実例を確認できます。",
            },
            {
              href: "/demand-response-revenue-model",
              title: "デマンドレスポンス（DR）で収益を得る方法",
              description: "需要側で価格変動リスクをヘッジし、さらに収益源とする法人向けガイド。",
            },
          ]}
        />

        <ContentCta
          heading="読み終えたらカテゴリ全体を見直す"
          description="10本を通して読むと、料金の背景ではなく、電力会社がどのように仕入れ・調達を設計しているかが順につながって見えるようになります。"
          links={[
            { href: "/articles/power-procurement", label: "カテゴリ一覧を見る" },
            { href: "/market-linked-vs-fixed", label: "料金メニュー比較の記事を見る" },
          ]}
        />

        <PowerProcurementSeriesNav
          currentSlug="power-risk-management"
          extraLinks={[
            { href: "/bilateral-power-contracts", title: "相対契約に戻る" },
            { href: "/long-term-power-procurement", title: "長期契約に戻る" },
            { href: "/power-futures", title: "先物に戻る" },
            { href: "/renewable-power-procurement", title: "再エネ調達に戻る" },
            { href: "/non-fossil-certificates", title: "非化石証書に戻る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="power-risk-management" />
      </div>
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
