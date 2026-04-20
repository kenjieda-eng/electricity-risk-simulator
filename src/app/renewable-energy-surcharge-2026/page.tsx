import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

// --- 定数 ---
const pageTitle = "再エネ賦課金はいくら？2026年度の単価と法人負担の計算";
const pageDescription =
  "2026年度の再エネ賦課金単価と計算方法を解説。2025年度との比較、低圧・高圧・特別高圧の規模別年間負担、電気多消費事業者向け減免制度、2030年までの単価見通しを法人担当者向けに整理します。";
const pageUrl = "https://simulator.eic-jp.org/renewable-energy-surcharge-2026";

// 過去単価推移
const rateHistory = [
  { year: "2020年度", rate: 2.98 },
  { year: "2021年度", rate: 3.36 },
  { year: "2022年度", rate: 3.45 },
  { year: "2023年度", rate: 1.40 },
  { year: "2024年度", rate: 3.49 },
  { year: "2025年度", rate: 3.98 },
  { year: "2026年度", rate: 4.15 },
];

// 規模別試算
const scaleRows = [
  {
    type: "小規模オフィス（低圧・月2,000kWh）",
    monthly: "約8,300円",
    annual: "約9.96万円",
    note: "年間使用量24,000kWh × 4.15円",
  },
  {
    type: "中規模店舗（低圧・月8,000kWh）",
    monthly: "約3.32万円",
    annual: "約39.84万円",
    note: "年間使用量96,000kWh × 4.15円",
  },
  {
    type: "中規模工場（高圧・月15万kWh）",
    monthly: "約62.25万円",
    annual: "約747万円",
    note: "年間使用量180万kWh × 4.15円",
  },
  {
    type: "大規模工場（高圧・月50万kWh）",
    monthly: "約207.5万円",
    annual: "約2,490万円",
    note: "年間使用量600万kWh × 4.15円",
  },
  {
    type: "大規模施設（特別高圧・月200万kWh）",
    monthly: "約830万円",
    annual: "約9,960万円",
    note: "年間使用量2,400万kWh × 4.15円（減免制度対象可）",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ賦課金 2026",
    "再エネ賦課金 単価",
    "再生可能エネルギー発電促進賦課金",
    "再エネ賦課金 計算",
    "再エネ賦課金 減免",
    "再エネ賦課金 推移",
    "FIT賦課金",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/price-increase", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-increase"],
  },
};

export default function RenewableEnergySurcharge2026Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "料金が上がる理由を知る", url: "https://simulator.eic-jp.org/articles/price-increase" },
          { name: "2026年度の再エネ賦課金" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/price-increase" className="underline-offset-2 hover:underline">料金が上がる理由を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">2026年度の再エネ賦課金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            再エネ賦課金はいくら？2026年度の単価と法人負担の計算
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>結論：2026年度の再エネ賦課金は4.15円/kWh。2025年度の3.98円/kWhから+0.17円/kWhの上昇となり、過去最高水準を更新しました。</strong>
            使用量の多い法人にとっては、燃料費調整額や託送料金の変動と並ぶ、電気料金の固定的な値上げ要因になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この記事では、2026年度の単価水準と算定の仕組みを整理し、低圧・高圧・特別高圧の規模別に年間負担額を試算します。あわせて、電気多消費事業者向けの減免制度と、2030年までの単価見通しを確認します。より長期の推移は
            <Link href="/renewable-energy-surcharge-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金の年度別推移</Link>
            を参照してください。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* H2: 2026年度の単価 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年度の再エネ賦課金単価（2025年度比較）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金（再生可能エネルギー発電促進賦課金）は、FIT・FIP制度に基づく再エネ買取費用のうち、回避可能費用を差し引いた額を全国一律の単価で電力需要家に賦課する仕組みです。経済産業省が毎年3月に翌年度の単価を告示します。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
                <thead>
                  <tr className="bg-slate-50 text-slate-900">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">年度</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold">単価（円/kWh）</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold">前年度比</th>
                  </tr>
                </thead>
                <tbody>
                  {rateHistory.map((r, i) => (
                    <tr key={r.year} className="align-top hover:bg-slate-50">
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{r.year}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{r.rate.toFixed(2)}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {i === 0 ? "—" : `${(r.rate - rateHistory[i - 1].rate >= 0 ? "+" : "")}${(r.rate - rateHistory[i - 1].rate).toFixed(2)} 円`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 2023年度は、電力卸市場価格の高騰に伴う回避可能費用の上振れを受けて、制度開始以来初めての大幅低下となりました。単位：円/kWh。
            </p>
          </section>

          {/* H2: 計算式 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">計算方法（使用量 × 単価）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の請求額は、きわめてシンプルな計算式です。
            </p>
            <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-900">
              <p className="font-semibold">再エネ賦課金 = 電力使用量（kWh）× 単価（円/kWh）</p>
              <p className="mt-2 text-xs text-slate-600">
                例：高圧で月15万kWh使う工場 → 150,000 × 4.15 = 622,500円/月
              </p>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              単価は日本全国一律です。電力会社ごとに異なる電力量料金や燃料費調整額と違い、需要家側から下げる余地はありません。逆に言えば、電気代を下げるには「使用量そのものを減らす」「減免制度を適用する」のいずれかしかありません。
            </p>
          </section>

          {/* H2: 規模別の負担試算 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">事業所規模別の年間負担例（2026年度単価）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年度の単価4.15円/kWhで、代表的な規模別に負担額を試算します。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
                <thead>
                  <tr className="bg-slate-50 text-slate-900">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">事業所タイプ</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold">月額負担</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold">年額負担</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">計算根拠</th>
                  </tr>
                </thead>
                <tbody>
                  {scaleRows.map((row) => (
                    <tr key={row.type} className="align-top hover:bg-slate-50">
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{row.type}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{row.monthly}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-sky-800">{row.annual}</td>
                      <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 使用量は想定値。契約電力や稼働率により変動します。
            </p>
          </section>

          {/* H2: 減免制度 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">減免制度（電気多消費事業者向け）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再生可能エネルギー電気の利用の促進に関する特別措置法では、電気使用量が多く、賦課金負担が事業継続に重大な影響を及ぼす業種を対象に、賦課金を8割減免する制度があります。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-medium text-slate-900">対象要件：</span>原則として、年間電気使用量が100万kWh以上で、電気使用原単位（売上高または付加価値に対する電気代比率）が全製造業平均の一定倍を超える事業所</li>
              <li><span className="font-medium text-slate-900">減免率：</span>8割減免（賦課金負担が2割まで圧縮）</li>
              <li><span className="font-medium text-slate-900">対象業種例：</span>電炉・アルミ精錬・化学・鉄鋼・一部食品加工など、電力多消費の製造業</li>
              <li><span className="font-medium text-slate-900">申請：</span>毎年度、経済産業大臣の認定が必要。前年度実績に基づく事業所単位での申請</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              減免対象となれば、特別高圧規模の事業所では年間数千万円単位の負担軽減が見込めます。詳細は
              <Link href="/renewable-energy-surcharge-reduction-system" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                再エネ賦課金の減免制度と対象業種
              </Link>
              に整理しています。
            </p>
          </section>

          {/* H2: 2030年までの見通し */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2030年までの単価推移見通し</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の単価は、①FIT/FIP認定設備の累計買取額 ②回避可能費用（卸電力市場価格相当額）— の差で決まります。2020年代後半以降は、新規FIT認定量の伸びが緩やかな一方で、既存設備の買取期間が残るため、単価は当面高止まりする見通しです。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>2026〜2028年度：4.0〜4.5円/kWh前後で推移する見込み（買取費用のピーク期）</li>
              <li>2029〜2031年度：FITからFIPへの移行が進み、回避可能費用の変動が増えるため単価のブレ幅が拡大</li>
              <li>2032年度以降：初期FIT案件（住宅10年・事業20年）の終了で、段階的な減少局面に入る見通し</li>
              <li>ただしJEPXスポット価格が下落すると、回避可能費用が減って賦課金単価は逆に上昇する関係にある</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              予算策定では、2030年までは年4円/kWh前後の負担が継続する前提で見積もるのが現実的です。
            </p>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ：2026年度の再エネ賦課金のポイント</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>2026年度単価は4.15円/kWhで過去最高を更新。前年度比+0.17円/kWh</li>
              <li>計算式は「使用量 × 単価」。全国一律で、電力会社選定では下げられない</li>
              <li>大規模工場では年数百万〜数千万円単位の負担となり、電気料金全体の10%前後を占めるケースもある</li>
              <li>年100万kWh以上かつ電気使用原単位の条件を満たせば、8割減免の対象となる可能性がある</li>
              <li>2030年までは高止まりが続く見通し。長期予算は4円/kWh前後での継続を前提に組む</li>
            </ul>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/renewable-energy-surcharge",
                title: "再エネ賦課金とは",
                description: "再エネ賦課金の仕組みと推移を基礎から解説。",
              },
              {
                href: "/renewable-energy-surcharge-history",
                title: "再エネ賦課金の年度別推移",
                description: "2012〜2026年度までの単価変化の背景を整理。",
              },
              {
                href: "/renewable-energy-surcharge-business-cost",
                title: "法人の再エネ賦課金負担",
                description: "業態別・規模別の月額・年額負担を試算。",
              },
              {
                href: "/renewable-energy-surcharge-reduction-system",
                title: "再エネ賦課金の減免制度",
                description: "8割減免の対象要件と申請手続きを解説。",
              },
              {
                href: "/fuel-cost-adjustment",
                title: "燃料費調整額とは",
                description: "再エネ賦課金と並ぶ請求書の変動要因。",
              },
            ]}
          />

          <ContentCta
            heading="2026年度の電気代を試算する"
            description="契約電力と月間使用量を入力して、再エネ賦課金を含む電気料金全体の見通しを試算できます。予算策定や社内説明の一次資料としてご活用ください。"
            links={[
              { href: "/", label: "シミュレーターで試算する" },
              { href: "/contact", label: "個別相談を申し込む" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="再エネ賦課金の影響試算、専門家に相談しませんか？"
            description="2026年度の賦課金単価を踏まえた年間コスト増の試算から、減免制度の適用可否確認まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
