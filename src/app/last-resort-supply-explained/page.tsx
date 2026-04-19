import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "最終保障供給とは？適用される条件と脱出方法";
const pageDescription =
  "最終保障供給は、新電力撤退や契約切れで契約先を失った法人向けの制度です。適用条件、料金水準（一般契約の約1.2倍）、脱出方法の手順、期限管理の注意点までを実務向けに整理します。";
const pageUrl =
  "https://simulator.eic-jp.org/last-resort-supply-explained";

// --- 適用条件 ---
const triggerConditions: { title: string; body: string }[] = [
  {
    title: "契約中の新電力が撤退・倒産した",
    body: "2022年のエネルギー市況急変期には多数の新電力が撤退・事業休止しました。切替先が決まらないまま契約終了日を迎える法人は、自動的に送配電会社の最終保障供給へ移行します。",
  },
  {
    title: "契約更新時に新しい契約先が決まらなかった",
    body: "現行契約の満了と新規契約の開始日の間に空白が生じる場合も、空白期間は最終保障供給で供給されます。相見積取得と回答に要する時間を見誤ると発生しやすいパターンです。",
  },
  {
    title: "小売事業者から契約を断られた",
    body: "過去の支払い履歴や信用情報、需要量の特殊性などで新規契約を締結できない場合にも適用されます。高圧・特別高圧で最終保障供給利用が目立つのは、この理由が背景にあります。",
  },
  {
    title: "自治体・公共施設で入札不調",
    body: "公共調達の入札に応札ゼロ・落札不調で契約先が決まらなかった自治体・学校・病院等も対象です。2022〜2023年には入札不調を理由とする最終保障供給移行が社会問題化しました。",
  },
];

// --- 脱出手順 ---
const exitSteps: { step: string; title: string; detail: string }[] = [
  {
    step: "STEP 1",
    title: "契約切替の目標日を逆算する",
    detail:
      "最終保障供給は割増料金が続くため、できるだけ早く通常契約に戻すのが鉄則です。切替に必要な期間（新規契約手続き2〜4週間＋スマートメーター切替工事1〜2週間）を逆算し、当月内または翌月頭の切替目標を設定します。",
  },
  {
    step: "STEP 2",
    title: "相見積を3〜5社に依頼",
    detail:
      "現在の契約電力・月間使用量・時間帯別使用パターン・過去12ヶ月の請求書を添付して、複数の小売電気事業者に見積を依頼します。最終保障供給中は各社とも警戒するため、使用実績と支払履歴を明確に開示するのが早期受諾のコツです。",
  },
  {
    step: "STEP 3",
    title: "受諾可能な契約条件を比較",
    detail:
      "単価だけでなく、契約期間・中途解約違約金・市場価格調整額の有無・容量拠出金の扱いを並べて比較します。最終保障供給脱出を急ぐあまり不利な条件を飲むと、1〜3年スパンで損失が拡大する可能性があります。",
  },
  {
    step: "STEP 4",
    title: "契約締結と切替工事日の確定",
    detail:
      "契約締結後、送配電会社を通じたスイッチング手続きが進み、次回検針日からの切替が確定します。切替完了までの期間は最終保障供給の料金が継続するため、手続きは可能な限り前倒しします。",
  },
  {
    step: "STEP 5",
    title: "切替後1ヶ月の請求書を必ず検証",
    detail:
      "切替月の請求書には最終保障供給期間分と新契約期間分が混在します。日割計算・燃調単価・託送料金の転記ミスが起きやすいため、新契約の初月請求書は必ず検算してください。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 とは",
    "最終保障供給 条件",
    "最終保障供給 料金",
    "最終保障供給 脱出",
    "最終保障供給 法人",
    "最終保障供給 切替",
    "最終保障供給 期限",
    "ラストリゾート 電力",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/last-resort-supply", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/last-resort-supply"],
  },
};

// --- Page Component ---
export default function LastResortSupplyExplainedPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          {
            name: "最終保障供給を知る",
            url: "https://simulator.eic-jp.org/articles/last-resort-supply",
          },
          { name: "最終保障供給の適用条件と脱出方法" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        {/* パンくずナビ */}
        <nav
          aria-label="パンくずリスト"
          className="mb-4 flex items-center gap-1.5 text-xs text-slate-500"
        >
          <Link href="/" className="hover:text-sky-700 hover:underline">
            ホーム
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/articles/last-resort-supply"
            className="hover:text-sky-700 hover:underline"
          >
            最終保障供給を知る
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">適用条件と脱出方法</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            最終保障供給を知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            最終保障供給とは？適用される条件と脱出方法
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は、
            <strong>
              契約先が決まらず電気の供給先を失った高圧・特別高圧の需要家に、送配電会社が一時的に電気を供給する制度
            </strong>
            です。自動適用される点は安心材料ですが、料金は通常契約の約1.2倍相当で、長く利用し続けるほど負担が膨らみます。このページでは、適用条件・料金水準・脱出の5ステップ・期限管理の注意点を順に整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 定義 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              最終保障供給の定義
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              最終保障供給は、電気事業法に基づいて送配電事業者（TEPCO PG・関西電力送配電等）が
              <strong>
                高圧・特別高圧の需要家が契約先を失った場合に、一時的に電気を供給する義務
              </strong>
              として位置づけられています。自由化後の電力市場において、需要家が「電気を使えなくなる」事態を避けるためのセーフティネットです。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              制度の位置づけ・契約件数の推移・歴史的な急増の背景は
              <Link
                href="/last-resort-supply"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                最終保障供給とは（詳細版）
              </Link>
              で、グラフと公表データを用いて整理しています。
            </p>
          </section>

          {/* 適用条件 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              適用される条件
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下のいずれかに該当すると、自動的に送配電会社の最終保障供給に移行します。事前の通告や同意取得は必要ありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {triggerConditions.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 料金水準 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              料金水準（一般契約の約1.2倍）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              最終保障供給の料金は、エリアの規制料金（経過措置料金）をベースに
              <strong>割増係数（1.2倍程度）</strong>
              を乗じて算定されます。これは「通常契約を代替するものではない」という制度趣旨にもとづく設計で、中長期での利用継続を想定していません。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2022年のLNG急騰期には、JEPXベースに連動する算定ルールの影響で一時的に最終保障供給が通常契約より安く見える逆転現象が発生し、社会問題化しました。この反省を受けて算定式はJEPX連動の成分を入れる形に改定されており、現在は「割安に使い続けられる制度」ではなくなっています。料金水準の詳細は
              <Link
                href="/last-resort-supply-price"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                最終保障供給の料金はなぜ高いのか
              </Link>
              で整理しています。
            </p>
          </section>

          {/* 脱出手順 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              脱出方法（5ステップ）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              最終保障供給に入ったら、できるだけ早く通常契約へ戻すのが鉄則です。以下の5ステップで切替を進めます。
            </p>
            <ol className="mt-4 space-y-3">
              {exitSteps.map((s) => (
                <li
                  key={s.step}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-xs font-semibold text-sky-700">{s.step}</p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {s.detail}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* 期限の注意点 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              脱出期限・期間の注意点
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              最終保障供給には明示的な利用期限は設定されていませんが、制度上は
              <strong>一時的な供給</strong>
              と位置づけられているため、実務上は以下の点に注意が必要です。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                <strong>原則として「速やかに通常契約へ戻すこと」</strong>
                が求められ、不必要な長期利用は制度趣旨に反するとされています。
              </li>
              <li>
                料金の割増が続く形で上乗せが発生するため、3ヶ月利用すれば通常契約比で概ね数十万〜数百万円規模（需要量次第）のコスト負担増が発生します。
              </li>
              <li>
                再エネ賦課金・燃料費調整額・託送料金は通常契約と同様に請求されるため、
                <strong>割増分は「割増係数×通常料金」に乗じる形でコスト全体に波及</strong>
                します。
              </li>
              <li>
                切替後も、請求書上の日割計算・燃調単価の転記誤りを初月に必ず検証します。
              </li>
            </ul>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  最終保障供給は新電力撤退・契約切れ・入札不調等で自動適用されるセーフティネット。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  料金は通常契約の約1.2倍相当で、長期利用は制度趣旨に反する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  脱出は5ステップ（目標日逆算→相見積→比較→締結→初月検証）で進めるのが定石。
                </span>
              </li>
            </ul>
          </section>
        </section>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/last-resort-supply",
                title: "最終保障供給とは（詳細版）",
                description:
                  "仕組み・契約件数の推移・2022年急増の背景までグラフ付きで整理。",
              },
              {
                href: "/last-resort-supply-price",
                title: "最終保障供給の料金はなぜ高いのか",
                description:
                  "割増設計の背景と料金算定ルールを実務目線で解説します。",
              },
              {
                href: "/last-resort-supply-emergency-response",
                title: "最終保障供給に入りそうなときの対応手順",
                description:
                  "早期発見と切替準備の進め方を、担当者向けに整理します。",
              },
              {
                href: "/last-resort-supply-switch",
                title: "最終保障供給から通常契約への切替",
                description:
                  "切替実務と契約条件のチェックポイントを整理します。",
              },
              {
                href: "/last-resort-supply-internal-explanation",
                title: "最終保障供給を社内説明するポイント",
                description:
                  "料金が高い理由と対応方針の伝え方を整理します。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="最終保障供給からの切替候補を比較する"
            description="現在契約と新規候補プランを同条件で比較し、切替判断と期限管理に必要な判断材料をそろえます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門家に相談する" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
