import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import DiagnosisClient from "./DiagnosisClient";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "請求書確認ポイント診断｜電気料金請求書の見落としをチェック";
const pageDescription =
  "法人の電気料金請求書で見落としやすい項目を15チェックで診断。基本料金・燃料費調整額・市場価格調整額・容量拠出金など、各項目の意味と確認ポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 請求書 確認ポイント",
    "法人 電気代 請求書 見方",
    "燃料費調整額 請求書",
    "市場価格調整額 請求書",
    "電力 請求書 チェックリスト",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/bill-check-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/bill-check-diagnosis",
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

export default function BillCheckDiagnosisPage() {
  return (
    <>
      <ArticleJsonLd
        headline="請求書確認ポイント診断｜電気料金請求書の見落としをチェック"
        description="法人の電気料金請求書で見落としやすい項目を15チェックで診断。基本料金・燃料費調整額・市場価格調整額・容量拠出金など、各項目の意味と確認ポイントを解説します。"
        url="https://simulator.eic-jp.org/bill-check-diagnosis"
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "診断ツール・チェックリスト", url: "https://simulator.eic-jp.org/articles/diagnostic-tools" },
        ]}
        faq={[
    { question: "診断結果はどの程度正確ですか？", answer: "簡易診断は方向性の把握を目的としており、正確な試算には実際の請求書データや見積もりが必要です。" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/diagnostic-tools" className="underline-offset-2 hover:underline">自己診断・簡易チェック</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">請求書確認ポイント診断</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          請求書確認ポイント診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の請求書には、見直しや比較に使える情報が多く含まれています。一方で、項目が多く専門用語も多いため、確認しきれていない箇所が残っているケースも少なくありません。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人の電気料金請求書で特に確認すべき15項目を4カテゴリに分類してチェックリスト形式で整理します。確認できていない項目は、今後の見直しや比較の優先ポイントとして活用してください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>請求書の基本料金・電力量料金で確認すべき項目</li>
            <li>燃料費調整額・市場価格調整額・容量拠出金の確認ポイント</li>
            <li>使用量データの把握方法と活用方法</li>
            <li>契約条件の実態確認チェックリスト</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ請求書の確認が見直しの起点になるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しを進めるうえで、請求書は最も手軽に入手できる「現状データ」です。現在どのような費用項目が、どの程度の金額で発生しているかを把握していないと、見積比較の精度が下がります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特に2020年以降、電力料金の変動要因が増えています。燃料費調整額・市場価格調整額・容量拠出金・再エネ賦課金など、変動費の構成を把握することが「なぜ高くなったのか」を説明するうえでも不可欠です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求書の読み方については{" "}
            <Link href="/how-to-read-electricity-bill" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人向け電気料金請求書の見方
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <DiagnosisClient />

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">確認できていない項目が多い場合の対応</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            チェックできない項目が複数ある場合、まず直近3か月分の請求書を手元に用意することから始めてください。以下の順で確認すると効率よく情報を整理できます。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "直近12か月分の請求書を電力会社のWebサービス等から入手する" },
              { step: 2, text: "基本料金・電力量料金・調整額・賦課金を項目ごとに分けてExcelなどで整理する" },
              { step: 3, text: "月次の使用量（kWh）と請求総額の推移をグラフ化して傾向を把握する" },
              { step: 4, text: "燃料費調整額・市場価格調整額の変動幅を確認し、年間への影響額を算出する" },
              { step: 5, text: "シミュレーターに使用量と契約電力を入力し、今後のリスクを試算する" },
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
          <h2 className="text-xl font-semibold text-slate-900">請求書チェック結果の対応マップ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書確認で見つかった問題別の想定原因・対応優先度・次のステップをまとめました。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">チェック結果</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">想定される原因</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">対応の優先度</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">次のステップ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額の上限設定が不明</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">上限なしプランの可能性。市場高騰時に無制限で増加するリスク。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">高</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約書または電力会社へ問い合わせて上限設定を確認。</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場価格調整額が月ごとに大きく変動</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動型プランの特性。JEPX価格変動を直接受けている。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">高</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">固定型プランへの切り替えを検討。シミュレーターで比較試算。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金が使用量に対して割高</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約電力の過大設定。稼働実態に対してデマンド設定が高い。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">中高</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">過去12か月の最大デマンド値を確認し、契約電力の適正化を検討。</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量の月次推移を把握していない</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">請求書の確認が合計額のみ。変動要因の分析ができていない。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">中</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">12か月分の使用量・単価・費目をExcelに整理してグラフ化。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">容量拠出金の請求額が不明</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2024年度から本格導入の新費目。認知・確認が遅れているケース。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">中</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">請求書の明細欄を確認。見積比較時も同一条件で比較できるよう把握。</td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="mt-6">
          <SourcesAndFaq
          faq={[
          { question: "診断結果はどの程度正確ですか？", answer: "簡易診断は方向性の把握を目的としており、正確な試算には実際の請求書データや見積もりが必要です。" },
          ]}
          sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp" },
          { name: "新電力ネット", url: "https://pps-net.org" },
          ]}
          publishedAt="2026-04-11"
        />


          <GlossaryLinks currentSlug="bill-check-diagnosis" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "基本料金", "電力量料金", "電気料金の内訳"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="請求書の理解を深め、見直しに役立てるためのページです。"
          links={[
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目の意味と、見直し判断のための確認ポイントを詳しく解説。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "燃料費調整額の仕組みと、上限設定の意味を解説。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "市場連動プランに加算される調整額の仕組みを解説。",
            },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは",
              description: "2024年度から導入された容量拠出金の仕組みと請求書への影響。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "電力契約見直しチェックリスト",
              description: "請求書確認を含む、見直し全体の準備チェックリスト。",
            },
            {
              href: "/quotation-comparison-pre-check",
              title: "見積比較前チェック診断",
              description: "請求書確認が終わったら次は見積比較の準備へ。",
            },
          ]}
        />

        <ContentCta
          heading="請求書の情報をもとにリスクを試算する"
          description="請求書で確認した使用量・契約電力・プラン種別をシミュレーターに入力することで、現行契約の上振れリスクを数値で確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
