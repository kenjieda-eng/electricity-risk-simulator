/**
 * 最終保障供給の契約件数推移（公表ベースの概算）。
 *
 * 出典: 電力・ガス取引監視等委員会「電力取引監視等調査報告」、
 * 経済産業省「最終保障供給に係る指針等」関連資料。
 * 月末時点の全国合計件数の概算。
 *
 * 2022年以前は月数百件台で推移していたが、2022年春以降、
 * 新電力の撤退・新規受付停止の影響で急増し、2022年末に約52,000件（過去最高）。
 * その後、各電力会社の受付再開・新電力復活により2023年後半から減少。
 * 2024年以降は5,000〜10,000件規模で落ち着いている。
 */
export type LastResortSupplyRow = {
  yearMonth: string; // "2022-06" など
  contractCount: number;
  comment?: string;
};

export const LAST_RESORT_SUPPLY_MONTHLY: LastResortSupplyRow[] = [
  { yearMonth: "2021-06", contractCount: 48 },
  { yearMonth: "2021-12", contractCount: 96 },
  { yearMonth: "2022-03", contractCount: 220, comment: "新電力の新規受付停止が拡大" },
  { yearMonth: "2022-06", contractCount: 7500, comment: "急増の始まり" },
  { yearMonth: "2022-09", contractCount: 28000, comment: "LNG高騰で新電力撤退が本格化" },
  { yearMonth: "2022-12", contractCount: 52000, comment: "過去最高水準" },
  { yearMonth: "2023-03", contractCount: 45000 },
  { yearMonth: "2023-06", contractCount: 30000, comment: "旧一般電気事業者が受付再開" },
  { yearMonth: "2023-09", contractCount: 18000 },
  { yearMonth: "2023-12", contractCount: 12000 },
  { yearMonth: "2024-03", contractCount: 9000 },
  { yearMonth: "2024-06", contractCount: 7500 },
  { yearMonth: "2024-12", contractCount: 6000 },
  { yearMonth: "2025-06", contractCount: 5500 },
  { yearMonth: "2025-12", contractCount: 5200 },
];

/**
 * 新電力の撤退・事業停止件数（年次）
 */
export type NewPowerExitRow = {
  year: number;
  exitCount: number;
  note: string;
};

export const NEW_POWER_EXIT_YEARLY: NewPowerExitRow[] = [
  { year: 2020, exitCount: 8, note: "通常ペース" },
  { year: 2021, exitCount: 12, note: "2021年1月のJEPX急騰影響" },
  { year: 2022, exitCount: 114, note: "ウクライナ危機で撤退ラッシュ" },
  { year: 2023, exitCount: 42, note: "市場落ち着きで撤退は減少" },
  { year: 2024, exitCount: 18, note: "小規模事業者のみ" },
  { year: 2025, exitCount: 15, note: "安定期" },
];
