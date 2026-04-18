import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import BemsRoiCalculator from "../../components/market-data/BemsRoiCalculator";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "BEMS/FEMS/EMSの違い｜目的と導入選定の基準";
const pageDescription =
  "エネルギーマネジメントシステムの種類（BEMS・FEMS・HEMS・EMS）の違いと、法人の利用目的別に選ぶときの軸を整理します。";
const pageUrl = "https://simulator.eic-jp.org/bems-fems-ems-overview";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["energy-dx"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "BEMS", "エネルギーマネジメント"],
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
        datePublished="2026-04-17"
        faq={FAQ_ITEMS}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "エネルギーマネジメント・DX", url: "https://simulator.eic-jp.org/articles/energy-dx" },
          { name: "BEMS/FEMS/EMSの違い" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-dx" className="underline-offset-2 hover:underline">エネルギーマネジメント・DX</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">BEMS/FEMS/EMSの違い</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">BEMS/FEMS/EMSの違い｜目的と導入選定の基準</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">エネルギーマネジメントシステムの種類（BEMS・FEMS・HEMS・EMS）の違いと、法人の利用目的別に選ぶときの軸を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">エネマネシステムの分類</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">エネルギーマネジメントシステム（EMS）は、対象施設により名称が変わります。オフィスビル向けはBEMS（Building EMS）、工場向けはFEMS（Factory EMS）、家庭向けがHEMS、統合的にEMS全般を指すこともあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">いずれも、電力・ガス・蒸気・水の使用データを集め、見える化し、制御する基本構造は共通です。違いは対象設備の種類と、制御で重視する指標です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BEMS（ビルエネマネ）の特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">BEMSは照明・空調・換気・給湯・コンセント系を中心に制御します。オフィスビルでは空調が電力消費の30〜50%を占めるため、空調の最適化が主な削減ポイントです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">導入費用は中規模ビルで数百万〜数千万円、補助金適用で半減するケースもあります。投資回収は5〜10年が目安です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">FEMS（工場エネマネ）の特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">FEMSは生産ラインの動力負荷、受変電設備、コンプレッサー、冷却水ポンプなどを対象にします。生産計画と連動するピーク制御が可能で、契約電力の引き下げやデマンドピーク抑制に直結します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ただし生産優先との両立が難しく、省エネ専任担当の配置が成功の鍵です。</p>
          </section>
        </section>

        <BemsRoiCalculator />

        <section className="mt-6 space-y-6">

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務でよくある落とし穴</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>検討段階で複数社の見積・提案を比較せず、初回提示を採用してしまうケース</li>
              <li>会計・税務処理の事前確認不足による仕訳修正の発生</li>
              <li>契約条項（解約・自動更新・違約金）の確認漏れによる後続トラブル</li>
              <li>関連部門（経理・法務・施設・経営）への早期共有不足</li>
              <li>データ更新頻度の低さ（年1回以下）による効果測定の困難化</li>
            </ul>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務チェックリスト</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li>□ 現状コスト・排出量・契約条件の棚卸しが完了している</li>
              <li>□ 複数の選択肢（3案以上）を比較検討している</li>
              <li>□ 投資回収期間・TCO・ROIを定量評価している</li>
              <li>□ 会計・税務・法務面の影響を確認済みである</li>
              <li>□ 関連部門への情報共有・合意形成ができている</li>
              <li>□ 効果測定のKPI・計測方法を定義している</li>
              <li>□ 万一の撤退・変更時の対応策を用意している</li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">出典・参考情報</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>経済産業省 資源エネルギー庁 公表資料</li>
              <li>電力・ガス取引監視等委員会 監視報告</li>
              <li>環境省 温室効果ガス排出量算定・報告・公表制度</li>
              <li>電力広域的運営推進機関（OCCTO）需給・供給力データ</li>
              <li>日本卸電力取引所（JEPX）取引データ</li>
              <li>一般社団法人エネルギー情報センター 独自調査</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">※ 各数値・制度は公表時点の情報。最新情報は各機関公式サイトをご確認ください。</p>
          </section>
        </section>

        <MarketDataFaq items={FAQ_ITEMS} />

        <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-04-18" />


        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX", description: "このカテゴリの記事一覧を見る" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算する" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="このテーマの理解を深めたら、シミュレーターで自社の電気料金リスクを確認しましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/energy-dx", label: "エネルギーマネジメント・DXの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
