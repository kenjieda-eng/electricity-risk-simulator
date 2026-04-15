import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";


const pageTitle = "法人の電気料金が高い会社に共通する特徴｜7つの自己診断ポイントと月額影響";
const pageDescription =
  "法人の電気料金が高くなりやすい会社の7つの特徴を整理。月5万kWhでの影響額目安と自己診断チェックリスト付き。契約電力、デマンド、調整項目、比較時の見落としなど、見直し前に確認したいポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 高い 理由",
    "デマンド 高い",
    "契約電力 見直し",
    "電気料金 自己診断",
    "法人 電力比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/why-business-electricity-costs-are-high",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/why-business-electricity-costs-are-high",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人の電気料金が高い会社に共通する特徴",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const selfCheckItems = [
  {
    no: 1,
    question: "契約電力やデマンドを直近12ヶ月で見直したことがあるか？",
    yesAction: "問題なし",
    noAction: "デマンド管理・契約見直しを優先検討",
  },
  {
    no: 2,
    question: "現在の契約メニューが市場連動型かどうか把握しているか？",
    yesAction: "問題なし",
    noAction: "契約書・約款を確認し固定型との比較を検討",
  },
  {
    no: 3,
    question: "燃料費調整額に上限設定があることを確認しているか？",
    yesAction: "問題なし",
    noAction: "上限あり契約への切替を検討",
  },
  {
    no: 4,
    question: "直近の契約更新時に複数社から見積を取ったか？",
    yesAction: "問題なし",
    noAction: "次回更新前に相見積もりを実施",
  },
  {
    no: 5,
    question: "朝の一斉起動など、ピーク時間帯の集中を把握しているか？",
    yesAction: "問題なし",
    noAction: "起動分散・デマンドコントロール検討",
  },
  {
    no: 6,
    question: "複数拠点がある場合、一括で契約交渉を行ったことがあるか？",
    yesAction: "問題なし",
    noAction: "一括見直しによる交渉余地を確認",
  },
  {
    no: 7,
    question: "蛍光灯や旧型空調など、省エネ化の余地がある設備が残っているか？",
    yesAction: "LED化・高効率空調への更新を検討",
    noAction: "問題なし",
  },
];

export default function WhyBusinessElectricityCostsAreHighPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電気料金が高い会社の特徴</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電気料金が高い会社に共通する特徴とは？見直し前に確認したいポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金が高く見える背景には、燃料価格や制度要因だけでなく、自社の契約条件や電力の使い方が影響していることがあります。
          請求額の大きさだけで判断するのではなく、どの項目が効いているのかを整理することが見直しの第一歩です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、電気料金が高い会社に共通しやすい7つの特徴を月額影響額とあわせて整理し、自己診断に使えるチェックリストも提供します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金が高く見える理由を分けて考える</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「高い」と感じる原因は一つではありません。使用量増加、契約電力、調整項目、契約条件など複数要素が重なっていることが多く、まずは要素分解して確認することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            外部要因の全体像は
            {" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が上がる理由
            </Link>
            で整理しています。本ページでは自社側の特徴に焦点を当てます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金が高い会社に共通する7つの特徴</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月5万kWhを使用する法人を想定した影響額の目安です。自社の状況と照らし合わせて確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800">特徴</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800">具体的な状況</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800">月5万kWhでの影響目安</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800">対策の方向性</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium text-slate-800">契約電力が実態より大きい</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">デマンドが過去のピーク基準のまま</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">基本料金+5〜15万円/月</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">デマンド管理・契約見直し</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium text-slate-800">契約メニューが合っていない</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">市場連動で高騰リスクを受けている</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">月+10〜50万円（高騰時）</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">固定型・ハイブリッド検討</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium text-slate-800">燃調費の上限がない</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">上限なし契約で高騰時に直撃</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">月+5〜25万円</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">上限あり契約への切替</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium text-slate-800">見積比較せず更新している</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">複数社比較をせず現行延長</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">年間50〜200万円の差</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">相見積もり実施</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium text-slate-800">使用時間帯がピーク集中</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">朝一斉起動でデマンドが高い</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">基本料金+3〜10万円/月</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">起動分散・デマコン</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium text-slate-800">複数拠点で個別管理</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">拠点ごとにバラバラの契約</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">一括交渉で3〜10%削減余地</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">一括見直し</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium text-slate-800">設備更新が遅れている</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">蛍光灯・旧型空調のまま</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">使用量+10〜20%</td>
                  <td className="border border-slate-300 px-3 py-2 text-slate-700">LED化・高効率空調</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※影響額は月5万kWh・高圧契約の法人を想定した目安です。契約条件・使用実態により大きく異なります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自己診断チェックリスト（7項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            上記7つの特徴に対応する確認質問です。「いいえ」が多いほど見直し余地が大きい可能性があります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-3 py-2 text-center font-semibold text-slate-800 w-10">No.</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800">確認質問</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800">はいの場合</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800">いいえの場合</th>
                </tr>
              </thead>
              <tbody>
                {selfCheckItems.map((item) => (
                  <tr key={item.no} className="even:bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 text-center font-medium text-slate-800">{item.no}</td>
                    <td className="border border-slate-300 px-3 py-2 text-slate-700">{item.question}</td>
                    <td className="border border-slate-300 px-3 py-2 text-slate-700">{item.yesAction}</td>
                    <td className="border border-slate-300 px-3 py-2 text-slate-700">{item.noAction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直し前に確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>請求書で基本料金・電力量料金・調整項目を分けて把握する</li>
            <li>契約電力とデマンドの推移を確認する</li>
            <li>契約条件（更新・解約・違約金）を確認する</li>
            <li>比較時は単価だけでなく総額と条件を同時に確認する</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求書の確認は
            {" "}
            <Link href="/how-to-read-electricity-bill" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              請求書チェックの解説
            </Link>
            、比較の進め方は
            {" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較ポイントの解説
            </Link>
            が参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金が高い会社には、契約条件・使い方・比較手順に共通する傾向があります。7つの特徴と自己診断チェックリストを活用し、請求書・契約条件・使用実態の3点を先に整理することで、見直しの優先順位を明確にできます。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="why-business-electricity-costs-are-high" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "基本料金", "電力量料金", "契約電力"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="自己診断で見えた課題を、具体的な比較行動につなげるための導線です。"
          links={[
            {
              href: "/contract-demand-what-is-it",
              title: "デマンドとは",
              description: "ピーク電力と基本料金の関係を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "高い原因を請求項目ごとに切り分ける手順を整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "比較時の見落としを減らす判断軸を確認できます。",
            },
            {
              href: "/articles",
              title: "法人向け電気料金の基礎知識",
              description: "関連する見直しテーマをまとめて確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "コスト高の原因を踏まえたプラン選択の判断軸。",
            },
          ]}
        />

        <ContentCta
          heading="比較とシミュレーションで確認する"
          description="自己診断で整理したポイントをもとに、比較ページとシミュレーションで自社条件に近い判断を進められます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
