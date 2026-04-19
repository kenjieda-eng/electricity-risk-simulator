import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "供給地点特定番号と契約変更時の扱い｜切替時の手続き論点";
const pageDescription =
  "供給地点特定番号の意味と、契約切替・引越時の手続きで注意すべきポイントを整理します。";
const pageUrl = "https://simulator.eic-jp.org/supply-point-identification-number";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金"],
  alternates: {
    canonical: pageUrl,
  },
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
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "供給地点特定番号と契約変更時の扱い" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/contract-legal" className="underline-offset-2 hover:underline">契約書・約款の読み方</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">供給地点特定番号と契約変更時の扱い</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">供給地点特定番号と契約変更時の扱い｜切替時の手続き論点</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号の意味と、契約切替・引越時の手続きで注意すべきポイントを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">供給地点特定番号とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号（SPIN：Supply Point Identification Number）は、電力供給の物理的な地点を一意に識別する22桁の番号です。一般送配電事業者が付与し、建物・メーター単位で設定されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約切替時には、この番号が新旧事業者間の情報引継ぎのキーとなります。需要家が番号を把握していないと、切替手続きが遅延する原因になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">番号の確認方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①電力会社からの請求書・契約書、②新電力からの見積書、③一般送配電事業者のWeb照会、④電力会社カスタマーサポート、で確認できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">複数拠点を持つ企業では、拠点別の番号リストを管理することが、切替手続きの効率化につながります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">切替時の手続きチェック</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①供給地点特定番号の照会・確認、②新電力との契約申込、③切替日の指定、④最終請求の確認、⑤移行後初回請求の検算、を流れで実施します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">引越し（拠点移転）時は、旧拠点の解約と新拠点の契約を並行実施。空白期間を避けるための「重複契約期間の設定」を事前に計画します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">拠点移転時のタイムライン例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【-60日】移転計画確定、新拠点の供給地点特定番号取得（一般送配電事業者に依頼）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【-45日】新電力との新規契約見積・比較。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【-30日】旧拠点の解約通知、新拠点の契約申込。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【-14日】最終確認、立会い日程調整。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【移転日】メーター確認、電力引継ぎ。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【+14日】移転後初回請求の検算、精算確認。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中〜大規模契約（高圧以上）では、手続きに2〜3ヶ月かかるケースもあるため、早期着手が重要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号の管理・照会は、各一般送配電事業者（例：東京電力パワーグリッド、関西電力送配電）のWebサイトで対応しています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">切替手続きの全体像は、資源エネルギー庁「電力小売全面自由化」ポータルで解説されています。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.occto.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力広域的運営推進機関（OCCTO）</a></li>
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/electricity-contract-main-clauses", title: "電力契約書の主要条項", description: "法人担当者向けの読み方" },
              { href: "/force-majeure-clause", title: "不可抗力条項の典型例", description: "災害・需給ひっ迫時の責任分担" },
              { href: "/auto-renewal-clause", title: "自動更新条項と更新拒絶", description: "通知期限管理と解除" },
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/accounting-tax", title: "電気代の経理・税務", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/contract-legal", label: "契約書・約款の読み方の他の記事を読む" },
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
