import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "病院のBCP非常用電源事例｜24時間稼働の電源確保とデマンド管理（代表シナリオ）";
const pageDescription = "24時間稼働の病院が、生命維持・手術・滅菌の無停電要件を満たすBCP非常用電源を整備しつつ、デマンド管理で電気代も見直した代表シナリオを、公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-hospital-24h-bcp-backup";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["病院 BCP 非常用電源","24時間稼働 電気代","災害拠点病院 自家発電","病院 デマンド 削減","医療 停電 対策"],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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

const h1Text = "病院×BCP非常用電源：24時間稼働の電源確保 代表事例";
const breadcrumbTitle = "病院×BCP非常用電源の事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。24時間稼働の病院がBCP(事業継続計画)の観点から非常用電源を整備しつつ、空調・滅菌・画像診断のデマンドを見直し、安全を最優先に省エネを両立させた代表事例を、業界統計と公開事例から再構成して解説します。生命維持に直結する負荷の無停電要件を踏まえ、何を残し何を削るかの判断軸を中立の立場から整理します。";
const d1CtaLead = "自院が本記事のどのシナリオに近いかは、病床規模・契約区分・主要設備によって変わります。業種別電気代計算機を使えば、病院という業種特性を踏まえたおおまかな電気代水準と、デマンドや使用量の見直し余地の試算ができます。まずは現状をざっくり把握し、安全を損なわない範囲での改善の出発点としてご活用ください。実数値は契約条件により異なります。";
const simulatorCtaLead = "電気料金の上昇・高騰は、24時間稼働でベースロードの高い病院ほど経営への影響が大きくなります。リスクシミュレーターを使えば、燃料費調整や料金上昇シナリオが自院の電気代にどの程度の幅で影響しうるかを、代表的な前提で把握できます。安全とBCPを守りつつ、どこに見直し余地があるかを考える出発点としてご活用ください。実数値は契約条件・使用実態により異なります。";
const whatYouLearn = ["24時間稼働の病院特有の負荷特性と、BCP非常用電源に求められる無停電要件の全体像","非常用自家発電・UPS・蓄電池それぞれの役割分担と、燃料72時間確保などの災害拠点病院要件","空調・滅菌・画像診断が生むデマンドピークの構造と、安全を損なわずに抑える着眼点","中規模急性期・療養型・災害拠点・クリニック併設という規模別の代表シナリオと削減率の目安","数値を断定せずに自院へ当てはめるための前提整理・データの読み方と意思決定プロセス"];
const premise = [{"label":"業種特性(24時間無停電要件)","detail":"病院は手術室・ICU・人工呼吸器・透析・滅菌設備など、停電が生命に直結する負荷を多数抱えます。法令により非常用電源の設置が求められ、瞬時の停電も許されない医療機器には無停電電源装置(UPS)を介して給電します。夜間も救急・入院対応で照明・空調・監視機器が稼働し続けるため、ベースロード(基底負荷)が高く、一般のオフィスのように夜間に負荷をゼロへ落とせない点が前提となります。代表シナリオ・目安です。"},{"label":"規模(病床数とエネルギー消費)","detail":"本ケースは病床数100〜400床規模の中規模病院を中心に想定します。延床面積が大きく、空調・給湯・滅菌・画像診断装置が主要なエネルギー消費源です。一般に病院は床面積あたりのエネルギー消費が事務所の数倍に達するとされ、契約電力も大きくなりがちです。実数値は契約条件・使用実態により異なりますが、規模が大きいほど基本料金とデマンド管理の影響が増す構造です。代表シナリオ・目安です。"},{"label":"契約区分(高圧・特別高圧)","detail":"中規模以上の病院の多くは高圧受電、大規模病院では特別高圧受電となる場合があります。契約電力は過去1年間の最大需要電力(デマンド)で決まるため、夏季の空調ピークや滅菌・画像診断の同時稼働で一度でも高い値を記録すると、その後の基本料金に長期間影響します。本ケースは高圧受電を中心に、デマンド管理が基本料金低減の鍵になる前提を置いています。代表シナリオ・目安です。"},{"label":"負荷パターン(昼夜差が小さい)","detail":"病院の負荷は昼間の外来・手術・検査でピークを迎えますが、夜間も入院患者対応で高い水準が続き、昼夜の差が比較的小さいのが特徴です。夏季は空調、冬季は暖房・給湯が増え、季節変動があります。滅菌器のオートクレーブやCT・MRIは起動時に大きな電力を要し、短時間の同時稼働がデマンドを押し上げます。負荷の平準化余地と、安全上動かせない負荷の切り分けが論点です。代表シナリオ・目安です。"},{"label":"コスト構造(電力・燃料・保守)","detail":"電気料金は基本料金(契約電力連動)と従量料金(燃料費調整・再エネ賦課金を含む)で構成されます。病院では加えて、非常用自家発電機の燃料備蓄・定期試運転・保守費用、コージェネレーション導入時のガス代など、BCP維持に伴う固定的コストが発生します。電気代単体ではなく、安全・BCP・保守を含めた総エネルギーコストで評価する視点が欠かせません。実数値は契約条件・使用実態により異なります。代表シナリオ・目安です。"}];
const beforeState = [{"label":"デマンドピークの未把握","detail":"見直し前は、空調・滅菌・画像診断装置が時間帯によって同時に立ち上がり、特定の時間にデマンドが跳ね上がっていました。どの設備の同時稼働がピークを生んでいるかを30分デマンド単位で可視化できておらず、過去の最大値に引きずられた高い契約電力のまま基本料金を払い続けていた状態です。安全に直結しない範囲でのピークシフト余地が見えていませんでした。代表シナリオ・目安です。"},{"label":"非常用電源の更新計画の曖昧さ","detail":"非常用自家発電機やUPS、蓄電池の更新時期・容量・燃料備蓄量が、災害拠点病院に求められる水準(おおむね72時間の連続稼働を見込む燃料確保等)と照らして十分か、明確に整理されていませんでした。設備の老朽化リスクと、平常時の省エネ投資が混在し、BCP強化と電気代見直しがばらばらに検討されていた点が課題です。実数値は契約条件・使用実態により異なります。"},{"label":"空調・換気の過剰運転","detail":"感染対策上、手術室・病室の換気回数や陰圧・陽圧管理は厳格に維持する必要があります。一方で、外来の落ち着く時間帯や一部の共用部まで一律に最大運転を続け、エリア・時間帯別の最適化がされていませんでした。安全基準を満たす範囲を超えた過剰運転が、空調動力という最大消費の一部で発生していた可能性があります。代表シナリオ・目安です。"},{"label":"料金メニュー・契約電力の見直し未実施","detail":"受電契約や料金メニューが過去の設備構成のまま据え置かれ、現在の負荷実態に合っているかの検証が長く行われていませんでした。基本料金の根拠となる契約電力が実需要に対して過大、もしくはデマンド管理不足で過小なリスクの両面が点検されておらず、燃料費調整の動向を踏まえた総額管理も十分ではありませんでした。実数値は契約条件・使用実態により異なります。"}];
const approaches = [{"name":"デマンド可視化とピークマネジメント","role":"基本料金低減の起点","detail":"まず30分デマンドのデータを継続取得し、空調・滅菌・画像診断のどの同時稼働がピークを生むかを特定しました。生命維持・手術・救急に関わる負荷は一切制限せず、外来時間外の共用部空調や非緊急の滅菌バッチのタイミングを安全基準内でずらすことで、デマンドの山をなだらかにします。デマンド監視装置により目標値超過の予兆を把握し、契約電力の見直し根拠を作ります。代表シナリオ・目安であり、実数値は使用実態で異なります。"},{"name":"BCP電源(自家発・UPS・蓄電池)の最適化","role":"安全とBCPの土台","detail":"非常用自家発電機の容量・燃料備蓄を災害拠点病院の要件(おおむね72時間の連続稼働を見込む確保等)と照合し、無停電が必須の医療機器はUPSで、それ以外の重要負荷は蓄電池でバックアップする階層を整理しました。蓄電池は平常時にピークカットへ活用し、非常時はBCP電源へ切り替える運用とすることで、安全確保と省エネを両立させます。安全最優先で、省エネはBCPと両立させる設計です。代表シナリオ・目安です。"},{"name":"空調・換気・滅菌の運用最適化","role":"最大消費の効率化","detail":"感染管理基準で定められた換気回数・室圧管理は維持したうえで、外来終了後や夜間の共用部について、室温設定やエリア別運転を見直しました。滅菌器(オートクレーブ)は1回あたりの積載効率を高めてバッチ回数を整理し、起動の集中を避けます。画像診断装置は待機電力モードの活用を検討しました。いずれも医療安全・院内感染対策を損なわない範囲に限定しています。代表シナリオ・目安です。"},{"name":"契約・料金メニューの精査とコージェネ検討","role":"総コスト最適化","detail":"デマンド可視化で得た実負荷をもとに契約電力・料金メニューを精査し、燃料費調整の影響も含めて総額で比較しました。あわせて、熱需要(給湯・暖房・滅菌)が大きい病院特性を踏まえ、コージェネレーション(熱電併給)の費用対効果を中立的に試算しました。コージェネは平常時の効率化とBCP時の電源確保を兼ねる可能性がある一方、初期投資・保守負担も大きく、導入是非は慎重に判断します。代表シナリオ・目安です。"}];
const caseScenarios = [{"title":"シナリオ1: 中規模急性期病院(約200床・高圧受電)","before":"手術室・ICUの無停電を維持しつつ、夏季空調と滅菌・画像診断の同時稼働でデマンドが高止まりし、基本料金の負担が重い状態でした(代表シナリオ・目安)。","after":"安全に直結しない共用部空調のピークシフトと滅菌バッチの平準化により、デマンドの山をなだらかにし、契約電力の最適化余地が見えてきました(目安)。","result":"電力使用量・基本料金あわせて数%〜十数%程度の削減余地が示唆される代表レンジです。実数値は契約条件・使用実態により異なります。"},{"title":"シナリオ2: 療養型病院(約120床・高圧受電)","before":"急性期より画像診断負荷は小さい一方、長期入院に伴う給湯・暖房・空調のベースロードが通年で高く、夜間も負荷を落としにくい状態でした(代表シナリオ・目安)。","after":"給湯・暖房の運用最適化と熱需要に着目したコージェネ検討により、熱と電気を一体で効率化する方向性が整理されました(目安)。","result":"総エネルギーコストで数%〜10%程度の改善余地が示唆される代表レンジです。実数値は契約条件・使用実態により異なります。"},{"title":"シナリオ3: 災害拠点病院(約350床・特別高圧受電)","before":"おおむね72時間の連続稼働を見込む燃料確保など災害拠点要件への対応が最優先で、平常時の省エネ最適化が後回しになりがちな状態でした(代表シナリオ・目安)。","after":"蓄電池を平常時のピークカットとBCP電源に兼用する運用設計により、BCP強化と省エネを切り離さず両立させる体制を整えました(目安)。","result":"BCP水準を維持したまま電力コストで数%程度の改善余地が示唆される代表レンジです。実数値は契約条件・使用実態により異なります。"},{"title":"シナリオ4: クリニック併設の中小病院(約60床・高圧受電)","before":"外来中心で昼間ピークが明確な一方、非常用電源・UPSの容量計画と料金メニューの見直しが長く未実施の状態でした(代表シナリオ・目安)。","after":"外来時間に合わせた空調・照明の運用最適化と契約電力の精査により、ピークに見合った契約への調整余地が把握できました(目安)。","result":"電気料金全体で数%〜十数%程度の削減余地が示唆される代表レンジです。実数値は契約条件・使用実態により異なります。"}];
const dataNotes = [{"label":"数値の位置づけ","detail":"本記事のBefore/Afterおよび削減率は、特定企業の実測値ではなく、業界統計と公開された省エネ・BCP事例から再構成した代表レンジです。精密な金額は院ごとに大きく異なるため断定せず、削減率(%)の幅や目安表現で示しています。自院の判断材料とする際は、必ず実データに基づく試算をご確認ください。実数値は契約条件・使用実態により異なります。"},{"label":"出典の考え方","detail":"前提となる病院のエネルギー消費特性や省エネ手法は、経済産業省・資源エネルギー庁の公開資料、SII(環境共創イニシアチブ)の採択事例集、および業界統計から再構成しています(2025年10月時点・代表シナリオ)。制度・規格の名称はRE100、ZEB、BEMS、コージェネレーション等の正式名称を用いています。"},{"label":"削減率レンジの算出前提","detail":"削減率は、デマンド管理による基本料金低減、空調・滅菌・給湯の運用最適化、契約・料金メニュー精査という複数施策の積み上げを前提に、一般的な病院の消費構造を当てはめて幅で示したものです。生命維持・手術・救急に関わる負荷は削減対象外とし、安全を損なわない範囲に限定しています。代表シナリオ・目安です。"},{"label":"中立性に関する注記","detail":"当法人は中立・非営利の立場であり、本記事は特定の電力会社・設備メーカー・契約形態を推奨するものではありません。事例企業はすべて架空であり、実在企業の優劣評価は行いません。公開公表されたカーボンニュートラル目標等の事実を参照する場合も、優劣比較や推奨は行わない方針です。"}];
const process = [{"label":"データ収集(計測の整備)","detail":"まず受電点の30分デマンドデータと、空調・滅菌・画像診断など主要設備の稼働ログを継続取得できる体制を整えます。病院では計測対象が多岐にわたるため、BEMS(ビルエネルギー管理システム)等を活用してエリア別・設備別に見える化することが出発点です。安全に関わる医療機器は計測の有無にかかわらず一切制限しないことを前提に設計します。代表シナリオ・目安です。"},{"label":"分析(ピーク要因の特定)","detail":"取得データから、どの時間帯にどの設備の同時稼働がデマンドピークを生むかを分析します。空調・滅菌・CT/MRIの起動集中など、安全を損なわずに平準化できる要因と、生命維持上どうしても動かせない負荷を切り分けます。季節変動も踏まえ、夏季・冬季それぞれのピーク構造を把握して施策の優先順位をつけます。代表シナリオ・目安です。"},{"label":"相見積・比較(中立評価)","detail":"デマンド可視化で得た実負荷をもとに、契約電力・料金メニューを複数案で比較し、燃料費調整の影響も含めた総額で評価します。BCP電源や蓄電池、コージェネレーションの導入を検討する場合も、複数の見積を取り、初期投資・保守費・BCP効果を中立的に並べて判断します。特定メーカー・特定電力会社を前提とせず、客観的な比較表を作ることが重要です。"},{"label":"意思決定と効果検証","detail":"院内の医療安全・感染管理・施設管理・経営の各部門が合意できる形で施策を決定し、安全最優先の原則を文書化します。導入後はデマンドと使用量を継続モニタリングし、想定した削減レンジに収まっているか、BCP水準が維持されているかを定期的に検証します。効果が出ない場合は要因を分析し、運用を再調整する改善サイクルを回します。代表シナリオ・目安です。"}];
const viewpoints = [{"label":"安全を最優先に置く","detail":"省エネやコスト削減を検討する際も、生命維持・手術・救急・滅菌・感染管理に関わる負荷は一切制限しないことが大前提です。換気回数や室圧管理など医療安全基準を満たすことを動かせない条件とし、その範囲内で効率化できる部分を探す順序で判断します。安全とコストが対立する場合は必ず安全を優先します。代表シナリオ・目安です。"},{"label":"BCPと省エネを切り離さない","detail":"非常用電源の整備と平常時の省エネは別々に検討されがちですが、蓄電池の平常時ピークカットとBCP電源兼用のように、両立できる設計が存在します。BCP投資を省エネ効果と一体で評価することで、限られた予算を効率的に配分できます。安全最優先で、省エネはBCPと両立させる視点を持つことが重要です。"},{"label":"基本料金と従量料金を分けて見る","detail":"電気料金は契約電力に連動する基本料金と、使用量に応じた従量料金(燃料費調整・再エネ賦課金を含む)から成ります。病院ではデマンド管理が基本料金に、運用最適化が従量料金に効きます。どちらにどれだけ余地があるかを分けて把握することで、優先すべき施策が明確になります。実数値は契約条件・使用実態により異なります。"},{"label":"総エネルギーコストで判断する","detail":"電気代単体ではなく、非常用発電機の燃料・保守費、コージェネ導入時のガス代まで含めた総エネルギーコストで評価します。電気代だけ下げても、BCP維持費や熱源コストが増えれば全体最適にならない場合があります。安全・BCP・コストを一体で捉える視点が、病院では特に重要です。代表シナリオ・目安です。"},{"label":"中立的な比較材料をそろえる","detail":"契約メニューや設備導入を検討する際は、特定の電力会社・メーカーを前提とせず、複数案を同じ条件で並べた比較材料をそろえます。当法人は中立・非営利の立場であり、本記事も特定の選択肢を推奨するものではありません。最終判断は自院の実データと専門家の助言に基づいて行うことを推奨します。"}];
const cautions = [{"label":"削減を急いで安全を損なわない","detail":"コスト削減を急ぐあまり、換気・空調・無停電要件を緩めることは絶対に避けるべきです。感染管理や医療機器の安定稼働に関わる負荷は削減対象から除外し、安全基準を満たす範囲を一切超えないことを徹底します。よくある誤解として、すべての設備が削減対象になると考えがちですが、病院では動かせない負荷が大きい点に注意が必要です。"},{"label":"数値は代表レンジであり断定できない","detail":"本記事の削減率や金額表現は、業界統計と公開事例から再構成した代表レンジ・目安です。病床数・診療科・設備構成・地域・契約条件によって結果は大きく変わるため、自院に同じ数値がそのまま当てはまるとは限りません。実際の判断は、必ず自院の実データに基づく試算で確認してください。代表シナリオ・目安です。"},{"label":"BCP要件の確認を怠らない","detail":"災害拠点病院などには、おおむね72時間の連続稼働を見込む燃料確保や受水槽容量など固有の要件があります。省エネのために容量を縮小すると、BCP水準を満たせなくなるおそれがあります。施設の指定区分ごとに求められる要件を確認し、これを下限として設計することが必要です。実数値は施設要件により異なります。"},{"label":"コージェネ等の投資は慎重に","detail":"コージェネレーションや蓄電池は、平常時の効率化とBCP強化を兼ねうる一方、初期投資・保守費・燃料調達リスクが大きく、回収には熱需要の継続が前提となります。導入ありきで進めず、複数案を中立的に比較し、費用対効果とBCP効果の両面で慎重に判断することが重要です。代表シナリオ・目安です。"},{"label":"補助制度の名称・要件を正確に把握する","detail":"省エネ・BCP設備にはSII(環境共創イニシアチブ)の採択事業など各種補助制度が関係する場合があります。制度名・対象・公募時期は年度ごとに変わり、要件も細かく定められています。古い情報や名称の誤りで判断を誤らないよう、最新の公募要領を一次情報で確認することが大切です。本記事は推奨や採択を保証するものではありません。"}];
const checklist = ["受電点の30分デマンドデータを継続取得できているか","空調・滅菌・画像診断の同時稼働ピークを特定したか","生命維持・手術・救急に関わる負荷を削減対象外と明文化したか","非常用自家発の容量と燃料備蓄が施設要件を満たすか","無停電が必須の医療機器をUPSでバックアップしているか","蓄電池の平常時ピークカットとBCP兼用を検討したか","換気回数・室圧管理など感染対策基準を維持しているか","契約電力が現在の実負荷に見合っているか点検したか","料金メニューを燃料費調整込みの総額で比較したか","熱需要を踏まえコージェネの費用対効果を中立試算したか","医療安全・感染管理・施設・経営部門が合意しているか","導入後のデマンドとBCP水準を定期検証しているか"];
const simulatorCtaBullets = ["電気料金が上昇した場合の負担増を幅で把握できる","病院特性を踏まえた現状コスト水準の目安がわかる","デマンドや使用量の見直し余地を考える起点になる","BCPと省エネを両立させる検討の判断材料になる"];
const faqItems = [{"question":"この事例は実在の病院ですか。記載の数値は正確ですか。","answer":"いいえ。本記事の事例はすべて架空企業の代表シナリオです。Before/Afterや削減率は、経済産業省・資源エネルギー庁の公開資料やSII採択事例集、業界統計から再構成した代表レンジ・目安であり、特定病院の実測値ではありません。病床数・設備・契約条件によって結果は大きく異なるため、精密な金額は断定していません。自院の判断には、必ず実データに基づく試算をご確認ください。実数値は契約条件・使用実態により異なります。"},{"question":"この記事は特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当法人は中立・非営利の立場であり、本記事は特定の電力会社・契約形態・設備メーカーを推奨するものではありません。料金メニューやBCP設備の導入は、複数案を同じ条件で比較し、自院の実データと専門家の助言に基づいて判断することを推奨します。公開公表されたカーボンニュートラル目標等の事実を参照する場合も、優劣比較や推奨は行わない方針です。客観的な比較材料の提供を目的としています。"},{"question":"病院で省エネを進めると、医療安全に影響しませんか。","answer":"本記事の前提は安全最優先です。生命維持・手術・救急・滅菌、そして感染管理に関わる換気回数や室圧管理は一切制限せず、これを動かせない下限条件とします。省エネは、外来時間外の共用部空調や非緊急の滅菌バッチのタイミング調整など、安全基準を満たす範囲に限定して行います。安全とコストが対立する場合は必ず安全を優先するため、適切に設計すれば医療安全への影響は避けられます。代表シナリオ・目安です。"},{"question":"災害拠点病院の非常用電源には、どのような要件がありますか。","answer":"災害拠点病院には、停電時にも診療を継続できるよう、おおむね72時間の連続稼働を見込む燃料確保や、必要な受水槽容量などの要件が求められます(指定区分により異なります)。本記事ではこれらを省エネで縮小せず、下限として維持する設計を前提としています。具体的な要件は施設の指定区分や所管の定めにより異なるため、最新の一次情報をご確認ください。実数値は施設要件により異なります。"},{"question":"UPS・蓄電池・非常用自家発電機は、どう役割が違うのですか。","answer":"無停電が必須の医療機器(人工呼吸器や手術室機器など)は、瞬時の停電も許されないためUPS(無停電電源装置)で給電します。停電が長引く場合は非常用自家発電機が燃料で長時間の電力を供給します。蓄電池はその中間で、平常時はピークカットに活用し、非常時は重要負荷のバックアップへ切り替える運用が可能です。三者を階層的に組み合わせ、安全とBCP、省エネを両立させます。代表シナリオ・目安です。"},{"question":"病院でデマンド(最大需要電力)が高くなる原因は何ですか。","answer":"空調動力、滅菌器(オートクレーブ)の加熱、CT・MRIなど画像診断装置の起動が、特定の時間帯に重なるとデマンドが跳ね上がります。とくに夏季の空調ピークと検査・滅菌の集中が重なる時間が要注意です。30分デマンドデータで同時稼働の要因を特定し、生命維持に関わらない範囲でタイミングをずらすことで、安全を損なわずにピークをなだらかにできる場合があります。代表シナリオ・目安です。"},{"question":"コージェネレーションの導入は病院に向いていますか。","answer":"病院は給湯・暖房・滅菌など熱需要が大きく、熱電併給のコージェネレーションが効率化やBCP電源確保に寄与しうる業種です。一方で初期投資・保守費・燃料調達の負担が大きく、回収には熱需要の継続が前提となります。導入ありきで進めず、複数案を中立的に比較し、費用対効果とBCP効果の両面から慎重に判断することが重要です。本記事は導入を推奨するものではありません。代表シナリオ・目安です。"},{"question":"まず何から着手すればよいですか。","answer":"最初の一歩は現状の見える化です。受電点の30分デマンドデータと主要設備の稼働状況を継続取得し、どこにピークと無駄があるかを把握します。あわせて、生命維持に関わる動かせない負荷と、安全範囲内で調整できる負荷を切り分けます。そのうえで契約電力・料金メニューを総額で点検し、BCP要件を下限として省エネ施策を組み立てる順序が安全です。実数値は契約条件・使用実態により異なります。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/nursing-care-facility-electricity-cost-review","title":"介護施設の電気料金見直しポイント","description":"安定供給と予算管理を重視した介護施設の電力契約見直しの考え方。"},{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/hospital-electricity-cost-review","title":"病院の電気代見直し","description":"医療設備の電力構造。"},{"href":"/clinic-electricity-cost-review","title":"クリニックの電気代見直し","description":"小規模医療の削減観点。"},{"href":"/subsidy-medical-welfare-strategy","title":"医療・福祉の補助金活用戦略","description":"省エネ・BCP投資の補助金。"},{"href":"/bcp-private-power-generation","title":"自家発電によるBCP","description":"停電時の自立運転。"},{"href":"/electricity-bcp-for-corporates","title":"法人の電力BCP","description":"停電対策の全体像。"},{"href":"/bcp-drill-scenario-for-electricity","title":"電力BCPの訓練シナリオ","description":"停電想定の備え。"},{"href":"/battery-storage-bcp-peak-cut-hybrid","title":"蓄電池のBCP・ピークカット活用","description":"蓄電池の多目的活用。"},{"href":"/demand-control-guide","title":"デマンド制御の基礎","description":"契約電力・基本料金を抑える。"},{"href":"/case-study-hospital-peak-cut","title":"病院：デマンド制御で基本料金22%圧縮の事例","description":"既存の病院事例。"},{"href":"/case-study-welfare-elderly-energy-saving","title":"高齢者施設×省エネ投資の事例","description":"医療福祉の比較ケース。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyHospital24hBcpBackupPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-05-31"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "事例・削減実績を知る", url: "https://simulator.eic-jp.org/articles/case-studies" },
          { name: breadcrumbTitle, url: pageUrl },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/case-studies" className="underline-offset-2 hover:underline">事例・削減実績を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">{breadcrumbTitle}</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{h1Text}</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{leadText}</p>
          <AuthorBadge publishedAt="2026-05-31" updatedAt="2026-05-31" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              {whatYouLearn.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本記事は業界統計・公開事例から再構成した架空企業の代表シナリオです。数値は目安であり、実数値は契約条件・使用実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態を推奨するものではありません。{" "}
            <Link href="/articles/case-studies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">事例カテゴリ一覧</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業種×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・負荷パターン・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。</p>
            <div className="mt-4 space-y-3">
              {premise.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Before：見直し前の電気代構造と課題</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代構造上の課題を整理します。これらは多くの同業種で共通して見られる論点です。</p>
            <div className="mt-4 space-y-3">
              {beforeState.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実施した削減アプローチ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、複数の打ち手を組み合わせている点が特徴です。</p>
            <div className="mt-4 space-y-3">
              {approaches.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別の代表シナリオ（Before/After・目安）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業種の異なる代表シナリオで、Before/Afterの考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・使用実態により異なります。実在企業の事例ではありません。</p>
            <div className="mt-4 space-y-4">
              {caseScenarios.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">効果（目安）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">数値の前提とデータ出典（捏造ゼロの考え方）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本記事の数値は、特定企業の実績ではなく、公開された業界統計・採択事例集・公的データから再構成した代表レンジです。前提を以下に明記します。</p>
            <div className="mt-4 space-y-3">
              {dataNotes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 数値は2025年10月時点の公開情報（経済産業省・資源エネルギー庁・SII採択事例集・各業界統計等）から再構成した代表シナリオの目安です。実数値は契約条件・使用実態により異なります。本記事は特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実行プロセスと体制</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">同様の取り組みを自社で進める際の、データ収集から効果検証までの実行プロセスを整理します。</p>
            <div className="mt-4 space-y-3">
              {process.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">自社が同様のケースか診断する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{d1CtaLead}</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・規模・契約区分・エリアを選ぶだけで推定年間電気代と削減余地を試算できる{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
              {" "}で、自社が本ケースに近いかを確認できます。試算はあくまで目安であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中立的に判断するための観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">削減手法を検討する際に、単価や一面的な効果だけでなく総合的に判断するための観点を整理します。</p>
            <div className="mt-4 space-y-3">
              {viewpoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">留意点・よくある誤解</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースの手法を検討する際に陥りやすい誤解や、事前に確認すべき留意点を整理します。</p>
            <div className="mt-4 space-y-3">
              {cautions.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自社で再現するためのチェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握から始めましょう。</p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklist.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の電気代と上振れリスクを試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{simulatorCtaLead}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {simulatorCtaBullets.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-05-31" />
          </div>

          <RelatedLinks heading="関連ページ" links={relatedLinks} />

          <ContentCta
            heading="自社の電気代と削減余地を試算する"
            description="本ケースに近いかどうかは、自社の業種・規模・契約条件で試算してみるのが近道です。シミュレーターと業種別電気代計算機で、上振れリスクと削減余地を中立的な判断材料として確認できます。"
            links={contentCtaLinks}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="電力契約・省エネ・再エネ投資の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・再エネ投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態を推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
