import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "小規模事業者の電気代｜見直すべきタイミングと判断基準";
const pageDescription =
  "小規模事業者が電気料金を見直すべき6つのトリガー（契約更新3か月前・値上げ通知・移転・設備入替・使用量変動・前年比+15%）と、各タイミングでの優先行動を整理したチェックリスト型ガイドです。";
const pageUrl = "https://simulator.eic-jp.org/small-business-electricity-review-timing";
const datePublished = "2026-04-19";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "小規模事業者 電気代",
    "電気代 見直し タイミング",
    "法人 電気料金 いつ見直す",
    "電気契約 見直し 時期",
    "小規模 電力 切り替え",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/sme-guide", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/sme-guide"],
  },
};

const triggers = [
  {
    no: "トリガー1",
    title: "契約更新の3か月前",
    priority: "最優先",
    action:
      "自動更新条項がある場合、通知期限を過ぎると次期契約に拘束されます。更新月の3か月前までに契約書の更新条項・通知期限を確認し、他社見積りと並べて判断するのが基本線。2か月を切ると見積取得〜切替手続きが間に合わなくなる恐れがあります。",
    check: [
      "契約書の更新月を確認したか",
      "解約申出期限（1〜3か月前）を超えていないか",
      "他社見積りを2〜3社取得したか",
    ],
  },
  {
    no: "トリガー2",
    title: "値上げ通知を受け取ったとき",
    priority: "優先",
    action:
      "小売からの単価改定通知は、発効前に代替プランを確認できる貴重なタイミングです。通知内容（改定幅・発効日・反対の意思表示期限）を確認し、代替が見つかる場合は切替タイミングを逆算。契約期間中でも改定を伴う場合は中途解約条項に例外があることが多く、違約金なしで切り替えられるケースがあります。",
    check: [
      "改定幅が年間でいくらの影響か計算したか",
      "中途解約の例外条項を確認したか",
      "発効日までに他社見積り取得が間に合うか",
    ],
  },
  {
    no: "トリガー3",
    title: "店舗・事業所の移転時",
    priority: "優先",
    action:
      "移転時は需要場所変更となり、多くの契約で再締結が必要になります。「同じ小売で継続」か「この機会に他社比較」かを選べるタイミングで、移転日の1〜2か月前から見積りを並行取得するのが一般的です。新しい物件の契約容量・設備条件に合わせてプラン選定ができるため、最適化しやすい時期でもあります。",
    check: [
      "移転日1〜2か月前に見積取得を開始したか",
      "新拠点の契約容量・受電方式を確認したか",
      "開業日までに切替処理が間に合うか",
    ],
  },
  {
    no: "トリガー4",
    title: "設備の入れ替え・増設時",
    priority: "中",
    action:
      "大型空調・冷凍設備・生産設備の入替/増設は、契約電力やピーク使用量が変わる契機です。設備稼働後の使用実績が3〜6か月分たまったところで、契約プラン・契約電力が実態に合っているかを再確認します。大幅増設時は契約アンペアや契約電力の上方修正が必要になることもあります。",
    check: [
      "設備変更後の使用実績（3〜6か月）をとったか",
      "契約電力/契約アンペアが過大または過小になっていないか",
      "力率（高圧の場合）が変動していないか",
    ],
  },
  {
    no: "トリガー5",
    title: "繁閑期の使用量が大きく変わったとき",
    priority: "中",
    action:
      "業績変動や営業時間の変更で使用パターンが変わると、従来プランが合わなくなる場合があります。とくに時間帯別料金プランを選んでいる場合は、使用時間帯と単価構造のミスマッチで割高になっているケースがあります。直近6か月の時間帯別使用量を取り、プランとの適合性を再評価します。",
    check: [
      "ピーク月と閑散月の差が前年比で15%以上変わったか",
      "時間帯別プランを使っている場合、時間帯ごとの使用量比率を確認したか",
      "営業時間・シフト変更が反映されているか",
    ],
  },
  {
    no: "トリガー6",
    title: "直近12か月で前年比+15%以上の増加",
    priority: "最優先（原因究明）",
    action:
      "使用量が大きく変わっていないのに請求額が+15%以上跳ねている場合、燃料費調整額の上限撤廃・単価改定・契約区分の変更など構造要因の可能性があります。請求書の4要素（基本料金・電力量料金・燃調費・再エネ賦課金）に分解し、どの項目が跳ねたかをまず特定してから見直し判断に進みます。",
    check: [
      "前年同月の請求書と4要素で比較したか",
      "燃調費の上限が撤廃されていないか",
      "単価改定通知を見落としていないか",
    ],
  },
];

export default function SmallBusinessElectricityReviewTimingPage() {
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
          { name: "中小企業・小規模事業者向け", url: "https://simulator.eic-jp.org/articles/sme-guide" },
          { name: "見直すべきタイミングと判断基準" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            小規模事業者の電気代｜見直すべきタイミングと判断基準
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            小規模事業者（個人商店・小規模オフィス・クリニック・飲食店など）の電気代見直しは、「なんとなく高い気がするから」ではなく、<strong>明確なトリガーをきっかけに動く</strong>のが効率的です。
            動くべきタイミングを外すと、自動更新で次期契約に拘束されたり、違約金の発生で切り替え効果が相殺されたりします。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            本記事では、小規模事業者が押さえておきたい<strong>6つの見直しトリガー</strong>と、それぞれのタイミングで最優先で確認すべき項目を整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">6つの見直しトリガー（優先度順）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              小規模事業者は担当者の人的リソースが限られるため、全トリガーを常時ウォッチするのは現実的ではありません。「<strong>最優先は2つ、残りは四半期に1回チェック</strong>」くらいの運用が継続しやすい粒度です。
            </p>
          </section>

          {triggers.map((t) => (
            <section key={t.no} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                  {t.no}
                </span>
                <h2 className="text-xl font-semibold text-slate-900">{t.title}</h2>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
                  優先度: {t.priority}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{t.action}</p>
              <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-500">チェックリスト</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                  {t.check.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">タイミング別の行動優先順位</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複数のトリガーが同時に発生することもあります。その場合は次の順序で優先順位をつけてください。
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><strong>請求額の急変（トリガー6）</strong>が最優先。原因特定なしに切り替えると、新契約でも同じ問題が起きます。</li>
              <li>次に<strong>契約更新期日（トリガー1）</strong>。期日を逃すと自動更新で選択肢が消えます。</li>
              <li>その後<strong>値上げ通知（トリガー2）</strong>や<strong>移転（トリガー3）</strong>に対応。どちらも時間制約があります。</li>
              <li>最後に<strong>設備・使用量変動（トリガー4・5）</strong>。緊急性は低いが、半年〜1年で実態確認する価値はあります。</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              具体的な切替手順は<Link href="/how-to-switch-electricity-provider" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力会社の切り替え手順</Link>を、請求書の分解方法は<Link href="/business-electricity-bill-breakdown" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気代の請求書の内訳</Link>をあわせて参照してください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">年間で押さえたい3つの定期チェック</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              トリガーに反応するだけでなく、<strong>定期的な確認</strong>を仕組み化しておくと見落としを防げます。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><strong>毎月：</strong>請求書の4要素（基本料金・電力量料金・燃調費・再エネ賦課金）と前年同月比</li>
              <li><strong>四半期：</strong>使用量・営業実態との整合、トリガー4〜5の該当有無</li>
              <li><strong>年1回（更新月の3か月前）：</strong>他社見積り取得と契約条件比較</li>
            </ul>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/sme-electricity-cost-reduction-steps",
                title: "中小企業の電力コスト削減｜3ステップ",
                description: "見直すべきタイミングを見極めた後の実行ステップ。",
              },
              {
                href: "/sme-electricity-basics",
                title: "中小企業の電気料金の基礎",
                description: "低圧契約の構造と見直し余地の全体像。",
              },
              {
                href: "/low-voltage-review-essentials",
                title: "低圧契約の見直し要点",
                description: "契約更新前の具体的な確認項目。",
              },
              {
                href: "/sme-cost-reduction-quick-wins",
                title: "中小企業の電気代削減｜即効策",
                description: "運用改善・低投資で始められる対策集。",
              },
              {
                href: "/how-to-switch-electricity-provider",
                title: "電力会社の切り替え手順",
                description: "見直し判断のあとに進める具体的な流れ。",
              },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="6つのトリガーに該当するものがあれば、まずは請求書の4要素分解から始めましょう。判断に迷う場合は、中立的な専門家の視点を活用してください。"
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
