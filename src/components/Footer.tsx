import Link from "next/link";
import { SITE_NAME } from "../lib/siteConfig";

const siteTitle = SITE_NAME;

const siteDescription =
  "法人・企業・自治体向けに、電気料金の上昇リスク診断、契約メニュー比較、料金プラン見直し、業種別の対策、月次動向の振り返りまで、実務で使える情報を公開しています。運営は一般社団法人エネルギー情報センターです。";

// --- 主要ページ ---
const primaryPageLinks = [
  { href: "/", label: "ホーム" },
  { href: "/simulate", label: "電気料金上昇リスクを診断する" },
  { href: "/how-to", label: "シミュレーターの使い方" },
  { href: "/compare", label: "料金メニュー比較・診断" },
  { href: "/benchmark", label: "業種×規模 ベンチマークツール" },
  { href: "/journey", label: "一気通貫ジャーニー（読む→行動）" },
  { href: "/concierge", label: "AI コンシェルジュ（横断検索）" },
  { href: "/knowledge-graph", label: "ナレッジグラフ" },
  { href: "/downloads", label: "ダウンロード素材" },
  { href: "/data-freshness", label: "データ鮮度ダッシュボード" },
  { href: "/articles", label: "解説ページ一覧" },
  { href: "/business-electricity-retrospective", label: "法人電気料金振り返り" },
  { href: "/special/emergency-scenario-analysis", label: "有事シナリオ分析 特集" },
] as const;

// --- 解説カテゴリ：仕組み・基礎系 ---
const categoryBasicsLinks = [
  { href: "/articles/basic", label: "基礎から知る" },
  { href: "/articles/price-increase", label: "料金が上がる理由を知る" },
  { href: "/articles/price-trends", label: "電気料金の推移と高止まり" },
  { href: "/articles/plan-types", label: "契約メニューの違いを知る" },
  { href: "/articles/power-procurement", label: "電力調達の仕組みを知る" },
  { href: "/articles/last-resort-supply", label: "最終保障供給を知る" },
  { href: "/articles/risk-scenarios", label: "リスクシナリオ別に知る" },
  { href: "/articles/review-points", label: "見直しポイントを知る" },
] as const;

// --- 解説カテゴリ：実務・属性別 ---
const categoryPracticeLinks = [
  { href: "/articles/by-industry", label: "業種別に知る" },
  { href: "/articles/industry-guide", label: "業種別の見直しポイント集" },
  { href: "/articles/energy-equipment", label: "蓄電池・太陽光・DRを知る" },
  { href: "/articles/internal-explanation", label: "社内説明・稟議を知る" },
  { href: "/articles/diagnostic-tools", label: "診断・チェックツール" },
  { href: "/articles/case-studies", label: "事例・削減実績を知る" },
  { href: "/articles/emergency-response", label: "緊急対応・トラブル解決" },
  { href: "/articles/municipality", label: "自治体・公共向け" },
  { href: "/articles/benchmarks", label: "相場・削減効果を知る" },
  { href: "/articles/subsidies", label: "補助金・助成金を知る" },
  { href: "/articles/for-executives", label: "経営層・CFO向け" },
  { href: "/articles/by-region", label: "地域別電気料金事情" },
  { href: "/articles/sme-guide", label: "中小企業・小規模事業者向け" },
  { href: "/articles/accounting-tax", label: "電気代の経理・税務" },
  { href: "/articles/contract-legal", label: "契約書・約款の読み方" },
  { href: "/articles/ma-organizational-change", label: "M&A・組織再編時の電力契約" },
] as const;

// --- 解説カテゴリ：新領域・特集 ---
const categoryAdvancedLinks = [
  { href: "/articles/market-data", label: "データで見る電力市場" },
  { href: "/articles/decarbonization", label: "脱炭素・GX対応" },
  { href: "/articles/corporate-ppa", label: "コーポレートPPA" },
  { href: "/articles/energy-dx", label: "エネルギーマネジメント・DX" },
  { href: "/articles/energy-bcp", label: "電力BCP・災害対策" },
  { href: "/articles/ev-charging", label: "EV・充電インフラ" },
  { href: "/articles/datacenter-ai-demand", label: "データセンター・AI需要" },
  { href: "/articles/global-energy", label: "海外拠点・グローバル" },
  { href: "/articles/regulation-timeline", label: "制度改正タイムライン" },
  { href: "/articles/glossary", label: "用語集" },
  { href: "/articles/faq", label: "FAQ集" },
] as const;

// --- よく読まれる基礎記事 ---
const popularBasicLinks = [
  { href: "/business-electricity-bill-breakdown", label: "法人向け電気料金の内訳とは" },
  { href: "/contract-demand-what-is-it", label: "契約電力とは" },
  { href: "/demand-value-guide", label: "デマンドとは" },
  { href: "/fuel-cost-adjustment", label: "燃料費調整額とは" },
  { href: "/renewable-energy-surcharge", label: "再エネ賦課金とは" },
  { href: "/capacity-contribution-explained", label: "容量拠出金とは" },
  { href: "/market-linked-plan", label: "市場連動プランとは" },
  { href: "/fixed-price-plan", label: "固定プランとは" },
  { href: "/market-linked-vs-fixed", label: "市場連動 vs 固定プラン比較" },
] as const;

// --- 見直し実務系 ---
const reviewPracticeLinks = [
  { href: "/how-to-start-electricity-contract-review", label: "電力契約の見直しはどこから始めるか" },
  { href: "/5-minimum-checkpoints-for-electricity-contract-review", label: "見直し前に確認したい5つのチェック項目" },
  { href: "/when-to-review-electricity-contract", label: "見直しのタイミングはいつか" },
  { href: "/how-to-compare-electricity-suppliers", label: "電力会社の比較方法" },
  { href: "/compare-business-electricity-estimates", label: "見積比較のやり方" },
  { href: "/how-to-explain-electricity-cost-review-internally", label: "社内説明の進め方" },
] as const;

// --- 振り返り・データ ---
const retrospectiveDataLinks = [
  { href: "/business-electricity-retrospective/2026-02", label: "2026年2月の電気料金振り返り" },
  { href: "/business-electricity-retrospective/2026-01", label: "2026年1月の電気料金振り返り" },
  { href: "/business-electricity-retrospective/archive", label: "年次アーカイブ一覧" },
  { href: "/business-electricity-retrospective/special-high-voltage-2019-2025", label: "特別高圧 2019〜2025年推移" },
  { href: "/business-electricity-retrospective/high-voltage-2019-2025", label: "高圧 2019〜2025年推移" },
  { href: "/business-electricity-retrospective/low-voltage-power-2019-2025", label: "低圧電力 2019〜2025年推移" },
  { href: "/business-electricity-retrospective/low-voltage-lighting-2019-2025", label: "低圧電灯 2019〜2025年推移" },
  { href: "/business-electricity-price-trend-10-years", label: "法人向け電気料金の10年推移" },
  { href: "/electricity-price-trend-2019-2025", label: "2019〜2025年の電気料金推移" },
] as const;

// --- 資料・コンテンツ ---
const contentResourceLinks = [
  { href: "/data-visualizations", label: "データ可視化" },
  { href: "/infographics", label: "インフォグラフィック" },
  { href: "/posters", label: "BCPポスター" },
  { href: "/video-scripts", label: "動画台本" },
  { href: "/manga", label: "マンガで分かる" },
  { href: "/tags", label: "タグから探す" },
] as const;

// --- 特集記事 ---
const specialFeatureLinks = [
  { href: "/special/emergency-scenario-analysis", label: "法人電気代の3シナリオ比較" },
  { href: "/special/oil-scenario-analysis", label: "原油高・物流コストのシナリオ分析" },
  { href: "/special/gas-scenario-analysis", label: "法人ガス代のシナリオ分析" },
  { href: "/special/fx-double-effect-scenario-analysis", label: "円安×原油高のシナリオ分析" },
  { href: "/special/materials-packaging-scenario-analysis", label: "原材料・包装資材のシナリオ分析" },
  { href: "/special/food-procurement-scenario-analysis", label: "食料品仕入コストのシナリオ分析" },
] as const;

// --- 業種別サブカテゴリ（親リンクを先頭に） ---
const industrySubLinks = [
  { href: "/articles/by-industry", label: "業種別ハブ（すべて見る）" },
  { href: "/articles/by-industry/office-public", label: "業務・公共系" },
  { href: "/articles/by-industry/commercial", label: "商業系" },
  { href: "/articles/by-industry/hotel-leisure", label: "宿泊・レジャー系" },
  { href: "/articles/by-industry/medical-welfare", label: "医療・福祉系" },
  { href: "/articles/by-industry/manufacturing", label: "製造業" },
  { href: "/articles/by-industry/logistics-infrastructure", label: "物流・インフラ系" },
  { href: "/articles/by-industry/it-technology", label: "IT・テクノロジー系" },
  { href: "/articles/by-industry/agriculture-primary", label: "農業・一次産業系" },
] as const;

const blockHeadingClass = "text-sm font-semibold tracking-wide text-sky-950";
const subHeadingClass = "text-xs font-semibold uppercase tracking-wider text-sky-900/70";
const linkClass = "text-sm leading-snug text-sky-900/80 transition hover:text-sky-950 hover:underline";

export function Footer() {
  return (
    <footer
      data-public-footer="true"
      className="border-t-2 border-sky-500 bg-gradient-to-b from-sky-50/70 to-sky-100/50"
      aria-labelledby="site-footer-heading"
    >
      <h2 id="site-footer-heading" className="sr-only">
        サイトフッター
      </h2>
      <div className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* サイト概要 */}
        <section aria-labelledby="footer-site-overview" className="max-w-4xl">
          <h3 id="footer-site-overview" className="text-base font-bold leading-snug text-sky-950 sm:text-lg">
            {siteTitle}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-sky-900/80">{siteDescription}</p>
        </section>

        {/* メインリンクブロック（9ブロックを xl 5列で配置） */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6 2xl:gap-8">
          <nav aria-labelledby="footer-primary-pages">
            <h3 id="footer-primary-pages" className={blockHeadingClass}>
              主要ページ
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {primaryPageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-category-links">
            <h3 id="footer-category-links" className={blockHeadingClass}>
              解説カテゴリから探す
            </h3>
            <h4 className={`${subHeadingClass} mt-3 sm:mt-4`}>仕組み・基礎</h4>
            <ul className="mt-2 space-y-2 sm:space-y-2.5">
              {categoryBasicsLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className={`${subHeadingClass} mt-5`}>実務・属性別</h4>
            <ul className="mt-2 space-y-2 sm:space-y-2.5">
              {categoryPracticeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className={`${subHeadingClass} mt-5`}>新領域・特集</h4>
            <ul className="mt-2 space-y-2 sm:space-y-2.5">
              {categoryAdvancedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-popular-basic">
            <h3 id="footer-popular-basic" className={blockHeadingClass}>
              よく読まれる基礎記事
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {popularBasicLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-review-practice">
            <h3 id="footer-review-practice" className={blockHeadingClass}>
              契約見直しの実務
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {reviewPracticeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-retrospective-data">
            <h3 id="footer-retrospective-data" className={blockHeadingClass}>
              振り返り・推移データ
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {retrospectiveDataLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-special-feature">
            <h3 id="footer-special-feature" className={blockHeadingClass}>
              特集記事
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {specialFeatureLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-industry-sub">
            <h3 id="footer-industry-sub" className={blockHeadingClass}>
              業種別に見る
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {industrySubLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-content-resources">
            <h3 id="footer-content-resources" className={blockHeadingClass}>
              資料・コンテンツ
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {contentResourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-site-operation">
            <h3 id="footer-site-operation" className={blockHeadingClass}>
              サイト運営・情報
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              <li>
                <Link href="/about" className={linkClass}>
                  サイトについて
                </Link>
              </li>
              <li>
                <Link href="/about-this-site" className={linkClass}>
                  このサイトの思い
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  お問い合わせ・ご相談受付
                </Link>
              </li>
              <li>
                <Link href="/kenji-eda" className={linkClass}>
                  理事プロフィール（江田健二）
                </Link>
              </li>
              <li>
                <a
                  href="https://eic-jp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  運営：一般社団法人エネルギー情報センター
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* 関連サイト（エネルギー情報センター運営サイト群） */}
        <div className="mt-10 border-t border-sky-200 pt-6 sm:mt-12">
          <p className="text-xs font-semibold tracking-wide text-sky-900/80">
            一般社団法人エネルギー情報センター 運営サイト
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs">
            <a
              href="https://eic-jp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-900/80 transition hover:text-sky-950 hover:underline"
            >
              エネルギー情報センター（公式）
            </a>
            <a
              href="https://pps-net.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-900/80 transition hover:text-sky-950 hover:underline"
            >
              新電力ネット（pps-net.org）— 452社の電力会社データベース
            </a>
          </div>
        </div>

        {/* 下部の運営情報・著作権 */}
        <div className="mt-8 border-t border-sky-200 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a href="#page-top" className="text-sm text-sky-900/80 transition hover:text-sky-950 hover:underline">
              ページ上部へ戻る
            </a>
            <p className="text-xs leading-relaxed text-sky-900/70">
              法人向け電気料金の見直し・比較・リスク診断に関する情報サイト
            </p>
          </div>
          <p className="mt-3 text-xs text-sky-900/70">
            Copyright © 一般社団法人エネルギー情報センター All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
