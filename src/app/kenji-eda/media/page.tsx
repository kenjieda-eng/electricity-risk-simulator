import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "../../../components/seo/JsonLd";
import AuthorBadge from "../../../components/market-data/AuthorBadge";
import ContentCta from "../../../components/simulator/ContentCta";

const pageTitle = "江田健二 メディア掲載｜Yahoo!ニュース・Wikipedia・新電力ネットほか";
const pageDescription =
  "一般社団法人エネルギー情報センター理事 江田健二のメディア掲載・コメンテーター活動まとめ。Yahoo!ニュース エキスパート、Wikipedia、新電力ネット、RAUL公式ほか主要メディアでのエネルギー専門コメント・寄稿実績を整理。";
const publishedDate = "2026-04-25";
const pageUrl = "https://simulator.eic-jp.org/kenji-eda/media";

const mediaAppearances: { category: string; items: { name: string; description: string; url: string }[] }[] = [
  {
    category: "公式コメンテーター・専門家",
    items: [
      {
        name: "Yahoo!ニュース エキスパートコメンテーター",
        description: "エネルギー・電力・脱炭素分野のニュースに対し、専門家として記事を寄稿・コメントを発信。Yahoo! ニュース公式エキスパート登録。",
        url: "https://news.yahoo.co.jp/users/expert/edakenjiex/articles?page=1",
      },
    ],
  },
  {
    category: "百科事典・一次情報",
    items: [
      {
        name: "Wikipedia「江田健二」",
        description: "経歴・所属・著書・受賞歴などが百科事典として整理されています。",
        url: "https://ja.wikipedia.org/wiki/%E6%B1%9F%E7%94%B0%E5%81%A5%E4%BA%8C",
      },
    ],
  },
  {
    category: "業界メディア・専門サイト",
    items: [
      {
        name: "新電力ネット 著者プロフィール",
        description: "電力業界専門メディア「新電力ネット」での著者プロフィール掲載。当法人が運営する、法人向け電力情報の代表的サイトです。",
        url: "https://pps-net.org/book/98819",
      },
      {
        name: "RAUL株式会社 役員紹介",
        description: "代表取締役を務める RAUL株式会社の役員紹介ページ。コンサルティング・講演活動の窓口。",
        url: "https://www.ra-ul.com/corporate/executive",
      },
      {
        name: "RAUL株式会社 セミナー・講演ページ",
        description: "最新の講演・セミナー実績、書籍情報、寄稿実績の一覧。",
        url: "https://www.ra-ul.com/seminar_event",
      },
    ],
  },
  {
    category: "運営団体公式",
    items: [
      {
        name: "一般社団法人エネルギー情報センター 公式サイト",
        description: "本シミュレーターサイトを運営する一般社団法人エネルギー情報センターの公式情報。理事として情報発信を統括。",
        url: "https://eic-jp.org/",
      },
    ],
  },
  {
    category: "SNS・公式アカウント",
    items: [
      {
        name: "X（旧 Twitter）@kenji__eda",
        description: "エネルギー・電力業界の最新動向、講演活動、書籍情報などを発信。",
        url: "https://twitter.com/kenji__eda",
      },
      {
        name: "Facebook 公式プロフィール",
        description: "個人 Facebook アカウントで業界活動を共有。",
        url: "https://www.facebook.com/profile.php?id=1821326207",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "江田健二 メディア",
    "Yahoo ニュース エキスパート エネルギー",
    "電力 専門家 コメンテーター",
    "エネルギー情報センター 理事",
    "RAUL 代表",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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

export default function KenjiEdaMediaPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "江田健二 プロフィール", url: "https://simulator.eic-jp.org/kenji-eda" },
          { name: "メディア掲載" },
        ]}
      />
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        dateModified={publishedDate}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "江田健二 プロフィール", url: "https://simulator.eic-jp.org/kenji-eda" },
          { name: "メディア掲載" },
        ]}
      />

      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/kenji-eda" className="underline-offset-2 hover:underline">江田健二 プロフィール</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">メディア掲載</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">PROFILE ／ メディア掲載</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          江田健二の主要メディアでの活動・掲載情報をまとめています。Yahoo!ニュースの公式エキスパート、Wikipedia、業界専門メディアでの記事執筆、SNS での情報発信など、幅広いチャネルでエネルギー業界に関する情報発信を行っています。
        </p>
        <p className="mt-3 text-xs text-slate-500">
          ※ 個別記事・コメント本文は各リンク先でご確認ください。記事詳細リストは順次拡充予定です。
        </p>
      </header>

      {mediaAppearances.map((group) => (
        <section key={group.category} className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">{group.category}</h2>
          <ul className="mt-4 space-y-3">
            {group.items.map((item) => (
              <li key={item.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-base font-semibold text-slate-900">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline-offset-2 hover:underline">
                    {item.name}
                  </a>
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

      <div className="mt-6">
        <ContentCta
          heading="プロフィールページに戻る"
          description="経歴・所属・専門領域・講演実績・書籍情報は親プロフィールページにまとめています。"
          links={[
            { href: "/kenji-eda", label: "江田健二 プロフィールへ戻る" },
            { href: "/kenji-eda/lectures", label: "講演実績を見る" },
            { href: "/kenji-eda/books", label: "書籍一覧を見る" },
          ]}
        />
      </div>
    </main>
  );
}
