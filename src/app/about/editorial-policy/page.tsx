import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";

const pageTitle = "編集ポリシー｜情報源・確認手順・更新方針";
const pageDescription = "本サイトの記事編集における情報源・事実確認手順・更新サイクルを公開します。読者・取材先・引用元への信頼性確保のための運用方針です。";
const pageUrl = "https://simulator.eic-jp.org/about/editorial-policy";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription, alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, siteName: "法人向け電気料金上昇、高騰リスクシミュレーター", locale: "ja_JP", type: "article", images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd headline={pageTitle} description={pageDescription} url={pageUrl} datePublished="2026-04-18"
        breadcrumbItems={[{ name: "ホーム", url: "https://simulator.eic-jp.org/" }, { name: "サイトについて" }, { name: "編集ポリシー" }]} />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link><span className="px-2">›</span>
          <span className="text-slate-800">編集ポリシー</span>
        </nav>
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">編集ポリシー</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700">本サイトの記事編集における情報源・事実確認手順・更新サイクルを公開します。</p>
        </header>
        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">1. 編集主体</h2>
            <p className="mt-3 text-sm leading-7">本サイトは<strong>一般社団法人エネルギー情報センター</strong>が運営し、編集責任者は同法人代表理事 江田健二が務めています。エネルギー業界の調査・分析・出版経験10年以上の専門スタッフが記事編集を担当します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2. 一次情報源</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
              <li><strong>政府機関</strong>: 経済産業省、環境省、資源エネルギー庁、電力・ガス取引監視等委員会</li>
              <li><strong>準公的機関</strong>: 電力広域的運営推進機関（OCCTO）、日本卸電力取引所（JEPX）</li>
              <li><strong>業界団体</strong>: 電気事業連合会、新電力ネット、自然エネルギー財団</li>
              <li><strong>国際機関</strong>: IEA、IRENA、CDP、SBTi、RE100</li>
              <li><strong>一次資料</strong>: 各電力会社の有価証券報告書・決算説明資料、託送料金認可申請書</li>
            </ul>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3. 事実確認手順</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7">
              <li>記事執筆者が一次情報源を確認し、引用元URLを記事内に明記</li>
              <li>編集担当が独立して同じ情報源を確認（ダブルチェック）</li>
              <li>専門用語・数値は最低2つ以上の情報源で交差検証</li>
              <li>制度・法令解釈は弁護士・税理士監修を受ける（該当時）</li>
              <li>公開後も四半期に1回、数値・制度の最新性をレビュー</li>
            </ol>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">4. 更新サイクル</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
              <li><strong>月次</strong>: 月次振り返りシリーズ、価格・需給データ更新</li>
              <li><strong>四半期</strong>: 主要記事の数値・制度確認</li>
              <li><strong>年次</strong>: 全記事の構成・最新動向反映の総合レビュー</li>
              <li><strong>随時</strong>: 制度改正・市場急変・新法成立時に該当記事を即時更新</li>
            </ul>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">5. 訂正方針</h2>
            <p className="mt-3 text-sm leading-7">事実誤認・数値誤りが判明した場合は、24時間以内に該当記事を修正し、記事末尾に訂正履歴を明記します。読者からの指摘は<a href="https://eic-jp.org/contact" className="text-sky-700 underline">公式問い合わせフォーム</a>で受付けています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">6. 利益相反開示</h2>
            <p className="mt-3 text-sm leading-7">本サイトは特定の電力会社・PPA事業者・コンサル会社の利益を代弁しません。記事内で具体的な事業者名を例示する場合は、複数の同業他社も併記し、読者の選択に偏りが生じないよう配慮します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">7. AI活用方針</h2>
            <p className="mt-3 text-sm leading-7">記事のドラフト生成・データ集計の補助としてAIを活用しますが、最終的な事実確認・編集判断・公開承認はすべて人間の編集担当が行います。AI生成のみで公開する記事はありません。</p>
          </section>
          <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連ページ</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
              <li><Link href="/about/author" className="text-sky-700 underline">著者・監修体制</Link></li>
              <li><Link href="/downloads" className="text-sky-700 underline">データ・ダウンロードセンター</Link></li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}
