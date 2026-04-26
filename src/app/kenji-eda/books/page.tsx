import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "../../../components/seo/JsonLd";
import AuthorBadge from "../../../components/market-data/AuthorBadge";
import ContentCta from "../../../components/simulator/ContentCta";

const pageTitle = "江田健二 書籍一覧｜エネルギー・脱炭素・電力ビジネス著書 8 冊";
const pageDescription =
  "一般社団法人エネルギー情報センター理事 江田健二の主な著書 8 冊を紹介。脱炭素、電力・ガス業界、太陽光、蓄電池、エネルギーDX、ブロックチェーンの専門書から実務書まで網羅。";
const publishedDate = "2026-04-25";
const pageUrl = "https://simulator.eic-jp.org/kenji-eda/books";

const books: { title: string; description: string; url: string }[] = [
  {
    title: "ビジネス屋と技術屋が一緒に考える脱炭素",
    description:
      "脱炭素の切り札として注目を集めている水素の利用現場、工場の化石燃料を使わない生産工程等の具体的な対策を、ビジネス面と技術面の両面から考察。",
    url: "https://amzn.to/3T73Acn",
  },
  {
    title: "図解即戦力 電力・ガス業界のしくみとビジネスがこれ1冊でしっかりわかる教科書",
    description:
      "生活・産業のインフラとして安定した需要がある電力・ガス業界の仕組みと仕事、将来の展望を一冊で解説。",
    url: "https://amzn.to/3TpvhOF",
  },
  {
    title: "実務 太陽光パネル循環型ビジネス",
    description:
      "太陽光パネル大量廃棄時代に向けた、リユース・リサイクル・廃棄の現状と課題、ビジネスチャンスを整理。",
    url: "https://amzn.to/3vb1ike",
  },
  {
    title: "2025年「脱炭素」のリアルチャンス すべての業界を襲う大変化に乗り遅れるな！",
    description:
      "世界の富豪の投資動向を分析し、脱炭素が他人事でないこと、今後日本企業に吹き荒れる逆風とチャンスを明快に解説。",
    url: "https://amzn.to/3qtHUMM",
  },
  {
    title: "2時間でわかる 蓄電池ビジネスの未来",
    description:
      "蓄電池というキーワードを通じて、電力・エネルギービジネス、蓄電池が関わる新たな20兆円市場の現状・将来展望を独自の視点で解説。",
    url: "https://amzn.to/42sruSd",
  },
  {
    title: "「脱炭素化」はとまらない！ーー未来を描くビジネスのヒントーー",
    description:
      "エネルギー・環境分野に携わるビジネスパーソン向けに、脱炭素化がなぜ必要か、どう取り組むべきかのヒントを紹介。",
    url: "https://amzn.to/43ij9lf",
  },
  {
    title: "IoT・AI・データを活用した先進事例8社のビジネスモデルを公開 エネルギーデジタル化の最前線2020",
    description:
      "エネルギービジネスがインフラ産業から情報サービス産業へ変化する様相を、先進事例を通じて解説。",
    url: "https://amzn.to/3WV7HcW",
  },
  {
    title: "世界の51事例から予見する ブロックチェーン×エネルギービジネス",
    description:
      "ブロックチェーンによって何が実現できるようになるかを、世界50以上のエネルギービジネス事例をもとに予見。",
    url: "https://amzn.to/3WUP7Bx",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "江田健二 書籍",
    "脱炭素 書籍",
    "電力 業界 書籍",
    "蓄電池 ビジネス 書籍",
    "エネルギー DX 書籍",
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

export default function KenjiEdaBooksPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "江田健二 プロフィール", url: "https://simulator.eic-jp.org/kenji-eda" },
          { name: "書籍一覧" },
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
          { name: "書籍一覧" },
        ]}
      />

      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/kenji-eda" className="underline-offset-2 hover:underline">江田健二 プロフィール</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">書籍一覧</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">PROFILE ／ 書籍一覧</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          江田健二はエネルギー・脱炭素・電力業界・蓄電池・エネルギーDX・ブロックチェーンをテーマに、これまで <strong className="font-semibold text-slate-900">20 冊以上</strong> の書籍を執筆しています。本ページでは代表的な書籍 8 冊を紹介します。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">代表的な著書 8 冊</h2>
        <ul className="mt-4 space-y-3">
          {books.map((book) => (
            <li key={book.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-base font-semibold text-slate-900">
                <a href={book.url} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline-offset-2 hover:underline">
                  {book.title}
                </a>
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{book.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          ※ 他にも『蓄電所ビジネス』『むしろ、じっくり話していい。』など、エネルギー・脱炭素・ビジネスをテーマとした書籍を多数執筆。
          書籍情報は{" "}
          <a href="https://www.ra-ul.com/seminar_event" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline-offset-2 hover:underline">
            RAUL株式会社 講演依頼ページ
          </a>{" "}
          をもとに作成。表紙画像・書影は各書籍販売ページをご参照ください。
        </p>
      </section>

      <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

      <div className="mt-6">
        <ContentCta
          heading="プロフィールページに戻る"
          description="経歴・所属・専門領域・講演実績・メディア掲載は親プロフィールページにまとめています。"
          links={[
            { href: "/kenji-eda", label: "江田健二 プロフィールへ戻る" },
            { href: "/kenji-eda/lectures", label: "講演実績を見る" },
            { href: "/kenji-eda/media", label: "メディア掲載を見る" },
          ]}
        />
      </div>
    </main>
  );
}
