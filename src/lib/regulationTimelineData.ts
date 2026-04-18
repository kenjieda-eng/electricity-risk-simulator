/** 制度改正タイムライン(cat30)のビジュアル年表データ */

export type RegulationImpact = "increase" | "decrease" | "neutral";

export type RegulationEvent = {
  year: number;
  month?: number;
  title: string;
  summary: string;
  impact: RegulationImpact;
  target: string;
  relatedSlug?: string;
};

export const REGULATION_TIMELINE_EVENTS: RegulationEvent[] = [
  {
    year: 2000,
    title: "電力小売部分自由化（特別高圧）",
    summary: "2000年3月、特別高圧（2,000kW以上）の需要家で小売自由化がスタート。",
    impact: "neutral",
    target: "特別高圧需要家",
  },
  {
    year: 2004,
    title: "高圧の一部自由化（500kW以上）",
    summary: "自由化対象が500kW以上の高圧需要家に拡大。",
    impact: "neutral",
    target: "高圧需要家",
  },
  {
    year: 2005,
    title: "高圧全面（50kW以上）自由化",
    summary: "50kW以上の高圧需要家で自由化完了。新電力の小売参入が本格化。",
    impact: "decrease",
    target: "高圧需要家",
  },
  {
    year: 2012,
    month: 7,
    title: "固定価格買取制度（FIT）開始",
    summary: "再エネ賦課金制度スタート。以後、電気料金への上乗せが続く。",
    impact: "increase",
    target: "全需要家",
    relatedSlug: "renewable-energy-surcharge",
  },
  {
    year: 2016,
    month: 4,
    title: "電力小売全面自由化（低圧含む）",
    summary: "家庭・低圧事業所を含む全面自由化が実施され、新電力の参入と競争が加速。",
    impact: "decrease",
    target: "全需要家",
  },
  {
    year: 2020,
    month: 4,
    title: "発送電分離・送配電の中立化",
    summary: "法的分離により、大手電力会社の送配電部門が別会社化。託送制度の透明性が向上。",
    impact: "neutral",
    target: "全需要家",
  },
  {
    year: 2020,
    month: 7,
    title: "容量市場メインオークション初回",
    summary: "2024年度受渡分の初回オークション実施。将来の容量確保のための市場が始動。",
    impact: "increase",
    target: "全需要家",
    relatedSlug: "capacity-contribution-explained",
  },
  {
    year: 2021,
    month: 4,
    title: "需給調整市場の段階開設",
    summary: "三次調整力②から段階的に市場開設開始。2024年度の全商品取引へ。",
    impact: "increase",
    target: "全需要家",
  },
  {
    year: 2022,
    month: 1,
    title: "JEPX価格高騰・新電力撤退の連鎖",
    summary: "LNG価格高騰とロシア・ウクライナ情勢で市場価格が記録的に上昇。新電力の撤退・倒産が相次ぐ。",
    impact: "increase",
    target: "全需要家",
    relatedSlug: "market-price-adjustment-history",
  },
  {
    year: 2023,
    month: 1,
    title: "電気・ガス価格激変緩和対策事業（補助金）開始",
    summary: "値引き単価が請求書に反映される形で電気代負担を緩和。2024年5月以降段階的縮小。",
    impact: "decrease",
    target: "全需要家",
    relatedSlug: "impact-of-electricity-subsidy-ending",
  },
  {
    year: 2023,
    month: 10,
    title: "インボイス制度開始",
    summary: "適格請求書発行事業者の登録番号が電気代請求書にも明記。免税事業者からの仕入税額控除に制限。",
    impact: "neutral",
    target: "全事業者",
    relatedSlug: "invoice-system-electricity",
  },
  {
    year: 2024,
    month: 4,
    title: "容量市場 本格稼働（受渡開始）",
    summary: "2020年落札分の受渡開始。法人需要家の請求書に容量拠出金相当が反映開始。",
    impact: "increase",
    target: "高圧・特別高圧",
    relatedSlug: "capacity-contribution-cost-impact",
  },
  {
    year: 2024,
    month: 4,
    title: "託送料金制度 レベニューキャップ方式へ移行",
    summary: "送配電事業者の収入上限を事前設定する方式に移行。託送料金の透明性向上と調整的な変動。",
    impact: "neutral",
    target: "全需要家",
    relatedSlug: "wheeling-charge-revenue-cap-timeline",
  },
  {
    year: 2025,
    month: 4,
    title: "再エネ賦課金が過去最高水準",
    summary: "賦課金単価が3.98円/kWhと過去最高を更新。大口需要家の負担が大きく上振れ。",
    impact: "increase",
    target: "全需要家",
    relatedSlug: "renewable-surcharge-reform-timeline",
  },
  {
    year: 2026,
    month: 4,
    title: "GX-ETS 本格稼働（排出量取引）",
    summary: "GX推進法に基づく排出量取引が本格稼働。電力会社の調達コストを通じて法人料金に波及。",
    impact: "increase",
    target: "電力多消費業種中心",
    relatedSlug: "gx-ets-impact-business-electricity",
  },
  {
    year: 2026,
    title: "省エネ法 非化石転換義務報告の本格化",
    summary: "非化石エネルギー転換に関する定期報告が本格化。特定事業者の開示項目が増加。",
    impact: "neutral",
    target: "特定事業者",
    relatedSlug: "energy-saving-act-revision-timeline",
  },
  {
    year: 2027,
    title: "有償オークション（GX-ETS第2フェーズ）開始予定",
    summary: "排出枠の一部有償化開始予定。電力多消費業種への影響が段階的に拡大。",
    impact: "increase",
    target: "電力多消費業種中心",
    relatedSlug: "gx-promotion-act-roadmap",
  },
];
