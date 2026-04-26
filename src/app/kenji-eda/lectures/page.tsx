import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "../../../components/seo/JsonLd";
import AuthorBadge from "../../../components/market-data/AuthorBadge";
import ContentCta from "../../../components/simulator/ContentCta";

const pageTitle = "江田健二 講演実績｜政府・自治体・経済団体・企業向けエネルギー講演";
const pageDescription =
  "一般社団法人エネルギー情報センター理事 江田健二の講演実績まとめ。内閣府・東京商工会議所・公益財団など 24 団体超への登壇実績、主な講演テーマ、最新の登壇予定をカテゴリ別に整理。";
const publishedDate = "2026-04-25";
const pageUrl = "https://simulator.eic-jp.org/kenji-eda/lectures";

const speakingTopics = [
  "今こそ知りたい！脱炭素経営 〜世界の潮流と日本の取り組みから考える〜",
  "GX 基本の「き」を学ぶ 今更聞けない中小企業のGX",
  "エネルギー価格高騰時代のコスト削減、ビジネスチャンス",
  "SDGsとエネルギー問題を考える 〜今こそ知りたい！脱炭素社会〜",
  "蓄電池が生み出すビジネスチャンス 〜蓄電池×X（Something）〜",
  "緊迫する中東情勢と企業のエネルギーコストへの影響",
];

const recentTalks: { date: string; organizer: string; title: string; url: string; format?: string }[] = [
  {
    date: "2026-04-28",
    organizer: "福井商工会議所",
    title: "緊迫する中東情勢と企業のエネルギーコストへの影響",
    url: "https://fcci.seminarone.com/20260428/event",
    format: "会場セミナー（福井県福井市）",
  },
  {
    date: "2026-04-10 実施／4-21〜5-29 アーカイブ配信",
    organizer: "東京商工会議所 資源・エネルギー部会",
    title: "中東情勢・原油高は企業のエネルギーコストをどう変えるか 〜ウクライナショックの教訓とこれからの電力調達・リスク管理戦略〜",
    url: "https://myevent.tokyo-cci.or.jp/detail.php?event_kanri_id=207000",
    format: "オンライン（ライブ + アーカイブ）",
  },
];

const engagementsByCategory: { category: string; organizations: string[] }[] = [
  {
    category: "政府・地方自治体",
    organizations: ["内閣府", "中小企業庁", "東京都庁", "神奈川県庁", "北海道庁", "米国大使館・商務部"],
  },
  {
    category: "経済団体・商工会議所",
    organizations: [
      "全国中小企業団体中央会",
      "鹿児島県中小企業団体中央会",
      "東京商工会議所",
      "大阪商工会議所",
      "福井商工会議所",
      "石川県商工会連合会",
      "中越地区環境保全協議会",
    ],
  },
  {
    category: "公益財団・業界団体",
    organizations: [
      "公益財団法人 新産業創造研究機構",
      "公益財団法人 石川県産業創出支援機構",
      "一般社団法人 日本能率協会",
      "一般社団法人 日本産業機械工業会",
    ],
  },
  {
    category: "企業・教育機関",
    organizations: [
      "株式会社 経済産業新報社",
      "株式会社 新社会システム総合研究所",
      "株式会社 日本ビジネス出版",
      "株式会社 博報堂",
      "株式会社 東芝",
      "武蔵野市立 境南小学校",
    ],
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "江田健二 講演",
    "エネルギー 講演 講師",
    "脱炭素 セミナー 講師",
    "電気料金 講演",
    "GX 講演 中小企業",
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

export default function KenjiEdaLecturesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "江田健二 プロフィール", url: "https://simulator.eic-jp.org/kenji-eda" },
          { name: "講演実績" },
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
          { name: "講演実績" },
        ]}
      />

      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/kenji-eda" className="underline-offset-2 hover:underline">江田健二 プロフィール</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">講演実績</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">PROFILE ／ 講演実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          一般社団法人エネルギー情報センター理事 江田健二は、政府・自治体・経済団体・公益財団・企業・教育機関など、多様な主催者向けに講演を行っています。本ページでは最新の登壇予定、主な講演テーマ、これまでの主な講演実績をカテゴリ別に整理しています。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最新の登壇</h2>
        <ul className="mt-4 space-y-3">
          {recentTalks.map((talk, idx) => (
            <li key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold tracking-wide text-sky-700">
                {talk.date}
                {talk.format && <span className="ml-2 text-slate-500">／ {talk.format}</span>}
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">{talk.title}</p>
              <p className="mt-1 text-sm text-slate-700">主催：{talk.organizer}</p>
              <p className="mt-2 text-sm">
                <a href={talk.url} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline-offset-2 hover:underline">
                  主催者サイトで詳細を見る →
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">主な講演テーマ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          主催者の業種や聴講者の関心に応じてカスタマイズしています。よく依頼されるテーマは以下のとおりです。
        </p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {speakingTopics.map((topic) => (
            <li key={topic} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700">
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">主な講演実績（24 団体超）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          幅広い主催者に登壇しています。下記は代表例で、最新の予定は{" "}
          <a href="https://www.ra-ul.com/events" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline-offset-2 hover:underline">
            RAUL株式会社 イベント・セミナーページ
          </a>{" "}
          をご参照ください。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {engagementsByCategory.map((cat) => (
            <div key={cat.category} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="text-base font-semibold text-sky-900">{cat.category}</h3>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                {cat.organizations.map((org) => (
                  <li key={org} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-slate-400" />
                    <span>{org}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">講演依頼について</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          法人・自治体・教育機関など主催の講演依頼は、運営団体の{" "}
          <Link href="/contact" className="text-sky-700 underline-offset-2 hover:underline">お問い合わせ窓口</Link>{" "}
          または RAUL株式会社の公式ページから受け付けています。テーマ、開催日、参加規模、形式（対面・オンライン）をお知らせください。
        </p>
      </section>

      <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

      <div className="mt-6">
        <ContentCta
          heading="プロフィールページに戻る"
          description="経歴・所属・専門領域・著書・メディア掲載は親プロフィールページにまとめています。"
          links={[
            { href: "/kenji-eda", label: "江田健二 プロフィールへ戻る" },
            { href: "/kenji-eda/books", label: "書籍一覧を見る" },
            { href: "/kenji-eda/media", label: "メディア掲載を見る" },
          ]}
        />
      </div>
    </main>
  );
}
