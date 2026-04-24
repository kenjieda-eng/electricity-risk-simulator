import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import { ArticleJsonLd, BreadcrumbJsonLd } from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

// --- 定数 ---
const pageTitle =
  "デマンドレスポンス（DR）で収益を得る方法｜法人向けネガワット・アグリゲーター活用ガイド";
const pageDescription =
  "電力のデマンドレスポンス（DR）を「コスト削減」ではなく「収益源」として扱う法人向けガイド。ネガワット取引の仕組み、アグリゲーターとの契約パターン、収益規模とROI、参入時の注意点を実務レベルで解説。";
const pageUrl =
  "https://simulator.eic-jp.org/demand-response-revenue-model";
const publishedDate = "2026-04-27";

// FAQ（FAQPage 構造化データ対応）
const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "デマンドレスポンス（DR）とは何ですか？",
    answer:
      "デマンドレスポンス（Demand Response, DR）は、電力需要のピーク時などに電力会社・アグリゲーターからの指令に応じて需要家が電力使用を抑制・シフトし、その対価として報酬を受け取る仕組みです。抑制した電力量は「ネガワット」と呼ばれ、容量市場・需給調整市場で売買されます。従来の省エネと異なり、能動的に収益を得るビジネスモデルです。",
  },
  {
    question: "DRで得られる収益はどれくらいですか？業種別の相場は？",
    answer:
      "2026〜2027年度水準のベースケース（容量市場発動指令電源 + 三次調整力② の組み合わせ）では、業種別に以下のレンジが目安です。データセンター：5,000〜12,000円/kW/年、製造業（連続稼働）：2,500〜6,000円/kW/年、製造業（日中稼働）：3,000〜8,000円/kW/年、商業施設・小売：2,500〜5,000円/kW/年、倉庫・物流：3,000〜7,000円/kW/年。2028年度以降は容量市場単価の最大2.8倍化で上振れ可能性があります。",
  },
  {
    question: "アグリゲーターとはどのような事業者ですか？",
    answer:
      "アグリゲーターは複数の需要家の分散した需要抑制ポテンシャルを束ねて、電力会社や市場に供給する事業者です。需要家は単独で容量市場や需給調整市場に参加するのが困難なため、アグリゲーター経由で参加するのが一般的です。主要アグリゲーターには、東京電力エナジーパートナー、関西電力、エナリス、京セラコミュニケーションシステム、JEPXアグリゲーターなどがあります。",
  },
  {
    question: "DR参入のハードルや注意点は何ですか？",
    answer:
      "主な注意点は以下の通りです。(1) BEMS・計測器の設置が必要（初期投資 50〜300万円規模）、(2) 30分〜数時間の負荷抑制が可能な運用体制、(3) 契約違反時のペナルティリスク、(4) アグリゲーターとの収益配分（一般に需要家60〜80% / アグリゲーター20〜40%）、(5) 容量市場の年度オークション参加スケジュールに従うため、参入タイミングは年1回が基本です。",
  },
  {
    question: "DRの収益ポテンシャルを自社で試算できますか？",
    answer:
      "当サイトの法人向け電気料金シミュレーターおよび DR コスト・ベネフィット計算を組み合わせることで、契約電力・稼働時間帯・停止可能負荷から DR 収益の年間ポテンシャルを可視化できます。容量市場単価や業種別応動性能を反映した収益試算が可能です。",
  },
];

// 業種別収益レンジ
const revenueRows: {
  industry: string;
  capacityRatio: string;
  annualRevenue: string;
  model: string;
}[] = [
  {
    industry: "データセンター",
    capacityRatio: "契約電力の 5〜15%",
    annualRevenue: "5,000〜12,000円/kW/年",
    model: "冷却設備の部分停止、UPS 切替（高速応動可能、kW 単価が最高水準）",
  },
  {
    industry: "製造業（連続稼働）",
    capacityRatio: "契約電力の 2〜5%",
    annualRevenue: "2,500〜6,000円/kW/年",
    model: "非基幹ラインの一時停止（24時間連続稼働のため発動可能 kW が限定的）",
  },
  {
    industry: "製造業（日中稼働）",
    capacityRatio: "契約電力の 10〜20%",
    annualRevenue: "3,000〜8,000円/kW/年",
    model: "空調・照明のピークシフト、非稼働時間帯の活用",
  },
  {
    industry: "商業施設・小売",
    capacityRatio: "契約電力の 5〜10%",
    annualRevenue: "2,500〜5,000円/kW/年",
    model: "空調・照明の部分制御（営業への影響を最小化する設計が必要）",
  },
  {
    industry: "倉庫・物流",
    capacityRatio: "契約電力の 10〜25%",
    annualRevenue: "3,000〜7,000円/kW/年",
    model: "冷凍設備のプレクール、荷役シフト（冷凍倉庫は DR 適性が高い）",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "デマンドレスポンス",
    "DR",
    "ネガワット",
    "アグリゲーター",
    "容量市場 発動指令電源",
    "需給調整市場",
    "三次調整力",
    "DR 収益",
    "法人 電力 収益化",
    "DR ROI",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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

// --- Page Component ---
export default function DemandResponseRevenueModelPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        faq={FAQ_ITEMS}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          {
            name: "電力調達の仕組みを知る",
            url: "https://simulator.eic-jp.org/articles/power-procurement",
          },
          { name: "デマンドレスポンス（DR）で収益を得る方法" },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          {
            name: "電力調達の仕組みを知る",
            url: "https://simulator.eic-jp.org/articles/power-procurement",
          },
          { name: "デマンドレスポンス（DR）で収益を得る方法" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            電力調達の仕組みを知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            デマンドレスポンス（DR）で収益を得る方法
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドレスポンス（DR）は、電力需要のピーク時に需要家が使用量を下げる仕組みとして、長らく「コスト削減策」として語られてきました。しかし2024年の容量市場本格運用、2025年以降の需給調整市場整備により、DRは
            <strong>市場取引を通じて収益を生む経済活動</strong>
            へと変化しています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            本記事では、DRを収益源として捉える視点で、収益化モデル、業種別の規模感、アグリゲーター活用のパターンを実務レベルで整理します。
          </p>
        </header>

        {/* 本文セクション群 */}
        <section className="mt-6 space-y-6">
          {/* §1 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              DRが「コスト削減」から「収益源」に変わりつつある理由
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              従来のデマンドレスポンスは、電力会社の「ピークカット要請」に応じて需要家が使用量を下げ、その見返りに
              <strong>電気料金の割引</strong>
              を受ける仕組みが主流でした。この時代のDRは請求書上のコスト削減として可視化され、年間数十万〜数百万円規模の効果に留まることが多い運用でした。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              流れが変わったのは、2024年度の容量市場本格運用と、
              <strong>需給調整市場</strong>
              の段階的整備です。これらの市場では、DRによる需要抑制が「発電」と同等の価値として取引され、アグリゲーターを通じて
              <strong>市場取引対価</strong>
              が需要家に還元されるようになりました。加えて、DRの商品化（一次〜三次調整力、容量市場発動指令電源）により、収益源が複線化したことで、規模の大きい需要家ほど
              <strong>年間数百万〜数千万円の収益</strong>
              が見込めるようになっています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2027年度に向けた需給調整市場の全商品整備と合わせ、DRは今後の法人電力戦略における「
              <strong>攻めの選択肢</strong>
              」として再評価する価値があります。特に、容量拠出金や燃料費調整額の上昇で総額が膨張し続ける法人電気料金に対し、「支払う側」だけでなく「受け取る側」の視点を持つことが、エネルギーコストマネジメントの新しい基準になりつつあります。詳しくは{" "}
              <Link
                href="/tariff-revision-calendar-2026"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                制度改定カレンダー 2026-2028
              </Link>{" "}
              で全体像を確認できます。
            </p>
          </section>

          {/* §2 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              DRの収益化モデル 3種類
            </h2>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              モデル1: 需給調整市場（三次調整力①②、一次・二次調整力）
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              電力広域的運営推進機関（OCCTO）が運営する需給調整市場では、周波数調整用の電力（調整力）が商品として取引されています。2024年度から
              <strong>三次調整力①②</strong>
              が本格運用され、2025年度以降に
              <strong>一次・二次調整力</strong>
              も整備が進んでいます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              需要家側のDRは、主にアグリゲーターを経由して三次調整力②（応動時間 45分）に参加するパターンが一般的です。応札された kW 量に対して
              <strong>kW 価値（容量対価）+ kWh 価値（発動対価）</strong>
              が支払われ、発動が少ない商品でも基本的な kW 価値の収益が発生します。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              モデル2: 容量市場発動指令電源
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              2024年度から本格運用されている容量市場には、発電所だけでなく
              <strong>発動指令電源（DRリソース）</strong>
              としての応札枠があります。ここに参加する需要家は、オークションで落札された kW 単価（容量単価）をベースに、年間を通じた kW 収益を得られます。発動頻度は年間数回程度と限定的で、需要家の本業への影響が比較的小さい商品として位置付けられています。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              モデル3: アグリゲーター経由のネガワット取引
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              直接市場に応札せず、
              <strong>アグリゲーターと相対契約</strong>
              を結んで参加するパターンが、多くの法人需要家にとって現実的な選択肢です。アグリゲーターが複数の需要家を束ねて市場応札し、得られた収益を契約条件に従って需要家に分配します。需要家側は計量環境の整備と発動時の対応手順を守れば、市場参加の手続きはアグリゲーターに委ねられます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              この3モデルは排他ではなく、
              <strong>同一需要家が複数モデルに参加</strong>
              することで収益を多角化できます。アグリゲーターが市場を横断して最適配分するサービスを提供しているケースも増えており、需要家側は「どの市場に」ではなく「どのアグリゲーターと」を検討する時代になっています。
            </p>
          </section>

          {/* §3 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              収益の規模感（業種別シミュレーション）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR収益の規模は、
              <strong>発動可能な kW 量</strong>と
              <strong>参加する市場商品の性格</strong>
              で決まります。同じ kW を提供しても、低速応動で年10回前後しか発動しない商品（容量市場発動指令電源など）と、秒〜分オーダーの応動が求められる商品（二次調整力②など）では、kW あたりの対価が数倍変わります。以下は主要業種の kW あたり年間収益の想定レンジです（
              <strong>
                容量市場発動指令電源 + 三次調整力② を想定したベースケース
              </strong>
              、2026〜2027年度水準）。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                      業種
                    </th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                      発動可能 kW の目安
                    </th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                      kW あたり年間収益レンジ
                    </th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                      年間収益モデル
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {revenueRows.map((row, idx) => (
                    <tr key={idx} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                        {row.industry}
                      </td>
                      <td className="border-b border-slate-200 px-3 py-2 whitespace-nowrap">
                        {row.capacityRatio}
                      </td>
                      <td className="border-b border-slate-200 px-3 py-2 font-semibold text-slate-900 whitespace-nowrap">
                        {row.annualRevenue}
                      </td>
                      <td className="border-b border-slate-200 px-3 py-2">
                        {row.model}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 上記レンジは2026〜2027年度水準の参考値。容量市場の単価上昇（2027年度
              +50%、2028年度 首都圏
              +180%）や需給調整市場商品の整備進捗により、
              <strong>2028年度以降はさらに上振れする可能性が高い</strong>
              です。アグリゲーターとの契約条件、応答性能、発動実績により実額は変動します。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              たとえば契約電力 5,000 kW のデータセンターが、発動可能 kW 500（10%）をアグリゲーター経由で市場参加させた場合、kW あたり年間収益を仮に 6,000円/kW（レンジ中央）とすれば、
              <strong>年間300万円の収益</strong>
              が発生します。発動頻度が高い商品に参加すれば、kWh 価値の収益（発動対価）も上乗せされます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              重要なのは、これらの収益が
              <strong>本業を停止せずに得られる</strong>
              点です。空調の微調整、ピーク時の照明一部消灯、冷凍倉庫のプレクール活用など、適切な設計下では業務への影響を最小化しながら収益化できます。自社の業務特性に合うDRの設計については{" "}
              <Link
                href="/demand-response-suited-corporations"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                DR向き企業の特徴
              </Link>{" "}
              も参考になります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              また、発動頻度が低い商品（容量市場発動指令電源や三次調整力②など）を選べば、本業影響をさらに抑えながら基本収益を確保できます。年間10回前後の発動指令に対応できる体制さえあれば、残る355日は通常運用のまま kW 価値の対価を受け取れるため、
              <strong>設備投資のROIが想定以上に早まる</strong>
              ケースもあります。
            </p>
          </section>

          {/* §4 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              アグリゲーターとの契約パターンと分配比率
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              アグリゲーター契約では、需要家とアグリゲーターの間で収益の
              <strong>分配比率</strong>
              を取り決めます。一般的には市場で得られた対価のうち、
              <strong>需要家が 60〜70%</strong>、
              <strong>アグリゲーターが 30〜40%</strong>
              の範囲で分配するケースが多く見られます。ただし、業種・契約規模・応答性能（発動可能 kW の正確度）により上下します。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約パターンは以下の3種類が典型的です。
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                <strong>kW 確保型</strong>: 応札 kW
                量に応じて基本収益を保証。発動回数は年間指定回以内に制限。
              </li>
              <li>
                <strong>成功報酬型</strong>:
                発動時の実績に応じて収益が変動。基本収益は低め、発動成功時に高単価。
              </li>
              <li>
                <strong>ハイブリッド型</strong>: kW
                確保分で基本収益を確保しつつ、発動成功時に上乗せ収益。
              </li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              また、分配比率以外にも
              <strong>発動失敗時のペナルティ</strong>（後述）、
              <strong>発動回数の上限・下限</strong>、
              <strong>契約期間</strong>
              （1〜3年が主流）が重要な契約論点です。相見積もりで
              2〜3社を比較する際は、表面的な分配比率だけでなく、ペナルティ条項と実績データを合わせて評価することが推奨されます。
            </p>
          </section>

          {/* §5 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              参入の実務ステップ（4段階）
            </h2>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              ステップ1: 需要側設備の発動可能性調査
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              まず自社の電力使用パターンを把握し、どの設備が
              <strong>何 kW・何分間停止できるか</strong>
              を洗い出します。BEMS / FEMS
              のデータがあれば、日内・週内・季節別の需要プロファイルを確認し、発動可能な時間帯と
              kW 量を整理します。この段階で、
              <strong>本業への影響が最小な候補設備</strong>
              （空調、照明、冷凍庫、非基幹ライン）を優先的にリストアップします。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              ステップ2: 計量環境の整備
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              市場参加のためには、
              <strong>30分値計量データ</strong>のリアルタイム取得と
              <strong>遠隔制御機能</strong>が必要になります。既存の BEMS / FEMS
              で要件を満たせない場合、追加投資が発生することがあります。スマートメータが設置済みで小売事業者から
              30分値データを取得できれば、追加投資を抑えられるケースもあります。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              ステップ3: アグリゲーター選定
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              2〜3社から相見積もりを取り、分配比率、ペナルティ条項、発動回数、契約期間を比較します。アグリゲーターの
              <strong>市場応札実績</strong>と
              <strong>需要家への分配実績</strong>
              を確認することで、表面的な条件だけで判断しない慎重な選定ができます。契約期間は初年度は1年契約で様子を見る、というアプローチも有効です。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              ステップ4: 運用開始と継続改善
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              契約後は、発動指令の受信から応答完了までの手順を関係部署で共有し、
              <strong>発動訓練</strong>
              を定期的に実施します。初年度の運用データから、発動可能 kW
              の見直し、追加設備の組み込み、契約条件の再交渉（2年目以降）を進めることで、収益を段階的に拡大できます。
            </p>
          </section>

          {/* §6 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              参入時のリスクと注意点
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR参入には2つの主要リスクがあります。
            </p>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              リスク1: 発動失敗時のペナルティ
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              市場取引である以上、
              <strong>発動指令に応答できなかった場合はペナルティ</strong>
              が発生します。契約により、kW
              価値の一部返還、成功報酬の削減、場合によってはアグリゲーター契約の見直しに発展することもあります。特に、想定していた設備停止が本業の繁忙期と重なった場合や、設備故障で遠隔制御が機能しない場合のリスクが高まります。
              <strong>余裕を持った発動可能 kW 申告</strong>
              （実力の 70〜80% 程度）が、ペナルティ回避の実務的な対策です。
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              リスク2: 本業への影響
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              DR による設備制御が
              <strong>本業の品質や安全性に影響する</strong>
              ケースは想定外に発生します。たとえば、データセンターで冷却が想定以上に下がった場合、倉庫の冷凍温度が許容範囲を超えた場合など。設備停止のシナリオを事前にシミュレートし、
              <strong>安全マージンを確保した発動計画</strong>
              を立てることが重要です。
            </p>
          </section>

          {/* §7 */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DRは「コスト削減策」から「収益源」へと位置付けが変わりつつあります。収益規模は契約電力と業種特性により大きく異なりますが、適切に設計すれば
              <strong>本業を止めずに年間数百万〜数千万円</strong>
              の収益が見込める領域です。2027年度にかけての需給調整市場の整備、容量市場の定着により、この収益機会はさらに拡大する見通しです。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              一方で、発動失敗時のペナルティや本業影響のリスクも存在します。参入判断は、自社の電力使用パターンの分析から始め、アグリゲーター複数社との相見積もり、段階的な契約規模の拡大という慎重なアプローチが推奨されます。DRのコスト削減側も併せて検討したい場合は{" "}
              <Link
                href="/demand-response-cost-benefit"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                DRのコスト削減効果
              </Link>{" "}
              をご参照ください。
            </p>
          </section>
        </section>

        {/* RelatedLinks */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連記事"
            intro="DRと電力調達の関連論点を深く読む"
            links={[
              {
                href: "/demand-response-cost-benefit",
                title: "DRのコスト削減効果",
                description: "DRを「コスト削減」側から捉えた時の効果試算と参入判断。",
              },
              {
                href: "/demand-response-suited-corporations",
                title: "DR向き企業の特徴",
                description:
                  "業種・業務特性から見たDR適合度のチェックリスト。",
              },
              {
                href: "/capacity-contribution-simulation",
                title: "容量拠出金シミュレーション",
                description:
                  "容量市場との関係、DR参加時の拠出金負担の考え方。",
              },
              {
                href: "/how-procurement-affects-corporate-rates",
                title: "調達構成の違いが法人料金にどう影響するか",
                description:
                  "DRと市場参加を踏まえた調達戦略の全体像。",
              },
              {
                href: "/tariff-revision-calendar-2026",
                title: "2026〜2028年 制度改定カレンダー",
                description:
                  "容量市場・需給調整市場の整備スケジュールと法人電気料金への影響。",
              },
            ]}
          />
        </div>

        {/* FAQ */}
        <MarketDataFaq heading="よくある質問（デマンドレスポンスと収益モデル）" items={FAQ_ITEMS} />

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="DR参入の収益性を試算する"
            description="契約電力・稼働時間帯・停止可能負荷から、DR収益の年間ポテンシャルを可視化できます。"
            links={[
              { href: "/", label: "シミュレーターで試算する" },
              {
                href: "/demand-response-cost-benefit",
                label: "DRのコスト削減側も読む",
              },
            ]}
          />
        </div>

        {/* ContactCtaCard */}
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="DR参入検討、アグリゲーター選定から収益試算まで支援します"
            description="業種特性に合わせたDR参入可否診断と収益モデル設計を、当社エネルギー専門家がサポートします。"
          />
        </div>

        {/* Author Badge */}
        <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />
      </main>
    </>
  );
}
