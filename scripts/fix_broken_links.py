"""Fix broken internal links detected by check-links.mjs."""

from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "src" / "app"

REPLACEMENTS = {
    '"/jepx-price-trends"': '"/jepx-price-trend-and-corporate-impact"',
    "'/jepx-price-trends'": "'/jepx-price-trend-and-corporate-impact'",
    '"/electricity-bill-breakdown"': '"/business-electricity-bill-breakdown"',
    "'/electricity-bill-breakdown'": "'/business-electricity-bill-breakdown'",
    '"/why-business-electricity-bills-keep-rising"': '"/why-business-electricity-prices-rise"',
    "'/why-business-electricity-bills-keep-rising'": "'/why-business-electricity-prices-rise'",
    '"/solar-self-consumption-for-business"': '"/self-consumption-solar-cost-benefit"',
    "'/solar-self-consumption-for-business'": "'/self-consumption-solar-cost-benefit'",
    '"/electricity-voltage-contract-types"': '"/electricity-price-by-voltage-type"',
    "'/electricity-voltage-contract-types'": "'/electricity-price-by-voltage-type'",
    '"/battery-consideration-for-business"': '"/battery-suited-corporations"',
    "'/battery-consideration-for-business'": "'/battery-suited-corporations'",
    '"/capacity-contribution"': '"/capacity-contribution-explained"',
    "'/capacity-contribution'": "'/capacity-contribution-explained'",
    '"/electricity-price-history-2022"': '"/electricity-price-trend-2019-2025"',
    "'/electricity-price-history-2022'": "'/electricity-price-trend-2019-2025'",
    '"/last-resort-supply-what-it-is"': '"/articles/last-resort-supply"',
    "'/last-resort-supply-what-it-is'": "'/articles/last-resort-supply'",
    '"/last-resort-supply-risk"': '"/articles/last-resort-supply"',
    "'/last-resort-supply-risk'": "'/articles/last-resort-supply'",
}


def main() -> None:
    changed = 0
    for ts in ROOT.glob("src/**/*.tsx"):
        text = ts.read_text(encoding="utf-8")
        new = text
        for k, v in REPLACEMENTS.items():
            new = new.replace(k, v)
        if new != text:
            ts.write_text(new, encoding="utf-8")
            changed += 1
    print(f"Changed: {changed}")


if __name__ == "__main__":
    main()
