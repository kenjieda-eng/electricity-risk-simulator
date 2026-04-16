import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "../../../../components/seo/JsonLd";
import ContentCta from "../../../../components/simulator/ContentCta";
import RelatedLinks from "../../../../components/simulator/RelatedLinks";
import {
  FOOD_SCENARIO_BASE_PATH,
  FOOD_SCENARIO_SLUGS,
  getFoodScenarioPageBySlug,
} from "../../../../lib/foodProcurementScenarioAnalysis";
import FoodScenarioChartCard from "../_components/FoodScenarioCharts";
import FoodScenarioLayout from "../_components/FoodScenarioLayout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return FOOD_SCENARIO_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getFoodScenarioPageBySlug(slug);
  if (!page || slug === "index") return {};

  const url = `https://simulator.eic-jp.org${FOOD_SCENARIO_BASE_PATH}/${slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
      locale: "ja_JP",
      type: "article",
      images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: page.label }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/twitter-default.png"],
    },
  };
}

function CostStructureContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">飲食業のコスト構造</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          飲食業は「FLコスト」（Food＋Labor）が売上の55〜65%を占め、残り35〜45%から家賃・光熱費・その他経費を差し引いた営業利益率は
          3〜8%に過ぎません。この薄い利益幅に複数のコスト増が同時に重なります。
        </p>
      </section>

      <FoodScenarioChartCard kind="restaurant-structure" title="飲食業の標準コスト構成（売上比）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">食品製造業のコスト構造</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          食品製造業では原材料比率が高く、包装資材・人件費・エネルギー・物流が積み上がる構造です。単一要因ではなく複数項目の同時上昇が収益を圧迫します。
        </p>
      </section>

      <FoodScenarioChartCard kind="manufacturer-structure" title="食品製造業の標準コスト構成（売上比）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">5要因の同時上昇メカニズム</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">コスト要因</th>
                <th className="border border-slate-200 px-3 py-2">根本原因</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2上昇率</th>
                <th className="border border-slate-200 px-3 py-2">飲食業への影響</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">① 食材原材料</td><td className="border border-slate-200 px-3 py-2">天候不順、供給不足、円安</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+8〜15%</td><td className="border border-slate-200 px-3 py-2">仕入れ価格の直接上昇</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">② 包装・資材</td><td className="border border-slate-200 px-3 py-2">ナフサ不足、エチレン減産</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td><td className="border border-slate-200 px-3 py-2">テイクアウト容器、ラップ、袋</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">③ 人件費</td><td className="border border-slate-200 px-3 py-2">最低賃金引上げ、人手不足</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+5〜8%</td><td className="border border-slate-200 px-3 py-2">調理・接客スタッフの時給増</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">④ 物流費</td><td className="border border-slate-200 px-3 py-2">燃料高、2024年問題継続</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜20%</td><td className="border border-slate-200 px-3 py-2">食材配送費の値上げ</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">⑤ エネルギー</td><td className="border border-slate-200 px-3 py-2">LNG高騰、補助金終了</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td><td className="border border-slate-200 px-3 py-2">ガス代（厨房）・電気代（冷蔵）</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">利益への複合インパクト</h2>
        <p className="mt-3 text-sm leading-7 text-red-900">
          売上3,000万円・営業利益5%の飲食店を想定すると、営業利益は年間150万円です。食材原価+10%で+90万円、人件費+5%で+45万円、
          光熱費+20%で+30万円となり、合計+165万円で利益が消失します。S2シナリオでは「何もしなければ赤字転落」のリスクがあります。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-emerald-200 bg-white p-4"><p className="text-xs text-emerald-800">S1 利益残存率</p><p className="mt-1 text-2xl font-bold text-emerald-900">60〜80%</p><p className="text-xs text-emerald-800">コスト増は吸収可能</p></article>
          <article className="rounded-lg border border-amber-200 bg-white p-4"><p className="text-xs text-amber-800">S2 利益残存率</p><p className="mt-1 text-2xl font-bold text-amber-900">10〜40%</p><p className="text-xs text-amber-800">対策なしでは赤字接近</p></article>
          <article className="rounded-lg border border-rose-200 bg-white p-4"><p className="text-xs text-rose-800">S3 利益残存率</p><p className="mt-1 text-2xl font-bold text-rose-900">赤字リスク</p><p className="text-xs text-rose-800">抜本対策が不可欠</p></article>
        </div>
      </section>
    </>
  );
}

function GrainAndOilContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">輸入小麦の政府売渡価格</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          政府が製粉会社に販売する輸入小麦の価格は半年ごとに改定されます。2026年4月1日の改定では引き上げが実施され、パン・麺・菓子の原価に直結します。
          円安（159円台）の長期化が輸入コストを押し上げています。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">4月売渡価格</p><p className="mt-1 text-2xl font-bold text-amber-900">引上げ</p><p className="text-xs text-amber-800">円安＋国際相場反映</p></article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4"><p className="text-xs text-rose-800">ドル円</p><p className="mt-1 text-2xl font-bold text-rose-900">159円台</p><p className="text-xs text-rose-800">160円に迫る水準</p></article>
          <article className="rounded-lg border border-slate-200 bg-white p-4"><p className="text-xs text-slate-600">影響品目</p><p className="mt-1 text-xl font-bold text-slate-900">パン・麺・菓子</p><p className="text-xs text-slate-600">2〜3カ月後に転嫁</p></article>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">食用油 — 4年連続の値上げ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          食用油は原材料（大豆・菜種・パーム油）の国際価格と円安の影響で4年連続の値上げが続いています。日清オイリオ、J-オイルミルズは2026年1月に
          価格改定を実施済みです。飲食業にとって揚げ物・炒め物の原価を直撃します。
        </p>
      </section>

      <FoodScenarioChartCard kind="grain-oil" title="食用油の価格指数推移（S2予測）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">コメ・砂糖を含む主要品目の上昇見通し</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">品目</th>
                <th className="border border-slate-200 px-3 py-2 text-right">2025年平均比</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2予測</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3予測</th>
                <th className="border border-slate-200 px-3 py-2">影響する食品</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">小麦粉</td><td className="border border-slate-200 px-3 py-2 text-right">基準</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+8〜12%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+15〜20%</td><td className="border border-slate-200 px-3 py-2">パン、麺、菓子、天ぷら粉</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">食用油</td><td className="border border-slate-200 px-3 py-2 text-right">基準</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜22%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+25〜35%</td><td className="border border-slate-200 px-3 py-2">揚げ物、炒め物、ドレッシング</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">コメ</td><td className="border border-slate-200 px-3 py-2 text-right">基準</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜15%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+15〜25%</td><td className="border border-slate-200 px-3 py-2">米飯、寿司、弁当、おにぎり</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">砂糖</td><td className="border border-slate-200 px-3 py-2 text-right">基準</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+8〜15%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+15〜25%</td><td className="border border-slate-200 px-3 py-2">菓子、飲料、パン、調味料</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">飲食店への直接的影響</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          ラーメン店（小麦粉＋食用油）、とんかつ店（食用油）、パン屋（小麦＋砂糖＋バター）、寿司店（コメ＋水産物）など、穀物・油脂の値上げは業態を選ばず直撃します。
        </p>
      </section>
    </>
  );
}

function ProteinContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">畜産物の価格動向</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          畜産物はエネルギーコスト（飼料輸送、畜舎空調）と飼料価格の二重影響を受けます。豚肉の供給不足、鶏卵の鳥インフルエンザ影響が加わり、価格の下押し要因が弱い状態です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">品目</th>
                <th className="border border-slate-200 px-3 py-2">主な上昇要因</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S1</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">豚肉</td><td className="border border-slate-200 px-3 py-2">供給不足、飼料価格高</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜8%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+12〜18%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+20〜30%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">鶏卵</td><td className="border border-slate-200 px-3 py-2">鳥インフルエンザ、飼料高</td><td className="border border-slate-200 px-3 py-2 text-right">+3〜5%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜15%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+15〜25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">鶏肉</td><td className="border border-slate-200 px-3 py-2">飼料コスト増</td><td className="border border-slate-200 px-3 py-2 text-right">+3〜5%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+8〜12%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+12〜20%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">牛肉（国産）</td><td className="border border-slate-200 px-3 py-2">飼料高、生産者減少</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜8%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜15%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+18〜25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">牛肉（輸入）</td><td className="border border-slate-200 px-3 py-2">円安、国際相場</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+12〜20%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+20〜30%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">水産物の価格動向</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          水産物は漁船燃油（A重油）コストが漁獲コストへ直接波及します。S2でA重油+20〜30%の上昇が想定され、輸入魚介では円安・物流費も重なります。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">漁船燃油（A重油）</p><p className="mt-1 text-2xl font-bold text-amber-900">+20〜30%</p><p className="text-xs text-amber-800">S2想定</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">エビ・カニ（輸入）</p><p className="mt-1 text-2xl font-bold text-amber-900">+15〜25%</p><p className="text-xs text-amber-800">円安＋物流費</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">サーモン（輸入）</p><p className="mt-1 text-2xl font-bold text-amber-900">+10〜18%</p><p className="text-xs text-amber-800">国際相場＋円安</p></article>
        </div>
      </section>

      <FoodScenarioChartCard kind="protein" title="畜産・水産の価格上昇推移（S2）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">飲食業態別の影響</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">焼肉・ステーキ</p><p className="mt-1 text-sm text-slate-700">牛肉仕入が売上の40〜50%。S2で原価率+5〜8ポイント悪化。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">寿司・海鮮</p><p className="mt-1 text-sm text-slate-700">水産物＋シャリ（コメ）の複合値上げ。燃油サーチャージ転嫁の可能性。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">居酒屋</p><p className="mt-1 text-sm text-slate-700">鶏肉・豚肉・卵の3品目が同時上昇。唐揚げ・卵焼きの原価圧迫。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">ファストフード</p><p className="mt-1 text-sm text-slate-700">チキン・ビーフパティ・卵が同時上昇し、セット価格維持が困難に。</p></article>
        </div>
      </section>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">飼料コストの構造的問題</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          日本の畜産飼料はトウモロコシ・大豆粕を中心に輸入依存です。円安と国際穀物相場の上昇は、畜産物価格を「下がりにくい」状態に固定化します。
        </p>
      </section>
    </>
  );
}

function ProduceAndDairyContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">青果（野菜・果物）の価格変動リスク</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          青果は天候の影響が大きく、2026年は猛暑予測に加えてハウス栽培の暖房コスト（A重油・灯油）上昇も重なります。冬春野菜の価格は特に不安定化しやすい状況です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">品目</th>
                <th className="border border-slate-200 px-3 py-2">リスク要因</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2影響</th>
                <th className="border border-slate-200 px-3 py-2">時期</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">葉物野菜（レタス・キャベツ）</td><td className="border border-slate-200 px-3 py-2">天候、ハウス暖房コスト</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜30%</td><td className="border border-slate-200 px-3 py-2">通年（天候次第）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">トマト</td><td className="border border-slate-200 px-3 py-2">ハウス栽培のエネルギーコスト増</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜20%</td><td className="border border-slate-200 px-3 py-2">冬〜春</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">玉ねぎ</td><td className="border border-slate-200 px-3 py-2">前年不作の在庫影響</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+8〜15%</td><td className="border border-slate-200 px-3 py-2">4〜6月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">果物（輸入）</td><td className="border border-slate-200 px-3 py-2">円安、輸送コスト増</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜18%</td><td className="border border-slate-200 px-3 py-2">通年</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">乳製品の価格動向</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          バター・チーズ・生クリームは、原料乳価格の上昇と飼料コスト増、円安による輸入乳製品高の複合影響を受けます。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">バター</p><p className="mt-1 text-2xl font-bold text-amber-900">+8〜15%</p><p className="text-xs text-amber-800">飼料高＋乳価上昇</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">チーズ（輸入）</p><p className="mt-1 text-2xl font-bold text-amber-900">+10〜20%</p><p className="text-xs text-amber-800">円安＋国際相場</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">生クリーム</p><p className="mt-1 text-2xl font-bold text-amber-900">+8〜12%</p><p className="text-xs text-amber-800">乳価連動</p></article>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">パン屋・ケーキ店への三重打撃</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          パン屋・ケーキ店では小麦粉、バター、砂糖、卵、生クリームが同時に値上がりしやすく、原価率が3〜5ポイント悪化するケースが想定されます。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">温室栽培野菜のエネルギーコスト問題</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          冬春のトマト・きゅうり・ピーマンなどのハウス栽培ではA重油や灯油が暖房に使われます。A重油+20〜30%上昇のS2シナリオでは、経営費全体が
          +3〜7%上昇し、出荷価格への転嫁が不可避です。生産者の廃業リスクや供給量減少にも注意が必要です。
        </p>
      </section>
    </>
  );
}

function RestaurantImpactContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">業態別の原価率悪化予測</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">業態</th>
                <th className="border border-slate-200 px-3 py-2 text-right">現在の原価率</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S1</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">ラーメン店</td><td className="border border-slate-200 px-3 py-2 text-right">28〜32%</td><td className="border border-slate-200 px-3 py-2 text-right">30〜34%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">33〜38%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">36〜42%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">居酒屋</td><td className="border border-slate-200 px-3 py-2 text-right">28〜33%</td><td className="border border-slate-200 px-3 py-2 text-right">30〜35%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">32〜38%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">35〜42%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">ファミレス</td><td className="border border-slate-200 px-3 py-2 text-right">30〜35%</td><td className="border border-slate-200 px-3 py-2 text-right">32〜37%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">35〜40%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">38〜45%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">焼肉店</td><td className="border border-slate-200 px-3 py-2 text-right">35〜40%</td><td className="border border-slate-200 px-3 py-2 text-right">37〜42%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">40〜46%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">44〜50%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">寿司店</td><td className="border border-slate-200 px-3 py-2 text-right">38〜45%</td><td className="border border-slate-200 px-3 py-2 text-right">40〜47%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">44〜50%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">48〜55%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">パン屋・ベーカリー</td><td className="border border-slate-200 px-3 py-2 text-right">25〜30%</td><td className="border border-slate-200 px-3 py-2 text-right">28〜33%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">32〜38%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">36〜42%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">カフェ</td><td className="border border-slate-200 px-3 py-2 text-right">22〜28%</td><td className="border border-slate-200 px-3 py-2 text-right">24〜30%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">26〜33%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">30〜38%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <FoodScenarioChartCard kind="restaurant-profit" title="月商別の利益インパクト（万円/月）" />

      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">S2で月商300万円の居酒屋の場合</h2>
        <p className="mt-3 text-sm leading-7 text-red-900">
          現在の営業利益月15万円（利益率5%）に対し、食材仕入+12%（+10.8万円）＋光熱費+20%（+3万円）＋人件費+5%（+4.5万円）で合計+18.3万円。
          対策なしでは月3.3万円の赤字に転落します。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">テイクアウト・デリバリーの追加コスト</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          テイクアウト・デリバリーは容器（プラスチックトレー、蓋、袋）の追加コストがかかります。ナフサ不足による包装容器の値上げ（+15〜25%）は、
          テイクアウト比率の高い店舗ほど影響が大きくなります。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">テイクアウト容器1セット</p><p className="mt-1 text-2xl font-bold text-amber-900">+5〜10円</p><p className="text-xs text-amber-800">S2想定</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">月間500食テイクアウト</p><p className="mt-1 text-2xl font-bold text-amber-900">+2,500〜5,000円/月</p><p className="text-xs text-amber-800">容器コストのみ</p></article>
        </div>
      </section>
    </>
  );
}

function FoodManufacturerContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">食品メーカーの値上げ動向</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          2026年の食品値上げは約1.5万品目と予測されています（前年比3割減）。前半は小康状態ですが、後半に包材・エネルギーコストが反映されると、
          値上げが再加速するリスクがあります。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-orange-200 bg-orange-50 p-4"><p className="text-xs text-orange-800">2026年値上げ予測</p><p className="mt-1 text-2xl font-bold text-orange-900">約1.5万品目</p><p className="text-xs text-orange-800">前年比3割減</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">平均値上げ率</p><p className="mt-1 text-2xl font-bold text-amber-900">15%</p><p className="text-xs text-amber-800">2026年1〜7月平均</p></article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4"><p className="text-xs text-rose-800">4月単月</p><p className="mt-1 text-2xl font-bold text-rose-900">2,798品目</p><p className="text-xs text-rose-800">年度初め集中</p></article>
        </div>
      </section>

      <FoodScenarioChartCard kind="manufacturer-categories" title="カテゴリ別の値上げ品目数（2026年4月）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">規模別の年間コスト増試算</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">企業規模（年商）</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S1 年間増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2 年間増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3 年間増</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">5億円（小規模）</td><td className="border border-slate-200 px-3 py-2 text-right">+750〜1,250万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+2,000〜3,750万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+3,750〜6,250万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">50億円（中堅）</td><td className="border border-slate-200 px-3 py-2 text-right">+7,500万〜1.25億円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+2〜3.75億円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+3.75〜6.25億円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">500億円（大手）</td><td className="border border-slate-200 px-3 py-2 text-right">+7.5〜12.5億円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+20〜37.5億円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+37.5〜62.5億円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">価格転嫁の実態と消費者の抵抗感</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          価格転嫁への理解は以前より進んでいますが、値上げ後の販売数量低下やPB品への流出も強まっています。B2BとB2Cで戦略を分ける運用が重要です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">転嫁できている領域</p><p className="mt-1 text-sm text-slate-700">人件費・原材料費を理由とした値上げは、B2B取引を中心に比較的受け入れられやすい。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">転嫁の壁</p><p className="mt-1 text-sm text-slate-700">値上げ後の販売数量低下、PB品への流出、容量調整による実質値上げの常態化。</p></article>
        </div>
      </section>

      <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-amber-900">「年後半に再燃」シナリオに警戒</h2>
        <p className="mt-3 text-sm leading-7 text-amber-900">
          春先までは小康状態でも、ナフサ不足による包装資材値上げが夏以降に本格化し、エネルギー高と重なると年後半に月3,000品目超の値上げが再発する可能性があります。
        </p>
      </section>
    </>
  );
}

function ActionRoadmapContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "飲食店の仕入コスト対策として今すぐできることは？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "メニュー原価分析、相見積もり、発注ロット最適化、食材ロス削減（歩留まり改善）が即効性のある対策です。",
        },
      },
      {
        "@type": "Question",
        name: "値上げは客離れにつながりませんか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "全品一律値上げより、高付加価値メニューやセット構成見直し、ポーション調整などを組み合わせる方が離反を抑えやすくなります。",
        },
      },
      {
        "@type": "Question",
        name: "食品製造業はいつ値上げすべきですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "年後半の再燃リスクを見据え、1回の大幅改定より段階的な価格改定を早めに検討することが現実的です。",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シナリオ別 対策の優先度</h2>

        <article className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-xs font-semibold text-emerald-800">全シナリオ共通（今すぐ・コストゼロ）</p>
          <p className="mt-2 text-sm leading-7 text-emerald-900">すべてのシナリオで仕入コストは上昇するため、見える化とロス削減を最優先に進めます。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">メニュー別原価分析</p><p className="text-sm text-slate-700">利益率の高低を可視化し、販売構成を最適化。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">食材ロス削減</p><p className="text-sm text-slate-700">発注量最適化・端材活用・期限管理で廃棄率を改善。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">仕入先の複数化</p><p className="text-sm text-slate-700">主要食材で2〜3社の相見積もりを継続。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">歩留まり改善</p><p className="text-sm text-slate-700">下処理・カット見直しで可食部率を高める。</p></div>
          </div>
        </article>

        <article className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800">S2以上に備える（夏までに着手）</p>
          <p className="mt-2 text-sm leading-7 text-amber-900">仕入コスト+8〜15%が続く局面では、メニュー設計と価格戦略を並行して進めます。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">メニュー再設計</p><p className="text-sm text-slate-700">高原価メニューの見直し、代替食材、利益率の高い商品強化。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">戦略的価格改定</p><p className="text-sm text-slate-700">全品値上げではなく構成変更で客単価を設計。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">共同購入の活用</p><p className="text-sm text-slate-700">協同組合や同業連携でボリュームディスカウントを確保。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">容器仕様の見直し</p><p className="text-sm text-slate-700">紙素材・簡素化・持参容器施策で包材コストを抑制。</p></div>
          </div>
        </article>

        <article className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4">
          <p className="text-xs font-semibold text-rose-800">S3に備える（経営判断）</p>
          <p className="mt-2 text-sm leading-7 text-rose-900">仕入コスト+15〜25%が常態化する場合は、事業構造の見直しが必要です。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">セントラルキッチン化</p><p className="text-sm text-slate-700">複数店舗の仕込み集約でロスと人件費を削減。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">産地直送・契約農家</p><p className="text-sm text-slate-700">中間マージン圧縮と交渉力の強化。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">メニューのスリム化</p><p className="text-sm text-slate-700">SKU削減と食材共通化で在庫効率を改善。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">自社PB・加工品開発</p><p className="text-sm text-slate-700">付加価値を高め、価格決定力を確保。</p></div>
          </div>
        </article>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">対策の効果一覧</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">対策</th>
                <th className="border border-slate-200 px-3 py-2 text-right">初期投資</th>
                <th className="border border-slate-200 px-3 py-2 text-right">原価率改善</th>
                <th className="border border-slate-200 px-3 py-2 text-right">実施期間</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">メニュー別原価分析</td><td className="border border-slate-200 px-3 py-2 text-right">0円</td><td className="border border-slate-200 px-3 py-2 text-right">-1〜2ポイント</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">即日</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">食材ロス削減</td><td className="border border-slate-200 px-3 py-2 text-right">0円</td><td className="border border-slate-200 px-3 py-2 text-right">-1〜3ポイント</td><td className="border border-slate-200 px-3 py-2 text-right">1〜3カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">メニュー再設計</td><td className="border border-slate-200 px-3 py-2 text-right">低</td><td className="border border-slate-200 px-3 py-2 text-right">-2〜5ポイント</td><td className="border border-slate-200 px-3 py-2 text-right">1〜3カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">戦略的価格改定</td><td className="border border-slate-200 px-3 py-2 text-right">0円</td><td className="border border-slate-200 px-3 py-2 text-right">-3〜5ポイント</td><td className="border border-slate-200 px-3 py-2 text-right">即日〜1カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">共同購入</td><td className="border border-slate-200 px-3 py-2 text-right">低</td><td className="border border-slate-200 px-3 py-2 text-right">-2〜4ポイント</td><td className="border border-slate-200 px-3 py-2 text-right">1〜3カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">セントラルキッチン</td><td className="border border-slate-200 px-3 py-2 text-right">高</td><td className="border border-slate-200 px-3 py-2 text-right">-3〜8ポイント</td><td className="border border-slate-200 px-3 py-2 text-right">6〜12カ月</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">エネルギー・物流との複合対策</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          食材の仕入コストだけでなく、ガス代（調理）、電気代（冷蔵・空調）、物流費（配送）、包装資材（容器・フィルム）を含めたトータル最適化が必要です。
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <Link href="/special/gas-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人ガス代シナリオ分析</Link>
          <Link href="/special/oil-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">原油高・物流コストシナリオ分析</Link>
          <Link href="/special/materials-packaging-scenario-analysis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">原材料・包装資材シナリオ分析</Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">よくある質問</h2>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">飲食店の仕入コスト対策として今すぐできることは？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">メニュー原価分析、相見積もり、発注ロット最適化、食材ロス削減（歩留まり改善）が即効性のある対策です。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">値上げは客離れにつながりませんか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">全品一律値上げより、高付加価値メニューやセット構成見直し、ポーション調整を組み合わせる方が離反を抑えやすくなります。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">食品製造業はいつ値上げすべきですか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">年後半の再燃リスクを見据え、1回の大幅改定より段階的な価格改定を早めに検討することが現実的です。</p>
        </details>
      </section>
    </>
  );
}

function renderContent(slug: string) {
  if (slug === "cost-structure") return <CostStructureContent />;
  if (slug === "grain-and-oil") return <GrainAndOilContent />;
  if (slug === "protein") return <ProteinContent />;
  if (slug === "produce-and-dairy") return <ProduceAndDairyContent />;
  if (slug === "restaurant-impact") return <RestaurantImpactContent />;
  if (slug === "food-manufacturer") return <FoodManufacturerContent />;
  if (slug === "action-roadmap") return <ActionRoadmapContent />;
  return null;
}

const relatedLinksBySlug: Record<string, { heading: string; links: { href: string; title: string; description: string }[] }> = {
  "cost-structure": {
    heading: "関連ページ",
    links: [
      { href: `${FOOD_SCENARIO_BASE_PATH}/restaurant-impact`, title: "飲食業", description: "業態別の原価率悪化を確認する。" },
      { href: `${FOOD_SCENARIO_BASE_PATH}/food-manufacturer`, title: "食品製造", description: "価格転嫁の実態を確認する。" },
    ],
  },
  "grain-and-oil": {
    heading: "関連ページ",
    links: [
      { href: `${FOOD_SCENARIO_BASE_PATH}/protein`, title: "畜産・水産", description: "タンパク質食材の上昇リスクを確認する。" },
      { href: `${FOOD_SCENARIO_BASE_PATH}/produce-and-dairy`, title: "青果・乳製品", description: "生鮮カテゴリの変動リスクを確認する。" },
    ],
  },
  protein: {
    heading: "関連ページ",
    links: [
      { href: `${FOOD_SCENARIO_BASE_PATH}/grain-and-oil`, title: "穀物・油脂", description: "小麦・油脂の動向を確認する。" },
      { href: `${FOOD_SCENARIO_BASE_PATH}/restaurant-impact`, title: "飲食業", description: "業態別の損益影響を確認する。" },
    ],
  },
  "produce-and-dairy": {
    heading: "関連ページ",
    links: [
      { href: `${FOOD_SCENARIO_BASE_PATH}/grain-and-oil`, title: "穀物・油脂", description: "パン・菓子系の原価動向も確認する。" },
      { href: `${FOOD_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "変動リスクへの実務対応を確認する。" },
    ],
  },
  "restaurant-impact": {
    heading: "関連ページ",
    links: [
      { href: `${FOOD_SCENARIO_BASE_PATH}/cost-structure`, title: "原価構造", description: "5重苦の前提を再確認する。" },
      { href: `${FOOD_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "原価率悪化への対応策を確認する。" },
    ],
  },
  "food-manufacturer": {
    heading: "関連ページ",
    links: [
      { href: `${FOOD_SCENARIO_BASE_PATH}/cost-structure`, title: "原価構造", description: "製造コストの構成比を確認する。" },
      { href: `${FOOD_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "段階的な対策の優先順位を確認する。" },
    ],
  },
  "action-roadmap": {
    heading: "関連ページ",
    links: [
      { href: `${FOOD_SCENARIO_BASE_PATH}/restaurant-impact`, title: "飲食業", description: "業態別の収益影響を確認する。" },
      { href: `${FOOD_SCENARIO_BASE_PATH}/food-manufacturer`, title: "食品製造", description: "価格転嫁の前提を確認する。" },
    ],
  },
};

const leadBySlug: Record<string, string> = {
  "cost-structure": "飲食業と食品製造業のコスト配分を可視化し、なぜ複合コスト上昇が利益を急速に圧迫するのかを整理します。",
  "grain-and-oil": "小麦・食用油・コメ・砂糖を中心に、主食系メニューへ波及するコスト上昇を確認します。",
  protein: "豚肉・鶏卵・牛肉・水産物の供給制約と価格上昇を、飼料・燃油の視点から確認します。",
  "produce-and-dairy": "青果と乳製品の変動要因を整理し、天候とエネルギーの複合リスクを確認します。",
  "restaurant-impact": "業態別に原価率悪化と利益圧迫の規模を試算し、赤字化リスクの境界を確認します。",
  "food-manufacturer": "食品メーカーの値上げ動向、規模別コスト増、価格転嫁の実態を確認します。",
  "action-roadmap": "短期・中期・長期の3段階で、実行しやすい仕入コスト対策の優先順位を整理します。",
};

export default async function FoodScenarioPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getFoodScenarioPageBySlug(slug);
  if (!page || slug === "index") notFound();

  const related = relatedLinksBySlug[slug];
  const url = `https://simulator.eic-jp.org${FOOD_SCENARIO_BASE_PATH}/${slug}`;

  return (
    <>
      <ArticleJsonLd
        headline={page.title}
        description={page.description}
        url={url}
        datePublished="2026-04-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "有事シナリオ分析（食料品仕入コスト）", url: `https://simulator.eic-jp.org${FOOD_SCENARIO_BASE_PATH}` },
          { name: page.label },
        ]}
      />
      <FoodScenarioLayout slug={slug} lead={leadBySlug[slug]}>
        {renderContent(slug)}

        <RelatedLinks heading={related.heading} links={related.links} />

        <ContentCta
          heading="次にすること"
          description="総論ページとエネルギー関連特集を併せて確認すると、仕入・製造・物流を横断した対策優先順位を決めやすくなります。"
          links={[
            { href: FOOD_SCENARIO_BASE_PATH, label: "総論トップへ戻る" },
            { href: "/special/gas-scenario-analysis", label: "法人ガス代シナリオ分析を見る" },
            { href: "/special/oil-scenario-analysis", label: "原油高・物流コスト分析を見る" },
          ]}
        />
      </FoodScenarioLayout>
    </>
  );
}
