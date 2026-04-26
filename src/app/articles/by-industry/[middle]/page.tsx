import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getIndustryArticleHref,
  getIndustryMiddleCategories,
  getIndustryMiddleCategory,
} from "../../../../lib/articleIndustryCategories";
import CategoryNextStepCta from "../../../../components/simulator/CategoryNextStepCta";
import { BreadcrumbJsonLd } from "../../../../components/seo/JsonLd";

type CategoryEnrichment = {
  electricityFeatures: { heading: string; body: string }[];
  recentTrends: string;
};

const CATEGORY_ENRICHMENT: Record<string, CategoryEnrichment> = {
  commercial: {
    electricityFeatures: [
      {
        heading: "冷蔵・冷凍設備の常時稼働がベースロードを押し上げる",
        body: "スーパーやコンビニ、ドラッグストアなど食品や医薬品を扱う商業施設は、冷蔵・冷凍ショーケースが24時間稼働するため夜間の使用量も大きく落ちません。一般的なオフィスと比べて夜間電力比率が 30〜50% 高くなる傾向があり、燃調費上昇時の影響を受けやすい構造です。",
      },
      {
        heading: "営業時間連動の需要パターンと夕方ピーク",
        body: "百貨店・モール・ファストフードなどは営業時間に合わせて空調と照明が同時に稼働し、夕方の集客時間帯にピークを形成します。市場連動プラン契約の場合、JEPX 価格が高騰しやすい 17〜19 時の単価がそのまま請求額に転嫁されるリスクが大きい業種です。",
      },
      {
        heading: "多店舗チェーン特有の契約管理コスト",
        body: "チェーン展開する商業施設は店舗ごとに電圧区分・契約電力・契約電気事業者がばらつきやすく、本部での一括把握と最適化が難しいケースが目立ちます。一括見積と個別見積の使い分けが、削減効果と運用負担のバランスに直結します。",
      },
    ],
    recentTrends:
      "2024〜2026 年は燃料費調整額の高止まりに加え、冷凍冷蔵設備の電力単価増が利益率を圧迫しています。一方で、補助金活用による冷凍機更新・LED 化、ベースロード型自家消費 PPA の導入、深夜帯の蓄電池充放電による昼ピーク削減など、商業施設に親和性の高い新たな対策メニューが揃いつつあります。多店舗本部による一括契約再交渉も主流化しています。",
  },
  "medical-welfare": {
    electricityFeatures: [
      {
        heading: "24 時間 365 日の医療・介護機器が止められない",
        body: "病院・診療所・介護施設は人命と健康を支える設備が常時稼働するため、夜間・休日も含めて電力使用量が落ちにくい業種です。生命維持装置や持続点滴ポンプ、体温管理設備は瞬断も許されず、無停電電源・自家発電を前提とした BCP 計画が不可欠になります。",
      },
      {
        heading: "厨房・給湯・洗濯設備の電化進展",
        body: "近年は IH 厨房・電気給湯器・業務用洗濯乾燥機への更新が進み、ガスから電力への代替が進行しています。介護施設では入浴介助に伴う給湯負荷が日中ピークと重なり、デマンドの押し上げ要因になっています。電化メリットと電力単価上昇のバランスを定期点検する必要があります。",
      },
      {
        heading: "予算制約と公定価格による転嫁の難しさ",
        body: "診療報酬・介護報酬は公定価格のため、電気代上昇分を利用者料金に転嫁しにくい業種です。年度予算で電気代を確実に抑える必要があり、固定価格プランや上限ありの燃調費プランが選ばれやすい傾向があります。補助金制度の活用が経営インパクトを大きく左右します。",
      },
    ],
    recentTrends:
      "2024 年度の介護報酬改定で電気代の運営コスト分は一部補填されましたが、補填幅は実際の上昇額に届かず、施設経営を圧迫し続けています。2025〜2026 年にかけて、医療・福祉施設向けの省エネ設備補助金（環境省・厚生労働省・経済産業省）が拡充傾向で、自家消費 PPA や蓄電池導入を選ぶ法人が増えています。BCP 訓練の電力面強化も同時並行で進んでいます。",
  },
  manufacturing: {
    electricityFeatures: [
      {
        heading: "連続操業型と非連続操業型でコスト構造が分かれる",
        body: "鉄鋼・化学・半導体は 24 時間連続操業でベース負荷が極めて大きく、電気代が原価の 5〜15% を占める業種もあります。一方、自動車組立・印刷・繊維は昼間中心のシフト操業で、デマンド管理と契約電力最適化の余地が大きい構造です。両者で見直しの優先軸が大きく異なります。",
      },
      {
        heading: "ピーク負荷と契約電力の最適化が削減効果に直結",
        body: "シフト操業型製造業では、ライン同時起動時のデマンドが契約電力を決め、その契約電力が基本料金の主要因になります。デマンドコントローラー導入や生産スケジュールの分散化により、契約電力を 10〜20% 削減できた事例が多数あり、年間数百万円単位の固定費削減が可能です。",
      },
      {
        heading: "工場屋根の自家消費太陽光と蓄電池の親和性",
        body: "製造業の工場屋根は太陽光パネル設置に適した広い面積を持ち、自家消費型 PPA の経済性が成立しやすい業種です。蓄電池併設で出力制御リスクを回避でき、デマンドピークカットと BCP 強化を同時に実現できます。FIT 終了後の卒 FIT 設備買い取りも有力な選択肢です。",
      },
    ],
    recentTrends:
      "2025〜2026 年は脱炭素規制強化と GX リーグ参加要件への対応が本格化し、製造業の自家消費 PPA 案件が急増しています。半導体・データセンター需要に伴う電力ひっ迫リスクへの備えとして、需給調整市場（ネガワット取引）への参加事例も拡大中です。電気代上昇局面で工場屋根太陽光の投資回収期間は 7〜9 年に短縮しており、設備投資判断のしやすさが大きく向上しています。",
  },
  "logistics-infrastructure": {
    electricityFeatures: [
      {
        heading: "冷凍冷蔵倉庫の高ベース負荷",
        body: "物流・冷凍倉庫は -25℃ 環境を 24 時間維持する必要があり、ベース負荷が施設全体の電力消費の 60〜80% を占めます。外気温が高い夏季は冷凍機負荷がさらに増し、年間最大デマンドが 7〜9 月に集中する典型的なパターンです。冷凍機更新と運転最適化が削減の最大のテコになります。",
      },
      {
        heading: "上下水道・ポンプ場の安定継続が必須",
        body: "上下水道事業の電力消費はポンプ運転がほぼ全量で、24 時間止められない設備です。停電時にバックアップ自家発電が必要で、再エネ電力購入と CO2 削減目標との整合も求められます。自治体運営事業では入札ベースの調達が多く、契約タイミングと予算化の整合性が重要な業種です。",
      },
      {
        heading: "通信設備・データセンターの 99.99% 稼働要求",
        body: "通信設備とデータセンターは瞬断も許されない業種で、無停電電源と冗長化空調が必須となります。サーバー発熱量に応じた空調負荷が極めて大きく、PUE（電力使用効率）の改善と液冷導入が新潮流。電気代単価の影響を最も大きく受ける業種の一つです。",
      },
    ],
    recentTrends:
      "2025〜2026 年は冷凍倉庫業界で「自然冷媒（CO2・アンモニア）への転換」が進展し、補助金支援も拡充されています。生成 AI ブームに伴うデータセンター電力需要の急増は系統圧迫要因となっており、新規 DC は需給調整市場参加・自家発電併設が前提条件化しています。物流業界では EV 充電インフラ整備と電気代の二重負担が新たな課題として浮上しています。",
  },
  "office-public": {
    electricityFeatures: [
      {
        heading: "平日日中の執務需要が中心",
        body: "オフィス・官公庁・学校は平日 9〜18 時に需要が集中し、夜間・休日に大幅低下する典型的な日中型負荷曲線を持ちます。月間使用量に対する夏冬の空調寄与度が 40〜60% に達し、季節変動の大きさが特徴です。デマンド管理と空調設定温度の調整で大きな削減余地があります。",
      },
      {
        heading: "GIGA スクール・DX 推進による消費増加",
        body: "学校では一人一台端末・大型モニター、官公庁ではクラウド移行に伴うサーバ室空調の増強が進み、近年は電力消費が漸増傾向です。一方、図書館・博物館は空調維持と展示環境保全のため通年でベース負荷が安定しており、施設タイプにより消費パターンが二極化しています。",
      },
      {
        heading: "予算制と入札制度の制約",
        body: "公共施設は単年度予算と入札ルールに縛られ、複数年契約や柔軟な契約変更が難しい業種です。固定価格プランが選ばれやすい反面、市場低迷時に削減機会を逃すジレンマも存在します。共同調達・包括契約による交渉力強化と予算予見性の両立が、近年の調達戦略の主流です。",
      },
    ],
    recentTrends:
      "2025〜2026 年は自治体や教育委員会による電力共同調達（複数施設一括入札）が広がり、燃料費調整額上限ありプランの採用が主流化しています。GIGA スクール 2 期計画の本格化で学校施設の電力需要は緩やかに増加しており、ZEB（ネット・ゼロ・エネルギー・ビル）化への国・自治体補助金が拡充中です。テレワーク継続でオフィスビルでは平日日中需要の伸び悩みが続き、新たな省エネ余地として注目されています。",
  },
};

type PageParams = {
  middle: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

export function generateStaticParams() {
  return getIndustryMiddleCategories().map((category) => ({
    middle: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { middle } = await params;
  const category = getIndustryMiddleCategory(middle);

  if (!category) {
    return {};
  }

  const canonicalPath = `https://simulator.eic-jp.org/articles/by-industry/${category.slug}`;

  return {
    title: category.metadataTitle,
    description: category.metadataDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: category.metadataTitle,
      description: category.metadataDescription,
      url: canonicalPath,
      siteName: "法人電気料金ナビ",
      locale: "ja_JP",
      type: "article",
      images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: category.metadataTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: category.metadataTitle,
      description: category.metadataDescription,
      images: ["/twitter-default.png"],
    },
  };
}

export default async function IndustryMiddlePage({ params }: PageProps) {
  const { middle } = await params;
  const category = getIndustryMiddleCategory(middle);

  if (!category) {
    notFound();
  }

  const enrichment = CATEGORY_ENRICHMENT[category.slug];

  return (
    <>
    <BreadcrumbJsonLd
      items={[
        { name: "ホーム", url: "https://simulator.eic-jp.org/" },
        { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
        { name: "業種別", url: "https://simulator.eic-jp.org/articles/by-industry" },
        { name: category.name },
      ]}
    />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">
          ホーム
        </Link>
        <span className="px-2">›</span>
        <Link href="/articles" className="underline-offset-2 hover:underline">
          解説ページ一覧
        </Link>
        <span className="px-2">›</span>
        <Link href="/articles/by-industry" className="underline-offset-2 hover:underline">
          業種別に知る
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">{category.name}</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-sm text-slate-600">カテゴリ 9 / 業種別に知る</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{category.name}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{category.intro}</p>
      </header>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">この分類の特徴</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {category.features.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">見直しで確認したいポイント</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {category.reviewPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      {enrichment ? (
        <>
          <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">この業種の電気料金 3 つの特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              {category.name}に分類される業種の電気料金構造を、業種横断ではなく「{category.name}固有」の観点で 3 つに整理します。自社の負荷パターン・契約タイプの妥当性を点検する起点として活用してください。
            </p>
            <div className="mt-4 space-y-3">
              {enrichment.electricityFeatures.map((item, idx) => (
                <div
                  key={item.heading}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {idx + 1}. {item.heading}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">最近の業界動向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{enrichment.recentTrends}</p>
            <p className="mt-3 text-xs text-slate-500">※業界動向は概ね年 1 回ペースで更新します。最新の制度動向と整合しない場合は{" "}
              <Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                お問い合わせ
              </Link>
              からご指摘ください。
            </p>
          </section>
        </>
      ) : null}

      <section className="mt-6" aria-labelledby="planned-industries-heading">
        <div className="flex items-end justify-between gap-4">
          <h2 id="planned-industries-heading" className="text-xl font-semibold text-slate-900 sm:text-2xl">
            この分類に含まれる業種
          </h2>
          <p className="text-sm text-slate-600">{category.industries.length}業種</p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {category.industries.map((industry) => {
            const detailHref = getIndustryArticleHref(category.slug, industry.plannedSlug);

            return (
              <article
                key={industry.plannedSlug}
                data-planned-slug={industry.plannedSlug}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{industry.name}</h3>
                  {detailHref ? (
                    <span className="shrink-0 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">公開中</span>
                  ) : (
                    <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">準備中</span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">{industry.description}</p>
                {detailHref ? (
                  <Link
                    href={detailHref}
                    className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
                  >
                    詳細ページを見る
                  </Link>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">戻り導線</h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/articles/by-industry"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            業種別に知るへ戻る
          </Link>
        </div>
      </section>

      <div className="mt-6">
        <CategoryNextStepCta categorySlug="industry-guide" />
      </div>
    </main>
    </>
  );
}
