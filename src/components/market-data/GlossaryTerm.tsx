"use client";

import { useState } from "react";

const TERMS: Record<string, { definition: string; href?: string }> = {
  "JEPX": { definition: "日本卸電力取引所。電力小売事業者が30分単位で電力を売買する市場。スポット市場価格は市場連動プランの単価基礎となる。", href: "/articles/glossary" },
  "Scope2": { definition: "購入した電力・熱・蒸気に由来する間接的な温室効果ガス排出量。Location-basedとMarket-basedの2基準で算定。", href: "/scope2-electricity-accounting" },
  "Scope3": { definition: "サプライチェーン上の間接排出量。15カテゴリに分類され、調達先や顧客の排出も含む。", href: "/articles/decarbonization" },
  "RE100": { definition: "事業活動で使用する電力を100%再エネで賄うことを目指す国際イニシアチブ。", href: "/re100-overview-for-business" },
  "PPA": { definition: "電力購入契約（Power Purchase Agreement）。発電事業者と需要家が長期契約で電力を直接取引する仕組み。", href: "/corporate-ppa-overview" },
  "BEMS": { definition: "ビルエネルギーマネジメントシステム。ビル単位で電力消費を最適化するシステム。", href: "/bems-fems-ems-overview" },
  "FEMS": { definition: "ファクトリーエネルギーマネジメントシステム。工場全体の電力管理システム。", href: "/bems-fems-ems-overview" },
  "デマンド": { definition: "30分平均使用電力。月間最大デマンドが翌12ヶ月の契約電力（=基本料金）を決める。", href: "/contract-demand-what-is-it" },
  "契約電力": { definition: "電力会社と取り決めた最大需要電力。基本料金の単価×契約電力で月額基本料金が決まる。", href: "/contract-demand-what-is-it" },
  "kWh": { definition: "キロワット時。1kWを1時間使った電力量。請求書の使用量料金はkWh×単価で計算。" },
  "kW": { definition: "キロワット。瞬時電力（仕事率）の単位。基本料金はkW×単価で計算。" },
  "kVA": { definition: "キロボルトアンペア。皮相電力。無効電力を含む電力で、kW÷力率で算出。" },
  "GX-ETS": { definition: "GXリーグ排出量取引制度。2026年度から本格稼働。年間10万t-CO2以上の事業者が対象。", href: "/gx-ets-impact-business-electricity" },
  "FIT": { definition: "固定価格買取制度。再エネ電力を一定期間・一定単価で電力会社が買取る制度。2012年開始。" },
  "FIP": { definition: "Feed-in Premium。市場価格にプレミアムを上乗せして再エネ事業者を支援する制度。2023年開始。" },
  "OCCTO": { definition: "電力広域的運営推進機関。需給バランス調整・容量市場運営・連系線管理を担う認可法人。" },
  "託送料金": { definition: "送配電網を使う対価として一般送配電事業者に支払う料金。レベニューキャップ制度で5年単位に改定。" },
  "容量市場": { definition: "将来の供給力（発電所）を確保するための市場。2024年度から実供給開始。" },
  "需給ひっ迫": { definition: "電力の需要に対して供給予備力が逼迫している状態。警報・注意報がOCCTOから発令される。" },
  "最終保障供給": { definition: "一般送配電事業者が、小売事業者と契約できない需要家に最終的に供給する仕組み。標準料金の1.2倍が基本。", href: "/articles/last-resort-supply" },
  "燃料費調整": { definition: "原油・LNG・石炭の輸入価格変動を電気料金に反映する制度。3ヶ月平均で月次更新。", href: "/fuel-cost-adjustment" },
  "再エネ賦課金": { definition: "FIT制度の財源として、すべての電気使用者がkWhあたり負担する賦課金。2026年度3.98円/kWh。", href: "/renewable-energy-surcharge" },
  "非化石証書": { definition: "発電時のCO2排出がない電源を分離して取引する証書。Scope2 Market-basedで活用。" },
  "PUE": { definition: "Power Usage Effectiveness。データセンターの電力使用効率。総電力÷IT機器電力で算出。", href: "/datacenter-cooling-optimization" },
};

type Props = { term: string; children?: React.ReactNode };

export default function GlossaryTerm({ term, children }: Props) {
  const [open, setOpen] = useState(false);
  const def = TERMS[term];
  if (!def) return <>{children ?? term}</>;

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="cursor-help underline decoration-dotted decoration-sky-500 underline-offset-2 hover:text-sky-700"
      >
        {children ?? term}
      </button>
      {open && (
        <span className="absolute bottom-full left-0 z-10 mb-2 w-72 rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-700 shadow-lg">
          <strong className="text-sky-700">{term}</strong>: {def.definition}
          {def.href && (
            <a href={def.href} className="ml-1 text-sky-700 underline">→詳細</a>
          )}
        </span>
      )}
    </span>
  );
}

export function GlossaryDefinedTermJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "電気事業・脱炭素 用語集",
    hasDefinedTerm: Object.entries(TERMS).map(([term, info]) => ({
      "@type": "DefinedTerm",
      name: term,
      description: info.definition,
      ...(info.href ? { url: `https://simulator.eic-jp.org${info.href}` } : {}),
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
