import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "欧州電力危機の教訓と日本への示唆｜2022年〜の価格変動分析";
const pageDescription =
  "2022年ロシア・ウクライナ戦争を契機とした欧州電力危機の経緯と、日本企業にとっての教訓を整理します。";
const pageUrl = "https://simulator.eic-jp.org/europe-energy-crisis-lessons";

const faqItems = [
  {
    question: "欧州電力危機はいつ・なぜ起きたのですか？",
    answer:
      "2022年2月のロシア・ウクライナ戦争を契機に、ロシア産パイプラインガスの供給が大幅に縮小したことが直接の引き金です。欧州は発電燃料・暖房ともに天然ガス依存度が高く、ガス価格の高騰がそのまま卸電力価格に波及しました。ピーク時にはドイツ電力先物が1MWhあたり700ユーロ超と平時の5〜10倍に達したとされます（出典: ENTSO-E / IEA 公表資料から整理・2025年時点）。",
  },
  {
    question: "なぜガス価格の上昇が電力価格をここまで押し上げたのですか？",
    answer:
      "欧州の卸電力市場は限界費用順に発電所を稼働させる「メリットオーダー」を採用しており、需要を満たす最後の1基（多くはガス火力）の燃料費がその時間帯の市場価格を決めます。ガス価格が急騰すると、再エネや原子力が多くても市場価格全体が引き上がる構造で、これを限界価格決定（マージナルプライシング）と呼びます。",
  },
  {
    question: "欧州主要国はどのように対応しましたか？",
    answer:
      "ドイツは産業向け電気代の上限措置（Strompreisbremse）と原発稼働延長、LNG受入端末の急造で対応しました。フランスは原子力比率の高さを背景に小売価格の凍結措置（Bouclier Tarifaire）を実施。英国はEnergy Bill Relief Schemeで事業者を期間限定で支援しました。北欧は水力・再エネが豊富で相対的に影響を抑えられました（出典: IEA / 各国政府公表資料から整理）。",
  },
  {
    question: "日本でも同じことが起こり得ますか？",
    answer:
      "日本は発電燃料に占めるLNGの比率が高く、LNGは大半を輸入に頼るため、地政学リスクや為替・国際市況の影響を受けやすい構造です。欧州ほど急激ではないにせよ、燃料費調整制度を通じて国際市況が時間差で電気料金に反映されます。市場連動型プランを利用する法人は、欧州危機と同種の価格変動リスクにさらされます。",
  },
  {
    question: "市場連動型プランのリスクは具体的にどう現れますか？",
    answer:
      "市場連動型はJEPX（日本卸電力取引所）のスポット価格に小売価格が連動します。平時は割安なことが多い一方、需給逼迫や燃料高騰時には単価が数倍に跳ね上がる可能性があります。欧州では卸価格高騰が小売を直撃し倒産する新電力も出ました。固定型との併用や上限付きプランなど、リスク許容度に応じた設計が重要です。",
  },
  {
    question: "PPA（電力購入契約）は危機対策になりますか？",
    answer:
      "コーポレートPPAは再エネ電源と長期・固定価格で契約する手法で、市場価格変動のヘッジとして欧州危機後に注目が高まりました。10〜20年の長期契約で価格を固定できる一方、相場が下落した局面では割高になるリスクや、契約相手の信用・電源稼働リスクも伴います。自家消費型(オンサイト)とオフサイト型で特性が異なります。",
  },
  {
    question: "日本の激変緩和対策事業は欧州の支援策と何が違いますか？",
    answer:
      "日本の電気・ガス価格激変緩和対策事業は、小売単価から一定額(kWhあたり数円程度)を直接値引きする方式で、累計予算は3兆円超の規模とされます。欧州の上限価格方式や原発延命などの供給側対策と比べ、需要家への直接補助に重心がある点が特徴です。いずれも恒久措置ではなく段階的に縮小・終了する設計でした（出典: 資源エネルギー庁 公表資料から整理）。",
  },
  {
    question: "製造業やデータセンターなど電力多消費業種は何に備えるべきですか？",
    answer:
      "電力コストが原価に占める割合が高い業種ほど、価格急騰時の影響が大きくなります。調達先・契約形態の分散、複数年度の予算シナリオ(楽観・標準・悲観)の用意、自家発電や蓄電池によるピークカット、再エネPPAでの長期固定など、複数の打ち手を組み合わせる「ポートフォリオ調達」の発想が有効です。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "欧州電力"],
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
    images: [{ url: "/api/og/global-energy", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/global-energy"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        faq={faqItems}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "海外拠点・グローバルエネルギー", url: "https://simulator.eic-jp.org/articles/global-energy" },
          { name: "欧州電力危機の教訓と日本への示唆" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/global-energy" className="underline-offset-2 hover:underline">海外拠点・グローバルエネルギー</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">欧州電力危機の教訓と日本への示唆</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">欧州電力危機の教訓と日本への示唆｜2022年〜の価格変動分析</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">2022年ロシア・ウクライナ戦争を契機とした欧州電力危機の経緯と、日本企業にとっての教訓を整理します。エネルギー安全保障と電力コスト管理が経営課題となった今、欧州で何が起き、各国がどう対応し、そこから日本の法人ユーザーは何を学べるのかを体系的にまとめました。</p>
          <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-05-29" />
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">欧州電力危機の経緯</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2022年2月のロシア・ウクライナ戦争を契機に、ロシア産ガスへの依存度が高かった欧州では電力・ガス価格が急騰しました。ピーク時のドイツ電力先物は1MWhあたり700ユーロ超（平時の5〜10倍）に達し、産業競争力への打撃となりました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">その後、LNG代替調達・需要抑制・原発延命などの対策で2024年には平時水準まで低下しましたが、構造的な価格上昇圧力は残っています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">危機の起点を時系列で整理すると、まず2021年後半からガス在庫の低下と需要回復によって欧州のガス価格は既に上昇傾向にありました。そこに2022年の戦争が重なり、ロシアからのパイプライン供給（特にノルドストリーム経由）が段階的に縮小・停止したことで、欧州はガス供給を世界のLNGスポット市場に求めざるを得なくなりました。これがアジア・欧州間のLNG争奪を引き起こし、価格を世界規模で押し上げました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2022年夏には記録的な熱波と渇水が追い打ちをかけました。フランスでは原子炉の点検・補修が重なり稼働率が低下し、欧州大陸全体の水力発電量も渇水で落ち込みました。供給力が削られる一方で冷房需要は高まり、卸電力価格は一段と高騰しました。エネルギー危機は単一の要因ではなく、地政学・気象・設備トラブルが複合した「複合危機」だった点を押さえることが重要です。</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left text-slate-700">
                    <th className="border border-slate-200 px-3 py-2">時期</th>
                    <th className="border border-slate-200 px-3 py-2">主な出来事</th>
                    <th className="border border-slate-200 px-3 py-2">価格・需給への影響(目安)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">2021年後半</td>
                    <td className="border border-slate-200 px-3 py-2">ガス在庫低下・コロナ後の需要回復</td>
                    <td className="border border-slate-200 px-3 py-2">ガス・電力価格が上昇局面に</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">2022年2月〜</td>
                    <td className="border border-slate-200 px-3 py-2">ウクライナ戦争開始、対ロ制裁</td>
                    <td className="border border-slate-200 px-3 py-2">ガス供給縮小、価格が急騰</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">2022年夏</td>
                    <td className="border border-slate-200 px-3 py-2">熱波・渇水・仏原発稼働低下</td>
                    <td className="border border-slate-200 px-3 py-2">電力先物がピーク（平時の5〜10倍）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">2022年冬〜2023</td>
                    <td className="border border-slate-200 px-3 py-2">需要抑制・LNG代替・暖冬</td>
                    <td className="border border-slate-200 px-3 py-2">価格はピークから低下</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">2024年〜</td>
                    <td className="border border-slate-200 px-3 py-2">供給網再編・在庫回復</td>
                    <td className="border border-slate-200 px-3 py-2">概ね平時水準へ、構造的圧力は残存</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">（出典: ENTSO-E / IEA「Electricity Market Report」等から整理・2025年時点。価格水準は時期・市場により幅があります）</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">なぜガス価格が電力価格を押し上げたのか（市場メカニズム）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">欧州の卸電力市場を理解する鍵は「メリットオーダー（限界費用順給電）」と「マージナルプライシング（限界価格決定）」です。市場では発電コストの低い電源から順に稼働させ、その時間帯の需要を満たす最後の1基の限界費用が、約定する全電源に適用される市場価格となります。需要ピーク時に最後に稼働するのは多くの場合ガス火力であるため、ガス価格が急騰すると、再エネや原子力が大量に動いていても市場価格全体が押し上げられます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">この仕組みは平時には効率的な資源配分をもたらしますが、燃料価格の外的ショックに対しては価格を増幅させる弱点を持ちます。欧州では危機の最中に「ガス価格と電力価格を切り離すべきか」という市場改革の議論が活発化し、価格上限（プライスキャップ）や容量市場の見直しなどが検討されました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本のJEPXスポット市場も同様に限界費用ベースで価格が決まるため、構造的には類似のリスクを抱えています。需給逼迫時にスポット価格が急騰する現象は、2021年初の寒波局面など国内でも実際に観測されています。市場連動型プランを利用する法人にとって、この価格形成メカニズムの理解はリスク管理の前提となります。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">危機の中で注目されたリスク</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①エネルギー依存の地政学的リスク：単一供給源への依存は危険。②スポット価格と長期契約の乖離：市場連動契約のリスクが顕在化。③産業の空洞化：電力コストが高い欧州から産業が流出、再エネ・政策支援で引戻しを試行中。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本も類似のリスクを抱えており、LNG輸入依存・市場連動プラン・産業競争力の観点で欧州の事例を学ぶ価値があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">産業空洞化のリスクは特に重く受け止められました。アルミ精錬・化学・肥料・ガラスといったエネルギー多消費型産業では、危機局面で減産・操業停止に追い込まれた工場が相次ぎました。これらは一度停止すると再稼働コストが高く、海外移転が進めば地域経済と雇用に長期的な打撃を与えます。電力コストが「単なる経費」ではなく「立地競争力そのもの」であることが改めて認識されました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">また、危機は新電力（独立系小売事業者）の経営リスクも露呈させました。卸価格が小売価格を上回る「逆ザヤ」が長期化し、欧州・日本ともに撤退・倒産する事業者が出ました。需要家側から見れば、契約先の事業継続性（カウンターパーティリスク）も調達戦略で考慮すべき要素になったといえます。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">日本企業への示唆</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①エネルギー調達先・調達形態の分散化、②長期契約（PPA）による価格ヘッジ、③需要抑制・自家発電での自立性確保、④地政学リスクの経営課題化、が欧州危機の教訓として挙げられます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2030年代に向けて、エネルギー安全保障と脱炭素の両立が企業戦略の中心課題になる可能性が高いです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">実務に落とし込むと、まず「自社の電力コストが原価・販管費に占める割合」を正確に把握することが出発点になります。電力コスト比率が高いほど、価格変動が利益に与える感応度（センシティビティ）が大きくなるためです。次に、契約の固定・変動の比率を意識的に設計し、全量を市場連動にする・全量を固定にするといった極端な構成を避け、リスク分散を図ります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">さらに、複数年度の予算編成では電力単価を1点の見込みで置くのではなく、楽観・標準・悲観の3シナリオを用意することが推奨されます。欧州危機のような外的ショックは「いつか起こり得る前提」で計画に織り込み、悲観シナリオでも事業が継続できる耐性を確認しておくことが、結果的に経営の安定につながります。電気料金の変動が自社にどの程度効くかは、当サイトの<Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金上昇リスクシミュレーター</Link>でも目安を試算できます。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">欧州主要国の危機対応策（学ぶべき点）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【ドイツ】産業向け電気代補助金（Strompreisbremse）、原発稼働延長、LNG端末急造。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【フランス】原発比率維持、家庭・企業向け価格凍結措置（Bouclier Tarifaire）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【英国】Energy Bill Relief Scheme、事業者向け6ヶ月支援。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【北欧諸国】再エネ・水力の豊富さで危機の影響を相対的に抑制。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本も2022〜2023年に電気・ガス価格激変緩和対策事業を実施。予算規模は累計3兆円超。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">各国の対応を比較すると、対策の「重心」がそれぞれ異なることがわかります。ドイツは供給側（端末整備・原発延命）と需要側（価格上限）の両面、フランスは原子力という自国電源の強みを生かした価格凍結、英国は期間を区切った緊急支援が中心でした。北欧は構造的に再エネ・水力比率が高く、そもそも危機の影響を受けにくい「電源構成の強さ」を体現しました。</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left text-slate-700">
                    <th className="border border-slate-200 px-3 py-2">国・地域</th>
                    <th className="border border-slate-200 px-3 py-2">主な対応の重心</th>
                    <th className="border border-slate-200 px-3 py-2">日本への示唆</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">ドイツ</td>
                    <td className="border border-slate-200 px-3 py-2">価格上限＋原発延命＋LNG端末</td>
                    <td className="border border-slate-200 px-3 py-2">供給・需要の両輪で備える</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">フランス</td>
                    <td className="border border-slate-200 px-3 py-2">原子力比率を背景に価格凍結</td>
                    <td className="border border-slate-200 px-3 py-2">自国電源の安定性が緩衝材に</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">英国</td>
                    <td className="border border-slate-200 px-3 py-2">期間限定の事業者向け緊急支援</td>
                    <td className="border border-slate-200 px-3 py-2">支援は時限的、自助努力が前提</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">北欧</td>
                    <td className="border border-slate-200 px-3 py-2">水力・再エネ中心の電源構成</td>
                    <td className="border border-slate-200 px-3 py-2">電源多様化が最大の防御策</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">日本</td>
                    <td className="border border-slate-200 px-3 py-2">需要家への直接値引き（激変緩和）</td>
                    <td className="border border-slate-200 px-3 py-2">補助は段階縮小、構造対策が課題</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">（出典: IEA / 各国政府・資源エネルギー庁 公表資料から整理・2025年時点）</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">日本の激変緩和事業と欧州支援策の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本の電気・ガス価格激変緩和対策事業は、小売事業者を通じて電気・ガス料金の単価から一定額を直接値引きする方式でした。電力では低圧・高圧で値引き単価が分かれ、kWhあたり数円程度の値引きが行われた時期があります。累計の予算規模は3兆円超とされ、家庭・法人を問わず幅広い需要家の負担を緩和する設計でした（出典: 資源エネルギー庁 公表資料から整理）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">欧州の支援策の多くが「価格上限」や「供給力確保」を軸にしていたのに対し、日本は「需要家への直接補助」に重心を置いた点が対照的です。直接値引きは効果が分かりやすく即効性が高い一方、価格シグナル（高いから節電するという市場の働き）を弱める副作用や、財政負担が大きいという課題も指摘されました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">いずれの国の措置も恒久的なものではなく、市況の落ち着きとともに段階的に縮小・終了する設計でした。これは法人ユーザーにとって重要な含意を持ちます。すなわち、補助に依存した低い電気料金は一時的なものであり、補助終了後に料金が「見かけ上」上昇することを前提に、中期の予算とコスト計画を立てておく必要があるということです。<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整制度の仕組み</Link>を理解しておくと、こうした料金変動の構造をより正確に読み解けます。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別の影響シナリオ（代表的な目安）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力価格の急騰がもたらす影響は業種によって大きく異なります。以下は危機型の価格上昇局面における代表的な影響イメージで、実際の数値は契約形態・自家発の有無・地域により幅があります。あくまでシナリオ例としてご覧ください。</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">製造業（電力多消費）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">電力が原価に占める比率が高く、価格急騰は利益率を直撃。減産・操業時間シフト・自家発活用が選択肢に。最も感応度が高い業種。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">データセンター</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">24時間高負荷でベースロード需要が大きく、電気料金が運営コストの大半を占める。PUE改善と再エネ長期調達が要。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">化学・素材</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">連続プロセスで停止コストが高く、価格高騰時も操業継続を迫られやすい。長期固定調達と省エネ投資の併用が有効。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">小売・物流倉庫</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">照明・冷蔵冷凍・空調が中心。拠点数が多く、全社で見ると影響が積み上がる。デマンド管理と高効率機器が効果的。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">オフィス・サービス業</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">電力コスト比率は相対的に低いが、固定費として効く。契約見直しと運用改善で着実にコスト低減が可能。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">食品・冷凍倉庫</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">温度管理で電力を止めにくく、価格高騰時の負担が重い。蓄電・蓄熱や夜間運転の活用でピーク負荷を平準化。</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">※上記は危機型シナリオでの代表的な影響イメージであり、特定企業の実績値ではありません。（整理: エネルギー情報センター・2025年時点）</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">企業が取れる具体的なリスク対策</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">欧州危機の教訓を踏まえ、日本の法人ユーザーが実務として取り得る対策を整理します。重要なのは単一の万能策に頼らず、複数の手段を組み合わせる「ポートフォリオ思考」です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"><span className="font-semibold text-slate-800">① 契約形態の分散：</span>固定型と市場連動型を併用し、価格変動エクスポージャーを管理する。全量を一方に寄せない。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"><span className="font-semibold text-slate-800">② コーポレートPPAの活用：</span>再エネ電源と長期固定価格で契約し、市場変動のヘッジと脱炭素を同時に進める。オンサイト型は自家消費で系統依存も下げられる。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"><span className="font-semibold text-slate-800">③ 自家発電・蓄電池：</span>太陽光自家発やコージェネ、蓄電池でピーク需要を削減し、需給逼迫時の調達依存を下げる。BCP（事業継続）にも資する。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"><span className="font-semibold text-slate-800">④ 省エネ・デマンド管理：</span>高効率機器への更新やデマンドレスポンスで使用量そのものを抑制。価格がいくら上がっても効く根本対策。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"><span className="font-semibold text-slate-800">⑤ 地政学リスクの経営課題化：</span>エネルギーを購買部門だけでなく経営アジェンダとして扱い、サプライチェーン全体のエネルギーリスクを定期的に評価する。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">欧州電力危機の詳細分析は、IEA「Electricity Market Report」、ENTSO-E（欧州送電系統運用者ネットワーク）公表資料で時系列で確認できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本の激変緩和対策事業の詳細は、資源エネルギー庁公式サイトで公表されています。卸電力価格の国内動向はJEPX（日本卸電力取引所）、需給状況はOCCTO（電力広域的運営推進機関）の公表データで確認できます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
          <div className="mt-3 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900 sm:text-base">Q. {item.question}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">IEA (国際エネルギー機関)</a></li>
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://pps-net.org/unit" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力ネット（電力単価・産業別エネルギー）</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。記載した価格水準・予算規模は公表レンジを整理した目安であり、特定時点・特定市場の確定値ではありません。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/global-energy-procurement-overview", title: "海外拠点の電力調達", description: "各国制度と価格水準" },
              { href: "/major-countries-electricity-price-comparison", title: "主要国電気料金比較", description: "日本・米国・欧州・東南アジア" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整制度の仕組み", description: "国際市況が電気料金に反映される構造" },
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/global-energy", title: "海外拠点・グローバルエネルギー", description: "このカテゴリの記事一覧を見る" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算する" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="このテーマの理解を深めたら、シミュレーターで自社の電気料金リスクを確認しましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/global-energy", label: "海外拠点・グローバルエネルギーの他の記事を読む" },
            ]}
          />
        </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

      </main>
    </>
  );
}
