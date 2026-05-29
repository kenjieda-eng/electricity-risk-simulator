import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { INDUSTRY_CATEGORY_TOP, getIndustryMiddleCategories } from "../../../lib/articleIndustryCategories";
import { BreadcrumbJsonLd } from "../../../components/seo/JsonLd";

const canonicalPath = "https://simulator.eic-jp.org/articles/by-industry";

export const metadata: Metadata = {
  title: INDUSTRY_CATEGORY_TOP.metadataTitle,
  description: INDUSTRY_CATEGORY_TOP.metadataDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: INDUSTRY_CATEGORY_TOP.metadataTitle,
    description: INDUSTRY_CATEGORY_TOP.metadataDescription,
    url: canonicalPath,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: INDUSTRY_CATEGORY_TOP.metadataTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: INDUSTRY_CATEGORY_TOP.metadataTitle,
    description: INDUSTRY_CATEGORY_TOP.metadataDescription,
    images: ["/twitter-default.png"],
  },
};

export default function ArticlesByIndustryPage() {
  const middleCategories = getIndustryMiddleCategories();

  return (
    <>
    <BreadcrumbJsonLd
      items={[
        { name: "ホーム", url: "https://simulator.eic-jp.org/" },
        { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
        { name: "業種別の見直しポイント集" },
      ]}
    />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">
          ホーム
        </Link>
        <span className="px-2">›</span>
        <Link href="/articles" className="underline-offset-2 hover:underline">
          解説ページ一覧
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">{INDUSTRY_CATEGORY_TOP.pageTitle}</span>
      </nav>

      <header className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <Image src="/icons/articles/factory-building.svg" alt="業種別カテゴリのアイコン" width={36} height={36} />
          <div>
            <p className="text-sm font-semibold text-slate-500">カテゴリ 9</p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">{INDUSTRY_CATEGORY_TOP.pageTitle}</h1>
          </div>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{INDUSTRY_CATEGORY_TOP.lead}</p>
      </header>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">このカテゴリで分かること</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {INDUSTRY_CATEGORY_TOP.learnPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8" aria-labelledby="industry-group-heading">
        <div className="flex items-center gap-3">
          <Image src="/icons/articles/network-procurement.svg" alt="分類一覧のアイコン" width={32} height={32} />
          <h2 id="industry-group-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
            業種分類から探す
          </h2>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {middleCategories.map((category, index) => (
            <article key={category.slug} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <Image src="/icons/articles/factory-building.svg" alt="" width={32} height={32} aria-hidden />
                <p className="text-xs font-semibold tracking-wide text-slate-500">分類 {index + 1}</p>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{category.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-700">{category.shortDescription}</p>
              <p className="mt-2 text-sm text-slate-600">対象業種: {category.industries.length}業種</p>
              <Link
                href={`/articles/by-industry/${category.slug}`}
                className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
              >
                分類を見る
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* B-47: 主要詳細業種ページ（被リンク強化） */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">主要 9 業種の詳細解説ページ</h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          各分類の中で頻繁に検索される代表的な業種について、特化した解説記事を用意しています。
        </p>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2 xl:grid-cols-3">
          <li><Link href="/articles/by-industry/commercial/apparel-zakka" className="text-sky-700 underline-offset-2 hover:underline">アパレル・雑貨店舗</Link></li>
          <li><Link href="/articles/by-industry/commercial/restaurant-izakaya" className="text-sky-700 underline-offset-2 hover:underline">レストラン・居酒屋</Link></li>
          <li><Link href="/articles/by-industry/hotel-leisure/cinema-theater" className="text-sky-700 underline-offset-2 hover:underline">映画館・劇場</Link></li>
          <li><Link href="/articles/by-industry/it-technology/hyperscale-data-center" className="text-sky-700 underline-offset-2 hover:underline">ハイパースケール DC</Link></li>
          <li><Link href="/articles/by-industry/logistics-infrastructure/water-infrastructure" className="text-sky-700 underline-offset-2 hover:underline">水道インフラ</Link></li>
          <li><Link href="/articles/by-industry/manufacturing/food-beverage-factory" className="text-sky-700 underline-offset-2 hover:underline">食品・飲料工場</Link></li>
          <li><Link href="/articles/by-industry/medical-welfare/small-hospital-under-200" className="text-sky-700 underline-offset-2 hover:underline">200 床未満病院</Link></li>
          <li><Link href="/articles/by-industry/office-public/office-small-tenant" className="text-sky-700 underline-offset-2 hover:underline">オフィス（小規模・テナント）</Link></li>
          <li><Link href="/articles/by-industry/office-public/public-hall-cultural-facility" className="text-sky-700 underline-offset-2 hover:underline">公共ホール・文化施設</Link></li>
        </ul>
      </section>

      {/* B-58f: 業種別100+達成 新規追加18業種ハイライト */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">最近追加した業種別解説（2026年5月・サービス/ニッチ業種）</h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          製造業細分（B-58e）に続き、サービス・ニッチ業種18件を新規追加しました。業種別記事は101件・カテゴリ網羅性国内最高水準です。
        </p>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2 xl:grid-cols-3">
          <li><Link href="/hair-salon-barber-electricity-cost-review" className="text-sky-700 underline-offset-2 hover:underline">理容室・美容室の電気料金見直し</Link></li>
          <li><Link href="/dry-cleaning-electricity-cost-review" className="text-sky-700 underline-offset-2 hover:underline">クリーニング店の電気料金見直し</Link></li>
          <li><Link href="/coin-laundry-electricity-cost-review" className="text-sky-700 underline-offset-2 hover:underline">コインランドリーの電気料金見直し</Link></li>
          <li><Link href="/gas-station-electricity-cost-review" className="text-sky-700 underline-offset-2 hover:underline">ガソリンスタンドの電気料金見直し</Link></li>
          <li><Link href="/aquarium-zoo-electricity-cost-review" className="text-sky-700 underline-offset-2 hover:underline">水族館・動物園の電気料金見直し</Link></li>
          <li><Link href="/call-center-bpo-electricity-cost-review" className="text-sky-700 underline-offset-2 hover:underline">コールセンター・BPOの電気料金見直し</Link></li>
          <li><Link href="/dispensing-pharmacy-electricity-cost-review" className="text-sky-700 underline-offset-2 hover:underline">調剤薬局の電気料金見直し</Link></li>
          <li><Link href="/central-kitchen-catering-electricity-cost-review" className="text-sky-700 underline-offset-2 hover:underline">給食センター・セントラルキッチンの電気料金見直し</Link></li>
        </ul>
        <p className="mt-3 text-xs leading-6 text-slate-600">
          他10件: ネイル/結婚式場/葬儀場/自動車整備/カーディーラー/カラオケ/撮影スタジオ/動物病院/ネットカフェ/駐車場施設は{" "}
          <Link href="/articles/industry-guide" className="text-sky-700 underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
          {" "}から全件確認できます。
        </p>
      </section>

      {/* 索引改善#4: 業種×地域クロス・業種別補助金戦略への導線（2026年5月新設カテゴリ） */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">業種×地域クロス・業種別の補助金活用戦略（2026年5月新設）</h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          業種別の見直しに加えて、特定地域に集積する業種固有の電力事情（業種×地域クロス）と、業種別の補助金活用戦略を新設しました。自社の業種・立地・投資計画に近いガイドから確認できます。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-900">業種×地域クロス（地域集積×業種特化）</p>
            <ul className="mt-2 grid gap-2 text-sm">
              <li><Link href="/aichi-automotive-electricity-cost" className="text-sky-700 underline-offset-2 hover:underline">愛知県の自動車・輸送機器工場の電気料金</Link></li>
              <li><Link href="/hiroshima-automotive-electricity-cost" className="text-sky-700 underline-offset-2 hover:underline">広島県の自動車・造船業の電気料金</Link></li>
              <li><Link href="/hokkaido-food-processing-electricity-cost" className="text-sky-700 underline-offset-2 hover:underline">北海道の食品加工業の電気料金</Link></li>
              <li><Link href="/niigata-food-electricity-cost" className="text-sky-700 underline-offset-2 hover:underline">新潟県の食品（米菓・清酒）の電気料金</Link></li>
              <li><Link href="/okinawa-hotel-electricity-cost" className="text-sky-700 underline-offset-2 hover:underline">沖縄県のホテル・宿泊業の電気料金</Link></li>
              <li><Link href="/fukuoka-retail-commerce-electricity-cost" className="text-sky-700 underline-offset-2 hover:underline">福岡県の商業・小売業の電気料金</Link></li>
              <li><Link href="/shizuoka-manufacturing-electricity-cost" className="text-sky-700 underline-offset-2 hover:underline">静岡県の製造業の電気料金</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">業種別の補助金活用戦略</p>
            <ul className="mt-2 grid gap-2 text-sm">
              <li><Link href="/subsidy-manufacturing-strategy" className="text-sky-700 underline-offset-2 hover:underline">製造業の補助金活用戦略</Link></li>
              <li><Link href="/subsidy-logistics-strategy" className="text-sky-700 underline-offset-2 hover:underline">物流業の補助金活用戦略</Link></li>
              <li><Link href="/subsidy-retail-commerce-strategy" className="text-sky-700 underline-offset-2 hover:underline">小売・商業の補助金活用戦略</Link></li>
              <li><Link href="/subsidy-hotel-leisure-strategy" className="text-sky-700 underline-offset-2 hover:underline">ホテル・宿泊業の補助金活用戦略</Link></li>
              <li><Link href="/subsidy-medical-welfare-strategy" className="text-sky-700 underline-offset-2 hover:underline">医療・福祉の補助金活用戦略</Link></li>
              <li><Link href="/subsidy-datacenter-it-strategy" className="text-sky-700 underline-offset-2 hover:underline">データセンター・IT業の補助金活用戦略</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* インデックス促進: 強い文脈で接続するトピック */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">業種を越えて確認したい関連トピック</h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">業種別の見直しに入る前に、料金の構造要因も並行で確認すると判断材料が揃います。</p>
        <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <li><Link href="/renewable-energy-surcharge-2026" className="text-sky-700 underline-offset-2 hover:underline">再エネ賦課金 2026年度単価と法人負担</Link></li>
          <li><Link href="/capacity-contribution-explained" className="text-sky-700 underline-offset-2 hover:underline">容量拠出金の仕組み（2026年度5,226円/kW）</Link></li>
          <li><Link href="/area-price-spread" className="text-sky-700 underline-offset-2 hover:underline">エリア別電力単価スプレッドの構造</Link></li>
          <li><Link href="/factory-electricity-cost-reduction" className="text-sky-700 underline-offset-2 hover:underline">工場の電気代削減 5施策（製造業向け）</Link></li>
          <li><Link href="/business-electricity-price-trend-10-years" className="text-sky-700 underline-offset-2 hover:underline">法人向け電気料金の10年推移</Link></li>
          <li><Link href="/business-electricity-retrospective" className="text-sky-700 underline-offset-2 hover:underline">法人電気料金 月次振り返り（ハブ）</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">どこから読むとよいか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{INDUSTRY_CATEGORY_TOP.readingGuide}</p>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-sky-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">次に確認したいページ</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          業種ごとの見方を整理したうえで、固定プランと市場連動プランの違いを確認すると、比較検討の軸を合わせやすくなります。
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={INDUSTRY_CATEGORY_TOP.footerLink.href}
            className="inline-flex items-center justify-center rounded-md border border-sky-300 bg-white px-4 py-2.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
          >
            {INDUSTRY_CATEGORY_TOP.footerLink.label}
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            解説ページ一覧に戻る
          </Link>
        </div>
      </section>

      {/* NEXT STEP CTA */}
      <section className="mt-8 rounded-xl border-2 border-sky-300 bg-gradient-to-br from-sky-50 to-white p-6">
        <div className="flex items-start gap-3">
          <span className="hidden shrink-0 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white sm:inline-flex">
            NEXT STEP
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-900">
              業種の特性を踏まえた見直しを、数値から始める
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別の傾向を押さえたら、次は自社の電気代をシミュレーターで数値化しましょう。業種特性を踏まえた個別の提案が必要なときや、社内説明の材料づくりに迷ったときは、一般社団法人エネルギー情報センターまでお気軽にご相談ください。中立的な立場で伴走いたします。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 sm:text-base"
              >
                シミュレーターで現状診断する
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-amber-400 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-100 sm:text-base"
              >
                業種別の相談をする
              </Link>
              <Link
                href="/articles/industry-guide"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:text-base"
              >
                業種別の見直しポイント集
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
