import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import PrintButton from "../../components/market-data/PrintButton";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "現場掲示用ポスター集｜停電時対応・節電・BCP";
const pageDescription = "従業員の現場掲示用ポスターを集約。停電30分行動・節電チェック・BCP連絡網など、印刷してすぐ使えるA4サイズ。";
const pageUrl = "https://simulator.eic-jp.org/posters";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription, alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, siteName: "法人電気料金ナビ", locale: "ja_JP", type: "website", images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd headline={pageTitle} description={pageDescription} url={pageUrl} datePublished="2026-04-18"
        breadcrumbItems={[{ name: "ホーム", url: "https://simulator.eic-jp.org/" }, { name: "ポスター集" }]} />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">現場ポスター集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">📋 現場掲示用ポスター集</h1>
          <p className="mt-4 text-sm leading-7">A4サイズで印刷して現場掲示できます。各ポスターは「印刷・PDF保存」ボタンから出力可。</p>
        </header>

        <section className="mt-6 break-after-page rounded-xl border-4 border-red-500 bg-red-50 p-8" style={{ minHeight: "600px" }}>
          <h2 className="text-center text-3xl font-bold text-red-700">🚨 停電時 30分行動マニュアル</h2>
          <div className="mt-6 space-y-4 text-lg">
            <div className="rounded-lg bg-white p-4"><strong>0-3分:</strong> 状況確認（停電範囲・人員安否）</div>
            <div className="rounded-lg bg-white p-4"><strong>3-10分:</strong> 重要設備の確認・停止／非常用電源起動</div>
            <div className="rounded-lg bg-white p-4"><strong>10-20分:</strong> 電力会社・テナント・関係者への連絡</div>
            <div className="rounded-lg bg-white p-4"><strong>20-30分:</strong> 復旧見込み確認・帰宅判断・記録開始</div>
          </div>
          <p className="mt-6 text-center text-sm">緊急連絡先: 電気主任技術者 ___-____-____ / 電力会社 ___-____-____</p>
          <p className="mt-2 text-center text-xs text-slate-500">作成: 一般社団法人エネルギー情報センター（CC BY 4.0）</p>
        </section>

        <section className="mt-6 break-after-page rounded-xl border-4 border-emerald-500 bg-emerald-50 p-8" style={{ minHeight: "600px" }}>
          <h2 className="text-center text-3xl font-bold text-emerald-700">💡 オフィス節電チェック</h2>
          <div className="mt-6 grid gap-3 text-lg md:grid-cols-2">
            {[
              "□ 不在エリアの照明は消灯", "□ 空調設定温度は夏28℃/冬20℃",
              "□ PC・モニターはスリープ移行", "□ プリンター・複合機は省エネモード",
              "□ 給湯ポットは保温30分タイマー", "□ 退社時はOAタップを電源OFF",
              "□ 不要会議室の照明・空調OFF", "□ 自動販売機の冷却タイマー設定",
              "□ 階段移動の励行（エレベーター省略）", "□ 終業後の警備モード切替確認",
            ].map((c) => (<div key={c} className="rounded bg-white p-3">{c}</div>))}
          </div>
          <p className="mt-6 text-center text-sm">月間効果目安: 1人あたり10-20kWh／全社で5-10%削減も可能</p>
          <p className="mt-2 text-center text-xs text-slate-500">作成: 一般社団法人エネルギー情報センター（CC BY 4.0）</p>
        </section>

        <section className="mt-6 break-after-page rounded-xl border-4 border-amber-500 bg-amber-50 p-8" style={{ minHeight: "600px" }}>
          <h2 className="text-center text-3xl font-bold text-amber-700">⚠ 需給ひっ迫警報 対応フロー</h2>
          <div className="mt-6 space-y-3 text-lg">
            <div className="rounded-lg bg-white p-4"><strong>① 警報受信時:</strong> 安否確認・操業継続可否判断</div>
            <div className="rounded-lg bg-white p-4"><strong>② 即時対応:</strong> 不要照明・空調・OA機器の電源OFF</div>
            <div className="rounded-lg bg-white p-4"><strong>③ 30分以内:</strong> 重要設備のみ稼働継続体制に切替</div>
            <div className="rounded-lg bg-white p-4"><strong>④ 1時間以内:</strong> テナント・取引先・本社へ連絡</div>
            <div className="rounded-lg bg-white p-4"><strong>⑤ 解除時:</strong> 復旧手順・記録・効果測定</div>
          </div>
          <p className="mt-6 text-center text-sm">本日の発令状況: 経産省・OCCTOホームページにて確認</p>
          <p className="mt-2 text-center text-xs text-slate-500">作成: 一般社団法人エネルギー情報センター（CC BY 4.0）</p>
        </section>

        <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">📥 印刷の手順</h2>
          <ol className="mt-3 list-decimal pl-5 text-sm leading-7">
            <li>このページの「印刷・PDF保存」ボタンをクリック</li>
            <li>プリンタ設定でA4縦・余白「狭め」を選択</li>
            <li>「ヘッダーとフッターを印刷」のチェックを外すと綺麗に出ます</li>
            <li>PDFとして保存後、社内共有ドライブに配布も可</li>
          </ol>
        </section>
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
