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
    slugs: ["low-voltage-glossary"],
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
    slugs: ["supply-demand-planning-glossary"],
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
    topic: "ev",
    label: "EV・充電インフラ",
    description: "CHAdeMO・OCPP・V2H・急速充電など、EV充電設備と規格関連の用語。",
    slugs: ["ev-charging-glossary"],
  },
];
