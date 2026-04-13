import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { RenSharePriceBarChart, RenHourlyDualAxisChart } from "../../components/market-data/RenewablePriceCharts";
import {
  REN_SHARE_LABELS,
  REN_SHARE_PRICE,
  REN_SHARE_COUNT,
} from "../../data/marketData";

// --- 定数 ---
const pageTitle = "再エネ比率が上がると価格はどう動くか｜東京エリア35,000コマの実証データ";
const pageDescription =
  "東京エリア35,501コマの30分値データを分析。再エネ比率0〜5%時の平均価格14.16円に対し、40%超では6.49円と54%安。再エネ比率と電力市場価格の明確な逆相関（r=-0.46）を実証データで解説します。";
const pageUrl = "https://simulator.eic-jp.org/renewable-share-price-correlation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ比率 電気料金",
    "再生可能エネルギー JEPX価格",
    "再エネ 市場価格 逆相関",
    "太陽光 電力市場 昼間",
    "ダックカーブ 価格",
    "市場連動型プラン 時間帯",
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

// --- キー統計 ---
const keyStats = [
  { label: "再エネ0-5%時 平均価格", value: "14.16 円", sub: "最も価格が高い帯" },
  { label: "再エネ40%超 平均価格", value: "6.49 円", sub: "最も価格が低い帯（54%安）" },
  { label: "昼12時 再エネ比率", value: "34.1 %", sub: "→ 価格 10.29円/kWh" },
  { label: "夕18時 再エネ比率", value: "6.1 %", sub: "→ 価格 17.16円/kWh" },
];

export default function RenewableSharePriceCorrelationPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/market-data" className="underline-offset-2 hover:underline">データで見る電力市場</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">再エネ比率と価格の関係</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">MARKET DATA ／ データで見る電力市場</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          再エネ比率が上がると価格はどう動くか
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">東京エリア35,000コマの実証データ</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          東京エリアの30分値データ35,501コマを分析した結果、再生可能エネルギーの供給比率と
          JEPXスポット価格には明確な逆相関（相関係数 r=−0.46）が確認されました。
          再エネ比率が0〜5%の時間帯では平均価格が14.16円/kWhであるのに対し、
          40%を超える時間帯では6.49円/kWhと<strong>54%も安い</strong>水準になっています。
          この構造を理解することは、市場連動型プランの活用や蓄電池投資の判断に直結します。
        </p>
      </header>

      {/* キー統計 */}
      <section className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {keyStats.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">{item.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
          </div>
        ))}
      </section>

      {/* 結論セクション */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">結論：再エネ比率と電力価格は明確な逆相関</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          再生可能エネルギー（主に太陽光）の供給が増えると、限界費用がほぼゼロの電源が市場に大量投入されるため、
          需給バランスが緩み価格が下落します。これは理論通りの動きですが、東京エリア35,501コマの実績データでも
          相関係数 <strong>r=−0.46</strong> という中程度以上の逆相関として統計的に確認されています。
          再エネ比率が1%上がるごとに市場価格は約0.19円/kWh低下する関係がデータから読み取れます。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          ただし相関係数が−1に近くないのは、需要水準・季節・気温・火力の稼働状況など、
          再エネ比率以外の変数も価格に影響しているためです。特に冬の高需要期には再エネ比率が低い時間帯でも
          需給逼迫が重なり価格スパイクが生じます。
        </p>
      </section>

      {/* チャート1: 再エネ比率帯別価格バーチャート */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">再エネ比率帯別の平均スポット価格</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          横軸は再エネ供給比率の帯（8段階）、縦軸は各帯での平均JEPXスポット価格（円/kWh）。
          高価格帯は赤、低価格帯は緑で表示しています。
        </p>
        <div className="mt-4">
          <RenSharePriceBarChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: 東京エリア30分値データ 35,501コマ（JEPX・OCCTOデータより集計）
        </p>
      </section>

      {/* 再エネ比率帯別の詳細テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">再エネ比率帯別の詳細分析</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          各比率帯のコマ数（サンプル数）と平均価格の一覧です。コマ数が多い帯ほど発生頻度が高いことを意味します。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">再エネ比率帯</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均価格（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">コマ数</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">全体比率</th>
              </tr>
            </thead>
            <tbody>
              {REN_SHARE_LABELS.map((label, i) => {
                const totalCount = REN_SHARE_COUNT.reduce((a, b) => a + b, 0);
                const ratio = ((REN_SHARE_COUNT[i] / totalCount) * 100).toFixed(1);
                const isHighPrice = REN_SHARE_PRICE[i] >= 14;
                const isLowPrice = REN_SHARE_PRICE[i] <= 7;
                return (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium">{label}</td>
                    <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${isHighPrice ? "text-red-600" : isLowPrice ? "text-green-700" : "text-slate-700"}`}>
                      {REN_SHARE_PRICE[i].toFixed(2)}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">
                      {REN_SHARE_COUNT[i].toLocaleString()}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-500">
                      {ratio}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          全コマの約56%が再エネ比率0〜10%の低帯に集中しており、
          40%超の高再エネ比率は全体の約6%に過ぎません。現状ではまだ「昼間の高再エネ時間帯」は限られていますが、
          太陽光の普及拡大とともにこの構成は変わっていきます。
        </p>
      </section>

      {/* チャート2: 時間帯別の再エネ比率と価格 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">時間帯別の再エネ比率（緑）と価格（赤）の逆相関パターン</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          左軸が再エネ比率（%）、右軸がJEPXスポット価格（円/kWh）。昼間に再エネ比率が高まり価格が下がり、
          夕方に再エネが減退して価格が急騰する「逆位相」が視覚的に確認できます。
        </p>
        <div className="mt-4">
          <RenHourlyDualAxisChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: 東京エリア時間帯別平均値（30分値を1時間単位に集計）
        </p>
      </section>

      {/* 時間帯別パターンの解説 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">時間帯別パターン：昼の再エネ増→価格低下、夕方の再エネ減→価格急騰</h2>
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">昼</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">12時：再エネ比率34.1% → 価格10.29円/kWh</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                太陽光発電がピークを迎える昼間は、限界費用ゼロの電源が大量に市場へ入ってきます。
                火力発電所の稼働を抑制しても供給が賄えるため、市場価格は1日の最低水準付近になります。
                1日平均（約13円）と比べて20%以上安い時間帯です。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">夕</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">18時：再エネ比率6.1% → 価格17.16円/kWh</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                太陽光が沈み込み、業務用・家庭用の夕方需要が重なる18時前後は、
                高コストな火力発電所が限界電源として市場を支えます。
                価格は12時と比べて67%高く、市場連動型プランを契約している法人には直撃します。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-500 text-sm font-bold text-white">夜</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">深夜〜早朝：再エネ6〜7%で価格11〜12円/kWhに安定</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                深夜は需要が減少し、原子力・水力・ベース火力が安定供給します。
                再エネ比率は低いものの、価格は夕方よりずっと安定しています。
                需要の少なさが価格安定に大きく貢献している時間帯です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ダックカーブとの関連 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ダックカーブとの関連</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          時間帯別の再エネ比率と価格のパターンは、
          <Link href="/duck-curve-electricity-price-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ダックカーブ</Link>
          と表裏一体の関係にあります。ダックカーブはネット需要（総需要から再エネを差し引いた残余需要）が
          昼間に落ち込み夕方に急上昇するグラフですが、これはそのまま「昼間は再エネ比率が高く価格が低い、
          夕方は再エネ比率が低く価格が高い」という価格パターンの裏返しです。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          太陽光の普及が進むほどダックカーブは深まり、昼間の再エネ比率はさらに上昇、
          夕方の価格スパイクはより急峻になる傾向があります。
          この構造は今後も継続・拡大することが予想されます。
        </p>
      </section>

      {/* 40%超の閾値効果 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">40%超で価格が急落する「閾値効果」</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          テーブルを見ると、30〜40%帯の10.61円から40%超の6.49円へ、わずか1帯の上昇で価格が<strong>4.12円（39%）急落</strong>しています。
          これは30〜40%帯ではまだ火力発電がフレキシブルに調整役として残っているのに対し、
          40%を超えると火力の最低出力制約に近づき、市場参加者が「これ以上価格は下げられない」
          ギリギリの水準で入札するためと考えられます。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          この閾値を超える状況では、ゼロ円・マイナス価格が発生する時間帯とも重なります。
          九州エリアなど再エネ比率が既に50〜60%を超える地域では、この現象がより頻繁に起きています。
        </p>
      </section>

      {/* 法人への影響 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人への影響：市場連動型プランは「いつ使うか」で大差</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">昼間稼働型ビジネスは有利</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              製造業・工場など、昼間に生産ラインを集中させられる企業は
              市場連動型プランで昼間の安い電力（10〜11円帯）を活用できます。
              太陽光のある工場では自家消費との組み合わせで更なるコスト削減も可能です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">夕方需要が多い業種はリスク大</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              飲食・小売・オフィスのように17〜20時の電力使用量が多い業種では、
              市場連動型プランの夕方高騰が電気代を押し上げます。
              固定単価型への切り替え、または夕方の省エネ・デマンド制御が有効です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">24時間稼働の施設</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              病院・ホテル・データセンターなど24時間稼働の施設は時間帯シフトが困難です。
              昼夜の価格差を吸収するバッファとして蓄電池の導入検討が有益です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">EV・充電設備の運用</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              EVフリート・充電スタンドを運営する企業は充電時間を昼間にシフトすることで、
              再エネ比率の高い低価格電力を活用できます。スマート充電管理との組み合わせが効果的です。
            </p>
          </div>
        </div>
      </section>

      {/* 蓄電池のアービトラージ機会 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">蓄電池のアービトラージ機会</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          昼間（12時前後）の約10円と夕方（18時前後）の約17円という価格差は、
          蓄電池によるアービトラージ（価格差売買）の経済的根拠になります。
          1kWhあたりの価格差が約7円あり、1日あたりの充放電で利益を生み出せる構造です。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          再エネ普及がさらに進み昼間価格が5円を下回る日が増えれば、蓄電池の価格差は拡大し
          投資回収期間が短縮されます。太陽光発電との組み合わせ（自家消費＋余剰を蓄電）により
          経済効果をさらに高めることが可能です。
        </p>
      </section>

      {/* 今後の展望 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">今後の展望：再エネ比率上昇で昼間はさらに安く、夕方スパイクリスク拡大</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2030年に向けて日本政府は再エネ比率36〜38%の目標を掲げており、
          太陽光・洋上風力の大幅拡大が見込まれます。このシナリオが実現すると以下の変化が予想されます。
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
          <li className="flex gap-2"><span className="mt-1 text-green-700">▼</span><span>昼間（10〜14時）のJEPX価格はさらに低下し、ゼロ円・マイナス価格の頻度が増加</span></li>
          <li className="flex gap-2"><span className="mt-1 text-red-600">▲</span><span>夕方（17〜20時）の需給逼迫がより急峻になり、価格スパイクのリスクが拡大</span></li>
          <li className="flex gap-2"><span className="mt-1 text-sky-700">→</span><span>昼夜・昼夕の価格差が拡大し、蓄電池・需要シフトの経済価値が高まる</span></li>
          <li className="flex gap-2"><span className="mt-1 text-sky-700">→</span><span>市場連動型プランの「時間帯リスク」管理がより重要になる</span></li>
        </ul>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          「再エネが増えると電気が安くなる」というのは昼間限定の話であり、
          夕方・冬期のリスクは同時に拡大する点を見落とさないようにする必要があります。
        </p>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/duck-curve-electricity-price-impact",
              title: "ダックカーブとは何か",
              description: "昼と夕方で電力市場価格が変わる理由をネット需要データで解説。",
            },
            {
              href: "/demand-decile-price-risk",
              title: "需要デシル別の価格リスク分析",
              description: "需要が上位10%に入ると価格は2.6倍。需要水準と価格リスクの関係。",
            },
            {
              href: "/zero-price-hours-analysis",
              title: "ゼロ円・マイナス価格の実態",
              description: "再エネ余剰が引き起こす異常値の発生パターンと法人への影響。",
            },
            {
              href: "/area-price-spread",
              title: "エリア間の価格差",
              description: "東京・関西・九州のスポット価格差の実態。",
            },
            {
              href: "/battery-electricity-cost-benefit",
              title: "蓄電池の電気料金対策効果",
              description: "昼夕の価格差を利用した蓄電池アービトラージの経済性。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再生可能エネルギー賦課金の仕組み",
              description: "再エネ普及を支える賦課金の仕組みと法人負担額。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の時間帯別リスクを診断する"
          description="市場連動型プランの場合、昼間と夕方でコストが大きく変わります。シミュレーターで自社の電気料金リスクを確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "電力市場の解説記事一覧" },
          ]}
        />
      </div>
    </main>
  );
}
