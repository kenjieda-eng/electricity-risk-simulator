import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "地域新電力（自治体系・地産地消）の法人活用ガイド｜地産地消電源・自治体連携・市民協同型の選択軸";
const pageDescription =
  "地域新電力（自治体出資型・地産地消型・市民協同型）の類型を、公開情報に基づき中立的に整理。本ページは特定企業ではなく『地域新電力』というカテゴリの法人活用解説です。自治体出資・地産地消の電源、市民協同・コミュニティ電力、地域脱炭素・SDGs連携、再エネ100%自治体ビジョンとの整合、法人需要家としての利用観点、契約手続き・サポート体制を、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣評価は行いません。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "地域新電力 法人",
    "自治体 新電力 地産地消",
    "市民協同 電力",
    "脱炭素先行地域 新電力",
    "再エネ100% 自治体",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/local-utility-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/local-utility-corporate-electricity-guide",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/by-region", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/by-region"],
  },
};

const overview = [
  {
    label: "地域新電力（自治体系・地産地消）とは",
    detail:
      "地域新電力は、特定の地域（市町村単位）を主な事業エリアとし、その地域の再生可能エネルギー電源（太陽光・風力・小水力・バイオマス等）を地産地消する目的で設立された小売電気事業者の総称です。自治体（市町村）が出資する『自治体系』、地域の事業者・市民が出資する『市民協同型』、地域の事業者が中心の『地域事業者型』など、複数の類型があります。本ページは特定企業のサービスを解説するものではなく、『地域新電力』というカテゴリ全体の法人需要家向け活用観点を中立的に整理するものです（出典: 環境省地域脱炭素ロードマップ・経済産業省地域新電力関連資料・参照日2025年10月時点）。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で判断材料を整理します。",
  },
  {
    label: "本ページの位置づけ（カテゴリ解説として）",
    detail:
      "当サイトの『電力会社別解説』カテゴリでは、旧一電大手だけでなく、全国系新電力（ENEOSでんき）、都市ガス系新電力（東京ガスのでんき）、商社系新電力（サミットエナジー）、自治体系・地産地消の地域新電力など、新電力の主要類型ごとの代表例を中立的に整理しています。本ページは『地域新電力』というカテゴリ全体の解説です。具体的な事業者として、みんな電力（株式会社UPDATER）、湘南電力、東松島みらいといねっと、ローカルエナジー、おおいたエコエナジー、北上新電力、生活クラブエナジー等が公開情報で知られていますが、本ページは特定企業の優劣評価を行いません。",
  },
  {
    label: "地域新電力の事業特性（公表情報）",
    detail:
      "地域新電力は、その地域内の再エネ電源（太陽光・風力・小水力・バイオマス）と契約・運営連携し、域内需要家に地産地消で供給することを基本コンセプトとしています。電気代の地域内還流・域内雇用創出・SDGs対応・脱炭素先行地域への貢献などが社会的価値として公開情報で示されています。一方、電源規模が限定的・JEPX依存度が高い・組織体制が小規模等の事業特性もあり、法人需要家として利用する際は事業継続性・価格安定性も含めて中立的に評価する必要があります（出典: 環境省『地域脱炭素ロードマップ』・各自治体公表資料）。",
  },
  {
    label: "法人需要家としての活用シーン",
    detail:
      "地域新電力を法人需要家として活用するシーンとしては、（1）SDGs・地域貢献・域内還流を経営方針に掲げる地域企業・自治体施設、（2）地産地消の再エネ調達でRE100対応を進める地域立地企業、（3）自治体の脱炭素先行地域・再エネ100%自治体ビジョンと整合する事業者、（4）地域コミュニティとの関係構築を重視する小売・観光業等が公開情報で想定されます。地域貢献と価格・サービスのバランスを中立的に評価することが重要です。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、燃料費調整の条件・契約期間・サポート体制・BCP対応・再エネ調達メニュー・地域貢献価値（社会的価値）など複数の観点を総合して判断すべきものです。本ページは地域新電力の公開情報を整理しますが、旧一電継続・全国系新電力・他の選択肢との相見積・比較を行ったうえで、自社条件と経営方針に最適な選択をすることを推奨します。当センターは特定企業の優劣を断定する立場にありません。",
  },
];

const planTypes = [
  {
    name: "自治体出資型地域新電力",
    role: "市町村が主導する地産地消電力事業",
    detail:
      "自治体（市町村）が出資する地域新電力で、地域の再エネ電源・自治体保有電源を活用し、自治体施設・地域企業・市民への供給を行う類型です。例として、湘南電力（神奈川県小田原市が関与）、ローカルエナジー（鳥取県米子市等）、おおいたエコエナジー、東松島みらいといねっと（東日本大震災復興型）等が公開情報で知られています。自治体ビジョン（脱炭素先行地域・SDGs・地域循環共生圏）との連携が特徴で、地域内事業者・自治体施設向け契約が中心です。",
  },
  {
    name: "市民協同型・コミュニティ電力",
    role: "市民・地域事業者の協同による電力事業",
    detail:
      "市民・地域事業者が出資・運営する協同組合的な小売電気事業者です。みんな電力（株式会社UPDATER）、生活クラブエナジー、パルシステム関連等が公開情報で知られており、再エネ電源の選択（特定電源指定・発電所単位の選択）・電気代の使途透明化・コミュニティ連携を特徴としています。RE100対応の手段の一つとしても活用される類型です。",
  },
  {
    name: "地域事業者型地域新電力",
    role: "地域企業中心の電力事業",
    detail:
      "地域のエネルギー・建設・商社等の事業者が中心となって設立した地域新電力です。地域の小水力・木質バイオマス・地熱等の再エネ電源と連携し、地域内の事業者・自治体施設向けに供給する類型で、北海道・東北・北陸・中国・四国・九州など、地域の再エネポテンシャルが高いエリアで複数の事例が公開情報で公表されています。",
  },
  {
    name: "電源構成・燃料費調整（共通の論点）",
    role: "全類型共通の確認事項",
    detail:
      "地域新電力の電源構成は、地域の再エネ電源比率が高い場合・JEPX依存度が一定割合ある場合等、事業者により異なります。燃料費調整額は、JEPX連動・独自方式・固定方式等が採用されることが一般的で、メニュー・契約区分により異なります。電源構成・燃調算定方式は事業者ごとに公表されているため、契約検討時には必ず確認することが重要です（出典: 各地域新電力公式サイト・電力ガス取引監視等委員会）。",
  },
];

const dataPoints = [
  {
    label: "供給エリア（事業者ごとに異なる）",
    detail:
      "地域新電力の供給エリアは、特定の市町村・都道府県・地域に限定されている場合が多いです。エリア外の拠点では契約できない場合があるため、多拠点の法人需要家は拠点別の供給可否を確認してください（出典: 各地域新電力公式サイトサービス提供エリア公表）。",
  },
  {
    label: "電源ポートフォリオ（公表情報）",
    detail:
      "地域新電力の電源は、地域内の再エネ電源（太陽光・風力・小水力・バイオマス）が中心となる場合が多いですが、需給バランス調整のためJEPXからの調達も組み合わせる構造が一般的です。再エネ比率・電源構成は事業者ごとに公表されているため、RE100対応や脱炭素目標との整合性確認に活用できます（出典: 各地域新電力公式サイト電源構成公表・電力ガス取引監視等委員会）。",
  },
  {
    label: "JEPX市場での取扱い",
    detail:
      "新電力は不足分・余剰分をJEPX（日本卸電力取引所）で調達・販売する構造が一般的です。地域新電力でも一定の市場依存があり、JEPXスポット価格の高騰時には小売価格に影響が出る場合があります。固定単価方式と市場連動方式のいずれを選ぶかは、自社の使用パターン・リスク許容度に応じて中立的に判断すべきです（出典: JEPX公表データ・電力ガス取引監視等委員会）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。これらは特定企業のプラン選択では回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 自治体施設・公共施設の電力契約",
    before:
      "Before: 市町村の公共施設（庁舎・学校・図書館・体育館等）が、旧一電または広域新電力との契約で電力調達。脱炭素先行地域指定・再エネ100%自治体ビジョンの達成手段が必要。",
    after:
      "After: 自治体が出資する地域新電力との契約への切替を検討。地産地消の地域再エネ電源を活用したRE100相当の調達、電気代の域内還流、脱炭素先行地域への貢献を評価。同時に、他選択肢（旧一電の再エネメニュー・全国系新電力PPA等）とも相見積で同一条件比較。",
    result:
      "Result: 自治体ビジョン達成と地域経済還流の社会的価値を含めて中立的に評価。価格・サービスと社会的価値のバランスを判断材料に。※具体的な削減額は契約条件により異なり、推測値は記載しません。",
  },
  {
    title: "ケース2: 地域の中堅企業（地産地消・SDGs志向）",
    before:
      "Before: 地域立地の中堅企業（食品・観光・小売等）が、地域貢献・SDGs対応を経営方針に掲げ、地域社会との関係構築を重視。",
    after:
      "After: 地域新電力（自治体系・市民協同型）への契約切替を、地産地消・地域貢献・SDGs対応の手段として検討。同時に、旧一電継続・全国系新電力との相見積で、価格・サービス・社会的価値を中立的に比較。地域貢献の経営方針との整合性を含めて総合評価。",
    result:
      "Result: 地域貢献・SDGs対応の社会的価値と、価格・サービスの両面を中立的に評価し、自社の経営方針との整合性を確認。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 大手企業の地域立地拠点（RE100対応）",
    before:
      "Before: RE100加盟の大手企業が、地域立地の工場・店舗・オフィスでの電力調達を検討。地域社会との関係構築・地産地消・追加性のある再エネ調達を志向。",
    after:
      "After: 地域新電力（市民協同型・自治体系）との契約を、地産地消の再エネ調達手段として検討。RE100クライテリア適合性、追加性、CO2排出係数の扱いを確認。同時に、コーポレートPPA・非化石証書等の他選択肢とも相見積で比較。",
    result:
      "Result: 地域新電力の規模・電源構成の特性を踏まえ、RE100調達ポートフォリオの一部として位置づける選択肢を整理。※削減効果・調達条件は組成内容により異なります。",
  },
];

const procedures = [
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。地域新電力の場合、対応エリアの確認、再エネ比率・電源構成の公表内容の確認、契約期間・解約条件の確認が追加ポイントです。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。",
  },
  {
    label: "サポート体制・問い合わせ窓口",
    detail:
      "地域新電力は事業者ごとに法人向けの問い合わせ窓口を公開しています。組織規模が小規模な場合、サポート体制（営業担当・契約管理）も小規模となる傾向があります。停電時の物理的な復旧は一般送配電事業者（エリア別の旧一電送配電会社）が担うため、契約小売事業者によらず復旧対応は共通である点も理解しておくと良いでしょう。",
  },
  {
    label: "地域新電力固有の留意事項",
    detail:
      "地域新電力は組織規模が小規模なため、価格安定性・事業継続性・サービス品質に旧一電や大手新電力と異なる特性があります。新電力撤退時の最終保障供給制度の理解、緊急時の連絡フロー、契約条件の柔軟性（地域貢献に応じた割引等の有無）を契約検討時に確認することが重要です。",
  },
];

const cautionItems = [
  {
    label: "単価だけでなく社会的価値も含めて判断する",
    detail:
      "地域新電力の選択は、電力量料金単価だけでなく、地産地消・地域貢献・SDGs対応・電気代の域内還流などの社会的価値も含めて総合判断すべきです。本ページは地域新電力の情報を整理しますが、特定社が一律に有利・不利と断定するものではありません。",
  },
  {
    label: "供給エリアと電源容量の確認",
    detail:
      "地域新電力は特定エリアに限定された事業者が多く、エリア外拠点は契約できない場合があります。多拠点の法人需要家は、地域新電力＋他選択肢のハイブリッド調達戦略も検討する必要があります。",
  },
  {
    label: "事業継続性・撤退リスクの確認",
    detail:
      "地域新電力は組織規模が小規模な場合が多く、JEPX市場高騰局面で経営に大きな影響を受けた事例も過去にありました。新電力撤退・事業譲渡・廃業リスクへの備えとして、最終保障供給制度の理解、契約条件の確認が重要です。",
  },
  {
    label: "再エネ比率・追加性の確認",
    detail:
      "RE100対応で地域新電力を活用する場合、再エネ比率・電源構成・追加性（Additionality）・非化石証書の活用方法・CO2排出係数の扱いを公開情報で確認する必要があります。RE100クライテリアへの適合性を事前に確認しましょう。",
  },
  {
    label: "比較は相見積で",
    detail:
      "中立的な判断のためには、地域新電力・他の新電力・旧一電継続の複数選択肢からの相見積を取得し、同一条件（契約電力・使用量・期間）で比較することが基本です。社会的価値の評価も含めて、自社の経営方針との整合性を確認します。",
  },
];

const compareViewpoints = [
  {
    label: "プラン体系の確認観点",
    detail:
      "対応契約区分（特別高圧／高圧／低圧）、季節・時間帯別単価の有無、基本料金の算定、力率割引の条件、再エネ比率公表を公開情報で確認します。",
  },
  {
    label: "電源構成・地産地消の透明性",
    detail:
      "地域内再エネ電源の比率、特定電源指定の可否、追加性、CO2排出係数の扱いを評価します。地域新電力の強みの一つです。",
  },
  {
    label: "地域貢献・社会的価値",
    detail:
      "電気代の域内還流、地域雇用創出、自治体脱炭素ビジョンとの整合、SDGs対応など社会的価値を経営方針との整合性で評価します。",
  },
  {
    label: "事業継続性・撤退リスク",
    detail:
      "組織規模、過去のJEPX高騰局面での対応実績、最終保障供給への切替体制を確認します。",
  },
  {
    label: "他選択肢との比較環境",
    detail:
      "地域新電力・旧一電継続・全国系新電力・PPAの複数パターンで相見積を取得し、同一条件で比較できる環境にあります。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化",
    detail:
      "高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド管理で適正化することが基本料金削減の第一歩です。",
  },
  {
    label: "地産地消の再エネ調達によるCN対応",
    detail:
      "地域新電力の地産地消再エネ電源を活用することで、追加性のある再エネ調達・地域貢献の両立が可能です。RE100調達ポートフォリオの一部としての位置づけが選択肢の一つです。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "高効率設備・LED・空調更新・自家消費型PV・蓄電池等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化と地域貢献の両立が図れます。",
  },
  {
    label: "ハイブリッド調達（多拠点対応）",
    detail:
      "多拠点法人は、地域立地拠点で地域新電力、他拠点で旧一電または全国系新電力というハイブリッド調達戦略で、社会的価値と運用効率の両立が可能です。",
  },
  {
    label: "相見積による中立判断",
    detail:
      "地域新電力・他新電力・旧一電継続の複数パターンで相見積を取得し、価格・サービス・社会的価値の総合評価で判断できます。",
  },
];

const checklistItems = [
  "自社拠点が検討する地域新電力の供給エリアに含まれるか確認したか",
  "地域新電力の類型（自治体系／市民協同型／地域事業者型）を整理したか",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "電源構成・再エネ比率・追加性を公開情報で確認したか",
  "燃料費調整額の算定方式（JEPX連動／独自／固定）を契約書で確認したか",
  "契約期間と期間途中解約時の違約金条項を確認したか",
  "事業継続性・組織規模・過去のJEPX高騰時の対応実績を確認したか",
  "新電力撤退時の最終保障供給への切替フローを理解したか",
  "地域貢献・SDGs対応の社会的価値を自社経営方針との整合性で評価したか",
  "地域新電力・他新電力・旧一電継続の複数パターンで相見積を取得したか",
  "多拠点の場合、ハイブリッド調達戦略も検討したか",
  "単価だけでなく総合的な条件と社会的価値で中立的に判断したか",
];

const faqItems = [
  {
    question: "地域新電力（自治体系・地産地消）とは何ですか？",
    answer:
      "特定の地域（市町村単位）を主な事業エリアとし、その地域の再生可能エネルギー電源（太陽光・風力・小水力・バイオマス等）を地産地消する目的で設立された小売電気事業者の総称です。自治体出資型、市民協同型、地域事業者型などの類型があります。電気代の域内還流・地域雇用創出・SDGs対応・脱炭素先行地域への貢献が社会的価値として公表されています。本ページは特定企業の優劣評価ではなく、カテゴリ全体の解説として法人契約者の判断材料を中立的に整理するものです（出典: 環境省地域脱炭素ロードマップ・経済産業省地域新電力関連資料）。",
  },
  {
    question: "地域新電力と全国系新電力・旧一電の違いは？",
    answer:
      "地域新電力は特定エリアに事業を集中し、地産地消・地域貢献を社会的価値として打ち出している点が特徴です。全国系新電力は複数エリア対応で広域展開、旧一電は各エリアの一般電気事業者を母体とする小売事業者です。料金体系・電源構成・サポート体制・事業継続性などで違いがあります。当センターは特定類型・特定社のいずれかを推奨する立場にはなく、自社条件と経営方針に応じた中立的な判断を支援します。",
  },
  {
    question: "代表的な地域新電力にはどのような事業者がありますか？",
    answer:
      "公開情報で知られている事業者として、みんな電力（株式会社UPDATER、市民協同型）、湘南電力（神奈川県小田原市関与）、東松島みらいといねっと（東日本大震災復興型）、ローカルエナジー（鳥取県米子市等）、おおいたエコエナジー、生活クラブエナジー、パルシステムでんき関連、北上新電力等があります。各事業者の供給エリア・電源構成・契約条件はそれぞれ公式サイトで確認できます。本ページはカテゴリ解説のため、特定企業の優劣評価は行いません（出典: 各地域新電力公式サイト・電力ガス取引監視等委員会登録事業者一覧）。",
  },
  {
    question: "地域新電力の電源は本当に地産地消ですか？再エネ比率は？",
    answer:
      "地域新電力の電源は、地域内の再エネ電源（太陽光・風力・小水力・バイオマス）と契約・運営連携している場合が多いですが、需給バランス調整のためJEPXからの調達も組み合わせる構造が一般的です。再エネ比率・電源構成は事業者ごとに大きく異なり、各社の公表情報で確認する必要があります。RE100対応で活用する場合は、追加性・非化石証書の扱い・CO2排出係数の扱いをクライテリア適合性の観点で確認しましょう（出典: 各地域新電力公式サイト電源構成公表・電力ガス取引監視等委員会）。",
  },
  {
    question: "地域新電力と他類型はどちらが有利ですか？",
    answer:
      "当サイトは特定企業・特定類型の優劣を評価する立場にありません。一般社団法人エネルギー情報センターは特定企業を推奨も否定もしない中立的立場で判断材料を整理しています。電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件・契約期間・サポート・電源構成・社会的価値（地域貢献・SDGs対応）を総合して判断すべきものです。複数社から同一条件で相見積を取得し、自社条件と経営方針に最適な選択をすることを推奨します。",
  },
  {
    question: "地域新電力は撤退リスクが高いと聞きました。どう判断すれば良いですか？",
    answer:
      "地域新電力は組織規模が小規模な場合が多く、2021年冬・2022〜2023年冬のJEPX市場高騰局面で経営に大きな影響を受けた事例が複数公開情報で報告されています。事業継続性は組織体制・出資構成・電源確保状況により異なります。契約検討時は、過去のJEPX高騰時の対応実績、最終保障供給制度（一般送配電事業者がセーフティネットとして提供）の概要、撤退時の切替手順を確認しておくことが重要です（出典: 電力・ガス取引監視等委員会・各一般送配電事業者公表資料）。",
  },
  {
    question: "RE100対応で地域新電力を活用できますか？",
    answer:
      "地域新電力の地産地消再エネ電源は、RE100の調達手段の一つとして活用可能ですが、RE100クライテリアへの適合性（追加性、CO2排出係数の扱い、非化石証書の有無等）を事前に確認する必要があります。地域新電力の電源規模が限定的なため、RE100調達の主要部分は別途PPAや非化石証書で補完しつつ、地域新電力を地域立地拠点での地産地消手段として位置づけるポートフォリオ的活用も選択肢の一つです（出典: RE100公表クライテリア・環境省地域脱炭素ロードマップ）。",
  },
  {
    question: "地域新電力の契約や切替に必要なものは？",
    answer:
      "供給地点特定番号（22桁）、契約電力、直近12ヶ月の使用実績データが一般的に必要です。供給地点特定番号は検針票・請求書で確認できます。契約時は契約期間・期間途中解約違約金・燃調算定方式・解約条件・電源構成（再エネ比率）を契約書・公開情報で詳細に確認することが重要です。停電時の物理的復旧は一般送配電事業者の管轄で、契約小売事業者によらず共通です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "環境省 地域脱炭素ロードマップ・脱炭素先行地域", url: "https://www.env.go.jp/" },
  { name: "経済産業省 資源エネルギー庁（地域新電力関連資料）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧）", url: "https://www.emsc.meti.go.jp/" },
  { name: "JEPX 日本卸電力取引所（スポット市場価格）", url: "http://www.jepx.org/" },
  { name: "RE100公式サイト（クライテリア・調達手段）", url: "https://www.there100.org/" },
];

export default function LocalUtilityCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/local-utility-corporate-electricity-guide"
        datePublished="2026-05-30"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "地域新電力（自治体系・地産地消）法人活用ガイド", url: "https://simulator.eic-jp.org/local-utility-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">地域新電力（自治体系・地産地消）法人活用ガイド</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            地域新電力（自治体系・地産地消）の法人活用ガイド｜地産地消電源・自治体連携・市民協同型の選択軸
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            地域新電力（自治体出資型・地産地消型・市民協同型）の類型を、公開情報に基づき中立的に整理します。本ページは特定企業ではなく『地域新電力』というカテゴリの法人活用解説です。自治体出資・地産地消の電源、市民協同・コミュニティ電力、地域脱炭素・SDGs連携、再エネ100%自治体ビジョンとの整合、法人需要家としての利用観点、契約手続き・サポート体制を、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-05-30" updatedAt="2026-05-30" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>地域新電力の類型（自治体出資型／市民協同型／地域事業者型）と特徴</li>
              <li>地産地消電源の透明性・追加性・電源構成の確認観点</li>
              <li>SDGs・地域貢献・社会的価値の評価軸</li>
              <li>事業継続性・撤退リスクの判断観点</li>
              <li>地域新電力活用のための12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは特定企業ではなく『地域新電力』というカテゴリの解説です。電力会社の選び方は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力会社の比較方法
            </Link>
            も参照してください。本ページは中立的立場で作成しており、特定社の優劣評価・推奨は行いません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">地域新電力の概要と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              地域新電力（自治体系・地産地消）は、地域の再エネ電源を活用し、SDGs・地域貢献を社会的価値として打ち出す新電力の類型です。本ページは旧一電・新電力の主要類型を読み比べる『電力会社別解説』の一つとして、カテゴリ全体の法人活用観点を公開情報に基づき中立的に整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {overview.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力の選び方の基礎は{" "}
              <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力会社の比較方法</Link>
              、再エネ調達の選択肢は{" "}
              <Link href="/renewable-power-procurement" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ電力調達の方法</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">地域新電力の類型と特徴（公開情報）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              地域新電力の主要類型を、自治体出資型・市民協同型・地域事業者型の観点と燃調算定方式で整理します。具体的単価・契約条件は各社の公式公表・個別見積で確認してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {planTypes.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">供給エリア・電源ポートフォリオ・JEPX取扱い（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給エリア、電源ポートフォリオ（地産地消の再エネ比率）、JEPX市場での取扱い、全社共通の制度負担を公表データに基づき整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {dataPoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本セクションのデータは2025年10月時点の公開情報を基に整理した目安です。最新の料金・電源構成・制度単価は各出典元で必ずご確認ください。出典: 環境省・経済産業省・電力ガス取引監視等委員会・各地域新電力公式サイトから整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">活用シーン別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              地域新電力の活用パターンを3シーンで、公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件と経営方針に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">{cs.before}</span></p>
                    <p><span className="font-semibold text-slate-700">{cs.after}</span></p>
                    <p><span className="font-semibold text-emerald-700">{cs.result}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約手続き・サポート体制・地域新電力固有の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人契約の手続きの流れ、供給地点特定番号の確認、サポート窓口、地域新電力固有の留意点を整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {procedures.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給地点特定番号の詳細は{" "}
              <Link href="/supply-point-identification-number" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">供給地点特定番号（22桁）とは</Link>
              、最終保障供給は{" "}
              <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給とは</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中立的に比較するための観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              地域新電力と旧一電・他新電力を中立的に判断するための観点を整理します。価格・サービスだけでなく、社会的価値・電源構成の透明性も含めて総合的に評価することが重要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {compareViewpoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択の考え方は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動が向かない法人</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">事業継続性・撤退リスクを踏まえた留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              地域新電力の公開情報を活用するうえでの留意点を整理します。組織規模・事業継続性・JEPX高騰時の対応実績・RE100クライテリア適合性に注意が必要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {cautionItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費調整額の仕組みは{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気代最適化と地域貢献の打ち手</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              地域新電力契約の有無にかかわらず、法人需要家が取り得る電気代最適化と地域貢献の打ち手を整理します。契約電力適正化・地産地消調達・省エネ投資・ハイブリッド調達・相見積が柱です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {energySaving.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金活用は{" "}
              <Link href="/subsidy-manufacturing-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の補助金活用戦略</Link>
              、{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 完全ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">地域新電力活用チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況と経営方針を整理しましょう。中立的な判断には複数選択肢の相見積と、社会的価値を含めた総合評価が重要です。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の電気代と上振れリスクを試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              地域新電力との契約・地産地消調達を検討する法人需要家は、契約条件・電源構成・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・地産地消調達・社会的価値の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>地域新電力と他選択肢の年間コスト差を把握する</li>
              <li>地域貢献・SDGs対応の社会的価値を経営判断に組み込む</li>
              <li>相見積・省エネ投資による削減余地を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-05-30" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/power-utility-guide", title: "電力会社別解説（カテゴリ一覧）", description: "主要電力会社の法人向けサービスを中立的に整理。" },
              { href: "/eneos-denki-corporate-electricity-guide", title: "ENEOSでんき（法人向け）完全ガイド", description: "全国系新電力の代表例。" },
              { href: "/tokyo-gas-corporate-electricity-guide", title: "東京ガスのでんき（法人向け）完全ガイド", description: "都市ガス系新電力の代表例。" },
              { href: "/summit-energy-corporate-electricity-guide", title: "サミットエナジー（法人向け）完全ガイド", description: "商社系新電力の代表例。" },
              { href: "/major-utility-comparison-corporate-electricity-guide", title: "旧一電10社 横断比較ガイド", description: "旧一電10社の中立比較。" },
              { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "新電力・旧一電を中立的に比較する基礎。" },
              { href: "/renewable-power-procurement", title: "再エネ電力調達の方法", description: "RE100対応の調達手段比較。" },
              { href: "/renewable-energy-plan-explained", title: "再エネプランの解説", description: "再エネメニューの仕組み。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPAの概要", description: "長期PPAの仕組みと活用法。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/last-resort-supply", title: "最終保障供給とは", description: "新電力撤退時のセーフティネット。" },
              { href: "/supply-point-identification-number", title: "供給地点特定番号（22桁）とは", description: "契約・切替に必要な番号の確認方法。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定単価が向くケースの判断軸。" },
              { href: "/decarbonization-glossary", title: "脱炭素用語集", description: "RE100・追加性等の用語整理。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="地域新電力との契約・地産地消調達を検討する法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。一般社団法人エネルギー情報センターは特定の電力会社を推奨も否定もしない中立的立場で、相見積・地産地消調達・社会的価値の優先順位づけの判断材料を整理します。"
            links={[
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="電力契約の見直し、中立的な立場の専門家に相談しませんか？"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。地域新電力切替・地産地消調達・旧一電継続の比較や契約見直しの進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
