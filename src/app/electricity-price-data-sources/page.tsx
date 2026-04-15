import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "電気料金推移データの入手先と確認方法｜法人担当者のための情報源ガイド";
const pageDescription =
  "法人の電気料金推移を確認するためのデータ入手先を一覧で整理。資源エネルギー庁統計、OCCTO、JEPX、各電力会社の燃調費公表、経産省補助金情報の使い方を解説。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 推移 データ 入手先",
    "資源エネルギー庁 電気料金統計",
    "JEPX スポット価格 確認方法",
    "燃料費調整 公表 確認",
    "OCCTO 電力需給データ",
    "法人 電気料金 情報源",
    "電気料金 社内レポート",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-price-data-sources",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-price-data-sources",
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

export default function ElectricityPriceDataSourcesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li className="select-none">/</li>
          <li>
            <Link href="/articles/price-trends" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電気料金の推移と高止まり
            </Link>
          </li>
          <li className="select-none">/</li>
          <li className="text-slate-700">電気料金推移データの入手先と確認方法</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気料金推移データの入手先と確認方法｜法人担当者のための情報源ガイド
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「電気料金がどう変わってきたか」を社内でまとめようとしても、どこのデータを使えばよいか迷う担当者は少なくありません。
          資源エネルギー庁・OCCTO・JEPX・各電力会社サイトなど、信頼できる情報源が複数あり、それぞれカバーする内容が異なります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人の電気料金担当者が実務で使える8つの情報源を整理し、データの種類別の確認方法、社内レポートへの活かし方、データを読む際の落とし穴を解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">

        {/* 情報源一覧テーブル */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気料金データの主要8情報源
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            公的機関・市場機関・電力会社・行政の4カテゴリに整理しました。データの性質がそれぞれ異なるため、目的に合わせて使い分けることが重要です。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">情報源</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">データ内容</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">更新頻度</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">入手先（URL例）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">法人での主な使い方</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">資源エネルギー庁<br />電気事業統計</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約区分別・地域別の平均販売単価（円/kWh）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月次（翌々月公表）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">enecho.meti.go.jp／電力調査統計</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">全国平均との比較・年度間推移の根拠データとして活用</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">資源エネルギー庁<br />電力需給速報</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">需給逼迫時のスポット価格急騰状況・電源構成推移</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月次・臨時</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">enecho.meti.go.jp／電力・ガス情報</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">リスクシナリオ分析・需給逼迫年の前後比較</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">OCCTO<br />（電力広域的運営推進機関）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">エリア別需給実績・送電線潮流・広域需給見通し</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">日次・月次・年次</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">occto.or.jp／需給状況</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力不足リスク・地域間格差の把握</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">JEPX<br />（日本卸電力取引所）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">スポット市場・先物市場の取引価格（エリア別・時間帯別）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">日次（翌日公表）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">jepx.or.jp／統計情報</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動プラン加入時の単価チェック・調整費根拠の確認</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">各電力会社<br />燃料費調整単価公表</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">翌月分の燃料費調整単価（プラス・マイナス円/kWh）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月次（前月中旬公表）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">各電力会社の公式サイト（料金メニュー一覧）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">翌月の電気代予測・突発的な単価変動の早期把握</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">各電力会社<br />市場価格調整単価公表</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">JEPX連動プランの調整単価（前月実績・翌月見込み）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月次</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">各電力会社の公式サイト（料金明細参考）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動プランの月次コスト把握・固定プランとの比較</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">再エネ賦課金<br />（経産省公表）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年度ごとの賦課金単価（円/kWh）・FIT買取費用総額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年次（3〜4月改定）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">enecho.meti.go.jp／再エネ賦課金情報</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">来年度の賦課金コストの予算織り込み・推移グラフ作成</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">容量拠出金<br />（OCCTO公表）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">容量市場の落札結果・容量拠出金単価の見込み</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年次（オークション後）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">occto.or.jp／容量市場</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中期的なコスト上昇見通しの把握・来年度以降の予算前提</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* データ種類別の確認方法 */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            データ種類別の確認方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「何を知りたいか」によって見るべき情報源と確認タイミングが変わります。5つの主要データ種類別に整理しました。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">データ種類</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">どこで確認するか</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">いつ確認するか</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">何を確認するか</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">電気料金推移データ</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">資源エネルギー庁 電気事業統計</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">四半期ごと（3月・6月・9月・12月）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高圧・特別高圧別の平均販売単価の推移。前年同月比での変動率</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">燃料費調整単価</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約先の電力会社公式サイト</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">毎月中旬（翌月分の公表タイミング）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">翌月の調整単価（プラス幅が大きい月は月額コストに要注意）</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">JEPXスポット価格</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">JEPX公式サイト 統計情報</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動プランの場合は毎日、その他は月次で確認</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">エリア別の月間平均価格・スパイク発生日数・季節変動パターン</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">資源エネルギー庁 再エネ賦課金情報</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回（3〜4月の年度改定時）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">新年度の単価（円/kWh）と自社使用量から年間コスト変化を試算</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">容量拠出金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">OCCTO 容量市場情報、電力会社の明細</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">容量市場オークション結果公表後（年1回）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">将来年度の容量拠出金単価見込みと自社使用量ベースのコスト試算</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 社内レポートへの活かし方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            データを社内レポートに活かす4ステップ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            外部データと自社の請求データを組み合わせることで、経営層への説明力が高まります。実務的な4ステップを整理しました。
          </p>
          <ol className="mt-4 space-y-4">
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">1</span>
                <div>
                  <p className="font-semibold text-slate-900">自社請求データの費目分解</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    月次の請求書から「基本料金」「電力量料金」「燃料費調整」「再エネ賦課金」「容量拠出金」に費目分解します。費目ごとの金額推移をExcelで管理することが出発点です。
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">2</span>
                <div>
                  <p className="font-semibold text-slate-900">外部データとの突き合わせ</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    自社の燃料費調整単価が電力会社公表値と一致しているか確認します。差異がある場合は契約メニューの上限・下限設定や調整係数の違いが原因です。
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">3</span>
                <div>
                  <p className="font-semibold text-slate-900">業界平均との乖離分析</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    資源エネルギー庁統計の「高圧平均単価」と自社の実績単価を比較します。自社単価が業界平均より大幅に高い場合、契約メニューの見直し余地があります。
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">4</span>
                <div>
                  <p className="font-semibold text-slate-900">将来コストのシナリオ作成</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    JEPX先物価格・容量拠出金見込み・再エネ賦課金の方向性を踏まえ、楽観・基本・悲観の3シナリオで来年度コストを試算します。具体的な数字があると経営層への説明がスムーズです。
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* データ読み取りの落とし穴 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            データを読む際の落とし穴5項目
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            公的統計や市場データには、法人担当者が誤読しやすいポイントがあります。以下の5点に注意してください。
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">1. 資源エネルギー庁の単価は「全契約平均」</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                公表される単価は、旧一般電気事業者（大手電力）の全契約区分・全使用量帯の加重平均です。自社が大口高圧の場合、実態単価とは構造的に異なります。高圧平均・特別高圧平均の区分別データを参照してください。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">2. JEPXスポット価格は「卸値」</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                JEPXのスポット価格は卸電力市場の取引価格です。法人が実際に支払う小売価格は、送配電費用・各種調整費・小売マージンが加算されるため、JEPX単価の1.5〜2倍程度になるのが一般的です。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">3. 燃料費調整の「上限・下限」設定の確認漏れ</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                電力会社が公表する燃料費調整単価を自社請求書と突き合わせる際、契約メニューに上限・下限が設定されていると公表値と実績値が一致しません。契約書の「燃料費調整条項」を必ず確認してください。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">4. 再エネ賦課金は使用量ベースで変わる</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                賦課金単価が前年度と同水準でも、自社の使用量が増えれば負担額は増加します。単価の変化だけでなく、使用量の変化も同時に追う必要があります。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">5. 容量拠出金のコスト反映は数年後</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                容量市場のオークション結果（現在公表中）が実際の電気代に反映されるのは4年後です。今すぐコストに影響しませんが、中期予算策定では折り込んでおく必要があります。
              </p>
            </li>
          </ul>
        </section>

      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="electricity-price-data-sources" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "JEPX", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/electricity-price-trend-2019-2025",
              title: "電気料金の推移（2019〜2025年）",
              description: "過去6年間の法人向け電気料金の変動を費目別・契約区分別に整理。データの見方も解説。",
            },
            {
              href: "/fuel-cost-adjustment-history",
              title: "燃料費調整の推移",
              description: "燃料費調整単価がどのように動いてきたかを月次で追った解説ページ。",
            },
            {
              href: "/jepx-price-trend-and-corporate-impact",
              title: "JEPXスポット価格の推移と法人コストへの影響",
              description: "卸電力市場の価格が法人の電気代にどう波及するかを解説。",
            },
            {
              href: "/budget-planning-in-high-price-era",
              title: "電気料金高止まり時代の予算策定",
              description: "高止まり局面での予算前提の置き方・シナリオ別試算方法を整理。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金リスクをシミュレーションで確認する"
          description="データを読み解くだけでなく、自社の契約規模・使用量をもとにした具体的な上昇額を試算できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/price-trends", label: "推移・高止まりの解説を読む" },
          ]}
        />
      </div>
    </main>
  );
}
