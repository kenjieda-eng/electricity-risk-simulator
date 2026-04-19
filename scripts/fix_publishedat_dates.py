"""Normalize publishedAt fields in src/data/articles.ts.

Per TASK_PUBLISHEDAT_DATE_FIX.md, the site was launched on 2026-03-01 but
a number of articles still carry pre-launch publishedAt values (2025-*,
2026-01-*, 2026-02-*). Those dates get emitted into ArticleJsonLd's
datePublished and can make Google treat otherwise fresh content as stale.

Rule:
  2025-xx-xx  -> 2026-03-01
  2026-01-xx  -> 2026-03-01
  2026-02-xx  -> 2026-03-01
  2026-03-xx+ -> unchanged
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TARGET = ROOT / "src" / "data" / "articles.ts"
LAUNCH = "2026-03-01"

text = TARGET.read_text(encoding="utf-8")

pattern = re.compile(r'publishedAt:\s*"(\d{4}-\d{2}-\d{2})"')

rewrites = 0
untouched = 0


def repl(match: re.Match) -> str:
    global rewrites, untouched
    date = match.group(1)
    if date.startswith("2025-") or date.startswith("2026-01-") or date.startswith("2026-02-"):
        rewrites += 1
        return f'publishedAt: "{LAUNCH}"'
    untouched += 1
    return match.group(0)


new_text = pattern.sub(repl, text)
TARGET.write_text(new_text, encoding="utf-8")

print(f"rewrote {rewrites} publishedAt entries -> {LAUNCH}")
print(f"left {untouched} entries unchanged (2026-03-xx or later)")
