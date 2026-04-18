import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getArticlesBySlugs, getCategoryBySlug, getSortedCategories } from "../../../lib/articles";
import { POWER_PROCUREMENT_SERIES } from "../../../lib/powerProcurementSeries";
import { CATEGORY_HUB_SPOTLIGHT } from "../../../lib/articleHubFeatured";
import type { ArticleCategorySlug } from "../../../data/articles";
import { CATEGORY_CTA } from "../../../lib/categoryCta";
import { BreadcrumbJsonLd } from "../../../components/seo/JsonLd";


type PageParams = {
  categorySlug: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

const defaultDescription = "法人向け電気料金の基礎知識をテーマ別に整理したカテゴリ一覧ページです。";

const categoryDescriptionOverrides: Record<string, string> = {
  basic:
    "法人向け電気料金の基本構造を解説。契約電力・デマンド・請求書の見方・見積書の読み方など、料金比較や見直し判断に必要な基礎知識をまとめています。",
  "price-increase":
    "法人の電気料金が上がる理由を構造的に解説。燃料費調整額・再エネ賦課金・市場価格調整額・LNG価格など、料金上昇の要因と請求書での確認方法を整理しています。",
  "price-trends":
    "法人向け電気料金の推移と高止まりの背景を解説。年度別・契約区分別の単価データや、今後の価格見通しに役立つ情報をグラフ付きで整理しています。",
  "plan-types":
    "法人向け電力契約メニューの違いを解説。市場連動型・固定価格型・再エネメニューなど、契約形態ごとの特徴とリスクを比較し、選び方の判断軸を整理しています。",
  "review-points":
    "法人の電気料金見直しポイントを実務目線で解説。見積比較・契約切替・更新タイミング・交渉のコツなど、担当者がすぐ使える手順をまとめています。",
  "last-resort-supply":
    "最終保障供給の仕組みと対処法を解説。適用条件・料金水準・通常契約への復帰手順など、法人が最終保障供給を回避・脱却するための実務知識を整理しています。",
  "risk-scenarios":
    "法人の電気料金に影響するリスクシナリオを解説。猛暑・厳冬・円安・燃料高騰・地政学リスクなど、想定すべきシナリオ別の影響と備え方を整理しています。",
  "power-procurement":
    "法人向け電気料金の背景にある、電力会社の仕入れ・調達構造を整理した解説カテゴリです。JEPX、相対契約、長期契約、先物、燃料調達、再エネ調達、非化石証書、分散調達とヘッジの考え方を順に確認できます。",
  "monthly-review":
    "法人向け電気料金の月次振り返りデータを掲載。契約区分別の単価推移・前月比・前年比を毎月更新し、料金動向の把握と社内報告に役立つ情報を提供しています。",
  "industry-guide":
    "業種別の電気料金見直しポイントを解説。工場・病院・ホテル・小売・倉庫など、業種ごとの電力使用特性に合わせた最適な見直し方法と削減のヒントを整理しています。",
  "energy-equipment":
    "蓄電池・太陽光発電・デマンドレスポンスなど、法人向け電力設備の導入効果と選び方を解説。設備投資による電気料金削減とBCP対策の両面から情報を整理しています。",
  "internal-explanation":
    "電気料金の見直しを社内で通すための説明資料・稟議書の作り方を解説。上司や経営層への説明ポイント、費用対効果の示し方、承認を得るコツをまとめています。",
  "diagnostic-tools":
    "法人の電気料金に関するセルフ診断ツール集。契約見直しの必要性・料金プラン適性・削減余地など、自社の状況を簡単にチェックできる診断コンテンツを掲載しています。",
  "for-executives":
    "経営者・経営層が押さえたい法人向け電気料金・電気代の判断ポイントを整理。予算管理、契約見直し、リスク対応、社内判断に役立つ解説記事を一覧でまとめています。",
  "emergency-response":
    "電力契約の緊急トラブル対応ガイド。新電力の撤退・契約打ち切り・供給停止リスクなど、法人が直面しうる緊急事態への対処法と事前の備え方を解説しています。",
  municipality:
    "自治体・公共施設向けの電力契約見直しガイド。入札制度・予算編成・公共調達の制約を踏まえた、自治体特有の電気料金削減方法と契約更新の進め方を解説しています。",
  benchmarks:
    "法人向け電気料金の相場・ベンチマークデータを掲載。業種別・契約区分別の単価水準や削減効果の目安を示し、自社の料金が適正かどうかの判断材料を提供しています。",
  subsidies:
    "法人が活用できる電力関連の補助金・助成金情報を整理。蓄電池・太陽光・省エネ設備の導入支援制度や申請のポイントなど、コスト削減に使える公的支援を解説しています。",
  "by-region":
    "エリア別の電力事情と料金傾向を解説。東京・関西・中部など電力会社管内ごとの料金水準・競争環境・地域特有の事情を整理し、エリアに応じた見直し判断を支援します。",
  "market-data":
    "JEPX（日本卸電力取引所）のスポット価格や市場データを解説。法人の電気料金に影響する市場価格の読み方・推移・季節変動パターンを整理しています。",
};

const categoryTitleOverrides: Record<string, string> = {
  basic: "電気料金の基礎知識｜法人向け料金の仕組みと見方",
  "price-increase": "電気料金が上がる理由｜法人向け値上げ要因の解説",
  "price-trends": "電気料金の推移と高止まり｜法人向け価格動向データ",
  "plan-types": "電力契約メニューの違い｜市場連動・固定価格の比較",
  "review-points": "電気料金の見直しポイント｜法人向け契約切替の実務",
  "last-resort-supply": "最終保障供給とは｜法人向け仕組みと脱却方法の解説",
  "risk-scenarios": "電気料金のリスクシナリオ｜猛暑・円安・燃料高騰の影響",
  "power-procurement": "電力調達の仕組み｜JEPX・相対契約・再エネ調達の解説",
  "monthly-review": "法人電気料金の月次振り返り｜契約区分別データ更新",
  "industry-guide": "業種別の電気料金見直し｜工場・病院・小売など業種別ガイド",
  "energy-equipment": "蓄電池・太陽光・設備導入｜法人向け電力設備の解説",
  "internal-explanation": "社内説明・稟議の通し方｜電気料金見直しの社内合意形成",
  "diagnostic-tools": "電気料金セルフ診断｜法人向け契約見直しチェックツール",
  "for-executives": "経営者向け 電気料金・電力契約の判断ポイント一覧｜法人向け解説",
  "emergency-response": "電力契約の緊急対応｜新電力撤退・供給停止トラブル解決",
  municipality: "自治体向け電力契約ガイド｜公共施設の電気料金見直し",
  benchmarks: "電気料金の相場・ベンチマーク｜法人向け単価水準と削減目安",
  subsidies: "電力関連の補助金・助成金｜法人向け設備導入支援制度まとめ",
  "by-region": "エリア別の電力事情｜地域ごとの料金傾向と見直しポイント",
  "market-data": "JEPX市場データ・電力卸価格｜法人向け市場価格の読み方",
};

export function generateStaticParams() {
  return getSortedCategories().map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {};
  }

  const title = categoryTitleOverrides[category.slug] ?? `${category.name}｜法人向け電気料金の基礎知識`;
  const description = categoryDescriptionOverrides[category.slug] ?? category.description ?? defaultDescription;
  const canonicalPath = `https://simulator.eic-jp.org/articles/${category.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
      locale: "ja_JP",
      type: "article",
      images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-default.png"],
    },
  };
}

export default async function ArticleCategoryPage({ params }: PageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.slug);
  const recommendedArticles = getArticlesBySlugs(category.recommendedReadingOrder);
  const procurementStageGroups =
    category.slug === "power-procurement"
      ? [
          { label: "初級", description: "全体像と市場の見方をつかむ入口", items: POWER_PROCUREMENT_SERIES.filter((item) => item.stage === "初級") },
          { label: "中級", description: "契約期間やヘッジ手段の違いを整理する中盤", items: POWER_PROCUREMENT_SERIES.filter((item) => item.stage === "中級") },
          { label: "応用", description: "再エネ価値とリスク管理まで広げる後半", items: POWER_PROCUREMENT_SERIES.filter((item) => item.stage === "応用") },
        ]
      : [];
  const procurementMapRows =
    category.slug === "power-procurement"
      ? [
          {
            method: "JEPX",
            role: "不足分や需給見込み差の調整",
            feature: "機動性が高い一方で、価格変動を受けやすい",
          },
          {
            method: "相対契約・長期契約",
            role: "ベース需要の安定確保",
            feature: "価格や数量の見通しを持ちやすい一方、柔軟性は下がりやすい",
          },
          {
            method: "先物",
            role: "将来価格の急変リスクへの備え",
            feature: "数量調整ではなく価格ヘッジの色合いが強い",
          },
          {
            method: "再エネ調達・非化石証書",
            role: "電源構成と環境価値の確保",
            feature: "物理電力と価値を分けて考える必要がある",
          },
        ]
      : [];

  const ppaComparisonRows =
    category.slug === "corporate-ppa"
      ? [
          {
            type: "オンサイトPPA",
            size: "数百kW〜数MW",
            price: "12〜18円/kWh",
            term: "15〜20年",
            note: "敷地内に設置、初期投資ゼロ、託送料不要",
          },
          {
            type: "オフサイトPPA",
            size: "数MW〜数十MW",
            price: "14〜22円/kWh",
            term: "15〜20年",
            note: "遠隔地から送電、規模の自由度大、託送料あり",
          },
          {
            type: "バーチャルPPA",
            size: "数MW〜",
            price: "10〜16円/kWh相当",
            term: "10〜15年",
            note: "物理調達と分離、環境価値のみ取得、会計処理複雑",
          },
          {
            type: "自家消費太陽光",
            size: "数百kW〜",
            price: "LCOE 8〜12円/kWh",
            term: "設備寿命20〜25年",
            note: "設備所有、減価償却対象、メンテナンス自社",
          },
        ]
      : [];

  const energyDxComparisonRows =
    category.slug === "energy-dx"
      ? [
          {
            system: "デマンド監視装置（単機能型）",
            cost: "10〜30万円",
            target: "中小工場・店舗",
            feature: "予測警報のみ、単一拠点",
          },
          {
            system: "クラウド連携型",
            cost: "50〜150万円＋月額1〜3万円",
            target: "複数拠点事業者",
            feature: "統合管理、API連携、AI需要予測",
          },
          {
            system: "BEMS（ビル向け）",
            cost: "数百万〜1,500万円",
            target: "オフィスビル・商業施設",
            feature: "空調・照明の自動制御、省エネ5〜15%",
          },
          {
            system: "FEMS（工場向け）",
            cost: "1,000万〜3,000万円",
            target: "中規模工場",
            feature: "生産連動・受変電統合制御、ピークカット効果大",
          },
          {
            system: "統合EMS＋AI最適化",
            cost: "数千万〜1億円",
            target: "大規模工場・複数拠点",
            feature: "AI需要予測、需給調整市場参加、複数拠点統合",
          },
        ]
      : [];

  const energyBcpComparisonRows =
    category.slug === "energy-bcp"
      ? [
          {
            source: "UPS（無停電電源装置）",
            duration: "数分〜1時間",
            cost: "数十万〜数百万円",
            note: "サーバ・通信機器の瞬断対策、長時間対応不可",
          },
          {
            source: "ディーゼル発電機",
            duration: "数時間〜数日",
            cost: "数百万〜数千万円",
            note: "燃料確保必要、排気・騒音考慮、最も普及",
          },
          {
            source: "ガス発電機",
            duration: "長時間可能",
            cost: "1,000万〜数千万円",
            note: "ガス供給維持時は燃料補給不要、コジェネ併用可",
          },
          {
            source: "リチウム蓄電池",
            duration: "数時間",
            cost: "500万〜5,000万円",
            note: "瞬断対策＋平常時ピークカット兼用でROI改善",
          },
          {
            source: "マイクログリッド",
            duration: "長時間・継続",
            cost: "数千万〜数億円",
            note: "自家発電＋蓄電池＋制御を統合、自立運転可",
          },
        ]
      : [];

  return (
    <>
    <BreadcrumbJsonLd
      items={[
        { name: "ホーム", url: "https://simulator.eic-jp.org/" },
        { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
        { name: category.name },
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
        <span className="text-slate-800">{category.name}</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-sm text-slate-600">カテゴリ {category.order}</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{category.name}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{category.intro}</p>
      </header>

      {(() => {
        const spotlight = CATEGORY_HUB_SPOTLIGHT[category.slug];
        if (!spotlight) return null;
        const spotlightArticles = getArticlesBySlugs(spotlight.slugs);
        return (
          <section className="mt-6 rounded-xl border border-sky-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">{spotlight.heading}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{spotlight.intro}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {spotlightArticles.map((article) => (
                <article key={article.slug} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-base font-semibold text-slate-900">
                    <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{article.description}</p>
                </article>
              ))}
            </div>
            {category.slug === "risk-scenarios" ? (
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/compare"
                  className="inline-flex rounded-md border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800 hover:bg-sky-100"
                >
                  料金メニューの比較・診断へ
                </Link>
                <Link
                  href="/articles"
                  className="inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  解説ページ一覧へ戻る
                </Link>
              </div>
            ) : null}
            {category.slug === "price-increase" ? (
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/business-electricity-retrospective"
                  className="inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  法人電気料金振り返りで年次動向を見る
                </Link>
              </div>
            ) : null}
          </section>
        );
      })()}

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">このカテゴリで分かること</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {category.learnPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">おすすめの読む順番</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {recommendedArticles.map((article) => (
            <li key={article.slug}>
              <Link href={`/${article.slug}`} className="text-sky-700 underline-offset-2 hover:underline">
                {article.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {category.slug === "power-procurement" ? (
        <>
          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">読み進め方の目安</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {procurementStageGroups.map((group) => (
                <section key={group.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{group.label}</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700">
                      {group.items.length}本
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{group.description}</p>
                  <ol className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {group.items.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/${item.slug}`} className="text-sky-700 underline-offset-2 hover:underline">
                          {item.order}. {item.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">仕入れ手段の全体マップ</h2>
            <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">仕入れ手段</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主な役割</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">押さえたい特徴</th>
                </tr>
              </thead>
              <tbody>
                {procurementMapRows.map((row) => (
                  <tr key={row.method} className="align-top">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.method}</th>
                    <td className="border border-slate-200 px-3 py-2">{row.role}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              まずは全体像とJEPX、その後に契約期間・ヘッジ・燃料・再エネ・価値管理へ進むと、仕入れ構造がつながって見えやすくなります。
            </p>
          </section>
        </>
      ) : null}

      {category.slug === "corporate-ppa" ? (
        <section className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">PPA・自家消費の調達手段比較</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">3形態のPPA契約と自家消費太陽光を、規模・価格・契約期間で横並び比較した早見表です。</p>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">調達手段</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">規模</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">単価目安</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">契約期間</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">特徴</th>
              </tr>
            </thead>
            <tbody>
              {ppaComparisonRows.map((row) => (
                <tr key={row.type} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.type}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.size}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.price}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.term}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs leading-6 text-slate-500">単価は2026年時点の目安。立地・規模・契約条件で変動します。契約前に税制・会計処理を税理士・会計士と確認することを推奨。</p>
        </section>
      ) : null}

      {category.slug === "energy-dx" ? (
        <section className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">エネマネシステム導入の比較</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">デマンド監視装置からBEMS/FEMS/統合EMSまで、導入規模と機能水準で選択肢を整理した早見表です。</p>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">システム</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">導入コスト</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">適用先</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">特徴</th>
              </tr>
            </thead>
            <tbody>
              {energyDxComparisonRows.map((row) => (
                <tr key={row.system} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.system}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.cost}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.target}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs leading-6 text-slate-500">コストは目安（補助金適用前）。省エネ補助金・GX補助金で初期投資を1/2〜2/3圧縮できるケースがあります。</p>
        </section>
      ) : null}

      {category.slug === "energy-bcp" ? (
        <section className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">非常用電源の比較早見表</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">UPS・非常用発電機・蓄電池・マイクログリッドを、稼働時間・コスト・特徴で横並び比較。</p>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">電源種別</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">稼働時間</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">導入コスト</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">特徴</th>
              </tr>
            </thead>
            <tbody>
              {energyBcpComparisonRows.map((row) => (
                <tr key={row.source} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.source}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.duration}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.cost}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs leading-6 text-slate-500">複数電源の組み合わせ（UPS＋発電機＋蓄電池）が実務上の標準。レジリエンス強化型蓄電池導入支援事業などの補助金活用を推奨。</p>
        </section>
      ) : null}

      <section className="mt-6" aria-labelledby="article-list-heading">
        <div className="flex items-end justify-between gap-4">
          <h2 id="article-list-heading" className="text-xl font-semibold text-slate-900 sm:text-2xl">
            記事一覧
          </h2>
          <p className="text-sm text-slate-600">{categoryArticles.length}件</p>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {categoryArticles.map((article) => (
            <article key={article.slug} className="rounded-xl border border-slate-200 bg-white p-5">
              {category.slug === "power-procurement" ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {POWER_PROCUREMENT_SERIES.find((item) => item.slug === article.slug)?.order ?? article.order}
                  </span>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    {POWER_PROCUREMENT_SERIES.find((item) => item.slug === article.slug)?.stage ?? "解説"}
                  </span>
                </div>
              ) : null}
              <h3 className="text-lg font-semibold text-slate-900">
                <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{article.description}</p>
              <Link
                href={`/${article.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
              >
                詳しく見る
              </Link>
            </article>
          ))}
        </div>
      </section>

      {category.slug === "power-procurement" ? (
        <section className="mt-8 rounded-xl border border-sky-300 bg-sky-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">あわせて読みたいカテゴリ</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            調達構造の理解は、料金上昇要因や契約メニュー、リスクシナリオの理解とつながります。次のカテゴリへ進むと、実務での比較や説明に使いやすくなります。
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/articles/price-increase" className="rounded-lg border border-sky-200 bg-white p-3 text-sm text-sky-700 hover:bg-sky-100">
              料金が上がる理由を知る
            </Link>
            <Link href="/articles/plan-types" className="rounded-lg border border-sky-200 bg-white p-3 text-sm text-sky-700 hover:bg-sky-100">
              契約メニューの違いを知る
            </Link>
            <Link href="/articles/risk-scenarios" className="rounded-lg border border-sky-200 bg-white p-3 text-sm text-sky-700 hover:bg-sky-100">
              リスクシナリオ別に知る
            </Link>
          </div>
        </section>
      ) : null}

      {(() => {
        const nextCategoryMap: Record<string, { slug: string; name: string; reason: string }[]> = {
          basic: [
            { slug: "price-increase", name: "料金が上がる理由を知る", reason: "基礎を理解したら、値上げの仕組みを確認しましょう" },
            { slug: "price-trends", name: "電気料金の推移と高止まり", reason: "実際の価格データで料金の変化を把握できます" },
          ],
          "price-increase": [
            { slug: "price-trends", name: "電気料金の推移と高止まり", reason: "値上げ要因を学んだ次は、実際の推移データで確認しましょう" },
            { slug: "plan-types", name: "契約メニューの違いを知る", reason: "値上がりリスクに応じた契約形態の違いを比較できます" },
          ],
          "price-trends": [
            { slug: "plan-types", name: "契約メニューの違いを知る", reason: "動向を踏まえて、自社に合う契約メニューを選びましょう" },
            { slug: "review-points", name: "見直しポイントを知る", reason: "価格動向を把握したら、具体的な見直し方法へ進みましょう" },
          ],
          "plan-types": [
            { slug: "review-points", name: "見直しポイントを知る", reason: "契約メニューを理解したら、実際の見直し手順を確認しましょう" },
            { slug: "power-procurement", name: "電力調達の仕組みを知る", reason: "メニューの背景にある電力調達の仕組みも押さえましょう" },
          ],
          "review-points": [
            { slug: "benchmarks", name: "相場・削減効果を知る", reason: "見直しを進める前に、削減の目安感をつかんでおきましょう" },
            { slug: "risk-scenarios", name: "リスクシナリオ別に知る", reason: "見直し後のリスクシナリオも想定しておくと安心です" },
          ],
          "last-resort-supply": [
            { slug: "emergency-response", name: "緊急対応・トラブル解決", reason: "最終保障供給の仕組みを知ったら、緊急時の対応手順も確認しましょう" },
            { slug: "review-points", name: "見直しポイントを知る", reason: "保障供給を脱するための契約見直し手順を確認しましょう" },
          ],
          "risk-scenarios": [
            { slug: "price-trends", name: "電気料金の推移と高止まり", reason: "リスクシナリオと合わせて、実際の価格推移データも参照しましょう" },
            { slug: "review-points", name: "見直しポイントを知る", reason: "リスクに備えるための具体的な見直し手順を確認しましょう" },
          ],
          "power-procurement": [
            { slug: "plan-types", name: "契約メニューの違いを知る", reason: "調達構造を理解したら、それを反映した契約メニューを比較しましょう" },
            { slug: "price-increase", name: "料金が上がる理由を知る", reason: "調達コストが料金に転嫁される仕組みと合わせて確認しましょう" },
          ],
          "industry-guide": [
            { slug: "review-points", name: "見直しポイントを知る", reason: "業種の特徴を踏まえた見直し手順を具体的に確認しましょう" },
            { slug: "benchmarks", name: "相場・削減効果を知る", reason: "業種別の削減相場感も把握しておきましょう" },
          ],
          "energy-equipment": [
            { slug: "subsidies", name: "補助金・助成金を知る", reason: "蓄電池・太陽光の導入では補助金・助成金も合わせて確認しましょう" },
            { slug: "review-points", name: "見直しポイントを知る", reason: "設備導入と並行して契約見直しも検討しましょう" },
          ],
          "internal-explanation": [
            { slug: "for-executives", name: "経営層・CFO向け", reason: "担当者向け資料の次は、経営層向けの説明ポイントを確認しましょう" },
            { slug: "review-points", name: "見直しポイントを知る", reason: "社内説明後すぐに実行できる見直し手順も押さえましょう" },
          ],
          municipality: [
            { slug: "subsidies", name: "補助金・助成金を知る", reason: "自治体・公共機関は活用できる補助金・助成金も多くあります" },
            { slug: "review-points", name: "見直しポイントを知る", reason: "入札・契約更新に向けた見直しの進め方を確認しましょう" },
          ],
          "case-studies": [
            { slug: "review-points", name: "見直しポイントを知る", reason: "他社事例を参考に、自社の見直し手順を組み立てましょう" },
            { slug: "benchmarks", name: "相場・削減効果を知る", reason: "削減実績と合わせて業界の相場感も把握しましょう" },
          ],
          "by-region": [
            { slug: "price-trends", name: "電気料金の推移と高止まり", reason: "地域別の状況と全国の価格推移を合わせて理解しましょう" },
            { slug: "plan-types", name: "契約メニューの違いを知る", reason: "地域別の料金事情を踏まえた契約メニュー選びを検討しましょう" },
          ],
          "market-data": [
            { slug: "risk-scenarios", name: "リスクシナリオ別に知る", reason: "市場データを踏まえたリスクシナリオを確認しましょう" },
            { slug: "price-trends", name: "電気料金の推移と高止まり", reason: "市場データと料金推移を組み合わせて全体像を把握しましょう" },
          ],
          "for-executives": [
            { slug: "internal-explanation", name: "社内説明・稟議を知る", reason: "経営判断の後は、社内への説明・稟議の通し方を確認しましょう" },
            { slug: "review-points", name: "見直しポイントを知る", reason: "経営層の承認を得たら、具体的な見直しの進め方へ移りましょう" },
          ],
          subsidies: [
            { slug: "energy-equipment", name: "蓄電池・太陽光・DRを知る", reason: "補助金を活用した設備導入の具体的な手順を確認しましょう" },
            { slug: "review-points", name: "見直しポイントを知る", reason: "補助金と合わせて契約見直しも同時に進めましょう" },
          ],
          benchmarks: [
            { slug: "review-points", name: "見直しポイントを知る", reason: "相場感を掴んだら、実際の見直し手順へ進みましょう" },
            { slug: "case-studies", name: "事例・削減実績を知る", reason: "相場データと合わせて他社の削減事例も参考にしましょう" },
          ],
          "emergency-response": [
            { slug: "last-resort-supply", name: "最終保障供給を知る", reason: "緊急対応と合わせて、最終保障供給の仕組みも確認しておきましょう" },
            { slug: "risk-scenarios", name: "リスクシナリオ別に知る", reason: "緊急事態に備えたリスクシナリオ別の対処法も押さえましょう" },
          ],
          "diagnostic-tools": [
            { slug: "review-points", name: "見直しポイントを知る", reason: "診断結果を踏まえて、具体的な見直し手順を確認しましょう" },
            { slug: "benchmarks", name: "相場・削減効果を知る", reason: "自社の状況を業界相場と比較してみましょう" },
          ],
          "monthly-review": [
            { slug: "price-trends", name: "電気料金の推移と高止まり", reason: "毎月の動向と合わせて、中長期の価格推移も確認しましょう" },
            { slug: "risk-scenarios", name: "リスクシナリオ別に知る", reason: "月次データから浮かび上がるリスクシナリオも想定しましょう" },
          ],
        };
        const nextCategories = nextCategoryMap[category.slug];
        if (!nextCategories || nextCategories.length === 0) return null;
        return (
          <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">次に読むとよいカテゴリ</h2>
            <div className={`mt-4 grid gap-3 ${nextCategories.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {nextCategories.map((next) => (
                <Link
                  key={next.slug}
                  href={`/articles/${next.slug}`}
                  className="rounded-lg border border-slate-200 bg-white p-4 transition hover:bg-sky-50"
                >
                  <p className="text-sm font-semibold text-slate-900">{next.name}</p>
                  <p className="mt-1 text-xs text-slate-600">{next.reason}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}

      {(() => {
        const cta = CATEGORY_CTA[category.slug as ArticleCategorySlug];
        if (!cta) return null;
        return (
          <section className="mt-8 rounded-xl border-2 border-sky-300 bg-gradient-to-br from-sky-50 to-white p-6">
            <div className="flex items-start gap-3">
              <span className="hidden shrink-0 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white sm:inline-flex">
                NEXT STEP
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-900">{cta.heading}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{cta.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {cta.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={
                        link.primary
                          ? "inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 sm:text-base"
                          : link.href === "/contact"
                            ? "inline-flex items-center justify-center rounded-lg border-2 border-amber-400 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-100 sm:text-base"
                            : "inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:text-base"
                      }
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">戻り導線と関連ページ</h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border-2 border-sky-500 bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            シミュレーターで診断する
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-amber-400 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-900 transition hover:bg-amber-100"
          >
            お問い合わせ・ご相談受付
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            解説ページ一覧に戻る
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            料金メニューの比較を見る
          </Link>
          <Link
            href="/how-to"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            シミュレーターの使い方を見る
          </Link>
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900">他のカテゴリも確認する</h2>
        <div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
          <Link href="/articles/basic" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">基礎から知る</span>
            <span className="ml-1 text-slate-600">— 内訳・請求書・見積書の基本</span>
          </Link>
          <Link href="/articles/price-increase" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">料金が上がる理由</span>
            <span className="ml-1 text-slate-600">— 燃調費・賦課金・制度要因</span>
          </Link>
          <Link href="/articles/plan-types" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">契約メニューの違い</span>
            <span className="ml-1 text-slate-600">— 市場連動・固定の比較</span>
          </Link>
          <Link href="/articles/review-points" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">見直しポイント</span>
            <span className="ml-1 text-slate-600">— 見積比較・契約切替の実務</span>
          </Link>
          <Link href="/articles/risk-scenarios" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">リスクシナリオ別</span>
            <span className="ml-1 text-slate-600">— 猛暑・円安・地政学リスク</span>
          </Link>
          <Link href="/articles/by-industry" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">業種別に知る</span>
            <span className="ml-1 text-slate-600">— 業種ごとの電力リスク</span>
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
