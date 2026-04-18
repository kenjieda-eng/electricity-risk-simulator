import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "お問い合わせ・ご相談受付｜法人・自治体向け電気料金のご相談窓口";
const pageDescription =
  "一般社団法人エネルギー情報センターでは、法人・企業・自治体の皆さまからの電気料金に関するご相談を受け付けています。契約見直し、料金比較、値上げ通知の妥当性、リスク診断、社内説明の進め方など、電力担当者が抱える実務課題に専門的な視点でお応えします。";

const contactUrl = "https://eic-jp.org/contact";

// 想定される相談内容
const consultationTopics = [
  {
    title: "電気料金の値上げ通知への対応",
    description:
      "電力会社から届いた値上げ通知の内容が妥当なのか、他社と比較して適正なのか、交渉の余地はあるのかといったご相談を多くいただいています。",
  },
  {
    title: "契約メニューの見直し・切り替え",
    description:
      "市場連動型と固定単価型の違い、燃料費調整額の上限有無、契約期間の妥当性など、契約条件の判断に必要な情報をご案内します。",
  },
  {
    title: "複数電力会社の見積比較",
    description:
      "見積書のどこを比較すればよいかわからない、条件の違いが読み取れないといったお悩みに、専門的な観点で整理します。",
  },
  {
    title: "最終保障供給に関するご相談",
    description:
      "最終保障供給に切り替わってしまった、今後の契約をどうすべきかといった緊急性の高いご相談も受け付けています。",
  },
  {
    title: "電気料金上昇リスクの診断・分析",
    description:
      "今後の市場動向を踏まえたリスクシナリオの分析、契約期間中に想定すべき価格変動の幅など、将来を見据えた判断をお手伝いします。",
  },
  {
    title: "社内説明・稟議資料の作成支援",
    description:
      "経営層や上長への説明資料、稟議書の作成方法、数値の見せ方など、契約判断を社内で通すためのサポートもお任せください。",
  },
];

// こんな方からのご相談を歓迎
const welcomeAudience = [
  {
    label: "企業の総務・経理・ファシリティ担当者",
    detail:
      "契約更新や値上げ通知への対応、複数拠点の電気料金一元管理など、実務レベルの課題に対応します。",
  },
  {
    label: "自治体の施設管理・財政担当者",
    detail:
      "公共施設の電力契約、入札条件の整理、議会・内部説明に必要な資料作成まで、中立的な立場でお手伝いします。",
  },
  {
    label: "企業の経営者・事業責任者",
    detail:
      "電気料金を経営課題として捉え、中長期的なエネルギーコスト戦略を検討したい経営層の方からのご相談も歓迎します。",
  },
  {
    label: "電力担当に就任したばかりの方",
    detail:
      "何から手を付けてよいかわからない、前任者から引き継いだ情報が十分でないといった状況でも、丁寧にご案内いたします。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 相談",
    "自治体 電気料金 問い合わせ",
    "電力契約 見直し 相談窓口",
    "エネルギー情報センター 問い合わせ",
    "法人電気料金 値上げ 相談",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/contact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/contact",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
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
    images: ["/twitter-default.png"],
  },
};

// --- Page Component ---
export default function ContactPage() {
  return (
    <>
      <ArticleJsonLd
        headline="お問い合わせ・ご相談受付｜法人・自治体向け電気料金のご相談窓口"
        description="一般社団法人エネルギー情報センターでは、法人・企業・自治体の皆さまからの電気料金に関するご相談を受け付けています。契約見直し、料金比較、値上げ通知の妥当性、リスク診断、社内説明の進め方など、電力担当者が抱える実務課題に専門的な視点でお応えします。"
        url="https://simulator.eic-jp.org/contact"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "お問い合わせ・ご相談受付" },
        ]}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">
          CONTACT ／ お問い合わせ・ご相談受付
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          法人・自治体の電力ご担当者さまからの
          <br className="hidden sm:inline" />
          ご相談をお待ちしています
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          一般社団法人エネルギー情報センターでは、法人・企業・自治体の皆さまから、電気料金に関するご相談を広く受け付けています。
          契約の見直し、料金の妥当性判断、値上げ通知への対応、社内説明の進め方など、電力担当者さまが日々の業務で直面するお悩みに、中立的な立場でお応えします。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          「こんな初歩的なことを聞いてよいのだろうか」「まだ課題として整理しきれていない」そんな段階でも、どうぞお気軽にご連絡ください。担当者さまの状況を丁寧にお伺いし、いま何を確認すべきかを一緒に整理するところから始めさせていただきます。
        </p>
      </header>

      {/* 私たちがお応えできること */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          私たちがお応えできること
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          電力自由化以降、法人向け電気料金の仕組みはますます複雑になり、担当者さまが正しい判断材料を得ることが難しくなっています。私たちは、電力・エネルギー分野の実務知見と、中立的な情報発信の立場から、以下のようなご相談にお応えしています。
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {consultationTopics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {topic.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* こんな方からのご相談を歓迎 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          こんな方からのご相談を歓迎しています
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          業種・組織規模・地域を問わず、電力契約に関わるすべての方からのご相談をお待ちしています。特に以下のような立場の方からのお問い合わせを多くいただいています。
        </p>
        <ul className="mt-4 space-y-3">
          {welcomeAudience.map((item) => (
            <li
              key={item.label}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-base font-semibold text-slate-900">
                {item.label}
              </p>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 私たちの立場 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          私たちの立場と、ご相談の姿勢について
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          一般社団法人エネルギー情報センターは、特定の電力会社や販売代理店に所属しない、独立した中立的な立場の法人です。営業目的での電力会社の紹介や、特定のプランへの勧誘は一切行いません。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          ご相談いただいた内容は機密情報として厳重に取り扱い、担当者さまの同意なく第三者に共有することはありません。安心してご相談いただける環境づくりを何より大切にしています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          「まだ検討段階で、何をどう聞いたらよいかわからない」という状態でもまったく構いません。ご担当者さまの置かれた状況を丁寧に伺い、判断に必要な論点を一緒に整理していくところから伴走させていただきます。
        </p>
      </section>

      {/* ご相談の流れ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ご相談の流れ</h2>
        <ol className="mt-4 space-y-4 border-l-2 border-sky-200 pl-5">
          <li className="relative">
            <span className="absolute -left-[27px] top-1.5 inline-block h-3 w-3 rounded-full border-2 border-sky-500 bg-white" />
            <p className="text-sm font-semibold text-sky-800">STEP 1</p>
            <p className="mt-1 text-sm leading-7 text-slate-700 sm:text-base">
              <strong className="font-semibold text-slate-900">
                お問い合わせフォームからご連絡
              </strong>
              ：所属組織、ご担当業務、ご相談の概要をご記入ください。詳細が決まっていなくても問題ありません。
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-[27px] top-1.5 inline-block h-3 w-3 rounded-full border-2 border-sky-500 bg-white" />
            <p className="text-sm font-semibold text-sky-800">STEP 2</p>
            <p className="mt-1 text-sm leading-7 text-slate-700 sm:text-base">
              <strong className="font-semibold text-slate-900">
                担当者から折り返しご連絡
              </strong>
              ：内容を確認のうえ、担当者よりメールにて折り返しご連絡いたします。必要に応じてオンライン打ち合わせの日程をご調整します。
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-[27px] top-1.5 inline-block h-3 w-3 rounded-full border-2 border-sky-500 bg-white" />
            <p className="text-sm font-semibold text-sky-800">STEP 3</p>
            <p className="mt-1 text-sm leading-7 text-slate-700 sm:text-base">
              <strong className="font-semibold text-slate-900">
                ヒアリングと論点整理
              </strong>
              ：現状の契約内容や課題感をお伺いし、判断に必要な論点を一緒に整理します。初回のご相談は基本的に無料で対応いたします。
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-[27px] top-1.5 inline-block h-3 w-3 rounded-full border-2 border-sky-500 bg-white" />
            <p className="text-sm font-semibold text-sky-800">STEP 4</p>
            <p className="mt-1 text-sm leading-7 text-slate-700 sm:text-base">
              <strong className="font-semibold text-slate-900">
                継続的なご支援
              </strong>
              ：ご要望に応じて、契約見直しの伴走支援、社内説明資料の作成支援、定期的な情報提供など、継続的にサポートいたします。
            </p>
          </li>
        </ol>
      </section>

      {/* メインCTA：問い合わせボタン */}
      <section className="mt-8 rounded-xl border-2 border-sky-300 bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">
          お問い合わせフォームへ
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          ご相談・お問い合わせは、運営団体である一般社団法人エネルギー情報センターの公式お問い合わせフォームよりお送りください。担当者が内容を確認のうえ、後日ご連絡させていただきます。
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-sky-700 sm:text-lg"
          >
            お問い合わせフォームを開く →
          </a>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            ※ 一般社団法人エネルギー情報センター公式サイト
            <br />
            （eic-jp.org）の問い合わせページに遷移します
          </p>
        </div>
      </section>

      {/* 補足：個人のお客様への案内 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          ご相談を承る範囲について
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          本窓口は、
          <strong className="font-semibold text-slate-900">
            法人・企業・自治体・団体等
          </strong>
          からのご相談を主な対象としています。ご家庭向けの電気料金に関するご相談には十分な対応が難しい場合がございますので、あらかじめご了承ください。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          また、特定の電力会社との契約仲介や、販売代理行為は一切行っておりません。中立的な情報提供と、判断材料の整理を中心としたご支援となります。
        </p>
      </section>

      {/* トップへ戻る */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block text-sm text-sky-700 underline underline-offset-2 hover:text-sky-900"
        >
          ← トップページに戻る
        </Link>
      </div>
    </main>
    </>
  );
}
