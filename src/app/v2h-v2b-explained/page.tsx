import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "V2H・V2B（車両から建物への給電）完全ガイド｜BCP兼用のEV活用・補助金・主要機器比較";
const pageDescription =
  "EV（電気自動車）を蓄電池として活用するV2H（Vehicle to Home）・V2B（Vehicle to Building）の仕組み、法人BCP活用、経済性、主要機器メーカー比較、補助金一覧、EV容量別の建物給電時間表まで、実務担当者向けに体系整理します。";
const pageUrl = "https://simulator.eic-jp.org/v2h-v2b-explained";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "V2H 仕組み",
    "V2B 法人",
    "EV 蓄電池 活用",
    "V2H 補助金",
    "BCP EV",
    "電気自動車 給電",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/ev-charging", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/ev-charging"],
  },
};

const conceptOverview = [
  {
    label: "V2H（Vehicle to Home）",
    detail:
      "EVのバッテリーから住宅へ電力を供給する仕組み。住宅用太陽光と組合せた自家消費・ピークシフト、停電時のバックアップ電源として活用されます。一般家庭の1日平均使用量は10〜15kWh、EVバッテリー（40〜100kWh）なら3〜10日分相当の容量を持ちます。",
  },
  {
    label: "V2B（Vehicle to Building）",
    detail:
      "EVから事業所・店舗・工場等の業務用建物へ電力を供給する仕組み。法人BCP用途、平常時のピークカット、社用車活用と一体運用するスキームが中心。複数台のEVを束ねることで、より大容量の蓄電池機能を実現できます。",
  },
  {
    label: "V2G（Vehicle to Grid）",
    detail:
      "さらに発展形として、EVから系統（電力会社）へ電力を売り戻すV2Gも研究段階。欧州・米国の一部では実証済ですが、日本では制度・技術両面でまだ商用展開には至っていません。2026〜2028年頃の段階的拡大が予測されています。",
  },
  {
    label: "双方向充放電器（V2H機器）の役割",
    detail:
      "V2H/V2Bを実現する核心機器が『双方向充放電器』。EV→建物への放電（DC→AC変換）、建物→EVへの充電（AC→DC変換）の双方向を可能にします。通常の充電器（充電のみ）と異なり、専用機器が必要で、本体価格50〜150万円・工事費込み総額100〜250万円が目安です。",
  },
  {
    label: "CHAdeMO規格と国際整合",
    detail:
      "日本のV2H/V2Bは『CHAdeMO』規格が主流。日産リーフ・三菱アウトランダー等の国内EVが対応し、V2H機器側もCHAdeMO準拠が標準。海外ではCCS（北米・欧州）が主流で、現時点では国内外でV2H機器の互換性に制約があります。",
  },
];

const bcpUtilization = [
  {
    label: "停電時のバックアップ電源",
    detail:
      "EV1台（50kWh容量）で、一般家庭2〜5日分・小規模事業所1〜2日分の電力供給が可能。複数台保有なら、より長時間の業務継続を実現できます。社用車5台体制なら250kWh相当の蓄電容量となり、中規模オフィスの主要業務を3〜5日支えられる規模感です。",
  },
  {
    label: "需給ひっ迫警報時のピークカット",
    detail:
      "夜間にEV充電→昼間ピーク時にEVから建物給電する運用で、契約電力（kW）の引下げ・基本料金削減が可能。年間契約電力▲10〜20%、基本料金▲数十万〜数百万円規模の削減効果が見込めます。",
  },
  {
    label: "自家消費太陽光との連携",
    detail:
      "屋上太陽光の昼間発電をEVに充電→夕方〜夜にEVから建物給電という運用で、自家消費率向上＋夜間ピーク対応の両立が可能。FIT満了後の太陽光（卒FIT電源）と組合せると、売電単価を上回る経済効果が出やすい設計です。",
  },
  {
    label: "従来非常用電源との比較メリット",
    detail:
      "①平常時はEV車両として通常稼働（資産有効活用率高）／②長時間停電でも他拠点充電→帰還で繰返し供給可能／③脱炭素・SDGs対応として広報訴求力／④燃料保管リスク（軽油・ガソリン）なし／⑤騒音・排ガスなし、の5メリットがあります。",
  },
  {
    label: "従来非常用電源との比較デメリット・留意点",
    detail:
      "①EV平常時利用率と停電時利用の競合（緊急時に外出中で不在の可能性）／②EV充電状態（SOC）の常時管理が必要／③双方向充放電器の故障時のリスク／④初期投資が大型ディーゼル発電機より高いケースあり／⑤大電流負荷（生産ライン等）への対応は限定的、の5点を考慮する必要があります。",
  },
];

const v2hManufacturerTable = [
  {
    maker: "ニチコン（TRIBRID・EVパワーステーション）",
    model: "EVパワーステーション V2H+",
    power: "最大出力 6kW（自立運転時 3kW）",
    price: "55〜90万円（機器のみ）",
    feature: "国内V2H機器の老舗・最大手。CHAdeMO準拠、ハイブリッド蓄電池併設モデルあり。住宅用が主軸だが小規模事業所でも採用例多数。",
  },
  {
    maker: "三菱電機（SMART V2H）",
    model: "EV用パワーコンディショナ",
    power: "最大出力 6kW（自立運転時 6kW）",
    price: "60〜100万円（機器のみ）",
    feature: "自立運転時も6kW出力を維持し、停電時の業務継続性が高い。三菱グループのEV（i-MiEV・アウトランダーPHEV等）との連携性が良好。",
  },
  {
    maker: "デンソー（V2H充放電器）",
    model: "DNEVC-D6075",
    power: "最大出力 6kW",
    price: "70〜110万円（機器のみ）",
    feature: "自動車部品大手の信頼性と耐久性。トヨタ系EV/PHEVとの相性が良い。法人BCP用途で堅実な選択肢。",
  },
  {
    maker: "東光高岳（V2H充放電装置）",
    model: "業務用V2H V-Power",
    power: "最大出力 9kW（業務用）",
    price: "150〜250万円（業務用モデル）",
    feature: "業務用V2B（事業所向け）の専門メーカー。大電流対応・複数EV同時運用に対応した業務用モデル展開。",
  },
  {
    maker: "椿本チエイン（V2H・V2B装置）",
    model: "業務用V2X装置",
    power: "最大出力 10kW（複数台連動可）",
    price: "200〜400万円（業務用）",
    feature: "事業所・工場向けの大型業務用V2X。複数EVのアグリゲーション運用に対応し、ピークカット効果を最大化できる設計。",
  },
];

const evCapacityHoursTable = [
  {
    capacity: "20kWh（軽EV・小型EV）",
    home: "一般家庭 1.5〜2日",
    smallOffice: "10名規模オフィス 半日〜1日",
    midOffice: "30〜50名オフィス 3〜6時間",
    note: "日産サクラ・三菱eKクロスEV等。短時間バックアップ向け。",
  },
  {
    capacity: "40kWh（小〜中型EV）",
    home: "一般家庭 3〜4日",
    smallOffice: "10名規模オフィス 1〜2日",
    midOffice: "30〜50名オフィス 6〜12時間",
    note: "日産リーフ40kWh等。法人BCPの標準クラス。",
  },
  {
    capacity: "60kWh（中型EV・PHEV大型）",
    home: "一般家庭 5〜6日",
    smallOffice: "10名規模オフィス 2〜3日",
    midOffice: "30〜50名オフィス 12〜18時間",
    note: "日産リーフe+・三菱アウトランダーPHEV等。",
  },
  {
    capacity: "80kWh（大型EV）",
    home: "一般家庭 6〜8日",
    smallOffice: "10名規模オフィス 3〜4日",
    midOffice: "30〜50名オフィス 18〜24時間",
    note: "テスラModel Y・トヨタbZ4X等。BCP重要拠点向け。",
  },
  {
    capacity: "100kWh（大型EV）",
    home: "一般家庭 8〜10日",
    smallOffice: "10名規模オフィス 4〜5日",
    midOffice: "30〜50名オフィス 24〜30時間",
    note: "テスラModel S・メルセデスEQS等。",
  },
  {
    capacity: "250kWh（社用EV5台体制）",
    home: "（業務用想定）",
    smallOffice: "10名規模オフィス 10〜14日",
    midOffice: "30〜50名オフィス 3〜5日",
    note: "50kWh×5台体制。中規模オフィスの長時間BCP用途に最適。",
  },
];

const subsidyList = [
  {
    name: "環境省 再エネ・省エネ補助金（V2H機器補助）",
    target: "V2H機器（双方向充放電器）の購入・設置",
    rate: "機器費用の1/2、上限50万円",
    note: "毎年公募される定番補助。住宅用・業務用ともに対象。申請から交付まで6〜12ヶ月かかるため、機器発注前から計画的に申請。",
  },
  {
    name: "CEV補助金（次世代自動車振興センター）",
    target: "EV・PHEV車両の購入",
    rate: "車種により40〜85万円（普通車）／20〜55万円（軽自動車）",
    note: "CEV（Clean Energy Vehicle）補助。V2H機器補助との併用可能。EV購入時に並行申請が標準。",
  },
  {
    name: "中小企業経営強化税制（EV＋V2H設備）",
    target: "EV車両、V2H機器、関連付帯設備",
    rate: "即時償却または税額控除7〜10%",
    note: "資本金1億円以下の中小企業対象。複数年にわたる節税効果あり。経営力向上計画認定が必要。",
  },
  {
    name: "東京都 EV・FCV普及補助",
    target: "EV車両＋V2H機器（都内事業所）",
    rate: "車両：上限45万円、V2H機器：上限45万円",
    note: "東京都独自の上乗せ補助。国補助との併用で初期負担を大幅圧縮可能。年度予算枠あり、早めの申請推奨。",
  },
  {
    name: "神奈川県・愛知県・大阪府等の自治体補助",
    target: "V2H機器・EV車両（各自治体内事業所）",
    rate: "1/2〜2/3、上限20〜50万円程度",
    note: "自治体ごとに条件・上限が異なる。本社所在地・営業所所在地の自治体補助を必ず確認。",
  },
  {
    name: "需要家主導型PPA補助（V2H併設の場合）",
    target: "自家消費太陽光＋V2H機器＋EVの統合導入",
    rate: "1/2以内、kWh定額型もあり",
    note: "太陽光＋V2H＋EVの3点セット導入で大型補助の活用余地あり。SII公募で年1回。",
  },
];

const economicCases = [
  {
    title: "事例α: 小規模事業所（従業員10名・社用EV2台導入・年間電気代280万円）",
    before:
      "Before: 既存ガソリン社用車2台を更新時期。BCP用には小型UPS（10kVA）のみ保有。停電時の業務継続は1時間が限界。年間燃料費（社用車2台）90万円、年間電気代280万円。",
    after:
      "After: 社用車をEV2台（各40kWh）に更新／V2H機器1台導入（業務用、初期投資180万円）／補助金後実質負担90万円／夜間TOU充電→昼間業務利用＋V2B放電／年間燃料費 90万円→48万円（電気代に転嫁）／停電時BCP 1時間→24時間。",
    result:
      "Result: 年間ランニングコスト ▲42万円（燃料費 ▲42万円、電気代増 +18万円、SDGs価値・BCP価値で差引▲42万円相当）／投資回収 V2H機器補助後 2.2年／EV車両は税制優遇込で従来車比同等。",
  },
  {
    title: "事例β: 中規模オフィスビル（従業員80名・社用EV5台体制・年間電気代1.8億円）",
    before:
      "Before: 中規模オフィス。社用車12台すべてガソリン車。BCP用にディーゼル非常用発電機（200kVA）保有も、燃料補給ルートが脆弱。2022年夏の需給ひっ迫時、ピーク削減未実施でDR報酬ゼロ。",
    after:
      "After: 社用車12台のうち5台をEV化（各60kWh、計300kWh蓄電容量）／業務用V2B機器2台導入（初期投資400万円、補助金後200万円）／夜間TOU充電＋昼間ピーク時のEV→建物給電運用／DR契約参加。",
    result:
      "Result: 契約kW ▲15%（基本料金 ▲180万円/年）／DR報酬 +120万円/年／燃料費 ▲180万円/年／停電時BCP 24時間→3〜5日／投資回収 補助金後 1.8年。",
  },
  {
    title: "事例γ: 物流センター（特高1,200kW・社用EV20台導入・年間電気代6.5億円）",
    before:
      "Before: 大型物流センター。既存トラックの一部（小型配送車）をEV化計画。BCP用には大型ディーゼル発電機（500kVA）保有。夜間〜早朝の配送ピーク時に契約電力ピークが発生し、基本料金が高止まり。",
    after:
      "After: 配送車20台をEV化（各60kWh、計1,200kWh蓄電容量）／業務用V2B装置5台導入（複数台連動運用）／夜間TOU充電＋昼間EV→センター給電／フォークリフト用充電器とも一体運用／配送車自体もカーボンニュートラル運送として顧客アピール。",
    result:
      "Result: 契約kW ▲12%（基本料金 ▲580万円/年）／燃料費 ▲1,200万円/年（配送車燃料）／DR報酬 +180万円/年／カーボンニュートラル運送として荷主からの優先発注獲得（年間売上+2.5億円相当）／投資回収 補助金後 3.5年。",
  },
];

const designConsiderations = [
  {
    label: "EV車両保有体制との整合性",
    detail:
      "V2H/V2Bは『EV車両が拠点にいる時間』のみ機能します。社用車として日中外出する場合、停電時にEVが不在のリスクあり。①社内ローテーション運用（常時2〜3台は拠点配置）、②パートタイム勤務者の通勤車両との共有運用、③社外貸出時の事前合意ルール、等の運用設計が必要です。",
  },
  {
    label: "充電インフラ・電力契約との連携",
    detail:
      "V2H機器導入と並行して、①社用車用充電器（普通充電・急速充電）、②電力契約（時間帯別料金プラン・低圧/高圧）、③太陽光・蓄電池との連携、を一体設計する必要があります。EV充電のピーク負荷で契約電力が上昇し基本料金が増えるケースもあるため、シミュレーション必須。",
  },
  {
    label: "EV車両のSOC（充電状態）管理",
    detail:
      "停電時の即応性確保には、平常時から最低60〜80%のSOC維持が必要。自動車管理システム（テレマティクス）と連動した自動SOC管理が推奨されます。手動管理だと『緊急時にバッテリー残量不足』というリスクが顕在化しがちです。",
  },
  {
    label: "業務用V2Bの大電流対応",
    detail:
      "事業所用V2Bは家庭用V2Hより大電流（6〜10kW以上、複数台連動で30kW超も可）対応が必要。配電盤・分電盤改修工事や、業務用V2B装置の選定が前提。製造ラインへの直接給電は原則不可で、照明・空調・サーバ等の縮退運用範囲に限定が現実的。",
  },
  {
    label: "バッテリー劣化と中古市場",
    detail:
      "V2H/V2Bの頻繁な充放電はバッテリー劣化を進める可能性があります（年間1〜3%程度）。リース車両ではリース契約条件確認、自己保有では中古市場への影響を考慮した運用が必要。メーカー保証期間（一般に8年・16万km）内での劣化補償条項も確認しましょう。",
  },
];

const checklistItems = [
  "EV/PHEV保有計画と更新スケジュールを整理したか",
  "V2H/V2B機器の選定（住宅用・業務用、出力、CHAdeMO準拠）を完了したか",
  "EV車両のSOC管理運用（自動／手動、目標SOC%）を決定したか",
  "BCP用途と平常時運用（ピークカット・TOU活用）のバランス設計を行ったか",
  "充電インフラ（充電器配置・契約電力影響）の事前シミュレーションを実施したか",
  "環境省V2H補助金（上限50万円、機器費の1/2）の申請計画を策定したか",
  "CEV補助金（EV車両、40〜85万円）の申請計画を策定したか",
  "中小企業経営強化税制（即時償却・税額控除）の活用可否を判断したか",
  "自治体補助（東京都・神奈川県等）の対象可否を確認したか",
  "電力契約のTOU（時間帯別料金）プラン適合性を確認したか",
  "停電時の業務継続範囲（照明・空調・サーバ等）を縮退運用設計したか",
  "EV車両ローテーション運用（常時拠点配置台数）を運用ルール化したか",
];

const faqItems = [
  {
    question: "V2HとV2Bの違いは何ですか？",
    answer:
      "V2H（Vehicle to Home）は『家庭』への給電、V2B（Vehicle to Building）は『事業所・店舗・工場等の業務用建物』への給電を指します。仕組みは共通（EVから建物への双方向給電）ですが、業務用V2Bは大電流対応・複数台連動・大型機器選定が必要で、家庭用V2Hより機器価格・工事費が高くなる傾向です。法人用途では業務用V2Bを選択するのが標準です。",
  },
  {
    question: "V2H機器の費用はどれくらいですか？",
    answer:
      "家庭用V2H機器は本体50〜100万円・工事費込み総額100〜200万円、業務用V2Bは本体150〜400万円・工事費込み総額200〜500万円が目安です。複数台連動運用・配電盤改修を含めると業務用は500〜1,000万円規模になる場合もあります。環境省V2H補助金（機器費の1/2、上限50万円）と自治体補助の併用で初期負担を大幅圧縮可能。",
  },
  {
    question: "EV1台でどれくらいの時間、建物に給電できますか？",
    answer:
      "EVバッテリー容量と建物の電力消費量で決まります。一般家庭（1日10〜15kWh）ならEV1台40kWhで3〜4日、60kWhで5〜6日。中規模オフィス（1日30〜50kWh）ならEV1台40kWhで6〜12時間、60kWhで12〜18時間。社用車5台体制（合計250kWh）なら中規模オフィスを3〜5日支えられる規模感です。本ページの『EV容量別の建物給電時間表』を参照。",
  },
  {
    question: "V2H/V2Bの投資回収期間はどれくらいですか？",
    answer:
      "V2H機器単独では5〜10年。①BCP価値、②ピークカット（基本料金▲10〜20%）、③TOU活用、④EV燃料費削減、⑤補助金活用、の5要素を全て組み合わせると2〜4年に短縮可能です。事例で示した小規模事業所2.2年、中規模オフィス1.8年、物流センター3.5年が代表的なレンジ。脱炭素・SDGs価値を含めた総合評価が経営判断上重要です。",
  },
  {
    question: "V2Hで活用できる補助金は何がありますか？",
    answer:
      "①環境省V2H機器補助（機器費1/2、上限50万円）、②CEV補助金（EV車両、40〜85万円）、③中小企業経営強化税制（即時償却・税額控除7〜10%）、④東京都・神奈川県等の自治体補助（上限20〜50万円）、⑤需要家主導型PPA補助（太陽光・蓄電池併設の場合）、の5本柱が主要。複数併用で初期負担を半減〜2/3減まで圧縮できるケース多数。",
  },
  {
    question: "V2Hは家庭用と業務用どちらを選ぶべきですか？",
    answer:
      "法人で2〜3名規模の小規模事業所なら家庭用V2H（最大出力6kW）で対応可能。10名超のオフィスや工場・物流は業務用V2B（最大出力9〜10kW、複数台連動可）を選定すべきです。業務用は配電盤・分電盤改修や、大電流対応の電気工事が必要で、設計から運用開始まで4〜6ヶ月の準備期間を見込んでください。",
  },
  {
    question: "V2HでEVバッテリーは早く劣化しますか？",
    answer:
      "頻繁な充放電サイクルは年間1〜3%程度のバッテリー劣化を進める可能性があります。ただし、メーカー保証期間（一般に8年・16万km、容量保証70%）内であれば、致命的な劣化は稀。BCP用途中心（停電時のみ放電）であれば劣化影響は限定的、ピークカット中心の毎日運用では劣化を加速させるため、用途と劣化のトレードオフを設計時に整理する必要があります。",
  },
  {
    question: "V2Hで停電時、すべての設備に給電できますか？",
    answer:
      "原則として『縮退運用』が必要です。V2H機器の出力上限（6〜10kW程度）の範囲内で、照明・空調・サーバ・冷凍冷蔵等の重要設備に限定して給電します。製造ラインの大型モーター・大型空調機等は対応困難。事前に『停電時の優先給電リスト』を作成し、必要な配電盤切替工事を行うことが推奨されます。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "環境省 V2H補助金（再エネ・省エネ設備補助）", url: "https://www.env.go.jp/" },
  { name: "次世代自動車振興センター（CEV補助金）", url: "http://www.cev-pc.or.jp/" },
  { name: "CHAdeMO協議会（V2H規格・対応機器情報）", url: "https://www.chademo.com/ja/" },
  { name: "資源エネルギー庁（EV充電インフラ・V2X）", url: "https://www.enecho.meti.go.jp/" },
];

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        dateModified="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "EV・充電インフラ", url: "https://simulator.eic-jp.org/articles/ev-charging" },
          { name: "V2H・V2B（車両から建物への給電）の仕組み" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ev-charging" className="underline-offset-2 hover:underline">EV・充電インフラ</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">V2H・V2B（車両から建物への給電）の仕組み</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            V2H・V2B（車両から建物への給電）完全ガイド｜BCP兼用のEV活用
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            EVを蓄電池として活用するV2H/V2Bは、BCP対応・ピークカット・TOU活用・EV燃料費削減・脱炭素の5用途を兼ねる『総合的な電力ソリューション』として注目されています。本ページでは仕組み、5メーカー機器比較、EV容量別の建物給電時間表、6種の補助金一覧、3規模別Before/After事例、運用設計上の留意点、12項目チェックリストまで実務担当者向けに整理します。
          </p>
          <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>V2H・V2B・V2Gの違いとCHAdeMO規格の位置づけ</li>
              <li>法人BCP活用の5メリット・5デメリット</li>
              <li>主要V2H/V2B機器5メーカー比較表（出力・価格・特徴）</li>
              <li>EV容量別（20kWh〜250kWh）の建物給電時間表</li>
              <li>V2H補助金6種一覧（国・自治体・税制）</li>
              <li>小規模事業所・中規模オフィス・物流センターの3規模別Before/After事例</li>
              <li>運用設計上の5留意点と12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">V2H・V2B・V2Gの違いと基本概念</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              V2X（Vehicle to Everything）は、EVバッテリーを蓄電池として活用する技術の総称。給電先により『V2H』『V2B』『V2G』に分類されます。法人用途では業務用建物向けのV2Bが中心です。
            </p>
            <div className="mt-4 space-y-3">
              {conceptOverview.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              EV充電インフラ全般は{" "}
              <Link href="/articles/ev-charging" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                EV・充電インフラ（カテゴリ）
              </Link>
              、EV充電の電気代影響は{" "}
              <Link href="/ev-charging-electricity-cost-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人EV充電と電気代
              </Link>
              で関連記事を確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人BCPでのV2H/V2B活用と評価</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人BCPにおけるV2H/V2Bの位置づけを、メリット・デメリット・運用上の論点で整理します。従来非常用電源との比較で経済的・運用的に優位なケースが少なくありません。
            </p>
            <div className="mt-4 space-y-3">
              {bcpUtilization.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              非常用電源との比較は{" "}
              <Link href="/emergency-power-source-options" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                非常用電源の選び方
              </Link>
              、BCP訓練は{" "}
              <Link href="/bcp-drill-scenario-for-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                BCP訓練シナリオ（電力編）
              </Link>
              で深掘り解説。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要V2H機器メーカー比較表</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              国内で実績のあるV2H/V2B機器メーカー5社を、最大出力・価格・特徴で比較しました。住宅用・業務用の両方を網羅しています。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-sky-50 text-left">
                    <th className="border border-slate-200 px-3 py-2">メーカー</th>
                    <th className="border border-slate-200 px-3 py-2">モデル例</th>
                    <th className="border border-slate-200 px-3 py-2">最大出力</th>
                    <th className="border border-slate-200 px-3 py-2">本体価格</th>
                    <th className="border border-slate-200 px-3 py-2">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {v2hManufacturerTable.map((row) => (
                    <tr key={row.maker} className="align-top">
                      <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.maker}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.model}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.power}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.price}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-500 text-xs">{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 各メーカー公式情報および業界レポートから整理。価格は2025年10月時点の標準モデル目安。実際の見積は各メーカー販売代理店で個別取得が必要。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">EV容量別の建物給電時間表</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              EVバッテリー容量別に、一般家庭・小規模オフィス（10名）・中規模オフィス（30〜50名）への給電可能時間の目安を整理しました。BCP設計時の規模感把握に活用してください。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-sky-50 text-left">
                    <th className="border border-slate-200 px-3 py-2">EV容量</th>
                    <th className="border border-slate-200 px-3 py-2">一般家庭</th>
                    <th className="border border-slate-200 px-3 py-2">小規模オフィス</th>
                    <th className="border border-slate-200 px-3 py-2">中規模オフィス</th>
                    <th className="border border-slate-200 px-3 py-2">該当EV例</th>
                  </tr>
                </thead>
                <tbody>
                  {evCapacityHoursTable.map((row) => (
                    <tr key={row.capacity} className="align-top">
                      <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.capacity}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.home}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.smallOffice}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.midOffice}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 一般家庭1日10〜15kWh、小規模オフィス1日10〜18kWh、中規模オフィス1日30〜50kWhの想定。実際の給電時間は気温・季節・業務継続範囲で変動。代表的なシナリオに基づく試算。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">V2H補助金一覧（6種）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              V2H/V2B導入時に活用できる補助金・税制優遇を6種類整理しました。複数併用で初期負担を大幅圧縮できるケースが多く、申請時期の同時並行管理が重要です。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyList.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-2">
                    <p><span className="font-semibold text-slate-700">対象：</span>{item.target}</p>
                    <p><span className="font-semibold text-slate-700">補助率：</span>{item.rate}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金スケジュールは{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                補助金スケジュールと採択率
              </Link>
              、蓄電池系補助は{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                蓄電池・太陽光の補助金
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3規模別Before/After事例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              小規模事業所（10名）／中規模オフィス（80名）／物流センター（特高）の3規模別に、V2H/V2B導入のBefore/After効果を整理します。代表的なシナリオに基づく試算で、自社条件への適用は個別検証が必要です。
            </p>
            <div className="mt-4 space-y-4">
              {economicCases.map((cs) => (
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
            <h2 className="text-xl font-semibold text-slate-900">運用設計上の5留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              V2H/V2B導入を成功させるには、機器選定だけでなく運用設計が重要です。EV車両運用との整合、電力契約との連携、SOC管理、大電流対応、バッテリー劣化の5つの留意点を整理しました。
            </p>
            <div className="mt-4 space-y-3">
              {designConsiderations.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">太陽光・蓄電池との一体運用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              V2H/V2Bは単独運用より、自家消費太陽光・据置型蓄電池との一体運用で経済性が大きく向上します。屋上太陽光の昼間発電→EV充電→夕方EV→建物給電→夜間据置蓄電池放電、というカスケード運用で自家消費率を最大化できます。
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
              <li>屋上太陽光（10〜100kW）＋V2H/V2B＋据置蓄電池（30〜100kWh）の3点セットがエネルギー自給型の標準構成</li>
              <li>FIT満了後の太陽光（卒FIT電源）と組合せで、売電単価より自家消費の方が経済的</li>
              <li>需要家主導型PPA補助金（SII）でこの3点セット導入を支援する公募がある</li>
              <li>BEMS・HEMSと連動した自動運用（AI最適化）で、運用工数を大幅削減</li>
              <li>RE100・脱炭素経営戦略との連動で、ESG評価・顧客評価の向上に直結</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光は{" "}
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                自家消費型太陽光の費用対効果
              </Link>
              、太陽光＋蓄電池の組合せは{" "}
              <Link href="/solar-battery-combination-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                太陽光と蓄電池の組合せ
              </Link>
              で深掘り解説。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">V2H/V2B導入チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              V2H/V2B導入の検討から運用開始までの12項目チェックリスト。各項目を順を追って整理することで、機器選定・補助金活用・運用設計の漏れを防げます。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターでV2H導入後の電気代を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              V2H/V2B導入はピークカット・TOU活用・燃料費削減の3軸で電気代に影響します。シミュレーターで現行年間電気代と上振れリスクを把握し、V2H投資の優先順位付けの基礎データとしてご活用ください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約での年間電気代と上振れリスクを確認する</li>
              <li>EV充電負荷追加時の契約電力影響を試算する</li>
              <li>V2H導入によるピークカット効果と基本料金削減を比較</li>
              <li>燃料費削減＋電気代削減の総合効果を確認</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-04-18"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/ev-charging", title: "EV・充電インフラ（カテゴリ）", description: "EV関連記事ハブ。" },
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策（カテゴリ）", description: "BCP関連記事ハブ。" },
              { href: "/articles/energy-equipment", title: "蓄電池・太陽光・DRを知る（カテゴリ）", description: "据置型蓄電池との比較。" },
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX（カテゴリ）", description: "BEMSとの連動運用。" },
              { href: "/bcp-drill-scenario-for-electricity", title: "BCP訓練シナリオ（電力編）", description: "V2H/V2Bを含む訓練設計。" },
              { href: "/emergency-power-source-options", title: "非常用電源の選び方", description: "V2HとUPS・発電機の比較。" },
              { href: "/energy-bcp-overview", title: "法人の電力BCP概論", description: "電力BCPの全体像。" },
              { href: "/microgrid-for-business", title: "マイクログリッドとは", description: "V2Hを含む自立運転電力。" },
              { href: "/bcp-private-power-generation", title: "BCP兼用の自家発電", description: "自家発電との比較。" },
              { href: "/battery-electricity-cost-benefit", title: "蓄電池は電気料金対策としてどう効くか", description: "BCP＋ピークカット。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "太陽光＋V2H連動。" },
              { href: "/solar-battery-combination-benefit", title: "太陽光と蓄電池の組合せ", description: "3点セット運用。" },
              { href: "/demand-response-cost-benefit", title: "DRは電気料金対策としてどう考えるか", description: "DR報酬獲得。" },
              { href: "/corporate-ev-charging-basics", title: "法人のEV充電 基礎", description: "EV充電インフラ基礎。" },
              { href: "/ev-charging-off-peak-tou", title: "EV充電のTOU活用", description: "夜間TOUと連動運用。" },
              { href: "/ev-charging-electricity-cost-business", title: "法人EV充電と電気代", description: "EV充電の電気代影響。" },
              { href: "/ev-charging-employee-billing", title: "従業員EV充電の請求", description: "従業員向け充電運用。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "V2H機器補助。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光の補助金", description: "蓄電池系補助金。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "申請タイミング最適化。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "EV充電負荷時の契約見直し。" },
            ]}
          />

          <ContentCta
            heading="V2H導入後の電気代変動を試算する"
            description="シミュレーターで自社条件の年間電気代と上振れリスクを把握し、V2H/V2B投資（機器・EV車両・補助金活用）の優先順位付け基礎データを取得できます。経営層向け資料にも活用可能です。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="V2H/V2B導入、専門家に相談しませんか？"
            description="V2H/V2B導入は機器選定・EV車両運用・電力契約・補助金活用の総合設計が重要です。エネルギー情報センターは中立的立場で、自社規模・業種に最適なV2H/V2B投資戦略の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
