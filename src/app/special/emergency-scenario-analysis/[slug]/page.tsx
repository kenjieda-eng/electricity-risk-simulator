import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "../../../../components/seo/JsonLd";
import EmergencyScenarioChartCard from "../_components/EmergencyScenarioCharts";
import EmergencyScenarioLayout from "../_components/EmergencyScenarioLayout";
import {
  EMERGENCY_SCENARIO_BASE_PATH,
  EMERGENCY_SCENARIO_SLUGS,
  getEmergencyScenarioPageBySlug,
} from "../../../../lib/emergencyScenarioAnalysis";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return EMERGENCY_SCENARIO_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getEmergencyScenarioPageBySlug(slug);
  if (!page || slug === "index") {
    return {};
  }

  const url = `https://simulator.eic-jp.org${EMERGENCY_SCENARIO_BASE_PATH}/${slug}`;
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

function BackgroundContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2026年有事局面のタイムライン</h2>
        <div className="mt-4 space-y-3 border-l-2 border-slate-200 pl-4 text-sm leading-7 text-slate-700">
          <p><strong>2月28日:</strong> 中東での軍事緊張が急上昇し、原油市場が急反応。</p>
          <p><strong>3月2日:</strong> 海上輸送に制約が発生し、供給不安が拡大。ホルムズ海峡周辺で物流遅延が顕在化。</p>
          <p><strong>3月9日:</strong> WTI が一時 120 ドル近辺まで上昇し、短期の過熱局面に。</p>
          <p><strong>3月11日:</strong> 備蓄放出や外交調整の報道で急落局面も発生したが、基調は不安定なまま推移。</p>
          <p><strong>3月下旬:</strong> 停戦観測が強まる一方で、市場は高ボラティリティを維持。</p>
          <p><strong>4月初旬:</strong> 100 ドル台で高止まりし、電力コストへの波及が現実化。</p>
          <p><strong>4月末以降:</strong> 停戦時期と航路正常化のタイミング次第で、法人電気代のシナリオ分岐が拡大。</p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ホルムズ海峡の重要性を示す3指標</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs text-slate-600">世界の原油供給に占める割合</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">約20%</p>
            <p className="mt-1 text-xs text-slate-600">日量約2,000万バレル規模</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs text-slate-600">日本の原油輸入 中東依存度</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">約94%</p>
            <p className="mt-1 text-xs text-slate-600">輸入先集中による脆弱性</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs text-slate-600">中東輸入の海峡経由比率</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">約80%</p>
            <p className="mt-1 text-xs text-slate-600">物流・保険の影響を受けやすい</p>
          </article>
        </div>
      </section>

      <EmergencyScenarioChartCard
        kind="oil-history"
        title="原油価格の推移（2026年）"
        description="停戦観測で下がる局面があっても、供給懸念が残る間は高止まりが続きやすい構造です。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">原油価格推移の読み方</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          WTI は攻撃前の 67 ドル台から 120 ドル近辺まで急騰し、その後は備蓄放出や停戦観測で一時下落しても 100 ドル前後で高止まりしています。
          市場は「停戦するか」だけでなく「輸送・保険・施設復旧がいつ正常化するか」を織り込むため、見出し上の停戦報道だけでは価格が元に戻りません。
        </p>
      </section>

      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">ホルムズ海峡が重要な理由</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-red-900">
          <li>世界の原油供給の約2割が通過するボトルネック。</li>
          <li>日本の輸入エネルギーは中東依存度が高く、物流停止の影響を受けやすい。</li>
          <li>停戦しても航路再開と保険正常化には時間差が生じる。</li>
        </ul>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">日本経済への波及とタイムラグ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          日本はエネルギー純輸入依存度が高く、原油高は交易条件の悪化と企業コスト増を同時に招きます。法人電気代は原油高の影響を
          直ちに受けるのではなく、燃料費調整・市場価格連動を経由して 3〜4 カ月程度の時差で請求へ反映されます。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          そのため「停戦報道が出たから翌月にすぐ下がる」という読みは危険です。足元の調達価格と制度上の算定ルールが重なるため、
          停戦後もしばらくは高い請求が続く可能性があります。
        </p>
      </section>
    </>
  );
}

function MechanismContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人電気代の構成要素</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          法人向け電気料金は「固定単価」「変動単価」「再エネ賦課金」の3層で構成されます。今回の有事局面では、
          特に変動単価（燃料費調整・市場調整）に原油高と為替の影響が重なり、請求書の実額が想定以上に動きやすくなります。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm">① 固定単価（基本料金・従量単価）</div>
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm">② 変動単価（燃料費調整・市場調整）</div>
          <div className="rounded-lg border border-violet-200 bg-violet-50 p-3 text-sm">③ 再エネ賦課金（年度改定）</div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700">有事局面では②と③が同時に効くため、固定単価だけを見ても実際の請求変動は把握できません。</p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">原油高騰から請求書反映までの流れ</h2>
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-4">
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">原油・LNG高騰（3月〜）</div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">燃料費算定（1〜1.5カ月後）</div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-3">料金への反映（さらに1〜2カ月後）</div>
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-3">請求書で顕在化（最短6〜7月）</div>
        </div>
        <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-sky-900">
          例: 3月の原油高騰は、4月の算定を経て6月使用分に反映され、7月請求で体感されるケースが中心です。価格ニュースと請求実感の
          タイミングがずれる点が、予算管理で最も見落とされやすいポイントです。
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">算定期間短縮で変化したポイント</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          2026年4月の制度変更により、平均燃料価格の参照期間が短くなり、高騰局面での反映速度が上がりました。下落時の戻りも早くなる一方で、
          上昇局面のショックを先に受けやすい設計です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">項目</th>
                <th className="border border-slate-200 px-3 py-2">変更前</th>
                <th className="border border-slate-200 px-3 py-2">変更後</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="border border-slate-200 px-3 py-2">平均燃料価格の参照期間</td>
                <td className="border border-slate-200 px-3 py-2">過去3〜5カ月平均</td>
                <td className="border border-slate-200 px-3 py-2">過去1〜1.5カ月中心</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">上昇時の反応速度</td>
                <td className="border border-slate-200 px-3 py-2">緩やか</td>
                <td className="border border-slate-200 px-3 py-2">速い</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">下落時の戻り</td>
                <td className="border border-slate-200 px-3 py-2">遅い</td>
                <td className="border border-slate-200 px-3 py-2">比較的速い</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-rose-200 bg-rose-50 p-5">
        <h2 className="text-xl font-semibold text-rose-900">基準価格引き下げと「ステルス値上げ」</h2>
        <p className="mt-3 text-sm leading-7 text-rose-900">
          燃料費調整は「平均燃料価格 − 基準価格」で計算されます。基準価格が下がると、見かけ上は制度変更でも、実務上は差分が広がって
          加算側に振れやすくなります。同じ燃料価格でも請求が上がりやすくなるため、単価表の見た目だけで判断すると誤認につながります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="bg-rose-100 text-left">
                <th className="border border-rose-200 px-3 py-2">項目</th>
                <th className="border border-rose-200 px-3 py-2">変更前</th>
                <th className="border border-rose-200 px-3 py-2">変更後</th>
              </tr>
            </thead>
            <tbody className="text-rose-900">
              <tr>
                <td className="border border-rose-200 px-3 py-2">基準価格</td>
                <td className="border border-rose-200 px-3 py-2">49,800円</td>
                <td className="border border-rose-200 px-3 py-2">35,600円</td>
              </tr>
              <tr>
                <td className="border border-rose-200 px-3 py-2">平均燃料価格 40,000円時の調整額</td>
                <td className="border border-rose-200 px-3 py-2">-9,800円（減額）</td>
                <td className="border border-rose-200 px-3 py-2">+4,400円（加算）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">市場連動型プランとの違い</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          市場連動型プランは JEPX の上昇が即時反映されるため、固定単価より値動きが大きくなりやすい契約です。2026年の制度変更後は、
          固定単価プランでも従来より反応が速くなりましたが、それでも市場連動型の即時性と振れ幅は別次元です。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          契約の見直し優先度はプラン種別で大きく変わるため、詳細は{" "}
          <Link href={`${EMERGENCY_SCENARIO_BASE_PATH}/contract-risk`} className="underline underline-offset-2">
            契約別リスク比較
          </Link>{" "}
          で確認してください。
        </p>
      </section>
    </>
  );
}

function QuadrupleContent() {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">4つの上昇要因</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-3"><p className="text-xs">① 原油・LNG</p><p className="text-xl font-bold text-rose-800">最大 +10%</p></article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-3"><p className="text-xs">② 補助金終了</p><p className="text-xl font-bold text-amber-800">+4% 前後</p></article>
          <article className="rounded-lg border border-violet-200 bg-violet-50 p-3"><p className="text-xs">③ 再エネ賦課金</p><p className="text-xl font-bold text-violet-800">+2% 前後</p></article>
          <article className="rounded-lg border border-orange-200 bg-orange-50 p-3"><p className="text-xs">④ 円安進行</p><p className="text-xl font-bold text-orange-800">+2〜4%</p></article>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          四重苦の本質は、単独要因の足し算ではなく「相互増幅」にあります。原油上昇が円安を呼び、円安が燃料輸入コストをさらに押し上げる循環が
          生じるため、シナリオ長期化時ほど同じ原油価格でも請求負担が重くなります。
        </p>
      </section>

      <EmergencyScenarioChartCard
        kind="quadruple-stack"
        title="4要因の積み上げ推移（シナリオ2想定）"
        description="単独要因ではなく、複数要因の重なりが夏場の請求上振れをつくる点が重要です。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">月別コスト上昇内訳（概算）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          下表はシナリオ2を基準にした概算です。4月は補助金終了の影響が先行し、5月以降は再エネ賦課金と原油要因が積み上がります。
          夏場は使用量増加も重なるため、会計上の負担感は表面の上昇率以上に大きくなる場合があります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">月</th>
                <th className="border border-slate-200 px-3 py-2">原油</th>
                <th className="border border-slate-200 px-3 py-2">補助金</th>
                <th className="border border-slate-200 px-3 py-2">再エネ</th>
                <th className="border border-slate-200 px-3 py-2">円安</th>
                <th className="border border-slate-200 px-3 py-2">合計</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ["4月", "+1%", "+4%", "-", "+1%", "+6%"],
                ["5月", "+2%", "+4%", "+2%", "+2%", "+10%"],
                ["6月", "+5%", "+4%", "+2%", "+3%", "+14%"],
                ["7月", "+8%", "+4%", "+2%", "+3%", "+17%"],
                ["8月", "+10%", "+4%", "+2%", "+4%", "+20%"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={`${row[0]}-${cell}`} className="border border-slate-200 px-3 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">4要因それぞれの補足</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
          <div>
            <p className="font-semibold text-slate-900">① 原油・LNG高騰</p>
            <p>調達価格の上昇が燃料費調整と市場価格の双方を押し上げ、特にシナリオ2・3で夏以降の請求に強く反映されます。</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">② 補助金終了</p>
            <p>4月使用分から補助が消えるため、原油が落ち着いても前年より高い請求が残る構造です。短期安定化でも戻らない要因です。</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">③ 再エネ賦課金</p>
            <p>電力使用量に比例して一律で加算されるため、契約変更や調達先変更だけでは回避できません。実需の削減策が必要です。</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">④ 円安進行</p>
            <p>ドル建て燃料の輸入コストを押し上げます。原油高と同時進行すると、同じドル価格でも円建て負担が増幅します。</p>
          </div>
        </div>
      </section>
    </>
  );
}

function ScenarioContent(kind: "scenario-1" | "scenario-2" | "scenario-3") {
  const conf =
    kind === "scenario-1"
      ? {
          chart: "scenario-1" as const,
          range: "+5〜8%",
          oil: "$70〜80",
          peak: "7月（+8%前後）",
          risk: "傷は浅いが、補助金終了分と制度変更の影響は残る",
          panelClass: "rounded-xl border border-emerald-200 bg-emerald-50 p-5",
          headingClass: "text-xl font-semibold text-emerald-900",
          textClass: "mt-3 text-sm leading-7 text-emerald-900",
          assumptions: [
            "4月末までに停戦と航路再開が進む前提",
            "タンカー・保険の正常化に2〜4週間の遅れを見込む",
            "原油価格は5月に80ドル台、夏前に70ドル台へ回帰",
          ],
          notes: [
            "補助金終了分は戻らず、前年より高い請求が残る",
            "2026年4月の料金体系変更は恒久的で、次回有事でも同じ課題が再発する",
            "楽観ケースでも次の地政学リスクへの備えが必要",
          ],
          faq: [
            {
              q: "シナリオ1でも法人電気代は上がりますか？",
              a: "はい。短期安定化しても補助金終了・再エネ賦課金・料金制度変更の影響が残るため、年間+5〜8%程度の上昇を想定します。",
            },
            {
              q: "停戦したらすぐに下がりますか？",
              a: "停戦報道後も航路再開・保険再開・調達契約の正常化に時間差があるため、請求の低下は数カ月遅れて現れるのが一般的です。",
            },
          ],
        }
      : kind === "scenario-2"
        ? {
            chart: "scenario-2" as const,
            range: "+15〜25%",
            oil: "$90〜110",
            peak: "8月（+25%前後）",
            risk: "夏ピークで使用量×単価のダブルパンチが顕在化",
            panelClass: "rounded-xl border border-amber-200 bg-amber-50 p-5",
            headingClass: "text-xl font-semibold text-amber-900",
            textClass: "mt-3 text-sm leading-7 text-amber-900",
            assumptions: [
              "停戦交渉が難航し、7月頃まで不安定局面が継続",
              "3〜6月の高値燃料が6〜9月請求に順次反映",
              "停戦後も復旧遅延で年内は高値圏が残る",
            ],
            notes: [
              "冷房需要ピークと高単価が重なるため、同じ上昇率でも金額影響が大きい",
              "市場連動型プランでは+30%超の上振れが起こり得る",
              "資金繰りと契約見直しを同時に進める必要がある",
            ],
            faq: [
              {
                q: "夏前に固定単価へ切替えるべきですか？",
                a: "市場連動型を契約中なら検討優先度は高いです。違約金・契約期間・単価条件を比較し、7〜8月ピーク前に判断するのが実務的です。",
              },
            ],
          }
        : {
            chart: "scenario-3" as const,
            range: "+20〜35%",
            oil: "$95〜110+",
            peak: "10月（+35%前後）",
            risk: "高コストが構造化し、事業計画見直しが必要",
            panelClass: "rounded-xl border border-rose-200 bg-rose-50 p-5",
            headingClass: "text-xl font-semibold text-rose-900",
            textClass: "mt-3 text-sm leading-7 text-rose-900",
            assumptions: [
              "航路リスクと地政学不安が秋以降も継続",
              "停戦後も施設復旧と物流正常化が遅れ、供給不安が残る",
              "LNG契約更新で翌年以降の調達コスト高止まりリスクが高まる",
            ],
            notes: [
              "過去の危機局面に匹敵する上昇率で、単年問題で終わらない可能性がある",
              "新電力の撤退・倒産や最終保障供給への移行リスクに注意が必要",
              "省エネ投資・PPA・調達分散を経営課題として扱う段階",
            ],
            faq: [],
          };

  return (
    <>
      <section className={conf.panelClass}>
        <h2 className={conf.headingClass}>想定レンジと前提条件</h2>
        <p className={conf.textClass}>
          想定上昇レンジは <strong>{conf.range}</strong>。{conf.risk} という前提で、契約と予算の二軸で備える必要があります。
        </p>
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-lg border border-white/60 bg-white/70 p-3">
            <p className="text-xs text-slate-600">WTI原油想定</p>
            <p className="mt-1 font-semibold text-slate-900">{conf.oil}</p>
          </div>
          <div className="rounded-lg border border-white/60 bg-white/70 p-3">
            <p className="text-xs text-slate-600">法人電気代 年間変動</p>
            <p className="mt-1 font-semibold text-slate-900">{conf.range}</p>
          </div>
          <div className="rounded-lg border border-white/60 bg-white/70 p-3">
            <p className="text-xs text-slate-600">想定ピーク月</p>
            <p className="mt-1 font-semibold text-slate-900">{conf.peak}</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">前提条件</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
          {conf.assumptions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <EmergencyScenarioChartCard kind={conf.chart} title="月別の前年同月比（想定）" />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">何が起きるか・なぜそうなるか</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
          {conf.notes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {kind === "scenario-2" ? (
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">シナリオ2の金額インパクト（概算）</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2">月間使用量</th>
                  <th className="border border-slate-200 px-3 py-2">2025年 月額</th>
                  <th className="border border-slate-200 px-3 py-2">2026年8月（S2）</th>
                  <th className="border border-slate-200 px-3 py-2">増加額</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">5,000 kWh（小規模オフィス）</td>
                  <td className="border border-slate-200 px-3 py-2">150,000円</td>
                  <td className="border border-slate-200 px-3 py-2">187,500円</td>
                  <td className="border border-slate-200 px-3 py-2 text-rose-700">+37,500円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">50,000 kWh（中規模工場）</td>
                  <td className="border border-slate-200 px-3 py-2">1,200,000円</td>
                  <td className="border border-slate-200 px-3 py-2">1,500,000円</td>
                  <td className="border border-slate-200 px-3 py-2 text-rose-700">+300,000円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">500,000 kWh（大規模施設）</td>
                  <td className="border border-slate-200 px-3 py-2">10,000,000円</td>
                  <td className="border border-slate-200 px-3 py-2">12,500,000円</td>
                  <td className="border border-slate-200 px-3 py-2 text-rose-700">+2,500,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {kind === "scenario-3" ? (
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">過去危機との比較</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2">過去の危機</th>
                  <th className="border border-slate-200 px-3 py-2">電気代への影響</th>
                  <th className="border border-slate-200 px-3 py-2">回復までの期間</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">第一次オイルショック</td>
                  <td className="border border-slate-200 px-3 py-2">+25〜30%</td>
                  <td className="border border-slate-200 px-3 py-2">2〜3年</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">第二次オイルショック</td>
                  <td className="border border-slate-200 px-3 py-2">+20〜25%</td>
                  <td className="border border-slate-200 px-3 py-2">2〜3年</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">東日本大震災後</td>
                  <td className="border border-slate-200 px-3 py-2">+20〜30%</td>
                  <td className="border border-slate-200 px-3 py-2">5年以上</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-rose-700">2026年シナリオ3</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-rose-700">+20〜35%（想定）</td>
                  <td className="border border-slate-200 px-3 py-2 text-rose-700">不透明</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">チェックすべき実務項目</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
          <li>契約プランが固定単価か市場連動かを確認する</li>
          <li>契約更新時期と違約金条件を確認する</li>
          <li>6〜10月の資金繰りに電力コスト上振れを織り込む</li>
          <li>必要に応じて設備対策と調達対策を同時に進める</li>
        </ul>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          実行順序は{" "}
          <Link href={`${EMERGENCY_SCENARIO_BASE_PATH}/action-roadmap`} className="underline underline-offset-2">
            対策ロードマップ
          </Link>{" "}
          で整理しています。シナリオ1想定でも、シナリオ2・3への備えを並走させるのが実務上の最適解です。
        </p>
      </section>

      {conf.faq.length > 0 ? (
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">FAQ</h2>
          {conf.faq.map((item) => (
            <details key={item.q} className="mt-3 rounded-lg border border-slate-200 p-3">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.a}</p>
            </details>
          ))}
        </section>
      ) : null}
    </>
  );
}

function ContractRiskContent() {
  return (
    <>
      <EmergencyScenarioChartCard
        kind="contract-risk"
        title="契約タイプ × シナリオ リスクマトリクス"
        description="同じ原油局面でも、契約タイプによって上振れ幅は大きく変わります。特に市場連動比率と調達依存度が高い契約は、シナリオ2・3で急激にリスクが拡大します。"
        heightClassName="h-[300px] sm:h-[360px]"
      />

      <section className="rounded-xl border border-red-200 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-red-900">市場連動型契約で特に注意する点</h2>
        <p className="mt-3 text-sm leading-7 text-red-900">
          高圧・市場連動、特別高圧・市場連動ともに JEPX 上昇が即時反映されるため、夏季ピーク時は固定契約より高い上振れになりやすく、資金繰り上の安全余裕が小さくなります。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">契約タイプごとの特徴と注意点</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
          <div>
            <p className="font-semibold text-slate-900">高圧・固定</p>
            <p>急騰時のショックは市場連動より緩やかですが、2026年4月以降は反映速度が上がっており、旧来ほど緩衝材が効きません。</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">高圧・市場連動</p>
            <p>JEPX価格が直接反映されるため、短期間で請求が急伸しやすい契約です。シナリオ3では+30〜50%の上振れを想定します。</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">特別高圧・固定</p>
            <p>個別契約条件で差が出ます。長期契約は短期変動に強い一方、更新時に高止まりした相場が織り込まれるリスクがあります。</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">特別高圧・市場連動</p>
            <p>
              特別高圧の大口需要に市場連動が組み合わさるため、JEPX高騰時のインパクトが大きくなります。シナリオ2以上では固定単価への切替検討が急務です。
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シナリオ別チェックリスト</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-900">
            <p className="font-semibold">全シナリオ共通</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>契約種別（固定・市場連動）を確認</li>
              <li>燃料費調整の算定ルール変更有無を確認</li>
              <li>契約更新時期と違約金条件を確認</li>
            </ul>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
            <p className="font-semibold">シナリオ2以上に備える場合</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>市場連動から固定単価への切替余地を検討</li>
              <li>新電力の財務・電源構成を確認</li>
              <li>複数社見積もりで代替契約を確保</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}

function IndustryImpactContent() {
  return (
    <>
      <EmergencyScenarioChartCard
        kind="industry-impact"
        title="業種別インパクト比較（シナリオ別）"
        description="電力多消費業種ほどシナリオ2・3で上振れ幅が大きくなります。"
      />
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">業種差が生まれる理由</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          影響度は「電力コスト比率」「ピーク需要依存」「代替手段の有無」で決まります。単純な使用量だけでなく、
          需要をずらせるか・価格転嫁できるかが実務上の分岐点になります。
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">業種別の注視ポイント</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm leading-7">
            <strong>製造業（24時間稼働）:</strong> 電力比率が高く、+30%前後の上昇で利益を大きく圧迫。夜間操業比率が高い拠点は契約最適化の影響が大きいです。
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm leading-7">
            <strong>冷凍冷蔵・コールドチェーン:</strong> 需要抑制余地が小さく、夏場の効率低下で消費が増えるため、シナリオ2のダブルパンチが直撃しやすい業種です。
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7">
            <strong>データセンター:</strong> 電力コスト比率は高い一方、PPAや自家発の有無で差が大きく、中小事業者ほど高騰影響を受けやすい構造です。
          </article>
          <article className="rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7">
            <strong>商業施設・小売:</strong> 空調比率が高く、テナント契約条件によって価格転嫁可否が左右されます。運用最適化の即効性が比較的高い領域です。
          </article>
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7">
            <strong>オフィス:</strong> 相対的な影響は小さいが、BEMS未導入・旧式空調の拠点では改善余地が大きく、短期施策の費用対効果が高いです。
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7">
            <strong>物流・運輸:</strong> 電力に加えて燃料費も上がるため、総コストは二重で悪化。EV充電の時間帯最適化が重要です。
          </article>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">業種別の推奨対策</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[740px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">業種</th>
                <th className="border border-slate-200 px-3 py-2">短期対策</th>
                <th className="border border-slate-200 px-3 py-2">中長期対策</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">製造業</td><td className="border border-slate-200 px-3 py-2">ピークシフト・ライン停止管理</td><td className="border border-slate-200 px-3 py-2">自家消費型太陽光・コジェネ</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">冷凍冷蔵</td><td className="border border-slate-200 px-3 py-2">断熱強化・インバータ制御</td><td className="border border-slate-200 px-3 py-2">高効率冷凍機・蓄熱</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">データセンター</td><td className="border border-slate-200 px-3 py-2">冷却最適化</td><td className="border border-slate-200 px-3 py-2">PPA・再エネ電源確保</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">商業施設</td><td className="border border-slate-200 px-3 py-2">LED化・空調スケジュール最適化</td><td className="border border-slate-200 px-3 py-2">屋上太陽光・BEMS導入</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">オフィス</td><td className="border border-slate-200 px-3 py-2">室温設定見直し・不要照明削減</td><td className="border border-slate-200 px-3 py-2">省エネ改修・契約見直し</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">物流</td><td className="border border-slate-200 px-3 py-2">充電時間帯シフト</td><td className="border border-slate-200 px-3 py-2">屋根太陽光・V2B活用</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          詳細な実行順序は{" "}
          <Link href={`${EMERGENCY_SCENARIO_BASE_PATH}/action-roadmap`} className="underline underline-offset-2">
            対策ロードマップ
          </Link>{" "}
          で確認してください。
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
        name: "2026年の法人電気代は何%上がる想定ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "短期安定化で+5〜8%、夏まで長期化で+15〜25%、秋以降も継続するケースでは+20〜35%を想定します。",
        },
      },
      {
        "@type": "Question",
        name: "今すぐ実行すべき対策は何ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "契約プランの棚卸し、複数社見積もり、デマンド管理の3点を最優先で進めることが実務上の第一歩です。",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">シナリオ別のアクション優先順位</h2>
        <div className="mt-4 space-y-3 text-sm">
          <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <strong>今すぐ:</strong> 契約棚卸し・見積もり取得・請求内訳確認
            <p className="mt-2 leading-7 text-emerald-900">
              情勢が短期安定化しても、補助金終了と制度変更による構造的な上昇は残ります。旧プラン前提のまま放置しないことが最優先です。
            </p>
          </article>
          <article className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <strong>5月まで:</strong> 市場連動から固定単価の切替検討・空調運用最適化
            <p className="mt-2 leading-7 text-amber-900">
              夏のピーク需要前に、単価リスクと使用量リスクの双方を下げる準備を進めます。シナリオ2想定ではここが実務上の分岐点です。
            </p>
          </article>
          <article className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <strong>経営判断:</strong> PPA・太陽光・蓄電池・大規模省エネ投資の評価
            <p className="mt-2 leading-7 text-rose-900">
              シナリオ3では電力コストの高止まりを前提にした事業計画が必要です。エネルギー調達をコスト管理ではなく経営戦略として扱います。
            </p>
          </article>
        </div>
      </section>

      <EmergencyScenarioChartCard
        kind="action-priority"
        title="対策の優先度イメージ（削減効果）"
        description="短期施策と中長期施策を分けて、資金計画に合わせて進めることが重要です。"
      />

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">投資回収の目安</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="border border-slate-200 px-3 py-2">対策</th>
                <th className="border border-slate-200 px-3 py-2">初期投資目安</th>
                <th className="border border-slate-200 px-3 py-2">年間削減効果</th>
                <th className="border border-slate-200 px-3 py-2">回収年数</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr><td className="border border-slate-200 px-3 py-2">電力会社切替え</td><td className="border border-slate-200 px-3 py-2">0円</td><td className="border border-slate-200 px-3 py-2">10〜20%</td><td className="border border-slate-200 px-3 py-2 font-semibold text-emerald-700">即日</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">LED更新</td><td className="border border-slate-200 px-3 py-2">50〜200万円</td><td className="border border-slate-200 px-3 py-2">40〜60%（照明分）</td><td className="border border-slate-200 px-3 py-2">1〜3年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">デマンドコントローラー</td><td className="border border-slate-200 px-3 py-2">30〜100万円</td><td className="border border-slate-200 px-3 py-2">5〜15%（基本料金）</td><td className="border border-slate-200 px-3 py-2">1〜2年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">自家消費型太陽光</td><td className="border border-slate-200 px-3 py-2">500〜2,000万円</td><td className="border border-slate-200 px-3 py-2">20〜40%</td><td className="border border-slate-200 px-3 py-2">5〜8年</td></tr>
              <tr><td className="border border-slate-200 px-3 py-2">蓄電池</td><td className="border border-slate-200 px-3 py-2">300〜1,000万円</td><td className="border border-slate-200 px-3 py-2">10〜20%</td><td className="border border-slate-200 px-3 py-2">7〜10年</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-6 text-slate-600">
          ※ 上記は一般的な目安です。施設規模・使用条件・補助金適用によって実際の回収年数は変動します。
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
          シナリオ2・3では電気代上昇が大きくなるため、太陽光や蓄電池など中長期施策の投資回収は短縮しやすくなります。
          「電気代が上がるほど省エネ投資の回収が早まる」点を前提に、投資判断を見直してください。
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">FAQ</h2>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">2026年の法人電気代は何%上がりますか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            シナリオ1で+5〜8%、シナリオ2で+15〜25%、シナリオ3で+20〜35%を想定しています。どのシナリオでも構造的な上昇要因は残るため、
            「上がらないケース」は想定しにくい前提です。
          </p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">法人が今すぐできる電気代対策は？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            現契約の棚卸し、複数社見積もり、請求内訳の確認が最優先です。これだけで削減余地を把握でき、夏前に実行可能な施策を切り分けられます。
          </p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">市場連動型プランはリスクが高いですか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">高騰局面では価格が即時反映されるため、上振れリスクは固定単価より高くなります。</p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">太陽光発電は今からでも間に合いますか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            夏ピークに間に合わせるにはスケジュールが厳しい場合がありますが、シナリオ3まで視野に入れるなら早期検討の意義は大きいです。
          </p>
        </details>
        <details className="mt-3 rounded-lg border border-slate-200 p-3">
          <summary className="cursor-pointer font-semibold">政府の追加補助は期待できますか？</summary>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            追加支援が検討される可能性はありますが、制度依存だけでは不確実です。自社で実行できる対策を並行して進める前提で判断してください。
          </p>
        </details>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
        <div className="mt-3 rounded-lg border border-slate-300 bg-slate-50 p-4 text-sm leading-7 text-slate-800">
          <p className="font-semibold">
            どのシナリオでも電気代は上がる。違いは「どれだけ上がるか」と「いつ強く効くか」。
          </p>
          <p className="mt-2">
            シナリオ1で済む可能性を見つつも、シナリオ2・3の準備を同時に進めることが、現時点で最も合理的な経営判断です。
          </p>
        </div>
      </section>
    </>
  );
}

function renderContent(slug: string) {
  if (slug === "background") return <BackgroundContent />;
  if (slug === "mechanism") return <MechanismContent />;
  if (slug === "quadruple-pressure") return <QuadrupleContent />;
  if (slug === "scenario-1" || slug === "scenario-2" || slug === "scenario-3") return ScenarioContent(slug);
  if (slug === "contract-risk") return <ContractRiskContent />;
  if (slug === "industry-impact") return <IndustryImpactContent />;
  if (slug === "action-roadmap") return <ActionRoadmapContent />;
  return null;
}

export default async function EmergencyScenarioPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getEmergencyScenarioPageBySlug(slug);
  if (!page || slug === "index") {
    notFound();
  }

  const leadBySlug: Record<string, string> = {
    background: "有事局面の経緯を時系列で整理し、価格変動がなぜ長引くのかという前提を確認します。",
    mechanism: "原油高騰が請求に反映されるまでのタイムラグと、料金改定で変化した実務上の注意点を整理します。",
    "quadruple-pressure": "原油だけではない複合上昇要因を積み上げで可視化し、月次の上振れ要因を分解します。",
    "scenario-1": "停戦・航路再開が早期に進んだ場合でも残るコスト上昇の実務影響を確認します。",
    "scenario-2": "夏の需要ピークと価格高騰が重なるケースを想定し、予算インパクトを確認します。",
    "scenario-3": "高コスト局面が長期化した場合の事業継続リスクと経営対応を整理します。",
    "contract-risk": "契約タイプごとに上振れ幅が異なるため、見直し優先度を明確化します。",
    "industry-impact": "業種ごとの電力消費特性を踏まえて、影響度の違いを比較します。",
    "action-roadmap": "短期・中期・長期の3段階で、実行順序を持った対策を提示します。",
  };

  const url = `https://simulator.eic-jp.org${EMERGENCY_SCENARIO_BASE_PATH}/${slug}`;

  return (
    <>
      <ArticleJsonLd
        headline={page.title}
        description={page.description}
        url={url}
        datePublished="2026-03-15"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "有事シナリオ分析（電気料金）", url: `https://simulator.eic-jp.org${EMERGENCY_SCENARIO_BASE_PATH}` },
          { name: page.label },
        ]}
      />
      <EmergencyScenarioLayout slug={slug} lead={leadBySlug[slug]}>{renderContent(slug)}</EmergencyScenarioLayout>
    </>
  );
}
