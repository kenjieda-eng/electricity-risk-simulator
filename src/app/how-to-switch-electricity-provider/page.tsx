import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "電力会社の切り替え手順｜法人向け完全ガイド";
const pageDescription =
  "法人の電力会社切り替えを、契約情報の整理から相見積もり・プラン比較・契約締結・切替日設定・初月検針確認までの6ステップで解説します。解約金や通知期限などの落とし穴、所要期間の目安も整理します。";
const pageUrl = "https://simulator.eic-jp.org/how-to-switch-electricity-provider";
const datePublished = "2026-04-19";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力会社 切り替え 手順",
    "法人 電力会社 変更",
    "電気 新電力 切り替え",
    "法人 電力 切り替え 流れ",
    "電気契約 乗り換え",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/review-points", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/review-points"],
  },
};

const steps = [
  {
    no: "STEP 1",
    title: "現在の契約情報を整理する",
    duration: "1〜3日",
    points: [
      "契約書・供給約款の写しを確認（契約期間・更新条件・解約通知期限・違約金）",
      "直近12か月の請求書をそろえ、使用量（kWh）と契約電力（kW）の月別推移を把握",
      "供給地点特定番号、お客さま番号、検針日を控える",
    ],
    pitfall:
      "契約書が見つからないまま見積依頼すると、条件抜けで再提案になり全体が2〜3週間遅れます。",
  },
  {
    no: "STEP 2",
    title: "相見積もりを3社から取得する",
    duration: "2〜4週間",
    points: [
      "現小売、地域新電力、全国系新電力の3タイプから依頼すると比較の幅が出ます",
      "依頼時点で使用量データ（CSV/検針票）と契約条件を同じ前提で提示",
      "固定か市場連動か、希望契約期間、希望開始月を必ず指定",
    ],
    pitfall:
      "依頼条件がバラつくと単価だけの比較になり、実請求で数%ずれます。前提シートを1枚作って全社に渡すのが近道です。",
  },
  {
    no: "STEP 3",
    title: "プラン比較と年間コスト試算",
    duration: "3〜7日",
    points: [
      "基本料金・電力量料金・燃料費調整（上限の有無）・市場価格調整・再エネ賦課金を分けて比較",
      "月別使用実績をベースに、年間請求額として並べる",
      "契約条件（期間・中途解約金・自動更新の通知期限）を同じ表に追加",
    ],
    pitfall:
      "単価表示だけ見て「1円安い」と判断しがちですが、燃調上限や中途解約金で差が逆転するケースがあります。",
  },
  {
    no: "STEP 4",
    title: "契約締結と社内稟議",
    duration: "1〜3週間",
    points: [
      "選定根拠（比較表・年間試算・リスク評価）を稟議書にまとめ承認を取る",
      "申込書・契約書は内容を再確認のうえ押印／電子契約",
      "既契約の解約通知（原則1〜3か月前）をタイミングを合わせて送付",
    ],
    pitfall:
      "「新契約の締結より先に既契約を解約」してしまうと最終保障供給に落ちるリスクが発生します。必ず新旧の供給日を連続させます。",
  },
  {
    no: "STEP 5",
    title: "切替日（スイッチング日）の設定",
    duration: "スマートメーターで通常1〜2か月後",
    points: [
      "検針日を基準にスイッチング日が決まる（途中切替は原則不可）",
      "一般送配電事業者が切替処理を実施。通常は立ち合いも停電も不要",
      "高圧・特別高圧は30分計量データの準備が必要になる場合があります",
    ],
    pitfall:
      "申込が検針日直前だと翌々月開始にずれる場合があります。余裕を持って1か月以上前に進めるのが安全です。",
  },
  {
    no: "STEP 6",
    title: "初月検針後の請求内容を確認",
    duration: "切替月〜翌月",
    points: [
      "旧契約の最終請求と新契約の初月請求を並べ、単価・調整項目が契約書通りかチェック",
      "日割計算の基準日（切替日）が想定どおりか確認",
      "検針データ・契約電力・力率割引の適用を確認し、差異があれば新電力に照会",
    ],
    pitfall:
      "新電力側のシステム登録ミスで単価が違うケースが稀にあります。最低3か月は検針値を継続確認してください。",
  },
];

const commonPitfalls = [
  {
    title: "解約通知期限の見落とし",
    description:
      "自動更新契約は更新月の1〜3か月前までに通知しないと、意図せず次期契約に拘束されます。通知期限は契約書の「解約条項」を必ず確認してください。",
  },
  {
    title: "供給地点特定番号の取り違え",
    description:
      "複数拠点を運用している法人では供給地点特定番号の紐づけを間違えやすい論点です。検針票に22桁で記載されており、拠点ごとに異なります。",
  },
  {
    title: "新旧契約の供給日ギャップ",
    description:
      "新契約の開始日を待たずに解約が成立すると最終保障供給（おおむね通常料金の1.2〜1.8倍）に移行する可能性があります。切替日の整合は必須確認事項です。",
  },
  {
    title: "市場連動プランの暗黙変更",
    description:
      "既契約の更新条件に「改定後単価への自動移行」が含まれている場合、気づかないうちに市場連動型へ条件変更されるケースがあります。約款改定通知にも注意してください。",
  },
];

export default function HowToSwitchElectricityProviderPage() {
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
          { name: "見直しポイントを知る", url: "https://simulator.eic-jp.org/articles/review-points" },
          { name: "電力会社の切り替え手順" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            電力会社の切り替え手順｜法人向け完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電力会社切り替えは、<strong>①現在の契約情報整理 → ②相見積もり3社 → ③プラン比較 → ④契約締結 → ⑤切替日設定 → ⑥初月検針確認</strong>の6ステップで進めます。
            通常は最短で2か月、稟議・社内調整を含めると3〜4か月が目安です。本ガイドでは、それぞれのステップで押さえたい項目と、実務で起きやすい落とし穴を整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">切り替えに必要な全体期間</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              低圧契約ならスマートメーター済みで最短1〜2か月、高圧・特別高圧は契約電力の申請や計量データ準備が絡むため2〜3か月が一般的です。これに社内稟議の期間（1〜4週間）を加えるため、全体としては
              <strong>3か月程度の準備期間を見ておくと安全</strong>です。
              更新月から逆算して逆スケジュールを引き、各ステップの期限を決めておくと途中で止まりません。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約更新の3〜6か月前が理想的な着手タイミングです。遅くとも更新月の2か月前までにSTEP 3まで終えておかないと、相見積りを比較しきれないまま決断することになりがちです。
            </p>
          </section>

          {steps.map((step) => (
            <section key={step.no} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                  {step.no}
                </span>
                <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
                <span className="text-xs text-slate-500">目安: {step.duration}</span>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                {step.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-slate-700">
                <span className="font-semibold text-amber-900">落とし穴：</span>
                {step.pitfall}
              </div>
            </section>
          ))}

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">切り替え時によくある落とし穴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              手順そのものより、通知期限や新旧契約のつなぎ目で起きるトラブルの方が実害が大きくなります。
              特に更新条件と解約申出期限は、契約締結時に想定していた条件と食い違っていることが多く、見積比較の前段で必ず確認してください。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {commonPitfalls.map((p) => (
                <div key={p.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{p.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務的なまとめ</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>更新月から逆算して3か月前着手、2か月前までに比較を完了</li>
              <li>既契約の解約通知タイミングと新契約の供給開始日は必ず整合させる</li>
              <li>比較は単価だけでなく、調整項目（燃調・市場価格調整）の上限有無と中途解約金まで含めて年間コストで見る</li>
              <li>切替後も最低3か月は請求明細を確認し、契約条件どおりかを追跡する</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              手順の全体像は<Link href="/how-to-start-electricity-contract-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力契約見直しの着手順序</Link>と合わせて読むと、準備段階からの流れを押さえやすくなります。
            </p>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/switching-business-electricity-contract",
                title: "法人が電力契約を切り替えるときの注意点",
                description: "切替前後で起きやすい開始日・検針日・請求ズレへの実務対応。",
              },
              {
                href: "/contract-renewal-6-months-before",
                title: "法人の電力契約更新の6か月前にやること",
                description: "余裕を持った準備スケジュールの組み方。",
              },
              {
                href: "/compare-business-electricity-estimates",
                title: "法人向け電力見積書の比較で見落としやすい項目",
                description: "プラン比較ステップで押さえる具体的な確認項目。",
              },
              {
                href: "/review-contract-renewal-deadlines",
                title: "法人の電力契約を更新前に確認したい期限とは",
                description: "更新月・通知期限・解約申出期限の実務管理。",
              },
              {
                href: "/information-to-prepare-before-quotation-request",
                title: "新電力の相見積もり前に整理したい情報",
                description: "STEP 2前の情報整理を具体的に深掘り。",
              },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="手順を把握したら、実際の比較を進めてみましょう。契約条件の整理が難しい場合はエネルギー情報センターにもご相談いただけます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門家に相談する" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="電力会社の切り替え手続き、専門家に相談しませんか？"
            description="見積もり比較から契約条件の精査、最適な切り替えタイミングの判断まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
