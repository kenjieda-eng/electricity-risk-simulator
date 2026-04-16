import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "学校施設の電気料金見直しポイント｜季節変動と稼働パターンを踏まえた考え方";
const pageDescription =
  "学校施設の電気料金見直しを解説。夏休み・冬休みの稼働パターン、体育館・プール・給食室の負荷特性、公共施設の予算制約、固定プランと市場連動の選択基準まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "学校 電気料金 見直し",
    "学校施設 電気代 削減",
    "教育施設 電力契約 見直し",
    "公立学校 電気料金 入札",
    "学校 空調 電力コスト",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/school-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/school-electricity-cost-review",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const loadCharacteristics = [
  {
    label: "普通教室の空調",
    detail:
      "近年、公立小中学校でも空調設備の整備が進みました。夏休み直前・直後の6〜7月と9月が年間の電力使用ピークになりやすく、冷房稼働集中が請求額を押し上げます。冬季暖房も合わせると、年間で大きな季節変動が生じます。",
  },
  {
    label: "体育館・屋内プール",
    detail:
      "体育館の空調は大空間を対象とするため、電力消費が大きくなります。屋内プールを持つ学校では、加温・換気設備が通年で稼働し、ベースロードの一部を形成します。大規模な行事時には同時稼働がデマンドを押し上げる要因になります。",
  },
  {
    label: "給食室・調理設備",
    detail:
      "給食を自校調理する学校では、調理設備（電気炉・スチームコンベクションオーブン等）の稼働が昼間のピークに集中します。給食のない長期休暇中は大幅に使用量が減少するため、年間の使用量変動が大きくなります。",
  },
  {
    label: "情報機器・視聴覚設備",
    detail:
      "GIGAスクール構想によって一人一台端末の整備が進み、充電・稼働による電力使用が増えています。コンピュータ室やタブレット充電キャビネットは授業時間帯に集中して稼働します。",
  },
];

const reviewPoints = [
  {
    heading: "稼働カレンダーと使用量変動の把握",
    content:
      "学校の電力使用量は、長期休暇（夏休み・冬休み・春休み）に大幅に減少します。授業日の使用量と休業日の使用量を分けて整理しておくことで、契約電力の妥当性や、時間帯別プランの有効性を評価しやすくなります。直近12か月の月次使用量データを請求書から一覧化しておきましょう。",
  },
  {
    heading: "公共調達ルールの確認",
    content:
      "公立学校の電力調達は、自治体の公共調達規則に基づいて行われます。入札・見積合わせの対象となる場合は、担当部署（教育委員会・財務課等）との調整が必要です。随意契約が認められる条件や、一括調達の可否なども確認しておく必要があります。",
  },
  {
    heading: "複数棟・複数校の一括調達",
    content:
      "同一自治体内の複数の学校施設をまとめて調達することで、スケールメリットが生まれる場合があります。ただし、各校の受電設備（高圧・低圧）や使用量規模が異なる場合は、条件設定を丁寧に行う必要があります。教育委員会レベルで一括調達を検討する自治体も増えています。",
  },
  {
    heading: "長期契約と価格変動リスク",
    content:
      "公共施設は予算の年度管理があるため、複数年契約には一定の制約が生じる場合があります。一方で、1年ごとの更新では市場価格の変動影響を直接受けやすく、年度当初の予算策定が困難になる場合もあります。固定価格での複数年契約が可能かどうかを確認しておくことが重要です。",
  },
];

export default function SchoolElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline="学校施設の電気料金見直しポイント｜季節変動と稼働パターンを踏まえた考え方"
        description="学校施設の電気料金見直しを解説。夏休み・冬休みの稼働パターン、体育館・プール・給食室の負荷特性、公共施設の予算制約、固定プランと市場連動の選択基準まで実務的に整理します。"
        url="https://simulator.eic-jp.org/school-electricity-cost-review"
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種別の見直しポイント集", url: "https://simulator.eic-jp.org/articles/industry-guide" },
        ]}
        faq={[
    { question: "業種ごとに電力契約の見直しポイントは違いますか？", answer: "はい、使用パターン・ピーク時間帯・契約区分が業種ごとに異なるため、見直しの着眼点も変わります。" },
    { question: "電気代の相場はどこで確認できますか？", answer: "経済産業省の電力取引報や新電力ネットの統計データで業種別の目安を確認できます。" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">学校施設の見直しポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          学校施設の電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          学校施設は、夏休みなどの長期休暇中に電力使用量が大幅に減少し、授業期間中は空調・給食・情報機器が集中稼働する特有の稼働パターンを持ちます。この季節変動を踏まえた契約条件の選択が、コスト最適化の鍵になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、学校施設特有の負荷特性と公共調達の制約を踏まえ、電気料金見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>学校施設の電気料金が上がりやすい構造的な理由</li>
            <li>空調・体育館・給食室の負荷特性から見た着眼点</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>公共調達ルールを踏まえた契約見直しの進め方</li>
            <li>複数校一括調達の考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            学校施設の電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            学校施設は、業種としての認知度は低いものの、電気料金の上昇影響を受けやすい施設です。主な要因は以下のとおりです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>空調整備の普及によって電力使用量が近年増加している</li>
            <li>夏場（6〜9月）の冷房集中稼働が使用量を押し上げる</li>
            <li>給食・調理設備の電化が進み、ガスから電気への移行が進んでいる</li>
            <li>GIGAスクール端末の充電・稼働が新たな電力需要を生んでいる</li>
            <li>公共調達の制約で迅速な契約見直しが難しい場合がある</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の上昇要因の全体像は{" "}
            <Link
              href="/why-business-electricity-prices-rise"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電気料金が上がる理由
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            負荷特性から見た着眼点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            学校施設の電力使用は、用途別に特性が大きく異なります。各設備の稼働パターンを把握しておくことで、契約条件の最適化に活かせます。
          </p>
          <div className="mt-4 space-y-3">
            {loadCharacteristics.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定プランと市場連動プランの考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            公共施設としての学校は、予算の安定性と説明責任の観点から、固定プランとの相性が高い傾向にあります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>年度予算の策定に際して電気料金の見通しが必要</li>
                <li>価格変動時の議会説明・住民説明を避けやすい</li>
                <li>担当部署の管理工数が最小限で済む</li>
                <li>夏場の高需要期に市場価格高騰と重なるリスクを回避できる</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>価格変動が予算超過につながった場合の補正予算対応が必要</li>
                <li>入札・随意契約の要件を満たす小売事業者が限られる場合がある</li>
                <li>長期休暇中は使用量が減るが、市場価格変動の恩恵は限定的</li>
                <li>夏のピーク使用量と電力市場の高値期間が重なりやすい</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランが向く法人の特徴は{" "}
            <Link
              href="/businesses-suited-for-fixed-price-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              固定プランが向く法人の特徴
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約見直しで確認したいこと
          </h2>
          <div className="mt-4 space-y-4">
            {reviewPoints.map((item) => (
              <div key={item.heading}>
                <h3 className="text-lg font-semibold text-slate-900">{item.heading}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            契約見直しの全体的な進め方は{" "}
            <Link
              href="/business-electricity-contract-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しチェックリスト
            </Link>{" "}
            で整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            設備対策との組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            学校施設では、省エネ改修と電力契約の見直しを組み合わせることで、総コスト削減効果を高められます。<Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金</Link>制度が活用できる場合もあります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">空調設備の高効率化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                旧型の個別エアコンを最新の高効率機へ更新することで、夏・冬のピーク使用量を削減できます。文部科学省や自治体の補助金が活用できる場合があります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">LED照明への全面切替え</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                体育館・廊下・教室のLED化は照明電力を大幅に削減します。在室センサーや自然光連動調光との組み合わせでさらに効果が高まります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">太陽光発電の設置</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                校舎屋上や体育館屋根への<Link href="/solar-self-consumption-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光</Link>発電設置は、昼間の電力自給に貢献します。PPA（電力購入契約）モデルでは初期費用なしで導入できる場合もあります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">電力使用量の見える化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                スマートメーターやBEMS（ビルエネルギー管理システム）を導入することで、設備ごとの電力使用状況を把握でき、省エネ施策の効果測定が可能になります。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーター活用の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            学校施設の契約見直しでは、年間の使用量変動が大きいため、シミュレーターを使って年間コストの全体像を把握することが重要です。特に夏場のピーク月を前提にした試算を行うことで、プラン選択のリスクが見えてきます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスクを確認する</li>
            <li>夏のピーク月（7〜9月）を前提にした影響額を試算する</li>
            <li>固定プランと市場連動プランの年間コスト差を比較する</li>
            <li>電力価格が高止まりしたシナリオでの予算超過リスクを把握する</li>
          </ul>
        </section>

        <div className="mt-6">
          <SourcesAndFaq
          faq={[
          { question: "業種ごとに電力契約の見直しポイントは違いますか？", answer: "はい、使用パターン・ピーク時間帯・契約区分が業種ごとに異なるため、見直しの着眼点も変わります。" },
          { question: "電気代の相場はどこで確認できますか？", answer: "経済産業省の電力取引報や新電力ネットの統計データで業種別の目安を確認できます。" },
          ]}
          sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp" },
          { name: "新電力ネット", url: "https://pps-net.org" },
          ]}
          publishedAt="2026-04-11"
        />


          <GlossaryLinks currentSlug="school-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "予算管理と安定性を重視する法人に固定プランが向きやすい理由。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目を一覧で整理。",
            },
            {
              href: "/hospital-electricity-cost-review",
              title: "病院の電気料金見直しポイント",
              description: "公共性と安定供給を重視した施設の契約見直しの考え方。",
            },
            {
              href: "/nursing-care-facility-electricity-cost-review",
              title: "介護施設の電気料金見直しポイント",
              description: "24時間稼働と予算制約を踏まえた考え方。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目を見積比較に活用するためのポイント。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
            {
              href: "/municipality-annual-budget-impact",
              title: "電気料金高騰が自治体予算に与える影響",
              description: "学校を含む公共施設の電気料金上昇が自治体の年間予算に与える影響を試算。",
            },
            {
              href: "/subsidies-overview",
              title: "電気料金関連の補助金・助成金一覧",
              description: "学校施設が活用できる省エネ・電気料金関連の補助金制度を整理。",
            },
          ]}
        />

        <ContentCta
          heading="自校の条件でリスクを確認する"
          description="学校施設の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの年間コスト比較にも活用できます。"
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
