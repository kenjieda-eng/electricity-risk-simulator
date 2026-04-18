import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import GxEtsCostForecaster from "../../components/market-data/GxEtsCostForecaster";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "GX-ETS（排出量取引制度）が法人電気料金に与える影響｜2026年本格稼働の負担試算";
const pageDescription =
  "GX-ETSの本格稼働が電力会社と法人の電気料金に波及する仕組みを整理し、負担増の試算と備え方を解説します。";
const pageUrl = "https://simulator.eic-jp.org/gx-ets-impact-business-electricity";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["decarbonization"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "GX-ETS", "GX推進法"],
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
        faq={FAQ_ITEMS}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "脱炭素・GX対応", url: "https://simulator.eic-jp.org/articles/decarbonization" },
          { name: "GX-ETS（排出量取引制度）が法人電気料金に与える影響" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/decarbonization" className="underline-offset-2 hover:underline">脱炭素・GX対応</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">GX-ETS（排出量取引制度）が法人電気料金に与える影響</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">GX-ETS（排出量取引制度）が法人電気料金に与える影響｜2026年本格稼働の負担試算</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">GX-ETSの本格稼働が電力会社と法人の電気料金に波及する仕組みを整理し、負担増の試算と備え方を解説します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">GX-ETSとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">GX-ETS（グリーン・トランスフォーメーション排出量取引制度）は、日本版のCap & Trade型排出量取引制度で、GX推進法に基づき2023年から試行運用が始まりました。2026年度には本格稼働し、排出量が一定規模以上の企業を対象に、排出枠の割当と取引が義務化されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力会社は発電に伴うCO2排出量が巨大なため、制度開始当初から対象事業者となる見込みです。電力会社が取得する排出枠のコストは、最終的には電力料金に転嫁される構造が想定されています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気料金への波及経路</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">GX-ETSが電気料金に波及する経路は、①電力会社が排出枠不足分を市場から購入するコストが燃料費調整額または基本単価に転嫁される、②排出係数の高い火力発電の稼働が抑制され、再エネ・原子力の比重が上がることで調達コスト構造が変わる、の2つです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">IEAや経産省資料によれば、CO2排出量1トンあたり1万円前後のカーボンプライス転嫁が想定されており、kWhあたり0.5〜2円程度の電気料金上昇要因になる試算もあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人が備えるべきアクション</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①自社のScope2排出量を把握し、GX-ETS対象となる規模か確認、②電力会社別の排出係数と電気料金の比較、③再エネ電源への切替検討、④長期契約（PPA）による価格ヘッジ、の順で備えを進めます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特に製造業・物流業など電力多消費業種では、GX-ETS対応が中長期の競争力に直結するため、経営層を巻き込んだロードマップ策定が重要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務チェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 自社のCO2排出量（Scope1・Scope2）を直近3年分把握している</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 主要電力供給事業者の年間排出係数を把握している</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ GX-ETS対象となる「直接排出量10万t-CO2/年」閾値との距離を確認している</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 排出削減ロードマップ（2030年・2035年）の数値目標を社内で合意済み</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 再エネ調達手段（非化石証書・PPA・自家発電）のコスト試算を行っている</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">☑ 電力契約の長期化（3〜5年）による価格ヘッジを検討している</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">GX-ETSはGX推進法（2023年5月成立、7月施行）を根拠法令とし、GX推進機構が運用主体となっています。並行して、2028年の化石燃料賦課金・2033年の有償オークション導入が段階的に進められる予定です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">関連制度としては、GHGプロトコル（国際標準の排出量算定ルール）、SBT（科学的根拠に基づく削減目標）、TCFD（気候関連財務情報開示）が企業の対応上の基盤になります。これらと組み合わせて、社内体制を整えることが推奨されます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.meti.go.jp/policy/energy_environment/global_warming/gx/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 GX推進法・GX-ETS</a></li>
            <li><a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">IEA (国際エネルギー機関)</a></li>
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <GxEtsCostForecaster />

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
              { href: "/corporate-decarbonization-overview", title: "法人の脱炭素対応の全体像", description: "電力調達と情報開示の4段階を整理" },
              { href: "/re100-overview-for-business", title: "RE100とは", description: "参加要件と実務フローを解説" },
              { href: "/scope2-electricity-accounting", title: "Scope2算定と報告ガイド", description: "マーケット基準とロケーション基準" },
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/decarbonization", label: "脱炭素・GX対応の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
