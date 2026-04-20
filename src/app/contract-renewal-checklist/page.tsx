import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

// --- 定数 ---
const pageTitle =
  "法人の電気契約更新｜満了前にやるべき5つの確認事項";
const pageDescription =
  "法人の電力契約の満了前3〜6ヶ月にやるべき5つの確認事項を整理。契約書の満了日と自動更新条項・通知期限・使用実績・相見積もり候補・社内稟議までのタイムラインとアクション一覧を、契約書・約款の読み方の観点で実務向けに解説します。";
const pageUrl =
  "https://simulator.eic-jp.org/contract-renewal-checklist";

// --- 5つの確認事項 ---
type Check = {
  no: string;
  title: string;
  why: string;
  action: string[];
  pitfall: string;
};

const checks: Check[] = [
  {
    no: "01",
    title: "契約書の満了日と自動更新条項",
    why: "電力契約の多くは自動更新条項付き。満了日を把握していないと、意思に反して同一条件での更新が確定してしまう。",
    action: [
      "契約書を開き「契約期間」「更新に関する条項」を確認する",
      "満了日（期間満了の年月日）をカレンダーに記録する",
      "自動更新の条件文（例：満了○ヶ月前までに申出なければ同一条件で更新）を抜粋しておく",
    ],
    pitfall:
      "電力会社からの満了通知が来てから動き始めるケースが多いが、通知時点ですでに交渉余地が限定されていることが大半。",
  },
  {
    no: "02",
    title: "通知期限（解約・条件変更の申出期限）",
    why: "契約書には「解約する場合」「条件変更する場合」の通知期限が定められており、期限を過ぎると次期契約の条件変更ができなくなる。",
    action: [
      "契約書の通知期限（例：満了3ヶ月前・6ヶ月前）を特定する",
      "通知方法（書面・メール・電力会社システム）を確認する",
      "通知期限の1ヶ月前にリマインドが入るよう社内で共有する",
    ],
    pitfall:
      "通知期限は解約・条件変更・契約内見直しで異なることがあり、短いほうに合わせて動く必要がある。",
  },
  {
    no: "03",
    title: "直近の電気使用実績（増減要因を含む）",
    why: "更新時の条件交渉や相見積もりは、過去実績をベースに行う。実績データなしに精度の高い見積は取れない。",
    action: [
      "直近12ヶ月の月次使用量（kWh）・デマンド・請求額を整理する",
      "使用量の増減要因（拠点新設・設備更新・稼働時間変更）を把握する",
      "今後1年の使用量見通し（増産・縮小予定）を事業部にヒアリング",
    ],
    pitfall:
      "前年同月比だけ見て「ほぼ同じ」と判断するのは危険。燃調・単価改定で金額だけ大きく変わるケースがある。",
  },
  {
    no: "04",
    title: "市場の最新プラン（相見積もり候補の洗い出し）",
    why: "更新交渉で有利な材料を得るには、現行電力会社以外の選択肢を把握していることが前提になる。",
    action: [
      "自社エリアで法人向け電力を提供している事業者をリストアップ",
      "相見積もり候補として2〜3社に絞る（財務健全性・実績も考慮）",
      "最低限の条件（契約期間・プラン種別）を揃えて見積依頼を送る",
    ],
    pitfall:
      "新電力のなかには経営状況が不安定な事業者もあるため、直近の財務情報・撤退報道も軽く確認すること。",
  },
  {
    no: "05",
    title: "社内稟議に必要な情報（稟議書テンプレート）",
    why: "比較結果が出ても稟議に乗せられなければ最終的な決定には至らない。更新判断のための社内準備が並行して必要。",
    action: [
      "直近12ヶ月の電気代実績と見積比較表を整える",
      "稟議書テンプレート（背景／目的／現状／比較／推奨／判断依頼）を用意",
      "経理・総務・施設管理など関係部署への事前共有",
    ],
    pitfall:
      "稟議のリードタイム（承認までに要する日数）を過小評価し、満了直前に慌てるケースが多い。",
  },
];

// --- タイムライン ---
const timeline: { when: string; actions: string[] }[] = [
  {
    when: "満了6ヶ月前",
    actions: [
      "契約書を開いて満了日・通知期限・自動更新条項を確認",
      "過去12ヶ月の電気代・使用量データを整理",
      "今後1年の事業計画を関係部署にヒアリング",
    ],
  },
  {
    when: "満了5ヶ月前",
    actions: [
      "相見積もり候補の電力会社をリストアップ",
      "現行電力会社の営業担当に更新意向を伝え、新単価案を依頼",
      "シミュレーターで現契約とシナリオ別の影響を試算",
    ],
  },
  {
    when: "満了4ヶ月前",
    actions: [
      "2〜3社から相見積もりを取得",
      "比較表で条件を揃えて評価",
      "稟議書のドラフトを作成開始",
    ],
  },
  {
    when: "満了3ヶ月前",
    actions: [
      "最終候補と条件交渉（値引き・契約期間・付帯サービス）",
      "稟議書を関係部署で回覧",
      "経営層への報告スライド作成",
    ],
  },
  {
    when: "満了2ヶ月前",
    actions: [
      "経営層の承認取得",
      "契約書面（新契約または更新変更覚書）のレビュー",
      "解約／条件変更の通知を期限内に送付",
    ],
  },
  {
    when: "満了1ヶ月前",
    actions: [
      "新契約書の締結",
      "供給開始日と検針日のズレがないか確認",
      "社内関係者への連絡（経理・現場）",
    ],
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 更新 チェックリスト",
    "法人 電気 契約更新 満了",
    "電力契約 自動更新 通知期限",
    "電気契約 満了 確認事項",
    "電力 契約更新 タイムライン",
    "法人 電気 契約 更新 手続き",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/contract-legal",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/contract-legal"],
  },
};

// --- Page Component ---
export default function ContractRenewalChecklistPage() {
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
            name: "契約書・約款の読み方",
            url: "https://simulator.eic-jp.org/articles/contract-legal",
          },
          { name: "契約更新前にやるべき5つの確認事項" },
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
            href="/articles/contract-legal"
            className="hover:text-sky-700 hover:underline"
          >
            契約書・約款の読み方
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">契約更新前にやるべき5つの確認事項</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            契約書・約款の読み方
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            法人の電気契約更新｜満了前にやるべき5つの確認事項
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電力契約は、満了日を意識しないまま時間が過ぎると、
            自動更新条項によって同一条件のまま再契約されてしまうことが多々あります。
            そして、自動更新後に「単価が上がっていた」「解約しようとしたら違約金を請求された」という事態は、
            じつは担当者の心がけひとつで避けられます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、契約満了の3〜6ヶ月前から逆算してやるべき5つの確認事項と、
            6ヶ月前から1ヶ月前までのタイムラインを整理します。
            契約書・約款の読み方の観点から、見落とされがちな条項への注意点もまとめています。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 前提 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              なぜ「更新の6ヶ月前」から動くべきか
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力契約の多くには「満了3〜6ヶ月前までに解約または条件変更の申出がなければ、
              同一条件で○年間自動更新される」という条項があります。
              この通知期限を過ぎると、次期契約の条件交渉はもちろん、
              他社への切替を検討する時間的余裕も失われます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              さらに社内稟議や経営層報告、相見積もり取得、契約書レビューなど
              更新作業自体に数ヶ月単位の時間がかかります。
              「6ヶ月前スタート」は余裕があるわけではなく、
              適切に回すためのミニマムだと捉えてください。
            </p>
          </section>

          {/* 5つの確認事項 */}
          {checks.map((c) => (
            <section
              key={c.no}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {c.no}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-slate-900">
                    {c.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                    <strong>なぜ重要か：</strong>
                    {c.why}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  具体的なアクション
                </p>
                <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                  {c.action.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="shrink-0 text-sky-700">&#9679;</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 rounded-xl border border-rose-200 bg-rose-50 p-4">
                <p className="text-xs font-semibold text-rose-700">
                  陥りやすい落とし穴
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {c.pitfall}
                </p>
              </div>
            </section>
          ))}

          {/* タイムライン */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              満了6ヶ月前〜1ヶ月前までのタイムライン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              月単位でやるべきアクションをまとめました。
              このまま社内ガイドラインとして転用しても構いません。
              事業規模によっては稟議のリードタイムが長くなるため、
              各月のアクションを1ヶ月前倒しすると安全です。
            </p>

            <div className="mt-4 space-y-3">
              {timeline.map((t) => (
                <div
                  key={t.when}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold tracking-wide text-sky-700">
                    {t.when}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                    {t.actions.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="shrink-0 text-sky-700">&#9679;</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 条項の注意点 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              契約書・約款で見落としやすい条項
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              更新時に見落とすと後悔しやすい条項を3つ挙げます。
              詳細は
              <Link
                href="/auto-renewal-clause-risks"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                自動更新条項のリスクと対応
              </Link>
              ・
              <Link
                href="/penalty-clause-calculation"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                違約金条項の典型計算式
              </Link>
              もあわせて参照してください。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  自動更新条項
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  意思表示なしで契約が延びる条項。通知期限を過ぎると次期契約の条件交渉の余地がほぼなくなる。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  料金改定条項
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  更新時や一定期間経過後の料金改定を電力会社側の通知のみで行える条項。
                  適用範囲と通知形式を必ず確認する。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  違約金条項
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  中途解約時の違約金計算式と免除事由。他社へ切り替える場合のスイッチングコストに直結する。
                </p>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  契約更新は満了6ヶ月前からスタート。自動更新条項を放置すると交渉余地が消える。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  5つの確認事項：満了日／通知期限／使用実績／相見積もり候補／社内稟議。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  タイムラインは6ヶ月前〜1ヶ月前の月別アクションで管理する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  自動更新条項・料金改定条項・違約金条項は契約書で必ず実文確認する。
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
                href: "/auto-renewal-clause-risks",
                title: "自動更新条項のリスクと対応",
                description:
                  "自動更新条項による意図しない契約継続を防ぐための通知期限管理と解除の流れ。",
              },
              {
                href: "/electricity-contract-clauses",
                title: "電力契約書・供給約款の主要条項の読み方",
                description:
                  "供給条件・料金・期間・解約など、契約書の主要条項の読み解きポイント。",
              },
              {
                href: "/penalty-clause-calculation",
                title: "違約金条項の典型計算式",
                description:
                  "中途解約時の違約金の計算式と、交渉・免除の余地について整理します。",
              },
              {
                href: "/contract-renewal-6-months-before",
                title: "契約更新を6ヶ月前から準備するメリット",
                description:
                  "6ヶ月前からの準備で得られる交渉余地と情報収集のメリットを詳解。",
              },
              {
                href: "/review-contract-renewal-deadlines",
                title: "契約更新期限管理のポイント",
                description:
                  "更新月・通知期限・解約申出期限の違いと、期限管理の実務ポイントを整理します。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="更新前に、現契約のリスクと削減余地を数値で把握する"
            description="自社の契約条件と使用量を入力すると、更新後の料金シナリオとコスト上振れリスクを可視化できます。契約書レビューのご相談も承ります。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門スタッフに相談する" },
            ]}
          />
        </div>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="契約更新前の条件整理、専門家に相談しませんか？"
            description="現行契約の課題整理から相見積もりの取得支援、更新条件の交渉ポイント整理まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
