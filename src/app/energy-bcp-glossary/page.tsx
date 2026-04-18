import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電力BCP・非常用電源用語集｜UPS・コジェネ・マイクログリッド";
const pageDescription =
  "電力BCP・非常用電源・自立運転に関する設備・運用用語を整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/energy-bcp-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力用語", "電気代用語", "用語集", "BCP用語"],
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
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "用語集", url: "https://simulator.eic-jp.org/articles/glossary" },
          { name: "電力BCP・非常用電源用語集" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/glossary" className="underline-offset-2 hover:underline">用語集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">電力BCP・非常用電源用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電力BCP・非常用電源用語集｜UPS・コジェネ・マイクログリッド</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力BCP対策では多種多様な設備・運用方式があり、用語が混在しがちです。UPS・コジェネ・マイクログリッドなど、設備分類と運用方式を整理しました。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">非常用電源の種類</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">UPS（無停電電源装置）</dt><dd className="mt-1">瞬時の停電・電圧低下に対応する電源装置。サーバ・通信機器の保護に使用。</dd></div>
              <div><dt className="font-semibold text-slate-900">非常用発電機</dt><dd className="mt-1">災害時の長時間停電に対応する自家発電設備。ディーゼル・ガス・ガスタービンが主流。</dd></div>
              <div><dt className="font-semibold text-slate-900">コジェネレーション（CHP）</dt><dd className="mt-1">発電と熱供給を同時に行う設備。平常時の省エネと非常時の電源を両立。</dd></div>
              <div><dt className="font-semibold text-slate-900">ガスタービン発電機</dt><dd className="mt-1">ガスを燃料とする発電機。大容量・連続運転に向く。</dd></div>
              <div><dt className="font-semibold text-slate-900">マイクロガスタービン</dt><dd className="mt-1">小型のガスタービン発電機。中小規模施設向け。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">蓄電・電源管理</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">リチウムイオン蓄電池</dt><dd className="mt-1">産業用蓄電池の主流。エネルギー密度が高く、サイクル寿命も長い。</dd></div>
              <div><dt className="font-semibold text-slate-900">鉛蓄電池</dt><dd className="mt-1">従来型の蓄電池。安価だがエネルギー密度・寿命で劣る。</dd></div>
              <div><dt className="font-semibold text-slate-900">レドックスフロー電池</dt><dd className="mt-1">大容量・長寿命の蓄電池。系統用大規模蓄電に活用。</dd></div>
              <div><dt className="font-semibold text-slate-900">PCS（パワーコンディショナ）</dt><dd className="mt-1">直流電力を交流に変換する装置。蓄電池・太陽光に必須。</dd></div>
              <div><dt className="font-semibold text-slate-900">SOC（State of Charge）</dt><dd className="mt-1">蓄電池の充電状態。残存容量の指標。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">マイクログリッド・自立運転</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">マイクログリッド</dt><dd className="mt-1">地域・施設単位の独立運転可能な電力ネットワーク。</dd></div>
              <div><dt className="font-semibold text-slate-900">オフグリッド</dt><dd className="mt-1">電力系統から完全に独立した運用。</dd></div>
              <div><dt className="font-semibold text-slate-900">グリッドフォーミング</dt><dd className="mt-1">蓄電池・発電機が系統電圧・周波数を能動的に作る運転モード。</dd></div>
              <div><dt className="font-semibold text-slate-900">ブラックスタート</dt><dd className="mt-1">系統全停電からの自立復旧能力。</dd></div>
              <div><dt className="font-semibold text-slate-900">自営線</dt><dd className="mt-1">需要家が所有する自前の送電線。複数施設間の電力融通に使用。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BCP関連</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">BCP（事業継続計画）</dt><dd className="mt-1">災害・事故時の事業継続のための計画。</dd></div>
              <div><dt className="font-semibold text-slate-900">RTO（Recovery Time Objective）</dt><dd className="mt-1">業務復旧目標時間。</dd></div>
              <div><dt className="font-semibold text-slate-900">RPO（Recovery Point Objective）</dt><dd className="mt-1">業務復旧時のデータ復旧目標時点。</dd></div>
              <div><dt className="font-semibold text-slate-900">DR（デマンドレスポンス）</dt><dd className="mt-1">需給ひっ迫時に消費を抑える仕組み。対価あり。</dd></div>
            </dl>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.bousai.go.jp/kyoiku/kigyou/index.html" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">内閣府 事業継続ガイドライン</a></li>
            <li><a href="https://www.meti.go.jp/policy/safety_security/industrial_safety/sangyo/electric/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 BCP対策</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/high-voltage-glossary", title: "高圧・特別高圧電気契約の用語集", description: "高圧・特別高圧の電気契約・受変電設備に関する専門用語を一覧で整理した用語集です。" },
              { href: "/low-voltage-glossary", title: "低圧電気契約の用語集", description: "低圧電気契約に関する用語と、料金プラン・契約条件の基本概念を整理した用語集です。" },
              { href: "/demand-power-glossary", title: "デマンド・契約電力関連用語集", description: "デマンド管理・契約電力の決定方式に関する専門用語を整理した用語集です。" },
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/glossary", title: "用語集", description: "このカテゴリの記事一覧を見る" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算する" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="用語の理解を深めたら、関連する解説記事や料金シミュレーターも合わせてご活用ください。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/glossary", label: "用語集の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
