import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle =
  "このサイトの思い｜法人向け電気料金の情報格差をなくすために";
const pageDescription =
  "法人向け電気料金の情報格差をなくし、企業や自治体の電力担当者が適切な判断をできる環境をつくりたい。一般社団法人エネルギー情報センターが運営する本サイトの理念と背景をお伝えします。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 情報格差",
    "電力契約 見直し 判断基準",
    "エネルギー情報センター",
    "電気料金 シミュレーター",
    "企業 自治体 電力担当",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/about-this-site",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/about-this-site",
    siteName: "法人電気料金ナビ",
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

export default function AboutThisSitePage() {
  return (
    <>
      <ArticleJsonLd
        headline="このサイトの思い｜法人向け電気料金の情報格差をなくすために"
        description="法人向け電気料金の情報格差をなくし、企業や自治体の電力担当者が適切な判断をできる環境をつくりたい。一般社団法人エネルギー情報センターが運営する本サイトの理念と背景をお伝えします。"
        url="https://simulator.eic-jp.org/about-this-site"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "このサイトの思い" },
        ]}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          このサイトの思い
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金には、情報の非対称性が存在します。料金の仕組みは複雑で、契約メニューの違いやリスク構造を正しく理解するには専門的な知識が必要です。
          本サイトは、その情報格差をなくし、企業や自治体の電力担当者が自信を持って判断できる環境をつくりたいという思いから生まれました。
        </p>
      </header>

      {/* 本文セクション群 */}
      <section className="mt-6 space-y-6">
        {/* なぜこのサイトをつくったのか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜこのサイトをつくったのか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向けの電気料金は、家庭向けとは異なり、契約条件や調達方法によって大きく変動します。市場連動型と固定単価型の違い、燃料費調整額や再エネ賦課金の影響、契約更新時の条件変更など、判断すべきポイントは多岐にわたります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            しかし、こうした情報は専門家や電力会社側に偏りがちで、実際に契約を管理する企業の総務・経理担当者や自治体の施設管理者にとっては、十分な判断材料を得ることが難しいのが現状です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「見積もりを比較したいが、どこを見ればいいかわからない」「値上げ通知が届いたが、妥当なのか判断できない」「契約更新の時期だが、そもそも何を確認すべきかわからない」——こうした声に応えるために、本サイトは生まれました。
          </p>
        </section>

        {/* 私たちが目指すこと */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            私たちが目指すこと
          </h2>
          <div className="mt-3 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                情報の非対称性をなくす
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                電力会社や専門家だけが持っていた知識を、わかりやすい言葉と具体的なデータで届けます。料金構造の基礎から、契約メニューの比較、リスクシナリオの分析まで、判断に必要な情報を体系的に整理しています。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                自分で判断できる力を支える
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                本サイトは特定の電力会社を推薦したり、契約の仲介を行ったりすることはありません。あくまでも中立的な立場から、電力担当者が自ら考え、比較し、判断できるための情報基盤を提供します。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                リスクを見える化する
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                電気料金の上昇リスクは、燃料価格の変動、為替の変動、気象条件、地政学リスクなど複数の要因が絡み合っています。本サイトのシミュレーターは、こうしたリスク要因を可視化し、将来の料金変動に備えるための判断材料を提供します。
              </p>
            </div>
          </div>
        </section>

        {/* 本サイトで提供していること */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            本サイトで提供していること
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-medium text-slate-900">電気料金上昇リスクシミュレーター</span>
              ——契約条件を入力するだけで、料金上昇リスクを簡易診断できます
            </li>
            <li>
              <span className="font-medium text-slate-900">体系的な解説記事</span>
              ——料金の基礎知識から契約見直しのポイントまで、テーマ別に整理しています
            </li>
            <li>
              <span className="font-medium text-slate-900">月次振り返りデータ</span>
              ——法人向け電気料金の実績推移を契約区分別に毎月更新しています
            </li>
            <li>
              <span className="font-medium text-slate-900">有事シナリオ分析</span>
              ——地政学リスクや自然災害など、電気料金に影響を与える有事シナリオを分析しています
            </li>
            <li>
              <span className="font-medium text-slate-900">料金メニュー比較診断</span>
              ——市場連動型と固定単価型の違いを、リスクパターン別に比較できます
            </li>
          </ul>
        </section>

        {/* 運営について */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            運営について
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            本サイトは、
            <a
              href="https://eic-jp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              一般社団法人エネルギー情報センター
            </a>
            が運営しています。エネルギー情報センターは、エネルギーに関する正確で中立的な情報の発信を通じて、社会全体のエネルギーリテラシー向上に貢献することを目的とした団体です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金の分野においても、特定の事業者に偏らない情報提供を方針とし、企業や自治体の電力担当者にとって信頼できる判断材料となることを目指しています。
          </p>
        </section>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/articles",
              title: "解説ページ一覧",
              description:
                "法人向け電気料金に関する解説記事をテーマ別に整理しています。",
            },
            {
              href: "/how-to",
              title: "シミュレーターの使い方",
              description:
                "電気料金上昇リスクシミュレーターの使い方を解説します。",
            },
            {
              href: "/business-electricity-retrospective",
              title: "法人電気料金振り返り",
              description:
                "法人向け電気料金の推移を契約区分別に毎月振り返っています。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="まずはリスクを診断してみませんか？"
          description="契約条件を入力するだけで、電気料金の上昇リスクを簡易診断できます。現状把握の第一歩として、ぜひお試しください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/articles", label: "解説記事を読む" },
          ]}
        />
      </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
