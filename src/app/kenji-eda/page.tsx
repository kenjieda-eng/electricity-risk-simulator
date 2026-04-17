import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "江田健二 プロフィール｜一般社団法人エネルギー情報センター 理事";
const pageDescription =
  "一般社団法人エネルギー情報センター理事・江田健二のプロフィール。エネルギー・デジタル化・脱炭素化分野での執筆・講演活動、経歴、所属団体、著書、受賞歴などを紹介します。";

// 略歴タイムライン
const careerTimeline = [
  {
    year: "1977年",
    label: "富山県砺波市に生まれる",
  },
  {
    year: "2000年",
    label: "慶應義塾大学 経済学部 卒業",
  },
  {
    year: "2000年",
    label:
      "アンダーセンコンサルティング（現アクセンチュア株式会社）入社。電力・エネルギー・化学業界のコンサルティング業務に従事",
  },
  {
    year: "2005年",
    label: "RAUL株式会社を設立、代表取締役に就任",
  },
  {
    year: "現在",
    label:
      "一般社団法人エネルギー情報センター 理事として、法人向け電気料金や電力市場に関する情報発信を推進",
  },
];

// 基本情報
const basicInfo: { label: string; value: string }[] = [
  { label: "氏名", value: "江田 健二（えだ けんじ）" },
  { label: "生年月日", value: "1977年1月5日" },
  { label: "出身地", value: "富山県砺波市" },
  {
    label: "学歴",
    value:
      "慶應義塾大学 経済学部 卒業 ／ 東京大学 Executive Management Program（EMP）修了",
  },
  {
    label: "現職",
    value:
      "一般社団法人エネルギー情報センター 理事 ／ RAUL株式会社 代表取締役",
  },
];

// 所属・役職
const affiliations = [
  "一般社団法人エネルギー情報センター 理事",
  "RAUL株式会社 代表取締役",
  "一般社団法人つなぐ未来研究所 理事",
  "環境省 地域再省蓄エネサービスイノベーション促進委員会 委員",
  "厚生労働省 キャリアコンサルタント研修に関する検討委員会 委員",
  "ASIA WOMEN LEADERS FORUM アドバイザー",
];

// 専門領域
const expertiseAreas = [
  {
    title: "電力・エネルギー市場",
    description:
      "電力自由化以降の市場構造、法人向け電気料金、契約メニュー、電力調達実務などを実務と政策の両面から分析。",
  },
  {
    title: "脱炭素・GX",
    description:
      "企業の脱炭素経営、再生可能エネルギー調達、カーボンクレジット、ESG投資など、GX実装のための戦略支援。",
  },
  {
    title: "エネルギーDX・ブロックチェーン",
    description:
      "スマートメーター活用、エネルギーデータ流通、ブロックチェーン技術など、次世代のエネルギーデジタル化領域。",
  },
  {
    title: "情報発信・普及啓発",
    description:
      "書籍・講演・委員会活動を通じて、エネルギー業界の情報を企業担当者や一般生活者にわかりやすく伝える活動を継続。",
  },
];

// 受賞歴
const awards = [
  {
    year: "2019年",
    title: "第39回 エネルギーフォーラム賞 普及啓発賞",
    description:
      "エネルギー分野における情報発信・普及啓発活動が評価され受賞。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "江田健二",
    "エネルギー情報センター 理事",
    "RAUL 代表取締役",
    "エネルギー コンサルタント",
    "脱炭素 エネルギーDX",
    "電力 自由化 専門家",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/kenji-eda",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/kenji-eda",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "profile",
    images: [
      {
        url: "/kenji-eda.png",
        width: 160,
        height: 150,
        alt: "江田健二（一般社団法人エネルギー情報センター 理事）",
      },
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
export default function KenjiEdaProfilePage() {
  return (
    <>
      <ArticleJsonLd
        headline="江田健二 プロフィール｜一般社団法人エネルギー情報センター 理事"
        description="一般社団法人エネルギー情報センター理事・江田健二のプロフィール。エネルギー・デジタル化・脱炭素化分野での執筆・講演活動、経歴、所属団体、著書、受賞歴などを紹介します。"
        url="https://simulator.eic-jp.org/kenji-eda"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "江田健二 プロフィール" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">
          PROFILE ／ 理事プロフィール
        </p>
        <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex-shrink-0">
            <Image
              src="/kenji-eda.png"
              alt="江田健二（一般社団法人エネルギー情報センター 理事）の顔写真"
              width={160}
              height={150}
              priority
              className="h-auto w-32 rounded-lg border border-slate-200 bg-white object-cover shadow-sm sm:w-40"
            />
            <p className="mt-2 text-[10px] leading-tight text-slate-500">
              出典：
              <a
                href="https://pps-net.org/book/98819"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                新電力ネット
              </a>
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              江田 健二（えだ けんじ）
            </h1>
            <p className="mt-2 text-base font-semibold text-sky-900">
              一般社団法人エネルギー情報センター 理事
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              電力・エネルギー業界に20年以上携わる実業家・コンサルタント。慶應義塾大学経済学部を卒業後、アンダーセンコンサルティング（現アクセンチュア株式会社）で電力・化学業界のコンサルティングに従事。2005年にRAUL株式会社を設立し、代表取締役として、エネルギー・デジタル化・脱炭素化の領域で企業支援、執筆、講演活動を行っています。現在は
              <strong className="font-semibold text-slate-900">
                一般社団法人エネルギー情報センターの理事
              </strong>
              として、法人向け電気料金の情報格差を埋めるための情報発信にも取り組んでいます。
            </p>
          </div>
        </div>
      </header>

      {/* 基本情報 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">基本情報</h2>
        <dl className="mt-4 divide-y divide-slate-200 text-sm leading-7 text-slate-700 sm:text-base">
          {basicInfo.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[140px_1fr] sm:gap-4"
            >
              <dt className="font-semibold text-slate-900">{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 略歴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">略歴</h2>
        <ol className="mt-4 space-y-4 border-l-2 border-sky-200 pl-5">
          {careerTimeline.map((item, index) => (
            <li key={index} className="relative">
              <span className="absolute -left-[27px] top-1.5 inline-block h-3 w-3 rounded-full border-2 border-sky-500 bg-white" />
              <p className="text-sm font-semibold text-sky-800">{item.year}</p>
              <p className="mt-1 text-sm leading-7 text-slate-700 sm:text-base">
                {item.label}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 所属・役職 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">所属・役職</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          エネルギー・環境・サステナビリティ領域を中心に、複数の団体・委員会で活動しています。
        </p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {affiliations.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700"
            >
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 専門領域 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">専門領域</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          現場実務、政策動向、金融・投資の視点を横断しながら、エネルギー・環境分野の戦略支援に従事しています。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 活動内容 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">活動内容</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          エネルギー・脱炭素・デジタル化をテーマとした書籍を20冊以上執筆。国家プロジェクトの委員会への参画、大学での講義担当、機関投資家との対話など、情報発信と現場支援の双方で活動しています。
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
          <li>
            ・エネルギー、脱炭素、ブロックチェーン、エネルギーDXなどをテーマとした書籍執筆（20冊以上）
          </li>
          <li>・官公庁・自治体・業界団体主催のセミナー・講演への登壇</li>
          <li>・政府・環境省・厚生労働省などの委員会委員</li>
          <li>・大学・大学院での講義担当</li>
          <li>・機関投資家・企業経営者との対話、戦略アドバイザリー</li>
          <li>
            ・一般社団法人エネルギー情報センターの理事として、法人向け電気料金に関する情報発信・普及活動
          </li>
        </ul>
      </section>

      {/* 受賞歴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">受賞歴</h2>
        <ul className="mt-4 space-y-3">
          {awards.map((award) => (
            <li
              key={award.title}
              className="rounded-xl border border-sky-200 bg-sky-50 p-4"
            >
              <p className="text-xs font-semibold tracking-wide text-sky-700">
                {award.year}
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {award.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {award.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* エネルギー情報センターでの役割 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          一般社団法人エネルギー情報センターでの役割
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          江田健二は、一般社団法人エネルギー情報センターの理事として、法人向け電気料金に関する情報格差の解消を目指しています。電力自由化以降、電気料金の仕組みはますます複雑化しており、企業・自治体の担当者が自信を持って判断できる情報基盤が不可欠です。本シミュレーターサイトは、その理念のもとで運営されています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          エネルギー・電力分野の専門知見と、コンサルティング現場で培った実務経験を活かし、企業の電力契約見直し、リスク診断、脱炭素経営の実現を支援しています。
        </p>
      </section>

      {/* 出典・関連リンク */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">出典・関連リンク</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
          <li>
            ・
            <a
              href="https://ja.wikipedia.org/wiki/%E6%B1%9F%E7%94%B0%E5%81%A5%E4%BA%8C"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              Wikipedia「江田健二」
            </a>
          </li>
          <li>
            ・
            <a
              href="https://www.ra-ul.com/corporate/executive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              RAUL株式会社 役員紹介ページ
            </a>
          </li>
          <li>
            ・
            <a
              href="https://eic-jp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              一般社団法人エネルギー情報センター 公式サイト
            </a>
          </li>
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          ※本ページの記載情報は公開情報をもとに構成しています。役職・所属等は変更となる場合があります。
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
