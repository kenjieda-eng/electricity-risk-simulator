import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "../../../../components/seo/JsonLd";
import ContentCta from "../../../../components/simulator/ContentCta";
import RelatedLinks from "../../../../components/simulator/RelatedLinks";
import {
  MATERIALS_SCENARIO_BASE_PATH,
  MATERIALS_SCENARIO_SLUGS,
  getMaterialsScenarioPageBySlug,
} from "../../../../lib/materialsPackagingScenarioAnalysis";
import MaterialsScenarioChartCard from "../_components/MaterialsScenarioCharts";
import MaterialsScenarioLayout from "../_components/MaterialsScenarioLayout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return MATERIALS_SCENARIO_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getMaterialsScenarioPageBySlug(slug);
  if (!page || slug === "index") {
    return {};
  }

  const url = `https://simulator.eic-jp.org${MATERIALS_SCENARIO_BASE_PATH}/${slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "法人電気料金ナビ",
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

function NaphthaPetrochemicalContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ナフサとは何か</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          ナフサは原油を精製する過程で得られる軽質留分で、石油化学産業の主要な出発原料です。ガソリンに次いで石油製品全体の大きな比率を占め、
          ここからエチレン・プロピレン・ブタジエン・ベンゼンなどの基礎化学品が作られます。
        </p>
      </section>

      <MaterialsScenarioChartCard kind="naphtha-share" title="石油製品に占めるナフサ比率（概算）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ナフサ→最終製品のサプライチェーン</h2>
        <div className="mt-4 grid gap-3 text-center text-sm md:grid-cols-5">
          <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-red-900">原油<br /><span className="text-xs">中東依存95%</span></div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-amber-900">ナフサ<br /><span className="text-xs">中東依存73.6%</span></div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900">エチレン等<br /><span className="text-xs">基礎化学品</span></div>
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-3 text-purple-900">樹脂・化学品<br /><span className="text-xs">PE / PP / PVC</span></div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-emerald-900">最終製品<br /><span className="text-xs">包装・容器・建材</span></div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エチレン減産の現状</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          国内12基のエチレン生産設備のうち、2026年3月下旬時点で半数の6基が減産状態です。2月の稼働率は75.7%で、好不況の目安となる90%を
          43カ月連続で下回っています。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-semibold text-rose-800">減産中の拠点</p>
            <p className="mt-1 text-2xl font-bold text-rose-900">6/12基</p>
            <p className="mt-1 text-xs text-rose-800">国内の半数</p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">2月稼働率</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">75.7%</p>
            <p className="mt-1 text-xs text-amber-800">43カ月連続90%割れ</p>
          </article>
          <article className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-xs font-semibold text-sky-800">ナフサ在庫</p>
            <p className="mt-1 text-2xl font-bold text-sky-900">約20日分</p>
            <p className="mt-1 text-xs text-sky-800">脆弱な備蓄構造</p>
          </article>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">企業</th>
                <th className="border border-slate-200 px-3 py-2">拠点</th>
                <th className="border border-slate-200 px-3 py-2">状況</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">三菱ケミカル</td><td className="border border-slate-200 px-3 py-2">鹿島</td><td className="border border-slate-200 px-3 py-2">減産中（3月6日〜）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">三井化学</td><td className="border border-slate-200 px-3 py-2">市原・高石（2基）</td><td className="border border-slate-200 px-3 py-2">減産中</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">出光興産</td><td className="border border-slate-200 px-3 py-2">千葉・徳山</td><td className="border border-slate-200 px-3 py-2">減産中（3月16日〜）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">京葉エチレン（住化・丸善）</td><td className="border border-slate-200 px-3 py-2">千葉</td><td className="border border-slate-200 px-3 py-2">再稼働延期（定修中）</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">旭化成</td><td className="border border-slate-200 px-3 py-2">水島</td><td className="border border-slate-200 px-3 py-2">稼働率低下</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">在庫とタイムリミット</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          原油備蓄は約254日分ある一方、ナフサ在庫は約20日分にとどまります。原油備蓄があっても、ナフサ不足を短期で解消できるわけではありません。
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white p-3">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">品目</th>
                <th className="border border-slate-200 px-3 py-2 text-right">備蓄量</th>
                <th className="border border-slate-200 px-3 py-2">備考</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">原油</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">254日分</td><td className="border border-slate-200 px-3 py-2">国家＋民間備蓄</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">ナフサ</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">約20日分</td><td className="border border-slate-200 px-3 py-2">国内消費ベース</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">中間材料（樹脂等）</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">約2カ月分</td><td className="border border-slate-200 px-3 py-2">製品により差が大きい</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          民間備蓄放出や輸入分を加味しても在庫は限定的で、根本解決には供給源の多角化が必要です。
        </p>
      </section>
    </>
  );
}

function PlasticResinContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">4大汎用樹脂の値上げ状況</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[780px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">樹脂</th>
                <th className="border border-slate-200 px-3 py-2">主な用途</th>
                <th className="border border-slate-200 px-3 py-2 text-right">値上げ幅（確定・予測）</th>
                <th className="border border-slate-200 px-3 py-2">供給</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">PVC（塩ビ）</td><td className="border border-slate-200 px-3 py-2">水道管、建材、床材、電線被覆</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">+30〜35円/kg（約2割）</td><td className="border border-slate-200 px-3 py-2">供給制限</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">PE（ポリエチレン）</td><td className="border border-slate-200 px-3 py-2">食品袋、フィルム、容器</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜20%（予測）</td><td className="border border-slate-200 px-3 py-2">逼迫傾向</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">PP（ポリプロピレン）</td><td className="border border-slate-200 px-3 py-2">食品容器、自動車部品、繊維</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜20%（予測）</td><td className="border border-slate-200 px-3 py-2">逼迫傾向</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">PET（ポリエステル）</td><td className="border border-slate-200 px-3 py-2">ペットボトル、繊維、フィルム</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%（予測）</td><td className="border border-slate-200 px-3 py-2">価格上昇圧力</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">塩ビ樹脂 — 4月1日から約2割値上げ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          信越化学（国内シェア約3割）は4月1日納入分から30円/kg以上、カネカは35円/kg以上の値上げを実施。原料エチレンの供給制限と減産が
          直接の要因で、追加値上げリスクも残ります。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4"><p className="text-xs text-rose-800">信越化学</p><p className="mt-1 text-2xl font-bold text-rose-900">+30円/kg</p><p className="text-xs text-rose-800">4月1日〜 約2割</p></article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4"><p className="text-xs text-rose-800">カネカ</p><p className="mt-1 text-2xl font-bold text-rose-900">+35円/kg</p><p className="text-xs text-rose-800">全品種対象</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">追加値上げリスク</p><p className="mt-1 text-2xl font-bold text-amber-900">あり</p><p className="text-xs text-amber-800">情勢次第</p></article>
        </div>
      </section>

      <MaterialsScenarioChartCard kind="plastic-scenarios" title="シナリオ別 樹脂価格の推移予測" />

      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">「値上げ」だけでなく「供給制限」のリスク</h2>
        <p className="mt-3 text-sm leading-7 text-red-900">
          フクビ化学工業はナフサ不足を理由に全製品の供給制限を発表。価格上昇だけでなく、必要量が確保できない事態が現実化しつつあります。
          医療用プラスチックのような代替困難品では在庫枯渇リスクに注意が必要です。
        </p>
      </section>

      <MaterialsScenarioChartCard kind="plastic-industry-impact" title="業種別の影響度（調達コスト増加率）" heightClassName="h-[260px] sm:h-[320px]" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人が押さえるべきポイント</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
          <li><strong>塩ビの値上げは序章</strong> — PE/PP本格値上げを見据えて調達計画を前倒しで見直す。</li>
          <li><strong>代替材の切替え検討</strong> — バイオプラスチック、再生材、紙素材の適合性評価を進める。</li>
          <li><strong>長期契約の見直し</strong> — 固定価格契約の期限と数量条件を点検し、スポット依存を下げる。</li>
          <li><strong>在庫積み増しの判断</strong> — 重要品は積むが、過剰在庫によるキャッシュ圧迫は避ける。</li>
        </ul>
      </section>
    </>
  );
}

function PackagingContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">包装資材の値上げマップ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          包装資材はナフサ由来のプラスチックを直接使う品目（フィルム、トレー）と、間接影響を受ける品目（段ボールのコーティング、接着剤）に分かれます。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">資材</th>
                <th className="border border-slate-200 px-3 py-2">主原料</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2値上げ予測</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S3値上げ予測</th>
                <th className="border border-slate-200 px-3 py-2">影響時期</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">ストレッチフィルム</td><td className="border border-slate-200 px-3 py-2">PE（ナフサ直結）</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+30〜50%</td><td className="border border-slate-200 px-3 py-2">2026年5〜6月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">OPPテープ</td><td className="border border-slate-200 px-3 py-2">PP（ナフサ直結）</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+30〜45%</td><td className="border border-slate-200 px-3 py-2">2026年5〜6月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">食品トレー</td><td className="border border-slate-200 px-3 py-2">PS/PP</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜20%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+25〜40%</td><td className="border border-slate-200 px-3 py-2">2026年6〜7月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">PETボトル</td><td className="border border-slate-200 px-3 py-2">PET（ナフサ由来）</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜20%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+20〜35%</td><td className="border border-slate-200 px-3 py-2">2026年夏以降</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">食品包装フィルム</td><td className="border border-slate-200 px-3 py-2">PE/PP複合</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+30〜50%</td><td className="border border-slate-200 px-3 py-2">2026年6〜7月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">段ボール</td><td className="border border-slate-200 px-3 py-2">紙（＋PEコーティング）</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+10〜20%</td><td className="border border-slate-200 px-3 py-2">2026年秋以降</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">緩衝材（エアキャップ）</td><td className="border border-slate-200 px-3 py-2">PE</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+30〜45%</td><td className="border border-slate-200 px-3 py-2">2026年5〜6月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">樹脂パレット</td><td className="border border-slate-200 px-3 py-2">PP/PE</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜20%</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+25〜40%</td><td className="border border-slate-200 px-3 py-2">2026年夏以降</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">EC事業者への影響</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          EC（通販）事業者は段ボール・緩衝材・ストレッチフィルム・OPPテープを大量に使用するため、包装資材コスト上昇が配送1件あたりコストへ直結します。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">配送1件あたり包材コスト増</p><p className="mt-1 text-2xl font-bold text-amber-900">+8〜20円</p><p className="text-xs text-amber-800">S2想定</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">月間1万件出荷</p><p className="mt-1 text-2xl font-bold text-amber-900">+8〜20万円/月</p><p className="text-xs text-amber-800">S2想定</p></article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4"><p className="text-xs text-rose-800">燃料サーチャージと合算</p><p className="mt-1 text-2xl font-bold text-rose-900">+30〜60円/件</p><p className="text-xs text-rose-800">S3 包材＋物流</p></article>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">食品メーカーへの影響</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          食品メーカーは中身の原料だけでなく、包装資材の上昇圧力にも直面します。2026年の値上げ要因では「包装・資材」の寄与が高水準です。
        </p>
      </section>

      <MaterialsScenarioChartCard
        kind="packaging-food-factors"
        title="食品値上げ要因に占める各項目の比率"
        description="原材料高に次いで包装・資材の比率が高く、価格改定の主要因になっています。"
      />

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">「容量減（実質値上げ）」が増える理由</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          価格据え置きで内容量を減らす手法は、包材コストと原材料コストを同時に抑えるために選択されやすくなります。消費者向け表示では見えにくくても、
          調達量ベースでは影響が大きくなります。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">段ボールの特殊事情</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          段ボールは紙製品ですが、防水コーティングのポリエチレン、貼合接着剤、製造エネルギー、古紙回収物流の各経路でナフサ高騰の影響を受けます。
          単価上昇幅が小さくても、使用量の多さから絶対額のインパクトは大きくなります。
        </p>
      </section>
    </>
  );
}

function ChemicalsContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ナフサから生まれる化学品の全体像</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          ナフサ由来の基礎化学品から、接着剤・塗料・洗剤・合成ゴム・合成繊維まで、産業の広範囲で使われる製品が展開されます。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">基礎化学品</th>
                <th className="border border-slate-200 px-3 py-2">主な誘導品</th>
                <th className="border border-slate-200 px-3 py-2">最終用途例</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2値上げ予測</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">エチレン</td><td className="border border-slate-200 px-3 py-2">PE、PVC、酢酸ビニル、EG</td><td className="border border-slate-200 px-3 py-2">フィルム、パイプ、接着剤、PET原料</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">プロピレン</td><td className="border border-slate-200 px-3 py-2">PP、アクリル酸、IPA</td><td className="border border-slate-200 px-3 py-2">容器、塗料、消毒液</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">ブタジエン</td><td className="border border-slate-200 px-3 py-2">合成ゴム（SBR、BR）</td><td className="border border-slate-200 px-3 py-2">タイヤ、シール材、パッキン</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+20〜30%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">ベンゼン</td><td className="border border-slate-200 px-3 py-2">スチレン、フェノール、ナイロン原料</td><td className="border border-slate-200 px-3 py-2">発泡スチロール、断熱材、繊維</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">トルエン / キシレン</td><td className="border border-slate-200 px-3 py-2">溶剤、TDI、PTA</td><td className="border border-slate-200 px-3 py-2">塗料、ウレタン、ポリエステル繊維</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜30%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">産業別の化学品依存度</h2>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">製造業（自動車・電機・機械）</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">接着剤</p><p className="mt-1 text-sm text-slate-700">車体軽量化で接着工法が増加。エポキシ・ウレタン系の上昇が直撃。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">塗料</p><p className="mt-1 text-sm text-slate-700">溶剤と樹脂の双方が上昇し、二重にコスト圧力がかかる。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">合成ゴム</p><p className="mt-1 text-sm text-slate-700">ブタジエン供給逼迫で、タイヤ・シール材の調達難度が上昇。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">洗浄剤</p><p className="mt-1 text-sm text-slate-700">溶剤系・界面活性剤系の双方で値上げが進行。</p></article>
        </div>
        <h3 className="mt-6 text-lg font-semibold text-slate-900">建設業</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">塗料・コーティング</p><p className="mt-1 text-sm text-slate-700">アクリル・ウレタン・シリコン系で幅広く上昇。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">シーリング材</p><p className="mt-1 text-sm text-slate-700">目地材の価格上昇で改修工事原価が増加。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">断熱材</p><p className="mt-1 text-sm text-slate-700">EPS・ウレタンフォームがスチレン・TDI高騰の影響を受ける。</p></article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">配管材</p><p className="mt-1 text-sm text-slate-700">塩ビ管値上げが水道・排水工事の積算を押し上げる。</p></article>
        </div>
      </section>

      <MaterialsScenarioChartCard kind="chemicals-trend" title="化学品の値上げ推移予測" />

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">「代替しにくい」が化学品の特徴</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          医療や自動車向けなど、厳しい仕様が求められる化学品は代替困難なものが多く、価格上昇の吸収余地が小さくなります。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">界面活性剤の波及効果</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          界面活性剤は洗剤、食品乳化剤、化粧品、農薬など幅広い用途に使用され、エチレンオキサイド由来品はエチレン減産の影響を受けやすい領域です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">用途</th>
                <th className="border border-slate-200 px-3 py-2 text-right">市場規模</th>
                <th className="border border-slate-200 px-3 py-2">値上げ影響</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">家庭用洗剤・シャンプー</td><td className="border border-slate-200 px-3 py-2 text-right">大</td><td className="border border-slate-200 px-3 py-2 text-amber-700">容器＋中身の両方が値上げ</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">業務用洗浄剤</td><td className="border border-slate-200 px-3 py-2 text-right">中</td><td className="border border-slate-200 px-3 py-2 text-amber-700">原料＋容器コスト増</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">食品用乳化剤</td><td className="border border-slate-200 px-3 py-2 text-right">中</td><td className="border border-slate-200 px-3 py-2 text-amber-700">調味料類の原価増</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">農薬展着剤</td><td className="border border-slate-200 px-3 py-2 text-right">小</td><td className="border border-slate-200 px-3 py-2">農業コストへ転嫁</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function MetalsContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">非鉄金属の価格上昇要因</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          非鉄金属価格はLME相場と為替に左右されます。中東情勢の緊迫化は精錬コストを押し上げ、地政学リスクプレミアムを通じて価格に上乗せされます。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">アルミ（LME）</p><p className="mt-1 text-2xl font-bold text-amber-900">2,650$/t</p><p className="text-xs text-amber-800">前年比 +18%</p></article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4"><p className="text-xs text-rose-800">銅（LME）</p><p className="mt-1 text-2xl font-bold text-rose-900">9,800$/t</p><p className="text-xs text-rose-800">前年比 +22%</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">ドル円</p><p className="mt-1 text-2xl font-bold text-amber-900">159円台</p><p className="text-xs text-amber-800">円安が調達コスト増幅</p></article>
        </div>
      </section>

      <MaterialsScenarioChartCard kind="metals-trend" title="主要非鉄金属の価格推移予測（LMEベース）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">産業別の影響</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">金属</th>
                <th className="border border-slate-200 px-3 py-2">主な用途</th>
                <th className="border border-slate-200 px-3 py-2">影響を受ける業種</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2コスト増</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">アルミニウム</td><td className="border border-slate-200 px-3 py-2">飲料缶、自動車部品、建材、電子機器筐体</td><td className="border border-slate-200 px-3 py-2">飲料、自動車、建設</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">銅</td><td className="border border-slate-200 px-3 py-2">電線、プリント基板、熱交換器、配管</td><td className="border border-slate-200 px-3 py-2">電機、建設、自動車</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+20〜30%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">亜鉛</td><td className="border border-slate-200 px-3 py-2">メッキ鋼板、ダイカスト、防食処理</td><td className="border border-slate-200 px-3 py-2">建設、自動車、インフラ</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜20%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">ニッケル</td><td className="border border-slate-200 px-3 py-2">ステンレス鋼、EV電池</td><td className="border border-slate-200 px-3 py-2">厨房機器、食品加工、EV</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜20%</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2 font-semibold">錫</td><td className="border border-slate-200 px-3 py-2">はんだ、メッキ、合金</td><td className="border border-slate-200 px-3 py-2">電子機器製造</td><td className="border border-slate-200 px-3 py-2 text-right">+10〜15%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">アルミ缶への影響 — 飲料メーカー直撃</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          350ml缶1本あたりのアルミ原料コストは約15〜20円。S2では+3〜5円/缶の上昇が見込まれ、大量生産企業では年間で大きな負担になります。
          日本の高いリサイクル率は下支え要因ですが、バージン材上昇分を完全吸収するのは困難です。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">銅配線と半導体・電子機器</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          銅はEV化・データセンター増設・再エネ拡大に伴う構造的需要増が続く中で、供給不安が重なると高止まりしやすく、電子機器全般の製造コストへ波及します。
        </p>
      </section>

      <section className="rounded-xl border border-amber-300 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-amber-900">CBAMの影響にも注目</h2>
        <p className="mt-3 text-sm leading-7 text-amber-900">
          EUの炭素国境調整措置（CBAM）本格運用により、欧州向け輸出企業はLME価格・円安・炭素コストの三重負担となる可能性があります。
        </p>
      </section>
    </>
  );
}

function IndustryImpactContent() {
  return (
    <>
      <MaterialsScenarioChartCard
        kind="industry-impact"
        title="業種別コスト増の全体像"
        description="S2・S3シナリオでの調達コスト増加率を業種別に比較しています。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">食品メーカー</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          食材、包装資材、物流費、エネルギーの4重コスト増が同時進行し、利益率への圧力が大きくなります。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">包装資材コスト増</p><p className="mt-1 text-2xl font-bold text-amber-900">+15〜25%</p><p className="text-xs text-amber-800">フィルム・トレー・PET</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4"><p className="text-xs text-amber-800">年商50億円の場合</p><p className="mt-1 text-2xl font-bold text-amber-900">+3,000〜7,500万円</p><p className="text-xs text-amber-800">S2 包材＋物流のみ</p></article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4"><p className="text-xs text-rose-800">営業利益圧迫率</p><p className="mt-1 text-2xl font-bold text-rose-900">15〜30%</p><p className="text-xs text-rose-800">S2 利益率5%想定</p></article>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[840px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">コスト項目</th>
                <th className="border border-slate-200 px-3 py-2 text-right">売上比率</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2値上げ率</th>
                <th className="border border-slate-200 px-3 py-2 text-right">年間増加額（年商50億）</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">食材原料</td><td className="border border-slate-200 px-3 py-2 text-right">40%</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right">+1〜2億円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">包装資材</td><td className="border border-slate-200 px-3 py-2 text-right">8%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+6,000万〜1億円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">物流費</td><td className="border border-slate-200 px-3 py-2 text-right">5%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜20%</td><td className="border border-slate-200 px-3 py-2 text-right">+2,500〜5,000万円</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">エネルギー（ガス・電気）</td><td className="border border-slate-200 px-3 py-2 text-right">3%</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+15〜25%</td><td className="border border-slate-200 px-3 py-2 text-right">+2,250〜3,750万円</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">EC・通販事業者</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          梱包資材と配送費の二重コスト増により、出荷件数が多い事業者ほど負担が拡大します。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">月間出荷数</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S1 梱包材増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2 梱包材増</th>
                <th className="border border-slate-200 px-3 py-2 text-right">S2 物流費込み</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">1,000件/月</td><td className="border border-slate-200 px-3 py-2 text-right">+5,000〜1万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+1〜2万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+3〜5万円/月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">10,000件/月</td><td className="border border-slate-200 px-3 py-2 text-right">+5〜10万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+10〜20万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+30〜50万円/月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">100,000件/月</td><td className="border border-slate-200 px-3 py-2 text-right">+50〜100万円</td><td className="border border-slate-200 px-3 py-2 text-right text-amber-700">+100〜200万円</td><td className="border border-slate-200 px-3 py-2 text-right text-rose-700">+300〜500万円/月</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">製造業・建設業の留意点</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          製造業では小物部品の供給制限が操業停止リスクに直結し、建設業では固定価格請負契約における逆ザヤリスクが高まります。契約の価格改定条項確認と
          重要資材の優先在庫化が必要です。
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
        name: "原材料の値上げに対して今すぐできることは？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "契約見直し、相見積もり、在庫最適化、包装簡素化の4点が即効性の高い対策です。",
        },
      },
      {
        "@type": "Question",
        name: "プラスチックの代替材にはどのような選択肢がありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "紙素材、バイオプラスチック、再生プラスチック、ガラス・金属などが候補です。用途ごとの評価が必要です。",
        },
      },
      {
        "@type": "Question",
        name: "包装資材のコスト増を価格に転嫁すべきですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "B2Bでは原材料サーチャージ、B2Cでは容量設計見直しや価格改定の組み合わせが有効です。",
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
          <p className="text-xs font-semibold text-emerald-800">全シナリオ共通（今すぐ・コスト低）</p>
          <p className="mt-2 text-sm leading-7 text-emerald-900">現状把握と契約見直しを最優先に、調達の基礎体力を整えます。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">契約の価格改定条項確認</p><p className="text-sm text-slate-700">固定価格契約の残存期間と改定条件を洗い出す。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">調達先の複数化</p><p className="text-sm text-slate-700">2〜3社の相見積もりを常態化し、単一依存を回避。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">在庫水準の見直し</p><p className="text-sm text-slate-700">重要資材の安全在庫を1〜2カ月分へ調整。</p></div>
            <div className="rounded-lg border border-emerald-200 bg-white p-3"><p className="font-semibold text-slate-900">使用量の削減</p><p className="text-sm text-slate-700">包装簡素化・端材削減で使用量5〜10%削減。</p></div>
          </div>
        </article>

        <article className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold text-amber-800">S2以上に備える（夏までに着手）</p>
          <p className="mt-2 text-sm leading-7 text-amber-900">構造的な値上げ局面に対応するため、代替材と価格戦略を並行して進めます。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">代替材の評価・テスト</p><p className="text-sm text-slate-700">紙素材、バイオプラ、再生材の適合性を確認。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">価格転嫁の交渉</p><p className="text-sm text-slate-700">B2Bは原材料サーチャージ、B2Cは価格改定と容量設計を検討。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">海外調達先の開拓</p><p className="text-sm text-slate-700">中東以外の供給ルートを確保し、調達安定性を上げる。</p></div>
            <div className="rounded-lg border border-amber-200 bg-white p-3"><p className="font-semibold text-slate-900">パッケージリデザイン</p><p className="text-sm text-slate-700">薄肉化・形状変更で1個あたり資材コストを圧縮。</p></div>
          </div>
        </article>

        <article className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4">
          <p className="text-xs font-semibold text-rose-800">S3に備える（経営判断）</p>
          <p className="mt-2 text-sm leading-7 text-rose-900">供給制限と価格急騰の同時発生を前提に、事業構造側の対応を進めます。</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">製品ポートフォリオ見直し</p><p className="text-sm text-slate-700">脆弱SKUを縮小し、利益率が高い製品へ集中。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">リサイクル材活用</p><p className="text-sm text-slate-700">再生PET・再生PE・再生PPの比率を引き上げる。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">長期調達契約再構築</p><p className="text-sm text-slate-700">固定＋変動のハイブリッドで数量確保と価格安定を両立。</p></div>
            <div className="rounded-lg border border-rose-200 bg-white p-3"><p className="font-semibold text-slate-900">内製化・垂直統合の検討</p><p className="text-sm text-slate-700">包装工程や調達経路を見直し、中間コストを圧縮。</p></div>
          </div>
        </article>
      </section>

      <MaterialsScenarioChartCard kind="action-effect" title="対策の効果と実施期間（散布図）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">対策の効果とコスト一覧</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">対策</th>
                <th className="border border-slate-200 px-3 py-2 text-right">実施コスト</th>
                <th className="border border-slate-200 px-3 py-2 text-right">コスト削減効果</th>
                <th className="border border-slate-200 px-3 py-2 text-right">実施期間</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">契約見直し・相見積もり</td><td className="border border-slate-200 px-3 py-2 text-right">0円</td><td className="border border-slate-200 px-3 py-2 text-right">3〜8%</td><td className="border border-slate-200 px-3 py-2 text-right text-emerald-700">即日〜1カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">包装簡素化・使用量削減</td><td className="border border-slate-200 px-3 py-2 text-right">低</td><td className="border border-slate-200 px-3 py-2 text-right">5〜10%</td><td className="border border-slate-200 px-3 py-2 text-right">1〜3カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">代替材への切替え</td><td className="border border-slate-200 px-3 py-2 text-right">中（テスト費用）</td><td className="border border-slate-200 px-3 py-2 text-right">10〜20%</td><td className="border border-slate-200 px-3 py-2 text-right">3〜6カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">パッケージリデザイン</td><td className="border border-slate-200 px-3 py-2 text-right">中〜高</td><td className="border border-slate-200 px-3 py-2 text-right">15〜30%</td><td className="border border-slate-200 px-3 py-2 text-right">6〜12カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">リサイクル材活用</td><td className="border border-slate-200 px-3 py-2 text-right">中</td><td className="border border-slate-200 px-3 py-2 text-right">10〜25%</td><td className="border border-slate-200 px-3 py-2 text-right">6〜12カ月</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">海外調達先の多角化</td><td className="border border-slate-200 px-3 py-2 text-right">高（開拓費用）</td><td className="border border-slate-200 px-3 py-2 text-right">供給安定化</td><td className="border border-slate-200 px-3 py-2 text-right">6〜18カ月</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">エネルギー・物流との複合対策</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          原材料に加え、ガス・電気・物流も同時上昇するため、調達・製造・物流を分断せずサプライチェーン全体で最適化することが重要です。
          <Link href="/special/oil-scenario-analysis" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
            原油・物流コスト分析
          </Link>
          と
          <Link href="/special/gas-scenario-analysis" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
            ガス代シナリオ分析
          </Link>
          も併せてご確認ください。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">よくある質問</h2>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">原材料の値上げに対して今すぐできることは？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">契約見直し、相見積もり、在庫最適化、包装簡素化の4点が即効性の高い対策です。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">プラスチックの代替材にはどのような選択肢がありますか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">紙素材、バイオプラスチック、再生プラスチック、ガラス・金属などがあります。用途ごとに性能とコストの評価が必要です。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">包装資材のコスト増を価格に転嫁すべきですか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">B2Bでは原材料サーチャージ、B2Cでは容量変更・パッケージ簡素化・価格改定の組み合わせが有効です。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">供給制限が起きた場合の備えは？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">代替困難な重要資材から優先在庫を積み増し、BCPに供給途絶シナリオと代替品切替リードタイムを反映してください。</p>
        </details>
      </section>
    </>
  );
}

function renderContent(slug: string) {
  if (slug === "naphtha-petrochemical") return <NaphthaPetrochemicalContent />;
  if (slug === "plastic-resin") return <PlasticResinContent />;
  if (slug === "packaging") return <PackagingContent />;
  if (slug === "chemicals") return <ChemicalsContent />;
  if (slug === "non-ferrous-metals") return <MetalsContent />;
  if (slug === "industry-impact") return <IndustryImpactContent />;
  if (slug === "action-roadmap") return <ActionRoadmapContent />;
  return null;
}

const relatedLinksBySlug: Record<string, { heading: string; links: { href: string; title: string; description: string }[] }> = {
  "naphtha-petrochemical": {
    heading: "関連ページ",
    links: [
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/plastic-resin`, title: "プラスチック樹脂", description: "PE/PP/PET/PVCへの波及を確認する。" },
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/packaging`, title: "包装資材", description: "段ボール・フィルムの値上げ時期を確認する。" },
    ],
  },
  "plastic-resin": {
    heading: "関連ページ",
    links: [
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/chemicals`, title: "化学品", description: "接着剤・塗料などの周辺材料を確認する。" },
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/industry-impact`, title: "業種別影響", description: "業界別のコスト増を確認する。" },
    ],
  },
  packaging: {
    heading: "関連ページ",
    links: [
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/plastic-resin`, title: "プラスチック樹脂", description: "包材の原料側の上昇要因を確認する。" },
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "包材コストへの実務対策を確認する。" },
    ],
  },
  chemicals: {
    heading: "関連ページ",
    links: [
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/non-ferrous-metals`, title: "非鉄金属", description: "原材料高の他領域も確認する。" },
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/industry-impact`, title: "業種別影響", description: "化学品コストが業種へ与える影響を確認。" },
    ],
  },
  "non-ferrous-metals": {
    heading: "関連ページ",
    links: [
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/chemicals`, title: "化学品", description: "化学品の価格動向と併せて確認する。" },
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/industry-impact`, title: "業種別影響", description: "調達コスト全体への波及を確認する。" },
    ],
  },
  "industry-impact": {
    heading: "関連ページ",
    links: [
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/packaging`, title: "包装資材", description: "包材コスト上昇の内訳を確認する。" },
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/action-roadmap`, title: "対策ロードマップ", description: "優先順位をつけた対策へつなげる。" },
    ],
  },
  "action-roadmap": {
    heading: "関連ページ",
    links: [
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/naphtha-petrochemical`, title: "ナフサ・石化", description: "供給制約の前提条件を確認する。" },
      { href: `${MATERIALS_SCENARIO_BASE_PATH}/industry-impact`, title: "業種別影響", description: "自社業種への影響を確認する。" },
    ],
  },
};

const leadBySlug: Record<string, string> = {
  "naphtha-petrochemical": "原油からナフサ、エチレン、樹脂、最終製品へ波及する構造を把握し、どこで供給制約が顕在化するかを確認します。",
  "plastic-resin": "塩ビ値上げを起点に、PE/PP/PETの上昇と供給制限リスクを時系列で整理します。",
  packaging: "段ボール・フィルム・トレーなど包装資材の値上げ幅と時期を、物流・食品への影響と合わせて確認します。",
  chemicals: "溶剤・接着剤・塗料・界面活性剤の上昇を、用途別・業種別に整理して確認します。",
  "non-ferrous-metals": "アルミ・銅・亜鉛の国際相場と円安影響を重ね、調達コスト上昇の規模を確認します。",
  "industry-impact": "食品、EC、製造、建設など主要業種への波及を、売上・利益への影響まで具体化します。",
  "action-roadmap": "短期・中期・長期の3段階で、契約・代替材・在庫・価格転嫁の実務アクションを整理します。",
};

export default async function MaterialsScenarioPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getMaterialsScenarioPageBySlug(slug);
  if (!page || slug === "index") {
    notFound();
  }

  const related = relatedLinksBySlug[slug];
  const url = `https://simulator.eic-jp.org${MATERIALS_SCENARIO_BASE_PATH}/${slug}`;

  return (
    <>
      <ArticleJsonLd
        headline={page.title}
        description={page.description}
        url={url}
        datePublished="2026-04-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "有事シナリオ分析（原材料・包装資材）", url: `https://simulator.eic-jp.org${MATERIALS_SCENARIO_BASE_PATH}` },
          { name: page.label },
        ]}
      />
      <MaterialsScenarioLayout slug={slug} lead={leadBySlug[slug]}>
        {renderContent(slug)}

        <RelatedLinks heading={related.heading} links={related.links} />

        <ContentCta
          heading="次にすること"
          description="総論ページとエネルギー関連特集も併せて確認すると、調達・製造・物流を横断した判断につながります。"
          links={[
            { href: MATERIALS_SCENARIO_BASE_PATH, label: "総論トップへ戻る" },
            { href: "/special/oil-scenario-analysis", label: "原油・物流コスト分析を見る" },
            { href: "/special/gas-scenario-analysis", label: "法人ガス代シナリオ分析を見る" },
          ]}
        />
      </MaterialsScenarioLayout>
    </>
  );
}
