export type IndustryMiddleSlug =
  | "office-public"
  | "commercial"
  | "hotel-leisure"
  | "medical-welfare"
  | "manufacturing"
  | "logistics-infrastructure"
  | "it-technology"
  | "agriculture-primary";

export type PlannedIndustryArticle = {
  name: string;
  description: string;
  plannedSlug: string;
};

export type PublishedIndustryArticle = {
  middleSlug: IndustryMiddleSlug;
  industrySlug: string;
  href: string;
};

export type IndustryMiddleCategory = {
  slug: IndustryMiddleSlug;
  name: string;
  shortDescription: string;
  metadataTitle: string;
  metadataDescription: string;
  intro: string;
  features: string[];
  reviewPoints: string[];
  industries: PlannedIndustryArticle[];
};

export const INDUSTRY_ARTICLES_QUICK_GUIDE_CARD = {
  title: "業種別で探したい方へ",
  description:
    "自社の業種や業態に近いページから、電気料金が上がりやすい理由や見直しの着眼点を確認したい方向けです。",
  ctaLabel: "業種別に知るへ",
  href: "/articles/by-industry",
  icon: "/icons/articles/factory-building.svg",
  alt: "事業所や店舗を示すアイコン",
} as const;

export const INDUSTRY_ARTICLES_CATEGORY_CARD = {
  order: 9,
  name: "業種別に知る",
  description: "業種ごとに異なる電気料金リスク、負荷の特徴、見直しの着眼点を確認できます。",
  articleCount: 8,
  href: "/articles/by-industry",
  icon: {
    src: "/icons/articles/factory-building.svg",
    alt: "建物群を示すアイコン",
  },
} as const;

export const INDUSTRY_CATEGORY_TOP = {
  slug: "by-industry",
  metadataTitle: "業種別に知る｜法人向け電気料金の値上がりリスクと見直しポイント",
  metadataDescription:
    "業種や業態によって、電気の使い方や電気料金の上がりやすさは異なります。オフィス、商業施設、宿泊、医療、製造、物流、IT、農業まで、業種別に値上がりリスクと見直しの着眼点を整理します。",
  pageTitle: "業種別に知る",
  lead:
    "業種や業態によって、電気の使い方、値上がりしやすい要因、向いている契約や対策は異なります。オフィス、店舗、ホテル、病院、工場、物流施設、データセンター、農業施設まで、業種別に確認できる入口ページです。",
  learnPoints: [
    "業種ごとに異なる電気の使い方の特徴",
    "値上がりしやすい費目やリスクの出方",
    "見直し時に確認したい契約・設備・運用の着眼点",
  ],
  readingGuide:
    "まずは自社に近い分類ページを開き、そこで電気の使い方の特徴や値上がりしやすいポイントを確認してください。そのうえで、将来追加する個別業種ページで、より詳しい見直しポイントを確認できる構成にします。",
  footerLink: {
    href: "/compare",
    label: "比較ページを見る",
  },
} as const;

export const INDUSTRY_MIDDLE_CATEGORIES: IndustryMiddleCategory[] = [
  {
    slug: "office-public",
    name: "業務・公共系",
    shortDescription:
      "オフィス、官公庁、学校、研究施設など、平日日中に需要が集まりやすい業種をまとめています。",
    metadataTitle: "業務・公共系｜法人向け電気料金の値上がりリスク",
    metadataDescription:
      "オフィス、官公庁、学校、研究機関など、平日日中に需要が集まりやすい業種の電気料金リスクと見直しの着眼点を整理します。",
    intro:
      "オフィス、公共施設、学校、研究施設など、平日日中に需要が集まりやすい業種をまとめています。空調、照明、OA機器が中心になりやすく、日中ピークやデマンドの出方が見直しのポイントになりやすい分類です。",
    features: [
      "平日日中に需要が集まりやすい",
      "空調・照明・OA機器の比率が高い",
      "休館日や長期休暇で負荷差が出やすい施設がある",
    ],
    reviewPoints: [
      "夏冬のデマンドの上がり方",
      "固定単価と予算管理の相性",
      "休館日や非稼働時間帯の負荷の残り方",
    ],
    industries: [
      { name: "オフィスビル（超高層・大規模）", description: "共用部と空調のベース負荷が大きいタイプです。", plannedSlug: "office-building-large" },
      { name: "オフィスビル（中規模）", description: "テナント構成で空調や照明の使い方が変わりやすい業種です。", plannedSlug: "office-building-mid" },
      { name: "オフィス（小規模・テナント）", description: "営業時間とテナント設備の使い方が請求に表れやすい業種です。", plannedSlug: "office-small-tenant" },
      { name: "コワーキングスペース", description: "在館時間のばらつきで空調と照明負荷が変動しやすい業種です。", plannedSlug: "coworking-space" },
      { name: "官公庁・行政庁舎", description: "平日日中の執務負荷が中心で予算管理との相性も重要です。", plannedSlug: "government-office" },
      { name: "公共ホール・文化施設", description: "催事日と非催事日で負荷差が出やすい施設です。", plannedSlug: "public-hall-cultural-facility" },
      { name: "図書館・博物館", description: "空調と展示環境維持の負荷が安定して出やすい施設です。", plannedSlug: "library-museum" },
      { name: "大学・研究機関", description: "研究設備と空調負荷が重なりやすい業種です。", plannedSlug: "university-research-institute" },
      { name: "高校・中学・小学校", description: "授業時間帯に需要が集中しやすい教育施設です。", plannedSlug: "school-k12" },
      { name: "専門学校・予備校", description: "夜間講義や季節講習で負荷パターンが変わりやすい施設です。", plannedSlug: "vocational-school-prep" },
    ],
  },
  {
    slug: "commercial",
    name: "商業系",
    shortDescription:
      "スーパー、コンビニ、飲食、小売など、営業時間と設備負荷の影響を受けやすい業種をまとめています。",
    metadataTitle: "商業系｜法人向け電気料金の値上がりリスク",
    metadataDescription:
      "スーパー、コンビニ、小売、飲食など、営業時間と設備負荷の影響を受けやすい商業系業種の電気料金リスクを整理します。",
    intro:
      "スーパー、コンビニ、小売、飲食など、営業時間に連動して電気を使う業種をまとめています。冷蔵・冷凍、照明、空調、厨房などの設備が重なりやすく、利益率に対する電気代の重さが出やすい分類です。",
    features: [
      "営業時間と電力使用が連動しやすい",
      "冷蔵・照明・空調・厨房の比率が高い",
      "単価上昇が利益を圧迫しやすい",
    ],
    reviewPoints: [
      "ベースロードが高い設備の有無",
      "営業時間帯と契約プランの相性",
      "夏場や夕方以降の負荷の出方",
    ],
    industries: [
      { name: "百貨店・デパート", description: "多層フロアの空調と照明がコストの土台になりやすい業種です。", plannedSlug: "department-store" },
      { name: "大型ショッピングモール", description: "共用部負荷とテナント負荷が重なりやすい施設です。", plannedSlug: "large-shopping-mall" },
      { name: "スーパーマーケット（大型）", description: "冷蔵・冷凍設備のベース負荷が大きい業種です。", plannedSlug: "supermarket-large-scale" },
      { name: "スーパーマーケット（中小型）", description: "営業時間と冷ケース負荷の組み合わせが重要な業種です。", plannedSlug: "supermarket-small" },
      { name: "コンビニエンスストア", description: "24時間営業で照明と冷蔵負荷が続きやすい業種です。", plannedSlug: "convenience-store" },
      { name: "ドラッグストア", description: "長時間営業の照明・空調が中心になりやすい業種です。", plannedSlug: "drugstore" },
      { name: "家電量販店", description: "大型空間の空調と照明負荷が影響しやすい業種です。", plannedSlug: "electronics-retailer" },
      { name: "ホームセンター", description: "広い売場面積の照明と空調負荷が目立ちやすい業種です。", plannedSlug: "home-center" },
      { name: "アパレル・雑貨店舗", description: "照明演出と空調の使い方が請求に反映されやすい業種です。", plannedSlug: "apparel-zakka" },
      { name: "ファストフード・チェーン飲食", description: "厨房機器と空調が営業時間に沿って動きやすい業種です。", plannedSlug: "fast-food-chain" },
      { name: "レストラン・居酒屋", description: "夜間営業と厨房負荷の重なりが特徴になりやすい業種です。", plannedSlug: "restaurant-izakaya" },
      { name: "カフェ・ベーカリー", description: "厨房設備と空調の両方を見直したい業種です。", plannedSlug: "cafe-bakery" },
    ],
  },
  {
    slug: "hotel-leisure",
    name: "宿泊・レジャー系",
    shortDescription:
      "ホテル、温浴、スポーツ、アミューズメントなど、長時間営業や給湯・空調負荷が大きい業種をまとめています。",
    metadataTitle: "宿泊・レジャー系｜法人向け電気料金の値上がりリスク",
    metadataDescription:
      "ホテル、温浴施設、スポーツジム、アミューズメントなど、長時間営業や給湯・空調負荷が大きい業種を整理します。",
    intro:
      "ホテル、温浴、スポーツ施設、娯楽施設など、長時間営業や24時間設備の影響を受けやすい業種をまとめています。空調、給湯、照明、設備維持の負荷が大きく、季節要因や利用時間帯の違いが請求額に出やすい分類です。",
    features: [
      "長時間営業や24時間設備が多い",
      "給湯・空調・照明の負荷が重なりやすい",
      "夕方から夜、または冬場に負荷が強まりやすい施設がある",
    ],
    reviewPoints: [
      "給湯と空調のコスト構造",
      "稼働率と固定費のバランス",
      "冬場・夜間の負荷の出方",
    ],
    industries: [
      { name: "シティホテル・リゾートホテル", description: "客室稼働と共用部負荷が重なりやすい宿泊業です。", plannedSlug: "city-hotel-resort-hotel" },
      { name: "ビジネスホテル", description: "客室回転と共用空調の効率が重要な業種です。", plannedSlug: "business-hotel" },
      { name: "旅館・温泉施設", description: "給湯と暖房の比率が高くなりやすい施設です。", plannedSlug: "ryokan-onsen" },
      { name: "スポーツジム・フィットネス", description: "営業時間の長さと空調負荷が目立ちやすい業種です。", plannedSlug: "gym-fitness" },
      { name: "パチンコ・アミューズメント", description: "大型空間の照明と空調負荷が継続しやすい業種です。", plannedSlug: "pachinko-amusement" },
      { name: "映画館・劇場", description: "上映時間や催事時間に応じて負荷が変わりやすい施設です。", plannedSlug: "cinema-theater" },
      { name: "温浴施設・サウナ", description: "給湯と加温設備のコスト影響が大きい施設です。", plannedSlug: "spa-sauna" },
      { name: "ゴルフ場・屋外レジャー", description: "季節変動と付帯施設の負荷が見えやすい業種です。", plannedSlug: "golf-outdoor-leisure" },
    ],
  },
  {
    slug: "medical-welfare",
    name: "医療・福祉系",
    shortDescription:
      "病院、介護施設、保育施設など、止めにくい設備や快適性維持が重要な業種をまとめています。",
    metadataTitle: "医療・福祉系｜法人向け電気料金の値上がりリスク",
    metadataDescription:
      "病院、診療所、介護施設、保育施設など、止めにくい設備や快適性維持が重要な業種の特徴を整理します。",
    intro:
      "病院、診療所、介護施設、保育施設など、止めにくい設備や快適性維持が重視される業種をまとめています。安全性や快適性の観点から単純な節電がしにくく、給湯や空調の負荷が経営に影響しやすい分類です。",
    features: [
      "24時間維持や温度管理が必要な施設が多い",
      "空調・給湯・照明を止めにくい",
      "コスト転嫁しにくい事業が多い",
    ],
    reviewPoints: [
      "ベース負荷の高さ",
      "快適性や安全性を崩さない見直し余地",
      "給湯・空調の設備更新余地",
    ],
    industries: [
      { name: "総合病院（200床以上）", description: "24時間設備と医療機器の安定稼働が前提の施設です。", plannedSlug: "general-hospital-200plus" },
      { name: "中小病院（200床未満）", description: "病床稼働と空調・給湯負荷の両方を見たい施設です。", plannedSlug: "small-hospital-under-200" },
      { name: "クリニック・診療所", description: "診療時間帯の空調と医療機器負荷が中心の業種です。", plannedSlug: "clinic" },
      { name: "歯科医院", description: "診療機器と空調の組み合わせが特徴になりやすい業種です。", plannedSlug: "dental-clinic" },
      { name: "介護施設・老人ホーム", description: "居住性維持のために負荷を落としにくい施設です。", plannedSlug: "nursing-home" },
      { name: "保育園・幼稚園", description: "保育時間帯の空調・給湯負荷が見えやすい施設です。", plannedSlug: "nursery-kindergarten" },
    ],
  },
  {
    slug: "manufacturing",
    name: "製造系",
    shortDescription:
      "鉄鋼、化学、食品、半導体など、工程や操業形態により負荷の出方が大きく変わる業種をまとめています。",
    metadataTitle: "製造系｜法人向け電気料金の値上がりリスク",
    metadataDescription:
      "鉄鋼、化学、半導体、食品など、工程や操業形態により電力負荷が大きく変わる製造系業種を整理します。",
    intro:
      "重工業、化学、機械、半導体、食品など、工程や操業時間によって負荷の出方が大きく変わる業種をまとめています。連続操業型とシフト型で見方が変わりやすく、使用量そのものの大きさがコストに直結しやすい分類です。",
    features: [
      "生産工程によって負荷の形が大きく異なる",
      "連続操業型はベース負荷が大きい",
      "シフト型はピーク負荷や基本料金が重くなりやすい",
    ],
    reviewPoints: [
      "連続操業かシフト操業か",
      "生産量と電力コストの関係",
      "太陽光、自家消費、排熱活用の余地",
    ],
    industries: [
      { name: "鉄鋼・金属（高炉・電炉）", description: "大型設備の連続運転がコストに直結しやすい業種です。", plannedSlug: "steel-metal" },
      { name: "化学・石油化学プラント", description: "連続工程と保安設備の負荷が大きい業種です。", plannedSlug: "chemical-petrochemical" },
      { name: "自動車・輸送機器組立", description: "ライン稼働時間と空調負荷の両方が重要な業種です。", plannedSlug: "automobile-transport-equipment" },
      { name: "電子部品・半導体工場", description: "クリーン環境維持と装置負荷が大きい業種です。", plannedSlug: "electronics-semiconductor" },
      { name: "食品加工・飲料工場", description: "冷却・加熱・搬送の設備が重なりやすい業種です。", plannedSlug: "food-beverage-factory" },
      { name: "製紙・パルプ工場", description: "大型モーターと乾燥工程の負荷が特徴になりやすい業種です。", plannedSlug: "paper-pulp" },
      { name: "繊維・アパレル工場", description: "操業時間と空調・機械負荷の組み合わせを見たい業種です。", plannedSlug: "textile-apparel" },
      { name: "医薬品・化粧品工場", description: "品質管理と空調維持の負荷が安定して出やすい業種です。", plannedSlug: "pharmaceutical-cosmetics" },
      { name: "印刷・包装工場", description: "工程別の稼働差でピークが出やすい業種です。", plannedSlug: "printing-packaging" },
    ],
  },
  {
    slug: "logistics-infrastructure",
    name: "物流・インフラ系",
    shortDescription:
      "物流センター、冷凍倉庫、上下水道、通信設備など、設備の稼働継続が前提になりやすい業種をまとめています。",
    metadataTitle: "物流・インフラ系｜法人向け電気料金の値上がりリスク",
    metadataDescription:
      "物流センター、冷凍倉庫、上下水道、通信設備など、設備の継続稼働が前提になりやすい業種を整理します。",
    intro:
      "物流施設、冷凍倉庫、上下水道、通信設備など、設備の継続稼働が前提になりやすい業種をまとめています。施設によって負荷の大きさは異なりますが、ポンプ、冷凍機、照明、通信設備などの継続運転がコストの土台になりやすい分類です。",
    features: [
      "継続運転設備が多い",
      "常温倉庫と冷凍倉庫で負荷特性が大きく異なる",
      "ポンプや冷凍機がコストの中心になりやすい",
    ],
    reviewPoints: [
      "24時間負荷の大きさ",
      "設備効率と更新余地",
      "太陽光やピーク回避との相性",
    ],
    industries: [
      { name: "物流センター（常温）", description: "照明・搬送設備・空調の組み合わせが中心の施設です。", plannedSlug: "logistics-center-ambient" },
      { name: "冷蔵・冷凍倉庫", description: "冷凍機の継続運転がベース負荷になりやすい施設です。", plannedSlug: "cold-storage-warehouse" },
      { name: "配送拠点・トラックターミナル", description: "入出庫時間帯に負荷が寄りやすい業種です。", plannedSlug: "truck-terminal" },
      { name: "上下水道・浄水施設", description: "ポンプ設備の継続運転がコストに影響しやすい施設です。", plannedSlug: "water-infrastructure" },
      { name: "通信基地局・鉄塔", description: "小規模でも24時間負荷が継続しやすい設備です。", plannedSlug: "telecom-base-station" },
    ],
  },
  {
    slug: "it-technology",
    name: "IT・テクノロジー系",
    shortDescription:
      "データセンターやITオフィスなど、電力密度や冷却負荷の影響が大きい業種をまとめています。",
    metadataTitle: "IT・テクノロジー系｜法人向け電気料金の値上がりリスク",
    metadataDescription:
      "データセンターやIT企業オフィスなど、電力密度や冷却負荷の影響が大きい業種を整理します。",
    intro:
      "データセンターやIT企業オフィスなど、サーバーや冷却設備の影響が大きい業種をまとめています。電力密度が高く、冷却負荷や再エネ調達の考え方まで含めて見直す必要がある分類です。",
    features: [
      "24時間稼働設備の比率が高い",
      "冷却負荷がコストに直結しやすい",
      "電力の安定供給と再エネ調達が重要になりやすい",
    ],
    reviewPoints: [
      "IT機器と冷却設備の比率",
      "ベースロードの大きさ",
      "施設効率と再エネ調達の考え方",
    ],
    industries: [
      { name: "データセンター（ハイパースケール）", description: "サーバー密度と冷却効率が重要な大規模施設です。", plannedSlug: "hyperscale-data-center" },
      { name: "データセンター（中小規模）", description: "設備更新と契約条件の見直し余地が出やすい施設です。", plannedSlug: "mid-small-data-center" },
      { name: "IT企業オフィス", description: "執務負荷に加えてサーバーや空調の継続負荷を見たい業種です。", plannedSlug: "it-office" },
    ],
  },
  {
    slug: "agriculture-primary",
    name: "農業・一次産業系",
    shortDescription:
      "植物工場や養殖施設など、温度管理や生産設備に電力を使う業種をまとめています。",
    metadataTitle: "農業・一次産業系｜法人向け電気料金の値上がりリスク",
    metadataDescription:
      "植物工場や養殖施設など、温度管理や生産設備に電力を使う農業・一次産業系の特徴を整理します。",
    intro:
      "植物工場や養殖施設など、温度管理や生産設備に電力を使う業種をまとめています。生産コストに占める電気代の比率が高くなりやすく、採算性との関係が見えやすい分類です。",
    features: [
      "温度管理や生産設備の負荷が大きい",
      "電気代が採算に直結しやすい",
      "再エネ調達や断熱改善の影響が大きい",
    ],
    reviewPoints: [
      "生産コストに占める電気代の比率",
      "温度管理設備の効率",
      "再エネや断熱の改善余地",
    ],
    industries: [
      { name: "植物工場・大規模温室", description: "空調・照明・ポンプ負荷が継続しやすい施設です。", plannedSlug: "plant-factory-greenhouse" },
      { name: "水産加工・養殖施設", description: "水温管理やポンプ設備の電力比率が高くなりやすい業種です。", plannedSlug: "aquaculture-processing-facility" },
    ],
  },
];

const PUBLISHED_INDUSTRY_ARTICLES: PublishedIndustryArticle[] = [
  {
    middleSlug: "office-public",
    industrySlug: "office-building-large",
    href: "/articles/by-industry/office-public/office-building-large",
  },
  {
    middleSlug: "office-public",
    industrySlug: "office-building-mid",
    href: "/articles/by-industry/office-public/office-building-mid",
  },
  {
    middleSlug: "office-public",
    industrySlug: "office-small-tenant",
    href: "/articles/by-industry/office-public/office-small-tenant",
  },
  {
    middleSlug: "office-public",
    industrySlug: "coworking-space",
    href: "/articles/by-industry/office-public/coworking-space",
  },
  {
    middleSlug: "office-public",
    industrySlug: "government-office",
    href: "/articles/by-industry/office-public/government-office",
  },
  {
    middleSlug: "office-public",
    industrySlug: "public-hall-cultural-facility",
    href: "/articles/by-industry/office-public/public-hall-cultural-facility",
  },
  {
    middleSlug: "office-public",
    industrySlug: "library-museum",
    href: "/articles/by-industry/office-public/library-museum",
  },
  {
    middleSlug: "office-public",
    industrySlug: "university-research-institute",
    href: "/articles/by-industry/office-public/university-research-institute",
  },
  {
    middleSlug: "office-public",
    industrySlug: "school-k12",
    href: "/articles/by-industry/office-public/school-k12",
  },
  {
    middleSlug: "office-public",
    industrySlug: "vocational-school-prep",
    href: "/articles/by-industry/office-public/vocational-school-prep",
  },
  {
    middleSlug: "commercial",
    industrySlug: "supermarket-large-scale",
    href: "/articles/by-industry/commercial/supermarket-large-scale",
  },
  {
    middleSlug: "commercial",
    industrySlug: "department-store",
    href: "/articles/by-industry/commercial/department-store",
  },
  {
    middleSlug: "commercial",
    industrySlug: "large-shopping-mall",
    href: "/articles/by-industry/commercial/large-shopping-mall",
  },
  {
    middleSlug: "commercial",
    industrySlug: "supermarket-small",
    href: "/articles/by-industry/commercial/supermarket-small",
  },
  {
    middleSlug: "commercial",
    industrySlug: "convenience-store",
    href: "/articles/by-industry/commercial/convenience-store",
  },
  {
    middleSlug: "commercial",
    industrySlug: "drugstore",
    href: "/articles/by-industry/commercial/drugstore",
  },
  {
    middleSlug: "commercial",
    industrySlug: "electronics-retailer",
    href: "/articles/by-industry/commercial/electronics-retailer",
  },
  {
    middleSlug: "commercial",
    industrySlug: "home-center",
    href: "/articles/by-industry/commercial/home-center",
  },
  {
    middleSlug: "commercial",
    industrySlug: "apparel-zakka",
    href: "/articles/by-industry/commercial/apparel-zakka",
  },
  {
    middleSlug: "commercial",
    industrySlug: "fast-food-chain",
    href: "/articles/by-industry/commercial/fast-food-chain",
  },
  {
    middleSlug: "commercial",
    industrySlug: "restaurant-izakaya",
    href: "/articles/by-industry/commercial/restaurant-izakaya",
  },
  {
    middleSlug: "commercial",
    industrySlug: "cafe-bakery",
    href: "/articles/by-industry/commercial/cafe-bakery",
  },
  {
    middleSlug: "medical-welfare",
    industrySlug: "general-hospital-200plus",
    href: "/articles/by-industry/medical-welfare/general-hospital-200plus",
  },
  {
    middleSlug: "medical-welfare",
    industrySlug: "small-hospital-under-200",
    href: "/articles/by-industry/medical-welfare/small-hospital-under-200",
  },
  {
    middleSlug: "medical-welfare",
    industrySlug: "clinic",
    href: "/articles/by-industry/medical-welfare/clinic",
  },
  {
    middleSlug: "medical-welfare",
    industrySlug: "dental-clinic",
    href: "/articles/by-industry/medical-welfare/dental-clinic",
  },
  {
    middleSlug: "medical-welfare",
    industrySlug: "nursing-home",
    href: "/articles/by-industry/medical-welfare/nursing-home",
  },
  {
    middleSlug: "medical-welfare",
    industrySlug: "nursery-kindergarten",
    href: "/articles/by-industry/medical-welfare/nursery-kindergarten",
  },
  {
    middleSlug: "hotel-leisure",
    industrySlug: "city-hotel-resort-hotel",
    href: "/articles/by-industry/hotel-leisure/city-hotel-resort-hotel",
  },
  {
    middleSlug: "hotel-leisure",
    industrySlug: "business-hotel",
    href: "/articles/by-industry/hotel-leisure/business-hotel",
  },
  {
    middleSlug: "hotel-leisure",
    industrySlug: "ryokan-onsen",
    href: "/articles/by-industry/hotel-leisure/ryokan-onsen",
  },
  {
    middleSlug: "hotel-leisure",
    industrySlug: "gym-fitness",
    href: "/articles/by-industry/hotel-leisure/gym-fitness",
  },
  {
    middleSlug: "hotel-leisure",
    industrySlug: "pachinko-amusement",
    href: "/articles/by-industry/hotel-leisure/pachinko-amusement",
  },
  {
    middleSlug: "hotel-leisure",
    industrySlug: "cinema-theater",
    href: "/articles/by-industry/hotel-leisure/cinema-theater",
  },
  {
    middleSlug: "hotel-leisure",
    industrySlug: "spa-sauna",
    href: "/articles/by-industry/hotel-leisure/spa-sauna",
  },
  {
    middleSlug: "hotel-leisure",
    industrySlug: "golf-outdoor-leisure",
    href: "/articles/by-industry/hotel-leisure/golf-outdoor-leisure",
  },
  {
    middleSlug: "manufacturing",
    industrySlug: "steel-metal",
    href: "/articles/by-industry/manufacturing/steel-metal",
  },
  {
    middleSlug: "manufacturing",
    industrySlug: "chemical-petrochemical",
    href: "/articles/by-industry/manufacturing/chemical-petrochemical",
  },
  {
    middleSlug: "manufacturing",
    industrySlug: "automobile-transport-equipment",
    href: "/articles/by-industry/manufacturing/automobile-transport-equipment",
  },
  {
    middleSlug: "manufacturing",
    industrySlug: "electronics-semiconductor",
    href: "/articles/by-industry/manufacturing/electronics-semiconductor",
  },
  {
    middleSlug: "manufacturing",
    industrySlug: "food-beverage-factory",
    href: "/articles/by-industry/manufacturing/food-beverage-factory",
  },
  {
    middleSlug: "manufacturing",
    industrySlug: "paper-pulp",
    href: "/articles/by-industry/manufacturing/paper-pulp",
  },
  {
    middleSlug: "manufacturing",
    industrySlug: "textile-apparel",
    href: "/articles/by-industry/manufacturing/textile-apparel",
  },
  {
    middleSlug: "manufacturing",
    industrySlug: "pharmaceutical-cosmetics",
    href: "/articles/by-industry/manufacturing/pharmaceutical-cosmetics",
  },
  {
    middleSlug: "manufacturing",
    industrySlug: "printing-packaging",
    href: "/articles/by-industry/manufacturing/printing-packaging",
  },
  {
    middleSlug: "logistics-infrastructure",
    industrySlug: "logistics-center-ambient",
    href: "/articles/by-industry/logistics-infrastructure/logistics-center-ambient",
  },
  {
    middleSlug: "logistics-infrastructure",
    industrySlug: "cold-storage-warehouse",
    href: "/articles/by-industry/logistics-infrastructure/cold-storage-warehouse",
  },
  {
    middleSlug: "logistics-infrastructure",
    industrySlug: "truck-terminal",
    href: "/articles/by-industry/logistics-infrastructure/truck-terminal",
  },
  {
    middleSlug: "logistics-infrastructure",
    industrySlug: "water-infrastructure",
    href: "/articles/by-industry/logistics-infrastructure/water-infrastructure",
  },
  {
    middleSlug: "logistics-infrastructure",
    industrySlug: "telecom-base-station",
    href: "/articles/by-industry/logistics-infrastructure/telecom-base-station",
  },
  {
    middleSlug: "it-technology",
    industrySlug: "hyperscale-data-center",
    href: "/articles/by-industry/it-technology/hyperscale-data-center",
  },
  {
    middleSlug: "it-technology",
    industrySlug: "mid-small-data-center",
    href: "/articles/by-industry/it-technology/mid-small-data-center",
  },
  {
    middleSlug: "it-technology",
    industrySlug: "it-office",
    href: "/articles/by-industry/it-technology/it-office",
  },
] as const;

export function getIndustryMiddleCategories() {
  return INDUSTRY_MIDDLE_CATEGORIES;
}

export function getIndustryMiddleCategory(slug: string) {
  return INDUSTRY_MIDDLE_CATEGORIES.find((category) => category.slug === slug);
}

export function getIndustryArticleHref(middleSlug: string, industrySlug: string) {
  return PUBLISHED_INDUSTRY_ARTICLES.find(
    (article) => article.middleSlug === middleSlug && article.industrySlug === industrySlug,
  )?.href;
}
