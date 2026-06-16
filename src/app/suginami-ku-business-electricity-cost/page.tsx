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
  "杉並区の法人電気料金完全ガイド｜阿佐ヶ谷・荻窪の中小オフィス／商業／アニメ制作の契約最適化";
const pageDescription =
  "杉並区の法人電気料金を区固有の産業集積（阿佐ヶ谷・荻窪・高円寺の中小オフィス・商業、住宅地のサービス業、アニメ・映像制作スタジオ）から実務的に解説します。オフィス・商業の契約区分別の単価目安、規模別の代表シナリオ、杉並区の省エネ補助までを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "杉並区 法人電気料金",
    "阿佐ヶ谷 荻窪 オフィス 電気代",
    "アニメ制作 スタジオ 電力",
    "杉並 商業 省エネ補助",
    "住宅地 中小事業者 電気代",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/suginami-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/suginami-ku-business-electricity-cost",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/by-region", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/by-region"],
  },
};

const electricSituation = [
  {
    label: "住宅地中心・中小オフィス／商業の電力需要構造（低圧中心）",
    detail:
      "杉並区は23区西部に位置し、区域の大半を閑静な住宅地が占めるベッドタウン型の市街地です。法人需要は阿佐ヶ谷・荻窪・高円寺・西荻窪の各駅周辺に中小オフィス・商業・飲食・サービス業が集積する形で分布し、住宅地には小規模事業者・SOHO・クリニック・学習塾が点在します。電力需要は低圧電灯・低圧電力の小口契約が中心で、商業ビル・制作スタジオ・クリニックモールなど一部が高圧という構成です。単価水準・燃料費調整額の感応度は東京電力エリア共通で、差別化は区の産業特性（業態構成）に表れます（出典: 経産省経済センサス・杉並区統計から整理）。",
  },
  {
    label: "アニメ・映像制作スタジオの集積（編集・サーバー・空調の負荷）",
    detail:
      "杉並区はアニメ制作会社が数多く立地する集積地として知られ、作画・撮影・編集・サーバーを担う制作スタジオが区内に点在します。電力消費の柱は、編集ルーム・撮影ルームのワークステーション、レンダリングや素材管理を担うサーバー、そして発熱機器を冷やす空調です。サーバー室と編集ルームは24時間に近い連続運転になりやすく、ベース電力と空調比率が高いのが特徴で、年間使用量が一定規模に達するスタジオでは高圧契約となります。負荷構造はオフィス系と情報通信業の中間的なプロファイルです。",
  },
  {
    label: "阿佐ヶ谷・荻窪・高円寺の商業／飲食（商店街の低圧契約）",
    detail:
      "阿佐ヶ谷・荻窪・高円寺・西荻窪の駅周辺には活気ある商店街が広がり、飲食・小売・サービス業の個店が密集します。これら個店の電力消費は空調・照明・冷蔵冷凍・厨房機器が中心で、低圧電灯・低圧電力の小規模契約が大多数です。営業時間帯に需要が集中し、夏季の冷房と厨房負荷が重なる飲食店ではピークが立ちやすい傾向があります。小口契約口数が多いため、区全体として法人契約の件数が多いのが特徴です。",
  },
  {
    label: "住宅地のクリニック・学習塾・SOHO（段階料金）",
    detail:
      "杉並区の広い住宅地には、内科・歯科・整形外科などのクリニック、学習塾・予備校、士業事務所、SOHO・在宅事業者が多く立地します。これらは低圧電灯（従量電灯）の契約が中心で、空調・照明・OA機器・医療機器が電力の柱です。低圧電灯は3段階料金のため、月使用量が一定以上の事業所では第3段階の高単価が負担になりやすく、新電力のフラット単価メニューへの切替メリットが出やすい層です。",
  },
  {
    label: "気象条件と空調需要（夏季冷房・通年負荷）",
    detail:
      "23区西部の杉並区は夏季の冷房需要が大きく、オフィス・商業・制作スタジオのいずれも夏季に空調ピークが立ちやすい傾向です。冬季も暖房・給湯の負荷が加わり、空調が通年で電気代に占める比率が高くなりやすい点に留意が必要です。とくに発熱機器を抱える制作スタジオでは、空調が機器負荷と重なってベース電力を押し上げます（出典: 気象庁・省エネ事例から整理）。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "杉並区内シェア最大。中小オフィス・店舗の低圧電力『低圧電力』『従量電灯C』、商業ビル・制作スタジオの『業務用高圧電力』が中心です。長年の取引関係で東電EPを継続する事業者が多く、相見積を取得して初めて新電力との差額に気付くケースが典型的です。本記載は各事業者の位置づけを中立的に整理したものです。",
  },
  {
    name: "東京ガスの電気・Looopでんき・ENEOSでんき",
    role: "全国系・ガス併売新電力",
    detail:
      "東京ガスの電気はガス契約のある事業所と親和性が高く、ガス併売の値引きが訴求点。Looop・ENEOSも区内の中小法人で実績があります。固定単価メニューが中心で、年間使用量の大きい商業ビル・制作スタジオでは競争入札の対抗候補になります。",
  },
  {
    name: "新電力（オフィス・商業向け・入札特化型を含む）",
    role: "全国展開新電力",
    detail:
      "高圧の中規模オフィス・商業ビル・制作スタジオでは、固定単価（2〜5年）メニューを持つ新電力が競争入札の主要プレイヤーです。年間使用量・力率・負荷率を提示して相見積を取得することで、単価条件の比較がしやすくなります。供給可能枠と燃調条件を含めた総合比較が前提です。",
  },
  {
    name: "ミツウロコでんき・auでんき・ソフトバンクでんき",
    role: "通信・流通系新電力",
    detail:
      "通信・流通系の新電力。小規模オフィス・店舗・クリニック・学習塾向けに固定単価プランを提供します。携帯料金や流通ポイントとのセット割引が訴求点で、低圧契約の小口事業者で選択肢になります。",
  },
  {
    name: "みんな電力・自然電力・アスエネ",
    role: "再エネ特化型新電力",
    detail:
      "実質再エネ電源を提供する新電力。取引先からのサプライチェーン脱炭素（Scope3）要請を受ける制作スタジオやサービス業で、再エネメニューや非化石証書付きプランの引合いがあります。料金水準はやや高めの場合があり、調達方針に応じた比較が前提です。",
  },
  {
    name: "撤退・新規受付状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面では都内でも新電力の新規受付停止・撤退が相次ぎました。2024年以降は受付が回復傾向にありますが、年間使用量の大きい商業ビル・制作スタジオでは供給可能枠の確保が課題となるため、契約満了の半年〜1年前からの早期着手が実務上重要です。最新の受付・撤退情報は新電力ネット等で確認できます。",
  },
];

const priceBenchmark = [
  {
    label: "低圧電力（動力）の単価水準 — 小規模事業者の主軸",
    detail:
      "東電EP『低圧電力』は基本料金 約1,200円/kW、電力量料金17〜20円/kWh＋調整項目が目安です。杉並区内の中小オフィス・店舗・小規模スタジオ（年間使用量3万〜30万kWhレンジ）の多くがこの契約です。燃料費調整額と再エネ賦課金（2026年度4.18円/kWh・確定）を加味した実質単価は24〜28円/kWhレンジが目安となります。数値は契約条件・季節・時間帯で変動します。",
  },
  {
    label: "高圧電力（業務用）の単価水準 — 商業ビル・制作スタジオ",
    detail:
      "東電EP『業務用高圧電力』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯で変動）＋調整項目が目安です。区内の商業複合ビル・クリニックモール・中規模制作スタジオ（300kW〜1,000kW級）が対象で、新電力経由で2〜4円/kWh安くなるケースもあります。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は22〜27円/kWhレンジが目安です。",
  },
  {
    label: "低圧電灯（事務所・店舗・クリニック）の単価水準",
    detail:
      "『従量電灯C』は基本料金 約290円/kVA、電力量料金は3段階制（第1段階約29.80円〜第3段階約37.45円/kWh）です。オフィス・小売・飲食・クリニック・学習塾で利用が多く、月使用量が大きい事業所は新電力のフラット単価メニューへの切替で基本料金圧縮・段階単価フラット化のメリットが出やすい区分です。",
  },
  {
    label: "燃料費調整額・再エネ賦課金の上乗せ",
    detail:
      "東京電力エリアの燃料費調整額はLNG・石炭価格と為替に連動し、2022〜2023年の高騰局面では実質単価を大きく押し上げました。再エネ賦課金は2025年度3.98円/kWh→2026年度4.18円/kWh（確定）と上昇傾向です。これらは電力会社を切り替えても一律に課されるため、削減には省エネ・契約最適化・（対象なら）減免申請の組合せが有効です（出典: エネ庁・東京電力エリア単価実績から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 阿佐ヶ谷の中小オフィス（低圧電力 30kW、年間 8万kWh）— 代表シナリオ",
    before:
      "Before: 阿佐ヶ谷駅周辺の中小オフィスA（サービス業・OA中心）。空調・照明・OA機器が電力消費の中心で、契約区分の見直しは未着手。東電EPの低圧電力／従量電灯＋燃調連動。年間電気代 約240万円規模（目安）。以下は公開事例から再構成した代表シナリオです。",
    after:
      "After: 全国系新電力の固定2年プランに切替を比較／LED化／高効率空調更新（区・SII補助を検討）／需要見える化メーターで使用量を把握。",
    result:
      "Result: 年間電気代 約240万円 → 約204万円（▲約15%、▲36万円・目安）。5年累計の削減額は約180万円（▲36万円×5年＝180万円）。契約kW 30→27／投資回収 補助金後 2年前後（目安）。いずれも代表シナリオの目安です。",
  },
  {
    title: "業種2: 荻窪の商業ビル・クリニックモール（高圧 300kW、年間 130万kWh）— 代表シナリオ",
    before:
      "Before: 荻窪駅周辺の商業複合ビルB（クリニックモール・テナント併設）。テナント空調・照明・医療機器・共用部が電力の柱。東電EPの業務用高圧電力＋燃調連動。年間電気代 約3,200万円規模（目安）。",
    after:
      "After: 新電力に固定2〜3年・燃調条件を比較して切替検討／全館LED化＋高効率空調（SII補助1/2を検討）／BEMSで需要見える化＋デマンド制御。",
    result:
      "Result: 年間電気代 約3,200万円 → 約2,690万円（▲約16%、▲510万円・目安）。5年累計の削減額は約2,550万円（▲510万円×5年＝2,550万円）。契約kW 300→270／投資回収 補助金後 2〜3年前後（目安）。",
  },
  {
    title: "業種3: アニメ・映像制作スタジオ（高圧 450kW、年間 200万kWh）— 代表シナリオ",
    before:
      "Before: 区内の中規模アニメ・映像制作スタジオC（作画・編集・撮影・サーバー）。作画・編集ルーム・レンダリングサーバー・空調が電力の中心で、サーバー室は連続負荷。東電EPの業務用高圧電力＋燃調連動。年間電気代 約4,800万円規模（目安）。",
    after:
      "After: 競争入札で固定3年契約を比較／サーバー室・編集ルームの空調最適化＋LED化（SII補助1/2を検討）／BEMSでデマンド制御／再エネメニュー検討。",
    result:
      "Result: 年間電気代 約4,800万円 → 約4,030万円（▲約16%、▲770万円・目安）。5年累計の削減額は約3,850万円（▲770万円×5年＝3,850万円）。契約kW 450→405／投資回収 補助金後 2〜3年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "空調・OA機器のベース負荷とオフィスのピーク",
    detail:
      "中小オフィスでは空調・照明・OA機器（PC・複合機・サーバー）がベース負荷の中心で、夏季の冷房ピークと営業時間帯の需要集中が電気代を押し上げます。在席率・稼働時間に対して契約電力（kW）が過大に設定されていると基本料金が割高に固定されるため、契約区分・契約電力の点検が削減の第一歩です。",
  },
  {
    label: "制作スタジオのサーバー・編集機器の連続負荷",
    detail:
      "アニメ・映像制作スタジオではレンダリングサーバー・編集ワークステーション・撮影機器が連続的に稼働し、発熱を冷やす空調と相まってベース電力が高止まりしやすい構造です。サーバー室の空調最適化（外気冷房・温度管理）と高効率機器更新で電力を抑える余地が大きく、改善効果が出やすい領域です（出典: 省エネ事例から整理）。",
  },
  {
    label: "商業・飲食・クリニックの段階料金負担",
    detail:
      "住宅地・商店街の小規模事業者では低圧電灯の3段階料金（第3段階約37.45円/kWh）が負担になりやすく、月使用量が一定以上の飲食店・クリニック・学習塾は新電力のフラット単価メニューへの切替メリットが明確に出ます。低圧電力と低圧電灯の使い分け・契約区分の見直しも論点です。",
  },
  {
    label: "燃料費調整額の変動リスク",
    detail:
      "東京電力エリアの燃料費調整額はLNG・石炭価格と為替に連動し、2022〜2023年の高騰局面では中小事業者の電気代を大きく押し上げました。市場連動プランを採用していた事業所では単価上振れを経験し、固定回帰の動きが見られます。固定か市場連動かは負荷パターンとリスク許容度によります。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2025年度3.98円/kWh→2026年度4.18円/kWh（確定）と上昇傾向です。年間使用量100万kWh規模の中規模事業者では年約418万円規模の負担となります（100万kWh×4.18円）。減免制度は電気使用密度などの要件があり中小オフィス・商業では該当しない場合が多いものの、電力多消費の制作スタジオ等は対象可否を確認する価値があります（出典: エネ庁から整理）。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率空調・LED・サーバー室空調・換気・ヒートポンプ・OA関連等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "杉並区内の中小オフィス・商業ビル・制作スタジオで活用しやすい主力補助です。全館LED化・高効率空調更新・サーバー室空調最適化などで採択実績があります。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください。",
  },
  {
    name: "杉並区 中小企業向け省エネ・設備導入補助（区独自）",
    target: "区内中小事業者の省エネ機器導入（LED・空調・高効率機器等）",
    rate: "1/3〜1/2、上限は年度・事業区分による（目安）",
    note: "区独自の中小企業支援メニュー。区内の中小オフィス・商店・クリニック・学習塾のLED・空調更新の打ち手になります。SII補助・都補助との重複可否は事前確認が必要です。最新の公募内容は杉並区・産業振興団体の窓口で確認してください。",
  },
  {
    name: "東京都 中小企業の省エネ・再エネ設備導入支援",
    target: "中小規模事業所のCO2削減・省エネ・再エネ設備導入",
    rate: "1/3〜2/3、上限は事業規模による",
    note: "東京都（クール・ネット東京等）の補助。中小オフィス・商業の高効率設備・自家消費太陽光・蓄電池の導入で活用例があります。地球温暖化対策報告書制度の対象事業所には別途インセンティブがあります。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり（事業による）",
    note: "屋上面積を確保できる商業ビル・スタジオでは自家消費太陽光＋蓄電池が選択肢になります。デマンド平準化（ピークカット）と再エネ調達を両立でき、契約電力の削減にも寄与します。屋上面積が限られる場合はオフサイトPPAも検討材料です。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率設備・燃料転換・PPA関連設備の取得で活用可能性があります。所管は経産省・国税庁。設備更新時に他補助と組合せて検討するのが定石で、適用要件は年度ごとに変わるため事前相談が望まれます。",
  },
];

const industryProfile = [
  {
    label: "中小オフィス・サービス業（荻窪・阿佐ヶ谷の駅周辺）",
    detail:
      "区内の中核業態。サービス業・士業・IT・広告などの中小オフィスが駅周辺に集積し、年間使用量3万〜50万kWhレンジの低圧電力・低圧電灯が中心。空調・照明・OA機器が電力の柱で、契約区分の最適化と新電力切替・LED化のメリットが出やすい層です。",
  },
  {
    label: "アニメ・映像制作スタジオ（区内集積）",
    detail:
      "杉並区を象徴する業態。作画・撮影・編集・サーバーを担う制作スタジオが点在し、サーバー室・編集ルームの連続負荷と空調が電力構造の柱。年間使用量50万〜250万kWhレンジで、中規模以上は高圧契約。空調最適化と契約最適化の両面で削減余地があります。",
  },
  {
    label: "商業・飲食（高円寺・西荻窪・阿佐ヶ谷の商店街）",
    detail:
      "駅周辺の商店街に密集する飲食・小売・サービスの個店群。空調・照明・冷蔵冷凍・厨房機器が電力の柱で、年間使用量3万〜30万kWhレンジの低圧電灯・低圧電力が中心。営業時間帯のピークと夏季冷房負荷が論点で、小口契約口数が多い層です。",
  },
  {
    label: "医療・クリニック・学習塾（住宅地）",
    detail:
      "住宅地に立地するクリニック・歯科・調剤、学習塾・予備校。空調・照明・医療機器・OA機器の負荷があり、年間使用量3万〜20万kWhレンジの低圧電灯が中心。月使用量が一定以上の事業所は段階料金の負担が大きく、新電力切替・LED化の効果が出やすい業態です。",
  },
  {
    label: "商業複合ビル・大型店（駅前）",
    detail:
      "荻窪・阿佐ヶ谷・高円寺の駅前に立地する商業複合ビル・大型店・クリニックモール。テナント空調・照明・共用部・昇降機の負荷があり、年間使用量100万〜300万kWhレンジの高圧契約が中心。BEMSによる需要見える化とデマンド制御、競争入札の効果が大きい業態です。",
  },
];

const switchingReality = [
  {
    label: "杉並区内の新電力切替実態",
    detail:
      "区内法人の新電力シェアは都内平均（30〜35%程度）と同水準と推定され、長年の取引で東電EPを継続する中小事業者が多いのが実態です。年間使用量の大きい商業ビル・制作スタジオほど競争入札による相見積のメリットが出やすく、小規模オフィス・店舗も相見積で初めて差額に気付くケースが典型的です。最終判断は自社の使用実態に即して行う必要があります。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の高騰局面で市場連動を採用していた事業所の多くが単価上振れを経験し、固定プランへ回帰しました。稼働が安定する中小オフィス・クリニックでは、単価を固定して予算管理を安定させる選択が検討されています。固定か市場連動かは負荷パターンとリスク許容度によって異なります。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・大規模災害時の復旧体制・契約変更不要の手間の少なさ。デメリット: 新電力比で単価がやや高めになる局面、燃料費調整額の条件差。区内の中小事業者は『慣性』で東電EPを継続するケースが多く、継続か切替かは相見積による総合比較が前提です。本記載は特定の電力会社を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（杉並×オフィス／商業／スタジオ固有）",
    detail:
      "①東電エリア・オフィス／商業／情報通信（高圧/低圧電力）への供給実績、②最低契約kW・契約期間・違約金条項、③固定単価期間（2〜5年）の確実性、④燃料費調整額の有無・上限・連動条件、⑤需要見える化・デマンド制御の提案力、の5点が区内の事業者では特に重要です。これらは比較の観点であり、結論は個別条件で変わります。",
  },
  {
    label: "需要見える化・デマンド制御の活用",
    detail:
      "サーバー・空調のベース負荷が高い制作スタジオや商業ビルでは、需要見える化（スマートメーター＋クラウド監視）とデマンド制御で契約電力（kW）を抑え、基本料金を削減する余地があります。小規模オフィスでも月額数千円〜のサービスで使用量を把握でき、契約見直しと組合せると効果が高まります。導入可否は負荷パターン・投資回収で判断します。",
  },
];

const energySaving = [
  {
    label: "全館LED化・高効率空調",
    detail:
      "オフィス・店舗・スタジオのLED化と高効率空調機への更新は、中小事業者の主力打ち手です。区補助＋SII補助＋都補助の組合せで投資回収 1.5〜3年が目安。空調比率が高い事業所ほど効果が出やすい領域です。",
  },
  {
    label: "サーバー室・編集ルームの空調最適化",
    detail:
      "制作スタジオのサーバー室・編集ルームは、外気冷房・適正温度管理・気流改善で空調電力▲15〜25%が見込める領域です。発熱機器の連続負荷に空調が重なるため、空調最適化はベース電力の削減に直結します。SII補助1/2の活用で投資回収 1.5〜2.5年が目安です。",
  },
  {
    label: "デマンド平準化・蓄電池の併用",
    detail:
      "夏季の冷房ピークが立つ商業ビル・スタジオでは、蓄電池の併用と運転スケジュール調整でピークを抑え、契約電力（kW）削減で基本料金が直接下がります。需要見える化と組合せると効果が高く、投資回収は補助金活用で2〜4年が目安です。",
  },
  {
    label: "厨房・冷蔵冷凍の運転最適化（飲食・商業）",
    detail:
      "商店街の飲食・小売では、冷蔵冷凍機の高効率化・温度設定見直し・厨房換気の最適化で、品質を維持しつつベース電力を抑えられます。高効率機更新と運用改善を組合せると効果的で、投資回収は設備により2〜4年が目安です。",
  },
  {
    label: "需要見える化（中小事業者向け）",
    detail:
      "スマートメーターとクラウド型需要見える化サービス（月額数千円〜）を使えば、小規模オフィス・店舗でも使用量の把握・ピーク管理が可能になります。ピーク需要▲10〜15%の事例があり、契約電力の見直しと組合せて基本料金を削減できます。区補助の対象になる場合があります。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "オフィス・スタジオの稼働時間帯とピークが立つ時間帯を把握しているか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "サーバー室・空調の連続負荷と空調比率を点検したか（制作スタジオ）",
  "低圧電力・低圧電灯・高圧の契約区分が使用実態に合っているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの現行単価で再見積を取得したか",
  "全国系・入札特化型・通信流通系の新電力5〜10社から相見積を取得したか",
  "再エネ賦課金減免制度（電気使用密度要件）の対象に該当するか確認したか",
  "杉並区・東京都・SIIの省エネ補助の併用可否を設備別に整理したか",
  "需要見える化・デマンド制御でピークを抑える余地はあるか試算したか",
  "契約期間・違約金条項を新電力契約書で必ず確認したか（特に中小法人）",
];

const faqItems = [
  { question: "杉並区の中小オフィスの電気代は他区と比べて高いですか？", answer: "東電EPの単価体系は都内一律のため、単価ベースでは23区平均と同水準です。ただし杉並区は住宅地が広く中小オフィス・商業・サービス業が多いこと、駅周辺に飲食・小売の個店が密集すること、アニメ・映像制作スタジオが集積することから、業態に応じた契約最適化の余地が大きい区といえます。新電力切替で5〜15%、設備更新を含めた総合最適化で15〜25%の削減余地があるのが典型パターンです。本回答は特定の電力会社・契約形態を推奨するものではありません。" },
  { question: "中小オフィスでまず取り組むべき電気代削減策は何ですか？", answer: "①契約電力（kW）が直近の最大デマンドに対して過大でないかの点検、②全館LED化、③高効率空調への更新、④需要見える化で使用量を把握、⑤新電力5〜10社の相見積、の5本柱が基本です。杉並区・SII・都の省エネ補助を組合せると投資回収を短縮できます。最適な順序はオフィスの負荷構造によって異なります。" },
  { question: "アニメ・映像制作スタジオの電気代を下げるにはどうすればよいですか？", answer: "制作スタジオはサーバー・編集ワークステーション・空調のベース負荷が高い構造です。サーバー室の空調最適化（外気冷房・適正温度管理・気流改善）、編集ルームのLED化と高効率空調、需要見える化によるデマンド監視、競争入札による単価条件の比較、といった対策が有効です。年間使用量が大きいスタジオほど新電力切替と空調最適化のメリットが出やすく、導入可否は負荷パターンと投資回収で判断します。" },
  { question: "杉並区独自の省エネ補助金はありますか？", answer: "杉並区は中小事業者向けの省エネ・設備導入支援メニューを設けており、LED・空調・高効率機器の更新などに活用できる場合があります（年度により内容・上限・補助率が変動）。国のSII補助・東京都の補助との重複可否は事業ごとに確認が必要です。最新の公募内容は杉並区および区の産業振興団体の窓口で確認してください。" },
  { question: "再エネ賦課金は中小事業者の電気代にどれくらい影響しますか？", answer: "再エネ賦課金は2025年度3.98円/kWh→2026年度4.18円/kWh（確定）と上昇傾向です。年間使用量100万kWh規模の中規模事業者では年約418万円規模の負担になります（100万kWh×4.18円）。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（太陽光）・契約最適化・（対象なら）減免申請の組合せが有効です。減免の可否は電気使用密度などの要件審査によります。" },
  { question: "取引先から再エネ電源を求められた場合、どう対応すればよいですか？", answer: "サプライチェーン脱炭素（Scope3）要請への対応としては、①再エネ特化型新電力や非化石証書付きメニューへの切替、②屋上の自家消費太陽光、③需要家主導型オフサイトPPA、④再エネ証書購入、の手段があります。中小オフィス・スタジオでは再エネ特化型新電力や非化石証書が現実的な入口で、屋上面積が確保できればPPAも選択肢です。コストと取引先要件のバランスで検討します。" },
  { question: "低圧電力と低圧電灯はどう使い分ければよいですか？", answer: "動力（業務用空調・大型機器・厨房動力等）には『低圧電力』、照明・コンセント・OA機器等には『低圧電灯（従量電灯）』が一般的です。低圧電灯の3段階料金は第3段階が高単価のため、月使用量が大きい事業所は新電力のフラット単価メニューへの切替メリットが出やすくなります。契約区分が使用実態に合っているかを点検し、必要なら見直すことが有効です。" },
  { question: "東電EPと新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、東電EP契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制・連絡フロー・24時間対応の有無を確認することが重要です。制作スタジオ・クリニックのBCPは自家発・蓄電池・UPSなど自社側の備えが中心となります。" },
];

const sourcesItems = [
  { name: "杉並区（産業振興・補助金情報）", url: "https://www.city.suginami.tokyo.jp/" },
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
];

export default function SuginamiKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/suginami-ku-business-electricity-cost"
        datePublished="2026-06-09"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "市区町村別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-municipality" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-municipality" className="underline-offset-2 hover:underline">市区町村別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">杉並区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            杉並区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            杉並区は閑静な住宅地を背景に、阿佐ヶ谷・荻窪・高円寺・西荻窪の駅周辺へ中小オフィス・商業・飲食・サービス業が集積し、加えてアニメ・映像制作スタジオの集積地としても知られるエリアです。本ページでは「杉並区 × オフィス／商業／制作スタジオ」というクロス領域に絞り、各業態の電力プロファイル、契約区分・契約電力（kW）の最適化、減免制度の考え方、杉並区独自の省エネ補助、規模別の代表シナリオまでを実務目線で整理します。なお全区とも東京電力エリアで単価水準は共通のため、差別化は区の産業特性に置いています。本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-09" updatedAt="2026-06-09" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>杉並区固有の電力事情（住宅地・中小オフィス／商業／制作スタジオの集積）</li>
              <li>中小オフィス・商業ビル・アニメ制作スタジオのBefore/After代表シナリオ3件</li>
              <li>空調・サーバーのベース負荷と契約電力（kW）最適化の考え方</li>
              <li>杉並区・東京都・SIIの省エネ補助の活用パターン</li>
              <li>区内中小事業者向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              杉並区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              杉並区は住宅地を中心に、駅周辺へ中小オフィス・商業・サービス業が集積する産業構造を持ち、加えてアニメ・映像制作スタジオが点在します。法人需要は低圧電灯・低圧電力の小口契約が中心で、商業複合ビル・制作スタジオ・クリニックモールなど一部が高圧という構成です。空調・OA・サーバーのベース負荷が電力構造の柱となる点が特徴です。
            </p>
            <div className="mt-4 space-y-3">
              {electricSituation.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都全体の電力事情・水準は{" "}
              <Link href="/tokyo-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京都の法人電気料金完全ガイド
              </Link>
              、東電エリア全体は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京電力エリア事情
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              区内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              杉並区では東電EP以外に全国系・ガス併売・通信流通系・再エネ特化型の新電力が法人向けで営業しています。中規模オフィス・商業ビル・制作スタジオでは固定単価メニューを持つ新電力が競争入札の主要プレイヤーで、年間使用量・力率・負荷率を提示して相見積を取るのが実務的です。なお本セクションは各事業者の位置づけを中立的に整理したものです。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {utilitiesList.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">役割: {item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力比較の基本は{" "}
              <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力の比較方法</Link>
              、撤退情報は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別新電力撤退状況マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              杉並区の電気料金水準と契約区分別の目安
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              区内事業者の電気代は契約区分（低圧電力・低圧電灯・高圧）によって単価水準が異なります。中小オフィス・店舗・小規模スタジオは低圧電力・低圧電灯、商業複合ビル・中規模制作スタジオは高圧が標準です。単価水準・燃調感応度は東京電力エリア共通で、差別化は産業特性（負荷構造・空調／サーバー比率）に表れます。
            </p>
            <div className="mt-4 space-y-3">
              {priceBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 単価は2026年時点の標準メニューを基準に整理した目安・概算です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。再エネ賦課金は2026年度4.18円/kWh（確定）。出典: 経産省/エネ庁・自治体統計から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 中小オフィス・商業ビル・アニメ制作スタジオ（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              杉並区の代表的な3規模で、契約見直し＋設備対策の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界目安から再構成した代表シナリオで、数値は目安レンジです。5年累計は年額×5で算定しています。実際の効果は各社の設備・運用条件で変わります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {industryImpact.map((cs) => (
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種一般の論点は{" "}
              <Link href="/small-office-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">小規模オフィスの電気料金見直し</Link>
              、{" "}
              <Link href="/film-production-studio-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">映像制作スタジオの電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              杉並区固有の電気代上昇要因 — 空調・連続負荷・段階料金・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              杉並区の電気代は、オフィスの空調・OAのベース負荷、制作スタジオのサーバー・編集機器の連続負荷、商業・クリニックの段階料金負担、燃料費調整額の変動、再エネ賦課金の上昇という、オフィス／商業／制作スタジオ固有の要因が複合的に影響します。
            </p>
            <div className="mt-4 space-y-3">
              {costFactors.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別要因の詳細は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              杉並区の補助金・優遇制度 — 区独自・SII・都
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              杉並区では国補助（SII等）・都独自補助・区独自補助が組合せ可能です。区独自補助は中小事業者向けに使いやすく、LED・空調更新の打ち手になります。なお各制度の対象・採否は公募ごとの要件審査によります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {subsidies.map((item) => (
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
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              、SII補助の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              区内の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              杉並区の事業者構成は、中小オフィス・サービス業、アニメ・映像制作スタジオ、商業・飲食、医療・クリニック・学習塾、商業複合ビル・大型店の5層構造です。それぞれ電力消費パターンと契約区分が異なります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {industryProfile.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電力会社切替の実情 — 区内事業者の現状
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              杉並区の新電力シェアは都内平均と同水準と推定され、長年の取引で東電EPを継続する中小事業者が多いのが実態です。商業ビル・制作スタジオほど競争入札の効果が出やすく、需要見える化・デマンド制御の提案力も選定の論点になります。本セクションは継続・切替それぞれの観点を中立的に整理したものです。
            </p>
            <div className="mt-4 space-y-3">
              {switchingReality.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、市場連動の適否は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              区内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              杉並区の省エネは『全館LED化＋高効率空調』『サーバー室・編集ルームの空調最適化』『デマンド平準化＋蓄電池』『厨房・冷蔵冷凍の運転最適化』『中小向け需要見える化』の5軸が主力です。区補助・SII補助・都補助の組合せで投資回収を短縮できます。
            </p>
            <div className="mt-4 space-y-3">
              {energySaving.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              杉並区向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。区内の中小事業者は特に契約電力（kW）の過大設定・契約区分・区独自補助の確認を見落としがちです。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見直し全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで杉並区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              杉並区はオフィスの空調・OA負荷、制作スタジオのサーバー連続負荷、商業・クリニックの段階料金負担など固有の要素を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・区補助活用・省エネ投資・需要見える化のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>代表シナリオで示した約15〜16%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-09"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/tokyo-business-electricity-cost", title: "東京都の法人電気料金完全ガイド", description: "都全体の電力事情・水準・補助金の総合ガイド。" },
              { href: "/articles/by-municipality", title: "市区町村別電気料金事情（一覧）", description: "都内全区の電気料金事情をハブから探す。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東電エリアの料金体系・単価水準・燃調。" },
              { href: "/nakano-ku-business-electricity-cost", title: "中野区の法人電気料金", description: "隣接区。中小オフィス・商業・サブカル集積の事情。" },
              { href: "/setagaya-ku-business-electricity-cost", title: "世田谷区の法人電気料金", description: "隣接区。住宅地・サービス業・商業の事情。" },
              { href: "/nerima-ku-business-electricity-cost", title: "練馬区の法人電気料金", description: "隣接区。住宅地・商業・アニメ制作の事情。" },
              { href: "/small-office-electricity-cost-review", title: "小規模オフィスの電気料金見直し（業種一般）", description: "空調・OA・契約区分の最適化。" },
              { href: "/film-production-studio-electricity-cost-review", title: "映像制作スタジオの電気料金見直し（業種一般）", description: "サーバー・編集・空調の負荷最適化。" },
              { href: "/it-services-electricity-cost-review", title: "ITサービス業の電気料金見直し（業種一般）", description: "サーバー・データ機器のベース負荷対策。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調変動の影響を理解する。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て（2026年度4.18円/kWh）。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "中小事業者の主力補助金の対象設備。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率の動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定回帰の判断軸を整理。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動プランが向かない法人", description: "市場連動の適否を業態から見極める。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気代見直し（業種一般）", description: "テナント空調・共用部・BEMSの最適化。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "業種・規模から電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="杉並区の自社条件で電気代リスクを試算する"
            description="中小オフィス・商業ビル・アニメ制作スタジオなど杉並区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。区独自補助・SII補助・固定プラン切替・需要見える化のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="杉並区の電力契約見直し、専門家に相談しませんか？"
            description="区内の中小オフィス・商業ビル・アニメ制作スタジオの電気代見直しは、空調・サーバーの負荷構造と契約区分で論点が大きく変わります。一般社団法人エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
