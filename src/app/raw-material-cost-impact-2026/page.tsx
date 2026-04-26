import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "【2026年版】原材料コスト上昇シリーズ｜法人の調達リスク完全マップ";
const pageDescription =
  "2026 年の法人調達担当者向けに、原材料・包装資材・プラスチック樹脂・非鉄金属・化学品の価格動向と調達戦略を集約した完全マップ。ナフサ不足から非鉄金属高騰、業界別影響度マトリクスと 3 つの調達戦略まで網羅。";
const publishedDate = "2026-04-25";
const pageUrl = "https://simulator.eic-jp.org/raw-material-cost-impact-2026";

const SERIES_LINKS: { href: string; title: string; description: string }[] = [
  {
    href: "/special/materials-packaging-scenario-analysis/naphtha-petrochemical",
    title: "ナフサ不足とエチレン減産の構造",
    description:
      "中東情勢と原油価格に連動するナフサ不足、エチレン減産が川下の樹脂・包装・容器コストに波及するメカニズムを構造的に整理。",
  },
  {
    href: "/special/materials-packaging-scenario-analysis/plastic-resin",
    title: "PE / PP / PET / PVC の価格動向",
    description:
      "プラスチック樹脂 4 種の 2024〜2026 年価格推移と需給バランス、食品・日用品・医薬品メーカーが直面する仕入れコスト上昇の実態を解説。",
  },
  {
    href: "/special/materials-packaging-scenario-analysis/non-ferrous-metals",
    title: "アルミ・銅・亜鉛の価格動向",
    description:
      "電力・建設・電子機器に直結する非鉄 3 金属の LME 価格推移と、円安や中国需要の影響を踏まえた製造業の調達戦略を整理。",
  },
  {
    href: "/special/materials-packaging-scenario-analysis/packaging",
    title: "段ボール・フィルム・容器トレーの値上げ分析",
    description:
      "EC 拡大と古紙不足、プラスチックフィルム原料高騰が同時進行する包装資材市場の値上げ要因と、食品・物流業界への影響を分析。",
  },
  {
    href: "/special/materials-packaging-scenario-analysis/chemicals",
    title: "溶剤・接着剤・塗料・界面活性剤の動向",
    description:
      "化学品市場の地政学リスクと供給制約を踏まえ、塗料・接着剤・界面活性剤を扱う日用品・建材・電子部品業界のコスト圧力を整理。",
  },
];

const INDUSTRY_IMPACT_ROWS: { industry: string; impactLevel: string; primaryItems: string; impactNote: string }[] = [
  {
    industry: "食品・飲料メーカー",
    impactLevel: "🔴 大",
    primaryItems: "PET / 包装フィルム / 段ボール / 食用油",
    impactNote: "包装資材と原材料両面で 5〜15% のコスト上昇、価格転嫁が消費者直結で慎重判断が必要",
  },
  {
    industry: "日用品・化粧品メーカー",
    impactLevel: "🔴 大",
    primaryItems: "PE / PP / 界面活性剤 / 香料",
    impactNote: "プラスチック容器と化学品の両方が高騰、ブランド価格戦略との両立が経営課題",
  },
  {
    industry: "電子部品・半導体製造",
    impactLevel: "🟡 中",
    primaryItems: "銅 / アルミ / 接着剤 / 樹脂材料",
    impactNote: "非鉄金属高と化学品高が複合的に作用、設備投資判断と長期契約の見直しが進行中",
  },
  {
    industry: "建設・建材業",
    impactLevel: "🟡 中",
    primaryItems: "アルミ / 鋼材 / 塗料 / 接着剤",
    impactNote: "工事原価の 30% を占める材料費が高止まり、見積有効期限の短縮で対応中",
  },
  {
    industry: "EC・物流業",
    impactLevel: "🟡 中",
    primaryItems: "段ボール / 緩衝材 / 配送資材",
    impactNote: "包装資材コストが配送原価を押し上げ、梱包簡素化と再利用包装の導入が加速",
  },
  {
    industry: "化学・素材メーカー",
    impactLevel: "🟢 小〜中",
    primaryItems: "ナフサ / 原油 / 触媒",
    impactNote: "上流側でコスト転嫁可能だが、下流顧客の交渉力次第で利益率に影響",
  },
];

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "原材料コスト上昇の動向はどこで継続的に確認できますか？",
    answer:
      "プラスチック樹脂は経産省「化学工業統計」、非鉄金属は LME 価格指標、包装資材は日本製紙連合会と日本フレキシブル包装協会の月次統計で確認できます。本サイトの個別記事では各指標の動向を解説しているため、シリーズ全体を定期的に巡回することで包括的な状況把握が可能です。",
  },
  {
    question: "原材料高騰が電気料金にどう影響しますか？",
    answer:
      "原材料高は直接的な電気料金影響はありませんが、化学プラント・製紙工場・電炉などエネルギー多消費型製造業のコスト構造を圧迫します。これらの製造業からの中間財を仕入れる下流企業にも波及し、最終的に法人電気料金の節約だけでは吸収しきれないコスト上昇圧力となります。",
  },
  {
    question: "中小企業でも原材料リスクの管理は必要ですか？",
    answer:
      "必要です。特に食品・日用品・建設関連の中小企業では、原材料が原価の 20〜40% を占めるため、月次 5% の上昇でも利益率を直撃します。少数のサプライヤーに依存している場合は、第二・第三仕入れ先の確保と価格交渉余地の見極めが不可欠です。",
  },
  {
    question: "原材料高に対する法人の調達戦略は何が有効ですか？",
    answer:
      "（1）長期契約とスポット契約の比率最適化、（2）複数地域からのソーシング多元化、（3）代替材・リサイクル材の導入検討、の 3 軸が代表的です。本ページの「法人がとるべき調達戦略 3 つ」セクションでさらに詳しく解説しています。",
  },
  {
    question: "原材料リスクと電力リスクは独立して対策すべきですか？",
    answer:
      "両者は相関しています。原油・天然ガス価格は化学原料と発電燃料の両方を構成するため、地政学リスクが顕在化するタイミングは原材料と電気料金が同時に高騰します。原材料 BCP と電力 BCP は「エネルギー BCP」として一体的に設計するのが効率的です。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "原材料 価格 2026",
    "原材料 高騰 法人",
    "包装資材 価格 上昇",
    "プラスチック樹脂 価格動向",
    "アルミ 銅 価格 2026",
    "ナフサ エチレン 減産",
    "調達戦略 法人",
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

export default function RawMaterialCostImpact2026Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "リスクシナリオ別に知る", url: "https://simulator.eic-jp.org/articles/risk-scenarios" },
          { name: "原材料コスト上昇シリーズ" },
        ]}
      />
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        dateModified={publishedDate}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "リスクシナリオ別に知る", url: "https://simulator.eic-jp.org/articles/risk-scenarios" },
          { name: "原材料コスト上昇シリーズ" },
        ]}
        faq={FAQ_ITEMS}
      />

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">リスクシナリオ別に知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2026 年の法人調達担当者が直面する原材料・包装資材・プラスチック樹脂・非鉄金属・化学品の価格動向を、5 本のシリーズ記事で網羅した完全マップです。中東情勢、ナフサ・エチレン減産、円安、中国需要を背景に、コスト上昇圧力は構造化しています。本ハブから個別シリーズに進み、自社のリスクと対策を具体化してください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* シリーズ概要 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">シリーズ概要</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            原材料コスト上昇は単一の品目に閉じた問題ではなく、原油・天然ガスから始まり、ナフサ・エチレン → プラスチック樹脂 → 包装資材 → 食品・日用品メーカーへと連鎖します。さらに非鉄金属（アルミ・銅・亜鉛）と化学品（溶剤・接着剤・塗料・界面活性剤）も同時並行で高騰し、業界横断的なコストインパクトを生んでいます。本シリーズでは、これらを 5 つのテーマに分けて整理し、業界別影響度と調達戦略の指針を提供します。
          </p>
        </section>

        {/* シリーズ全 5 記事 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">シリーズ全 5 記事</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            それぞれの記事で、価格指標・需給バランス・業界別影響・対策を実務目線で解説しています。気になるテーマから読み進めてください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {SERIES_LINKS.map((item) => (
              <article
                key={item.href}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  <Link href={item.href} className="text-sky-700 underline-offset-2 hover:underline">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">
            ※ シリーズの背景となる「有事シナリオ分析」特集トップは{" "}
            <Link
              href="/special/materials-packaging-scenario-analysis"
              className="text-sky-700 underline-offset-2 hover:underline"
            >
              こちら
            </Link>{" "}
            から確認できます。
          </p>
        </section>

        {/* 業界別影響度マトリクス */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業界別の原材料リスク影響度マトリクス</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            原材料コスト上昇の影響度は業界によって大きく異なります。仕入れる主要品目とそのコスト構成比率に応じて、リスクと対策の優先順位を判断する起点として活用してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-100 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-900">業界</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">影響度</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">主な品目</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">影響の特徴</th>
                </tr>
              </thead>
              <tbody>
                {INDUSTRY_IMPACT_ROWS.map((row) => (
                  <tr key={row.industry} className="border-b border-slate-200">
                    <td className="px-3 py-2 font-medium text-slate-900">{row.industry}</td>
                    <td className="px-3 py-2 font-semibold">{row.impactLevel}</td>
                    <td className="px-3 py-2 text-slate-700">{row.primaryItems}</td>
                    <td className="px-3 py-2 text-slate-700">{row.impactNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 法人がとるべき調達戦略 3 つ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人がとるべき調達戦略 3 つ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            原材料コスト上昇への対応は、短期的な価格交渉だけでは限界があります。中長期視点で以下の 3 戦略を組み合わせ、構造的にリスクを下げることが重要です。
          </p>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">A. 長期契約とスポット契約の比率最適化</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              長期契約は価格安定と数量確保のメリットがあるため、ベース需要分は 60〜70% を長期契約で確保し、需要変動分はスポットで吸収する設計が一般的です。原材料種別ごとに最適比率は異なるため、過去 3 年の購入実績データから自社の最適点を算出します。あまりに長期に固定すると下落局面で機会損失となるため、契約期間は 1〜3 年程度に設定するケースが増えています。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">B. 複数地域からのソーシング多元化</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              中東依存（原油・ナフサ）、中国依存（非鉄金属・化学品）、東南アジア依存（包装資材）など、地政学リスクが集中する単一地域ソーシングを避け、北米・欧州・南米・国内サプライヤーを組み合わせます。BCP 観点でも複数地域の代替供給先確保は不可欠で、新規サプライヤーの認定と取引立ち上げに 6〜12 か月かかるため、地政学リスクが顕在化する前から準備が必要です。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">C. 代替材・リサイクル材の導入検討</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              プラスチック樹脂のバイオマス代替、段ボールの再生紙比率向上、非鉄金属のリサイクル材活用など、環境価値とコスト安定性を両立する代替材導入が選択肢として有力化しています。導入には品質試験・ライン調整・顧客承認が必要で、3〜6 か月のリードタイムが標準ですが、SBT・GX 関連の脱炭素目標達成にも貢献するため、調達と CSR の両戦略を統合できます。
            </p>
          </div>
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
            { href: "/", title: "電気料金上昇リスク診断", description: "30 秒で自社のリスクスコアと年間影響額を試算できます。" },
            { href: "/electricity-vs-other-business-costs", title: "電気料金と他のコスト要因の比較", description: "原材料・人件費・物流費との相対比較で経営インパクトを整理。" },
            { href: "/electricity-bcp-for-corporates", title: "電力 BCP とは", description: "原材料 BCP と一体で設計するエネルギー BCP の電力面を解説。" },
            { href: "/special/emergency-scenario-analysis", title: "有事シナリオ分析特集", description: "原材料・電力・物流の地政学リスクを横断的に分析。" },
            { href: "/special/materials-packaging-scenario-analysis", title: "原材料・包装資材の有事シナリオ分析（特集トップ）", description: "本ハブの背景となる詳細特集ページ群への入口。" },
            { href: "/duck-curve-corporate-impact", title: "ダックカーブが法人に与える影響", description: "電力サイドのリスクとして同時並行で進む構造変化を整理。" },
          ]}
        />
      </div>

      {/* AuthorBadge */}
      <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="原材料リスクと電力リスクは相関します。シミュレーターで電力サイドのリスクを定量化し、原材料調達戦略と統合した経営判断につなげましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/risk-scenarios", label: "リスクシナリオ記事を読む" },
          ]}
        />
      </div>
    </main>
  );
}
