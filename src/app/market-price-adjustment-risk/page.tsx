import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { JEPX_SYSTEM_PRICE_YEARLY } from "../../data/priceAdjustmentHistory";

const pageTitle = "市場価格調整額の上振れリスクと備え方｜2021年冬・2022年事例で学ぶ";
const pageDescription =
  "市場価格調整額の上振れリスクを、2021年1月のJEPX高騰、2022年ウクライナ危機の事例から整理。経営への影響、リスクヘッジの考え方、備え方を法人向けに解説します。";
const pageUrl = "https://simulator.eic-jp.org/market-price-adjustment-risk";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "市場価格調整額 リスク",
    "市場連動 リスク",
    "JEPX 高騰 法人",
    "電気料金 上振れ",
    "リスクヘッジ 電気料金",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
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

export default function MarketPriceAdjustmentRiskPage() {
  const labels = JEPX_SYSTEM_PRICE_YEARLY.map((r) => `${r.year}年度`);
  const values = JEPX_SYSTEM_PRICE_YEARLY.map((r) => r.systemPriceYenPerKwh);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-increase" className="underline-offset-2 hover:underline">料金が上がる理由を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">市場価格調整額の上振れリスクと備え方</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場価格調整額の上振れリスクと備え方</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          市場価格調整額の最大のリスクは「上限がないこと」です。燃料費調整額（規制料金）には上限がありますが、
          市場連動型契約の多くには上限がなく、JEPX 価格が急騰した月に請求額が予算の数倍になることがあります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">上振れリスクの実体</h2>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "JEPXシステムプライス年度平均（円/kWh）",
                  values,
                  color: "#ea580c",
                  fillColor: "rgba(234,88,12,0.14)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019 年度（7.92 円/kWh）と 2022 年度（20.37 円/kWh）で、年度平均の差は約 2.5 倍。
            市場連動で 100% 仕入れた場合、年間の電力量料金が 2.5 倍になったことを意味します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">事例1：2021年1月のスパイク</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2020 年度末（2021 年 1 月）、寒波による需要急増と LNG 逼迫で、JEPX スポット価格は一時 250 円/kWh 超え。
            1 月の月平均で約 60 円/kWh に到達しました。
          </p>
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm leading-7 text-slate-800">
              <strong>影響例：</strong>月 10 万 kWh の中規模事業所で、1 月の電気代が通常月の 5〜6 倍に。
              年額予算を 1 ヶ月で使い切る事業者も発生。
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            この時期に切替タイミングが悪かった事業者では、社長・経理への突発的な追加予算申請、
            翌年度予算の大幅見直しなどの経営対応を余儀なくされました。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">事例2：2022年度の長期高止まり</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021 年度の冬季スパイクが一時的な事象だったのに対し、2022 年度は年間を通じて JEPX が高止まりしました。
            ウクライナ危機で LNG スポット価格が歴史的水準に達し、市場連動契約の法人需要家は「毎月」請求急増に直面しました。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>ある中規模工場：年間電気代が前年比 2.3 倍、追加負担 3,500 万円</li>
            <li>ある自治体施設：補正予算で 5,000 万円超の追加計上</li>
            <li>ある飲食チェーン：全店舗合計で前年比 +1.2 億円</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクヘッジの 5 つの考え方</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">① 固定単価プランへの切替</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                最も確実な方法。市場変動リスクをゼロにできるが、平常時は固定プランの方が高くなる期間もある。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">② α×β型で連動係数を下げる</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                完全固定までいかなくても、市場変動の 30〜50% だけ反映する契約に切り替えることでリスクを緩和。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">③ 上限条項の追加交渉</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                大口需要家であれば「基準単価の 1.5 倍を上限」などの条項を個別に交渉できる場合がある。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">④ 使用量の平準化・ピークシフト</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                JEPX 高値の時間帯（夏夕方・冬朝晩）の使用量を減らす運用で、実績連動型の影響を軽減。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">⑤ 自家消費型太陽光・蓄電池</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                JEPX 高値時間帯に自家消費で系統依存を下げる物理的なヘッジ手段。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">⑥ 複数社分散</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                複数拠点がある場合、一部は固定・一部は市場連動に分散することで全体のリスクを平準化。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">予算管理の実務視点</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>年度予算策定時、JEPX 平均 +5 円、+10 円 の上振れシナリオを併記する</li>
            <li>月次レビューで JEPX 月平均実績をモニタリング</li>
            <li>契約更新前に過去 3 年の最悪月の単価で試算</li>
            <li>経営層への説明資料に「市場連動リスク」の項目を入れる</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/market-price-adjustment", title: "市場価格調整額とは", description: "制度の基本まとめ。" },
            { href: "/market-price-adjustment-history", title: "市場価格調整額の推移", description: "JEPX連動の実績を数値で把握。" },
            { href: "/market-price-adjustment-calculation", title: "市場価格調整額の計算方法", description: "契約約款の読み方。" },
            { href: "/market-linked-plan", title: "市場連動プランとは", description: "契約タイプ全体の整理。" },
            { href: "/jepx-spike-electricity-cost-impact", title: "JEPX急騰で法人の電気料金はどう上がるか", description: "リスクシナリオ。" },
          ]}
        />

        <ContentCta
          heading="上振れシナリオで自社への影響を確認"
          description="市場価格調整額の最悪ケースを、シミュレーターで数字として確認しましょう。"
          links={[
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
