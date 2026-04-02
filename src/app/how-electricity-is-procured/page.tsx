import type { Metadata } from "next";
import Link from "next/link";
import PowerProcurementSeriesNav from "../../components/articles/PowerProcurementSeriesNav";
import ContentCta from "../../components/simulator/ContentCta";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気はどこから来るのか｜電力会社の仕入れの全体像";
const pageDescription =
  "電力会社は、自社発電だけでなく、JEPX、相対契約、長期契約、再エネ調達など複数の手段を組み合わせて電気を仕入れています。電気料金の背景を理解する前提として、電力調達の全体像を法人向けに整理します。";
const pageUrl = "https://simulator.eic-jp.org/how-electricity-is-procured";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "電気はどこから来るのか",
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

export default function HowElectricityIsProcuredPage() {
  const procurementRows = [
    {
      method: "自社発電",
      secure: "ベースとなる供給量",
      strength: "発電原価と運転計画を自社で持ちやすい",
      weakness: "設備停止や燃料制約の影響を受ける",
      scene: "一定量の基礎供給を自前で持ちたいとき",
    },
    {
      method: "JEPX調達",
      secure: "不足分や短期の調整量",
      strength: "需給のずれに機動的に対応しやすい",
      weakness: "価格変動を受けやすい",
      scene: "需要予測との差分や直前の調整が必要なとき",
    },
    {
      method: "相対契約",
      secure: "契約で決めた数量や価格条件",
      strength: "市場急変の影響を和らげやすい",
      weakness: "柔軟な見直しや過不足調整は別途必要になりやすい",
      scene: "市場依存を下げつつ、一定条件を持ちたいとき",
    },
    {
      method: "長期契約",
      secure: "中長期の数量見通しと価格の安定性",
      strength: "将来の調達条件を読みやすくしやすい",
      weakness: "相場下落時の追随や契約変更がしにくい",
      scene: "基礎需要に対して安定性を優先したいとき",
    },
    {
      method: "再エネ調達・証書",
      secure: "再エネ電気や環境価値",
      strength: "商品設計や環境価値の要件に対応しやすい",
      weakness: "物理電力と価値を分けて考える必要がある",
      scene: "再エネメニューや非化石価値を組み込みたいとき",
    },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気はどこから来るのか｜電力会社の仕入れの全体像
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向けの電気料金を考えるとき、使用量や契約メニューだけに目が向きがちです。ただ、その前段には、
          電力会社がどこから、どのような条件で電気を仕入れているかという調達構造があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社は、必要な電気をすべてその場で市場から買っているわけではありません。自社の発電設備でまかなう部分もあれば、
          卸電力市場から調達する部分もあり、相対契約や長期契約であらかじめ確保している量もあります。さらに、
          再エネ電気や環境価値の調達も加わるため、実際の仕入れは複数の手段を組み合わせた構造になります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">この記事で分かること</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電力会社の調達手段が一つではなく、役割の違う複数の手段で構成されること</li>
            <li>数量確保、価格安定、リスク分散の三つの視点で調達を整理できること</li>
            <li>調達構成の違いが料金メニューや商品設計の背景になること</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力会社はどこから電気を仕入れているのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            小売電気事業者の仕入れは、発電所から電気を受け取って終わる単純な構造ではありません。自社発電を持つ会社もあれば、
            発電事業者から契約で仕入れる会社もあり、不足分や需給見込みのずれをJEPXで調整することもあります。再エネメニューを扱う場合には、
            再エネ電気そのものと環境価値をどう確保するかも調達構造に入ってきます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このため、実務では「全部をその場で買う」のではなく、「一部は前もって押さえ、一部は市場で調整する」という考え方が一般的です。
            調達の組み立て方は小売会社ごとに異なり、その違いが料金の動き方や商品の出し方につながります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">代表的な調達手段の全体像</h2>
          <table className="mt-4 min-w-[920px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">調達手段</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">何を確保しやすいか</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">強み</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">弱み</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">向いている場面</th>
              </tr>
            </thead>
            <tbody>
              {procurementRows.map((row) => (
                <tr key={row.method} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.method}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.secure}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.strength}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.weakness}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.scene}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            一般的な整理です。実務では契約期間、価格式、受渡条件、環境価値の扱いなどで細かな差があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ一つの方法に絞らないのか</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            需要は日々ずれ、発電設備は止まることもあり、市場価格は短期間で大きく動くことがあります。どれか一つの調達手段に寄せると、
            その手段の弱みがそのまま経営リスクになりやすくなります。だからこそ、調達の現場では手段ごとの役割を分けて組み合わせます。
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <InfoBox title="数量確保">
              ベース需要をどこで押さえるか、直前の不足をどう埋めるかを分けて考えると、調達構造が見えやすくなります。
            </InfoBox>
            <InfoBox title="価格安定">
              市場価格の変動をそのまま受ける量と、事前に条件を持つ量を分けることで、料金設計の見通しを持ちやすくなります。
            </InfoBox>
            <InfoBox title="リスク分散">
              調達先、契約期間、価格の決まり方を分散させることで、需給逼迫や燃料高騰が一度に直撃しにくくなります。
            </InfoBox>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">数量確保・価格安定・リスク分散という三つの視点</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            調達構造を理解するときは、「どこから買うか」だけでなく、「何のためにその手段を使うか」で見る方が実務に近くなります。
            たとえば自社発電や長期契約は基礎量の確保に向きやすく、JEPXは不足分の調整に向きやすい、という具合です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ここを押さえておくと、「市場連動だから変動しやすい」「固定型だから急騰に強い」「再エネメニューでも環境価値の持ち方は別」など、
            個別の論点がつながって見えるようになります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">調達構造の違いが料金メニューの背景になる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            小売会社ごとに、どこまで自社電源を持つか、どれだけ相対契約を厚くするか、市場依存度をどこまで許容するかは異なります。
            その違いは、固定型を出しやすいか、市場連動型を中心にするか、再エネメニューをどう設計するかに影響します。
          </p>
          <InfoBox title="見積比較で読み替えたいポイント">
            見積書に調達ポートフォリオがそのまま書かれているとは限りませんが、単価の決まり方、調整項目、契約期間、再エネ価値の付け方には、
            背後の調達構造が反映されることがあります。
          </InfoBox>
        </section>

        <RelatedLinks
          heading="このカテゴリで順に見ていきたいこと"
          intro="まずは卸市場と価格形成を押さえると、その後の相対契約、長期契約、先物、再エネ調達の位置づけを追いやすくなります。"
          links={[
            {
              href: "/jepx-explained",
              title: "JEPXとは何か｜卸電力市場の仕組み",
              description: "卸市場が電力調達全体のどこに位置するかを確認します。",
            },
            {
              href: "/how-electricity-prices-are-determined",
              title: "電気の価格はどう決まるのか｜JEPX価格の決まり方",
              description: "市場価格が時間帯や需給状況で動く理由を整理します。",
            },
            {
              href: "/bilateral-power-contracts",
              title: "相対契約とは何か｜市場に依存しない仕入れの考え方",
              description: "市場以外の調達手段がなぜ必要かを掘り下げます。",
            },
            {
              href: "/power-risk-management",
              title: "電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方",
              description: "最後に各調達手段をどう組み合わせるかをまとめます。",
            },
            {
              href: "/articles/power-procurement",
              title: "電力調達の仕組みを知るカテゴリ一覧",
              description: "10本構成の読む順番をカテゴリページで確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="関連する料金メニューの見方へつなげる"
          description="調達の全体像を押さえたうえで料金メニューを見ると、単価だけでなく変動の受け方や条件差を読み取りやすくなります。"
          links={[
            { href: "/market-linked-vs-fixed", label: "市場連動と固定の違いを見る" },
            { href: "/how-to-compare-electricity-suppliers", label: "新電力比較のポイントを見る" },
            { href: "/articles/power-procurement", label: "カテゴリ一覧に戻る" },
          ]}
        />

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">参考にした公開情報</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>JEPX 公開市場データ・市場情報</li>
            <li>資源エネルギー庁の電力制度・再エネ制度の公開資料</li>
            <li>広域機関（OCCTO）の需給監視・供給計画関連資料</li>
          </ul>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            制度名称は2026年4月2日時点の公開情報ベースで確認しています。
          </p>
        </section>

        <PowerProcurementSeriesNav currentSlug="how-electricity-is-procured" />
      </section>
    </main>
  );
}
