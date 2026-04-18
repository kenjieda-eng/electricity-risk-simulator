import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentCta from "../../../../../components/simulator/ContentCta";
import CategoryNextStepCta from "../../../../../components/simulator/CategoryNextStepCta";
import FlowDiagram from "../../../../../components/simulator/FlowDiagram";
import InfoBox from "../../../../../components/simulator/InfoBox";
import RelatedLinks from "../../../../../components/simulator/RelatedLinks";
import { getIndustryMiddleCategory } from "../../../../../lib/articleIndustryCategories";
import { ArticleJsonLd } from "../../../../../components/seo/JsonLd";

type PageParams = {
  middle: string;
  industry: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

const supportedMiddle = "commercial";
const supportedIndustry = "supermarket-large-scale";
const canonicalPath = "https://simulator.eic-jp.org/articles/by-industry/commercial/supermarket-large-scale";

const pageTitle = "スーパーマーケットの電気料金はなぜ上がりやすい？値上がりリスク・契約プラン・見直しポイント";
const pageDescription =
  "スーパーマーケットは、冷蔵・冷凍設備を長時間動かし続けるため、電気料金の値上がり影響を受けやすい業種です。大型スーパーの電気の使い方、上がりやすい理由、契約プランの考え方、確認したいポイント、見直しの方向性を整理します。";

const powerComposition = [
  {
    label: "冷蔵・冷凍設備",
    share: "40〜50%",
    width: "48%",
    color: "bg-sky-600",
    description: "冷蔵・冷凍ショーケース、バックヤードの冷蔵庫、冷凍機など、止めにくい設備がベース負荷になります。",
  },
  {
    label: "空調",
    share: "15〜20%",
    width: "20%",
    color: "bg-emerald-500",
    description: "売場空間の温熱環境維持に加え、夏は冷凍機負荷とも重なりやすい項目です。",
  },
  {
    label: "照明",
    share: "15〜20%",
    width: "19%",
    color: "bg-amber-400",
    description: "売場照明は目立ちますが、請求額全体で見ると冷却設備の影響の方が大きくなりやすいです。",
  },
  {
    label: "調理・加工",
    share: "10〜15%",
    width: "14%",
    color: "bg-violet-500",
    description: "惣菜や加工場の設備負荷で、売場構成によって比率が変わりやすい領域です。",
  },
] as const;

const seasonalLoadBars = [
  {
    label: "冬季の電力消費",
    level: "1.0",
    width: "67%",
    note: "比較の基準になりやすい水準",
  },
  {
    label: "夏季の電力消費",
    level: "1.3〜1.5",
    width: "100%",
    note: "外気温上昇で冷凍機効率が落ち、請求額が重くなりやすい",
  },
] as const;

export function generateStaticParams() {
  return [{ middle: supportedMiddle, industry: supportedIndustry }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { middle, industry } = await params;

  if (middle !== supportedMiddle || industry !== supportedIndustry) {
    return {};
  }

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      "スーパーマーケット 電気料金",
      "大型スーパー 電気代",
      "冷蔵 冷凍 設備 電気代",
      "市場連動 固定単価 スーパー",
      "スーパー 電力契約 見直し",
    ],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalPath,
      siteName: "法人電気料金ナビ",
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
}

function PowerCompositionChart() {
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-base font-semibold text-slate-900 sm:text-lg">大型スーパーの電力構成イメージ</h3>
      <div className="mt-4 space-y-4">
        {powerComposition.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <p className="font-semibold text-slate-900">{item.label}</p>
              <p className="text-slate-600">{item.share}</p>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200" aria-hidden>
              <div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }} />
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SeasonalLoadChart() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-semibold text-slate-900 sm:text-lg">夏季は冬季の1.3〜1.5倍に達しやすい</h3>
      <div className="mt-4 space-y-4">
        {seasonalLoadBars.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <p className="font-semibold text-slate-900">{item.label}</p>
              <p className="text-slate-600">{item.level}</p>
            </div>
            <div className="mt-2 h-4 overflow-hidden rounded-full bg-slate-200" aria-hidden>
              <div className="h-full rounded-full bg-rose-500" style={{ width: item.width }} />
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-700">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default async function SupermarketLargeScaleIndustryPage({ params }: PageProps) {
  const { middle, industry } = await params;
  const middleCategory = getIndustryMiddleCategory(middle);

  if (!middleCategory || middle !== supportedMiddle || industry !== supportedIndustry) {
    notFound();
  }

  return (
    <>
    <ArticleJsonLd
      headline={pageTitle}
      description={pageDescription}
      url={canonicalPath}
      datePublished="2025-04-01"
      breadcrumbItems={[
        { name: "ホーム", url: "https://simulator.eic-jp.org/" },
        { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
        { name: "業種別", url: "https://simulator.eic-jp.org/articles/by-industry" },
        { name: middleCategory.name, url: `https://simulator.eic-jp.org/articles/by-industry/${middleCategory.slug}` },
        { name: "スーパーマーケット（大型）" },
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
        <Link href={`/articles/by-industry/${middleCategory.slug}`} className="underline-offset-2 hover:underline">
          {middleCategory.name}
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">スーパーマーケット（大型）</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-sm font-semibold text-sky-800">商業系 / スーパーマーケット（大型）</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{pageDescription}</p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-sky-200 bg-white p-4">
            <p className="text-sm text-slate-600">主なベース負荷</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">冷蔵・冷凍設備が中心</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">営業時間外も止めにくく、24時間のコスト土台になりやすい業種です。</p>
          </div>
          <div className="rounded-lg border border-sky-200 bg-white p-4">
            <p className="text-sm text-slate-600">構成比の目安</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">冷蔵・冷凍設備 40〜50%</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">空調・照明・調理加工も続きますが、まず冷やす設備の比率を見る必要があります。</p>
          </div>
          <div className="rounded-lg border border-sky-200 bg-white p-4">
            <p className="text-sm text-slate-600">季節影響</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">夏季は冬季の1.3〜1.5倍</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">外気温上昇で冷凍機効率が落ち、請求額が夏に重くなりやすい構造があります。</p>
          </div>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">スーパーマーケットの電気料金はなぜ上がりやすいのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            スーパーマーケットは、法人の中でも電気料金の上昇影響を受けやすい業種のひとつです。
            その理由は、空調や照明だけでなく、冷蔵・冷凍ショーケース、バックヤードの冷蔵庫、加工場の設備など、
            止めにくい機器を長時間動かし続ける必要があるためです。売場が閉まっている時間も冷蔵・冷凍設備は止められず、
            営業時間外も一定の電力を使い続けます。大型スーパーでは、冷蔵・冷凍設備が全電力の40〜50%を占め、
            営業時間は長く、冷蔵・冷凍設備は24時間稼働するのが典型です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            オフィスのように、夜間や休日に使用量が大きく落ちる業種とは違い、スーパーマーケットはベースとなる使用量そのものが高い構造です。
            そのため、電力単価の上昇や毎月の調整項目の増加が、そのままコスト増につながりやすい特徴があります。
            電力コストの増加は商品原価や利益に影響しやすく、特に食品スーパーでは負担感が出やすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">この業種で電気を多く使う場所</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            大型スーパーマーケットで最も大きいのは、冷蔵・冷凍ショーケースや冷蔵庫などの冷却設備です。
            これに空調、照明、調理・加工設備が続きます。典型的には、冷蔵・冷凍設備が40〜50%、空調が15〜20%、
            照明が15〜20%、調理・加工が10〜15%という構成になります。つまり、電気料金を考えるときは、
            まず「冷やす設備」がどの程度を占めているかを見る必要があります。
          </p>
          <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <PowerCompositionChart />
            <SeasonalLoadChart />
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            このため、照明だけを少し見直しても、請求額全体が大きくは下がらないことがあります。
            スーパーマーケットでは、どの冷凍機がどれだけ動いているか、ショーケースの仕様や運用がどうなっているかを見ないと、
            実態に合った見直しになりにくいです。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">スーパーマーケットの電気料金が上がりやすい理由</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">冷蔵・冷凍設備を止められない</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                食品を扱う以上、冷蔵・冷凍設備は止められません。営業時間外も稼働が続くため、電気使用量の土台が高くなります。
                使用時間を短くして抑える、という方法がとりにくい業種です。
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">夏に冷凍機の効率が落ちやすい</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                外気温が上がると、冷凍機は同じ冷却を行うためにより多くの電力を必要とします。大型スーパーでは、夏季に電力消費が冬季の1.3〜1.5倍に達することがあります。
                請求額が夏に重くなりやすいのは、この構造が大きいです。
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">単価上昇が利益に響きやすい</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                食品スーパーは、もともと高い利益率で吸収しやすい業種ではありません。そのため、電力単価が少し上がるだけでも、
                利益を押し下げやすい特徴があります。とくに冷蔵・冷凍設備の比率が高い店舗ほど、この影響が出やすくなります。
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">冷凍食品売場の拡大が負担増につながりやすい</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                冷凍食品の品揃えを広げると、冷凍ショーケースの比率が上がり、電力負荷も増えやすくなります。
                売場づくりの変化そのものが、電気料金の上昇要因になることがあります。大型スーパーでは、
                冷凍食品の品揃え拡大に伴って、冷凍ショーケースの消費比率が増加傾向にあります。
              </p>
            </article>
          </div>
          <div className="mt-4">
            <FlowDiagram
              heading="スーパーマーケットで電気料金が重くなりやすい流れ"
              steps={[
                {
                  title: "1. 24時間の冷蔵・冷凍負荷",
                  description: "営業時間外も止められず、ベース使用量そのものが高くなりやすい",
                },
                {
                  title: "2. 夏場の効率低下",
                  description: "外気温上昇で冷凍機の消費電力が増え、空調負荷とも重なりやすい",
                },
                {
                  title: "3. 単価や調整項目の上昇",
                  description: "高い使用量に対して単価上昇や毎月変動項目の影響が乗りやすい",
                },
                {
                  title: "4. 利益圧迫",
                  description: "商品原価や利益に響きやすく、販売価格へ転嫁しにくい負担になりやすい",
                },
              ]}
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書や見積書で確認したいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            スーパーマーケットが電気料金を見直すときは、単価だけを見ても判断を誤りやすいです。
            まず見たいのは、実際に使った電力量に応じて増える部分です。使用量が大きい業種なので、ここが請求額に与える影響はかなり大きくなります。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <InfoBox title="毎月変動する調整項目">
              次に、毎月変動する調整項目をどこまで受ける契約になっているかも重要です。冷蔵・冷凍設備が24時間動いている業種では、
              全体の単価上昇を受けやすいため、毎月動く項目を軽く見ない方が安全です。
            </InfoBox>
            <InfoBox title="夏場の最大需要">
              さらに、夏場の最大需要の出方も見ておきたいところです。売場空調と冷凍機の負荷が重なる時間帯に最大需要が上がると、
              基本料金の負担が重くなりやすくなります。
            </InfoBox>
            <InfoBox title="設備更新のタイミング">
              設備面では、冷凍機やショーケースの更新時期も重要です。冷媒規制の強化に伴い、冷凍機更新のコストは今後の課題になりやすく、
              契約見直しと設備更新を分けずに考えた方が実務的です。
            </InfoBox>
            <InfoBox title="単価だけで判断しない">
              電力量料金、調整項目、最大需要、設備更新までをまとめて見ないと、単価比較だけでは実態に合わない判断になりやすいです。
              スーパーマーケットでは、請求書と設備の使い方を一緒に確認する視点が重要です。
            </InfoBox>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">スーパーマーケットに合いやすい契約プラン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            スーパーマーケットの電気料金を見直すときは、単価の安さだけで契約プランを選ばない方が安全です。
            冷蔵・冷凍設備を24時間動かし続ける必要があり、夏場は冷凍機の効率低下で使用量も増えやすいため、
            価格変動にどこまで耐えられるか、予算を組みやすいかという視点が重要になります。これは、
            24時間稼働の冷蔵・冷凍負荷が大きいというこの業種の電力構造から自然に導ける考え方です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            多くの店舗では、完全な市場連動型よりも、固定単価型、または一部を固定化した考え方の方が合いやすいと考えやすいです。
            一方で、店舗の規模、設備の新しさ、蓄電池やデマンド制御の有無によっては、市場連動型が合う場合もあります。
            大切なのは、プラン名だけで判断するのではなく、自社の電気の使い方と合っているかを見ることです。
            これは業種特性からの実務的な判断です。
          </p>
          <div className="mt-4 grid gap-4 xl:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">固定単価型という考え方</h3>
              <p className="mt-3 text-sm font-semibold text-slate-900">メリット</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                固定単価型のメリットは、毎月の電気料金を読みやすく、予算を立てやすいことです。スーパーマーケットは、
                電気代の上昇をすぐに販売価格へ転嫁しにくいため、急な単価高騰を避けやすい点は大きな安心材料になります。
                特に、冷蔵・冷凍設備の比率が高い店舗や、複数店舗を運営していて月次予算管理を重視する企業には相性がよい考え方です。
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">デメリット</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                固定単価型は、市場価格が下がっている局面でも、そのメリットを取り込みにくいことがあります。また、安定性が高い分、
                当初の単価はやや高めに設定されることもあります。契約期間や中途解約条件、更新時の単価見直し条件まで含めて見ないと、
                見かけの安心感だけで判断しやすくなります。これは一般的な契約比較上の注意点です。
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">市場連動型という考え方</h3>
              <p className="mt-3 text-sm font-semibold text-slate-900">メリット</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                市場連動型のメリットは、市場価格が落ち着いている局面では、固定単価型よりも低くなる可能性があることです。
                また、蓄電池やデマンド制御、設備運転の調整ができる企業であれば、高い時間帯の使用をずらしながらコストを抑えられる余地があります。
                スーパーマーケットでも、設備制御の自由度が高い店舗では検討余地があります。
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">デメリット</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                ただし、スーパーマーケットでは注意も必要です。冷蔵・冷凍設備は止められず、営業時間も長いため、
                価格が高い時間帯を完全に避けることが難しいからです。とくに、夕方から夜にかけて価格が上がる局面や、
                需給が厳しい季節には、想定以上に請求額が膨らむことがあります。利益率が高くない業態では、
                この振れ幅が経営上の負担になりやすいです。これは24時間負荷と長時間営業という業態特性からの実務的な注意点です。
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">ハイブリッド型という考え方</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                固定単価型と市場連動型の中間として、一部を固定化し、一部を変動と捉える考え方もあります。たとえば、
                ベースとなる使用量は比較的読みやすいため固定で押さえ、変動しやすい部分だけ柔軟に考える、という発想です。
                完全にどちらか一方に寄せるより、リスクと単価のバランスを取りやすい場合があります。これはこの業種のベースロードが高いことを踏まえると考えやすい整理です。
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                ただし、この考え方は契約条件が複雑になりやすく、比較もしにくくなります。見積書を比較するときは、単価だけでなく、
                どこまでが固定で、どこからが変動なのかを丁寧に確認した方が安全です。
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2026年の米国・イラン情勢を踏まえると、どう考えるべきか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2026年春は、米国とイランをめぐる軍事的緊張とホルムズ海峡の混乱が、原油やLNGの供給不安を通じてエネルギー価格を大きく揺らしました。
            ロイターは、3月の調査で2026年のブレント原油予想が前月から大きく上方修正されたこと、4月2日にはWTIが一時11%超、
            ブレントが約8%上昇したことを伝えています。ホルムズ海峡は世界の石油・LNG輸送の約5分の1を担う要衝でもあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            日本でも、この中東情勢によるLNG輸入リスクへの対応として、経済産業省が4月1日から低効率石炭火力の利用制限を1年間一時停止する方針を示しました。
            報道では、日本がホルムズ海峡経由で年間約400万トンのLNGを受け取っており、その一部が滞る可能性を織り込んだ対応だとされています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            スーパーマーケットにとって大事なのは、このニュースを「遠い海外の話」と見ないことです。原油やLNGの混乱は、
            発電燃料コスト、電力調達コスト、燃料費調整の動き、物流コスト、冷凍食品や生鮮品の輸送コストなど、
            複数の経路で店舗収支に跳ね返ります。特に、冷蔵・冷凍設備を24時間動かす業態では、価格上昇局面の影響を受けやすくなります。
            これはスーパーの電力負荷構造と、足元のエネルギー市場の不安定さを重ねると理解しやすいです。
          </p>
          <div className="mt-4">
            <FlowDiagram
              heading="中東情勢の変化が大型スーパーの収支に波及する流れ"
              steps={[
                {
                  title: "1. 原油・LNGの供給不安",
                  description: "ホルムズ海峡の混乱や地政学リスクで、燃料価格と市場心理が揺れやすくなる",
                },
                {
                  title: "2. 発電・調達コスト上昇",
                  description: "発電燃料コスト、電力調達コスト、燃料費調整や市場価格の動きに波及しやすい",
                },
                {
                  title: "3. 店舗運営コストへ転嫁",
                  description: "24時間の冷蔵・冷凍負荷に加えて、物流や冷凍食品輸送コストにも影響が出やすい",
                },
                {
                  title: "4. 利益・資金繰りへの圧迫",
                  description: "夏場の負荷増と重なると、請求額の上振れが店舗収支や予算管理へ響きやすい",
                },
              ]}
            />
          </div>
          <InfoBox title="この局面で考えたいこと">
            この局面で考えたいのは、今年の請求額が上がるかどうかだけではありません。
            「価格が大きく振れる年でも耐えられる契約になっているか」「夏場の負荷増と市場変動が重なっても資金繰りに耐えられるか」
            「設備更新を先送りしたままでよいか」という視点が重要です。短期の単価比較だけでなく、変動耐性まで含めて見直す方が実務的です。
            これは現下の情勢を踏まえた経営判断としての整理です。
          </InfoBox>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">とくに見直しを考えたい企業</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>夏の請求額が毎年大きく跳ねる</li>
              <li>冷凍食品売場を拡大している</li>
              <li>古い冷凍機を使い続けている</li>
              <li>価格変動の大きい契約を使っている</li>
              <li>複数店舗の予算管理を安定させたい</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              という企業は、2026年のような外部要因の大きい年ほど、契約と設備の両面を見直す意味があります。
              これは、平時の節約ではなく、価格変動リスクへの備えとしての見直しです。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">スーパーマーケットで考えやすい対策</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">冷凍機の高効率更新</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                最も効果が出やすいのは、冷凍機のインバーター化や高効率機への更新です。冷却設備が電力消費の中心なので、
                ここを見直すことが本筋になります。
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">ショーケースの扉やカバーの見直し</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                オープン型ショーケースは使いやすい一方で、冷気が逃げやすく、負荷が上がりやすいです。扉付きへの更新やナイトカバーの活用は、
                比較的取り組みやすい改善策です。
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">排熱回収の活用</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                冷凍機の排熱を暖房や給湯に活用できる店舗では、エネルギー全体の効率改善が見込めます。電気代だけでなく、
                設備全体の使い方として考えると効果が出やすくなります。
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">デフロスト運転の最適化</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                除霜運転の設定によっては、無駄な消費が積み上がることがあります。大きな投資をしなくても、
                運転条件の見直しだけで改善余地が出るケースがあります。
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな店舗が早めに見直したいか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            次のような店舗は、電気料金の見直し優先度が高いと考えられます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>夏の請求額だけ急に跳ねる</li>
            <li>冷凍食品売場を拡大した</li>
            <li>冷凍機やショーケースが古い</li>
            <li>店舗改装後に電気代が上がった</li>
            <li>単価比較をしても高い理由が説明しづらい</li>
            <li>電気代の上昇を販売価格に転嫁しにくい</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            スーパーマーケットでは、売場構成や設備の変化がそのまま電力負荷の変化につながりやすいです。そのため、請求書だけを見るのではなく、
            どの設備が効いているのか、どの時間帯に負荷が集まっているのかを一緒に見ることが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            スーパーマーケットの電気料金が上がりやすいのは、単に使用量が多いからではありません。冷蔵・冷凍設備を24時間動かし続ける必要があり、
            夏には冷凍機の効率が落ちやすく、しかも利益率の面からコスト増を吸収しにくい構造があるためです。大型スーパーでは、
            冷蔵・冷凍設備が全電力の40〜50%を占め、夏季には電力消費が冬季の1.3〜1.5倍に達することがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため、見直しの出発点は「単価が高いかどうか」だけではありません。冷凍機、ショーケース、空調、営業時間、売場構成まで含めて、
            どこに負荷が集まっているのかを把握することが重要です。さらに、2026年春のように国際情勢で原油・LNG価格が大きく揺れる局面では、
            契約プランの選び方と、設備更新の優先順位まで含めて考える方が実務に合います。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="契約タイプの違い、燃料リスク、見直し実務を合わせて確認すると、スーパー特有の負荷構造を判断へつなげやすくなります。"
          links={[
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "単価だけでなく、変動の受け方や予算管理との相性を比較できます。",
            },
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "海外のLNG市場や供給不安が電気料金へ波及する流れを整理できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "電力量料金、調整項目、契約電力などの見方を実務向けに確認できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "見積比較で見落としやすい単価以外の条件やリスクを整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較や見直しを進める"
          description="大型スーパーでは、契約条件と設備の使い方を切り分けずに見ることが大切です。比較ページやシミュレーションで、自社の負荷構造に合う見直し方を確認してください。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: `/articles/by-industry/${middleCategory.slug}`, label: "商業系一覧へ戻る" },
          ]}
        />

        <CategoryNextStepCta categorySlug="industry-guide" />
      </section>
    </main>
    </>
  );
}
