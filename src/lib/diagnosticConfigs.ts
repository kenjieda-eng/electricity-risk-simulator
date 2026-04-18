import type { ArticleCategorySlug } from "../data/articles";
import type { MiniDiagnosticProps } from "../components/diagnostics/MiniDiagnostic";

/** カテゴリ別の簡易診断ウィジェット設定 */
export const CATEGORY_DIAGNOSTICS: Partial<Record<ArticleCategorySlug, MiniDiagnosticProps>> = {
  "plan-types": {
    heading: "固定 vs 市場連動 簡易診断",
    intro: "4問で、固定プランと市場連動プランのどちらが向きやすいかを判定します。あくまで傾向チェックです。",
    questions: [
      {
        id: "q1",
        question: "電気代の予算ブレ許容度は？",
        choices: [
          { label: "年±5%以内に抑えたい", value: 0 },
          { label: "年±15%までなら許容", value: 2 },
          { label: "月次で大きく動いてもよい", value: 3 },
        ],
      },
      {
        id: "q2",
        question: "利益率は？",
        choices: [
          { label: "低マージン（5%未満）", value: 0 },
          { label: "中程度（5〜15%）", value: 2 },
          { label: "高マージン（15%超）", value: 3 },
        ],
      },
      {
        id: "q3",
        question: "電気代の経営会議での説明頻度は？",
        choices: [
          { label: "毎月の予実差を細かく説明する", value: 0 },
          { label: "四半期で俯瞰的に報告", value: 2 },
          { label: "年次で大きく把握", value: 3 },
        ],
      },
      {
        id: "q4",
        question: "市場スパイク時の上振れ耐性は？",
        choices: [
          { label: "月額2倍の請求は絶対避けたい", value: 0 },
          { label: "短期なら吸収できる", value: 2 },
          { label: "年単位で平均化して判断", value: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        label: "固定プラン寄り（予算重視）",
        description: "単価ブレの許容度が低く、安定性を重視する姿勢です。燃調上限ありの固定プランや、期間2〜3年の固定契約を第一候補に検討しましょう。",
        cta: { href: "/fixed-price-plan", label: "固定プランの詳細を見る" },
      },
      {
        minScore: 6,
        label: "ハイブリッド検討（条件次第）",
        description: "中間的な姿勢です。固定ベース＋一部市場連動（ハイブリッド）や、燃調上限付きの固定プランを比較するのが良いでしょう。",
        cta: { href: "/hybrid-electricity-plan-explained", label: "ハイブリッドプランの詳細を見る" },
      },
      {
        minScore: 10,
        label: "市場連動も選択肢",
        description: "価格変動への耐性があり、長期平均でのコスト最適化を重視できる姿勢です。市場連動プランも候補に入れつつ、ピーク時対策を併せて設計しましょう。",
        cta: { href: "/market-linked-plan", label: "市場連動プランの詳細を見る" },
      },
    ],
  },

  "last-resort-supply": {
    heading: "最終保障供給該当チェック（3問）",
    intro: "3問で、最終保障供給への切替リスクが高いかを簡易判定します。",
    questions: [
      {
        id: "q1",
        question: "現在の契約状況は？",
        choices: [
          { label: "新電力と通常契約中", value: 0 },
          { label: "新電力から撤退・解約通知を受けている", value: 3 },
          { label: "既に最終保障供給に移行済み", value: 4 },
        ],
      },
      {
        id: "q2",
        question: "契約更新期限までの猶予は？",
        choices: [
          { label: "6か月以上", value: 0 },
          { label: "1〜3か月", value: 2 },
          { label: "1か月未満 or 過ぎた", value: 3 },
        ],
      },
      {
        id: "q3",
        question: "他社見積の取得状況は？",
        choices: [
          { label: "3社以上取得済み", value: 0 },
          { label: "1〜2社のみ", value: 2 },
          { label: "まだ未着手", value: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        label: "リスク低（通常モード）",
        description: "当面のリスクは低い状況です。契約更新期限を管理しつつ、通常の見直しフローで進めましょう。",
        cta: { href: "/articles/review-points", label: "見直しポイントを確認する" },
      },
      {
        minScore: 4,
        label: "注意（早期着手推奨）",
        description: "新電力の経営状況や更新期限を踏まえると、早めの見積比較着手が望ましい状況です。",
        cta: { href: "/articles/review-points", label: "見直し手順を確認する" },
      },
      {
        minScore: 7,
        label: "高リスク（緊急対応）",
        description: "最終保障供給への移行リスクが高い、または既に該当しています。緊急対応カテゴリの初動フローを確認してください。",
        cta: { href: "/articles/emergency-response", label: "緊急対応の初動を確認する" },
      },
    ],
  },

  "diagnostic-tools": {
    heading: "契約見直し必要度 セルフチェック（5問）",
    intro: "5問で、今すぐ契約見直しに着手すべきかを判定します。",
    questions: [
      {
        id: "q1",
        question: "最後に契約を見直したのは？",
        choices: [
          { label: "1年以内", value: 0 },
          { label: "2〜3年前", value: 2 },
          { label: "4年以上前 / 不明", value: 3 },
        ],
      },
      {
        id: "q2",
        question: "直近の値上げ通知は？",
        choices: [
          { label: "なし", value: 0 },
          { label: "1回だけ受領", value: 1 },
          { label: "複数回 / 直近受領", value: 3 },
        ],
      },
      {
        id: "q3",
        question: "他社見積の取得状況は？",
        choices: [
          { label: "3社以上取得済み", value: 0 },
          { label: "1〜2社", value: 2 },
          { label: "未取得", value: 3 },
        ],
      },
      {
        id: "q4",
        question: "使用量の変化は？",
        choices: [
          { label: "ほぼ変わらず", value: 0 },
          { label: "±10〜20%程度", value: 2 },
          { label: "±30%超 / 拠点変更あり", value: 3 },
        ],
      },
      {
        id: "q5",
        question: "業種相場との比較は？",
        choices: [
          { label: "相場と同等以下", value: 0 },
          { label: "未確認", value: 2 },
          { label: "相場より明らかに高い", value: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        label: "当面は維持でOK（低優先）",
        description: "大きなリスクは見当たりません。継続監視と更新期限管理に注力しましょう。",
        cta: { href: "/articles/basic", label: "基礎を整理する" },
      },
      {
        minScore: 6,
        label: "要検討（中優先）",
        description: "いくつか見直しの着手理由があります。比較準備から進めると効果が出やすい状況です。",
        cta: { href: "/articles/review-points", label: "見直しポイントを見る" },
      },
      {
        minScore: 11,
        label: "至急見直し推奨（高優先）",
        description: "複数の観点で見直し機会があります。Step 1〜4 の流れで速やかに着手しましょう。",
        cta: { href: "/compare", label: "料金メニューを比較する" },
      },
    ],
  },

  "corporate-ppa": {
    heading: "自社に向くPPA形態 簡易診断（4問）",
    intro: "4問で、オンサイト/オフサイト/バーチャル/自家消費のうち、検討に適した形態を判定します。",
    questions: [
      {
        id: "q1",
        question: "自社敷地内に太陽光設置スペースは？",
        choices: [
          { label: "十分ある（屋根・遊休地）", value: 3 },
          { label: "一部あり", value: 2 },
          { label: "ほぼない", value: 0 },
        ],
      },
      {
        id: "q2",
        question: "必要な再エネ電力規模は？",
        choices: [
          { label: "数百kW規模", value: 1 },
          { label: "数MW規模", value: 2 },
          { label: "10MW以上", value: 3 },
        ],
      },
      {
        id: "q3",
        question: "Scope2開示の重要度は？",
        choices: [
          { label: "まだ開示要件なし", value: 0 },
          { label: "任意開示で十分", value: 1 },
          { label: "CDP/SBT/RE100等で必須", value: 3 },
        ],
      },
      {
        id: "q4",
        question: "契約期間のコミット許容度は？",
        choices: [
          { label: "5年以内に抑えたい", value: 0 },
          { label: "10年程度なら可", value: 2 },
          { label: "15〜20年でもコミット可", value: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        label: "まずは非化石証書・再エネメニュー",
        description: "PPAよりも、非化石証書購入や小売の再エネメニュー活用が先行候補です。設備・期間コミットが不要で柔軟性が高い選択肢です。",
        cta: { href: "/non-fossil-certificates", label: "非化石証書の詳細を見る" },
      },
      {
        minScore: 4,
        label: "オンサイトPPA or 自家消費太陽光",
        description: "敷地・規模の条件から、オンサイトPPAや自家消費太陽光が有力です。託送料不要で経済性が出やすい形態です。",
        cta: { href: "/corporate-ppa-overview", label: "PPAの全体像を見る" },
      },
      {
        minScore: 7,
        label: "オフサイトPPA or バーチャルPPA",
        description: "規模・開示要件・コミット期間から、オフサイトPPA（フィジカル）やバーチャルPPAが候補です。長期コミットと環境価値確保の両立を目指せます。",
        cta: { href: "/virtual-ppa-explained", label: "バーチャルPPAの詳細を見る" },
      },
    ],
  },

  "energy-bcp": {
    heading: "電力BCP成熟度チェック（4問）",
    intro: "4問で、現状のBCP成熟度を3段階で判定します。",
    questions: [
      {
        id: "q1",
        question: "必要電力量の算定状況は？",
        choices: [
          { label: "算定済み（最低必要kWを把握）", value: 0 },
          { label: "部分的に把握", value: 2 },
          { label: "未着手", value: 3 },
        ],
      },
      {
        id: "q2",
        question: "非常用電源の整備状況は？",
        choices: [
          { label: "UPS＋発電機＋蓄電池の多重構成", value: 0 },
          { label: "UPS + 発電機 のみ", value: 2 },
          { label: "非常用電源なし", value: 3 },
        ],
      },
      {
        id: "q3",
        question: "BCP訓練の実施頻度は？",
        choices: [
          { label: "年1回以上", value: 0 },
          { label: "数年に1回", value: 2 },
          { label: "実施していない", value: 3 },
        ],
      },
      {
        id: "q4",
        question: "新電力撤退リスクへの備えは？",
        choices: [
          { label: "代替先を常時把握", value: 0 },
          { label: "依頼先を一度検討済み", value: 2 },
          { label: "未検討", value: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 0,
        label: "成熟度高（継続運用フェーズ）",
        description: "基礎設計は整っています。訓練の頻度維持、最新制度（レジリエンス補助金等）の追随が次の課題です。",
        cta: { href: "/articles/subsidies", label: "活用できる補助金を見る" },
      },
      {
        minScore: 5,
        label: "成熟度中（補強フェーズ）",
        description: "部分的に整備済みですが、多重化・訓練・代替調達の面で補強余地があります。BCPチェックリストで抜け漏れを確認しましょう。",
        cta: { href: "/downloads", label: "BCPチェックリストをDL" },
      },
      {
        minScore: 9,
        label: "成熟度低（設計フェーズ）",
        description: "基礎から設計が必要です。必要電力量の算定→電源構成の比較→投資判断の順に進めましょう。",
        cta: { href: "/energy-bcp-overview", label: "BCP概論を読む" },
      },
    ],
  },
};
