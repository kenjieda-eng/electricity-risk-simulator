import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "電気料金の二重請求・過請求が発生したときの対応｜法人向け緊急対応ガイド";
const pageDescription =
  "電気料金に二重請求・過大請求が発生した場合の確認フローと対処法を解説。切替時の新旧両社からの二重請求、メーター誤差、契約電力の誤設定、調整費計算ミスなど原因別チェックリストと返金交渉のポイントをまとめます。";
const pageUrl = "https://simulator.eic-jp.org/emergency-billing-dispute";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 過請求 対応",
    "電気代 二重請求 法人",
    "電気料金 返金 交渉",
    "電力 請求 間違い",
    "メーター誤差 電気料金",
    "電力 ガス 取引監視委員会 相談",
  ],
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
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const confirmationSteps = [
  {
    num: "01",
    title: "過去3カ月の請求書と比較する（発見当日）",
    desc: "今月の請求書を過去3カ月分と比較し、金額・使用量・基本料金・燃調費・再エネ賦課金の各項目を照合する。急激な増加があった項目を特定することで原因の絞り込みが容易になる。",
  },
  {
    num: "02",
    title: "使用量データと照合する（発見当日〜翌日）",
    desc: "スマートメーターや電力会社のWebポータルで実際の使用量を確認する。請求書記載の使用量と実測値に乖離がある場合はメーター誤差・検針ミスが疑われる。",
  },
  {
    num: "03",
    title: "契約内容と請求内容を照合する（3日以内）",
    desc: "現在の契約書（契約電力・料金メニュー・適用単価）を取り出し、請求書と一致しているか確認する。契約電力の誤設定・料金単価の誤適用が過大請求の典型的原因。",
  },
  {
    num: "04",
    title: "二重請求の可能性を確認する（3日以内）",
    desc: "直近1年以内に電力会社を切り替えた場合、新旧両社から同一期間の請求が来ていないか確認する。切替月の請求は日割り計算となるため、両社の請求を合算した合計金額が正しいかを確認する。",
  },
  {
    num: "05",
    title: "電力会社に問い合わせて記録に残す（1週間以内）",
    desc: "電力会社の法人向け問い合わせ窓口に連絡し、過大請求の原因調査を依頼する。電話だけで終わらせず、必ずメール・書面で回答を求める。問い合わせ日時・担当者名・内容を必ず記録する。",
  },
];

const doubleChargePatterns = [
  {
    pattern: "切替月の新旧両社からの全額請求",
    cause: "旧電力会社が切替日以降の使用量も請求してしまうケース",
    action: "旧電力会社に切替日（検針日）を確認し、切替以降の分の取り消しを要求する。新電力会社の請求と合算して重複期間を特定する。",
  },
  {
    pattern: "検針日のずれによる二重請求",
    cause: "検針日と切替日が一致せず、同日分が両社に計上されるケース",
    action: "検針票・切替完了通知書を照合して正確な切替日を確認する。日割り計算が正しく行われているか確認する。",
  },
  {
    pattern: "解約後の基本料金請求",
    cause: "解約手続き後も翌月に基本料金が請求されるケース",
    action: "解約受付番号・解約完了通知書を根拠として取り消しを要求する。",
  },
];

const overchargeCauses = [
  { cause: "スマートメーターの計測誤差", check: "前年同月との使用量比較・設備の稼働変動と照合", action: "電力会社にメーター点検・交換を依頼する" },
  { cause: "手動検針の読み取りミス", check: "検針票の数値と請求書の使用量が一致しているか確認", action: "検針員の再訪問・再測定を要請する" },
  { cause: "契約電力の誤設定（高すぎる）", check: "デマンド計測値と契約電力を照合", action: "実使用デマンドに基づく契約電力の見直しを申請する" },
  { cause: "料金メニューの誤適用", check: "契約書記載のメニュー名と請求書の適用単価を照合", action: "正しいメニューへの訂正・差額返金を要求する" },
  { cause: "燃料費調整額の計算ミス", check: "電力会社公表の燃調単価と請求書の燃調額を手計算で確認", action: "計算根拠の開示と訂正を要求する" },
  { cause: "再エネ賦課金単価の誤適用", check: "経済産業省公表の当年度賦課金単価と請求書を照合", action: "正しい単価での再計算・返金を要求する" },
  { cause: "割引・優待の未適用", check: "契約時の特典・割引条件と請求書の適用状況を確認", action: "契約書を根拠として遡及適用・差額返金を要求する" },
];

const inquiryTemplate = {
  subject: "電気料金の過大請求に関するお問い合わせ（契約番号：○○○○）",
  body: `お世話になっております。○○株式会社 施設管理部の○○と申します。

標記の件につきまして、下記のとおりお問い合わせいたします。

【問い合わせの概要】
・対象請求書：○○年○○月分
・請求金額：○○円
・相当と考える金額：○○円（根拠：○○）
・差額：○○円

【過大請求と判断した根拠】
1. 過去3カ月の平均請求額：○○円
2. 今月の使用量（スマートメーター実測値）：○○kWh
3. 請求書記載の使用量：○○kWh（差異：○○kWh）
4. ○○の計算に誤りがあると考えられます。

【対応のお願い】
1. 過大請求の原因調査をお願いいたします。
2. 調査結果を書面（メール可）にてご回答ください。
3. 過大請求が確認された場合は、次月請求での相殺または振込返金をお願いいたします。

お手数をおかけしますが、○○年○○月○○日（○）までにご回答をお願いいたします。
問い合わせ番号をお教えいただけますと幸いです。

以上、よろしくお願いいたします。`,
};

const ecomProcess = [
  { step: "1", title: "事前準備", detail: "請求書・契約書・問い合わせ記録・電力会社からの回答書を収集・整理する" },
  { step: "2", title: "ECOMへの相談申し込み", detail: "電話（03-3501-5725）またはWebフォームで相談を申し込む。状況を簡潔にまとめたメモを手元に準備する" },
  { step: "3", title: "ECOMからの助言受領", detail: "ECOMは基本的に当事者間の解決を促す立場。電力会社との交渉方法・主張すべき根拠についてアドバイスをもらう" },
  { step: "4", title: "電力会社への再交渉", detail: "ECOMへの相談内容・アドバイスを根拠に、電力会社に再度書面で解決を要求する" },
  { step: "5", title: "解決困難な場合", detail: "ECOMによる「あっせん」制度の利用を検討。または消費者庁・弁護士への相談を検討する" },
];

const refundNegotiationPoints = [
  { point: "書面で記録を残す", detail: "電話でのやり取りだけに頼らず、問い合わせ・回答・合意内容は必ずメール・書面で確認する。口頭での合意は後日「言った・言わない」になりやすい。" },
  { point: "根拠を数字で示す", detail: "「おかしい」と主張するだけでは交渉が進まない。正しいと考える金額・単価・計算根拠を具体的な数字で示すことで、電力会社の担当者が動きやすくなる。" },
  { point: "返金方法の選択肢を提示する", detail: "次月請求との相殺・銀行振込返金・デポジットへの充当など、複数の返金方法を提示すると合意が早まりやすい。" },
  { point: "期限を設定する", detail: "「○月○日までに回答をください」と期限を明示する。期限を設けないと対応が後回しになりがち。期限超過後はECOMへの相談を検討する旨も添えると交渉が進みやすい。" },
  { point: "遡及請求の時効に注意する", detail: "電気料金債権の消滅時効は原則2年（民法改正後は5年の場合も）。過去の過大請求を発見した場合は、時効が成立する前に速やかに請求する。" },
];

const faqs = [
  {
    q: "電力会社に過請求を問い合わせると、何日で返金されますか？",
    a: "原因の確認・調査期間を含め、通常2週間〜1カ月程度かかります。調査結果の書面受領後に返金方法（次月相殺・振込等）を合意し、実際の返金または相殺完了までさらに1カ月前後かかる場合があります。返金時期を問い合わせ時に明確に確認しておくことを推奨します。",
  },
  {
    q: "二重請求が発生した場合、どちらの電力会社に返金を求めるべきですか？",
    a: "一般的に、切替後の期間分を旧電力会社が誤って請求していた場合は旧電力会社に、新電力会社が切替前の期間を誤って請求していた場合は新電力会社に返金を求めます。まず両社の請求書を並べて重複期間を特定し、原因を確認してから請求先を決定してください。",
  },
  {
    q: "電力会社が「問題なし」と回答した場合はどうすればよいですか？",
    a: "回答に納得できない場合は、根拠を示した書面で再回答を要求してください。それでも解決しない場合は、電力・ガス取引監視等委員会（ECOM）に相談することができます。ECOMへの相談は費用無料で、電力会社との交渉の仲介・あっせんを行う制度があります。",
  },
  {
    q: "燃料費調整額の計算ミスはどのように確認できますか？",
    a: "電力会社は毎月の燃料費調整単価を公式Webサイトで公表しています。請求書記載の使用量に公表単価を乗じた金額と、請求書の燃調費を比較することで計算ミスを確認できます。単価の適用期間（月）も確認してください。",
  },
  {
    q: "過去の過大請求はどこまで遡って請求できますか？",
    a: "一般的な電気料金債権の消滅時効は2〜5年です（民法改正の適用時期・契約条件による）。過去の過大請求を発見した場合は、できるだけ早く請求することが重要です。ただし、電力会社側の請求権も同様に時効があります。不明な場合は弁護士に相談することを推奨します。",
  },
  {
    q: "契約電力が実使用より高く設定されていた場合、基本料金は返金されますか？",
    a: "契約電力の誤設定が電力会社側のミスによるものであれば、差額の返金が認められるケースがあります。自社の申告に基づき設定された場合は遡及返金が認められない場合もありますが、以後の契約電力の見直しは可能です。デマンド計測記録を根拠に電力会社に申請してください。",
  },
];

export default function EmergencyBillingDisputePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border-2 border-rose-300 bg-rose-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-rose-700">EMERGENCY ／ 緊急対応・トラブル解決</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電気料金の二重請求・過請求が発生したときの対応
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「先月より急に電気代が跳ね上がった」「電力会社を切り替えたら両社から請求が来た」——こうしたケースでは
          <strong>過大請求または二重請求が発生している可能性があります</strong>。このページでは、
          過請求発見時の5ステップ確認フロー、二重請求の典型パターンと対処法、原因別チェックリスト、電力会社への問い合わせテンプレート、
          監視等委員会への相談フロー、返金交渉のポイントまでを解説します。
        </p>
      </header>

      {/* STEP */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">過請求発見時の確認フロー（5ステップ）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          「おかしい」と気づいたら、まずこの5ステップで原因を絞り込んでください。
        </p>
        <ol className="mt-6 space-y-5">
          {confirmationSteps.map((s) => (
            <li key={s.num} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-rose-400 bg-rose-100 text-sm font-bold text-rose-700">
                {s.num}
              </div>
              <div className="border-l-2 border-rose-200 pl-4">
                <p className="font-semibold text-slate-900">{s.title}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 二重請求の典型パターン */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">二重請求の典型パターンと対処法</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          電力会社を切り替えた際に最も多く発生するパターンです。切替後1〜2カ月は請求書を特に注意して確認してください。
        </p>
        <div className="mt-4 space-y-3">
          {doubleChargePatterns.map((item, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">{i + 1}. {item.pattern}</p>
              <p className="mt-1 text-sm text-slate-600"><span className="font-semibold text-amber-700">原因：</span>{item.cause}</p>
              <p className="mt-1 text-sm leading-7 text-slate-700"><span className="font-semibold text-sky-700">対処：</span>{item.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 過大請求の原因別チェックリスト */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">過大請求の原因別チェックリスト</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          二重請求以外の過大請求の原因と、確認方法・対処法を整理しました。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">考えられる原因</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">確認方法</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">対処法</th>
              </tr>
            </thead>
            <tbody>
              {overchargeCauses.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{r.cause}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.check}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 電力会社への問い合わせテンプレート */}
      <section className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">電力会社への問い合わせテンプレート</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          電話だけではなく、以下のテンプレートをメールで送付し、書面での回答を求めてください。記録が後の交渉・相談の証拠になります。
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">件名: {inquiryTemplate.subject}</p>
          <pre className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">{inquiryTemplate.body}</pre>
        </div>
        <div className="mt-3 rounded-lg border border-amber-200 bg-white p-3">
          <p className="text-xs font-semibold text-slate-700">記録に残すべき事項（チェックリスト）</p>
          <ul className="mt-2 space-y-1 text-xs text-slate-600">
            <li className="flex items-start gap-2"><span className="text-amber-600">□</span><span>問い合わせ日時・手段（電話/メール/書面）</span></li>
            <li className="flex items-start gap-2"><span className="text-amber-600">□</span><span>対応した担当者の氏名・所属</span></li>
            <li className="flex items-start gap-2"><span className="text-amber-600">□</span><span>問い合わせ番号・受付番号</span></li>
            <li className="flex items-start gap-2"><span className="text-amber-600">□</span><span>電力会社からの回答内容（書面・メールで取得）</span></li>
            <li className="flex items-start gap-2"><span className="text-amber-600">□</span><span>返金・相殺の合意内容と予定日</span></li>
          </ul>
        </div>
      </section>

      {/* 監視等委員会への相談フロー */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電力・ガス取引監視等委員会（ECOM）への相談フロー</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          電力会社との交渉が行き詰まった場合は、第三者機関であるECOMへの相談を検討してください。
        </p>
        <div className="mt-4 space-y-3">
          {ecomProcess.map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                {item.step}
              </div>
              <div className="border-l-2 border-sky-200 pl-4">
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-sky-800">ECOM相談窓口</p>
          <p className="mt-1">電話：03-3501-5725（平日9:00〜18:00）</p>
          <p>Webフォーム：
            <Link href="https://www.ecom-hpf.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力・ガス取引監視等委員会 公式サイト
            </Link>
          </p>
        </div>
      </section>

      {/* 返金交渉のポイント */}
      <section className="mt-6 rounded-xl border-2 border-rose-300 bg-rose-50 p-5">
        <h2 className="text-xl font-semibold text-rose-900">返金交渉のポイント</h2>
        <p className="mt-2 text-sm text-rose-800">
          交渉を有利に進めるための5つのポイントです。感情的にならず、事実と数字で主張することが重要です。
        </p>
        <ul className="mt-4 space-y-3">
          {refundNegotiationPoints.map((item, i) => (
            <li key={i} className="rounded-lg border border-rose-200 bg-white p-4">
              <p className="font-semibold text-rose-700">{i + 1}. {item.point}</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Q. {faq.q}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">A. {faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/emergency-price-increase-notice",
              title: "値上げ通知が届いたらまずやる7つのこと",
              description: "電力会社から値上げ通知が届いたときの7ステップ対応ガイド。",
            },
            {
              href: "/emergency-supplier-bankruptcy",
              title: "電力会社が倒産・事業撤退したときの対応",
              description: "新電力の倒産・廃業通知を受けた場合の初動から切替先選定まで。",
            },
            {
              href: "/emergency-power-outage-response",
              title: "停電・計画停電が発生したときの法人対応マニュアル",
              description: "停電発生時の初動から復電手順・BCP連携まで体系的に解説。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは何か",
              description: "毎月変動する燃調費の仕組みと請求書での確認方法を解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="電気料金の現状を正確に把握する"
          description="過大請求の可能性を確認しながら、シミュレーターで適正なコスト水準を把握しましょう。疑問点は専門家への無料相談もご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで現状診断する" },
            { href: "/how-to", label: "シミュレーターの使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="emergency-billing-dispute" />
      </div>
    </main>
  );
}
