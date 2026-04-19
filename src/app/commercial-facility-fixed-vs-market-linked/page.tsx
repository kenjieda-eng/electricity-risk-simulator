import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["plan-types"];

const pageTitle =
  "商業施設は固定と市場連動のどちらが向くか｜営業時間と設備負荷から考える";
const pageDescription =
  "ショッピングモール・百貨店・商業ビルの電力契約を固定プランと市場連動プランで比較します。昼間のピーク時間帯との重なり、テナント電力の扱い、季節変動、顧客体験への影響など、商業施設特有の判断軸を解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "商業施設 電力契約 固定 市場連動",
    "ショッピングモール 電気料金",
    "商業ビル 電力 プラン選択",
    "テナント 電気代 管理",
    "商業施設 電気代 削減",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/commercial-facility-fixed-vs-market-linked",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/commercial-facility-fixed-vs-market-linked",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const facilityTypes = [
  {
    type: "大型ショッピングモール",
    operatingHours: "10時〜21時（共用部は早朝〜深夜）",
    loadCharacteristics: "空調・照明・エスカレーターなど共用設備のベースロードが大きい。夏季・冬季の空調需要が特に大きい。",
    peakOverlap: "昼間のJEPX高騰時間帯と営業時間が完全に重なる。夏季の日中ピークがJEPXの最高騰時間帯と一致しやすい。",
    tenantImpact: "テナントへの転貸電力の単価設定が必要。市場連動プランの場合、テナントへの転貸価格を変動させるか施設側が差額を負担するかの判断が必要。",
    recommendation: "固定プランを優先",
  },
  {
    type: "百貨店・専門店ビル",
    operatingHours: "10時〜20時前後",
    loadCharacteristics: "照明・ディスプレイ照明の比率が高い。季節商品展示期や催事期に使用量が増加。",
    peakOverlap: "昼間の営業時間帯がJEPXの高価格帯と重なる。特に夏季・冬季の催事期は電力需要が集中。",
    tenantImpact: "共益費に電気代が含まれるケースが多く、変動を転嫁しにくい構造。",
    recommendation: "固定プランを基本",
  },
  {
    type: "オフィスビル（商業ビル）",
    operatingHours: "7時〜22時（テナントにより異なる）",
    loadCharacteristics: "オフィスの空調・照明が主体。夜間は大幅に電力が下がる。平日と休日の差が大きい。",
    peakOverlap: "平日昼間がJEPXの高価格帯と重なる。ただし空調をある程度時間帯制御できる場合がある。",
    tenantImpact: "テナントへの請求方法によって異なるが、変動リスクをテナントに転嫁するか施設が負担するか要確認。",
    recommendation: "条件次第で要検討",
  },
  {
    type: "アウトレットモール・郊外型SC",
    operatingHours: "10時〜20時前後（駐車場照明は長時間）",
    loadCharacteristics: "建物が分散配置で共用空調の規模が比較的小さい場合がある。ただし駐車場・外構の照明が夜間まで稼働。",
    peakOverlap: "昼間営業が基本で、ピーク時間帯との重なりはある。ただし、屋外型の場合は空調負荷が比較的小さい。",
    tenantImpact: "テナントが個別に電力契約する場合、施設側の影響範囲が限定的になることもある。",
    recommendation: "個別条件に基づいて判断",
  },
];

const checkpoints = [
  {
    point: "テナント電力の転貸・一括購入の仕組みを確認する",
    detail:
      "施設がテナントに電力を転貸している場合、施設が電力会社と契約して購入し、テナントに転売する形になります。この場合、施設側が市場価格変動のリスクを引き受けることになります。テナントとの電気代の精算方法（面積按分・使用量実績・固定費用）を確認し、変動分をどう処理するかを明確にしておく必要があります。",
  },
  {
    point: "夏季・冬季の電力需要とJEPX価格の重なりを把握する",
    detail:
      "商業施設は夏季と冬季に電力使用量が増加します。JEPXのスポット価格は、夏季の昼間（12〜16時）と冬季の朝夕（7〜9時、17〜21時）に高騰しやすい傾向があります。自社の電力使用のピークがこれらの時間帯と重なる場合、市場連動プランでの高騰リスクが集中します。過去の月間使用量データと時間帯別データを照合することが重要です。",
  },
  {
    point: "顧客体験への影響を考慮する",
    detail:
      "商業施設では、節電・省エネ対応が顧客の快適性（照明の明るさ、空調の温度設定）に影響することがあります。市場連動プランを選んで高騰時に節電対応をする場合、来客への影響を考慮する必要があります。「節電のため照明を落とす」「空調設定を変更する」という対応は、顧客体験の低下につながる可能性があるため、節電による削減効果と来店への影響を天秤にかける必要があります。",
  },
  {
    point: "施設全体の電力使用量の透明性",
    detail:
      "大型施設では、テナントごとの電力使用量の把握が重要です。スマートメーターやBEMS（ビルエネルギー管理システム）が導入されている場合は、時間帯別・テナント別のデータが取得できます。データが整備されていると、どの時間帯にどれだけの電力を使っているかが把握でき、市場連動プランの影響シミュレーションができます。",
  },
];

export default function CommercialFacilityFixedVsMarketLinkedPage() {
  return (
    <>
      <ArticleJsonLd
        headline="商業施設は固定と市場連動のどちらが向くか｜営業時間と設備負荷から考える"
        description="ショッピングモール・百貨店・商業ビルの電力契約を固定プランと市場連動プランで比較します。昼間のピーク時間帯との重なり、テナント電力の扱い、季節変動、顧客体験への影響など、商業施設特有の判断軸を解説します。"
        url="https://simulator.eic-jp.org/commercial-facility-fixed-vs-market-linked"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "商業施設は固定と市場連動のどちらが向くか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">商業施設の選び方</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          商業施設は固定と市場連動のどちらが向くか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          ショッピングモール・百貨店・商業ビルなどの商業施設は、昼間の営業時間帯に電力使用量が集中するという特性があります。この特性は、JEPXスポット価格が高騰しやすい時間帯（昼間・ピーク時）と重なるため、市場連動プランを選ぶ際のリスク判断として重要な要素になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          また、テナントが入居する施設では、電力コストの転嫁方法や顧客体験への影響も考慮が必要です。このページでは、商業施設特有の判断軸を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>施設タイプ別（ショッピングモール・百貨店・オフィスビルなど）の判断の考え方</li>
            <li>昼間のJEPX高騰時間帯と営業時間の重なりがリスクに与える影響</li>
            <li>テナント電力の転貸・一括購入で生じる問題</li>
            <li>顧客体験と節電対応のバランス</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            商業施設の電力使用の特徴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            商業施設の電力使用パターンは、製造業の工場や官公庁施設と異なる独自の特徴があります。主な特徴を整理します。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">営業時間帯への集中</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                空調・照明・エスカレーター・エレベーターなど、主要な設備が営業時間中にフル稼働します。営業時間外は大幅に電力が下がりますが、共用設備の維持には一定の待機電力が必要です。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">季節による需要の大きな変動</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                夏季（6〜9月）と冬季（12〜2月）に空調需要が大きく増加します。特に夏季の猛暑日には、来客数の増加と空調負荷の増大が重なり、電力使用量が年間最大になることがあります。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">テナントとの電力関係</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                施設がテナントに電力を転貸する場合、施設が電力会社との契約主体になります。テナントへの請求方法（面積按分・実量計測）によって、コスト変動をどこが引き受けるかが変わります。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">顧客満足への直結</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                電力コストを抑制しようとして照明を暗くしたり空調温度を変更すると、来客の快適性が低下する可能性があります。節電対応は顧客体験への影響を常に考慮する必要があります。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            施設タイプ別の判断の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            商業施設のタイプによって、電力使用の特性や判断のポイントが異なります。
          </p>
          <div className="mt-4 space-y-4">
            {facilityTypes.map((facility) => (
              <div key={facility.type} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{facility.type}</h3>
                <p className="mt-1 text-xs text-slate-500">営業時間の目安：{facility.operatingHours}</p>
                <div className="mt-3 space-y-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-700">負荷特性</p>
                    <p className="mt-1 text-sm leading-7 text-slate-700">{facility.loadCharacteristics}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">JEPXピーク時間帯との重なり</p>
                    <p className="mt-1 text-sm leading-7 text-slate-700">{facility.peakOverlap}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">テナントへの影響</p>
                    <p className="mt-1 text-sm leading-7 text-slate-700">{facility.tenantImpact}</p>
                  </div>
                </div>
                <p className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm font-medium text-sky-800">
                  方向性の目安：{facility.recommendation}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 上記はあくまで一般的な傾向の整理です。個別の施設規模・使用量・テナント構成・契約条件によって最適な選択は異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            判断前に確認すべき4つのポイント
          </h2>
          <div className="mt-4 space-y-4">
            {checkpoints.map((item, index) => (
              <div key={item.point} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-base font-semibold text-slate-900">
                  {index + 1}. {item.point}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            JEPX価格の時間帯別パターンと商業施設の重なり
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXのスポット価格は、季節・天候・需給状況によって大きく変動しますが、過去データから傾向をつかむことができます。一般的に、以下のような時間帯に価格が高くなる傾向があります。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">夏季（7〜9月）の昼間：</span>
              冷房需要が最大になる12〜16時を中心に価格が上昇しやすい。この時間帯は商業施設の最繁忙時間帯と重なる。
            </li>
            <li>
              <span className="font-semibold text-slate-900">冬季（12〜2月）の朝夕：</span>
              暖房需要が高まる7〜9時・17〜21時に価格が上昇しやすい。夕方以降の価格上昇は営業終了近くの時間帯と重なることがある。
            </li>
            <li>
              <span className="font-semibold text-slate-900">需給逼迫時：</span>
              電力供給力が低下した際（発電所のトラブル・猛暑・厳冬）に急激な価格高騰が発生することがある（2022年3月の東日本での需給逼迫など）。
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            商業施設が市場連動プランを検討する場合は、自社の時間帯別使用量データとJEPXの過去価格データを組み合わせて、高騰時のコストシミュレーションを行うことが重要です。JEPXの価格動向については{" "}
            <Link
              href="/jepx-price-trend-and-corporate-impact"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              JEPXスポット価格の推移
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まとめ：商業施設の判断ポイント
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>昼間の営業時間帯にJEPXの高騰時間帯が重なる施設では、市場連動のリスクが高い</li>
            <li>テナントへの電力転貸がある施設では、変動リスクをどちらが負担するか事前に整理が必要</li>
            <li>夏季・冬季の使用量増加とJEPX価格高騰が重なるリスクを特に考慮すべき</li>
            <li>顧客体験への影響を考えると、節電による調整の余地が製造業に比べて限られる</li>
            <li>大型商業施設はBEMSなどで時間帯別データを取得し、シミュレーションしたうえで判断することを推奨</li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="commercial-facility-fixed-vs-market-linked" terms={["市場連動プラン", "固定プラン", "JEPX", "市場価格調整額", "デマンド値", "契約電力"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "安定性重視の判断軸と業種別の相性。",
            },
            {
              href: "/factory-fixed-vs-market-linked",
              title: "工場は固定と市場連動のどちらが向くか",
              description: "製造業の稼働パターンと電力プランの考え方。",
            },
            {
              href: "/municipality-fixed-vs-market-linked",
              title: "自治体施設は固定と市場連動のどちらが向くか",
              description: "公共施設の年度予算と説明責任から考える。",
            },
            {
              href: "/multi-site-plan-selection",
              title: "多拠点企業はどちらを選ぶべきか",
              description: "複数施設を持つ場合のポートフォリオ管理。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "両プランの料金構造とリスクの差。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "商業施設の電力契約見直しで確認すべき項目。",
            },
          ]}
        />

        <ContentCta
          heading="商業施設の電力コストをシミュレーターで試算する"
          description="施設の使用量・契約電力を入力して、固定プランと市場連動プランの年間コスト差を確認できます。夏季・冬季の高騰シナリオでの影響も把握できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
