import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import DiagnosisClient from "./DiagnosisClient";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "法人向け電力契約見直し自己診断｜見直しが必要かを簡易チェック";
const pageDescription =
  "現在の電力契約を見直す必要があるかを10項目の簡易チェックで確認。契約内容・料金推移・満足度など、法人担当者が自社の状況を素早く棚卸しできる診断ページです。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 見直し 自己診断",
    "法人 電気料金 見直し チェック",
    "電力契約 見直すべきか",
    "法人電力 自己診断",
    "電気料金 見直し タイミング",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/self-diagnosis-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/self-diagnosis-contract-review",
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

export default function SelfDiagnosisContractReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人向け電力契約見直し自己診断｜見直しが必要かを簡易チェック"
        description="現在の電力契約を見直す必要があるかを10項目の簡易チェックで確認。契約内容・料金推移・満足度など、法人担当者が自社の状況を素早く棚卸しできる診断ページです。"
        url="https://simulator.eic-jp.org/self-diagnosis-contract-review"
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
        <span className="text-slate-800">電力契約見直し自己診断</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電力契約見直し自己診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「今の電力契約を見直すべきか」を判断するための簡易診断ページです。10項目のチェックを通じて、現状の課題を素早く整理できます。すべての項目に回答することで、見直しの優先度を自分で把握できます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          総務・経理・施設管理・購買など、電力契約に関わる法人担当者が、初期の状況確認として活用できます。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>自社の電力契約に見直しの必要性があるかの判断基準</li>
            <li>10項目の診断チェックリストと各項目の意味</li>
            <li>チェックが多い場合・少ない場合それぞれの対応方針</li>
            <li>見直しを始めるうえで次にとるべきアクション</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断の使い方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の10項目について、自社の現状と照らし合わせてください。「当てはまる」と感じた項目が多いほど、今すぐ見直しを検討する価値が高い状況といえます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-700">重要度：高</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                1つでも該当する場合、早急な確認を推奨します。
              </p>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-700">重要度：中</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                複数該当する場合、見直しの準備を始めることが有効です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">重要度：低</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                今後の方針として検討の参考にしてください。
              </p>
            </div>
          </div>
        </section>

        <DiagnosisClient />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断結果の見方と次のアクション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            チェック数と重要度に応じた対応の目安を以下に示します。あくまで参考ですが、優先度を判断する材料として活用してください。
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                1
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  重要度「高」に1つ以上該当する場合
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  まず現行の契約書と直近12か月分の請求書を手元に用意してください。契約満了日と中途解約条件を確認したうえで、見積依頼先のリストアップを始めることを推奨します。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                2
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  重要度「中」に複数該当する場合
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  見直しの準備段階として、まずシミュレーターで現行契約の上振れリスクを試算しましょう。リスクの数値を社内共有することで、見直し着手の判断を得やすくなります。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                3
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  該当項目が少ない・ほとんどない場合
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  現時点では緊急性は低いと考えられます。ただし、次回の契約更新時期の把握と、年1回程度の定期的な料金チェックは続けることをおすすめします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直しを始めるための整理ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            診断後に見直しを進める場合、以下の順で情報を整理すると効率よく進めることができます。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約書から「プラン名・契約期間・満了日・中途解約条件」を確認する</li>
            <li>直近12か月分の請求書から「基本料金・変動費用項目・月間使用量」を抽出する</li>
            <li>シミュレーターで現行プランの上振れリスクを試算する</li>
            <li>社内での見直し目的・比較軸を事前に共有する</li>
            <li>複数の電力会社から見積を取り、条件・リスク・総額で比較する</li>
          </ol>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            詳細な手順については{" "}
            <Link
              href="/business-electricity-contract-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しチェックリスト
            </Link>{" "}
            もあわせてご覧ください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自己診断結果の目安</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            チェック数に応じた判定と推奨アクションの目安です。重要度「高」の項目に1つでも該当する場合は、スコアに関わらず早急な確認を推奨します。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">スコア</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">判定</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">推奨アクション</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">優先度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">0〜2点</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">様子見</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回の定期チェックを継続。次回更新時期を把握しておく。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">低</span></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">3〜4点</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">情報収集</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">シミュレーターで現行プランのリスクを試算。他社のプラン情報を収集開始。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">中</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">5〜6点</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積依頼</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">複数社への見積依頼を開始。契約満了日と中途解約条件を確認する。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">高</span></td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">7点以上</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">早急に見直し</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">今すぐ見直し手続きに着手。社内稟議・比較・切替先決定を最速で進める。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">緊急</span></td>
              </tr>
            </tbody>
          </table>
        </section>

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



        <RelatedLinks
          heading="関連ページ"
          intro="診断結果をもとに、次のステップへ進むためのページをご紹介します。"
          links={[
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し前の準備で確認したい情報・書類・社内調整ポイントを一覧で整理。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "どのタイミングで見直しを始めるべきか、判断基準と行動指針を解説。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動型と固定型プランの違い",
              description: "2つのプランのリスク・コスト構造の違いを比較して理解する。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目の意味と、見直し判断に使える確認ポイントを解説。",
            },
            {
              href: "/contract-renewal-timing-diagnosis",
              title: "契約更新タイミング診断",
              description: "更新時期から逆算して、いつ見直しを始めるべきかを確認する。",
            },
            {
              href: "/quotation-comparison-pre-check",
              title: "見積比較前チェック診断",
              description: "見積を依頼する前に揃えておくべき情報・資料を確認する。",
            },
          ]}
        />

        <ContentCta
          heading="現行契約のリスクをシミュレーターで確認する"
          description="診断で見直しの必要性を確認したら、次はシミュレーターで現行プランの上振れリスクを数値で把握しましょう。社内説明の根拠資料にも活用できます。"
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
