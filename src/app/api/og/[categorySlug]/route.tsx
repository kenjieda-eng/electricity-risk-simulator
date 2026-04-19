import { ImageResponse } from "next/og";
import { articleCategories } from "../../../../data/articles";

export const runtime = "edge";

type CategoryTheme = {
  label: string;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
};

const THEMES: Record<string, CategoryTheme> = {
  basic: {
    label: "基礎から知る",
    backgroundColor: "#e0f2fe",
    borderColor: "#0284c7",
    textColor: "#0c4a6e",
    accentColor: "#0ea5e9",
  },
  "price-increase": {
    label: "料金が上がる理由を知る",
    backgroundColor: "#fef3c7",
    borderColor: "#d97706",
    textColor: "#78350f",
    accentColor: "#f59e0b",
  },
  "price-trends": {
    label: "電気料金の推移と高止まり",
    backgroundColor: "#f1f5f9",
    borderColor: "#475569",
    textColor: "#0f172a",
    accentColor: "#64748b",
  },
  "plan-types": {
    label: "契約メニューの違いを知る",
    backgroundColor: "#d1fae5",
    borderColor: "#059669",
    textColor: "#064e3b",
    accentColor: "#10b981",
  },
  "review-points": {
    label: "見直しポイントを知る",
    backgroundColor: "#ede9fe",
    borderColor: "#7c3aed",
    textColor: "#4c1d95",
    accentColor: "#8b5cf6",
  },
  "last-resort-supply": {
    label: "最終保障供給を知る",
    backgroundColor: "#fee2e2",
    borderColor: "#dc2626",
    textColor: "#7f1d1d",
    accentColor: "#ef4444",
  },
  "risk-scenarios": {
    label: "リスクシナリオ別に知る",
    backgroundColor: "#ffedd5",
    borderColor: "#ea580c",
    textColor: "#7c2d12",
    accentColor: "#f97316",
  },
  "power-procurement": {
    label: "電力調達の仕組みを知る",
    backgroundColor: "#dbeafe",
    borderColor: "#1d4ed8",
    textColor: "#1e3a8a",
    accentColor: "#3b82f6",
  },
  "monthly-review": {
    label: "法人電気料金振り返り",
    backgroundColor: "#e0e7ff",
    borderColor: "#4338ca",
    textColor: "#312e81",
    accentColor: "#6366f1",
  },
};

const FALLBACK: CategoryTheme = {
  label: "法人電気料金ナビ",
  backgroundColor: "#f1f5f9",
  borderColor: "#0ea5e9",
  textColor: "#0f172a",
  accentColor: "#0284c7",
};

type RouteContext = {
  params: Promise<{ categorySlug: string }>;
};

export async function GET(_req: Request, { params }: RouteContext) {
  const { categorySlug } = await params;
  const theme = THEMES[categorySlug] ?? FALLBACK;
  const category = articleCategories.find((c) => c.slug === categorySlug);
  const categoryLabel = category?.name ?? theme.label;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: theme.backgroundColor,
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: theme.accentColor,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              backgroundColor: theme.accentColor,
            }}
          />
          法人電気料金ナビ
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: "999px",
              backgroundColor: theme.borderColor,
              color: "#ffffff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {categoryLabel}
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: theme.textColor,
              lineHeight: 1.3,
            }}
          >
            電気料金リスクを、数値と図表で読み解く
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: theme.textColor,
            fontSize: 22,
            fontWeight: 500,
            borderTop: `3px solid ${theme.borderColor}`,
            paddingTop: "20px",
          }}
        >
          <span>simulator.eic-jp.org</span>
          <span>一般社団法人エネルギー情報センター</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
