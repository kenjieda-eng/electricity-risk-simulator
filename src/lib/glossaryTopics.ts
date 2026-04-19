/** 用語集(cat28)のトピック別グルーピング */

export type GlossaryTopic =
  | "contract"
  | "market"
  | "equipment"
  | "rate"
  | "renewable"
  | "decarbonization"
  | "bcp"
  | "ev"
  | "dx"
  | "regulation"
  | "global"
  | "demand";

export type GlossaryTopicGroup = {
  topic: GlossaryTopic;
  label: string;
  description: string;
  slugs: string[];
};

export const GLOSSARY_TOPIC_GROUPS: GlossaryTopicGroup[] = [
  {
    topic: "contract",
    label: "契約関連",
    description: "契約電力・基本料金・デマンド・力率など、契約書と請求書で繰り返し登場する用語。",
    slugs: ["glossary-contract-terms", "high-voltage-glossary", "low-voltage-glossary"],
  },
  {
    topic: "demand",
    label: "デマンド・需要",
    description: "30分値・最大需要・力率・契約電力の決定方式など、デマンド管理に関わる用語。",
    slugs: ["demand-power-glossary"],
  },
  {
    topic: "rate",
    label: "料金制度",
    description: "燃料費調整額・再エネ賦課金・託送料金・容量拠出金など、請求書に登場する制度用語。",
    slugs: ["rate-structure-glossary"],
  },
  {
    topic: "market",
    label: "電力市場",
    description: "JEPX・スポット・先渡し・先物・容量市場・需給調整市場など、卸売・市場関連の用語。",
    slugs: ["glossary-market-terms", "supply-demand-planning-glossary"],
  },
  {
    topic: "equipment",
    label: "電気設備",
    description: "キュービクル・PAS・受変電設備など、高圧・低圧を扱う設備関連の用語。",
    slugs: ["glossary-equipment-terms"],
  },
  {
    topic: "renewable",
    label: "再生可能エネルギー",
    description: "FIT・FIP・非化石証書・J-クレジット・PPA・GO・I-RECなど、再エネ調達・証書関連の用語。",
    slugs: ["renewable-energy-glossary", "renewable-detail-glossary"],
  },
  {
    topic: "decarbonization",
    label: "脱炭素・GX",
    description: "カーボンプライシング・SBT・TCFD・ISSB・GX-ETSなど、脱炭素開示・制度関連の用語。",
    slugs: ["decarbonization-glossary"],
  },
  {
    topic: "bcp",
    label: "BCP・非常用電源",
    description: "UPS・コジェネ・マイクログリッド・自立運転など、事業継続と非常用電源の用語。",
    slugs: ["energy-bcp-glossary"],
  },
  {
    topic: "ev",
    label: "EV・充電インフラ",
    description: "CHAdeMO・OCPP・V2H・急速充電など、EV充電設備と規格関連の用語。",
    slugs: ["ev-charging-glossary"],
  },
  {
    topic: "dx",
    label: "エネマネ・DX",
    description: "BEMS・FEMS・SCADA・EnOceanなど、エネルギーマネジメントと通信プロトコル関連の用語。",
    slugs: ["energy-management-glossary"],
  },
  {
    topic: "regulation",
    label: "制度・政策",
    description: "電力自由化・容量市場・需給調整市場・省エネ法など、制度改革と政策関連の用語。",
    slugs: ["regulation-policy-glossary"],
  },
  {
    topic: "global",
    label: "国際エネルギー",
    description: "LNG・OPEC・Brent・Henry Hubなど、国際エネルギー市場と燃料指標の用語。",
    slugs: ["international-energy-glossary"],
  },
];
