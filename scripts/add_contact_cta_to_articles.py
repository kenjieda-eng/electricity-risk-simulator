"""Add ContactCtaCard to all article-like pages under src/app/*/page.tsx.

Rules:
- Skip non-article directories (admin, api, articles hub, benchmark, journey, etc.)
- Skip files that already contain ContactCtaCard
- Add import after the last top-level import line
- Insert <ContactCtaCard .../> as the final block inside </main>
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "src" / "app"

SKIP_DIRS = {
    "admin",
    "api",
    "articles",
    "benchmark",
    "business-electricity-retrospective",
    "by-role",
    "compare",
    "concierge",
    "contact",
    "data-freshness",
    "data-visualizations",
    "how-to",
    "simulate",
    "special",
    "_components",
}

CTA_SNIPPET = """      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>
"""

IMPORT_LINE = (
    'import ContactCtaCard from "../../components/contact/ContactCtaCard";\n'
)


def patch(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if "ContactCtaCard" in text:
        return False
    if "</main>" not in text:
        return False

    # Add import after the last import statement at the top.
    lines = text.splitlines(keepends=True)
    last_import_idx = -1
    for idx, line in enumerate(lines):
        if line.startswith("import ") and ";" in line:
            last_import_idx = idx
        elif last_import_idx >= 0 and not line.strip().startswith("//"):
            # After seeing imports, first non-import/non-comment line
            # Break once we leave the import header area.
            if line.strip() and not line.startswith("import"):
                break
    if last_import_idx < 0:
        return False

    lines.insert(last_import_idx + 1, IMPORT_LINE)
    text = "".join(lines)

    # Insert CTA immediately before the final `</main>` in the file.
    main_close_re = re.compile(r"(\n)(\s*)</main>", flags=re.MULTILINE)
    matches = list(main_close_re.finditer(text))
    if not matches:
        return False
    last = matches[-1]
    insertion = CTA_SNIPPET
    text = text[: last.start()] + "\n" + insertion + text[last.start() :]

    path.write_text(text, encoding="utf-8")
    return True


def main() -> None:
    changed = 0
    skipped = 0
    for child in sorted(APP.iterdir()):
        if not child.is_dir():
            continue
        if child.name in SKIP_DIRS:
            continue
        if child.name.startswith("_") or child.name.startswith("("):
            continue
        if child.name.startswith("[") and child.name.endswith("]"):
            continue
        page = child / "page.tsx"
        if not page.exists():
            continue
        if patch(page):
            changed += 1
        else:
            skipped += 1
    print(f"Changed: {changed}  Skipped (already has CTA or no </main>): {skipped}")


if __name__ == "__main__":
    main()
