export type PowerProcurementStage = "初級" | "中級" | "応用";

export type PowerProcurementSeriesItem = {
  order: number;
  slug: string;
  title: string;
  summary: string;
  stage: PowerProcurementStage;
};

export const POWER_PROCUREMENT_SERIES: PowerProcurementSeriesItem[] = [
  {
    order: 1,
    slug: "how-electricity-is-procured",
    title: "電気はどこから来るのか｜電力会社の仕入れの全体像",
    summary:
      "自社発電、市場調達、相対契約、再エネ調達などを並べて見ながら、電力会社の仕入れが複数手段の組み合わせで成り立つことを整理します。",
    stage: "初級",
  },
  {
    order: 2,
    slug: "jepx-explained",
    title: "JEPXとは何か｜卸電力市場の仕組み",
    summary:
      "卸電力市場の役割、一日前市場と時間前市場の使い方、調達全体の中でJEPXが担う位置づけを確認します。",
    stage: "初級",
  },
  {
    order: 3,
    slug: "how-electricity-prices-are-determined",
    title: "電気の価格はどう決まるのか｜JEPX価格の決まり方",
    summary:
      "価格が時間帯、天候、燃料価格、需給逼迫、系統制約でどう動くかを、公開データを交えて整理します。",
    stage: "初級",
  },
  {
    order: 4,
    slug: "bilateral-power-contracts",
    title: "相対契約とは何か｜市場に依存しない仕入れの考え方",
    summary:
      "市場調達と対比しながら、個別契約で数量や価格条件を持つ意味と、柔軟性とのトレードオフを見ていきます。",
    stage: "中級",
  },
  {
    order: 5,
    slug: "long-term-power-procurement",
    title: "長期契約とは何か｜安定調達のために期間を長く取る考え方",
    summary:
      "将来の数量や価格を一定期間押さえる長期契約が、安定調達と予見性の確保にどう効くかを整理します。",
    stage: "中級",
  },
  {
    order: 6,
    slug: "power-futures",
    title: "先物取引とは何か｜将来の価格を先に固定する仕組み",
    summary:
      "現物の受け渡しとは分けて、将来価格の変動に備えるヘッジ手段としての先物の役割を確認します。",
    stage: "中級",
  },
  {
    order: 7,
    slug: "fuel-procurement-and-electricity-prices",
    title: "燃料調達と電力調達はどうつながっているのか｜LNG・石炭・原油価格の影響",
    summary:
      "火力発電の燃料調達が、JEPX価格や小売の調達環境へどのように波及するのかを燃料別に読み解きます。",
    stage: "中級",
  },
  {
    order: 8,
    slug: "renewable-power-procurement",
    title: "再エネ電気はどう調達しているのか｜FIT・FIP・PPA・相対契約の考え方",
    summary:
      "再エネ電気の仕入れ方ごとに、価格の持ち方、数量の安定性、制度との関係がどう違うかを整理します。",
    stage: "応用",
  },
  {
    order: 9,
    slug: "non-fossil-certificates",
    title: "非化石証書とは何か｜再エネ価値をどう確保するのか",
    summary:
      "電気そのものと環境価値を切り分けて、非化石証書が再エネメニューや高度化法対応でどう使われるかを整理します。",
    stage: "応用",
  },
  {
    order: 10,
    slug: "power-risk-management",
    title: "電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方",
    summary:
      "価格、数量、燃料、制度変更などのリスクを、複数の調達手段の組み合わせでどう管理するかをまとめます。",
    stage: "応用",
  },
];

export function getPowerProcurementSeriesItem(slug: string) {
  return POWER_PROCUREMENT_SERIES.find((item) => item.slug === slug);
}

export function getPowerProcurementSeriesNeighbors(slug: string) {
  const currentIndex = POWER_PROCUREMENT_SERIES.findIndex((item) => item.slug === slug);
  if (currentIndex === -1) {
    return {
      previous: undefined,
      next: undefined,
    };
  }

  return {
    previous: currentIndex > 0 ? POWER_PROCUREMENT_SERIES[currentIndex - 1] : undefined,
    next: currentIndex < POWER_PROCUREMENT_SERIES.length - 1 ? POWER_PROCUREMENT_SERIES[currentIndex + 1] : undefined,
  };
}
