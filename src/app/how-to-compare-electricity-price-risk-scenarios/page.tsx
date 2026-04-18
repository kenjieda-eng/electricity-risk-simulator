import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle = "電気料金のリスクシナリオを比較するときの見方｜影響時期・継続性・上振れの出方の整理";
const pageDescription =
  "電気料金のリスクシナリオを比較するときに確認したいポイントを法人向けに解説します。影響の大きさ、出る時期、継続性、契約メニューとの相性など、比較の軸を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電気料金シナリオ", "リスク分析", "電力会社比較"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-compare-electricity-price-risk-scenarios",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-compare-electricity-price-risk-scenarios",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "電気料金リスクシナリオの比較軸" }],
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
    question: "電気料金のリスクシナリオを比較するときの主な軸は何ですか？",
    answer: "主に4つの軸が有効です。①影響が出る時期（夏季・冬季・通年など）、②継続性（一時的か高止まりか）、③上振れの大きさ（単価上昇幅の目安）、④契約メニューとの相性（市場連動か固定かで影響の受け方が異なる）です。これらを表形式で整理すると比較資料として使いやすくなります。",
  },
  {
    question: "リスクシナリオの比較で特に重要なのはどの要因ですか？",
    answer: "実務的には「継続性」と「契約メニューとの相性」が最も重要です。猛暑・厳冬は影響が大きくても一時的ですが、円安や地政学リスクは半年以上継続することがあります。また市場連動プランは短期の価格急騰に、固定プランは長期の高止まりにそれぞれ異なるリスクがあります。",
  },
  {
    question: "複数のリスクシナリオが重なった場合はどう考えればよいですか？",
    answer: "複数要因の重なりはワーストシナリオとして整理するのが有効です。例えば「厳冬＋円安」が重なった2021〜2022年冬のような状況では、単独要因の単純合算より大きな上振れが発生しました。ワーストシナリオで上限感を押さえておくことで、最大リスクへの備えができます。",
  },
];

const sources = [
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電気料金の要因別分析・データ" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "市場価格・需給データの比較資料" },
  { name: "JEPX（日本卸電力取引所）", url: "http://www.jepx.org", description: "要因別スポット価格の過去データ" },
];

export default function HowToCompareElectricityPriceRiskScenariosPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/how-to-compare-electricity-price-risk-scenarios"
        datePublished="2026-03-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "リスクシナリオ別に知る", url: "https://simulator.eic-jp.org/articles/risk-scenarios" },
          { name: "シナリオの比較の仕方" },
        ]}
        faq={faqItems}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">シナリオの比較方法</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気料金のリスクシナリオを比較するときの見方</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          リスクシナリオ比較は「どれが一番怖いか」を決める作業ではなく、比較軸をそろえて意思決定に使える形へ整理する作業です。
          軸がずれると、同じ電気料金上振れでも判断がぶれやすくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          前提整理から始める場合は{" "}
          <Link href="/what-is-electricity-price-risk-scenario" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
            リスクシナリオとは
          </Link>{" "}
          もあわせてご覧ください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まず比べたいのは影響の大きさだけではない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較では、上振れ幅の大小だけを見ると誤解が生まれやすくなります。確認したいのは、影響の大きさ、影響時期、継続性、
            契約メニューとの相性、年間予算への効き方の5点です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            同じ上振れ幅でも「短く大きい上昇」と「長く続く上昇」では、対応策や意思決定者への説明内容が変わります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">影響時期で比べる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/electricity-cost-risk-heatwave" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              猛暑
            </Link>
            や
            <Link href="/electricity-cost-risk-severe-winter" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              厳冬
            </Link>
            は季節性が強く、月次管理でインパクトを捉えやすい要因です。一方、
            <Link href="/electricity-cost-risk-yen-depreciation" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              円安
            </Link>
            と
            <Link href="/electricity-cost-risk-geopolitics" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              地政学リスク
            </Link>
            は、通年での積み上げを意識して比較する必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            月単位の比較表に加え、四半期・年間の比較欄を用意すると、資料の説明力が高まります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単月型か高止まり型かで比べる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単月型は短期ショックとしての対応が中心になり、高止まり型は予算配分や契約戦略の見直しが中心になります。比較時にこの区分を
            分けておくと、対策の優先順位を立てやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            は、単独比較というより、複数要因が重なる上限イメージを持つための基準として使うのが適切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約メニューとの相性で比べる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プラン</Link>は短期変動の影響を受けやすく、<Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プラン</Link>は更新時や調整項目で影響が出ることがあります。どのシナリオで差が
            開きやすいかを比較できると、契約方針の検討が進めやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約メニュー比較は
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動と固定の比較
            </Link>
            と併用すると、シナリオ別の差分が読み取りやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較の軸をそろえると説明資料に使いやすい</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>同じ前提期間で比較する（例: 12か月、四半期）</li>
            <li>同じ指標で比較する（上振れ率、増分コスト、影響月）</li>
            <li>同じ表現で比較する（通常・注意・厳しめ）</li>
            <li>前提条件の変更履歴を残して、説明の再現性を持たせる</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            資料化しやすい比較軸を最初に決めることで、毎回の説明コストを抑えながら判断の質を保ちやすくなります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクシナリオ比較一覧表</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間<span className="font-semibold text-slate-900">50,000kWh</span>使用の高圧事業所を基準に、各シナリオの影響を横断比較します。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">シナリオ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">影響タイプ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">影響時期</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">持続期間</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX上振れ目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間コスト増</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約影響度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">猛暑</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">単月急騰型</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">7〜9月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜3か月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+5〜15円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+30〜90万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動＞固定</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">厳冬</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">単月急騰型</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">12〜2月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜3か月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+5〜20円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+30〜120万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動＞固定</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">円安</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高止まり型</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">通年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">数か月〜1年超</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+2〜5円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+120〜300万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">固定含め全般</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">地政学</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高止まり型</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">通年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">半年〜数年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+3〜10円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+180〜600万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">固定含め全般</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">災害</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">不定期ショック</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">不定</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">数日〜2か月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+10〜50円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+10〜100万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動＞固定</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">ワースト</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">複合型</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">通年+季節集中</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">半年〜</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+10〜25円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+600〜1,500万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">全メニュー</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※ 月間50,000kWh使用の市場連動プランでの概算。固定プランは更新時に影響が出る場合があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">シナリオ別 月次コスト推移の比較イメージ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            同じ年間増分でも、月次の出方が違うと資金繰りや予算管理への影響が異なります。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">猛暑シナリオ（山型）</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>4〜6月: 通常（増分なし）</li>
                <li>7〜9月: 月<span className="font-semibold text-slate-900">+25〜75万円</span>集中</li>
                <li>10月以降: 通常に戻る</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">年間増分: <span className="font-semibold text-slate-900">+75〜225万円</span></p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">円安シナリオ（平坦型）</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>毎月: <span className="font-semibold text-slate-900">+10〜25万円</span>が継続</li>
                <li>季節変動: 小さい</li>
                <li>終了時期: 不透明</li>
              </ul>
              <p className="mt-2 text-sm text-slate-700">年間増分: <span className="font-semibold text-slate-900">+120〜300万円</span></p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            山型は特定月のキャッシュフローを圧迫し、平坦型は年間利益率をじわじわ押し下げます。比較時は月次と年間の両面で見ることが重要です。
          </p>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="how-to-compare-electricity-price-risk-scenarios" terms={["燃料費調整額", "市場価格調整額", "JEPX", "再エネ賦課金", "容量拠出金", "市場連動プラン"]} />
        </div>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2026-03-28" />

        <RelatedLinks
          heading="関連ページ"
          intro="比較軸の整理と、実際の優先順位付けをつなげるためのページです。"
          links={[
            {
              href: "/how-to-use-electricity-price-risk-scenarios",
              title: "電気料金のリスクシナリオはどう使い分けるか",
              description: "用途ごとの使い方を先に整理できます。",
            },
            {
              href: "/which-electricity-price-risk-scenarios-to-check-first",
              title: "電気料金のリスクシナリオはどれから優先して見るべきか",
              description: "自社条件に応じた確認順序を決められます。",
            },
            {
              href: "/electricity-cost-risk-disaster",
              title: "災害で電気料金・電気代はどう上がるか",
              description: "発生時期を読み切りにくい要因の比較視点を補えます。",
            },
            {
              href: "/articles",
              title: "解説ページ一覧",
              description: "カテゴリ全体から必要なページに戻れます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "シナリオ別の影響差を契約比較の観点から確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較軸を決めたら条件別に試算する"
          description="比較の見方をそろえた後は、同じ前提条件で複数メニューを試算し、資料化しやすい形で判断材料を整えます。"
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
