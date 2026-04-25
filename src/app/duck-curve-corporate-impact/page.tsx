import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "ダックカーブとは｜法人電気料金への影響と太陽光急増時代の料金変動リスク";
const pageDescription =
  "ダックカーブ（昼の電力余剰・夜の急上昇）が法人の電気料金にもたらす影響を徹底解説。市場連動型プランのリスク、出力制御、蓄電池活用までを 3,500 字で網羅。";
const publishedDate = "2026-05-09";
const pageUrl = "https://simulator.eic-jp.org/duck-curve-corporate-impact";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "ダックカーブが法人の電気料金に与える影響はいつから本格化しますか？",
    answer:
      "九州・四国電力管内では 2024 年から JEPX スポット価格の昼夜乖離が顕著化しており、市場連動型プラン契約の法人は既に影響を受けています。全国的には 2026〜2028 年度にかけて深刻化が予想されており、早期の対策が推奨されます。",
  },
  {
    question: "市場連動型プランから固定価格プランに切り替えるとダックカーブの影響を回避できますか？",
    answer:
      "夕方の高騰時間帯（17-19 時）の単価変動リスクは回避できますが、固定価格プランの単価自体に容量拠出金や調整力コストが含まれるため、長期的には総コストが上昇する可能性があります。自社の操業時間と消費パターンに応じた選択が重要です。",
  },
  {
    question: "蓄電池導入のコスト回収期間はどの程度ですか？",
    answer:
      "産業用リチウムイオン蓄電池（500-1,000 kWh 規模）の場合、補助金活用 + ピークシフト効果 + DR 奨励金収入を合わせて 8〜12 年が標準的な回収期間です。2026 年度からの容量拠出金開始により、回収期間がさらに 1〜2 年短縮する可能性があります。",
  },
  {
    question: "出力制御による自家消費 PPA の損失はどの程度ですか？",
    answer:
      "九州電力管内で太陽光自家消費 PPA を導入している法人の場合、年間出力制御日数は 30〜60 日（2025 年実績）。発電量ベースで年間 8〜15% の損失が発生します。蓄電池併設で損失を 3〜5% まで圧縮できますが、初期投資が増加します。",
  },
  {
    question: "DR 契約を結べば、ダックカーブによる電気料金上昇を完全に相殺できますか？",
    answer:
      "DR 奨励金は kW あたり月 3,000-8,000 円（地域・契約形態により変動）が目安で、夕方ピーク時の使用抑制で月数十万円〜百万円規模の収入が得られます。ただし操業に影響しない範囲での抑制が前提のため、業種により完全相殺は困難です。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ダックカーブ",
    "ダックカーブ 法人",
    "ダックカーブ 電気料金",
    "太陽光 出力制御 法人",
    "JEPX 昼夜価格",
    "市場連動 夕方 高騰",
    "蓄電池 ピークシフト",
    "デマンドレスポンス DR",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function DuckCurveCorporateImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        dateModified={publishedDate}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電気料金が上がる理由を知る", url: "https://simulator.eic-jp.org/articles/price-increase" },
          { name: "ダックカーブとは" },
        ]}
        faq={FAQ_ITEMS}
      />

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">電気料金が上がる理由を知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <strong className="font-semibold text-slate-900">ダックカーブ</strong>とは、太陽光発電の急増によって昼間（10〜15 時）の電力需要が大幅に下がり、夕方（17〜19 時）に需要が急上昇する現象です。グラフがアヒルの形に見えることから名付けられました。本記事では、ダックカーブが法人の電気料金にどう影響するのか、市場連動型プランのリスクや出力制御の損失、蓄電池・DR 活用までを実務目線で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 1. ダックカーブとは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">1. ダックカーブとは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ダックカーブは、太陽光発電が大量導入された電力系統で、昼間の正味需要（需要 − 太陽光出力）が大きく落ち込み、日没後の需要急増とあわせて時間帯別の需要曲線がアヒルのシルエットに似た形になる現象を指します。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>米カリフォルニア ISO（CAISO）が 2013 年に命名し、世界的に普及した概念</li>
            <li>日本では 2020 年代後半から九州・四国電力管内を中心に顕著化</li>
            <li>JEPX スポット価格にも反映され、昼間 0.01 円/kWh、夕方 30 円/kWh といった極端な乖離が発生</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力市場価格の構造的変化として、関連する{" "}
            <Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              JEPX の仕組み
            </Link>
            や{" "}
            <Link href="/electricity-price-trend-2019-2025" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電気料金の長期推移
            </Link>
            と合わせて理解しておくと、自社の契約見直し判断に活かせます。
          </p>
        </section>

        {/* 2. なぜダックカーブが起きるのか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2. なぜダックカーブが起きるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ダックカーブの発生要因は単一ではなく、再エネ拡大と既存電源の運用制約が重なった構造的な現象です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>太陽光発電の急速な増加（2025 年末で導入容量 80 GW 超）</li>
            <li>昼間の業務需要 + 太陽光出力 &gt; 系統需要 となり余剰が発生</li>
            <li>火力発電は最低出力・起動停止コストの制約があり、出力調整速度が追いつかない</li>
            <li>蓄電池・揚水の容量が太陽光出力の振れ幅をカバーするには不足</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ普及のコストは{" "}
            <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              再エネ賦課金
            </Link>
            として法人にも転嫁されており、{" "}
            <Link href="/fuel-mix-price-trend-and-electricity-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電源構成の推移
            </Link>
            を踏まえると、ダックカーブの深刻化は当面続く見通しです。
          </p>
        </section>

        {/* 3. 法人電気料金への 3 つの影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">3. 法人電気料金への 3 つの影響</h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">3-1. 市場連動型プランの夕方単価高騰</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              17〜19 時の JEPX 価格が 30〜40 円/kWh まで跳ね上がるケースが増加しています。製造業の操業時間帯と重なるため、{" "}
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                市場連動型プラン
              </Link>
              の法人は夕方単価が請求額を押し上げる構造に直面しています。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">3-2. 出力制御による太陽光自家消費分の損失</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              自家消費 PPA で発電した電力でも、系統側の余剰時には出力制御の対象となり、卸売価格 0 円のリスクが現実化します。九州電力管内では年間 30〜60 日程度の出力制御が観測されています。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">3-3. 容量市場・需給調整市場のコスト転嫁</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              夕方ピーク時の供給力確保のため、蓄電池・調整力電源の確保コストが小売料金に上乗せされます。詳しくは{" "}
              <Link href="/what-is-capacity-contribution" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                容量拠出金とは（単価表・月額試算）
              </Link>
              と{" "}
              <Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                制度の深掘り解説
              </Link>
              を参照してください。
            </p>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            自社の操業時間と契約タイプの相性は事前に確認すべきです。{" "}
            <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              市場連動型プランが向かない法人の特徴
            </Link>
            も合わせて整理しておくと、見直し判断が早まります。
          </p>
        </section>

        {/* 4. ダックカーブ時代に向く / 向かない法人 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">4. ダックカーブ時代に向く / 向かない法人</h2>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-lg font-semibold text-emerald-900">向く（メリットを活かせる）</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>昼間操業中心の工場・データセンター</li>
                <li>蓄電池併設の自家消費 PPA を採用している企業</li>
                <li>DR（デマンドレスポンス）に参加できる体制を持つ法人</li>
              </ul>
            </div>
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
              <h3 className="text-lg font-semibold text-rose-900">向かない（リスク高）</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>17〜19 時に操業ピークがある製造業</li>
                <li>市場連動型プラン採用の中小法人</li>
                <li>蓄電池未導入の太陽光自家消費施設</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            自社が「向かない」側にあてはまる場合は、{" "}
            <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              固定プランが向く法人の特徴
            </Link>
            と{" "}
            <Link href="/demand-response-revenue-model" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              DR の収益モデル
            </Link>
            を比較し、契約見直しの方向性を整理できます。
          </p>
        </section>

        {/* 5. 法人がとるべき 4 つの対策 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">5. 法人がとるべき 4 つの対策</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong className="font-semibold text-slate-900">蓄電池導入</strong>: 昼の余剰電力を充電し、夕方ピーク時に放電してピークシフト。詳細は{" "}
              <Link href="/battery-electricity-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                蓄電池の電気料金対策効果
              </Link>
              を参照。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">DR 契約</strong>: 17〜19 時の使用抑制で奨励金を獲得。kW あたり月 3,000〜8,000 円規模の収入が見込める。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">固定価格プランへの切替</strong>: 価格変動リスクを回避し、コスト予測の精度を高める。{" "}
              <Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                固定プランの特徴
              </Link>
              を確認。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">エネルギーマネジメントシステム（EMS）導入</strong>: 自動制御で時間帯別最適化を実装。設備投資と運用コストの両面を見極めて選定する。
            </li>
          </ol>
        </section>

        {/* 6. まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">6. まとめ｜次のアクション</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>ダックカーブは 2030 年代にかけてさらに深刻化する見通し</li>
            <li>市場連動型プラン契約 + 夕方ピーク操業の法人は早期対策が必須</li>
            <li>自社の電気使用パターンを可視化したうえで、適合プランと設備投資を選定する</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まずはシミュレーターで自社のリスクスコアを確認し、現契約と固定/市場連動の比較見積りを取り、対策の優先順位を決めることをおすすめします。
          </p>
        </section>
      </section>

      {/* FAQ */}
      <div className="mt-8">
        <MarketDataFaq heading="よくある質問" items={FAQ_ITEMS} />
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/simulate", title: "電気料金上昇リスク診断", description: "30 秒で自社のリスクスコアと年間影響額を試算できます。" },
            { href: "/fuel-cost-adjustment", title: "燃料費調整額（燃調費）とは", description: "請求書に直接効く燃料費調整の仕組みを確認できます。" },
            { href: "/market-linked-vs-fixed", title: "市場連動プランと固定プランの違い", description: "ダックカーブ環境下での選定軸を比較整理。" },
            { href: "/jepx-explained", title: "JEPX とは｜卸電力市場の仕組み", description: "昼夜価格乖離の発生メカニズムをデータで確認。" },
            { href: "/what-is-capacity-contribution", title: "容量拠出金とは｜2026〜2028年度の単価", description: "夕方ピーク確保コストの転嫁構造と単価表・月額試算を整理。" },
            { href: "/capacity-contribution-explained", title: "容量拠出金の仕組み（深掘り版）", description: "制度の歴史と詳細解説。" },
            { href: "/demand-response-revenue-model", title: "DR の収益モデル", description: "夕方の使用抑制で奨励金を得る仕組み。" },
            { href: "/battery-electricity-cost-benefit", title: "蓄電池の電気料金対策効果", description: "ピークシフトの試算と回収期間。" },
          ]}
        />
      </div>

      {/* AuthorBadge */}
      <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="自社の電気使用時間帯と現契約のミスマッチを、シミュレーターで可視化してから対策の優先度を決めましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "他の解説記事を読む" },
          ]}
        />
      </div>
    </main>
  );
}
