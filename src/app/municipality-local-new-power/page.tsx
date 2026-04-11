import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "自治体新電力（シュタットベルケ）の検討フレーム｜設立判断と運営リスク";
const pageDescription =
  "自治体が新電力会社（シュタットベルケ型）の設立・出資を検討する際の判断フレームを解説。設立の目的・条件・財政リスク・電力市況変動リスク・廃業事例から学ぶ失敗要因と成功要件まで、自治体担当者向けに整理します。";
const pageUrl = "https://simulator.eic-jp.org/municipality-local-new-power";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自治体新電力",
    "シュタットベルケ 日本",
    "自治体 電力会社 設立",
    "地域新電力 リスク",
    "自治体 電力事業 判断",
    "新電力 廃業 自治体",
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

const purposeRows = [
  {
    purpose: "公共施設の電力コスト削減",
    feasibility: "△",
    note: "設立コストと運営費を含めると必ずしもコスト削減にならない。市況リスクに注意",
  },
  {
    purpose: "地域内エネルギー循環（再エネ地産地消）",
    feasibility: "◯",
    note: "地域の再エネ電源と組み合わせれば地産地消が実現しやすい。補助金活用も可",
  },
  {
    purpose: "地域経済への投資・雇用創出",
    feasibility: "◯",
    note: "利益を地域に還流する設計にすれば地域活性化に貢献できる",
  },
  {
    purpose: "電力調達の安定化",
    feasibility: "×",
    note: "市況変動リスクを自治体系企業が引き受けることになり、安定化とはならない",
  },
  {
    purpose: "SDGs・カーボンニュートラル対応",
    feasibility: "△〜◯",
    note: "非化石証書・再エネ電源調達により再エネ比率を高めることは可能",
  },
  {
    purpose: "一般家庭・地域企業への電力供給",
    feasibility: "△",
    note: "市況リスク・資金調達・人材が揃えば可能だが事業規模が必要",
  },
];

const riskRows = [
  {
    risk: "電力市況の変動リスク",
    level: "高",
    description: "JEPXスポット価格の高騰時に自社調達コストが上昇し、供給単価を下回る逆ザヤが発生する。2022年以降、多くの自治体系新電力が経営難に陥った主因",
    mitigation: "長期相対契約（PPA）で電源を固定価格調達。ヘッジ戦略の策定。価格変動条項の設定",
  },
  {
    risk: "需給調整・インバランスリスク",
    level: "高",
    description: "実際の需要と調達量の差（インバランス）が生じると高額なインバランス料金が発生。大手電力と同等の需給管理能力が必要",
    mitigation: "アグリゲーター・需給管理代行との連携。初期は小規模から始め、段階的に拡大",
  },
  {
    risk: "初期投資・設立コストの回収リスク",
    level: "中〜高",
    description: "小売電気事業者登録・システム構築・人材採用に数千万〜数億円の初期費用が必要。収益化までの時間が長い",
    mitigation: "既存の民間新電力との業務提携で初期コストを抑えつつ事業経験を積む",
  },
  {
    risk: "人材確保・専門性リスク",
    level: "中",
    description: "電力調達・需給管理・料金設計の専門人材が必要。自治体内での人材育成は長期間を要する",
    mitigation: "専門家の外部採用・民間企業との共同出資・委託契約による専門性の外部調達",
  },
  {
    risk: "廃業・撤退時の財政リスク",
    level: "高",
    description: "事業継続が困難になった場合、出資金の毀損・供給契約の引き継ぎ問題・従業員処遇など財政負担が発生",
    mitigation: "出資額の上限設定・段階的な出資・撤退基準の事前設定",
  },
];

const steps = [
  {
    step: "STEP 1",
    title: "設立目的の明確化",
    desc: "「何のために設立するのか」を一言で言えるか確認する。コスト削減・地産地消・地域活性化のどれが主目的かによって、事業設計・出資額・リスク許容度が変わる。目的が不明確なまま設立すると経営判断が難しくなる。",
  },
  {
    step: "STEP 2",
    title: "地域の電源・需要の実態調査",
    desc: "自治体内に再エネ電源（太陽光・バイオマス・水力等）があるか、自治体が調達する公共施設電力量の規模（年間kWh）を調査する。電源がなく規模も小さい場合は、設立よりも共同調達の方が効率的な場合が多い。",
  },
  {
    step: "STEP 3",
    title: "フィジビリティスタディ（FS）の実施",
    desc: "事業計画（収支・資金調達・リスク）の外部専門家によるFS（実現可能性調査）を行う。FSなしで設立判断するのはリスクが大きい。FS結果を議会に報告し、設立可否を判断する。",
  },
  {
    step: "STEP 4",
    title: "出資・連携形態の選択",
    desc: "完全自治体設立（100%出資）・官民共同出資・民間事業者との業務提携から選択する。市況リスクを直接引き受ける形態（完全設立）は慎重に検討する。",
  },
  {
    step: "STEP 5",
    title: "議会への説明・議決",
    desc: "出資の場合は出損金として議会議決が必要。事業計画・収支見通し・リスク・撤退基準を含む説明資料を作成し、議会の理解と承認を得る。",
  },
  {
    step: "STEP 6",
    title: "小売電気事業者登録・事業開始",
    desc: "経済産業省への小売電気事業者登録、電力の調達・需給管理体制の整備、料金設計・顧客獲得を経て事業を開始する。初期は公共施設向けに限定し、実績を積んでから対象を拡大する。",
  },
];

const failureFactors = [
  "市況高騰局面での逆ザヤ（販売単価＜調達単価）による資本毀損",
  "インバランス料金の想定外発生",
  "小規模での設立により固定費（システム・人件費）を賄えない",
  "専門人材が確保できず需給管理が機能しない",
  "設立目的があいまいで議会・住民の理解が得られず廃業",
  "電力市場の急激な変化に対応できる経営判断ができない",
];

export default function MunicipalityLocalNewPowerPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          自治体新電力（シュタットベルケ）の検討フレーム
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-600">設立判断と運営リスク</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          ドイツ発祥の地域エネルギー公社「シュタットベルケ（Stadtwerke）」モデルを参考に、
          日本でも自治体が出資・設立する地域新電力会社が増えてきました。
          しかし2022年以降の電力市場高騰で経営困難に陥り廃業・撤退した自治体系新電力も少なくありません。
          本ページでは設立目的の整理・財政リスクの評価・設立判断フレーム・廃業事例から学ぶ失敗要因を解説します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* シュタットベルケとは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">シュタットベルケとは：日本への応用可能性</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シュタットベルケはドイツの地方都市が所有・運営する地域の公益事業会社（電力・ガス・水道・公共交通等を一体運営）です。
            地域に根ざした経営と収益の地域還流を特徴とし、欧州では公益性と事業性を両立したモデルとして機能しています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本では電力自由化後、地域新電力会社として電力事業のみに特化した「シュタットベルケ型」の取り組みが
            地方自治体を中心に広がりました。ただし、ドイツとは規制環境・市場構造・自治体の財政基盤が異なるため、
            そのまま応用できるわけではありません。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">重要な前提認識</p>
            <p className="mt-1 text-sm leading-6 text-amber-700">
              日本では2022年以降の電力市場高騰で、多くの自治体系新電力が経営難に陥り、廃業・事業縮小を余儀なくされました。
              設立検討にあたっては、この市況リスクを正面から評価することが不可欠です。
            </p>
          </div>
        </section>

        {/* 設立目的の整理 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">設立目的別：実現可能性の評価</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            設立を検討する際、まず「何のために設立するのか」を整理することが出発点です。
            目的によって実現可能性と推奨度が異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">設立目的</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-900">実現可能性</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">コメント</th>
                </tr>
              </thead>
              <tbody>
                {purposeRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 text-slate-900">{row.purpose}</td>
                    <td className="border border-slate-200 px-3 py-2 text-center font-bold text-slate-900">{row.feasibility}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">◯：実現しやすい、△：条件次第、×：実現が難しい</p>
        </section>

        {/* リスク評価 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">主要リスクの評価と対策</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自治体系新電力が直面する主要リスクを整理します。特に市況変動リスクとインバランスリスクは
            事業存続を左右する最重要リスクです。
          </p>
          <div className="mt-4 space-y-3">
            {riskRows.map((row, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-slate-900">{row.risk}</p>
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-bold ${
                      row.level === "高"
                        ? "bg-red-100 text-red-700"
                        : row.level === "中〜高"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    リスク：{row.level}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">{row.description}</p>
                <p className="mt-1 text-sm text-sky-700">
                  <span className="font-semibold text-slate-900">対策：</span>
                  {row.mitigation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 設立判断フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">設立判断の実務フロー（6ステップ）</h2>
          <div className="mt-4 space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex-shrink-0 border-l-4 border-indigo-400 pl-4">
                  <p className="text-xs font-bold text-indigo-600">{s.step}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 廃業事例から学ぶ */}
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">廃業・撤退事例から学ぶ失敗要因</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年以降の電力市場高騰を受け、日本各地の自治体系新電力が経営難に陥りました。
            共通する失敗要因を整理します。
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm leading-7 text-slate-700 sm:text-base">
            {failureFactors.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>

        {/* 規模別対応 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">規模別：設立 vs. 代替手段の選択基準</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">規模</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">推奨アプローチ</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">設立を検討する条件</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium">政令市・中核市</td>
                  <td className="border border-slate-200 px-3 py-2">官民共同出資型（自治体は少数出資）を慎重に検討</td>
                  <td className="border border-slate-200 px-3 py-2">再エネ電源が地域に豊富にあり、FS済みで収支見通しが明確な場合</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">一般市</td>
                  <td className="border border-slate-200 px-3 py-2">共同調達・広域連合参加を優先。設立は慎重に</td>
                  <td className="border border-slate-200 px-3 py-2">地域の再エネ電源（バイオマス・水力等）が明確に存在する場合のみ</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium">町村</td>
                  <td className="border border-slate-200 px-3 py-2">単独設立は推奨しない。共同調達・広域連合参加を選択</td>
                  <td className="border border-slate-200 px-3 py-2">調達規模が小さく、設立コストの回収が困難</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 議会・住民説明 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">議会・住民への説明ポイント</h2>
          <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold">設立目的の明確化：</span>
              何を達成するために設立するのか、定量的な目標（電力コスト削減〇%、再エネ比率〇%等）を示す
            </li>
            <li>
              <span className="font-semibold">リスクの開示：</span>
              市況変動リスク・インバランスリスク・初期投資リスクを隠さず説明。廃業した自治体系新電力の事例も含め
            </li>
            <li>
              <span className="font-semibold">FS（実現可能性調査）結果の報告：</span>
              外部専門家によるFSの結果（収支見通し・リスク評価）を資料として提出
            </li>
            <li>
              <span className="font-semibold">撤退基準の設定：</span>
              「〇年間で収支が改善しない場合は事業を縮小・撤退する」という撤退基準を事前に設定し説明
            </li>
            <li>
              <span className="font-semibold">代替案との比較：</span>
              設立しない場合の代替手段（共同調達・広域連合参加）とのコスト・効果比較を示す
            </li>
          </ol>
        </section>

        {/* 参考事例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">他自治体の参考事例</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">成功事例：中規模市（人口15万人、バイオマス発電あり）：</span>
            地域のバイオマス発電事業者と連携し、官民共同出資で地域新電力を設立。
            地元産バイオマスによる再エネ電力を公共施設に供給し、再エネ比率100%を達成。
            電力費は旧来の調達比5%増だが、カーボンニュートラル推進と地域経済循環の観点で議会の承認を得た。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">撤退事例：一般市（人口8万人）：</span>
            電力コスト削減を主目的に自治体100%出資の新電力を設立。
            2022年の市況高騰で逆ザヤが発生し、1年で累積損失が出資金を上回る状況に。
            議会に状況を報告の上、民間新電力への事業譲渡と廃業を決定。撤退コストとして〇千万円の追加支出が発生した。
          </p>
        </section>

        {/* 判断に迷う場合 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">判断に迷う場合→専門家への相談を</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自治体新電力の設立・出資判断は、電力市場・財政・法務にまたがる複合的な判断が必要です。
            FS実施前に外部専門家（エネルギーコンサルタント・法務担当・財務アドバイザー）への相談を強くお勧めします。
            シミュレーターで自団体の電力コスト水準を把握した上でご相談いただくとスムーズです。
          </p>
          <p className="mt-2 text-sm text-sky-700">
            <Link href="/contact" className="underline underline-offset-2 hover:text-sky-900">
              お問い合わせはこちら
            </Link>
          </p>
        </section>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/municipality-procurement-methods",
              title: "自治体電力調達の入札実務｜一般競争・指名競争・随意契約の使い分け",
              description: "入札方式の基本から使い分け判断まで体系的に解説します。",
            },
            {
              href: "/bilateral-power-contracts",
              title: "相対電力契約（相対取引）の基礎",
              description: "市場に依存しない長期相対契約の仕組みと活用場面を解説。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直しはどこから始めるか",
              description: "電力契約見直しのステップと着手ポイントを解説。",
            },
            {
              href: "/articles/municipality",
              title: "自治体・公共向け記事一覧",
              description: "自治体の電力調達に関する記事をカテゴリでまとめています。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="電力コストを把握してから判断する"
          description="自治体新電力設立の検討前に、まずシミュレーターで現在の電力コストを把握してください。専門家へのご相談もお気軽にどうぞ。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/contact", label: "専門家に相談する" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="municipality-local-new-power" />
      </div>
    </main>
  );
}
