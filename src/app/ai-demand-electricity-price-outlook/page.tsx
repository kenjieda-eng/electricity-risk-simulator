import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "AI需要急増で電気料金はどうなる？2026年以降の見通し";
const pageDescription =
  "生成AI・LLMによるデータセンター電力需要の急拡大が、2026年以降の法人電気料金に与える影響を整理。IEA・経産省の試算、電源開発の追随シナリオ、託送料金・JEPX価格への波及、法人契約者が備えるべき3つのリスクを解説します。";
const pageUrl = "https://simulator.eic-jp.org/ai-demand-electricity-price-outlook";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["datacenter-ai-demand"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI需要 電気料金",
    "生成AI 電力需要",
    "2026 電気料金 見通し",
    "データセンター 電力 ひっ迫",
    "LLM 電力消費",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/datacenter-ai-demand", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/datacenter-ai-demand"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        faq={FAQ_ITEMS}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "データセンター・AI需要", url: "https://simulator.eic-jp.org/articles/datacenter-ai-demand" },
          { name: "AI需要急増で電気料金はどうなる？" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/datacenter-ai-demand" className="underline-offset-2 hover:underline">データセンター・AI需要</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">AI需要急増で電気料金はどうなる？</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">AI需要急増で電気料金はどうなる？2026年以降の見通し</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>結論：電源開発がAI需要の立ち上がりに追いつかない「需給ひっ迫シナリオ」では、2028〜2030年にかけて法人電気料金が構造的に2〜5円/kWh押し上げられる可能性があります。</strong>
            IEA・経産省の最新試算をもとに、2026年以降のシナリオと法人契約者が備えるべきリスクを整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">生成AIが押し上げる電力需要の規模感</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              IEAの2025年末レポート「Electricity 2025」では、世界のデータセンター（以下DC）電力消費が2024年の約415TWhから<strong>2030年には945TWhへ倍増</strong>する見通しが示されました。このうち半分以上が生成AI・LLM向けの学習・推論需要に起因します。日本でも経産省の2025年度電力需給見通しで、DC需要が2030年に全国電力需要の3〜5%を占めるとの試算が出ています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特に印西・千歳・京阪奈といった既存DC集積地では、1地点あたり100MW超のハイパースケールDC計画が同時並行で進行中です。送電網（基幹系統・特別高圧配電網）の空き容量が逼迫し、接続検討回答に2〜3年、変電所増強を伴う場合は5年以上かかるケースが2025年から顕在化しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026〜2030年の電気料金シナリオ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年以降の法人電気料金を考えるとき、<strong>電源開発（原発再稼働・LNG火力新設・再エネ拡大）がAI需要の立ち上がりに追いつくか</strong>が最大の分岐点です。経産省の長期エネルギー需給見通し（2025年改定）では、次の2シナリオが示されています。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><strong>追随シナリオ：</strong>原発再稼働・GX電源（アンモニア混焼・水素・地熱等）・洋上風力が計画どおり立ち上がり、2028〜2030年の需給バランスが維持されるケース。法人料金は現水準（22〜26円/kWh前後）で横ばい〜微増。</li>
              <li><strong>需給ひっ迫シナリオ：</strong>原発再稼働遅延・LNG調達難・再エネ系統連系遅延が重なり、JEPXスポット価格が高値維持となるケース。法人料金は2〜5円/kWh構造的に上昇し、特に東京・関西エリアで顕在化。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2025年末〜2026年第1四半期のJEPXスポット平均は関東エリアで約14〜18円/kWh台で推移し、2022年度ピークよりは落ち着いているものの、2019〜2020年の平均水準（8〜10円）を明確に上回る「新たな定常レベル」に移行しつつあります。この水準を起点にAI需要が積み上がるため、下振れよりも上振れリスクが意識されます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">託送料金への波及</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              AI需要が電気料金に波及するもう一つの経路が<strong>託送料金</strong>です。DC集積地の系統増強は、一般送配電事業者の設備投資計画を押し上げ、2023年から導入されたレベニューキャップ制度（収入上限制度）の下で、計画的に託送料金へ反映されていきます。2026年度の託送料金改定では、大半のエリアで特別高圧・高圧区分で0.2〜0.5円/kWh程度の上昇が見込まれています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DC事業者だけでなく、同じ系統・変電所を共用する既存の製造業・物流事業者にも、送電設備増強コストが薄く広く転嫁される構造です。「自社は無関係」と見るのではなく、エリアの系統増強計画と料金見通しを確認する姿勢が必要になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">JEPX価格への波及と市場連動プランのリスク</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              AI需要はベースロード（24時間定常）需要なので、JEPX価格の「昼夜差の縮小」と「底値の押し上げ」を同時に引き起こします。従来は夜間の3〜6円/kWhを活用した市場連動プランが有利でしたが、2026年以降は夜間単価も8〜12円/kWhで下げ止まる見通しが優勢です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プラン</Link>を採用している法人は、単価下振れメリットが縮小する一方、夏季ピーク時の上振れリスクは従来同様残ります。2026年以降は「夜間安・昼間高」ではなく「通年やや高＋夏冬の尖り」への構造変化を織り込んだプラン選定が求められます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人契約者が備えるべきリスク3つ</h2>
            <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                <strong>契約更新時の値上げ圧力：</strong>2026〜2027年の契約更新タイミングで、小売事業者から2〜3円/kWh規模の値上げ提示を受けるケースが増加しています。複数社の相見積りと、<Link href="/electricity-price-increase-notice-faq" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">値上げ通知への対応</Link>の手順化が重要です。
              </li>
              <li>
                <strong>需給ひっ迫アラート頻発：</strong>AI需要がベースロードを押し上げ、夏冬のピーク時間帯の予備率が低下。ひっ迫注意報・警報の発令頻度が2024年比で増える見通しです。DRプログラム参加・負荷シフト体制を整備しておくことで、電気代削減と社会貢献を両立できます。
              </li>
              <li>
                <strong>脱炭素コストの転嫁：</strong>DC事業者が再エネ調達を急ぐなか、非化石証書・コーポレートPPAの需給が締まり、証書単価の上昇も想定されます。再エネ調達コストが電気料金全体に薄く転嫁される局面で、<Link href="/corporate-ppa-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コーポレートPPA</Link>の早期確保が競争優位につながります。
              </li>
            </ol>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">備え方：2026〜2027年の実務アクション</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              短期（1年以内）では、直近12ヶ月の使用量・契約条件を棚卸し、複数社相見積りの実施と解約条項の確認から始めます。中期（1〜3年）では、長期PPA・非化石証書・自家消費型太陽光の組み合わせで調達ミックスを設計し、市場変動リスクの一部を長期固定に移します。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長期（3〜5年）では、BCP・マイクログリッド・蓄電池を組み込んだエネルギー自律化の検討が必要です。AI需要による電力ひっ迫リスクが構造化する前に、自社の「電気代感応度」を経営KPIとして可視化し、毎四半期レビューに組み込む体制を整えておくことが有効です。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li>・IEAは2030年に世界DC電力消費が倍増、日本でも全国需要の3〜5%と試算</li>
              <li>・電源開発の追随可否で2〜5円/kWhの料金インパクトが分岐</li>
              <li>・託送料金・JEPX価格・再エネ調達コストの3経路で波及</li>
              <li>・市場連動プラン・契約更新・非化石証書調達で備え方が変わる</li>
              <li>・早期の調達ミックス見直しが2026〜2027年の競争力に直結</li>
            </ul>
          </section>
        </section>

        <MarketDataFaq items={FAQ_ITEMS} />

        <AuthorBadge publishedAt="2026-04-19" updatedAt="2026-04-19" />

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/ai-demand-2030-forecast", title: "AI需要による2030年電力需要予測", description: "経産省・IEA予測の読み方。" },
              { href: "/datacenter-electricity-demand-surge", title: "データセンター電力需要の急増", description: "AI時代の需要動向。" },
              { href: "/ai-workload-energy-impact", title: "AIワークロードのエネルギー影響", description: "学習・推論の電力消費の実態。" },
              { href: "/market-linked-plan", title: "市場連動プランとは", description: "JEPX価格上昇時の影響を確認する。" },
              { href: "/electricity-price-trend-2019-2025", title: "法人向け電気料金は高止まりしているのか", description: "過去の料金水準推移を確認する。" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="AI需要による電力料金リスクを自社の契約条件でシミュレーションし、2026〜2027年の備えを定量化しましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "今後の見通しを専門家に相談する" },
            ]}
          />
        </div>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="AI需要下での電力コスト戦略、専門家に相談しませんか？"
            description="2026年以降の電気料金見通しを踏まえた調達ミックスの再設計、コーポレートPPA・非化石証書の活用まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
