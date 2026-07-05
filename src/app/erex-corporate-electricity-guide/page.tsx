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
  "イーレックスグループの法人向け電力ガイド｜バイオマス電源・エバーグリーン小売体制・市場連動/固定の選び方";
const pageDescription =
  "イーレックス株式会社を中核とするイーレックスグループの法人向け電力を、公開情報に基づき中立的に整理。特別高圧・高圧の小売はエバーグリーン・マーケティング株式会社、低圧の小売はエバーグリーン・リテイリング株式会社が担うグループ小売体制、バイオマス発電事業者としての電源特性（脱炭素文脈）、シンプル/完全固定/市場連動型メニューの考え方、燃料費調整の連動条件、契約手続き・サポート、相見積活用のポイントを第三者・社団法人視点で整理します。特定企業の優劣評価は行いません。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "イーレックス 法人 電力",
    "エバーグリーン 高圧 特別高圧",
    "バイオマス 新電力 法人",
    "エバーグリーンマーケティング 法人",
    "市場連動 固定 電力 法人",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/erex-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/erex-corporate-electricity-guide",
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
    label: "イーレックスグループの位置づけ（小売実務のグループ構造に注意）",
    detail:
      "イーレックス株式会社は、電力小売全面自由化に先立つ2000年前後に新電力（特定規模電気事業者／のちの小売電気事業者）として登録した草分けの一つで、その後は複数のバイオマス発電所を運営するバイオマス発電事業者としての性格を強めてきた企業です。ここで最も重要なのは小売実務のグループ構造です。法人向けの電力小売は、イーレックス株式会社が直接需要家に販売しているのではなく、特別高圧・高圧の小売はエバーグリーン・マーケティング株式会社が、低圧の小売はエバーグリーン・リテイリング株式会社が担う体制になっています（いずれもイーレックスグループの小売会社）。本ページで「イーレックスグループの電力」と表現する場合も、実際に法人と供給契約を結ぶのはエバーグリーン各社である点を前提に読み進めてください。本ページは特定企業の優劣を評価するものではなく、公開情報に基づき法人契約者が自社条件に照らして判断するための材料を中立的に整理するものです（出典: イーレックス株式会社公式サイト・参照日2026年7月時点）。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で判断材料を整理します。",
  },
  {
    label: "エバーグリーン・マーケティングの共同出資背景（東京電力EPとの関係）",
    detail:
      "特別高圧・高圧の小売を担うエバーグリーン・マーケティング株式会社は、イーレックス株式会社と東京電力エナジーパートナー株式会社の共同出資会社として2019年に設立されたと公開情報で示されています。旧一電の大手小売である東京電力エナジーパートナーの需要家基盤・運用ノウハウと、バイオマス発電を軸とするイーレックスの電源・脱炭素の知見を組み合わせた小売会社という位置づけです。この共同出資という背景は、単なる新電力とも旧一電系ともひとくくりにしづらい独特の類型であり、比較の際は『どの法人（エバーグリーン・マーケティング）と契約するか』を正確に把握したうえで、他の旧一電・新電力と同一条件で相見積を取ることが重要です。共同出資の相手方である旧一電系の考え方は当サイトの東京電力エナジーパートナー解説もあわせて参照できます。",
  },
  {
    label: "本ページの位置づけ（新電力カテゴリ解説の代表例として）",
    detail:
      "当サイトの『電力会社別解説』カテゴリでは、旧一電大手だけでなく、全国系新電力、都市ガス系新電力、商社系新電力、自治体系・地産地消の地域新電力、そしてバイオマス等の発電事業を母体とする新電力など、新電力の主要類型ごとの代表例を中立的に整理しています。本ページは『発電事業（バイオマス）を母体とし、グループ内の小売会社が供給する脱炭素文脈の新電力』の典型例として、イーレックスグループ／エバーグリーン各社の公開情報を解説します。",
  },
  {
    label: "事業特性（公表情報・バイオマス発電と脱炭素文脈）",
    detail:
      "イーレックスグループは、木質バイオマス・パーム椰子殻（PKS）等を燃料とする複数のバイオマス発電所の開発・運営を進めてきた発電事業者としての性格を持ちます。バイオマスは制度上、再生可能エネルギーとして位置づけられる電源であり、非化石価値・CO2排出係数の観点から脱炭素（カーボンニュートラル、RE100等）を志向する法人需要家の調達文脈と親和的です。ただし、実際に供給されるメニューの電源構成・非化石証書の付与条件・CO2排出係数は公開情報でも契約条件・時期により変動するため、脱炭素の目的で採用を検討する場合は調達計画段階での確認が欠かせません（出典: イーレックス株式会社公式サイト・参照日2026年7月時点）。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、燃料費調整の条件（連動方式・上限の有無）、市場連動か固定かの区分、契約期間、サポート体制、BCP対応、再エネ・非化石調達メニューの有無など複数の観点を総合して判断すべきものです。本ページはイーレックスグループ／エバーグリーン各社の公開情報を整理しますが、旧一電継続・他の新電力との相見積・比較を行ったうえで、自社条件に最適な選択をすることを推奨します。当センターは特定企業の優劣を断定する立場にありません。2026年度時点の情報であり、最新は各社公式サイト・最新の料金公表で必ずご確認ください。",
  },
];

const planTypes = [
  {
    name: "特別高圧電力（契約電力2,000kW以上の需要家向け・小売はエバーグリーン・マーケティング）",
    role: "大規模工場・大型商業施設・物流拠点等",
    detail:
      "特別高圧の法人需要家向けには、エバーグリーン・マーケティング株式会社が小売事業者として供給メニューを提供する体制です。料金は基本料金（契約電力×単価）＋電力量料金（使用kWh×単価）＋燃料費調整額＋再エネ賦課金で構成される一般的な体系が想定されます。大規模需要家は個別協議・個別見積となるケースが多く、契約期間・解約条件・燃調算定方式（市場連動を含む場合あり）等を契約書で詳細に確認することが重要です。具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: イーレックス株式会社公式サイト・参照日2026年7月時点）。",
  },
  {
    name: "高圧電力（契約電力50kW以上2,000kW未満の需要家向け・小売はエバーグリーン・マーケティング）",
    role: "中規模工場・ビル・商業施設・物流倉庫等",
    detail:
      "高圧需要家向けにも、特別高圧と同じくエバーグリーン・マーケティング株式会社が小売として供給する体制です。基本料金は契約電力（デマンド実量に基づく）に応じて決まる一般的な構造で、業務用メニュー・季節別／時間帯別の料金体系等が想定されます。イーレックスグループの高圧メニューは、旧一電の標準メニューと比較して燃調算定方式・契約期間・解約条件等で違いがあることが一般的なため、相見積で同一条件比較を行うことが重要です（出典: イーレックス株式会社公式サイト）。低圧（契約電力50kW未満）の需要家はエバーグリーン・リテイリング株式会社が小売を担う区分になる点に注意してください。",
  },
  {
    name: "メニュー類型（シンプル/完全固定/市場連動型の考え方）",
    role: "全区分共通の選択軸",
    detail:
      "イーレックスグループ／エバーグリーン各社の法人向けメニューでは、シンプルな料金体系のプラン、単価を一定期間固定する完全固定型、JEPXスポット価格に連動する市場連動型といった類型が公開情報で示されています。完全固定型は燃調変動・市場変動の影響を受けにくい代わりに単価水準は相対的に据わりやすく、市場連動型は市場が落ち着いた局面では有利に働き得る一方で高騰局面のリスクを負う、という一般的なトレードオフがあります。どのメニューが自社に適合するかは使用パターン・リスク許容度により異なり、優劣ではなく適合で判断すべきです。個社単価は本ページに記載しません。市場連動・固定の基礎は関連ページを参照してください（出典: イーレックス株式会社公式サイト）。",
  },
  {
    name: "再エネ・非化石メニュー・CN対応（バイオマス電源の文脈）",
    role: "RE100対応・脱炭素志向の需要家向け",
    detail:
      "イーレックスグループはバイオマス発電を軸とする発電事業者であり、再生可能エネルギー（バイオマスは制度上の再エネ）・非化石証書・CO2フリー相当の調達メニューは、脱炭素を進める法人需要家向けの調達手段の一つとなり得ます。供給可能量・対応エリア・非化石価値の付与条件・CO2排出係数の扱いはメニューにより異なるため、RE100やSBT等の目標に組み込む際は事前確認が必要です。再エネ調達の全体像は関連ページで整理しています（出典: イーレックス株式会社公式サイト・参照日2026年7月時点）。",
  },
];

const dataPoints = [
  {
    label: "供給エリア（公表情報）",
    detail:
      "エバーグリーン各社は複数エリアにまたがって電力小売サービスを提供しています。首都圏（東京エリア）を中心に、関西・九州を含む複数エリアの法人需要家にアプローチ可能な体制が公開情報で示されています。具体的な対応エリアと契約区分（特別高圧・高圧・低圧）の組合せは公式サイト・個別見積で確認してください（出典: イーレックス株式会社公式サイト・エバーグリーン各社公表）。",
  },
  {
    label: "電源特性（バイオマス発電・公表情報）",
    detail:
      "イーレックス株式会社は複数のバイオマス発電所を運営するバイオマス発電事業者であり、木質バイオマス・PKS等を燃料とする再生可能エネルギー電源を持つ点が電源ポートフォリオの特徴です。バイオマス電源は燃料調達（輸入バイオマス燃料の価格・為替等）の影響を受けるため、電源構成と燃調算定方式・燃料調達の関係を確認することで、価格変動リスクの構造を理解できます。電源構成・燃料調達の詳細は公開情報でも契約条件・時期により変動します（出典: イーレックス株式会社公式サイト・有価証券報告書等）。",
  },
  {
    label: "JEPX市場での取扱い",
    detail:
      "新電力は不足分・余剰分をJEPX（日本卸電力取引所）で調達・販売する構造が一般的です。市場連動型のメニューを契約する場合、JEPXスポット価格の高騰時に電力量料金単価が大きく上昇するリスクがあります。完全固定型と市場連動型のいずれを選ぶかは、自社の使用パターン・リスク許容度に応じて中立的に判断すべきです（出典: JEPX公表データ・電力ガス取引監視等委員会）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。これらは特定企業のプラン選択では回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です。なお、再エネ賦課金の単価は年度ごとに国が定めます（2026年度は4.18円/kWh（確定））。バイオマス電源を持つグループであっても、賦課金という制度負担そのものは共通に発生する点に留意してください（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const scenarios = [
  {
    title: "シナリオ1: 小規模高圧（オフィス・小規模施設／契約電力の小さい高圧需要家）",
    annual: "想定年間削減イメージ ▲11万円/年",
    cumulative: "▲11万円 × 5年 ＝ 55万円",
    detail:
      "契約電力が比較的小さい高圧需要家（オフィスビル・小規模店舗・小型施設等）を想定した例示です。契約電力の適正化と、燃調算定方式・メニュー類型（完全固定／市場連動）の見直しを組み合わせた場合の年間削減イメージを ▲11万円/年 とすると、5年累計では ▲11万円 × 5年 ＝ 55万円 の規模感になります。エバーグリーン各社を含む複数社・旧一電継続での相見積を同一条件で取得し、単価だけでなく総合条件で判断することが前提です。",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ2: 中規模高圧（中規模工場・商業施設／通常負荷）",
    annual: "想定年間削減イメージ ▲19万円/年",
    cumulative: "▲19万円 × 5年 ＝ 95万円",
    detail:
      "中規模の高圧需要家（中規模工場・商業施設・物流倉庫等）を想定した例示です。デマンド管理による契約電力適正化、燃調算定方式の確認、メニュー類型の選択、力率改善等を組み合わせた場合の年間削減イメージを ▲19万円/年 とすると、5年累計では ▲19万円 × 5年 ＝ 95万円 の規模感になります。市場連動型と完全固定型の年間コスト差を試算し、自社のリスク許容度に合う類型を中立的に選ぶことが重要です。",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ3: 大規模高圧〜特別高圧（大規模工場・多拠点／高負荷）",
    annual: "想定年間削減イメージ ▲42万円/年",
    cumulative: "▲42万円 × 5年 ＝ 210万円",
    detail:
      "大規模高圧〜特別高圧の需要家（大規模工場・多拠点事業者・大型物流拠点等）を想定した例示です。契約電力の最適化、燃調・市場連動リスクのヘッジ設計、再エネ・非化石調達の組み込み、省エネ投資（補助金活用）を総合した場合の年間削減イメージを ▲42万円/年 とすると、5年累計では ▲42万円 × 5年 ＝ 210万円 の規模感になります。特別高圧は個別協議・個別見積となるため、エバーグリーン・マーケティングを含む複数社での同一条件比較が前提となります。",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 首都圏中心の多拠点事業者（特別高圧・高圧の混在）",
    before:
      "Before: 首都圏を中心に多拠点を展開する事業者が、各拠点で旧一電エリア別の高圧契約を保有。エリアごとに条件がばらつき、脱炭素方針との整合も含めて一括管理が困難。",
    after:
      "After: エバーグリーン・マーケティング（特別高圧・高圧の小売）への一括切替の可能性、または旧一電継続のエリア別最適化の二つの選択肢で相見積を取得し、同一条件で比較。バイオマス電源を背景とした再エネ・非化石メニューの活用可否と、契約管理の一元化メリットを総合評価（特定社の優劣ではなく条件適合で判断）。",
    result:
      "Result: 多拠点一括管理・脱炭素調達・契約条件最適化のトレードオフを定量化し、自社の運用負荷とコストの両面で中立的に選択。※具体的な削減額は契約条件・使用実態により異なり、推測値は記載しません。",
  },
  {
    title: "ケース2: 中規模製造業（高圧・通常負荷／脱炭素対応検討中）",
    before:
      "Before: 単一拠点の高圧需要家が現契約（旧一電または現新電力）を継続。燃料費調整額の変動局面で電気代が変動し、加えて取引先からのCO2削減要請への対応も検討中。",
    after:
      "After: エバーグリーン各社を含む複数新電力と旧一電の継続条件で相見積を取得。燃調算定方式（旧一電方式／市場連動／独自方式）の違い、完全固定・市場連動の類型、バイオマス由来の再エネ・非化石メニューの有無を整理し、自社の使用パターンと脱炭素方針に合う条件を中立的に選定。",
    result:
      "Result: 燃調算定方式の違いと再エネ調達手段を理解したうえで、変動リスク・固定化・脱炭素のバランスを評価。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 低圧の小規模拠点を多数持つ事業者（低圧はエバーグリーン・リテイリング）",
    before:
      "Before: 低圧（50kW未満）の小規模拠点を多数持つ事業者が、拠点ごとにばらばらの契約を保有。低圧と高圧で担当小売が分かれることを意識できておらず、一括管理を検討中。",
    after:
      "After: 低圧の小売はエバーグリーン・リテイリング株式会社、高圧・特別高圧の小売はエバーグリーン・マーケティング株式会社という区分を理解したうえで、低圧・高圧それぞれの区分で同一条件の相見積を取得。低圧拠点群の一括管理メリットと、拠点別最適化のコストメリットを中立的に評価。",
    result:
      "Result: 契約区分ごとに担当小売が異なる構造を正しく把握し、区分別に最適な条件を選定。※削減効果は使用実態により異なります。",
  },
];

const procedures = [
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。エバーグリーン各社への切替の場合も、現契約の解約条件（期間途中解約違約金等）の確認、託送供給契約への切替手続き等の確認が重要です。契約区分（特別高圧・高圧はエバーグリーン・マーケティング、低圧はエバーグリーン・リテイリング）により窓口・担当小売が異なる点に注意してください。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。低圧・高圧の拠点が混在する場合は、区分ごとに担当小売が分かれることも整理表に反映しておくと切替がスムーズです。",
  },
  {
    label: "サポート体制・問い合わせ窓口（公開情報）",
    detail:
      "エバーグリーン各社は法人向けの問い合わせ窓口・Web会員サービス等を公開しています。請求・使用量の確認、契約変更の手続き等のサポート体制は公式サイトで確認できます。停電時の物理的な復旧は一般送配電事業者（エリア別の旧一電送配電会社）が担うため、契約小売事業者によらず復旧対応は共通である点も理解しておくと良いでしょう。",
  },
  {
    label: "新電力切替時の留意事項",
    detail:
      "新電力切替時は、契約期間（多くは1〜3年）、期間途中解約時の違約金条項、燃調算定方式（旧一電と異なる場合）、メニュー類型（完全固定／市場連動）、デマンド超過時の取扱いを契約書で詳細に確認することが重要です。新電力撤退・事業譲渡リスクへの備えとして、最終保障供給制度の理解も必要です。共同出資という背景があっても、契約先はあくまでエバーグリーン各社である点を前提に条件を確認してください。",
  },
];

const cautionItems = [
  {
    label: "『イーレックスが直接販売』ではなくグループ小売会社が供給する点を正しく理解する",
    detail:
      "最も注意すべき点は契約主体です。法人向けの電力を実際に供給するのはイーレックス株式会社ではなく、特別高圧・高圧はエバーグリーン・マーケティング株式会社、低圧はエバーグリーン・リテイリング株式会社です。契約書・請求書・問い合わせ窓口がどの法人かを正確に把握し、相見積・契約条件の比較を行ってください。本ページはグループ小売会社が供給する趣旨で整理しており、特定社の優劣評価は行いません。",
  },
  {
    label: "単価だけでなく総合的に判断する",
    detail:
      "電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件（算定方式・上限有無）・メニュー類型（完全固定／市場連動）・契約期間・解約条件・サポート・再エネ／非化石メニューを総合して判断すべきです。本ページはイーレックスグループの情報を整理しますが、特定社が一律に有利・不利と断定するものではありません。",
  },
  {
    label: "燃調算定方式・メニュー類型の差を確認",
    detail:
      "新電力の燃調算定方式は、旧一電方式・市場連動方式・独自方式等で異なる場合があります。同じ『燃調連動』でも算定基礎が異なれば、価格変動の振れ幅・タイミングが異なります。完全固定型と市場連動型では変動リスクの性質が根本的に異なるため、契約書で算定式とメニュー類型を確認することが重要です。",
  },
  {
    label: "市場連動メニューのリスク",
    detail:
      "JEPXスポット価格連動のメニューは、市場高騰時に単価が大きく上昇するリスクがあります。2021年冬・2022〜2023年冬の市場高騰局面の経験を踏まえ、市場連動型の採否は自社のリスク許容度に応じて中立的に判断してください。完全固定型はこの変動を避けられる一方、単価水準は相対的に据わりやすいというトレードオフがあります。",
  },
  {
    label: "新電力撤退リスクと最終保障供給・比較は相見積で",
    detail:
      "新電力の事業撤退・小売登録の取消し等のリスクは、過去にも事例がありました。契約時は最終保障供給制度（一般送配電事業者がセーフティネットとして提供）の仕組みを理解し、撤退時の切替手順を確認しておくことが重要です。中立的な判断のためには、エバーグリーン各社・他の新電力・旧一電継続の複数社からの相見積を取得し、同一条件（契約電力・使用量・期間）で比較することが基本です。",
  },
];

const compareViewpoints = [
  {
    label: "契約主体・グループ構造の確認観点",
    detail:
      "特別高圧・高圧はエバーグリーン・マーケティング、低圧はエバーグリーン・リテイリングという契約主体の違いを正確に把握します。共同出資（イーレックス＋東京電力EP）という背景も、旧一電系・新電力系のどちらかに単純分類せず理解することが重要です。",
  },
  {
    label: "燃調算定方式・メニュー類型の感応度",
    detail:
      "旧一電方式（貿易統計連動）と新電力独自方式・市場連動方式の違い、完全固定型と市場連動型の違いを理解し、自社の使用パターンでの変動リスクを評価します。",
  },
  {
    label: "再エネ・非化石調達の選択肢（バイオマス電源の活用）",
    detail:
      "バイオマス由来の再エネメニュー、非化石証書、コーポレートPPAなど、RE100・脱炭素対応の調達手段を比較します。イーレックスグループのバイオマス電源の活用可能性も検討対象です。CO2排出係数・非化石価値の付与条件を確認します。",
  },
  {
    label: "契約・サポート・撤退リスク",
    detail:
      "契約手続きの手間、サポート窓口（契約区分ごとに担当小売が異なる点）、新電力撤退時の切替体制、最終保障供給の仕組み理解を確認します。",
  },
  {
    label: "全国系・発電母体系新電力との比較環境",
    detail:
      "エバーグリーン各社と同様の発電事業母体を持つ新電力、都市ガス系・商社系新電力、エリア新電力、旧一電継続の複数パターンで相見積を取得し、同一条件で比較できる環境にあります。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化",
    detail:
      "高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド管理で適正化することが基本料金削減の第一歩です。デマンド管理の基礎は関連ページで解説しています。",
  },
  {
    label: "再エネ・非化石調達によるCN対応（バイオマス活用）",
    detail:
      "バイオマス由来の再エネメニュー・非化石証書・コーポレートPPAを組合せることで、RE100対応とCO2削減を進められます。イーレックスグループのバイオマス電源活用も選択肢の一つです。非化石価値・CO2排出係数の付与条件を確認します。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "高効率設備・LED・空調更新・コージェネ・蓄電池等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。",
  },
  {
    label: "相見積による条件最適化",
    detail:
      "エバーグリーン各社継続・他新電力切替・旧一電継続の複数パターンで相見積を取得し、同一条件で比較することで、自社に最適な契約条件を選定できます。契約区分ごとに担当小売が異なる点も相見積に反映します。",
  },
  {
    label: "燃調変動・市場変動への備え",
    detail:
      "完全固定型・燃調上限ありの条件や、再エネ自家消費によるヘッジで、燃調・市場変動リスクへの備えを契約に反映できます。市場連動型を選ぶ場合はリスク許容度の範囲内で採用します。",
  },
];

const checklistItems = [
  "自社拠点がエバーグリーン各社の供給対応エリアに含まれるか確認したか",
  "契約区分（特別高圧・高圧＝エバーグリーン・マーケティング／低圧＝エバーグリーン・リテイリング）を正しく把握したか",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "メニュー類型（シンプル／完全固定／市場連動）の違いを理解したか",
  "燃料費調整額の算定方式（旧一電方式／市場連動／独自）を契約書で確認したか",
  "上限の有無、変動の振れ幅を理解したか",
  "契約期間と期間途中解約時の違約金条項を確認したか",
  "バイオマス由来の再エネ・非化石メニュー（非化石証書・コーポレートPPA等）の供給条件を確認したか",
  "新電力撤退時の最終保障供給への切替フローを理解したか",
  "エバーグリーン各社・他新電力・旧一電継続の複数パターンで相見積を取得したか",
  "省エネ投資・補助金活用と契約見直しを組合せて検討したか",
  "単価だけでなく総合的な条件で中立的に判断したか",
];

const faqItems = [
  {
    question: "イーレックスの法人向け電力は、イーレックス株式会社が直接販売しているのですか？",
    answer:
      "いいえ。イーレックス株式会社が法人需要家に直接販売するのではなく、グループの小売会社が供給する体制です。特別高圧・高圧の小売はエバーグリーン・マーケティング株式会社、低圧の小売はエバーグリーン・リテイリング株式会社が担います。イーレックス株式会社は複数のバイオマス発電所を運営するバイオマス発電事業者としての性格が強く、グループとして発電から小売までを担う構造です。本ページは特定企業の優劣評価ではなく、公開情報に基づき法人契約者の判断材料を中立的に整理するものです（出典: イーレックス株式会社公式サイト・参照日2026年7月時点）。",
  },
  {
    question: "エバーグリーン・マーケティング株式会社とはどんな会社ですか？",
    answer:
      "エバーグリーン・マーケティング株式会社は、イーレックスグループにおいて特別高圧・高圧の電力小売を担う会社です。公開情報では、イーレックス株式会社と東京電力エナジーパートナー株式会社の共同出資会社として2019年に設立されたと示されています。旧一電系の大手小売である東京電力エナジーパートナーの基盤と、バイオマス発電を軸とするイーレックスの電源・脱炭素の知見を組み合わせた小売会社という位置づけです。共同出資の相手方である東京電力エナジーパートナーについては当サイトの解説もあわせて参照できます。",
  },
  {
    question: "イーレックスグループの法人向けにはどんなプランがありますか？",
    answer:
      "公開情報では、特別高圧電力（契約電力2,000kW以上）、高圧電力（50kW以上2,000kW未満）の業務用メニュー、シンプルな料金体系のプラン、単価を固定する完全固定型、JEPXに連動する市場連動型、バイオマス由来の再エネ・非化石メニュー等が示されています。料金は基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金で構成されます。特別高圧・大型高圧は個別協議・個別見積となるケースが多いため、具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: イーレックス株式会社公式サイト・参照日2026年7月時点）。個社単価は本ページに記載しません。",
  },
  {
    question: "バイオマス発電の電力は脱炭素（RE100）対応に使えますか？",
    answer:
      "バイオマスは制度上、再生可能エネルギーとして位置づけられる電源であり、バイオマス由来の再エネメニュー・非化石証書・CO2フリー相当の調達は、脱炭素（カーボンニュートラル、RE100等）の調達手段の一つとして検討可能です。ただし、対応エリア・供給可能量・非化石価値の付与条件・CO2排出係数の扱いはメニューにより異なります。RE100やSBT等のクライテリアへの適合性を含めて、調達計画段階で確認することを推奨します（出典: イーレックス株式会社公式サイト・資源エネルギー庁）。",
  },
  {
    question: "完全固定型と市場連動型はどちらが有利ですか？",
    answer:
      "当サイトは特定のメニュー・企業の優劣を評価する立場にありません。一般社団法人エネルギー情報センターは特定企業を推奨も否定もしない中立的立場で判断材料を整理しています。完全固定型は燃調・市場変動の影響を受けにくい代わりに単価水準が相対的に据わりやすく、市場連動型は市場が落ち着いた局面では有利に働き得る一方で高騰局面のリスクを負う、という一般的なトレードオフがあります。自社の使用パターン・リスク許容度に応じて中立的に判断し、複数社から同一条件で相見積を取得することを推奨します。",
  },
  {
    question: "イーレックスグループと旧一電（東電EP・関西電力等）の違いは？",
    answer:
      "イーレックスグループは、バイオマス発電事業を母体とし、グループの小売会社（エバーグリーン各社）が供給する新電力の類型です。旧一電は各エリアの一般電気事業者を母体とする小売事業者で、エリアごとに会社が異なります。なお特別高圧・高圧を担うエバーグリーン・マーケティングは東京電力エナジーパートナーとの共同出資会社という独特の背景を持ちます。料金体系・燃調算定方式・メニュー類型・サポート体制などで違いがあるため、相見積で同一条件比較を行うことが重要です。当センターは旧一電・新電力のいずれかを推奨する立場にはありません。",
  },
  {
    question: "新電力は撤退リスクがあると聞きました。どう備えれば良いですか？",
    answer:
      "新電力の事業撤退・小売登録取消し等は、過去にも複数の事例があります。契約時は、最終保障供給制度（一般送配電事業者がセーフティネットとして提供する仕組み）の概要を理解し、撤退時の切替手順・必要書類を事前に確認しておくことが重要です。また、契約書の解約条項・違約金条項も確認しておきましょう。エバーグリーン各社との契約でも、契約主体・契約条件を正しく把握したうえでリスクに備えることが基本です（出典: 電力・ガス取引監視等委員会・各一般送配電事業者公表資料）。",
  },
  {
    question: "契約や切替に必要なものは？契約区分で窓口は変わりますか？",
    answer:
      "供給地点特定番号（22桁）、契約電力、直近12ヶ月の使用実績データが一般的に必要です。供給地点特定番号は検針票・請求書で確認できます。契約区分により担当小売が異なり、特別高圧・高圧はエバーグリーン・マーケティング株式会社、低圧はエバーグリーン・リテイリング株式会社が窓口となります。契約時は契約期間・期間途中解約違約金・燃調算定方式・メニュー類型・解約条件を契約書で詳細に確認することが重要です。停電時の物理的復旧は一般送配電事業者の管轄で、契約小売事業者によらず共通です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "イーレックス株式会社 公式サイト（バイオマス発電・電力事業・グループ会社）", url: "https://www.erex.co.jp/" },
  { name: "資源エネルギー庁（エネルギー基本計画・再生可能エネルギー・電源構成）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧・新電力動向）", url: "https://www.emsc.meti.go.jp/" },
  { name: "JEPX 日本卸電力取引所（スポット市場価格）", url: "http://www.jepx.org/" },
  { name: "経済産業省（電力システム改革・GX・脱炭素政策）", url: "https://www.meti.go.jp/" },
];

export default function ErexCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/erex-corporate-electricity-guide"
        datePublished="2026-07-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "イーレックスグループの法人向け電力", url: "https://simulator.eic-jp.org/erex-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">イーレックスグループの法人向け電力</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            イーレックスグループの法人向け電力ガイド｜バイオマス電源・エバーグリーン小売体制・市場連動/固定の選び方
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            イーレックス株式会社を中核とするイーレックスグループの法人向け電力を、公開情報に基づき中立的に整理します。重要な前提として、法人向けの電力小売はイーレックス株式会社が直接販売するのではなく、特別高圧・高圧の小売はエバーグリーン・マーケティング株式会社、低圧の小売はエバーグリーン・リテイリング株式会社が担う体制です。バイオマス発電事業者としての電源特性（脱炭素文脈）、シンプル／完全固定／市場連動型メニューの考え方、燃料費調整の連動条件、契約手続き・サポート、相見積活用のポイントを、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-07-05" updatedAt="2026-07-05" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>小売実務のグループ構造（特別高圧・高圧＝エバーグリーン・マーケティング／低圧＝エバーグリーン・リテイリング）</li>
              <li>エバーグリーン・マーケティングの共同出資背景（イーレックス＋東京電力EP・2019年設立）</li>
              <li>バイオマス発電事業者としての電源特性と脱炭素（RE100・非化石）文脈</li>
              <li>シンプル／完全固定／市場連動型メニューの考え方と燃調連動条件</li>
              <li>規模別のケース別判断材料・新電力切替時の確認12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは特定企業のサービスを公開情報で中立的に整理するガイドです。電力会社の選び方は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力会社の比較方法
            </Link>
            も参照してください。本ページは中立的立場で作成しており、特定社の優劣評価・推奨は行いません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">イーレックスグループの概要と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              イーレックスグループはバイオマス発電を軸とする発電事業者を母体とし、グループの小売会社（エバーグリーン各社）が法人・家庭に供給する新電力の代表例です。本ページは旧一電・新電力の主要類型を読み比べる『電力会社別解説』の一つとして、特定企業の法人向けサービス詳細を公開情報に基づき中立的に整理します。『イーレックスが直接販売』ではなくグループ小売会社が供給する構造を前提に読み進めてください。
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
              、共同出資の相手方である旧一電系の考え方は{" "}
              <Link href="/tepco-ep-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東京電力エナジーパートナーの法人向けプラン</Link>
              、エリア別の市況は{" "}
              <Link href="/articles/by-region" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域別電気料金事情（一覧）</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人向けプラン体系（公開情報・小売はエバーグリーン各社）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              イーレックスグループが公開する法人向けプラン体系を、特別高圧・高圧・メニュー類型（シンプル／完全固定／市場連動）・再エネ／非化石メニューの観点で整理します。特別高圧・高圧の小売はエバーグリーン・マーケティング株式会社、低圧の小売はエバーグリーン・リテイリング株式会社が担います。具体的単価は公式公表・個別見積で確認してください。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              メニュー類型の基礎は{" "}
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランとは</Link>
              、{" "}
              <Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定単価プランとは</Link>
              、再エネ調達の全体像は{" "}
              <Link href="/renewable-power-procurement" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ電力の調達方法</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">供給エリア・電源特性（バイオマス）・JEPX取扱い（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給エリア、バイオマス発電を軸とする電源特性、JEPX市場での取扱い、全社共通の制度負担を公表データに基づき整理します。首都圏（東京エリア）を中心に、関西・九州を含む複数エリアで法人需要家にアプローチ可能な体制が公開情報で示されています。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              エリア別の市況は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東京エリアの法人電気料金</Link>
              、{" "}
              <Link href="/region-kansai-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">関西エリアの法人電気料金</Link>
              、{" "}
              <Link href="/region-kyushu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">九州エリアの法人電気料金</Link>
              で確認できます。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本セクションのデータは2026年7月時点の公開情報を基に整理した目安です。最新の料金・電源構成・制度単価は各出典元で必ずご確認ください。出典: イーレックス株式会社公式サイト・電力ガス取引監視等委員会・資源エネルギー庁等から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ別の5年コストインパクト試算（例示）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              規模別の代表シナリオで、契約見直し・デマンド適正化・メニュー類型の選択等を組み合わせた場合の年間削減イメージと5年累計の規模感を例示します。以下はいずれも一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動し、個社の単価は記載しません。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。数値は例示であり、特定社の単価・優劣を示すものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {scenarios.map((sc) => (
                <div key={sc.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{sc.title}</p>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg border border-sky-200 bg-white p-3">
                      <p className="text-xs text-slate-500">年間削減イメージ</p>
                      <p className="mt-1 text-base font-semibold text-slate-900">{sc.annual}</p>
                    </div>
                    <div className="rounded-lg border border-sky-200 bg-white p-3">
                      <p className="text-xs text-slate-500">5年累計の規模感</p>
                      <p className="mt-1 text-base font-semibold text-emerald-700">{sc.cumulative}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{sc.detail}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{sc.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の契約電力・使用実態に即した試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              、契約見直しの全体像は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              イーレックスグループ／エバーグリーン各社の活用パターンを規模別・契約区分別に、公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
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
            <h2 className="text-xl font-semibold text-slate-900">契約手続き・サポート体制・新電力切替の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人契約の手続きの流れ、供給地点特定番号の確認、サポート窓口、新電力切替時の留意点を整理します。契約区分（特別高圧・高圧はエバーグリーン・マーケティング、低圧はエバーグリーン・リテイリング）により担当小売が異なる点に注意してください。
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
              、契約見直し手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              、最終保障供給は{" "}
              <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給とは</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中立的に比較するための観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              発電母体系の新電力（イーレックスグループ／エバーグリーン各社）と旧一電・他新電力を中立的に判断するための観点を整理します。単価だけでなく複数の要素を総合的に評価することが重要です。契約主体・グループ構造の理解も比較の前提です。
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
              旧一電10社の横断比較は{" "}
              <Link href="/major-utility-comparison-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">旧一電10社 横断比較ガイド</Link>
              、プラン選択の考え方は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動が向かない法人</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">燃料費調整・撤退リスクを踏まえた留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              イーレックスグループ／エバーグリーン各社の公開情報を活用するうえでの留意点を整理します。契約主体の正確な把握、燃調算定方式・メニュー類型の確認、市場連動メニューのリスク、新電力撤退時の備えに注意が必要です。
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
              、市場連動プランの基礎は{" "}
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランとは</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気代最適化の打ち手（契約見直し・省エネ・再エネ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              エバーグリーン各社との契約の有無にかかわらず、法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・再エネ／非化石調達・省エネ投資・相見積・燃調ヘッジが柱です。バイオマス電源を持つグループの再エネメニュー活用も脱炭素の選択肢の一つです。
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
              脱炭素・再エネ調達は{" "}
              <Link href="/re100-overview-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">RE100の基礎（法人向け）</Link>
              、{" "}
              <Link href="/corporate-decarbonization-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人の脱炭素の全体像</Link>
              、デマンド管理は{" "}
              <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド管理ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">新電力切替・契約見直しチェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。中立的な判断には複数社の相見積と総合的な条件評価が重要です。契約区分ごとに担当小売が異なる点も確認項目に含めています。
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
              エバーグリーン各社を含む新電力切替を検討する法人需要家は、契約条件・燃調方式・メニュー類型（完全固定／市場連動）・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・再エネ調達・省エネ投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>市場連動メニューと完全固定メニューの年間コスト差を把握する</li>
              <li>燃調算定方式の違いを定量化する</li>
              <li>相見積・省エネ投資・再エネ調達による削減余地を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-07-05" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/power-utility-guide", title: "電力会社別解説（カテゴリ一覧）", description: "主要電力会社の法人向けサービスを中立的に整理。" },
              { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "新電力・旧一電を中立的に比較する基礎。" },
              { href: "/tepco-ep-corporate-electricity-guide", title: "東京電力エナジーパートナーの法人向けプラン", description: "エバーグリーン・マーケティングの共同出資の相手方。" },
              { href: "/summit-energy-corporate-electricity-guide", title: "サミットエナジー（法人向け）完全ガイド", description: "発電・商社系新電力の代表例。" },
              { href: "/major-utility-comparison-corporate-electricity-guide", title: "旧一電10社 横断比較ガイド", description: "旧一電10社の中立比較。" },
              { href: "/region-tokyo-business-electricity", title: "東京エリアの法人電気料金", description: "首都圏の市況と供給環境。" },
              { href: "/region-kansai-business-electricity", title: "関西エリアの法人電気料金", description: "関西エリアの市況と供給環境。" },
              { href: "/region-kyushu-business-electricity", title: "九州エリアの法人電気料金", description: "九州エリアの市況と供給環境。" },
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "エリア別の市況を横断的に確認。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/market-linked-plan", title: "市場連動プランとは", description: "市場連動メニューの仕組みとリスク。" },
              { href: "/fixed-price-plan", title: "固定単価プランとは", description: "完全固定型メニューの仕組み。" },
              { href: "/renewable-power-procurement", title: "再エネ電力の調達方法", description: "バイオマス由来を含む再エネ調達の全体像。" },
              { href: "/re100-overview-for-business", title: "RE100の基礎（法人向け）", description: "再エネ100%目標と調達手段。" },
              { href: "/last-resort-supply", title: "最終保障供給とは", description: "新電力撤退時のセーフティネット。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="エバーグリーン各社（イーレックスグループ）を含む新電力への切替を検討する法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。一般社団法人エネルギー情報センターは特定の電力会社を推奨も否定もしない中立的立場で、相見積・再エネ調達・省エネ投資の優先順位づけの判断材料を整理します。"
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
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。新電力切替・旧一電継続の比較や契約見直しの進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
