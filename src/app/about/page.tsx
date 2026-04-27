import type { Metadata } from "next";
import Link from "next/link";
import { OrganizationJsonLd } from "../../components/seo/JsonLd";
import Breadcrumb from "../../components/simulator/Breadcrumb";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "サイトについて｜一般社団法人エネルギー情報センター";
const pageDescription =
  "法人向け電気料金リスクシミュレーターの運営理念・運営団体・著者監修体制・編集ポリシーをまとめたハブページです。一般社団法人エネルギー情報センターは、電力業界の情報格差解消を目的とする中立な非営利法人です。";
const pageUrl = "https://simulator.eic-jp.org/about";

const ABOUT_NAV_CARDS = [
  {
    href: "/about-this-site",
    title: "このサイトの思い",
    description:
      "法人電気料金における情報格差を解消したい——本サイトの運営理念と提供価値をまとめています。",
  },
  {
    href: "/about/author",
    title: "著者・監修体制",
    description:
      "理事 江田健二（電力・エネルギー業界 20 年以上）と運営法人プロフィールをまとめた E-E-A-T シグナルの中核ページです。",
  },
  {
    href: "/about/editorial-policy",
    title: "編集ポリシー",
    description:
      "情報源（経産省・OCCTO・JEPX 等）・事実確認手順・更新サイクルなど、コンテンツ制作の運用方針を公開しています。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "サイトについて",
    "一般社団法人エネルギー情報センター",
    "運営団体",
    "編集体制",
    "著者プロフィール",
    "電力 情報サイト 中立",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function AboutHubPage() {
  return (
    <>
      <OrganizationJsonLd />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { href: "/", label: "ホーム" },
            { label: "サイトについて" },
          ]}
        />

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">ABOUT ／ サイトについて</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            サイトについて
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金リスクシミュレーター（simulator.eic-jp.org）は、一般社団法人エネルギー情報センターが運営する、中立な第三者立場の情報サイトです。電力業界に深く根ざす独立非営利法人として、特定の小売電気事業者や代理店との成果報酬モデルを採用せず、利益相反のない情報発信を続けています。本ページでは、サイトの運営理念・著者監修体制・編集ポリシーを 3 ページに分けて公開しています。
          </p>
        </header>

        <section className="mt-6 grid gap-3 md:grid-cols-3">
          {ABOUT_NAV_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
            >
              <p className="text-base font-bold text-slate-900">{card.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{card.description}</p>
              <span className="mt-auto pt-3 text-sm font-semibold text-sky-700 group-hover:text-sky-900">
                詳しく見る →
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900">運営団体プロフィール（要約）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <strong className="font-semibold text-slate-900">一般社団法人エネルギー情報センター</strong>（Energy Information Center, EIC）は、電力業界における情報の非対称性を解消し、法人・自治体・生活者が公平な判断材料を持てる環境づくりを目的とする独立非営利法人です。設立以来、電力自由化以降の小売市場・卸電力市場・容量市場・送配電制度などの構造変化を継続的にモニタリングし、解説・調査・教育の 3 軸で情報発信を続けています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            運営する代表的な情報資産には、本サイト「法人電気料金ナビ（simulator.eic-jp.org）」のほか、業界専門メディア「
            <a
              href="https://pps-net.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline"
            >
              新電力ネット（pps-net.org）
            </a>
            」があり、双方を通じて 452 社規模の電力会社データベース・市場価格推移・契約区分別単価データを公開しています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            活動領域は、（1）法人向け電気料金リスクの定量化ツール提供、（2）電力業界・脱炭素・GX に関する解説コンテンツ制作、（3）官公庁・自治体・経済団体・教育機関での講演・研修登壇、（4）エネルギー業界の情報基盤整備に関する調査研究です。理事 江田健二は、慶應義塾大学経済学部卒業後アンダーセンコンサルティング（現アクセンチュア）でコンサルティング業務に従事し、2005 年に RAUL 株式会社を設立。電力・エネルギー業界に 20 年以上携わり、書籍 20 冊以上の執筆、内閣府・中小企業庁・商工会議所での登壇など多数の実績を持ちます（
            <Link href="/about/author" className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline">
              詳細プロフィールはこちら
            </Link>
            ）。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            本サイトの編集は、公的データ（経済産業省・資源エネルギー庁・OCCTO・JEPX・環境省等）と業界一次情報を主な情報源とし、<Link href="/about/editorial-policy" className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline">公開済みの編集ポリシー</Link> に沿って事実確認・更新サイクルを運用しています。読者からのご指摘・修正提案は <Link href="/contact" className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline">お問い合わせ窓口</Link> から随時受け付けています。
          </p>
        </section>

        <div className="mt-6">
          <RelatedLinks
            heading="運営者・監修者"
            links={[
              {
                href: "/kenji-eda",
                title: "監修者プロフィール｜江田健二（理事）",
                description: "電力・エネルギー業界20年以上、書籍20冊以上、政府・商工会議所登壇多数",
              },
            ]}
          />
        </div>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-900">運営者情報・関連リンク</h2>
          <dl className="mt-3 divide-y divide-slate-200 text-sm leading-7 text-slate-700 sm:text-base">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-4">
              <dt className="font-semibold text-slate-900">運営団体</dt>
              <dd>一般社団法人エネルギー情報センター</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-4">
              <dt className="font-semibold text-slate-900">公式サイト</dt>
              <dd>
                <a
                  href="https://eic-jp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline"
                >
                  https://eic-jp.org/
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-4">
              <dt className="font-semibold text-slate-900">姉妹サイト</dt>
              <dd>
                <a
                  href="https://pps-net.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline"
                >
                  新電力ネット（pps-net.org）
                </a>
                ／ 電力業界専門メディア・452 社規模の電力会社データベース
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-4">
              <dt className="font-semibold text-slate-900">理事プロフィール</dt>
              <dd>
                <Link href="/kenji-eda" className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline">
                  江田 健二（理事 ／ RAUL株式会社代表取締役）
                </Link>
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-4">
              <dt className="font-semibold text-slate-900">お問い合わせ</dt>
              <dd>
                <Link href="/contact" className="text-sky-700 underline-offset-2 hover:text-sky-900 hover:underline">
                  お問い合わせ・ご相談受付
                </Link>
              </dd>
            </div>
          </dl>
        </section>
      </main>
    </>
  );
}
