import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getArticlesBySlugs, getCategoryBySlug, getSortedCategories } from "../../../lib/articles";
import { POWER_PROCUREMENT_SERIES } from "../../../lib/powerProcurementSeries";
import { REVIEW_POINTS_STEP_GROUPS, REVIEW_POINTS_STEP_BY_SLUG } from "../../../lib/reviewPointsSteps";
import { INDUSTRY_MIDDLE_CATEGORIES } from "../../../lib/articleIndustryCategories";
import { GLOSSARY_TOPIC_GROUPS } from "../../../lib/glossaryTopics";
import { CATEGORY_DIAGNOSTICS } from "../../../lib/diagnosticConfigs";
import { MiniDiagnostic } from "../../../components/diagnostics/MiniDiagnostic";
import { RegulationTimeline } from "../../../components/diagnostics/RegulationTimeline";
import { CATEGORY_HUB_SPOTLIGHT } from "../../../lib/articleHubFeatured";
import type { ArticleCategorySlug } from "../../../data/articles";
import { CATEGORY_CTA } from "../../../lib/categoryCta";
import { BreadcrumbJsonLd, FaqPageJsonLd } from "../../../components/seo/JsonLd";

const BASIC_HUB_LEARN_STEPS: { step: number; heading: string; description: string; href: string }[] = [
  {
    step: 1,
    heading: "電気料金の構成要素を理解する",
    description: "請求書の基本料金・電力量料金・燃調費・再エネ賦課金の 4 階層を分解し、自社の請求書がどの費目で重くなっているかを把握します。",
    href: "/business-electricity-bill-breakdown",
  },
  {
    step: 2,
    heading: "法人契約の種類を知る（高圧・低圧・特別高圧）",
    description: "電圧区分による単価構造の違い、デマンド契約と従量契約の選択軸、契約電力の決まり方を理解します。",
    href: "/high-voltage-electricity-pricing",
  },
  {
    step: 3,
    heading: "値上がりの 4 大要因を把握する",
    description: "燃料価格・容量拠出金・再エネ賦課金・市場連動性の 4 要因が、近年の電気料金上昇をどう構成しているかを学びます。",
    href: "/why-business-electricity-prices-rise",
  },
  {
    step: 4,
    heading: "自社の見直しタイミングを判断する",
    description: "契約更新時期、市場相場の節目、社内予算サイクルを踏まえ、見直しを開始すべき適切なタイミングを判断します。",
    href: "/when-to-review-electricity-contract",
  },
  {
    step: 5,
    heading: "比較・診断ツールで実践する",
    description: "シミュレーターで現契約のリスクスコアを試算し、料金メニュー比較で最適プランを選定する実践フェーズです。",
    href: "/",
  },
];

const BASIC_HUB_INDUSTRY_GUIDES: { audience: string; description: string; href: string }[] = [
  {
    audience: "製造業の方へ",
    description: "工場のデマンド管理・連続操業のベース負荷削減・自家消費 PPA の導入適性を業界平均と比較できます。",
    href: "/factory-electricity-cost-benchmark",
  },
  {
    audience: "オフィスの方へ",
    description: "規模別オフィス電気代相場と、空調・照明・OA 機器の負荷構造から見た見直し優先順位を把握できます。",
    href: "/office-electricity-cost-benchmark",
  },
  {
    audience: "小売店の方へ",
    description: "業種横断の小売店ベンチマークと、冷蔵冷凍負荷・夕方ピーク対策の典型的な改善策を確認できます。",
    href: "/retail-store-electricity-cost-benchmark",
  },
  {
    audience: "病院・介護の方へ",
    description: "24 時間稼働設備のベース負荷管理、医療機器停電リスク、公定価格下のコスト転嫁制約を解説します。",
    href: "/hospital-electricity-cost-review",
  },
  {
    audience: "自治体の方へ",
    description: "庁舎・学校・公共施設の年度予算制と入札制約、共同調達による交渉力強化の進め方を整理します。",
    href: "/municipality-electricity-cost-review",
  },
];

const BASIC_HUB_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "法人の電気料金はどこから学び始めれば良いですか？",
    answer:
      "まず請求書の構成要素（基本料金・電力量料金・燃料費調整額・再エネ賦課金）を分解して理解し、その後に契約電圧区分（高圧・低圧・特別高圧）と契約電力の決まり方を学ぶ順序が効率的です。本ページの 5 ステップ学習ガイドが想定する標準ルートです。",
  },
  {
    question: "個人向けと法人向けで電気料金の仕組みは何が違いますか？",
    answer:
      "法人向けは「基本料金 = 契約電力 × 単価」の固定費比率が大きく、デマンド管理が削減のテコになります。また、契約電力 50 kW 以上の高圧契約では単価が大幅に下がる代わりに、責任分界点以降の保安・受変電設備の自己責任が発生します。個人向けの従量電灯と仕組みが大きく異なります。",
  },
  {
    question: "電気料金の見直しで最初に確認すべきポイントは何ですか？",
    answer:
      "（1）直近 12 か月の請求書から月別使用量と最大デマンド値を整理、（2）現契約の単価と燃調費反映ルールを確認、（3）業界平均ベンチマークと自社の使用量原単位を比較、の 3 点です。これだけで見直し余地の有無が概ね判断できます。",
  },
  {
    question: "市場連動プランと固定価格プランはどちらが向いていますか？",
    answer:
      "業種・契約規模・モニタリング体制によります。大企業で予算管理の説明責任が大きい法人は固定価格、中小規模で価格変動リスクをモニタリングできる法人は市場連動が向きやすい傾向があります。詳しくは値上がり要因記事と契約見直し手順記事を併読してください。",
  },
  {
    question: "電気料金の値上がりに対して何から手を打てば良いですか？",
    answer:
      "短期的には（1）契約電力の妥当性確認、（2）燃調費上限ありプランへの切替、（3）デマンドコントローラー導入の 3 点が効果的です。中長期では太陽光自家消費 PPA、蓄電池導入、DR・ネガワット取引参加で構造的に燃料リスクを下げられます。本ハブから個別記事へ進んで詳細を確認してください。",
  },
];

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
  decarbonization:
    "法人の脱炭素・GX対応を解説。Scope2算定、非化石証書、RE100、SBT、TCFD、GX-ETSまで、電力調達と情報開示をつなぐ実務ポイントを整理しています。",
  "corporate-ppa":
    "コーポレートPPAの契約形態と選び方を解説。オンサイト・オフサイト・バーチャルPPAの違い、価格相場、契約期間、会計処理、Scope2対応の論点をまとめています。",
  "energy-dx":
    "法人向けエネルギーマネジメントとDXを解説。BEMS/FEMS/EMS、AI需要予測、スマートメーター活用、BIダッシュボード、省エネ法報告自動化の実務を整理しています。",
  "energy-bcp":
    "法人の電力BCP・災害対策を解説。停電・需給ひっ迫・新電力撤退に備える非常用電源、蓄電池、マイクログリッドの選び方と事業継続設計を整理しています。",
  "sme-guide":
    "中小企業・小規模事業者向けの電気代見直しを解説。低圧契約の基本、削減の即効策、テナント按分、個人事業主の家事按分まで限られた予算で成果を出す実務を整理しています。",
  "accounting-tax":
    "電気代の経理・税務処理を解説。勘定科目・部門配賦・インボイス制度・蓄電池減価償却・省エネ税制・価格転嫁まで、経理担当者がつまずきやすい論点を整理しています。",
  glossary:
    "法人電力契約・市場・設備・制度の専門用語を分野別に整理した用語集。契約電力、JEPX、キュービクル、FIT/FIP、GX-ETSなど、繰り返し登場する用語を横断的に解説しています。",
  faq:
    "法人電気料金のよくある質問を結論ベースで整理したFAQ集。「なぜ高い」「何から始める」「市場連動は怖い」など検索されやすい疑問に、実務視点で回答しています。",
  "regulation-timeline":
    "電力自由化・容量市場・需給調整市場・託送料金・省エネ法・GX推進法など、法人電気料金に影響する制度改正を時系列で整理。料金影響と対象法人の観点で解説しています。",
  "ev-charging":
    "法人EV・充電インフラと電力契約を解説。普通充電・急速充電・V2H、事業用・従業員用・一般開放の契約区分、TOU料金活用、補助金、費用試算までを整理しています。",
  "contract-legal":
    "電力契約書・供給約款の読み方を法務視点で解説。主要条項、不可抗力、自動更新、料金改定、違約金、供給地点特定番号の確認ポイントを整理しています。",
  "ma-organizational-change":
    "合併・分社・事業譲渡・持株会社化・グループ統合時の電力契約承継と再契約手続きを解説。名義変更・空白期間対策・デューデリジェンスの論点を整理しています。",
  "global-energy":
    "海外拠点・多国籍企業向けのグローバル電力調達を解説。主要国の電気料金水準、国別再エネ調達制度、中国・東南アジア・欧州の最新動向と日本本社の判断軸を整理しています。",
  "datacenter-ai-demand":
    "AI時代のデータセンター電力需要急増を解説。需要動向、立地と系統制約、PUE最適化・液冷、ハイパースケーラーの再エネ100%調達、2030年需要予測を整理しています。",
};

/** 鮮度管理が特に重要なカテゴリ向けの確認日バナー */
const CATEGORY_FRESHNESS_NOTICE: Partial<Record<string, { lastVerifiedAt: string; frequency: string; note: string }>> = {
  subsidies: {
    lastVerifiedAt: "2026-04-18",
    frequency: "月次更新",
    note: "公募期限・補助率は制度の改定頻度が高いため、個別制度の最新情報は各公式サイトで必ず再確認してください。",
  },
  "accounting-tax": {
    lastVerifiedAt: "2026-04-18",
    frequency: "年次＋随時更新",
    note: "2026年度税制改正に準拠した記述です。インボイス・電子帳簿保存法の最新運用は国税庁サイトで確認してください。",
  },
  "regulation-timeline": {
    lastVerifiedAt: "2026-04-18",
    frequency: "四半期更新",
    note: "今後12〜24か月の制度改正予定はインタラクティブ年表下部の「今後の予定」バッジを参照。正式情報は各省公式サイトで確認してください。",
  },
  benchmarks: {
    lastVerifiedAt: "2026-04-18",
    frequency: "四半期更新",
    note: "業種別・規模別の相場は、四半期ごとに直近データを反映して更新します。",
  },
  "market-data": {
    lastVerifiedAt: "2026-04-18",
    frequency: "月次更新",
    note: "30分値・JEPXスポット価格・気象データ等は月次で更新。CC BY 4.0 でCSV/JSON配布可能です。",
  },
  "monthly-review": {
    lastVerifiedAt: "2026-04-18",
    frequency: "月次更新",
    note: "毎月の料金動向を継続的に追記しています。",
  },
  "case-studies": {
    lastVerifiedAt: "2026-04-18",
    frequency: "月1本追加",
    note: "新規事例は月1本ペースで追加予定です。",
  },
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
  decarbonization: "脱炭素・GX対応｜Scope2・RE100・非化石証書・GX-ETSの実務",
  "corporate-ppa": "コーポレートPPAとは｜オンサイト・オフサイト・バーチャルの比較",
  "energy-dx": "エネルギーマネジメント・電力DX｜BEMS・FEMS・AI最適化の選び方",
  "energy-bcp": "電力BCP・災害対策｜非常用電源・蓄電池・マイクログリッドの設計",
  "sme-guide": "中小企業・小規模事業者の電気代見直し｜低圧契約の実務ガイド",
  "accounting-tax": "電気代の経理・税務｜勘定科目・インボイス・減価償却の実務",
  glossary: "電力契約・市場・設備の用語集｜法人向け電気料金の専門用語解説",
  faq: "法人電気料金FAQ集｜「なぜ高い」「何から始める」のよくある質問",
  "regulation-timeline": "電力制度改正タイムライン｜自由化・容量市場・GX-ETSの時系列",
  "ev-charging": "法人EV・充電インフラ｜電力契約・基本料金・補助金の実務解説",
  "contract-legal": "電力契約書・供給約款の読み方｜主要条項と法務視点の確認ポイント",
  "ma-organizational-change": "M&A・組織再編時の電力契約｜承継・名義変更・DDの実務",
  "global-energy": "海外拠点・グローバルエネルギー｜主要国の電気料金と調達戦略",
  "datacenter-ai-demand": "データセンター・AI電力需要｜需要増・立地・冷却最適化の動向",
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

  const title =
    category.seoTitle ??
    categoryTitleOverrides[category.slug] ??
    `${category.name}｜法人向け電気料金の基礎知識`;
  const description =
    category.seoDescription ??
    categoryDescriptionOverrides[category.slug] ??
    category.description ??
    defaultDescription;
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
      siteName: "法人電気料金ナビ",
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
    {category.slug === "faq" ? (
      <FaqPageJsonLd
        faqs={categoryArticles.map((article) => ({
          question: article.title.replace(/^【FAQ】/, "").split("｜")[0].trim(),
          answer: article.description,
        }))}
      />
    ) : null}
    {category.slug === "basic" ? (
      <FaqPageJsonLd faqs={BASIC_HUB_FAQ_ITEMS} />
    ) : null}
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
        {CATEGORY_FRESHNESS_NOTICE[category.slug] ? (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-white/60 p-3 text-xs leading-5 text-slate-700">
            <span className="mr-2 inline-flex rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
              鮮度管理
            </span>
            <span className="font-semibold">最終確認日: {CATEGORY_FRESHNESS_NOTICE[category.slug]!.lastVerifiedAt}</span>
            <span className="mx-2 text-slate-400">/</span>
            <span>{CATEGORY_FRESHNESS_NOTICE[category.slug]!.frequency}</span>
            <p className="mt-1 text-slate-600">{CATEGORY_FRESHNESS_NOTICE[category.slug]!.note}</p>
          </div>
        ) : null}
        {category.slug === "basic" ? (
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
            >
              シミュレーターで診断する
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center rounded-md border border-sky-300 bg-white px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50"
            >
              料金メニューを比較する
            </Link>
            <Link
              href="/how-to"
              className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              シミュレーターの使い方を見る
            </Link>
          </div>
        ) : null}
      </header>

      {category.slug === "basic" ? (
        <>
          <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人電気料金の基礎を学ぶ 5 つのステップ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              基礎知識ハブの 30+ 記事を読み始める前に、以下の 5 ステップで全体像を掴むと迷子になりません。各ステップに代表記事を 1 本割り当てています。
            </p>
            <ol className="mt-4 space-y-3">
              {BASIC_HUB_LEARN_STEPS.map((item) => (
                <li
                  key={item.step}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                      {item.step}
                    </span>
                    <div>
                      <Link
                        href={item.href}
                        className="text-base font-semibold text-sky-700 underline-offset-2 hover:underline"
                      >
                        {item.heading}
                      </Link>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別の電気料金ガイド</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              基礎知識を踏まえたうえで、自社の業種に近い業界別ガイドに進むと、固有の負荷特性と削減策をピンポイントで把握できます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {BASIC_HUB_INDUSTRY_GUIDES.map((item) => (
                <article
                  key={item.href}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    <Link href={item.href} className="text-sky-700 underline-offset-2 hover:underline">
                      {item.audience}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          {(() => {
            const recentBasic = [...categoryArticles]
              .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
              .slice(0, 3);
            if (recentBasic.length === 0) return null;
            return (
              <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-xl font-semibold text-slate-900">最近更新された基礎記事 3 本</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                  基礎カテゴリで最近更新された記事をピックアップしています（公開日降順）。
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {recentBasic.map((article) => (
                    <article
                      key={article.slug}
                      className="rounded-lg border border-slate-200 bg-white p-4"
                    >
                      <h3 className="text-base font-semibold text-slate-900">
                        <Link
                          href={`/${article.slug}`}
                          className="text-sky-700 underline-offset-2 hover:underline"
                        >
                          {article.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{article.description}</p>
                      <p className="mt-2 text-xs text-slate-500">公開日: {article.publishedAt}</p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })()}

          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
            <div className="mt-4 space-y-3">
              {BASIC_HUB_FAQ_ITEMS.map((item) => (
                <details
                  key={item.question}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </>
      ) : null}

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
                  <p className="mt-2 text-xs text-slate-500">最終更新日: {article.publishedAt}</p>
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

      {category.slug === "regulation-timeline" ? (
        <div className="mt-6">
          <RegulationTimeline />
        </div>
      ) : null}

      {CATEGORY_DIAGNOSTICS[category.slug] ? (
        <div className="mt-6">
          <MiniDiagnostic {...CATEGORY_DIAGNOSTICS[category.slug]!} />
        </div>
      ) : null}

      {category.slug === "glossary" ? (
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">トピック別索引</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            用語集は12のトピックに分かれています。気になる分野から該当の用語集記事を開き、関連する詳細解説に辿り着けます。
          </p>
          <nav aria-label="用語集トピック" className="mt-4 flex flex-wrap gap-2">
            {GLOSSARY_TOPIC_GROUPS.map((group) => (
              <a
                key={group.topic}
                href={`#topic-${group.topic}`}
                className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-800"
              >
                {group.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 space-y-4">
            {GLOSSARY_TOPIC_GROUPS.map((group) => {
              const items = getArticlesBySlugs(group.slugs);
              if (items.length === 0) return null;
              return (
                <section key={group.topic} id={`topic-${group.topic}`} className="rounded-lg border border-slate-200 bg-slate-50 p-4 scroll-mt-16">
                  <h3 className="text-base font-semibold text-slate-900">{group.label}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{group.description}</p>
                  <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-700">
                    {items.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/${item.slug}`} className="text-sky-700 underline-offset-2 hover:underline">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </section>
      ) : null}

      {category.slug === "last-resort-supply" || category.slug === "emergency-response" ? (
        <section className="mt-6 rounded-xl border border-rose-200 bg-rose-50/60 p-5">
          <h2 className="text-base font-semibold text-slate-900">関連：緊急系カテゴリの使い分け</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className={`rounded-lg border p-3 ${category.slug === "last-resort-supply" ? "border-rose-400 bg-white" : "border-slate-200 bg-white/60"}`}>
              <p className="text-xs font-semibold text-rose-700">最終保障供給を知る</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">制度理解（仕組み・料金・切替）</p>
              <p className="mt-1 text-xs leading-5 text-slate-700">最終保障供給の制度、対象、料金水準、通常契約への復帰など、制度側の理解に重点。</p>
              {category.slug !== "last-resort-supply" ? (
                <Link href="/articles/last-resort-supply" className="mt-2 inline-flex text-xs font-semibold text-rose-700 underline-offset-2 hover:underline">
                  最終保障供給カテゴリへ →
                </Link>
              ) : null}
            </div>
            <div className={`rounded-lg border p-3 ${category.slug === "emergency-response" ? "border-rose-400 bg-white" : "border-slate-200 bg-white/60"}`}>
              <p className="text-xs font-semibold text-rose-700">緊急対応・トラブル解決</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">発生時の初動（24時間以内〜1週間）</p>
              <p className="mt-1 text-xs leading-5 text-slate-700">値上げ通知・契約解除通知・新電力撤退など、今すぐ対応が必要な場面の初動手順に重点。</p>
              {category.slug !== "emergency-response" ? (
                <Link href="/articles/emergency-response" className="mt-2 inline-flex text-xs font-semibold text-rose-700 underline-offset-2 hover:underline">
                  緊急対応カテゴリへ →
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {category.slug === "emergency-response" || category.slug === "energy-bcp" ? (
        <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5">
          <h2 className="text-base font-semibold text-slate-900">関連：発生時対応と平時の備えの使い分け</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className={`rounded-lg border p-3 ${category.slug === "emergency-response" ? "border-amber-500 bg-white" : "border-slate-200 bg-white/60"}`}>
              <p className="text-xs font-semibold text-amber-700">緊急対応・トラブル解決</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">発生時の初動</p>
              <p className="mt-1 text-xs leading-5 text-slate-700">値上げ通知・契約解除・電気代急増など、突発事象への初動フローと意思決定を整理。</p>
              {category.slug !== "emergency-response" ? (
                <Link href="/articles/emergency-response" className="mt-2 inline-flex text-xs font-semibold text-amber-700 underline-offset-2 hover:underline">
                  緊急対応カテゴリへ →
                </Link>
              ) : null}
            </div>
            <div className={`rounded-lg border p-3 ${category.slug === "energy-bcp" ? "border-amber-500 bg-white" : "border-slate-200 bg-white/60"}`}>
              <p className="text-xs font-semibold text-amber-700">電力BCP・災害対策</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">平時の備え（事前設計）</p>
              <p className="mt-1 text-xs leading-5 text-slate-700">停電・需給ひっ迫・新電力撤退に備えた非常用電源・蓄電池・マイクログリッドなど、事前の設計に重点。</p>
              {category.slug !== "energy-bcp" ? (
                <Link href="/articles/energy-bcp" className="mt-2 inline-flex text-xs font-semibold text-amber-700 underline-offset-2 hover:underline">
                  電力BCPカテゴリへ →
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {category.slug === "price-increase" ? (
        <section className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">4費目×上昇要因 早見表</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">法人電気料金に上乗せされる主要4費目を、計算方式・変動要因・対策観点で比較した1枚表です。</p>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">費目</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">計算単位</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主な変動要因</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">反映タイミング</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">対策観点</th>
              </tr>
            </thead>
            <tbody>
              {([
                { item: "燃料費調整額", unit: "円/kWh", factor: "LNG・石炭・原油の3か月平均", timing: "2か月遅れで請求反映", counter: "上限付き固定プラン選択" },
                { item: "市場価格調整額", unit: "円/kWh", factor: "JEPXスポット価格", timing: "当月〜翌月反映", counter: "市場連動回避 / ヘッジ" },
                { item: "再エネ賦課金", unit: "円/kWh", factor: "FIT買取費用と回避可能費用の差", timing: "年1回改定（5月〜）", counter: "減免制度確認 / 自家消費" },
                { item: "容量拠出金", unit: "円/kW or kWh", factor: "容量市場オークション約定価格", timing: "2024年度から反映開始", counter: "契約電力見直し / 需要抑制" },
              ] as const).map((row) => (
                <tr key={row.item} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.item}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.unit}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.factor}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.timing}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.counter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : null}

      {category.slug === "plan-types" ? (
        <section className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約メニュー×判断軸 マトリクス</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">代表的な4つの契約メニューを、単価変動・予算管理・向く業種・解約条件で横並び比較した早見表です。</p>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">メニュー</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">単価変動</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">予算管理</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">向く業種</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">解約・更新</th>
              </tr>
            </thead>
            <tbody>
              {([
                { plan: "固定プラン（燃調上限あり）", volatility: "小", budget: "◎", industry: "病院・公共・利益率低", cancel: "違約金あり / 期間中は固定" },
                { plan: "固定プラン（燃調あり）", volatility: "中", budget: "○", industry: "多拠点・オフィス中心", cancel: "違約金あり" },
                { plan: "ハイブリッド", volatility: "中", budget: "○", industry: "製造・物流（部分最適化）", cancel: "条件により異なる" },
                { plan: "市場連動プラン", volatility: "大", budget: "△", industry: "高マージン・柔軟対応可", cancel: "比較的柔軟 / 月次変動" },
              ] as const).map((row) => (
                <tr key={row.plan} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.plan}</th>
                  <td className="border border-slate-200 px-3 py-2 text-center">{row.volatility}</td>
                  <td className="border border-slate-200 px-3 py-2 text-center">{row.budget}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.industry}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.cancel}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">◎=特に向いている / ○=条件により向く / △=慎重に検討。最終判断は自社の使用実態・リスク耐性に基づいて行ってください。</p>
        </section>
      ) : null}

      {category.slug === "benchmarks" ? (
        <section className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種×規模 相場マトリクス（目安）</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">業種別・規模別の月額電気代の目安を整理した早見表です。自社の請求書と照らし合わせて、相場からの乖離を確認できます。</p>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">業種</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">小規模（月）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">中規模（月）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">大規模（月）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主な上振れ要因</th>
              </tr>
            </thead>
            <tbody>
              {([
                { industry: "オフィスビル", small: "10〜30万円", mid: "30〜150万円", large: "150〜800万円", factor: "空調・照明・サーバ" },
                { industry: "小売・外食", small: "15〜50万円", mid: "50〜200万円", large: "200〜1,000万円", factor: "冷蔵・冷凍・照明" },
                { industry: "ホテル", small: "30〜100万円", mid: "100〜500万円", large: "500〜2,000万円", factor: "空調・給湯・厨房" },
                { industry: "病院", small: "50〜150万円", mid: "150〜800万円", large: "800〜3,000万円", factor: "医療機器・空調・24時間稼働" },
                { industry: "食品工場", small: "50〜200万円", mid: "200〜1,500万円", large: "1,500〜8,000万円", factor: "冷蔵冷凍・生産設備" },
                { industry: "物流倉庫", small: "30〜100万円", mid: "100〜500万円", large: "500〜3,000万円", factor: "冷凍冷蔵・照明・マテハン" },
                { industry: "データセンター", small: "—", mid: "500〜3,000万円", large: "3,000万円〜数億円", factor: "サーバ・冷却（PUE）" },
              ] as const).map((row) => (
                <tr key={row.industry} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.industry}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.small}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.mid}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.large}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.factor}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 2026年4月時点の目安。契約区分（高圧/特別高圧/低圧）・稼働時間・地域で変動します。</p>
        </section>
      ) : null}

      {category.slug === "subsidies" ? (
        <section className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">対象設備×補助金 マトリクス</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">設備カテゴリごとに、活用できる主要補助金を一覧化。公募時期は年度により変動するため、各公式サイトで最新情報を確認してください。</p>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">対象設備</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主要補助金</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">補助率目安</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">公募時期（目安）</th>
              </tr>
            </thead>
            <tbody>
              {([
                { target: "省エネ設備更新", subsidy: "SII省エネ補助金 / 中小企業経営強化税制", rate: "1/2〜 / 税制", period: "春・秋" },
                { target: "太陽光（自家消費）", subsidy: "需要家主導型PPA / ストレージパリティ", rate: "1/3〜1/2", period: "春" },
                { target: "蓄電池", subsidy: "レジリエンス強化型蓄電池 / ストレージパリティ", rate: "1/3〜", period: "春" },
                { target: "EV充電", subsidy: "CEV補助金 / 自治体別", rate: "1/2〜", period: "通年（枠がなくなり次第終了）" },
                { target: "BEMS/FEMS/EMS", subsidy: "SII省エネ補助金 / GXサプライチェーン", rate: "1/2〜2/3", period: "春・秋" },
                { target: "脱炭素経営（計画〜設備）", subsidy: "SHIFT事業", rate: "1/2〜2/3", period: "春〜夏" },
                { target: "DR・VPP", subsidy: "DR補助金 / VPP補助金", rate: "1/2", period: "随時" },
              ] as const).map((row) => (
                <tr key={row.target} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.target}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.subsidy}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.rate}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">最終確認日: 2026-04-18 / 最新情報は<a href="/downloads" className="text-sky-700 underline-offset-2 hover:underline">補助金カレンダー（CSV）</a>と各公式サイトで確認してください。</p>
        </section>
      ) : null}

      {category.slug === "industry-guide" ? (
        <section className="mt-6 rounded-xl border border-sky-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別ハブ｜中分類から読み始める</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            本カテゴリは業種別の見直しポイントを横串で並べたランディングです。まずは自社に近い業種の中分類ハブを開き、そこから個別業種記事に進むと見通しがよくなります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {INDUSTRY_MIDDLE_CATEGORIES.map((middle) => (
              <Link
                key={middle.slug}
                href={`/articles/by-industry/${middle.slug}`}
                className="rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:bg-sky-50"
              >
                <p className="text-sm font-semibold text-slate-900">{middle.name}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">{middle.shortDescription}</p>
              </Link>
            ))}
          </div>
          <div className="mt-5">
            <h3 className="text-base font-semibold text-slate-900">業種×契約プラン適性マトリクス（目安）</h3>
            <p className="mt-1 text-xs leading-5 text-slate-600">負荷パターンと料金感度から、業種別の向き不向きをまとめた早見表です。最終判断は自社の使用実態・予算方針に基づいて行ってください。</p>
            <div className="mt-3 overflow-x-auto">
              <table className="min-w-[680px] w-full border-collapse text-sm leading-6 text-slate-700">
                <thead>
                  <tr className="bg-slate-50 text-slate-900">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">業種分類</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">固定プラン</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">市場連動</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主な設備対策</th>
                  </tr>
                </thead>
                <tbody>
                  {([
                    { name: "オフィス・公共系", fixed: "◎", market: "△", equipment: "LED・空調最適化" },
                    { name: "商業系（小売・外食）", fixed: "◎", market: "△", equipment: "冷凍冷蔵・照明・蓄電池" },
                    { name: "宿泊・レジャー系", fixed: "○", market: "△", equipment: "空調・給湯・蓄電池" },
                    { name: "医療・福祉系", fixed: "◎", market: "×", equipment: "BCP蓄電池・非常用電源" },
                    { name: "製造業", fixed: "○", market: "○", equipment: "デマンド制御・FEMS・自家消費太陽光" },
                    { name: "物流・インフラ系", fixed: "○", market: "○", equipment: "冷凍冷蔵・EV充電・蓄電池" },
                    { name: "IT・テクノロジー系", fixed: "○", market: "○", equipment: "冷却最適化・PUE改善" },
                    { name: "農業・一次産業系", fixed: "○", market: "△", equipment: "太陽光・揚水制御・蓄熱" },
                  ] as const).map((row) => (
                    <tr key={row.name} className="align-top">
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.name}</th>
                      <td className="border border-slate-200 px-3 py-2 text-center">{row.fixed}</td>
                      <td className="border border-slate-200 px-3 py-2 text-center">{row.market}</td>
                      <td className="border border-slate-200 px-3 py-2">{row.equipment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-2 text-xs text-slate-500">◎=特に向いている / ○=条件により向く / △=慎重に検討 / ×=原則非推奨</p>
            </div>
          </div>
        </section>
      ) : null}

      {category.slug === "price-trends" || category.slug === "market-data" ? (
        <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5">
          <h2 className="text-base font-semibold text-slate-900">2つのデータ系カテゴリの使い分け</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className={`rounded-lg border p-3 ${category.slug === "price-trends" ? "border-sky-400 bg-white" : "border-slate-200 bg-white/60"}`}>
              <p className="text-xs font-semibold text-sky-700">本カテゴリ：電気料金の推移と高止まり</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">年次・定性解説（マクロ）</p>
              <p className="mt-1 text-xs leading-5 text-slate-700">年度別・契約区分別の単価推移、補助金要因を除いた見方、制度変化の背景など、長期・制度視点での定性的な解説。</p>
              {category.slug !== "price-trends" ? (
                <Link href="/articles/price-trends" className="mt-2 inline-flex text-xs font-semibold text-sky-700 underline-offset-2 hover:underline">
                  推移と高止まりのカテゴリを見る →
                </Link>
              ) : null}
            </div>
            <div className={`rounded-lg border p-3 ${category.slug === "market-data" ? "border-sky-400 bg-white" : "border-slate-200 bg-white/60"}`}>
              <p className="text-xs font-semibold text-sky-700">本カテゴリ：データで見る電力市場</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">30分値・定量分析（ミクロ）</p>
              <p className="mt-1 text-xs leading-5 text-slate-700">JEPX30分値・気象データ・需給・スプレッドなど、日内変動や因果チェーンをデータで可視化する定量分析。</p>
              {category.slug !== "market-data" ? (
                <Link href="/articles/market-data" className="mt-2 inline-flex text-xs font-semibold text-sky-700 underline-offset-2 hover:underline">
                  市場データのカテゴリを見る →
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {category.slug === "review-points" ? (
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直し実務の4ステップ</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            40本近い記事を、実務の流れ順に4ステップで整理しました。着手段階に応じて該当ステップから読み進めると、抜け漏れを防げます。
          </p>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {REVIEW_POINTS_STEP_GROUPS.map((group) => {
              const groupArticles = getArticlesBySlugs(group.slugs);
              return (
                <section key={group.step} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-slate-900">{group.label}</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700">
                      {groupArticles.length}本
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{group.description}</p>
                  <ol className="mt-3 space-y-1.5 text-sm leading-6 text-slate-700">
                    {groupArticles.slice(0, 6).map((article) => (
                      <li key={article.slug}>
                        <Link href={`/${article.slug}`} className="text-sky-700 underline-offset-2 hover:underline">
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                  {groupArticles.length > 6 ? (
                    <p className="mt-2 text-xs text-slate-500">ほか{groupArticles.length - 6}本（下部の記事一覧で確認できます）</p>
                  ) : null}
                </section>
              );
            })}
          </div>
        </section>
      ) : null}

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
              {category.slug === "review-points" && REVIEW_POINTS_STEP_BY_SLUG[article.slug] ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    {REVIEW_POINTS_STEP_BY_SLUG[article.slug]}
                  </span>
                </div>
              ) : null}
              <h3 className="text-lg font-semibold text-slate-900">
                <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{article.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500">最終更新日: {article.publishedAt}</span>
                {article.lastVerifiedAt ? (
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                    最終確認: {article.lastVerifiedAt}
                  </span>
                ) : null}
                {article.applicationDeadline ? (
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-800">
                    公募期限: {article.applicationDeadline}
                  </span>
                ) : null}
                {article.taxYear ? (
                  <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700">
                    {article.taxYear}対応
                  </span>
                ) : null}
                {article.dataCoverage ? (
                  <span className="rounded-full bg-sky-50 px-2 py-0.5 text-xs font-semibold text-sky-700">
                    データ: {article.dataCoverage}
                  </span>
                ) : null}
                <Link
                  href={`/${article.slug}`}
                  className="inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
                >
                  詳しく見る
                </Link>
              </div>
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
          decarbonization: [
            { slug: "corporate-ppa", name: "コーポレートPPA", reason: "再エネ電力の長期調達手段として、3形態のPPAを比較しましょう" },
            { slug: "for-executives", name: "経営層・CFO向け", reason: "Scope2・ESG開示は経営層の意思決定と直結します" },
          ],
          "corporate-ppa": [
            { slug: "decarbonization", name: "脱炭素・GX対応", reason: "PPAの環境価値をScope2・GX-ETS対応につなげましょう" },
            { slug: "contract-legal", name: "契約書・約款の読み方", reason: "10〜20年の長期契約は契約条項の確認が重要です" },
          ],
          "energy-dx": [
            { slug: "energy-equipment", name: "蓄電池・太陽光・DRを知る", reason: "EMS・AI最適化と設備対策を組み合わせた削減効果を確認しましょう" },
            { slug: "subsidies", name: "補助金・助成金を知る", reason: "エネマネ・DX投資で活用できる補助金を確認しましょう" },
          ],
          "energy-bcp": [
            { slug: "emergency-response", name: "緊急対応・トラブル解決", reason: "平時の備えに加え、発生時の初動手順も押さえましょう" },
            { slug: "energy-equipment", name: "蓄電池・太陽光・DRを知る", reason: "BCP兼用の蓄電池活用で平時の電気代削減にもつながります" },
          ],
          "sme-guide": [
            { slug: "review-points", name: "見直しポイントを知る", reason: "低圧契約でも使える見直し手順を確認しましょう" },
            { slug: "subsidies", name: "補助金・助成金を知る", reason: "中小企業向けの省エネ補助金を活用しましょう" },
          ],
          "accounting-tax": [
            { slug: "subsidies", name: "補助金・助成金を知る", reason: "税制優遇と補助金の併用で投資負担を圧縮できます" },
            { slug: "ma-organizational-change", name: "M&A・組織再編時の電力契約", reason: "事業譲渡時の按分処理・名義変更と連動する論点です" },
          ],
          glossary: [
            { slug: "basic", name: "基礎から知る", reason: "用語を押さえたら、料金構造の基礎にも戻って確認しましょう" },
            { slug: "faq", name: "FAQ集（よくある質問）", reason: "用語と合わせてよくある質問も確認すると理解が深まります" },
          ],
          faq: [
            { slug: "review-points", name: "見直しポイントを知る", reason: "FAQで疑問を解消したら、実際の見直し手順に進みましょう" },
            { slug: "glossary", name: "用語集", reason: "回答で登場する専門用語の意味を用語集で確認しましょう" },
          ],
          "regulation-timeline": [
            { slug: "price-increase", name: "料金が上がる理由を知る", reason: "制度改正と料金上昇要因を合わせて理解しましょう" },
            { slug: "power-procurement", name: "電力調達の仕組みを知る", reason: "制度の背景にある調達構造も確認すると理解が深まります" },
          ],
          "ev-charging": [
            { slug: "energy-equipment", name: "蓄電池・太陽光・DRを知る", reason: "EV充電設備と蓄電池・V2Hの組み合わせを検討しましょう" },
            { slug: "subsidies", name: "補助金・助成金を知る", reason: "EV・充電インフラ向けの補助金を活用しましょう" },
          ],
          "contract-legal": [
            { slug: "review-points", name: "見直しポイントを知る", reason: "契約条項を押さえたら、実際の見直し手順に進みましょう" },
            { slug: "emergency-response", name: "緊急対応・トラブル解決", reason: "契約トラブル発生時の初動も確認しておきましょう" },
          ],
          "ma-organizational-change": [
            { slug: "for-executives", name: "経営層・CFO向け", reason: "M&A電力DDは経営判断と直結します" },
            { slug: "contract-legal", name: "契約書・約款の読み方", reason: "契約承継・名義変更では約款条項の確認が重要です" },
          ],
          "global-energy": [
            { slug: "decarbonization", name: "脱炭素・GX対応", reason: "グローバル拠点の再エネ調達と脱炭素開示を合わせて整理しましょう" },
            { slug: "datacenter-ai-demand", name: "データセンター・AI需要", reason: "グローバル電力需要とAI需要の動向を合わせて確認しましょう" },
          ],
          "datacenter-ai-demand": [
            { slug: "corporate-ppa", name: "コーポレートPPA", reason: "ハイパースケーラーのRE100調達は長期PPAが中心です" },
            { slug: "market-data", name: "データで見る電力市場", reason: "AI需要の影響をJEPX価格・エリア需要で確認しましょう" },
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
