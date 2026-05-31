import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "リゾートホテルのコージェネ導入事例｜熱電併給で電力購入量と熱コストを最適化（代表シナリオ）";
const pageDescription = "リゾートホテルが、給湯・空調の大きな熱需要に対しコージェネレーション(熱電併給)を導入し、電力購入量と熱コストを最適化した代表シナリオを、公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-hotel-resort-cogeneration";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["ホテル コージェネ","熱電併給 リゾート","CHP 給湯 空調","ホテル 電気代 削減","BCP 自家発電 宿泊"],
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

const h1Text = "リゾートホテル×コージェネ：熱電併給で電力購入量を最適化した代表事例";
const breadcrumbTitle = "リゾートホテル×コージェネの事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。リゾートホテルは給湯と空調の熱需要が大きく、電気とガスの両方を多量に消費します。本稿では「コージェネレーション(熱電併給/CHP)」を導入した代表事例を、業界統計と公開事例から再構成して紹介します。電気代単独でなく一次エネルギー総コストで評価する視点を軸に、稼働率や熱電比、デマンド、BCPまで含めて、自社が同様のケースに当てはまるかを判断するための観点を整理します。";
const d1CtaLead = "自社のリゾートホテルが、この事例と同じようにコージェネで効果を得られるケースかどうかは、業種特有の熱需要と稼働率を踏まえた試算が出発点です。業種別電気代計算機を使えば、自社の規模・稼働の前提で電気代の概算をつかみ、コージェネ検討の入口に立てます。まずは現状コストの目安を把握し、一次エネルギー総コストでの見直し余地を確認してみてください。";
const simulatorCtaLead = "電気料金の上昇や高騰は、リゾートホテルのように熱需要が大きい施設ほど経営への影響が大きくなります。コージェネ導入を検討する前に、まず自社が値上げ局面でどの程度のリスクにさらされているかを把握することが第一歩です。シミュレーターを使えば、契約条件や使用実態に応じた電気料金上昇リスクの目安を確認でき、見直しの優先順位を考える材料になります。代表シナリオの数値は目安であり、実数値は契約条件により異なります。";
const whatYouLearn = ["リゾートホテルの給湯・空調が生む熱需要と電力消費の特性","コージェネレーション(CHP)で電力購入量と排熱コストを同時に下げる仕組み","電気代単独でなく一次エネルギー総コストで評価する理由とガス価格連動の留意点","温浴併設・宴会場・通年稼働・季節変動など条件別の代表シナリオと削減率レンジの目安","稼働率・熱電比・デマンド・BCPを踏まえた導入可否の判断観点とチェックリスト"];
const premise = [{"label":"業種特性(熱需要主導)","detail":"リゾートホテルは大浴場・客室シャワー・厨房の給湯と、客室・宴会場・ロビーの空調が一日中稼働するため、電気と熱の両方を大量に消費します。特に給湯は深夜から早朝、空調は日中から夜にかけて需要が偏り、熱需要が施設運営の中核を占めます。電力だけを見ると実態を捉えきれず、ガス・重油も含めた一次エネルギー全体でコストを評価する必要がある点が、オフィスや小売とは異なる固有の特性です。"},{"label":"規模(中規模リゾート)","detail":"本ケースの代表モデルは客室100〜200室規模、大浴場・宴会場・レストランを備えるリゾートホテルを想定します。延床面積は数千〜1万平方メートル台、受電は高圧、年間を通じて一定の宿泊・日帰り利用があります。この規模帯はコージェネの発電容量(数十〜数百キロワット級)と熱需要の釣り合いが取りやすく、排熱を給湯・暖房に有効活用しやすいため、CHP導入の検討対象になりやすい層です。"},{"label":"契約区分(高圧受電)","detail":"本モデルは高圧受電で、基本料金は契約電力(デマンド)に基づき、力率割引も適用される契約を想定します。コージェネで自家発電する分、系統からの購入電力量と最大需要(デマンド)が下がるため、基本料金と従量料金の双方に影響します。ただし契約電力の決まり方や割引条件は契約により異なるため、デマンド低減効果を試算する際は自社の契約条件を必ず確認することが前提です。"},{"label":"負荷パターン(熱電同時性)","detail":"リゾートホテルは入浴前後の給湯ピークと、チェックイン後の空調・照明ピークが重なりやすく、電気と熱の需要が同じ時間帯に立ち上がる「熱電同時性」が高い施設です。コージェネは発電と同時に排熱が出るため、この同時性が高いほど排熱を捨てずに使え、総合効率が向上します。逆に閑散期や昼間の谷では熱を持て余す恐れがあり、稼働計画と需要予測が成否を分けます。"},{"label":"コスト構造(電気+ガス+重油)","detail":"リゾートホテルのエネルギーコストは電気料金だけでなく、給湯・暖房用のガスや重油が大きな比重を占めます。コージェネはガスを燃料に発電し、その排熱で給湯・暖房を賄うため、購入電力を減らす一方でガス使用は増えます。したがって電気代の削減額だけを見ると評価を誤りやすく、燃料費・基本料金・保守費を合算した一次エネルギー総コストで損益を判断することが、このケースの大前提となります。"}];
const beforeState = [{"label":"高い購入電力とデマンド","detail":"見直し前は空調と給湯補機、厨房機器が同時に動く時間帯に最大需要(デマンド)が跳ね上がり、契約電力に基づく基本料金が高止まりしていました。客室稼働率が高い週末や連休にデマンドが更新されると、その後一年間の基本料金単価が引き上がる構造で、繁忙期の一瞬のピークが年間コストを押し上げていた点が課題でした。"},{"label":"給湯熱を全量燃料で確保","detail":"大浴場と客室給湯の膨大な熱需要を、すべてガスボイラーや重油ボイラーで賄っており、電力とは別建てで燃料費が常時発生していました。発電所から購入する電力は発電・送電段階で多くの一次エネルギーを失っているにもかかわらず、現地ではその排熱を活用できず、発電と熱供給が分離していたため一次エネルギー利用効率が低い状態でした。"},{"label":"停電時の事業継続リスク","detail":"系統からの購入電力に全面依存していたため、災害や系統事故で停電すると、空調・給湯・照明・厨房が同時に停止し、宿泊客の安全確保とサービス継続が困難になるリスクを抱えていました。観光地のリゾートは交通寸断時に滞在客が孤立しやすく、最低限の電力と温水を自前で確保するBCP(事業継続)の必要性が経営課題として意識されていました。"},{"label":"総コストの可視化不足","detail":"電気とガス・重油の請求が別管理で、用途別(給湯・空調・動力・照明)のエネルギー消費が定量的に把握できていませんでした。このため「どの設備にどれだけのコストがかかっているか」が不明確で、削減投資の優先順位を合理的に決められず、値上げ局面でも場当たり的な節約に留まっていた点が、抜本的な見直しを妨げていました。"}];
const approaches = [{"name":"コージェネレーション(CHP)導入","role":"電力と熱を同時供給する中核設備","detail":"ガスを燃料とするコージェネレーションを導入し、発電した電力を館内で自家消費しつつ、発電時に出る排熱(温水・蒸気)を大浴場の加温や給湯、暖房に利用します。発電と熱利用を同じ施設内で行うことで一次エネルギーの総合効率が高まり、系統からの購入電力量とボイラー燃料の双方を圧縮します。熱需要が大きいリゾートホテルは排熱の受け皿が豊富で、CHPの強みを活かしやすい用途です。"},{"name":"排熱の温浴・給湯連携","role":"排熱を捨てずに使い切る熱マネジメント","detail":"コージェネの排熱を貯湯槽や熱交換器と組み合わせ、大浴場・温浴施設・客室給湯へ優先的に供給する熱回収系統を整えます。需要の時間差は貯湯でならし、足りない分のみ既存ボイラーで補完するベース・ピーク分担とすることで、排熱の捨て損ない(放熱ロス)を抑えます。熱を使い切れる範囲で発電するという考え方が、CHPの経済性を左右する勘所です。"},{"name":"デマンド制御と運転計画最適化","role":"ピークと熱電比に合わせた賢い運転","detail":"宿泊予約や季節・曜日の需要予測に基づき、コージェネの起動・停止や出力を計画的に制御します。デマンドが立ち上がる時間帯にはCHPを優先稼働させて購入電力のピークを抑え、契約電力(基本料金)の上昇を防ぎます。熱需要が少ない時間帯は無理に発電せず、熱電比に合わせて運転することで、排熱を持て余す非効率な稼働を避けます。"},{"name":"BCP対応と一次エネルギー総コスト管理","role":"停電時自立と総コストでの評価軸","detail":"停電時にもコージェネを自立運転させ、最低限の照明・給湯・空調を維持できる構成とし、滞在客の安全とサービス継続に備えます。あわせて電気・ガス・重油の使用量とコストを一元的に見える化し、削減効果を電気代単独でなく一次エネルギー総コストで評価する管理体制を構築します。ガス価格の変動も織り込み、定期的に損益分岐を点検します。"}];
const caseScenarios = [{"title":"ケースA: 大浴場・温浴併設の通年稼働リゾート","before":"給湯熱の大半をボイラー燃料で確保し、購入電力と燃料費が高水準だった代表シナリオです。","after":"排熱を温浴・給湯へ集中的に活用し、購入電力量とボイラー燃料を同時に圧縮した状態を想定します。","result":"一次エネルギー総コストでおおむね10〜20%程度の削減が見込まれる代表レンジで、月数十万円規模の改善が目安です。実数値は契約条件・稼働実態により異なります。"},{"title":"ケースB: 宴会場中心でピーク偏在の中規模ホテル","before":"宴会需要に合わせて空調と厨房が集中稼働し、デマンドが跳ね上がっていた代表シナリオです。","after":"宴会時間帯にCHPを優先稼働させ、購入電力のピークと契約電力を抑えた運転を想定します。","result":"基本料金を含む電力コストで数%〜十数%程度の抑制が見込める代表レンジで、効果はデマンド低減量に比例します。実数値は契約条件・需要パターンにより異なります。"},{"title":"ケースC: 客室稼働が通年安定した大型リゾート","before":"電力・熱とも年間を通じて高負荷が続き、エネルギー総コストが経営の重荷だった代表シナリオです。","after":"熱電同時性の高さを活かし、CHPをベース負荷として高稼働させ、排熱を給湯・暖房で使い切る構成を想定します。","result":"稼働率が高いほど投資回収が進みやすく、一次エネルギー総コストで15〜25%程度の削減も視野に入る代表レンジが目安です。実数値は稼働率・燃料価格により異なります。"},{"title":"ケースD: 繁閑差の大きい季節変動型リゾート","before":"繁忙期は高負荷、閑散期は低稼働で、年間平均では設備が遊びやすい代表シナリオです。","after":"繁忙期はCHPをフル活用し、閑散期は出力を絞るか停止して、熱を持て余さない柔軟運転を想定します。","result":"繁忙期偏重のため年間ではおおむね数%〜10%台前半程度の削減が見込まれる代表レンジで、稼働計画の精度が成否を左右します。実数値は季節変動・運転計画により異なります。"}];
const dataNotes = [{"label":"数値の位置づけ","detail":"本記事のBefore/Afterおよび削減率は、特定企業の実績ではなく、業界統計と公開事例から再構成した架空の代表シナリオです。精密な金額は断定せず、削減率(%)レンジや「月数十万円規模」といった幅で示しています。実際の効果は施設規模・稼働率・契約条件・燃料価格により大きく変動するため、必ず自社データに基づく試算で確認してください。"},{"label":"出典の考え方","detail":"数値の前提は、経産省・資源エネルギー庁の公開資料、SII(環境共創イニシアチブ)の補助事業採択事例集、コージェネ関連の業界統計から再構成しています(2025年10月時点・代表シナリオ)。これらは一般的な傾向を示すものであり、個別事例への当てはめには現地調査が前提です。制度名や規格名はRE100・ZEB・SII・GX・BEMS等の正式名称を用いています。"},{"label":"一次エネルギー総コスト基準","detail":"削減率は原則として電気代単独ではなく、電気・ガス・重油を合算した一次エネルギー総コストを基準に示しています。コージェネは購入電力を減らす一方でガス使用を増やすため、電気代だけを見ると削減効果を過大に見せてしまいます。本記事のレンジは燃料費・基本料金・保守費を含めた総コスト視点で再構成しており、評価軸を統一している点に留意してください。"},{"label":"変動要因の明示","detail":"削減レンジは稼働率・熱電比・デマンド低減量・ガス価格という主要変動要因に依存します。特にガス価格は燃料費調整等で変動し、コージェネの経済性を直接左右します。本記事の数値は一定の前提を置いた代表シナリオの目安であり、価格高騰局面では効果が縮小し得ます。導入判断時は複数の価格前提で感度分析を行うことを推奨します。"}];
const process = [{"label":"データ収集(見える化)","detail":"まず過去一〜二年分の電気・ガス・重油の請求データと、デマンド記録、宿泊稼働率、季節・曜日別の需要を収集します。可能であれば用途別(給湯・空調・動力・照明)に消費を切り分け、熱と電気の需要カーブを時間帯ごとに把握します。この見える化がコージェネの適正容量と排熱活用範囲を決める基礎となり、過大設備や遊休を防ぐ出発点になります。"},{"label":"分析・容量設計","detail":"収集データから熱電比と同時負荷を分析し、排熱を使い切れる範囲で発電容量を設計します。熱需要に対して発電容量が大きすぎると排熱を捨てることになり効率が落ちるため、熱主導でサイジングするのが定石です。あわせてデマンド低減効果、ガス使用増、保守費を織り込み、一次エネルギー総コストでの損益と概算回収年数を試算します。"},{"label":"相見積・補助制度確認","detail":"複数のメーカー・エンジニアリング会社から相見積を取得し、機器仕様・効率・保守体制・自立運転対応を比較します。中立的に評価するため、特定の製品やベンダーを前提とせず仕様ベースで揃えます。あわせてSIIの補助事業やGX関連の支援制度など、活用可能な公的支援の要件と公募時期を確認し、投資計画に反映します。"},{"label":"意思決定と効果検証","detail":"試算結果と複数の燃料価格前提の感度分析をもとに、経営層が投資可否を判断します。導入後は運転データを継続的に取得し、計画値との差異(発電量・排熱利用率・デマンド低減・総コスト)を定期的に検証します。閑散期の運転調整や貯湯運用の改善を重ね、当初想定との乖離を是正しながら効果を最大化していくPDCAが重要です。"}];
const viewpoints = [{"label":"電気代単独で判断しない","detail":"コージェネは購入電力を減らす代わりにガス使用を増やすため、電気代の削減額だけを見ると効果を過大評価しがちです。判断は必ず電気・ガス・重油を合算した一次エネルギー総コストで行い、燃料費・基本料金・保守費まで含めた損益で評価します。電気代だけが下がっても総コストが改善しなければ意味がない、という視点を最初に据えることが重要です。"},{"label":"稼働率と熱電比を見る","detail":"コージェネの経済性は、設備をどれだけ高稼働で回し、排熱をどれだけ使い切れるかに大きく依存します。客室稼働率が高く熱需要が安定した通年型は有利で、繁閑差が大きい季節変動型は遊休が生じやすい傾向です。自社の稼働率と熱電比を踏まえ、排熱を使い切れる範囲で発電するという原則に照らして導入可否を見極めます。"},{"label":"デマンド低減効果の確認","detail":"高圧契約では契約電力(デマンド)が基本料金を左右します。コージェネをピーク時間帯に稼働させて最大需要を抑えられれば、従量料金だけでなく基本料金の抑制にもつながります。ただし契約電力の決まり方は契約により異なるため、デマンド低減が実際にどれだけ料金に反映されるかは、自社の契約条件に基づいて確認する必要があります。"},{"label":"ガス価格変動への耐性","detail":"コージェネはガス価格の影響を直接受けるため、燃料費調整や価格高騰局面では経済性が縮小し得ます。導入判断では単一の価格前提に頼らず、複数の価格シナリオで感度分析を行い、価格が上振れしても致命的にならないかを確認します。電力とガスの価格差(スパークスプレッド)の動向を継続的に注視する姿勢が、安定運用の鍵となります。"},{"label":"BCP価値の位置づけ","detail":"停電時の自立運転は、コスト削減とは別軸の事業継続価値をもたらします。観光地のリゾートは災害時に滞在客が孤立しやすく、最低限の電力と温水を自前で確保できることは安全面・信頼面で大きな意味を持ちます。投資判断では金銭的な回収年数だけでなく、こうしたBCP価値や顧客への安心提供という定性的な便益も含めて総合的に評価します。"}];
const cautions = [{"label":"「電気代だけ下がる」誤解","detail":"コージェネを入れれば電気代が大きく下がる、という理解は一面的です。購入電力は確かに減りますが、その分ガス使用は増えるため、電気の請求書だけを見て効果を判断すると総コストの実態を見誤ります。よくある誤解として「電気代が半減した」という話だけが独り歩きしがちですが、評価は一次エネルギー総コストで行うことが正しい姿勢です。"},{"label":"過大容量のリスク","detail":"発電容量を大きくすれば削減できると考えがちですが、熱需要を超える発電は排熱を捨てることになり、かえって効率と経済性を損ないます。リゾートホテルでも閑散期や昼間の谷では熱が余りやすく、容量は熱主導で控えめに設計するのが定石です。繁忙期のピークに合わせて過大設計すると、年間平均では設備が遊んでしまう点に注意が必要です。"},{"label":"保守・運転体制の負担","detail":"コージェネは導入して終わりではなく、定期点検・オーバーホール・運転監視といった保守と運用の体制が必要です。保守費は総コストに含めて損益を評価すべき項目であり、これを見落とすと回収計画が崩れます。自社で運転計画を最適化できる人材や、外部の保守契約の費用も含めて、継続的な運用負担を現実的に見積もることが欠かせません。"},{"label":"稼働変動への過信","detail":"稼働率が高い前提で投資回収を見込んでも、観光需要の変動や繁閑差で実際の稼働が下振れすると、回収が遅れます。代表シナリオの削減レンジはあくまで一定の前提下の目安であり、自社の稼働見通しを楽観しすぎないことが重要です。閑散期の運転調整やフレキシブルな出力制御で、低稼働時の非効率を抑える運用設計を前提に置きます。"},{"label":"補助制度の前提確認","detail":"SIIの補助事業やGX関連の支援は、年度や公募により要件・予算・採択枠が変わります。補助前提で投資計画を組む場合、採択されなかったときの損益も確認しておく必要があります。制度は正式名称・最新の公募要領で要件を確認し、本記事の記述は2025年10月時点の一般的な傾向であって、個別の採否を保証するものではない点に留意してください。"}];
const checklist = ["電気・ガス・重油の請求データを一〜二年分そろえる","用途別(給湯・空調・動力・照明)に消費を切り分ける","デマンド記録と契約電力の決まり方を確認する","宿泊稼働率と季節・曜日別の需要を整理する","熱と電気の需要カーブの同時性を把握する","排熱を使い切れる範囲で発電容量を設計する","一次エネルギー総コストで損益を試算する","複数の燃料価格前提で感度分析を行う","保守費・運転体制の負担を見積もりに含める","停電時の自立運転とBCP価値を評価する","SII等の補助制度の最新要件を確認する","導入後の効果検証とPDCAの体制を決める"];
const simulatorCtaBullets = ["電気料金の上昇・高騰リスクを自社の前提で可視化できます","コージェネ検討の前提となる現状コストの目安をつかめます","一次エネルギー総コストでの見直し余地を考える材料になります","結果はあくまで代表シナリオの目安で、実数値は契約条件により異なります"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事の事例は実在企業ではなく、業界統計や公開事例から再構成した架空企業の代表シナリオです。Before/Afterや削減率は精密な実額ではなく、削減率(%)レンジや「月数十万円規模」といった幅で示した目安です。実際の効果は施設規模・稼働率・契約条件・燃料価格により大きく変わります。出典は経産省・資源エネルギー庁・SII採択事例集・業界統計から再構成(2025年10月時点・代表シナリオ)であり、自社での試算による確認を前提としてください。"},{"question":"この記事は特定の電力会社やメーカーを推奨しているのですか。","answer":"いいえ。当社団法人は中立・非営利の立場であり、特定の電力会社・契約形態・機器メーカーを推奨するものではありません。本記事は判断材料となる観点や考え方を整理することを目的としており、実在企業の優劣評価も行いません。コージェネ導入を検討する際は、複数のメーカーやエンジニアリング会社から仕様ベースで相見積を取り、自社の条件に照らして中立的に比較検討することをおすすめします。"},{"question":"なぜ電気代だけでなく一次エネルギー総コストで評価するのですか。","answer":"コージェネはガスを燃料に発電し、その排熱を給湯や暖房に使う仕組みのため、系統からの購入電力は減りますが、ガスの使用量は増えます。電気の請求書だけを見ると削減効果を過大に評価してしまい、判断を誤りかねません。そこで電気・ガス・重油を合算し、基本料金や保守費も含めた一次エネルギー総コストで損益を評価します。電気代が下がっても総コストが改善しなければ意味がない、という視点が重要です。"},{"question":"リゾートホテルがコージェネに向いているのはなぜですか。","answer":"リゾートホテルは大浴場・客室給湯・厨房といった大きな熱需要を持ち、空調と合わせて電気と熱を同じ時間帯に多く使う傾向があります。この熱電同時性が高いほど、コージェネの発電と同時に出る排熱を捨てずに使い切れるため、総合効率が高まります。排熱の受け皿が豊富で、温浴や給湯に有効活用しやすい点が、リゾートホテルがコージェネの強みを活かしやすい理由です。ただし稼働率や繁閑差により効果は変わります。"},{"question":"稼働率が低い季節変動型のホテルでも効果はありますか。","answer":"繁閑差が大きい季節変動型のホテルでは、閑散期に設備が遊びやすく、年間平均では効果が小さくなる傾向があります。代表シナリオでも、こうした施設の削減レンジは通年高稼働型より控えめになります。対策としては、繁忙期にコージェネを集中活用し、閑散期は出力を絞るか停止する柔軟運転で、熱を持て余さない運用設計が重要です。導入可否は自社の稼働見通しを楽観しすぎず、現実的な前提で試算して判断してください。"},{"question":"ガス価格が上がるとコージェネの経済性はどうなりますか。","answer":"コージェネはガスを燃料とするため、ガス価格や燃料費調整の上昇は経済性を直接縮小させます。電力とガスの価格差(スパークスプレッド)が小さくなると、自家発電の優位性が薄れる場合があります。したがって導入判断では単一の価格前提に頼らず、複数の価格シナリオで感度分析を行い、価格が上振れしても致命的にならないかを確認することが大切です。価格動向は継続的に注視し、定期的に損益分岐を点検する運用を推奨します。"},{"question":"コージェネは停電時のBCP対策になりますか。","answer":"自立運転に対応した構成にすれば、停電時にも最低限の照明・給湯・空調を維持でき、事業継続(BCP)に寄与します。観光地のリゾートは災害時に交通が寸断され滞在客が孤立しやすいため、自前で電力と温水を確保できることは安全面・信頼面で大きな価値があります。ただし自立運転には対応機器や設計が必要で、維持できる範囲も構成により異なります。投資判断ではコスト削減だけでなく、こうしたBCP価値も含めて総合評価します。"},{"question":"導入容量はどのように決めればよいですか。","answer":"コージェネの発電容量は、電力需要ではなく熱需要を主導に設計するのが定石です。熱需要を超える発電は排熱を捨てることになり、効率と経済性を損ないます。まず用途別の熱と電気の需要カーブを把握し、排熱を使い切れる範囲で容量を控えめに決めます。繁忙期のピークに合わせて過大設計すると年間平均で設備が遊ぶため、貯湯で需要差をならしつつ、既存ボイラーでピークを補完するベース・ピーク分担の考え方が有効です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/hotel-electricity-cost-review","title":"ホテルの電気代見直し","description":"宿泊施設の電力構造。"},{"href":"/business-hotel-electricity-cost-review","title":"ビジネスホテルの電気代見直し","description":"客室・共用部の削減観点。"},{"href":"/hot-spring-facility-electricity-cost-review","title":"温浴施設の電気代見直し","description":"給湯・加温の熱需要。"},{"href":"/subsidy-hotel-leisure-strategy","title":"ホテル・レジャーの補助金活用戦略","description":"省エネ投資の補助金活用。"},{"href":"/subsidy-heat-pump-introduction","title":"業務用ヒートポンプ導入の補助金","description":"給湯熱源の高効率化。"},{"href":"/bcp-private-power-generation","title":"自家発電によるBCP","description":"停電時の自立運転。"},{"href":"/demand-control-guide","title":"デマンド制御の基礎","description":"契約電力・基本料金を抑える。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調更新の削減効果","description":"照明空調の省エネ効果。"},{"href":"/case-study-hotel-market-linked-switch","title":"ホテル：市場連動から固定への切替事例","description":"既存のホテル事例。"},{"href":"/case-study-restaurant-chain-demand-control","title":"飲食チェーン×デマンド管理の事例","description":"サービス業の比較ケース。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyHotelResortCogenerationPage() {
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
