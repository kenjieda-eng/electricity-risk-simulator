import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import TableOfContents from "../../components/market-data/TableOfContents";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle =
  "電力量料金の見方｜使用量と単価の関係を理解する";
const pageDescription =
  "電気料金の電力量料金がどのように計算されるかを解説。時間帯別料金・季節変動・プランによる単価の違いと、使用パターンに応じた比較方法を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力量料金 見方",
    "電力量料金 単価 計算",
    "時間帯別料金 高圧",
    "電気料金 kWh 単価",
    "法人 電気 電力量料金 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/energy-charge-explained",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/energy-charge-explained",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/basic", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/basic"],
  },
};

const energyChargeSections = [
  {
    heading: "電力量料金の基本算出式",
    content: [
      "電力量料金は「使用量（kWh）× 電力量料金単価（円/kWh）」で算出されます。使用量が増えれば増えるほど料金も増加する変動費です。節電・稼働見直しによって使用量を削減することが、電力量料金の直接的な削減手段になります。",
      "高圧電力の場合、電力量料金単価は時間帯別・季節別に複数の単価が設定されているメニューが一般的です。例えば「昼間単価12円/kWh・夜間単価8円/kWh」の場合、昼間と夜間の使用量比率によって実質的な平均単価が変わります。単価の数字だけでなく、自社の稼働パターンで実際にかかるコストを試算することが重要です。",
    ],
    checkPoints: [
      "月間総使用量（kWh）の推移（直近12か月）",
      "適用されている電力量料金単価（時間帯別）",
      "各時間帯の使用量比率",
      "夏季・冬季など季節別の単価変動の有無",
    ],
  },
  {
    heading: "時間帯別料金の仕組みと種類",
    content: [
      "高圧電力の電力量料金は、主に「昼間単価型」「時間帯別型」「ピーク付き3段型」などの方式があります。昼間単価型は時間帯を問わず一律単価が適用されます。時間帯別型では昼間と夜間で単価が異なり、一般的に昼間単価が高く夜間単価が低く設定されています。ピーク付き3段型ではさらに夏季の日中などに「ピーク時間帯」が設けられ、この時間帯の単価が最も高くなります。",
      "時間帯別料金は、夜間稼働が多い工場・倉庫等では有利に働く一方、日中のみ営業するオフィス・店舗では昼間の高単価時間帯に集中して使用することになるため不利になる場合もあります。自社の稼働パターンと時間帯別単価の組み合わせを分析することが、最適なプランを選ぶ基礎です。",
    ],
    checkPoints: [
      "現行メニューの時間帯区分の定義（何時〜何時が各時間帯か）",
      "各時間帯の電力量料金単価（円/kWh）",
      "平日・休日・祝日の区分の有無",
      "自社の稼働時間帯と時間帯別単価の適合性",
    ],
  },
  {
    heading: "季節変動と年間コストへの影響",
    content: [
      "多くの高圧電力メニューでは、夏季（7〜9月）と冬季（12〜2月）に電力量料金単価が高く設定される季節別料金が採用されています。夏季・冬季は電力需要が高まりやすく、電力系統の供給力維持コストが高くなるためです。",
      "季節別料金がある場合、年間の電力量料金は単純に「月平均単価×年間使用量」では計算できません。夏季・冬季の使用量が多い業種（冷暖房負荷が大きい施設等）では、季節別単価の影響が年間コストに大きく反映されます。見積比較の際は、季節変動を考慮した年間コストの試算を必ず行ってください。",
    ],
    checkPoints: [
      "夏季・冬季の電力量料金単価（通常期との差額）",
      "自社の夏季・冬季の月間使用量（ピーク使用量）",
      "季節変動を考慮した年間電力量料金の試算",
      "現行と見積の季節別単価の比較",
    ],
  },
  {
    heading: "燃料費調整額の影響",
    content: [
      "電力量料金に加え、燃料費調整額が使用量（kWh）に対して月次で加減算されます。電力量料金単価が同じ契約でも、燃料費調整額の変動によって実際の請求額は毎月異なります。燃料費調整額は電力会社が毎月公表しており、LNG・石炭・原油などの燃料価格に連動しています。",
      "見積書で提示される電力量料金単価は固定値であっても、燃料費調整額は将来も変動し続けます。見積書の試算額は「見積時点の燃料費調整額を前提とした参考値」であることを念頭に置き、燃料費調整額の変動による上振れリスクを別途評価することが重要です。",
    ],
    checkPoints: [
      "現在の燃料費調整額の単価（円/kWh）",
      "過去12か月の燃料費調整額の変動幅",
      "燃料費調整額の上限（キャップ）設定の有無",
      "見積書の試算に燃料費調整額が含まれているか、含まれていないか",
    ],
  },
  {
    heading: "プラン間での電力量料金の比較方法",
    content: [
      "複数の電力会社・プランの電力量料金単価を比較する際は、時間帯区分の定義が同一かどうかを最初に確認してください。A社の「昼間」とB社の「昼間」で時間帯の定義が異なる場合、単純な単価比較では有利・不利が判断できません。",
      "最も正確な比較方法は、自社の実際の時間帯別使用量データを用いて、各プランの料金体系に当てはめて年間コストを試算することです。例えば「A社で計算すると年間1,200万円、B社で計算すると年間1,150万円」という形で比較します。時間帯別使用量データがない場合は、スマートメーターのデータ取得や電力会社への問い合わせで入手できる場合があります。",
    ],
    checkPoints: [
      "各プランの時間帯区分の定義（時間の境界）が一致しているか",
      "自社の時間帯別使用量データの取得状況",
      "実使用量データを使った年間コスト試算の実施",
      "試算に使用した使用量の前提が現実を反映しているか",
    ],
  },
  {
    heading: "使用量削減と電力量料金の関係",
    content: [
      "電力量料金は使用量に比例するため、節電・省エネの取り組みが直接コスト削減に反映されます。設備の効率化・照明のLED化・空調の設定管理・製造ラインの最適化など、使用量削減の手段はさまざまです。",
      "ただし、使用量を削減してもピーク需要（デマンド）が変わらないと、基本料金は下がりません。「使用量は減ったが電気代が思ったほど下がらない」という場合は、基本料金の比率が高い可能性があります。電力量料金と基本料金のどちらを削減するかを分けて考えることが、コスト削減施策の優先順位付けに役立ちます。",
    ],
    checkPoints: [
      "節電施策の実施状況と効果（kWh削減量・費用削減額）",
      "使用量削減がコスト削減に反映されているか（基本料金比率の確認）",
      "使用量削減とデマンド削減を並行して進めているか",
    ],
  },
];

const faq = [
  { question: "電力量料金と基本料金の違いは何ですか？", answer: "電力量料金は使用した電気量（kWh）に応じて発生する変動費で、基本料金は契約電力（kW）に応じて毎月固定的に発生する費用です。電力量料金には燃料費調整額・再エネ賦課金が上乗せされます。" },
  { question: "時間帯別電力量料金のメリットは何ですか？", answer: "夜間や休日の安い時間帯に電気を多く使うことで電気代を削減できます。ただし昼間単価が高いため、稼働パターンによってはかえって割高になるケースもあります。自社の使用時間帯パターンとの相性を確認することが重要です。" },
  { question: "電力量料金単価を見積書で比較する際の注意点は何ですか？", answer: "燃料費調整額が単価に含まれているかどうかを確認することが重要です。燃調込みか燃調別かによって実質的な単価が大きく異なります。また季節・時間帯別の単価構成も含めて比較する必要があります。" },
];

export default function EnergyChargeExplainedPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電力量料金の見方｜使用量と単価の関係を理解する"
        description="電気料金の電力量料金がどのように計算されるかを解説。時間帯別料金・季節変動・プランによる単価の違いと、使用パターンに応じた比較方法を整理します。"
        url="https://simulator.eic-jp.org/energy-charge-explained"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "電力量料金の見方" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電力量料金の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の変動費部分を構成する「電力量料金」は、使用量（kWh）に単価を乗じた形で請求されます。高圧電力では時間帯別・季節別の複数単価が設定されていることが多く、自社の稼働パターンとの適合性を評価することが、見積比較の精度を高める鍵になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          基本料金（固定費部分）については{" "}
          <Link
            href="/basic-charge-explained"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            基本料金の見方
          </Link>{" "}
          で別途解説しています。このページでは電力量料金に特化して整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>電力量料金の算出方法と時間帯別単価の仕組み</li>
            <li>季節変動が年間コストに与える影響</li>
            <li>燃料費調整額との関係と変動リスク</li>
            <li>実使用量データを使ったプラン比較の方法</li>
          </ul>
        </div>
      </header>

      <TableOfContents />

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電力量料金の全体像
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の変動費は電力量料金単体ではなく、<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>・<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>・<Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金</Link>などの調整項目も含んだ形で請求されます。使用量（kWh）に連動するコスト全体を把握することが重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">項目</th>
                  <th className="p-3 text-left font-semibold text-slate-900">算出方法</th>
                  <th className="p-3 text-left font-semibold text-slate-900">変動特性</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 text-slate-700">電力量料金</td>
                  <td className="p-3 text-slate-700">kWh × 時間帯別単価</td>
                  <td className="p-3 text-slate-700">使用量に比例・契約で固定</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">燃料費調整額</td>
                  <td className="p-3 text-slate-700">kWh × 月次調整単価</td>
                  <td className="p-3 text-slate-700">燃料価格に連動し毎月変動</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">再エネ賦課金</td>
                  <td className="p-3 text-slate-700">kWh × 賦課金単価</td>
                  <td className="p-3 text-slate-700">年度ごとに改定</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">容量拠出金</td>
                  <td className="p-3 text-slate-700">kWh × 単価（または別途）</td>
                  <td className="p-3 text-slate-700">制度に基づく。増加傾向</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">市場価格調整額</td>
                  <td className="p-3 text-slate-700">kWh × 市場連動単価</td>
                  <td className="p-3 text-slate-700">市場連動プランのみ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {energyChargeSections.map((section) => (
          <section
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {section.heading}
            </h2>
            {section.content.map((para, i) => (
              <p
                key={i}
                className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"
              >
                {para}
              </p>
            ))}
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">確認ポイント</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                {section.checkPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電力量料金の比較まとめ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力量料金の比較では「単価の数字」だけでなく「自社の使用パターンで計算した年間コスト」で比較することが重要です。時間帯区分・季節変動・燃料費調整額の扱いなど、条件を統一した上で横並び比較を行ってください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">条件の統一</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                時間帯区分・季節区分・燃料費調整額の含め方を全社で統一する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">実使用量で試算</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                月別・時間帯別の実使用量データで各プランのコストを算出する。
              </p>
            </div>
            
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">変動リスクの評価</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                固定型と市場連動型の差を、上振れシナリオで比較しておく。
              </p>
            </div>
          </div>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">時間帯別・季節別の単価差イメージ（高圧）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">時間帯</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">夏季（7〜9月）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">その他季</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月50,000kWhでの差</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">昼間（8〜22時）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">18〜24円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">16〜21円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">夏季で月+10〜15万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">夜間（22〜8時）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">12〜16円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">11〜15円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">夜間シフトで▲15〜25万円/月</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">ピーク（13〜16時）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">22〜30円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">ピーク回避で▲5〜10万円/月</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 時間帯別料金体系の契約の場合。全時間帯一律単価の契約では適用されません。</p>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力量料金の制度・時間帯別料金に関するデータ" },
            { name: "JEPX 日本卸電力取引所", url: "http://www.jepx.org", description: "スポット市場価格データ" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
          ]}
          publishedAt="2026-04-10"
        />

        <RelatedLinks
          heading="関連ページ"
          intro="電力量料金の理解を深め、見直しや見積比較に活かすための関連ページです。"
          links={[
            {
              href: "/basic-charge-explained",
              title: "基本料金の見方",
              description:
                "電力量料金と対をなす固定費・基本料金の算出構造と削減方法。",
            },
            {
              href: "/demand-value-guide",
              title: "デマンド値の見方",
              description:
                "デマンド値が基本料金に与える影響と管理方法を詳しく解説。",
            },
            {
              href: "/high-voltage-electricity-bill-guide",
              title: "高圧電力の請求書の見方",
              description:
                "高圧電力の請求書で電力量料金を読み取るためのポイント。",
            },
            {
              href: "/high-voltage-quotation-guide",
              title: "高圧電力見積書の見方",
              description:
                "見積書での電力量料金単価の比較方法と注意点。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description:
                "燃料費調整額の仕組みと電力量料金への影響を解説。",
            },
            {
              href: "/quotation-comparison-table-guide",
              title: "見積書比較表の作り方",
              description:
                "電力量料金を含む複数見積の横並び比較方法。",
            },
            {
              href: "/concierge",
              title: "AI コンシェルジュで関連情報を探す",
              description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。",
            },
            {
              href: "/articles/basic",
              title: "法人電気料金の基礎知識",
              description: "電気料金の構成・契約の種類・値上がり要因など、基礎から体系的に学べます（人気ハブページ）。",
            },
          ]}
        />

        <AuthorBadge publishedAt="2026-04-10" updatedAt="2026-04-10" />

        <ContentCta
          heading="電力量料金の変動リスクを試算する"
          description="使用量・単価の情報をもとに電気料金の上振れリスクをシミュレーションできます。燃料費調整額の変動も含めた現実的なコスト試算にご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="energy-charge-explained" />
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
