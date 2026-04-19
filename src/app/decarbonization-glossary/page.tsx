import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "脱炭素・GX用語集｜カーボンプライシング・SBT・TCFD・ISSB";
const pageDescription =
  "脱炭素・GX関連の制度・指標・国際基準を網羅的に整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/decarbonization-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力用語", "電気代用語", "用語集", "脱炭素用語", "国際エネルギー", "電力制度用語"],
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
    images: [{ url: "/api/og/glossary", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/glossary"],
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
          { name: "脱炭素・GX用語集" },
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
          <span className="text-slate-800">脱炭素・GX用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">脱炭素・GX用語集｜カーボンプライシング・SBT・TCFD・ISSB</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">脱炭素の議論には多数の制度・国際基準が登場します。GX-ETS・カーボンプライシング・各種開示基準まで、頻出用語を体系的に整理しました。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">カーボンプライシング</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">カーボンプライシング</dt><dd className="mt-1">CO2排出に価格をつけて経済的に削減を促す手法。炭素税と排出量取引が代表。</dd></div>
              <div><dt className="font-semibold text-slate-900">炭素税</dt><dd className="mt-1">CO2排出量1トンあたり課税する仕組み。</dd></div>
              <div><dt className="font-semibold text-slate-900">排出量取引制度（ETS）</dt><dd className="mt-1">排出枠を取引可能にしたCap & Trade型の制度。</dd></div>
              <div><dt className="font-semibold text-slate-900">GX-ETS</dt><dd className="mt-1">日本版排出量取引制度。2023年試行運用開始、2026年本格稼働予定。</dd></div>
              <div><dt className="font-semibold text-slate-900">化石燃料賦課金</dt><dd className="mt-1">化石燃料の輸入・採取に課される賦課金。日本では2028年導入予定。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">削減目標の枠組み</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">カーボンニュートラル</dt><dd className="mt-1">排出量と吸収量を均衡させた状態。</dd></div>
              <div><dt className="font-semibold text-slate-900">ネットゼロ</dt><dd className="mt-1">実質ゼロ排出量。残存排出は除去技術等で相殺。</dd></div>
              <div><dt className="font-semibold text-slate-900">Carbon Negative</dt><dd className="mt-1">排出量より除去量が多い状態。</dd></div>
              <div><dt className="font-semibold text-slate-900">SBT（Science Based Targets）</dt><dd className="mt-1">1.5℃目標と整合する削減目標認定制度。</dd></div>
              <div><dt className="font-semibold text-slate-900">Net-Zero Standard</dt><dd className="mt-1">SBTiが定めるネットゼロ認定基準。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">情報開示の基準</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">TCFD</dt><dd className="mt-1">気候関連財務情報開示タスクフォース。気候リスクの財務影響開示推奨。</dd></div>
              <div><dt className="font-semibold text-slate-900">ISSB（IFRS Sustainability Standards Board）</dt><dd className="mt-1">国際サステナビリティ基準審議会。気候関連開示基準を策定。</dd></div>
              <div><dt className="font-semibold text-slate-900">CSRD（Corporate Sustainability Reporting Directive）</dt><dd className="mt-1">EU企業サステナビリティ報告指令。</dd></div>
              <div><dt className="font-semibold text-slate-900">CDP</dt><dd className="mt-1">気候変動・森林・水に関する企業開示を評価する国際NGO。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">排出量算定</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">Scope1</dt><dd className="mt-1">直接排出（自社の燃料燃焼など）。</dd></div>
              <div><dt className="font-semibold text-slate-900">Scope2</dt><dd className="mt-1">間接排出（購入電力・熱由来）。</dd></div>
              <div><dt className="font-semibold text-slate-900">Scope3</dt><dd className="mt-1">その他間接排出（サプライチェーン全体）。</dd></div>
              <div><dt className="font-semibold text-slate-900">GHGプロトコル</dt><dd className="mt-1">国際標準の温室効果ガス算定・報告ルール。</dd></div>
              <div><dt className="font-semibold text-slate-900">FLAG Guidance</dt><dd className="mt-1">森林・土地利用・農業セクター向けSBTガイダンス。</dd></div>
            </dl>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/gx/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 GX推進</a></li>
            <li><a href="https://sciencebasedtargets.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">Science Based Targets initiative</a></li>
            <li><a href="https://www.cdp.net/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CDP</a></li>
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
