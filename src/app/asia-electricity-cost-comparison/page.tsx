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

const pageTitle = "海外拠点の電力コスト比較｜アジア主要国の料金水準";
const pageDescription =
  "日本・韓国・中国・台湾・ベトナム・インドネシア・タイ・マレーシア・シンガポール・インドの法人向け電気料金水準を比較。単価だけでなく電源構成・電力安定性・脱炭素対応度を含めた総合評価で、アジア拠点展開の判断材料を整理します。";
const pageUrl = "https://simulator.eic-jp.org/asia-electricity-cost-comparison";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["global-energy"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "アジア 電気料金 比較",
    "海外 電力コスト",
    "東南アジア 電気料金",
    "韓国 電気料金",
    "ベトナム 電気料金",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/global-energy", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/global-energy"],
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
          { name: "海外拠点・グローバルエネルギー", url: "https://simulator.eic-jp.org/articles/global-energy" },
          { name: "海外拠点の電力コスト比較" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/global-energy" className="underline-offset-2 hover:underline">海外拠点・グローバルエネルギー</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">海外拠点の電力コスト比較</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">海外拠点の電力コスト比較｜アジア主要国の料金水準</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>結論：アジア主要国の法人向け電気料金は、インドネシア・ベトナムの8〜12円/kWhからシンガポールの22〜28円/kWhまで3倍以上の開きがあります。ただし単価だけでなく、電力安定性・脱炭素対応度・補助制度の3軸で総合評価しないと拠点戦略を誤ります。</strong>
            このページでは10ヶ国の比較表と、日本企業が海外拠点を検討する際の判断軸を整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">アジア10ヶ国の法人向け電気料金水準</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下はアジア主要10ヶ国の産業用（中圧〜高圧相当）の電気料金の概算水準です。為替・制度・エリアで変動するため、あくまで2025年時点の目安としてご覧ください。円換算は USD 1 = 145円前提で計算しています。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border border-slate-200 px-3 py-2 text-left">国・地域</th>
                    <th className="border border-slate-200 px-3 py-2 text-right">法人単価（円/kWh）</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">主力電源</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">補助・制度の特徴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">日本</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">22〜26</td>
                    <td className="border border-slate-200 px-3 py-2">LNG・石炭・再エネ</td>
                    <td className="border border-slate-200 px-3 py-2">再エネ賦課金あり、省エネ補助金豊富</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">韓国</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">14〜18</td>
                    <td className="border border-slate-200 px-3 py-2">原子力・石炭・LNG</td>
                    <td className="border border-slate-200 px-3 py-2">KEPCO一社体制、値上げが政策制約</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">中国</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">10〜14</td>
                    <td className="border border-slate-200 px-3 py-2">石炭・再エネ・原子力</td>
                    <td className="border border-slate-200 px-3 py-2">省別料金、Green Power Trading制度</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">台湾</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">12〜16</td>
                    <td className="border border-slate-200 px-3 py-2">LNG・石炭・原子力（縮小）</td>
                    <td className="border border-slate-200 px-3 py-2">TPC公営、脱原発で料金上昇圧力</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">ベトナム</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">10〜13</td>
                    <td className="border border-slate-200 px-3 py-2">水力・石炭・ガス</td>
                    <td className="border border-slate-200 px-3 py-2">EVN独占、DPPAが2024年解禁</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">インドネシア</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">8〜12</td>
                    <td className="border border-slate-200 px-3 py-2">石炭・ガス</td>
                    <td className="border border-slate-200 px-3 py-2">PLN独占、補助金で低廉維持</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">タイ</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">13〜17</td>
                    <td className="border border-slate-200 px-3 py-2">天然ガス中心</td>
                    <td className="border border-slate-200 px-3 py-2">IPP比率高、Ft調整で変動</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">マレーシア</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">11〜15</td>
                    <td className="border border-slate-200 px-3 py-2">ガス・石炭・水力</td>
                    <td className="border border-slate-200 px-3 py-2">TNB独占、ICPTサーチャージ制度</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">シンガポール</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">22〜28</td>
                    <td className="border border-slate-200 px-3 py-2">LNG中心（95%超）</td>
                    <td className="border border-slate-200 px-3 py-2">小売自由化、小売事業者選択可</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">インド</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">10〜16</td>
                    <td className="border border-slate-200 px-3 py-2">石炭・再エネ・水力</td>
                    <td className="border border-slate-200 px-3 py-2">州別料金、Open Accessで自由調達可</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">※ 出典: IEA、各国規制機関、BloombergNEF、現地電力会社の公表資料より著者整理（2025年時点）。実際のkWh単価は契約規模・エリア・為替で変動します。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">単価だけで拠点を決めてはいけない理由</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ベトナム・インドネシアの電気料金は日本の半分以下ですが、<strong>停電頻度・電圧変動・燃料供給リスク</strong>を加味した「実質コスト」は単純な単価以上になることが多くあります。インドネシア・ジャカルタ圏では年間平均10〜20時間の計画停電、南ベトナムでは乾季（3〜5月）に水力減少で供給制約が発生します。停電対策のための非常用電源・UPS投資は、拠点選定の隠れたコストです。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              また、これらの国の低廉な電気料金は政府補助によって支えられているケースが多く、燃料高騰期には制度改正で<strong>急激な値上げが発生</strong>する可能性があります。2022年のインドネシアPLN改定、2023年のベトナムEVN値上げは、多くの日系進出企業の原価計画を狂わせました。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力安定性で見た評価</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              IEAのSAIDI（停電発生時間）指標でみると、日本・韓国・台湾・シンガポールが年間15分未満で世界最高水準、ベトナム・インドネシア・フィリピンが年間数時間〜数十時間で中位、インドの一部州では年間100時間超のエリアもあります。24時間稼働の製造ライン・DCでは、停電時間が1時間増えるだけで年間損失が数千万円規模に達することもあり、安定性はコスト以上の重要指標です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力安定性は<strong>系統周波数・電圧の質</strong>も含みます。半導体製造・精密機器ではミリ秒単位の電圧変動で歩留まりが落ちるため、韓国・台湾のハイテク拠点が選ばれる実務的理由の一つがここにあります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">脱炭素対応度と再エネ調達</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              RE100やCDPでの評価を意識する企業は、電源構成と再エネ調達手段を必ず確認すべきです。ベトナムは2024年にDPPA（直接電力購入契約）制度を本格解禁し、日系企業の再エネ調達が急拡大しています。中国はGreen Power Trading、インドはOpen Access、マレーシアはCGPPと、各国が独自の再エネ調達枠組みを整備しています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              一方で、インドネシア・タイは2025年時点でも再エネPPAの選択肢が限定的で、RE100要件を満たすのが難しいケースがあります。グローバル再エネ調達戦略の全体像は<Link href="/global-renewable-procurement-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">グローバル企業の再エネ調達戦略</Link>で詳述しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">総合評価マトリクス</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気料金・電力安定性・脱炭素対応度の3軸で総合評価すると、おおむね以下の傾向になります。
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="rounded border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">コスト重視型</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">インドネシア・ベトナム・インド。単価は安いが安定性・脱炭素に課題。労働集約型製造に適する。</p>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">バランス型</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">韓国・中国・マレーシア・タイ。中位の単価と安定性、再エネ調達の選択肢も徐々に拡大中。</p>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">品質・脱炭素重視型</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">日本・台湾・シンガポール。単価は高いが高品質・再エネ調達多様。ハイテク製造・DCに適する。</p>
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-900">政策変動型</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">補助金依存国（インドネシア・タイ）は政策改定時の単価変動リスクあり。長期調達は慎重に。</p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">拠点選定の実務チェックリスト</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li>□ 現地通貨建て・円換算の両方で単価を把握している</li>
              <li>□ 過去5年の電気料金改定履歴を確認している</li>
              <li>□ 停電発生時間（SAIDI）と電圧品質を確認している</li>
              <li>□ 再エネ調達手段（PPA・証書）の選択肢を確認している</li>
              <li>□ 政府補助・減免制度の継続性を評価している</li>
              <li>□ 非常用電源・UPSの追加投資を原価計画に織り込んでいる</li>
            </ul>
          </section>
        </section>

        <MarketDataFaq items={FAQ_ITEMS} />

        <AuthorBadge publishedAt="2026-04-19" updatedAt="2026-04-19" />

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/global-electricity-price-benchmark", title: "世界主要国の電気料金比較", description: "日本・欧米・アジアの水準ベンチマーク。" },
              { href: "/china-southeast-asia-electricity-procurement", title: "中国・東南アジア拠点の電力事情", description: "現地PPA・証書制度の詳細。" },
              { href: "/global-renewable-procurement-strategy", title: "グローバル企業の再エネ調達戦略", description: "国別の調達手段マッピング。" },
              { href: "/overseas-energy-strategy", title: "海外拠点のエネルギー戦略", description: "多国籍企業の電力調達設計。" },
              { href: "/europe-energy-crisis-lessons", title: "欧州電力危機の教訓", description: "2022年〜の価格変動から学ぶ。" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="拠点展開の電力コスト評価は、単価・安定性・脱炭素の3軸で行いましょう。国内契約の現状把握からも多くの気づきが得られます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "海外拠点の電力戦略を相談する" },
            ]}
          />
        </div>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="海外拠点の電力戦略、専門家に相談しませんか？"
            description="アジア各国の電力事情、現地PPA・証書制度、拠点選定時の総合評価軸まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
