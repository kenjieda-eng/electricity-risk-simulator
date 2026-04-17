import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "店舗チェーンが料金高騰に直面したときのリスク｜多店舗への累積影響";
const pageDescription =
  "スーパー・飲食・小売などの店舗チェーンが電気料金高騰に直面した場合のリスクを解説。多店舗への累積影響、低利益率の構造的脆弱性、チェーンとしての対策方針を説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "店舗チェーン 電気料金 高騰",
    "スーパー 飲食 電気代",
    "多店舗 電力コスト 累積",
    "小売チェーン 電気料金 リスク",
    "店舗 電力契約 見直し",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/retail-chain-price-surge-risk",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/retail-chain-price-surge-risk",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
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

const chainRisks = [
  {
    risk: "累積コスト増が大きい",
    detail:
      "1店舗あたりの増加が月数万円でも、100店舗では月数百万円になります。本社で全体像を把握しなければ、気づかないうちに大きなコスト増が発生し続けます。",
  },
  {
    risk: "低利益率での影響が直撃する",
    detail:
      "スーパーや飲食チェーンは営業利益率が1〜5%程度と低く、電気料金の上昇が直接的に利益を圧迫します。1店舗の利益が吹き飛ぶ規模のコスト増が全店舗で発生することもあります。",
  },
  {
    risk: "価格転嫁が難しい",
    detail:
      "消費者向けの価格を上げると集客が落ちるため、電気料金上昇分を売価に転嫁するのは困難です。競合他社の価格動向を見ながら慎重な判断が必要です。",
  },
  {
    risk: "店舗ごとの契約がバラバラになりやすい",
    detail:
      "出店時期・地域ごとに電力会社や契約が異なるケースが多く、一括管理されていないと高騰時の全社影響の把握が困難になります。",
  },
];

export default function RetailChainPriceSurgeRiskPage() {
  return (
    <>
      <ArticleJsonLd
        headline="店舗チェーンが料金高騰に直面したときのリスク｜多店舗への累積影響"
        description="スーパー・飲食・小売などの店舗チェーンが電気料金高騰に直面した場合のリスクを解説。多店舗への累積影響、低利益率の構造的脆弱性、チェーンとしての対策方針を説明します。"
        url="https://simulator.eic-jp.org/retail-chain-price-surge-risk"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "店舗チェーンが料金高騰に直面したときのリスク" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">店舗チェーンのリスク</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          店舗チェーンが料金高騰に直面したときのリスク
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          スーパー、飲食チェーン、小売チェーンなどの多店舗展開企業は、電気料金高騰シナリオで重大なリスクに晒されます。1店舗あたりの影響は小さく見えても、数十〜数百店舗に積み上がると、全社の年間営業利益を大きく削り取る規模になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          さらに店舗チェーン業態は、一般的に利益率が低く、消費者向け価格への転嫁が難しいという構造的な脆弱性を持っています。このページでは、店舗チェーンに特有のリスク構造と、チェーンとして実施できる対策を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>多店舗への累積影響の規模感</li>
            <li>低利益率チェーンの構造的な脆弱性</li>
            <li>チェーンとしての電力管理上の課題</li>
            <li>本社主導でできる対策の方向性</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            多店舗への累積影響：1店舗×店舗数＝全社コスト
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金高騰の影響は、保有する全店舗に同時に適用されます。1店舗あたりの月次コスト増加に店舗数を掛けると、全社への影響が算出できます。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">累積影響の試算例</p>
            <div className="mt-2 space-y-2 text-sm leading-7 text-slate-700">
              <div>
                <p className="font-medium">スーパー（100店舗、月間使用量 50,000kWh/店）</p>
                <p>電気料金 +3円/kWh → 1店舗 +15万円/月 × 100店舗 ＝ 月額 +1,500万円、年間 +1.8億円</p>
              </div>
              <div>
                <p className="font-medium">飲食チェーン（300店舗、月間使用量 5,000kWh/店）</p>
                <p>電気料金 +3円/kWh → 1店舗 +1.5万円/月 × 300店舗 ＝ 月額 +450万円、年間 +5,400万円</p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年商100億円のスーパーで営業利益が2億円（利益率2%）だとすると、上記のシナリオでは年間コスト増が利益の大部分を消費することになります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            店舗チェーンが抱える4つのリスク
          </h2>
          <div className="mt-3 space-y-3">
            {chainRisks.map((item) => (
              <div
                key={item.risk}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{item.risk}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            チェーンとして電力管理が難しい背景
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            店舗チェーンの電力契約は、以下の理由から管理が複雑になりやすい構造を持っています。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">出店年度・地域ごとに契約がバラバラ：</span>
              各店舗が異なる電力会社・プランと契約しており、全社一括での管理が行われていないことが多い。
            </li>
            <li>
              <span className="font-semibold text-slate-900">低圧と高圧の混在：</span>
              小規模店舗は低圧、大型店舗は高圧と、電圧区分が異なるため一括管理が複雑になる。
            </li>
            <li>
              <span className="font-semibold text-slate-900">店長・店舗担当が電力管理を把握していない：</span>
              各店舗では電気料金を「固定費」として受け入れており、契約内容の見直しが行われにくい。
            </li>
            <li>
              <span className="font-semibold text-slate-900">本社でのコスト把握が月次請求後になりがち：</span>
              高騰が起きてから全社への影響を把握するため、対応が後手になりやすい。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            本社主導でできる対策の方向性
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">全店舗の電力契約情報を一元化する：</span>
              電力会社、プラン、使用量、契約更新時期を本社で一括管理するリストを作成します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">高騰シナリオでの全社コストを事前試算する：</span>
              電気料金が「+10%」「+20%」「+30%」となった場合の全社年間コスト増を試算します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">入札・一括切替で交渉力を高める：</span>
              複数店舗をまとめて入札することで、単店舗の交渉より有利な条件を引き出せる可能性があります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">標準的な省エネ設備を展開する：</span>
              LED照明、高効率冷蔵・冷凍ショーケース、省エネ空調を新規出店・改装の標準仕様にします。
            </li>
            <li>
              <span className="font-semibold text-slate-900">更新時期が来た店舗から順次<Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プラン</Link>に切り替える：</span>
              一度に全店舗を動かすのは困難なため、更新時期を機に順次見直しを進めます。
            </li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="retail-chain-price-surge-risk" terms={["燃料費調整額", "市場価格調整額", "JEPX", "再エネ賦課金", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/multi-site-company-price-surge-risk",
              title: "多拠点企業が電気料金高騰に直面したときのリスク",
              description: "店舗チェーン以外の多拠点企業共通のリスク管理。",
            },
            {
              href: "/low-margin-company-price-surge-risk",
              title: "利益率の低い企業が電気料金高騰に直面したときのリスク",
              description: "低利益率チェーンの収益への影響の仕組み。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "チェーンが固定プランを選ぶべき理由の整理。",
            },
            {
              href: "/lng-price-surge-electricity-cost-impact",
              title: "LNG高騰で法人の電気料金はどう上がるか",
              description: "全店舗に波及する電気料金高騰シナリオ。",
            },
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電気料金見直し",
              description: "スーパー業態での電気料金見直しの具体的な着眼点。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "チェーン展開企業向けの契約確認項目。",
            },
          ]}
        />

        <ContentCta
          heading="店舗チェーン全体の高騰影響を試算する"
          description="代表的な店舗の使用量と店舗数をもとに、電気料金高騰シナリオでの全社累積影響をシミュレーターで確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
